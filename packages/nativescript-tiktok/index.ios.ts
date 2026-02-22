import { Utils } from '@nativescript/core';
import { LogLevel, Events } from '.';
const native_ = Symbol('[[native]]');
export class Config {
	[native_]: TikTokConfig;
	constructor(accessToken: string, appId: string, tiktokAppId: string | string[]) {
		let ids = '';
		if (Array.isArray(tiktokAppId)) {
			ids = tiktokAppId.join(',');
		} else {
			ids = tiktokAppId;
		}
		this[native_] = TikTokConfig.configWithAccessTokenAppIdTiktokAppId(accessToken, appId, ids);
	}
	get native() {
		return this[native_];
	}

	get paymentTracking(): boolean {
		return this.native.paymentTrackingStatus == TikTokPaymentTrackStatus.enabled;
	}

	set paymentTrackingEnabled(enabled: boolean) {
		this.native.paymentTrackingStatus = enabled ? TikTokPaymentTrackStatus.enabled : TikTokPaymentTrackStatus.disabled;
	}

	get debugMode(): boolean {
		return this.native.debugModeEnabled;
	}

	set debugMode(enabled: boolean) {
		this.native.debugModeEnabled = enabled;
	}

	setFlushTimeInterval(seconds: number): this {
		this.native.initialFlushDelay = seconds;
		return this;
	}

	set autoTracking(value: boolean) {
		this.native.automaticTrackingEnabled = value;
	}

	get autoTracking(): boolean {
		return this.native.automaticTrackingEnabled;
	}

	set launchTracking(value: boolean) {
		this.native.launchTrackingEnabled = value;
	}

	get launchTracking(): boolean {
		return this.native.launchTrackingEnabled;
	}

	disableAutoEnhancedDataPostbackEvent(): this {
		this.native.disableAutoEnhancedDataPostbackEvent();
		return this;
	}

	set retentionTracking(value: boolean) {
		this.native.retentionTrackingEnabled = value;
	}

	get retentionTracking(): boolean {
		return this.native.retentionTrackingEnabled;
	}

	set installTracking(value: boolean) {
		this.native.installTrackingEnabled = value;
	}

	get installTracking(): boolean {
		return this.native.installTrackingEnabled;
	}

	setIsLowPerformanceDevice(isLowPerformanceDevice: boolean): this {
		this.native.setIsLowPerformanceDevice(isLowPerformanceDevice);
		return this;
	}

	disableAdvertiserIDCollection(): this {
		this.native.disableSKAdNetworkSupport();
		return this;
	}

	setLogLevel(level: LogLevel): this {
		switch (level) {
			case LogLevel.None:
				this.native.setLogLevel(TikTokLogLevel.Suppress);
				break;
			case LogLevel.Info:
				this.native.setLogLevel(TikTokLogLevel.Info);
				break;
			case LogLevel.Warning:
				this.native.setLogLevel(TikTokLogLevel.Warn);
				break;
			case LogLevel.Debug:
				this.native.setLogLevel(TikTokLogLevel.Debug);
				break;
		}
		return this;
	}
}
export class BusinessSdk {
	static initialize(config: Config): Promise<BusinessSdk> {
		return new Promise((resolve, reject) => {
			TikTokBusiness.initializeSdkCompletionHandler(config.native, (success, error) => {
				if (success) {
					resolve(new BusinessSdk());
				} else {
					reject(new Error(`Initialization failed: ${error.code} - ${error.localizedDescription}`));
				}
			});
		});
	}

	static startTrack(): void {
		TikTokBusiness.setTrackingEnabled(true);
	}

	static identify(externalId: string, externalUserName: string, email: string, phoneNumber: string): void {
		TikTokBusiness.identifyWithExternalIDExternalUserNamePhoneNumberEmail(externalId, externalUserName, phoneNumber, email);
	}

	static logout() {
		TikTokBusiness.logout();
	}

	static flush() {
		TikTokBusiness.explicitlyFlush();
	}

	static fetchDeferredDeepLinkData(): Promise<string> {
		return new Promise((resolve, reject) => {
			TikTokBusiness.fetchDeferredDeeplinkWithCompletion((deepLinkUrl, error) => {
				if (error) {
					reject(new Error(`Failed to fetch deferred deep link data: ${error.code} - ${error.localizedDescription} `));
				} else {
					resolve(deepLinkUrl.absoluteString);
				}
			});
		});
	}

	static trackEvent(options: { eventName: string; eventId?: string; event?: Events }): void {
		if (options) {
			let params: TikTokBaseEvent;
			const type: string = options.event?.type as never;
			const eventName = options.eventName;
			const eventId = options.eventId;
			switch (type) {
				case 'addToCart':
					if (eventId) {
						params = TikTokAddToCartEvent.alloc().initWithEventNameEventId(eventName, eventId);
					} else {
						params = TikTokAddToCartEvent.alloc().initWithEventName(eventName);
					}
					break;
				case 'adRevenue':
				case 'impressionLevelAdRevenue':
					if (eventId) {
						params = TikTokAdRevenueEvent.alloc().initWithEventNameEventId(eventName, eventId);
					} else {
						params = TikTokAdRevenueEvent.alloc().initWithEventName(eventName);
					}
					break;
				case 'addToWishlist':
					if (eventId) {
						params = TikTokAddToWishlistEvent.alloc().initWithEventNameEventId(eventName, eventId);
					} else {
						params = TikTokAddToWishlistEvent.alloc().initWithEventName(eventName);
					}
					break;
				case 'checkout':
					if (eventId) {
						params = TikTokCheckoutEvent.alloc().initWithEventNameEventId(eventName, eventId);
					} else {
						params = TikTokCheckoutEvent.alloc().initWithEventName(eventName);
					}
					break;
				case 'purchase':
					if (eventId) {
						params = TikTokPurchaseEvent.alloc().initWithEventNameEventId(eventName, eventId);
					} else {
						params = TikTokPurchaseEvent.alloc().initWithEventName(eventName);
					}
					break;
				case 'viewContent':
					if (eventId) {
						params = TikTokViewContentEvent.alloc().initWithEventNameEventId(eventName, eventId);
					} else {
						params = TikTokViewContentEvent.alloc().initWithEventName(eventName);
					}
					break;
				default:
					if (eventId) {
						params = TikTokBaseEvent.alloc().initWithEventNameEventId(eventName, eventId);
					} else {
						params = TikTokBaseEvent.alloc().initWithEventName(eventName);
					}
					break;
			}

			if (options.event) {
				for (const key in options.event) {
					if (key === 'type') {
						continue;
					}
					const data = options.event[key];
					const value = Utils.dataSerialize(data);
					if (value === undefined) {
						continue;
					}
					if (key === undefined) {
						params.setValueForUndefinedKey(value, key);
					} else {
						params.setValueForKey(value, key);
					}
				}

				TikTokBusiness.trackTTEvent(params);
			} else if (eventId) {
				TikTokBusiness.trackEventWithId(eventName, eventId);
			} else {
				TikTokBusiness.trackEvent(eventName);
			}
		}
	}
}
