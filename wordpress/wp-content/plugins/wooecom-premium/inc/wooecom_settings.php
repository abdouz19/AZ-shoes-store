<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $wooecom_info_title = $_POST['wooecom_info_title'];
    $wooecom_name = $_POST['wooecom_name'];
    $wooecom_phone = $_POST['wooecom_phone'];
    $wooecom_state = $_POST['wooecom_state'];
    $wooecom_city = $_POST['wooecom_city'];
    $wooecom_address = $_POST['wooecom_address'];
    $wooecom_email = $_POST['wooecom_email'];
    $wooecom_additional = $_POST['wooecom_additional'];
    $wooecom_checkout_btn = $_POST['wooecom_checkout_btn'];
    $wooecom_order_summary_bg = $_POST['wooecom_order_summary_bg'];
    $wooecom_order_summary_text = $_POST['wooecom_order_summary_text'];
    $wooecom_button_color = $_POST['wooecom_button_color'];
    $wooecom_background_color = $_POST['wooecom_background_color'];
    $wooecom_text_color = $_POST['wooecom_text_color'];
    $wooecom_show_city = isset($_POST['wooecom_show_city']) ? 'yes' : 'no';
    $wooecom_show_address = isset($_POST['wooecom_show_address']) ? 'yes' : 'no';
    $wooecom_open_order_summary = isset($_POST['wooecom_open_order_summary']) ? 'yes' : 'no';
    $wooecom_show_footer_icons = isset($_POST['wooecom_show_footer_icons']) ? 'yes' : 'no';
    $wooecom_show_email = isset($_POST['wooecom_show_email']) ? 'yes' : 'no';
    $wooecom_show_additional = isset($_POST['wooecom_show_additional']) ? 'yes' : 'no';
    $wooecom_save_abandoned = isset($_POST['wooecom_save_abandoned']) ? 'yes' : 'no';
    $place_button_at_bottom = isset($_POST['place_button_at_bottom']) ? 'yes' : 'no';
    $show_for_mobile_only = isset($_POST['show_for_mobile_only']) ? 'yes' : 'no';
    
    $coupon_code = isset($_POST['coupon_code']) ? 'yes' : 'no';

    $wooecom_ip_protection = isset($_POST['wooecom_ip_protection']) ? 'yes' : 'no';
    $wooecom_cookie_protection = isset($_POST['wooecom_cookie_protection']) ? 'yes' : 'no';


    $wooecom_buy_now = $_POST['wooecom_buy_now'];
    $wooecom_footer_phone = $_POST['wooecom_footer_phone'];
    $wooecom_whatsapp = $_POST['wooecom_whatsapp'];
    $wooecom_thankyou_url = $_POST['wooecom_thankyou_url'];
    $wooecom_field_background = $_POST['wooecom_field_background'];
    $wooecom_field_border = $_POST['wooecom_field_border'];
    $wooecom_total_price = $_POST['wooecom_total_price'];
    $wooecom_show_state = isset($_POST['wooecom_show_state']) ? 'yes' : 'no';
    $wooecom_copy_paste = isset($_POST['wooecom_copy_paste']) ? 'yes' : 'no';
    $wooecom_autocomplete = isset($_POST['wooecom_autocomplete']) ? 'yes' : 'no';
    $wooecom_modern_ui = isset($_POST['wooecom_modern_ui']) ? 'yes' : 'no';

    $wooecom_phone_pattern = $_POST['wooecom_phone_pattern'];
    $wooecom_fixed_shipping = $_POST['wooecom_fixed_shipping'];

    update_option('wooecom_info_title', $wooecom_info_title);
    update_option('wooecom_name', $wooecom_name);
    update_option('wooecom_phone', $wooecom_phone);
    update_option('wooecom_state', $wooecom_state);
    update_option('wooecom_city', $wooecom_city);
    update_option('wooecom_address', $wooecom_address);
    update_option('wooecom_email', $wooecom_email);
    update_option('wooecom_additional', $wooecom_additional);
    update_option('wooecom_checkout_btn', $wooecom_checkout_btn);
    update_option('wooecom_order_summary_bg', $wooecom_order_summary_bg);
    update_option('wooecom_button_color', $wooecom_button_color);
    update_option('wooecom_background_color', $wooecom_background_color);
    update_option('wooecom_field_border', $wooecom_field_border);
    update_option('wooecom_text_color', $wooecom_text_color);
    update_option('wooecom_open_order_summary', $wooecom_open_order_summary);
    update_option('wooecom_show_address', $wooecom_show_address);
    update_option('wooecom_show_city', $wooecom_show_city);
    update_option('wooecom_show_footer_icons', $wooecom_show_footer_icons);
    update_option('wooecom_buy_now', $wooecom_buy_now);
    update_option('wooecom_footer_phone', $wooecom_footer_phone);
    update_option('wooecom_whatsapp', $wooecom_whatsapp);
    update_option('wooecom_order_summary_text', $wooecom_order_summary_text);
    update_option('wooecom_thankyou_url', $wooecom_thankyou_url);
    update_option('wooecom_field_background', $wooecom_field_background);
    update_option('wooecom_total_price', $wooecom_total_price);
    update_option('wooecom_show_state', $wooecom_show_state);
    update_option('wooecom_show_email', $wooecom_show_email);
    update_option('wooecom_show_additional', $wooecom_show_additional);


    update_option('wooecom_phone_pattern', $wooecom_phone_pattern);
    update_option('wooecom_save_abandoned', $wooecom_save_abandoned);
    update_option('place_button_at_bottom', $place_button_at_bottom);
    update_option('show_for_mobile_only', $show_for_mobile_only);

    
    update_option('coupon_code', $coupon_code);


    update_option('wooecom_ip_protection', $wooecom_ip_protection);
    update_option('wooecom_cookie_protection', $wooecom_cookie_protection);

    update_option('wooecom_fixed_shipping', $wooecom_fixed_shipping);
    update_option('wooecom_copy_paste', $wooecom_copy_paste);
    update_option('wooecom_autocomplete', $wooecom_autocomplete);
    update_option('wooecom_modern_ui', $wooecom_modern_ui);
}
?>

<div class="wrap wooecom_wrap">
    <h2 class="wooecom_settings_title">
        WooEcom.
    </h2>
    <form action="" method="POST" class="wooecom_tabs">
        <ul class="wooecom_tab_title">
            <li data-title="title"><?php echo __('Titles', 'wooecom_text'); ?></li>
            <li data-title="colors"><?php echo __('Colors', 'wooecom_text'); ?></li>
            <li data-title="options"><?php echo __('Options', 'wooecom_text') ?></li>
            <li data-title="settings"><?php echo __('Settings', 'wooecom_text') ?></li>
            <li data-title="spam"><?php echo __('Spam Protection', 'wooecom_text') ?></li>
        </ul>
        <ul class="wooecom_tab_content">
            <li data-content="title">
                <div class="wooecom_form_group">
                    <label><?php echo __('Add Information Title', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_info_title" value="<?php echo __(get_option('wooecom_info_title'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Full Name', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_name" value="<?php echo __(get_option('wooecom_name'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Phone Number', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_phone" value="<?php echo __(get_option('wooecom_phone'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('State', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_state" value="<?php echo __(get_option('wooecom_state'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('City', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_city" value="<?php echo __(get_option('wooecom_city'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Address', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_address" value="<?php echo __(get_option('wooecom_address'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Email', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_email" value="<?php echo __(get_option('wooecom_email'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Additional Information', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_additional" value="<?php echo __(get_option('wooecom_additional'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Checkout Button', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_checkout_btn" value="<?php echo __(get_option('wooecom_checkout_btn'), 'wooecom_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Buy Now Button', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_buy_now" value="<?php echo __(get_option('wooecom_buy_now'), 'wooecom_text'); ?>">
                </div>
            </li>
            <li data-content="colors">
                <div class="wooecom_form_group">
                    <label><?php echo __('Order Summary Heading Background', 'wooecom_text'); ?></label>
                    <input type="color" value="<?php echo get_option('wooecom_order_summary_bg'); ?>" disabled>
                    <input type="text" name="wooecom_order_summary_bg" value="<?php echo get_option('wooecom_order_summary_bg'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Order Summary Heading Color', 'wooecom_text'); ?></label>
                    <input type="color" value="<?php echo get_option('wooecom_order_summary_text'); ?>" disabled>
                    <input type="text" name="wooecom_order_summary_text" value="<?php echo get_option('wooecom_order_summary_text'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Button Color', 'wooecom_text'); ?></label>
                    <input type="color" value="<?php echo get_option('wooecom_button_color'); ?>" disabled>
                    <input type="text" name="wooecom_button_color" value="<?php echo get_option('wooecom_button_color'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Background Color', 'wooecom_text'); ?></label>
                    <input type="color" value="<?php echo get_option('wooecom_background_color'); ?>" disabled>
                    <input type="text" name="wooecom_background_color" value="<?php echo get_option('wooecom_background_color'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Text Color', 'wooecom_text'); ?></label>
                    <input type="color" value="<?php echo get_option('wooecom_text_color'); ?>" disabled>
                    <input type="text" name="wooecom_text_color" value="<?php echo get_option('wooecom_text_color'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Field Background', 'wooecom_text'); ?></label>
                    <input type="color" value="<?php echo get_option('wooecom_field_background'); ?>" disabled>
                    <input type="text" name="wooecom_field_background" value="<?php echo get_option('wooecom_field_background'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Field Border on Select', 'wooecom_text'); ?></label>
                    <input type="color" value="<?php echo get_option('wooecom_field_border'); ?>" disabled>
                    <input type="text" name="wooecom_field_border" value="<?php echo get_option('wooecom_field_border'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Total Price Color', 'wooecom_text'); ?></label>
                    <input type="color" value="<?php echo get_option('wooecom_total_price'); ?>" disabled>
                    <input type="text" name="wooecom_total_price" value="<?php echo get_option('wooecom_total_price'); ?>">
                </div>
            </li>
            <li data-content="options">
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_show_city" value="yes" <?php echo get_option('wooecom_show_city') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Display city field in form', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_show_state" value="yes" <?php echo get_option('wooecom_show_state') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Display state field in form', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_show_email" value="yes" <?php echo get_option('wooecom_show_email') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Hide email field.', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_show_additional" value="yes" <?php echo get_option('wooecom_show_additional') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Hide additional field.', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_show_address" value="yes" <?php echo get_option('wooecom_show_address') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Hide address field in order form', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_open_order_summary" value="yes" <?php echo get_option('wooecom_open_order_summary') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Keep order summary open in order form', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_show_footer_icons" value="yes" <?php echo get_option('wooecom_show_footer_icons') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Show phone and what\'s app icon at the sticky footer', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_modern_ui" value="yes" <?php echo get_option('wooecom_modern_ui') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Show modern UI', 'wooecom_text'); ?></span>
                </div>

                <div class="wooecom_form_group">
                    <input type="checkbox" name="place_button_at_bottom" value="yes" <?php echo get_option('place_button_at_bottom') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Place Button At Bottom', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="show_for_mobile_only" value="yes" <?php echo get_option('show_for_mobile_only') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Show for mobile only', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="coupon_code" value="yes" <?php echo get_option('coupon_code') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Coupon Code', 'wooecom_text'); ?></span>
                </div>
            </li>
            <li data-content="settings">
                <div class="wooecom_form_group">
                    <label><?php echo __('Your Phone Number', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_footer_phone" value="<?php echo get_option('wooecom_footer_phone'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('What\'s App Number', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_whatsapp" value="<?php echo get_option('wooecom_whatsapp'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Order Recieved URL', 'wooecom_text'); ?></label>
                    <input type="url" name="wooecom_thankyou_url" value="<?php echo get_option('wooecom_thankyou_url'); ?>">
                </div>
                <div class="wooecom_form_group">
                    <label><?php echo __('Fixed Shipping Fee', 'wooecom_text'); ?></label>
                    <input type="number" name="wooecom_fixed_shipping" value="<?php echo get_option('wooecom_fixed_shipping'); ?>">
                </div>
            </li>
            <li data-content="spam">
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_autocomplete" value="yes" <?php echo get_option('wooecom_autocomplete') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Prevent autocomplete for form fields', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_copy_paste" value="yes" <?php echo get_option('wooecom_copy_paste') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Prevent copy pasting informations in order form', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_ip_protection" value="yes" <?php echo get_option('wooecom_ip_protection') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Prevent 2nd order in 24hours', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_cookie_protection" value="yes" <?php echo get_option('wooecom_cookie_protection') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Stop ordering again wihtin 24 hours using browswer cookies', 'wooecom_text'); ?></span>
                </div>
                <div class="wooecom_form_group">
                    <input type="checkbox" name="wooecom_save_abandoned" value="yes" <?php echo get_option('wooecom_save_abandoned') == 'yes' ? 'checked' : ''; ?>> <span><?php echo __('Save abandoned order', 'wooecom_text'); ?></span>
                </div>

                <div class="wooecom_form_group">
                    <label><?php echo __('Phone Number Pattern', 'wooecom_text'); ?></label>
                    <input type="text" name="wooecom_phone_pattern" value="<?php echo get_option('wooecom_phone_pattern'); ?>">
                </div>
            </li>
        </ul>
        <button class="button button-primary"><?php _e('Save Settings', 'wooecom_text'); ?></button>
    </form>
</div>