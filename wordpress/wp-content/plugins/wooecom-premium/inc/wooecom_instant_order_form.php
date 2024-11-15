<?php


$autocomplete = get_option('wooecom_autocomplete') == 'yes' ? 'autocomplete = "off"' : '';

$copy_paste = get_option('wooecom_copy_paste') == 'yes' ? 'onpaste="return false;" oncopy="return false; " oncut="return false"' : '';

$cookie_block = '';

if (isset($_COOKIE['wooecom_order_limit']) && get_option('wooecom_cookie_protection') == 'yes') {

    $cookie_block = ' cookie_block';
}
if (get_option('show_for_mobile_only') == "yes") {
    if (wp_is_mobile()) {

        $hide_form = "";
    } else {
        $hide_form = " form-hide-for-desktop";
    }
} else {
    $hide_form = "";
}



?>

<form class="wooecom_instant_order <?php echo $class . $ip_block . $cookie_block . $hide_form; ?>" id="wooecom_instant_order" method="post" <?php echo $autocomplete ?> <?php echo $copy_paste; ?>>

    <?php if (get_option('coupon_code') == "yes") { ?>
        <div class="coupon-field" style="">
            <div class="custom-coupon">
                <label for="coupon_code">Coupon Code:</label>
                <input type="text" id="coupon_code" name="coupon_code" placeholder="Enter your coupon code" />
            </div>
            <div class="custom-coupon-btn">
                <button type="button" id="apply_coupon">Apply</button>
            </div>


        </div>
    <?php } ?>
    <div class="wooecom_instant_order_form">

        <p class="wooecom_notice hidden"><?php echo __('You must insert the information form then send order', 'wooecom_text') ?></p>

        <p class="wooecom_information_title"><?php echo __(get_option('wooecom_info_title'), 'wooecom_text'); ?></p>

        <input type="text" name="wooecom_name" id="wooecom_name" placeholder="<?php echo __(get_option('wooecom_name'), 'wooecom_text'); ?>" required <?php echo $autocomplete; ?>>

        <input type="tel" name="wooecom_phone" id="wooecom_phone" <?php echo get_option('wooecom_phone_pattern') ? 'pattern="' . get_option('wooecom_phone_pattern') . '"' : 'pattern="[0-9]+"' ?> placeholder="<?php echo __(get_option('wooecom_phone'), 'wooecom_text'); ?>" required <?php echo $autocomplete; ?>>

        <?php if (get_option('wooecom_show_address') == 'no') : ?>

            <input type="text" name="wooecom_address" id="wooecom_address" placeholder="<?php echo __(get_option('wooecom_address'), 'wooecom_text'); ?>" required <?php echo $autocomplete; ?>>

        <?php endif; ?>



        <!-- State Field -->

        <?php if (get_option('wooecom_show_state') == 'yes') : ?>

            <?php

            wooecom_get_shipping();

            $states = WC()->countries->get_shipping_country_states();

            ?>

            <select name="wooecom_state" id="wooecom_state" placeholder="<?php echo __(get_option('wooecom_state'), 'wooecom_text'); ?>" required <?php echo $autocomplete; ?>>

                <option value=""><?php _e(get_option('wooecom_state'), 'wooecom_text') ?></option>

                <?php

                if (!empty($states)) {

                    foreach ($states as $state) {

                        foreach ($state as $key => $value) {

                            echo '<option value="' . $key . '">' . __($value, 'wooecom_text') . '</option>';
                        }
                    }
                }

                ?>

            </select>

        <?php endif; ?>



        <?php if (get_option('wooecom_show_city') == 'yes') : 
          do_action('wooecom_before_city')
      ?>
          <!-- <input type="text" name="wooecom_city" id="wooecom_city" placeholder="<?php echo __(get_option('wooecom_city'), 'wooecom_text'); ?>" required <?php echo $autocomplete; ?>>
          <style>
              #wooecom_address {
                  width: 100% !important;
              }
          </style> -->

        <?php endif; ?>



        <!-- Email Field -->

        <?php if (get_option('wooecom_show_email') != 'yes') : ?>

            <input type="email" name="wooecom_email" id="wooecom_email" placeholder="<?php echo __(get_option('wooecom_email'), 'wooecom_text'); ?>" required <?php echo $autocomplete; ?>>

        <?php endif; ?>



        <!-- Additional Information Field -->

        <?php if (get_option('wooecom_show_additional') != 'yes') : ?>

            <textarea name="wooecom_additional" id="wooecom_additional" cols="30" rows="6" placeholder="<?php echo __(get_option('wooecom_additional'), 'wooecom_text'); ?>" <?php echo $autocomplete; ?>></textarea>

        <?php endif; ?>



        <?php if ($product->get_type() == 'variable') : ?>

            <?php



            $variations = $product->get_available_variations();

            if (!empty($variations)) {

            ?>

                <ul class="wooecom_variations <?php echo get_option('wooecom_modern_ui') == 'yes' ? 'modern_ui' : ''; ?>">

                    <?php if (get_option('wooecom_modern_ui') == 'yes') : ?>

                        <?php

                        $attributes = $product->get_variation_attributes();



                        foreach ($attributes as $attributes_key => $attributes_value) {

                            // Get the attributes label 

                            $label = wc_attribute_label($attributes_key);

                            $label_class = strpos(strtolower($attributes_key), 'color') > -1 ? 'attr_color' : '';

                        ?>



                            <?php

                            echo '<li class="attribute_modern_ui">';

                            echo '<h4>' . __($label . ' :', 'wooecom_text') . '</h4>';



                            // Loop through each option

                            foreach ($attributes_value as $option) {

                                foreach ($variations as $variation) {
                                    // Get variation attributes
                                    $variation_attributes = $variation['attributes'];



                                    if ($variation_attributes['attribute_' . $attributes_key] == $option) {



                                        $variation_image = isset($variation['image']['gallery_thumbnail_src']) ? $variation['image']['gallery_thumbnail_src'] : "";
                                        $is_in_stock = $variation['is_in_stock'];
                                        break;
                                    }
                                }

                                $label_style = strpos(strtolower($attributes_key), 'color') > -1 ? 'style="background: ' . $option . '"' : '';

                                $option_label = get_term_by('slug', $option, str_replace('attribute_', '', $attributes_key));

                                $option_label = gettype($option_label) == 'object' && $option_label->name ? $option_label->name : '';

                            ?>

                                <div class="attribute_inner <?php echo $label_class; ?>">


                                    <input type="radio" data-image="<?php echo $variation_image; ?>" name="<?php echo esc_attr($attributes_key); ?>" value="<?php echo $option; ?>" id="<?php echo $option; ?>" class="attributes_selection" data-name="<?php echo $attributes_key ?>" />

                                    <label for="<?php echo $option ?>" <?php echo $label_style; ?>><?php echo __($option_label, 'wooecom_text'); ?></label>

                                </div>

                        <?php

                            }

                            echo '</li>';
                        }

                        $variation_id = 0;

                        ?>

                        <input data-shipping="" value="" data-price="<?php echo $product->get_price() ?>" type="radio" class="variation_selection" checked />

                        <input type="hidden" value="<?php echo $product->get_id(); ?>" id="wooecom_mui_product">

                    <?php else : ?>

                        <?php

                        foreach ($variations as $variation) :


                            $attributes = $variation['attributes'];

                            $attr_labels = [];

                            foreach ($attributes as $key => $value) {

                                $term = get_term_by('slug', $value, str_replace('attribute_', '', $key));

                                if (gettype($term) == 'object' && $term->name) {

                                    array_push($attr_labels, $term->name);
                                }
                            }

                            $variation_title = implode(', ', $attr_labels);

                            $variation_price = $variation['display_price'];

                            $variation_id = $variation['variation_id'];

                            $variation_shipping_class = wc_get_product($variation_id)->get_shipping_class_id();

                            $regular_price = $variation['display_price'] == $variation['display_regular_price'] ? '' : $variation['display_regular_price'];

                            $is_in_stock = $variation['is_in_stock'];

                        ?>

                            <li <?php echo !$is_in_stock ? 'class="out-of-stock"' : ''; ?>>

                                <div class="variation_title">

                                    <input
                                        data-image="<?php echo $variation['image']['title']; ?>"
                                        data-shipping="<?php echo $variation_shipping_class; ?>"
                                        value="<?php echo $variation_id; ?>"
                                        id="<?php echo $variation_id; ?>"
                                        data-price="<?php echo wc_get_product($variation_id)->get_price(); ?>"
                                        type="radio"
                                        name="variation_<?php echo $product->get_id(); ?>"
                                        class="variation_selection"
                                        <?php echo !$is_in_stock ? 'disabled' : ''; ?> />


                                    <label for="<?php echo $variation_id; ?>">

                                        <?php echo $variation_title; ?>

                                        <span class="variation_price">

                                            <?php echo wc_price($variation_price); ?>

                                            <?php echo $regular_price ? '<span class="regular_price">' . wc_price($regular_price) . '</span>' : ''; ?>

                                        </span>

                                    </label>

                                </div>

                            </li>

                        <?php

                        endforeach;

                        ?>

                    <?php endif; ?>

                </ul>

            <?php

            } else {

            ?>

                <input data-shipping="" value="<?php echo $product->get_id(); ?>" id="<?php echo $product->get_id(); ?>" data-price="<?php echo $product->get_price(); ?>" type="radio" name="variation_<?php echo $product->get_id() ?>" class="variation_selection wooecom_hidden" checked />

            <?php

            }

            ?>

        <?php else : ?>

            <input data-shipping="" value="<?php echo $product->get_id(); ?>" id="<?php echo $product->get_id(); ?>" data-price="<?php echo $product->get_price(); ?>" type="radio" name="variation_<?php echo $product->get_id() ?>" class="wooecom_hidden variation_selection" checked />

        <?php endif; ?>

        <input type="hidden" value="<?php echo $product->get_id(); ?>" id="wooecom_product_id">

        <div class="wooecom_placeholder"></div>

        <?php if ($product->get_sold_individually()) : ?>

            <input type="hidden" value="1" min="1" name="wooecom_qty" id="wooecom_qty" required>

            <style>
                .wooecom_checkout {

                    width: 100% !important;

                }
            </style>

        <?php else : ?>
            <?php if (get_option('place_button_at_bottom') == "no") { ?>
                <div class="wooecom_quantity">

                    <span class="wooecom_minus"><i class="fa-solid fa-minus"></i></span>

                    <input type="number" value="1" min="1" name="wooecom_qty" id="wooecom_qty" required readonly>

                    <span class="wooecom_plus"><i class="fa-solid fa-plus"></i></span>

                </div>
            <?php } ?>

        <?php endif; ?>
        <?php if (get_option('place_button_at_bottom') == "no") { ?>
            <button type="submit" class="wooecom_checkout">

                <span><?php echo __(get_option('wooecom_checkout_btn'), 'wooecom_text'); ?></span>

                <span class="wooecom_btn_loader"></span>

            </button>
        <?php } ?>

    </div>

    <div class="wooecom_order_summary <?php echo get_option('wooecom_open_order_summary') == 'yes' ? 'active' : ''; ?>">

        <div class="wooecom_order_summary_head">

            <div class="wooecom_order_summary_title">

                <i class="fa-solid fa-cart-shopping"></i>

                <span><?php echo __('Order summary', 'wooecom_text'); ?></span>

            </div>

            <i class="fa-solid fa-chevron-down"></i>

        </div>

        <div class="wooecom_price_table">

            <div class="order_loader_container">

                <span class="wooecom_order_loader"></span>

            </div>

            <table>

                <tbody>

                    <tr>

                        <td class="product_name">

                            <?php echo __($product->get_name(), 'wooecom_text'); ?>

                        </td>

                        <td class='product_price'>

                            <span class="wooecom_order_qty">x1</span><span class="wooecom_price"><?php echo wc_price($product->get_price()); ?></span>

                            <input type="hidden" id="wooecom_price" value="<?php echo $product->get_price(); ?>">

                        </td>

                    </tr>

                    <tr>

                        <td>

                            <?php echo __('Delivery Price', 'wooecom_text'); ?>

                            <?php if (get_option('wooecom_show_state') == 'yes') : ?>

                                <div class="wooecom_shipping_prices"></div>

                            <?php endif; ?>



                        </td>

                        <td class='shipping_price'>

                            <?php if (get_option('wooecom_show_state') == 'yes') : ?>

                                <?php echo __('Choose the state', 'wooecom_text'); ?>

                            <?php else : ?>

                                <?php echo get_option('wooecom_fixed_shipping') > 0 ? wc_price(get_option('wooecom_fixed_shipping')) : '<span class="wooecom_free_shipping">Free</span>'; ?>

                                <input id="wooecom_fixed_shipping_fe" type="radio" class="wooecom_shipping_method" data-title="<?php _e('Fixed Shipping', 'wooecom'); ?>" data-cost="<?php echo get_option('wooecom_fixed_shipping'); ?>" checked />

                            <?php endif; ?>

                        </td>

                    </tr>

                    <tr class="wooecom_coupon_discount_row">
                        <td><?php echo __('Coupon Discount', 'wooecom_text'); ?></td>
                        <td class='coupon_discount'>
                            <span class="wooecom_discount_amount">-<?php echo wc_price(0); ?></span>
                        </td>
                    </tr>
                    <tr class="wooecom_row_total_price">

                        <td>

                            <?php echo __('Total Price', 'wooecom_text'); ?>

                        </td>

                        <td class='total_price'>

                            <span class="wooecom_price"><?php echo wc_price($product->get_price()); ?></span>

                            <input type="hidden" id="wooecom_total_price" value="<?php echo $product->get_price(); ?>">

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>



    </div>

    <?php if (get_option('place_button_at_bottom') == "yes") { ?>
        <div style="display: flex; justify-content: space-between; padding:15px; border: 1px solid #d9d9d9; border-top: 0px !important;">
            <div class="wooecom_quantity">

                <span class="wooecom_minus"><i class="fa-solid fa-minus"></i></span>

                <input type="number" value="1" min="1" name="wooecom_qty" id="wooecom_qty" required readonly>

                <span class="wooecom_plus"><i class="fa-solid fa-plus"></i></span>

            </div>



            <button type="submit" class="wooecom_checkout">

                <span><?php echo __(get_option('wooecom_checkout_btn'), 'wooecom_text'); ?></span>

                <span class="wooecom_btn_loader"></span>

            </button>
        </div>
    <?php } ?>

</form>



<div class="wooecom_sticky_footer">

    <a href="#wooecom_instant_order" class="wooecom_buy_now"><?php echo __(get_option('wooecom_buy_now'), 'wooecom_text') ?></a>

    <?php if (get_option('wooecom_show_footer_icons') == 'yes') : ?>

        <div class="wooecom_footer_icons">

            <a href="tel:<?php echo get_option('wooecom_footer_phone'); ?>" class="href">

                <i class="fa-solid fa-phone"></i>

            </a>

            <a target="_blank" href="https://wa.me/<?php echo get_option('wooecom_whatsapp'); ?>" class="href">

                <i class="fa-brands fa-whatsapp"></i>

            </a>

        </div>

    <?php endif; ?>

</div>