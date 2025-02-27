(function ($) {
    'use strict';
    $(function () {
        $('#woocommerce_wpg_paypal_checkout_sandbox').change(function () {
            var ppcp_production_fields = $('#woocommerce_wpg_paypal_checkout_rest_client_id_live, #woocommerce_wpg_paypal_checkout_rest_secret_id_live').closest('tr');
            var ppcp_sandbox_fields = $('#woocommerce_wpg_paypal_checkout_rest_client_id_sandbox, #woocommerce_wpg_paypal_checkout_rest_secret_id_sandbox').closest('tr');
            if ($(this).is(':checked')) {
                ppcp_sandbox_fields.show();
                ppcp_production_fields.hide();
                $('#woocommerce_wpg_paypal_checkout_sandbox_api_details').show();
                $('#woocommerce_wpg_paypal_checkout_live_api_details').hide();
            } else {
                ppcp_sandbox_fields.hide();
                ppcp_production_fields.show();
                $('#woocommerce_wpg_paypal_checkout_sandbox_api_details').hide();
                $('#woocommerce_wpg_paypal_checkout_live_api_details').show();
            }
        }).change();

        $('#woocommerce_wpg_paypal_checkout_show_on_product_page').change(function () {
            if ($(this).is(':checked')) {
                $('.wpg_paypal_checkout_product_button_settings, .ppcp_product_button_settings').closest('tr').show();
            } else {
                $('.wpg_paypal_checkout_product_button_settings, .ppcp_product_button_settings').closest('tr').hide();
            }
        }).change();

        $('#woocommerce_wpg_paypal_checkout_show_on_cart').change(function () {
            if ($(this).is(':checked')) {
                $('.wpg_paypal_checkout_cart_button_settings, .ppcp_cart_button_settings').closest('tr').show();
            } else {
                $('.wpg_paypal_checkout_cart_button_settings, .ppcp_cart_button_settings').closest('tr').hide();
            }
        }).change();

        $('#woocommerce_wpg_paypal_checkout_show_on_checkout_page').change(function () {
            if ($(this).is(':checked')) {
                $('.wpg_paypal_checkout_checkout_button_settings, .ppcp_checkout_button_settings').closest('tr').show();
            } else {
                $('.wpg_paypal_checkout_checkout_button_settings, .ppcp_checkout_button_settings').closest('tr').hide();
            }
        }).change();

        $('#woocommerce_wpg_paypal_checkout_show_on_mini_cart').change(function () {
            if ($(this).is(':checked')) {
                $('.wpg_paypal_checkout_mini_cart_button_settings, .ppcp_mini_cart_button_settings').closest('tr').show();
            } else {
                $('.wpg_paypal_checkout_mini_cart_button_settings, .ppcp_mini_cart_button_settings').closest('tr').hide();
            }
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_enable_advanced_card_payments').change(function () {
            if (jQuery(this).is(':checked')) {
                jQuery('#woocommerce_wpg_paypal_checkout_3d_secure_contingency, #woocommerce_wpg_paypal_checkout_disable_cards, #woocommerce_wpg_paypal_checkout_advanced_card_payments_title').closest('tr').show();
            } else {
                jQuery('#woocommerce_wpg_paypal_checkout_3d_secure_contingency, #woocommerce_wpg_paypal_checkout_disable_cards, #woocommerce_wpg_paypal_checkout_advanced_card_payments_title').closest('tr').hide();
            }
        }).change();

        var hide_show_home_shortcode = function () {
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_shortcode').change(function () {
                var home_preview_shortcode = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_preview_shortcode').closest('tr');
                if (jQuery(this).is(':checked')) {
                    if (is_pay_later_messaging_enable() === true && is_pay_later_messaging_home_page_enable()) {
                        home_preview_shortcode.show();
                    }
                } else {
                    home_preview_shortcode.hide();
                }
            }).change();
        };

        var hide_show_category_shortcode = function () {
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_shortcode').change(function () {
                var category_preview_shortcode = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_preview_shortcode').closest('tr');
                if (jQuery(this).is(':checked')) {
                    if (is_pay_later_messaging_enable() === true && is_pay_later_messaging_category_page_enable()) {
                        category_preview_shortcode.show();
                    }
                } else {
                    category_preview_shortcode.hide();
                }
            }).change();
        };

        var ppcp_copy_text = function (css_class) {
            jQuery(document.body).on('click', css_class, function (evt) {
                evt.preventDefault();
                wcClearClipboard();
                wcSetClipboard(jQuery.trim(jQuery(this).prev('input').val()), jQuery(css_class));
            }).on('aftercopy', css_class, function () {
                jQuery(css_class).tipTip({
                    'attribute': 'data-tip',
                    'activation': 'focus',
                    'fadeIn': 50,
                    'fadeOut': 50,
                    'delay': 0
                }).focus();
            });
        };

        var hide_show_product_shortcode = function () {
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_shortcode').change(function () {
                var product_preview_shortcode = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_preview_shortcode').closest('tr');
                if (jQuery(this).is(':checked')) {
                    if (is_pay_later_messaging_enable() === true && is_pay_later_messaging_product_page_enable()) {
                        product_preview_shortcode.show();
                    }
                } else {
                    product_preview_shortcode.hide();
                }
            }).change();
        };

        var hide_show_cart_shortcode = function () {
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_shortcode').change(function () {
                var cart_preview_shortcode = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_preview_shortcode').closest('tr');
                if (jQuery(this).is(':checked')) {
                    if (is_pay_later_messaging_enable() === true && is_pay_later_messaging_cart_page_enable()) {
                        cart_preview_shortcode.show();
                    }
                } else {
                    cart_preview_shortcode.hide();
                }
            }).change();
        };

        var hide_show_payment_shortcode = function () {
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_shortcode').change(function () {
                var payment_preview_shortcode = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_preview_shortcode').closest('tr');
                if (jQuery(this).is(':checked')) {
                    if (is_pay_later_messaging_enable() === true && is_pay_later_messaging_payment_page_enable()) {
                        payment_preview_shortcode.show();
                    }
                } else {
                    payment_preview_shortcode.hide();
                }
            }).change();
        };

        setTimeout(function () {
            jQuery('#woocommerce_wpg_paypal_checkout_enabled_pay_later_messaging').trigger('change');
        }, 3);

        ppcp_copy_text('.home_copy_text');
        ppcp_copy_text('.category_copy_text');
        ppcp_copy_text('.product_copy_text');
        ppcp_copy_text('.cart_copy_text');
        ppcp_copy_text('.payment_copy_text');

        var is_pay_later_messaging_enable = function () {
            return jQuery('#woocommerce_wpg_paypal_checkout_enabled_pay_later_messaging').is(':checked');
        };

        var is_pay_later_messaging_home_page_enable = function () {
            return is_pay_later_messaging_enable() && jQuery.inArray('home', jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_page_type').val()) !== -1;
        };

        var pay_later_messaging_home_page_hide_show = function () {
            var pay_later_messaging_home_field_parent = jQuery('.pay_later_messaging_home_field').closest('tr');
            var pay_later_messaging_home_field = jQuery('.pay_later_messaging_home_field');
            var pay_later_messaging_home_base_field_parent = jQuery('.pay_later_messaging_home_base_field').closest('tr');
            var pay_later_messaging_home_base_field = jQuery('.pay_later_messaging_home_base_field');
            var pay_later_messaging_home_preview = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_preview');

            if (is_pay_later_messaging_home_page_enable()) {
                pay_later_messaging_home_field_parent.show();
                pay_later_messaging_home_field.show();
                pay_later_messaging_home_base_field_parent.show();
                pay_later_messaging_home_base_field.show();
                pay_later_messaging_home_preview.show();
            } else {
                pay_later_messaging_home_field_parent.hide();
                pay_later_messaging_home_field.hide();
                pay_later_messaging_home_base_field_parent.hide();
                pay_later_messaging_home_base_field.hide();
                pay_later_messaging_home_preview.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_layout_type').trigger('change');
            hide_show_home_shortcode();
        };

        var is_pay_later_messaging_category_page_enable = function () {
            return is_pay_later_messaging_enable() && jQuery.inArray('category', jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_page_type').val()) !== -1;
        };

        var pay_later_messaging_category_page_hide_show = function () {
            var pay_later_messaging_category_field_parent = jQuery('.pay_later_messaging_category_field').closest('tr');
            var pay_later_messaging_category_field = jQuery('.pay_later_messaging_category_field');
            var pay_later_messaging_category_base_field_parent = jQuery('.pay_later_messaging_category_base_field').closest('tr');
            var pay_later_messaging_category_base_field = jQuery('.pay_later_messaging_category_base_field');
            var pay_later_messaging_category_preview = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_preview');

            if (is_pay_later_messaging_category_page_enable()) {
                pay_later_messaging_category_field_parent.show();
                pay_later_messaging_category_field.show();
                pay_later_messaging_category_base_field_parent.show();
                pay_later_messaging_category_base_field.show();
                pay_later_messaging_category_preview.show();
            } else {
                pay_later_messaging_category_field_parent.hide();
                pay_later_messaging_category_field.hide();
                pay_later_messaging_category_base_field_parent.hide();
                pay_later_messaging_category_base_field.hide();
                pay_later_messaging_category_preview.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_layout_type').trigger('change');
            hide_show_category_shortcode();
        };

        var is_pay_later_messaging_product_page_enable = function () {
            return is_pay_later_messaging_enable() && jQuery.inArray('product', jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_page_type').val()) !== -1;
        };

        var pay_later_messaging_product_page_hide_show = function () {
            var pay_later_messaging_product_field_parent = jQuery('.pay_later_messaging_product_field').closest('tr');
            var pay_later_messaging_product_field = jQuery('.pay_later_messaging_product_field');
            var pay_later_messaging_product_base_field_parent = jQuery('.pay_later_messaging_product_base_field').closest('tr');
            var pay_later_messaging_product_base_field = jQuery('.pay_later_messaging_product_base_field');
            var pay_later_messaging_product_preview = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_preview');

            if (is_pay_later_messaging_product_page_enable()) {
                pay_later_messaging_product_field_parent.show();
                pay_later_messaging_product_field.show();
                pay_later_messaging_product_base_field_parent.show();
                pay_later_messaging_product_base_field.show();
                pay_later_messaging_product_preview.show();
            } else {
                pay_later_messaging_product_field_parent.hide();
                pay_later_messaging_product_field.hide();
                pay_later_messaging_product_base_field_parent.hide();
                pay_later_messaging_product_base_field.hide();
                pay_later_messaging_product_preview.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_layout_type').trigger('change');
            hide_show_product_shortcode();
        };

        var is_pay_later_messaging_cart_page_enable = function () {
            return is_pay_later_messaging_enable() && jQuery.inArray('cart', jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_page_type').val()) !== -1;
        };

        var pay_later_messaging_cart_page_hide_show = function () {
            var pay_later_messaging_cart_field_parent = jQuery('.pay_later_messaging_cart_field').closest('tr');
            var pay_later_messaging_cart_field = jQuery('.pay_later_messaging_cart_field');
            var pay_later_messaging_cart_base_field_parent = jQuery('.pay_later_messaging_cart_base_field').closest('tr');
            var pay_later_messaging_cart_base_field = jQuery('.pay_later_messaging_cart_base_field');
            var pay_later_messaging_cart_preview = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_preview');

            if (is_pay_later_messaging_cart_page_enable()) {
                pay_later_messaging_cart_field_parent.show();
                pay_later_messaging_cart_field.show();
                pay_later_messaging_cart_base_field_parent.show();
                pay_later_messaging_cart_base_field.show();
                pay_later_messaging_cart_preview.show();
            } else {
                pay_later_messaging_cart_field_parent.hide();
                pay_later_messaging_cart_field.hide();
                pay_later_messaging_cart_base_field_parent.hide();
                pay_later_messaging_cart_base_field.hide();
                pay_later_messaging_cart_preview.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_layout_type').trigger('change');
            hide_show_cart_shortcode();
        };

        var is_pay_later_messaging_payment_page_enable = function () {
            return is_pay_later_messaging_enable() && jQuery.inArray('payment', jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_page_type').val()) !== -1;
        };

        var pay_later_messaging_payment_page_hide_show = function () {
            var pay_later_messaging_payment_field_parent = jQuery('.pay_later_messaging_payment_field').closest('tr');
            var pay_later_messaging_payment_field = jQuery('.pay_later_messaging_payment_field');
            var pay_later_messaging_payment_base_field_parent = jQuery('.pay_later_messaging_payment_base_field').closest('tr');
            var pay_later_messaging_payment_base_field = jQuery('.pay_later_messaging_payment_base_field');
            var pay_later_messaging_payment_preview = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_preview');

            if (is_pay_later_messaging_payment_page_enable()) {
                pay_later_messaging_payment_field_parent.show();
                pay_later_messaging_payment_field.show();
                pay_later_messaging_payment_base_field_parent.show();
                pay_later_messaging_payment_base_field.show();
                pay_later_messaging_payment_preview.show();
            } else {
                pay_later_messaging_payment_field_parent.hide();
                pay_later_messaging_payment_field.hide();
                pay_later_messaging_payment_base_field_parent.hide();
                pay_later_messaging_payment_base_field.hide();
                pay_later_messaging_payment_preview.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_layout_type').trigger('change');
            hide_show_payment_shortcode();
        };

        jQuery('#woocommerce_wpg_paypal_checkout_enabled_pay_later_messaging').change(function () {
            var pay_later_messaging_field_parent = jQuery('.pay_later_messaging_field').closest('tr');
            var pay_later_messaging_field = jQuery('.pay_later_messaging_field');
            if (jQuery(this).is(':checked')) {
                pay_later_messaging_field_parent.show();
                pay_later_messaging_field.show();
            } else {
                pay_later_messaging_field_parent.hide();
                pay_later_messaging_field.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_page_type').trigger('change');
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_page_type').change(function () {
            pay_later_messaging_home_page_hide_show();
            pay_later_messaging_category_page_hide_show();
            pay_later_messaging_product_page_hide_show();
            pay_later_messaging_cart_page_hide_show();
            pay_later_messaging_payment_page_hide_show();
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_layout_type').change(function () {
            var pay_later_messaging_home_text_layout_field_parent = jQuery('.pay_later_messaging_home_text_layout_field').closest('tr');
            var pay_later_messaging_home_flex_layout_field_parent = jQuery('.pay_later_messaging_home_flex_layout_field').closest('tr');

            if (this.value === 'text') {
                if (is_pay_later_messaging_home_page_enable()) {
                    pay_later_messaging_home_text_layout_field_parent.show();
                    pay_later_messaging_home_flex_layout_field_parent.hide();
                }
            } else {
                if (is_pay_later_messaging_home_page_enable()) {
                    pay_later_messaging_home_flex_layout_field_parent.show();
                }
                pay_later_messaging_home_text_layout_field_parent.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_text_layout_logo_type').trigger('change');
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_text_layout_logo_type').change(function () {
            var pay_later_messaging_home_text_layout_logo_position = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_text_layout_logo_position').closest('tr');
            if (jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_home_layout_type').val() === 'text' && (this.value === 'primary' || this.value === 'alternative')) {
                if (is_pay_later_messaging_home_page_enable()) {
                    pay_later_messaging_home_text_layout_logo_position.show();
                }
            } else {
                pay_later_messaging_home_text_layout_logo_position.hide();
            }
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_layout_type').change(function () {
            var pay_later_messaging_category_text_layout_field_parent = jQuery('.pay_later_messaging_category_text_layout_field').closest('tr');
            var pay_later_messaging_category_flex_layout_field_parent = jQuery('.pay_later_messaging_category_flex_layout_field').closest('tr');

            if (this.value === 'text') {
                if (is_pay_later_messaging_category_page_enable()) {
                    pay_later_messaging_category_text_layout_field_parent.show();
                    pay_later_messaging_category_flex_layout_field_parent.hide();
                }
            } else {
                if (is_pay_later_messaging_category_page_enable()) {
                    pay_later_messaging_category_flex_layout_field_parent.show();
                }
                pay_later_messaging_category_text_layout_field_parent.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_text_layout_logo_type').trigger('change');
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_text_layout_logo_type').change(function () {
            var pay_later_messaging_category_text_layout_logo_position = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_text_layout_logo_position').closest('tr');
            if (jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_category_layout_type').val() === 'text' && (this.value === 'primary' || this.value === 'alternative')) {
                if (is_pay_later_messaging_category_page_enable()) {
                    pay_later_messaging_category_text_layout_logo_position.show();
                }
            } else {
                pay_later_messaging_category_text_layout_logo_position.hide();
            }
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_layout_type').change(function () {
            var pay_later_messaging_product_text_layout_field_parent = jQuery('.pay_later_messaging_product_text_layout_field').closest('tr');
            var pay_later_messaging_product_flex_layout_field_parent = jQuery('.pay_later_messaging_product_flex_layout_field').closest('tr');

            if (this.value === 'text') {
                if (is_pay_later_messaging_product_page_enable()) {
                    pay_later_messaging_product_text_layout_field_parent.show();
                    pay_later_messaging_product_flex_layout_field_parent.hide();
                }
            } else {
                if (is_pay_later_messaging_product_page_enable()) {
                    pay_later_messaging_product_flex_layout_field_parent.show();
                }
                pay_later_messaging_product_text_layout_field_parent.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_text_layout_logo_type').trigger('change');
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_text_layout_logo_type').change(function () {
            var pay_later_messaging_product_text_layout_logo_position = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_text_layout_logo_position').closest('tr');
            if (jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_product_layout_type').val() === 'text' && (this.value === 'primary' || this.value === 'alternative')) {
                if (is_pay_later_messaging_product_page_enable()) {
                    pay_later_messaging_product_text_layout_logo_position.show();
                }
            } else {
                pay_later_messaging_product_text_layout_logo_position.hide();
            }
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_layout_type').change(function () {
            var pay_later_messaging_cart_text_layout_field_parent = jQuery('.pay_later_messaging_cart_text_layout_field').closest('tr');
            var pay_later_messaging_cart_flex_layout_field_parent = jQuery('.pay_later_messaging_cart_flex_layout_field').closest('tr');

            if (this.value === 'text') {
                if (is_pay_later_messaging_cart_page_enable()) {
                    pay_later_messaging_cart_text_layout_field_parent.show();
                    pay_later_messaging_cart_flex_layout_field_parent.hide();
                }
            } else {
                if (is_pay_later_messaging_cart_page_enable()) {
                    pay_later_messaging_cart_flex_layout_field_parent.show();
                }
                pay_later_messaging_cart_text_layout_field_parent.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_text_layout_logo_type').trigger('change');
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_text_layout_logo_type').change(function () {
            var pay_later_messaging_cart_text_layout_logo_position = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_text_layout_logo_position').closest('tr');
            if (jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_cart_layout_type').val() === 'text' && (this.value === 'primary' || this.value === 'alternative')) {
                if (is_pay_later_messaging_cart_page_enable()) {
                    pay_later_messaging_cart_text_layout_logo_position.show();
                }
            } else {
                pay_later_messaging_cart_text_layout_logo_position.hide();
            }
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_layout_type').change(function () {
            var pay_later_messaging_payment_text_layout_field_parent = jQuery('.pay_later_messaging_payment_text_layout_field').closest('tr');
            var pay_later_messaging_payment_flex_layout_field_parent = jQuery('.pay_later_messaging_payment_flex_layout_field').closest('tr');

            if (this.value === 'text') {
                if (is_pay_later_messaging_payment_page_enable()) {
                    pay_later_messaging_payment_text_layout_field_parent.show();
                    pay_later_messaging_payment_flex_layout_field_parent.hide();
                }
            } else {
                if (is_pay_later_messaging_payment_page_enable()) {
                    pay_later_messaging_payment_flex_layout_field_parent.show();
                }
                pay_later_messaging_payment_text_layout_field_parent.hide();
            }
            jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_text_layout_logo_type').trigger('change');
        }).change();

        jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_text_layout_logo_type').change(function () {
            var pay_later_messaging_payment_text_layout_logo_position = jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_text_layout_logo_position').closest('tr');
            if (jQuery('#woocommerce_wpg_paypal_checkout_pay_later_messaging_payment_layout_type').val() === 'text' && (this.value === 'primary' || this.value === 'alternative')) {
                if (is_pay_later_messaging_payment_page_enable()) {
                    pay_later_messaging_payment_text_layout_logo_position.show();
                }
            } else {
                pay_later_messaging_payment_text_layout_logo_position.hide();
            }
        }).change();

        jQuery("#woocommerce_wpg_paypal_checkout_product_button_layout").change(function () {
            if ($('#woocommerce_wpg_paypal_checkout_show_on_product_page').is(':checked')) {
                var wpg_paypal_checkout_product_tagline = jQuery("#woocommerce_wpg_paypal_checkout_product_button_tagline").closest('tr');
                if (this.value === 'vertical') {
                    wpg_paypal_checkout_product_tagline.hide();
                } else {
                    wpg_paypal_checkout_product_tagline.show();
                }
            }
        }).change();

        jQuery("#woocommerce_wpg_paypal_checkout_cart_button_layout").change(function () {
            if ($('#woocommerce_wpg_paypal_checkout_show_on_cart').is(':checked')) {
                var wpg_paypal_checkout_cart_tagline = jQuery("#woocommerce_wpg_paypal_checkout_cart_button_tagline").closest('tr');
                if (this.value === 'vertical') {
                    wpg_paypal_checkout_cart_tagline.hide();
                } else {
                    wpg_paypal_checkout_cart_tagline.show();
                }
            }
        }).change();

        jQuery("#woocommerce_wpg_paypal_checkout_checkout_button_layout").change(function () {
            if ($('#woocommerce_wpg_paypal_checkout_show_on_checkout_page').is(':checked')) {
                var wpg_paypal_checkout_checkout_tagline = jQuery("#woocommerce_wpg_paypal_checkout_checkout_button_tagline").closest('tr');
                if (this.value === 'vertical') {
                    wpg_paypal_checkout_checkout_tagline.hide();
                } else {
                    wpg_paypal_checkout_checkout_tagline.show();
                }
            }
        }).change();

        jQuery("#woocommerce_wpg_paypal_checkout_mini_cart_button_layout").change(function () {
            if ($('#woocommerce_wpg_paypal_checkout_show_on_mini_cart').is(':checked')) {
                var wpg_paypal_checkout_mini_cart_tagline = jQuery("#woocommerce_wpg_paypal_checkout_mini_cart_button_tagline").closest('tr');
                if (this.value === 'vertical') {
                    wpg_paypal_checkout_mini_cart_tagline.hide();
                } else {
                    wpg_paypal_checkout_mini_cart_tagline.show();
                }
            }
        }).change();
    });
})(jQuery);
