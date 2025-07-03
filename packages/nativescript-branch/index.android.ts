import { Application, Color, ImageSource, Utils, View } from '@nativescript/core';
import { EventType, CurrencyCode, ProductCategory } from '.';

const native_ = Symbol('[[native]]');
let didInit = false;

let dateFormat: java.text.SimpleDateFormat | undefined;
const fromISO8601UTC = function (date: string) {
	if (dateFormat === undefined) {
		dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS");
		dateFormat.setTimeZone(java.util.TimeZone.getTimeZone('UTC'));
	}
	return dateFormat.parse(date);
};

function getBranchEventType(event: EventType): io.branch.referral.util.BRANCH_STANDARD_EVENT {
	if (typeof event === 'string') {
		switch (event) {
			case 'AchieveLevel':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.ACHIEVE_LEVEL;
			case 'AddPaymentInfo':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.ADD_PAYMENT_INFO;
			case 'AddToCart':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.ADD_TO_CART;
			case 'AddToWishlist':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.ADD_TO_WISHLIST;
			case 'ClickAd':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.CLICK_AD;
			case 'CompleteRegistration':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.COMPLETE_REGISTRATION;
			case 'CompleteStream':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.COMPLETE_STREAM;
			case 'CompleteTutorial':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.COMPLETE_TUTORIAL;
			case 'InitiatePurchase':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.INITIATE_PURCHASE;
			case 'InitiateStream':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.INITIATE_STREAM;
			case 'Invite':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.INVITE;
			case 'Login':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.LOGIN;
			case 'OptIn':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.OPT_IN;
			case 'OptOut':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.OPT_OUT;
			case 'Purchase':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.PURCHASE;
			case 'Rate':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.RATE;
			case 'Reserve':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.RESERVE;
			case 'Search':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.SEARCH;
			case 'Share':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.SHARE;
			case 'SpendCredits':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.SPEND_CREDITS;
			case 'StartTrial':
				return io.branch.referral.util.BRANCH_STANDARD_EVENT.START_TRIAL;
		}
	}
}

function getCurrencyCode(currency: CurrencyCode): io.branch.referral.util.CurrencyType {
	switch (currency) {
		case 'AED':
			return io.branch.referral.util.CurrencyType.AED;
		case 'AFN':
			return io.branch.referral.util.CurrencyType.AFN;
		case 'USD':
			return io.branch.referral.util.CurrencyType.USD;
		case 'ALL':
			return io.branch.referral.util.CurrencyType.ALL;
		case 'AMD':
			return io.branch.referral.util.CurrencyType.AMD;
		case 'ANG':
			return io.branch.referral.util.CurrencyType.ANG;
		case 'AOA':
			return io.branch.referral.util.CurrencyType.AOA;
		case 'ARS':
			return io.branch.referral.util.CurrencyType.ARS;
		case 'AUD':
			return io.branch.referral.util.CurrencyType.AUD;
		case 'AWG':
			return io.branch.referral.util.CurrencyType.AWG;
		case 'AZN':
			return io.branch.referral.util.CurrencyType.AZN;
		case 'BAM':
			return io.branch.referral.util.CurrencyType.BAM;
		case 'BBD':
			return io.branch.referral.util.CurrencyType.BBD;
		case 'BDT':
			return io.branch.referral.util.CurrencyType.BDT;
		case 'BGN':
			return io.branch.referral.util.CurrencyType.BGN;
		case 'BHD':
			return io.branch.referral.util.CurrencyType.BHD;
		case 'BIF':
			return io.branch.referral.util.CurrencyType.BIF;
		case 'BMD':
			return io.branch.referral.util.CurrencyType.BMD;
		case 'BND':
			return io.branch.referral.util.CurrencyType.BND;
		case 'BOB':
			return io.branch.referral.util.CurrencyType.BOB;
		case 'BOV':
			return io.branch.referral.util.CurrencyType.BOV;
		case 'BRL':
			return io.branch.referral.util.CurrencyType.BRL;
		case 'BSD':
			return io.branch.referral.util.CurrencyType.BSD;
		case 'BTN':
			return io.branch.referral.util.CurrencyType.BTN;
		case 'BWP':
			return io.branch.referral.util.CurrencyType.BWP;
		case 'BYN':
			return io.branch.referral.util.CurrencyType.BYN;
		case 'BYR':
			return io.branch.referral.util.CurrencyType.BYR;
		case 'CAD':
			return io.branch.referral.util.CurrencyType.CAD;
		case 'CDF':
			return io.branch.referral.util.CurrencyType.CDF;
		case 'CHE':
			return io.branch.referral.util.CurrencyType.CHE;
		case 'CHF':
			return io.branch.referral.util.CurrencyType.CHF;
		case 'CHW':
			return io.branch.referral.util.CurrencyType.CHW;
		case 'CLF':
			return io.branch.referral.util.CurrencyType.CLF;
		case 'CLP':
			return io.branch.referral.util.CurrencyType.CLP;
		case 'CNY':
			return io.branch.referral.util.CurrencyType.CNY;
		case 'COP':
			return io.branch.referral.util.CurrencyType.COP;
		case 'COU':
			return io.branch.referral.util.CurrencyType.COU;
		case 'CRC':
			return io.branch.referral.util.CurrencyType.CRC;
		case 'CUC':
			return io.branch.referral.util.CurrencyType.CUC;
		case 'CUP':
			return io.branch.referral.util.CurrencyType.CUP;
		case 'CVE':
			return io.branch.referral.util.CurrencyType.CVE;
		case 'CZK':
			return io.branch.referral.util.CurrencyType.CZK;
		case 'DJF':
			return io.branch.referral.util.CurrencyType.DJF;
		case 'DKK':
			return io.branch.referral.util.CurrencyType.DKK;
		case 'DOP':
			return io.branch.referral.util.CurrencyType.DOP;
		case 'DZD':
			return io.branch.referral.util.CurrencyType.DZD;
		case 'EGP':
			return io.branch.referral.util.CurrencyType.EGP;
		case 'ERN':
			return io.branch.referral.util.CurrencyType.ERN;
		case 'ETB':
			return io.branch.referral.util.CurrencyType.ETB;
		case 'EUR':
			return io.branch.referral.util.CurrencyType.EUR;
		case 'FJD':
			return io.branch.referral.util.CurrencyType.FJD;
		case 'FKP':
			return io.branch.referral.util.CurrencyType.FKP;
		case 'GBP':
			return io.branch.referral.util.CurrencyType.GBP;
		case 'GEL':
			return io.branch.referral.util.CurrencyType.GEL;
		case 'GHS':
			return io.branch.referral.util.CurrencyType.GHS;
		case 'GIP':
			return io.branch.referral.util.CurrencyType.GIP;
		case 'GMD':
			return io.branch.referral.util.CurrencyType.GMD;
		case 'GNF':
			return io.branch.referral.util.CurrencyType.GNF;
		case 'GTQ':
			return io.branch.referral.util.CurrencyType.GTQ;
		case 'GYD':
			return io.branch.referral.util.CurrencyType.GYD;
		case 'HKD':
			return io.branch.referral.util.CurrencyType.HKD;
		case 'HNL':
			return io.branch.referral.util.CurrencyType.HNL;
		case 'HRK':
			return io.branch.referral.util.CurrencyType.HRK;
		case 'HTG':
			return io.branch.referral.util.CurrencyType.HTG;
		case 'HUF':
			return io.branch.referral.util.CurrencyType.HUF;
		case 'IDR':
			return io.branch.referral.util.CurrencyType.IDR;
		case 'ILS':
			return io.branch.referral.util.CurrencyType.ILS;
		case 'INR':
			return io.branch.referral.util.CurrencyType.INR;
		case 'IQD':
			return io.branch.referral.util.CurrencyType.IQD;
		case 'IRR':
			return io.branch.referral.util.CurrencyType.IRR;
		case 'ISK':
			return io.branch.referral.util.CurrencyType.ISK;
		case 'JMD':
			return io.branch.referral.util.CurrencyType.JMD;
		case 'JOD':
			return io.branch.referral.util.CurrencyType.JOD;
		case 'JPY':
			return io.branch.referral.util.CurrencyType.JPY;
		case 'KES':
			return io.branch.referral.util.CurrencyType.KES;
		case 'KGS':
			return io.branch.referral.util.CurrencyType.KGS;
		case 'KHR':
			return io.branch.referral.util.CurrencyType.KHR;
		case 'KMF':
			return io.branch.referral.util.CurrencyType.KMF;
		case 'KPW':
			return io.branch.referral.util.CurrencyType.KPW;
		case 'KRW':
			return io.branch.referral.util.CurrencyType.KRW;
		case 'KWD':
			return io.branch.referral.util.CurrencyType.KWD;
		case 'KYD':
			return io.branch.referral.util.CurrencyType.KYD;
		case 'KZT':
			return io.branch.referral.util.CurrencyType.KZT;
		case 'LAK':
			return io.branch.referral.util.CurrencyType.LAK;
		case 'LBP':
			return io.branch.referral.util.CurrencyType.LBP;
		case 'LKR':
			return io.branch.referral.util.CurrencyType.LKR;
		case 'LRD':
			return io.branch.referral.util.CurrencyType.LRD;
		case 'LSL':
			return io.branch.referral.util.CurrencyType.LSL;
		case 'LYD':
			return io.branch.referral.util.CurrencyType.LYD;
		case 'MAD':
			return io.branch.referral.util.CurrencyType.MAD;
		case 'MDL':
			return io.branch.referral.util.CurrencyType.MDL;
		case 'MGA':
			return io.branch.referral.util.CurrencyType.MGA;
		case 'MKD':
			return io.branch.referral.util.CurrencyType.MKD;
		case 'MNT':
			return io.branch.referral.util.CurrencyType.MNT;
		case 'MOP':
			return io.branch.referral.util.CurrencyType.MOP;
		case 'MRO':
			return io.branch.referral.util.CurrencyType.MRO;
		case 'MUR':
			return io.branch.referral.util.CurrencyType.MUR;
		case 'MVR':
			return io.branch.referral.util.CurrencyType.MVR;
		case 'MWK':
			return io.branch.referral.util.CurrencyType.MWK;
		case 'MXN':
			return io.branch.referral.util.CurrencyType.MXN;
		case 'MXV':
			return io.branch.referral.util.CurrencyType.MXV;
		case 'MYR':
			return io.branch.referral.util.CurrencyType.MYR;
		case 'MZN':
			return io.branch.referral.util.CurrencyType.MZN;
		case 'NAD':
			return io.branch.referral.util.CurrencyType.NAD;
		case 'NGN':
			return io.branch.referral.util.CurrencyType.NGN;
		case 'NIO':
			return io.branch.referral.util.CurrencyType.NIO;
		case 'NOK':
			return io.branch.referral.util.CurrencyType.NOK;
		case 'NPR':
			return io.branch.referral.util.CurrencyType.NPR;
		case 'NZD':
			return io.branch.referral.util.CurrencyType.NZD;
		case 'OMR':
			return io.branch.referral.util.CurrencyType.OMR;
		case 'PAB':
			return io.branch.referral.util.CurrencyType.PAB;
		case 'PEN':
			return io.branch.referral.util.CurrencyType.PEN;
		case 'PGK':
			return io.branch.referral.util.CurrencyType.PGK;
		case 'PHP':
			return io.branch.referral.util.CurrencyType.PHP;
		case 'PKR':
			return io.branch.referral.util.CurrencyType.PKR;
		case 'PLN':
			return io.branch.referral.util.CurrencyType.PLN;
		case 'PYG':
			return io.branch.referral.util.CurrencyType.PYG;
		case 'QAR':
			return io.branch.referral.util.CurrencyType.QAR;
		case 'RON':
			return io.branch.referral.util.CurrencyType.RON;
		case 'RSD':
			return io.branch.referral.util.CurrencyType.RSD;
		case 'RUB':
			return io.branch.referral.util.CurrencyType.RUB;
		case 'RWF':
			return io.branch.referral.util.CurrencyType.RWF;
		case 'SAR':
			return io.branch.referral.util.CurrencyType.SAR;
		case 'SBD':
			return io.branch.referral.util.CurrencyType.SBD;
		case 'SCR':
			return io.branch.referral.util.CurrencyType.SCR;
		case 'SDG':
			return io.branch.referral.util.CurrencyType.SDG;
		case 'SEK':
			return io.branch.referral.util.CurrencyType.SEK;
		case 'SGD':
			return io.branch.referral.util.CurrencyType.SGD;
		case 'SHP':
			return io.branch.referral.util.CurrencyType.SHP;
		case 'SLL':
			return io.branch.referral.util.CurrencyType.SLL;
		case 'SOS':
			return io.branch.referral.util.CurrencyType.SOS;
		case 'SRD':
			return io.branch.referral.util.CurrencyType.SRD;
		case 'SSP':
			return io.branch.referral.util.CurrencyType.SSP;
		case 'STD':
			return io.branch.referral.util.CurrencyType.STD;
		case 'SYP':
			return io.branch.referral.util.CurrencyType.SYP;
		case 'SZL':
			return io.branch.referral.util.CurrencyType.SZL;
		case 'THB':
			return io.branch.referral.util.CurrencyType.THB;
		case 'TJS':
			return io.branch.referral.util.CurrencyType.TJS;
		case 'TMT':
			return io.branch.referral.util.CurrencyType.TMT;
		case 'TND':
			return io.branch.referral.util.CurrencyType.TND;
		case 'TOP':
			return io.branch.referral.util.CurrencyType.TOP;
		case 'TRY':
			return io.branch.referral.util.CurrencyType.TRY;
		case 'TTD':
			return io.branch.referral.util.CurrencyType.TTD;
		case 'TWD':
			return io.branch.referral.util.CurrencyType.TWD;
		case 'TZS':
			return io.branch.referral.util.CurrencyType.TZS;
		case 'UAH':
			return io.branch.referral.util.CurrencyType.UAH;
		case 'UGX':
			return io.branch.referral.util.CurrencyType.UGX;
		case 'USN':
			return io.branch.referral.util.CurrencyType.USN;
		case 'UYI':
			return io.branch.referral.util.CurrencyType.UYI;
		case 'UYU':
			return io.branch.referral.util.CurrencyType.UYU;
		case 'UZS':
			return io.branch.referral.util.CurrencyType.UZS;
		case 'VEF':
			return io.branch.referral.util.CurrencyType.VEF;
		case 'VND':
			return io.branch.referral.util.CurrencyType.VND;
		case 'VUV':
			return io.branch.referral.util.CurrencyType.VUV;
		case 'WST':
			return io.branch.referral.util.CurrencyType.WST;
		case 'XAF':
			return io.branch.referral.util.CurrencyType.XAF;
		case 'XAG':
			return io.branch.referral.util.CurrencyType.XAG;
		case 'XAU':
			return io.branch.referral.util.CurrencyType.XAU;
		case 'XBA':
			return io.branch.referral.util.CurrencyType.XBA;
		case 'XBB':
			return io.branch.referral.util.CurrencyType.XBB;
		case 'XBC':
			return io.branch.referral.util.CurrencyType.XBC;
		case 'XBD':
			return io.branch.referral.util.CurrencyType.XBD;
		case 'XCD':
			return io.branch.referral.util.CurrencyType.XCD;
		case 'XDR':
			return io.branch.referral.util.CurrencyType.XDR;
		case 'XFU':
			return io.branch.referral.util.CurrencyType.XFU;
		case 'XOF':
			return io.branch.referral.util.CurrencyType.XOF;
		case 'XPD':
			return io.branch.referral.util.CurrencyType.XPD;
		case 'XPF':
			return io.branch.referral.util.CurrencyType.XPF;
		case 'XPT':
			return io.branch.referral.util.CurrencyType.XPT;
		case 'XSU':
			return io.branch.referral.util.CurrencyType.XSU;
		case 'XTS':
			return io.branch.referral.util.CurrencyType.XTS;
		case 'XUA':
			return io.branch.referral.util.CurrencyType.XUA;
		case 'XXX':
			return io.branch.referral.util.CurrencyType.XXX;
		case 'YER':
			return io.branch.referral.util.CurrencyType.YER;
		case 'ZAR':
			return io.branch.referral.util.CurrencyType.ZAR;
		case 'ZMW':
			return io.branch.referral.util.CurrencyType.ZMW;
	}
}

export class LinkProperties {
	[native_]: io.branch.referral.util.LinkProperties;

	constructor(linkProperties: io.branch.referral.util.LinkProperties | null = null) {
		if (linkProperties) {
			this[native_] = linkProperties;
		} else {
			this[native_] = new io.branch.referral.util.LinkProperties();
		}
	}

	static fromNative(native: io.branch.referral.util.LinkProperties): LinkProperties {
		return new LinkProperties(native);
	}

	get native() {
		return this[native_];
	}

	get alias(): string {
		return this.native.getAlias();
	}

	set alias(value: string) {
		this.native.setAlias(value);
	}

	get campaign(): string {
		return this.native.getCampaign();
	}

	set campaign(value: string) {
		this.native.setCampaign(value);
	}

	get channel(): string {
		return this.native.getChannel();
	}

	set channel(value: string) {
		this.native.setChannel(value);
	}

	get controlParams(): Record<any, any> {
		const params = this.native.getControlParams();
		if (!params) {
			return {};
		}
		return Utils.dataDeserialize(params);
	}

	set controlParams(value: Record<any, any>) {
		if (value) {
			const keys = Object.keys(value);
			for (const key of keys) {
				const item = value[key];
				this.native.addControlParameter(key, Utils.dataSerialize(item));
			}
		}
	}

	get feature(): string {
		return this.native.getFeature();
	}

	set feature(value: string) {
		this.native.setFeature(value);
	}

	get matchDuration(): number {
		return this.native.getMatchDuration();
	}

	set matchDuration(value: number) {
		this.native.setDuration(value);
	}

	get stage(): string {
		return this.native.getStage();
	}

	set stage(value: string) {
		this.native.setStage(value);
	}

	get tags(): Array<string> {
		return Utils.dataDeserialize(this.native.getTags());
	}

	set tags(value: Array<string>) {
		if (Array.isArray(value)) {
			for (const tag of value) {
				this.native.addTag(tag);
			}
		}
	}

	addControlParam(key: string, value: string): void {
		this.native.addControlParameter(key, value);
	}
}

export class ContentMetadata {
	[native_]: io.branch.referral.util.ContentMetadata;

	constructor(metadata: io.branch.referral.util.ContentMetadata | null = null) {
		if (metadata) {
			this[native_] = metadata;
		} else {
			this[native_] = new io.branch.referral.util.ContentMetadata();
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
		switch (this.native.condition) {
			case io.branch.referral.util.ContentMetadata.CONDITION.FAIR:
				return 'Excellent';
			case io.branch.referral.util.ContentMetadata.CONDITION.GOOD:
				return 'Good';
			case io.branch.referral.util.ContentMetadata.CONDITION.NEW:
				return 'New';
			case io.branch.referral.util.ContentMetadata.CONDITION.POOR:
				return 'Poor';
			case io.branch.referral.util.ContentMetadata.CONDITION.REFURBISHED:
				return 'Refurbished';
			case io.branch.referral.util.ContentMetadata.CONDITION.USED:
				return 'Used';
			case io.branch.referral.util.ContentMetadata.CONDITION.EXCELLENT:
				return 'Excellent';
		}
	}
	set condition(value: string) {
		switch (value) {
			case 'Excellent':
				this.native.condition = io.branch.referral.util.ContentMetadata.CONDITION.EXCELLENT;
				break;
			case 'Good':
				this.native.condition = io.branch.referral.util.ContentMetadata.CONDITION.GOOD;
				break;
			case 'New':
				this.native.condition = io.branch.referral.util.ContentMetadata.CONDITION.NEW;
				break;
			case 'Poor':
				this.native.condition = io.branch.referral.util.ContentMetadata.CONDITION.POOR;
				break;
			case 'Refurbished':
				this.native.condition = io.branch.referral.util.ContentMetadata.CONDITION.REFURBISHED;
				break;
			case 'Used':
				this.native.condition = io.branch.referral.util.ContentMetadata.CONDITION.USED;
				break;
			case 'Fair':
				this.native.condition = io.branch.referral.util.ContentMetadata.CONDITION.FAIR;
				break;
		}
	}

	get contentSchema(): string {
		// todo
		return '';
	}
	set contentSchema(value: string) {
		this.native.setContentSchema(value);
	}

	get currency(): string {
		switch (this.native.currencyType) {
			case io.branch.referral.util.CurrencyType.AED:
				return 'AED';
			case io.branch.referral.util.CurrencyType.AED:
				return 'AED';
			case io.branch.referral.util.CurrencyType.AFN:
				return 'AFN';
			case io.branch.referral.util.CurrencyType.USD:
				return 'USD';
			case io.branch.referral.util.CurrencyType.ALL:
				return 'ALL';
			case io.branch.referral.util.CurrencyType.AMD:
				return 'AMD';
			case io.branch.referral.util.CurrencyType.ANG:
				return 'ANG';
			case io.branch.referral.util.CurrencyType.AOA:
				return 'AOA';
			case io.branch.referral.util.CurrencyType.ARS:
				return 'ARS';
			case io.branch.referral.util.CurrencyType.AUD:
				return 'AUD';
			case io.branch.referral.util.CurrencyType.AWG:
				return 'AWG';
			case io.branch.referral.util.CurrencyType.AZN:
				return 'AZN';
			case io.branch.referral.util.CurrencyType.BAM:
				return 'BAM';
			case io.branch.referral.util.CurrencyType.BBD:
				return 'BBD';
			case io.branch.referral.util.CurrencyType.BDT:
				return 'BDT';
			case io.branch.referral.util.CurrencyType.BGN:
				return 'BGN';
			case io.branch.referral.util.CurrencyType.BHD:
				return 'BHD';
			case io.branch.referral.util.CurrencyType.BIF:
				return 'BIF';
			case io.branch.referral.util.CurrencyType.BMD:
				return 'BMD';
			case io.branch.referral.util.CurrencyType.BND:
				return 'BND';
			case io.branch.referral.util.CurrencyType.BOB:
				return 'BOB';
			case io.branch.referral.util.CurrencyType.BOV:
				return 'BOV';
			case io.branch.referral.util.CurrencyType.BRL:
				return 'BRL';
			case io.branch.referral.util.CurrencyType.BSD:
				return 'BSD';
			case io.branch.referral.util.CurrencyType.BTN:
				return 'BTN';
			case io.branch.referral.util.CurrencyType.BWP:
				return 'BWP';
			case io.branch.referral.util.CurrencyType.BYN:
				return 'BYN';
			case io.branch.referral.util.CurrencyType.BYR:
				return 'BYR';
			case io.branch.referral.util.CurrencyType.CAD:
				return 'CAD';
			case io.branch.referral.util.CurrencyType.CDF:
				return 'CDF';
			case io.branch.referral.util.CurrencyType.CHE:
				return 'CHE';
			case io.branch.referral.util.CurrencyType.CHF:
				return 'CHF';
			case io.branch.referral.util.CurrencyType.CHW:
				return 'CHW';
			case io.branch.referral.util.CurrencyType.CLF:
				return 'CLF';
			case io.branch.referral.util.CurrencyType.CLP:
				return 'CLP';
			case io.branch.referral.util.CurrencyType.CNY:
				return 'CNY';
			case io.branch.referral.util.CurrencyType.COP:
				return 'COP';
			case io.branch.referral.util.CurrencyType.COU:
				return 'COU';
			case io.branch.referral.util.CurrencyType.CRC:
				return 'CRC';
			case io.branch.referral.util.CurrencyType.CUC:
				return 'CUC';
			case io.branch.referral.util.CurrencyType.CUP:
				return 'CUP';
			case io.branch.referral.util.CurrencyType.CVE:
				return 'CVE';
			case io.branch.referral.util.CurrencyType.CZK:
				return 'CZK';
			case io.branch.referral.util.CurrencyType.DJF:
				return 'DJF';
			case io.branch.referral.util.CurrencyType.DKK:
				return 'DKK';
			case io.branch.referral.util.CurrencyType.DOP:
				return 'DOP';
			case io.branch.referral.util.CurrencyType.DZD:
				return 'DZD';
			case io.branch.referral.util.CurrencyType.EGP:
				return 'EGP';
			case io.branch.referral.util.CurrencyType.ERN:
				return 'ERN';
			case io.branch.referral.util.CurrencyType.ETB:
				return 'ETB';
			case io.branch.referral.util.CurrencyType.EUR:
				return 'EUR';
			case io.branch.referral.util.CurrencyType.FJD:
				return 'FJD';
			case io.branch.referral.util.CurrencyType.FKP:
				return 'FKP';
			case io.branch.referral.util.CurrencyType.GBP:
				return 'GBP';
			case io.branch.referral.util.CurrencyType.GEL:
				return 'GEL';
			case io.branch.referral.util.CurrencyType.GHS:
				return 'GHS';
			case io.branch.referral.util.CurrencyType.GIP:
				return 'GIP';
			case io.branch.referral.util.CurrencyType.GMD:
				return 'GMD';
			case io.branch.referral.util.CurrencyType.GNF:
				return 'GNF';
			case io.branch.referral.util.CurrencyType.GTQ:
				return 'GTQ';
			case io.branch.referral.util.CurrencyType.GYD:
				return 'GYD';
			case io.branch.referral.util.CurrencyType.HKD:
				return 'HKD';
			case io.branch.referral.util.CurrencyType.HNL:
				return 'HNL';
			case io.branch.referral.util.CurrencyType.HRK:
				return 'HRK';
			case io.branch.referral.util.CurrencyType.HTG:
				return 'HTG';
			case io.branch.referral.util.CurrencyType.HUF:
				return 'HUF';
			case io.branch.referral.util.CurrencyType.IDR:
				return 'IDR';
			case io.branch.referral.util.CurrencyType.ILS:
				return 'ILS';
			case io.branch.referral.util.CurrencyType.INR:
				return 'INR';
			case io.branch.referral.util.CurrencyType.IQD:
				return 'IQD';
			case io.branch.referral.util.CurrencyType.IRR:
				return 'IRR';
			case io.branch.referral.util.CurrencyType.ISK:
				return 'ISK';
			case io.branch.referral.util.CurrencyType.JMD:
				return 'JMD';
			case io.branch.referral.util.CurrencyType.JOD:
				return 'JOD';
			case io.branch.referral.util.CurrencyType.JPY:
				return 'JPY';
			case io.branch.referral.util.CurrencyType.KES:
				return 'KES';
			case io.branch.referral.util.CurrencyType.KGS:
				return 'KGS';
			case io.branch.referral.util.CurrencyType.KHR:
				return 'KHR';
			case io.branch.referral.util.CurrencyType.KMF:
				return 'KMF';
			case io.branch.referral.util.CurrencyType.KPW:
				return 'KPW';
			case io.branch.referral.util.CurrencyType.KRW:
				return 'KRW';
			case io.branch.referral.util.CurrencyType.KWD:
				return 'KWD';
			case io.branch.referral.util.CurrencyType.KYD:
				return 'KYD';
			case io.branch.referral.util.CurrencyType.KZT:
				return 'KZT';
			case io.branch.referral.util.CurrencyType.LAK:
				return 'LAK';
			case io.branch.referral.util.CurrencyType.LBP:
				return 'LBP';
			case io.branch.referral.util.CurrencyType.LKR:
				return 'LKR';
			case io.branch.referral.util.CurrencyType.LRD:
				return 'LRD';
			case io.branch.referral.util.CurrencyType.LSL:
				return 'LSL';
			case io.branch.referral.util.CurrencyType.LYD:
				return 'LYD';
			case io.branch.referral.util.CurrencyType.MAD:
				return 'MAD';
			case io.branch.referral.util.CurrencyType.MDL:
				return 'MDL';
			case io.branch.referral.util.CurrencyType.MGA:
				return 'MGA';
			case io.branch.referral.util.CurrencyType.MKD:
				return 'MKD';
			case io.branch.referral.util.CurrencyType.MNT:
				return 'MNT';
			case io.branch.referral.util.CurrencyType.MOP:
				return 'MOP';
			case io.branch.referral.util.CurrencyType.MRO:
				return 'MRO';
			case io.branch.referral.util.CurrencyType.MUR:
				return 'MUR';
			case io.branch.referral.util.CurrencyType.MVR:
				return 'MVR';
			case io.branch.referral.util.CurrencyType.MWK:
				return 'MWK';
			case io.branch.referral.util.CurrencyType.MXN:
				return 'MXN';
			case io.branch.referral.util.CurrencyType.MXV:
				return 'MXV';
			case io.branch.referral.util.CurrencyType.MYR:
				return 'MYR';
			case io.branch.referral.util.CurrencyType.MZN:
				return 'MZN';
			case io.branch.referral.util.CurrencyType.NAD:
				return 'NAD';
			case io.branch.referral.util.CurrencyType.NGN:
				return 'NGN';
			case io.branch.referral.util.CurrencyType.NIO:
				return 'NIO';
			case io.branch.referral.util.CurrencyType.NOK:
				return 'NOK';
			case io.branch.referral.util.CurrencyType.NPR:
				return 'NPR';
			case io.branch.referral.util.CurrencyType.NZD:
				return 'NZD';
			case io.branch.referral.util.CurrencyType.OMR:
				return 'OMR';
			case io.branch.referral.util.CurrencyType.PAB:
				return 'PAB';
			case io.branch.referral.util.CurrencyType.PEN:
				return 'PEN';
			case io.branch.referral.util.CurrencyType.PGK:
				return 'PGK';
			case io.branch.referral.util.CurrencyType.PHP:
				return 'PHP';
			case io.branch.referral.util.CurrencyType.PKR:
				return 'PKR';
			case io.branch.referral.util.CurrencyType.PLN:
				return 'PLN';
			case io.branch.referral.util.CurrencyType.PYG:
				return 'PYG';
			case io.branch.referral.util.CurrencyType.QAR:
				return 'QAR';
			case io.branch.referral.util.CurrencyType.RON:
				return 'RON';
			case io.branch.referral.util.CurrencyType.RSD:
				return 'RSD';
			case io.branch.referral.util.CurrencyType.RUB:
				return 'RUB';
			case io.branch.referral.util.CurrencyType.RWF:
				return 'RWF';
			case io.branch.referral.util.CurrencyType.SAR:
				return 'SAR';
			case io.branch.referral.util.CurrencyType.SBD:
				return 'SBD';
			case io.branch.referral.util.CurrencyType.SCR:
				return 'SCR';
			case io.branch.referral.util.CurrencyType.SDG:
				return 'SDG';
			case io.branch.referral.util.CurrencyType.SEK:
				return 'SEK';
			case io.branch.referral.util.CurrencyType.SGD:
				return 'SGD';
			case io.branch.referral.util.CurrencyType.SHP:
				return 'SHP';
			case io.branch.referral.util.CurrencyType.SLL:
				return 'SLL';
			case io.branch.referral.util.CurrencyType.SOS:
				return 'SOS';
			case io.branch.referral.util.CurrencyType.SRD:
				return 'SRD';
			case io.branch.referral.util.CurrencyType.SSP:
				return 'SSP';
			case io.branch.referral.util.CurrencyType.STD:
				return 'STD';
			case io.branch.referral.util.CurrencyType.SYP:
				return 'SYP';
			case io.branch.referral.util.CurrencyType.SZL:
				return 'SZL';
			case io.branch.referral.util.CurrencyType.THB:
				return 'THB';
			case io.branch.referral.util.CurrencyType.TJS:
				return 'TJS';
			case io.branch.referral.util.CurrencyType.TMT:
				return 'TMT';
			case io.branch.referral.util.CurrencyType.TND:
				return 'TND';
			case io.branch.referral.util.CurrencyType.TOP:
				return 'TOP';
			case io.branch.referral.util.CurrencyType.TRY:
				return 'TRY';
			case io.branch.referral.util.CurrencyType.TTD:
				return 'TTD';
			case io.branch.referral.util.CurrencyType.TWD:
				return 'TWD';
			case io.branch.referral.util.CurrencyType.TZS:
				return 'TZS';
			case io.branch.referral.util.CurrencyType.UAH:
				return 'UAH';
			case io.branch.referral.util.CurrencyType.UGX:
				return 'UGX';
			case io.branch.referral.util.CurrencyType.USN:
				return 'USN';
			case io.branch.referral.util.CurrencyType.UYI:
				return 'UYI';
			case io.branch.referral.util.CurrencyType.UYU:
				return 'UYU';
			case io.branch.referral.util.CurrencyType.UZS:
				return 'UZS';
			case io.branch.referral.util.CurrencyType.VEF:
				return 'VEF';
			case io.branch.referral.util.CurrencyType.VND:
				return 'VND';
			case io.branch.referral.util.CurrencyType.VUV:
				return 'VUV';
			case io.branch.referral.util.CurrencyType.WST:
				return 'WST';
			case io.branch.referral.util.CurrencyType.XAF:
				return 'XAF';
			case io.branch.referral.util.CurrencyType.XAG:
				return 'XAG';
			case io.branch.referral.util.CurrencyType.XAU:
				return 'XAU';
			case io.branch.referral.util.CurrencyType.XBA:
				return 'XBA';
			case io.branch.referral.util.CurrencyType.XBB:
				return 'XBB';
			case io.branch.referral.util.CurrencyType.XBC:
				return 'XBC';
			case io.branch.referral.util.CurrencyType.XBD:
				return 'XBD';
			case io.branch.referral.util.CurrencyType.XCD:
				return 'XCD';
			case io.branch.referral.util.CurrencyType.XDR:
				return 'XDR';
			case io.branch.referral.util.CurrencyType.XFU:
				return 'XFU';
			case io.branch.referral.util.CurrencyType.XOF:
				return 'XOF';
			case io.branch.referral.util.CurrencyType.XPD:
				return 'XPD';
			case io.branch.referral.util.CurrencyType.XPF:
				return 'XPF';
			case io.branch.referral.util.CurrencyType.XPT:
				return 'XPT';
			case io.branch.referral.util.CurrencyType.XSU:
				return 'XSU';
			case io.branch.referral.util.CurrencyType.XTS:
				return 'XTS';
			case io.branch.referral.util.CurrencyType.XUA:
				return 'XUA';
			case io.branch.referral.util.CurrencyType.XXX:
				return 'XXX';
			case io.branch.referral.util.CurrencyType.YER:
				return 'YER';
			case io.branch.referral.util.CurrencyType.ZAR:
				return 'ZAR';
			case io.branch.referral.util.CurrencyType.ZMW:
				return 'ZMW';
		}
	}

	set currency(value: string) {
		const type = getCurrencyCode(value as never);
		if (type) {
			this.native.currencyType = type;
		}
	}

	get customMetadata(): Record<string, string> {
		return Utils.dataDeserialize(this.native.getCustomMetadata());
	}
	set customMetadata(value: Record<string, string>) {
		if (value) {
			const keys = Object.keys(value);
			for (const key of keys) {
				const item = value[key];
				this.native.addCustomMetadata(key, item);
			}
		}
	}

	get imageCaptions(): Array<string> {
		return Utils.dataDeserialize(this.native.getImageCaptions());
	}
	set imageCaptions(value: Array<string>) {
		if (Array.isArray(value)) {
			for (const caption of value) {
				this.native.addImageCaptions(caption);
			}
		}
	}

	get latitude(): number {
		return this.native.latitude.doubleValue();
	}
	set latitude(value: number) {
		this.native.latitude = double(value);
	}

	get longitude(): number {
		return this.native.longitude.doubleValue();
	}
	set longitude(value: number) {
		this.native.longitude = double(value);
	}

	get price() {
		return this.native.price.doubleValue();
	}
	set price(value: number) {
		this.native.price = double(value);
	}

	get productBrand(): string {
		return this.native.productBrand;
	}
	set productBrand(value: string) {
		this.native.productBrand = value;
	}

	get productCategory(): ProductCategory {
		switch (this.native.productCategory) {
			case io.branch.referral.util.ProductCategory.ANIMALS_AND_PET_SUPPLIES:
				return 'AnimalSupplies';
			case io.branch.referral.util.ProductCategory.APPAREL_AND_ACCESSORIES:
				return 'Apparel';
			case io.branch.referral.util.ProductCategory.ARTS_AND_ENTERTAINMENT:
				return 'ArtsEntertainment';
			case io.branch.referral.util.ProductCategory.BABY_AND_TODDLER:
				return 'BabyToddler';
			case io.branch.referral.util.ProductCategory.BUSINESS_AND_INDUSTRIAL:
				return 'BusinessIndustrial';
			case io.branch.referral.util.ProductCategory.CAMERAS_AND_OPTICS:
				return 'CamerasOptics';
			case io.branch.referral.util.ProductCategory.ELECTRONICS:
				return 'Electronics';
			case io.branch.referral.util.ProductCategory.FOOD_BEVERAGES_AND_TOBACCO:
				return 'FoodBeverageTobacco';
			case io.branch.referral.util.ProductCategory.FURNITURE:
				return 'Furniture';
			case io.branch.referral.util.ProductCategory.HARDWARE:
				return 'Hardware';
			case io.branch.referral.util.ProductCategory.HEALTH_AND_BEAUTY:
				return 'HealthBeauty';
			case io.branch.referral.util.ProductCategory.HOME_AND_GARDEN:
				return 'HomeGarden';
			case io.branch.referral.util.ProductCategory.LUGGAGE_AND_BAGS:
				return 'LuggageBags';
			case io.branch.referral.util.ProductCategory.MATURE:
				return 'Mature';
			case io.branch.referral.util.ProductCategory.MEDIA:
				return 'Media';
			case io.branch.referral.util.ProductCategory.OFFICE_SUPPLIES:
				return 'OfficeSupplies';
			case io.branch.referral.util.ProductCategory.RELIGIOUS_AND_CEREMONIAL:
				return 'Religious';
			case io.branch.referral.util.ProductCategory.SOFTWARE:
				return 'Software';
			case io.branch.referral.util.ProductCategory.SPORTING_GOODS:
				return 'SportingGoods';
			case io.branch.referral.util.ProductCategory.TOYS_AND_GAMES:
				return 'ToysGames';
			case io.branch.referral.util.ProductCategory.VEHICLES_AND_PARTS:
				return 'VehiclesParts';
		}
	}
	set productCategory(value: ProductCategory) {
		if (typeof value === 'string') {
			switch (value) {
				case 'AnimalSupplies':
					this.native.productCategory = io.branch.referral.util.ProductCategory.ANIMALS_AND_PET_SUPPLIES;
					break;
				case 'Apparel':
					this.native.productCategory = io.branch.referral.util.ProductCategory.APPAREL_AND_ACCESSORIES;
					break;
				case 'ArtsEntertainment':
					this.native.productCategory = io.branch.referral.util.ProductCategory.ARTS_AND_ENTERTAINMENT;
					break;
				case 'BabyToddler':
					this.native.productCategory = io.branch.referral.util.ProductCategory.BABY_AND_TODDLER;
					break;
				case 'BusinessIndustrial':
					this.native.productCategory = io.branch.referral.util.ProductCategory.BUSINESS_AND_INDUSTRIAL;
					break;
				case 'CamerasOptics':
					this.native.productCategory = io.branch.referral.util.ProductCategory.CAMERAS_AND_OPTICS;
					break;
				case 'Electronics':
					this.native.productCategory = io.branch.referral.util.ProductCategory.ELECTRONICS;
					break;
				case 'FoodBeverageTobacco':
					this.native.productCategory = io.branch.referral.util.ProductCategory.FOOD_BEVERAGES_AND_TOBACCO;
					break;
				case 'Furniture':
					this.native.productCategory = io.branch.referral.util.ProductCategory.FURNITURE;
					break;
				case 'Hardware':
					this.native.productCategory = io.branch.referral.util.ProductCategory.HARDWARE;
					break;
				case 'HealthBeauty':
					this.native.productCategory = io.branch.referral.util.ProductCategory.HEALTH_AND_BEAUTY;
					break;
				case 'HomeGarden':
					this.native.productCategory = io.branch.referral.util.ProductCategory.HOME_AND_GARDEN;
					break;
				case 'LuggageBags':
					this.native.productCategory = io.branch.referral.util.ProductCategory.LUGGAGE_AND_BAGS;
					break;
				case 'Mature':
					this.native.productCategory = io.branch.referral.util.ProductCategory.MATURE;
					break;
				case 'Media':
					this.native.productCategory = io.branch.referral.util.ProductCategory.MEDIA;
					break;
				case 'OfficeSupplies':
					this.native.productCategory = io.branch.referral.util.ProductCategory.OFFICE_SUPPLIES;
					break;
				case 'Religious':
					this.native.productCategory = io.branch.referral.util.ProductCategory.RELIGIOUS_AND_CEREMONIAL;
					break;
				case 'Software':
					this.native.productCategory = io.branch.referral.util.ProductCategory.SOFTWARE;
					break;
				case 'SportingGoods':
					this.native.productCategory = io.branch.referral.util.ProductCategory.SPORTING_GOODS;
					break;
				case 'ToysGames':
					this.native.productCategory = io.branch.referral.util.ProductCategory.TOYS_AND_GAMES;
					break;
				case 'VehiclesParts':
					this.native.productCategory = io.branch.referral.util.ProductCategory.VEHICLES_AND_PARTS;
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
		return this.native.quantity.doubleValue();
	}
	set quantity(value: number) {
		this.native.quantity = double(value);
	}

	get rating(): number {
		return this.native.rating.doubleValue();
	}
	set rating(value: number) {
		this.native.rating = double(value);
	}

	get ratingAverage(): number {
		return this.native.ratingAverage.doubleValue();
	}
	set ratingAverage(value: number) {
		this.native.ratingAverage = double(value);
	}

	get ratingCount(): number {
		return this.native.ratingCount.doubleValue();
	}
	set ratingCount(value: number) {
		this.native.ratingCount = double(value);
	}

	get ratingMax(): number {
		return this.native.ratingMax.doubleValue();
	}
	set ratingMax(value: number) {
		this.native.ratingMax = double(value);
	}

	get sku(): string {
		return this.native.sku;
	}
	set sku(value: string) {
		this.native.sku = value;
	}

	static fromNative(native: io.branch.referral.util.ContentMetadata): ContentMetadata {
		return new ContentMetadata(native);
	}
}

export class UniversalObject {
	[native_]: io.branch.indexing.BranchUniversalObject;
	constructor(link: io.branch.indexing.BranchUniversalObject | null = null) {
		if (link) {
			this[native_] = link;
		} else {
			this[native_] = new io.branch.indexing.BranchUniversalObject();
		}
		this[native_];
	}

	static fromNative(native: io.branch.indexing.BranchUniversalObject): UniversalObject {
		return new UniversalObject(native);
	}

	get native() {
		return this[native_];
	}

	share(linkProperties: LinkProperties, shareText?: string) {
		return new Promise((resolve, reject) => {
			const style = new io.branch.referral.util.ShareSheetStyle(Utils.android.getCurrentActivity(), shareText ?? '', '');

			this.native.showShareSheet(
				Utils.android.getCurrentActivity(),
				linkProperties.native,
				style,
				new io.branch.referral.Branch.BranchLinkShareListener({
					onShareLinkDialogLaunched() {},
					onShareLinkDialogDismissed() {
						resolve({
							channel: null,
							completed: false,
						});
					},
					onLinkShareResponse(link: string, channel: string, error: io.branch.referral.BranchError) {
						if (error) {
							reject(error);
						} else {
							resolve({
								channel: channel,
								completed: true,
							});
						}
					},
					onChannelSelected(param0: string) {},
				})
			);
		});
	}

	get canonicalIdentifier() {
		return this.native.getCanonicalIdentifier();
	}

	set canonicalIdentifier(value: string) {
		this.native.setCanonicalIdentifier(value);
	}

	get canonicalUrl(): string {
		return this.native.getCanonicalUrl();
	}
	set canonicalUrl(value: string) {
		this.native.setCanonicalUrl(value);
	}

	get contentDescription(): string {
		// todo: check if this is correct
		return this.native.getDescription();
	}

	set contentDescription(value: string) {
		this.native.setContentDescription(value);
	}

	get contentIndexMode() {
		if (this.native.isPublicallyIndexable()) {
			return 'public';
		} else if (this.native.isLocallyIndexable()) {
			return 'private';
		}
	}

	set contentIndexMode(value: 'public' | 'private') {
		switch (value) {
			case 'public':
				this.native.setContentIndexingMode(io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE.PUBLIC);
				break;
			case 'private':
				this.native.setContentIndexingMode(io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE.PRIVATE);
				break;
		}
	}

	get contentMetadata() {
		return ContentMetadata.fromNative(this.native.getContentMetadata());
	}

	set contentMetadata(value: ContentMetadata) {
		this.native.setContentMetadata(value[native_]);
	}

	get currency(): string {
		return this.native.getCurrencyType();
	}

	set currency(value: string) {
		this.native.setPrice(this.native.getPrice(), value);
	}

	get expirationDate(): Date {
		return new Date(this.native.getExpirationTime());
	}

	set expirationDate(value: Date) {
		this.native.setContentExpiration(fromISO8601UTC(value.toISOString()));
	}

	get imageUrl(): string {
		return this.native.getImageUrl();
	}

	set imageUrl(value: string) {
		this.native.setContentImageUrl(value);
	}

	get keywords(): Array<string> {
		return Utils.dataDeserialize(this.native.getKeywords);
	}

	get locallyIndex(): boolean {
		return this.native.isLocallyIndexable();
	}

	set locallyIndex(value: boolean) {
		this.native.setLocalIndexMode(value ? io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE.PUBLIC : io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE.PRIVATE);
	}

	get metadata(): Record<any, any> {
		const metadata = this.native.getMetadata();
		if (!metadata) {
			return {};
		}
		return Utils.dataDeserialize(metadata);
	}

	get price(): number {
		return this.native.getPrice();
	}

	set price(value: number) {
		this.native.setPrice(value, this.native.getCurrencyType());
	}

	get publiclyIndex(): boolean {
		return this.native.isPublicallyIndexable();
	}
	set publiclyIndex(value: boolean) {
		this.native.setContentIndexingMode(value ? io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE.PUBLIC : io.branch.indexing.BranchUniversalObject.CONTENT_INDEX_MODE.PRIVATE);
	}

	get title(): string {
		return this.native.getTitle();
	}

	set title(value: string) {
		this.native.setTitle(value);
	}

	get type(): string {
		return this.native.getType();
	}

	set type(value: string) {
		this.native.setContentType(value);
	}
}

export class Event {
	[native_]: io.branch.referral.util.BranchEvent;
	constructor(event: io.branch.referral.util.BranchEvent | EventType | null = null, eventName: string | null = null) {
		if (typeof event === 'string') {
			switch (event) {
				case 'OptIn':
					this[native_] = new io.branch.referral.util.BranchEvent('OPT_IN');
					break;
				case 'OptOut':
					this[native_] = new io.branch.referral.util.BranchEvent('OPT_OUT');
					break;
				case 'Custom':
					this[native_] = new io.branch.referral.util.BranchEvent(eventName ?? 'CUSTOM');
					if (!eventName) {
						console.warn('Custom event name is not provided. Please provide a valid event name.');
					}
					break;
				default:
					this[native_] = new io.branch.referral.util.BranchEvent(getBranchEventType(event));
					break;
			}
		} else if (event) {
			this[native_] = event;
		}
	}

	static fromNative(native: io.branch.referral.util.BranchEvent): Event {
		return new Event(native);
	}

	logEvent() {
		return new Promise((resolve, reject) => {
			this.native.logEvent(
				Utils.android.getApplicationContext(),
				new io.branch.referral.util.BranchEvent.BranchLogEventCallback({
					onSuccess(status: number) {
						resolve(status === 200);
					},
					onFailure(param0: java.lang.Exception) {
						reject(param0);
					},
				})
			);
		});
	}

	get native() {
		return this[native_];
	}

	private __adType: 'banner' | 'interstitial' | 'rewarded' | 'native' | 'none' = 'none';

	get adType() {
		return this.native['__adType'] ?? this.__adType ?? 'none';
	}

	set adType(value: 'banner' | 'interstitial' | 'rewarded' | 'native' | 'none') {
		switch (value) {
			case 'banner':
				this.native.setAdType(io.branch.referral.util.AdType.BANNER);
				this.__adType = 'banner';
				break;
			case 'interstitial':
				this.native.setAdType(io.branch.referral.util.AdType.INTERSTITIAL);
				this.__adType = 'interstitial';
				break;
			case 'rewarded':
				this.native.setAdType(io.branch.referral.util.AdType.REWARDED_VIDEO);
				this.__adType = 'rewarded';
				break;
			case 'native':
				this.native.setAdType(io.branch.referral.util.AdType.NATIVE);
				this.__adType = 'native';
				break;
			case 'none':
				this.native.setAdType(null);
				this.__adType = 'none';
				break;
		}
	}

	get affiliation() {
		// todo
		return '';
	}

	set affiliation(value: string) {
		this.native.setAffiliation(value);
	}

	get alias() {
		// todo
		return '';
	}

	set alias(value: string) {
		this.native.setCustomerEventAlias(value);
	}

	get contentItems(): Array<UniversalObject> {
		// todo
		return [];
	}

	set contentItems(value: Array<UniversalObject>) {
		if (Array.isArray(value)) {
			this.native.addContentItems(value.map((item) => item.native));
		}
	}

	get coupon(): string {
		// todo
		return '';
	}

	set coupon(value: string) {
		this.native.setCoupon(value);
	}

	get currency(): string {
		// todo
		return '';
	}

	set currency(value: string) {
		const currencyCode = getCurrencyCode(value as CurrencyCode);
		if (!currencyCode) {
			return;
		}
		this.native.setCurrency(currencyCode);
	}

	get customData(): Record<string, string> {
		// todo
		return {};
	}

	set customData(value: Record<string, string>) {
		if (value && typeof value === 'object') {
			const keys = Object.keys(value);
			for (const key of keys) {
				const item = value[key];
				this.native.addCustomDataProperty(key, item);
			}
		}
	}

	get revenue() {
		// todo
		return 0;
	}

	set revenue(value: number) {
		this.native.setRevenue(value);
	}

	get searchQuery(): string {
		// todo
		return '';
	}

	set searchQuery(value: string) {
		this.native.setSearchQuery(value);
	}

	get shipping() {
		// todo
		return 0;
	}

	set shipping(value: number) {
		this.native.setShipping(value);
	}

	get tax() {
		// todo
		return 0;
	}

	set tax(value: number) {
		this.native.setTax(value);
	}

	get transactionID() {
		// todo
		return '0';
	}
	set transactionID(value: string) {
		this.native.setTransactionID(value);
	}
}

export class QRCode {
	[native_]: io.branch.referral.QRCode.BranchQRCode;

	constructor(qrCode: io.branch.referral.QRCode.BranchQRCode | null = null) {
		if (qrCode) {
			this[native_] = qrCode;
		} else {
			this[native_] = new io.branch.referral.QRCode.BranchQRCode();
		}
	}

	static fromNative(native: io.branch.referral.QRCode.BranchQRCode): QRCode {
		return new QRCode(native);
	}

	get native() {
		return this[native_];
	}

	_backgroundColor: Color | string | null = new Color('white');
	get backgroundColor() {
		// todo
		return this._backgroundColor;
	}

	set backgroundColor(value: Color | string) {
		if (value instanceof Color) {
			this.native.setBackgroundColor(value.android);
			this._backgroundColor = value;
		} else {
			const color = new Color(value);
			this.native.setBackgroundColor(color.android);
			this._backgroundColor = color;
		}
	}

	set centerLogo(value: string) {
		this.native.setCenterLogo(value);
	}

	get centerLogo(): string {
		// todo
		return '';
	}

	private _codeColor: Color | string | null = new Color('black');
	get codeColor() {
		return this._codeColor;
	}

	set codeColor(value: Color | string) {
		if (value instanceof Color) {
			this.native.setCodeColor(value.android);
			this._codeColor = value;
		} else {
			const color = new Color(value);
			this.native.setCodeColor(color.android);
			this._codeColor = color;
		}
	}

	private _imageFormat: 'png' | 'jpeg' = 'png';
	get imageFormat() {
		return this._imageFormat;
	}

	set imageFormat(value: 'png' | 'jpeg') {
		switch (value) {
			case 'png':
				this.native.setImageFormat(BranchQRCodeImageFormat.PNG);
				this._imageFormat = 'png';
				break;
			case 'jpeg':
				this.native.setImageFormat(BranchQRCodeImageFormat.JPEG);
				this._imageFormat = 'jpeg';
				break;
		}
	}

	private _margin: number = 0;
	get margin() {
		return this._margin;
	}
	set margin(value: number) {
		this.native.setMargin(java.lang.Integer.valueOf(value));
	}

	get width() {
		return 0;
	}

	set width(value: number) {
		this.native.setWidth(java.lang.Integer.valueOf(value));
	}

	getQrCode(options: { asData?: boolean; uo: UniversalObject; lp: LinkProperties }) {
		return new Promise<ImageSource | ArrayBuffer>((resolve, reject) => {
			if (options.asData) {
				this.native.getQRCodeAsData(
					Utils.android.getApplication(),
					options.uo.native,
					options.lp.native,
					new io.branch.referral.QRCode.BranchQRCode.BranchQRCodeDataHandler({
						onSuccess(param0: number[]) {
							// todo move to kotlin
							let buffer = java.nio.ByteBuffer.allocate(param0.length);
							buffer.put(param0);
							buffer.rewind();
							// @ts-ignore
							resolve(ArrayBuffer.from(buffer));
						},
						onFailure(error: java.lang.Exception) {
							reject(error);
						},
					})
				);
			} else {
				this.native.getQRCodeAsImage(
					Utils.android.getCurrentActivity(),
					options.uo.native,
					options.lp.native,
					new io.branch.referral.QRCode.BranchQRCode.BranchQRCodeImageHandler({
						onSuccess(image) {
							resolve(new ImageSource(image));
						},
						onFailure(error: java.lang.Exception) {
							reject(error);
						},
					})
				);
			}
		});
	}

	showSheet(options: { anchor: View; uo: UniversalObject; lp: LinkProperties }) {
		return Promise.reject(new Error('QRCode.showSheet is not implemented on Android. Please use getQrCode instead.'));
	}
}

export class BranchIO {
	[native_]: io.branch.referral.Branch;

	public static init() {
		if (didInit) {
			return;
		}
		Application.once(Application.launchEvent, (args) => {
			io.branch.referral.Branch.getAutoInstance(Utils.ad.getApplicationContext());
		});
		didInit = true;
	}

	static instance: BranchIO | null = null;

	get native() {
		return this[native_];
	}

	static fromNative(native: io.branch.referral.Branch): BranchIO {
		const instance = new BranchIO();
		instance[native_] = native;
		return instance;
	}
	static getInstance(): BranchIO {
		if (this.instance) {
			return this.instance;
		}
		const instance = io.branch.referral.Branch.getInstance();
		if (instance === null) {
			throw new Error('Branch SDK is not initialized. Please call BranchIO.init() before using BranchIO.');
		}
		const ret = BranchIO.fromNative(instance);
		this.instance = ret;
		return ret;
	}

	static useTestInstance() {
		io.branch.referral.Branch.enableTestMode();
		if (this.instance) {
			this.instance[native_] = io.branch.referral.Branch.getInstance();
		}
		return this;
	}

	static get disableTracking(): boolean {
		return this.getInstance()?.native?.isTrackingDisabled?.() ?? false;
	}

	static set disableTracking(value: boolean) {
		this.getInstance()?.native?.disableTracking?.(value);
	}

	static enableLogging() {
		io.branch.referral.Branch.enableLogging();
	}

	static disableLogging() {
		io.branch.referral.Branch.disableLogging();
	}

	static setBranchKey(key: string) {
		this.getInstance()?.native?.setBranchKey?.(key);
	}

	static setAPIUrl(url: string): void {
		io.branch.referral.Branch.setAPIUrl(url);
	}

	initSession(
		options: {
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
	): void {
		let builder = io.branch.referral.Branch.sessionBuilder(Utils.android.getCurrentActivity()).withCallback(
			new io.branch.referral.Branch.BranchUniversalReferralInitListener({
				onInitFinished(universalObject: io.branch.indexing.BranchUniversalObject, linkProperties: io.branch.referral.util.LinkProperties, error: io.branch.referral.BranchError) {
					if (error) {
						callback(null, error);
						return;
					}

					if (universalObject || linkProperties) {
						callback(
							{
								linkProperties: LinkProperties.fromNative(linkProperties) ?? undefined,
								universalObject: UniversalObject.fromNative(universalObject) ?? undefined,
							},
							null
						);
					} else {
						console.warn('BranchIO initSession response is null');
					}
				},
			})
		);

		if (options?.android?.data) {
			builder = builder.withData(options.android.data);
		}

		if (options?.android?.reInit) {
			builder.reInit();
		} else {
			builder.init();
		}
	}

	setRequestMetadata(key: string, value: string) {
		this.native.setRequestMetadata(key, value);
	}

	clearPartnerParameters() {
		this.native.clearPartnerParameters();
	}

	addFacebookPartnerParameter(key: string, value: string) {
		this.native.addFacebookPartnerParameterWithName(key, value);
	}

	addSnapPartnerParameter(key: string, value: string) {
		this.native.addSnapPartnerParameterWithName(key, value);
	}

	getLatestReferringParams(sync: boolean = false): Record<any, any> | null {
		let params: org.json.JSONObject | null = null;
		if (sync) {
			params = this.native.getLatestReferringParams();
		} else {
			params = this.native.getLatestReferringParamsSync();
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
			this.native.getLastAttributedTouchData(
				new io.branch.referral.ServerRequestGetLATD.BranchLastAttributedTouchDataListener({
					onDataFetched(data, error) {
						if (error) {
							reject(error);
						} else {
							resolve(Utils.dataDeserialize(data));
						}
					},
				})
			);
		});
	}

	setIdentity(identity: string): void {
		this.native.setIdentity(identity);
	}

	logout() {
		return new Promise((resolve, reject) => {
			this.native.logout(
				new io.branch.referral.Branch.LogoutStatusListener({
					onLogoutFinished(done, error) {
						if (error) {
							reject(error);
						} else {
							resolve(done);
						}
					},
				})
			);
		});
	}

	logoutSync(): void {
		this.native.logout();
	}
}
