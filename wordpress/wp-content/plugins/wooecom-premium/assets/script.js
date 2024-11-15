$ = jQuery;
 let couponType = null;
    let couponValue = 0;

function formatPrice(price = 0){
    const currency = wooecom_local.currency; 
    const decimals = wooecom_local.decimals;
    const separator = wooecom_local.separator;
    const deci_separator = wooecom_local.deci_separator;
    const currency_pos = wooecom_local.currency_pos;
    let newPrice = parseFloat(price).toFixed(parseInt(decimals)).replace(/\d(?=(\d{3})+\.)/g, '$&' + separator);
    newPrice = newPrice.replace('.', deci_separator)

    switch(currency_pos){
        case 'right':
            newPrice = newPrice + currency ;
            break ;
        case 'left':
            newPrice = currency + newPrice;
            break ;
        case 'left_space':
            newPrice = currency + ' ' + newPrice ;
            break ;
        case 'right_space':
            newPrice = newPrice + ' ' + currency ;
            break ;
        default: newPrice;
            return ;
    }

    return newPrice ;
    
}

function save_abandoned(){
    const cond = wooecom_local.save_abandoned ;
    if(cond == 'yes'){
        const phone = $('#wooecom_phone').val();
        const name = $('#wooecom_name').val();
        const product_id = $("#wooecom_product_id").val();
        
        if(phone == '' || typeof phone == 'undefined' || name == '' || typeof name == 'undefined'){
            return ;
        }

        $.ajax({
            url: wooecom_local.ajax, 
            type: 'POST',
            data: {
                action: 'wooecom_save_abandoned',
                phone: phone, 
                name: name,
                product_id: product_id
            }, 
            success: function(res){
                console.log(res)
            }, 
            error: function(err){
                console.log(err.responseText)
            }
        })
    }
}

function calcTotal(){
    const qty = parseInt($('#wooecom_qty').val());
    const shipping = $('.wooecom_shipping_method:checked').data('cost') ? parseFloat($('.wooecom_shipping_method:checked').data('cost')) : 0;
    const variation_price = $('.variation_selection:checked').data('price');
    $('#wooecom_price').val(variation_price).change();
    const product_price = parseFloat($('#wooecom_price').val());
    
    const product_quantity_total = product_price * qty;  

    let discount = 0;
    if (typeof couponType !== 'undefined' && typeof couponValue !== 'undefined' && couponValue > 0) {
        if (couponType === 'percentage') {
            discount = product_quantity_total * (couponValue / 100);  // Calculate percentage discount
        } else if (couponType === 'fixed_cart') {
            discount = Math.min(couponValue, product_quantity_total);  // Ensure the fixed discount doesn't exceed the subtotal
        }
        $('.wooecom_coupon_discount_row').show();
        $('.wooecom_discount_amount').html('-' + formatPrice(discount));
    } else {
        $('.wooecom_coupon_discount_row').hide();
    }
    const total = (product_quantity_total - discount) + shipping;  // Apply the discount to the total price
    // console.log('Product Total Price:', product_quantity_total);
    // console.log('Discount:', discount);
    // console.log('Total after discount and shipping:', total);
    
    $('.product_price .wooecom_price').html(formatPrice(variation_price));
    $('.total_price .wooecom_price').html(formatPrice(total));
    $('#wooecom_total_price').val(total);
}


function alterShipping(){
    $('#wooecom_state, input[name="wooecom_shipping"]').on('change', function(){
        if(parseFloat($(this).data('cost')) > 0){
            const price = parseFloat($(this).data('cost'));
            $('.shipping_price').html(formatPrice(price));
        }else{
            $('.shipping_price').html('<span class="wooecom_free_shipping">'+wooecom_local.str_free+'</span>');
        }
        calcTotal();
    })
}

function validationNotice(){
    const fields = document.querySelectorAll('#wooecom_instant_order input[type="text"], #wooecom_instant_order input[type="email"], #wooecom_instant_order input[type="tel"], #wooecom_instant_order input[type="number"],  #wooecom_instant_order select, #wooecom_instant_order textarea');

    let error = 0 ;

    fields.forEach(field => {
        if(field.value == ''){
            error++;
        }
    });

    if(error > 0){
        $('.wooecom_notice').removeClass('hidden');
    }else{
        $('.wooecom_notice').addClass('hidden');
    }
}
let imageTitle = '';

function updateShipping(){
    $('.wooecom_order_summary').addClass('active');
    $('.order_loader_container').show();
    $('.order_loader_container').css('display', 'flex');
    const variation_id = $('.variation_selection:checked').val();
    const shipping_id = $('.variation_selection:checked').data('shipping');
    var imageTitle = $('.variation_selection:checked').data('image');
    if (!imageTitle) {
        imageTitle = $('.attributes_selection:checked').data('image');
    }
    if (imageTitle) {
        console.log('image title before processing: ', imageTitle);

        function removeExtension(title) {
            let lastDotIndex = title.lastIndexOf('.');
            if (lastDotIndex > 0) {
                return title.substring(0, lastDotIndex);
            }
            return title;
        }
    
        imageTitle = removeExtension(imageTitle);
        console.log('image title after processing: ', imageTitle);
        var thumbnailSelector = 'ol.flex-control-nav li img';

        $(thumbnailSelector).each(function() {
            var imgSrc = $(this).attr('src'); 

            if (imgSrc.includes(imageTitle)) {
                console.log('in condition');
                $(this).closest('li img').click(); 
            }
        });
    }
 

    
    const state = $('#wooecom_state').val(); 

    $.ajax({
        url: wooecom_local.ajax, 
        type: 'POST',
        data: {
            action: 'wooecom_update_shipping',
            variation_id : variation_id, 
            shipping_id: shipping_id, 
            state: state, 
        },
        success: function(res){
            $('.order_loader_container').hide();
            $('.wooecom_shipping_prices').html(res)
            calcTotal();
            alterShipping()
            $($('.wooecom_shipping_method')[0]).click().change();
        },
        error: function(err){
            console.log(err.responseText)
        }
    })

}

function modernUI(){
    
    const attributes = {} ;
    const selectedAttributes = document.querySelectorAll('.attributes_selection:checked');
    const product_id = $('#wooecom_mui_product').val();
    const combination = document.querySelectorAll('.attribute_modern_ui');

    if(typeof selectedAttributes != 'undefined'){
        selectedAttributes.forEach(attr => {
            const key = attr.dataset.name ;
            const val = attr.value ;
            attributes[key] = val ;
        })
    }

    if(typeof combination != 'undefined'){
        var attrKeys = Object.keys(attributes);
        if(attrKeys.length != combination.length){
            return ;
        }
    }else{
        return ;
    }
    
    $('.order_loader_container').show();
    $('.order_loader_container').css('display', 'flex');

    $.ajax({
        url: wooecom_local.ajax,
        type: 'POST',
        data: {
            action: 'wooecom_modern_ui_get_variation',
            attributes: attributes, 
            product_id: product_id
        },
        success: function (res) {
            
            if (res.success) {
                
                $('.variation_selection').data('price', res.price);
                $('.variation_selection').data('shipping', res.shipping_id);
                $('.variation_selection').val(res.variation).change();
               $('.wooecom_checkout').prop('disabled', false).removeClass('disabled-btn');
            } else {

                $('.wooecom_checkout').prop('disabled', true).addClass('disabled-btn');
                toastr.error(res.error, "", {
                    positionClass: 'toast-center-center',
                    timeOut: 3000,
                    closeButton: true,
                    progressBar: true,
                    preventDuplicates: true,
                });
                $('.order_loader_container').hide();
                return false;
            
            }
            
        },
        error: function(err){
            console.log(err.responseText)
        }
    })
}

$(document).ready(function () {


    $('#apply_coupon').click(function () {
        var couponCode = $('#coupon_code').val();
        if (!couponCode) {
             toastr.error("Please Enter Coupon Code", "", {
                    positionClass: 'toast-center-center',
                    timeOut: 3000,
                    closeButton: true,
                    progressBar: true,
                    preventDuplicates: true,
             });
            return false;

        }
        var formData = {
            'coupon_code': couponCode,
        };

        $.ajax({
            url: wooecom_local.ajax, 
            type: 'POST',
            data: {
                action: 'apply_coupon', 
                data: formData,
            },
            beforeSend: function () {
                
                $('.order_loader_container').show();
                $('.order_loader_container').css('display', 'flex');
                toastr.success("Processing...!", "", {
                    positionClass: 'toast-center-center',
                    timeOut: 2000,
                    closeButton: true,
                    progressBar: true,
                    preventDuplicates: false,
                    });
            },
            success: function (response) {

                console.log('response coupon ', response);
                
                if (response.success) {

                    couponType = response.data.type;
                    couponValue = parseFloat(response.data.value);
                    calcTotal();

                    toastr.success(response.data.message, "", {
                    positionClass: 'toast-center-center',
                    timeOut: 3000,
                    closeButton: true,
                    progressBar: true,
                    preventDuplicates: true,
                    });
                   $('.order_loader_container').hide();
                } else {

                    $('.order_loader_container').hide();
                    toastr.error(response.data.message, "", {
                    positionClass: 'toast-center-center',
                    timeOut: 3000,
                    closeButton: true,
                    progressBar: true,
                    preventDuplicates: true,
                    });
                   
                }
            },
            error: function () {
                $('#coupon_message').html('<p>Failed to apply coupon. Please try again.</p>');
            }
        });
    });
    

    // Validate input number field 
    $('#wooecom_instant_order input[type="tel"]').on('input', function(event){
        var inputValue = event.target.value;
        // Remove any non-numeric characters from the input
        var numericValue = inputValue.replace(/\D/g, '');
        // Update the input field value with only numeric characters
        event.target.value = numericValue;
    })

    $('.wooecom_order_summary_head').click(function(){
        $(this).parent().toggleClass('active');
    })

    if(document.querySelector('.wooecom_plus')){
        document.querySelector('.wooecom_plus').addEventListener('click', ()=>{
            document.querySelector('#wooecom_qty').stepUp() ;
            $('#wooecom_qty').change();
        })
    
        document.querySelector('.wooecom_minus').addEventListener('click', ()=>{
            document.querySelector('#wooecom_qty').stepDown() ;
            $('#wooecom_qty').change();
        })
    }


    $('#wooecom_state, .variation_selection').on('change', function(){
        updateShipping() ;
    })



    $('#wooecom_qty').on('change', function(){
        const qty = parseInt($(this).val());
        const price = parseFloat($('.product_price #wooecom_price').val());
        $('.product_price .wooecom_price').html(formatPrice(price * qty));
        $('.wooecom_order_qty').html('x' + qty);
        calcTotal()
    })

    $(window).scroll(function(){
        if($(this).scrollTop() >= 400){
            $('.wooecom_sticky_footer').slideDown(100)
            $('.wooecom_sticky_footer').css('display', 'flex')
        }else{            
            $('.wooecom_sticky_footer').slideUp(100)
        }
    })


    // On attribute selection 
    $('.wooecom_single_attr input').on('change', function(){
        const id = $(this).data('attr');
        const value = $(this).val();
        $(`#${id}`).val(value).change();
    })

    // Modern UI 
    $('.attributes_selection').on('change', function () {
        
         var imageTitle = $('.variation_selection:checked').data('image');
    if (!imageTitle) {
        imageTitle = $('.attributes_selection:checked').data('image');
    }
    if (imageTitle) {
        console.log('image title before processing: ', imageTitle);
       
        var thumbnailSelector = 'ol.flex-control-nav li img';

        $(thumbnailSelector).each(function() {
            var imgSrc = $(this).attr('src'); 
            console.log('image src ', imgSrc);

            if (imgSrc === imageTitle) {
                console.log('Match found, clicking the image');
                $(this).closest('li img').click(); 
            }

        });
    }
        modernUI();
    })

    //Show notice 

    $('.wooecom_buy_now').click(function(){
        validationNotice();
    })

   
    let formSubmitting = false;

    $(window).on('beforeunload', function(){
        if (!formSubmitting) {
        save_abandoned();
    }
    });
    
    
    $('.wooecom_instant_order').on('submit', function(e){
        e.preventDefault();
        formSubmitting = true;


       let coupon_code_name = "";  // Use 'let' instead of 'const'
       if (typeof couponType !== 'undefined' && typeof couponValue !== 'undefined' && couponValue > 0) { 
            coupon_code_name = $('#coupon_code').val();  // Now you can reassign the value
       }

        const phone = $('#wooecom_phone').val();
        const state = $('#wooecom_state').val();
        const name = $('#wooecom_name').val();
        const city = $('#wooecom_city').val();
        const address = $('#wooecom_address').val();
        const qty = $('#wooecom_qty').val();
        const shipping = $('.wooecom_shipping_method:checked').data('cost') ? parseFloat($('.wooecom_shipping_method:checked').data('cost')) : 0;
        const shipping_title = $('.wooecom_shipping_method:checked').data('title') ? $('.wooecom_shipping_method:checked').data('title') : 'No shipping methods set';
        const shipping_id = $('.wooecom_shipping_method:checked').attr('id');
        const product_id = $('#wooecom_product_id').val();
        const variation_id = $('.variation_selection:checked').val();
        const email = $("#wooecom_email").val();
        const additional = $("#wooecom_additional").val();

        const selectedAttributes = {};
        $('.attributes_selection:checked').each(function() {
            const attributeName = $(this).attr('name');
            const attributeValue = $(this).val();
            selectedAttributes[attributeName] = attributeValue;
        });

        console.log('selected attributes ', selectedAttributes);
        $('.wooecom_btn_loader').css('display', 'inline-block');
        $('.wooecom_checkout').addClass('loading');

        $.ajax({
            url: wooecom_local.ajax,
            type: 'POST',
            data:{
                action: 'wooecom_ajax_checkout',
                phone: phone, 
                state: state, 
                city: city , 
                address : address, 
                qty : qty , 
                shipping: shipping,
                name: name,
                shipping_title: shipping_title, 
                shipping_id: shipping_id, 
                product_id: product_id,
                variation_id: variation_id,
                email: email, 
                coupon_code_name: coupon_code_name,
                additional: additional,
                attributes: selectedAttributes
            },
            success: function (res) {
                
                console.log('ajax checkout response ', res);
                $('.wooecom_btn_loader').css('display', 'none');
                if(wooecom_local.thankyou != ''){
                    location.href = wooecom_local.thankyou
                }else{
                    location.href = res.thank_you_page;
                }
            }, 
            error: function(err){
                console.log(err.responseText)
            }
        })

    })

    // First Selections 
    if(wooecom_local.modern_ui == 'no'){
        $($('.variation_selection')[0]).click().change();
        calcTotal();
    }else{
        const combinations = document.querySelectorAll('.attribute_modern_ui');
        if(typeof combinations !== 'undefined'){
            combinations.forEach(combination => {
                const option = combination.querySelectorAll('.attributes_selection')[0];
                $(option).click().change();
            })
        }
    }
})