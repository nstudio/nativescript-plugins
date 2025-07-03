import { Color, ImageSource, Utils, View } from '@nativescript/core';
import { ProductCategory } from '.';

const native_ = Symbol('[[native]]');

export class LinkProperties {
	[native_]: BranchLinkProperties;
	static fromNative(native: BranchLinkProperties): LinkProperties {
		const instance = new LinkProperties();
		instance[native_] = native;
		return instance;
	}

	get native() {
		return this[native_];
	}

	get alias(): string {
		return this.native.alias;
	}

	set alias(value: string) {
		this.native.alias = value;
	}

	get campaign(): string {
		return this.native.campaign;
	}

	set campaign(value: string) {
		this.native.campaign = value;
	}

	get channel(): string {
		return this.native.channel;
	}

	set channel(value: string) {
		this.native.channel = value;
	}

	get controlParams(): Record<any, any> {
		const params = this.native.controlParams;
		if (!params) {
			return {};
		}
		return Utils.dataDeserialize(params);
	}

	set controlParams(value: Record<any, any>) {
		this.native.controlParams = Utils.dataSerialize(value);
	}

	get feature(): string {
		return this.native.feature;
	}

	set feature(value: string) {
		this.native.feature = value;
	}

	get matchDuration(): number {
		return this.native.matchDuration;
	}

	set matchDuration(value: number) {
		this.native.matchDuration = value;
	}

	get stage(): string {
		return this.native.stage;
	}

	set stage(value: string) {
		this.native.stage = value;
	}

	get tags(): Array<any> {
		return Utils.dataDeserialize(this.native.tags);
	}

	set tags(value: Array<any>) {
		this.native.tags = Utils.dataSerialize(value);
	}

	addControlParam(key: string, value: string): void {
		this.native.addControlParamWithValue(key, value);
	}
}

export class ContentMetadata {
	[native_]: BranchContentMetadata;

	constructor(metadata: BranchContentMetadata | null = null) {
		if (metadata) {
			this[native_] = metadata;
		} else {
			this[native_] = BranchContentMetadata.new();
		}
	}
	get native() {
		return this[native_];
	}

	get addressCity(): string {
		return this.native.addressCity;
	}

	set addressCity(value: string) {
		this.native.addressCity = value;
	}

	get addressCountry(): string {
		return this.native.addressCountry;
	}
	set addressCountry(value: string) {
		this.native.addressCountry = value;
	}

	get addressPostalCode(): string {
		return this.native.addressPostalCode;
	}
	set addressPostalCode(value: string) {
		this.native.addressPostalCode = value;
	}

	get addressRegion(): string {
		return this.native.addressRegion;
	}
	set addressRegion(value: string) {
		this.native.addressRegion = value;
	}

	get addressStreet(): string {
		return this.native.addressStreet;
	}
	set addressStreet(value: string) {
		this.native.addressStreet = value;
	}

	get condition(): string {
		return this.native.condition;
	}
	set condition(value: string) {
		this.native.condition = value;
	}

	get contentSchema(): string {
		return this.native.contentSchema;
	}
	set contentSchema(value: string) {
		this.native.contentSchema = value;
	}

	get currency(): string {
		return this.native.currency;
	}
	set currency(value: string) {
		this.native.currency = value;
	}

	get customMetadata(): Record<string, string> {
		return Utils.dataDeserialize(this.native.customMetadata);
	}
	set customMetadata(value: Record<string, string>) {
		this.native.customMetadata = Utils.dataSerialize(value);
	}

	get imageCaptions(): Array<string> {
		return Utils.dataDeserialize(this.native.imageCaptions);
	}
	set imageCaptions(value: Array<string>) {
		this.native.imageCaptions = Utils.dataSerialize(value);
	}

	get latitude(): number {
		return this.native.latitude;
	}
	set latitude(value: number) {
		this.native.latitude = value;
	}

	get longitude(): number {
		return this.native.longitude;
	}
	set longitude(value: number) {
		this.native.longitude = value;
	}

	get price(): number {
		return this.native.price.doubleValue;
	}
	set price(value: number) {
		this.native.price = NSDecimalNumber.decimalNumberWithDecimal(NSNumber.alloc().initWithDouble(value).decimalValue);
	}

	get productBrand(): string {
		return this.native.productBrand;
	}
	set productBrand(value: string) {
		this.native.productBrand = value;
	}

	get productCategory(): ProductCategory {
		switch (this.native.productCategory) {
			case BNCProductCategoryAnimalSupplies:
				return 'AnimalSupplies';
			case BNCProductCategoryApparel:
				return 'Apparel';
			case BNCProductCategoryArtsEntertainment:
				return 'ArtsEntertainment';
			case BNCProductCategoryBabyToddler:
				return 'BabyToddler';
			case BNCProductCategoryBusinessIndustrial:
				return 'BusinessIndustrial';
			case BNCProductCategoryCamerasOptics:
				return 'CamerasOptics';
			case BNCProductCategoryElectronics:
				return 'Electronics';
			case BNCProductCategoryFoodBeverageTobacco:
				return 'FoodBeverageTobacco';
			case BNCProductCategoryFurniture:
				return 'Furniture';
			case BNCProductCategoryHardware:
				return 'Hardware';
			case BNCProductCategoryHealthBeauty:
				return 'HealthBeauty';
			case BNCProductCategoryHomeGarden:
				return 'HomeGarden';
			case BNCProductCategoryLuggageBags:
				return 'LuggageBags';
			case BNCProductCategoryMature:
				return 'Mature';
			case BNCProductCategoryMedia:
				return 'Media';
			case BNCProductCategoryOfficeSupplies:
				return 'OfficeSupplies';
			case BNCProductCategoryReligious:
				return 'Religious';
			case BNCProductCategorySoftware:
				return 'Software';
			case BNCProductCategorySportingGoods:
				return 'SportingGoods';
			case BNCProductCategoryToysGames:
				return 'ToysGames';
			case BNCProductCategoryVehiclesParts:
				return 'VehiclesParts';
			default:
				return 'Unknown' as ProductCategory;
		}
	}

	set productCategory(value: ProductCategory) {
		if (typeof value === 'string') {
			switch (value) {
				case 'AnimalSupplies':
					this.native.productCategory = BNCProductCategoryAnimalSupplies;
					break;
				case 'Apparel':
					this.native.productCategory = BNCProductCategoryApparel;
					break;
				case 'ArtsEntertainment':
					this.native.productCategory = BNCProductCategoryArtsEntertainment;
					break;
				case 'BabyToddler':
					this.native.productCategory = BNCProductCategoryBabyToddler;
					break;
				case 'BusinessIndustrial':
					this.native.productCategory = BNCProductCategoryBusinessIndustrial;
					break;
				case 'CamerasOptics':
					this.native.productCategory = BNCProductCategoryCamerasOptics;
					break;
				case 'Electronics':
					this.native.productCategory = BNCProductCategoryElectronics;
					break;
				case 'FoodBeverageTobacco':
					this.native.productCategory = BNCProductCategoryFoodBeverageTobacco;
					break;
				case 'Furniture':
					this.native.productCategory = BNCProductCategoryFurniture;
					break;
				case 'Hardware':
					this.native.productCategory = BNCProductCategoryHardware;
					break;
				case 'HealthBeauty':
					this.native.productCategory = BNCProductCategoryHealthBeauty;
					break;
				case 'HomeGarden':
					this.native.productCategory = BNCProductCategoryHomeGarden;
					break;
				case 'LuggageBags':
					this.native.productCategory = BNCProductCategoryLuggageBags;
					break;
				case 'Mature':
					this.native.productCategory = BNCProductCategoryMature;
					break;
				case 'Media':
					this.native.productCategory = BNCProductCategoryMedia;
					break;
				case 'OfficeSupplies':
					this.native.productCategory = BNCProductCategoryOfficeSupplies;
					break;
				case 'Religious':
					this.native.productCategory = BNCProductCategoryReligious;
					break;
				case 'Software':
					this.native.productCategory = BNCProductCategorySoftware;
					break;
				case 'SportingGoods':
					this.native.productCategory = BNCProductCategorySportingGoods;
					break;
				case 'ToysGames':
					this.native.productCategory = BNCProductCategoryToysGames;
					break;
				case 'VehiclesParts':
					this.native.productCategory = BNCProductCategoryVehiclesParts;
					break;
				default:
					break;
			}
		}
	}
	get productName(): string {
		return this.native.productName;
	}
	set productName(value: string) {
		this.native.productName = value;
	}

	get productVariant(): string {
		return this.native.productVariant;
	}
	set productVariant(value: string) {
		this.native.productVariant = value;
	}

	get quantity(): number {
		return this.native.quantity;
	}
	set quantity(value: number) {
		this.native.quantity = value;
	}

	get rating(): number {
		return this.native.rating;
	}
	set rating(value: number) {
		this.native.rating = value;
	}

	get ratingAverage(): number {
		return this.native.ratingAverage;
	}
	set ratingAverage(value: number) {
		this.native.ratingAverage = value;
	}

	get ratingCount(): number {
		return this.native.ratingCount;
	}
	set ratingCount(value: number) {
		this.native.ratingCount = value;
	}

	get ratingMax(): number {
		return this.native.ratingMax;
	}
	set ratingMax(value: number) {
		this.native.ratingMax = value;
	}

	get sku(): string {
		return this.native.sku;
	}
	set sku(value: string) {
		this.native.sku = value;
	}

	static fromNative(native: BranchContentMetadata): ContentMetadata {
		return new ContentMetadata(native);
	}
}

export class UniversalObject {
	[native_]: BranchUniversalObject;
	constructor(link: BranchUniversalObject | null = null) {
		if (link) {
			this[native_] = link;
		} else {
			this[native_] = BranchUniversalObject.new();
		}
		this[native_];
	}

	static fromNative(native: BranchUniversalObject): UniversalObject {
		return new UniversalObject(native);
	}

	get native() {
		return this[native_];
	}

	share(linkProperties: LinkProperties, shareText: string) {
		return new Promise((resolve, reject) => {
			this.native.showShareSheetWithLinkPropertiesAndShareTextFromViewControllerCompletionWithError(linkProperties.native, shareText, Utils.ios.getRootViewController(), (activityType, done: boolean, error: NSError) => {
				if (error) {
					reject(error);
				} else {
					resolve({
						channel: activityType ?? null,
						completed: done,
					});
				}
			});
		});
	}

	get automaticallyListOnSpotlight() {
		return this.native.automaticallyListOnSpotlight;
	}
	set automaticallyListOnSpotlight(value: boolean) {
		this.native.automaticallyListOnSpotlight = value;
	}

	get canonicalIdentifier() {
		return this.native.canonicalIdentifier;
	}
	set canonicalIdentifier(value: string) {
		this.native.canonicalIdentifier = value;
	}

	get canonicalUrl(): string {
		return this.native.canonicalUrl;
	}
	set canonicalUrl(value: string) {
		this.native.canonicalUrl = value;
	}

	get contentDescription(): string {
		return this.native.contentDescription;
	}

	set contentDescription(value: string) {
		this.native.contentDescription = value;
	}

	get contentIndexMode() {
		switch (this.native.contentIndexMode) {
			case BranchContentIndexMode.Public:
				return 'public';
			case BranchContentIndexMode.Private:
				return 'private';
		}
	}

	set contentIndexMode(value: 'public' | 'private') {
		switch (value) {
			case 'public':
				this.native.contentIndexMode = BranchContentIndexMode.Public;
				break;
			case 'private':
				this.native.contentIndexMode = BranchContentIndexMode.Private;
				break;
		}
	}

	get contentMetadata() {
		return ContentMetadata.fromNative(this.native.contentMetadata);
	}

	set contentMetadata(value: ContentMetadata) {
		this.native.contentMetadata = value[native_];
	}

	get creationDate(): Date {
		return this.native.creationDate;
	}

	set creationDate(value: Date) {
		this.native.creationDate = value;
	}

	get currency(): string {
		return this.native.currency;
	}

	set currency(value: string) {
		this.native.currency = value;
	}

	get expirationDate(): Date {
		return this.native.expirationDate;
	}

	set expirationDate(value: Date) {
		this.native.expirationDate = value;
	}

	get imageUrl(): string {
		return this.native.imageUrl;
	}

	set imageUrl(value: string) {
		this.native.imageUrl = value;
	}

	get keywords(): Array<string> {
		return Utils.dataDeserialize(this.native.keywords);
	}

	get locallyIndex(): boolean {
		return this.native.locallyIndex;
	}

	set locallyIndex(value: boolean) {
		this.native.locallyIndex = value;
	}

	get metadata(): Record<any, any> {
		const metadata = this.native.metadata;
		if (!metadata) {
			return {};
		}
		return Utils.dataDeserialize(metadata);
	}

	get price(): number {
		return this.native.price;
	}

	set price(value: number) {
		this.native.price = value;
	}

	get publiclyIndex(): boolean {
		return this.native.publiclyIndex;
	}
	set publiclyIndex(value: boolean) {
		this.native.publiclyIndex = value;
	}

	get spotlightIdentifier(): string {
		return this.native.spotlightIdentifier;
	}

	set spotlightIdentifier(value: string) {
		this.native.spotlightIdentifier = value;
	}

	get title(): string {
		return this.native.title;
	}

	set title(value: string) {
		this.native.title = value;
	}

	get type(): string {
		return this.native.type;
	}

	set type(value: string) {
		this.native.type = value;
	}
}

export class Event {
	[native_]: BranchEvent;
	constructor(event: BranchEvent | null = null) {
		if (event) {
			this[native_] = event;
		} else {
			this[native_] = BranchEvent.new();
		}
	}
	static fromNative(native: BranchEvent): Event {
		return new Event(native);
	}

	logEvent() {
		return new Promise((resolve, reject) => {
			this.native.logEventWithCompletion((done: boolean, error: NSError) => {
				if (error) {
					reject(error);
				} else {
					resolve(done);
				}
			});
		});
	}

	get native() {
		return this[native_];
	}

	get adType() {
		switch (this.native.adType) {
			case BranchEventAdType.Banner:
				return 'banner';
			case BranchEventAdType.Interstitial:
				return 'interstitial';
			case BranchEventAdType.RewardedVideo:
				return 'rewarded';
			case BranchEventAdType.Native:
				return 'native';
			case BranchEventAdType.None:
				return 'none';
		}
	}

	set adType(value: 'banner' | 'interstitial' | 'rewarded' | 'native' | 'none') {
		switch (value) {
			case 'banner':
				this.native.adType = BranchEventAdType.Banner;
				break;
			case 'interstitial':
				this.native.adType = BranchEventAdType.Interstitial;
				break;
			case 'rewarded':
				this.native.adType = BranchEventAdType.RewardedVideo;
				break;
			case 'native':
				this.native.adType = BranchEventAdType.Native;
				break;
			case 'none':
				this.native.adType = BranchEventAdType.None;
				break;
		}
	}

	get affiliation() {
		return this.native.affiliation;
	}

	set affiliation(value: string) {
		this.native.affiliation = value;
	}

	get alias() {
		return this.native.alias;
	}

	set alias(value: string) {
		this.native.alias = value;
	}

	get contentItems(): Array<UniversalObject> {
		const items = this.native.contentItems;
		if (!items) {
			return [];
		}
		const count = items.count;
		const ret = new Array(count);
		for (let i = 0; i < count; i++) {
			const item = items.objectAtIndex(i);
			ret[i] = UniversalObject.fromNative(item);
		}
		return ret;
	}

	set contentItems(value: Array<UniversalObject>) {
		if (Array.isArray(value)) {
			const items = NSMutableArray.arrayWithCapacity(value.length);
			for (const item of value) {
				items.addObject(item[native_]);
			}
			this.native.contentItems = items;
		}
	}

	get coupon(): string {
		return this.native.coupon;
	}

	set coupon(value: string) {
		this.native.coupon = value;
	}

	get currency(): string {
		return this.native.currency;
	}

	set currency(value: string) {
		this.native.currency = value;
	}

	get customData(): Record<string, string> {
		return Utils.dataDeserialize(this.native.customData);
	}

	set customData(value: Record<string, string>) {
		this.native.customData = Utils.dataSerialize(value);
	}

	get revenue() {
		return this.native.revenue.doubleValue;
	}

	set revenue(value: number) {
		this.native.revenue = NSDecimalNumber.decimalNumberWithDecimal(NSNumber.alloc().initWithDouble(value).decimalValue);
	}

	get searchQuery(): string {
		return this.native.searchQuery;
	}

	set searchQuery(value: string) {
		this.native.searchQuery = value;
	}

	get shipping() {
		return this.native.shipping.doubleValue;
	}

	set shipping(value: number) {
		this.native.shipping = NSDecimalNumber.decimalNumberWithDecimal(NSNumber.alloc().initWithDouble(value).decimalValue);
	}

	get tax() {
		return this.native.tax.doubleValue;
	}

	set tax(value: number) {
		this.native.tax = NSDecimalNumber.decimalNumberWithDecimal(NSNumber.alloc().initWithDouble(value).decimalValue);
	}

	get transactionID() {
		return this.native.transactionID;
	}
	set transactionID(value: string) {
		this.native.transactionID = value;
	}
}

export class QRCode {
	[native_]: BranchQRCode;

	constructor(qrCode: BranchQRCode | null = null) {
		if (qrCode) {
			this[native_] = qrCode;
		} else {
			this[native_] = BranchQRCode.new();
		}
	}

	static fromNative(native: BranchQRCode): QRCode {
		return new QRCode(native);
	}

	get native() {
		return this[native_];
	}

	get backgroundColor() {
		return Color.fromIosColor(this.native.backgroundColor);
	}

	set backgroundColor(value: Color | string) {
		if (value instanceof Color) {
			this.native.backgroundColor = value.ios;
		} else {
			this.native.backgroundColor = new Color(value).ios;
		}
	}

	set centerLogo(value: string) {
		this.native.centerLogo = value;
	}

	get centerLogo(): string {
		return this.native.centerLogo;
	}

	get codeColor() {
		return Color.fromIosColor(this.native.codeColor);
	}

	set codeColor(value: Color | string) {
		if (value instanceof Color) {
			this.native.codeColor = value.ios;
		} else {
			this.native.codeColor = new Color(value).ios;
		}
	}

	get imageFormat() {
		switch (this.native.imageFormat) {
			case BranchQRCodeImageFormat.PNG:
				return 'png';
			case BranchQRCodeImageFormat.JPEG:
				return 'jpeg';
		}
	}

	set imageFormat(value: 'png' | 'jpeg') {
		switch (value) {
			case 'png':
				this.native.imageFormat = BranchQRCodeImageFormat.PNG;
				break;
			case 'jpeg':
				this.native.imageFormat = BranchQRCodeImageFormat.JPEG;
				break;
		}
	}

	get margin() {
		return this.native.margin;
	}
	set margin(value: number) {
		this.native.margin = value;
	}

	get width() {
		return this.native.width;
	}

	getQrCode(options: { asData?: boolean; uo: UniversalObject; lp: LinkProperties }) {
		return new Promise<ImageSource | ArrayBuffer>((resolve, reject) => {
			if (options.asData) {
				this.native.getQRCodeAsDataLinkPropertiesCompletion(options.uo.native, options.lp.native, (data: NSData, error: NSError) => {
					if (error) {
						reject(error);
					} else {
						resolve(interop.bufferFromData(data));
					}
				});
			} else {
				this.native.getQRCodeAsImageLinkPropertiesCompletion(options.uo.native, options.lp.native, (image: UIImage, error: NSError) => {
					if (error) {
						reject(error);
					} else {
						resolve(new ImageSource(image));
					}
				});
			}
		});
	}

	showSheet(options: { anchor: View; uo: UniversalObject; lp: LinkProperties }) {
		return new Promise<void>((resolve, reject) => {
			this.native.showShareSheetWithQRCodeFromViewControllerAnchorUniversalObjectLinkPropertiesCompletion(Utils.ios.getRootViewController(), options.anchor.nativeView, options.uo.native, options.lp.native, (error: NSError) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
}

export class BranchIO {
	[native_]: Branch;

	get native(): Branch {
		return this[native_];
	}

	private static instance: BranchIO | null = null;

	static init() {
		// noop
	}

	static fromNative(native: Branch): BranchIO {
		const instance = new BranchIO();
		instance[native_] = native;
		return instance;
	}

	static getInstance(): BranchIO {
		if (this.instance) {
			return this.instance;
		}
		const instance = BranchIO.fromNative(Branch.getInstance());
		this.instance = instance;
		return instance;
	}

	static get disableTracking(): boolean {
		return Branch.trackingDisabled();
	}

	static set disableTracking(value: boolean) {
		Branch.setTrackingDisabled(value);
	}

	static continueUserActivity(userActivity: NSUserActivity): boolean {
		return this.getInstance().native?.continueUserActivity?.(userActivity) ?? false;
	}

	static openURL(application: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
		return this.getInstance()?.native?.applicationOpenURLOptions?.(application, url, options ?? null) ?? false;
	}

	static useTestInstance() {
		Branch.setUseTestBranchKey(true);
		if (this.instance) {
			this.instance[native_] = Branch.getInstance();
		}
		return this;
	}

	static enableLogging() {
		Branch.enableLogging();
	}

	static disableLogging() {
		// todo
	}

	static setBranchKey(key: string) {
		Branch.setBranchKey(key);
	}

	static setAPIUrl(url: string): void {
		Branch.setAPIUrl(url);
	}

	initSession(
		options: {
			ios: {
				launchOptions?: NSDictionary<string, any> | null;
				isReferrable?: boolean;
				explicitlyRequestedReferrable?: boolean;
				automaticallyDisplayController?: boolean;
			};
		},
		callback: (
			response: {
				linkProperties?: LinkProperties;
				universalObject?: UniversalObject;
			},
			error
		) => void
	): void {
		this.native.initSceneSessionWithLaunchOptionsIsReferrableExplicitlyRequestedReferrableAutomaticallyDisplayControllerRegisterDeepLinkHandler(options.ios?.launchOptions ?? NSDictionary.new(), options.ios?.isReferrable ?? false, options.ios?.explicitlyRequestedReferrable ?? options.ios?.isReferrable ?? false, options.ios?.automaticallyDisplayController ?? false, (response, error) => {
			if (error) {
				callback(null, error);
				return;
			}
			if (response) {
				callback(
					{
						linkProperties: response.linkProperties ? LinkProperties.fromNative(response.linkProperties) : undefined,
						universalObject: response.universalObject ? UniversalObject.fromNative(response.universalObject) : undefined,
					},
					null
				);
			} else {
				console.warn('BranchIO initSession response is null');
			}
		});
	}

	setRequestMetadata(key: string, value: string) {
		this.native.setRequestMetadataKeyValue(key, value);
	}

	clearPartnerParameters() {
		this.native.clearPartnerParameters();
	}

	addFacebookPartnerParameter(key: string, value: string) {
		this.native.addFacebookPartnerParameterWithNameValue(key, value);
	}

	addSnapPartnerParameter(key: string, value: string) {
		this.native.addSnapPartnerParameterWithNameValue(key, value);
	}

	getLatestReferringParams(sync: boolean = false): Record<any, any> | null {
		let params: NSDictionary<any, any> | null = null;
		if (sync) {
			params = this.native.getLatestReferringParams();
		} else {
			params = this.native.getLatestReferringParamsSynchronous();
		}
		if (!params) {
			return Utils.dataDeserialize(params);
		}
		return null;
	}

	getFirstReferringParams(): Record<any, any> | null {
		const params = this.native.getFirstReferringParams();
		if (!params) {
			return null;
		}
		return Utils.dataDeserialize(params);
	}

	lastAttributedTouchData(id: number) {
		return new Promise<Record<any, any>>((resolve, reject) => {
			this.native.lastAttributedTouchDataWithAttributionWindowCompletion(id, (data, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(Utils.dataDeserialize(data.lastAttributedTouchJSON));
				}
			});
		});
	}

	setIdentity(identity: string): void {
		this.native.setIdentity(identity);
	}

	logout() {
		return new Promise((resolve, reject) => {
			this.native.logoutWithCallback((done: boolean, error: NSError) => {
				if (error) {
					reject(error);
				} else {
					resolve(done);
				}
			});
		});
	}

	logoutSync(): void {
		this.native.logout();
	}
}
