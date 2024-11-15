<?php
/**
 * Plugin Name:       ONE PAGE CHECKOUT FOR WOOCOMMERCE
 * Plugin URI:        https://one-page-checkout.com/
 * Description:       Turn the product page into a checkout page by displaying checkout fields forms on a product page.
 * Version:           1.1.6
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            A.TOUFIK
 */

function woo_custom_add_to_cart( $cart_item_data ) {
    global $woocommerce;
    $woocommerce->cart->empty_cart();
    return $cart_item_data;
}
add_filter( 'woocommerce_add_cart_item_data', 'woo_custom_add_to_cart' );

add_action( 'woocommerce_checkout_after_order_review', 'second_place_order_button', 5 );
function second_place_order_button() {
    $order_button_text = apply_filters( 'woocommerce_order_button_text', __( "Place order", "woocommerce" ) );
    echo '<button type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="' . esc_attr( $order_button_text ) . '" data-value="' . esc_attr( $order_button_text ) . '">' . esc_html( $order_button_text ) . '</button>';
}

add_filter( 'woocommerce_order_button_text', 'woo_custom_order_button_text' ); 
function woo_custom_order_button_text() {
    return __( 'اطلب الان', 'woocommerce' ); 
}

add_action( 'init', 'woocommerce_clear_cart_url' );
function woocommerce_clear_cart_url() {
    global $woocommerce;
    if ($_SERVER['REQUEST_URI'] === '/') { 
        $woocommerce->cart->empty_cart(); 
    }
}

defined('ABSPATH') || exit;
class Allow_Only_one_Product_in_Cart_woocommerce {
    function __construct() {
        add_action( 'woocommerce_before_calculate_totals', array($this, 'wcaopc_keep_only_last_cart_item'), 30, 1 );
    }
    function wcaopc_keep_only_last_cart_item( $cart ) {
        if ( is_admin() && ! defined( 'DOING_AJAX' ) ) return;
        if ( did_action( 'woocommerce_before_calculate_totals' ) >= 2 ) return;
        $cart_items = $cart->get_cart();
        if( count($cart_items) > 1 ) {
            $cart_item_keys = array_keys( $cart_items );
            $cart->remove_cart_item( reset($cart_item_keys) );
        }
    }
}
$plugin = new Allow_Only_one_Product_in_Cart_woocommerce();

add_action( 'template_redirect', 'add_product_into_cart_when_visit_product_page' );
function add_product_into_cart_when_visit_product_page() {
    if ( class_exists('WooCommerce') ) {
        if ( is_product() ) {
            global $woocommerce;
            $quantity = 1;
            $woocommerce->cart->add_to_cart( get_the_ID(), $quantity );
        }
    } 
}

// Remove unnecessary fields from checkout and add Wilaya dropdown
add_filter( 'woocommerce_billing_fields', 'custom_override_checkout_fields' );
function custom_override_checkout_fields( $fields ) {
    unset($fields['billing_company']);         // Remove company name field
    unset($fields['billing_email']);           // Remove email field
    unset($fields['billing_postcode']);        // Remove postal code field
    unset($fields['billing_address_1']);       // Remove street name and number field
    unset($fields['billing_address_2']);       // Remove street name and number field
    unset($fields['billing_country']);         // Remove country field
    return $fields;
}

// Show the checkout form with quantity and size options
function display_checkout_fields() {
    if (is_product()) {
        global $woocommerce;

        // Display Quantity Field
        echo '<div class="quantity">'; 
        echo '<label for="product_quantity">' . __('Quantity', 'woocommerce') . ':</label>';
        echo '<input type="number" id="product_quantity" name="quantity" value="1" min="1" />';
        echo '</div>';

        // Display Size Selector
        $product = wc_get_product(get_the_ID());
        if ($product->is_type('variable')) {
            echo '<div class="size-selector">';
            echo '<label for="product_size">' . __('Size', 'woocommerce') . ':</label>';
            echo '<select id="product_size" name="size">';
            foreach ($product->get_available_variations() as $variation) {
                $size = $variation['attributes']['attribute_pa_size'] ?? ''; // Adjust attribute name if needed
                echo '<option value="' . esc_attr($variation['variation_id']) . '">' . esc_html($size) . '</option>';
            }
            echo '</select>';
            echo '</div>';
        }

        // Display the checkout form
        echo '<div id="customer_details">';
        echo do_shortcode('[woocommerce_checkout]');
        echo '</div>';
    }
}
add_action( 'woocommerce_after_add_to_cart_quantity', 'display_checkout_fields' );

function wp_css_custome() {
?>
    <style type="text/css">
        <?php echo get_option('css_field'); ?>

        /* Hide unnecessary elements */
        .ast-woocommerce-container .product .product_meta,
        .ast-woocommerce-container .product .single_add_to_cart_button {
            display: none;
        }

        /* Place Order button */
        #place_order {
            top: -74px;
        }

        /* Responsive adjustments */
        @media (max-width:700px) {
            #place_order {
                top: -58px;
                transform: translatex(0px) translatey(0px);
            }
        }

        button#place_order {
            width: 100%;
        }

        .woocommerce-billing-fields h3,
        #order_review,
        #order_review_heading,
        #customer_details .woocommerce-additional-fields,
        #ast-site-header-cart,
        #main .woocommerce-products-header {
            display: none;
        }

        /* Flexbox for element ordering */
        .woocommerce div.product form.cart {
            display: flex;
            flex-direction: column;
        }
        
        .woocommerce div.product form.cart .variations_form {
            order: 1; /* Sizes first */
            margin-bottom: 10px;
        }
        .woocommerce div.product form.cart .quantity {
            order: 2; /* Quantity second */
            margin-bottom: 10px;
        }
        #customer_details {
            order: 3; /* Form last */
            margin-top: 10px;
        }
    </style>
<?php
}
add_action('wp_head', 'wp_css_custome');
