<?php

/**
 * Plugin Name: WooEcom
 * Plugin URL: https://www.wooecom.com
 * Description: Instantly order item from the product page itself. No hassle of cart or checkout page. 
 * Version: 2.3.0
 * Update URI: https://api.freemius.com
 * Requires at least: 5.2
 * Requires PHP: 7.2
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Author: The WooEcom Team 
 * Author URI: https://www.wooecom.com
 * Text Domain: wooecom_text
 * Domain Path: /languages
 */
if ( !function_exists( 'wooecom_fs' ) ) {
    // Create a helper function for easy SDK access.
    function wooecom_fs() {
        global $wooecom_fs;
        if ( !isset( $wooecom_fs ) ) {
            // Include Freemius SDK.
            require_once dirname( __FILE__ ) . '/freemius/start.php';
            $wooecom_fs = fs_dynamic_init( array(
                'id'              => '14388',
                'slug'            => 'wooecom',
                'type'            => 'plugin',
                'public_key'      => 'pk_6cd9ededa86588f1f6321347b64d5',
                'is_premium'      => true,
                'is_premium_only' => true,
                'has_addons'      => false,
                'has_paid_plans'  => true,
                'menu'            => array(
                    'slug'    => 'wooecom-settings',
                    'contact' => false,
                    'support' => false,
                ),
                'is_live'         => true,
            ) );
        }
        return $wooecom_fs;
    }

    // Init Freemius.
    wooecom_fs();
    // Signal that SDK was initiated.
    do_action( 'wooecom_fs_loaded' );
}
if ( !defined( 'ABSPATH' ) ) {
    return;
}
include_once ABSPATH . 'wp-admin/includes/plugin.php';
if ( !is_plugin_active( 'woocommerce/woocommerce.php' ) ) {
    add_action( 'admin_notices', function () {
        printf( '<div class="notice notice-error"><p>WooCommerce plugin is required to use WooEcom plugin.</p></div>' );
    } );
    return;
}
if ( !wooecom_fs()->is_paying() ) {
    add_action( 'admin_notices', function () {
        printf( '<div class="notice notice-error"><p>Activate license key of WooEcom to use it. <a href="https://checkout.freemius.com/mode/dialog/plugin/14388/plan/24056/">Click Here</a></p></div>' );
    } );
    return;
}
define( 'wooecom_url', trailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'wooecom_path', trailingslashit( plugin_dir_path( __FILE__ ) ) );
require_once wooecom_path . 'inc/wooecom_functions.php';
class WooEcom {
    function __construct() {
        add_action( 'admin_menu', [$this, 'wooecom_settings_menu'] );
        add_action( 'init', [$this, 'wooecom_activator'] );
        add_action( 'admin_enqueue_scripts', [$this, 'wooecom_admin_scripts'] );
        add_action( 'wp_enqueue_scripts', [$this, 'wooecom_public_scripts'], 999 );
        add_action( 'woocommerce_single_product_summary', [$this, 'wooecom_single_product_summary'], 30 );
        add_action( 'wp_head', [$this, 'wooecom_dynamic_css'] );
        add_action( 'wp_ajax_wooecom_ajax_checkout', [$this, 'wooecom_ajax_checkout'] );
        add_action( 'wp_ajax_nopriv_wooecom_ajax_checkout', [$this, 'wooecom_ajax_checkout'] );
        add_action( 'wp_ajax_wooecom_update_shipping', [$this, 'wooecom_update_shipping'] );
        add_action( 'wp_ajax_nopriv_wooecom_update_shipping', [$this, 'wooecom_update_shipping'] );
        add_action( 'wp_ajax_wooecom_save_abandoned', [$this, 'wooecom_save_abandoned'] );
        add_action( 'wp_ajax_nopriv_wooecom_save_abandoned', [$this, 'wooecom_save_abandoned'] );
        // Modern UI Ajax
        add_action( 'wp_ajax_wooecom_modern_ui_get_variation', [$this, 'wooecom_modern_ui_get_variation'] );
        add_action( 'wp_ajax_nopriv_wooecom_modern_ui_get_variation', [$this, 'wooecom_modern_ui_get_variation'] );
        add_shortcode( 'wooecom_instant_order', [$this, 'wooecom_instant_order_form'] );
        add_action( 'elementor/widgets/register', [$this, 'wooecom_elementor_widgets'] );
        add_action( 'plugins_loaded', [$this, 'load_my_plugin_textdomain'] );
        add_action( 'wp_ajax_apply_coupon', array($this, 'apply_coupon') );
        add_action( 'wp_ajax_nopriv_apply_coupon', array($this, 'apply_coupon') );
        // add_action('woocommerce_add_order_item_meta',  array($this, 'add_custom_data_to_order_items'), 10, 3);
    }

    public function add_custom_data_to_order_items( $item_id, $values, $cart_item_key ) {
        $attributes = ( isset( $_POST['attributes'] ) ? $_POST['attributes'] : '' );
        if ( is_array( $attributes ) && isset( $attributes['pa_size'] ) ) {
            $size = $attributes['pa_size'];
            wc_add_order_item_meta( $item_id, 'pa_size', $size );
        }
    }

    function load_my_plugin_textdomain() {
        load_plugin_textdomain( 'wooecom_text', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
    }

    public function wooecom_public_scripts() {
        wp_enqueue_style(
            'wooecom_fa_css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
            array(),
            time(),
            'all'
        );
        wp_enqueue_style(
            'wooecom_public_css',
            wooecom_url . 'assets/style.css',
            array(),
            time(),
            'all'
        );
        wp_enqueue_script( 'jquery' );
        wp_enqueue_script(
            'wooecom_public_js',
            wooecom_url . 'assets/script.js',
            array(),
            time(),
            true
        );
        wp_localize_script( 'wooecom_public_js', 'wooecom_local', array(
            'ajax'           => admin_url( 'admin-ajax.php' ),
            'thankyou'       => get_option( 'wooecom_thankyou_url' ),
            'currency'       => get_woocommerce_currency_symbol(),
            'decimals'       => get_option( 'woocommerce_price_num_decimals' ),
            'separator'      => get_option( 'woocommerce_price_thousand_sep' ),
            'deci_separator' => get_option( 'woocommerce_price_decimal_sep' ),
            'currency_pos'   => get_option( 'woocommerce_currency_pos' ),
            'save_abandoned' => get_option( 'wooecom_save_abandoned' ),
            'modern_ui'      => get_option( 'wooecom_modern_ui' ),
            'str_free'       => __( 'Free', 'wooecom_text' ),
        ) );
        wp_enqueue_style(
            'toastr-css',
            'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css',
            array(),
            null
        );
        wp_enqueue_script(
            'toastr-js',
            'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js',
            array('jquery'),
            null,
            true
        );
    }

    public function wooecom_admin_scripts() {
        wp_enqueue_style(
            'wooecom_admin_css',
            wooecom_url . 'assets/admin.css',
            array(),
            time(),
            'all'
        );
        wp_enqueue_style(
            'wooecom_fa_css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
            array(),
            time(),
            'all'
        );
        wp_enqueue_script( 'jquery' );
        wp_enqueue_script(
            'wooecom_admin_js',
            wooecom_url . 'assets/admin.js',
            array(),
            time(),
            true
        );
        wp_localize_script( 'wooecom_admin_js', 'wooecom_local', array(
            'ajax' => admin_url( 'admin-ajax.php' ),
        ) );
    }

    // Modern UI ajax callback
    public function wooecom_modern_ui_get_variation() {
        $attributes = ( isset( $_POST['attributes'] ) ? $_POST['attributes'] : [] );
        $product_id = ( isset( $_POST['product_id'] ) ? $_POST['product_id'] : -1 );
        if ( !empty( $attributes ) && $product_id > -1 ) {
            $variation_id = $this->wooecom_get_matching_variation( $product_id, $attributes );
            if ( $variation_id ) {
                $variation = wc_get_product( $variation_id );
                $stock_quantity = $variation->get_stock_quantity();
                $in_stock = $variation->is_in_stock();
                if ( $stock_quantity > 0 || $in_stock ) {
                    // Return variation details including price, shipping, and stock information
                    wp_send_json( array(
                        'success'     => true,
                        'variation'   => $variation_id,
                        'price'       => $variation->get_price(),
                        'shipping_id' => $variation->get_shipping_class_id(),
                        'stock'       => $stock_quantity,
                    ) );
                } else {
                    // If no stock available, return a stock unavailable message
                    wp_send_json( array(
                        'success' => false,
                        'error'   => 'This option is out of stock. Please try a different option.',
                        'stock'   => 0,
                    ) );
                }
                // wp_send_json(array(
                //     'variation'   => $variation_id,
                //     'price'       => wc_get_product($variation_id)->get_price(),
                //     'shipping_id' => wc_get_product($variation_id)->get_shipping_class_id(),
                // ));
            }
        }
        wp_die();
    }

    // Get matching variation function
    function wooecom_get_matching_variation( $product_id, $attributes ) {
        $product = wc_get_product( $product_id );
        if ( !$product || $product->get_type() != 'variable' ) {
            return false;
        }
        // Get product variations;
        $variations = $product->get_available_variations();
        foreach ( $variations as $variation ) {
            $variation_attributes = $variation['attributes'];
            $match = true;
            foreach ( $attributes as $attribute_key => $attribute_val ) {
                if ( $variation_attributes['attribute_' . $attribute_key] !== $attribute_val && !empty( $variation_attributes['attribute_' . $attribute_key] ) ) {
                    $match = false;
                    break;
                }
            }
            // if variation match is equal to true then return variation ID ;
            if ( $match ) {
                return $variation['variation_id'];
            }
        }
        return false;
    }

    public function wooecom_elementor_widgets( $widgets_manager ) {
        require_once wooecom_path . 'inc/elementor/order-form.php';
        $widgets_manager->register( new \WooEcom_Order_Form() );
    }

    public function wooecom_single_product_summary() {
        echo do_shortcode( '[wooecom_instant_order]' );
    }

    public function wooecom_save_abandoned() {
        $phone = $_POST['phone'];
        $name = $_POST['name'];
        $product_id = $_POST['product_id'];
        if ( $phone != '' && $name != '' ) {
            $order = wc_create_order();
            $order_product = wc_get_product( $product_id );
            $order->add_product( $order_product, 1 );
            //Setting up address
            $billing = array(
                'first_name' => ( isset( explode( ' ', $name )[0] ) ? explode( ' ', $name )[0] : $name ),
                'last_name'  => ( isset( explode( ' ', $name )[1] ) ? explode( ' ', $name )[1] : '' ),
                'phone'      => $phone,
            );
            $shipping = array(
                'first_name' => ( isset( explode( ' ', $name )[0] ) ? explode( ' ', $name )[0] : $name ),
                'last_name'  => ( isset( explode( ' ', $name )[1] ) ? explode( ' ', $name )[1] : '' ),
                'phone'      => $phone,
            );
            $order->set_address( $billing, 'billing' );
            $order->set_address( $shipping, 'shipping' );
            $order->calculate_totals();
            $order->save();
            $order->update_status( 'pending' );
            wp_die();
        }
    }

    public function wooecom_update_shipping() {
        $zones = wooecom_get_shipping();
        $state = ( isset( $_POST['state'] ) ? $_POST['state'] : '' );
        $shipping_class_id = ( isset( $_POST['shipping_id'] ) ? $_POST['shipping_id'] : '' );
        if ( empty( $shipping_class_id ) && !empty( $_POST['variation_id'] ) ) {
            $product_id = $_POST['variation_id'];
            $product = wc_get_product( $product_id );
            if ( $product && $product->get_type() == "simple" ) {
                $shipping_class_id = $product->get_shipping_class_id();
            }
        }
        $zone_id = 0;
        foreach ( $zones as $zone ) {
            $locations = $zone->get_zone_locations();
            foreach ( $locations as $location ) {
                if ( $state !== '' ) {
                    if ( strpos( $location->code, $state ) > -1 || strpos( $state, $location->code ) > -1 ) {
                        $zone_id = $zone->get_id();
                        break;
                    }
                }
            }
        }
        $shipping_methods = array();
        foreach ( $zones as $zone ) {
            if ( $zone->get_id() == $zone_id ) {
                $methods = $zone->get_shipping_methods();
                foreach ( $methods as $method ) {
                    $data = $method->instance_settings;
                    if ( $method->id == 'flat_rate' ) {
                        $cost = 0;
                        $title = $method->title;
                        $id = $method->id . ':' . $method->instance_id;
                        if ( isset( $shipping_class_id ) && !empty( $shipping_class_id ) && isset( $data['class_cost_' . $shipping_class_id] ) ) {
                            $cost = $data['class_cost_' . $shipping_class_id];
                        } elseif ( isset( $shipping_class_id ) && empty( $shipping_class_id ) && isset( $data['no_class_cost'] ) && $data['no_class_cost'] > 0 ) {
                            $cost = $data['no_class_cost'];
                        } else {
                            $cost = $data['cost'];
                        }
                        $shipping_methods[] = array(
                            'cost'  => $cost,
                            'title' => $title,
                            'id'    => $id,
                        );
                    } elseif ( $method->id == 'free_shipping' ) {
                        $cost = 0;
                        $title = $method->title;
                        $id = $method->id . ':' . $method->instance_id;
                        $shipping_methods[] = array(
                            'cost'  => $cost,
                            'title' => $title,
                            'id'    => $id,
                        );
                    }
                }
                break;
            }
        }
        $shipping_html = '<ul class="wooecom_shipping_methods">';
        if ( !empty( $shipping_methods ) ) {
            foreach ( $shipping_methods as $item ) {
                $shipping_html .= '<li><label for="' . $item['id'] . '"><input id="' . $item['id'] . '" name="wooecom_shipping" type="radio" class="wooecom_shipping_method"  data-title = "' . $item['title'] . '" data-cost ="' . $item['cost'] . '"/><span>' . $item['title'] . '</span></label></li>';
            }
        } elseif ( $state == '' ) {
            $shipping_html .= '';
        } else {
            $shipping_html .= '<li>' . __( 'No shipping methods set', 'wooecom_text' ) . '</li>';
        }
        $shipping_html .= '</ul>';
        echo $shipping_html;
        die;
    }

    public function apply_coupon() {
        if ( !isset( $_POST['data']['coupon_code'] ) ) {
            wp_send_json_error( 'Coupon code is required.' );
        }
        $coupon_code = sanitize_text_field( $_POST['data']['coupon_code'] );
        $coupon = new WC_Coupon($coupon_code);
        if ( !$coupon->is_valid() ) {
            wp_send_json_error( array(
                'message' => 'Invalid coupon code.',
            ) );
        }
        // Check the type of coupon: percentage or fixed cart
        $coupon_type = $coupon->get_discount_type();
        // 'fixed_cart', 'percent', etc.
        $coupon_value = $coupon->get_amount();
        // Get the coupon value (either percentage or fixed amount)
        if ( $coupon_type === 'percent' ) {
            $discount_type = 'percentage';
        } elseif ( $coupon_type === 'fixed_cart' ) {
            $discount_type = 'fixed_cart';
        } else {
            $discount_type = 'other';
        }
        wp_send_json_success( array(
            'message' => "Coupon code applied",
            'type'    => $discount_type,
            'value'   => $coupon_value,
        ) );
        wp_die();
    }

    public function wooecom_ajax_checkout() {
        $coupon_code = ( isset( $_POST['coupon_code_name'] ) ? $_POST['coupon_code_name'] : '' );
        // Coupon code from the request
        $name = ( isset( $_POST['name'] ) ? $_POST['name'] : '' );
        $phone = ( isset( $_POST['phone'] ) ? $_POST['phone'] : '' );
        $state = ( isset( $_POST['state'] ) ? $_POST['state'] : '' );
        $city = ( isset( $_POST['city'] ) ? $_POST['city'] : '' );
        $address = ( isset( $_POST['address'] ) ? $_POST['address'] : '' );
        $qty = ( isset( $_POST['qty'] ) ? $_POST['qty'] : '' );
        $email = ( isset( $_POST['email'] ) ? $_POST['email'] : 'noreply@wooecom.com' );
        $additional = ( isset( $_POST['additional'] ) ? $_POST['additional'] : '' );
        $shipping_rate = ( isset( $_POST['shipping'] ) ? floatval( $_POST['shipping'] ) : '' );
        $product_id = ( isset( $_POST['product_id'] ) ? $_POST['product_id'] : '' );
        $product = wc_get_product( $product_id );
        $type = $product->get_type();
        $selected_attributes = [];
        $variation_id = ( isset( $_POST['variation_id'] ) ? $_POST['variation_id'] : '' );
        $ip = $_SERVER['REMOTE_ADDR'];
        $shipping_id = ( isset( $_POST['shipping_id'] ) ? $_POST['shipping_id'] : 0 );
        $shipping_title = ( isset( $_POST['shipping_title'] ) ? $_POST['shipping_title'] : __( 'Fixed Shipping', 'wooecom_text' ) );
        $order = wc_create_order();
        $order_product = ( $variation_id == '' ? $product : wc_get_product( $variation_id ) );
        $order->add_product( $order_product, $qty );
        //Setting up address
        $billing = array(
            'first_name' => ( isset( explode( ' ', $name )[0] ) ? explode( ' ', $name )[0] : $name ),
            'last_name'  => ( isset( explode( ' ', $name )[1] ) ? explode( ' ', $name )[1] : '' ),
            'company'    => '',
            'email'      => $email,
            'phone'      => $phone,
            'address_1'  => $address,
            'address_2'  => '',
            'city'       => $city,
            'state'      => $state,
            'postcode'   => '',
            'country'    => ( !is_array( $state ) ? explode( '-', $state )[0] : '' ),
        );
        $shipping = array(
            'first_name' => ( isset( explode( ' ', $name )[0] ) ? explode( ' ', $name )[0] : $name ),
            'last_name'  => ( isset( explode( ' ', $name )[1] ) ? explode( ' ', $name )[1] : '' ),
            'company'    => '',
            'email'      => $email,
            'phone'      => $phone,
            'address_1'  => $address,
            'address_2'  => '',
            'city'       => $city,
            'state'      => $state,
            'postcode'   => '',
            'country'    => ( !is_array( $state ) ? explode( '-', $state )[0] : '' ),
        );
        $shipping_class = new WC_Order_Item_Shipping();
        $shipping_class->set_method_title( $shipping_title );
        $shipping_class->set_method_id( $shipping_id );
        $shipping_class->set_total( $shipping_rate );
        $order->set_address( $billing, 'billing' );
        $order->set_address( $shipping, 'shipping' );
        $order->add_item( $shipping_class );
        $order->calculate_totals();
        $order->save();
        // echo '<pre>';
        // die(print_r($order));
        if ( !empty( $coupon_code ) ) {
            $coupon = new WC_Coupon($coupon_code);
            if ( $coupon->is_valid() ) {
                $discount_type = $coupon->get_discount_type();
                $discount_value = floatval( $coupon->get_amount() );
                $product_total = $order_product->get_price() * $qty;
                if ( $discount_type === 'percent' ) {
                    $discount = $product_total * ($discount_value / 100);
                    // Percentage discount
                } elseif ( $discount_type === 'fixed_cart' ) {
                    $discount = min( $discount_value, $product_total );
                    // Fixed discount
                }
                $fee = new WC_Order_Item_Fee();
                $fee->set_name( 'Discount (' . $coupon_code . ')' );
                $total_fee = -1 * $discount;
                $fee->set_total( $total_fee );
                $order->add_item( $fee );
                $order->calculate_totals();
                $order->save();
            }
        }
        $order->add_order_note( $additional );
        $order->update_status( 'processing' );
        $thankyou = $order->get_checkout_order_received_url();
        // **Set the cookie to prevent ordering within 24 hours**
        setcookie(
            'wooecom_order_limit',
            '1',
            time() + 86400,
            '/'
        );
        // 86400 seconds = 24 hours
        update_option( 'save_ip_' . $ip, time() );
        wp_send_json( array(
            'thank_you_page' => $thankyou,
        ) );
        wp_die();
    }

    public function wooecom_dynamic_css() {
        require_once wooecom_path . 'inc/wooecom_dynamic_css.php';
    }

    public function wooecom_instant_order_form( $atts ) {
        ob_start();
        $atts = shortcode_atts( array(
            'product_id' => get_the_ID(),
        ), $atts );
        $product = wc_get_product( $atts['product_id'] );
        $ip = $_SERVER['REMOTE_ADDR'];
        global $wpdb;
        // Get the current user's IP address
        $current_ip = $_SERVER['REMOTE_ADDR'];
        // Query the WooCommerce orders table to get the latest order by this IP
        $query = "\n            SELECT date_created_gmt\n            FROM {$wpdb->prefix}wc_orders\n            WHERE ip_address = %s\n            AND status IN ('wc-processing', 'wc-completed')\n            ORDER BY date_created_gmt DESC\n            LIMIT 1\n        ";
        $last_order_date = $wpdb->get_var( $wpdb->prepare( $query, $current_ip ) );
        $class = ( !$product->is_purchasable() || $product->get_stock_status() == 'outofstock' ? 'wooecom_disabled' : '' );
        $ip_block = '';
        if ( $last_order_date && get_option( 'wooecom_ip_protection' ) == 'yes' ) {
            $last_order_timestamp = strtotime( $last_order_date );
            if ( time() - $last_order_timestamp > 24 * 60 * 60 ) {
                $ip_block = "";
            } else {
                $ip_block = "ip_block";
            }
        }
        require_once wooecom_path . 'inc/wooecom_instant_order_form.php';
        return ob_get_clean();
    }

    public function wooecom_settings_menu() {
        add_menu_page(
            'WooEcom',
            'WooEcom',
            'manage_options',
            'wooecom-settings',
            [$this, 'wooecom_settings_html'],
            'dashicons-cart',
            null
        );
    }

    public function wooecom_settings_html() {
        require_once wooecom_path . 'inc/wooecom_settings.php';
    }

    public function wooecom_activator() {
        ( get_option( 'wooecom_info_title' ) == '' ? update_option( 'wooecom_info_title', __( 'No header text added', 'wooecom_text' ) ) : get_option( 'wooecom_info_title' ) );
        ( get_option( 'wooecom_name' ) == '' ? update_option( 'wooecom_name', __( 'Name', 'wooecom_text' ) ) : get_option( 'wooecom_name' ) );
        ( get_option( 'wooecom_phone' ) == '' ? update_option( 'wooecom_phone', __( 'Phone', 'wooecom_text' ) ) : get_option( 'wooecom_phone' ) );
        ( get_option( 'wooecom_email' ) == '' ? update_option( 'wooecom_email', __( 'Email', 'wooecom_text' ) ) : get_option( 'wooecom_email' ) );
        ( get_option( 'wooecom_additional' ) == '' ? update_option( 'wooecom_additional', __( 'Additional Information', 'wooecom_text' ) ) : get_option( 'wooecom_additional' ) );
        ( get_option( 'wooecom_state' ) == '' ? update_option( 'wooecom_state', __( 'State', 'wooecom_text' ) ) : get_option( 'wooecom_state' ) );
        ( get_option( 'wooecom_city' ) == '' ? update_option( 'wooecom_city', __( 'City', 'wooecom_text' ) ) : get_option( 'wooecom_city' ) );
        ( get_option( 'wooecom_address' ) == '' ? update_option( 'wooecom_address', __( 'Address', 'wooecom_text' ) ) : get_option( 'wooecom_address' ) );
        ( get_option( 'wooecom_checkout_btn' ) == '' ? update_option( 'wooecom_checkout_btn', __( 'Place Order', 'wooecom_text' ) ) : get_option( 'wooecom_checkout_btn' ) );
        ( get_option( 'wooecom_buy_now' ) == '' ? update_option( 'wooecom_buy_now', __( 'Buy Now', 'wooecom_text' ) ) : get_option( 'wooecom_buy_now' ) );
        ( get_option( 'wooecom_field_background' ) == '' ? update_option( 'wooecom_field_background', '#ffffff' ) : get_option( 'wooecom_field_background' ) );
        ( get_option( 'wooecom_total_price' ) == '' ? update_option( 'wooecom_total_price', '#000000' ) : get_option( 'wooecom_total_price' ) );
        ( get_option( 'wooecom_order_summary_bg' ) == '' ? update_option( 'wooecom_order_summary_bg', '#feecf5' ) : get_option( 'wooecom_order_summary_bg' ) );
        ( get_option( 'wooecom_button_color' ) == '' ? update_option( 'wooecom_button_color', '#b83375' ) : get_option( 'wooecom_button_color' ) );
        ( get_option( 'wooecom_background_color' ) == '' ? update_option( 'wooecom_background_color', '#fbfbfb' ) : get_option( 'wooecom_background_color' ) );
        ( get_option( 'wooecom_text_color' ) == '' ? update_option( 'wooecom_text_color', '#ffffff' ) : get_option( 'wooecom_text_color' ) );
        ( get_option( 'wooecom_order_summary_text' ) == '' ? update_option( 'wooecom_order_summary_text', '#b83375' ) : get_option( 'wooecom_order_summary_text' ) );
        ( get_option( 'wooecom_field_border' ) == '' ? update_option( 'wooecom_field_border', '#cc5000' ) : get_option( 'wooecom_field_border' ) );
    }

}

$ins_order = new WooEcom();