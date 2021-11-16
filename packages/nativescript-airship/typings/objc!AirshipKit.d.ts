
declare var AirshipKitVersionNumber: number;

declare var AirshipKitVersionString: interop.Reference<number>;

interface AppStateTrackerProtocol {

	state: UAApplicationState;
}
declare var AppStateTrackerProtocol: {

	prototype: AppStateTrackerProtocol;
};

declare class ChannelRegistrar extends NSObject implements UAChannelRegistrarProtocol {

	static alloc(): ChannelRegistrar; // inherited from NSObject

	static new(): ChannelRegistrar; // inherited from NSObject

	readonly channelID: string; // inherited from UAChannelRegistrarProtocol

	delegate: UAChannelRegistrarDelegate; // inherited from UAChannelRegistrarProtocol

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; });

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channelAPIClient: UAChannelAPIClient; date: UADate; dispatcher: UADispatcher; taskManager: UATaskManager; });

	initWithConfigDataStore(config: UARuntimeConfig, dataStore: UAPreferenceDataStore): this;

	initWithConfigDataStoreChannelAPIClientDateDispatcherTaskManager(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channelAPIClient: UAChannelAPIClient, date: UADate, dispatcher: UADispatcher, taskManager: UATaskManager): this;

	performFullRegistration(): void;

	registerForcefully(forcefully: boolean): void;
}

interface LocaleManagerProtocol {

	currentLocale: NSLocale;

	clearLocale(): void;
}
declare var LocaleManagerProtocol: {

	prototype: LocaleManagerProtocol;
};

declare class NativeBridgeActionHandler extends NSObject implements UANativeBridgeActionHandlerProtocol {

	static alloc(): NativeBridgeActionHandler; // inherited from NSObject

	static isActionCommand(command: UAJavaScriptCommand): boolean;

	static new(): NativeBridgeActionHandler; // inherited from NSObject

	runActionsForCommandMetadataCompletionHandler(command: UAJavaScriptCommand, metadata: NSDictionary<any, any>, completionHandler: (p1: string) => void): void;
}

declare class SearchEventTemplate extends NSObject {

	static alloc(): SearchEventTemplate; // inherited from NSObject

	static new(): SearchEventTemplate; // inherited from NSObject

	static template(): SearchEventTemplate;

	static templateWithValue(value: number): SearchEventTemplate;

	category: string;

	eventValue: number;

	identifier: string;

	query: string;

	totalResults: number;

	type: string;

	createEvent(): UACustomEvent;
}

interface TaskManagerProtocol {

	enqueueRequestWithIDOptions(taskID: string, options: UATaskRequestOptions): void;

	enqueueRequestWithIDOptionsInitialDelay(taskID: string, options: UATaskRequestOptions, initialDelay: number): void;

	registerForTaskWithIDDispatcherLaunchHandler(taskID: string, dispatcher: UADispatcher, launchHandler: (p1: UATask) => void): void;

	registerForTaskWithIDsDispatcherLaunchHandler(taskIDs: NSArray<string> | string[], dispatcher: UADispatcher, launchHandler: (p1: UATask) => void): void;
}
declare var TaskManagerProtocol: {

	prototype: TaskManagerProtocol;
};

declare class UAAPNSRegistration extends NSObject implements UAAPNSRegistrationProtocol {

	static alloc(): UAAPNSRegistration; // inherited from NSObject

	static new(): UAAPNSRegistration; // inherited from NSObject

	getAuthorizedSettingsWithCompletionHandler(completionHandler: (p1: UAAuthorizedNotificationSettings, p2: UAAuthorizationStatus) => void): void;

	updateRegistrationWithOptionsCategoriesCompletionHandler(options: UANotificationOptions, categories: NSSet<UNNotificationCategory>, completionHandler: (p1: boolean, p2: UAAuthorizedNotificationSettings, p3: UAAuthorizationStatus) => void): void;

	updateRegistrationWithOptionsCompletionHandler(options: UANotificationOptions, completionHandler: (p1: boolean, p2: UAAuthorizedNotificationSettings, p3: UAAuthorizationStatus) => void): void;
}

interface UAAPNSRegistrationProtocol {

	getAuthorizedSettingsWithCompletionHandler(completionHandler: (p1: UAAuthorizedNotificationSettings, p2: UAAuthorizationStatus) => void): void;

	updateRegistrationWithOptionsCategoriesCompletionHandler(options: UANotificationOptions, categories: NSSet<UNNotificationCategory>, completionHandler: (p1: boolean, p2: UAAuthorizedNotificationSettings, p3: UAAuthorizationStatus) => void): void;

	updateRegistrationWithOptionsCompletionHandler(options: UANotificationOptions, completionHandler: (p1: boolean, p2: UAAuthorizedNotificationSettings, p3: UAAuthorizationStatus) => void): void;
}
declare var UAAPNSRegistrationProtocol: {

	prototype: UAAPNSRegistrationProtocol;
};

declare class UAAccountEventTemplate extends NSObject {

	static alloc(): UAAccountEventTemplate; // inherited from NSObject

	static loggedInTemplate(): UAAccountEventTemplate;

	static loggedInTemplateWithValue(value: number): UAAccountEventTemplate;

	static loggedInTemplateWithValueFromString(valueString: string): UAAccountEventTemplate;

	static loggedOutTemplate(): UAAccountEventTemplate;

	static loggedOutTemplateWithValue(value: number): UAAccountEventTemplate;

	static loggedOutTemplateWithValueFromString(valueString: string): UAAccountEventTemplate;

	static new(): UAAccountEventTemplate; // inherited from NSObject

	static registeredTemplate(): UAAccountEventTemplate;

	static registeredTemplateWithValue(value: number): UAAccountEventTemplate;

	static registeredTemplateWithValueFromString(valueString: string): UAAccountEventTemplate;

	category: string;

	eventValue: number;

	transactionID: string;

	type: string;

	userID: string;

	createEvent(): UACustomEvent;
}

interface UAAction extends NSObjectProtocol {

	acceptsArguments(_arguments: UAActionArguments): boolean;

	didPerformWithArgumentsWithResult?(_arguments: UAActionArguments, result: UAActionResult): void;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	willPerformWithArguments?(_arguments: UAActionArguments): void;
}
declare var UAAction: {

	prototype: UAAction;
};

declare class UAActionArguments extends NSObject {

	static alloc(): UAActionArguments; // inherited from NSObject

	static argumentsWithValueWithSituation(value: any, situation: UASituation): UAActionArguments;

	static argumentsWithValueWithSituationMetadata(value: any, situation: UASituation, metadata: NSDictionary<any, any>): UAActionArguments;

	static new(): UAActionArguments; // inherited from NSObject

	readonly metadata: NSDictionary<any, any>;

	readonly situation: UASituation;

	readonly value: any;
}

declare const enum UAActionFetchResult {

	NoData = 1,

	NewData = 0,

	Failed = 2
}

declare var UAActionMetadataForegroundPresentationKey: string;

declare var UAActionMetadataInboxMessageIDKey: string;

declare var UAActionMetadataPushPayloadKey: string;

declare var UAActionMetadataRegisteredName: string;

declare var UAActionMetadataResponseInfoKey: string;

declare var UAActionMetadataUserNotificationActionIDKey: string;

interface UAActionPredicateProtocol extends NSObjectProtocol {

	applyActionArguments(args: UAActionArguments): boolean;
}
declare var UAActionPredicateProtocol: {

	prototype: UAActionPredicateProtocol;
};

declare class UAActionRegistry extends NSObject {

	static alloc(): UAActionRegistry; // inherited from NSObject

	static defaultRegistry(): UAActionRegistry;

	static new(): UAActionRegistry; // inherited from NSObject

	readonly registeredEntries: NSSet<UAActionRegistryEntry>;

	addNameForEntryWithName(name: string, entryName: string): boolean;

	addSituationOverrideForEntryWithNameAction(situation: UASituation, name: string, action: UAAction): boolean;

	registerActionClassName(actionClass: typeof NSObject, name: string): boolean;

	registerActionClassNamePredicate(actionClass: typeof NSObject, name: string, predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionClassNames(actionClass: typeof NSObject, names: NSArray<string> | string[]): boolean;

	registerActionClassNamesPredicate(actionClass: typeof NSObject, names: NSArray<string> | string[], predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionName(action: UAAction, name: string): boolean;

	registerActionNamePredicate(action: UAAction, name: string, predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionNames(action: UAAction, names: NSArray<string> | string[]): boolean;

	registerActionNamesPredicate(action: UAAction, names: NSArray<string> | string[], predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionsFromFile(path: string): void;

	registryEntryWithName(name: string): UAActionRegistryEntry;

	removeEntryWithName(name: string): void;

	removeName(name: string): void;

	updateActionClassForEntryWithName(actionClass: typeof NSObject, name: string): boolean;

	updateActionForEntryWithName(action: UAAction, name: string): boolean;

	updatePredicateForEntryWithName(predicate: (p1: UAActionArguments) => boolean, name: string): boolean;
}

declare class UAActionRegistryEntry extends NSObject {

	static alloc(): UAActionRegistryEntry; // inherited from NSObject

	static new(): UAActionRegistryEntry; // inherited from NSObject

	readonly action: UAAction;

	readonly names: NSArray<string>;

	readonly predicate: (p1: UAActionArguments) => boolean;

	actionForSituation(situation: UASituation): UAAction;
}

declare class UAActionResult extends NSObject {

	static actionNotFoundResult(): UAActionResult;

	static alloc(): UAActionResult; // inherited from NSObject

	static emptyResult(): UAActionResult;

	static new(): UAActionResult; // inherited from NSObject

	static rejectedArgumentsResult(): UAActionResult;

	static resultWithError(error: NSError): UAActionResult;

	static resultWithErrorWithFetchResult(error: NSError, fetchResult: UAActionFetchResult): UAActionResult;

	static resultWithValue(value: any): UAActionResult;

	static resultWithValueWithFetchResult(result: any, fetchResult: UAActionFetchResult): UAActionResult;

	readonly error: NSError;

	readonly fetchResult: UAActionFetchResult;

	readonly status: UAActionStatus;

	readonly value: any;
}

declare class UAActionRunner extends NSObject {

	static alloc(): UAActionRunner; // inherited from NSObject

	static new(): UAActionRunner; // inherited from NSObject

	static runActionValueSituation(action: UAAction, value: any, situation: UASituation): void;

	static runActionValueSituationCompletionHandler(action: UAAction, value: any, situation: UASituation, completionHandler: (p1: UAActionResult) => void): void;

	static runActionValueSituationMetadata(action: UAAction, value: any, situation: UASituation, metadata: NSDictionary<any, any>): void;

	static runActionValueSituationMetadataCompletionHandler(action: UAAction, value: any, situation: UASituation, metadata: NSDictionary<any, any>, completionHandler: (p1: UAActionResult) => void): void;

	static runActionWithNameValueSituation(actionName: string, value: any, situation: UASituation): void;

	static runActionWithNameValueSituationCompletionHandler(actionName: string, value: any, situation: UASituation, completionHandler: (p1: UAActionResult) => void): void;

	static runActionWithNameValueSituationMetadata(actionName: string, value: any, situation: UASituation, metadata: NSDictionary<any, any>): void;

	static runActionWithNameValueSituationMetadataCompletionHandler(actionName: string, value: any, situation: UASituation, metadata: NSDictionary<any, any>, completionHandler: (p1: UAActionResult) => void): void;

	static runActionsWithActionValuesSituationMetadataCompletionHandler(actionValues: NSDictionary<any, any>, situation: UASituation, metadata: NSDictionary<any, any>, completionHandler: (p1: UAActionResult) => void): void;
}

declare class UAActionSchedule extends UASchedule {

	static alloc(): UAActionSchedule; // inherited from NSObject

	static new(): UAActionSchedule; // inherited from NSObject

	static scheduleWithActionsBuilderBlock(actions: NSDictionary<any, any>, builderBlock: (p1: UAScheduleBuilder) => void): UAActionSchedule;

	readonly actions: NSDictionary<any, any>;

	readonly dataJSONString: string;
}

declare const enum UAActionStatus {

	Completed = 0,

	ArgumentsRejected = 1,

	ActionNotFound = 2,

	Error = 3
}

declare class UAActivityViewController extends UIActivityViewController implements UIPopoverControllerDelegate, UIPopoverPresentationControllerDelegate {

	static alloc(): UAActivityViewController; // inherited from NSObject

	static new(): UAActivityViewController; // inherited from NSObject

	dismissalBlock: () => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	adaptivePresentationStyleForPresentationController(controller: UIPresentationController): UIModalPresentationStyle;

	adaptivePresentationStyleForPresentationControllerTraitCollection(controller: UIPresentationController, traitCollection: UITraitCollection): UIModalPresentationStyle;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	popoverControllerDidDismissPopover(popoverController: UIPopoverController): void;

	popoverControllerShouldDismissPopover(popoverController: UIPopoverController): boolean;

	popoverControllerWillRepositionPopoverToRectInView(popoverController: UIPopoverController, rect: interop.Pointer | interop.Reference<CGRect>, view: interop.Pointer | interop.Reference<UIView>): void;

	popoverPresentationControllerDidDismissPopover(popoverPresentationController: UIPopoverPresentationController): void;

	popoverPresentationControllerShouldDismissPopover(popoverPresentationController: UIPopoverPresentationController): boolean;

	popoverPresentationControllerWillRepositionPopoverToRectInView(popoverPresentationController: UIPopoverPresentationController, rect: interop.Pointer | interop.Reference<CGRect>, view: interop.Pointer | interop.Reference<UIView>): void;

	prepareForPopoverPresentation(popoverPresentationController: UIPopoverPresentationController): void;

	presentationControllerDidAttemptToDismiss(presentationController: UIPresentationController): void;

	presentationControllerDidDismiss(presentationController: UIPresentationController): void;

	presentationControllerPrepareAdaptivePresentationController(presentationController: UIPresentationController, adaptivePresentationController: UIPresentationController): void;

	presentationControllerShouldDismiss(presentationController: UIPresentationController): boolean;

	presentationControllerViewControllerForAdaptivePresentationStyle(controller: UIPresentationController, style: UIModalPresentationStyle): UIViewController;

	presentationControllerWillDismiss(presentationController: UIPresentationController): void;

	presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator(presentationController: UIPresentationController, style: UIModalPresentationStyle, transitionCoordinator: UIViewControllerTransitionCoordinator): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sourceRect(): CGRect;
}

declare class UAAddCustomEventAction extends NSObject implements UAAction {

	static alloc(): UAAddCustomEventAction; // inherited from NSObject

	static new(): UAAddCustomEventAction; // inherited from NSObject

	static readonly name: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAAddCustomEventActionPredicate extends NSObject implements UAActionPredicateProtocol {

	static alloc(): UAAddCustomEventActionPredicate; // inherited from NSObject

	static new(): UAAddCustomEventActionPredicate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyActionArguments(args: UAActionArguments): boolean;

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

declare class UAAddTagsAction extends UAModifyTagsAction {

	static alloc(): UAAddTagsAction; // inherited from NSObject

	static new(): UAAddTagsAction; // inherited from NSObject

	static readonly name: string;

	static readonly shortName: string;
}

declare class UAAggregateActionResult extends UAActionResult {

	static actionNotFoundResult(): UAAggregateActionResult; // inherited from UAActionResult

	static alloc(): UAAggregateActionResult; // inherited from NSObject

	static emptyResult(): UAAggregateActionResult; // inherited from UAActionResult

	static new(): UAAggregateActionResult; // inherited from NSObject

	static rejectedArgumentsResult(): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithError(error: NSError): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithErrorWithFetchResult(error: NSError, fetchResult: UAActionFetchResult): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithValue(value: any): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithValueWithFetchResult(result: any, fetchResult: UAActionFetchResult): UAAggregateActionResult; // inherited from UAActionResult

	addResultForAction(result: UAActionResult, actionName: string): void;

	resultForAction(actionName: string): UAActionResult;
}

declare class UAAirshipLogger extends NSObject {

	static alloc(): UAAirshipLogger; // inherited from NSObject

	static new(): UAAirshipLogger; // inherited from NSObject
}

declare class UAAnalytics extends NSObject implements UAAnalyticsProtocol, UAComponent, UAEventManagerDelegate {

	static alloc(): UAAnalytics; // inherited from NSObject

	static new(): UAAnalytics; // inherited from NSObject

	conversionPushMetadata: string;

	conversionSendID: string;

	static readonly customEventAdded: string;

	static readonly eventKey: string;

	static readonly regionEventAdded: string;

	static readonly screenKey: string;

	static readonly screenTracked: string;

	static readonly shared: UAAnalytics;

	static readonly supplier: () => UAAnalyticsProtocol;

	componentEnabled: boolean; // inherited from UAComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	eventConsumer: UAAnalyticsEventConsumerProtocol; // inherited from UAAnalyticsProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly sessionID: string; // inherited from UAAnalyticsProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannelProtocol; eventManager: UAEventManagerProtocol; notificationCenter: NSNotificationCenter; date: UADate; dispatcher: UADispatcher; localeManager: LocaleManagerProtocol; appStateTracker: AppStateTrackerProtocol; privacyManager: UAPrivacyManager; });

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannelProtocol; localeManager: LocaleManagerProtocol; privacyManager: UAPrivacyManager; });

	addAnalyticsHeadersBlock(headerBlock: () => NSDictionary<string, string>): void;

	addEvent(event: UAEvent): void;

	airshipReady(): void;

	analyticsHeaders(): NSDictionary<string, string>;

	applyRemoteConfig(config: any): void;

	associateDeviceIdentifiers(associatedIdentifiers: UAAssociatedIdentifiers): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	currentAssociatedDeviceIdentifiers(): UAAssociatedIdentifiers;

	deepLink(deepLink: NSURL): boolean;

	initWithConfigDataStoreChannelEventManagerNotificationCenterDateDispatcherLocaleManagerAppStateTrackerPrivacyManager(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannelProtocol, eventManager: UAEventManagerProtocol, notificationCenter: NSNotificationCenter, date: UADate, dispatcher: UADispatcher, localeManager: LocaleManagerProtocol, appStateTracker: AppStateTrackerProtocol, privacyManager: UAPrivacyManager): this;

	initWithConfigDataStoreChannelLocaleManagerPrivacyManager(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannelProtocol, localeManager: LocaleManagerProtocol, privacyManager: UAPrivacyManager): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	launchedFromNotification(notification: NSDictionary<any, any>): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerSDKExtensionVersion(ext: UASDKExtension, version: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleUpload(): void;

	self(): this;

	trackScreen(screen: string): void;
}

interface UAAnalyticsEventConsumerProtocol {

	eventAddedWithEventEventIDEventDate(event: UAEvent, eventID: string, eventDate: Date): void;
}
declare var UAAnalyticsEventConsumerProtocol: {

	prototype: UAAnalyticsEventConsumerProtocol;
};

interface UAAnalyticsProtocol {

	conversionPushMetadata: string;

	conversionSendID: string;

	eventConsumer: UAAnalyticsEventConsumerProtocol;

	sessionID: string;

	addAnalyticsHeadersBlock(headerBlock: () => NSDictionary<string, string>): void;

	addEvent(event: UAEvent): void;

	associateDeviceIdentifiers(associatedIdentifiers: UAAssociatedIdentifiers): void;

	currentAssociatedDeviceIdentifiers(): UAAssociatedIdentifiers;

	launchedFromNotification(notification: NSDictionary<any, any>): void;

	registerSDKExtensionVersion(ext: UASDKExtension, version: string): void;

	scheduleUpload(): void;

	trackScreen(screen: string): void;
}
declare var UAAnalyticsProtocol: {

	prototype: UAAnalyticsProtocol;
};

declare class UAAppIntegration extends NSObject {

	static alloc(): UAAppIntegration; // inherited from NSObject

	static applicatinPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	static applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	static applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	static applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	static new(): UAAppIntegration; // inherited from NSObject

	static setIntegrationDelegate(value: UAAppIntegrationDelegate): void;

	static userNotificationCenterWithCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	static userNotificationCenterWithCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;

	static integrationDelegate: UAAppIntegrationDelegate;
}

interface UAAppIntegrationDelegate extends NSObjectProtocol {

	didFailToRegisterForRemoteNotificationsWithError(error: NSError): void;

	didReceiveNotificationResponseCompletionHandler(response: UNNotificationResponse, completionHandler: () => void): void;

	didReceiveRemoteNotificationIsForegroundCompletionHandler(userInfo: NSDictionary<any, any>, isForeground: boolean, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	didRegisterForRemoteNotificationsWithDeviceToken(deviceToken: NSData): void;

	onBackgroundAppRefresh(): void;

	presentationOptionsForNotification(notification: UNNotification): UNNotificationPresentationOptions;

	willPresentNotificationPresentationOptionsCompletionHandler(notification: UNNotification, options: UNNotificationPresentationOptions, completionHandler: () => void): void;
}
declare var UAAppIntegrationDelegate: {

	prototype: UAAppIntegrationDelegate;
};

declare class UAAppStateTracker extends NSObject implements AppStateTrackerProtocol, UAAppStateTrackerDelegate {

	static alloc(): UAAppStateTracker; // inherited from NSObject

	static new(): UAAppStateTracker; // inherited from NSObject

	static readonly didBecomeActiveNotification: string;

	static readonly didEnterBackgroundNotification: string;

	static readonly didTransitionToBackground: string;

	static readonly didTransitionToForeground: string;

	static readonly shared: UAAppStateTracker;

	static readonly willEnterForegroundNotification: string;

	static readonly willResignActiveNotification: string;

	static readonly willTerminateNotification: string;

	readonly state: UAApplicationState; // inherited from AppStateTrackerProtocol

	constructor(o: { notificationCenter: NSNotificationCenter; adapter: UAAppStateTrackerAdapter; });

	applicationDidBecomeActive(): void;

	applicationDidEnterBackground(): void;

	applicationWillEnterForeground(): void;

	applicationWillResignActive(): void;

	applicationWillTerminate(): void;

	initWithNotificationCenterAdapter(notificationCenter: NSNotificationCenter, adapter: UAAppStateTrackerAdapter): this;
}

interface UAAppStateTrackerAdapter {

	state: UAApplicationState;

	stateTrackerDelegate: UAAppStateTrackerDelegate;
}
declare var UAAppStateTrackerAdapter: {

	prototype: UAAppStateTrackerAdapter;
};

interface UAAppStateTrackerDelegate {

	applicationDidBecomeActive(): void;

	applicationDidEnterBackground(): void;

	applicationWillEnterForeground(): void;

	applicationWillResignActive(): void;

	applicationWillTerminate(): void;
}
declare var UAAppStateTrackerDelegate: {

	prototype: UAAppStateTrackerDelegate;
};

declare class UAApplicationMetrics extends NSObject {

	static alloc(): UAApplicationMetrics; // inherited from NSObject

	static new(): UAApplicationMetrics; // inherited from NSObject

	readonly currentAppVersion: string;

	readonly isAppVersionUpdated: boolean;

	readonly lastApplicationOpenDate: Date;

	constructor(o: { dataStore: UAPreferenceDataStore; privacyManager: UAPrivacyManager; });

	constructor(o: { dataStore: UAPreferenceDataStore; privacyManager: UAPrivacyManager; notificationCenter: NSNotificationCenter; date: UADate; });

	initWithDataStorePrivacyManager(dataStore: UAPreferenceDataStore, privacyManager: UAPrivacyManager): this;

	initWithDataStorePrivacyManagerNotificationCenterDate(dataStore: UAPreferenceDataStore, privacyManager: UAPrivacyManager, notificationCenter: NSNotificationCenter, date: UADate): this;
}

declare const enum UAApplicationState {

	Active = 0,

	Inactive = 1,

	Background = 2
}

declare class UAAssociateIdentifiersEvent extends NSObject implements UAEvent {

	static alloc(): UAAssociateIdentifiersEvent; // inherited from NSObject

	static new(): UAAssociateIdentifiersEvent; // inherited from NSObject

	readonly data: NSDictionary<any, any>; // inherited from UAEvent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventType: string; // inherited from UAEvent

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly priority: UAEventPriority; // inherited from UAEvent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { identifiers: UAAssociatedIdentifiers; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIdentifiers(identifiers: UAAssociatedIdentifiers): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isValid(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UAAssociatedIdentifiers extends NSObject {

	static alloc(): UAAssociatedIdentifiers; // inherited from NSObject

	static identifiers(): UAAssociatedIdentifiers;

	static identifiersWithDictionary(identifiers: NSDictionary<string, string>): UAAssociatedIdentifiers;

	static new(): UAAssociatedIdentifiers; // inherited from NSObject

	advertisingID: string;

	advertisingTrackingEnabled: boolean;

	readonly allIDs: NSDictionary<string, string>;

	vendorID: string;

	static readonly maxCharacterCount: number;

	static readonly maxCount: number;

	constructor(o: { dictionary: NSDictionary<string, string>; });

	constructor(o: { identifiers: NSDictionary<string, string>; });

	initWithDictionary(dictionary: NSDictionary<string, string>): this;

	initWithIdentifiers(identifiers: NSDictionary<string, string>): this;

	setIdentifierForKey(identifier: string, key: string): void;
}

declare class UAAttributeMutations extends NSObject {

	static alloc(): UAAttributeMutations; // inherited from NSObject

	static mutations(): UAAttributeMutations;

	static new(): UAAttributeMutations; // inherited from NSObject

	applyMutationsWithEditor(editor: UAAttributesEditor): void;

	removeAttribute(attribute: string): void;

	setDateForAttribute(date: Date, forAttribute: string): void;

	setNumberForAttribute(number: number, forAttribute: string): void;

	setStringForAttribute(string: string, forAttribute: string): void;
}

declare class UAAttributeUpdate extends NSObject {

	static alloc(): UAAttributeUpdate; // inherited from NSObject

	static new(): UAAttributeUpdate; // inherited from NSObject

	readonly attribute: string;

	readonly date: Date;

	readonly type: UAAttributeUpdateType;

	constructor(o: { attribute: string; type: UAAttributeUpdateType; value: any; date: Date; });

	initWithAttributeTypeValueDate(attribute: string, type: UAAttributeUpdateType, value: any, date: Date): this;

	value(): any;
}

declare const enum UAAttributeUpdateType {

	Remove = 0,

	Set = 1
}

declare class UAAttributes extends NSObject {

	static alloc(): UAAttributes; // inherited from NSObject

	static new(): UAAttributes; // inherited from NSObject

	static readonly accountCreation: string;

	static readonly advertisingId: string;

	static readonly age: string;

	static readonly birthdate: string;

	static readonly city: string;

	static readonly company: string;

	static readonly country: string;

	static readonly email: string;

	static readonly firstName: string;

	static readonly fullName: string;

	static readonly gender: string;

	static readonly homePhone: string;

	static readonly lastName: string;

	static readonly loyaltyTier: string;

	static readonly mobilePhone: string;

	static readonly region: string;

	static readonly title: string;

	static readonly username: string;

	static readonly workPhone: string;

	static readonly zipCode: string;
}

declare class UAAttributesActionPredicate extends NSObject implements UAActionPredicateProtocol {

	static alloc(): UAAttributesActionPredicate; // inherited from NSObject

	static new(): UAAttributesActionPredicate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyActionArguments(args: UAActionArguments): boolean;

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

declare class UAAttributesEditor extends NSObject {

	static alloc(): UAAttributesEditor; // inherited from NSObject

	static new(): UAAttributesEditor; // inherited from NSObject

	constructor(o: { completionHandler: (p1: NSArray<UAAttributeUpdate>) => void; });

	apply(): void;

	initWithCompletionHandler(completionHandler: (p1: NSArray<UAAttributeUpdate>) => void): this;

	removeAttribute(attribute: string): void;

	setDateAttribute(date: Date, attribute: string): void;

	setNumberAttribute(number: number, attribute: string): void;

	setStringAttribute(string: string, attribute: string): void;
}

declare class UAAudienceUtils extends NSObject {

	static alloc(): UAAudienceUtils; // inherited from NSObject

	static applyTagUpdatesWithTagGroupsTagGroupUpdates(tagGroups: NSDictionary<string, NSArray<string>>, tagGroupUpdates: NSArray<UATagGroupUpdate> | UATagGroupUpdate[]): NSDictionary<string, NSArray<string>>;

	static collapseAttributeUpdates(updates: NSArray<UAAttributeUpdate> | UAAttributeUpdate[]): NSArray<UAAttributeUpdate>;

	static collapseTagGroupUpdates(updates: NSArray<UATagGroupUpdate> | UATagGroupUpdate[]): NSArray<UATagGroupUpdate>;

	static new(): UAAudienceUtils; // inherited from NSObject

	static normalizeTagGroup(group: string): string;

	static normalizeTags(tags: NSArray<string> | string[]): NSArray<string>;
}

declare const enum UAAuthorizationStatus {

	NotDetermined = 0,

	Denied = 1,

	Authorized = 2,

	Provisional = 3,

	Ephemeral = 4
}

declare const enum UAAuthorizedNotificationSettings {

	None = 0,

	Badge = 1,

	Sound = 2,

	Alert = 4,

	CarPlay = 8,

	LockScreen = 16,

	NotificationCenter = 32,

	CriticalAlert = 64,

	Announcement = 128,

	ScheduledDelivery = 256,

	TimeSensitive = 512
}

declare class UAAutoIntegration extends NSObject {

	static alloc(): UAAutoIntegration; // inherited from NSObject

	static integrateWithDelegate(delegate: UAAppIntegrationDelegate): void;

	static new(): UAAutoIntegration; // inherited from NSObject

	static reset(): void;
}

declare class UAAutomationResources extends NSObject {

	static alloc(): UAAutomationResources; // inherited from NSObject

	static bundle(): NSBundle;

	static new(): UAAutomationResources; // inherited from NSObject
}

declare class UAAutomationSDKModule extends NSObject implements UASDKModule {

	static alloc(): UAAutomationSDKModule; // inherited from NSObject

	static loadWithDependencies(dependencies: NSDictionary<any, any>): UASDKModule;

	static new(): UAAutomationSDKModule; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionsPlist(): string;

	class(): typeof NSObject;

	components(): NSArray<UAComponent>;

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

declare var UABannerAdditionalPaddingKey: string;

declare var UABannerBodyStyleKey: string;

declare var UABannerButtonStyleKey: string;

declare var UABannerHeaderStyleKey: string;

declare var UABannerMaxWidthKey: string;

declare var UABannerMediaStyleKey: string;

declare var UABannerStyleFileName: string;

declare var UABannerTextStyleKey: string;

declare class UABase64 extends NSObject {

	static alloc(): UABase64; // inherited from NSObject

	static dataFromString(base64String: string): NSData;

	static new(): UABase64; // inherited from NSObject

	static stringFromData(data: NSData): string;
}

declare class UABespokeCloseView extends UIView {

	static alloc(): UABespokeCloseView; // inherited from NSObject

	static appearance(): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UABespokeCloseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UABespokeCloseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UABespokeCloseView; // inherited from UIAppearance

	static new(): UABespokeCloseView; // inherited from NSObject
}

declare class UABeveledLoadingIndicator extends UIView {

	static alloc(): UABeveledLoadingIndicator; // inherited from NSObject

	static appearance(): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UABeveledLoadingIndicator; // inherited from UIAppearance

	static new(): UABeveledLoadingIndicator; // inherited from NSObject

	hide(): void;

	show(): void;
}

declare class UABlockAction extends NSObject implements UAAction {

	static alloc(): UABlockAction; // inherited from NSObject

	static new(): UABlockAction; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { block: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void; });

	constructor(o: { predicate: (p1: UAActionArguments) => boolean; block: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void; });

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	initWithBlock(block: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): this;

	initWithPredicateBlock(predicate: (p1: UAActionArguments) => boolean, block: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare const enum UABoundaryEvent {

	Enter = 1,

	Exit = 2
}

declare var UAButtonAdditionalPaddingKey: string;

declare var UAButtonHeightKey: string;

declare class UACancelSchedulesAction extends NSObject implements UAAction {

	static alloc(): UACancelSchedulesAction; // inherited from NSObject

	static new(): UACancelSchedulesAction; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare var UACancelSchedulesActionAll: string;

declare var UACancelSchedulesActionDefaultRegistryAlias: string;

declare var UACancelSchedulesActionDefaultRegistryName: string;

declare var UACancelSchedulesActionGroups: string;

declare var UACancelSchedulesActionIDs: string;

declare class UAChannel extends NSObject implements UAChannelProtocol, UAChannelRegistrarDelegate, UAComponent, UAPushableComponent {

	static alloc(): UAChannel; // inherited from NSObject

	static new(): UAChannel; // inherited from NSObject

	static readonly audienceAttributesKey: string;

	static readonly audienceTagsKey: string;

	static readonly audienceUpdatedEvent: string;

	static readonly channelCreatedEvent: string;

	static readonly channelExistingKey: string;

	static readonly channelIdentifierKey: string;

	static readonly channelRegistrationFailedEvent: string;

	static readonly channelUpdatedEvent: string;

	static readonly shared: UAChannel;

	componentEnabled: boolean; // inherited from UAComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly identifier: string; // inherited from UAChannelProtocol

	readonly isChannelCreationEnabled: boolean; // inherited from UAChannelProtocol

	isChannelTagRegistrationEnabled: boolean; // inherited from UAChannelProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly pendingAttributeUpdates: NSArray<UAAttributeUpdate>; // inherited from UAChannelProtocol

	readonly pendingTagGroupUpdates: NSArray<UATagGroupUpdate>; // inherited from UAChannelProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	tags: NSArray<string>; // inherited from UAChannelProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dataStore: UAPreferenceDataStore; config: UARuntimeConfig; privacyManager: UAPrivacyManager; localeManager: LocaleManagerProtocol; });

	constructor(o: { dataStore: UAPreferenceDataStore; config: UARuntimeConfig; privacyManager: UAPrivacyManager; localeManager: LocaleManagerProtocol; audienceManager: UAChannelAudienceManagerProtocol; channelRegistrar: UAChannelRegistrarProtocol; notificationCenter: NSNotificationCenter; });

	addRegistrationExtender(extender: (p1: UAChannelRegistrationPayload, p2: (p1: UAChannelRegistrationPayload) => void) => void): void;

	addTag(tag: string): void;

	addTags(tags: NSArray<string> | string[]): void;

	addTagsGroup(tags: NSArray<string> | string[], group: string): void;

	airshipReady(): void;

	applyAttributeMutations(mutations: UAAttributeMutations): void;

	applyRemoteConfig(config: any): void;

	channelCreatedWithChannelIDExisting(channelID: string, existing: boolean): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createChannelPayloadWithCompletionHandler(completionHandler: (p1: UAChannelRegistrationPayload) => void): void;

	deepLink(deepLink: NSURL): boolean;

	editAttributes(): UAAttributesEditor;

	editSubscriptionLists(): UASubscriptionListEditor;

	editTagGroups(): UATagGroupsEditor;

	editTags(): UATagEditor;

	enableChannelCreation(): void;

	fetchSubscriptionListsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): UADisposable;

	initWithDataStoreConfigPrivacyManagerLocaleManager(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, privacyManager: UAPrivacyManager, localeManager: LocaleManagerProtocol): this;

	initWithDataStoreConfigPrivacyManagerLocaleManagerAudienceManagerChannelRegistrarNotificationCenter(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, privacyManager: UAPrivacyManager, localeManager: LocaleManagerProtocol, audienceManager: UAChannelAudienceManagerProtocol, channelRegistrar: UAChannelRegistrarProtocol, notificationCenter: NSNotificationCenter): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentationOptionsForNotificationDefaultPresentationOptions(notification: UNNotification, options: UNNotificationPresentationOptions): UNNotificationPresentationOptions;

	receivedNotificationResponseCompletionHandler(response: UNNotificationResponse, completionHandler: () => void): void;

	receivedRemoteNotificationCompletionHandler(notification: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	registrationFailed(): void;

	registrationSucceeded(): void;

	removeTag(tag: string): void;

	removeTags(tags: NSArray<string> | string[]): void;

	removeTagsGroup(tags: NSArray<string> | string[], group: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setTagsGroup(tags: NSArray<string> | string[], group: string): void;

	updateRegistration(): void;

	updateRegistrationForcefully(forcefully: boolean): void;
}

declare class UAChannelAPIClient extends NSObject {

	static alloc(): UAChannelAPIClient; // inherited from NSObject

	static new(): UAChannelAPIClient; // inherited from NSObject

	constructor(o: { config: UARuntimeConfig; });

	constructor(o: { config: UARuntimeConfig; session: UARequestSession; });

	createChannelWithPayloadCompletionHandler(payload: UAChannelRegistrationPayload, completionHandler: (p1: UAChannelCreateResponse, p2: NSError) => void): UADisposable;

	initWithConfig(config: UARuntimeConfig): this;

	initWithConfigSession(config: UARuntimeConfig, session: UARequestSession): this;

	updateChannelWithIDWithPayloadCompletionHandler(channelID: string, payload: UAChannelRegistrationPayload, completionHandler: (p1: UAHTTPResponse, p2: NSError) => void): UADisposable;
}

declare class UAChannelAudienceManager extends NSObject implements UAChannelAudienceManagerProtocol {

	static alloc(): UAChannelAudienceManager; // inherited from NSObject

	static new(): UAChannelAudienceManager; // inherited from NSObject

	channelID: string; // inherited from UAChannelAudienceManagerProtocol

	enabled: boolean; // inherited from UAChannelAudienceManagerProtocol

	readonly pendingAttributeUpdates: NSArray<UAAttributeUpdate>; // inherited from UAChannelAudienceManagerProtocol

	readonly pendingTagGroupUpdates: NSArray<UATagGroupUpdate>; // inherited from UAChannelAudienceManagerProtocol

	constructor(o: { dataStore: UAPreferenceDataStore; config: UARuntimeConfig; privacyManager: UAPrivacyManager; });

	editAttributes(): UAAttributesEditor;

	editSubscriptionLists(): UASubscriptionListEditor;

	editTagGroupsWithAllowDeviceGroup(allowDeviceGroup: boolean): UATagGroupsEditor;

	fetchSubscriptionListsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): UADisposable;

	initWithDataStoreConfigPrivacyManager(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, privacyManager: UAPrivacyManager): this;
}

interface UAChannelAudienceManagerProtocol {

	channelID: string;

	enabled: boolean;

	pendingAttributeUpdates: NSArray<UAAttributeUpdate>;

	pendingTagGroupUpdates: NSArray<UATagGroupUpdate>;

	editAttributes(): UAAttributesEditor;

	editSubscriptionLists(): UASubscriptionListEditor;

	editTagGroupsWithAllowDeviceGroup(allowDeviceGroup: boolean): UATagGroupsEditor;

	fetchSubscriptionListsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): UADisposable;
}
declare var UAChannelAudienceManagerProtocol: {

	prototype: UAChannelAudienceManagerProtocol;
};

declare class UAChannelCapture extends NSObject {

	static alloc(): UAChannelCapture; // inherited from NSObject

	static new(): UAChannelCapture; // inherited from NSObject

	enabled: boolean;

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannel; });

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannelProtocol; notificationCenter: NSNotificationCenter; date: UADate; pasteboardProvider: () => UIPasteboard; });

	initWithConfigDataStoreChannel(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannel): this;

	initWithConfigDataStoreChannelNotificationCenterDatePasteboardProvider(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannelProtocol, notificationCenter: NSNotificationCenter, date: UADate, pasteboardProvider: () => UIPasteboard): this;
}

declare class UAChannelCreateResponse extends UAHTTPResponse {

	static alloc(): UAChannelCreateResponse; // inherited from NSObject

	static new(): UAChannelCreateResponse; // inherited from NSObject

	readonly channelID: string;

	constructor(o: { status: number; channelID: string; });

	initWithStatusChannelID(status: number, channelID: string): this;
}

declare class UAChannelInfo extends NSObject implements NSCopying {

	static alloc(): UAChannelInfo; // inherited from NSObject

	static new(): UAChannelInfo; // inherited from NSObject

	appVersion: string;

	carrier: string;

	contactID: string;

	country: string;

	deviceModel: string;

	deviceOS: string;

	iOSChannelSettings: UAIOSChannelSettings;

	isBackgroundEnabled: boolean;

	isOptedIn: boolean;

	language: string;

	locationEnabledNumber: number;

	pushAddress: string;

	sdkVersion: string;

	setTags: boolean;

	tagChanges: UATagChanges;

	tags: NSArray<string>;

	timeZone: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface UAChannelProtocol {

	identifier: string;

	isChannelCreationEnabled: boolean;

	isChannelTagRegistrationEnabled: boolean;

	pendingAttributeUpdates: NSArray<UAAttributeUpdate>;

	pendingTagGroupUpdates: NSArray<UATagGroupUpdate>;

	tags: NSArray<string>;

	addRegistrationExtender(extender: (p1: UAChannelRegistrationPayload, p2: (p1: UAChannelRegistrationPayload) => void) => void): void;

	editAttributes(): UAAttributesEditor;

	editAttributes(editorBlock: (p1: UAAttributesEditor) => void): void;

	editSubscriptionLists(): UASubscriptionListEditor;

	editSubscriptionLists(editorBlock: (p1: UASubscriptionListEditor) => void): void;

	editTagGroups(): UATagGroupsEditor;

	editTagGroups(editorBlock: (p1: UATagGroupsEditor) => void): void;

	editTags(): UATagEditor;

	editTags(editorBlock: (p1: UATagEditor) => void): void;

	enableChannelCreation(): void;

	fetchSubscriptionListsWithCompletionHandler(completionHandler: (p1: NSArray<string>, p2: NSError) => void): UADisposable;

	updateRegistration(): void;

	updateRegistrationForcefully(forcefully: boolean): void;
}
declare var UAChannelProtocol: {

	prototype: UAChannelProtocol;
};

interface UAChannelRegistrarDelegate {

	channelCreatedWithChannelIDExisting(channelID: string, existing: boolean): void;

	createChannelPayloadWithCompletionHandler(completionHandler: (p1: UAChannelRegistrationPayload) => void): void;

	registrationFailed(): void;

	registrationSucceeded(): void;
}
declare var UAChannelRegistrarDelegate: {

	prototype: UAChannelRegistrarDelegate;
};

interface UAChannelRegistrarProtocol {

	channelID: string;

	delegate: UAChannelRegistrarDelegate;

	performFullRegistration(): void;

	registerForcefully(forcefully: boolean): void;
}
declare var UAChannelRegistrarProtocol: {

	prototype: UAChannelRegistrarProtocol;
};

declare class UAChannelRegistrationPayload extends NSObject implements NSCopying {

	static alloc(): UAChannelRegistrationPayload; // inherited from NSObject

	static decodeError(data: NSData): UAChannelRegistrationPayload;

	static new(): UAChannelRegistrationPayload; // inherited from NSObject

	readonly channel: UAChannelInfo;

	identityHints: UAIdentityHints;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithError(): NSData;

	minimizePayloadWithPrevious(previous: UAChannelRegistrationPayload): UAChannelRegistrationPayload;
}

declare class UACircularRegion extends NSObject {

	static alloc(): UACircularRegion; // inherited from NSObject

	static circularRegionWithRadiusLatitudeLongitude(radius: number, latitude: number, longitude: number): UACircularRegion;

	static new(): UACircularRegion; // inherited from NSObject

	constructor(o: { radius: number; latitude: number; longitude: number; });

	initWithRadiusLatitudeLongitude(radius: number, latitude: number, longitude: number): this;
}

declare const enum UACloudSite {

	US = 0,

	EU = 1
}

declare class UAColorUtils extends NSObject {

	static alloc(): UAColorUtils; // inherited from NSObject

	static colorWithHexString(hexString: string): UIColor;

	static hexStringWithColor(color: UIColor): string;

	static new(): UAColorUtils; // inherited from NSObject
}

interface UAComponent extends NSObjectProtocol {

	componentEnabled: boolean;

	airshipReady?(): void;

	applyRemoteConfig?(config: any): void;

	deepLink?(deepLink: NSURL): boolean;
}
declare var UAComponent: {

	prototype: UAComponent;
};

declare class UAComponentDisableHelper extends NSObject {

	static alloc(): UAComponentDisableHelper; // inherited from NSObject

	static new(): UAComponentDisableHelper; // inherited from NSObject

	enabled: boolean;

	onChange: () => void;

	constructor(o: { dataStore: UAPreferenceDataStore; className: string; });

	initWithDataStoreClassName(dataStore: UAPreferenceDataStore, className: string): this;
}

declare class UACompression extends NSObject {

	static alloc(): UACompression; // inherited from NSObject

	static gzipData(data: NSData): NSData;

	static new(): UACompression; // inherited from NSObject
}

declare class UAConfig extends NSObject implements NSCopying {

	static alloc(): UAConfig; // inherited from NSObject

	static config(): UAConfig;

	static configWithContentsOfFile(path: string): UAConfig;

	static defaultConfig(): UAConfig;

	static isProductionProvisioningProfile(profilePath: string): boolean;

	static new(): UAConfig; // inherited from NSObject

	URLAllowList: NSArray<string>;

	URLAllowListScopeJavaScriptInterface: NSArray<string>;

	URLAllowListScopeOpenURL: NSArray<string>;

	analyticsURL: string;

	readonly appKey: string;

	readonly appSecret: string;

	chatURL: string;

	chatWebSocketURL: string;

	clearNamedUserOnAppRestore: boolean;

	clearUserOnAppRestore: boolean;

	customConfig: NSDictionary<any, any>;

	defaultAppKey: string;

	defaultAppSecret: string;

	detectProvisioningMode: boolean;

	developmentAppKey: string;

	developmentAppSecret: string;

	developmentLogLevel: UALogLevel;

	deviceAPIURL: string;

	enabledFeatures: UAFeatures;

	inProduction: boolean;

	isAnalyticsEnabled: boolean;

	isAutomaticSetupEnabled: boolean;

	isChannelCaptureEnabled: boolean;

	isChannelCreationDelayEnabled: boolean;

	isExtendedBroadcastsEnabled: boolean;

	itunesID: string;

	readonly logLevel: UALogLevel;

	messageCenterStyleConfig: string;

	productionAppKey: string;

	productionAppSecret: string;

	productionLogLevel: UALogLevel;

	profilePath: string;

	remoteDataAPIURL: string;

	requestAuthorizationToUseNotifications: boolean;

	requireInitialRemoteConfigEnabled: boolean;

	site: UACloudSite;

	suppressAllowListError: boolean;

	constructor(o: { contentsOfFile: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithContentsOfFile(path: string): this;

	validate(): boolean;
}

declare class UAConnectionType extends NSObject {

	static alloc(): UAConnectionType; // inherited from NSObject

	static new(): UAConnectionType; // inherited from NSObject

	static readonly cell: string;

	static readonly none: string;

	static readonly wifi: string;
}

declare class UAContact extends NSObject implements UAComponent, UAContactProtocol {

	static alloc(): UAContact; // inherited from NSObject

	static new(): UAContact; // inherited from NSObject

	conflictDelegate: UAContactConflictDelegate;

	static readonly attributesKey: string;

	static readonly audienceUpdatedEvent: string;

	static readonly contactChangedEvent: string;

	static readonly maxNamedUserIDLength: number;

	static readonly shared: UAContact;

	static readonly tagsKey: string;

	componentEnabled: boolean; // inherited from UAComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly namedUserID: string; // inherited from UAContactProtocol

	readonly pendingAttributeUpdates: NSArray<UAAttributeUpdate>; // inherited from UAContactProtocol

	readonly pendingTagGroupUpdates: NSArray<UATagGroupUpdate>; // inherited from UAContactProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dataStore: UAPreferenceDataStore; config: UARuntimeConfig; channel: UAChannel; privacyManager: UAPrivacyManager; });

	airshipReady(): void;

	applyRemoteConfig(config: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deepLink(deepLink: NSURL): boolean;

	editAttributes(): UAAttributesEditor;

	editTagGroups(): UATagGroupsEditor;

	identify(namedUserID: string): void;

	initWithDataStoreConfigChannelPrivacyManager(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, channel: UAChannel, privacyManager: UAPrivacyManager): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reset(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface UAContactConflictDelegate {

	onConflictWithAnonymousContactDataNamedUserID(anonymousContactData: UAContactData, namedUserID: string): void;
}
declare var UAContactConflictDelegate: {

	prototype: UAContactConflictDelegate;
};

declare class UAContactData extends NSObject {

	static alloc(): UAContactData; // inherited from NSObject

	static new(): UAContactData; // inherited from NSObject

	readonly attributes: NSDictionary<string, any>;

	readonly tags: NSDictionary<string, NSArray<string>>;

	constructor(o: { tags: NSDictionary<string, NSArray<string>>; attributes: NSDictionary<string, any>; });

	initWithTagsAttributes(tags: NSDictionary<string, NSArray<string>>, attributes: NSDictionary<string, any>): this;
}

interface UAContactProtocol {

	namedUserID: string;

	pendingAttributeUpdates: NSArray<UAAttributeUpdate>;

	pendingTagGroupUpdates: NSArray<UATagGroupUpdate>;

	editAttributes(): UAAttributesEditor;

	editAttributes(editorBlock: (p1: UAAttributesEditor) => void): void;

	editTagGroups(): UATagGroupsEditor;

	editTagGroups(editorBlock: (p1: UATagGroupsEditor) => void): void;

	identify(namedUserID: string): void;

	reset(): void;
}
declare var UAContactProtocol: {

	prototype: UAContactProtocol;
};

declare class UACoreData extends NSObject {

	static alloc(): UACoreData; // inherited from NSObject

	static new(): UACoreData; // inherited from NSObject

	static safeSave(context: NSManagedObjectContext): boolean;

	delegate: UACoreDataDelegate;

	readonly inMemory: boolean;

	constructor(o: { modelURL: NSURL; inMemory: boolean; stores: NSArray<string> | string[]; });

	constructor(o: { modelURL: NSURL; inMemory: boolean; stores: NSArray<string> | string[]; mergePolicy: any; });

	initWithModelURLInMemoryStores(modelURL: NSURL, inMemory: boolean, stores: NSArray<string> | string[]): this;

	initWithModelURLInMemoryStoresMergePolicy(modelURL: NSURL, inMemory: boolean, stores: NSArray<string> | string[], mergePolicy: any): this;

	performBlockIfStoresExist(block: (p1: boolean, p2: NSManagedObjectContext) => void): void;

	safePerformBlock(block: (p1: boolean, p2: NSManagedObjectContext) => void): void;

	safePerformBlockAndWait(block: (p1: boolean, p2: NSManagedObjectContext) => void): void;

	shutDown(): void;

	waitForIdle(): void;
}

interface UACoreDataDelegate {

	persistentStoreCreatedNameContext(store: NSPersistentStore, name: string, context: NSManagedObjectContext): void;
}
declare var UACoreDataDelegate: {

	prototype: UACoreDataDelegate;
};

declare class UACustomEvent extends NSObject implements UAEvent {

	static alloc(): UACustomEvent; // inherited from NSObject

	static eventWithName(name: string): UACustomEvent;

	static eventWithNameValue(name: string, value: number): UACustomEvent;

	static eventWithNameValueFromString(name: string, string: string): UACustomEvent;

	static new(): UACustomEvent; // inherited from NSObject

	conversionPushMetadata: string;

	conversionSendID: string;

	eventName: string;

	eventValue: number;

	interactionID: string;

	interactionType: string;

	readonly payload: NSDictionary<any, any>;

	properties: NSDictionary<string, any>;

	templateType: string;

	transactionID: string;

	static readonly eventInteractionIDKey: string;

	static readonly eventInteractionTypeKey: string;

	static readonly eventNameKey: string;

	static readonly eventPropertiesKey: string;

	static readonly eventTransactionIDKey: string;

	static readonly eventValueKey: string;

	static readonly maxPropertiesSize: number;

	readonly data: NSDictionary<any, any>; // inherited from UAEvent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventType: string; // inherited from UAEvent

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly priority: UAEventPriority; // inherited from UAEvent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; stringValue: string; });

	constructor(o: { name: string; value: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithNameStringValue(name: string, stringValue: string): this;

	initWithNameValue(name: string, value: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isValid(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setInteractionFromMessageCenterMessage(messageID: string): void;

	track(): void;
}

declare class UADate extends NSObject {

	static alloc(): UADate; // inherited from NSObject

	static new(): UADate; // inherited from NSObject

	readonly now: Date;
}

declare class UADeepLinkAction extends NSObject implements UAAction {

	static alloc(): UADeepLinkAction; // inherited from NSObject

	static new(): UADeepLinkAction; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

interface UADeepLinkDelegate {

	receivedDeepLinkCompletionHandler(deepLink: NSURL, completionHandler: () => void): void;
}
declare var UADeepLinkDelegate: {

	prototype: UADeepLinkDelegate;
};

declare class UADefaultMessageCenterListViewController extends UIViewController implements UIScrollViewDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): UADefaultMessageCenterListViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterListViewController; // inherited from NSObject

	delegate: UAMessageCenterListViewDelegate;

	filter: NSPredicate;

	messageCenterStyle: UAMessageCenterStyle;

	selectedIndexPath: NSIndexPath;

	selectedMessageID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewSelectionFollowsFocusForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class UADefaultMessageCenterMessageViewController extends UIViewController {

	static alloc(): UADefaultMessageCenterMessageViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterMessageViewController; // inherited from NSObject

	delegate: UAMessageCenterMessageViewDelegate;

	disableMessageLinkPreviewAndCallouts: boolean;

	readonly message: UAInboxMessage;

	clearMessage(): void;

	loadMessageForID(messageID: string): void;
}

declare class UADefaultMessageCenterSplitViewController extends UISplitViewController implements UAMessageCenterListViewDelegate, UAMessageCenterMessageViewDelegate {

	static alloc(): UADefaultMessageCenterSplitViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterSplitViewController; // inherited from NSObject

	disableMessageLinkPreviewAndCallouts: boolean;

	filter: NSPredicate;

	readonly listViewController: UADefaultMessageCenterListViewController;

	messageCenterStyle: UAMessageCenterStyle;

	readonly messageViewController: UADefaultMessageCenterMessageViewController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didSelectMessageWithID(messageID: string): void;

	displayMessageForID(messageID: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	messageClosed(messageID: string): void;

	messageLoadFailedError(messageID: string, error: NSError): void;

	messageLoadStarted(messageID: string): void;

	messageLoadSucceeded(messageID: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldClearSelectionOnViewWillAppear(): boolean;
}

declare class UADefaultMessageCenterSplitViewDelegate extends NSObject implements UISplitViewControllerDelegate {

	static alloc(): UADefaultMessageCenterSplitViewDelegate; // inherited from NSObject

	static new(): UADefaultMessageCenterSplitViewDelegate; // inherited from NSObject

	constructor(o: { listViewController: UADefaultMessageCenterListViewController; });

	initWithListViewController(listViewController: UADefaultMessageCenterListViewController): this;

	primaryViewControllerForCollapsingSplitViewController(splitViewController: UISplitViewController): UIViewController;

	primaryViewControllerForExpandingSplitViewController(splitViewController: UISplitViewController): UIViewController;

	splitViewControllerCollapseSecondaryViewControllerOntoPrimaryViewController(splitViewController: UISplitViewController, secondaryViewController: UIViewController, primaryViewController: UIViewController): boolean;

	splitViewControllerDidCollapse(svc: UISplitViewController): void;

	splitViewControllerDidExpand(svc: UISplitViewController): void;

	splitViewControllerDisplayModeForExpandingToProposedDisplayMode(svc: UISplitViewController, proposedDisplayMode: UISplitViewControllerDisplayMode): UISplitViewControllerDisplayMode;

	splitViewControllerInteractivePresentationGestureDidEnd(svc: UISplitViewController): void;

	splitViewControllerInteractivePresentationGestureWillBegin(svc: UISplitViewController): void;

	splitViewControllerPopoverControllerWillPresentViewController(svc: UISplitViewController, pc: UIPopoverController, aViewController: UIViewController): void;

	splitViewControllerPreferredInterfaceOrientationForPresentation(splitViewController: UISplitViewController): UIInterfaceOrientation;

	splitViewControllerSeparateSecondaryViewControllerFromPrimaryViewController(splitViewController: UISplitViewController, primaryViewController: UIViewController): UIViewController;

	splitViewControllerShouldHideViewControllerInOrientation(svc: UISplitViewController, vc: UIViewController, orientation: UIInterfaceOrientation): boolean;

	splitViewControllerShowDetailViewControllerSender(splitViewController: UISplitViewController, vc: UIViewController, sender: any): boolean;

	splitViewControllerShowViewControllerSender(splitViewController: UISplitViewController, vc: UIViewController, sender: any): boolean;

	splitViewControllerSupportedInterfaceOrientations(splitViewController: UISplitViewController): UIInterfaceOrientationMask;

	splitViewControllerTopColumnForCollapsingToProposedTopColumn(svc: UISplitViewController, proposedTopColumn: UISplitViewControllerColumn): UISplitViewControllerColumn;

	splitViewControllerWillChangeToDisplayMode(svc: UISplitViewController, displayMode: UISplitViewControllerDisplayMode): void;

	splitViewControllerWillHideColumn(svc: UISplitViewController, column: UISplitViewControllerColumn): void;

	splitViewControllerWillHideViewControllerWithBarButtonItemForPopoverController(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem, pc: UIPopoverController): void;

	splitViewControllerWillShowColumn(svc: UISplitViewController, column: UISplitViewControllerColumn): void;

	splitViewControllerWillShowViewControllerInvalidatingBarButtonItem(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem): void;

	targetDisplayModeForActionInSplitViewController(svc: UISplitViewController): UISplitViewControllerDisplayMode;
}

declare class UADefaultMessageCenterUI extends NSObject implements UAMessageCenterDisplayDelegate {

	static alloc(): UADefaultMessageCenterUI; // inherited from NSObject

	static new(): UADefaultMessageCenterUI; // inherited from NSObject

	disableMessageLinkPreviewAndCallouts: boolean;

	filter: NSPredicate;

	messageCenterStyle: UAMessageCenterStyle;

	title: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissMessageCenterAnimated(animated: boolean): void;

	displayMessageCenterAnimated(animated: boolean): void;

	displayMessageCenterForMessageIDAnimated(messageID: string, animated: boolean): void;

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

declare class UADeferredSchedule extends UASchedule {

	static alloc(): UADeferredSchedule; // inherited from NSObject

	static new(): UADeferredSchedule; // inherited from NSObject

	readonly deferredData: UAScheduleDeferredData;
}

declare class UADelay extends NSObject implements UADelayProtocol {

	static alloc(): UADelay; // inherited from NSObject

	static new(): UADelay; // inherited from NSObject

	constructor();

	cancel(): void;

	init(seconds: number): this;

	start(): void;
}

interface UADelayProtocol {

	cancel(): void;

	start(): void;
}
declare var UADelayProtocol: {

	prototype: UADelayProtocol;
};

declare class UADispatcher extends NSObject {

	static alloc(): UADispatcher; // inherited from NSObject

	static new(): UADispatcher; // inherited from NSObject

	static serial(): UADispatcher;

	static readonly global: UADispatcher;

	static readonly main: UADispatcher;

	dispatchAfterBlock(delay: number, block: () => void): UADisposable;

	dispatchAfterTimebaseBlock(delay: number, timebase: UADispatcherTimeBase, block: () => void): UADisposable;

	dispatchAsync(block: () => void): void;

	dispatchAsyncIfNecessary(block: () => void): void;

	dispatchSync(block: () => void): void;

	doSync(block: () => void): void;
}

declare const enum UADispatcherTimeBase {

	Wall = 0,

	System = 1
}

declare class UADisposable extends NSObject {

	static alloc(): UADisposable; // inherited from NSObject

	static new(): UADisposable; // inherited from NSObject

	constructor();

	dispose(): void;

	init(disposalBlock: () => void): this;
}

declare class UAEmptyAction extends NSObject implements UAAction {

	static alloc(): UAEmptyAction; // inherited from NSObject

	static new(): UAEmptyAction; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAEnableFeatureAction extends NSObject implements UAAction {

	static alloc(): UAEnableFeatureAction; // inherited from NSObject

	static new(): UAEnableFeatureAction; // inherited from NSObject

	static readonly backgroundLocationActionValue: string;

	static readonly locationActionValue: string;

	static readonly name: string;

	static readonly shortName: string;

	static readonly userNotificationsActionValue: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { push: () => UAPush; location: () => UALocationProvider; });

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	initWithPushLocation(push: () => UAPush, location: () => UALocationProvider): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAEnableFeatureActionPredicate extends NSObject implements UAActionPredicateProtocol {

	static alloc(): UAEnableFeatureActionPredicate; // inherited from NSObject

	static new(): UAEnableFeatureActionPredicate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyActionArguments(args: UAActionArguments): boolean;

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

interface UAEvent extends NSObjectProtocol {

	data: NSDictionary<any, any>;

	eventType: string;

	priority: UAEventPriority;

	isValid?(): boolean;
}
declare var UAEvent: {

	prototype: UAEvent;
};

declare class UAEventAPIClient extends NSObject implements UAEventAPIClientProtocol {

	static alloc(): UAEventAPIClient; // inherited from NSObject

	static new(): UAEventAPIClient; // inherited from NSObject

	constructor(o: { config: UARuntimeConfig; });

	constructor(o: { config: UARuntimeConfig; session: UARequestSession; });

	initWithConfig(config: UARuntimeConfig): this;

	initWithConfigSession(config: UARuntimeConfig, session: UARequestSession): this;

	uploadEventsHeadersCompletionHandler(events: NSArray<NSObject> | NSObject[], headers: NSDictionary<string, string>, completionHandler: (p1: UAEventAPIResponse, p2: NSError) => void): UADisposable;
}

interface UAEventAPIClientProtocol {

	uploadEventsHeadersCompletionHandler(events: NSArray<NSObject> | NSObject[], headers: NSDictionary<string, string>, completionHandler: (p1: UAEventAPIResponse, p2: NSError) => void): UADisposable;
}
declare var UAEventAPIClientProtocol: {

	prototype: UAEventAPIClientProtocol;
};

declare class UAEventAPIResponse extends UAHTTPResponse {

	static alloc(): UAEventAPIResponse; // inherited from NSObject

	static new(): UAEventAPIResponse; // inherited from NSObject

	readonly maxBatchSize: number;

	readonly maxTotalDBSize: number;

	readonly minBatchInterval: number;

	constructor(o: { status: number; maxTotalDBSize: number; maxBatchSize: number; minBatchInterval: number; });

	initWithStatusMaxTotalDBSizeMaxBatchSizeMinBatchInterval(status: number, maxTotalDBSize: number, maxBatchSize: number, minBatchInterval: number): this;
}

declare class UAEventData extends NSManagedObject {

	static alloc(): UAEventData; // inherited from NSObject

	static new(): UAEventData; // inherited from NSObject

	bytes: number;

	data: NSData;

	identifier: string;

	sessionID: string;

	storeDate: Date;

	time: string;

	type: string;
}

declare class UAEventManager extends NSObject implements UAEventManagerProtocol {

	static alloc(): UAEventManager; // inherited from NSObject

	static new(): UAEventManager; // inherited from NSObject

	delegate: UAEventManagerDelegate; // inherited from UAEventManagerProtocol

	uploadsEnabled: boolean; // inherited from UAEventManagerProtocol

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannelProtocol; });

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannelProtocol; eventStore: UAEventStoreProtocol; client: UAEventAPIClientProtocol; notificationCenter: NSNotificationCenter; appStateTracker: UAAppStateTracker; taskManager: TaskManagerProtocol; delayProvider: (p1: number) => UADelayProtocol; });

	addEventIDEventDateSessionID(event: UAEvent, eventID: string, eventDate: Date, sessionID: string): void;

	deleteAllEvents(): void;

	initWithConfigDataStoreChannel(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannelProtocol): this;

	initWithConfigDataStoreChannelEventStoreClientNotificationCenterAppStateTrackerTaskManagerDelayProvider(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannelProtocol, eventStore: UAEventStoreProtocol, client: UAEventAPIClientProtocol, notificationCenter: NSNotificationCenter, appStateTracker: UAAppStateTracker, taskManager: TaskManagerProtocol, delayProvider: (p1: number) => UADelayProtocol): this;

	scheduleUpload(): void;
}

interface UAEventManagerDelegate extends NSObjectProtocol {

	analyticsHeaders(): NSDictionary<string, string>;
}
declare var UAEventManagerDelegate: {

	prototype: UAEventManagerDelegate;
};

interface UAEventManagerProtocol {

	delegate: UAEventManagerDelegate;

	uploadsEnabled: boolean;

	addEventIDEventDateSessionID(event: UAEvent, eventID: string, eventDate: Date, sessionID: string): void;

	deleteAllEvents(): void;

	scheduleUpload(): void;
}
declare var UAEventManagerProtocol: {

	prototype: UAEventManagerProtocol;
};

declare const enum UAEventPriority {

	Low = 0,

	Normal = 1,

	High = 2
}

declare class UAEventStore extends NSObject implements UAEventStoreProtocol {

	static alloc(): UAEventStore; // inherited from NSObject

	static new(): UAEventStore; // inherited from NSObject

	constructor(o: { config: UARuntimeConfig; });

	deleteAllEvents(): void;

	deleteEventsWithIDs(eventIDs: NSArray<string> | string[]): void;

	fetchEventsWithLimitCompletionHandler(limit: number, completionHandler: (p1: NSArray<UAEventData>) => void): void;

	initWithConfig(config: UARuntimeConfig): this;

	saveEventIDEventDateSessionID(event: UAEvent, eventID: string, eventDate: Date, sessionID: string): void;

	trimEventsToStoreSize(maxSize: number): void;
}

interface UAEventStoreProtocol {

	deleteAllEvents(): void;

	deleteEventsWithIDs(eventIDs: NSArray<string> | string[]): void;

	fetchEventsWithLimitCompletionHandler(limit: number, completionHandler: (p1: NSArray<UAEventData>) => void): void;

	saveEventIDEventDateSessionID(event: UAEvent, eventID: string, eventDate: Date, sessionID: string): void;

	trimEventsToStoreSize(maxSize: number): void;
}
declare var UAEventStoreProtocol: {

	prototype: UAEventStoreProtocol;
};

declare class UAExpirableTask extends NSObject implements UATask {

	static alloc(): UAExpirableTask; // inherited from NSObject

	static new(): UAExpirableTask; // inherited from NSObject

	expirationHandler: () => void; // inherited from UATask

	readonly requestOptions: UATaskRequestOptions; // inherited from UATask

	readonly taskID: string; // inherited from UATask

	constructor(o: { taskID: string; requestOptions: UATaskRequestOptions; completionHandler: (p1: boolean) => void; });

	expire(): void;

	initWithTaskIDRequestOptionsCompletionHandler(taskID: string, requestOptions: UATaskRequestOptions, completionHandler: (p1: boolean) => void): this;

	taskCompleted(): void;

	taskFailed(): void;
}

declare class UAExtendedActionsResources extends NSObject {

	static alloc(): UAExtendedActionsResources; // inherited from NSObject

	static bundle(): NSBundle;

	static new(): UAExtendedActionsResources; // inherited from NSObject
}

declare class UAExtendedActionsSDKModule extends NSObject implements UASDKModule {

	static alloc(): UAExtendedActionsSDKModule; // inherited from NSObject

	static loadWithDependencies(dependencies: NSDictionary<any, any>): UASDKModule;

	static new(): UAExtendedActionsSDKModule; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionsPlist(): string;

	class(): typeof NSObject;

	components(): NSArray<UAComponent>;

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

declare const enum UAFeatures {

	InAppAutomation = 1,

	MessageCenter = 2,

	Push = 4,

	Chat = 8,

	Analytics = 16,

	TagsAndAttributes = 32,

	Contacts = 64,

	Location = 128,

	All = 255
}

declare var UAFeaturesNone: UAFeatures;

declare class UAFetchDeviceInfoAction extends NSObject implements UAAction {

	static alloc(): UAFetchDeviceInfoAction; // inherited from NSObject

	static new(): UAFetchDeviceInfoAction; // inherited from NSObject

	static readonly channelID: string;

	static readonly locationEnabled: string;

	static readonly name: string;

	static readonly namedUser: string;

	static readonly pushOptIn: string;

	static readonly shortName: string;

	static readonly tags: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: () => UAChannelProtocol; contact: () => UAContactProtocol; push: () => UAPushProtocol; location: () => UALocationProvider; });

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	initWithChannelContactPushLocation(channel: () => UAChannelProtocol, contact: () => UAContactProtocol, push: () => UAPushProtocol, location: () => UALocationProvider): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAFetchDeviceInfoActionPredicate extends NSObject implements UAActionPredicateProtocol {

	static alloc(): UAFetchDeviceInfoActionPredicate; // inherited from NSObject

	static new(): UAFetchDeviceInfoActionPredicate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyActionArguments(args: UAActionArguments): boolean;

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

declare var UAFullScreenBodyStyleKey: string;

declare var UAFullScreenButtonStyleKey: string;

declare var UAFullScreenDismissIconResourceKey: string;

declare var UAFullScreenHeaderStyleKey: string;

declare var UAFullScreenMediaStyleKey: string;

declare var UAFullScreenStyleFileName: string;

declare var UAFullScreenTextStyleKey: string;

declare var UAHTMLAdditionalPaddingKey: string;

declare var UAHTMLDismissIconResourceKey: string;

declare var UAHTMLHideDismissIconKey: string;

declare var UAHTMLMaxHeightKey: string;

declare var UAHTMLMaxWidthKey: string;

declare var UAHTMLStyleFileName: string;

declare class UAHTTPResponse extends NSObject {

	static alloc(): UAHTTPResponse; // inherited from NSObject

	static new(): UAHTTPResponse; // inherited from NSObject

	readonly isClientError: boolean;

	readonly isServerError: boolean;

	readonly isSuccess: boolean;

	readonly status: number;

	constructor(o: { status: number; });

	initWithStatus(status: number): this;
}

declare class UAIOSChannelSettings extends NSObject implements NSCopying {

	static alloc(): UAIOSChannelSettings; // inherited from NSObject

	static new(): UAIOSChannelSettings; // inherited from NSObject

	badgeNumber: number;

	quietTime: UAQuietTime;

	quietTimeTimeZone: string;

	scheduledSummary: number;

	timeSensitive: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class UAIdentityHints extends NSObject implements NSCopying {

	static alloc(): UAIdentityHints; // inherited from NSObject

	static new(): UAIdentityHints; // inherited from NSObject

	accengageDeviceID: string;

	userID: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class UAInAppAutomation extends NSObject implements UAComponent {

	static alloc(): UAInAppAutomation; // inherited from NSObject

	static new(): UAInAppAutomation; // inherited from NSObject

	readonly inAppMessageManager: UAInAppMessageManager;

	paused: boolean;

	static readonly shared: UAInAppAutomation;

	componentEnabled: boolean; // inherited from UAComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	airshipReady(): void;

	applyRemoteConfig(config: any): void;

	cancelActionSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

	cancelMessageSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

	cancelScheduleWithIDCompletionHandler(scheduleID: string, completionHandler: (p1: boolean) => void): void;

	cancelSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

	checkAudienceCompletionHandler(audience: UAScheduleAudience, completionHandler: (p1: boolean, p2: NSError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deepLink(deepLink: NSURL): boolean;

	editScheduleWithIDEditsCompletionHandler(identifier: string, edits: UAScheduleEdits, completionHandler: (p1: boolean) => void): void;

	getActionScheduleWithIDCompletionHandler(identifier: string, completionHandler: (p1: UAActionSchedule) => void): void;

	getActionSchedules(completionHandler: (p1: NSArray<UAActionSchedule>) => void): void;

	getActionSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: NSArray<UAActionSchedule>) => void): void;

	getMessageScheduleWithIDCompletionHandler(identifier: string, completionHandler: (p1: UAInAppMessageSchedule) => void): void;

	getMessageSchedules(completionHandler: (p1: NSArray<UAInAppMessageSchedule>) => void): void;

	getMessageSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: NSArray<UAInAppMessageSchedule>) => void): void;

	getSchedules(completionHandler: (p1: NSArray<UASchedule>) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleCompletionHandler(schedule: UASchedule, completionHandler: (p1: boolean) => void): void;

	scheduleMultipleCompletionHandler(schedules: NSArray<UASchedule> | UASchedule[], completionHandler: (p1: boolean) => void): void;

	self(): this;
}

declare class UAInAppMessage extends NSObject {

	static alloc(): UAInAppMessage; // inherited from NSObject

	static messageWithBuilderBlock(builderBlock: (p1: UAInAppMessageBuilder) => void): UAInAppMessage;

	static new(): UAInAppMessage; // inherited from NSObject

	readonly actions: NSDictionary<any, any>;

	readonly displayBehavior: string;

	readonly displayContent: UAInAppMessageDisplayContent;

	readonly displayType: UAInAppMessageDisplayType;

	readonly extras: NSDictionary<any, any>;

	readonly isReportingEnabled: boolean;

	readonly name: string;

	extend(builderBlock: (p1: UAInAppMessageBuilder) => void): UAInAppMessage;
}

interface UAInAppMessageAdapterProtocol extends NSObjectProtocol {

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isReadyToDisplay(): boolean;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;
}
declare var UAInAppMessageAdapterProtocol: {

	prototype: UAInAppMessageAdapterProtocol;

	adapterForMessage(message: UAInAppMessage): UAInAppMessageAdapterProtocol;
};

declare class UAInAppMessageAssetManager extends NSObject {

	static alloc(): UAInAppMessageAssetManager; // inherited from NSObject

	static new(): UAInAppMessageAssetManager; // inherited from NSObject

	cachePolicyDelegate: UAInAppMessageCachePolicyDelegate;

	prepareAssetsDelegate: UAInAppMessagePrepareAssetsDelegate;
}

declare class UAInAppMessageAssets extends NSObject {

	static alloc(): UAInAppMessageAssets; // inherited from NSObject

	static new(): UAInAppMessageAssets; // inherited from NSObject

	getCacheURL(assetURL: NSURL): NSURL;

	isCached(assetURL: NSURL): boolean;
}

declare var UAInAppMessageBackgroundColorKey: string;

declare class UAInAppMessageBannerAdapter extends NSObject implements UAInAppMessageAdapterProtocol {

	static adapterForMessage(message: UAInAppMessage): UAInAppMessageBannerAdapter;

	static alloc(): UAInAppMessageBannerAdapter; // inherited from NSObject

	static new(): UAInAppMessageBannerAdapter; // inherited from NSObject

	style: UAInAppMessageBannerStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReadyToDisplay(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum UAInAppMessageBannerContentLayoutType {

	MediaLeft = 0,

	MediaRight = 1
}

declare class UAInAppMessageBannerDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageBannerDisplayContent; // inherited from NSObject

	static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageBannerDisplayContentBuilder) => void): UAInAppMessageBannerDisplayContent;

	static new(): UAInAppMessageBannerDisplayContent; // inherited from NSObject

	readonly actions: NSDictionary<any, any>;

	readonly backgroundColor: UIColor;

	readonly body: UAInAppMessageTextInfo;

	readonly borderRadiusPoints: number;

	readonly buttonLayout: UAInAppMessageButtonLayoutType;

	readonly buttons: NSArray<UAInAppMessageButtonInfo>;

	readonly contentLayout: UAInAppMessageBannerContentLayoutType;

	readonly dismissButtonColor: UIColor;

	readonly durationSeconds: number;

	readonly heading: UAInAppMessageTextInfo;

	readonly media: UAInAppMessageMediaInfo;

	readonly placement: UAInAppMessageBannerPlacementType;

	extend(builderBlock: (p1: UAInAppMessageBannerDisplayContentBuilder) => void): UAInAppMessageBannerDisplayContent;
}

declare class UAInAppMessageBannerDisplayContentBuilder extends NSObject {

	static alloc(): UAInAppMessageBannerDisplayContentBuilder; // inherited from NSObject

	static new(): UAInAppMessageBannerDisplayContentBuilder; // inherited from NSObject

	actions: NSDictionary<any, any>;

	backgroundColor: UIColor;

	body: UAInAppMessageTextInfo;

	borderRadiusPoints: number;

	buttonLayout: UAInAppMessageButtonLayoutType;

	buttons: NSArray<UAInAppMessageButtonInfo>;

	contentLayout: UAInAppMessageBannerContentLayoutType;

	dismissButtonColor: UIColor;

	durationSeconds: number;

	heading: UAInAppMessageTextInfo;

	media: UAInAppMessageMediaInfo;

	placement: UAInAppMessageBannerPlacementType;

	isValid(): boolean;
}

declare var UAInAppMessageBannerMaxButtons: number;

declare const enum UAInAppMessageBannerPlacementType {

	Top = 0,

	Bottom = 1
}

declare class UAInAppMessageBannerStyle extends NSObject implements UAInAppMessageStyleProtocol {

	static alloc(): UAInAppMessageBannerStyle; // inherited from NSObject

	static new(): UAInAppMessageBannerStyle; // inherited from NSObject

	static style(): UAInAppMessageBannerStyle;

	static styleWithContentsOfFile(path: string): UAInAppMessageBannerStyle;

	additionalPadding: UAPadding;

	bodyStyle: UAInAppMessageTextStyle;

	buttonStyle: UAInAppMessageButtonStyle;

	headerStyle: UAInAppMessageTextStyle;

	maxWidth: number;

	mediaStyle: UAInAppMessageMediaStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

declare var UAInAppMessageBodyKey: string;

declare var UAInAppMessageBorderRadiusKey: string;

declare class UAInAppMessageBuilder extends NSObject {

	static alloc(): UAInAppMessageBuilder; // inherited from NSObject

	static new(): UAInAppMessageBuilder; // inherited from NSObject

	actions: NSDictionary<any, any>;

	displayBehavior: string;

	displayContent: UAInAppMessageDisplayContent;

	extras: NSDictionary<any, any>;

	isReportingEnabled: boolean;

	name: string;

	isValid(): boolean;
}

declare class UAInAppMessageButtonInfo extends NSObject {

	static alloc(): UAInAppMessageButtonInfo; // inherited from NSObject

	static buttonInfoWithBuilderBlock(builderBlock: (p1: UAInAppMessageButtonInfoBuilder) => void): UAInAppMessageButtonInfo;

	static new(): UAInAppMessageButtonInfo; // inherited from NSObject

	readonly actions: NSDictionary<any, any>;

	readonly backgroundColor: UIColor;

	readonly behavior: UAInAppMessageButtonInfoBehaviorType;

	readonly borderColor: UIColor;

	readonly borderRadiusPoints: number;

	readonly identifier: string;

	readonly label: UAInAppMessageTextInfo;

	extend(builderBlock: (p1: UAInAppMessageButtonInfoBuilder) => void): UAInAppMessageButtonInfo;
}

declare const enum UAInAppMessageButtonInfoBehaviorType {

	Dismiss = 0,

	Cancel = 1
}

declare class UAInAppMessageButtonInfoBuilder extends NSObject {

	static alloc(): UAInAppMessageButtonInfoBuilder; // inherited from NSObject

	static new(): UAInAppMessageButtonInfoBuilder; // inherited from NSObject

	actions: NSDictionary<any, any>;

	backgroundColor: UIColor;

	behavior: UAInAppMessageButtonInfoBehaviorType;

	borderColor: UIColor;

	borderRadiusPoints: number;

	identifier: string;

	label: UAInAppMessageTextInfo;

	isValid(): boolean;
}

declare var UAInAppMessageButtonInfoIDLimit: number;

declare var UAInAppMessageButtonLayoutJoinedValue: string;

declare var UAInAppMessageButtonLayoutKey: string;

declare var UAInAppMessageButtonLayoutSeparateValue: string;

declare var UAInAppMessageButtonLayoutStackedValue: string;

declare const enum UAInAppMessageButtonLayoutType {

	Stacked = 0,

	Separate = 1,

	Joined = 2
}

declare class UAInAppMessageButtonStyle extends NSObject {

	static alloc(): UAInAppMessageButtonStyle; // inherited from NSObject

	static new(): UAInAppMessageButtonStyle; // inherited from NSObject

	static styleWithAdditionalPaddingButtonTextStyleButtonHeightStackedButtonSpacingSeparatedButtonSpacingBorderWidth(additionalPadding: UAPadding, textStyle: UAInAppMessageTextStyle, buttonHeight: number, stackedButtonSpacing: number, separatedButtonSpacing: number, borderWidth: number): UAInAppMessageButtonStyle;

	static styleWithDictionary(buttonStyle: NSDictionary<any, any>): UAInAppMessageButtonStyle;

	additionalPadding: UAPadding;

	borderWidth: number;

	buttonHeight: number;

	buttonTextStyle: UAInAppMessageTextStyle;

	separatedButtonSpacing: number;

	stackedButtonSpacing: number;
}

declare var UAInAppMessageButtonsKey: string;

interface UAInAppMessageCachePolicyDelegate extends NSObjectProtocol {

	shouldCacheOnSchedule(message: UAInAppMessage): boolean;

	shouldPersistCacheAfterDisplay(message: UAInAppMessage): boolean;
}
declare var UAInAppMessageCachePolicyDelegate: {

	prototype: UAInAppMessageCachePolicyDelegate;
};

declare var UAInAppMessageContentLayoutKey: string;

declare class UAInAppMessageCustomDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageCustomDisplayContent; // inherited from NSObject

	static displayContentWithValue(value: NSDictionary<any, any>): UAInAppMessageCustomDisplayContent;

	static new(): UAInAppMessageCustomDisplayContent; // inherited from NSObject

	readonly value: NSDictionary<any, any>;
}

declare class UAInAppMessageDefaultDisplayCoordinator extends NSObject implements UAInAppMessageDisplayCoordinator {

	static alloc(): UAInAppMessageDefaultDisplayCoordinator; // inherited from NSObject

	static coordinator(): UAInAppMessageDefaultDisplayCoordinator;

	static new(): UAInAppMessageDefaultDisplayCoordinator; // inherited from NSObject

	displayInterval: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReady: boolean; // inherited from UAInAppMessageDisplayCoordinator

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didBeginDisplayingMessage(message: UAInAppMessage): void;

	didFinishDisplayingMessage(message: UAInAppMessage): void;

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

declare class UAInAppMessageDefaultPrepareAssetsDelegate extends NSObject implements UAInAppMessagePrepareAssetsDelegate {

	static alloc(): UAInAppMessageDefaultPrepareAssetsDelegate; // inherited from NSObject

	static new(): UAInAppMessageDefaultPrepareAssetsDelegate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	onPrepareAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	onScheduleAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageDismissButtonColorKey: string;

declare var UAInAppMessageDisplayBehaviorDefault: string;

declare var UAInAppMessageDisplayBehaviorImmediate: string;

declare class UAInAppMessageDisplayContent extends NSObject {

	static alloc(): UAInAppMessageDisplayContent; // inherited from NSObject

	static new(): UAInAppMessageDisplayContent; // inherited from NSObject

	readonly displayType: UAInAppMessageDisplayType;

	toJSON(): NSDictionary<any, any>;
}

interface UAInAppMessageDisplayCoordinator extends NSObjectProtocol {

	isReady: boolean;

	didBeginDisplayingMessage?(message: UAInAppMessage): void;

	didFinishDisplayingMessage?(message: UAInAppMessage): void;
}
declare var UAInAppMessageDisplayCoordinator: {

	prototype: UAInAppMessageDisplayCoordinator;
};

declare var UAInAppMessageDisplayCoordinatorIsReadyKey: string;

declare const enum UAInAppMessageDisplayType {

	Banner = 0,

	FullScreen = 1,

	Modal = 2,

	HTML = 3,

	Custom = 4
}

declare var UAInAppMessageDurationKey: string;

declare var UAInAppMessageFooterKey: string;

declare class UAInAppMessageFullScreenAdapter extends NSObject implements UAInAppMessageAdapterProtocol {

	static adapterForMessage(message: UAInAppMessage): UAInAppMessageFullScreenAdapter;

	static alloc(): UAInAppMessageFullScreenAdapter; // inherited from NSObject

	static new(): UAInAppMessageFullScreenAdapter; // inherited from NSObject

	style: UAInAppMessageFullScreenStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReadyToDisplay(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum UAInAppMessageFullScreenContentLayoutType {

	HeaderMediaBody = 0,

	MediaHeaderBody = 1,

	HeaderBodyMedia = 2
}

declare class UAInAppMessageFullScreenDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageFullScreenDisplayContent; // inherited from NSObject

	static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageFullScreenDisplayContentBuilder) => void): UAInAppMessageFullScreenDisplayContent;

	static new(): UAInAppMessageFullScreenDisplayContent; // inherited from NSObject

	readonly backgroundColor: UIColor;

	readonly body: UAInAppMessageTextInfo;

	readonly buttonLayout: UAInAppMessageButtonLayoutType;

	readonly buttons: NSArray<UAInAppMessageButtonInfo>;

	readonly contentLayout: UAInAppMessageFullScreenContentLayoutType;

	readonly dismissButtonColor: UIColor;

	readonly footer: UAInAppMessageButtonInfo;

	readonly heading: UAInAppMessageTextInfo;

	readonly media: UAInAppMessageMediaInfo;

	extend(builderBlock: (p1: UAInAppMessageFullScreenDisplayContentBuilder) => void): UAInAppMessageFullScreenDisplayContent;
}

declare class UAInAppMessageFullScreenDisplayContentBuilder extends NSObject {

	static alloc(): UAInAppMessageFullScreenDisplayContentBuilder; // inherited from NSObject

	static new(): UAInAppMessageFullScreenDisplayContentBuilder; // inherited from NSObject

	backgroundColor: UIColor;

	body: UAInAppMessageTextInfo;

	buttonLayout: UAInAppMessageButtonLayoutType;

	buttons: NSArray<UAInAppMessageButtonInfo>;

	contentLayout: UAInAppMessageFullScreenContentLayoutType;

	dismissButtonColor: UIColor;

	footer: UAInAppMessageButtonInfo;

	heading: UAInAppMessageTextInfo;

	media: UAInAppMessageMediaInfo;

	isValid(): boolean;
}

declare var UAInAppMessageFullScreenMaxButtons: number;

declare class UAInAppMessageFullScreenStyle extends NSObject implements UAInAppMessageStyleProtocol {

	static alloc(): UAInAppMessageFullScreenStyle; // inherited from NSObject

	static new(): UAInAppMessageFullScreenStyle; // inherited from NSObject

	static style(): UAInAppMessageFullScreenStyle;

	static styleWithContentsOfFile(path: string): UAInAppMessageFullScreenStyle;

	bodyStyle: UAInAppMessageTextStyle;

	buttonStyle: UAInAppMessageButtonStyle;

	dismissIconResource: string;

	headerStyle: UAInAppMessageTextStyle;

	mediaStyle: UAInAppMessageMediaStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

declare class UAInAppMessageHTMLAdapter extends NSObject implements UAInAppMessageAdapterProtocol {

	static adapterForMessage(message: UAInAppMessage): UAInAppMessageHTMLAdapter;

	static alloc(): UAInAppMessageHTMLAdapter; // inherited from NSObject

	static new(): UAInAppMessageHTMLAdapter; // inherited from NSObject

	style: UAInAppMessageHTMLStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReadyToDisplay(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageHTMLAllowsFullScreenKey: string;

declare var UAInAppMessageHTMLAspectLockKey: string;

declare class UAInAppMessageHTMLDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageHTMLDisplayContent; // inherited from NSObject

	static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageHTMLDisplayContentBuilder) => void): UAInAppMessageHTMLDisplayContent;

	static new(): UAInAppMessageHTMLDisplayContent; // inherited from NSObject

	readonly allowFullScreenDisplay: boolean;

	readonly aspectLock: boolean;

	readonly backgroundColor: UIColor;

	readonly borderRadiusPoints: number;

	readonly dismissButtonColor: UIColor;

	readonly height: number;

	readonly requireConnectivity: boolean;

	readonly url: string;

	readonly width: number;

	extend(builderBlock: (p1: UAInAppMessageHTMLDisplayContentBuilder) => void): UAInAppMessageHTMLDisplayContent;
}

declare class UAInAppMessageHTMLDisplayContentBuilder extends NSObject {

	static alloc(): UAInAppMessageHTMLDisplayContentBuilder; // inherited from NSObject

	static new(): UAInAppMessageHTMLDisplayContentBuilder; // inherited from NSObject

	allowFullScreenDisplay: boolean;

	aspectLock: boolean;

	backgroundColor: UIColor;

	borderRadiusPoints: number;

	dismissButtonColor: UIColor;

	height: number;

	requiresConnectivity: boolean;

	url: string;

	width: number;

	isValid(): boolean;
}

declare var UAInAppMessageHTMLHeightKey: string;

declare var UAInAppMessageHTMLRequireConnectivityKey: string;

declare class UAInAppMessageHTMLStyle extends NSObject implements UAInAppMessageStyleProtocol {

	static alloc(): UAInAppMessageHTMLStyle; // inherited from NSObject

	static new(): UAInAppMessageHTMLStyle; // inherited from NSObject

	static style(): UAInAppMessageHTMLStyle;

	static styleWithContentsOfFile(path: string): UAInAppMessageHTMLStyle;

	additionalPadding: UAPadding;

	dismissIconResource: string;

	hideDismissIcon: boolean;

	maxHeight: number;

	maxWidth: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

declare var UAInAppMessageHTMLWidthKey: string;

declare var UAInAppMessageHeadingKey: string;

declare class UAInAppMessageImmediateDisplayCoordinator extends NSObject implements UAInAppMessageDisplayCoordinator {

	static alloc(): UAInAppMessageImmediateDisplayCoordinator; // inherited from NSObject

	static coordinator(): UAInAppMessageImmediateDisplayCoordinator;

	static new(): UAInAppMessageImmediateDisplayCoordinator; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReady: boolean; // inherited from UAInAppMessageDisplayCoordinator

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didBeginDisplayingMessage(message: UAInAppMessage): void;

	didFinishDisplayingMessage(message: UAInAppMessage): void;

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

declare class UAInAppMessageManager extends NSObject {

	static alloc(): UAInAppMessageManager; // inherited from NSObject

	static new(): UAInAppMessageManager; // inherited from NSObject

	readonly assetManager: UAInAppMessageAssetManager;

	delegate: UAInAppMessagingDelegate;

	displayInterval: number;

	setFactoryBlockForDisplayType(factory: (p1: UAInAppMessage) => UAInAppMessageAdapterProtocol, displayType: UAInAppMessageDisplayType): void;
}

declare class UAInAppMessageMediaInfo extends NSObject {

	static alloc(): UAInAppMessageMediaInfo; // inherited from NSObject

	static mediaInfoWithURLContentDescriptionType(url: string, contentDescription: string, type: UAInAppMessageMediaInfoType): UAInAppMessageMediaInfo;

	static new(): UAInAppMessageMediaInfo; // inherited from NSObject

	readonly contentDescription: string;

	readonly type: UAInAppMessageMediaInfoType;

	readonly url: string;
}

declare const enum UAInAppMessageMediaInfoType {

	Image = 0,

	Video = 1,

	YouTube = 2
}

declare var UAInAppMessageMediaKey: string;

declare class UAInAppMessageMediaStyle extends NSObject {

	static alloc(): UAInAppMessageMediaStyle; // inherited from NSObject

	static new(): UAInAppMessageMediaStyle; // inherited from NSObject

	static styleWithAdditionalPadding(additionalPadding: UAPadding): UAInAppMessageMediaStyle;

	static styleWithDictionary(mediaStyleDict: NSDictionary<any, any>): UAInAppMessageMediaStyle;

	additionalPadding: UAPadding;
}

declare class UAInAppMessageModalAdapter extends NSObject implements UAInAppMessageAdapterProtocol {

	static adapterForMessage(message: UAInAppMessage): UAInAppMessageModalAdapter;

	static alloc(): UAInAppMessageModalAdapter; // inherited from NSObject

	static new(): UAInAppMessageModalAdapter; // inherited from NSObject

	style: UAInAppMessageModalStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReadyToDisplay(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageModalAllowsFullScreenKey: string;

declare const enum UAInAppMessageModalContentLayoutType {

	HeaderMediaBody = 0,

	MediaHeaderBody = 1,

	HeaderBodyMedia = 2
}

declare class UAInAppMessageModalDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageModalDisplayContent; // inherited from NSObject

	static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageModalDisplayContentBuilder) => void): UAInAppMessageModalDisplayContent;

	static new(): UAInAppMessageModalDisplayContent; // inherited from NSObject

	readonly allowFullScreenDisplay: boolean;

	readonly backgroundColor: UIColor;

	readonly body: UAInAppMessageTextInfo;

	readonly borderRadiusPoints: number;

	readonly buttonLayout: UAInAppMessageButtonLayoutType;

	readonly buttons: NSArray<UAInAppMessageButtonInfo>;

	readonly contentLayout: UAInAppMessageModalContentLayoutType;

	readonly dismissButtonColor: UIColor;

	readonly footer: UAInAppMessageButtonInfo;

	readonly heading: UAInAppMessageTextInfo;

	readonly media: UAInAppMessageMediaInfo;

	extend(builderBlock: (p1: UAInAppMessageModalDisplayContentBuilder) => void): UAInAppMessageModalDisplayContent;
}

declare class UAInAppMessageModalDisplayContentBuilder extends NSObject {

	static alloc(): UAInAppMessageModalDisplayContentBuilder; // inherited from NSObject

	static new(): UAInAppMessageModalDisplayContentBuilder; // inherited from NSObject

	allowFullScreenDisplay: boolean;

	backgroundColor: UIColor;

	body: UAInAppMessageTextInfo;

	borderRadiusPoints: number;

	buttonLayout: UAInAppMessageButtonLayoutType;

	buttons: NSArray<UAInAppMessageButtonInfo>;

	contentLayout: UAInAppMessageModalContentLayoutType;

	dismissButtonColor: UIColor;

	footer: UAInAppMessageButtonInfo;

	heading: UAInAppMessageTextInfo;

	media: UAInAppMessageMediaInfo;

	isValid(): boolean;
}

declare var UAInAppMessageModalMaxButtons: number;

declare class UAInAppMessageModalStyle extends NSObject implements UAInAppMessageStyleProtocol {

	static alloc(): UAInAppMessageModalStyle; // inherited from NSObject

	static new(): UAInAppMessageModalStyle; // inherited from NSObject

	static style(): UAInAppMessageModalStyle;

	static styleWithContentsOfFile(path: string): UAInAppMessageModalStyle;

	additionalPadding: UAPadding;

	bodyStyle: UAInAppMessageTextStyle;

	buttonStyle: UAInAppMessageButtonStyle;

	dismissIconResource: string;

	headerStyle: UAInAppMessageTextStyle;

	maxHeight: number;

	maxWidth: number;

	mediaStyle: UAInAppMessageMediaStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

declare var UAInAppMessageNameLimit: number;

declare var UAInAppMessagePlacementKey: string;

interface UAInAppMessagePrepareAssetsDelegate extends NSObjectProtocol {

	onPrepareAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	onScheduleAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;
}
declare var UAInAppMessagePrepareAssetsDelegate: {

	prototype: UAInAppMessagePrepareAssetsDelegate;
};

declare const enum UAInAppMessagePrepareResult {

	Success = 0,

	Retry = 1,

	Cancel = 2,

	Invalidate = 3
}

declare class UAInAppMessageResolution extends NSObject {

	static alloc(): UAInAppMessageResolution; // inherited from NSObject

	static buttonClickResolutionWithButtonInfo(buttonInfo: UAInAppMessageButtonInfo): UAInAppMessageResolution;

	static messageClickResolution(): UAInAppMessageResolution;

	static new(): UAInAppMessageResolution; // inherited from NSObject

	static timedOutResolution(): UAInAppMessageResolution;

	static userDismissedResolution(): UAInAppMessageResolution;

	readonly buttonInfo: UAInAppMessageButtonInfo;

	readonly type: UAInAppMessageResolutionType;
}

declare const enum UAInAppMessageResolutionType {

	ButtonClick = 0,

	MessageClick = 1,

	UserDismissed = 2,

	TimedOut = 3
}

interface UAInAppMessageSceneDelegate extends NSObjectProtocol {

	sceneForMessageDefaultScene?(message: UAInAppMessage, defaultScene: UIWindowScene): UIWindowScene;
}
declare var UAInAppMessageSceneDelegate: {

	prototype: UAInAppMessageSceneDelegate;
};

declare class UAInAppMessageSceneManager extends NSObject {

	static alloc(): UAInAppMessageSceneManager; // inherited from NSObject

	static new(): UAInAppMessageSceneManager; // inherited from NSObject

	delegate: UAInAppMessageSceneDelegate;

	static readonly shared: UAInAppMessageSceneManager;

	sceneForMessage(message: UAInAppMessage): UIWindowScene;
}

declare class UAInAppMessageSchedule extends UASchedule {

	static alloc(): UAInAppMessageSchedule; // inherited from NSObject

	static new(): UAInAppMessageSchedule; // inherited from NSObject

	static scheduleWithMessageBuilderBlock(message: UAInAppMessage, builderBlock: (p1: UAScheduleBuilder) => void): UAInAppMessageSchedule;

	readonly message: UAInAppMessage;
}

interface UAInAppMessageStyleProtocol extends NSObjectProtocol {
}
declare var UAInAppMessageStyleProtocol: {

	prototype: UAInAppMessageStyleProtocol;

	style(): UAInAppMessageStyleProtocol;

	styleWithContentsOfFile(path: string): UAInAppMessageStyleProtocol;
};

declare class UAInAppMessageTextInfo extends NSObject {

	static alloc(): UAInAppMessageTextInfo; // inherited from NSObject

	static new(): UAInAppMessageTextInfo; // inherited from NSObject

	static textInfoWithBuilderBlock(builderBlock: (p1: UAInAppMessageTextInfoBuilder) => void): UAInAppMessageTextInfo;

	readonly alignment: UAInAppMessageTextInfoAlignmentType;

	readonly color: UIColor;

	readonly fontFamilies: NSArray<string>;

	readonly sizePoints: number;

	readonly style: UAInAppMessageTextInfoStyleType;

	readonly text: string;

	extend(builderBlock: (p1: UAInAppMessageTextInfoBuilder) => void): UAInAppMessageTextInfo;
}

declare const enum UAInAppMessageTextInfoAlignmentType {

	None = 0,

	Left = 1,

	Center = 2,

	Right = 3
}

declare class UAInAppMessageTextInfoBuilder extends NSObject {

	static alloc(): UAInAppMessageTextInfoBuilder; // inherited from NSObject

	static new(): UAInAppMessageTextInfoBuilder; // inherited from NSObject

	alignment: UAInAppMessageTextInfoAlignmentType;

	color: UIColor;

	fontFamilies: NSArray<string>;

	sizePoints: number;

	style: UAInAppMessageTextInfoStyleType;

	text: string;

	isValid(): boolean;
}

declare const enum UAInAppMessageTextInfoStyleType {

	Normal = 0,

	Bold = 1,

	Italic = 2,

	Underline = 4
}

declare class UAInAppMessageTextStyle extends NSObject {

	static alloc(): UAInAppMessageTextStyle; // inherited from NSObject

	static new(): UAInAppMessageTextStyle; // inherited from NSObject

	static styleWithAdditionalPaddingLetterSpacingLineSpacing(additionalPadding: UAPadding, letterSpacing: number, lineSpacing: number): UAInAppMessageTextStyle;

	static styleWithDictionary(textStyle: NSDictionary<any, any>): UAInAppMessageTextStyle;

	additionalPadding: UAPadding;

	letterSpacing: number;

	lineSpacing: number;
}

declare var UAInAppMessageURLKey: string;

interface UAInAppMessagingDelegate extends NSObjectProtocol {

	displayCoordinatorForMessage?(message: UAInAppMessage): UAInAppMessageDisplayCoordinator;

	extendMessage?(message: UAInAppMessage): UAInAppMessage;

	messageFinishedDisplayingScheduleIDResolution?(message: UAInAppMessage, scheduleID: string, resolution: UAInAppMessageResolution): void;

	messageWillBeDisplayedScheduleID?(message: UAInAppMessage, scheduleID: string): void;

	sceneForMessageDefaultScene?(message: UAInAppMessage, defaultScene: UIWindowScene): UIWindowScene;
}
declare var UAInAppMessagingDelegate: {

	prototype: UAInAppMessagingDelegate;
};

declare class UAInboxMessage extends NSObject {

	static alloc(): UAInboxMessage; // inherited from NSObject

	static new(): UAInboxMessage; // inherited from NSObject

	readonly contentType: string;

	readonly deleted: boolean;

	readonly extra: NSDictionary<any, any>;

	readonly messageBodyURL: NSURL;

	readonly messageExpiration: Date;

	readonly messageID: string;

	readonly messageList: UAInboxMessageList;

	readonly messageSent: Date;

	readonly messageURL: NSURL;

	readonly rawMessageObject: NSDictionary<any, any>;

	readonly title: string;

	readonly unread: boolean;

	isExpired(): boolean;

	markMessageReadWithCompletionHandler(completionHandler: (p1: UAInboxMessage) => void): UADisposable;
}

declare class UAInboxMessageList extends NSObject {

	static alloc(): UAInboxMessageList; // inherited from NSObject

	static new(): UAInboxMessageList; // inherited from NSObject

	readonly isBatchUpdating: boolean;

	readonly isRetrieving: boolean;

	readonly messages: NSArray<UAInboxMessage>;

	unreadCount: number;

	markMessagesDeletedCompletionHandler(messages: NSArray<any> | any[], completionHandler: () => void): UADisposable;

	markMessagesReadCompletionHandler(messages: NSArray<any> | any[], completionHandler: () => void): UADisposable;

	messageCount(): number;

	messageForBodyURL(url: NSURL): UAInboxMessage;

	messageForID(messageID: string): UAInboxMessage;

	messagesFilteredUsingPredicate(predicate: NSPredicate): NSArray<UAInboxMessage>;

	retrieveMessageListWithSuccessBlockWithFailureBlock(successBlock: () => void, failureBlock: () => void): UADisposable;
}

declare var UAInboxMessageListUpdatedNotification: string;

declare var UAInboxMessageListWillUpdateNotification: string;

declare class UAInboxUtils extends NSObject {

	static alloc(): UAInboxUtils; // inherited from NSObject

	static inboxMessageIDFromNotification(notification: NSDictionary<any, any>): string;

	static inboxMessageIDFromValue(values: any): string;

	static new(): UAInboxUtils; // inherited from NSObject

	static userAuthHeaderString(userData: UAUserData): string;
}

declare class UAInstallAttributionEvent extends NSObject implements UAEvent {

	static alloc(): UAInstallAttributionEvent; // inherited from NSObject

	static event(): UAInstallAttributionEvent;

	static eventWithAppPurchaseDateIAdImpressionDate(appPurchaseDate: Date, iAdImpressionDate: Date): UAInstallAttributionEvent;

	static new(): UAInstallAttributionEvent; // inherited from NSObject

	readonly data: NSDictionary<any, any>; // inherited from UAEvent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventType: string; // inherited from UAEvent

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly priority: UAEventPriority; // inherited from UAEvent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { appPurchaseDate: Date; iAdImpressionDate: Date; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAppPurchaseDateIAdImpressionDate(appPurchaseDate: Date, iAdImpressionDate: Date): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isValid(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UAInteractiveNotificationEvent extends NSObject implements UAEvent {

	static alloc(): UAInteractiveNotificationEvent; // inherited from NSObject

	static new(): UAInteractiveNotificationEvent; // inherited from NSObject

	readonly data: NSDictionary<any, any>; // inherited from UAEvent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventType: string; // inherited from UAEvent

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly priority: UAEventPriority; // inherited from UAEvent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { action: UNNotificationAction; category: string; notification: NSDictionary<any, any>; responseText: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithActionCategoryNotificationResponseText(action: UNNotificationAction, category: string, notification: NSDictionary<any, any>, responseText: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isValid(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UAJSONMatcher extends NSObject {

	static alloc(): UAJSONMatcher; // inherited from NSObject

	static new(): UAJSONMatcher; // inherited from NSObject

	constructor(o: { JSON: any; });

	constructor(o: { valueMatcher: UAJSONValueMatcher; });

	constructor(o: { valueMatcher: UAJSONValueMatcher; ignoreCase: boolean; });

	constructor(o: { valueMatcher: UAJSONValueMatcher; key: string; });

	constructor(o: { valueMatcher: UAJSONValueMatcher; key: string; scope: NSArray<string> | string[]; });

	constructor(o: { valueMatcher: UAJSONValueMatcher; scope: NSArray<string> | string[]; });

	constructor(o: { valueMatcher: UAJSONValueMatcher; scope: NSArray<string> | string[]; ignoreCase: boolean; });

	evaluateObject(value: any): boolean;

	evaluateObjectIgnoreCase(value: any, ignoreCase: boolean): boolean;

	initWithJSONError(json: any): this;

	initWithValueMatcher(valueMatcher: UAJSONValueMatcher): this;

	initWithValueMatcherIgnoreCase(valueMatcher: UAJSONValueMatcher, ignoreCase: boolean): this;

	initWithValueMatcherKey(valueMatcher: UAJSONValueMatcher, key: string): this;

	initWithValueMatcherKeyScope(valueMatcher: UAJSONValueMatcher, key: string, scope: NSArray<string> | string[]): this;

	initWithValueMatcherScope(valueMatcher: UAJSONValueMatcher, scope: NSArray<string> | string[]): this;

	initWithValueMatcherScopeIgnoreCase(valueMatcher: UAJSONValueMatcher, scope: NSArray<string> | string[], ignoreCase: boolean): this;

	isEqualToJSONMatcher(matcher: UAJSONMatcher): boolean;

	payload(): NSDictionary<string, any>;
}

declare class UAJSONPredicate extends NSObject {

	static alloc(): UAJSONPredicate; // inherited from NSObject

	static andPredicateWithSubpredicates(subpredicates: NSArray<UAJSONPredicate> | UAJSONPredicate[]): UAJSONPredicate;

	static new(): UAJSONPredicate; // inherited from NSObject

	static notPredicateWithSubpredicate(subpredicate: UAJSONPredicate): UAJSONPredicate;

	static orPredicateWithSubpredicates(subpredicates: NSArray<UAJSONPredicate> | UAJSONPredicate[]): UAJSONPredicate;

	constructor(o: { JSON: any; });

	constructor(o: { JSONMatcher: UAJSONMatcher; });

	evaluateObject(object: any): boolean;

	initWithJSONError(json: any): this;

	initWithJSONMatcher(matcher: UAJSONMatcher): this;

	payload(): NSDictionary<string, any>;
}

declare class UAJSONUtils extends NSObject {

	static alloc(): UAJSONUtils; // inherited from NSObject

	static dataWithObjectOptionsError(obj: any, options: NSJSONWritingOptions): NSData;

	static new(): UAJSONUtils; // inherited from NSObject

	static objectWithString(string: string): any;

	static objectWithStringOptionsError(string: string, options: NSJSONReadingOptions): any;

	static stringWithObject(obj: any): string;

	static stringWithObjectOptionsError(obj: any, options: NSJSONWritingOptions): string;
}

declare class UAJSONValueMatcher extends NSObject {

	static alloc(): UAJSONValueMatcher; // inherited from NSObject

	static matcherWhereBooleanEquals(boolean: boolean): UAJSONValueMatcher;

	static matcherWhereNumberAtLeast(number: number): UAJSONValueMatcher;

	static matcherWhereNumberAtLeastAtMost(lowerNumber: number, higherNumber: number): UAJSONValueMatcher;

	static matcherWhereNumberAtMost(number: number): UAJSONValueMatcher;

	static matcherWhereNumberEquals(number: number): UAJSONValueMatcher;

	static matcherWhereStringEquals(string: string): UAJSONValueMatcher;

	static matcherWhereValueIsPresent(present: boolean): UAJSONValueMatcher;

	static matcherWithArrayContainsPredicate(predicate: UAJSONPredicate): UAJSONValueMatcher;

	static matcherWithArrayContainsPredicateAtIndex(predicate: UAJSONPredicate, index: number): UAJSONValueMatcher;

	static matcherWithJSONError(json: any): UAJSONValueMatcher;

	static matcherWithVersionConstraint(versionConstraint: string): UAJSONValueMatcher;

	static new(): UAJSONValueMatcher; // inherited from NSObject

	evaluateObject(value: any): boolean;

	evaluateObjectIgnoreCase(value: any, ignoreCase: boolean): boolean;

	payload(): NSDictionary<string, any>;

	valueIsEqualToValueIgnoreCase(valueOne: any, valueTwo: any, ignoreCase: boolean): boolean;
}

declare class UAJavaScriptCommand extends NSObject {

	static alloc(): UAJavaScriptCommand; // inherited from NSObject

	static commandForURL(URL: NSURL): UAJavaScriptCommand;

	static new(): UAJavaScriptCommand; // inherited from NSObject

	readonly URL: NSURL;

	readonly arguments: NSArray<string>;

	readonly name: string;

	readonly options: NSDictionary<any, any>;

	constructor(o: { URL: NSURL; });

	initWithURL(URL: NSURL): this;
}

interface UAJavaScriptCommandDelegate extends NSObjectProtocol {

	performCommandWebView(command: UAJavaScriptCommand, webView: WKWebView): boolean;
}
declare var UAJavaScriptCommandDelegate: {

	prototype: UAJavaScriptCommandDelegate;
};

declare class UAJavaScriptEnvironment extends NSObject implements UAJavaScriptEnvironmentProtocol {

	static alloc(): UAJavaScriptEnvironment; // inherited from NSObject

	static new(): UAJavaScriptEnvironment; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addDictionaryGetterValue(methodName: string, value: NSDictionary<any, any>): void;

	addNumberGetterValue(methodName: string, value: number): void;

	addStringGetterValue(methodName: string, value: string): void;

	build(): string;

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

interface UAJavaScriptEnvironmentProtocol extends NSObjectProtocol {

	addDictionaryGetterValue(methodName: string, value: NSDictionary<any, any>): void;

	addNumberGetterValue(methodName: string, value: number): void;

	addStringGetterValue(methodName: string, value: string): void;

	build(): string;
}
declare var UAJavaScriptEnvironmentProtocol: {

	prototype: UAJavaScriptEnvironmentProtocol;
};

declare class UAKeychainUtils extends NSObject {

	static alloc(): UAKeychainUtils; // inherited from NSObject

	static createKeychainValueForUsernameWithPasswordForIdentifier(username: string, password: string, identifier: string): boolean;

	static deleteKeychainValue(identifier: string): void;

	static getDeviceID(): string;

	static getPassword(identifier: string): string;

	static getUsername(identifier: string): string;

	static new(): UAKeychainUtils; // inherited from NSObject

	static updateKeychainValueForUsernameWithPasswordForIdentifier(username: string, password: string, identifier: string): boolean;
}

declare class UALandingPageAction extends NSObject implements UAAction {

	static alloc(): UALandingPageAction; // inherited from NSObject

	static new(): UALandingPageAction; // inherited from NSObject

	borderRadiusPoints: number;

	builderExtender: UALandingPageBuilderExtender;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare var UALandingPageActionDefaultRegistryAlias: string;

declare var UALandingPageActionDefaultRegistryName: string;

declare var UALandingPageAspectLockKey: string;

interface UALandingPageBuilderExtender extends NSObjectProtocol {

	extendMessageBuilder?(builder: UAInAppMessageBuilder): void;

	extendScheduleBuilder?(builder: UAScheduleBuilder): void;
}
declare var UALandingPageBuilderExtender: {

	prototype: UALandingPageBuilderExtender;
};

declare var UALandingPageDefaultBorderRadiusPoints: number;

declare var UALandingPageHeightKey: string;

declare var UALandingPageURLKey: string;

declare var UALandingPageWidthKey: string;

declare class UALegacyInAppMessage extends NSObject {

	static alloc(): UALegacyInAppMessage; // inherited from NSObject

	static message(): UALegacyInAppMessage;

	static messageWithPayload(payload: NSDictionary<any, any>): UALegacyInAppMessage;

	static new(): UALegacyInAppMessage; // inherited from NSObject

	alert: string;

	buttonActions: NSDictionary<any, any>;

	readonly buttonCategory: UNNotificationCategory;

	buttonGroup: string;

	displayType: UALegacyInAppMessageDisplayType;

	duration: number;

	expiry: Date;

	extra: NSDictionary<any, any>;

	identifier: string;

	readonly notificationActions: NSArray<any>;

	onClick: NSDictionary<any, any>;

	readonly payload: NSDictionary<any, any>;

	position: UALegacyInAppMessagePosition;

	primaryColor: UIColor;

	secondaryColor: UIColor;

	isEqualToMessage(message: UALegacyInAppMessage): boolean;
}

interface UALegacyInAppMessageBuilderExtender extends NSObjectProtocol {

	extendMessageBuilderMessage?(builder: UAInAppMessageBuilder, message: UALegacyInAppMessage): void;

	extendScheduleBuilderMessage?(builder: UAScheduleBuilder, message: UALegacyInAppMessage): void;
}
declare var UALegacyInAppMessageBuilderExtender: {

	prototype: UALegacyInAppMessageBuilderExtender;
};

declare const enum UALegacyInAppMessageDisplayType {

	Banner = 0
}

interface UALegacyInAppMessageFactoryDelegate extends NSObjectProtocol {

	scheduleForMessage(message: UALegacyInAppMessage): UASchedule;
}
declare var UALegacyInAppMessageFactoryDelegate: {

	prototype: UALegacyInAppMessageFactoryDelegate;
};

declare const enum UALegacyInAppMessagePosition {

	Top = 0,

	Bottom = 1
}

declare class UALegacyInAppMessaging extends NSObject implements UAComponent, UALegacyInAppMessageFactoryDelegate {

	static alloc(): UALegacyInAppMessaging; // inherited from NSObject

	static new(): UALegacyInAppMessaging; // inherited from NSObject

	builderExtender: UALegacyInAppMessageBuilderExtender;

	displayASAPEnabled: boolean;

	factoryDelegate: UALegacyInAppMessageFactoryDelegate;

	static readonly shared: UALegacyInAppMessaging;

	componentEnabled: boolean; // inherited from UAComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	airshipReady(): void;

	applyRemoteConfig(config: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deepLink(deepLink: NSURL): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleForMessage(message: UALegacyInAppMessage): UASchedule;

	self(): this;
}

declare var UALineSpacingKey: string;

declare class UALocaleManager extends NSObject implements LocaleManagerProtocol {

	static alloc(): UALocaleManager; // inherited from NSObject

	static new(): UALocaleManager; // inherited from NSObject

	currentLocale: NSLocale;

	static readonly localeEventKey: string;

	static readonly localeUpdatedEvent: string;

	constructor(o: { dataStore: UAPreferenceDataStore; });

	constructor(o: { dataStore: UAPreferenceDataStore; notificationCenter: NSNotificationCenter; });

	clearLocale(): void;

	initWithDataStore(dataStore: UAPreferenceDataStore): this;

	initWithDataStoreNotificationCenter(dataStore: UAPreferenceDataStore, notificationCenter: NSNotificationCenter): this;
}

declare class UALocalizationUtils extends NSObject {

	static alloc(): UALocalizationUtils; // inherited from NSObject

	static localizedStringExistsInTableModuleBundle(string: string, table: string, moduleBundle: NSBundle): boolean;

	static localizedStringExistsInTableModuleBundleFallbackLocale(string: string, table: string, moduleBundle: NSBundle, fallbackLocale: string): boolean;

	static localizedStringWithTableModuleBundle(string: string, table: string, moduleBundle: NSBundle): string;

	static localizedStringWithTableModuleBundleDefaultValue(string: string, table: string, moduleBundle: NSBundle, defaultValue: string): string;

	static localizedStringWithTableModuleBundleFallbackLocale(string: string, table: string, moduleBundle: NSBundle, fallbackLocale: string): string;

	static new(): UALocalizationUtils; // inherited from NSObject
}

interface UALocationProvider extends NSObjectProtocol {

	backgroundLocationUpdatesAllowed: boolean;

	locationUpdatesEnabled: boolean;

	isLocationDeniedOrRestricted(): boolean;

	isLocationOptedIn(): boolean;
}
declare var UALocationProvider: {

	prototype: UALocationProvider;
};

declare const enum UALogLevel {

	Undefined = -1,

	None = 0,

	Error = 1,

	Warn = 2,

	Info = 3,

	Debug = 4,

	Trace = 5
}

declare class UAMediaEventTemplate extends NSObject {

	static alloc(): UAMediaEventTemplate; // inherited from NSObject

	static browsedTemplate(): UAMediaEventTemplate;

	static consumedTemplate(): UAMediaEventTemplate;

	static consumedTemplateWithValue(value: number): UAMediaEventTemplate;

	static consumedTemplateWithValueFromString(valueString: string): UAMediaEventTemplate;

	static new(): UAMediaEventTemplate; // inherited from NSObject

	static sharedTemplate(): UAMediaEventTemplate;

	static sharedTemplateWithSourceWithMedium(source: string, medium: string): UAMediaEventTemplate;

	static starredTemplate(): UAMediaEventTemplate;

	author: string;

	category: string;

	eventDescription: string;

	identifier: string;

	isFeature: boolean;

	publishedDate: string;

	type: string;

	createEvent(): UACustomEvent;
}

declare class UAMessageCenter extends NSObject implements UAComponent {

	static alloc(): UAMessageCenter; // inherited from NSObject

	static new(): UAMessageCenter; // inherited from NSObject

	readonly defaultUI: UADefaultMessageCenterUI;

	displayDelegate: UAMessageCenterDisplayDelegate;

	readonly messageList: UAInboxMessageList;

	readonly user: UAUser;

	static readonly shared: UAMessageCenter;

	componentEnabled: boolean; // inherited from UAComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	airshipReady(): void;

	applyRemoteConfig(config: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deepLink(deepLink: NSURL): boolean;

	dismiss(animated: boolean): void;

	display(animated: boolean): void;

	displayMessageForID(messageID: string): void;

	displayMessageForIDAnimated(messageID: string, animated: boolean): void;

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

declare class UAMessageCenterAction extends NSObject implements UAAction {

	static alloc(): UAMessageCenterAction; // inherited from NSObject

	static new(): UAMessageCenterAction; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAMessageCenterDateUtils extends NSObject {

	static alloc(): UAMessageCenterDateUtils; // inherited from NSObject

	static formattedDateRelativeToNow(date: Date): string;

	static new(): UAMessageCenterDateUtils; // inherited from NSObject
}

interface UAMessageCenterDisplayDelegate extends NSObjectProtocol {

	dismissMessageCenterAnimated(animated: boolean): void;

	displayMessageCenterAnimated(animated: boolean): void;

	displayMessageCenterForMessageIDAnimated(messageID: string, animated: boolean): void;
}
declare var UAMessageCenterDisplayDelegate: {

	prototype: UAMessageCenterDisplayDelegate;
};

declare class UAMessageCenterListCell extends UITableViewCell {

	static alloc(): UAMessageCenterListCell; // inherited from NSObject

	static appearance(): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UAMessageCenterListCell; // inherited from UIAppearance

	static new(): UAMessageCenterListCell; // inherited from NSObject

	date: UILabel;

	listIconView: UIImageView;

	messageCenterStyle: UAMessageCenterStyle;

	title: UILabel;

	unreadIndicator: UIView;

	setData(message: UAInboxMessage): void;
}

interface UAMessageCenterListViewDelegate extends NSObjectProtocol {

	didSelectMessageWithID(messageID: string): void;

	shouldClearSelectionOnViewWillAppear(): boolean;
}
declare var UAMessageCenterListViewDelegate: {

	prototype: UAMessageCenterListViewDelegate;
};

declare const enum UAMessageCenterMessageLoadErrorCode {

	ListUnavailable = 0,

	FailureStatus = 1,

	MessageExpired = 2
}

declare var UAMessageCenterMessageLoadErrorDomain: string;

declare var UAMessageCenterMessageLoadErrorHTTPStatusKey: string;

interface UAMessageCenterMessageViewDelegate extends NSObjectProtocol {

	messageClosed(messageID: string): void;

	messageLoadFailedError(messageID: string, error: NSError): void;

	messageLoadStarted(messageID: string): void;

	messageLoadSucceeded(messageID: string): void;
}
declare var UAMessageCenterMessageViewDelegate: {

	prototype: UAMessageCenterMessageViewDelegate;
};

declare class UAMessageCenterNativeBridgeExtension extends NSObject implements UANativeBridgeExtensionDelegate {

	static alloc(): UAMessageCenterNativeBridgeExtension; // inherited from NSObject

	static new(): UAMessageCenterNativeBridgeExtension; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionsMetadataForCommandWebView(command: UAJavaScriptCommand, webView: WKWebView): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	extendJavaScriptEnvironmentWebView(js: UAJavaScriptEnvironmentProtocol, webView: WKWebView): void;

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

declare class UAMessageCenterResources extends NSObject {

	static alloc(): UAMessageCenterResources; // inherited from NSObject

	static bundle(): NSBundle;

	static new(): UAMessageCenterResources; // inherited from NSObject
}

declare class UAMessageCenterSDKModule extends NSObject implements UASDKModule {

	static alloc(): UAMessageCenterSDKModule; // inherited from NSObject

	static loadWithDependencies(dependencies: NSDictionary<any, any>): UASDKModule;

	static new(): UAMessageCenterSDKModule; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionsPlist(): string;

	class(): typeof NSObject;

	components(): NSArray<UAComponent>;

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

declare class UAMessageCenterStyle extends NSObject {

	static alloc(): UAMessageCenterStyle; // inherited from NSObject

	static new(): UAMessageCenterStyle; // inherited from NSObject

	static style(): UAMessageCenterStyle;

	static styleWithContentsOfFile(path: string): UAMessageCenterStyle;

	cancelButtonTitleColor: UIColor;

	cellColor: UIColor;

	cellDateColor: UIColor;

	cellDateFont: UIFont;

	cellDateHighlightedColor: UIColor;

	cellHighlightedColor: UIColor;

	cellSeparatorColor: UIColor;

	cellSeparatorInset: UIEdgeInsets;

	cellSeparatorStyle: UITableViewCellSeparatorStyle;

	cellTintColor: UIColor;

	cellTitleColor: UIColor;

	cellTitleFont: UIFont;

	cellTitleHighlightedColor: UIColor;

	deleteButtonTitleColor: UIColor;

	editButtonTitleColor: UIColor;

	iconsEnabled: boolean;

	listColor: UIColor;

	markAsReadButtonTitleColor: UIColor;

	navigationBarColor: UIColor;

	navigationBarOpaque: boolean;

	navigationBarStyle: UANavigationBarStyle;

	placeholderIcon: UIImage;

	refreshTintColor: UIColor;

	selectAllButtonTitleColor: UIColor;

	tintColor: UIColor;

	titleColor: UIColor;

	titleFont: UIFont;

	unreadIndicatorColor: UIColor;
}

declare var UAMessageDataScheme: string;

declare var UAModalAdditionalPaddingKey: string;

declare var UAModalBodyStyleKey: string;

declare var UAModalButtonStyleKey: string;

declare var UAModalDismissIconResourceKey: string;

declare var UAModalHeaderStyleKey: string;

declare var UAModalMaxHeightKey: string;

declare var UAModalMaxWidthKey: string;

declare var UAModalMediaStyleKey: string;

declare var UAModalStyleFileName: string;

declare var UAModalTextStyleKey: string;

declare class UAModifyAttributesAction extends NSObject implements UAAction {

	static alloc(): UAModifyAttributesAction; // inherited from NSObject

	static new(): UAModifyAttributesAction; // inherited from NSObject

	static readonly name: string;

	static readonly shortName: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: () => UAChannelProtocol; contact: () => UAContactProtocol; });

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	initWithChannelContact(channel: () => UAChannelProtocol, contact: () => UAContactProtocol): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAModifyTagsAction extends NSObject implements UAAction {

	static alloc(): UAModifyTagsAction; // inherited from NSObject

	static new(): UAModifyTagsAction; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { channel: () => UAChannelProtocol; contact: () => UAContactProtocol; });

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	initWithChannelContact(channel: () => UAChannelProtocol, contact: () => UAContactProtocol): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAModuleLoader extends NSObject {

	static alloc(): UAModuleLoader; // inherited from NSObject

	static new(): UAModuleLoader; // inherited from NSObject

	readonly actionPlists: NSArray<string>;

	readonly components: NSArray<UAComponent>;

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannel; contact: UAContact; push: UAPush; remoteData: UARemoteDataManager; analytics: UAAnalytics; privacyManager: UAPrivacyManager; });

	initWithConfigDataStoreChannelContactPushRemoteDataAnalyticsPrivacyManager(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannel, contact: UAContact, push: UAPush, remoteData: UARemoteDataManager, analytics: UAAnalytics, privacyManager: UAPrivacyManager): this;
}

declare class UANSArrayValueTransformer extends NSValueTransformer {

	static alloc(): UANSArrayValueTransformer; // inherited from NSObject

	static new(): UANSArrayValueTransformer; // inherited from NSObject
}

declare class UANSDictionaryValueTransformer extends NSValueTransformer {

	static alloc(): UANSDictionaryValueTransformer; // inherited from NSObject

	static new(): UANSDictionaryValueTransformer; // inherited from NSObject
}

declare class UANSURLValueTransformer extends NSValueTransformer {

	static alloc(): UANSURLValueTransformer; // inherited from NSObject

	static new(): UANSURLValueTransformer; // inherited from NSObject
}

declare class UANamedUser extends NSObject implements UAComponent {

	static alloc(): UANamedUser; // inherited from NSObject

	static new(): UANamedUser; // inherited from NSObject

	identifier: string;

	static readonly shared: UANamedUser;

	componentEnabled: boolean; // inherited from UAComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dataStore: UAPreferenceDataStore; contact: UAContactProtocol; });

	addTagsGroup(tags: NSArray<string> | string[], group: string): void;

	airshipReady(): void;

	applyAttributeMutations(mutations: UAAttributeMutations): void;

	applyRemoteConfig(config: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deepLink(deepLink: NSURL): boolean;

	forceUpdate(): void;

	initWithDataStoreContact(dataStore: UAPreferenceDataStore, contact: UAContactProtocol): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeTagsGroup(tags: NSArray<string> | string[], group: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setTagsGroup(tags: NSArray<string> | string[], group: string): void;

	updateTags(): void;
}

declare class UANativeBridge extends NSObject implements WKNavigationDelegate {

	static alloc(): UANativeBridge; // inherited from NSObject

	static new(): UANativeBridge; // inherited from NSObject

	forwardNavigationDelegate: UANavigationDelegate;

	javaScriptCommandDelegate: UAJavaScriptCommandDelegate;

	nativeBridgeDelegate: UANativeBridgeDelegate;

	nativeBridgeExtensionDelegate: UANativeBridgeExtensionDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { actionHandler: UANativeBridgeActionHandlerProtocol; javaScriptEnvironmentFactoryBlock: () => UAJavaScriptEnvironmentProtocol; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithActionHandlerJavaScriptEnvironmentFactoryBlock(actionHandler: UANativeBridgeActionHandlerProtocol, javaScriptEnvironmentFactoryBlock: () => UAJavaScriptEnvironmentProtocol): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	webViewAuthenticationChallengeShouldAllowDeprecatedTLS(webView: WKWebView, challenge: NSURLAuthenticationChallenge, decisionHandler: (p1: boolean) => void): void;

	webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationActionPreferencesDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewNavigationActionDidBecomeDownload(webView: WKWebView, navigationAction: WKNavigationAction, download: WKDownload): void;

	webViewNavigationResponseDidBecomeDownload(webView: WKWebView, navigationResponse: WKNavigationResponse, download: WKDownload): void;

	webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

interface UANativeBridgeActionHandlerProtocol {

	runActionsForCommandMetadataCompletionHandler(command: UAJavaScriptCommand, metadata: NSDictionary<any, any>, completionHandler: (p1: string) => void): void;
}
declare var UANativeBridgeActionHandlerProtocol: {

	prototype: UANativeBridgeActionHandlerProtocol;
};

interface UANativeBridgeDelegate {

	close(): void;
}
declare var UANativeBridgeDelegate: {

	prototype: UANativeBridgeDelegate;
};

interface UANativeBridgeExtensionDelegate extends NSObjectProtocol {

	actionsMetadataForCommandWebView?(command: UAJavaScriptCommand, webView: WKWebView): NSDictionary<any, any>;

	extendJavaScriptEnvironmentWebView?(js: UAJavaScriptEnvironmentProtocol, webView: WKWebView): void;
}
declare var UANativeBridgeExtensionDelegate: {

	prototype: UANativeBridgeExtensionDelegate;
};

declare const enum UANavigationBarStyle {

	Default = 0,

	Black = 1
}

declare var UANavigationBarStyleBlackKey: string;

declare var UANavigationBarStyleDefaultKey: string;

interface UANavigationDelegate extends WKNavigationDelegate {

	closeWindow?(animated: boolean): void;
}
declare var UANavigationDelegate: {

	prototype: UANavigationDelegate;
};

declare class UANetworkMonitor extends NSObject {

	static alloc(): UANetworkMonitor; // inherited from NSObject

	static new(): UANetworkMonitor; // inherited from NSObject

	connectionUpdates: (p1: boolean) => void;

	readonly isConnected: boolean;
}

declare class UANotificationCategories extends NSObject {

	static alloc(): UANotificationCategories; // inherited from NSObject

	static createCategoriesFromFile(path: string): NSSet<UNNotificationCategory>;

	static createCategoryActions(categoryId: string, actionDefinitions: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[]): UNNotificationCategory;

	static createCategoryActionsHiddenPreviewsBodyPlaceholder(categoryId: string, actionDefinitions: NSArray<NSDictionary<any, any>> | NSDictionary<any, any>[], hiddenPreviewsBodyPlaceholder: string): UNNotificationCategory;

	static defaultCategories(): NSSet<UNNotificationCategory>;

	static defaultCategoriesWithRequireAuth(requireAuth: boolean): NSSet<UNNotificationCategory>;

	static new(): UANotificationCategories; // inherited from NSObject
}

declare const enum UANotificationOptions {

	None = 0,

	Badge = 1,

	Sound = 2,

	Alert = 4,

	CarPlay = 8,

	CriticalAlert = 16,

	ProvidesAppNotificationSettings = 32,

	Provisional = 64,

	Announcement = 128
}

declare class UAOpenExternalURLAction extends NSObject implements UAAction {

	static alloc(): UAOpenExternalURLAction; // inherited from NSObject

	static new(): UAOpenExternalURLAction; // inherited from NSObject

	static readonly name: string;

	static readonly shortName: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAPadding extends NSObject {

	static alloc(): UAPadding; // inherited from NSObject

	static new(): UAPadding; // inherited from NSObject

	static paddingWithDictionary(paddingDict: NSDictionary<any, any>): UAPadding;

	static paddingWithTopBottomLeadingTrailing(top: number, bottom: number, leading: number, trailing: number): UAPadding;

	bottom: number;

	leading: number;

	top: number;

	trailing: number;

	constructor(o: { top: number; bottom: number; leading: number; trailing: number; });

	initWithTopBottomLeadingTrailing(top: number, bottom: number, leading: number, trailing: number): this;
}

declare class UAPasteboardAction extends NSObject implements UAAction {

	static alloc(): UAPasteboardAction; // inherited from NSObject

	static new(): UAPasteboardAction; // inherited from NSObject

	static readonly name: string;

	static readonly shortname: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAPreferenceDataStore extends NSObject {

	static alloc(): UAPreferenceDataStore; // inherited from NSObject

	static new(): UAPreferenceDataStore; // inherited from NSObject

	constructor(o: { keyPrefix: string; });

	arrayForKey(key: string): NSArray<NSObject>;

	boolForKey(key: string): boolean;

	boolForKeyDefaultValue(key: string, defaultValue: boolean): boolean;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	doubleForKey(key: string): number;

	doubleForKeyDefaultValue(key: string, defaultValue: number): number;

	floatForKey(key: string): number;

	initWithKeyPrefix(keyPrefix: string): this;

	integerForKey(key: string): number;

	keyExists(key: string): boolean;

	objectForKey(key: string): any;

	removeObjectForKey(key: string): void;

	setBoolForKey(bool_: boolean, key: string): void;

	setDoubleForKey(double_: number, key: string): void;

	setFloatForKey(float_: number, key: string): void;

	setIntegerForKey(int_: number, key: string): void;

	setObjectForKey(object: any, key: string): void;

	setURLForKey(url: NSURL, key: string): void;

	stringArrayForKey(key: string): NSArray<NSObject>;

	stringForKey(key: string): string;

	urlForKey(key: string): NSURL;
}

declare class UAPrivacyManager extends NSObject {

	static alloc(): UAPrivacyManager; // inherited from NSObject

	static new(): UAPrivacyManager; // inherited from NSObject

	enabledFeatures: UAFeatures;

	static readonly changeEvent: string;

	constructor(o: { dataStore: UAPreferenceDataStore; defaultEnabledFeatures: UAFeatures; });

	constructor(o: { dataStore: UAPreferenceDataStore; defaultEnabledFeatures: UAFeatures; notificationCenter: NSNotificationCenter; });

	disableFeatures(features: UAFeatures): void;

	enableFeatures(features: UAFeatures): void;

	initWithDataStoreDefaultEnabledFeatures(dataStore: UAPreferenceDataStore, defaultEnabledFeatures: UAFeatures): this;

	initWithDataStoreDefaultEnabledFeaturesNotificationCenter(dataStore: UAPreferenceDataStore, defaultEnabledFeatures: UAFeatures, notificationCenter: NSNotificationCenter): this;

	isAnyFeatureEnabled(): boolean;

	isEnabled(feature: UAFeatures): boolean;
}

declare class UAProximityRegion extends NSObject {

	static alloc(): UAProximityRegion; // inherited from NSObject

	static new(): UAProximityRegion; // inherited from NSObject

	static proximityRegionWithIDMajorMinor(proximityID: string, major: number, minor: number): UAProximityRegion;

	static proximityRegionWithIDMajorMinorLatitudeLongitude(proximityID: string, major: number, minor: number, latitude: number, longitude: number): UAProximityRegion;

	static proximityRegionWithIDMajorMinorRssi(proximityID: string, major: number, minor: number, rssi: number): UAProximityRegion;

	static proximityRegionWithIDMajorMinorRssiLatitudeLongitude(proximityID: string, major: number, minor: number, rssi: number, latitude: number, longitude: number): UAProximityRegion;
}

declare class UAPush extends NSObject implements UAComponent, UAPushProtocol {

	static alloc(): UAPush; // inherited from NSObject

	static new(): UAPush; // inherited from NSObject

	autobadgeEnabled: boolean;

	readonly isPushNotificationsOptedIn: boolean;

	readonly quietTime: NSDictionary<any, any>;

	quietTimeEnabled: boolean;

	timeZone: NSTimeZone;

	static readonly legacyTagsSettingsKey: string;

	static readonly quietTimeEndKey: string;

	static readonly quietTimeStartKey: string;

	static readonly receivedBackgroundNotificationEvent: string;

	static readonly receivedForegroundNotificationEvent: string;

	static readonly receivedNotificationResponseEvent: string;

	static readonly receivedNotificationResponseEventResponseKey: string;

	static readonly shared: UAPush;

	static readonly tagsMigratedToChannelTagsKey: string;

	accengageCategories: NSSet<UNNotificationCategory>; // inherited from UAPushProtocol

	readonly authorizationStatus: UAAuthorizationStatus; // inherited from UAPushProtocol

	readonly authorizedNotificationSettings: UAAuthorizedNotificationSettings; // inherited from UAPushProtocol

	backgroundPushNotificationsEnabled: boolean; // inherited from UAPushProtocol

	badgeNumber: number; // inherited from UAPushProtocol

	readonly combinedCategories: NSSet<UNNotificationCategory>; // inherited from UAPushProtocol

	componentEnabled: boolean; // inherited from UAComponent

	customCategories: NSSet<UNNotificationCategory>; // inherited from UAPushProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	defaultPresentationOptions: UNNotificationPresentationOptions; // inherited from UAPushProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly deviceToken: string; // inherited from UAPushProtocol

	extendedPushNotificationPermissionEnabled: boolean; // inherited from UAPushProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly launchNotificationResponse: UNNotificationResponse; // inherited from UAPushProtocol

	notificationOptions: UANotificationOptions; // inherited from UAPushProtocol

	pushNotificationDelegate: UAPushNotificationDelegate; // inherited from UAPushProtocol

	registrationDelegate: UARegistrationDelegate; // inherited from UAPushProtocol

	requireAuthorizationForDefaultCategories: boolean; // inherited from UAPushProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly userPromptedForNotifications: boolean; // inherited from UAPushProtocol

	userPushNotificationsEnabled: boolean; // inherited from UAPushProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannelProtocol; analytics: UAAnalyticsProtocol; appStateTracker: UAAppStateTracker; notificationCenter: NSNotificationCenter; pushRegistration: UAAPNSRegistrationProtocol; application: UIApplication; dispatcher: UADispatcher; privacyManager: UAPrivacyManager; });

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; channel: UAChannelProtocol; analytics: UAAnalyticsProtocol; privacyManager: UAPrivacyManager; });

	airshipReady(): void;

	applyRemoteConfig(config: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deepLink(deepLink: NSURL): boolean;

	enableUserPushNotifications(completionHandler: (p1: boolean) => void): void;

	initWithConfigDataStoreChannelAnalyticsAppStateTrackerNotificationCenterPushRegistrationApplicationDispatcherPrivacyManager(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannelProtocol, analytics: UAAnalyticsProtocol, appStateTracker: UAAppStateTracker, notificationCenter: NSNotificationCenter, pushRegistration: UAAPNSRegistrationProtocol, application: UIApplication, dispatcher: UADispatcher, privacyManager: UAPrivacyManager): this;

	initWithConfigDataStoreChannelAnalyticsPrivacyManager(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, channel: UAChannelProtocol, analytics: UAAnalyticsProtocol, privacyManager: UAPrivacyManager): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	migratePushTagsToChannelTags(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetBadge(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setQuietTimeStartHourStartMinuteEndHourEndMinute(startHour: number, startMinute: number, endHour: number, endMinute: number): void;

	updateRegistration(): void;
}

interface UAPushNotificationDelegate extends NSObjectProtocol {

	extendPresentationOptionsNotification?(options: UNNotificationPresentationOptions, notification: UNNotification): UNNotificationPresentationOptions;

	receivedBackgroundNotificationCompletionHandler?(userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	receivedForegroundNotificationCompletionHandler?(userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	receivedNotificationResponseCompletionHandler?(notificationResponse: UNNotificationResponse, completionHandler: () => void): void;
}
declare var UAPushNotificationDelegate: {

	prototype: UAPushNotificationDelegate;
};

interface UAPushProtocol {

	accengageCategories: NSSet<UNNotificationCategory>;

	authorizationStatus: UAAuthorizationStatus;

	authorizedNotificationSettings: UAAuthorizedNotificationSettings;

	backgroundPushNotificationsEnabled: boolean;

	badgeNumber: number;

	combinedCategories: NSSet<UNNotificationCategory>;

	customCategories: NSSet<UNNotificationCategory>;

	defaultPresentationOptions: UNNotificationPresentationOptions;

	deviceToken: string;

	extendedPushNotificationPermissionEnabled: boolean;

	launchNotificationResponse: UNNotificationResponse;

	notificationOptions: UANotificationOptions;

	pushNotificationDelegate: UAPushNotificationDelegate;

	registrationDelegate: UARegistrationDelegate;

	requireAuthorizationForDefaultCategories: boolean;

	userPromptedForNotifications: boolean;

	userPushNotificationsEnabled: boolean;
}
declare var UAPushProtocol: {

	prototype: UAPushProtocol;
};

interface UAPushableComponent {

	presentationOptionsForNotificationDefaultPresentationOptions?(notification: UNNotification, options: UNNotificationPresentationOptions): UNNotificationPresentationOptions;

	receivedNotificationResponseCompletionHandler?(response: UNNotificationResponse, completionHandler: () => void): void;

	receivedRemoteNotificationCompletionHandler?(notification: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;
}
declare var UAPushableComponent: {

	prototype: UAPushableComponent;
};

declare class UAQuietTime extends NSObject {

	static alloc(): UAQuietTime; // inherited from NSObject

	static new(): UAQuietTime; // inherited from NSObject

	readonly end: string;

	readonly start: string;

	constructor(o: { start: string; end: string; });

	initWithStartEnd(start: string, end: string): this;
}

declare class UARateAppAction extends NSObject implements UAAction {

	static alloc(): UARateAppAction; // inherited from NSObject

	static new(): UARateAppAction; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare var UARateAppActionDefaultRegistryAlias: string;

declare var UARateAppActionDefaultRegistryName: string;

declare var UARateAppItunesIDKey: string;

declare var UARateAppShowLinkPromptKey: string;

declare class UARegionEvent extends NSObject implements UAEvent {

	static alloc(): UARegionEvent; // inherited from NSObject

	static new(): UARegionEvent; // inherited from NSObject

	static regionEventWithRegionIDSourceBoundaryEvent(regionID: string, source: string, boundaryEvent: UABoundaryEvent): UARegionEvent;

	static regionEventWithRegionIDSourceBoundaryEventCircularRegionProximityRegion(regionID: string, source: string, boundaryEvent: UABoundaryEvent, circularRegion: UACircularRegion, proximityRegion: UAProximityRegion): UARegionEvent;

	readonly boundaryEvent: UABoundaryEvent;

	readonly circularRegion: UACircularRegion;

	readonly payload: NSDictionary<any, any>;

	readonly proximityRegion: UAProximityRegion;

	readonly regionID: string;

	readonly source: string;

	static readonly regionIDKey: string;

	readonly data: NSDictionary<any, any>; // inherited from UAEvent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly eventType: string; // inherited from UAEvent

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly priority: UAEventPriority; // inherited from UAEvent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isValid(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface UARegistrationDelegate extends NSObjectProtocol {

	apnsRegistrationFailedWithError?(error: NSError): void;

	apnsRegistrationSucceededWithDeviceToken?(deviceToken: NSData): void;

	notificationAuthorizedSettingsDidChange?(authorizedSettings: UAAuthorizedNotificationSettings): void;

	notificationRegistrationFinishedWithAuthorizedSettingsCategoriesStatus?(authorizedSettings: UAAuthorizedNotificationSettings, categories: NSSet<UNNotificationCategory>, status: UAAuthorizationStatus): void;

	notificationRegistrationFinishedWithAuthorizedSettingsStatus?(authorizedSettings: UAAuthorizedNotificationSettings, status: UAAuthorizationStatus): void;
}
declare var UARegistrationDelegate: {

	prototype: UARegistrationDelegate;
};

declare class UARemoteConfigManager extends NSObject {

	static alloc(): UARemoteConfigManager; // inherited from NSObject

	static new(): UARemoteConfigManager; // inherited from NSObject

	static readonly remoteConfigKey: string;

	static readonly remoteConfigUpdatedEvent: string;

	constructor(o: { remoteDataManager: UARemoteDataProvider; privacyManager: UAPrivacyManager; });

	initWithRemoteDataManagerPrivacyManager(remoteDataManager: UARemoteDataProvider, privacyManager: UAPrivacyManager): this;
}

declare class UARemoteDataAPIClient extends NSObject implements UARemoteDataAPIClientProtcol {

	static alloc(): UARemoteDataAPIClient; // inherited from NSObject

	static new(): UARemoteDataAPIClient; // inherited from NSObject

	constructor(o: { config: UARuntimeConfig; });

	constructor(o: { config: UARuntimeConfig; session: UARequestSession; });

	fetchRemoteDataWithLocaleLastModifiedCompletionHandler(locale: NSLocale, lastModified: string, completionHandler: (p1: UARemoteDataResponse, p2: NSError) => void): UADisposable;

	initWithConfig(config: UARuntimeConfig): this;

	initWithConfigSession(config: UARuntimeConfig, session: UARequestSession): this;

	metadataWithLocale(locale: NSLocale): NSDictionary<any, any>;
}

interface UARemoteDataAPIClientProtcol {

	fetchRemoteDataWithLocaleLastModifiedCompletionHandler(locale: NSLocale, lastModified: string, completionHandler: (p1: UARemoteDataResponse, p2: NSError) => void): UADisposable;

	metadataWithLocale(locale: NSLocale): NSDictionary<any, any>;
}
declare var UARemoteDataAPIClientProtcol: {

	prototype: UARemoteDataAPIClientProtcol;
};

declare class UARemoteDataManager extends NSObject implements UAComponent, UAPushableComponent, UARemoteDataProvider {

	static alloc(): UARemoteDataManager; // inherited from NSObject

	static new(): UARemoteDataManager; // inherited from NSObject

	componentEnabled: boolean; // inherited from UAComponent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	remoteDataRefreshInterval: number; // inherited from UARemoteDataProvider

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { config: UARuntimeConfig; dataStore: UAPreferenceDataStore; localeManager: LocaleManagerProtocol; privacyManager: UAPrivacyManager; });

	constructor(o: { dataStore: UAPreferenceDataStore; localeManager: LocaleManagerProtocol; privacyManager: UAPrivacyManager; apiClient: UARemoteDataAPIClientProtcol; remoteDataStore: UARemoteDataStore; taskManager: TaskManagerProtocol; dispatcher: UADispatcher; date: UADate; notificationCenter: NSNotificationCenter; appStateTracker: UAAppStateTracker; });

	airshipReady(): void;

	applyRemoteConfig(config: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	deepLink(deepLink: NSURL): boolean;

	initWithConfigDataStoreLocaleManagerPrivacyManager(config: UARuntimeConfig, dataStore: UAPreferenceDataStore, localeManager: LocaleManagerProtocol, privacyManager: UAPrivacyManager): this;

	initWithDataStoreLocaleManagerPrivacyManagerApiClientRemoteDataStoreTaskManagerDispatcherDateNotificationCenterAppStateTracker(dataStore: UAPreferenceDataStore, localeManager: LocaleManagerProtocol, privacyManager: UAPrivacyManager, apiClient: UARemoteDataAPIClientProtcol, remoteDataStore: UARemoteDataStore, taskManager: TaskManagerProtocol, dispatcher: UADispatcher, date: UADate, notificationCenter: NSNotificationCenter, appStateTracker: UAAppStateTracker): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isMetadataCurrent(metadata: NSDictionary<any, any>): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentationOptionsForNotificationDefaultPresentationOptions(notification: UNNotification, options: UNNotificationPresentationOptions): UNNotificationPresentationOptions;

	receivedNotificationResponseCompletionHandler(response: UNNotificationResponse, completionHandler: () => void): void;

	receivedRemoteNotificationCompletionHandler(notification: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	subscribeWithTypesBlock(types: NSArray<string> | string[], block: (p1: NSArray<UARemoteDataPayload>) => void): UADisposable;
}

declare class UARemoteDataPayload extends NSObject {

	static alloc(): UARemoteDataPayload; // inherited from NSObject

	static new(): UARemoteDataPayload; // inherited from NSObject

	readonly data: NSDictionary<any, any>;

	readonly metadata: NSDictionary<any, any>;

	readonly timestamp: Date;

	readonly type: string;

	constructor(o: { type: string; timestamp: Date; data: NSDictionary<any, any>; metadata: NSDictionary<any, any>; });

	initWithTypeTimestampDataMetadata(type: string, timestamp: Date, data: NSDictionary<any, any>, metadata: NSDictionary<any, any>): this;
}

interface UARemoteDataProvider {

	remoteDataRefreshInterval: number;

	isMetadataCurrent(metadata: NSDictionary<any, any>): boolean;

	subscribeWithTypesBlock(types: NSArray<string> | string[], block: (p1: NSArray<UARemoteDataPayload>) => void): UADisposable;
}
declare var UARemoteDataProvider: {

	prototype: UARemoteDataProvider;
};

declare class UARemoteDataResponse extends UAHTTPResponse {

	static alloc(): UARemoteDataResponse; // inherited from NSObject

	static new(): UARemoteDataResponse; // inherited from NSObject

	readonly lastModified: string;

	readonly metadata: NSDictionary<any, any>;

	readonly payloads: NSArray<UARemoteDataPayload>;

	constructor(o: { status: number; metadata: NSDictionary<any, any>; payloads: NSArray<UARemoteDataPayload> | UARemoteDataPayload[]; lastModified: string; });

	initWithStatusMetadataPayloadsLastModified(status: number, metadata: NSDictionary<any, any>, payloads: NSArray<UARemoteDataPayload> | UARemoteDataPayload[], lastModified: string): this;
}

declare class UARemoteDataStore extends NSObject {

	static alloc(): UARemoteDataStore; // inherited from NSObject

	static new(): UARemoteDataStore; // inherited from NSObject

	constructor(o: { storeName: string; });

	constructor(o: { storeName: string; inMemory: boolean; });

	fetchRemoteDataFromCacheWithPredicateCompletionHandler(predicate: NSPredicate, completionHandler: (p1: NSArray<UARemoteDataPayload>) => void): void;

	initWithStoreName(storeName: string): this;

	initWithStoreNameInMemory(storeName: string, inMemory: boolean): this;

	overwriteCachedRemoteDataCompletionHandler(payloads: NSArray<UARemoteDataPayload> | UARemoteDataPayload[], completionHandler: (p1: boolean) => void): void;

	shutDown(): void;
}

declare class UARemoveTagsAction extends UAModifyTagsAction {

	static alloc(): UARemoveTagsAction; // inherited from NSObject

	static new(): UARemoveTagsAction; // inherited from NSObject

	static readonly name: string;

	static readonly shortName: string;
}

declare class UARequest extends NSObject {

	static alloc(): UARequest; // inherited from NSObject

	static new(): UARequest; // inherited from NSObject

	static requestWithBuilderBlock(block: (p1: UARequestBuilder) => void): UARequest;

	readonly body: NSData;

	readonly headers: NSDictionary<string, string>;

	readonly method: string;

	readonly url: NSURL;

	constructor(o: { builderBlock: (p1: UARequestBuilder) => void; });

	initWithBuilderBlock(builderBlock: (p1: UARequestBuilder) => void): this;
}

declare class UARequestBuilder extends NSObject {

	static alloc(): UARequestBuilder; // inherited from NSObject

	static new(): UARequestBuilder; // inherited from NSObject

	body: NSData;

	compressBody: boolean;

	method: string;

	password: string;

	url: NSURL;

	username: string;

	addHeaders(headers: NSDictionary<string, string>): void;

	setValueHeader(value: string, header: string): void;
}

declare class UARequestSession extends NSObject {

	static alloc(): UARequestSession; // inherited from NSObject

	static new(): UARequestSession; // inherited from NSObject

	constructor(o: { config: UARuntimeConfig; });

	constructor(o: { config: UARuntimeConfig; session: NSURLSession; });

	initWithConfig(config: UARuntimeConfig): this;

	initWithConfigSession(config: UARuntimeConfig, session: NSURLSession): this;

	performHTTPRequestCompletionHandler(request: UARequest, completionHandler: (p1: NSData, p2: NSHTTPURLResponse, p3: NSError) => void): UADisposable;

	setValueHeader(value: string, header: string): void;
}

declare class UARetailEventTemplate extends NSObject {

	static addedToCartTemplate(): UARetailEventTemplate;

	static addedToCartTemplateWithValue(value: number): UARetailEventTemplate;

	static addedToCartTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

	static alloc(): UARetailEventTemplate; // inherited from NSObject

	static browsedTemplate(): UARetailEventTemplate;

	static browsedTemplateWithValue(value: number): UARetailEventTemplate;

	static browsedTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

	static new(): UARetailEventTemplate; // inherited from NSObject

	static purchasedTemplate(): UARetailEventTemplate;

	static purchasedTemplateWithValue(value: number): UARetailEventTemplate;

	static purchasedTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

	static sharedProductTemplate(): UARetailEventTemplate;

	static sharedProductTemplateWithSourceWithMedium(source: string, medium: string): UARetailEventTemplate;

	static sharedProductTemplateWithValue(value: number): UARetailEventTemplate;

	static sharedProductTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

	static sharedProductTemplateWithValueFromStringWithSourceWithMedium(valueString: string, source: string, medium: string): UARetailEventTemplate;

	static sharedProductTemplateWithValueWithSourceWithMedium(value: number, source: string, medium: string): UARetailEventTemplate;

	static starredProductTemplate(): UARetailEventTemplate;

	static starredProductTemplateWithValue(value: number): UARetailEventTemplate;

	static starredProductTemplateWithValueFromString(valueString: string): UARetailEventTemplate;

	static wishlistTemplate(): UARetailEventTemplate;

	static wishlistTemplateWithNameWishlistID(name: string, wishlistID: string): UARetailEventTemplate;

	brand: string;

	category: string;

	eventDescription: string;

	eventValue: number;

	identifier: string;

	isNewItem: boolean;

	transactionID: string;

	createEvent(): UACustomEvent;
}

declare class UARuntimeConfig extends NSObject {

	static alloc(): UARuntimeConfig; // inherited from NSObject

	static new(): UARuntimeConfig; // inherited from NSObject

	readonly URLAllowList: NSArray<string>;

	readonly URLAllowListScopeJavaScriptInterface: NSArray<string>;

	readonly URLAllowListScopeOpenURL: NSArray<string>;

	readonly analyticsURL: string;

	readonly appKey: string;

	readonly appSecret: string;

	readonly chatURL: string;

	readonly chatWebSocketURL: string;

	readonly clearNamedUserOnAppRestore: boolean;

	readonly clearUserOnAppRestore: boolean;

	readonly customConfig: NSDictionary<any, any>;

	readonly deviceAPIURL: string;

	readonly enabledFeatures: UAFeatures;

	readonly inProduction: boolean;

	readonly isAnalyticsEnabled: boolean;

	readonly isAutomaticSetupEnabled: boolean;

	readonly isChannelCaptureEnabled: boolean;

	readonly isChannelCreationDelayEnabled: boolean;

	readonly isExtendedBroadcastsEnabled: boolean;

	readonly itunesID: string;

	readonly logLevel: UALogLevel;

	readonly messageCenterStyleConfig: string;

	readonly remoteDataAPIURL: string;

	readonly requestAuthorizationToUseNotifications: boolean;

	readonly requireInitialRemoteConfigEnabled: boolean;

	readonly suppressAllowListError: boolean;

	static readonly configUpdatedEvent: string;

	constructor(o: { config: UAConfig; dataStore: UAPreferenceDataStore; });

	initWithConfigDataStore(config: UAConfig, dataStore: UAPreferenceDataStore): this;
}

declare class UASDKDependencyKeys extends NSObject {

	static alloc(): UASDKDependencyKeys; // inherited from NSObject

	static new(): UASDKDependencyKeys; // inherited from NSObject

	static readonly analytics: string;

	static readonly channel: string;

	static readonly config: string;

	static readonly contact: string;

	static readonly dataStore: string;

	static readonly privacyManager: string;

	static readonly push: string;

	static readonly remoteData: string;
}

declare const enum UASDKExtension {

	Cordova = 0,

	Xamarin = 1,

	Unity = 2,

	Flutter = 3,

	ReactNative = 4,

	Titanium = 5
}

interface UASDKModule extends NSObjectProtocol {

	actionsPlist?(): string;

	components?(): NSArray<UAComponent>;
}
declare var UASDKModule: {

	prototype: UASDKModule;

	loadWithDependencies(dependencies: NSDictionary<any, any>): UASDKModule;
};

declare class UASchedule extends NSObject {

	static alloc(): UASchedule; // inherited from NSObject

	static new(): UASchedule; // inherited from NSObject

	readonly audience: UAScheduleAudience;

	readonly delay: UAScheduleDelay;

	readonly editGracePeriod: number;

	readonly end: Date;

	readonly group: string;

	readonly identifier: string;

	readonly interval: number;

	readonly isValid: boolean;

	readonly limit: number;

	readonly metadata: NSDictionary<any, any>;

	readonly priority: number;

	readonly start: Date;

	readonly triggers: NSArray<UAScheduleTrigger>;

	isEqualToSchedule(schedule: UASchedule): boolean;
}

declare class UAScheduleAction extends NSObject implements UAAction {

	static alloc(): UAScheduleAction; // inherited from NSObject

	static new(): UAScheduleAction; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare var UAScheduleActionDefaultRegistryAlias: string;

declare var UAScheduleActionDefaultRegistryName: string;

declare const enum UAScheduleActionErrorCode {

	InvalidJSON = 0
}

declare class UAScheduleAudience extends NSObject {

	static alloc(): UAScheduleAudience; // inherited from NSObject

	static audienceWithBuilderBlock(builderBlock: (p1: UAScheduleAudienceBuilder) => void): UAScheduleAudience;

	static new(): UAScheduleAudience; // inherited from NSObject

	readonly languageIDs: NSArray<string>;

	readonly locationOptIn: number;

	readonly missBehavior: UAScheduleAudienceMissBehaviorType;

	readonly notificationsOptIn: number;

	readonly tagSelector: UATagSelector;

	readonly versionPredicate: UAJSONPredicate;
}

declare class UAScheduleAudienceBuilder extends NSObject {

	static alloc(): UAScheduleAudienceBuilder; // inherited from NSObject

	static new(): UAScheduleAudienceBuilder; // inherited from NSObject

	languageTags: NSArray<string>;

	locationOptIn: number;

	missBehavior: UAScheduleAudienceMissBehaviorType;

	notificationsOptIn: number;

	tagSelector: UATagSelector;

	versionPredicate: UAJSONPredicate;

	isValid(): boolean;
}

declare const enum UAScheduleAudienceMissBehaviorType {

	Cancel = 0,

	Skip = 1,

	Penalize = 2
}

declare class UAScheduleBuilder extends NSObject {

	static alloc(): UAScheduleBuilder; // inherited from NSObject

	static new(): UAScheduleBuilder; // inherited from NSObject

	audience: UAScheduleAudience;

	delay: UAScheduleDelay;

	editGracePeriod: number;

	end: Date;

	group: string;

	identifier: string;

	interval: number;

	limit: number;

	metadata: NSDictionary<any, any>;

	priority: number;

	start: Date;

	triggers: NSArray<UAScheduleTrigger>;
}

declare const enum UAScheduleDataDeferredType {

	Unknown = 0,

	InAppMessage = 1
}

declare class UAScheduleDeferredData extends NSObject {

	static alloc(): UAScheduleDeferredData; // inherited from NSObject

	static deferredDataWithJSONError(json: any): UAScheduleDeferredData;

	static deferredDataWithURLRetriableOnTimeout(URL: NSURL, retriableOnTimeout: boolean): UAScheduleDeferredData;

	static deferredDataWithURLRetriableOnTimeoutType(URL: NSURL, retriableOnTimeout: boolean, type: UAScheduleDataDeferredType): UAScheduleDeferredData;

	static new(): UAScheduleDeferredData; // inherited from NSObject

	readonly URL: NSURL;

	readonly retriableOnTimeout: boolean;

	readonly type: UAScheduleDataDeferredType;

	toJSON(): NSDictionary<any, any>;
}

declare const enum UAScheduleDeferredDataErrorCode {

	InvalidJSON = 0
}

declare class UAScheduleDelay extends NSObject {

	static alloc(): UAScheduleDelay; // inherited from NSObject

	static delayWithBuilderBlock(builderBlock: (p1: UAScheduleDelayBuilder) => void): UAScheduleDelay;

	static delayWithJSONError(json: any): UAScheduleDelay;

	static new(): UAScheduleDelay; // inherited from NSObject

	readonly appState: UAScheduleDelayAppState;

	readonly cancellationTriggers: NSArray<UAScheduleTrigger>;

	readonly isValid: boolean;

	readonly regionID: string;

	readonly screens: NSArray<any>;

	readonly seconds: number;

	isEqualToDelay(delay: UAScheduleDelay): boolean;
}

declare const enum UAScheduleDelayAppState {

	Any = 0,

	Foreground = 1,

	Background = 2
}

declare var UAScheduleDelayAppStateBackgroundName: string;

declare var UAScheduleDelayAppStateForegroundName: string;

declare var UAScheduleDelayAppStateKey: string;

declare class UAScheduleDelayBuilder extends NSObject {

	static alloc(): UAScheduleDelayBuilder; // inherited from NSObject

	static new(): UAScheduleDelayBuilder; // inherited from NSObject

	appState: UAScheduleDelayAppState;

	cancellationTriggers: NSArray<UAScheduleTrigger>;

	regionID: string;

	screens: NSArray<any>;

	seconds: number;
}

declare var UAScheduleDelayCancellationTriggersKey: string;

declare const enum UAScheduleDelayErrorCode {

	InvalidJSON = 0
}

declare var UAScheduleDelayErrorDomain: string;

declare var UAScheduleDelayMaxCancellationTriggers: number;

declare var UAScheduleDelayRegionKey: string;

declare var UAScheduleDelayScreensKey: string;

declare var UAScheduleDelaySecondsKey: string;

declare class UAScheduleEdits extends NSObject {

	static alloc(): UAScheduleEdits; // inherited from NSObject

	static editsWithActionsBuilderBlock(actions: NSDictionary<any, any>, builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

	static editsWithBuilderBlock(builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

	static editsWithMessageBuilderBlock(message: UAInAppMessage, builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

	static new(): UAScheduleEdits; // inherited from NSObject

	readonly audience: UAScheduleAudience;

	readonly editGracePeriod: number;

	readonly end: Date;

	readonly interval: number;

	readonly limit: number;

	readonly metadata: NSDictionary<any, any>;

	readonly priority: number;

	readonly start: Date;
}

declare class UAScheduleEditsBuilder extends NSObject {

	static alloc(): UAScheduleEditsBuilder; // inherited from NSObject

	static new(): UAScheduleEditsBuilder; // inherited from NSObject

	audience: UAScheduleAudience;

	editGracePeriod: number;

	end: Date;

	interval: number;

	limit: number;

	metadata: NSDictionary<any, any>;

	priority: number;

	start: Date;
}

declare var UAScheduleMaxTriggers: number;

declare class UAScheduleTrigger extends NSObject implements NSSecureCoding {

	static activeSessionTriggerWithCount(count: number): UAScheduleTrigger;

	static alloc(): UAScheduleTrigger; // inherited from NSObject

	static appInitTriggerWithCount(count: number): UAScheduleTrigger;

	static backgroundTriggerWithCount(count: number): UAScheduleTrigger;

	static customEventTriggerWithPredicateCount(predicate: UAJSONPredicate, count: number): UAScheduleTrigger;

	static customEventTriggerWithPredicateValue(predicate: UAJSONPredicate, value: number): UAScheduleTrigger;

	static foregroundTriggerWithCount(count: number): UAScheduleTrigger;

	static new(): UAScheduleTrigger; // inherited from NSObject

	static regionEnterTriggerForRegionIDCount(regionID: string, count: number): UAScheduleTrigger;

	static regionExitTriggerForRegionIDCount(regionID: string, count: number): UAScheduleTrigger;

	static screenTriggerForScreenNameCount(screenName: string, count: number): UAScheduleTrigger;

	static triggerWithJSONError(json: any): UAScheduleTrigger;

	static versionTriggerWithConstraintCount(versionConstraint: string, count: number): UAScheduleTrigger;

	readonly goal: number;

	readonly type: UAScheduleTriggerType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isEqualToTrigger(trigger: UAScheduleTrigger): boolean;
}

declare var UAScheduleTriggerActiveSessionName: string;

declare var UAScheduleTriggerAppBackgroundName: string;

declare var UAScheduleTriggerAppForegroundName: string;

declare var UAScheduleTriggerAppInitName: string;

declare var UAScheduleTriggerCustomEventCountName: string;

declare var UAScheduleTriggerCustomEventValueName: string;

declare const enum UAScheduleTriggerErrorCode {

	InvalidJSON = 0
}

declare var UAScheduleTriggerErrorDomain: string;

declare var UAScheduleTriggerGoalKey: string;

declare var UAScheduleTriggerPredicateKey: string;

declare var UAScheduleTriggerRegionEnterName: string;

declare var UAScheduleTriggerRegionExitName: string;

declare var UAScheduleTriggerScreenName: string;

declare const enum UAScheduleTriggerType {

	AppForeground = 0,

	AppBackground = 1,

	RegionEnter = 2,

	RegionExit = 3,

	CustomEventCount = 4,

	CustomEventValue = 5,

	Screen = 6,

	AppInit = 7,

	ActiveSession = 8,

	Version = 9
}

declare var UAScheduleTriggerTypeKey: string;

declare var UAScheduleTriggerVersionName: string;

declare class UASemaphore extends NSObject {

	static alloc(): UASemaphore; // inherited from NSObject

	static new(): UASemaphore; // inherited from NSObject

	constructor(o: { value: number; });

	initWithValue(value: number): this;

	signal(): boolean;

	wait(): void;
}

declare var UASeparatedButtonSpacingKey: string;

declare class UAShareAction extends NSObject implements UAAction {

	static alloc(): UAShareAction; // inherited from NSObject

	static new(): UAShareAction; // inherited from NSObject

	static readonly name: string;

	static readonly shortName: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	acceptsArguments(_arguments: UAActionArguments): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAShareActionPredicate extends NSObject implements UAActionPredicateProtocol {

	static alloc(): UAShareActionPredicate; // inherited from NSObject

	static new(): UAShareActionPredicate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyActionArguments(args: UAActionArguments): boolean;

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

declare const enum UASituation {

	ManualInvocation = 0,

	LaunchedFromPush = 1,

	ForegroundPush = 2,

	BackgroundPush = 3,

	WebViewInvocation = 4,

	ForegroundInteractiveButton = 5,

	BackgroundInteractiveButton = 6,

	Automation = 7
}

declare var UAStackedButtonSpacingKey: string;

declare class UASubscriptionListEditor extends NSObject {

	static alloc(): UASubscriptionListEditor; // inherited from NSObject

	static new(): UASubscriptionListEditor; // inherited from NSObject

	apply(): void;

	subscribe(subscriptionListID: string): void;

	unsubscribe(subscriptionListID: string): void;
}

declare class UASystemVersion extends NSObject {

	static alloc(): UASystemVersion; // inherited from NSObject

	static new(): UASystemVersion; // inherited from NSObject

	readonly currentSystemVersion: string;

	isGreaterOrEqual(version: string): boolean;
}

declare class UATagChanges extends NSObject {

	static alloc(): UATagChanges; // inherited from NSObject

	static new(): UATagChanges; // inherited from NSObject
}

declare class UATagEditor extends NSObject {

	static alloc(): UATagEditor; // inherited from NSObject

	static new(): UATagEditor; // inherited from NSObject

	addTag(tag: string): void;

	addTags(tags: NSArray<string> | string[]): void;

	apply(): void;

	clearTags(): void;

	removeTag(tag: string): void;

	removeTags(tags: NSArray<string> | string[]): void;

	setTags(tags: NSArray<string> | string[]): void;
}

declare class UATagGroupUpdate extends NSObject {

	static alloc(): UATagGroupUpdate; // inherited from NSObject

	static new(): UATagGroupUpdate; // inherited from NSObject

	readonly group: string;

	readonly tags: NSArray<string>;

	readonly type: UATagGroupUpdateType;

	constructor(o: { group: string; tags: NSArray<string> | string[]; type: UATagGroupUpdateType; });

	initWithGroupTagsType(group: string, tags: NSArray<string> | string[], type: UATagGroupUpdateType): this;
}

declare const enum UATagGroupUpdateType {

	Add = 0,

	Remove = 1,

	Set = 2
}

declare class UATagGroupsEditor extends NSObject {

	static alloc(): UATagGroupsEditor; // inherited from NSObject

	static new(): UATagGroupsEditor; // inherited from NSObject

	constructor(o: { allowDeviceTagGroup: boolean; completionHandler: (p1: NSArray<UATagGroupUpdate>) => void; });

	addTagsGroup(tags: NSArray<string> | string[], group: string): void;

	apply(): void;

	initWithAllowDeviceTagGroupCompletionHandler(allowDeviceTagGroup: boolean, completionHandler: (p1: NSArray<UATagGroupUpdate>) => void): this;

	removeTagsGroup(tags: NSArray<string> | string[], group: string): void;

	setTagsGroup(tags: NSArray<string> | string[], group: string): void;
}

declare class UATagSelector extends NSObject {

	static alloc(): UATagSelector; // inherited from NSObject

	static new(): UATagSelector; // inherited from NSObject

	static tag(tag: string): UATagSelector;

	apply(tags: NSArray<string> | string[]): boolean;
}

declare class UATagsActionPredicate extends NSObject implements UAActionPredicateProtocol {

	static alloc(): UATagsActionPredicate; // inherited from NSObject

	static new(): UATagsActionPredicate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyActionArguments(args: UAActionArguments): boolean;

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

interface UATask {

	expirationHandler: () => void;

	requestOptions: UATaskRequestOptions;

	taskID: string;

	taskCompleted(): void;

	taskFailed(): void;
}
declare var UATask: {

	prototype: UATask;
};

declare const enum UATaskConflictPolicy {

	Keep = 0,

	Replace = 1,

	Append = 2
}

declare class UATaskManager extends NSObject implements TaskManagerProtocol {

	static alloc(): UATaskManager; // inherited from NSObject

	static new(): UATaskManager; // inherited from NSObject

	static readonly shared: UATaskManager;

	constructor(o: { application: UIApplication; notificationCenter: NSNotificationCenter; dispatcher: UADispatcher; networkMonitor: UANetworkMonitor; });

	enqueueRequestWithIDOptions(taskID: string, options: UATaskRequestOptions): void;

	enqueueRequestWithIDOptionsInitialDelay(taskID: string, options: UATaskRequestOptions, initialDelay: number): void;

	initWithApplicationNotificationCenterDispatcherNetworkMonitor(application: UIApplication, notificationCenter: NSNotificationCenter, dispatcher: UADispatcher, networkMonitor: UANetworkMonitor): this;

	registerForTaskWithIDDispatcherLaunchHandler(taskID: string, dispatcher: UADispatcher, launchHandler: (p1: UATask) => void): void;

	registerForTaskWithIDsDispatcherLaunchHandler(taskIDs: NSArray<string> | string[], dispatcher: UADispatcher, launchHandler: (p1: UATask) => void): void;
}

declare class UATaskRequestOptions extends NSObject {

	static alloc(): UATaskRequestOptions; // inherited from NSObject

	static new(): UATaskRequestOptions; // inherited from NSObject

	readonly conflictPolicy: UATaskConflictPolicy;

	readonly extras: NSDictionary<any, any>;

	readonly isNetworkRequired: boolean;

	static readonly defaultOptions: UATaskRequestOptions;

	constructor(o: { conflictPolicy: UATaskConflictPolicy; requiresNetwork: boolean; extras: NSDictionary<any, any>; });

	initWithConflictPolicyRequiresNetworkExtras(conflictPolicy: UATaskConflictPolicy, requiresNetwork: boolean, extras: NSDictionary<any, any>): this;
}

declare var UATextAdditonalPaddingKey: string;

declare class UAUIKitStateTrackerAdapter extends NSObject implements UAAppStateTrackerAdapter {

	static alloc(): UAUIKitStateTrackerAdapter; // inherited from NSObject

	static new(): UAUIKitStateTrackerAdapter; // inherited from NSObject

	readonly state: UAApplicationState; // inherited from UAAppStateTrackerAdapter

	stateTrackerDelegate: UAAppStateTrackerDelegate; // inherited from UAAppStateTrackerAdapter

	constructor(o: { notificationCenter: NSNotificationCenter; dispatcher: UADispatcher; });

	initWithNotificationCenterDispatcher(notificationCenter: NSNotificationCenter, dispatcher: UADispatcher): this;
}

declare class UAURLActionPredicate extends NSObject implements UAActionPredicateProtocol {

	static alloc(): UAURLActionPredicate; // inherited from NSObject

	static new(): UAURLActionPredicate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyActionArguments(args: UAActionArguments): boolean;

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

declare class UAURLAllowList extends NSObject implements UAURLAllowListProtocol {

	static alloc(): UAURLAllowList; // inherited from NSObject

	static allowListWithConfig(config: UARuntimeConfig): UAURLAllowList;

	static new(): UAURLAllowList; // inherited from NSObject

	delegate: UAURLAllowListDelegate;

	addEntry(patternString: string): boolean;

	addEntryScope(patternString: string, scope: UAURLAllowListScope): boolean;

	isAllowed(url: NSURL): boolean;

	isAllowedScope(url: NSURL, scope: UAURLAllowListScope): boolean;
}

interface UAURLAllowListDelegate {

	allowURLScope(url: NSURL, scope: UAURLAllowListScope): boolean;
}
declare var UAURLAllowListDelegate: {

	prototype: UAURLAllowListDelegate;
};

interface UAURLAllowListProtocol {

	addEntry(patternString: string): boolean;

	addEntryScope(patternString: string, scope: UAURLAllowListScope): boolean;

	isAllowed(url: NSURL): boolean;

	isAllowedScope(url: NSURL, scope: UAURLAllowListScope): boolean;
}
declare var UAURLAllowListProtocol: {

	prototype: UAURLAllowListProtocol;
};

declare const enum UAURLAllowListScope {

	JavaScriptInterface = 1,

	OpenURL = 2,

	All = 3
}

declare class UAUser extends NSObject {

	static alloc(): UAUser; // inherited from NSObject

	static new(): UAUser; // inherited from NSObject

	getUserData(completionHandler: (p1: UAUserData) => void): void;

	getUserDataQueue(completionHandler: (p1: UAUserData) => void, queue: NSObject): void;

	getUserDataSync(): UAUserData;
}

declare var UAUserCreatedNotification: string;

declare class UAUserData extends NSObject {

	static alloc(): UAUserData; // inherited from NSObject

	static new(): UAUserData; // inherited from NSObject

	readonly password: string;

	readonly username: string;
}

declare class UAUtils extends NSObject {

	static ISODateFormatterUTC(): NSDateFormatter;

	static ISODateFormatterUTCWithDelimiter(): NSDateFormatter;

	static alloc(): UAUtils; // inherited from NSObject

	static authHeaderStringWithNamePassword(username: string, password: string): string;

	static bundleShortVersionString(): string;

	static carrierName(): string;

	static compareVersionToVersion(fromVersion: string, toVersion: string): NSComparisonResult;

	static connectionType(): string;

	static deviceModelName(): string;

	static deviceTokenStringFromDeviceToken(token: NSData): string;

	static floatIsEqualToFloatWithAccuracy(float1: number, float2: number, accuracy: number): boolean;

	static isAlertingPush(notification: NSDictionary<any, any>): boolean;

	static isSilentPush(notification: NSDictionary<any, any>): boolean;

	static logFailedRequestWithMessageWithErrorWithResponse(request: UARequest, message: string, error: NSError, response: NSHTTPURLResponse): void;

	static mainWindow(): UIWindow;

	static mergeFetchResults(results: NSArray<number> | number[]): UIBackgroundFetchResult;

	static new(): UAUtils; // inherited from NSObject

	static parseISO8601DateFromString(from: string): Date;

	static sha256DigestWithString(input: string): NSData;

	static sha256HashWithString(input: string): string;

	static topController(): UIViewController;

	static windowForView(view: UIView): UIWindow;
}

declare class UAVersionMatcher extends NSObject {

	static alloc(): UAVersionMatcher; // inherited from NSObject

	static isExactVersion(versionConstraint: string): boolean;

	static isSubVersion(versionConstraint: string): boolean;

	static isVersionRange(versionConstraint: string): boolean;

	static matcherWithVersionConstraint(versionConstraint: string): UAVersionMatcher;

	static new(): UAVersionMatcher; // inherited from NSObject

	constructor(o: { versionConstraint: string; });

	evaluateObject(value: any): boolean;

	initWithVersionConstraint(versionConstraint: string): this;
}

declare class UAViewUtils extends NSObject {

	static alloc(): UAViewUtils; // inherited from NSObject

	static applyContainerConstraintsToContainerContainedView(container: UIView, contained: UIView): void;

	static new(): UAViewUtils; // inherited from NSObject
}

declare class UAWalletAction extends UAOpenExternalURLAction {

	static alloc(): UAWalletAction; // inherited from NSObject

	static new(): UAWalletAction; // inherited from NSObject
}

declare class UAWebView extends WKWebView {

	static alloc(): UAWebView; // inherited from NSObject

	static appearance(): UAWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UAWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UAWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UAWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UAWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UAWebView; // inherited from UIAppearance

	static new(): UAWebView; // inherited from NSObject
}

declare class UAirship extends NSObject {

	static alloc(): UAirship; // inherited from NSObject

	static componentForClassName(className: string): UAComponent;

	static new(): UAirship; // inherited from NSObject

	static setLogLevel(value: UALogLevel): void;

	static takeOffLaunchOptions(config: UAConfig, launchOptions: NSDictionary<string, any>): void;

	static takeOffWithLaunchOptions(launchOptions: NSDictionary<string, any>): void;

	readonly URLAllowList: UAURLAllowList;

	readonly actionRegistry: UAActionRegistry;

	readonly applicationMetrics: UAApplicationMetrics;

	readonly channelCapture: UAChannelCapture;

	readonly components: NSArray<UAComponent>;

	readonly config: UARuntimeConfig;

	deepLinkDelegate: UADeepLinkDelegate;

	javaScriptCommandDelegate: UAJavaScriptCommandDelegate;

	readonly localeManager: UALocaleManager;

	readonly locationProvider: UALocationProvider;

	readonly privacyManager: UAPrivacyManager;

	static readonly airshipReadyAppKey: string;

	static readonly airshipReadyChannelIdentifier: string;

	static readonly airshipReadyNotification: string;

	static readonly airshipReadyPayloadVersion: string;

	static readonly analytics: UAAnalytics;

	static readonly channel: UAChannel;

	static readonly contact: UAContact;

	static readonly deepLinkScheme: string;

	static readonly isFlying: boolean;

	static logLevel: UALogLevel;

	static readonly namedUser: UANamedUser;

	static readonly push: UAPush;

	static readonly resetKeyChainKey: string;

	static readonly shared: UAirship;

	deepLinkCompletionHandler(deepLink: NSURL, completionHandler: (p1: boolean) => void): void;
}

declare class UAirshipCoreResources extends NSObject {

	static alloc(): UAirshipCoreResources; // inherited from NSObject

	static new(): UAirshipCoreResources; // inherited from NSObject

	static readonly bundle: NSBundle;
}

declare class UAirshipErrors extends NSObject {

	static alloc(): UAirshipErrors; // inherited from NSObject

	static error(message: string): NSError;

	static new(): UAirshipErrors; // inherited from NSObject

	static parseError(message: string): NSError;
}

declare class UAirshipVersion extends NSObject {

	static alloc(): UAirshipVersion; // inherited from NSObject

	static get(): string;

	static new(): UAirshipVersion; // inherited from NSObject
}

declare var uaLogLevel: number;
