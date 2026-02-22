export enum LogLevel {
	None = 0,
	Info = 1,
	Warning = 2,
	Debug = 3,
}

export const enum StandardEvent {
	AchieveLevel = 'achieveLevel',
	AddPaymentInfo = 'addPaymentInfo',
	AddToCart = 'addToCart',
	AddToWishlist = 'addToWishlist',
	AdRevenue = 'adRevenue',
	Checkout = 'checkout',
	CompleteTutorial = 'completeTutorial',
	CreateGroup = 'createGroup',
	CreateRole = 'createRole',
	GenerateLead = 'generateLead',
	ImpressionLevelAdRevenue = 'impressionLevelAdRevenue',
	InAppADClick = 'inAppADClick',
	InAppADImpr = 'inAppADImpr',
	InstallApp = 'installApp',
	JoinGroup = 'joinGroup',
	LaunchAPP = 'launchAPP',
	Login = 'login',
	Purchase = 'purchase',
	Rate = 'rate',
	Registration = 'registration',
	Search = 'search',
	SpendCredits = 'spendCredits',
	StartTrial = 'startTrial',
	Subscribe = 'subscribe',
	UnlockAchievement = 'unlockAchievement',
	ViewContent = 'viewContent',
}

type BasicEvent = Omit<StandardEvent, 'addToCart' | 'addToWishlist' | 'checkout' | 'purchase' | 'viewContent' | 'impressionLevelAdRevenue'>;

export interface IEvent {
	type: BasicEvent | `${BasicEvent}`;
	[key: string]: unknown;
}

interface ContentEvent extends IEvent {
	content_type: string;
	content_id: string;
	description: string;
	currency: string;
	value: string;
}

export interface AddToCartEvent extends ContentEvent {
	type: StandardEvent.AddToCart | `${StandardEvent.AddToCart}`;
}

export interface AddToWishlistEvent extends ContentEvent {
	type: StandardEvent.AddToWishlist | `${StandardEvent.AddToWishlist}`;
}

export interface CheckoutEvent extends ContentEvent {
	type: StandardEvent.Checkout | `${StandardEvent.Checkout}`;
}

export interface PurchaseEvent extends ContentEvent {
	type: StandardEvent.Purchase | `${StandardEvent.Purchase}`;
}

export interface ViewContentEvent extends ContentEvent {
	type: StandardEvent.ViewContent | `${StandardEvent.ViewContent}`;
}

export interface IImpressionLevelAdRevenueEvent extends IEvent {
	type: StandardEvent.ImpressionLevelAdRevenue | `${StandardEvent.ImpressionLevelAdRevenue}`;
	revenue: string;
	placement: string;
	device_ad_mediation_platform: 'applovin_max_sdk' | 'ironsource_sdk' | 'admob_sdk';
}

export interface MaxImpressionLevelAdRevenueEvent extends IImpressionLevelAdRevenueEvent {
	revenue: string;
	network_name: string;
	ad_unit_id: string;
	ad_format: string;
	placement: string;
	network_placement: string;
	device_ad_mediation_platform: 'applovin_max_sdk';
}

export interface IronSourceImpressionLevelAdRevenueEvent extends IImpressionLevelAdRevenueEvent {
	auction_id: string;
	ad_unit: string;
	instance_name: string;
	instance_id: string;
	country: string;
	ab: string;
	segment_name: string;
	lifetime_revenue: string;
	encrypted_cpm: string;
	device_ad_mediation_platform: 'ironsource_sdk';
}

export interface AdMobImpressionLevelAdRevenueEvent extends IImpressionLevelAdRevenueEvent {
	value: string;
	currency_code: string;
	precision: string;
	ad_unit_id: string;
	ad_source_name: string;
	ad_source_id: string;
	ad_source_instance_name: string;
	ad_source_instance_id: string;
	mediation_group_name: string;
	mediation_ab_test_name: string;
	mediation_ab_test_variant: string;
	ad_format: 'banner' | 'interstitial' | 'rewarded' | 'rewarded interstitial' | 'native' | 'splash';
	device_ad_mediation_platform: 'admob_sdk';
}

export type ImpressionLevelAdRevenueEventMap = {
	applovin_max_sdk: MaxImpressionLevelAdRevenueEvent;
	ironsource_sdk: IronSourceImpressionLevelAdRevenueEvent;
	admob_sdk: AdMobImpressionLevelAdRevenueEvent;
};

export type DistributeImpressionEvents<T extends keyof ImpressionLevelAdRevenueEventMap> = {
	[K in T]: ImpressionLevelAdRevenueEventMap[K];
}[T];

export type Events = IEvent | AddToCartEvent | AddToWishlistEvent | CheckoutEvent | PurchaseEvent | ViewContentEvent | DistributeImpressionEvents<keyof ImpressionLevelAdRevenueEventMap>;

export class Config {
	constructor(accessToken: string, appId: string, tiktokAppId: string | string[]);

	paymentTracking: boolean;

	debugMode: boolean;

	setFlushTimeInterval(seconds: number): this;

	autoTracking: boolean;

	launchTracking: boolean;

	disableAutoEnhancedDataPostbackEvent(): this;

	retentionTracking: boolean;

	installTracking: boolean;

	setIsLowPerformanceDevice(isLowPerformanceDevice: boolean): this;

	setLogLevel(level: LogLevel): this;
}
export class BusinessSdk {
	static initialize(config: Config): Promise<BusinessSdk>;

	static startTrack(): void;

	static identify(externalId: string, externalUserName: string, email: string, phoneNumber: string): void;

	static logout(): void;

	static flush(): void;

	static fetchDeferredDeepLinkData(): Promise<string>;

	static trackEvent(options: { eventName: string; eventId?: string; event?: Events }): void;
}
