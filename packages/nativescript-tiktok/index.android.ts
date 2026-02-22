import { Utils } from '@nativescript/core';
import { Events, LogLevel, StandardEvent } from '.';
const native_ = Symbol('[[native]]');

function numberHasDecimals(value) {
	return !(value % 1 === 0);
}
function numberIs64Bit(value) {
	return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
}

function dataSerialize(data, wrapPrimitives) {
	let store;
	switch (typeof data) {
		case 'string':
		case 'boolean': {
			if (wrapPrimitives) {
				if (typeof data === 'string') {
					return new java.lang.String(data);
				}
				return new java.lang.Boolean(data);
			}
			return data;
		}
		case 'number': {
			const hasDecimals = numberHasDecimals(data);
			if (numberIs64Bit(data)) {
				if (hasDecimals) {
					return java.lang.Double.valueOf(data);
				} else {
					return java.lang.Long.valueOf(data);
				}
			} else {
				if (hasDecimals) {
					return java.lang.Float.valueOf(data);
				} else {
					return java.lang.Integer.valueOf(data);
				}
			}
		}
		case 'object': {
			if (!data) {
				return null;
			}
			if (data instanceof Date) {
				return new java.util.Date(data.getTime());
			}
			if (Array.isArray(data)) {
				store = new org.json.JSONArray();
				data.forEach((item) => store.put(dataSerialize(item, wrapPrimitives)));
				return store;
			}
			if (data.native) {
				return data.native;
			}
			store = new org.json.JSONObject();
			Object.keys(data).forEach((key) => store.put(key, dataSerialize(data[key], wrapPrimitives)));
			return store;
		}
		default:
			return null;
	}
}

export class Config {
	private _config: {
		paymentTracking?: boolean;
		debugMode?: boolean;
		autoTracking?: boolean;
		launchTracking?: boolean;
		retentionTracking?: boolean;
		installTracking?: boolean;
		accessToken: string;
		appId: string;
		tiktokAppId: string | string[];
		flushTimeInterval?: number;
		logLevel?: LogLevel;
		isLowPerformanceDevice?: boolean;
	};

	constructor(accessToken: string, appId: string, tiktokAppId: string | string[]) {
		let ids = '';
		if (Array.isArray(tiktokAppId)) {
			ids = tiktokAppId.join(',');
		} else {
			ids = tiktokAppId;
		}
		this[native_] = new com.tiktok.TikTokBusinessSdk.TTConfig(Utils.android.getApplicationContext(), accessToken).setAppId(appId).setTTAppId(ids);
		this._config = {
			accessToken,
			appId,
			tiktokAppId,
		};
	}
	get native() {
		let ids = '';
		if (Array.isArray(this._config.tiktokAppId)) {
			ids = this._config.tiktokAppId.join(',');
		} else {
			ids = this._config.tiktokAppId;
		}

		let ret = new com.tiktok.TikTokBusinessSdk.TTConfig(Utils.android.getApplicationContext(), this._config.accessToken).setAppId(this._config.appId).setTTAppId(ids);

		if (this._config.debugMode) {
			ret = ret.openDebugMode();
		}

		if ('isLowPerformanceDevice' in this._config) {
			if (this._config.isLowPerformanceDevice) {
				ret.setIsLowPerformanceDevice(true);
			} else {
				ret.setIsLowPerformanceDevice(false);
			}
		}

		if ('paymentTracking' in this._config) {
			if (this._config.paymentTracking) {
				ret.enableAutoIapTrack();
			} else {
				ret.disableAutoIapTrack();
			}
		}

		if ('autoTracking' in this._config) {
			if (!this._config.autoTracking) {
				ret.disableAutoEvents();
			}
		}

		if ('launchTracking' in this._config) {
			if (!this._config.launchTracking) {
				ret.disableLaunchLogging();
			}
		}

		if ('retentionTracking' in this._config) {
			if (!this._config.retentionTracking) {
				ret.disableRetentionLogging();
			}
		}

		if ('installTracking' in this._config) {
			if (!this._config.installTracking) {
				ret.disableInstallLogging();
			}
		}

		if ('flushTimeInterval' in this._config) {
			ret.setFlushTimeInterval(this._config.flushTimeInterval);
		}

		if ('logLevel' in this._config) {
			switch (this._config.logLevel) {
				case LogLevel.None:
					ret.setLogLevel(com.tiktok.TikTokBusinessSdk.LogLevel.NONE);
					break;
				case LogLevel.Warning:
					ret.setLogLevel(com.tiktok.TikTokBusinessSdk.LogLevel.WARN);
					break;
				case LogLevel.Info:
					ret.setLogLevel(com.tiktok.TikTokBusinessSdk.LogLevel.INFO);
					break;
				case LogLevel.Debug:
					ret.setLogLevel(com.tiktok.TikTokBusinessSdk.LogLevel.DEBUG);
					break;
			}
		}
		return ret;
	}

	get paymentTracking(): boolean {
		return this._config.paymentTracking ?? true;
	}

	set paymentTrackingEnabled(enabled: boolean) {
		this._config.paymentTracking = enabled;
	}

	get debugMode(): boolean {
		return this._config.debugMode ?? false;
	}

	set debugMode(enabled: boolean) {
		this._config.debugMode = enabled;
	}

	setFlushTimeInterval(seconds: number): this {
		this._config.flushTimeInterval = seconds;
		return this;
	}

	set autoTracking(value: boolean) {
		this._config.autoTracking = value;
	}

	get autoTracking(): boolean {
		return this._config.autoTracking ?? true;
	}

	set launchTracking(value: boolean) {
		this._config.launchTracking = value;
	}

	get launchTracking(): boolean {
		return this._config.launchTracking ?? true;
	}

	set retentionTracking(value: boolean) {
		this._config.retentionTracking = value;
	}

	get retentionTracking(): boolean {
		return this._config.retentionTracking ?? true;
	}

	set installTracking(value: boolean) {
		this._config.installTracking = value;
	}

	get installTracking(): boolean {
		return this._config.installTracking ?? true;
	}

	get logLevel(): LogLevel {
		return this._config.logLevel ?? LogLevel.None;
	}

	set logLevel(level: LogLevel) {
		this._config.logLevel = level;
	}
}

function toEventType(type: StandardEvent) {
	switch (type) {
		case StandardEvent.AchieveLevel:
			return com.tiktok.appevents.base.EventName.ACHIEVE_LEVEL;
		case StandardEvent.AddPaymentInfo:
			return com.tiktok.appevents.base.EventName.ADD_PAYMENT_INFO;
		case StandardEvent.AddToCart:
			return null;
		case StandardEvent.AddToWishlist:
			return null;
		case StandardEvent.AdRevenue:
			return null;
		case StandardEvent.Checkout:
			return null;
		case StandardEvent.CompleteTutorial:
			return com.tiktok.appevents.base.EventName.COMPLETE_TUTORIAL;
		case StandardEvent.CreateGroup:
			return com.tiktok.appevents.base.EventName.CREATE_GROUP;
		case StandardEvent.CreateRole:
			return com.tiktok.appevents.base.EventName.CREATE_ROLE;
		case StandardEvent.GenerateLead:
			return com.tiktok.appevents.base.EventName.GENERATE_LEAD;
		case StandardEvent.ImpressionLevelAdRevenue:
			return com.tiktok.appevents.base.EventName.IMPRESSION_LEVEL_AD_REVENUE;
		case StandardEvent.InAppADClick:
			return com.tiktok.appevents.base.EventName.IN_APP_AD_CLICK;
		case StandardEvent.InAppADImpr:
			return com.tiktok.appevents.base.EventName.IN_APP_AD_IMPR;
		case StandardEvent.InstallApp:
			return com.tiktok.appevents.base.EventName.INSTALL_APP;
		case StandardEvent.JoinGroup:
			return com.tiktok.appevents.base.EventName.JOIN_GROUP;
		case StandardEvent.LaunchAPP:
			return com.tiktok.appevents.base.EventName.LAUNCH_APP;
		case StandardEvent.Login:
			return com.tiktok.appevents.base.EventName.LOGIN;
		case StandardEvent.Purchase:
			return null;
		case StandardEvent.Rate:
			return com.tiktok.appevents.base.EventName.RATE;
		case StandardEvent.Registration:
			return com.tiktok.appevents.base.EventName.REGISTRATION;
		case StandardEvent.Search:
			return com.tiktok.appevents.base.EventName.SEARCH;
		case StandardEvent.SpendCredits:
			return com.tiktok.appevents.base.EventName.SPEND_CREDITS;
		case StandardEvent.StartTrial:
			return com.tiktok.appevents.base.EventName.START_TRIAL;
		case StandardEvent.Subscribe:
			return com.tiktok.appevents.base.EventName.SUBSCRIBE;
		case StandardEvent.UnlockAchievement:
			return com.tiktok.appevents.base.EventName.UNLOCK_ACHIEVEMENT;
		case StandardEvent.ViewContent:
			return null;
	}
}
export class BusinessSdk {
	static initialize(config: Config): Promise<BusinessSdk> {
		return new Promise((resolve, reject) => {
			const autoTracking = config.autoTracking ?? true;
			com.tiktok.TikTokBusinessSdk.initializeSdk(
				config.native,
				new com.tiktok.TikTokBusinessSdk.TTInitCallback({
					success() {
						if (autoTracking) {
							com.tiktok.TikTokBusinessSdk.startTrack();
						}
						resolve(new BusinessSdk());
					},
					fail(errorCode, errorMessage) {
						reject(new Error(`Initialization failed: ${errorCode} - ${errorMessage}`));
					},
				}),
			);
		});
	}

	static identify(externalId: string, externalUserName: string, email: string, phoneNumber: string): void {
		com.tiktok.TikTokBusinessSdk.identify(externalId, externalUserName, email, phoneNumber);
	}

	static logout() {
		com.tiktok.TikTokBusinessSdk.logout();
	}

	static flush() {
		com.tiktok.TikTokBusinessSdk.flush();
	}

	static fetchDeferredDeepLinkData(): Promise<string> {
		return new Promise((resolve, reject) => {
			com.tiktok.TikTokBusinessSdk.fetchDeferredDeeplinkWithCompletion(
				new com.tiktok.TikTokBusinessSdk.FetchDeferredDeeplinkCompletion({
					completion(deepLinkUrl, error) {
						if (error) {
							reject(new Error(`Failed to fetch deferred deep link data: ${error.getCode()} - ${error.getMsg()} `));
						} else {
							resolve(deepLinkUrl);
						}
					},
				}),
			);
		});
	}

	static trackEvent(options: { eventName: string; eventId?: string; event?: Events }): void {
		if (options.event) {
			let params: com.tiktok.appevents.base.TTBaseEvent;
			switch (options.event.type) {
				case 'addToCart':
					params = new com.tiktok.appevents.contents.TTAddToCartEvent(options.eventName, dataSerialize(options.event, true), options.eventId ?? '');
					break;
				case 'adRevenue':
				case 'impressionLevelAdRevenue':
					params = new com.tiktok.appevents.base.TTAdRevenueEvent(options.eventName, dataSerialize(options.event, true), options.eventId ?? '');
					break;
				case 'addToWishlist':
					params = new com.tiktok.appevents.contents.TTAddToWishlistEvent(options.eventName, dataSerialize(options.event, true), options.eventId ?? '');
					break;
				case 'checkout':
					params = new com.tiktok.appevents.contents.TTCheckoutEvent(options.eventName, dataSerialize(options.event, true), options.eventId ?? '');
					break;
				case 'purchase':
					params = new com.tiktok.appevents.contents.TTPurchaseEvent(options.eventName, dataSerialize(options.event, true), options.eventId ?? '');
					break;
				case 'viewContent':
					params = new com.tiktok.appevents.contents.TTViewContentEvent(options.eventName, dataSerialize(options.event, true), options.eventId ?? '');
					break;
				default:
					params = new com.tiktok.appevents.base.TTBaseEvent(options.eventName, dataSerialize(options.event, true), options.eventId ?? '');
			}

			if (options.event) {
				for (const key in options.event) {
					if (key === 'type') {
						continue;
					}
					const data = options.event[key];
					const value = Utils.dataSerialize(data);
					params.properties.put(key, value);
				}

				com.tiktok.TikTokBusinessSdk.trackTTEvent(params);
			} else if (options.eventId) {
				const eventType = toEventType(options.event?.type as StandardEvent) ?? options.eventName;
				com.tiktok.TikTokBusinessSdk.trackTTEvent(eventType, options.eventId);
			} else {
				const eventType = toEventType(options.event?.type as StandardEvent) ?? options.eventName;
				com.tiktok.TikTokBusinessSdk.trackTTEvent(eventType);
			}
		}
	}
}
