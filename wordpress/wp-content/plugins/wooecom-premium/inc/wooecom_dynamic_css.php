<style>
    .wooecom_order_summary_head {
        background: <?php echo get_option('wooecom_order_summary_bg') ? get_option('wooecom_order_summary_bg') : '#FBFBFB' ?> !important;
    }

    .wooecom_buy_now {
        background: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
        color: <?php echo get_option('wooecom_text_color') ? get_option('wooecom_text_color') : '#FFFFFF' ?> !important;
        transition: all .3s ease;
        border: 1px solid transparent;
    }

    .wooecom_order_qty {
        background: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
        color: <?php echo get_option('wooecom_text_color') ? get_option('wooecom_text_color') : '#FFFFFF' ?> !important;
        transition: all .3s ease;
    }

    .wooecom_footer_icons i {
        color: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#FFFFFF' ?> !important;
    }

    .wooecom_order_summary_head {
        color: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#FFFFFF' ?> !important;
    }

    .wooecom_instant_order_form {
        background: <?php echo get_option('wooecom_background_color') ? get_option('wooecom_background_color') : '#FBFBFB' ?> !important;
    }

    .wooecom_checkout {
        background: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
        color: <?php echo get_option('wooecom_text_color') ? get_option('wooecom_text_color') : '#FFFFFF' ?> !important;
        transition: all .3s ease;
        border: 1px solid transparent;
    }

    .wooecom_checkout:hover,
    .wooecom_buy_now:hover {
        color: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
        background: <?php echo get_option('wooecom_text_color') ? get_option('wooecom_text_color') : '#FFFFFF' ?> !important;
        border-color: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
    }

    .wooecom_btn_loader {
        border: 2px solid <?php echo get_option('wooecom_text_color') ? get_option('wooecom_text_color') : '#FFFFFF' ?> !important;
        border-bottom-color: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
    }

    .wooecom_order_summary_title,
    .wooecom_order_summary_head {
        color: <?php echo get_option('wooecom_order_summary_text') ? get_option('wooecom_order_summary_text') : '#43A071' ?> !important
    }

    span.wooecom_free_shipping {
        background: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
        color: <?php echo get_option('wooecom_text_color') ? get_option('wooecom_text_color') : '#FFFFFF' ?> !important;
    }

    .wooecom_row_total_price>td.total_price {
        color: <?php echo get_option('wooecom_total_price') ? get_option('wooecom_total_price') : '#00000' ?> !important;
    }

    .wooecom_instant_order_form>input,
    .wooecom_instant_order_form>select {
        background-color: <?php echo get_option('wooecom_field_background') ? get_option('wooecom_field_background') : '#FFFFFF' ?> !important;
    }

    .wooecom_instant_order_form>input:focus,
    .wooecom_instant_order_form>select:focus,
    .wooecom_instant_order_form>textarea:focus {
        box-shadow: 0 0 0 2px <?php echo get_option('wooecom_field_border') ? get_option('wooecom_field_border') : '#d9d9d9' ?> !important;
    }

    .variation_title input:checked+label::after {
        background: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
    }

    .variation_price{
        color: <?php echo get_option('wooecom_button_color') ? get_option('wooecom_button_color') : '#43A071' ?> !important;
        font-weight: 600 ;
    }

    .regular_price{
        color: #AEAEAE;
        text-decoration: line-through ;
        font-weight: 400 ;
    }
</style>