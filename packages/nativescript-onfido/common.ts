import { Observable } from '@nativescript/core';

export interface OnfidoFlowSteps {
	welcome: boolean;
	customLocalization: boolean;
	captureFace?: {
		type: OnfidoCaptureType;
	};
	captureDocument?: {
		docType?: OnfidoDocumentType;
		countryCode?: OnfidoCountryCode;
	};
}

export interface OnfidoDocument {
	id: string;
	createdAt?: Date;
	fileName?: string;
	fileSize?: number;
	fileType?: string;
	href?: string;
}

export interface OnfidoFaceDocument extends OnfidoDocument {
	variant?: string;
}

export interface OnfidoResult {
	front?: OnfidoDocument;
	back?: OnfidoDocument;
	face?: OnfidoFaceDocument;
}

export interface OnfidoConfig {
	sdkToken: string;
	flowSteps: OnfidoFlowSteps;
}

export interface IOnfidoResult {
	createdAt: Date;
	fileName: string;
	fileSize: number;
	fileType: string;
	href: string;
	id: string;
	side?: string;
	type?: string;
	description: 'DocumentResult' | 'FaceResult';
}

export class OnfidoCommon extends Observable {
	static debugMode: boolean = false;

	static _checkConfig(config: OnfidoConfig) {
		if (!config) {
			return this._configError('config is missing');
		}

		if (!config.sdkToken) {
			return this._configError('sdkToken is missing');
		}

		if (!config.sdkToken.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)) {
			return this._configError('sdkToken is not a valid jwt');
		}

		if (!config.flowSteps) {
			return this._configError('flowSteps configuration is missing');
		}

		if (config.flowSteps.captureDocument) {
			if (config.flowSteps.captureDocument.docType && !config.flowSteps.captureDocument.countryCode) {
				return this._configError('countryCode needs to be a ISO 3166-1 3 letter code if docType is specified');
			}

			if (!config.flowSteps.captureDocument.docType && config.flowSteps.captureDocument.countryCode) {
				return this._configError('docType needs to be provided if countryCode is specified');
			}

			if (config.flowSteps.captureDocument.docType && !(config.flowSteps.captureDocument.docType in OnfidoDocumentType)) {
				return this._configError('docType is invalid');
			}

			if (config.flowSteps.captureDocument.countryCode && !(config.flowSteps.captureDocument.countryCode in OnfidoCountryCode)) {
				return this._configError('countryCode is not a ISO 3166-1 3 letter code');
			}
		}

		if (!config.flowSteps.captureDocument && !config.flowSteps.captureFace) {
			return this._configError("flowSteps doesn't include either valid captureDocument options or valid captureFace options");
		}

		if (config.flowSteps.captureFace && !(config.flowSteps.captureFace.type in OnfidoCaptureType)) {
			return this._configError('Capture Face type is invalid');
		}

		return null;
	}

	static _configError(message: string) {
		return Promise.reject(this._buildErrorMessage(message, 'config_error'));
	}

	static _buildErrorMessage(message: string, type: string) {
		const error: any = new Error(message);
		error.code = type;
		if (this.debugMode) {
			console.log(error);
		}
		return error;
	}
}

export enum OnfidoDocumentType {
	PASSPORT = 'PASSPORT',
	DRIVING_LICENCE = 'DRIVING_LICENCE',
	NATIONAL_IDENTITY_CARD = 'NATIONAL_IDENTITY_CARD',
	RESIDENCE_PERMIT = 'RESIDENCE_PERMIT',
	VISA = 'VISA',
	WORK_PERMIT = 'WORK_PERMIT',
	GENERIC = 'GENERIC',
}

export enum OnfidoCaptureType {
	PHOTO = 'PHOTO',
	VIDEO = 'VIDEO',
}

export enum OnfidoCountryCode {
	AFG = 'AFG',
	ALB = 'ALB',
	DZA = 'DZA',
	ASM = 'ASM',
	AND = 'AND',
	AGO = 'AGO',
	AIA = 'AIA',
	ATA = 'ATA',
	ATG = 'ATG',
	ARG = 'ARG',
	ARM = 'ARM',
	ABW = 'ABW',
	AUS = 'AUS',
	AUT = 'AUT',
	AZE = 'AZE',
	BHS = 'BHS',
	BHR = 'BHR',
	BGD = 'BGD',
	BRB = 'BRB',
	BLR = 'BLR',
	BEL = 'BEL',
	BLZ = 'BLZ',
	BEN = 'BEN',
	BMU = 'BMU',
	BTN = 'BTN',
	BOL = 'BOL',
	BES = 'BES',
	BIH = 'BIH',
	BWA = 'BWA',
	BVT = 'BVT',
	BRA = 'BRA',
	IOT = 'IOT',
	BRN = 'BRN',
	BGR = 'BGR',
	BFA = 'BFA',
	BDI = 'BDI',
	CPV = 'CPV',
	KHM = 'KHM',
	CMR = 'CMR',
	CAN = 'CAN',
	CYM = 'CYM',
	CAF = 'CAF',
	TCD = 'TCD',
	CHL = 'CHL',
	CHN = 'CHN',
	CXR = 'CXR',
	CCK = 'CCK',
	COL = 'COL',
	COM = 'COM',
	COD = 'COD',
	COG = 'COG',
	COK = 'COK',
	CRI = 'CRI',
	HRV = 'HRV',
	CUB = 'CUB',
	CUW = 'CUW',
	CYP = 'CYP',
	CZE = 'CZE',
	CIV = 'CIV',
	DNK = 'DNK',
	DJI = 'DJI',
	DMA = 'DMA',
	DOM = 'DOM',
	ECU = 'ECU',
	EGY = 'EGY',
	SLV = 'SLV',
	GNQ = 'GNQ',
	ERI = 'ERI',
	EST = 'EST',
	SWZ = 'SWZ',
	ETH = 'ETH',
	FLK = 'FLK',
	FRO = 'FRO',
	FJI = 'FJI',
	FIN = 'FIN',
	FRA = 'FRA',
	GUF = 'GUF',
	PYF = 'PYF',
	ATF = 'ATF',
	GAB = 'GAB',
	GMB = 'GMB',
	GEO = 'GEO',
	DEU = 'DEU',
	GHA = 'GHA',
	GIB = 'GIB',
	GRC = 'GRC',
	GRL = 'GRL',
	GRD = 'GRD',
	GLP = 'GLP',
	GUM = 'GUM',
	GTM = 'GTM',
	GGY = 'GGY',
	GIN = 'GIN',
	GNB = 'GNB',
	GUY = 'GUY',
	HTI = 'HTI',
	HMD = 'HMD',
	VAT = 'VAT',
	HND = 'HND',
	HKG = 'HKG',
	HUN = 'HUN',
	ISL = 'ISL',
	IND = 'IND',
	IDN = 'IDN',
	IRN = 'IRN',
	IRQ = 'IRQ',
	IRL = 'IRL',
	IMN = 'IMN',
	ISR = 'ISR',
	ITA = 'ITA',
	JAM = 'JAM',
	JPN = 'JPN',
	JEY = 'JEY',
	JOR = 'JOR',
	KAZ = 'KAZ',
	KEN = 'KEN',
	KIR = 'KIR',
	PRK = 'PRK',
	KOR = 'KOR',
	KWT = 'KWT',
	KGZ = 'KGZ',
	LAO = 'LAO',
	LVA = 'LVA',
	LBN = 'LBN',
	LSO = 'LSO',
	LBR = 'LBR',
	LBY = 'LBY',
	LIE = 'LIE',
	LTU = 'LTU',
	LUX = 'LUX',
	MAC = 'MAC',
	MDG = 'MDG',
	MWI = 'MWI',
	MYS = 'MYS',
	MDV = 'MDV',
	MLI = 'MLI',
	MLT = 'MLT',
	MHL = 'MHL',
	MTQ = 'MTQ',
	MRT = 'MRT',
	MUS = 'MUS',
	MYT = 'MYT',
	MEX = 'MEX',
	FSM = 'FSM',
	MDA = 'MDA',
	MCO = 'MCO',
	MNG = 'MNG',
	MNE = 'MNE',
	MSR = 'MSR',
	MAR = 'MAR',
	MOZ = 'MOZ',
	MMR = 'MMR',
	NAM = 'NAM',
	NRU = 'NRU',
	NPL = 'NPL',
	NLD = 'NLD',
	NCL = 'NCL',
	NZL = 'NZL',
	NIC = 'NIC',
	NER = 'NER',
	NGA = 'NGA',
	NIU = 'NIU',
	NFK = 'NFK',
	MKD = 'MKD',
	MNP = 'MNP',
	NOR = 'NOR',
	OMN = 'OMN',
	PAK = 'PAK',
	PLW = 'PLW',
	PSE = 'PSE',
	PAN = 'PAN',
	PNG = 'PNG',
	PRY = 'PRY',
	PER = 'PER',
	PHL = 'PHL',
	PCN = 'PCN',
	POL = 'POL',
	PRT = 'PRT',
	PRI = 'PRI',
	QAT = 'QAT',
	ROU = 'ROU',
	RUS = 'RUS',
	RWA = 'RWA',
	REU = 'REU',
	BLM = 'BLM',
	SHN = 'SHN',
	KNA = 'KNA',
	LCA = 'LCA',
	MAF = 'MAF',
	SPM = 'SPM',
	VCT = 'VCT',
	WSM = 'WSM',
	SMR = 'SMR',
	STP = 'STP',
	SAU = 'SAU',
	SEN = 'SEN',
	SRB = 'SRB',
	SYC = 'SYC',
	SLE = 'SLE',
	SGP = 'SGP',
	SXM = 'SXM',
	SVK = 'SVK',
	SVN = 'SVN',
	SLB = 'SLB',
	SOM = 'SOM',
	ZAF = 'ZAF',
	SGS = 'SGS',
	SSD = 'SSD',
	ESP = 'ESP',
	LKA = 'LKA',
	SDN = 'SDN',
	SUR = 'SUR',
	SJM = 'SJM',
	SWE = 'SWE',
	CHE = 'CHE',
	SYR = 'SYR',
	TWN = 'TWN',
	TJK = 'TJK',
	TZA = 'TZA',
	THA = 'THA',
	TLS = 'TLS',
	TGO = 'TGO',
	TKL = 'TKL',
	TON = 'TON',
	TTO = 'TTO',
	TUN = 'TUN',
	TUR = 'TUR',
	TKM = 'TKM',
	TCA = 'TCA',
	TUV = 'TUV',
	UGA = 'UGA',
	UKR = 'UKR',
	ARE = 'ARE',
	GBR = 'GBR',
	UMI = 'UMI',
	USA = 'USA',
	URY = 'URY',
	UZB = 'UZB',
	VUT = 'VUT',
	VEN = 'VEN',
	VNM = 'VNM',
	VGB = 'VGB',
	VIR = 'VIR',
	WLF = 'WLF',
	ESH = 'ESH',
	YEM = 'YEM',
	ZMB = 'ZMB',
	ZWE = 'ZWE',
	ALA = 'ALA',
}
