import { Observable } from '@nativescript/core';

export interface PlaidLinkConfig {
	token: string;
	onSuccess: (linkSuccess: PlaidLinkSuccessResult) => void;
	onExit: (linkExit: PlaidLinkExitResult) => void;
}

export interface PlaidLinkExitResultError {
	type: string;
	code: string;
	message: string;
	displayMessage: string;
}

export interface PlaidLinkExitResultMetaData {
	institution: PlaidLinkInstitution;
	status: string;
	linkSessionId: string;
	requestId: string;
}

export interface PlaidLinkExitResult {
	error: PlaidLinkExitResultError;
	metadata: PlaidLinkExitResultMetaData;
}

export enum PlaidLinkEventViewName {
	Connected = 'connected',
	Consent = 'consent',
	Credential = 'credential',
	Error = 'error',
	Exit = 'exit',
	Loading = 'loading',
	Mfa = 'mfa',
	Numbers = 'numbers',
	Recaptcha = 'recaptcha',
	SelectAccount = 'selectAccount',
	SelectInstitution = 'selectInstitution',
	Unknown = 'unknown',
}

export enum PlaidLinkEventName {
	CloseOAuth = 'closeOAuth',
	Error = 'error',
	Exit = 'exit',
	FailOAuth = 'failOAuth',
	Handoff = 'handoff',
	Open = 'open',
	OpenMyPlaid = 'openMyPlaid',
	OpenOAuth = 'openOAuth',
	SearchInstitution = 'searchInstitution',
	SelectInstitution = 'selectInstitution',
	SubmitCredentials = 'submitCredentials',
	SubmitMfa = 'submitMfa',
	TransitionView = 'transitionView',
	Unknown = 'unknown',
}

export interface PlaidLinkEventMetadata {
	eventName: PlaidLinkEventName;
	metadata: {
		errorCode: string;
		errorMessage: string;
		errorType: string;
		errorStatus: string;
		institutionId: string;
		institutionName: string;
		institutionSearchQuery: string;
		linkSessionId: string;
		mfaType: string;
		requestId: string;
		timestamp: string;
		viewName: PlaidLinkEventViewName;
		metadataJson: string;
	};
}

export enum PlaidLinkResultAccountType {
	Depository = 'depository',
	Credit = 'credit',
	Loan = 'loan',
	Investment = 'investment',
	Other = 'other',
}

export enum PlaidLinkResultAccountSubTypeDepository {
	Checking = 'checking',
	Savings = 'savings',
	Hsa = 'hsa',
	Cd = 'cd',
	MoneyMarket = 'money market',
	Paypal = 'paypal',
	Prepaid = 'prepaid',
	CashManagement = 'cash management',
	Ebt = 'ebt',
}

export enum PlaidLinkResultAccountSubTypeCredit {
	CreditCard = 'credit card',
	Paypal = 'paypal',
}

export enum PlaidLinkResultAccountSubTypeLoan {
	Auto = 'auto',
	Commercial = 'commercial',
	Construction = 'construction',
	Consumer = 'consumer',
	HomeEquity = 'home equity',
	Loan = 'loan',
	Mortgage = 'mortgage',
	Overdraft = 'overdraft',
	LineOfCredit = 'line of credit',
	student = 'student',
	other = 'other',
}

export enum PlaidLinkResultAccountSubTypeInvestment {
	Investment_529 = '529',
	Investment_401 = '401a',
	Investment_401k = '401k',
	Investment_403b = '403b',
	Investment_457b = '457b',
	Brokerage = 'brokerage',
	CashIsa = 'cash isa',
	EducationSavingsAccount = 'education savings account',
	FixedAnnuity = 'fixed annuity',
	Gic = 'gic',
	Hsa = 'hsa',
	Ira = 'ira',
	Isa = 'isa',
	keogh = 'keogh',
	Lif = 'lif',
	Lira = 'lira',
	Lrif = 'lrif',
	Lrsp = 'lrsp',
	MutualFund = 'mutual fund',
	Non_Taxable_Brokerage_Account = 'non-taxable brokerage account',
	Pension = 'pension',
	Prif = 'prif',
	ProfitSharingPlan = 'profit sharing plan',
	Qshr = 'qshr',
	Rdsp = 'rdsp',
	Resp = 'resp',
	Retirement = 'retirement',
	Rlif = 'rlif',
	Roth = 'roth',
	Roth_401k = 'roth 401k',
	Rrif = 'rrif',
	Rrsp = 'rrsp',
	Sarsep = 'sarsep',
	SepIra = 'sep ira',
	SimpleIra = 'simple ira',
	Sipp = 'sipp',
	StockPlan = 'stock plan',
	Tfsa = 'tfsa',
	Trust = 'trust',
	Ugma = 'ugma',
	Utma = 'utma',
	VariableAnnuity = 'variable annuity',
}

export type PlaidLinkResultAccountSubType = PlaidLinkResultAccountSubTypeDepository | PlaidLinkResultAccountSubTypeCredit | PlaidLinkResultAccountSubTypeLoan | PlaidLinkResultAccountSubTypeInvestment | string;

export enum PlaidLinkResultVerificationStatus {
	PendingAutomaticVerification = 'pending_automatic_verification',
	PendingManualVerification = 'pending_manual_verification',
	AutomaticallyVerified = 'automatically_verified',
	ManuallyVerified = 'manually_verified',
	VerificationExpired = 'verification_expired',
	VerificationFailed = 'verification_failed',
	Unknown = 'unknown',
}

export interface PlaidLinkResultAccount {
	id: string;
	name: string;
	mask: string;
	type: PlaidLinkResultAccountType;
	subtype: PlaidLinkResultAccountSubType;
	verificationStatus: PlaidLinkResultVerificationStatus;
}

export interface PlaidLinkInstitution {
	name: string;
	id: string;
}

export interface PlaidLinkSuccessMetaData {
	accounts: PlaidLinkResultAccount[];
	institution: PlaidLinkInstitution;
	linkSessionId: string;
	metadataJson: string;
}

export interface PlaidLinkSuccessResult {
	publicToken: string;
	metadata: PlaidLinkSuccessMetaData;
}

export class PlaidLinkBase extends Observable {}
