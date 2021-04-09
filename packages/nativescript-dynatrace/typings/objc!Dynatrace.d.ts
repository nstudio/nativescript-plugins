declare class DTXAction extends NSObject {
	static alloc(): DTXAction; // inherited from NSObject

	static enterActionWithName(actionName: string): DTXAction;

	static enterActionWithNameParentAction(actionName: string, parentAction: DTXAction): DTXAction;

	static new(): DTXAction; // inherited from NSObject

	static reportErrorWithNameError(errorName: string, error: NSError): DTX_StatusCode;

	static reportErrorWithNameErrorValue(errorName: string, errorValue: number): DTX_StatusCode;

	static reportErrorWithNameException(errorName: string, exception: NSException): DTX_StatusCode;

	readonly tagId: number;

	getTagForURL(url: NSURL): string;

	leaveAction(): DTX_StatusCode;

	reportErrorWithNameError(errorName: string, error: NSError): DTX_StatusCode;

	reportErrorWithNameErrorValue(errorName: string, errorValue: number): DTX_StatusCode;

	reportErrorWithNameException(errorName: string, exception: NSException): DTX_StatusCode;

	reportEventWithName(eventName: string): DTX_StatusCode;

	reportValueWithNameDoubleValue(valueName: string, doubleValue: number): DTX_StatusCode;

	reportValueWithNameIntValue(valueName: string, intValue: number): DTX_StatusCode;

	reportValueWithNameStringValue(valueName: string, stringValue: string): DTX_StatusCode;
}

interface DTXUserPrivacyOptions extends NSObjectProtocol {
	crashReplayOptedIn: boolean;

	crashReportingOptedIn: boolean;

	dataCollectionLevel: DTX_DataCollectionLevel;
}
declare var DTXUserPrivacyOptions: {
	prototype: DTXUserPrivacyOptions;
};

declare class DTXWebRequestTiming extends NSObject {
	static alloc(): DTXWebRequestTiming; // inherited from NSObject

	static getDTXWebRequestTimingRequestUrl(requestTagString: string, requestUrl: NSURL): DTXWebRequestTiming;

	static new(): DTXWebRequestTiming; // inherited from NSObject

	startWebRequestTiming(): DTX_StatusCode;

	stopWebRequestTiming(statusCode: string): DTX_StatusCode;
}

declare const enum DTX_DataCollectionLevel {
	Off = 0,

	Performance = 1,

	UserBehavior = 2,
}

declare const enum DTX_StatusCode {
	CaptureOff = 1,

	CaptureOn = 2,

	CrashReportingUnavailable = 4,

	CrashReportingAvailable = 5,

	Error_NotInitialized = -1,

	Error_InvalidRange = -2,

	Error_InternalError = -3,

	Error_ActionNotFound = -4,

	Error_InvalidParameter = -5,

	Error_ActionEnded = -6,

	ReportErrorOff = -8,

	TruncatedEventName = -9,

	CrashReportInvalid = -10,

	TruncatedUserId = -11,
}

declare class Dynatrace extends NSObject {
	static alloc(): Dynatrace; // inherited from NSObject

	static applyUserPrivacyOptionsCompletion(userOptions: DTXUserPrivacyOptions, completion: (p1: boolean) => void): void;

	static beaconHeaders(): NSDictionary<string, string>;

	static crashReportingOptedIn(): boolean;

	static dataCollectionLevel(): DTX_DataCollectionLevel;

	static enableCrashReportingWithReport(sendCrashReport: boolean): DTX_StatusCode;

	static enableCrashReportingWithReportEmailRecipientsEmailSubjectEmailMessageEmailFilenameSendAppleStyleReportAlertTitleAlertMessageYesButtonTextNoButtonText(sendCrashReport: boolean, recipients: NSArray<any> | any[], subject: string, message: string, filename: string, sendAppleStyleReport: boolean, alertTitle: string, alertMessage: string, yesButtonText: string, noButtonText: string): DTX_StatusCode;

	static enableCrashReportingWithReportHockeyAppIdentifierHockeyWaitUntilReachableHockeyUserIdHockeyUserNameHockeyContactEmailHockeyCrashDescription(sendCrashReport: boolean, appIdentifier: string, waitUntilReachable: boolean, userId: string, userName: string, contactEmail: string, description: string): DTX_StatusCode;

	static endVisit(): DTX_StatusCode;

	static flushEvents(): DTX_StatusCode;

	static getCommunicationProblemNotificationName(): string;

	static getRequestTagHeader(): string;

	static getRequestTagValueForURL(url: NSURL): string;

	static identifyUser(userId: string): DTX_StatusCode;

	static identifyUserParentAction(userId: string, parentAction: DTXAction): DTX_StatusCode;

	static lastErrorCode(): number;

	static lastErrorMsg(): string;

	static new(): Dynatrace; // inherited from NSObject

	static setBeaconHeaders(beaconHeaders: NSDictionary<string, string>): boolean;

	static setCrashReportingOptedIn(optedIn: boolean): void;

	static setDataCollectionLevelCompletion(dataCollectionLevel: DTX_DataCollectionLevel, completion: (p1: boolean) => void): void;

	static setGpsLocation(gpsLocation: CLLocation): DTX_StatusCode;

	static shutdown(): DTX_StatusCode;

	static startupWithApplicationNameServerURLAllowAnyCertCertificatePath(applicationName: string, serverURL: string, allowAnyCert: boolean, pathToCertificateAsDER: string): DTX_StatusCode;

	static startupWithConfig(config: NSDictionary<string, any>): DTX_StatusCode;

	static startupWithInfoPlistSettings(): DTX_StatusCode;

	static userPrivacyOptions(): DTXUserPrivacyOptions;
}

declare var Dynatrace_FrameworkVersionNumber: number;

declare var Dynatrace_FrameworkVersionString: interop.Reference<number>;

declare var kDTXAgentCertificatePath: string;

declare var kDTXAgentStartupPath: string;

declare var kDTXAllowAnyCert: string;

declare var kDTXApplicationID: string;

declare var kDTXAutoActionMaxDurationMilliseconds: string;

declare var kDTXAutoActionTimeoutMilliseconds: string;

declare var kDTXBeaconURL: string;

declare var kDTXCrashReportingEnabled: string;

declare var kDTXExcludedControlClasses: string;

declare var kDTXExcludedControls: string;

declare var kDTXExcludedLifecycleClasses: string;

declare var kDTXHybridApplication: string;

declare var kDTXInstrumentAutoUserAction: string;

declare var kDTXInstrumentFrameworks: string;

declare var kDTXInstrumentGPSLocation: string;

declare var kDTXInstrumentLifecycleMonitoring: string;

declare var kDTXInstrumentWebRequestTiming: string;

declare var kDTXInstrumentWebViewTiming: string;

declare var kDTXLogLevel: string;

declare var kDTXSendCrashReports: string;

declare var kDTXSendEmptyAutoAction: string;

declare var kDTXUserOptIn: string;
