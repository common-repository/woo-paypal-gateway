<?php

/**
 * @wordpress-plugin
 * Plugin Name:       Payment Gateway for PayPal on WooCommerce
 * Plugin URI:        https://profiles.wordpress.org/easypayment
 * Description:       Seamlessly enable PayPal payments for WooCommerce. Accept PayPal, Pay Later, cards, wallets, and bank payments—powered by an official PayPal Partner.
 * Version:           9.0.9
 * Author:            easypayment
 * Author URI:        https://profiles.wordpress.org/easypayment/
 * License:           GNU General Public License v3.0
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       woo-paypal-gateway
 * Domain Path:       /languages
 * Requires at least: 5.3
 * Requires PHP: 7.2
 * Requires Plugins: woocommerce
 * Tested up to: 6.6.2
 * WC requires at least: 3.9
 * WC tested up to: 9.3.3
 */
if (!defined('WPINC')) {
    die;
}

define('WPG_PLUGIN_VERSION', '9.0.9');
if (!defined('WPG_PLUGIN_PATH')) {
    define('WPG_PLUGIN_PATH', untrailingslashit(plugin_dir_path(__FILE__)));
}
if (!defined('WPG_PLUGIN_DIR')) {
    define('WPG_PLUGIN_DIR', dirname(__FILE__));
}
if (!defined('WPG_PLUGIN_BASENAME')) {
    define('WPG_PLUGIN_BASENAME', plugin_basename(__FILE__));
}
if (!defined('WPG_PLUGIN_ASSET_URL')) {
    define('WPG_PLUGIN_ASSET_URL', plugin_dir_url(__FILE__));
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-woo-paypal-gateway-activator.php
 */
function activate_woo_paypal_gateway() {
    require_once plugin_dir_path(__FILE__) . 'includes/class-woo-paypal-gateway-activator.php';
    Woo_Paypal_Gateway_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-woo-paypal-gateway-deactivator.php
 */
function deactivate_woo_paypal_gateway() {
    require_once plugin_dir_path(__FILE__) . 'includes/class-woo-paypal-gateway-deactivator.php';
    Woo_Paypal_Gateway_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_woo_paypal_gateway');
register_deactivation_hook(__FILE__, 'deactivate_woo_paypal_gateway');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . '/ppcp/includes/class-ppcp-paypal-checkout-for-woocommerce.php';
require plugin_dir_path(__FILE__) . 'includes/class-woo-paypal-gateway.php';

/**
 * Begins execution of the plugin.
 * @since    1.0.0
 */
function run_woo_paypal_gateway() {
    $plugin = new Woo_Paypal_Gateway();
    $plugin->run();
}

function init_wpg_woo_paypal_gateway_class() {
    if (class_exists('WC_Payment_Gateway')) {
        run_ppcp_paypal_checkout_for_woocommerce();
    }
    run_woo_paypal_gateway();
}

add_action('plugins_loaded', 'init_wpg_woo_paypal_gateway_class', 11);

if (!function_exists('run_ppcp_paypal_checkout_for_woocommerce')) {
    run_ppcp_paypal_checkout_for_woocommerce();
}

function run_ppcp_paypal_checkout_for_woocommerce() {
    $plugin = new PPCP_Paypal_Checkout_For_Woocommerce();
    $plugin->run();
}

add_action('before_woocommerce_init', function () {
    if (class_exists(\Automattic\WooCommerce\Utilities\FeaturesUtil::class)) {
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('custom_order_tables', __FILE__, true);
        \Automattic\WooCommerce\Utilities\FeaturesUtil::declare_compatibility('cart_checkout_blocks', __FILE__, true);
    }
});

add_action( 'woocommerce_blocks_loaded', function() {
    try {
        if (!class_exists('Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType')) {
            return;
        }
        require_once( WPG_PLUGIN_DIR . '/ppcp/checkout-block/ppcp-checkout-block.php' );
        require_once( WPG_PLUGIN_DIR . '/ppcp/checkout-block/ppcp-cc-block.php' );
        add_action(
                'woocommerce_blocks_payment_method_type_registration',
                function (Automattic\WooCommerce\Blocks\Payments\PaymentMethodRegistry $payment_method_registry) {
                    $payment_method_registry->register(new PPCP_Checkout_Block);
                    $payment_method_registry->register(new PPCP_Checkout_CC_Block);
                }
        );
    } catch (Exception $ex) {

    }
});
