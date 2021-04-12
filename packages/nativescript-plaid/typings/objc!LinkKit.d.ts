declare var LinkKitVersionNumber: number;

declare var LinkKitVersionString: interop.Reference<number>;

declare class PLKAccount extends NSObject {
	static alloc(): PLKAccount; // inherited from NSObject

	static new(): PLKAccount; // inherited from NSObject

	readonly ID: string;

	readonly mask: string;

	readonly name: string;

	readonly subtype: PLKAccountSubtype;

	readonly verificationStatus: PLKVerificationStatus;

	constructor(o: { accountID: string; name: string; mask: string; subtype: PLKAccountSubtype; verificationStatus: PLKVerificationStatus });

	initWithAccountIDNameMaskSubtypeVerificationStatus(ID: string, name: string, mask: string, subtype: PLKAccountSubtype, verificationStatus: PLKVerificationStatus): this;
}

interface PLKAccountSubtype extends NSObjectProtocol {
	rawStringValue: string;
}
declare var PLKAccountSubtype: {
	prototype: PLKAccountSubtype;
};

declare class PLKAccountSubtypeCredit extends NSObject implements PLKAccountSubtype {
	static alloc(): PLKAccountSubtypeCredit; // inherited from NSObject

	static createWithUnknownValue(unknownValue: string): PLKAccountSubtypeCredit;

	static createWithValue(value: PLKAccountSubtypeValueCredit): PLKAccountSubtypeCredit;

	static new(): PLKAccountSubtypeCredit; // inherited from NSObject

	readonly subtype: PLKAccountSubtypeValueCredit;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly rawStringValue: string; // inherited from PLKAccountSubtype

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PLKAccountSubtypeDepository extends NSObject implements PLKAccountSubtype {
	static alloc(): PLKAccountSubtypeDepository; // inherited from NSObject

	static createWithUnknownValue(unknownValue: string): PLKAccountSubtypeDepository;

	static createWithValue(value: PLKAccountSubtypeValueDepository): PLKAccountSubtypeDepository;

	static new(): PLKAccountSubtypeDepository; // inherited from NSObject

	readonly subtype: PLKAccountSubtypeValueDepository;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly rawStringValue: string; // inherited from PLKAccountSubtype

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PLKAccountSubtypeInvestment extends NSObject implements PLKAccountSubtype {
	static alloc(): PLKAccountSubtypeInvestment; // inherited from NSObject

	static createWithUnknownValue(unknownValue: string): PLKAccountSubtypeInvestment;

	static createWithValue(value: PLKAccountSubtypeValueInvestment): PLKAccountSubtypeInvestment;

	static new(): PLKAccountSubtypeInvestment; // inherited from NSObject

	readonly subtype: PLKAccountSubtypeValueInvestment;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly rawStringValue: string; // inherited from PLKAccountSubtype

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PLKAccountSubtypeLoan extends NSObject implements PLKAccountSubtype {
	static alloc(): PLKAccountSubtypeLoan; // inherited from NSObject

	static createWithUnknownValue(unknownValue: string): PLKAccountSubtypeLoan;

	static createWithValue(value: PLKAccountSubtypeValueLoan): PLKAccountSubtypeLoan;

	static new(): PLKAccountSubtypeLoan; // inherited from NSObject

	readonly subtype: PLKAccountSubtypeValueLoan;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly rawStringValue: string; // inherited from PLKAccountSubtype

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PLKAccountSubtypeOther extends NSObject implements PLKAccountSubtype {
	static alloc(): PLKAccountSubtypeOther; // inherited from NSObject

	static createWithRawStringValue(rawStringValue: string): PLKAccountSubtypeOther;

	static createWithValue(value: PLKAccountSubtypeValueOther): PLKAccountSubtypeOther;

	static new(): PLKAccountSubtypeOther; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly rawStringValue: string; // inherited from PLKAccountSubtype

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class PLKAccountSubtypeUnknown extends NSObject implements PLKAccountSubtype {
	static alloc(): PLKAccountSubtypeUnknown; // inherited from NSObject

	static createWithRawTypeStringValueRawSubtypeStringValue(rawTypeStringValue: string, rawTypeSubStringValue: string): PLKAccountSubtypeUnknown;

	static new(): PLKAccountSubtypeUnknown; // inherited from NSObject

	readonly rawSubtypeStringValue: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly rawStringValue: string; // inherited from PLKAccountSubtype

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum PLKAccountSubtypeValueCredit {
	None = -1,

	All = 0,

	CreditCard = 1,

	Paypal = 2,
}

declare const enum PLKAccountSubtypeValueDepository {
	None = -1,

	All = 0,

	CashManagement = 1,

	Cd = 2,

	Checking = 3,

	Ebt = 4,

	Hsa = 5,

	MoneyMarket = 6,

	Paypal = 7,

	Prepaid = 8,

	Savings = 9,
}

declare const enum PLKAccountSubtypeValueInvestment {
	InvestmentNone = -1,

	InvestmentAll = 0,

	Investment401a = 1,

	Investment401k = 2,

	Investment403B = 3,

	Investment457b = 4,

	Investment529 = 5,

	InvestmentBrokerage = 6,

	InvestmentCashIsa = 7,

	InvestmentEducationSavingsAccount = 8,

	InvestmentFixedAnnuity = 9,

	InvestmentGic = 10,

	InvestmentHealthReimbursementArrangement = 11,

	InvestmentHsa = 12,

	InvestmentIra = 13,

	InvestmentIsa = 14,

	InvestmentKeogh = 15,

	InvestmentLif = 16,

	InvestmentLira = 17,

	InvestmentLrif = 18,

	InvestmentLrsp = 19,

	InvestmentMutualFund = 20,

	InvestmentNonTaxableBrokerageAccount = 21,

	InvestmentPension = 22,

	InvestmentPlan = 23,

	InvestmentPrif = 24,

	InvestmentProfitSharingPlan = 25,

	InvestmentRdsp = 26,

	InvestmentResp = 27,

	InvestmentRetirement = 28,

	InvestmentRlif = 29,

	InvestmentRoth401k = 30,

	InvestmentRoth = 31,

	InvestmentRrif = 32,

	InvestmentRrsp = 33,

	InvestmentSarsep = 34,

	InvestmentSepIra = 35,

	InvestmentSimpleIra = 36,

	InvestmentSipp = 37,

	InvestmentStockPlan = 38,

	InvestmentTfsa = 39,

	InvestmentThriftSavingsPlan = 40,

	InvestmentTrust = 41,

	InvestmentUgma = 42,

	InvestmentUtma = 43,

	InvestmentVariableAnnuity = 44,
}

declare const enum PLKAccountSubtypeValueLoan {
	None = -1,

	All = 0,

	Auto = 1,

	Business = 2,

	Commercial = 3,

	Construction = 4,

	Consumer = 5,

	HomeEquity = 6,

	LineOfCredit = 7,

	Loan = 8,

	Mortgage = 9,

	Overdraft = 10,

	Student = 11,
}

declare const enum PLKAccountSubtypeValueOther {
	None = -1,

	All = 0,

	Other = 1,
}

declare const enum PLKApiErrorCode {
	InternalServerError = 0,

	PlannedMaintenance = 1,
}

declare const enum PLKAssetReportErrorCode {
	ProductNotEnabled = 0,

	DataUnavailable = 1,

	ProductNotReady = 2,

	AssetReportGenerationFailed = 3,

	InvalidParent = 4,

	InsightsNotEnabled = 5,

	InsightsPreviouslyNotEnabled = 6,
}

declare const enum PLKAuthErrorCode {
	ProductNotReady = 0,

	VerificationExpired = 1,
}

declare const enum PLKEnvironment {
	Production = 0,

	Development = 1,

	Sandbox = 2,
}

declare class PLKEventMetadata extends NSObject {
	static alloc(): PLKEventMetadata; // inherited from NSObject

	static new(): PLKEventMetadata; // inherited from NSObject

	readonly error: NSError;

	readonly exitStatus: PLKExitStatus;

	readonly institutionID: string;

	readonly institutionName: string;

	readonly institutionSearchQuery: string;

	readonly linkSessionID: string;

	readonly metadataJSON: string;

	readonly mfaType: PLKMFAType;

	readonly requestID: string;

	readonly timestamp: Date;

	readonly viewName: PLKViewName;

	constructor(o: { error: NSError; exitStatus: PLKExitStatus; institutionID: string; institutionName: string; institutionSearchQuery: string; linkSessionID: string; mfaType: PLKMFAType; requestID: string; timestamp: Date; viewName: PLKViewName; metadataJSON: string });

	initWithErrorExitStatusInstitutionIDInstitutionNameInstitutionSearchQueryLinkSessionIDMfaTypeRequestIDTimestampViewNameMetadataJSON(error: NSError, exitStatus: PLKExitStatus, institutionID: string, institutionName: string, institutionSearchQuery: string, linkSessionID: string, mfaType: PLKMFAType, requestID: string, timestamp: Date, viewName: PLKViewName, metadataJSON: string): this;
}

declare class PLKEventName extends NSObject {
	static alloc(): PLKEventName; // inherited from NSObject

	static createWithUnknownStringValue(unknownStringValue: string): PLKEventName;

	static createWithValue(value: PLKEventNameValue): PLKEventName;

	static new(): PLKEventName; // inherited from NSObject

	readonly unknownStringValue: string;

	readonly value: PLKEventNameValue;
}

declare const enum PLKEventNameValue {
	None = -1,

	CloseOAuth = 0,

	Error = 1,

	Exit = 2,

	FailOAuth = 3,

	Handoff = 4,

	Open = 5,

	OpenMyPlaid = 6,

	OpenOAuth = 7,

	SearchInstitution = 8,

	SelectInstitution = 9,

	SubmitCredentials = 10,

	SubmitMFA = 11,

	TransitionView = 12,

	MatchedSelectInstitution = 13,

	MatchedSelectVerifyMethod = 14,
}

declare class PLKExitMetadata extends NSObject {
	static alloc(): PLKExitMetadata; // inherited from NSObject

	static new(): PLKExitMetadata; // inherited from NSObject

	readonly institution: PLKInstitution;

	readonly linkSessionID: string;

	readonly metadataJSON: string;

	readonly requestID: string;

	readonly status: PLKExitStatus;

	constructor(o: { status: PLKExitStatus; institution: PLKInstitution; requestID: string; linkSessionID: string; metadataJSON: string });

	initWithStatusInstitutionRequestIDLinkSessionIDMetadataJSON(status: PLKExitStatus, institution: PLKInstitution, requestID: string, linkSessionID: string, metadataJSON: string): this;
}

declare class PLKExitStatus extends NSObject {
	static alloc(): PLKExitStatus; // inherited from NSObject

	static createWithUnknownStringValue(unknownStringValue: string): PLKExitStatus;

	static createWithValue(value: PLKExitStatusValue): PLKExitStatus;

	static new(): PLKExitStatus; // inherited from NSObject

	readonly unknownStringValue: string;

	readonly value: PLKExitStatusValue;
}

declare const enum PLKExitStatusValue {
	None = -1,

	RequiresQuestions = 0,

	RequiresSelections = 1,

	RequiresCode = 2,

	ChooseDevice = 3,

	RequiresCredentials = 4,

	InstitutionNotFound = 5,
}

interface PLKHandler extends NSObjectProtocol {
	continueFromRedirectUri(redirectUri: NSURL): NSError;

	openWithContextViewController(viewController: UIViewController): void;

	openWithContextViewControllerOptions(viewController: UIViewController, options: NSDictionary<string, string>): void;

	openWithPresentationHandler(presentationHandler: (p1: UIViewController) => void): void;

	openWithPresentationHandlerDismissalHandler(presentationHandler: (p1: UIViewController) => void, dismissalHandler: (p1: UIViewController) => void): void;

	openWithPresentationHandlerDismissalHandlerOptions(presentationHandler: (p1: UIViewController) => void, dismissalHandler: (p1: UIViewController) => void, options: NSDictionary<string, string>): void;

	openWithPresentationHandlerOptions(presentationHandler: (p1: UIViewController) => void, options: NSDictionary<string, string>): void;
}
declare var PLKHandler: {
	prototype: PLKHandler;
};

declare class PLKInstitution extends NSObject {
	static alloc(): PLKInstitution; // inherited from NSObject

	static new(): PLKInstitution; // inherited from NSObject

	readonly ID: string;

	readonly name: string;

	constructor(o: { ID: string; name: string });

	initWithIDName(ID: string, name: string): this;
}

declare const enum PLKInstitutionErrorCode {
	InstitutionDown = 0,

	InstitutionNotResponding = 1,

	InstitutionNotAvailable = 2,

	InstitutionNoLongerSupported = 3,
}

declare const enum PLKInvalidInputErrorCode {
	InvalidApiKeys = 0,

	UnauthorizedEnvironment = 1,

	InvalidAccessToken = 2,

	InvalidPublicToken = 3,

	InvalidProduct = 4,

	InvalidAccountId = 5,

	InvalidInstitution = 6,

	TooManyVerificationAttempts = 7,
}

declare const enum PLKInvalidRequestErrorCode {
	MissingFields = 0,

	UnknownFields = 1,

	InvalidField = 2,

	InvalidBody = 3,

	InvalidAddress = 4,

	NotFound = 5,

	SandboxOnly = 6,
}

declare const enum PLKItemErrorCode {
	InsufficientCredentials = 0,

	InvalidCredentials = 1,

	InvalidMfa = 2,

	InvalidSendMethod = 3,

	InvalidUpdatedUsername = 4,

	ItemLocked = 5,

	ItemLoginRequired = 6,

	ItemNoError = 7,

	ItemNotSupported = 8,

	IncorrectDepositAmounts = 9,

	UserSetupRequired = 10,

	MfaNotSupported = 11,

	NoAccounts = 12,

	NoAuthAccounts = 13,

	NoInvestmentAccounts = 14,

	NoLiabilityAccounts = 15,

	ProductNotReady = 16,

	ProductsNotSupported = 17,

	InstantMatchFailed = 18,
}

declare class PLKLinkEvent extends NSObject {
	static alloc(): PLKLinkEvent; // inherited from NSObject

	static new(): PLKLinkEvent; // inherited from NSObject

	readonly eventMetadata: PLKEventMetadata;

	readonly eventName: PLKEventName;

	constructor(o: { eventName: PLKEventName; eventMetadata: PLKEventMetadata });

	initWithEventNameEventMetadata(eventName: PLKEventName, eventMetadata: PLKEventMetadata): this;
}

declare class PLKLinkExit extends NSObject {
	static alloc(): PLKLinkExit; // inherited from NSObject

	static new(): PLKLinkExit; // inherited from NSObject

	readonly error: NSError;

	readonly metadata: PLKExitMetadata;

	constructor(o: { error: NSError; metadata: PLKExitMetadata });

	constructor(o: { error: NSError; metadata: PLKExitMetadata });

	initWithErrorMetadata(error: NSError, metadata: PLKExitMetadata): this;

	initWithErrorMetadataMethod(error: NSError, metadata: PLKExitMetadata): this;
}

declare class PLKLinkPublicKeyConfiguration extends NSObject {
	static alloc(): PLKLinkPublicKeyConfiguration; // inherited from NSObject

	static createWithClientNameEnvironmentProductsLanguageTokenCountryCodesOnSuccess(clientName: string, environment: PLKEnvironment, products: NSArray<number> | number[], language: string, token: PLKLinkPublicKeyConfigurationToken, countryCodes: NSArray<string> | string[], successHandler: (p1: PLKLinkSuccess) => void): PLKLinkPublicKeyConfiguration;

	static new(): PLKLinkPublicKeyConfiguration; // inherited from NSObject

	accountSubtypes: NSArray<PLKAccountSubtype>;

	readonly clientName: string;

	countryCodes: NSArray<string>;

	readonly environment: PLKEnvironment;

	language: string;

	linkCustomizationName: string;

	oauthConfiguration: PLKOAuthNonceConfiguration;

	onEvent: (p1: PLKLinkEvent) => void;

	onExit: (p1: PLKLinkExit) => void;

	onSuccess: (p1: PLKLinkSuccess) => void;

	products: NSArray<number>;

	token: PLKLinkPublicKeyConfigurationToken;

	userEmailAddress: string;

	userLegalName: string;

	userPhoneNumber: string;

	webhook: NSURL;

	constructor(o: { clientName: string; environment: PLKEnvironment; products: NSArray<number> | number[]; language: string; token: PLKLinkPublicKeyConfigurationToken; countryCodes: NSArray<string> | string[]; onSuccess: (p1: PLKLinkSuccess) => void });

	initWithClientNameEnvironmentProductsLanguageTokenCountryCodesOnSuccess(clientName: string, environment: PLKEnvironment, products: NSArray<number> | number[], language: string, token: PLKLinkPublicKeyConfigurationToken, countryCodes: NSArray<string> | string[], successHandler: (p1: PLKLinkSuccess) => void): this;
}

declare class PLKLinkPublicKeyConfigurationToken extends NSObject {
	static alloc(): PLKLinkPublicKeyConfigurationToken; // inherited from NSObject

	static createWithDepositSwitchTokenPublicKey(depositSwitchToken: string, publicKey: string): PLKLinkPublicKeyConfigurationToken;

	static createWithPaymentTokenPublicKey(paymentToken: string, publicKey: string): PLKLinkPublicKeyConfigurationToken;

	static createWithPublicKey(publicKey: string): PLKLinkPublicKeyConfigurationToken;

	static createWithPublicTokenPublicKey(publicToken: string, publicKey: string): PLKLinkPublicKeyConfigurationToken;

	static new(): PLKLinkPublicKeyConfigurationToken; // inherited from NSObject

	readonly depositSwitchToken: string;

	readonly paymentToken: string;

	readonly publicKey: string;

	readonly publicToken: string;
}

declare class PLKLinkSuccess extends NSObject {
	static alloc(): PLKLinkSuccess; // inherited from NSObject

	static new(): PLKLinkSuccess; // inherited from NSObject

	readonly metadata: PLKSuccessMetadata;

	readonly publicToken: string;

	constructor(o: { publicToken: string; metadata: PLKSuccessMetadata });

	constructor(o: { publicToken: string; metadata: PLKSuccessMetadata });

	initWithPublicTokenMetadata(publicToken: string, metadata: PLKSuccessMetadata): this;

	initWithPublicTokenMetadataMethod(publicToken: string, metadata: PLKSuccessMetadata): this;
}

declare class PLKLinkTokenConfiguration extends NSObject {
	static alloc(): PLKLinkTokenConfiguration; // inherited from NSObject

	static createWithTokenOnSuccess(token: string, successHandler: (p1: PLKLinkSuccess) => void): PLKLinkTokenConfiguration;

	static new(): PLKLinkTokenConfiguration; // inherited from NSObject

	onEvent: (p1: PLKLinkEvent) => void;

	onExit: (p1: PLKLinkExit) => void;

	onSuccess: (p1: PLKLinkSuccess) => void;

	readonly token: string;

	constructor(o: { token: string; onSuccess: (p1: PLKLinkSuccess) => void });

	initWithTokenOnSuccess(token: string, successHandler: (p1: PLKLinkSuccess) => void): this;
}

declare const enum PLKMFAType {
	None = -1,

	Code = 0,

	Device = 1,

	Questions = 2,

	Selections = 3,
}

declare class PLKOAuthNonceConfiguration extends NSObject {
	static alloc(): PLKOAuthNonceConfiguration; // inherited from NSObject

	static createWithNonceRedirectUri(nonce: string, redirectUri: NSURL): PLKOAuthNonceConfiguration;

	static new(): PLKOAuthNonceConfiguration; // inherited from NSObject

	readonly nonce: string;

	readonly redirectUri: NSURL;

	constructor(o: { nonce: string; redirectUri: NSURL });

	initWithNonceRedirectUri(nonce: string, redirectUri: NSURL): this;
}

declare class PLKPlaid extends NSObject {
	static alloc(): PLKPlaid; // inherited from NSObject

	static createWithLinkPublicKeyConfigurationError(linkPublicKeyConfiguration: PLKLinkPublicKeyConfiguration): PLKHandler;

	static createWithLinkTokenConfigurationError(linkTokenConfiguration: PLKLinkTokenConfiguration): PLKHandler;

	static new(): PLKPlaid; // inherited from NSObject

	static readonly sdkVersion: string;
}

declare const enum PLKProduct {
	Assets = 0,

	Auth = 1,

	DepositSwitch = 2,

	Identity = 3,

	Income = 4,

	Investments = 5,

	Liabilities = 6,

	LiabilitiesReport = 7,

	PaymentInitiation = 8,

	Transactions = 9,
}

declare const enum PLKRateLimitErrorCode {
	AccountsLimit = 0,

	AdditionLimit = 1,

	AuthLimit = 2,

	IdentityLimit = 3,

	IncomeLimit = 4,

	ItemGetLimit = 5,

	RateLimit = 6,

	TransactionsLimit = 7,
}

declare class PLKSuccessMetadata extends NSObject {
	static alloc(): PLKSuccessMetadata; // inherited from NSObject

	static new(): PLKSuccessMetadata; // inherited from NSObject

	readonly accounts: NSArray<PLKAccount>;

	readonly institution: PLKInstitution;

	readonly linkSessionID: string;

	readonly metadataJSON: string;

	constructor(o: { linkSessionID: string; institution: PLKInstitution; accounts: NSArray<PLKAccount> | PLKAccount[]; metadataJSON: string });

	initWithLinkSessionIDInstitutionAccountsMetadataJSON(linkSessionID: string, institution: PLKInstitution, accounts: NSArray<PLKAccount> | PLKAccount[], metadataJSON: string): this;
}

declare class PLKVerificationStatus extends NSObject {
	static alloc(): PLKVerificationStatus; // inherited from NSObject

	static createWithUnknownStringValue(unknownStringValue: string): PLKVerificationStatus;

	static createWithValue(value: PLKVerificationStatusValue): PLKVerificationStatus;

	static new(): PLKVerificationStatus; // inherited from NSObject

	readonly unknownStringValue: string;

	readonly value: PLKVerificationStatusValue;
}

declare const enum PLKVerificationStatusValue {
	None = -1,

	PendingAutomaticVerification = 0,

	PendingManualVerification = 1,

	ManuallyVerified = 2,
}

declare class PLKViewName extends NSObject {
	static alloc(): PLKViewName; // inherited from NSObject

	static createWithUnknownStringValue(unknownStringValue: string): PLKViewName;

	static createWithValue(value: PLKViewNameValue): PLKViewName;

	static new(): PLKViewName; // inherited from NSObject

	readonly unknownStringValue: string;

	readonly value: PLKViewNameValue;
}

declare const enum PLKViewNameValue {
	None = -1,

	Connected = 0,

	Consent = 1,

	Credential = 2,

	Error = 3,

	Exit = 4,

	Loading = 5,

	MFA = 6,

	Numbers = 7,

	Recaptcha = 8,

	SelectAccount = 9,

	SelectInstitution = 10,

	MatchedConsent = 11,

	MatchedCredential = 12,

	MatchedMFA = 13,
}
