declare var TTAccumulatedSKANValuesKey: string;

declare var TTCurrencyAED: string;

declare var TTCurrencyARS: string;

declare var TTCurrencyAUD: string;

declare var TTCurrencyBDT: string;

declare var TTCurrencyBGN: string;

declare var TTCurrencyBHD: string;

declare var TTCurrencyBIF: string;

declare var TTCurrencyBOB: string;

declare var TTCurrencyBRL: string;

declare var TTCurrencyCAD: string;

declare var TTCurrencyCHF: string;

declare var TTCurrencyCLP: string;

declare var TTCurrencyCNY: string;

declare var TTCurrencyCOP: string;

declare var TTCurrencyCRC: string;

declare var TTCurrencyCZK: string;

declare var TTCurrencyDKK: string;

declare var TTCurrencyDZD: string;

declare var TTCurrencyEGP: string;

declare var TTCurrencyEUR: string;

declare var TTCurrencyGBP: string;

declare var TTCurrencyGTQ: string;

declare var TTCurrencyHKD: string;

declare var TTCurrencyHNL: string;

declare var TTCurrencyHUF: string;

declare var TTCurrencyIDR: string;

declare var TTCurrencyILS: string;

declare var TTCurrencyINR: string;

declare var TTCurrencyIQD: string;

declare var TTCurrencyISK: string;

declare var TTCurrencyJOD: string;

declare var TTCurrencyJPY: string;

declare var TTCurrencyKES: string;

declare var TTCurrencyKHR: string;

declare var TTCurrencyKRW: string;

declare var TTCurrencyKWD: string;

declare var TTCurrencyKZT: string;

declare var TTCurrencyLBP: string;

declare var TTCurrencyMAD: string;

declare var TTCurrencyMOP: string;

declare var TTCurrencyMXN: string;

declare var TTCurrencyMYR: string;

declare var TTCurrencyNGN: string;

declare var TTCurrencyNIO: string;

declare var TTCurrencyNOK: string;

declare var TTCurrencyNZD: string;

declare var TTCurrencyOMR: string;

declare var TTCurrencyPEN: string;

declare var TTCurrencyPHP: string;

declare var TTCurrencyPKR: string;

declare var TTCurrencyPLN: string;

declare var TTCurrencyPYG: string;

declare var TTCurrencyQAR: string;

declare var TTCurrencyRON: string;

declare var TTCurrencyRUB: string;

declare var TTCurrencySAR: string;

declare var TTCurrencySEK: string;

declare var TTCurrencySGD: string;

declare var TTCurrencyTHB: string;

declare var TTCurrencyTRY: string;

declare var TTCurrencyTWD: string;

declare var TTCurrencyTZS: string;

declare var TTCurrencyUAH: string;

declare var TTCurrencyUSD: string;

declare var TTCurrencyVES: string;

declare var TTCurrencyVND: string;

declare var TTCurrencyZAR: string;

declare var TTEventNameAchieveLevel: string;

declare var TTEventNameAddPaymentInfo: string;

declare var TTEventNameCompleteTutorial: string;

declare var TTEventNameCreateGroup: string;

declare var TTEventNameCreateRole: string;

declare var TTEventNameGenerateLead: string;

declare var TTEventNameImpressionLevelAdRevenue: string;

declare var TTEventNameInAppADClick: string;

declare var TTEventNameInAppADImpr: string;

declare var TTEventNameInstallApp: string;

declare var TTEventNameJoinGroup: string;

declare var TTEventNameLaunchAPP: string;

declare var TTEventNameLoanApplication: string;

declare var TTEventNameLoanApproval: string;

declare var TTEventNameLoanDisbursal: string;

declare var TTEventNameLogin: string;

declare var TTEventNameRate: string;

declare var TTEventNameRegistration: string;

declare var TTEventNameSearch: string;

declare var TTEventNameSpendCredits: string;

declare var TTEventNameStartTrial: string;

declare var TTEventNameSubscribe: string;

declare var TTEventNameUnlockAchievement: string;

declare var TTLatestCoarseValueKey: string;

declare var TTLatestFineValueKey: string;

declare var TTSKANTimeWindowKey: string;

declare class TikTokAdRevenueEvent extends TikTokBaseEvent {
	static alloc(): TikTokAdRevenueEvent; // inherited from NSObject

	static eventWithName(eventName: string): TikTokAdRevenueEvent; // inherited from TikTokBaseEvent

	static new(): TikTokAdRevenueEvent; // inherited from NSObject

	constructor(o: { adRevenue: NSDictionary<any, any>; eventId: string });

	initWithAdRevenueEventId(adRevenue: NSDictionary<any, any>, eventId: string): this;
}

declare class TikTokAddToCartEvent extends TikTokContentsEvent {
	static alloc(): TikTokAddToCartEvent; // inherited from NSObject

	static eventWithName(eventName: string): TikTokAddToCartEvent; // inherited from TikTokBaseEvent

	static new(): TikTokAddToCartEvent; // inherited from NSObject

	constructor(o: { eventId: string });

	initWithEventId(eventId: string): this;
}

declare class TikTokAddToWishlistEvent extends TikTokContentsEvent {
	static alloc(): TikTokAddToWishlistEvent; // inherited from NSObject

	static eventWithName(eventName: string): TikTokAddToWishlistEvent; // inherited from TikTokBaseEvent

	static new(): TikTokAddToWishlistEvent; // inherited from NSObject

	constructor(o: { eventId: string });

	initWithEventId(eventId: string): this;
}

declare class TikTokBaseEvent extends NSObject {
	static alloc(): TikTokBaseEvent; // inherited from NSObject

	static eventWithName(eventName: string): TikTokBaseEvent;

	static new(): TikTokBaseEvent; // inherited from NSObject

	eventId: string;

	eventName: string;

	properties: NSDictionary<any, any>;

	constructor(o: { eventName: string });

	constructor(o: { eventName: string; eventId: string });

	constructor(o: { eventName: string; properties: NSDictionary<any, any>; eventId: string });

	addPropertyWithKeyValue(key: string, value: any): this;

	initWithEventName(eventName: string): this;

	initWithEventNameEventId(eventName: string, eventId: string): this;

	initWithEventNamePropertiesEventId(eventName: string, properties: NSDictionary<any, any>, eventId: string): this;
}

declare class TikTokBusiness extends NSObject {
	static alloc(): TikTokBusiness; // inherited from NSObject

	static appInBackground(): boolean;

	static appInForeground(): boolean;

	static appIsInactive(): boolean;

	static explicitlyFlush(): void;

	static fetchDeferredDeeplinkWithCompletion(completion: (p1: NSURL, p2: NSError) => void): void;

	static getInstance(): TikTokBusiness;

	static getSDKVersion(): string;

	static getTestEventCode(): string;

	static identifyWithExternalIDExternalUserNamePhoneNumberEmail(externalID: string, externalUserName: string, phoneNumber: string, email: string): void;

	static idfa(): string;

	static initializeSdk(tiktokConfig: TikTokConfig): void;

	static initializeSdkCompletionHandler(tiktokConfig: TikTokConfig, completionHandler: (p1: boolean, p2: NSError) => void): void;

	static isDebugMode(): boolean;

	static isInitialized(): boolean;

	static isLDUMode(): boolean;

	static isTrackingEnabled(): boolean;

	static isUserTrackingEnabled(): boolean;

	static logout(): void;

	static new(): TikTokBusiness; // inherited from NSObject

	static paramForApmConfig(noti: NSNotification): void;

	static produceFatalError(): void;

	static requestTrackingAuthorizationWithCompletionHandler(completion: (p1: number) => void): void;

	static resetInstance(): void;

	static setCustomUserAgent(customUserAgent: string): void;

	static setTrackingEnabled(enabled: boolean): void;

	static trackEvent(eventName: string): void;

	static trackEventWithId(eventName: string, eventId: string): void;

	static trackEventWithProperties(eventName: string, properties: NSDictionary<any, any>): void;

	static trackEventWithType(eventName: string, type: string): void;

	static trackTTEvent(event: TikTokBaseEvent): void;

	static updateAccessToken(accessToken: string): void;

	accessToken: string;

	anonymousID: string;

	readonly isDebugMode: boolean;

	isGlobalConfigFetched: boolean;

	isRemoteSwitchOn: boolean;

	userTrackingEnabled: boolean;
}

declare class TikTokBusinessSDKAddress extends NSObject {
	static alloc(): TikTokBusinessSDKAddress; // inherited from NSObject

	static beginAddress(): number;

	static endAddress(): number;

	static new(): TikTokBusinessSDKAddress; // inherited from NSObject
}

declare var TikTokBusinessSDKVersionNumber: number;

declare var TikTokBusinessSDKVersionString: interop.Reference<number>;

declare class TikTokCheckoutEvent extends TikTokContentsEvent {
	static alloc(): TikTokCheckoutEvent; // inherited from NSObject

	static eventWithName(eventName: string): TikTokCheckoutEvent; // inherited from TikTokBaseEvent

	static new(): TikTokCheckoutEvent; // inherited from NSObject

	constructor(o: { eventId: string });

	initWithEventId(eventId: string): this;
}

declare class TikTokConfig extends NSObject {
	static alloc(): TikTokConfig; // inherited from NSObject

	static configWithAccessTokenAppIdTiktokAppId(accessToken: string, appId: string, tiktokAppId: string): TikTokConfig;

	static new(): TikTokConfig; // inherited from NSObject

	LDUModeEnabled: boolean;

	SKAdNetworkSupportEnabled: boolean;

	readonly accessToken: string;

	readonly appId: string;

	appTrackingDialogSuppressed: boolean;

	autoEDPEventEnabled: boolean;

	automaticTrackingEnabled: boolean;

	debugModeEnabled: boolean;

	initialFlushDelay: number;

	installTrackingEnabled: boolean;

	isLowPerf: boolean;

	launchTrackingEnabled: boolean;

	paymentTrackingStatus: TikTokPaymentTrackStatus;

	retentionTrackingEnabled: boolean;

	readonly tiktokAppId: string;

	trackingEnabled: boolean;

	constructor(o: { appId: string; tiktokAppId: string });

	disableAppTrackingDialog(): void;

	disableAutoEnhancedDataPostbackEvent(): void;

	disableAutomaticTracking(): void;

	disableInstallTracking(): void;

	disableLaunchTracking(): void;

	disablePaymentTracking(): void;

	disableRetentionTracking(): void;

	disableSKAdNetworkSupport(): void;

	disableTracking(): void;

	enableDebugMode(): void;

	enableLDUMode(): void;

	enablePaymentTracking(): void;

	initWithAppIdTiktokAppId(appId: string, tiktokAppId: string): this;

	setCustomUserAgent(customUserAgent: string): void;

	setDelayForATTUserAuthorizationInSeconds(seconds: number): void;

	setIsLowPerformanceDevice(isLow: boolean): void;

	setLogLevel(logLevel: TikTokLogLevel): void;
}

declare class TikTokConstants extends NSObject {
	static alloc(): TikTokConstants; // inherited from NSObject

	static new(): TikTokConstants; // inherited from NSObject
}

declare class TikTokContentParams extends NSObject {
	static alloc(): TikTokContentParams; // inherited from NSObject

	static new(): TikTokContentParams; // inherited from NSObject

	brand: string;

	contentCategory: string;

	contentId: string;

	contentName: string;

	price: number;

	quantity: number;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class TikTokContentsEvent extends TikTokBaseEvent {
	static alloc(): TikTokContentsEvent; // inherited from NSObject

	static eventWithName(eventName: string): TikTokContentsEvent; // inherited from TikTokBaseEvent

	static new(): TikTokContentsEvent; // inherited from NSObject

	setContentId(contentId: string): void;

	setContentType(contentType: string): void;

	setContents(contents: NSArray<TikTokContentParams> | TikTokContentParams[]): void;

	setCurrency(currency: string): void;

	setDescription(description: string): void;

	setValue(value: string): void;
}

declare class TikTokDeviceInfo extends NSObject {
	static alloc(): TikTokDeviceInfo; // inherited from NSObject

	static deviceInfo(): TikTokDeviceInfo;

	static new(): TikTokDeviceInfo; // inherited from NSObject

	appBuild: string;

	appId: string;

	appName: string;

	appNamespace: string;

	appVersion: string;

	clientSdk: string;

	deviceIdForAdvertisers: string;

	deviceName: string;

	devicePlatform: string;

	deviceVendorId: string;

	ipInfo: string;

	localeInfo: string;

	systemVersion: string;

	trackingEnabled: boolean;

	fallbackUserAgent(): string;

	getUserAgent(): string;

	updateIdentifier(): void;
}

declare const enum TikTokLogLevel {
	Verbose = 1,

	Debug = 2,

	Info = 3,

	Warn = 4,

	Error = 5,

	Assert = 6,

	Suppress = 7,
}

declare class TikTokLogger extends NSObject {
	static alloc(): TikTokLogger; // inherited from NSObject

	static new(): TikTokLogger; // inherited from NSObject

	lockLogLevel(): void;

	setLogLevel(logLevel: TikTokLogLevel): void;
}

declare const enum TikTokPaymentTrackStatus {
	default = 0,

	enabled = 1,

	disabled = 2,
}

declare class TikTokPurchaseEvent extends TikTokContentsEvent {
	static alloc(): TikTokPurchaseEvent; // inherited from NSObject

	static eventWithName(eventName: string): TikTokPurchaseEvent; // inherited from TikTokBaseEvent

	static new(): TikTokPurchaseEvent; // inherited from NSObject

	constructor(o: { eventId: string });

	initWithEventId(eventId: string): this;
}

declare class TikTokViewContentEvent extends TikTokContentsEvent {
	static alloc(): TikTokViewContentEvent; // inherited from NSObject

	static eventWithName(eventName: string): TikTokViewContentEvent; // inherited from TikTokBaseEvent

	static new(): TikTokViewContentEvent; // inherited from NSObject

	constructor(o: { eventId: string });

	initWithEventId(eventId: string): this;
}
