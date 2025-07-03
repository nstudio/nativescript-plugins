export type EventType = 'AchieveLevel' | 'AddPaymentInfo' | 'AddToCart' | 'AddToWishlist' | 'ClickAd' | 'CompleteRegistration' | 'CompleteStream' | 'CompleteTutorial' | 'Custom' | 'InitiatePurchase' | 'InitiateStream' | 'Invite' | 'Login' | 'OptIn' | 'OptOut' | 'Purchase' | 'Rate' | 'Reserve' | 'Search' | 'Share' | 'SpendCredits' | 'StartTrial' | 'Subscribe' | 'UnlockAchievement' | 'ViewAd' | 'ViewCart' | 'ViewItem' | 'ViewItems';

export type CurrencyCode =
	| 'AED'
	| 'AFN'
	| 'USD'
	| 'ALL'
	| 'AMD'
	| 'ANG'
	| 'AOA'
	| 'ARS'
	| 'AUD'
	| 'AWG'
	| 'AZN'
	| 'BAM'
	| 'BBD'
	| 'BDT'
	| 'BGN'
	| 'BHD'
	| 'BIF'
	| 'BMD'
	| 'BND'
	| 'BOB'
	| 'BOV'
	| 'BRL'
	| 'BSD'
	| 'BTN'
	| 'BWP'
	| 'BYN'
	| 'BYR'
	| 'CAD'
	| 'CDF'
	| 'CHE'
	| 'CHF'
	| 'CHW'
	| 'CLF'
	| 'CLP'
	| 'CNY'
	| 'COP'
	| 'COU'
	| 'CRC'
	| 'CUC'
	| 'CUP'
	| 'CVE'
	| 'CZK'
	| 'DJF'
	| 'DKK'
	| 'DOP'
	| 'DZD'
	| 'EGP'
	| 'ERN'
	| 'ETB'
	| 'EUR'
	| 'FJD'
	| 'FKP'
	| 'GBP'
	| 'GEL'
	| 'GHS'
	| 'GIP'
	| 'GMD'
	| 'GNF'
	| 'GTQ'
	| 'GYD'
	| 'HKD'
	| 'HNL'
	| 'HRK'
	| 'HTG'
	| 'HUF'
	| 'IDR'
	| 'ILS'
	| 'INR'
	| 'IQD'
	| 'IRR'
	| 'ISK'
	| 'JMD'
	| 'JOD'
	| 'JPY'
	| 'KES'
	| 'KGS'
	| 'KHR'
	| 'KMF'
	| 'KPW'
	| 'KRW'
	| 'KWD'
	| 'KYD'
	| 'KZT'
	| 'LAK'
	| 'LBP'
	| 'LKR'
	| 'LRD'
	| 'LSL'
	| 'LYD'
	| 'MAD'
	| 'MDL'
	| 'MGA'
	| 'MKD'
	| 'MNT'
	| 'MOP'
	| 'MRO'
	| 'MUR'
	| 'MVR'
	| 'MWK'
	| 'MXN'
	| 'MXV'
	| 'MYR'
	| 'MZN'
	| 'NAD'
	| 'NGN'
	| 'NIO'
	| 'NOK'
	| 'NPR'
	| 'NZD'
	| 'OMR'
	| 'PAB'
	| 'PEN'
	| 'PGK'
	| 'PHP'
	| 'PKR'
	| 'PLN'
	| 'PYG'
	| 'QAR'
	| 'RON'
	| 'RSD'
	| 'RUB'
	| 'RWF'
	| 'SAR'
	| 'SBD'
	| 'SCR'
	| 'SDG'
	| 'SEK'
	| 'SGD'
	| 'SHP'
	| 'SLL'
	| 'SOS'
	| 'SRD'
	| 'SSP'
	| 'STD'
	| 'SYP'
	| 'SZL'
	| 'THB'
	| 'TJS'
	| 'TMT'
	| 'TND'
	| 'TOP'
	| 'TRY'
	| 'TTD'
	| 'TWD'
	| 'TZS'
	| 'UAH'
	| 'UGX'
	| 'USN'
	| 'UYI'
	| 'UYU'
	| 'UZS'
	| 'VEF'
	| 'VND'
	| 'VUV'
	| 'WST'
	| 'XAF'
	| 'XAG'
	| 'XAU'
	| 'XBA'
	| 'XBB'
	| 'XBC'
	| 'XBD'
	| 'XCD'
	| 'XDR'
	| 'XFU'
	| 'XOF'
	| 'XPD'
	| 'XPF'
	| 'XPT'
	| 'XSU'
	| 'XTS'
	| 'XUA'
	| 'XXX'
	| 'YER'
	| 'ZAR'
	| 'ZMW';

export type ProductCategory = 'AnimalSupplies' | 'Apparel' | 'ArtsEntertainment' | 'BabyToddler' | 'BusinessIndustrial' | 'CamerasOptics' | 'Electronics' | 'FoodBeverageTobacco' | 'Furniture' | 'Hardware' | 'HealthBeauty' | 'HomeGarden' | 'LuggageBags' | 'Mature' | 'Media' | 'OfficeSupplies' | 'Religious' | 'Software' | 'SportingGoods' | 'ToysGames' | 'VehiclesParts';

export class LinkProperties {
	readonly native;

	alias: string;

	campaign: string;

	channel: string;

	controlParams: Record<any, any>;

	feature: string;

	matchDuration: number;

	stage: string;

	tags: Array<any>;

	addControlParamWithValue(controlParam: string, value: string): void;

	addControlParam(key: string, value: string): void {
		this.native.addControlParamWithValue(key, value);
	}
}

export class ContentMetadata {
	constructor();
	readonly native;

	addressCity: string;

	addressCountry: string;

	addressPostalCode: string;

	addressRegion: string;

	addressStreet: string;

	condition: string;

	contentSchema: string;

	currency: string;

	customMetadata: Record<string, string>;

	imageCaptions: Array<string>;

	latitude: number;

	longitude: number;

	price: number;

	productBrand: string;

	productCategory: ProductCategory;

	productName: string;

	productVariant: string;

	quantity: number;

	rating: number;

	ratingAverage: number;

	ratingCount: number;

	ratingMax: number;

	sku: string;

	static fromNative(native: BranchContentMetadata): ContentMetadata {
		return new ContentMetadata(native);
	}
}

export class UniversalObject {
	constructor();

	readonly native;

	share(linkProperties: LinkProperties, shareText: string): Promise<{ channel: string | null; completed: boolean }>;

	automaticallyListOnSpotlight: boolean;

	canonicalIdentifier: string;

	canonicalUrl: string;

	contentDescription: string;

	contentIndexMode: 'private' | 'public';

	contentMetadata: ContentMetadata;

	creationDate: Date;

	currency: string;

	expirationDate: Date;

	imageUrl: string;

	keywords: Array<string>;

	locallyIndex: boolean;

	metadata: Record<any, any>;

	price: number;

	publiclyIndex: boolean;

	spotlightIdentifier: string;

	title: string;

	type: string;
}

export class Event {
	constructor(event: BranchEvent | null, customName: string | null);

	logEvent(): Promise<boolean>;

	readonly native;

	adType: 'banner' | 'interstitial' | 'rewarded' | 'native' | 'none';

	affiliation: string;

	alias: string;

	contentItems: Array<UniversalObject>;

	coupon: string;

	currency: string;

	customData: Record<string, string>;

	eventDescription: string;

	revenue: number;

	searchQuery: string;

	shipping: number;

	tax: number;

	transactionID: string;
}

export class QRCode {
	constructor();

	readonly native;

	backgroundColor: Color | string;

	centerLogo: string;

	codeColor: Color | string;

	imageFormat: 'png' | 'jpeg';

	margin: number;

	width: number;

	getQrCode(options: { asData?: boolean; uo: UniversalObject; lp: LinkProperties }): Promise<ImageSource | ArrayBuffer>;

	showSheet(options: { anchor: View; uo: UniversalObject; lp: LinkProperties }): Promise<void>;
}

export class BranchIO {
	readonly native: any;

	static init();

	static getInstance(): BranchIO;

	static get disableTracking(): boolean;

	static set disableTracking(value: boolean);

	static continueUserActivity(userActivity: NSUserActivity): boolean;

	static openURL(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	static useTestInstance(): this;

	static enableLogging();

	static disableLogging();

	static setBranchKey(key: string);

	static setAPIUrl(url: string): void {
		io.branch.referral.Branch.setAPIUrl(url);
	}

	initSession(
		options: {
			ios?: {
				launchOptions?: NSDictionary<string, any> | null;
				isReferrable?: boolean;
				explicitlyRequestedReferrable?: boolean;
				automaticallyDisplayController?: boolean;
			};
			android?: {
				data: android.net.Uri | null;
				reInit?: boolean;
			};
		},
		callback: (
			response: {
				linkProperties?: LinkProperties;
				universalObject?: UniversalObject;
			},
			error
		) => void
	): void;

	setRequestMetadata(key: string, value: string);

	clearPartnerParameters();

	addFacebookPartnerParameter(key: string, value: string);

	addSnapPartnerParameter(key: string, value: string);

	getLatestReferringParams(sync: boolean = false): Record<any, any> | null;

	getFirstReferringParams(): Record<any, any> | null;

	lastAttributedTouchData(id: number): Promise<Record<any, any>>;

	setIdentity(identity: string): void;

	logout(): Promise<boolean>;

	logoutSync(): void;
}
