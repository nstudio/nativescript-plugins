declare module io {
	export module branch {
		export module data {
			export class InstallReferrerResult {
				public static class: java.lang.Class<io.branch.data.InstallReferrerResult>;
				public component4(): number;
				public component5(): java.lang.Long;
				public setInstallBeginTimestampSeconds(value: number): void;
				public component6(): java.lang.Long;
				public constructor(appStore: string, installBeginTimestampSeconds: number, installReferrer: string, referrerClickTimestampSeconds: number, installBeginTimestampServerSeconds: java.lang.Long, referrerClickTimestampServerSeconds: java.lang.Long, isClickThrough: boolean);
				public setInstallReferrer(value: string): void;
				public setClickThrough(value: boolean): void;
				public equals(other: any): boolean;
				public getReferrerClickTimestampServerSeconds(): java.lang.Long;
				public getInstallBeginTimestampSeconds(): number;
				public setInstallBeginTimestampServerSeconds(value: java.lang.Long): void;
				public hashCode(): number;
				public getReferrerClickTimestampSeconds(): number;
				public copy(appStore: string, installBeginTimestampSeconds: number, installReferrer: string, referrerClickTimestampSeconds: number, installBeginTimestampServerSeconds: java.lang.Long, referrerClickTimestampServerSeconds: java.lang.Long, isClickThrough: boolean): io.branch.data.InstallReferrerResult;
				public component7(): boolean;
				public component1(): string;
				public component2(): number;
				public getInstallBeginTimestampServerSeconds(): java.lang.Long;
				public toString(): string;
				public getAppStore(): string;
				public getInstallReferrer(): string;
				public setReferrerClickTimestampServerSeconds(value: java.lang.Long): void;
				public component3(): string;
				public setReferrerClickTimestampSeconds(value: number): void;
				public isClickThrough(): boolean;
				public setAppStore(value: string): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module indexing {
			export class BranchUniversalObject {
				public static class: java.lang.Class<io.branch.indexing.BranchUniversalObject>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
				/** @deprecated */
				public addContentMetadata(key: string, value: string): io.branch.indexing.BranchUniversalObject;
				public getImageUrl(): string;
				public isPublicallyIndexable(): boolean;
				public isLocallyIndexable(): boolean;
				public convertToJson(): org.json.JSONObject;
				/** @deprecated */
				public getPrice(): number;
				/** @deprecated */
				public getCurrencyType(): string;
				/** @deprecated */
				public setPrice(price: number, currency: io.branch.referral.util.CurrencyType): io.branch.indexing.BranchUniversalObject;
				public getDescription(): string;
				public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
				/** @deprecated */
				public addContentMetadata(keys: java.util.HashMap<string, string>): io.branch.indexing.BranchUniversalObject;
				/** @deprecated */
				public getMetadata(): java.util.HashMap<string, string>;
				/** @deprecated */
				public showShareSheet(this_: globalAndroid.app.Activity, activity: io.branch.referral.util.LinkProperties, linkProperties: io.branch.referral.util.ShareSheetStyle, style: io.branch.referral.Branch.BranchLinkShareListener, callback: io.branch.referral.Branch.IChannelProperties): void;
				/** @deprecated */
				public setContentType(type: string): io.branch.indexing.BranchUniversalObject;
				public static getReferredBranchUniversalObject(): io.branch.indexing.BranchUniversalObject;
				public constructor();
				public getCanonicalIdentifier(): string;
				public getCanonicalUrl(): string;
				public setContentIndexingMode(indexMode: io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE): io.branch.indexing.BranchUniversalObject;
				public generateShortUrl(context: globalAndroid.content.Context, linkProperties: io.branch.referral.util.LinkProperties, callback: io.branch.referral.Branch.BranchLinkCreateListener): void;
				public setLocalIndexMode(localIndexMode: io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE): io.branch.indexing.BranchUniversalObject;
				public addKeyWord(keyword: string): io.branch.indexing.BranchUniversalObject;
				public getShortUrl(context: globalAndroid.content.Context, linkProperties: io.branch.referral.util.LinkProperties, defaultToLongUrl: boolean): string;
				public getContentMetadata(): io.branch.referral.util.ContentMetadata;
				public setContentExpiration(expirationDate: java.util.Date): io.branch.indexing.BranchUniversalObject;
				public setTitle(title: string): io.branch.indexing.BranchUniversalObject;
				public setContentDescription(description: string): io.branch.indexing.BranchUniversalObject;
				public setCanonicalIdentifier(canonicalIdentifier: string): io.branch.indexing.BranchUniversalObject;
				public getShortUrl(context: globalAndroid.content.Context, linkProperties: io.branch.referral.util.LinkProperties): string;
				public registerView(): void;
				/** @deprecated */
				public getType(): string;
				public static createInstance(i: org.json.JSONObject): io.branch.indexing.BranchUniversalObject;
				public getKeywords(): java.util.ArrayList<string>;
				public addKeyWords(keywords: java.util.ArrayList<string>): io.branch.indexing.BranchUniversalObject;
				public getExpirationTime(): number;
				public getTitle(): string;
				public registerView(callback: io.branch.indexing.BranchUniversalObject.RegisterViewStatusListener): void;
				public generateShortUrl(context: globalAndroid.content.Context, linkProperties: io.branch.referral.util.LinkProperties, callback: io.branch.referral.Branch.BranchLinkCreateListener, defaultToLongUrl: boolean): void;
				/** @deprecated */
				public showShareSheet(activity: globalAndroid.app.Activity, linkProperties: io.branch.referral.util.LinkProperties, style: io.branch.referral.util.ShareSheetStyle, callback: io.branch.referral.Branch.BranchLinkShareListener): void;
				public setContentMetadata(metadata: io.branch.referral.util.ContentMetadata): io.branch.indexing.BranchUniversalObject;
				public getKeywordsJsonArray(): org.json.JSONArray;
				public describeContents(): number;
				public setContentImageUrl(imageUrl: string): io.branch.indexing.BranchUniversalObject;
				public setCanonicalUrl(canonicalUrl: string): io.branch.indexing.BranchUniversalObject;
			}
			export module BranchUniversalObject {
				export class CONTENT_INDEX_MODE {
					public static class: java.lang.Class<io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE>;
					public static PUBLIC: io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE;
					public static PRIVATE: io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE;
					public static valueOf(name: string): io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE;
					public static values(): androidNative.Array<io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE>;
				}
				export class LinkShareListenerWrapper extends io.branch.referral.Branch.BranchLinkShareListener {
					public static class: java.lang.Class<io.branch.indexing.BranchUniversalObject.LinkShareListenerWrapper>;
					public onShareLinkDialogLaunched(): void;
					public onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void;
					public onShareLinkDialogDismissed(): void;
					public onChannelSelected(channelName: string): void;
					public onChannelSelected(param0: string): void;
					public onLinkShareResponse(sharedLink: string, sharedChannel: string, error: io.branch.referral.BranchError): void;
				}
				export class RegisterViewStatusListener {
					public static class: java.lang.Class<io.branch.indexing.BranchUniversalObject.RegisterViewStatusListener>;
					/**
					 * Constructs a new instance of the io.branch.indexing.BranchUniversalObject$RegisterViewStatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onRegisterViewFinished(param0: boolean, param1: io.branch.referral.BranchError): void });
					public constructor();
					public onRegisterViewFinished(param0: boolean, param1: io.branch.referral.BranchError): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module interfaces {
			export class IBranchLoggingCallbacks {
				public static class: java.lang.Class<io.branch.interfaces.IBranchLoggingCallbacks>;
				/**
				 * Constructs a new instance of the io.branch.interfaces.IBranchLoggingCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onBranchLog(param0: string, param1: string): void });
				public constructor();
				public onBranchLog(param0: string, param1: string): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module receivers {
			export class SharingBroadcastReceiver {
				public static class: java.lang.Class<io.branch.receivers.SharingBroadcastReceiver>;
				public onReceive(this_: globalAndroid.content.Context, context: globalAndroid.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class AnimatedDialog {
				public static class: java.lang.Class<io.branch.referral.AnimatedDialog>;
				public setContentView(layoutResID: number): void;
				public constructor(context: globalAndroid.content.Context, isFullWidthStyle: boolean);
				public constructor(context: globalAndroid.content.Context, theme: number);
				public cancel(): void;
				public onCreate(this_: globalAndroid.os.Bundle): void;
				public show(): void;
				public setDialogWindowAttributes(): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ApkParser {
				public static class: java.lang.Class<io.branch.referral.ApkParser>;
				public decompressXMLForValidator(host: androidNative.Array<number>, domainList: globalAndroid.content.Context): org.json.JSONObject;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class AppStoreReferrer {
				public static class: java.lang.Class<io.branch.referral.AppStoreReferrer>;
				public static getInstallationID(): string;
				public static processReferrerInfo(splitter: globalAndroid.content.Context, keyValue: string, referrerParam: number, referrerMap: number, referralParams: string, e: java.lang.Boolean, e: java.lang.Long, context: java.lang.Long): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class Base64 {
				public static class: java.lang.Class<io.branch.referral.Base64>;
				public static DEFAULT: number = 0;
				public static NO_PADDING: number = 1;
				public static NO_WRAP: number = 2;
				public static CRLF: number = 4;
				public static URL_SAFE: number = 8;
				public static NO_CLOSE: number = 16;
				public static decode(str: string, flags: number): androidNative.Array<number>;
				public static encodeToString(e: androidNative.Array<number>, input: number): string;
				public static decode(input: androidNative.Array<number>, flags: number): androidNative.Array<number>;
				public static encodeToString(e: androidNative.Array<number>, input: number, offset: number, len: number): string;
				public static decode(input: androidNative.Array<number>, offset: number, len: number, flags: number): androidNative.Array<number>;
				public static encode(input: androidNative.Array<number>, offset: number, len: number, flags: number): androidNative.Array<number>;
				public static encode(input: androidNative.Array<number>, flags: number): androidNative.Array<number>;
			}
			export module Base64 {
				export abstract class Coder {
					public static class: java.lang.Class<io.branch.referral.Base64.Coder>;
					public output: androidNative.Array<number>;
					public op: number;
					public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): boolean;
					public maxOutputSize(param0: number): number;
				}
				export class Decoder extends io.branch.referral.Base64.Coder {
					public static class: java.lang.Class<io.branch.referral.Base64.Decoder>;
					public constructor(flags: number, output: androidNative.Array<number>);
					public maxOutputSize(len: number): number;
					public process(this_: androidNative.Array<number>, input: number, offset: number, len: boolean): boolean;
				}
				export class Encoder extends io.branch.referral.Base64.Coder {
					public static class: java.lang.Class<io.branch.referral.Base64.Encoder>;
					public static LINE_GROUPS: number = 19;
					public do_padding: boolean;
					public do_newline: boolean;
					public do_cr: boolean;
					public process(t: androidNative.Array<number>, this_: number, input: number, offset: boolean): boolean;
					public constructor(flags: number, output: androidNative.Array<number>);
					public maxOutputSize(len: number): number;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BillingGooglePlay {
				public static class: java.lang.Class<io.branch.referral.BillingGooglePlay>;
				public billingClient: com.android.billingclient.api.BillingClient;
				public setBillingClient(value: com.android.billingclient.api.BillingClient): void;
				public getBillingClient(): com.android.billingclient.api.BillingClient;
				public startBillingClient(callback: any): void;
				public createAndLogEventForPurchase(context: globalAndroid.content.Context, purchase: com.android.billingclient.api.Purchase, contentItems: java.util.List<any>, currency: io.branch.referral.util.CurrencyType, revenue: number, productType: string): void;
				public logEventWithPurchase(subsProduct: globalAndroid.content.Context, productId: com.android.billingclient.api.Purchase): void;
			}
			export module BillingGooglePlay {
				export class Companion {
					public static class: java.lang.Class<io.branch.referral.BillingGooglePlay.Companion>;
					public getInstance(): io.branch.referral.BillingGooglePlay;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class Branch {
				public static class: java.lang.Class<io.branch.referral.Branch>;
				public static FEATURE_TAG_SHARE: string = 'share';
				public static REDIRECT_DESKTOP_URL: string = '$desktop_url';
				public static REDIRECT_ANDROID_URL: string = '$android_url';
				public static REDIRECT_IOS_URL: string = '$ios_url';
				public static REDIRECT_IPAD_URL: string = '$ipad_url';
				public static REDIRECT_FIRE_URL: string = '$fire_url';
				public static REDIRECT_BLACKBERRY_URL: string = '$blackberry_url';
				public static REDIRECT_WINDOWS_PHONE_URL: string = '$windows_phone_url';
				public static OG_TITLE: string = '$og_title';
				public static OG_DESC: string = '$og_description';
				public static OG_IMAGE_URL: string = '$og_image_url';
				public static OG_VIDEO: string = '$og_video';
				public static OG_URL: string = '$og_url';
				public static OG_APP_ID: string = '$og_app_id';
				public static DEEPLINK_PATH: string = '$deeplink_path';
				public static ALWAYS_DEEPLINK: string = '$always_deeplink';
				public static LINK_TYPE_UNLIMITED_USE: number = 0;
				public static LINK_TYPE_ONE_TIME_USE: number = 1;
				public static _userAgentString: string;
				public requestQueue_: io.branch.referral.ServerRequestQueue;
				public closeRequestNeeded: boolean;
				public static installDeveloperId: string;
				public static getAutoInstance(context: globalAndroid.content.Context, branchKey: string): io.branch.referral.Branch;
				public getApplicationContext(): globalAndroid.content.Context;
				public static enableLogging(): void;
				public setNetworkTimeout(timeout: number): void;
				/** @deprecated */
				public disableTracking(disableTracking: boolean): void;
				public static enableLogging(iBranchLogging: io.branch.interfaces.IBranchLoggingCallbacks, level: io.branch.referral.BranchLogger.BranchLogLevel): void;
				public setPreinstallPartner(preInstallPartner: string): io.branch.referral.Branch;
				public static showInstallPrompt(e: globalAndroid.app.Activity, referringLink: number): boolean;
				public static showInstallPrompt(activity: globalAndroid.app.Activity, requestCode: number, buo: io.branch.indexing.BranchUniversalObject): boolean;
				public static registerPlugin(name: string, version: string): void;
				public static isWaitingForIntent(): boolean;
				public static getSdkVersionNumber(): string;
				public share(activity: globalAndroid.app.Activity, buo: io.branch.indexing.BranchUniversalObject, linkProperties: io.branch.referral.util.LinkProperties, callback: io.branch.referral.Branch.BranchNativeLinkShareListener, title: string, subject: string): void;
				public static enableLogging(iBranchLogging: io.branch.interfaces.IBranchLoggingCallbacks): void;
				public static bypassWaitingForIntent(bypassIntent: boolean): void;
				public getLastAttributedTouchData(callback: io.branch.referral.ServerRequestGetLATD.BranchLastAttributedTouchDataListener): void;
				public notifyNetworkAvailable(): void;
				public static setReferringLinkAttributionForPreinstalledAppsEnabled(): void;
				public removeSessionInitializationDelay(): void;
				public setConsumerProtectionAttributionLevel(level: io.branch.referral.Defines.BranchAttributionLevel): void;
				public logout(callback: io.branch.referral.Branch.LogoutStatusListener): void;
				public setInstantDeepLinkPossible(instantDeepLinkPossible: boolean): void;
				public setConsumerProtectionAttributionLevel(level: io.branch.referral.Defines.BranchAttributionLevel, callback: io.branch.referral.Branch.TrackingStateCallback): void;
				public disableAdNetworkCallouts(disabled: boolean): void;
				public static notifyNativeToInit(): void;
				public addInstallMetadata(key: string, value: string): io.branch.referral.Branch;
				public static disableLogging(): void;
				public getLatestReferringParams(): org.json.JSONObject;
				public setIdentity(userId: string, callback: io.branch.referral.Branch.BranchReferralInitListener): void;
				public isUserIdentified(): boolean;
				public getConfigurationController(): io.branch.referral.BranchConfigurationController;
				public setRetryInterval(retryInterval: number): void;
				public static setAPIUrl(url: string): void;
				public getTrackingController(): io.branch.referral.TrackingController;
				public static expectDelayedSessionInitialization(expectDelayedInit: boolean): void;
				public static getIsUserAgentSync(): boolean;
				public logEventWithPurchase(context: globalAndroid.content.Context, purchase: com.android.billingclient.api.Purchase): void;
				public getFirstReferringParams(): org.json.JSONObject;
				public static setFBAppID(fbAppID: string): void;
				public registerView(branchUniversalObject: io.branch.indexing.BranchUniversalObject, callback: io.branch.indexing.BranchUniversalObject.RegisterViewStatusListener): void;
				/** @deprecated */
				public disableAppList(): void;
				public setIdentity(userId: string): void;
				public getBranchRemoteInterface(): io.branch.referral.network.BranchRemoteInterface;
				public setReferrerGclidValidForWindow(window: number): void;
				public static sessionBuilder(activity: globalAndroid.app.Activity): io.branch.referral.Branch.InitSessionBuilder;
				public addUriHostsToSkip(urlSkipPattern: string): io.branch.referral.Branch;
				public setBranchRemoteInterface(remoteInterface: io.branch.referral.network.BranchRemoteInterface): void;
				public logout(): void;
				public setPreinstallCampaign(preInstallCampaign: string): io.branch.referral.Branch;
				public static isReferringLinkAttributionForPreinstalledAppsEnabled(): boolean;
				public static getPluginVersion(): string;
				public setNetworkConnectTimeout(connectTimeout: number): void;
				public static enableLogging(level: io.branch.referral.BranchLogger.BranchLogLevel): void;
				/** @deprecated */
				public static enableForcedSession(): void;
				public setRetryCount(retryCount: number): void;
				public setDeepLinkDebugMode(debugParams: org.json.JSONObject): void;
				public isTrackingDisabled(): boolean;
				public getDeeplinkDebugParams(): org.json.JSONObject;
				public setNoConnectionRetryMax(retryMax: number): void;
				/** @deprecated */
				public static disableForcedSession(): void;
				public getLatestReferringParamsSync(): org.json.JSONObject;
				public openBrowserExperience(weblinkUrl: org.json.JSONObject): void;
				/** @deprecated */
				public disableTracking(disableTracking: boolean, callback: io.branch.referral.Branch.TrackingStateCallback): void;
				public getDeviceInfo(): io.branch.referral.DeviceInfo;
				/** @deprecated */
				public static isForceSessionEnabled(): boolean;
				public getLastAttributedTouchData(callback: io.branch.referral.ServerRequestGetLATD.BranchLastAttributedTouchDataListener, attributionWindow: number): void;
				public unlockPendingIntent(): void;
				public static isAutoDeepLinkLaunch(activity: globalAndroid.app.Activity): boolean;
				public addFacebookPartnerParameterWithName(key: string, value: string): void;
				public static isInstantApp(context: globalAndroid.content.Context): boolean;
				public addWhiteListedScheme(urlWhiteListPattern: string): io.branch.referral.Branch;
				public setWhiteListedSchemes(urlWhiteListPatternList: java.util.List<string>): io.branch.referral.Branch;
				public getFirstReferringParamsSync(): org.json.JSONObject;
				public static enableTestMode(): void;
				public setLimitFacebookTracking(isLimitFacebookTracking: boolean): void;
				public static getAutoInstance(context: globalAndroid.content.Context): io.branch.referral.Branch;
				public setCustomTabsIntent(customTabsIntent: androidx.browser.customtabs.CustomTabsIntent): void;
				public isInstantDeepLinkPossible(): boolean;
				public static enableBypassCurrentActivityIntentState(): void;
				public static setCDNBaseUrl(url: string): void;
				public getBranchQRCodeCache(): io.branch.referral.BranchQRCodeCache;
				public cancelShareLinkDialog(animateClose: boolean): void;
				public setBranchKey(branchKey: string): void;
				public addSnapPartnerParameterWithName(key: string, value: string): void;
				public setDMAParamsForEEA(eeaRegion: boolean, adPersonalizationConsent: boolean, adUserDataUsageConsent: boolean): void;
				public static disableTestMode(): void;
				public clearPartnerParameters(): void;
				public resetUserSession(): void;
				public static disableInstantDeepLinking(disableIDL: boolean): void;
				public static getInstance(): io.branch.referral.Branch;
				public setRequestMetadata(key: string, value: string): void;
				public static useEUEndpoint(): void;
				public static disableDeviceIDFetch(deviceIdFetch: java.lang.Boolean): void;
				public static isDeviceIDFetchDisabled(): boolean;
				public static setIsUserAgentSync(sync: boolean): void;
				public getBranchPluginSupport(): io.branch.referral.BranchPluginSupport;
				public static bypassCurrentActivityIntentState(): boolean;
				public static showInstallPrompt(activity: globalAndroid.app.Activity, requestCode: number, referrer: string): boolean;
			}
			export module Branch {
				export class BranchLinkCreateListener {
					public static class: java.lang.Class<io.branch.referral.Branch.BranchLinkCreateListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$BranchLinkCreateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onLinkCreate(param0: string, param1: io.branch.referral.BranchError): void });
					public constructor();
					public onLinkCreate(param0: string, param1: io.branch.referral.BranchError): void;
				}
				export class BranchLinkShareListener {
					public static class: java.lang.Class<io.branch.referral.Branch.BranchLinkShareListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$BranchLinkShareListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onShareLinkDialogLaunched(): void; onShareLinkDialogDismissed(): void; onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void; onChannelSelected(param0: string): void });
					public constructor();
					public onShareLinkDialogLaunched(): void;
					public onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void;
					public onShareLinkDialogDismissed(): void;
					public onChannelSelected(param0: string): void;
				}
				export class BranchListResponseListener {
					public static class: java.lang.Class<io.branch.referral.Branch.BranchListResponseListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$BranchListResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onReceivingResponse(param0: org.json.JSONArray, param1: io.branch.referral.BranchError): void });
					public constructor();
					public onReceivingResponse(param0: org.json.JSONArray, param1: io.branch.referral.BranchError): void;
				}
				export class BranchNativeLinkShareListener {
					public static class: java.lang.Class<io.branch.referral.Branch.BranchNativeLinkShareListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$BranchNativeLinkShareListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onLinkShareResponse(param0: string, param1: io.branch.referral.BranchError): void; onChannelSelected(param0: string): void });
					public constructor();
					public onLinkShareResponse(param0: string, param1: io.branch.referral.BranchError): void;
					public onChannelSelected(param0: string): void;
				}
				export class BranchReferralInitListener {
					public static class: java.lang.Class<io.branch.referral.Branch.BranchReferralInitListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$BranchReferralInitListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onInitFinished(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void });
					public constructor();
					public onInitFinished(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void;
				}
				export class BranchReferralStateChangedListener {
					public static class: java.lang.Class<io.branch.referral.Branch.BranchReferralStateChangedListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$BranchReferralStateChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onStateChanged(param0: boolean, param1: io.branch.referral.BranchError): void });
					public constructor();
					public onStateChanged(param0: boolean, param1: io.branch.referral.BranchError): void;
				}
				export class BranchUniversalReferralInitListener {
					public static class: java.lang.Class<io.branch.referral.Branch.BranchUniversalReferralInitListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$BranchUniversalReferralInitListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onInitFinished(param0: io.branch.indexing.BranchUniversalObject, param1: io.branch.referral.util.LinkProperties, param2: io.branch.referral.BranchError): void });
					public constructor();
					public onInitFinished(param0: io.branch.indexing.BranchUniversalObject, param1: io.branch.referral.util.LinkProperties, param2: io.branch.referral.BranchError): void;
				}
				export class ExtendedBranchLinkShareListener extends io.branch.referral.Branch.BranchLinkShareListener {
					public static class: java.lang.Class<io.branch.referral.Branch.ExtendedBranchLinkShareListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$ExtendedBranchLinkShareListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onChannelSelected(param0: string, param1: io.branch.indexing.BranchUniversalObject, param2: io.branch.referral.util.LinkProperties): boolean; onShareLinkDialogLaunched(): void; onShareLinkDialogDismissed(): void; onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void; onChannelSelected(param0: string): void });
					public constructor();
					public onShareLinkDialogLaunched(): void;
					public onLinkShareResponse(param0: string, param1: string, param2: io.branch.referral.BranchError): void;
					public onShareLinkDialogDismissed(): void;
					public onChannelSelected(param0: string, param1: io.branch.indexing.BranchUniversalObject, param2: io.branch.referral.util.LinkProperties): boolean;
					public onChannelSelected(param0: string): void;
				}
				export class GetShortLinkTask extends globalAndroid.os.AsyncTask<io.branch.referral.ServerRequest, java.lang.Void, io.branch.referral.ServerResponse> {
					public static class: java.lang.Class<io.branch.referral.Branch.GetShortLinkTask>;
					public doInBackground(serverRequests: androidNative.Array<io.branch.referral.ServerRequest>): io.branch.referral.ServerResponse;
				}
				export class IChannelProperties {
					public static class: java.lang.Class<io.branch.referral.Branch.IChannelProperties>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$IChannelProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getSharingTitleForChannel(param0: string): string; getSharingMessageForChannel(param0: string): string });
					public constructor();
					public getSharingTitleForChannel(param0: string): string;
					public getSharingMessageForChannel(param0: string): string;
				}
				export class INTENT_STATE {
					public static class: java.lang.Class<io.branch.referral.Branch.INTENT_STATE>;
					public static PENDING: io.branch.referral.Branch.INTENT_STATE;
					public static READY: io.branch.referral.Branch.INTENT_STATE;
					public static valueOf(name: string): io.branch.referral.Branch.INTENT_STATE;
					public static values(): androidNative.Array<io.branch.referral.Branch.INTENT_STATE>;
				}
				export class InitSessionBuilder {
					public static class: java.lang.Class<io.branch.referral.Branch.InitSessionBuilder>;
					public ignoreIntent(ignore: boolean): io.branch.referral.Branch.InitSessionBuilder;
					public withCallback(callback: io.branch.referral.Branch.BranchUniversalReferralInitListener): io.branch.referral.Branch.InitSessionBuilder;
					public withDelay(delayMillis: number): io.branch.referral.Branch.InitSessionBuilder;
					/** @deprecated */
					public isReferrable(isReferrable: boolean): io.branch.referral.Branch.InitSessionBuilder;
					public withData(uri: globalAndroid.net.Uri): io.branch.referral.Branch.InitSessionBuilder;
					public withCallback(callback: io.branch.referral.Branch.BranchReferralInitListener): io.branch.referral.Branch.InitSessionBuilder;
					public init(): void;
					public reInit(): void;
				}
				export class LogoutStatusListener {
					public static class: java.lang.Class<io.branch.referral.Branch.LogoutStatusListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$LogoutStatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onLogoutFinished(param0: boolean, param1: io.branch.referral.BranchError): void });
					public constructor();
					public onLogoutFinished(param0: boolean, param1: io.branch.referral.BranchError): void;
				}
				export class SESSION_STATE {
					public static class: java.lang.Class<io.branch.referral.Branch.SESSION_STATE>;
					public static INITIALISED: io.branch.referral.Branch.SESSION_STATE;
					public static INITIALISING: io.branch.referral.Branch.SESSION_STATE;
					public static UNINITIALISED: io.branch.referral.Branch.SESSION_STATE;
					public static valueOf(name: string): io.branch.referral.Branch.SESSION_STATE;
					public static values(): androidNative.Array<io.branch.referral.Branch.SESSION_STATE>;
				}
				export class TrackingStateCallback {
					public static class: java.lang.Class<io.branch.referral.Branch.TrackingStateCallback>;
					/**
					 * Constructs a new instance of the io.branch.referral.Branch$TrackingStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onTrackingStateChanged(param0: boolean, param1: org.json.JSONObject, param2: io.branch.referral.BranchError): void });
					public constructor();
					public onTrackingStateChanged(param0: boolean, param1: org.json.JSONObject, param2: io.branch.referral.BranchError): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchActivityLifecycleObserver {
				public static class: java.lang.Class<io.branch.referral.BranchActivityLifecycleObserver>;
				public onActivityStarted(activity: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
				public onActivityCreated(activity: globalAndroid.app.Activity, bundle: globalAndroid.os.Bundle): void;
				public onActivityDestroyed(activity: globalAndroid.app.Activity): void;
				public onActivityResumed(activity: globalAndroid.app.Activity): void;
				public onActivityPaused(activity: globalAndroid.app.Activity): void;
				public onActivityStopped(activity: globalAndroid.app.Activity): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchApp {
				public static class: java.lang.Class<io.branch.referral.BranchApp>;
				public onCreate(): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export abstract class BranchAsyncTask<Params, Progress, Result> extends globalAndroid.os.AsyncTask<any, any, any> {
				public static class: java.lang.Class<io.branch.referral.BranchAsyncTask<any, any, any>>;
				public executeTask(this_: androidNative.Array<any>): globalAndroid.os.AsyncTask<any, any, any>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchConfigurationController {
				public static class: java.lang.Class<io.branch.referral.BranchConfigurationController>;
				public static KEY_INSTANT_DEEP_LINKING_ENABLED: string = 'bnc_instant_deep_linking_enabled';
				public static KEY_DEFER_INIT_FOR_PLUGIN_RUNTIME: string = 'bnc_defer_init_for_plugin_runtime';
				public setTestModeEnabled(enabled: boolean): void;
				public serializeConfiguration(): org.json.JSONObject;
				public isInstantDeepLinkingEnabled(): boolean;
				public setDeferInitForPluginRuntime(deferred: boolean): void;
				public setDelayedSessionInitUsed(branch: boolean): void;
				public setInstantDeepLinkingEnabled(enabled: boolean): void;
				public isTestModeEnabled(): boolean;
				public getBranchKeySource(): string;
				public isBranchKeyFallbackUsed(): boolean;
				public constructor();
			}
			export module BranchConfigurationController {
				export class Companion {
					public static class: java.lang.Class<io.branch.referral.BranchConfigurationController.Companion>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchError {
				public static class: java.lang.Class<io.branch.referral.BranchError>;
				public static ERR_NO_SESSION: number = -101;
				public static ERR_NO_INTERNET_PERMISSION: number = -102;
				public static ERR_BRANCH_INIT_FAILED: number = -104;
				public static ERR_BRANCH_DUPLICATE_URL: number = -105;
				public static ERR_API_LVL_14_NEEDED: number = -108;
				public static ERR_BRANCH_NOT_INSTANTIATED: number = -109;
				public static ERR_BRANCH_NO_SHARE_OPTION: number = -110;
				public static ERR_BRANCH_REQ_TIMED_OUT: number = -111;
				public static ERR_BRANCH_UNABLE_TO_REACH_SERVERS: number = -112;
				public static ERR_BRANCH_NO_CONNECTIVITY: number = -113;
				public static ERR_BRANCH_KEY_INVALID: number = -114;
				public static ERR_BRANCH_RESOURCE_CONFLICT: number = -115;
				public static ERR_BRANCH_INVALID_REQUEST: number = -116;
				public static ERR_BRANCH_TRACKING_DISABLED: number = -117;
				public static ERR_BRANCH_ALREADY_INITIALIZED: number = -118;
				public static ERR_IMPROPER_REINITIALIZATION: number = -119;
				public static ERR_BRANCH_TASK_TIMEOUT: number = -120;
				public static ERR_NETWORK_ON_MAIN: number = -121;
				public static ERR_OTHER: number = -122;
				public constructor(failMsg: string, statusCode: number);
				public getMessage(): string;
				public getErrorCode(): number;
				public toString(): string;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchJsonConfig {
				public static class: java.lang.Class<io.branch.referral.BranchJsonConfig>;
				public static TAG: string = 'BranchJsonConfig';
				public isValid(key: io.branch.referral.BranchJsonConfig.BranchJsonKey): boolean;
				public getUseTestInstance(): java.lang.Boolean;
				public static getInstance(context: globalAndroid.content.Context): io.branch.referral.BranchJsonConfig;
				public getAPIUrl(): string;
				public getConsumerProtectionAttributionLevel(): string;
				public getBranchKey(): string;
				public getEnableLogging(): java.lang.Boolean;
				public isValid(): boolean;
				public get(this_: io.branch.referral.BranchJsonConfig.BranchJsonKey): any;
				public getDeferInitForPluginRuntime(): java.lang.Boolean;
				public getFbAppId(): string;
			}
			export module BranchJsonConfig {
				export class BranchJsonKey {
					public static class: java.lang.Class<io.branch.referral.BranchJsonConfig.BranchJsonKey>;
					public static branchKey: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static testKey: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static liveKey: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static useTestInstance: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static enableLogging: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static deferInitForPluginRuntime: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static apiUrl: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static fbAppId: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static cppLevel: io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static valueOf(name: string): io.branch.referral.BranchJsonConfig.BranchJsonKey;
					public static values(): androidNative.Array<io.branch.referral.BranchJsonConfig.BranchJsonKey>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchLinkData {
				public static class: java.lang.Class<io.branch.referral.BranchLinkData>;
				public getChannel(): string;
				public putChannel(channel: string): void;
				public getAlias(): string;
				public putFeature(feature: string): void;
				public getType(): number;
				public putStage(stage: string): void;
				public getDuration(): number;
				public putDuration(duration: number): void;
				public getCampaign(): string;
				public putCampaign(campaign: string): void;
				public putSource(): void;
				public putAlias(alias: string): void;
				public constructor();
				public equals(obj: any): boolean;
				public getTags(): java.util.Collection<string>;
				public getFeature(): string;
				public putParams(params: org.json.JSONObject): void;
				public getLinkDataJsonObject(): org.json.JSONObject;
				public hashCode(): number;
				public getSource(): string;
				public putTags(tagArray: java.util.Collection<string>): void;
				public getParams(): org.json.JSONObject;
				public putType(type: number): void;
				public getStage(): string;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchLogger {
				public static class: java.lang.Class<io.branch.referral.BranchLogger>;
				public static INSTANCE: io.branch.referral.BranchLogger;
				public static setLoggingEnabled(value: boolean): void;
				public static getLoggingEnabled(): boolean;
				public static logAlways(message: string): void;
				public static e(message: string): void;
				public static getLoggerCallback(): io.branch.interfaces.IBranchLoggingCallbacks;
				public static v(message: string): void;
				public static i(message: string): void;
				public static setLoggingLevel(value: io.branch.referral.BranchLogger.BranchLogLevel): void;
				public static getLoggingLevel(): io.branch.referral.BranchLogger.BranchLogLevel;
				public static stackTraceToString(writer: java.lang.Exception): string;
				public static d(message: string): void;
				public static setLoggerCallback(value: io.branch.interfaces.IBranchLoggingCallbacks): void;
				public static w(message: string): void;
			}
			export module BranchLogger {
				export class BranchLogLevel {
					public static class: java.lang.Class<io.branch.referral.BranchLogger.BranchLogLevel>;
					public static ERROR: io.branch.referral.BranchLogger.BranchLogLevel;
					public static WARN: io.branch.referral.BranchLogger.BranchLogLevel;
					public static INFO: io.branch.referral.BranchLogger.BranchLogLevel;
					public static DEBUG: io.branch.referral.BranchLogger.BranchLogLevel;
					public static VERBOSE: io.branch.referral.BranchLogger.BranchLogLevel;
					public static valueOf(value: string): io.branch.referral.BranchLogger.BranchLogLevel;
					public getLevel(): number;
					public static values(): androidNative.Array<io.branch.referral.BranchLogger.BranchLogLevel>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchPartnerParameters {
				public static class: java.lang.Class<io.branch.referral.BranchPartnerParameters>;
				public constructor();
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchPluginSupport {
				public static class: java.lang.Class<io.branch.referral.BranchPluginSupport>;
				public getHardwareID(): io.branch.referral.SystemObserver.UniqueId;
				public static getInstance(): io.branch.referral.BranchPluginSupport;
				public deviceDescription(): java.util.Map<string, any>;
				public static isNullOrEmptyOrBlank(str: string): boolean;
			}
			export module BranchPluginSupport {
				export class SystemObserverInstance extends io.branch.referral.SystemObserver {
					public static class: java.lang.Class<io.branch.referral.BranchPluginSupport.SystemObserverInstance>;
					public constructor(param0: io.branch.referral.BranchPluginSupport);
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchPreinstall {
				public static class: java.lang.Class<io.branch.referral.BranchPreinstall>;
				public static setBranchPreInstallGoogleReferrer(context: globalAndroid.content.Context, referrerMap: java.util.HashMap<string, string>): void;
				public static getBranchFileContent(datakey: org.json.JSONObject, branchPreinstallData: io.branch.referral.Branch, preinstallDataKeys: globalAndroid.content.Context): void;
				public static getPreinstallSystemData(branchFilePath: io.branch.referral.Branch, branchInstance: globalAndroid.content.Context): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchQRCodeCache {
				public static class: java.lang.Class<io.branch.referral.BranchQRCodeCache>;
				public cache: java.util.concurrent.ConcurrentHashMap<org.json.JSONObject, androidNative.Array<number>>;
				public checkQRCodeCache(e: org.json.JSONObject): androidNative.Array<number>;
				public static getInstance(): io.branch.referral.BranchQRCodeCache;
				public addQRCodeToCache(this_: org.json.JSONObject, parameters: androidNative.Array<number>): void;
				public static areEqual(ob1: any, ob2: any): boolean;
			}
			export module BranchQRCodeCache {
				export class SystemObserverInstance extends io.branch.referral.SystemObserver {
					public static class: java.lang.Class<io.branch.referral.BranchQRCodeCache.SystemObserverInstance>;
					public constructor(param0: io.branch.referral.BranchQRCodeCache);
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchShareSheetBuilder {
				public static class: java.lang.Class<io.branch.referral.BranchShareSheetBuilder>;
				public setAsFullWidthStyle(setFullWidthStyle: boolean): io.branch.referral.BranchShareSheetBuilder;
				public getShareMsg(): string;
				public getDialogThemeResourceID(): number;
				public setDialogThemeResourceID(styleResourceID: number): io.branch.referral.BranchShareSheetBuilder;
				public setShortLinkBuilderInternal(shortLinkBuilder: io.branch.referral.BranchShortLinkBuilder): void;
				public setCopyUrlStyle(drawableIconID: number, stringLabelID: number, stringMessageID: number): io.branch.referral.BranchShareSheetBuilder;
				public getUrlCopiedMessage(): string;
				public addPreferredSharingOption(preferredOption: io.branch.referral.SharingHelper.SHARE_WITH): io.branch.referral.BranchShareSheetBuilder;
				public setSubject(subject: string): io.branch.referral.BranchShareSheetBuilder;
				public setDefaultURL(url: string): io.branch.referral.BranchShareSheetBuilder;
				public getDefaultURL(): string;
				public getDividerHeight(): number;
				public setCopyUrlStyle(icon: globalAndroid.graphics.drawable.Drawable, label: string, message: string): io.branch.referral.BranchShareSheetBuilder;
				public setFeature(feature: string): io.branch.referral.BranchShareSheetBuilder;
				public setChannelProperties(channelPropertiesCallback: io.branch.referral.Branch.IChannelProperties): io.branch.referral.BranchShareSheetBuilder;
				public getActivity(): globalAndroid.app.Activity;
				public includeInShareSheet(packageName: androidNative.Array<string>): io.branch.referral.BranchShareSheetBuilder;
				public setMoreOptionStyle(icon: globalAndroid.graphics.drawable.Drawable, label: string): io.branch.referral.BranchShareSheetBuilder;
				public addTags(tags: java.util.ArrayList<string>): io.branch.referral.BranchShareSheetBuilder;
				public setMatchDuration(matchDuration: number): io.branch.referral.BranchShareSheetBuilder;
				public getCopyUrlIcon(): globalAndroid.graphics.drawable.Drawable;
				public getShareSub(): string;
				public getChannelPropertiesCallback(): io.branch.referral.Branch.IChannelProperties;
				public setSharingTitle(titleView: globalAndroid.view.View): io.branch.referral.BranchShareSheetBuilder;
				public getIconSize(): number;
				public addParam(this_: string, key: string): io.branch.referral.BranchShareSheetBuilder;
				public setIconSize(iconSize: number): io.branch.referral.BranchShareSheetBuilder;
				public getCallback(): io.branch.referral.Branch.BranchLinkShareListener;
				public setCallback(callback: io.branch.referral.Branch.BranchLinkShareListener): io.branch.referral.BranchShareSheetBuilder;
				public setSharingTitle(title: string): io.branch.referral.BranchShareSheetBuilder;
				public setDividerHeight(height: number): io.branch.referral.BranchShareSheetBuilder;
				public constructor(activity: globalAndroid.app.Activity, shortLinkBuilder: io.branch.referral.BranchShortLinkBuilder);
				public getCopyURlText(): string;
				public setMoreOptionStyle(drawableIconID: number, stringLabelID: number): io.branch.referral.BranchShareSheetBuilder;
				public getIsFullWidthStyle(): boolean;
				public includeInShareSheet(packageNames: java.util.List<string>): io.branch.referral.BranchShareSheetBuilder;
				public getSharingTitleView(): globalAndroid.view.View;
				public getStyleResourceID(): number;
				public excludeFromShareSheet(packageNames: java.util.List<string>): io.branch.referral.BranchShareSheetBuilder;
				/** @deprecated */
				public getBranch(): io.branch.referral.Branch;
				public constructor(keys: globalAndroid.app.Activity, e: org.json.JSONObject);
				public getPreferredOptions(): java.util.ArrayList<io.branch.referral.SharingHelper.SHARE_WITH>;
				public setAlias(alias: string): io.branch.referral.BranchShareSheetBuilder;
				public addPreferredSharingOptions(preferredOptions: java.util.ArrayList<io.branch.referral.SharingHelper.SHARE_WITH>): io.branch.referral.BranchShareSheetBuilder;
				public includeInShareSheet(packageName: string): io.branch.referral.BranchShareSheetBuilder;
				public shareLink(): void;
				public setMessage(message: string): io.branch.referral.BranchShareSheetBuilder;
				public getMoreOptionIcon(): globalAndroid.graphics.drawable.Drawable;
				public excludeFromShareSheet(packageName: string): io.branch.referral.BranchShareSheetBuilder;
				public setStyleResourceID(resourceID: number): void;
				public excludeFromShareSheet(packageName: androidNative.Array<string>): io.branch.referral.BranchShareSheetBuilder;
				public getShortLinkBuilder(): io.branch.referral.BranchShortLinkBuilder;
				public getMoreOptionText(): string;
				public getSharingTitle(): string;
				public addTag(tag: string): io.branch.referral.BranchShareSheetBuilder;
				public setStage(stage: string): io.branch.referral.BranchShareSheetBuilder;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchShortLinkBuilder extends io.branch.referral.BranchUrlBuilder<io.branch.referral.BranchShortLinkBuilder> {
				public static class: java.lang.Class<io.branch.referral.BranchShortLinkBuilder>;
				public setAlias(alias: string): io.branch.referral.BranchShortLinkBuilder;
				public setParameters(parameters: org.json.JSONObject): io.branch.referral.BranchShortLinkBuilder;
				public constructor(context: globalAndroid.content.Context);
				public setDuration(duration: number): io.branch.referral.BranchShortLinkBuilder;
				public setCampaign(campaign: string): io.branch.referral.BranchShortLinkBuilder;
				public getShortUrl(): string;
				public generateShortUrl(callback: io.branch.referral.Branch.BranchLinkCreateListener): void;
				public setStage(stage: string): io.branch.referral.BranchShortLinkBuilder;
				public setFeature(feature: string): io.branch.referral.BranchShortLinkBuilder;
				public setType(type: number): io.branch.referral.BranchShortLinkBuilder;
				public setChannel(channel: string): io.branch.referral.BranchShortLinkBuilder;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchUniversalReferralInitWrapper extends io.branch.referral.Branch.BranchReferralInitListener {
				public static class: java.lang.Class<io.branch.referral.BranchUniversalReferralInitWrapper>;
				public onInitFinished(linkProperties: org.json.JSONObject, this_: io.branch.referral.BranchError): void;
				public onInitFinished(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void;
				public constructor(universalReferralInitListener: io.branch.referral.Branch.BranchUniversalReferralInitListener);
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export abstract class BranchUrlBuilder<T> extends java.lang.Object {
				public static class: java.lang.Class<io.branch.referral.BranchUrlBuilder<any>>;
				public params_: org.json.JSONObject;
				public channel_: string;
				public feature_: string;
				public stage_: string;
				public campaign_: string;
				public alias_: string;
				public type_: number;
				public duration_: number;
				public tags_: java.util.ArrayList<string>;
				public branchReferral_: io.branch.referral.Branch;
				public addTag(tag: string): T;
				public setDefaultToLongUrl(defaultToLongUrl: boolean): T;
				public generateUrlInternal(this_: io.branch.referral.Branch.BranchLinkCreateListener): void;
				public constructor(context: globalAndroid.content.Context);
				public getUrl(): string;
				public addTags(tags: java.util.List<string>): T;
				public addParameters(this_: string, key: any): T;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchUrlQueryParameter {
				public static class: java.lang.Class<io.branch.referral.BranchUrlQueryParameter>;
				public isDeepLink(): boolean;
				public getValidityWindow(): number;
				public setName(value: string): void;
				public getTimestamp(): java.util.Date;
				public setTimestamp(value: java.util.Date): void;
				public component4(): boolean;
				public copy(name: string, value: string, timestamp: java.util.Date, isDeepLink: boolean, validityWindow: number): io.branch.referral.BranchUrlQueryParameter;
				public component1(): string;
				public component3(): java.util.Date;
				public getValue(): string;
				public getName(): string;
				public constructor(name: string, value: string, timestamp: java.util.Date, isDeepLink: boolean, validityWindow: number);
				public toString(): string;
				public setValidityWindow(value: number): void;
				public constructor();
				public component5(): number;
				public equals(other: any): boolean;
				public hashCode(): number;
				public setDeepLink(value: boolean): void;
				public component2(): string;
				public setValue(value: string): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BranchUtil {
				public static class: java.lang.Class<io.branch.referral.BranchUtil>;
				public static decodeResourceId(e: globalAndroid.content.Context, context: number): string;
				public static getDeepLinkSchemes(e: globalAndroid.content.Context): org.json.JSONObject;
				public static getDeferInitForPluginRuntimeConfig(context: globalAndroid.content.Context): boolean;
				public static isTestModeEnabled(): boolean;
				public static getDrawable(context: globalAndroid.content.Context, drawableID: number): globalAndroid.graphics.drawable.Drawable;
				public static setCPPLevelFromConfig(cppLevel: globalAndroid.content.Context): void;
				public constructor();
				public static setAPIBaseUrlFromConfig(context: globalAndroid.content.Context): void;
				public static readBranchKey(context: globalAndroid.content.Context): string;
				public static setFbAppIdFromConfig(context: globalAndroid.content.Context): void;
				public static isLowOnMemory(context: globalAndroid.content.Context): boolean;
				public static getEnableLoggingConfig(context: globalAndroid.content.Context): boolean;
				public static dpToPx(context: globalAndroid.content.Context, dp: number): number;
			}
			export module BranchUtil {
				export class JsonReader {
					public static class: java.lang.Class<io.branch.referral.BranchUtil.JsonReader>;
					public readOutInt(key: string, fallback: java.lang.Integer): java.lang.Integer;
					public readOutBoolean(key: string): boolean;
					public readOutLong(key: string): number;
					public readOutDouble(key: string, fallback: java.lang.Double): java.lang.Double;
					public has(key: string): boolean;
					public readOut(key: string): any;
					public readOutInt(key: string): number;
					public readOutString(key: string): string;
					public constructor(this_: org.json.JSONObject);
					public readOutString(key: string, fallback: string): string;
					public readOutJsonArray(key: string): org.json.JSONArray;
					public getJsonObject(): org.json.JSONObject;
					public keys(): java.util.Iterator<string>;
					public readOutDouble(key: string): number;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class BuildConfig {
				public static class: java.lang.Class<io.branch.referral.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = 'io.branch.referral';
				public static BUILD_TYPE: string = 'release';
				public static VERSION_CODE: number = 21696;
				public static VERSION_NAME: string = '5.19.0';
				public constructor();
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class Defines {
				public static class: java.lang.Class<io.branch.referral.Defines>;
				public constructor();
			}
			export module Defines {
				export class BranchAttributionLevel {
					public static class: java.lang.Class<io.branch.referral.Defines.BranchAttributionLevel>;
					public static FULL: io.branch.referral.Defines.BranchAttributionLevel;
					public static REDUCED: io.branch.referral.Defines.BranchAttributionLevel;
					public static MINIMAL: io.branch.referral.Defines.BranchAttributionLevel;
					public static NONE: io.branch.referral.Defines.BranchAttributionLevel;
					public static valueOf(name: string): io.branch.referral.Defines.BranchAttributionLevel;
					public static values(): androidNative.Array<io.branch.referral.Defines.BranchAttributionLevel>;
				}
				export class HeaderKey {
					public static class: java.lang.Class<io.branch.referral.Defines.HeaderKey>;
					public static RequestId: io.branch.referral.Defines.HeaderKey;
					public static SendCloseRequest: io.branch.referral.Defines.HeaderKey;
					public getKey(): string;
					public toString(): string;
					public static valueOf(name: string): io.branch.referral.Defines.HeaderKey;
					public static values(): androidNative.Array<io.branch.referral.Defines.HeaderKey>;
				}
				export class IntentKeys {
					public static class: java.lang.Class<io.branch.referral.Defines.IntentKeys>;
					public static BranchData: io.branch.referral.Defines.IntentKeys;
					public static ForceNewBranchSession: io.branch.referral.Defines.IntentKeys;
					public static BranchLinkUsed: io.branch.referral.Defines.IntentKeys;
					public static BranchURI: io.branch.referral.Defines.IntentKeys;
					public static AutoDeepLinked: io.branch.referral.Defines.IntentKeys;
					public getKey(): string;
					public static values(): androidNative.Array<io.branch.referral.Defines.IntentKeys>;
					public toString(): string;
					public static valueOf(name: string): io.branch.referral.Defines.IntentKeys;
				}
				export class Jsonkey {
					public static class: java.lang.Class<io.branch.referral.Defines.Jsonkey>;
					public static RandomizedBundleToken: io.branch.referral.Defines.Jsonkey;
					public static Identity: io.branch.referral.Defines.Jsonkey;
					public static RandomizedDeviceToken: io.branch.referral.Defines.Jsonkey;
					public static SessionID: io.branch.referral.Defines.Jsonkey;
					public static LinkClickID: io.branch.referral.Defines.Jsonkey;
					public static GoogleSearchInstallReferrer: io.branch.referral.Defines.Jsonkey;
					public static GooglePlayInstallReferrer: io.branch.referral.Defines.Jsonkey;
					public static ClickedReferrerTimeStamp: io.branch.referral.Defines.Jsonkey;
					public static ClickedReferrerServerTimeStamp: io.branch.referral.Defines.Jsonkey;
					public static Gclid: io.branch.referral.Defines.Jsonkey;
					public static IsDeeplinkGclid: io.branch.referral.Defines.Jsonkey;
					public static ReferrerGclid: io.branch.referral.Defines.Jsonkey;
					public static ReferringUrlQueryParameters: io.branch.referral.Defines.Jsonkey;
					public static InstallBeginTimeStamp: io.branch.referral.Defines.Jsonkey;
					public static InstallBeginServerTimeStamp: io.branch.referral.Defines.Jsonkey;
					public static BranchLinkUsed: io.branch.referral.Defines.Jsonkey;
					public static ReferringBranchIdentity: io.branch.referral.Defines.Jsonkey;
					public static BranchIdentity: io.branch.referral.Defines.Jsonkey;
					public static BranchKey: io.branch.referral.Defines.Jsonkey;
					public static BranchData: io.branch.referral.Defines.Jsonkey;
					public static PlayAutoInstalls: io.branch.referral.Defines.Jsonkey;
					public static UTMCampaign: io.branch.referral.Defines.Jsonkey;
					public static UTMMedium: io.branch.referral.Defines.Jsonkey;
					public static InitialReferrer: io.branch.referral.Defines.Jsonkey;
					public static Bucket: io.branch.referral.Defines.Jsonkey;
					public static DefaultBucket: io.branch.referral.Defines.Jsonkey;
					public static Amount: io.branch.referral.Defines.Jsonkey;
					public static CalculationType: io.branch.referral.Defines.Jsonkey;
					public static Location: io.branch.referral.Defines.Jsonkey;
					public static Type: io.branch.referral.Defines.Jsonkey;
					public static CreationSource: io.branch.referral.Defines.Jsonkey;
					public static Prefix: io.branch.referral.Defines.Jsonkey;
					public static Expiration: io.branch.referral.Defines.Jsonkey;
					public static Event: io.branch.referral.Defines.Jsonkey;
					public static Metadata: io.branch.referral.Defines.Jsonkey;
					public static CommerceData: io.branch.referral.Defines.Jsonkey;
					public static Total: io.branch.referral.Defines.Jsonkey;
					public static Unique: io.branch.referral.Defines.Jsonkey;
					public static Length: io.branch.referral.Defines.Jsonkey;
					public static Direction: io.branch.referral.Defines.Jsonkey;
					public static BeginAfterID: io.branch.referral.Defines.Jsonkey;
					public static Link: io.branch.referral.Defines.Jsonkey;
					public static ReferringData: io.branch.referral.Defines.Jsonkey;
					public static ReferringLink: io.branch.referral.Defines.Jsonkey;
					public static IsFullAppConv: io.branch.referral.Defines.Jsonkey;
					public static Data: io.branch.referral.Defines.Jsonkey;
					public static OS: io.branch.referral.Defines.Jsonkey;
					public static HardwareID: io.branch.referral.Defines.Jsonkey;
					public static AndroidID: io.branch.referral.Defines.Jsonkey;
					public static UnidentifiedDevice: io.branch.referral.Defines.Jsonkey;
					public static HardwareIDType: io.branch.referral.Defines.Jsonkey;
					public static HardwareIDTypeVendor: io.branch.referral.Defines.Jsonkey;
					public static HardwareIDTypeRandom: io.branch.referral.Defines.Jsonkey;
					public static IsHardwareIDReal: io.branch.referral.Defines.Jsonkey;
					public static AnonID: io.branch.referral.Defines.Jsonkey;
					public static AppVersion: io.branch.referral.Defines.Jsonkey;
					public static APILevel: io.branch.referral.Defines.Jsonkey;
					public static Country: io.branch.referral.Defines.Jsonkey;
					public static Language: io.branch.referral.Defines.Jsonkey;
					public static Update: io.branch.referral.Defines.Jsonkey;
					public static OriginalInstallTime: io.branch.referral.Defines.Jsonkey;
					public static FirstInstallTime: io.branch.referral.Defines.Jsonkey;
					public static LastUpdateTime: io.branch.referral.Defines.Jsonkey;
					public static PreviousUpdateTime: io.branch.referral.Defines.Jsonkey;
					public static URIScheme: io.branch.referral.Defines.Jsonkey;
					public static AppLinks: io.branch.referral.Defines.Jsonkey;
					public static AppIdentifier: io.branch.referral.Defines.Jsonkey;
					public static LinkIdentifier: io.branch.referral.Defines.Jsonkey;
					public static GoogleAdvertisingID: io.branch.referral.Defines.Jsonkey;
					public static AAID: io.branch.referral.Defines.Jsonkey;
					public static FireAdId: io.branch.referral.Defines.Jsonkey;
					public static OpenAdvertisingID: io.branch.referral.Defines.Jsonkey;
					public static LATVal: io.branch.referral.Defines.Jsonkey;
					public static LimitedAdTracking: io.branch.referral.Defines.Jsonkey;
					public static limitFacebookTracking: io.branch.referral.Defines.Jsonkey;
					public static Debug: io.branch.referral.Defines.Jsonkey;
					public static Brand: io.branch.referral.Defines.Jsonkey;
					public static Model: io.branch.referral.Defines.Jsonkey;
					public static ScreenDpi: io.branch.referral.Defines.Jsonkey;
					public static ScreenHeight: io.branch.referral.Defines.Jsonkey;
					public static ScreenWidth: io.branch.referral.Defines.Jsonkey;
					public static WiFi: io.branch.referral.Defines.Jsonkey;
					public static LocalIP: io.branch.referral.Defines.Jsonkey;
					public static UserData: io.branch.referral.Defines.Jsonkey;
					public static AdvertisingIDs: io.branch.referral.Defines.Jsonkey;
					public static DeveloperIdentity: io.branch.referral.Defines.Jsonkey;
					public static UserAgent: io.branch.referral.Defines.Jsonkey;
					public static SDK: io.branch.referral.Defines.Jsonkey;
					public static SdkVersion: io.branch.referral.Defines.Jsonkey;
					public static UIMode: io.branch.referral.Defines.Jsonkey;
					public static InstallMetadata: io.branch.referral.Defines.Jsonkey;
					public static LATDAttributionWindow: io.branch.referral.Defines.Jsonkey;
					public static Clicked_Branch_Link: io.branch.referral.Defines.Jsonkey;
					public static IsFirstSession: io.branch.referral.Defines.Jsonkey;
					public static AndroidDeepLinkPath: io.branch.referral.Defines.Jsonkey;
					public static DeepLinkPath: io.branch.referral.Defines.Jsonkey;
					public static AndroidAppLinkURL: io.branch.referral.Defines.Jsonkey;
					public static AndroidPushNotificationKey: io.branch.referral.Defines.Jsonkey;
					public static AndroidPushIdentifier: io.branch.referral.Defines.Jsonkey;
					public static CanonicalIdentifier: io.branch.referral.Defines.Jsonkey;
					public static ContentTitle: io.branch.referral.Defines.Jsonkey;
					public static ContentDesc: io.branch.referral.Defines.Jsonkey;
					public static ContentImgUrl: io.branch.referral.Defines.Jsonkey;
					public static CanonicalUrl: io.branch.referral.Defines.Jsonkey;
					public static ContentType: io.branch.referral.Defines.Jsonkey;
					public static PublicallyIndexable: io.branch.referral.Defines.Jsonkey;
					public static LocallyIndexable: io.branch.referral.Defines.Jsonkey;
					public static ContentKeyWords: io.branch.referral.Defines.Jsonkey;
					public static ContentExpiryTime: io.branch.referral.Defines.Jsonkey;
					public static Params: io.branch.referral.Defines.Jsonkey;
					public static SharedLink: io.branch.referral.Defines.Jsonkey;
					public static ShareError: io.branch.referral.Defines.Jsonkey;
					public static SharedChannel: io.branch.referral.Defines.Jsonkey;
					public static URLSource: io.branch.referral.Defines.Jsonkey;
					public static External_Intent_URI: io.branch.referral.Defines.Jsonkey;
					public static External_Intent_Extra: io.branch.referral.Defines.Jsonkey;
					public static Last_Round_Trip_Time: io.branch.referral.Defines.Jsonkey;
					public static Branch_Round_Trip_Time: io.branch.referral.Defines.Jsonkey;
					public static Branch_Instrumentation: io.branch.referral.Defines.Jsonkey;
					public static Queue_Wait_Time: io.branch.referral.Defines.Jsonkey;
					public static InstantDeepLinkSession: io.branch.referral.Defines.Jsonkey;
					public static Path: io.branch.referral.Defines.Jsonkey;
					public static ViewList: io.branch.referral.Defines.Jsonkey;
					public static ContentActionView: io.branch.referral.Defines.Jsonkey;
					public static ContentPath: io.branch.referral.Defines.Jsonkey;
					public static ContentNavPath: io.branch.referral.Defines.Jsonkey;
					public static ReferralLink: io.branch.referral.Defines.Jsonkey;
					public static ContentData: io.branch.referral.Defines.Jsonkey;
					public static ContentEvents: io.branch.referral.Defines.Jsonkey;
					public static ContentAnalyticsMode: io.branch.referral.Defines.Jsonkey;
					public static Environment: io.branch.referral.Defines.Jsonkey;
					public static InstantApp: io.branch.referral.Defines.Jsonkey;
					public static NativeApp: io.branch.referral.Defines.Jsonkey;
					public static CustomerEventAlias: io.branch.referral.Defines.Jsonkey;
					public static TransactionID: io.branch.referral.Defines.Jsonkey;
					public static Currency: io.branch.referral.Defines.Jsonkey;
					public static Revenue: io.branch.referral.Defines.Jsonkey;
					public static Shipping: io.branch.referral.Defines.Jsonkey;
					public static Tax: io.branch.referral.Defines.Jsonkey;
					public static Coupon: io.branch.referral.Defines.Jsonkey;
					public static Affiliation: io.branch.referral.Defines.Jsonkey;
					public static Description: io.branch.referral.Defines.Jsonkey;
					public static SearchQuery: io.branch.referral.Defines.Jsonkey;
					public static AdType: io.branch.referral.Defines.Jsonkey;
					public static CPUType: io.branch.referral.Defines.Jsonkey;
					public static DeviceBuildId: io.branch.referral.Defines.Jsonkey;
					public static Locale: io.branch.referral.Defines.Jsonkey;
					public static ConnectionType: io.branch.referral.Defines.Jsonkey;
					public static DeviceCarrier: io.branch.referral.Defines.Jsonkey;
					public static PluginName: io.branch.referral.Defines.Jsonkey;
					public static PluginVersion: io.branch.referral.Defines.Jsonkey;
					public static OSVersionAndroid: io.branch.referral.Defines.Jsonkey;
					public static Name: io.branch.referral.Defines.Jsonkey;
					public static CustomData: io.branch.referral.Defines.Jsonkey;
					public static EventData: io.branch.referral.Defines.Jsonkey;
					public static ContentItems: io.branch.referral.Defines.Jsonkey;
					public static ContentSchema: io.branch.referral.Defines.Jsonkey;
					public static Price: io.branch.referral.Defines.Jsonkey;
					public static PriceCurrency: io.branch.referral.Defines.Jsonkey;
					public static Quantity: io.branch.referral.Defines.Jsonkey;
					public static SKU: io.branch.referral.Defines.Jsonkey;
					public static ProductName: io.branch.referral.Defines.Jsonkey;
					public static ProductBrand: io.branch.referral.Defines.Jsonkey;
					public static ProductCategory: io.branch.referral.Defines.Jsonkey;
					public static ProductVariant: io.branch.referral.Defines.Jsonkey;
					public static Rating: io.branch.referral.Defines.Jsonkey;
					public static RatingAverage: io.branch.referral.Defines.Jsonkey;
					public static RatingCount: io.branch.referral.Defines.Jsonkey;
					public static RatingMax: io.branch.referral.Defines.Jsonkey;
					public static AddressStreet: io.branch.referral.Defines.Jsonkey;
					public static AddressCity: io.branch.referral.Defines.Jsonkey;
					public static AddressRegion: io.branch.referral.Defines.Jsonkey;
					public static AddressCountry: io.branch.referral.Defines.Jsonkey;
					public static AddressPostalCode: io.branch.referral.Defines.Jsonkey;
					public static Latitude: io.branch.referral.Defines.Jsonkey;
					public static Longitude: io.branch.referral.Defines.Jsonkey;
					public static ImageCaptions: io.branch.referral.Defines.Jsonkey;
					public static Condition: io.branch.referral.Defines.Jsonkey;
					public static CreationTimestamp: io.branch.referral.Defines.Jsonkey;
					public static TrackingDisabled: io.branch.referral.Defines.Jsonkey;
					public static DisableAdNetworkCallouts: io.branch.referral.Defines.Jsonkey;
					public static PartnerData: io.branch.referral.Defines.Jsonkey;
					public static Instant: io.branch.referral.Defines.Jsonkey;
					public static QRCodeTag: io.branch.referral.Defines.Jsonkey;
					public static CodeColor: io.branch.referral.Defines.Jsonkey;
					public static BackgroundColor: io.branch.referral.Defines.Jsonkey;
					public static Width: io.branch.referral.Defines.Jsonkey;
					public static Margin: io.branch.referral.Defines.Jsonkey;
					public static ImageFormat: io.branch.referral.Defines.Jsonkey;
					public static CenterLogo: io.branch.referral.Defines.Jsonkey;
					public static QRCodeSettings: io.branch.referral.Defines.Jsonkey;
					public static QRCodeData: io.branch.referral.Defines.Jsonkey;
					public static QRCodeBranchKey: io.branch.referral.Defines.Jsonkey;
					public static QRCodeResponseString: io.branch.referral.Defines.Jsonkey;
					public static App_Store: io.branch.referral.Defines.Jsonkey;
					public static Google_Play_Store: io.branch.referral.Defines.Jsonkey;
					public static Huawei_App_Gallery: io.branch.referral.Defines.Jsonkey;
					public static Samsung_Galaxy_Store: io.branch.referral.Defines.Jsonkey;
					public static Xiaomi_Get_Apps: io.branch.referral.Defines.Jsonkey;
					public static Meta_Install_Referrer: io.branch.referral.Defines.Jsonkey;
					public static DMA_EEA: io.branch.referral.Defines.Jsonkey;
					public static DMA_Ad_Personalization: io.branch.referral.Defines.Jsonkey;
					public static DMA_Ad_User_Data: io.branch.referral.Defines.Jsonkey;
					public static Is_Meta_Click_Through: io.branch.referral.Defines.Jsonkey;
					public static OperationalMetrics: io.branch.referral.Defines.Jsonkey;
					public static Consumer_Protection_Attribution_Level: io.branch.referral.Defines.Jsonkey;
					public static Branch_Sdk_Request_Creation_Time_Stamp: io.branch.referral.Defines.Jsonkey;
					public static Branch_Sdk_Request_Uuid: io.branch.referral.Defines.Jsonkey;
					public static Invoke_Features: io.branch.referral.Defines.Jsonkey;
					public static IN_APP_WEBVIEW: io.branch.referral.Defines.Jsonkey;
					public static EXTERNAL_BROWSER: io.branch.referral.Defines.Jsonkey;
					public static Enhanced_Web_Link_UX: io.branch.referral.Defines.Jsonkey;
					public static Web_Link_Redirect_URL: io.branch.referral.Defines.Jsonkey;
					public static Web_Link_Context: io.branch.referral.Defines.Jsonkey;
					public static UX_Type: io.branch.referral.Defines.Jsonkey;
					public static URL_Load_MS: io.branch.referral.Defines.Jsonkey;
					public getKey(): string;
					public static values(): androidNative.Array<io.branch.referral.Defines.Jsonkey>;
					public toString(): string;
					public static valueOf(name: string): io.branch.referral.Defines.Jsonkey;
				}
				export class LinkParam {
					public static class: java.lang.Class<io.branch.referral.Defines.LinkParam>;
					public static Tags: io.branch.referral.Defines.LinkParam;
					public static Alias: io.branch.referral.Defines.LinkParam;
					public static Type: io.branch.referral.Defines.LinkParam;
					public static Duration: io.branch.referral.Defines.LinkParam;
					public static Channel: io.branch.referral.Defines.LinkParam;
					public static Feature: io.branch.referral.Defines.LinkParam;
					public static Stage: io.branch.referral.Defines.LinkParam;
					public static Campaign: io.branch.referral.Defines.LinkParam;
					public static Data: io.branch.referral.Defines.LinkParam;
					public static URL: io.branch.referral.Defines.LinkParam;
					public getKey(): string;
					public static values(): androidNative.Array<io.branch.referral.Defines.LinkParam>;
					public toString(): string;
					public static valueOf(name: string): io.branch.referral.Defines.LinkParam;
				}
				export class PreinstallKey {
					public static class: java.lang.Class<io.branch.referral.Defines.PreinstallKey>;
					public static campaign: io.branch.referral.Defines.PreinstallKey;
					public static partner: io.branch.referral.Defines.PreinstallKey;
					public static values(): androidNative.Array<io.branch.referral.Defines.PreinstallKey>;
					public getKey(): string;
					public toString(): string;
					public static valueOf(name: string): io.branch.referral.Defines.PreinstallKey;
				}
				export class RequestPath {
					public static class: java.lang.Class<io.branch.referral.Defines.RequestPath>;
					public static GetURL: io.branch.referral.Defines.RequestPath;
					public static GetApp: io.branch.referral.Defines.RequestPath;
					public static RegisterInstall: io.branch.referral.Defines.RequestPath;
					public static RegisterOpen: io.branch.referral.Defines.RequestPath;
					public static ContentEvent: io.branch.referral.Defines.RequestPath;
					public static TrackStandardEvent: io.branch.referral.Defines.RequestPath;
					public static TrackCustomEvent: io.branch.referral.Defines.RequestPath;
					public static GetLATD: io.branch.referral.Defines.RequestPath;
					public static QRCode: io.branch.referral.Defines.RequestPath;
					public getPath(): string;
					public static values(): androidNative.Array<io.branch.referral.Defines.RequestPath>;
					public toString(): string;
					public static valueOf(name: string): io.branch.referral.Defines.RequestPath;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class DeviceInfo {
				public static class: java.lang.Class<io.branch.referral.DeviceInfo>;
				public getHardwareID(): io.branch.referral.SystemObserver.UniqueId;
				public getAppVersion(): string;
				public getLastUpdateTime(): number;
				public getPackageName(): string;
				public getFirstInstallTime(): number;
				public static isNullOrEmptyOrBlank(str: string): boolean;
				public getOsName(): string;
				public isPackageInstalled(): boolean;
			}
			export module DeviceInfo {
				export class SystemObserverInstance extends io.branch.referral.SystemObserver {
					public static class: java.lang.Class<io.branch.referral.DeviceInfo.SystemObserverInstance>;
					public constructor(param0: io.branch.referral.DeviceInfo);
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class InstantAppUtil {
				public static class: java.lang.Class<io.branch.referral.InstantAppUtil>;
			}
			export module InstantAppUtil {
				export class PackageManagerWrapper {
					public static class: java.lang.Class<io.branch.referral.InstantAppUtil.PackageManagerWrapper>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class NativeShareLinkManager {
				public static class: java.lang.Class<io.branch.referral.NativeShareLinkManager>;
				public getLinkShareListenerCallback(): io.branch.referral.Branch.BranchNativeLinkShareListener;
				public static getInstance(): io.branch.referral.NativeShareLinkManager;
			}
			export module NativeShareLinkManager {
				export class NativeLinkShareListenerWrapper extends io.branch.referral.Branch.BranchNativeLinkShareListener {
					public static class: java.lang.Class<io.branch.referral.NativeShareLinkManager.NativeLinkShareListenerWrapper>;
					public onLinkShareResponse(sharedLink: string, error: io.branch.referral.BranchError): void;
					public onChannelSelected(channelName: string): void;
					public onLinkShareResponse(param0: string, param1: io.branch.referral.BranchError): void;
					public onChannelSelected(param0: string): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class PrefHelper {
				public static class: java.lang.Class<io.branch.referral.PrefHelper>;
				public static NO_STRING_VALUE: string = 'bnc_no_value';
				public static fbAppId_: string;
				public setConsumerProtectionAttributionLevel(preference: io.branch.referral.Defines.BranchAttributionLevel): void;
				public getExternalIntentUri(): string;
				public getWebLinkUxTypeUsed(): string;
				public setReferrerGclid(this_: string): void;
				public setSessionParams(params: string): void;
				public getLong(key: string, defaultValue: number): number;
				public setRandomlyGeneratedUuid(uuid: string): void;
				public getRandomlyGeneratedUuid(): string;
				public setExternalIntentUri(uri: string): void;
				public getAdNetworkCalloutsDisabled(): boolean;
				public setPushIdentifier(pushIdentifier: string): void;
				public getInstallParams(): string;
				public getInteger(key: string, defaultValue: number): number;
				public setIsMetaClickThrough(isMetaClickThrough: boolean): void;
				public getAnonID(): string;
				public getAPIBaseUrl(): string;
				public setAppStoreSource(store: string): void;
				public setWebLinkLoadTime(l: number): void;
				public setString(key: string, value: string): void;
				public getIsMetaClickThrough(): boolean;
				public getConnectTimeout(): number;
				public setLATDAttributionWindow(attributionWindow: number): void;
				public getLinkClickID(): string;
				public setLong(key: string, value: number): void;
				public setTimeout(timeout: number): void;
				public getRandomizedDeviceToken(): string;
				public getInstallReferrerParams(): string;
				public setExternalIntentExtra(extras: string): void;
				public setAdNetworkCalloutsDisabled(disabled: boolean): void;
				public getUserURL(): string;
				public getLinkClickIdentifier(): string;
				public setAppStoreReferrer(referrer: string): void;
				public setReferringUrlQueryParameters(referringUrlQueryParameters: org.json.JSONObject): void;
				public setLinkClickID(link_click_id: string): void;
				public getAppStoreReferrer(): string;
				public getRequestMetadata(): org.json.JSONObject;
				public getAppLink(): string;
				public setNoConnectionRetryMax(retryInt: number): void;
				public setBool(key: string, value: java.lang.Boolean): void;
				public setWebLinkUxTypeUsed(key: string): void;
				public setConnectTimeout(connectTimeout: number): void;
				public setReferrerGclidValidForWindow(window: number): void;
				public getNoConnectionRetryMax(): number;
				public getGoogleSearchInstallIdentifier(): string;
				public getRetryInterval(): number;
				public hasPrefValue(key: string): boolean;
				public getActionTotalCount(action: string): number;
				public getSessionID(): string;
				public setRandomizedBundleToken(randomized_bundle_token: string): void;
				public getReferrerGclid(): string;
				public setRetryInterval(retryInt: number): void;
				public clearUserValues(): void;
				public getReferrerGclidValidForWindow(): number;
				public setRetryCount(retry: number): void;
				public getFloat(key: string): number;
				public getString(key: string): string;
				public setGoogleSearchInstallIdentifier(identifier: string): void;
				public setActionUniqueCount(action: string, count: number): void;
				public getLATDAttributionWindow(): number;
				public getInstallMetadata(): org.json.JSONObject;
				public setAppLink(appLinkUrl: string): void;
				public getAppStoreSource(): string;
				public getRandomizedBundleToken(): string;
				public getSessionParams(): string;
				public setAnonID(uuid: string): void;
				public getTimeout(): number;
				public getReferringURLQueryParameters(): org.json.JSONObject;
				public removePrefValue(key: string): void;
				public isFullAppConversion(): boolean;
				public loadPartnerParams(body: org.json.JSONObject): void;
				public setIdentity(identity: string): void;
				public setIsFullAppConversion(isFullAppConversion: boolean): void;
				public setRandomizedDeviceToken(randomized_device_token: string): void;
				public getInteger(key: string): number;
				public setInitialReferrer(initialReferrer: string): void;
				public setSessionID(session_id: string): void;
				public static getInstance(context: globalAndroid.content.Context): io.branch.referral.PrefHelper;
				public clearGclid(): void;
				public setBranchKey(key: string): boolean;
				public setInstallParams(params: string): void;
				public getInitialReferrer(): string;
				public clearSystemReadStatus(): void;
				public setLinkClickIdentifier(identifier: string): void;
				public setBranchKeySource(source: string): void;
				public getConsumerProtectionAttributionLevel(): io.branch.referral.Defines.BranchAttributionLevel;
				public setActionTotalCount(action: string, count: number): void;
				public getLong(key: string): number;
				public getRetryCount(): number;
				public getAPIBaseUrl(useCustom: boolean): string;
				public setRequestMetadata(key: string, value: string): void;
				public getPushIdentifier(): string;
				public getTaskTimeout(): number;
				public getActionUniqueCount(action: string): number;
				public getDelayedSessionInitUsed(): boolean;
				public getBranchKey(): string;
				public setUserURL(user_url: string): void;
				public getBranchKeySource(): string;
				public getWebLinkLoadTime(): number;
				public getAppVersion(): string;
				public getExternalIntentExtra(): string;
				public setDelayedSessionInitUsed(used: boolean): void;
				public getIdentity(): string;
				public setInteger(key: string, value: number): void;
				public setAppVersion(version: string): void;
				public setFloat(key: string, value: number): void;
				public getBool(key: string): boolean;
				public setInstallReferrerParams(params: string): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module QRCode {
				export class BranchQRCode {
					public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode>;
					public setCodeColor(hexCodeColor: string): io.branch.referral.QRCode.BranchQRCode;
					public setBackgroundColor(backgroundColor: number): io.branch.referral.QRCode.BranchQRCode;
					public setCenterLogo(centerLogo: string): io.branch.referral.QRCode.BranchQRCode;
					public getQRCodeAsImage(activity: globalAndroid.app.Activity, branchUniversalObject: io.branch.indexing.BranchUniversalObject, linkProperties: io.branch.referral.util.LinkProperties, callback: io.branch.referral.QRCode.BranchQRCode.BranchQRCodeImageHandler<any>): void;
					public constructor();
					public setBackgroundColor(hexBackgroundColor: string): io.branch.referral.QRCode.BranchQRCode;
					public setImageFormat(imageFormat: io.branch.referral.QRCode.BranchQRCode.BranchImageFormat): io.branch.referral.QRCode.BranchQRCode;
					public getQRCodeAsData(context: globalAndroid.content.Context, branchUniversalObject: io.branch.indexing.BranchUniversalObject, linkProperties: io.branch.referral.util.LinkProperties, callback: io.branch.referral.QRCode.BranchQRCode.BranchQRCodeDataHandler<any>): void;
					public setCodeColor(codeColor: number): io.branch.referral.QRCode.BranchQRCode;
					public setMargin(margin: java.lang.Integer): io.branch.referral.QRCode.BranchQRCode;
					public setWidth(width: java.lang.Integer): io.branch.referral.QRCode.BranchQRCode;
				}
				export module BranchQRCode {
					export class BranchImageFormat {
						public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode.BranchImageFormat>;
						public static JPEG: io.branch.referral.QRCode.BranchQRCode.BranchImageFormat;
						public static PNG: io.branch.referral.QRCode.BranchQRCode.BranchImageFormat;
						public static values(): androidNative.Array<io.branch.referral.QRCode.BranchQRCode.BranchImageFormat>;
						public static valueOf(name: string): io.branch.referral.QRCode.BranchQRCode.BranchImageFormat;
					}
					export class BranchQRCodeDataHandler<T> extends java.lang.Object {
						public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode.BranchQRCodeDataHandler<any>>;
						/**
						 * Constructs a new instance of the io.branch.referral.QRCode.BranchQRCode$BranchQRCodeDataHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: androidNative.Array<number>): void; onFailure(param0: java.lang.Exception): void });
						public constructor();
						public onSuccess(param0: androidNative.Array<number>): void;
						public onFailure(param0: java.lang.Exception): void;
					}
					export class BranchQRCodeImageHandler<T> extends java.lang.Object {
						public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode.BranchQRCodeImageHandler<any>>;
						/**
						 * Constructs a new instance of the io.branch.referral.QRCode.BranchQRCode$BranchQRCodeImageHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: globalAndroid.graphics.Bitmap): void; onFailure(param0: java.lang.Exception): void });
						public constructor();
						public onFailure(param0: java.lang.Exception): void;
						public onSuccess(param0: globalAndroid.graphics.Bitmap): void;
					}
					export class BranchQRCodeRequestHandler<T> extends java.lang.Object {
						public static class: java.lang.Class<io.branch.referral.QRCode.BranchQRCode.BranchQRCodeRequestHandler<any>>;
						/**
						 * Constructs a new instance of the io.branch.referral.QRCode.BranchQRCode$BranchQRCodeRequestHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDataReceived(param0: io.branch.referral.ServerResponse): void; onFailure(param0: java.lang.Exception): void });
						public constructor();
						public onFailure(param0: java.lang.Exception): void;
						public onDataReceived(param0: io.branch.referral.ServerResponse): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module QRCode {
				export class ServerRequestCreateQRCode extends io.branch.referral.ServerRequest {
					public static class: java.lang.Class<io.branch.referral.QRCode.ServerRequestCreateQRCode>;
					public clearCallbacks(): void;
					public onRequestSucceeded(response: io.branch.referral.ServerResponse, branch: io.branch.referral.Branch): void;
					public constructor(context: globalAndroid.content.Context, requestPath: io.branch.referral.Defines.RequestPath);
					public prepareExecuteWithoutTracking(): boolean;
					public constructor(requestPath: io.branch.referral.Defines.RequestPath, post: org.json.JSONObject, context: globalAndroid.content.Context);
					public handleFailure(statusCode: number, causeMsg: string): void;
					public onRequestQueued(): void;
					public isGetRequest(): boolean;
					public constructor(requestPath: io.branch.referral.Defines.RequestPath, post: org.json.JSONObject, context: globalAndroid.content.Context, callback: io.branch.referral.QRCode.BranchQRCode.BranchQRCodeRequestHandler<any>);
					public handleErrors(context: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ReferringUrlUtility {
				public static class: java.lang.Class<io.branch.referral.ReferringUrlUtility>;
				public serializeToJson$Branch_SDK_release(it: java.util.Map<string, io.branch.referral.BranchUrlQueryParameter>): org.json.JSONObject;
				public deserializeFromJson$Branch_SDK_release(e: org.json.JSONObject): java.util.Map<string, io.branch.referral.BranchUrlQueryParameter>;
				public parseReferringURL(paramName: string): void;
				public getURLQueryParamsForRequest(keys: io.branch.referral.ServerRequest): org.json.JSONObject;
				public constructor(prefHelper: io.branch.referral.PrefHelper);
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export abstract class ServerRequest {
				public static class: java.lang.Class<io.branch.referral.ServerRequest>;
				public creation_ts: number;
				public uuid: string;
				public prefHelper_: io.branch.referral.PrefHelper;
				public constructError_: boolean;
				public currentRetryCount: number;
				public constructor(requestPath: io.branch.referral.Defines.RequestPath, post: org.json.JSONObject, context: globalAndroid.content.Context);
				public shouldAddDMAParams(): boolean;
				public getRequestUrl(): string;
				public removeProcessWaitLock(lock: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK): void;
				public onRequestQueued(): void;
				public addProcessWaitLock(lock: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK): void;
				public constructor(context: globalAndroid.content.Context, requestPath: io.branch.referral.Defines.RequestPath);
				public shouldUpdateLimitFacebookTracking(): boolean;
				public isWaitingOnProcessToFinish(): boolean;
				public getQueueWaitTime(): number;
				public prepareExecuteWithoutTracking(): boolean;
				public handleFailure(param0: number, param1: string): void;
				public shouldRetryOnFail(): boolean;
				public getRequestPath(): string;
				public setPost(this_: org.json.JSONObject): void;
				public static fromJSON(e: org.json.JSONObject, e: globalAndroid.content.Context): io.branch.referral.ServerRequest;
				public getGetParams(): org.json.JSONObject;
				public addGetParam(this_: string, paramKey: string): void;
				public handleErrors(param0: globalAndroid.content.Context): boolean;
				public getPostWithInstrumentationValues(originalParams: java.util.concurrent.ConcurrentHashMap<string, string>): org.json.JSONObject;
				public toJSON(): org.json.JSONObject;
				public printWaitLocks(): string;
				public getBranchRemoteAPIVersion(): io.branch.referral.ServerRequest.BRANCH_API_VERSION;
				public doesAppHasInternetPermission(context: globalAndroid.content.Context): boolean;
				public onPreExecute(): void;
				public isGetRequest(): boolean;
				public isGAdsParamsRequired(): boolean;
				public clearCallbacks(): void;
				public updateEnvironment(environment: globalAndroid.content.Context, e: org.json.JSONObject): void;
				public onRequestSucceeded(param0: io.branch.referral.ServerResponse, param1: io.branch.referral.Branch): void;
				public getPost(): org.json.JSONObject;
			}
			export module ServerRequest {
				export class BRANCH_API_VERSION {
					public static class: java.lang.Class<io.branch.referral.ServerRequest.BRANCH_API_VERSION>;
					public static V1: io.branch.referral.ServerRequest.BRANCH_API_VERSION;
					public static V1_LATD: io.branch.referral.ServerRequest.BRANCH_API_VERSION;
					public static V2: io.branch.referral.ServerRequest.BRANCH_API_VERSION;
					public static valueOf(name: string): io.branch.referral.ServerRequest.BRANCH_API_VERSION;
					public static values(): androidNative.Array<io.branch.referral.ServerRequest.BRANCH_API_VERSION>;
				}
				export class PROCESS_WAIT_LOCK {
					public static class: java.lang.Class<io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK>;
					public static SDK_INIT_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
					public static GAID_FETCH_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
					public static INTENT_PENDING_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
					public static USER_SET_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
					public static INSTALL_REFERRER_FETCH_WAIT_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
					public static USER_AGENT_STRING_LOCK: io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
					public static valueOf(name: string): io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK;
					public static values(): androidNative.Array<io.branch.referral.ServerRequest.PROCESS_WAIT_LOCK>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ServerRequestCreateUrl extends io.branch.referral.ServerRequest {
				public static class: java.lang.Class<io.branch.referral.ServerRequestCreateUrl>;
				public constructor(requestPath: io.branch.referral.Defines.RequestPath, post: org.json.JSONObject, context: globalAndroid.content.Context);
				public onRequestSucceeded(ex: io.branch.referral.ServerResponse, this_: io.branch.referral.Branch): void;
				public getLongUrl(): string;
				public handleDuplicateURLError(): void;
				public handleFailure(this_: number, statusCode: string): void;
				public onUrlAvailable(url: string): void;
				public handleErrors(context: globalAndroid.content.Context): boolean;
				public getLinkPost(): io.branch.referral.BranchLinkData;
				public constructor(context: globalAndroid.content.Context, requestPath: io.branch.referral.Defines.RequestPath);
				public constructor(this_: globalAndroid.content.Context, context: string, alias: number, type: number, duration: java.util.Collection<string>, tags: string, channel: string, feature: string, stage: string, campaign: org.json.JSONObject, params: io.branch.referral.Branch.BranchLinkCreateListener, callback: boolean, async: boolean);
				public prepareExecuteWithoutTracking(): boolean;
				public isAsync(): boolean;
				public isGetRequest(): boolean;
				public clearCallbacks(): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ServerRequestGetLATD extends io.branch.referral.ServerRequest {
				public static class: java.lang.Class<io.branch.referral.ServerRequestGetLATD>;
				public static defaultAttributionWindow: number = -1;
				public getAttributionWindow(): number;
				public handleFailure(statusCode: number, causeMsg: string): void;
				public onRequestSucceeded(response: io.branch.referral.ServerResponse, branch: io.branch.referral.Branch): void;
				public isGetRequest(): boolean;
				public handleErrors(context: globalAndroid.content.Context): boolean;
				public clearCallbacks(): void;
				public shouldUpdateLimitFacebookTracking(): boolean;
				public getBranchRemoteAPIVersion(): io.branch.referral.ServerRequest.BRANCH_API_VERSION;
			}
			export module ServerRequestGetLATD {
				export class BranchLastAttributedTouchDataListener {
					public static class: java.lang.Class<io.branch.referral.ServerRequestGetLATD.BranchLastAttributedTouchDataListener>;
					/**
					 * Constructs a new instance of the io.branch.referral.ServerRequestGetLATD$BranchLastAttributedTouchDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onDataFetched(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void });
					public constructor();
					public onDataFetched(param0: org.json.JSONObject, param1: io.branch.referral.BranchError): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export abstract class ServerRequestInitSession extends io.branch.referral.ServerRequest {
				public static class: java.lang.Class<io.branch.referral.ServerRequestInitSession>;
				public shouldAddDMAParams(): boolean;
				public prepareExecuteWithoutTracking(): boolean;
				public setPost(post: org.json.JSONObject): void;
				public onPreExecute(): void;
				public getRequestActionName(): string;
				public onRequestSucceeded(response: io.branch.referral.ServerResponse, branch: io.branch.referral.Branch): void;
				public shouldUpdateLimitFacebookTracking(): boolean;
				public toJSON(): org.json.JSONObject;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ServerRequestLogEvent extends io.branch.referral.ServerRequest {
				public static class: java.lang.Class<io.branch.referral.ServerRequestLogEvent>;
				public constructor(requestPath: io.branch.referral.Defines.RequestPath, post: org.json.JSONObject, context: globalAndroid.content.Context);
				public shouldAddDMAParams(): boolean;
				public handleFailure(statusCode: number, causeMsg: string): void;
				public onRequestSucceeded(response: io.branch.referral.ServerResponse, branch: io.branch.referral.Branch): void;
				public handleErrors(context: globalAndroid.content.Context): boolean;
				public constructor(context: globalAndroid.content.Context, requestPath: io.branch.referral.Defines.RequestPath);
				public shouldUpdateLimitFacebookTracking(): boolean;
				public getBranchRemoteAPIVersion(): io.branch.referral.ServerRequest.BRANCH_API_VERSION;
				public setPost(post: org.json.JSONObject): void;
				public constructor(buo: globalAndroid.content.Context, contentItemsArray: io.branch.referral.Defines.RequestPath, e: string, this_: java.util.HashMap<string, any>, context: org.json.JSONObject, requestPath: org.json.JSONObject, eventName: java.util.List<io.branch.indexing.BranchUniversalObject>);
				public shouldRetryOnFail(): boolean;
				public isGetRequest(): boolean;
				public clearCallbacks(): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ServerRequestQueue {
				public static class: java.lang.Class<io.branch.referral.ServerRequestQueue>;
				public postInitClear(): void;
				public addExtraInstrumentationData(key: string, value: string): void;
				public printQueue(): void;
				public static getInstance(c: globalAndroid.content.Context): io.branch.referral.ServerRequestQueue;
				public getSize(): number;
				public removeAt(this_: number): io.branch.referral.ServerRequest;
				public handleNewRequest(this_: io.branch.referral.ServerRequest): void;
				public canClearInitData(): boolean;
				public remove(this_: io.branch.referral.ServerRequest): boolean;
				public addExtraInstrumentationData(instrumentationData: java.util.HashMap<string, string>): void;
			}
			export module ServerRequestQueue {
				export class BranchPostTask extends io.branch.referral.BranchAsyncTask<java.lang.Void, java.lang.Void, io.branch.referral.ServerResponse> {
					public static class: java.lang.Class<io.branch.referral.ServerRequestQueue.BranchPostTask>;
					public doInBackground(this_: androidNative.Array<java.lang.Void>): io.branch.referral.ServerResponse;
					public constructor();
					public onPreExecute(): void;
					public onPostExecute(serverResponse: io.branch.referral.ServerResponse): void;
					public constructor(request: io.branch.referral.ServerRequestQueue, latch: io.branch.referral.ServerRequest, param2: java.util.concurrent.CountDownLatch);
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ServerRequestRegisterInstall extends io.branch.referral.ServerRequestInitSession {
				public static class: java.lang.Class<io.branch.referral.ServerRequestRegisterInstall>;
				public onPreExecute(): void;
				public getRequestActionName(): string;
				public shouldRetryOnFail(): boolean;
				public isGetRequest(): boolean;
				public handleErrors(context: globalAndroid.content.Context): boolean;
				public clearCallbacks(): void;
				public handleFailure(obj: number, this_: string): void;
				public onRequestSucceeded(dataObj: io.branch.referral.ServerResponse, invokeFeaturesJson: io.branch.referral.Branch): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ServerRequestRegisterOpen extends io.branch.referral.ServerRequestInitSession {
				public static class: java.lang.Class<io.branch.referral.ServerRequestRegisterOpen>;
				public onPreExecute(): void;
				public getRequestActionName(): string;
				public onRequestSucceeded(params: io.branch.referral.ServerResponse, ex: io.branch.referral.Branch): void;
				public shouldRetryOnFail(): boolean;
				public isGetRequest(): boolean;
				public handleErrors(context: globalAndroid.content.Context): boolean;
				public clearCallbacks(): void;
				public handleFailure(obj: number, this_: string): void;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ServerResponse {
				public static class: java.lang.Class<io.branch.referral.ServerResponse>;
				public constructor(tag: string, statusCode: number, requestId: string, message: string);
				public getObject(): org.json.JSONObject;
				public getStatusCode(): number;
				public getTag(): string;
				public getFailReason(): string;
				public getMessage(): string;
				public setPost(post: any): void;
				public getArray(): org.json.JSONArray;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class ShareLinkManager {
				public static class: java.lang.Class<io.branch.referral.ShareLinkManager>;
			}
			export module ShareLinkManager {
				export class ChooserArrayAdapter {
					public static class: java.lang.Class<io.branch.referral.ShareLinkManager.ChooserArrayAdapter>;
					public selectedPos: number;
					public getItem(position: number): any;
					public getCount(): number;
					public isEnabled(position: number): boolean;
					public getView(this_: number, position: globalAndroid.view.View, convertView: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					public getItemId(position: number): number;
				}
				export class CopyLinkItem {
					public static class: java.lang.Class<io.branch.referral.ShareLinkManager.CopyLinkItem>;
					public loadIcon(pm: globalAndroid.content.pm.PackageManager): globalAndroid.graphics.drawable.Drawable;
					public loadLabel(pm: globalAndroid.content.pm.PackageManager): string;
				}
				export class MoreShareItem {
					public static class: java.lang.Class<io.branch.referral.ShareLinkManager.MoreShareItem>;
					public loadIcon(pm: globalAndroid.content.pm.PackageManager): globalAndroid.graphics.drawable.Drawable;
					public loadLabel(pm: globalAndroid.content.pm.PackageManager): string;
				}
				export class ShareItemView {
					public static class: java.lang.Class<io.branch.referral.ShareLinkManager.ShareItemView>;
					public constructor(context: io.branch.referral.ShareLinkManager, param1: globalAndroid.content.Context);
					public setLabel(appName: string, appIcon: globalAndroid.graphics.drawable.Drawable, isEnabled: boolean): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class SharingHelper {
				public static class: java.lang.Class<io.branch.referral.SharingHelper>;
				public constructor();
			}
			export module SharingHelper {
				export class SHARE_WITH {
					public static class: java.lang.Class<io.branch.referral.SharingHelper.SHARE_WITH>;
					public static FACEBOOK: io.branch.referral.SharingHelper.SHARE_WITH;
					public static FACEBOOK_MESSENGER: io.branch.referral.SharingHelper.SHARE_WITH;
					public static TWITTER: io.branch.referral.SharingHelper.SHARE_WITH;
					public static MESSAGE: io.branch.referral.SharingHelper.SHARE_WITH;
					public static EMAIL: io.branch.referral.SharingHelper.SHARE_WITH;
					public static FLICKR: io.branch.referral.SharingHelper.SHARE_WITH;
					public static GOOGLE_DOC: io.branch.referral.SharingHelper.SHARE_WITH;
					public static WHATS_APP: io.branch.referral.SharingHelper.SHARE_WITH;
					public static PINTEREST: io.branch.referral.SharingHelper.SHARE_WITH;
					public static HANGOUT: io.branch.referral.SharingHelper.SHARE_WITH;
					public static INSTAGRAM: io.branch.referral.SharingHelper.SHARE_WITH;
					public static WECHAT: io.branch.referral.SharingHelper.SHARE_WITH;
					public static SNAPCHAT: io.branch.referral.SharingHelper.SHARE_WITH;
					public static GMAIL: io.branch.referral.SharingHelper.SHARE_WITH;
					public toString(): string;
					public static valueOf(name: string): io.branch.referral.SharingHelper.SHARE_WITH;
					public getAppName(): string;
					public static values(): androidNative.Array<io.branch.referral.SharingHelper.SHARE_WITH>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export abstract class SystemObserver {
				public static class: java.lang.Class<io.branch.referral.SystemObserver>;
				public fetchAdId(context: globalAndroid.content.Context, callback: io.branch.referral.SystemObserver.AdsParamsFetchEvents): void;
				public fetchInstallReferrer(this_: globalAndroid.content.Context, context_: io.branch.referral.SystemObserver.InstallReferrerFetchEvents): void;
			}
			export module SystemObserver {
				export class AdsParamsFetchEvents {
					public static class: java.lang.Class<io.branch.referral.SystemObserver.AdsParamsFetchEvents>;
					/**
					 * Constructs a new instance of the io.branch.referral.SystemObserver$AdsParamsFetchEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onAdsParamsFetchFinished(): void });
					public constructor();
					public onAdsParamsFetchFinished(): void;
				}
				export class InstallReferrerFetchEvents {
					public static class: java.lang.Class<io.branch.referral.SystemObserver.InstallReferrerFetchEvents>;
					/**
					 * Constructs a new instance of the io.branch.referral.SystemObserver$InstallReferrerFetchEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onInstallReferrersFinished(): void });
					public constructor();
					public onInstallReferrersFinished(): void;
				}
				export class UniqueId {
					public static class: java.lang.Class<io.branch.referral.SystemObserver.UniqueId>;
					public equals(other: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class TrackingController {
				public static class: java.lang.Class<io.branch.referral.TrackingController>;
				public static isTrackingDisabled(context: globalAndroid.content.Context): boolean;
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export class UniversalResourceAnalyser {
				public static class: java.lang.Class<io.branch.referral.UniversalResourceAnalyser>;
				public static getInstance(context: globalAndroid.content.Context): io.branch.referral.UniversalResourceAnalyser;
			}
			export module UniversalResourceAnalyser {
				export class UrlSkipListUpdateTask extends io.branch.referral.BranchAsyncTask<java.lang.Void, java.lang.Void, org.json.JSONObject> {
					public static class: java.lang.Class<io.branch.referral.UniversalResourceAnalyser.UrlSkipListUpdateTask>;
					public onPostExecute(updatedURLFormatsObj: org.json.JSONObject): void;
					public doInBackground(update_url_path: androidNative.Array<java.lang.Void>): org.json.JSONObject;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module network {
				export abstract class BranchRemoteInterface {
					public static class: java.lang.Class<io.branch.referral.network.BranchRemoteInterface>;
					public static RETRY_NUMBER: string = 'retryNumber';
					public make_restful_get(response: string, brttVal: org.json.JSONObject, branchError: string, brttVal: string): io.branch.referral.ServerResponse;
					public constructor();
					public doRestfulPost(param0: string, param1: org.json.JSONObject): io.branch.referral.network.BranchRemoteInterface.BranchResponse;
					public doRestfulGet(param0: string): io.branch.referral.network.BranchRemoteInterface.BranchResponse;
					public make_restful_post(response: org.json.JSONObject, brttVal: string, branchError: string, brttVal: string): io.branch.referral.ServerResponse;
				}
				export module BranchRemoteInterface {
					export class BranchRemoteException {
						public static class: java.lang.Class<io.branch.referral.network.BranchRemoteInterface.BranchRemoteException>;
						public constructor(errorCode: number, errorMessage: string);
						public constructor(errorCode: number);
					}
					export class BranchResponse {
						public static class: java.lang.Class<io.branch.referral.network.BranchRemoteInterface.BranchResponse>;
						public constructor(responseData: string, responseCode: number);
					}
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module network {
				export class BranchRemoteInterfaceUrlConnection extends io.branch.referral.network.BranchRemoteInterface {
					public static class: java.lang.Class<io.branch.referral.network.BranchRemoteInterfaceUrlConnection>;
					public constructor();
					public constructor(branch: io.branch.referral.Branch);
					public doRestfulGet(url: string): io.branch.referral.network.BranchRemoteInterface.BranchResponse;
					public doRestfulPost(url: string, payload: org.json.JSONObject): io.branch.referral.network.BranchRemoteInterface.BranchResponse;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class AdType {
					public static class: java.lang.Class<io.branch.referral.util.AdType>;
					public static BANNER: io.branch.referral.util.AdType;
					public static INTERSTITIAL: io.branch.referral.util.AdType;
					public static REWARDED_VIDEO: io.branch.referral.util.AdType;
					public static NATIVE: io.branch.referral.util.AdType;
					public static valueOf(name: string): io.branch.referral.util.AdType;
					public getName(): string;
					public static values(): androidNative.Array<io.branch.referral.util.AdType>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class BRANCH_STANDARD_EVENT {
					public static class: java.lang.Class<io.branch.referral.util.BRANCH_STANDARD_EVENT>;
					public static ADD_TO_CART: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static ADD_TO_WISHLIST: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static VIEW_CART: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static INITIATE_PURCHASE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static ADD_PAYMENT_INFO: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static PURCHASE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static SPEND_CREDITS: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static SEARCH: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static VIEW_ITEM: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static VIEW_ITEMS: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static RATE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static SHARE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static INITIATE_STREAM: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static COMPLETE_STREAM: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static COMPLETE_REGISTRATION: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static COMPLETE_TUTORIAL: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static ACHIEVE_LEVEL: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static UNLOCK_ACHIEVEMENT: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static INVITE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static LOGIN: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static RESERVE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static SUBSCRIBE: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static START_TRIAL: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static CLICK_AD: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public static VIEW_AD: io.branch.referral.util.BRANCH_STANDARD_EVENT;
					public getName(): string;
					public static values(): androidNative.Array<io.branch.referral.util.BRANCH_STANDARD_EVENT>;
					public static valueOf(name: string): io.branch.referral.util.BRANCH_STANDARD_EVENT;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class BranchContentSchema {
					public static class: java.lang.Class<io.branch.referral.util.BranchContentSchema>;
					public static COMMERCE_AUCTION: io.branch.referral.util.BranchContentSchema;
					public static COMMERCE_BUSINESS: io.branch.referral.util.BranchContentSchema;
					public static COMMERCE_OTHER: io.branch.referral.util.BranchContentSchema;
					public static COMMERCE_PRODUCT: io.branch.referral.util.BranchContentSchema;
					public static COMMERCE_RESTAURANT: io.branch.referral.util.BranchContentSchema;
					public static COMMERCE_SERVICE: io.branch.referral.util.BranchContentSchema;
					public static COMMERCE_TRAVEL_FLIGHT: io.branch.referral.util.BranchContentSchema;
					public static COMMERCE_TRAVEL_HOTEL: io.branch.referral.util.BranchContentSchema;
					public static COMMERCE_TRAVEL_OTHER: io.branch.referral.util.BranchContentSchema;
					public static GAME_STATE: io.branch.referral.util.BranchContentSchema;
					public static MEDIA_IMAGE: io.branch.referral.util.BranchContentSchema;
					public static MEDIA_MIXED: io.branch.referral.util.BranchContentSchema;
					public static MEDIA_MUSIC: io.branch.referral.util.BranchContentSchema;
					public static MEDIA_OTHER: io.branch.referral.util.BranchContentSchema;
					public static MEDIA_VIDEO: io.branch.referral.util.BranchContentSchema;
					public static OTHER: io.branch.referral.util.BranchContentSchema;
					public static TEXT_ARTICLE: io.branch.referral.util.BranchContentSchema;
					public static TEXT_BLOG: io.branch.referral.util.BranchContentSchema;
					public static TEXT_OTHER: io.branch.referral.util.BranchContentSchema;
					public static TEXT_RECIPE: io.branch.referral.util.BranchContentSchema;
					public static TEXT_REVIEW: io.branch.referral.util.BranchContentSchema;
					public static TEXT_SEARCH_RESULTS: io.branch.referral.util.BranchContentSchema;
					public static TEXT_STORY: io.branch.referral.util.BranchContentSchema;
					public static TEXT_TECHNICAL_DOC: io.branch.referral.util.BranchContentSchema;
					public static valueOf(name: string): io.branch.referral.util.BranchContentSchema;
					public static getValue(contentSchema: string): io.branch.referral.util.BranchContentSchema;
					public static values(): androidNative.Array<io.branch.referral.util.BranchContentSchema>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class BranchEvent {
					public static class: java.lang.Class<io.branch.referral.util.BranchEvent>;
					public setRevenue(revenue: number): io.branch.referral.util.BranchEvent;
					public setAdType(adType: io.branch.referral.util.AdType): io.branch.referral.util.BranchEvent;
					public setDescription(description: string): io.branch.referral.util.BranchEvent;
					public getEventName(): string;
					public setSearchQuery(searchQuery: string): io.branch.referral.util.BranchEvent;
					public setTransactionID(transactionID: string): io.branch.referral.util.BranchEvent;
					public constructor(this_: string);
					public logEvent(context: globalAndroid.content.Context): boolean;
					public addCustomDataProperty(this_: string, propertyName: string): io.branch.referral.util.BranchEvent;
					public addContentItems(contentItems: androidNative.Array<io.branch.indexing.BranchUniversalObject>): io.branch.referral.util.BranchEvent;
					public setCurrency(currency: io.branch.referral.util.CurrencyType): io.branch.referral.util.BranchEvent;
					public setAffiliation(affiliation: string): io.branch.referral.util.BranchEvent;
					public addContentItems(contentItems: java.util.List<io.branch.indexing.BranchUniversalObject>): io.branch.referral.util.BranchEvent;
					public logEvent(e: globalAndroid.content.Context, this_: io.branch.referral.util.BranchEvent.BranchLogEventCallback): boolean;
					public constructor(branchStandardEvent: io.branch.referral.util.BRANCH_STANDARD_EVENT);
					public setCustomerEventAlias(customerEventAlias: string): io.branch.referral.util.BranchEvent;
					public setShipping(shipping: number): io.branch.referral.util.BranchEvent;
					public setCoupon(coupon: string): io.branch.referral.util.BranchEvent;
					public setTax(tax: number): io.branch.referral.util.BranchEvent;
				}
				export module BranchEvent {
					export class BranchLogEventCallback {
						public static class: java.lang.Class<io.branch.referral.util.BranchEvent.BranchLogEventCallback>;
						/**
						 * Constructs a new instance of the io.branch.referral.util.BranchEvent$BranchLogEventCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: number): void; onFailure(param0: java.lang.Exception): void });
						public constructor();
						public onSuccess(param0: number): void;
						public onFailure(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class CommerceEvent {
					public static class: java.lang.Class<io.branch.referral.util.CommerceEvent>;
					public setShipping(shipping: java.lang.Double): void;
					public setTax(tax: java.lang.Double): void;
					public getCommerceJSONObject(): org.json.JSONObject;
					public getRevenue(): java.lang.Double;
					public getProducts(): java.util.List<org.json.JSONObject>;
					public getTax(): java.lang.Double;
					public setCoupon(coupon: string): void;
					public getShipping(): java.lang.Double;
					public setProducts(products: java.util.List<io.branch.referral.util.Product>): void;
					public setCurrencyType(currency: io.branch.referral.util.CurrencyType): void;
					public getAffiliation(): string;
					public constructor(revenue: java.lang.Double, currency: io.branch.referral.util.CurrencyType, transactionID: string, shipping: java.lang.Double, tax: java.lang.Double, coupon: string, affiliation: string, product: io.branch.referral.util.Product);
					public getTransactionID(): string;
					public getCurrencyType(): io.branch.referral.util.CurrencyType;
					public setTransactionID(transactionID: string): void;
					public setAffiliation(affiliation: string): void;
					public constructor();
					public constructor(revenue: java.lang.Double, currency: io.branch.referral.util.CurrencyType, transactionID: string, shipping: java.lang.Double, tax: java.lang.Double, coupon: string, affiliation: string, products: java.util.List<io.branch.referral.util.Product>);
					public setRevenue(revenue: java.lang.Double): void;
					public getCoupon(): string;
					public addProduct(product: io.branch.referral.util.Product): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class ContentMetadata {
					public static class: java.lang.Class<io.branch.referral.util.ContentMetadata>;
					public quantity: java.lang.Double;
					public price: java.lang.Double;
					public currencyType: io.branch.referral.util.CurrencyType;
					public sku: string;
					public productName: string;
					public productBrand: string;
					public productCategory: io.branch.referral.util.ProductCategory;
					public condition: io.branch.referral.util.ContentMetadata.CONDITION;
					public productVariant: string;
					public rating: java.lang.Double;
					public ratingAverage: java.lang.Double;
					public ratingCount: java.lang.Integer;
					public ratingMax: java.lang.Double;
					public addressStreet: string;
					public addressCity: string;
					public addressRegion: string;
					public addressCountry: string;
					public addressPostalCode: string;
					public latitude: java.lang.Double;
					public longitude: java.lang.Double;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
					public setPrice(price: java.lang.Double, currency: io.branch.referral.util.CurrencyType): io.branch.referral.util.ContentMetadata;
					public static createFromJson(i: io.branch.referral.BranchUtil.JsonReader): io.branch.referral.util.ContentMetadata;
					public setSku(sku: string): io.branch.referral.util.ContentMetadata;
					public setProductBrand(productBrand: string): io.branch.referral.util.ContentMetadata;
					public setContentSchema(contentSchema: io.branch.referral.util.BranchContentSchema): io.branch.referral.util.ContentMetadata;
					public setQuantity(quantity: java.lang.Double): io.branch.referral.util.ContentMetadata;
					public setProductVariant(productVariant: string): io.branch.referral.util.ContentMetadata;
					public getImageCaptions(): java.util.ArrayList<string>;
					public describeContents(): number;
					public setProductName(productName: string): io.branch.referral.util.ContentMetadata;
					/** @deprecated */
					public setRating(averageRating: java.lang.Double, maximumRating: java.lang.Double, ratingCount: java.lang.Integer): io.branch.referral.util.ContentMetadata;
					public setRating(rating: java.lang.Double, averageRating: java.lang.Double, maximumRating: java.lang.Double, ratingCount: java.lang.Integer): io.branch.referral.util.ContentMetadata;
					public addCustomMetadata(key: string, value: string): io.branch.referral.util.ContentMetadata;
					public constructor();
					public addImageCaptions(captions: androidNative.Array<string>): io.branch.referral.util.ContentMetadata;
					public convertToJson(): org.json.JSONObject;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public setProductCondition(productCondition: io.branch.referral.util.ContentMetadata.CONDITION): io.branch.referral.util.ContentMetadata;
					public getCustomMetadata(): java.util.HashMap<string, string>;
					public setLocation(latitude: java.lang.Double, longitude: java.lang.Double): io.branch.referral.util.ContentMetadata;
					public setAddress(street: string, city: string, region: string, country: string, postalCode: string): io.branch.referral.util.ContentMetadata;
					public setProductCategory(productCategory: io.branch.referral.util.ProductCategory): io.branch.referral.util.ContentMetadata;
				}
				export module ContentMetadata {
					export class CONDITION {
						public static class: java.lang.Class<io.branch.referral.util.ContentMetadata.CONDITION>;
						public static OTHER: io.branch.referral.util.ContentMetadata.CONDITION;
						public static NEW: io.branch.referral.util.ContentMetadata.CONDITION;
						public static GOOD: io.branch.referral.util.ContentMetadata.CONDITION;
						public static FAIR: io.branch.referral.util.ContentMetadata.CONDITION;
						public static POOR: io.branch.referral.util.ContentMetadata.CONDITION;
						public static USED: io.branch.referral.util.ContentMetadata.CONDITION;
						public static REFURBISHED: io.branch.referral.util.ContentMetadata.CONDITION;
						public static EXCELLENT: io.branch.referral.util.ContentMetadata.CONDITION;
						public static getValue(condition: string): io.branch.referral.util.ContentMetadata.CONDITION;
						public static valueOf(name: string): io.branch.referral.util.ContentMetadata.CONDITION;
						public static values(): androidNative.Array<io.branch.referral.util.ContentMetadata.CONDITION>;
					}
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class CurrencyType {
					public static class: java.lang.Class<io.branch.referral.util.CurrencyType>;
					public static AED: io.branch.referral.util.CurrencyType;
					public static AFN: io.branch.referral.util.CurrencyType;
					public static ALL: io.branch.referral.util.CurrencyType;
					public static AMD: io.branch.referral.util.CurrencyType;
					public static ANG: io.branch.referral.util.CurrencyType;
					public static AOA: io.branch.referral.util.CurrencyType;
					public static ARS: io.branch.referral.util.CurrencyType;
					public static AUD: io.branch.referral.util.CurrencyType;
					public static AWG: io.branch.referral.util.CurrencyType;
					public static AZN: io.branch.referral.util.CurrencyType;
					public static BAM: io.branch.referral.util.CurrencyType;
					public static BBD: io.branch.referral.util.CurrencyType;
					public static BDT: io.branch.referral.util.CurrencyType;
					public static BGN: io.branch.referral.util.CurrencyType;
					public static BHD: io.branch.referral.util.CurrencyType;
					public static BIF: io.branch.referral.util.CurrencyType;
					public static BMD: io.branch.referral.util.CurrencyType;
					public static BND: io.branch.referral.util.CurrencyType;
					public static BOB: io.branch.referral.util.CurrencyType;
					public static BOV: io.branch.referral.util.CurrencyType;
					public static BRL: io.branch.referral.util.CurrencyType;
					public static BSD: io.branch.referral.util.CurrencyType;
					public static BTN: io.branch.referral.util.CurrencyType;
					public static BWP: io.branch.referral.util.CurrencyType;
					public static BYN: io.branch.referral.util.CurrencyType;
					public static BYR: io.branch.referral.util.CurrencyType;
					public static BZD: io.branch.referral.util.CurrencyType;
					public static CAD: io.branch.referral.util.CurrencyType;
					public static CDF: io.branch.referral.util.CurrencyType;
					public static CHE: io.branch.referral.util.CurrencyType;
					public static CHF: io.branch.referral.util.CurrencyType;
					public static CHW: io.branch.referral.util.CurrencyType;
					public static CLF: io.branch.referral.util.CurrencyType;
					public static CLP: io.branch.referral.util.CurrencyType;
					public static CNY: io.branch.referral.util.CurrencyType;
					public static COP: io.branch.referral.util.CurrencyType;
					public static COU: io.branch.referral.util.CurrencyType;
					public static CRC: io.branch.referral.util.CurrencyType;
					public static CUC: io.branch.referral.util.CurrencyType;
					public static CUP: io.branch.referral.util.CurrencyType;
					public static CVE: io.branch.referral.util.CurrencyType;
					public static CZK: io.branch.referral.util.CurrencyType;
					public static DJF: io.branch.referral.util.CurrencyType;
					public static DKK: io.branch.referral.util.CurrencyType;
					public static DOP: io.branch.referral.util.CurrencyType;
					public static DZD: io.branch.referral.util.CurrencyType;
					public static EGP: io.branch.referral.util.CurrencyType;
					public static ERN: io.branch.referral.util.CurrencyType;
					public static ETB: io.branch.referral.util.CurrencyType;
					public static EUR: io.branch.referral.util.CurrencyType;
					public static FJD: io.branch.referral.util.CurrencyType;
					public static FKP: io.branch.referral.util.CurrencyType;
					public static GBP: io.branch.referral.util.CurrencyType;
					public static GEL: io.branch.referral.util.CurrencyType;
					public static GHS: io.branch.referral.util.CurrencyType;
					public static GIP: io.branch.referral.util.CurrencyType;
					public static GMD: io.branch.referral.util.CurrencyType;
					public static GNF: io.branch.referral.util.CurrencyType;
					public static GTQ: io.branch.referral.util.CurrencyType;
					public static GYD: io.branch.referral.util.CurrencyType;
					public static HKD: io.branch.referral.util.CurrencyType;
					public static HNL: io.branch.referral.util.CurrencyType;
					public static HRK: io.branch.referral.util.CurrencyType;
					public static HTG: io.branch.referral.util.CurrencyType;
					public static HUF: io.branch.referral.util.CurrencyType;
					public static IDR: io.branch.referral.util.CurrencyType;
					public static ILS: io.branch.referral.util.CurrencyType;
					public static INR: io.branch.referral.util.CurrencyType;
					public static IQD: io.branch.referral.util.CurrencyType;
					public static IRR: io.branch.referral.util.CurrencyType;
					public static ISK: io.branch.referral.util.CurrencyType;
					public static JMD: io.branch.referral.util.CurrencyType;
					public static JOD: io.branch.referral.util.CurrencyType;
					public static JPY: io.branch.referral.util.CurrencyType;
					public static KES: io.branch.referral.util.CurrencyType;
					public static KGS: io.branch.referral.util.CurrencyType;
					public static KHR: io.branch.referral.util.CurrencyType;
					public static KMF: io.branch.referral.util.CurrencyType;
					public static KPW: io.branch.referral.util.CurrencyType;
					public static KRW: io.branch.referral.util.CurrencyType;
					public static KWD: io.branch.referral.util.CurrencyType;
					public static KYD: io.branch.referral.util.CurrencyType;
					public static KZT: io.branch.referral.util.CurrencyType;
					public static LAK: io.branch.referral.util.CurrencyType;
					public static LBP: io.branch.referral.util.CurrencyType;
					public static LKR: io.branch.referral.util.CurrencyType;
					public static LRD: io.branch.referral.util.CurrencyType;
					public static LSL: io.branch.referral.util.CurrencyType;
					public static LYD: io.branch.referral.util.CurrencyType;
					public static MAD: io.branch.referral.util.CurrencyType;
					public static MDL: io.branch.referral.util.CurrencyType;
					public static MGA: io.branch.referral.util.CurrencyType;
					public static MKD: io.branch.referral.util.CurrencyType;
					public static MMK: io.branch.referral.util.CurrencyType;
					public static MNT: io.branch.referral.util.CurrencyType;
					public static MOP: io.branch.referral.util.CurrencyType;
					public static MRO: io.branch.referral.util.CurrencyType;
					public static MUR: io.branch.referral.util.CurrencyType;
					public static MVR: io.branch.referral.util.CurrencyType;
					public static MWK: io.branch.referral.util.CurrencyType;
					public static MXN: io.branch.referral.util.CurrencyType;
					public static MXV: io.branch.referral.util.CurrencyType;
					public static MYR: io.branch.referral.util.CurrencyType;
					public static MZN: io.branch.referral.util.CurrencyType;
					public static NAD: io.branch.referral.util.CurrencyType;
					public static NGN: io.branch.referral.util.CurrencyType;
					public static NIO: io.branch.referral.util.CurrencyType;
					public static NOK: io.branch.referral.util.CurrencyType;
					public static NPR: io.branch.referral.util.CurrencyType;
					public static NZD: io.branch.referral.util.CurrencyType;
					public static OMR: io.branch.referral.util.CurrencyType;
					public static PAB: io.branch.referral.util.CurrencyType;
					public static PEN: io.branch.referral.util.CurrencyType;
					public static PGK: io.branch.referral.util.CurrencyType;
					public static PHP: io.branch.referral.util.CurrencyType;
					public static PKR: io.branch.referral.util.CurrencyType;
					public static PLN: io.branch.referral.util.CurrencyType;
					public static PYG: io.branch.referral.util.CurrencyType;
					public static QAR: io.branch.referral.util.CurrencyType;
					public static RON: io.branch.referral.util.CurrencyType;
					public static RSD: io.branch.referral.util.CurrencyType;
					public static RUB: io.branch.referral.util.CurrencyType;
					public static RWF: io.branch.referral.util.CurrencyType;
					public static SAR: io.branch.referral.util.CurrencyType;
					public static SBD: io.branch.referral.util.CurrencyType;
					public static SCR: io.branch.referral.util.CurrencyType;
					public static SDG: io.branch.referral.util.CurrencyType;
					public static SEK: io.branch.referral.util.CurrencyType;
					public static SGD: io.branch.referral.util.CurrencyType;
					public static SHP: io.branch.referral.util.CurrencyType;
					public static SLL: io.branch.referral.util.CurrencyType;
					public static SOS: io.branch.referral.util.CurrencyType;
					public static SRD: io.branch.referral.util.CurrencyType;
					public static SSP: io.branch.referral.util.CurrencyType;
					public static STD: io.branch.referral.util.CurrencyType;
					public static SYP: io.branch.referral.util.CurrencyType;
					public static SZL: io.branch.referral.util.CurrencyType;
					public static THB: io.branch.referral.util.CurrencyType;
					public static TJS: io.branch.referral.util.CurrencyType;
					public static TMT: io.branch.referral.util.CurrencyType;
					public static TND: io.branch.referral.util.CurrencyType;
					public static TOP: io.branch.referral.util.CurrencyType;
					public static TRY: io.branch.referral.util.CurrencyType;
					public static TTD: io.branch.referral.util.CurrencyType;
					public static TWD: io.branch.referral.util.CurrencyType;
					public static TZS: io.branch.referral.util.CurrencyType;
					public static UAH: io.branch.referral.util.CurrencyType;
					public static UGX: io.branch.referral.util.CurrencyType;
					public static USD: io.branch.referral.util.CurrencyType;
					public static USN: io.branch.referral.util.CurrencyType;
					public static UYI: io.branch.referral.util.CurrencyType;
					public static UYU: io.branch.referral.util.CurrencyType;
					public static UZS: io.branch.referral.util.CurrencyType;
					public static VEF: io.branch.referral.util.CurrencyType;
					public static VND: io.branch.referral.util.CurrencyType;
					public static VUV: io.branch.referral.util.CurrencyType;
					public static WST: io.branch.referral.util.CurrencyType;
					public static XAF: io.branch.referral.util.CurrencyType;
					public static XAG: io.branch.referral.util.CurrencyType;
					public static XAU: io.branch.referral.util.CurrencyType;
					public static XBA: io.branch.referral.util.CurrencyType;
					public static XBB: io.branch.referral.util.CurrencyType;
					public static XBC: io.branch.referral.util.CurrencyType;
					public static XBD: io.branch.referral.util.CurrencyType;
					public static XCD: io.branch.referral.util.CurrencyType;
					public static XDR: io.branch.referral.util.CurrencyType;
					public static XFU: io.branch.referral.util.CurrencyType;
					public static XOF: io.branch.referral.util.CurrencyType;
					public static XPD: io.branch.referral.util.CurrencyType;
					public static XPF: io.branch.referral.util.CurrencyType;
					public static XPT: io.branch.referral.util.CurrencyType;
					public static XSU: io.branch.referral.util.CurrencyType;
					public static XTS: io.branch.referral.util.CurrencyType;
					public static XUA: io.branch.referral.util.CurrencyType;
					public static XXX: io.branch.referral.util.CurrencyType;
					public static YER: io.branch.referral.util.CurrencyType;
					public static ZAR: io.branch.referral.util.CurrencyType;
					public static ZMW: io.branch.referral.util.CurrencyType;
					public toString(): string;
					public static getValue(type: string): io.branch.referral.util.CurrencyType;
					public static valueOf(name: string): io.branch.referral.util.CurrencyType;
					public static values(): androidNative.Array<io.branch.referral.util.CurrencyType>;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class LinkProperties {
					public static class: java.lang.Class<io.branch.referral.util.LinkProperties>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<any>;
					public setCampaign(campaign: string): io.branch.referral.util.LinkProperties;
					public setChannel(channel: string): io.branch.referral.util.LinkProperties;
					public getMatchDuration(): number;
					public getStage(): string;
					public describeContents(): number;
					public setAlias(alias: string): io.branch.referral.util.LinkProperties;
					public getControlParams(): java.util.HashMap<string, string>;
					public writeToParcel(this_: globalAndroid.os.Parcel, dest: number): void;
					public getCampaign(): string;
					public getTags(): java.util.ArrayList<string>;
					public constructor();
					public setFeature(feature: string): io.branch.referral.util.LinkProperties;
					public static getReferredLinkProperties(): io.branch.referral.util.LinkProperties;
					public addControlParameter(key: string, value: string): io.branch.referral.util.LinkProperties;
					public setDuration(duration: number): io.branch.referral.util.LinkProperties;
					public getAlias(): string;
					public getFeature(): string;
					public setStage(stage: string): io.branch.referral.util.LinkProperties;
					public addTag(tag: string): io.branch.referral.util.LinkProperties;
					public getChannel(): string;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class Product {
					public static class: java.lang.Class<io.branch.referral.util.Product>;
					public getProductJSONObject(): org.json.JSONObject;
					public getBrand(): string;
					public setQuantity(quantity: java.lang.Integer): void;
					public setCategory(category: io.branch.referral.util.ProductCategory): void;
					public getCategory(): io.branch.referral.util.ProductCategory;
					public setBrand(brand: string): void;
					public setName(name: string): void;
					public getPrice(): java.lang.Double;
					public getName(): string;
					public constructor();
					public setSku(sku: string): void;
					public setPrice(price: java.lang.Double): void;
					public getVariant(): string;
					public constructor(sku: string, name: string, price: java.lang.Double, quantity: java.lang.Integer, brand: string, variant: string, category: io.branch.referral.util.ProductCategory);
					public setVariant(variant: string): void;
					public getSku(): string;
					public getQuantity(): java.lang.Integer;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class ProductCategory {
					public static class: java.lang.Class<io.branch.referral.util.ProductCategory>;
					public static ANIMALS_AND_PET_SUPPLIES: io.branch.referral.util.ProductCategory;
					public static APPAREL_AND_ACCESSORIES: io.branch.referral.util.ProductCategory;
					public static ARTS_AND_ENTERTAINMENT: io.branch.referral.util.ProductCategory;
					public static BABY_AND_TODDLER: io.branch.referral.util.ProductCategory;
					public static BUSINESS_AND_INDUSTRIAL: io.branch.referral.util.ProductCategory;
					public static CAMERAS_AND_OPTICS: io.branch.referral.util.ProductCategory;
					public static ELECTRONICS: io.branch.referral.util.ProductCategory;
					public static FOOD_BEVERAGES_AND_TOBACCO: io.branch.referral.util.ProductCategory;
					public static FURNITURE: io.branch.referral.util.ProductCategory;
					public static HARDWARE: io.branch.referral.util.ProductCategory;
					public static HEALTH_AND_BEAUTY: io.branch.referral.util.ProductCategory;
					public static HOME_AND_GARDEN: io.branch.referral.util.ProductCategory;
					public static LUGGAGE_AND_BAGS: io.branch.referral.util.ProductCategory;
					public static MATURE: io.branch.referral.util.ProductCategory;
					public static MEDIA: io.branch.referral.util.ProductCategory;
					public static OFFICE_SUPPLIES: io.branch.referral.util.ProductCategory;
					public static RELIGIOUS_AND_CEREMONIAL: io.branch.referral.util.ProductCategory;
					public static SOFTWARE: io.branch.referral.util.ProductCategory;
					public static SPORTING_GOODS: io.branch.referral.util.ProductCategory;
					public static TOYS_AND_GAMES: io.branch.referral.util.ProductCategory;
					public static VEHICLES_AND_PARTS: io.branch.referral.util.ProductCategory;
					public static values(): androidNative.Array<io.branch.referral.util.ProductCategory>;
					public static valueOf(name: string): io.branch.referral.util.ProductCategory;
					public getName(): string;
					public static getValue(productCategory: string): io.branch.referral.util.ProductCategory;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class ShareSheetStyle {
					public static class: java.lang.Class<io.branch.referral.util.ShareSheetStyle>;
					public getUrlCopiedMessage(): string;
					public setStyleResourceID(styleResourceID: number): io.branch.referral.util.ShareSheetStyle;
					public getMoreOptionIcon(): globalAndroid.graphics.drawable.Drawable;
					public setMoreOptionStyle(icon: globalAndroid.graphics.drawable.Drawable, label: string): io.branch.referral.util.ShareSheetStyle;
					public setIconSize(iconSize: number): io.branch.referral.util.ShareSheetStyle;
					public getDialogThemeResourceID(): number;
					public getCopyUrlIcon(): globalAndroid.graphics.drawable.Drawable;
					public getIsFullWidthStyle(): boolean;
					public setCopyUrlStyle(drawableIconID: number, stringLabelID: number, stringMessageID: number): io.branch.referral.util.ShareSheetStyle;
					public excludeFromShareSheet(packageName: string): io.branch.referral.util.ShareSheetStyle;
					public setCopyUrlStyle(icon: globalAndroid.graphics.drawable.Drawable, label: string, message: string): io.branch.referral.util.ShareSheetStyle;
					public setDividerHeight(height: number): io.branch.referral.util.ShareSheetStyle;
					public constructor(context: globalAndroid.content.Context, messageTitle: string, messageBody: string);
					public excludeFromShareSheet(packageNames: java.util.List<string>): io.branch.referral.util.ShareSheetStyle;
					public setDialogThemeResourceID(styleResourceID: number): io.branch.referral.util.ShareSheetStyle;
					public getDividerHeight(): number;
					public addPreferredSharingOption(preferredOption: io.branch.referral.SharingHelper.SHARE_WITH): io.branch.referral.util.ShareSheetStyle;
					public getMoreOptionText(): string;
					public setSharingTitle(titleView: globalAndroid.view.View): io.branch.referral.util.ShareSheetStyle;
					public setMoreOptionStyle(drawableIconID: number, stringLabelID: number): io.branch.referral.util.ShareSheetStyle;
					public includeInShareSheet(packageName: string): io.branch.referral.util.ShareSheetStyle;
					public getMessageTitle(): string;
					public getIncludedInShareSheet(): java.util.List<string>;
					public includeInShareSheet(packageName: androidNative.Array<string>): io.branch.referral.util.ShareSheetStyle;
					public excludeFromShareSheet(packageName: androidNative.Array<string>): io.branch.referral.util.ShareSheetStyle;
					public setSharingTitle(title: string): io.branch.referral.util.ShareSheetStyle;
					public getSharingTitleView(): globalAndroid.view.View;
					public getExcludedFromShareSheet(): java.util.List<string>;
					public setAsFullWidthStyle(setFullWidthStyle: boolean): io.branch.referral.util.ShareSheetStyle;
					public getPreferredOptions(): java.util.ArrayList<io.branch.referral.SharingHelper.SHARE_WITH>;
					public getStyleResourceID(): number;
					public getCopyURlText(): string;
					public getDefaultURL(): string;
					public getSharingTitle(): string;
					public getIconSize(): number;
					public includeInShareSheet(packageNames: java.util.List<string>): io.branch.referral.util.ShareSheetStyle;
					public setDefaultURL(url: string): io.branch.referral.util.ShareSheetStyle;
					public getMessageBody(): string;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module util {
				export class SharingUtil {
					public static class: java.lang.Class<io.branch.referral.util.SharingUtil>;
					public static INSTANCE: io.branch.referral.util.SharingUtil;
					public static share(value: string, $this$share_u24lambda_u2d0: string, immutabilityIntentFlags: string, shareIntent: globalAndroid.app.Activity): void;
					public setSharedURL(value: string): void;
					public getSharedURL(): string;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class AlternateDomainsCheck extends io.branch.referral.validators.IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.AlternateDomainsCheck>;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public constructor(integrationModel: io.branch.referral.validators.BranchIntegrationModel, branchAppConfig: org.json.JSONObject);
					public RunTests(context: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class AppLinksCheck extends io.branch.referral.validators.IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.AppLinksCheck>;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public constructor(integrationModel: io.branch.referral.validators.BranchIntegrationModel, branchAppConfig: org.json.JSONObject);
					public RunTests(context: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class BranchInstanceCreationValidatorCheck extends io.branch.referral.validators.IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.BranchInstanceCreationValidatorCheck>;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public RunTests(context: globalAndroid.content.Context): boolean;
					public GetMoreInfoLink(): string;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class BranchIntegrationModel {
					public static class: java.lang.Class<io.branch.referral.validators.BranchIntegrationModel>;
					public constructor(e: globalAndroid.content.Context);
				}
				export module BranchIntegrationModel {
					export class getDeepLinkSchemeTasks extends io.branch.referral.BranchAsyncTask<globalAndroid.content.Context, java.lang.Void, org.json.JSONObject> {
						public static class: java.lang.Class<io.branch.referral.validators.BranchIntegrationModel.getDeepLinkSchemeTasks>;
						public doInBackground(contexts: androidNative.Array<globalAndroid.content.Context>): org.json.JSONObject;
					}
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class BranchKeysValidatorCheck extends io.branch.referral.validators.IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.BranchKeysValidatorCheck>;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public RunTests(context: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class CustomDomainCheck extends io.branch.referral.validators.IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.CustomDomainCheck>;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public constructor(integrationModel: io.branch.referral.validators.BranchIntegrationModel, branchAppConfig: org.json.JSONObject);
					public RunTests(context: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class DeepLinkRoutingValidator {
					public static class: java.lang.Class<io.branch.referral.validators.DeepLinkRoutingValidator>;
					public constructor();
					public static validate(response_data: java.lang.ref.WeakReference<globalAndroid.app.Activity>): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class DefaultDomainsCheck extends io.branch.referral.validators.IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.DefaultDomainsCheck>;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public constructor(integrationModel: io.branch.referral.validators.BranchIntegrationModel, branchAppConfig: org.json.JSONObject);
					public RunTests(context: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class IntegrationValidator extends io.branch.referral.validators.ServerRequestGetAppConfig.IGetAppConfigEvents {
					public static class: java.lang.Class<io.branch.referral.validators.IntegrationValidator>;
					public static validate(context: globalAndroid.content.Context): void;
					public onAppConfigAvailable(branchAppConfig: org.json.JSONObject): void;
					public static getLogs(): string;
					public onAppConfigAvailable(param0: org.json.JSONObject): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export abstract class IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.IntegrationValidatorCheck>;
					public RunTests(param0: globalAndroid.content.Context): boolean;
					public GetTestName(): string;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public GetMoreInfoLink(): string;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class IntegrationValidatorConstants {
					public static class: java.lang.Class<io.branch.referral.validators.IntegrationValidatorConstants>;
					public static checkmark: string = '✅';
					public static xmark: string = '❌';
					public static appLinksMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#:~:text=%3C!%2D%2D%20Branch%20App%20Links%20%2D%20Live,%3C/intent%2Dfilter%3E">More info</a>';
					public static alternateDomainsMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#:~:text=The%20%2Dalternate.app.link%20domain%20associated%20with%20your%20app">More info</a>';
					public static branchInstanceCreationMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#:~:text=Branch.getAutoInstance(this)">More info</a>';
					public static branchKeysMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#:~:text=%3C!%2D%2D%20REPLACE%20%60BranchKey%60%20with,%22key_test_XXX%22%20/%3E">More info</a>';
					public static customDomainMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#section-configure-app">More info</a>';
					public static defaultDomainsMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#4-configure-app:~:text=%3C!%2D%2D%20Branch%20App%20Links%20%2D%20Live,%3C/intent%2Dfilter%3E">More info</a>';
					public static packageNameMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#:~:text=package%3D%22com.example.android%22">More info</a>';
					public static uriSchemeAppMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#4-configure-app:~:text=%3Cintent%2Dfilter%3E%0A%09%09%09%09%3C!%2D%2D%20If,/%3E%0A%09%09%09%3C/intent%2Dfilter%3E">More info</a>';
					public static uriSchemeDashboardMoreInfoDocsLink: string = '<a href="https://help.branch.io/developers-hub/docs/android-basic-integration#1-configure-branch-dashboard:~:text=%22Android%20URI%20Scheme%22">More info</a>';
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class IntegrationValidatorDialog {
					public static class: java.lang.Class<io.branch.referral.validators.IntegrationValidatorDialog>;
					public constructor(context: globalAndroid.content.Context);
					public SetTestResultForRowItem(testNumber: number, name: string, didTestPass: boolean, detailsMessage: string, moreInfoLink: string): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class IntegrationValidatorDialogRowItem {
					public static class: java.lang.Class<io.branch.referral.validators.IntegrationValidatorDialogRowItem>;
					public SetTestResult(didTestPass: boolean): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
					public ToggleDetailsButton(didTestPass: boolean): void;
					public SetMoreInfoLink(moreInfoLink: string): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public SetTitleText(title: string): void;
					public SetDetailsMessage(detailsMessage: string): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class LinkingValidator {
					public static class: java.lang.Class<io.branch.referral.validators.LinkingValidator>;
					public static validate(context: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class LinkingValidatorConstants {
					public static class: java.lang.Class<io.branch.referral.validators.LinkingValidatorConstants>;
					public static canonicalURLPromptText: string = 'Please paste in a web link for the $canonical_url';
					public static deeplinkPathPromptText: string = 'Please paste in a value for the $deeplink_path';
					public static customKeyPromptText: string = 'Please enter your custom key and value for routing';
					public static step1ButtonText: string = 'Next';
					public static step2ButtonText: string = '  Generate Links for Testing  ';
					public static step3ButtonText: string = 'Done';
					public static canonicalUrlKey: string = '$canonical_url';
					public static deeplinkPathKey: string = '$deeplink_path';
					public static linkingValidatorRow1Title: string = 'Link using App Link';
					public static linkingValidatorRow2Title: string = 'Link using URI scheme';
					public static linkingValidatorRow3Title: string = 'Web-only link';
					public static linkingValidatorRow4Title: string = 'Link with missing data';
					public static linkingValidatorRow5Title: string = 'Warm start use case';
					public static linkingValidatorRow6Title: string = 'Foreground click use case';
					public static infoButton1Text: string = 'Verifies that Universal Links / App Links are working correctly for your Branch domain';
					public static infoButton2Text: string = 'Verifies that URI schemes work correctly for your Branch domain';
					public static infoButton3Text: string = 'Verifies that web-only links are handled correctly to take you to the mobile web';
					public static infoButton4Text: string = 'Verifies that your app gracefully handles Branch links missing deep link data';
					public static infoButton5Text: string = 'Click the button to simulate a deep link click for the warm start use case';
					public static infoButton6Text: string = 'Click the button to simulate a deep link click for the foreground use case';
					public static debugButton1Text: string = 'Ensure you’ve entered the correct SHA 256s on the dashboard and added your Branch domains to the Android Manifest';
					public static debugButton2Text: string = 'Ensure that you’ve added a unique Branch URI scheme to the dashboard and Android Manifest';
					public static debugButton3Text: string = 'Ensure that your code checks for $web-only in the link data, and if it is true routes the user to the mobile web';
					public static debugButton4Text: string = 'Ensure that your code gracefully handles missing or invalid deep link data like taking them to the home screen';
					public static debugButton5Text: string = 'Ensure that you are initializing Branch inside of onStart() and that the code is called anytime the app enters the foreground';
					public static debugButton6Text: string = 'Ensure that you are calling reInit() inside of onNewIntent() after checking if branch_force_new_session is true';
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class LinkingValidatorDialog {
					public static class: java.lang.Class<io.branch.referral.validators.LinkingValidatorDialog>;
					public constructor(context: globalAndroid.content.Context);
					public onItemSelected(adapterView: globalAndroid.widget.AdapterView<any>, view: globalAndroid.view.View, i: number, l: number): void;
					public onNothingSelected(adapterView: globalAndroid.widget.AdapterView<any>): void;
				}
				export module LinkingValidatorDialog {
					export class ROUTING_TYPE {
						public static class: java.lang.Class<io.branch.referral.validators.LinkingValidatorDialog.ROUTING_TYPE>;
						public static CANONICAL_URL: io.branch.referral.validators.LinkingValidatorDialog.ROUTING_TYPE;
						public static DEEPLINK_PATH: io.branch.referral.validators.LinkingValidatorDialog.ROUTING_TYPE;
						public static CUSTOM: io.branch.referral.validators.LinkingValidatorDialog.ROUTING_TYPE;
						public static values(): androidNative.Array<io.branch.referral.validators.LinkingValidatorDialog.ROUTING_TYPE>;
						public static valueOf(name: string): io.branch.referral.validators.LinkingValidatorDialog.ROUTING_TYPE;
					}
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class LinkingValidatorDialogRowItem {
					public static class: java.lang.Class<io.branch.referral.validators.LinkingValidatorDialogRowItem>;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyle: number);
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public InitializeRow(this_: string, title: string, infoText: string, debugText: string, routingKey: string, routingValue: string, canonicalIdentifier: boolean, isSharableLink: number, index: androidNative.Array<string>): void;
					public getActivity(context: globalAndroid.content.Context): globalAndroid.app.Activity;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class PackageNameCheck extends io.branch.referral.validators.IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.PackageNameCheck>;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public constructor(integrationModel: io.branch.referral.validators.BranchIntegrationModel, branchAppConfig: org.json.JSONObject);
					public RunTests(context: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class ServerRequestGetAppConfig extends io.branch.referral.ServerRequest {
					public static class: java.lang.Class<io.branch.referral.validators.ServerRequestGetAppConfig>;
					public constructor(context: globalAndroid.content.Context, callback: io.branch.referral.validators.ServerRequestGetAppConfig.IGetAppConfigEvents);
					public clearCallbacks(): void;
					public onRequestSucceeded(response: io.branch.referral.ServerResponse, branch: io.branch.referral.Branch): void;
					public getRequestUrl(): string;
					public constructor(context: globalAndroid.content.Context, requestPath: io.branch.referral.Defines.RequestPath);
					public constructor(requestPath: io.branch.referral.Defines.RequestPath, post: org.json.JSONObject, context: globalAndroid.content.Context);
					public handleFailure(statusCode: number, causeMsg: string): void;
					public isGetRequest(): boolean;
					public handleErrors(context: globalAndroid.content.Context): boolean;
				}
				export module ServerRequestGetAppConfig {
					export class IGetAppConfigEvents {
						public static class: java.lang.Class<io.branch.referral.validators.ServerRequestGetAppConfig.IGetAppConfigEvents>;
						/**
						 * Constructs a new instance of the io.branch.referral.validators.ServerRequestGetAppConfig$IGetAppConfigEvents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onAppConfigAvailable(param0: org.json.JSONObject): void });
						public constructor();
						public onAppConfigAvailable(param0: org.json.JSONObject): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module branch {
		export module referral {
			export module validators {
				export class URISchemeCheck extends io.branch.referral.validators.IntegrationValidatorCheck {
					public static class: java.lang.Class<io.branch.referral.validators.URISchemeCheck>;
					public constructor();
					public GetOutput(context: globalAndroid.content.Context, didTestSucceed: boolean): string;
					public constructor(integrationModel: io.branch.referral.validators.BranchIntegrationModel, branchAppConfig: org.json.JSONObject);
					public RunTests(context: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

//Generics information:
//io.branch.referral.BranchAsyncTask:3
//io.branch.referral.BranchUrlBuilder:1
//io.branch.referral.QRCode.BranchQRCode.BranchQRCodeDataHandler:1
//io.branch.referral.QRCode.BranchQRCode.BranchQRCodeImageHandler:1
//io.branch.referral.QRCode.BranchQRCode.BranchQRCodeRequestHandler:1
