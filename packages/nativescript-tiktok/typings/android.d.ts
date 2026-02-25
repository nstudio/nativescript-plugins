declare module com {
	export module tiktok {
		export class BuildConfig {
			public static class: java.lang.Class<com.tiktok.BuildConfig>;
			public static DEBUG: boolean = 0;
			public static LIBRARY_PACKAGE_NAME: string = 'com.tiktok';
			public static BUILD_TYPE: string = 'release';
			public static VERSION_NAME: string = '1.6.0';
			public constructor();
		}
	}
}

declare module com {
	export module tiktok {
		export class TikTokBusinessSdk {
			public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk>;
			public static isActivatedLogicRun: boolean;
			public static INVALID_ID: number = -2;
			public static diskListener: com.tiktok.TikTokBusinessSdk.DiskStatusListener;
			public static memoryListener: com.tiktok.TikTokBusinessSdk.MemoryListener;
			public static networkListener: com.tiktok.TikTokBusinessSdk.NetworkListener;
			public static nextTimeFlushListener: com.tiktok.TikTokBusinessSdk.NextTimeFlushListener;
			public static getAccessToken(): string;
			public static flush(): void;
			public static trackGooglePlayPurchase(purchaseInfos: java.util.List<com.tiktok.appevents.TTPurchaseInfo>): void;
			public static onlyAppIdProvided(): boolean;
			public static getTTAppId(): string;
			/** @deprecated */
			public static trackEvent(event: string, props: org.json.JSONObject): void;
			public static isSystemActivated(): boolean;
			public static getNetworkSwitch(): boolean;
			public static logout(): void;
			public static enableDebugMode(): void;
			public static isInitialized(): boolean;
			public static isEdpEnable(): boolean;
			public static setSdkGlobalSwitch(sdkGlobalSwitch: java.lang.Boolean): void;
			public static crashSDK(): void;
			public static getFirstTTAppIds(): java.math.BigInteger;
			public static enableAutoIapTrack(): boolean;
			/** @deprecated */
			public static trackEvent(event: string): void;
			public static trackTTEvent(event: com.tiktok.appevents.base.TTBaseEvent): void;
			public static setApiAvailableVersion(apiAvailableVersion: string): void;
			public static identify(initTimeMS: string, isReset: string, endTimeMS: string, meta: string): void;
			public static registerEDPLifecycleCallback(context: globalAndroid.app.Application): void;
			public static getTTAppIds(): androidNative.Array<string>;
			public static getApplicationContext(): globalAndroid.app.Application;
			public static getSessionID(): string;
			public static getAppId(): string;
			public static startTrack(): void;
			public static getTestEventCode(): string;
			public static isGlobalConfigFetched(): java.lang.Boolean;
			public static initializeSdk(existingExHandler: com.tiktok.TikTokBusinessSdk.TTConfig, endTimeMS: com.tiktok.TikTokBusinessSdk.TTInitCallback): void;
			public static trackGooglePlayPurchase(info: com.tiktok.appevents.TTPurchaseInfo): void;
			public static clearAll(): void;
			public static initializeSdk(ttConfig: com.tiktok.TikTokBusinessSdk.TTConfig): void;
			public static trackTTEvent(event: com.tiktok.appevents.base.EventName): void;
			public static getApiTrackDomain(): string;
			public static updateAccessToken(accessToken: string): void;
			public static getLogLevel(): com.tiktok.TikTokBusinessSdk.LogLevel;
			public static setUpSdkListeners(ml: com.tiktok.TikTokBusinessSdk.MemoryListener, dl: com.tiktok.TikTokBusinessSdk.DiskStatusListener, nl: com.tiktok.TikTokBusinessSdk.NetworkListener, nfl: com.tiktok.TikTokBusinessSdk.NextTimeFlushListener): void;
			public static isGaidCollectionEnabled(): boolean;
			public static isInSdkDebugMode(): java.lang.Boolean;
			public static isInSdkLDUMode(): java.lang.Boolean;
			public static setApiTrackDomain(apiTrackDomain: string): void;
			public static setOnCrashListener(crashListener: com.tiktok.TikTokBusinessSdk.CrashListener): void;
			public static disableDebugMode(): void;
			public static fetchDeferredDeeplinkWithCompletion(callback: com.tiktok.TikTokBusinessSdk.FetchDeferredDeeplinkCompletion): void;
			public static getSdkGlobalSwitch(): java.lang.Boolean;
			public static isEnableDebugMode(): java.lang.Boolean;
			public static setGlobalConfigFetched(): void;
			public static bothIdsProvided(): boolean;
			/** @deprecated */
			public static trackEvent(event: string, eventId: string): void;
			public static trackTTEvent(event: com.tiktok.appevents.base.EventName, eventId: string): void;
			public static destroy(): void;
			public static getCrashListener(): com.tiktok.TikTokBusinessSdk.CrashListener;
			/** @deprecated */
			public static trackEvent(event: string, props: org.json.JSONObject, eventId: string): void;
			public static getAppEventLogger(): com.tiktok.appevents.TTAppEventLogger;
			public static getApiAvailableVersion(): string;
		}
		export module TikTokBusinessSdk {
			export class CrashListener {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.CrashListener>;
				/**
				 * Constructs a new instance of the com.tiktok.TikTokBusinessSdk$CrashListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onCrash(param0: java.lang.Thread, param1: java.lang.Throwable): void });
				public constructor();
				public onCrash(param0: java.lang.Thread, param1: java.lang.Throwable): void;
			}
			export class DiskStatusListener {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.DiskStatusListener>;
				/**
				 * Constructs a new instance of the com.tiktok.TikTokBusinessSdk$DiskStatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onDiskChange(param0: number, param1: boolean): void; onDumped(param0: number): void });
				public constructor();
				public onDiskChange(param0: number, param1: boolean): void;
				public onDumped(param0: number): void;
			}
			export class FetchDeferredDeeplinkCompletion {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.FetchDeferredDeeplinkCompletion>;
				/**
				 * Constructs a new instance of the com.tiktok.TikTokBusinessSdk$FetchDeferredDeeplinkCompletion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { completion(param0: string, param1: com.tiktok.appevents.ErrorData): void });
				public constructor();
				public completion(param0: string, param1: com.tiktok.appevents.ErrorData): void;
			}
			export class LogLevel {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.LogLevel>;
				public static NONE: com.tiktok.TikTokBusinessSdk.LogLevel;
				public static INFO: com.tiktok.TikTokBusinessSdk.LogLevel;
				public static WARN: com.tiktok.TikTokBusinessSdk.LogLevel;
				public static DEBUG: com.tiktok.TikTokBusinessSdk.LogLevel;
				public static valueOf(name: string): com.tiktok.TikTokBusinessSdk.LogLevel;
				public log(): boolean;
				public static values(): androidNative.Array<com.tiktok.TikTokBusinessSdk.LogLevel>;
			}
			export class MemoryListener {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.MemoryListener>;
				/**
				 * Constructs a new instance of the com.tiktok.TikTokBusinessSdk$MemoryListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onMemoryChange(param0: number): void });
				public constructor();
				public onMemoryChange(param0: number): void;
			}
			export class NetworkListener {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.NetworkListener>;
				/**
				 * Constructs a new instance of the com.tiktok.TikTokBusinessSdk$NetworkListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onNetworkChange(param0: number, param1: number, param2: number, param3: number, param4: number): void });
				public constructor();
				public onNetworkChange(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			}
			export class NextTimeFlushListener {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.NextTimeFlushListener>;
				/**
				 * Constructs a new instance of the com.tiktok.TikTokBusinessSdk$NextTimeFlushListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { timeLeft(param0: number): void; thresholdLeft(param0: number, param1: number): void });
				public constructor();
				public thresholdLeft(param0: number, param1: number): void;
				public timeLeft(param0: number): void;
			}
			export class TTConfig {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.TTConfig>;
				public disableMonitor(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public enableAutoIapTrack(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public constructor(context: globalAndroid.content.Context, accessToken: string);
				public openDebugMode(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public isAutoIapTrack(): boolean;
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context);
				public setTTAppId(ttAppId: string): com.tiktok.TikTokBusinessSdk.TTConfig;
				public setFlushTimeInterval(seconds: number): com.tiktok.TikTokBusinessSdk.TTConfig;
				public enableLimitedDataUse(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public setAppId(apiId: string): com.tiktok.TikTokBusinessSdk.TTConfig;
				public disableAutoEvents(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public disableLaunchLogging(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public disableAutoEnhancedDataPostbackEvent(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public disableRetentionLogging(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public disableAutoIapTrack(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public disableInstallLogging(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public setIsLowPerformanceDevice(isLowPerformanceDevice: boolean): com.tiktok.TikTokBusinessSdk.TTConfig;
				public disableAdvertiserIDCollection(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public disableAutoStart(): com.tiktok.TikTokBusinessSdk.TTConfig;
				public setLogLevel(ll: com.tiktok.TikTokBusinessSdk.LogLevel): com.tiktok.TikTokBusinessSdk.TTConfig;
			}
			export class TTInitCallback {
				public static class: java.lang.Class<com.tiktok.TikTokBusinessSdk.TTInitCallback>;
				/**
				 * Constructs a new instance of the com.tiktok.TikTokBusinessSdk$TTInitCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { success(): void; fail(param0: number, param1: string): void });
				public constructor();
				public success(): void;
				public fail(param0: number, param1: string): void;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class DebugModeHelper {
				public static class: java.lang.Class<com.tiktok.appevents.DebugModeHelper>;
				public static tryRequestConfig(): void;
				public static isSuccess(): boolean;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class DeeplinkCallbackWrapper extends com.tiktok.TikTokBusinessSdk.FetchDeferredDeeplinkCompletion {
				public static class: java.lang.Class<com.tiktok.appevents.DeeplinkCallbackWrapper>;
				public markInit(): void;
				public markThread(): void;
				public constructor(callback: com.tiktok.TikTokBusinessSdk.FetchDeferredDeeplinkCompletion);
				public completion(deepLinkUrl: string, errorData: com.tiktok.appevents.ErrorData): void;
				public markEnd(): void;
				public markRequest(): void;
				public completion(param0: string, param1: com.tiktok.appevents.ErrorData): void;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class ErrorData {
				public static class: java.lang.Class<com.tiktok.appevents.ErrorData>;
				public static TT_DDL_CODE_NOT_INIT: number = -1;
				public static TT_DDL_CODE_HTTP_ERROR: number = -2;
				public static TT_DDL_MSG_NOT_INIT: string = 'SDK not initialized';
				public static TT_DDL_MSG_HTTP_ERROR: string = 'HTTP error';
				public setCode(code: number): void;
				public getMsg(): string;
				public constructor(code: number, msg: string);
				public getCode(): number;
				public setMsg(msg: string): void;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class ReferrerInfo {
				public static class: java.lang.Class<com.tiktok.appevents.ReferrerInfo>;
				public setGpReferrerInstallTs(gpReferrerInstallTs: number): void;
				public getGpReferrerInstallTs(): number;
				public getGpReferrerClickTs(): number;
				public setGoogleInstallReferrer(googleInstallReferrer: string): void;
				public constructor(googleInstallReferrer: string, gpReferrerInstallTs: number, gpReferrerClickTs: number);
				public setGpReferrerClickTs(gpReferrerClickTs: number): void;
				public getGoogleInstallReferrer(): string;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTActivityLifecycleCallbacksListener extends com.tiktok.appevents.TTLifeCycleCallbacksAdapter {
				public static class: java.lang.Class<com.tiktok.appevents.TTActivityLifecycleCallbacksListener>;
				public constructor(appEventLogger: com.tiktok.appevents.TTAppEventLogger);
				public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
				public static isBackground(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTAppEvent {
				public static class: java.lang.Class<com.tiktok.appevents.TTAppEvent>;
				public getUserInfo(): com.tiktok.appevents.TTUserInfo;
				public getType(): string;
				public setEventName(eventName: string): void;
				public getScreenShot(): string;
				public getTiktokAppIds(): java.util.List<string>;
				public setPropertiesJson(propertiesJson: string): void;
				public getPropertiesJson(): string;
				public setEdp(edp: java.lang.Boolean): void;
				public getEventId(): string;
				public toString(): string;
				public getEventName(): string;
				public setEventId(eventId: string): void;
				public setTimeStamp(timeStamp: java.util.Date): void;
				public setScreenShot(): void;
				public setTiktokAppIds(tiktokAppIds: java.util.List<string>): void;
				public getEdp(): java.lang.Boolean;
				public getTimeStamp(): java.util.Date;
				public getUniqueId(): java.lang.Long;
			}
			export module TTAppEvent {
				export class TTAppEventType {
					public static class: java.lang.Class<com.tiktok.appevents.TTAppEvent.TTAppEventType>;
					public static track: com.tiktok.appevents.TTAppEvent.TTAppEventType;
					public static identify: com.tiktok.appevents.TTAppEvent.TTAppEventType;
					public static valueOf(name: string): com.tiktok.appevents.TTAppEvent.TTAppEventType;
					public static values(): androidNative.Array<com.tiktok.appevents.TTAppEvent.TTAppEventType>;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTAppEventLogger {
				public static class: java.lang.Class<com.tiktok.appevents.TTAppEventLogger>;
				public static NETWORK_IS_TURNED_OFF: string = "SDK can\'t send tracking events to server, it will be cached locally, and will be sent in batches only after startTracking";
				public static autoTrackRetentionEnable: boolean;
				public clearAll(): void;
				public trackEdp(event: string, props: org.json.JSONObject, eventId: string): void;
				public constructor(lifecycleTrackEnable: boolean, disabledEvents: java.util.List<com.tiktok.util.TTConst.AutoEvents>, flushTime: number, monitorDisable: boolean);
				public static getSuccessfulEvents(): java.util.List<com.tiktok.appevents.TTAppEvent>;
				public initConfig(initTimeMS: number, callback: com.tiktok.TikTokBusinessSdk.TTInitCallback, sdkInitialized: java.util.concurrent.atomic.AtomicBoolean): void;
				public fetchGlobalConfig(delaySeconds: number): void;
				public fetchDeferredDeeplinkWithCompletion(callback: com.tiktok.TikTokBusinessSdk.FetchDeferredDeeplinkCompletion): void;
				public track(event: string, props: org.json.JSONObject, eventId: string): void;
				public destroy(): void;
				public identify(ignore: string, this_: string, externalId: string, externalUserName: string): boolean;
				public trackPurchase(purchaseInfos: java.util.List<com.tiktok.appevents.TTPurchaseInfo>): void;
				public forceFlush(): void;
				public track(event: string, props: org.json.JSONObject): void;
				public monitorMetric(name: string, meta: org.json.JSONObject, extra: org.json.JSONObject): void;
				public closeHeart(): void;
				public flushWithReason(reason: com.tiktok.appevents.TTAppEventLogger.FlushReason): void;
				public addToQ(this_: java.lang.Runnable): void;
				public logout(): void;
				public startHeart(): void;
				public trackPurchase(isHistory: boolean, purchaseInfos: java.util.List<com.tiktok.appevents.TTPurchaseInfo>): void;
			}
			export module TTAppEventLogger {
				export class FlushReason {
					public static class: java.lang.Class<com.tiktok.appevents.TTAppEventLogger.FlushReason>;
					public static THRESHOLD: com.tiktok.appevents.TTAppEventLogger.FlushReason;
					public static TIMER: com.tiktok.appevents.TTAppEventLogger.FlushReason;
					public static START_UP: com.tiktok.appevents.TTAppEventLogger.FlushReason;
					public static FORCE_FLUSH: com.tiktok.appevents.TTAppEventLogger.FlushReason;
					public static IDENTIFY: com.tiktok.appevents.TTAppEventLogger.FlushReason;
					public static LOGOUT: com.tiktok.appevents.TTAppEventLogger.FlushReason;
					public static valueOf(name: string): com.tiktok.appevents.TTAppEventLogger.FlushReason;
					public static values(): androidNative.Array<com.tiktok.appevents.TTAppEventLogger.FlushReason>;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTAppEventPersist {
				public static class: java.lang.Class<com.tiktok.appevents.TTAppEventPersist>;
				public static serialVersionUID: number = 1;
				public addEvents(appEventList: java.util.List<com.tiktok.appevents.TTAppEvent>): void;
				public getAppEvents(): java.util.List<com.tiktok.appevents.TTAppEvent>;
				public setAppEvents(appEvents: java.util.List<com.tiktok.appevents.TTAppEvent>): void;
				public isEmpty(): boolean;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTAppEventStorage {
				public static class: java.lang.Class<com.tiktok.appevents.TTAppEventStorage>;
				public static clearAll(): void;
				public static persist(eventsFromMemory: java.util.List<com.tiktok.appevents.TTAppEvent>): void;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTAppEventsQueue {
				public static class: java.lang.Class<com.tiktok.appevents.TTAppEventsQueue>;
				public static clearAll(): void;
				public static size(): number;
				public static addEvent(event: com.tiktok.appevents.TTAppEvent): void;
				public static exportAllEvents(): java.util.List<com.tiktok.appevents.TTAppEvent>;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTAutoEventsManager {
				public static class: java.lang.Class<com.tiktok.appevents.TTAutoEventsManager>;
				public constructor(appEventLogger: com.tiktok.appevents.TTAppEventLogger);
				public trackOnAppOpenEvents(): void;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTCrashHandler {
				public static class: java.lang.Class<com.tiktok.appevents.TTCrashHandler>;
				public static persistToFile(): void;
				public static isTTSDKRelatedException(e: java.lang.Throwable): boolean;
				public static handleCrash(originTag: string, ex: java.lang.Throwable, type: number): void;
				public static retryLater(monitor: org.json.JSONObject): void;
				public static isTTSDKRelatedException(element: androidNative.Array<java.lang.StackTraceElement>): boolean;
				public static initCrashReporter(): void;
				public constructor();
			}
			export module TTCrashHandler {
				export class TTCrashReport {
					public static class: java.lang.Class<com.tiktok.appevents.TTCrashHandler.TTCrashReport>;
					public addReport(o: string, t: number, a: number): void;
				}
				export module TTCrashReport {
					export class Monitor {
						public static class: java.lang.Class<com.tiktok.appevents.TTCrashHandler.TTCrashReport.Monitor>;
						public monitor: string;
						public ts: number;
						public attempt: number;
						public constructor(o: string, t: number, a: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTEdpAppEventsQueue {
				public static class: java.lang.Class<com.tiktok.appevents.TTEdpAppEventsQueue>;
				public static clearAll(): void;
				public static size(): number;
				public static addEvent(event: com.tiktok.appevents.TTAppEvent): void;
				public static exportAllEvents(): java.util.List<com.tiktok.appevents.TTAppEvent>;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTIdentifierFactory {
				public static class: java.lang.Class<com.tiktok.appevents.TTIdentifierFactory>;
				public static getGoogleAdIdInfo(context: globalAndroid.content.Context): com.tiktok.appevents.TTIdentifierFactory.AdIdInfo;
				public constructor();
			}
			export module TTIdentifierFactory {
				export class AdIdConnection {
					public static class: java.lang.Class<com.tiktok.appevents.TTIdentifierFactory.AdIdConnection>;
					public getBinder(): globalAndroid.os.IBinder;
					public onServiceConnected(componentName: globalAndroid.content.ComponentName, iBinder: globalAndroid.os.IBinder): void;
					public onServiceDisconnected(componentName: globalAndroid.content.ComponentName): void;
				}
				export class AdIdInfo {
					public static class: java.lang.Class<com.tiktok.appevents.TTIdentifierFactory.AdIdInfo>;
					public static FROM_DEFAULT: number = 0;
					public static FROM_ROM: number = 10;
					public static FROM_SP: number = 12;
					public static FROM_REFLECT: number = 13;
					public static FROM_SERVICE: number = 14;
					public from: number;
					public duration: number;
					public getAdId(): string;
					public isAdTrackingEnabled(): boolean;
				}
				export class AdIdInterface {
					public static class: java.lang.Class<com.tiktok.appevents.TTIdentifierFactory.AdIdInterface>;
					public asBinder(): globalAndroid.os.IBinder;
				}
				export class GAIDCache {
					public static class: java.lang.Class<com.tiktok.appevents.TTIdentifierFactory.GAIDCache>;
					public trackEnable(): boolean;
					public static getInstance(context: globalAndroid.content.Context): com.tiktok.appevents.TTIdentifierFactory.GAIDCache;
					public getGAID(): string;
					public update(gaid: string, enable: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTInAppPurchaseManager {
				public static class: java.lang.Class<com.tiktok.appevents.TTInAppPurchaseManager>;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export abstract class TTLifeCycleCallbacksAdapter {
				public static class: java.lang.Class<com.tiktok.appevents.TTLifeCycleCallbacksAdapter>;
				public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
				public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				public onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
				public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTLifecycleListener {
				public static class: java.lang.Class<com.tiktok.appevents.TTLifecycleListener>;
				public onActivityStarted(activity: globalAndroid.app.Activity): void;
				public static getActivityRef(): java.lang.ref.WeakReference<globalAndroid.app.Activity>;
				public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				public onActivityResumed(activity: globalAndroid.app.Activity): void;
				public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
				public onActivityPaused(activity: globalAndroid.app.Activity): void;
				public onActivityStopped(activity: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTPurchaseInfo {
				public static class: java.lang.Class<com.tiktok.appevents.TTPurchaseInfo>;
				public setAutoTrack(autoTrack: boolean): void;
				public getSkuDetails(): org.json.JSONObject;
				public getPurchase(): org.json.JSONObject;
				public constructor(purchase: org.json.JSONObject, skuDetails: org.json.JSONObject, eventId: string);
				public constructor(purchase: org.json.JSONObject, skuDetails: org.json.JSONObject);
				public isSubs(): boolean;
				public getEventId(): string;
				public isAutoTrack(): boolean;
				public setSubs(subs: boolean): void;
			}
			export module TTPurchaseInfo {
				export class InvalidTTPurchaseInfoException {
					public static class: java.lang.Class<com.tiktok.appevents.TTPurchaseInfo.InvalidTTPurchaseInfoException>;
					public constructor(str: string);
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTRequest {
				public static class: java.lang.Class<com.tiktok.appevents.TTRequest>;
				public static reportAppEvent(event: org.json.JSONObject, propertiesJson: java.util.List<com.tiktok.appevents.TTAppEvent>, event: boolean): java.util.List<com.tiktok.appevents.TTAppEvent>;
				public static averageAssign(i: java.util.List<any>, splitList: number): java.util.List<any>;
				public static getBusinessSDKConfig(): org.json.JSONObject;
				public static fetchDeferredDeeplinkWithCompletion(): com.tiktok.util.HttpRequestUtil.HttpResponse;
				public static getDebugModeConfig(): org.json.JSONObject;
				public static buildConfigParams(): org.json.JSONObject;
				public static getSuccessfullySentRequests(): java.util.List<com.tiktok.appevents.TTAppEvent>;
				public static reportMonitorEvent(stat: org.json.JSONObject): com.tiktok.util.HttpRequestUtil.HttpResponse;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTRequestBuilder {
				public static class: java.lang.Class<com.tiktok.appevents.TTRequestBuilder>;
				public static getContextForApi(immutablePart: com.tiktok.appevents.TTAppEvent): org.json.JSONObject;
				public static getBasePayloadWithTs(): org.json.JSONObject;
				public static ddlJson(): org.json.JSONObject;
				public static getBasePayload(): org.json.JSONObject;
				public static getHealthMonitorBase(): org.json.JSONObject;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTSafeReadObjectUtil {
				public static class: java.lang.Class<com.tiktok.appevents.TTSafeReadObjectUtil>;
				public static safeReadObjects(safeClasses: java.util.List<any>, maxObjects: number, maxBytes: number, in_: java.io.InputStream): any;
				public static safeReadTTAppEventPersist(in_: java.io.InputStream): com.tiktok.appevents.TTAppEventPersist;
				public static safeReadTTCrashHandler(in_: java.io.InputStream): com.tiktok.appevents.TTCrashHandler.TTCrashReport;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTThreadFactory {
				public static class: java.lang.Class<com.tiktok.appevents.TTThreadFactory>;
				public newThread(r: java.lang.Runnable): java.lang.Thread;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export class TTUserInfo {
				public static class: java.lang.Class<com.tiktok.appevents.TTUserInfo>;
				public static sharedInstance: com.tiktok.appevents.TTUserInfo;
				public isIdentified(): boolean;
				public setExternalId(externalId: string): void;
				public setEmail(email: string): void;
				public clone(): com.tiktok.appevents.TTUserInfo;
				public static toSha256(b: string): string;
				public setIdentified(): void;
				public toJsonObject(): org.json.JSONObject;
				public constructor();
				public static reset(context: globalAndroid.content.Context, forceGenerateAnoId: boolean): void;
				public setExternalUserName(externalUserName: string): void;
				public setPhoneNumber(phoneNumber: string): void;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module base {
				export class EventName {
					public static class: java.lang.Class<com.tiktok.appevents.base.EventName>;
					public static ACHIEVE_LEVEL: com.tiktok.appevents.base.EventName;
					public static ADD_PAYMENT_INFO: com.tiktok.appevents.base.EventName;
					public static COMPLETE_TUTORIAL: com.tiktok.appevents.base.EventName;
					public static CREATE_GROUP: com.tiktok.appevents.base.EventName;
					public static CREATE_ROLE: com.tiktok.appevents.base.EventName;
					public static GENERATE_LEAD: com.tiktok.appevents.base.EventName;
					public static IN_APP_AD_CLICK: com.tiktok.appevents.base.EventName;
					public static IN_APP_AD_IMPR: com.tiktok.appevents.base.EventName;
					public static INSTALL_APP: com.tiktok.appevents.base.EventName;
					public static JOIN_GROUP: com.tiktok.appevents.base.EventName;
					public static LAUNCH_APP: com.tiktok.appevents.base.EventName;
					public static LOAN_APPLICATION: com.tiktok.appevents.base.EventName;
					public static LOAN_APPROVAL: com.tiktok.appevents.base.EventName;
					public static LOAN_DISBURSAL: com.tiktok.appevents.base.EventName;
					public static LOGIN: com.tiktok.appevents.base.EventName;
					public static RATE: com.tiktok.appevents.base.EventName;
					public static REGISTRATION: com.tiktok.appevents.base.EventName;
					public static SEARCH: com.tiktok.appevents.base.EventName;
					public static SPEND_CREDITS: com.tiktok.appevents.base.EventName;
					public static START_TRIAL: com.tiktok.appevents.base.EventName;
					public static SUBSCRIBE: com.tiktok.appevents.base.EventName;
					public static IMPRESSION_LEVEL_AD_REVENUE: com.tiktok.appevents.base.EventName;
					public static UNLOCK_ACHIEVEMENT: com.tiktok.appevents.base.EventName;
					public static valueOf(name: string): com.tiktok.appevents.base.EventName;
					public toString(): string;
					public static values(): androidNative.Array<com.tiktok.appevents.base.EventName>;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module base {
				export class TTAdRevenueEvent extends com.tiktok.appevents.base.TTBaseEvent {
					public static class: java.lang.Class<com.tiktok.appevents.base.TTAdRevenueEvent>;
					public static newBuilder(adRevenueJson: org.json.JSONObject): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public static newBuilder(adRevenueJson: org.json.JSONObject, eventId: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public static newBuilder(eventName: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public constructor(eventName: string, properties: org.json.JSONObject, eventId: string);
					public static newBuilder(eventName: string, eventId: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module base {
				export class TTBaseEvent {
					public static class: java.lang.Class<com.tiktok.appevents.base.TTBaseEvent>;
					public properties: org.json.JSONObject;
					public eventName: string;
					public eventId: string;
					public static newBuilder(eventName: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public constructor(eventName: string, properties: org.json.JSONObject, eventId: string);
					public static newBuilder(eventName: string, eventId: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
				}
				export module TTBaseEvent {
					export class Builder {
						public static class: java.lang.Class<com.tiktok.appevents.base.TTBaseEvent.Builder>;
						public properties: org.json.JSONObject;
						public eventName: string;
						public eventId: string;
						public addProperty(key: string, value: any): com.tiktok.appevents.base.TTBaseEvent.Builder;
						public addProperty(key: string, value: number): com.tiktok.appevents.base.TTBaseEvent.Builder;
						public build(): com.tiktok.appevents.base.TTBaseEvent;
						public addProperty(key: string, value: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
						public constructor(eventName: string, eventId: string);
						public constructor(eventName: string);
						public addProperty(key: string, value: boolean): com.tiktok.appevents.base.TTBaseEvent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module contents {
				export class TTAddToCartEvent extends com.tiktok.appevents.contents.TTContentsEvent {
					public static class: java.lang.Class<com.tiktok.appevents.contents.TTAddToCartEvent>;
					public static newBuilder(): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public static newBuilder(eventId: string): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string, eventId: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module contents {
				export class TTAddToWishlistEvent extends com.tiktok.appevents.contents.TTContentsEvent {
					public static class: java.lang.Class<com.tiktok.appevents.contents.TTAddToWishlistEvent>;
					public static newBuilder(): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public static newBuilder(eventId: string): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string, eventId: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module contents {
				export class TTCheckoutEvent extends com.tiktok.appevents.contents.TTContentsEvent {
					public static class: java.lang.Class<com.tiktok.appevents.contents.TTCheckoutEvent>;
					public static newBuilder(): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public static newBuilder(eventId: string): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string, eventId: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module contents {
				export class TTContentParams {
					public static class: java.lang.Class<com.tiktok.appevents.contents.TTContentParams>;
					public static newBuilder(): com.tiktok.appevents.contents.TTContentParams.Builder;
					public toJSONObject(): org.json.JSONObject;
					public constructor();
				}
				export module TTContentParams {
					export class Builder {
						public static class: java.lang.Class<com.tiktok.appevents.contents.TTContentParams.Builder>;
						public setPrice(price: number): com.tiktok.appevents.contents.TTContentParams.Builder;
						public setQuantity(quantity: number): com.tiktok.appevents.contents.TTContentParams.Builder;
						public constructor();
						public setContentId(contentId: string): com.tiktok.appevents.contents.TTContentParams.Builder;
						public build(): com.tiktok.appevents.contents.TTContentParams;
						public setContentCategory(contentCategory: string): com.tiktok.appevents.contents.TTContentParams.Builder;
						public setContentName(contentName: string): com.tiktok.appevents.contents.TTContentParams.Builder;
						public setBrand(brand: string): com.tiktok.appevents.contents.TTContentParams.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module contents {
				export class TTContentsEvent extends com.tiktok.appevents.base.TTBaseEvent {
					public static class: java.lang.Class<com.tiktok.appevents.contents.TTContentsEvent>;
				}
				export module TTContentsEvent {
					export class Builder extends com.tiktok.appevents.base.TTBaseEvent.Builder {
						public static class: java.lang.Class<com.tiktok.appevents.contents.TTContentsEvent.Builder>;
						public setDescription(description: string): com.tiktok.appevents.contents.TTContentsEvent.Builder;
						public build(): com.tiktok.appevents.contents.TTContentsEvent;
						public build(): com.tiktok.appevents.base.TTBaseEvent;
						public setContentType(contentType: string): com.tiktok.appevents.contents.TTContentsEvent.Builder;
						public setContentId(contentId: string): com.tiktok.appevents.contents.TTContentsEvent.Builder;
						public setContents(jsonArray: androidNative.Array<com.tiktok.appevents.contents.TTContentParams>): com.tiktok.appevents.contents.TTContentsEvent.Builder;
						public setCurrency(currency: com.tiktok.appevents.contents.TTContentsEventConstants.Currency): com.tiktok.appevents.contents.TTContentsEvent.Builder;
						public setValue(value: number): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module contents {
				export class TTContentsEventConstants {
					public static class: java.lang.Class<com.tiktok.appevents.contents.TTContentsEventConstants>;
					/**
					 * Constructs a new instance of the com.tiktok.appevents.contents.TTContentsEventConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export module TTContentsEventConstants {
					export class ContentsEventName {
						public static class: java.lang.Class<com.tiktok.appevents.contents.TTContentsEventConstants.ContentsEventName>;
						/**
						 * Constructs a new instance of the com.tiktok.appevents.contents.TTContentsEventConstants$ContentsEventName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static EVENT_NAME_ADD_TO_CARD: string = 'AddToCart';
						public static EVENT_NAME_PURCHASE: string = 'Purchase';
						public static EVENT_NAME_VIEW_CONTENT: string = 'ViewContent';
						public static EVENT_NAME_ADD_TO_WISHLIST: string = 'AddToWishlist';
						public static EVENT_NAME_CHECK_OUT: string = 'Checkout';
					}
					export class Currency {
						public static class: java.lang.Class<com.tiktok.appevents.contents.TTContentsEventConstants.Currency>;
						public static AED: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static ARS: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static AUD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static BDT: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static BHD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static BIF: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static BOB: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static BRL: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static CAD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static CHF: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static CLP: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static CNY: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static COP: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static CRC: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static CZK: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static DKK: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static DZD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static EGP: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static EUR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static GBP: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static GTQ: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static HKD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static HNL: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static HUF: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static IDR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static ILS: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static INR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static ISK: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static JPY: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static KES: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static KHR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static KRW: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static KWD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static KZT: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static MAD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static MOP: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static MXN: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static MYR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static NGN: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static NIO: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static NOK: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static NZD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static OMR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static PEN: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static PHP: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static PKR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static PLN: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static PYG: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static QAR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static RON: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static RUB: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static SAR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static SEK: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static SGD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static THB: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static TRY: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static TWD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static UAH: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static USD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static VES: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static VND: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static ZAR: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static BGN: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static IQD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static JOD: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static LBP: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static TZS: com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static valueOf(name: string): com.tiktok.appevents.contents.TTContentsEventConstants.Currency;
						public static values(): androidNative.Array<com.tiktok.appevents.contents.TTContentsEventConstants.Currency>;
					}
					export class Params {
						public static class: java.lang.Class<com.tiktok.appevents.contents.TTContentsEventConstants.Params>;
						/**
						 * Constructs a new instance of the com.tiktok.appevents.contents.TTContentsEventConstants$Params interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static EVENT_PROPERTY_CONTENT_ID: string = 'content_id';
						public static EVENT_PROPERTY_DESCRIPTION: string = 'description';
						public static EVENT_PROPERTY_ORDER_ID: string = 'order_id';
						public static EVENT_PROPERTY_VALUE: string = 'value';
						public static EVENT_PROPERTY_CURRENCY: string = 'currency';
						public static EVENT_PROPERTY_CONTENT_TYPE: string = 'content_type';
						public static EVENT_PROPERTY_CONTENTS: string = 'contents';
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module contents {
				export class TTPurchaseEvent extends com.tiktok.appevents.contents.TTContentsEvent {
					public static class: java.lang.Class<com.tiktok.appevents.contents.TTPurchaseEvent>;
					public static newBuilder(): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public static newBuilder(eventId: string): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string, eventId: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module contents {
				export class TTViewContentEvent extends com.tiktok.appevents.contents.TTContentsEvent {
					public static class: java.lang.Class<com.tiktok.appevents.contents.TTViewContentEvent>;
					public static newBuilder(): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
					public static newBuilder(eventId: string): com.tiktok.appevents.contents.TTContentsEvent.Builder;
					public static newBuilder(eventName: string, eventId: string): com.tiktok.appevents.base.TTBaseEvent.Builder;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export class EDPConfig {
					public static class: java.lang.Class<com.tiktok.appevents.edp.EDPConfig>;
					public static DEFAULT_SENSIG_FILTERING_REGEX_LIST: string = '([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+)|(\\+?0?86-?)?1[3-9]\\d{9}|(\\+\\d{1,2}\\s?)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}';
					public static enable_sdk: boolean;
					public static enable_app_launch_track: boolean;
					public static enable_page_show_track: boolean;
					public static enable_click_track: boolean;
					public static enable_webview_request_track: boolean;
					public static enable_pay_show_track: boolean;
					public static page_detail_upload_deep_count: number;
					public static time_diff_frequency_control: number;
					public static report_frequency_control: number;
					public static button_black_list: java.util.Set<string>;
					public static sensig_filtering_regex_list: string;
					public static sensig_filtering_regex_version: number;
					public static enable_sync_get_touch_info: boolean;
					public constructor();
					public static optConfig(btn: org.json.JSONObject): void;
				}
				export module EDPConfig {
					export class ConfigConst {
						public static class: java.lang.Class<com.tiktok.appevents.edp.EDPConfig.ConfigConst>;
						/**
						 * Constructs a new instance of the com.tiktok.appevents.edp.EDPConfig$ConfigConst interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
						public static PAGE_DETAIL_UPLOAD_DEEP_COUNT: string = 'page_detail_upload_deep_count';
						public static ENABLE_SDK: string = 'enable_sdk';
						public static REPORT_FREQUENCY_CONTROL: string = 'report_frequency_control';
						public static ENABLE_SYNC_GET_TOUCH_POSITION: string = 'enable_sync_get_touch_position';
						public static EDP_NATIVE_SDK_CONFIG: string = 'enhanced_data_postback_native_config';
						public static ENABLE_PAY_SHOW_TRACK: string = 'enable_pay_show_track';
						public static TIME_DIFF_FREQUENCY_CONTROL: string = 'time_diff_frequency_control';
						public static SENSIG_FILTERING_REGEX_VERSION: string = 'sensig_filtering_regex_version';
						public static SENSIG_FILTERING_REGEX_LIST: string = 'sensig_filtering_regex_list';
						public static ENABLE_APP_LAUNCH_TRACK: string = 'enable_app_launch_track';
						public static ENABLE_WEBVIEW_REQUEST_TRACK: string = 'enable_webview_request_track';
						public static EDP_UNITY_SDK_CONFIG: string = 'enhanced_data_postback_unity_config';
						public static BUTTON_BLACK_LIST: string = 'button_black_list';
						public static ENABLE_CLICK_TRACK: string = 'enable_click_track';
						public static ENABLE_PAGE_SHOW_TRACK: string = 'enable_page_show_track';
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export class Sensig {
					public static class: java.lang.Class<com.tiktok.appevents.edp.Sensig>;
					public regexList: string;
					public version: number;
					public setVersion(version: number): void;
					public setRegexList(regexList: string): void;
					public getVersion(): number;
					public constructor(version: number, regexList: string);
					public getRegexList(): string;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export class TTActivityLifecycleCallbacks {
					public static class: java.lang.Class<com.tiktok.appevents.edp.TTActivityLifecycleCallbacks>;
					public hasSendPageShow: boolean;
					public constructor();
					public registerFirstActivity(): void;
					public onActivityResumed(activity: globalAndroid.app.Activity): void;
					public onActivityStopped(activity: globalAndroid.app.Activity): void;
					public onActivityPaused(activity: globalAndroid.app.Activity): void;
					public onActivityCreated(activity: globalAndroid.app.Activity, savedInstanceState: globalAndroid.os.Bundle): void;
					public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, outState: globalAndroid.os.Bundle): void;
					public onActivityStarted(activity: globalAndroid.app.Activity): void;
					public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export class TTAppLaunchEvent {
					public static class: java.lang.Class<com.tiktok.appevents.edp.TTAppLaunchEvent>;
					public getProp(): org.json.JSONObject;
					public constructor(prop: org.json.JSONObject, ts: number);
					public setProp(prop: org.json.JSONObject): void;
					public getTs(): number;
					public setTs(ts: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export class TTEDPEventConstants {
					public static class: java.lang.Class<com.tiktok.appevents.edp.TTEDPEventConstants>;
					/**
					 * Constructs a new instance of the com.tiktok.appevents.edp.TTEDPEventConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
					public static EDP_EVENT_NAME_WEBVIEW_REQUEST: string = 'webview_request';
					public static EDP_EVENT_PROPERTY_CURRENT_PAGE_NAME: string = 'current_page_name';
					public static EDP_EVENT_PROPERTY_PAGE_DEEP_COUNT: string = 'page_deep_count';
					public static EDP_EVENT_PROPERTY_PAY_CODE: string = 'code';
					public static EDP_EVENT_NAME_CLICK: string = 'click';
					public static EDP_EVENT_PROPERTY_PAGE_COMPONENTS: string = 'page_components';
					public static EDP_EVENT_PROPERTY_PAY_SKU_INFO: string = 'sku_info';
					public static EDP_EVENT_NAME_PAY_SHOW: string = 'pay_show';
					public static EDP_EVENT_PROPERTY_CLICK_BUTTON_TEXT: string = 'click_button_text';
					public static EDP_EVENT_PROPERTY_INDEX: string = 'index';
					public static EDP_EVENT_PROPERTY_CLICK_POSITON_Y: string = 'click_position_y';
					public static EDP_EVENT_PROPERTY_CLICK_POSITON_X: string = 'click_position_x';
					public static EDP_EVENT_PROPERTY_CLICK_SIZE_H: string = 'click_size_h';
					public static EDP_EVENT_PROPERTY_WEBVIEW_REQUEST_URL: string = 'url';
					public static EDP_EVENT_PROPERTY_CLICK_DURATION: string = 'click_duration';
					public static EDP_EVENT_PROPERTY_SOURCE_URL: string = 'source_url';
					public static EDP_EVENT_NAME_APP_LAUNCH: string = 'app_launch';
					public static EDP_EVENT_PROPERTY_REFER: string = 'refer';
					public static EDP_EVENT_PROPERTY_CLASS_NAME: string = 'class_name';
					public static EDP_EVENT_PROPERTY_FROM_BACKGROUND: string = 'from_background';
					public static EDP_EVENT_NAME_PAGE_SHOW: string = 'page_show';
					public static EDP_EVENT_PROPERTY_CLICK_SIZE_W: string = 'click_size_w';
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export class TTEDPEventTrack {
					public static class: java.lang.Class<com.tiktok.appevents.edp.TTEDPEventTrack>;
					public static LAST_CLICK_TS: number;
					public static isSending: boolean;
					public static pageShowIsSending: boolean;
					public static trackFirstAppLaunch(): void;
					public static trackPageShow(property: string, eventProp: number, pageName: boolean, index: org.json.JSONObject, isFromBackground: number): void;
					public constructor();
					public static trackClick(property: string, eventProp: number, className: number, x: number, y: number, width: string, height: string, text: org.json.JSONObject, pageName: number, components: number): void;
					public static checkUpload(): boolean;
					public static trackWebviewRequest(property: string): void;
					public static trackPayShow(property: number, eventProp: org.json.JSONArray): void;
					public static trackUnityEvent(eventProp: string, name: org.json.JSONObject): void;
					public static trackAppLaunch(property: string, eventProp: string): void;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export class TTHierarchyHelper {
					public static class: java.lang.Class<com.tiktok.appevents.edp.TTHierarchyHelper>;
					public static mHandler: globalAndroid.os.Handler;
					public static proxyOnTouch(view: java.lang.ref.WeakReference<globalAndroid.view.View>, act: java.lang.ref.WeakReference<globalAndroid.app.Activity>): void;
					public static getViewHierarchyCount(i: java.lang.ref.WeakReference<globalAndroid.view.View>): number;
					public constructor();
					public static getViewHierarchyCountAndRegisterOnTouch(i: java.lang.ref.WeakReference<globalAndroid.view.View>, vp: java.lang.ref.WeakReference<globalAndroid.app.Activity>): number;
					public static getViewHierarchy(text: java.lang.ref.WeakReference<globalAndroid.view.View>, jsonItem: number): org.json.JSONObject;
					public static getHandler(): globalAndroid.os.Handler;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export module proxy {
					export class ITouchListener {
						public static class: java.lang.Class<com.tiktok.appevents.edp.proxy.ITouchListener>;
						/**
						 * Constructs a new instance of the com.tiktok.appevents.edp.proxy.ITouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean });
						public constructor();
						public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export module proxy {
					export class ProxyOnTouchListener {
						public static class: java.lang.Class<com.tiktok.appevents.edp.proxy.ProxyOnTouchListener>;
						public onTouch(v: globalAndroid.view.View, event: globalAndroid.view.MotionEvent): boolean;
						public constructor(listener: com.tiktok.appevents.edp.proxy.ITouchListener, originOnTouchListener: globalAndroid.view.View.OnTouchListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module appevents {
			export module edp {
				export module proxy {
					export class TouchProxyHelper {
						public static class: java.lang.Class<com.tiktok.appevents.edp.proxy.TouchProxyHelper>;
						public constructor();
						public static proxy(view: java.lang.ref.WeakReference<globalAndroid.view.View>, method: com.tiktok.appevents.edp.proxy.ITouchListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export class TTInAppPurchaseWrapper {
				public static class: java.lang.Class<com.tiktok.iap.TTInAppPurchaseWrapper>;
				public static sExecutor: java.util.concurrent.ExecutorService;
				public static devAutoTrack: number;
				public static hasReportedHistoryInLife: boolean;
				public static autoTrackPaymentEnable: boolean;
				public static autoTrackPaymentTypes: java.util.Set<java.lang.Integer>;
				public static autoTrackPaymentJson: boolean;
				public static autoTrackPaymentHistory: boolean;
				public static autoTrackPaymentHistoryINAPP: number;
				public static autoTrackPaymentHistorySUBS: number;
				public static canTrackINAPP(): boolean;
				public static updateConfig(type: org.json.JSONObject): void;
				public static registerIapTrack(): void;
				public static tryReportIapEvent(actName: globalAndroid.app.Activity): void;
				public constructor();
				public static canTrackSUBS(): boolean;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export class GPBillVersions {
					public static class: java.lang.Class<com.tiktok.iap.billing.GPBillVersions>;
					public static getMajorVersion(): com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
					public constructor();
					public static getVersion(): string;
				}
				export module GPBillVersions {
					export class GPBillingVer {
						public static class: java.lang.Class<com.tiktok.iap.billing.GPBillVersions.GPBillingVer>;
						public static NONE: com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
						public static V1: com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
						public static V2_V4: com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
						public static V5_V8: com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
						public static valueOf(name: string): com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
						public static values(): androidNative.Array<com.tiktok.iap.billing.GPBillVersions.GPBillingVer>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export module client {
					export class BillCache {
						public static class: java.lang.Class<com.tiktok.iap.billing.client.BillCache>;
						public saveSUBSLast(this_: number): void;
						public getSUBSLast(): number;
						public getINAPPLast(): number;
						public saveINAPPLast(this_: number): void;
						public static getInstance(): com.tiktok.iap.billing.client.BillCache;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export module client {
					export class BillUtils {
						public static class: java.lang.Class<com.tiktok.iap.billing.client.BillUtils>;
						public constructor();
						public static parserJsonFromProductDetail(matcher: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export module client {
					export class EmptyBillingProxy extends com.tiktok.iap.billing.client.IBillingProxy {
						public static class: java.lang.Class<com.tiktok.iap.billing.client.EmptyBillingProxy>;
						public init(): void;
						public queryPurchaseHistory(): void;
						public getVersion(): com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export module client {
					export class IBillingProxy {
						public static class: java.lang.Class<com.tiktok.iap.billing.client.IBillingProxy>;
						/**
						 * Constructs a new instance of the com.tiktok.iap.billing.client.IBillingProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getVersion(): com.tiktok.iap.billing.GPBillVersions.GPBillingVer; init(): void; queryPurchaseHistory(): void });
						public constructor();
						public init(): void;
						public queryPurchaseHistory(): void;
						public getVersion(): com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export module client {
					export class TTBillingFactory {
						public static class: java.lang.Class<com.tiktok.iap.billing.client.TTBillingFactory>;
						public constructor();
						public static createBillingProxy(): com.tiktok.iap.billing.client.IBillingProxy;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export module client {
					export class V5_V8BillingProxy extends com.tiktok.iap.billing.client.IBillingProxy {
						public static class: java.lang.Class<com.tiktok.iap.billing.client.V5_V8BillingProxy>;
						public init(): void;
						public queryPurchaseHistory(): void;
						public getVersion(): com.tiktok.iap.billing.GPBillVersions.GPBillingVer;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export module model {
					export class TTPayData {
						public static class: java.lang.Class<com.tiktok.iap.billing.model.TTPayData>;
						public productId: string;
						public data: org.json.JSONObject;
						public purchaseTime: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module iap {
			export module billing {
				export module model {
					export class TTProductType {
						public static class: java.lang.Class<com.tiktok.iap.billing.model.TTProductType>;
						public static IN_APP: com.tiktok.iap.billing.model.TTProductType;
						public static SUBS: com.tiktok.iap.billing.model.TTProductType;
						public getType(): string;
						public static valueOf(name: string): com.tiktok.iap.billing.model.TTProductType;
						public static values(): androidNative.Array<com.tiktok.iap.billing.model.TTProductType>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module unity {
			export class TTUnityBridge {
				public static class: java.lang.Class<com.tiktok.unity.TTUnityBridge>;
				public static setConfigCallback(classtype: org.json.JSONObject): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class DecryptUtil {
				public static class: java.lang.Class<com.tiktok.util.DecryptUtil>;
				public static encryptWithHmac(secretKey: string): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class HttpRequestUtil {
				public static class: java.lang.Class<com.tiktok.util.HttpRequestUtil>;
				public static connect(key: string, value: java.util.Map<string, string>, entry: com.tiktok.util.HttpRequestUtil.HttpRequestOptions, url: string, headerParamMap: string): javax.net.ssl.HttpsURLConnection;
				public static doPost(url: string, headerParamMap: java.util.Map<string, string>, jsonStr: string): com.tiktok.util.HttpRequestUtil.HttpResponse;
				public static doPost(securityKey: string, redirectUrl: java.util.Map<string, string>, result: string, json: com.tiktok.util.HttpRequestUtil.HttpRequestOptions, info: boolean): com.tiktok.util.HttpRequestUtil.HttpResponse;
				public static doGet(redirectUrl: string, result: java.util.Map<string, string>, json: com.tiktok.util.HttpRequestUtil.HttpRequestOptions): com.tiktok.util.HttpRequestUtil.HttpResponse;
				public static doPost(ignore: string, url: java.util.Map<string, string>, headerParamMap: string, jsonStr: boolean): com.tiktok.util.HttpRequestUtil.HttpResponse;
				public static shouldRedirect(status: number): boolean;
				public constructor();
			}
			export module HttpRequestUtil {
				export class GzipInfo {
					public static class: java.lang.Class<com.tiktok.util.HttpRequestUtil.GzipInfo>;
					public duration: number;
					public bytes: androidNative.Array<number>;
					public throwable1: java.lang.Throwable;
					public throwable2: java.lang.Throwable;
				}
				export class HttpRequestOptions {
					public static class: java.lang.Class<com.tiktok.util.HttpRequestUtil.HttpRequestOptions>;
					public connectTimeout: number;
					public readTimeout: number;
					public constructor();
					public configConnection(connection: java.net.HttpURLConnection): void;
				}
				export class HttpResponse {
					public static class: java.lang.Class<com.tiktok.util.HttpRequestUtil.HttpResponse>;
					public url: string;
					public body: org.json.JSONObject;
					public code: number;
					public httpCode: number;
					public throwable: java.lang.Throwable;
					public duration: number;
					public constructor();
					public isOK(): boolean;
					public getErrCode(): number;
					public getErrMsg(): string;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class IOUtils {
				public static class: java.lang.Class<com.tiktok.util.IOUtils>;
				public static close(parcel: androidNative.Array<globalAndroid.os.Parcel>): void;
				public static close(closeable: androidNative.Array<java.io.Closeable>): void;
				public static close(conn: androidNative.Array<java.net.HttpURLConnection>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class JSON {
				public static class: java.lang.Class<com.tiktok.util.JSON>;
				public static buildArr(): org.json.JSONArray;
				public static putArr(arr: org.json.JSONArray, object: any): void;
				public static getDouble(json: org.json.JSONObject, key: string): number;
				public static getJsonObject(json: org.json.JSONObject, key: string): org.json.JSONObject;
				public static getBoolean(json: org.json.JSONObject, key: string): boolean;
				public static putObject(json: org.json.JSONObject, key: string, data: any): void;
				public static getString(json: org.json.JSONObject, key: string): string;
				public static getBoolean(json: org.json.JSONObject, key: string, fallback: boolean): boolean;
				public static getObject(json: org.json.JSONObject, key: string): any;
				public static getJSONObject(jsonArray: org.json.JSONArray, index: number): org.json.JSONObject;
				public static getObject(json: org.json.JSONObject, key: string, fallback: any): any;
				public constructor();
				public static build(map: java.util.Map<string, string>): org.json.JSONObject;
				public static getDouble(json: org.json.JSONObject, key: string, fallback: number): number;
				public static putLong(json: org.json.JSONObject, key: string, data: number): void;
				public static remove(i: org.json.JSONArray, i: number): org.json.JSONArray;
				public static getLong(json: org.json.JSONObject, key: string): number;
				public static putDouble(json: org.json.JSONObject, key: string, data: number): void;
				public static getLong(json: org.json.JSONObject, key: string, fallback: number): number;
				public static putBoolean(json: org.json.JSONObject, key: string, data: boolean): void;
				public static buildArr(json: string): org.json.JSONArray;
				public static getString(json: org.json.JSONObject, key: string, fallback: string): string;
				public static getKeys(json: org.json.JSONObject): java.util.Iterator<string>;
				public static getJsonArray(json: org.json.JSONObject, key: string): org.json.JSONArray;
				public static build(): org.json.JSONObject;
				public static putInt(json: org.json.JSONObject, key: string, data: number): void;
				public static build(json: string): org.json.JSONObject;
				public static getInt(json: org.json.JSONObject, key: string, fallback: number): number;
				public static getInt(json: org.json.JSONObject, key: string): number;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class NetworkTimeout {
				public static class: java.lang.Class<com.tiktok.util.NetworkTimeout>;
				public static sConfigTime: number;
				public static sEventTime: number;
				public static updateConfig(json: org.json.JSONObject): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class RegexUtil {
				public static class: java.lang.Class<com.tiktok.util.RegexUtil>;
				public static validateTTAppId(ttAppIdRegex: string): boolean;
				public static replaceAllToHash(sha256: string, stringBuffer: string): string;
				public static validateAppId(appIdRegex: string): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class SystemInfoUtil {
				public static class: java.lang.Class<com.tiktok.util.SystemInfoUtil>;
				public static getLibraryName(): string;
				public static getPackageName(): string;
				public static getsScreenWidth(): number;
				public static getInstallSource(): string;
				public static initInstallReferrer(): void;
				public static getAppVersionCode(): number;
				public static getAppSessionId(): string;
				public static updateSensigInfo(): void;
				public static getInstallReferrer(): com.tiktok.appevents.ReferrerInfo;
				public static getNetworkClass(networkType: globalAndroid.content.Context): string;
				public static getsDensity(): number;
				public constructor();
				public static getAppName(): string;
				public static getAndroidVersion(): string;
				public static initUserAgent(): void;
				public static initAppSessionId(): void;
				public static getBcp47Language(): string;
				public static getLocale(): string;
				public static isUnity(): boolean;
				public static getSDKVersion(): string;
				public static getLocalIpAddress(): string;
				public static getUserAgent(): string;
				public static getsScreenHeight(): number;
				public static getAppVersionName(): string;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class TTConst {
				public static class: java.lang.Class<com.tiktok.util.TTConst>;
				public static TTSDK_KEY_VALUE_STORE: string = 'com.tiktok.sdk.keystore';
				public static TTSDK_APP_ANONYMOUS_ID: string = 'com.tiktok.sdk.anonymousId';
				public static TTSDK_APP_SENSIG_VERSION: string = 'com.tiktok.sdk.anonymousId.version';
				public static TTSDK_APP_SENSIG_LIST: string = 'com.tiktok.sdk.anonymousId.list';
				public static TTSDK_APP_FIRST_INSTALL: string = 'com.tiktok.sdk.firstInstall';
				public static TTSDK_APP_LAST_LAUNCH: string = 'com.tiktok.sdk.lastLaunch';
				public static TTSDK_APP_2DR_TIME: string = 'com.tiktok.sdk.2drTime';
				public static TTSDK_USER_AGENT: string = 'com.tiktok.user.agent';
				public static TTSDK_PREFIX: string = 'com.tiktok';
				public static TTSDK_EXCEPTION_NET_ERROR: number = 1;
				public static TTSDK_EXCEPTION_SDK_CATCH: number = 2;
				public static TTSDK_EXCEPTION_CRASH: number = 3;
				public static TRACK_TYPE: string = 'type';
				public static TRACK_TYPE_AUTO: string = 'auto';
				public static ERROR_MESSAGE_INVALID_ID: string = 'Invalid appId or tiktokAppId';
				public constructor();
			}
			export module TTConst {
				export class ApiErrorCodes {
					public static class: java.lang.Class<com.tiktok.util.TTConst.ApiErrorCodes>;
					public static PARTIAL_SUCCESS: com.tiktok.util.TTConst.ApiErrorCodes;
					public static API_ERROR: com.tiktok.util.TTConst.ApiErrorCodes;
					public code: java.lang.Integer;
					public static values(): androidNative.Array<com.tiktok.util.TTConst.ApiErrorCodes>;
					public static valueOf(name: string): com.tiktok.util.TTConst.ApiErrorCodes;
				}
				export class AutoEvents {
					public static class: java.lang.Class<com.tiktok.util.TTConst.AutoEvents>;
					public static InstallApp: com.tiktok.util.TTConst.AutoEvents;
					public static SecondDayRetention: com.tiktok.util.TTConst.AutoEvents;
					public static LaunchAPP: com.tiktok.util.TTConst.AutoEvents;
					public name: string;
					public static values(): androidNative.Array<com.tiktok.util.TTConst.AutoEvents>;
					public static valueOf(name: string): com.tiktok.util.TTConst.AutoEvents;
				}
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class TTHandlerUtil {
				public static class: java.lang.Class<com.tiktok.util.TTHandlerUtil>;
				public removeCallbacks(runnable: java.lang.Runnable): void;
				public post(runnable: java.lang.Runnable): void;
				public static getInstance(): com.tiktok.util.TTHandlerUtil;
				public postDelayed(runnable: java.lang.Runnable, delayMillis: number): void;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class TTKeyValueStore {
				public static class: java.lang.Class<com.tiktok.util.TTKeyValueStore>;
				public get(key: string): string;
				public getInt(key: string): number;
				public set(this_: java.util.HashMap<string, any>): void;
				public set(key: string, value: any): void;
				public constructor(ctx: globalAndroid.content.Context);
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class TTLogger {
				public static class: java.lang.Class<com.tiktok.util.TTLogger>;
				public logLevel: com.tiktok.TikTokBusinessSdk.LogLevel;
				public error(error: java.lang.Throwable, format: string, extra: androidNative.Array<any>): void;
				public warn(format: string, extra: androidNative.Array<any>): void;
				public constructor(tag: string, logLevel: com.tiktok.TikTokBusinessSdk.LogLevel);
				public debug(this_: string, format: androidNative.Array<any>): void;
				public info(this_: string, format: androidNative.Array<any>): void;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class TTReflect {
				public static class: java.lang.Class<com.tiktok.util.TTReflect>;
				public call(receiver: any, args: androidNative.Array<any>): any;
				public static getMethod(clazz: string, className: string, methodName: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				public static callMethod(method: java.lang.reflect.Method, receiver: any, args: androidNative.Array<any>): any;
				public static on(clazz: java.lang.Class<any>): com.tiktok.util.TTReflect;
				public getValue(receiver: any): any;
				public static getMethod(clazz: java.lang.Class<any>, methodName: string, parameterTypes: androidNative.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				public static on(className: string): com.tiktok.util.TTReflect;
				public findMethod(methodName: string, parameterTypes: androidNative.Array<java.lang.Class<any>>): com.tiktok.util.TTReflect;
				public findField(fieldName: string): com.tiktok.util.TTReflect;
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export abstract class TTSafeRunnable {
				public static class: java.lang.Class<com.tiktok.util.TTSafeRunnable>;
				public run(): void;
				public doSafeRun(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class TTUtil {
				public static class: java.lang.Class<com.tiktok.util.TTUtil>;
				public static setSensigInfo(store: globalAndroid.content.Context, context: com.tiktok.appevents.edp.Sensig): void;
				public static checkThread(tag: string): void;
				public static getOrGenAnoId(store: globalAndroid.content.Context, anoId: boolean): string;
				public static getMetaException(i: java.lang.Throwable, rootCause: java.lang.Long, argMsg: number): org.json.JSONObject;
				public static getMetaWithTS(ts: java.lang.Long): org.json.JSONObject;
				public static getSensigInfo(store: globalAndroid.content.Context): com.tiktok.appevents.edp.Sensig;
				public static getMonitorException(ex: java.lang.Throwable, ts: java.lang.Long, type: number): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class TimeUtil {
				public static class: java.lang.Class<com.tiktok.util.TimeUtil>;
				public static getISO8601Timestamp(): string;
				public static getISO8601Timestamp(tz: java.util.Date): string;
				public static dateStr(c1: number): string;
				public static isNowAfter(yesterdayStr: string, referenceStr: number): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tiktok {
		export module util {
			export class UrlConst {
				public static class: java.lang.Class<com.tiktok.util.UrlConst>;
				public static HTTPS: string = 'https://';
				public static PATH_CONFIG: string = '/api/v1/app_sdk/config';
				public static PATH_CONFIG2: string = '/api/v1/app_sdk/cache/config';
				public static PATH_DDL: string = '/api/v1/app_sdk/ddl';
				public static PATH_MONITOR: string = '/api/v1/app_sdk/monitor';
				public static PATH_BATCH: string = '/api/v1/app_sdk/batch';
				public static getBatchUrl(): string;
				public static getDebugModeUrl(): string;
				public static getConfigUrl(): string;
				public static getMonitorUrl(): string;
				public constructor();
				public static getDDLUrl(): string;
			}
		}
	}
}

//Generics information:
