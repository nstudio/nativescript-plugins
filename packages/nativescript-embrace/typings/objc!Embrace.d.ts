
declare const enum EMBAppFramework {

	Native = 1,

	ReactNative = 2,

	Unity = 3
}

declare const enum EMBBackgroundSessionMode {

	Disabled = 0,

	Hybrid = 1,

	Full = 2
}

declare var EMBBundleIdentifier: string;

declare class EMBCustomFlow extends NSObject {

	static alloc(): EMBCustomFlow; // inherited from NSObject

	static flow(): EMBCustomFlow;

	static new(): EMBCustomFlow; // inherited from NSObject

	momentCompleteWithName(momentName: string): boolean;

	momentCompleteWithNameMomentId(momentName: string, momentId: string): boolean;

	momentCompleteWithNameMomentIdProperties(momentName: string, momentId: string, properties: NSDictionary<string, string>): boolean;

	momentCompleteWithNameProperties(momentName: string, properties: NSDictionary<string, string>): boolean;

	momentFailWithNameMessage(momentName: string, message: string): boolean;

	momentFailWithNameMessageProperties(momentName: string, message: string, properties: NSDictionary<string, string>): boolean;

	momentFailWithNameMomentIdMessage(momentName: string, momentId: string, message: string): boolean;

	momentFailWithNameMomentIdMessageProperties(momentName: string, momentId: string, message: string, properties: NSDictionary<string, string>): boolean;

	momentStartWithNameAllowScreenshotProperties(momentName: string, allowScreenshot: boolean, properties: NSDictionary<string, string>): string;
}

declare const enum EMBLogLevel {

	None = 0,

	Trace = 1,

	Debug = 2,

	Info = 3,

	Warning = 4,

	Error = 5
}

declare class EMBNetworkRequest extends NSObject {

	static alloc(): EMBNetworkRequest; // inherited from NSObject

	static initWithURLMethodStartTime(url: NSURL, method: string, startTime: Date): EMBNetworkRequest;

	static initWithURLMethodStartTimeEndTimeBytesInBytesOutResponseCodeErrorTraceId(url: NSURL, method: string, startTime: Date, endTime: Date, bytesIn: number, bytesOut: number, responseCode: number, error: NSError, traceId: string): EMBNetworkRequest;

	static initWithURLStringMethodStartTime(urlString: string, method: string, startTime: Date): EMBNetworkRequest;

	static initWithURLStringMethodStartTimeEndTimeBytesInBytesOutResponseCodeErrorTraceId(urlString: string, method: string, startTime: Date, endTime: Date, bytesIn: number, bytesOut: number, responseCode: number, error: NSError, traceId: string): EMBNetworkRequest;

	static networkRequestWithURLMethodStartTime(url: NSURL, method: string, startTime: Date): EMBNetworkRequest;

	static networkRequestWithURLMethodStartTimeEndTimeBytesInBytesOutResponseCodeErrorTraceId(url: NSURL, method: string, startTime: Date, endTime: Date, bytesIn: number, bytesOut: number, responseCode: number, error: NSError, traceId: string): EMBNetworkRequest;

	static networkRequestWithURLStringMethodStartTime(urlString: string, method: string, startTime: Date): EMBNetworkRequest;

	static networkRequestWithURLStringMethodStartTimeEndTimeBytesInBytesOutResponseCodeErrorTraceId(urlString: string, method: string, startTime: Date, endTime: Date, bytesIn: number, bytesOut: number, responseCode: number, error: NSError, traceId: string): EMBNetworkRequest;

	static new(): EMBNetworkRequest; // inherited from NSObject

	bytesIn: number;

	bytesOut: number;

	readonly endEpoch: number;

	endTime: Date;

	error: NSError;

	readonly method: string;

	responseCode: number;

	readonly startEpoch: number;

	readonly startTime: Date;

	traceId: string;

	readonly url: NSURL;
}

declare class EMBPurchaseFlow extends EMBCustomFlow {

	static alloc(): EMBPurchaseFlow; // inherited from NSObject

	static flow(): EMBPurchaseFlow; // inherited from EMBCustomFlow

	static new(): EMBPurchaseFlow; // inherited from NSObject

	addToCartCompleteWithMomentId(momentId: string): boolean;

	addToCartCompleteWithMomentIdProperties(momentId: string, properties: NSDictionary<string, string>): boolean;

	addToCartFailWithMomentIdMessage(momentId: string, message: string): boolean;

	addToCartFailWithMomentIdMessageProperties(momentId: string, message: string, properties: NSDictionary<string, string>): boolean;

	addToCartStartWithItemIdQuantityPriceProperties(itemId: string, quantity: number, price: number, properties: NSDictionary<string, string>): string;

	purchaseComplete(): boolean;

	purchaseCompleteWithProperties(properties: NSDictionary<string, string>): boolean;

	purchaseFailWithMessage(message: string): boolean;

	purchaseFailWithMessageProperties(message: string, properties: NSDictionary<string, string>): boolean;

	purchaseStartWithOrderIdNumItemsAmountPaymentTypeProperties(orderId: string, numItems: number, amount: number, paymentType: string, properties: NSDictionary<string, string>): boolean;
}

declare class EMBRegistrationFlow extends EMBCustomFlow {

	static alloc(): EMBRegistrationFlow; // inherited from NSObject

	static flow(): EMBRegistrationFlow; // inherited from EMBCustomFlow

	static new(): EMBRegistrationFlow; // inherited from NSObject

	registrationComplete(): boolean;

	registrationCompleteAsPayer(isPayer: boolean): boolean;

	registrationCompleteAsPayerProperties(isPayer: boolean, properties: NSDictionary<string, string>): boolean;

	registrationCompleteWithProperties(properties: NSDictionary<string, string>): boolean;

	registrationFailWithMessage(message: string): boolean;

	registrationFailWithMessageProperties(message: string, properties: NSDictionary<string, string>): boolean;

	registrationStartWithIdUsernameEmailProperties(userId: string, username: string, email: string, properties: NSDictionary<string, string>): boolean;

	registrationStartWithSourceProperties(source: string, properties: NSDictionary<string, string>): boolean;
}

declare const enum EMBSeverity {

	Error = 0,

	Warning = 1,

	Info = 2
}

declare class EMBSubscriptionPurchaseFlow extends EMBCustomFlow {

	static alloc(): EMBSubscriptionPurchaseFlow; // inherited from NSObject

	static flow(): EMBSubscriptionPurchaseFlow; // inherited from EMBCustomFlow

	static new(): EMBSubscriptionPurchaseFlow; // inherited from NSObject

	subscriptionPurchaseComplete(): boolean;

	subscriptionPurchaseCompleteWithProperties(properties: NSDictionary<string, string>): boolean;

	subscriptionPurchaseFailWithMessage(message: string): boolean;

	subscriptionPurchaseFailWithMessageProperties(message: string, properties: NSDictionary<string, string>): boolean;

	subscriptionPurchaseStartWithOrderIdSubscriptionTypeAmountPaymentTypeProperties(orderId: string, subscriptionType: string, amount: number, paymentType: string, properties: NSDictionary<string, string>): string;
}

declare class Embrace extends NSObject {

	static alloc(): Embrace; // inherited from NSObject

	static new(): Embrace; // inherited from NSObject

	static sharedInstance(): Embrace;

	delegate: EmbraceDelegate;

	addSessionPropertyWithKeyPermanent(value: string, key: string, permanent: boolean): boolean;

	beginEventWithName(name: string): void;

	beginEventWithNameIdentifier(name: string, identifier: string): void;

	beginEventWithNameIdentifierAllowScreenshot(name: string, identifier: string, allowScreenshot: boolean): void;

	beginEventWithNameIdentifierAllowScreenshotProperties(name: string, identifier: string, allowScreenshot: boolean, properties: NSDictionary<string, string>): void;

	clearAllUserPersonas(): void;

	clearUserAsPayer(): void;

	clearUserEmail(): void;

	clearUserIdentifier(): void;

	clearUserPersona(persona: string): void;

	clearUsername(): void;

	crash(): void;

	endAppStartup(): void;

	endAppStartupWithProperties(properties: NSDictionary<string, string>): void;

	endEventWithName(name: string): void;

	endEventWithNameIdentifier(name: string, identifier: string): void;

	endMomentWithName(name: string): void;

	endMomentWithNameIdentifier(name: string, identifier: string): void;

	endMomentWithNameIdentifierProperties(name: string, identifier: string, properties: NSDictionary<string, string>): void;

	endMomentWithNameProperties(name: string, properties: NSDictionary<string, string>): void;

	endSession(): void;

	endViewWithName(name: string): boolean;

	getDeviceId(): string;

	getSessionProperties(): NSDictionary<any, any>;

	logBreadcrumbWithMessage(message: string): void;

	logErrorMessageScreenshotProperties(message: string, screenshot: boolean, properties: NSDictionary<string, string>): void;

	logHandledErrorScreenshotProperties(error: NSError, screenshot: boolean, properties: NSDictionary<string, string>): void;

	logInfoMessageProperties(message: string, properties: NSDictionary<string, string>): void;

	logMessageWithSeverity(name: string, severity: EMBSeverity): void;

	logMessageWithSeverityProperties(name: string, severity: EMBSeverity, properties: NSDictionary<string, string>): void;

	logMessageWithSeverityPropertiesTakeScreenshot(name: string, severity: EMBSeverity, properties: NSDictionary<string, string>, takeScreenshot: boolean): void;

	logNetworkRequest(request: EMBNetworkRequest): void;

	logURLSessionTaskMetricsForURLSessionTask(metrics: NSURLSessionTaskMetrics, task: NSURLSessionTask): void;

	logWarningMessageScreenshotProperties(message: string, screenshot: boolean, properties: NSDictionary<string, string>): void;

	logWebViewBeganRequest(request: NSURLRequest): void;

	pauseTapCoordinateCapture(): void;

	removeSessionPropertyWithKey(key: string): void;

	resumeTapCoordinateCapture(): void;

	setAirplaneModeEnabled(enabled: boolean): void;

	setBackgroundSessionMode(mode: EMBBackgroundSessionMode): void;

	setCleanLogsEnabled(enabled: boolean): void;

	setDebuggingEnabled(enabled: boolean): void;

	setTraceEnabled(enabled: boolean): void;

	setUserAsPayer(): void;

	setUserEmail(email: string): void;

	setUserIdentifier(userId: string): void;

	setUserPersona(persona: string): void;

	setUsername(username: string): void;

	start(): void;

	startMomentWithName(name: string): void;

	startMomentWithNameIdentifier(name: string, identifier: string): void;

	startMomentWithNameIdentifierAllowScreenshot(name: string, identifier: string, allowScreenshot: boolean): void;

	startMomentWithNameIdentifierAllowScreenshotProperties(name: string, identifier: string, allowScreenshot: boolean, properties: NSDictionary<string, string>): void;

	startMomentWithNameIdentifierProperties(name: string, identifier: string, properties: NSDictionary<string, string>): void;

	startViewWithName(name: string): boolean;

	startWithConfig(config: EmbraceConfig): void;

	startWithConfigLaunchOptions(config: EmbraceConfig, launchOptions: NSDictionary<string, any>): void;

	startWithKey(apiKey: string): void;

	startWithKeyLaunchOptions(apiKey: string, launchOptions: NSDictionary<string, any>): void;

	startWithKeyLaunchOptionsFramework(apiKey: string, launchOptions: NSDictionary<string, any>, framework: EMBAppFramework): void;

	startWithLaunchOptions(launchOptions: NSDictionary<any, any>): void;

	startWithLaunchOptionsFramework(launchOptions: NSDictionary<any, any>, framework: EMBAppFramework): void;

	throwException(): void;
}

declare class EmbraceConfig extends NSObject {

	static alloc(): EmbraceConfig; // inherited from NSObject

	static new(): EmbraceConfig; // inherited from NSObject

	readonly APIKey: string;

	readonly automaticViewCaptureEnabled: boolean;

	readonly backgroundFetchCaptureEnable: boolean;

	readonly baseURL: string;

	readonly captureCoordinatesEnabled: boolean;

	readonly collectNetworkRequestMetrics: boolean;

	readonly configBaseURL: string;

	readonly crashReportEnabled: number;

	readonly devBaseURL: string;

	readonly disabledUrlPatterns: NSArray<any>;

	readonly ignoreCancelledRequests: NSArray<any>;

	readonly imagesBaseURL: string;

	readonly maxSessionSeconds: number;

	readonly networkCaptureDomains: NSDictionary<string, number>;

	readonly networkCaptureLimit: number;

	readonly networkCapturePublicKey: string;

	readonly nsurlconnectionProxyEnable: boolean;

	readonly oslogTrackingEnabled: boolean;

	readonly startupAutoendSeconds: number;

	readonly startupScreenshotEnabled: boolean;

	readonly traceIdHeader: string;

	readonly urlSessionCaptureFilters: NSArray<string>;

	readonly webviewEnable: boolean;

	readonly webviewStripQueryparams: boolean;

	readonly webviewURLLength: number;

	readonly wttAutoReloadEnabled: boolean;

	constructor(o: { APIKey: string; });

	constructor(o: { contentsOfFile: string; });

	constructor(o: { defaultConfig: void; });

	initWithAPIKey(apiKey: string): this;

	initWithContentsOfFile(path: string): this;

	initWithDefaultConfig(): this;
}

interface EmbraceDelegate extends NSObjectProtocol {

	embraceSDKIsEnabled?(enabled: boolean): void;
}
declare var EmbraceDelegate: {

	prototype: EmbraceDelegate;
};

declare var EmbraceVersionNumber: number;

declare var EmbraceVersionString: interop.Reference<number>;

declare class RNEmbrace extends NSObject {

	static alloc(): RNEmbrace; // inherited from NSObject

	static new(): RNEmbrace; // inherited from NSObject

	static sharedInstance(): RNEmbrace;

	logMessageWithSeverityPropertiesTakeScreenshotJsStackTrace(name: string, severity: EMBSeverity, properties: NSDictionary<any, any>, takeScreenshot: boolean, jsStackTrace: string): void;

	logMessageWithSeverityPropertiesTakeScreenshotJsStackTraceWasHandled(name: string, severity: EMBSeverity, properties: NSDictionary<any, any>, takeScreenshot: boolean, jsStackTrace: string, wasHandled: boolean): void;

	logUnhandledJSExceptionMessageTypeStackTrace(name: string, message: string, type: string, stackTrace: string): void;

	setJavaScriptBundleURL(url: string): void;

	setJavaScriptPatchNumber(number: string): void;

	setReactNativeVersion(version: string): void;
}
