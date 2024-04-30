<?php


if ( ! function_exists( 'opd_pixel_tracker_instance' ) ) {
	$is_business_freemius = false;
} else {
	$is_business_freemius = opd_pixel_tracker_instance()->is_valid_license();
}

if ( ! function_exists( 'is_plugin_active' ) ) {
	require_once ABSPATH . 'wp-admin/includes/plugin.php';
}

$otb_plugin = 'ocean-ecommerce/ocean-ecommerce.php';

$is_otb_plugin_active = is_plugin_active( $otb_plugin );

$oec_pixel_tracker_enable = '';
if ( $is_otb_plugin_active ) {
	$oec_pixel_tracker_enable = opd_get_option( 'module_enable', 'oec_pixel_tracker', 'off' );
} else {
	$oec_pixel_tracker_enable = false;
}

$opd_pixel_tracker_enable = get_option( 'opd_pixel_tracker_enable', 'no' );
$is_woocommerce_active    = Ocean_Pro_Demos::is_woocommerce_active();

$module_enable = opd_get_option( 'module_enable', 'oec_pixel_tracker', 'off' );

$facebook_pixel_id     = opd_get_option( 'facebook_pixel_id', 'oec_pixel_tracker', '' );
$google_tag_manager_id = opd_get_option( 'google_tag_manager_id', 'oec_pixel_tracker', '' );
$tiktok_pixel_id       = opd_get_option( 'tiktok_pixel_id', 'oec_pixel_tracker', '' );


$enable_facebook_pixel           = opd_get_option( 'enable_facebook_pixel', 'oec_pixel_tracker', 'off' );
$fb_track_product_views_event    = opd_get_option( 'fb_track_product_views_event', 'oec_pixel_tracker', 'off' );
$fb_track_add_to_cart_event      = opd_get_option( 'fb_track_add_to_cart_event', 'oec_pixel_tracker', 'off' );
$fb_track_checkout_event         = opd_get_option( 'fb_track_checkout_event', 'oec_pixel_tracker', 'off' );
$fb_track_order_completion_event = opd_get_option( 'fb_track_order_completion_event', 'oec_pixel_tracker', 'off' );
$fb_track_view_content_event     = opd_get_option( 'fb_track_view_content_event', 'oec_pixel_tracker', 'off' );
$fb_track_search_event           = opd_get_option( 'fb_track_search_event', 'oec_pixel_tracker', 'off' );
$fb_track_contact_event          = opd_get_option( 'fb_track_contact_event', 'oec_pixel_tracker', 'off' );


$enable_google_tag_manager        = opd_get_option( 'enable_google_tag_manager', 'oec_pixel_tracker', 'off' );
$gtm_track_product_views_event    = opd_get_option( 'gtm_track_product_views_event', 'oec_pixel_tracker', 'off' );
$gtm_track_add_to_cart_event      = opd_get_option( 'gtm_track_add_to_cart_event', 'oec_pixel_tracker', 'off' );
$gtm_track_checkout_event         = opd_get_option( 'gtm_track_checkout_event', 'oec_pixel_tracker', 'off' );
$gtm_track_order_completion_event = opd_get_option( 'gtm_track_order_completion_event', 'oec_pixel_tracker', 'off' );

$enable_tiktok_pixel                       = opd_get_option( 'enable_tiktok_pixel', 'oec_pixel_tracker', 'off' );
$tiktok_pixel_track_product_views_event    = opd_get_option( 'tiktok_pixel_track_product_views_event', 'oec_pixel_tracker', 'off' );
$tiktok_pixel_track_add_to_cart_event      = opd_get_option( 'tiktok_pixel_track_add_to_cart_event', 'oec_pixel_tracker', 'off' );
$tiktok_pixel_track_checkout_event         = opd_get_option( 'tiktok_pixel_track_checkout_event', 'oec_pixel_tracker', 'off' );
$tiktok_pixel_track_order_completion_event = opd_get_option( 'tiktok_pixel_track_order_completion_event', 'oec_pixel_tracker', 'off' );
$tiktok_pixel_track_view_content_event     = opd_get_option( 'tiktok_pixel_track_view_content_event', 'oec_pixel_tracker', 'off' );
$tiktok_pixel_track_search_event           = opd_get_option( 'tiktok_pixel_track_search_event', 'oec_pixel_tracker', 'off' );
$tiktok_pixel_track_contact_event          = opd_get_option( 'tiktok_pixel_track_contact_event', 'oec_pixel_tracker', 'off' );


?>

<div class="oceanwp-tp-pane-box" id="oceanwp-tp-opd-pixel-tracker-settings">

	<?php require_once oceanwp_theme_panel()->panel_top_header(); ?>

	<div class="oceanwp-tp-wide-block">

		<div class="oceanwp-tp-wide-block">
			<div class="oceanwp-tp-block-outer">
				<img class="oceanwp-tp-wide-block-image" src="<?php echo esc_url( OPD_URL . 'includes/themepanel/assets/images/pixel-tracker.png' ); ?>" />
				<h2 class="oceanwp-tp-block-title"><?php esc_html_e( 'Pixel Tracker', 'oceanwp' ); ?></h2>
			</div>

			<?php if ( $oec_pixel_tracker_enable == 'on' ) : ?>
				<div class="ocean-ecommerce-text-block" data-setting-id="opd-pixel-tracker-enable">
					<div class="ocean-ecommerce-widget-description">
						<p class="ocean-ecommerce-tp-block-description warning"><?php echo esc_html__( 'Hi there! We noticed you have enabled Pixel Tracker in the Ocean eComm Treasure Box plugin. To simplify things for you and keep your user-experience at the highest level, we are encouraging you to access this feature through the Ocean eComm Treasure Box dashboard. Find more information about ', 'ocean-pro-demos' ); ?><a href="#" target="_blank"><?php echo esc_html__( 'how to use the Pixel Tracker within our documentation.', 'demos' ); ?></a></p>
					</div>
				</div>
			<?php else : ?>
				<?php if ( $is_business_freemius ) : ?>
					<h3 class="oceanwp-tp-block-description"><?php echo esc_html__( 'Enable Pixel Tracker', 'demos' ); ?></h3>
					<div id="ocean-pixel-tracker-enable" class="oceanwp-tp-switcher column-wrap">
						<label for="oceanwp-switch-pixel-tracker-enable" class="column-name">
							<input type="checkbox" role="checkbox" name="pixel-tracker-enable" value="true" id="oceanwp-switch-pixel-tracker-enable" <?php checked( $opd_pixel_tracker_enable === 'yes' ); ?> />
							<span class="slider round"></span>
						</label>
					</div>	
				<?php else : ?>
					<div class="ocean-ecommerce-text-block" data-setting-id="opd-pixel-tracker-enable">
						<div class="ocean-ecommerce-widget-description">
							<p class="ocean-ecommerce-tp-block-description warning"><?php echo esc_html__( 'You require a higher licensing plan to utilize this feature. Kindly upgrade your license or contact us for more information at support [at] oceanwp [dot] org', 'demos' ); ?></a></p>
						</div>
					</div>
				<?php endif; ?>
			<?php endif; ?>
		</div>

		<?php if ( ! ( $oec_pixel_tracker_enable == 'on' ) && $is_business_freemius ) : ?>
			<form class="save_pro_demos_pixel_settings" style="<?php echo $opd_pixel_tracker_enable !== 'yes' ? 'display: none;' : ''; ?>">
				<div class="oceanwp-tp-block-outer" id="opd-pixel-tracker-block">
					<div class="ocean-tp-tabs-container">

						<div class="tab-scroll">
							<button class="scroll-btn left-scroll"><i class=" fa fa-angle-left" aria-hidden="true" role="img"></i></button>
							<button class="scroll-btn right-scroll"><i class=" fa fa-angle-right" aria-hidden="true" role="img"></i></button>
						</div>
						
						<div class="tabs-ocean-tp-tabs-container">

							<div class="tabs">
								<input type="radio" id="radio-1" name="tabs" checked />
								<label class="tab" for="radio-1"><?php esc_html_e( 'Facebook', 'demos' ); ?><span class="tab-icon"><?php oceanwp_icon( 'facebook' ); ?></span></label>
								<input type="radio" id="radio-2" name="tabs" />
								<label class="tab" for="radio-2"><?php esc_html_e( 'Google Tag', 'demos' ); ?><span class="tab-icon"><?php oceanwp_icon( 'google_drive' ); ?></span></label>
								<input type="radio" id="radio-3" name="tabs" />
								<label class="tab" for="radio-3"><?php esc_html_e( 'TikTok', 'demos' ); ?><span class="tab-icon"><?php oceanwp_icon( 'tiktok' ); ?></span></label>
								<span class="glider"></span>
							</div>
						</div>


						<div class="ocean-tp-tab-content" id="content-1">
								<div class="control-group">
									<label for="enable-facebook-pixel" class="control-label"><?php esc_html_e( 'Enable Meta (Facebook) Pixel', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-facebook-pixel" name="enable-facebook-pixel" value="on" class="toggle-input" <?php checked( $enable_facebook_pixel === 'on' ); ?>>
										<label for="enable-facebook-pixel" class="toggle-label"></label>
									</div>
								</div>

								<div class="control-group">
									<label for="facebook-pixel-id" class="control-label"><?php esc_html_e( 'Meta (Facebook) Pixel ID', 'demos' ); ?></label>
									<input type="text" id="facebook-pixel-id" name="facebook-pixel-id" class="text-input" value="<?php echo esc_attr( $facebook_pixel_id ); ?>">
								</div>

								<div class="control-group">
										<label for="enable-fb-content-views-tracking" class="control-label"><?php esc_html_e( 'Enable Facebook View Content Event Tracking', 'demos' ); ?></label>
										<div class="toggle-switch">
											<input type="checkbox" id="enable-fb-content-views-tracking" name="enable-fb-content-views-tracking" value="on" class="toggle-input" <?php checked( $fb_track_view_content_event === 'on' ); ?>>
											<label for="enable-fb-content-views-tracking" class="toggle-label"></label>
										</div>
									</div>

									<div class="control-group">
										<label for="enable-fb-search-tracking" class="control-label"><?php esc_html_e( 'Enable Facebook Search Event Tracking', 'demos' ); ?></label>
										<div class="toggle-switch">
											<input type="checkbox" id="enable-fb-search-tracking" name="enable-fb-search-tracking" value="on" class="toggle-input" <?php checked( $fb_track_search_event === 'on' ); ?>>
											<label for="enable-fb-search-tracking" class="toggle-label"></label>
										</div>
									</div>
									
									<div class="control-group">
										<label for="enable-fb-contact-tracking" class="control-label"><?php esc_html_e( 'Enable Facebook Contact Event Tracking', 'demos' ); ?></label>
										<div class="toggle-switch">
											<input type="checkbox" id="enable-fb-contact-tracking" name="enable-fb-contact-tracking" value="on" class="toggle-input" <?php checked( $fb_track_contact_event === 'on' ); ?>>
											<label for="enable-fb-contact-tracking" class="toggle-label"></label>
										</div>
									</div>

								<?php if ( $is_woocommerce_active ) : ?>

									<div class="control-group">
										<label for="enable-fb-product-views-tracking" class="control-label"><?php esc_html_e( 'Enable Facebook Product Views Event Tracking', 'demos' ); ?></label>
										<div class="toggle-switch">
											<input type="checkbox" id="enable-fb-product-views-tracking" name="enable-fb-product-views-tracking" value="on" class="toggle-input" <?php checked( $fb_track_product_views_event === 'on' ); ?>>
											<label for="enable-fb-product-views-tracking" class="toggle-label"></label>
										</div>
									</div>

									<div class="control-group">
										<label for="enable-fb-add-to-cart-tracking" class="control-label"><?php esc_html_e( 'Enable Facebook Add to Cart Event Tracking', 'demos' ); ?></label>
										<div class="toggle-switch">
											<input type="checkbox" id="enable-fb-add-to-cart-tracking" name="enable-fb-add-to-cart-tracking" value="on" class="toggle-input" <?php checked( $fb_track_add_to_cart_event === 'on' ); ?>>
											<label for="enable-fb-add-to-cart-tracking" class="toggle-label"></label>
										</div>
									</div>
									
									<div class="control-group">
										<label for="enable-fb-checkout-tracking" class="control-label"><?php esc_html_e( 'Enable Facebook Checkout Event Tracking', 'demos' ); ?></label>
										<div class="toggle-switch">
											<input type="checkbox" id="enable-fb-checkout-tracking" name="enable-fb-checkout-tracking" value="on" class="toggle-input" <?php checked( $fb_track_checkout_event === 'on' ); ?>>
											<label for="enable-fb-checkout-tracking" class="toggle-label"></label>
										</div>
									</div>
									
									<div class="control-group">
										<label for="enable-fb-order-completion-tracking" class="control-label"><?php esc_html_e( 'Enable Facebook Order Completion Event Tracking', 'demos' ); ?></label>
										<div class="toggle-switch">
											<input type="checkbox" id="enable-fb-order-completion-tracking" name="enable-fb-order-completion-tracking" value="on" class="toggle-input" <?php checked( $fb_track_order_completion_event === 'on' ); ?>>
											<label for="enable-fb-order-completion-tracking" class="toggle-label"></label>
										</div>
									</div>
									<?php else : ?>
									<div class="ocean-ecommerce-text-block" data-setting-id="opd-pixel-tracker-enable">
										<div class="ocean-ecommerce-widget-description">
											<p class="ocean-ecommerce-tp-block-description warning"><?php echo esc_html__( 'You need to have Woocommerce installed and activated to use some of Pixel Tracker options.', 'demos' ); ?></a></p>
										</div>
									</div>
								<?php endif; ?>
						</div>

						<div class="ocean-tp-tab-content" id="content-2">

							<div class="control-group">
								<label for="enable-google-tag-manager" class="control-label"><?php esc_html_e( 'Enable Google Tag Manager', 'demos' ); ?></label>
								<div class="toggle-switch">
									<input type="checkbox" id="enable-google-tag-manager" name="enable-google-tag-manager" value="on" class="toggle-input" <?php checked( $enable_google_tag_manager === 'on' ); ?>>
									<label for="enable-google-tag-manager" class="toggle-label"></label>
								</div>
							</div>

							<div class="control-group">
								<label for="google-tag-manager-id" class="control-label"><?php esc_html_e( 'Google Tag Manager ID', 'demos' ); ?></label>
								<input type="text" id="google-tag-manager-id" name="google-tag-manager-id" class="text-input" value="<?php echo esc_attr( $google_tag_manager_id ); ?>">
							</div>

							<?php if ( $is_woocommerce_active ) : ?>

								<div class="control-group">
									<label for="enable-gtm-product-views-tracking" class="control-label"><?php esc_html_e( 'Enable GTM Product Views Event Tracking', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-gtm-product-views-tracking" name="enable-gtm-product-views-tracking" value="on" class="toggle-input" <?php checked( $gtm_track_product_views_event === 'on' ); ?>>
										<label for="enable-gtm-product-views-tracking" class="toggle-label"></label>
									</div>
								</div>

								<div class="control-group">
									<label for="enable-gtm-add-to-cart-tracking" class="control-label"><?php esc_html_e( 'Enable GTM Add to Cart Event Tracking', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-gtm-add-to-cart-tracking" name="enable-gtm-add-to-cart-tracking" value="on" class="toggle-input" <?php checked( $gtm_track_add_to_cart_event === 'on' ); ?>>
										<label for="enable-gtm-add-to-cart-tracking" class="toggle-label"></label>
									</div>
								</div>

								<div class="control-group">
									<label for="enable-gtm-checkout-tracking" class="control-label"><?php esc_html_e( 'Enable GTM Checkout Event Tracking', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-gtm-checkout-tracking" name="enable-gtm-checkout-tracking" value="on" class="toggle-input" <?php checked( $gtm_track_checkout_event === 'on' ); ?>>
										<label for="enable-gtm-checkout-tracking" class="toggle-label"></label>
									</div>
								</div>

								<div class="control-group">
									<label for="enable-order-completion-tracking-gtm" class="control-label"><?php esc_html_e( 'Enable Order Completion Event Tracking', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-order-completion-tracking-gtm" name="enable-order-completion-tracking-gtm" value="on" class="toggle-input" <?php checked( $gtm_track_order_completion_event === 'on' ); ?>>
										<label for="enable-order-completion-tracking-gtm" class="toggle-label"></label>
									</div>
								</div>

								<?php else : ?>
									<div class="ocean-ecommerce-text-block" data-setting-id="opd-pixel-tracker-enable">
										<div class="ocean-ecommerce-widget-description">
											<p class="ocean-ecommerce-tp-block-description warning"><?php echo esc_html__( 'You need to have Woocommerce installed and activated to use some of Pixel Tracker options.', 'demos' ); ?></a></p>
										</div>
									</div>
								<?php endif; ?>
						</div>

						<div class="ocean-tp-tab-content" id="content-3">
							<div class="control-group">
								<label for="enable-tiktok-pixel" class="control-label"><?php esc_html_e( 'Enable TikTok Pixel', 'demos' ); ?></label>
								<div class="toggle-switch">
									<input type="checkbox" id="enable-tiktok-pixel" name="enable-tiktok-pixel" value="on" class="toggle-input" <?php checked( $enable_tiktok_pixel === 'on' ); ?>>
									<label for="enable-tiktok-pixel" class="toggle-label"></label>
								</div>
							</div>

							<div class="control-group">
								<label for="tiktok-pixel-id" class="control-label"><?php esc_html_e( 'TikTok Pixel ID', 'demos' ); ?></label>
								<input type="text" id="tiktok-pixel-id" name="tiktok-pixel-id" class="text-input" value="<?php echo esc_attr( $tiktok_pixel_id ); ?>">
							</div>

							<div class="control-group">
								<label for="enable-tiktok-content-views-tracking" class="control-label"><?php esc_html_e( 'Enable TikTok View Content Event Tracking', 'demos' ); ?></label>
								<div class="toggle-switch">
									<input type="checkbox" id="enable-tiktok-content-views-tracking" name="enable-tiktok-content-views-tracking" value="on" class="toggle-input" <?php checked( $tiktok_pixel_track_view_content_event === 'on' ); ?>>
									<label for="enable-tiktok-content-views-tracking" class="toggle-label"></label>
								</div>
							</div>

							<div class="control-group">
								<label for="enable-tiktok-search-tracking" class="control-label"><?php esc_html_e( 'Enable TikTok Search Event Tracking', 'demos' ); ?></label>
								<div class="toggle-switch">
									<input type="checkbox" id="enable-tiktok-search-tracking" name="enable-tiktok-search-tracking" value="on" class="toggle-input" <?php checked( $tiktok_pixel_track_search_event === 'on' ); ?>>
									<label for="enable-tiktok-search-tracking" class="toggle-label"></label>
								</div>
							</div>
							
							<div class="control-group">
								<label for="enable-tiktok-contact-tracking" class="control-label"><?php esc_html_e( 'Enable TikTok Contact Event Tracking', 'demos' ); ?></label>
								<div class="toggle-switch">
									<input type="checkbox" id="enable-tiktok-contact-tracking" name="enable-tiktok-contact-tracking" value="on" class="toggle-input" <?php checked( $tiktok_pixel_track_contact_event === 'on' ); ?>>
									<label for="enable-tiktok-contact-tracking" class="toggle-label"></label>
								</div>
							</div>

							<?php if ( $is_woocommerce_active ) : ?>

								<div class="control-group">
									<label for="enable-tiktok-product-views-tracking" class="control-label"><?php esc_html_e( 'Enable TikTok Product Views Event Tracking', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-tiktok-product-views-tracking" name="enable-tiktok-product-views-tracking" value="on" class="toggle-input" <?php checked( $tiktok_pixel_track_product_views_event === 'on' ); ?>>
										<label for="enable-tiktok-product-views-tracking" class="toggle-label"></label>
									</div>
								</div>

								<div class="control-group">
									<label for="enable-tiktok-add-to-cart-tracking" class="control-label"><?php esc_html_e( 'Enable TikTok Add to Cart Event Tracking', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-tiktok-add-to-cart-tracking" name="enable-tiktok-add-to-cart-tracking" value="on" class="toggle-input" <?php checked( $tiktok_pixel_track_add_to_cart_event === 'on' ); ?>>
										<label for="enable-tiktok-add-to-cart-tracking" class="toggle-label"></label>
									</div>
								</div>
								
								<div class="control-group">
									<label for="enable-tiktok-checkout-tracking" class="control-label"><?php esc_html_e( 'Enable TikTok Checkout Event Tracking', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-tiktok-checkout-tracking" name="enable-tiktok-checkout-tracking" value="on" class="toggle-input" <?php checked( $tiktok_pixel_track_checkout_event === 'on' ); ?>>
										<label for="enable-tiktok-checkout-tracking" class="toggle-label"></label>
									</div>
								</div>
								
								<div class="control-group">
									<label for="enable-tiktok-order-completion-tracking" class="control-label"><?php esc_html_e( 'Enable TikTok Order Completion Event Tracking', 'demos' ); ?></label>
									<div class="toggle-switch">
										<input type="checkbox" id="enable-tiktok-order-completion-tracking" name="enable-tiktok-order-completion-tracking" value="on" class="toggle-input" <?php checked( $tiktok_pixel_track_order_completion_event === 'on' ); ?>>
										<label for="enable-tiktok-order-completion-tracking" class="toggle-label"></label>
									</div>
								</div>
								<?php else : ?>
									<div class="ocean-ecommerce-text-block" data-setting-id="opd-pixel-tracker-enable">
										<div class="ocean-ecommerce-widget-description">
											<p class="ocean-ecommerce-tp-block-description warning"><?php echo esc_html__( 'You need to have Woocommerce installed and activated to use some of Pixel Tracker options.', 'demos' ); ?></a></p>
										</div>
									</div>
							<?php endif; ?>
						</div>

					</div>



				</div>
				<?php submit_button( null, 'primary', 'submit', true, array( 'data-opd-track-settings' => 'yes' ) ); ?>
			</form>
		<?php endif; ?>

	</div>
</div>
