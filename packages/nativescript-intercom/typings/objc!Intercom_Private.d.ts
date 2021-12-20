
declare class ICMActiveAdminsAvatarView extends UIView {

	static alloc(): ICMActiveAdminsAvatarView; // inherited from NSObject

	static appearance(): ICMActiveAdminsAvatarView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ICMActiveAdminsAvatarView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ICMActiveAdminsAvatarView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ICMActiveAdminsAvatarView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ICMActiveAdminsAvatarView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ICMActiveAdminsAvatarView; // inherited from UIAppearance

	static new(): ICMActiveAdminsAvatarView; // inherited from NSObject

	constructor(o: { height: number; overlap: number; maxCount: number; });

	initWithHeightOverlapMaxCount(avatarHeight: number, avatarOverlap: number, maxAvatarCount: number): this;

	numberOfAvatarsDisplayed(): number;

	updateVisibleAvatars(): void;
}

declare class ICMArticleWebViewController extends UIViewController implements ICMContentViewController {

	static alloc(): ICMArticleWebViewController; // inherited from NSObject

	static new(): ICMArticleWebViewController; // inherited from NSObject

	contentDelegate: ICMContentViewControllerDelegate; // inherited from ICMContentViewController

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { id: string; metricService: any; });

	class(): typeof NSObject;

	closeButtonTapped(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithIdMetricService(articleId: string, metricService: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reload(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	viewDidDismissBySwipe(): void;
}

declare class ICMAssets extends NSObject {

	static alloc(): ICMAssets; // inherited from NSObject

	static articleLoadingImage(): UIImage;

	static askAQuestion(): UIImage;

	static backButtonImage(): UIImage;

	static booleanButtonLeftImage(): UIImage;

	static booleanButtonLeftImageSelected(): UIImage;

	static booleanButtonRightImage(): UIImage;

	static booleanButtonRightImageSelected(): UIImage;

	static buttonLoadingImage(): UIImage;

	static cancelIcon(): UIImage;

	static carouselLoadingImage(): UIImage;

	static chatBubbleImage(): UIImage;

	static closeImage(): UIImage;

	static closeNoteImage(): UIImage;

	static closePostImage(): UIImage;

	static dateSelector(): UIImage;

	static defaultAvatarImageWithInitialsDiameter(userInitials: string, diameter: number): UIImage;

	static expandPhotosIcon(): UIImage;

	static footerLinkIcon(): UIImage;

	static gifInputIcon(): UIImage;

	static gifInputSelectedIcon(): UIImage;

	static greenCheckImage(): UIImage;

	static helpCenterChevron(): UIImage;

	static helpCenterLoadingImage(): UIImage;

	static homescreenFailedImage(): UIImage;

	static intercomLogoImage(): UIImage;

	static launcherImage(): UIImage;

	static linkedinIcon(): UIImage;

	static messageFailedImage(): UIImage;

	static new(): ICMAssets; // inherited from NSObject

	static openPostFromCardImage(): UIImage;

	static photoInputIcon(): UIImage;

	static photoInputSelectedIcon(): UIImage;

	static pickerSelector(): UIImage;

	static playIcon(): UIImage;

	static replyTimeIcon(): UIImage;

	static screenActionCheckmark(): UIImage;

	static searchIcon(): UIImage;

	static sendIcon(): UIImage;

	static snoozeIcon(): UIImage;

	static soundForIncomingAdminMessage(): NSURL;

	static soundForIncomingOperatorMessage(): NSURL;

	static soundForMessageSending(): NSURL;

	static soundForMessageSendingFailure(): NSURL;

	static spinnerImage(): UIImage;

	static startConversationImage(): UIImage;

	static submitButtonBackgroundImage(): UIImage;

	static submitButtonBackgroundImageClear(): UIImage;

	static submitImage(): UIImage;

	static teammateIntroIcon(): UIImage;

	static teammateRoleIcon(): UIImage;

	static teammateTimeIcon(): UIImage;

	static textFieldBackgroundImage(): UIImage;

	static textFieldErrorBackgroundImage(): UIImage;

	static textInputIcon(): UIImage;

	static textInputSelectedIcon(): UIImage;

	static twitterIcon(): UIImage;

	static undoIcon(): UIImage;

	static uploadButtonImage(): UIImage;

	static warningImage(): UIImage;
}

declare class ICMAvatar extends ICMSafeNetworkModel implements NSSecureCoding {

	static alloc(): ICMAvatar; // inherited from NSObject

	static instanceFromDictionary(aDictionary: NSDictionary<any, any>): ICMAvatar;

	static new(): ICMAvatar; // inherited from NSObject

	readonly imageUrl: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	chatHeadURL(): string;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isEqualToAvatar(other: ICMAvatar): boolean;
}

interface ICMCloseIntercomModalDelegate extends NSObjectProtocol {

	closeIntercomModal(): void;
}
declare var ICMCloseIntercomModalDelegate: {

	prototype: ICMCloseIntercomModalDelegate;
};

declare class ICMColor extends NSObject {

	static activeColour(): UIColor;

	static alloc(): ICMColor; // inherited from NSObject

	static awayColour(): UIColor;

	static bubbleFillColorUser(): UIColor;

	static bubbleTextColorUser(): UIColor;

	static buttonBackgroundColorVarient(color: UIColor): UIColor;

	static buttonHighlightColor(color: UIColor): UIColor;

	static buttonTextColorVarient(color: UIColor): UIColor;

	static charcoalGrey(): UIColor;

	static closeButtonDarkColor(): UIColor;

	static closeButtonDarkColorWithAlpha(alpha: number): UIColor;

	static closeButtonLightColor(): UIColor;

	static closeButtonLightColorWithAlpha(alpha: number): UIColor;

	static colorForFadeBetweenFirstColorSecondColorAtRatio(firstColor: UIColor, secondColor: UIColor, ratio: number): UIColor;

	static colorWithHexString(hexString: string): UIColor;

	static colorWithRGB(r: number, g: number, b: number): UIColor;

	static colorWithRGBAlpha(r: number, g: number, b: number, alpha: number): UIColor;

	static composerSeparatorColor(): UIColor;

	static conversationAccessoryViewTextColor(): UIColor;

	static coolGrey(): UIColor;

	static dark(): UIColor;

	static darkPrimaryColor(): UIColor;

	static darkSecondaryColor(): UIColor;

	static errorColor(): UIColor;

	static ghostWhite(): UIColor;

	static helpCenterSearchBarBackgroundColor(): UIColor;

	static helpCenterSearchPlaceholderColor(): UIColor;

	static helpCenterTextColor(): UIColor;

	static helpCenterThemeColor(): UIColor;

	static inAppsTitleColor(): UIColor;

	static intercomBlue(): UIColor;

	static intercomLinkColor(): UIColor;

	static isLightColor(backgroundColor: UIColor): boolean;

	static launcherImageColor(): UIColor;

	static mercuryGrey(): UIColor;

	static new(): ICMColor; // inherited from NSObject

	static primaryColor(): UIColor;

	static primaryColorVariant(): UIColor;

	static primaryOrDarkColor(): UIColor;

	static primaryTextColor(): UIColor;

	static secondaryColor(): UIColor;

	static secondaryColorVariant(): UIColor;

	static secondaryTextColor(): UIColor;

	static silver(): UIColor;

	static systemGray5(): UIColor;

	static whiteOrDarkForPrimaryColor(): UIColor;
}

declare class ICMConfig extends ICMSafeNetworkModel implements ICMConfigProtocol, NSSecureCoding {

	static alloc(): ICMConfig; // inherited from NSObject

	static deleteSharedConfig(): void;

	static instanceFromDictionary(aDictionary: NSDictionary<any, any>): ICMConfig;

	static new(): ICMConfig; // inherited from NSObject

	static sharedConfig(): ICMConfig;

	static updateSharedInstanceFromDictionary(aDictionary: NSDictionary<any, any>): void;

	accessToTeammateEnabled: boolean;

	appName: string;

	attachmentsEnabled: boolean;

	audioEnabled: boolean;

	backgroundRequestsEnabled: boolean;

	batchUserUpdatePeriod: number;

	features: NSSet<string>;

	gifsEnabled: boolean;

	helpCenterBaseColorString: string;

	helpCenterLocale: NSLocale;

	helpCenterRequireSearch: boolean;

	helpCenterUrlString: string;

	helpCenterUrlStrings: NSArray<string>;

	identityVerificationEnabled: boolean;

	inboundMessages: boolean;

	intercomLocale: NSLocale;

	launcherAlignment: string;

	launcherBottomPadding: number;

	launcherCustomLogoURLString: string;

	messengerBackgroundImageUrlString: string;

	messengerLogoUrlString: string;

	metricsEnabled: boolean;

	newSessionThreshold: number;

	pingDelay: number;

	primaryColorString: string;

	rateLimit: number;

	rateLimitPeriod: number;

	secondaryColorString: string;

	shouldDisplayDarkHelpCenterColor: boolean;

	shouldDisplayDarkPrimaryColor: boolean;

	shouldDisplayDarkSecondaryColor: boolean;

	showIntercomLink: boolean;

	softResetTimeout: number;

	teamGreeting: string;

	teamIntro: string;

	temporaryExpectationsMessage: string;

	uploadSizeLimit: number;

	userUpdateDupCacheMaxAge: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	customLauncherImage(): UIImage;

	encodeWithCoder(coder: NSCoder): void;

	hasFeature(feature: string): boolean;

	helpCenterBaseColor(): UIColor;

	initWithCoder(coder: NSCoder): this;

	isEqualToConfig(other: ICMConfig): boolean;

	messengerBackgroundImage(): UIImage;

	messengerLogoImage(): UIImage;

	primaryColor(): UIColor;

	receivedFromServer(): boolean;

	save(): void;

	saveIfNeeded(): void;

	secondaryColor(): UIColor;

	useDefaultLauncherAlignment(): boolean;
}

interface ICMConfigProtocol {

	accessToTeammateEnabled: boolean;

	helpCenterRequireSearch: boolean;

	inboundMessages: boolean;
}
declare var ICMConfigProtocol: {

	prototype: ICMConfigProtocol;
};

interface ICMContentViewController extends NSObjectProtocol {

	contentDelegate: ICMContentViewControllerDelegate;

	closeButtonTapped?(): void;

	reload(): void;

	viewDidDismissBySwipe?(): void;
}
declare var ICMContentViewController: {

	prototype: ICMContentViewController;
};

interface ICMContentViewControllerDelegate extends NSObjectProtocol {

	closeContentModal(): void;

	configureCloseButtonForBackgroundColor(backgroundColor: UIColor): void;

	contentDidLoadWithDismissEnabled(dismissEnabled: boolean): void;

	contentLoadingDidFailShowActionButtonActionButtonTitle(errorMessage: string, showActionButton: boolean, actionButtonTitle: string): void;

	showLoadingViewWithImage(image: UIImage): void;
}
declare var ICMContentViewControllerDelegate: {

	prototype: ICMContentViewControllerDelegate;
};

declare class ICMDataManager extends NSObject implements ICMDataManagerProtocol {

	static alloc(): ICMDataManager; // inherited from NSObject

	static new(): ICMDataManager; // inherited from NSObject

	static sharedManager(): ICMDataManager;

	conversationToMark: string;

	hasReceivedConversationsResponse: boolean;

	morePagesAvailable: boolean;

	unreadManager: ICMUnreadManager;

	clearConversations(): void;

	getUnreadConversationsIfNeeded(): void;

	hasConversations(): boolean;

	hasPreviousConversations(): boolean;

	hasRecentConversations(): boolean;

	recentConversationCount(): number;
}

interface ICMDataManagerProtocol {

	hasPreviousConversations(): boolean;

	hasRecentConversations(): boolean;

	recentConversationCount(): number;
}
declare var ICMDataManagerProtocol: {

	prototype: ICMDataManagerProtocol;
};

declare class ICMEngine extends NSObject {

	static alloc(): ICMEngine; // inherited from NSObject

	static new(): ICMEngine; // inherited from NSObject

	requestWithoutRedirectsSuccessFailure(request: NSURLRequest, success: () => void, failure: (p1: NSError) => void): void;

	uploadFileWithFileNameDataUploadConfigSuccessProgressFailure(filename: string, data: NSData, uploadConfig: any, success: () => void, progress: (p1: number) => void, failure: (p1: NSError) => void): NSURLSessionUploadTask;
}

declare class ICMErrorViewController extends UIViewController {

	static alloc(): ICMErrorViewController; // inherited from NSObject

	static new(): ICMErrorViewController; // inherited from NSObject

	errorDelegate: ICMErrorViewDelegate;

	constructor(o: { title: string; showActionButton: boolean; actionButtonTitle: string; });

	initWithTitleShowActionButtonActionButtonTitle(title: string, showRetryButton: boolean, retryButtonTitle: string): this;
}

interface ICMErrorViewDelegate extends NSObjectProtocol {

	didSelectErrorAction?(): void;
}
declare var ICMErrorViewDelegate: {

	prototype: ICMErrorViewDelegate;
};

declare class ICMFeedbackGenerator extends NSObject {

	static alloc(): ICMFeedbackGenerator; // inherited from NSObject

	static feedbackWithType(type: ICMFeedbackGeneratorType): void;

	static new(): ICMFeedbackGenerator; // inherited from NSObject
}

declare const enum ICMFeedbackGeneratorType {

	Selection = 0,

	Error = 1,

	Success = 2,

	Warning = 3
}

declare const enum ICMFontWeight {

	Regular = 0,

	Bold = 1,

	Medium = 2,

	Light = 3,

	Thin = 4,

	Semibold = 5
}

declare class ICMHTTPClient extends NSObject implements ICMHTTPClientProtocol {

	static addConversationRatingRemarkForConversationRemark(conversationId: string, remark: string): void;

	static alloc(): ICMHTTPClient; // inherited from NSObject

	static getHelpCenterCollectionSuccessError(collectionId: string, success: (p1: NSDictionary<any, any>) => void, failure: (p1: NSError) => void): void;

	static getHelpCenterCollectionsError(success: (p1: NSArray<any>) => void, failure: (p1: NSError) => void): void;

	static getHelpCenterSearchResultsSourceSuccessError(searchText: string, source: string, success: (p1: NSArray<any>) => void, failure: (p1: NSError) => void): void;

	static markConversationAsDismissedSuccessError(conversationId: string, success: () => void, failure: (p1: NSError) => void): void;

	static new(): ICMHTTPClient; // inherited from NSObject

	static operatorConditionSatisfiedConverstionIdError(transitionId: string, conversationId: string, failure: (p1: NSError) => void): void;

	static rateConversationWithRatingIndex(conversationId: string, ratingIndex: number): void;

	static reactToArticleArticleContentIdWithReactionIndexAllowAutoResponsesArticleSource(articleId: string, articleContentId: string, index: number, allowAutoResponses: boolean, articleSource: string): void;

	static reactToConversationWithReactionIndex(conversationId: string, index: number): void;

	static recordInteractionsInteractions(conversationId: string, interactions: NSArray<string> | string[]): void;

	static submitDeviceToken(): void;

	static submitMessengerSheetUriSuccessFailure(sheetPayload: NSDictionary<any, any>, uri: string, success: () => void, failure: (p1: NSError) => void): void;

	static submitMetricsOpsMetricsSuccessError(metrics: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], opsMetrics: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], success: () => void, failure: (p1: NSError) => void): void;

	static trackURL(url: string): void;
}

interface ICMHTTPClientProtocol {
}
declare var ICMHTTPClientProtocol: {

	prototype: ICMHTTPClientProtocol;

	getHelpCenterCollectionSuccessError(collectionId: string, success: (p1: NSDictionary<any, any>) => void, failure: (p1: NSError) => void): void;

	getHelpCenterCollectionsError(success: (p1: NSArray<any>) => void, failure: (p1: NSError) => void): void;

	getHelpCenterSearchResultsSourceSuccessError(searchText: string, source: string, success: (p1: NSArray<any>) => void, failure: (p1: NSError) => void): void;
};

declare class ICMHelpCenterTranslationManager extends ICMTranslationManager {

	static alloc(): ICMHelpCenterTranslationManager; // inherited from NSObject

	static new(): ICMHelpCenterTranslationManager; // inherited from NSObject
}

declare class ICMLoadingViewController extends UIViewController {

	static alloc(): ICMLoadingViewController; // inherited from NSObject

	static new(): ICMLoadingViewController; // inherited from NSObject

	constructor(o: { image: UIImage; accessibilityText: string; });

	hideLoadingSpinner(): void;

	initWithImageAccessibilityText(loadingImage: UIImage, accessibilityText: string): this;
}

declare class ICMMetric extends NSObject implements NSSecureCoding {

	static alloc(): ICMMetric; // inherited from NSObject

	static new(): ICMMetric; // inherited from NSObject

	static sharedInstance(): ICMMetric;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addEvent(event: ICMMetricEvent): void;

	clearAllEvents(): void;

	encodeWithCoder(coder: NSCoder): void;

	events(): NSSet<ICMMetricEvent>;

	initWithCoder(coder: NSCoder): this;
}

declare class ICMMetricEvent extends NSObject implements NSSecureCoding {

	static alloc(): ICMMetricEvent; // inherited from NSObject

	static eventWithActionObjectPlaceContext(action: string, object: string, place: string, context: string): ICMMetricEvent;

	static eventWithActionObjectPlaceContextAdditionalInfo(action: string, object: string, place: string, context: string, info: NSDictionary<any, any>): ICMMetricEvent;

	static new(): ICMMetricEvent; // inherited from NSObject

	eventType: ICMMetricEventType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	eventDictionary(): NSDictionary<string, any>;

	initWithCoder(coder: NSCoder): this;
}

declare const enum ICMMetricEventType {

	Messenger = 0,

	Educate = 1,

	Carousel = 2,

	SearchBrowse = 3
}

declare class ICMMultipleAvatarView extends UIView {

	static alloc(): ICMMultipleAvatarView; // inherited from NSObject

	static appearance(): ICMMultipleAvatarView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ICMMultipleAvatarView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ICMMultipleAvatarView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ICMMultipleAvatarView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ICMMultipleAvatarView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ICMMultipleAvatarView; // inherited from UIAppearance

	static new(): ICMMultipleAvatarView; // inherited from NSObject

	avatarBorderColor: UIColor;

	constructor(o: { width: number; });

	bindAdmins(admins: NSArray<ICMParticipant> | ICMParticipant[]): void;

	cancelImageLoad(): void;

	initWithWidth(width: number): this;

	keepUserPresenceViewBackgroundColor(): void;
}

declare class ICMNavigationBarCloseButton extends UIButton {

	static alloc(): ICMNavigationBarCloseButton; // inherited from NSObject

	static appearance(): ICMNavigationBarCloseButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ICMNavigationBarCloseButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ICMNavigationBarCloseButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ICMNavigationBarCloseButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ICMNavigationBarCloseButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ICMNavigationBarCloseButton; // inherited from UIAppearance

	static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): ICMNavigationBarCloseButton; // inherited from UIButton

	static buttonWithType(buttonType: UIButtonType): ICMNavigationBarCloseButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): ICMNavigationBarCloseButton; // inherited from UIButton

	static new(): ICMNavigationBarCloseButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): ICMNavigationBarCloseButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): ICMNavigationBarCloseButton; // inherited from UIButton

	backgroundViewAlpha: number;

	style: ICMNavigationBarCloseButtonStyle;

	constructor(o: { frame: CGRect; style: ICMNavigationBarCloseButtonStyle; });

	initWithFrameStyle(frame: CGRect, style: ICMNavigationBarCloseButtonStyle): this;
}

declare const enum ICMNavigationBarCloseButtonStyle {

	Default = 0,

	Light = 1,

	Dark = 2,

	Text = 3
}

declare class ICMNavigationController extends UINavigationController {

	static alloc(): ICMNavigationController; // inherited from NSObject

	static new(): ICMNavigationController; // inherited from NSObject

	closeButton: ICMNavigationBarCloseButton;

	presentationContext: IntercomPresentationContext;

	addBackButton(): void;

	closeIntercomModal(): void;

	displayCloseButton(): void;

	removeCloseButton(): void;

	setWallpaperHeight(height: number): void;
}

declare class ICMParticipant extends ICMSafeNetworkModel implements NSSecureCoding {

	static alloc(): ICMParticipant; // inherited from NSObject

	static instanceFromDictionary(aDictionary: NSDictionary<any, any>): ICMParticipant;

	static new(): ICMParticipant; // inherited from NSObject

	avatar: ICMAvatar;

	email: string;

	firstName: string;

	isBot: boolean;

	name: string;

	participantId: string;

	type: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	adminAppNameTitle(styleAttributes: NSDictionary<any, any>): NSAttributedString;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isAdmin(): boolean;

	isEqualToParticipant(other: ICMParticipant): boolean;
}

declare class ICMParticipatingAdmin extends ICMParticipant {

	static alloc(): ICMParticipatingAdmin; // inherited from NSObject

	static instanceFromDictionary(aDictionary: NSDictionary<any, any>): ICMParticipatingAdmin; // inherited from ICMParticipant

	static new(): ICMParticipatingAdmin; // inherited from NSObject

	intro: string;

	isActive: boolean;

	jobTitle: string;

	lastActive: Date;

	locationString: string;

	timezoneOffset: number;
}

declare class ICMPresentationManager extends NSObject {

	static alloc(): ICMPresentationManager; // inherited from NSObject

	static new(): ICMPresentationManager; // inherited from NSObject

	static observeSceneWillEnterForeground(): void;

	static sharedInstance(): ICMPresentationManager;

	inAppBottomPadding: number;

	inAppMessagesVisible: boolean;

	launcherVisible: boolean;

	manualInAppBottomPaddingSet: boolean;

	dismissAllIntercomViews(): void;

	hideIntercomUI(): void;

	isContentCurrentlyPresented(): boolean;

	isMessengerPresented(): boolean;

	presentArticle(articleId: string): void;

	presentHelpCenter(): void;

	presentHelpCenterCollection(collectionId: string): void;

	presentHelpCenterCollections(collectionIds: NSArray<string> | string[]): void;

	presentHelpCenterFromSearchBrowse(): void;

	presentHomescreen(): void;

	presentMessageComposerWithInitialMessage(message: string): void;

	presentMessenger(): void;

	sceneWillEnterForeground(notification: NSNotification): void;

	setNeedsHostAppStatusBarAppearanceUpdate(): void;

	showLauncherOrInAppsIfNeeded(): void;

	userChanged(): void;
}

declare class ICMRecentConversationsViewController extends UIViewController {

	static alloc(): ICMRecentConversationsViewController; // inherited from NSObject

	static new(): ICMRecentConversationsViewController; // inherited from NSObject

	delegate: ICMRecentConversationsViewControllerDelegate;

	reloadTableView(): void;
}

interface ICMRecentConversationsViewControllerDelegate extends NSObjectProtocol {

	navigateToViewController(viewController: UIViewController): void;

	reloadConversationHistoryCard(): void;
}
declare var ICMRecentConversationsViewControllerDelegate: {

	prototype: ICMRecentConversationsViewControllerDelegate;
};

declare class ICMSafeNetworkModel extends NSObject {

	static alloc(): ICMSafeNetworkModel; // inherited from NSObject

	static new(): ICMSafeNetworkModel; // inherited from NSObject
}

declare class ICMStartConversationButton extends UIButton {

	static alloc(): ICMStartConversationButton; // inherited from NSObject

	static appearance(): ICMStartConversationButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ICMStartConversationButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ICMStartConversationButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ICMStartConversationButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ICMStartConversationButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ICMStartConversationButton; // inherited from UIAppearance

	static buttonWithConfigurationPrimaryAction(configuration: UIButtonConfiguration, primaryAction: UIAction): ICMStartConversationButton; // inherited from UIButton

	static buttonWithType(buttonType: UIButtonType): ICMStartConversationButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): ICMStartConversationButton; // inherited from UIButton

	static new(): ICMStartConversationButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): ICMStartConversationButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): ICMStartConversationButton; // inherited from UIButton

	configureWithStyle(style: ICMStartConversationButtonStyle): void;
}

declare const enum ICMStartConversationButtonStyle {

	Filled = 0,

	Bordered = 1
}

declare class ICMTeamPresence extends ICMSafeNetworkModel {

	static alloc(): ICMTeamPresence; // inherited from NSObject

	static new(): ICMTeamPresence; // inherited from NSObject

	static sharedInstance(): ICMTeamPresence;

	static updateSharedInstanceWithDictionary(aDictionary: NSDictionary<any, any>): void;

	activeAdmins: NSArray<ICMParticipant>;

	lastActive: Date;

	officeHours: string;

	responseDelayDescription: string;

	responseDelayFull: string;

	responseDelayTimePeriod: string;

	setAttributesFromDictionary(aDictionary: NSDictionary<any, any>): void;
}

declare class ICMTimestampCalculator extends NSObject {

	static alloc(): ICMTimestampCalculator; // inherited from NSObject

	static new(): ICMTimestampCalculator; // inherited from NSObject

	static sharedInstance(): ICMTimestampCalculator;

	lastActiveMinutesAgo(date: Date): string;

	secondsUntilTimestampExpiresForDate(date: Date): number;

	textForLastActiveDate(date: Date): string;

	timestampTextForDateFormatRecentTimeMessage(date: Date, format: ICMTimestampCalculatorTimeAgoFormat, recentTimeMessage: ICMTimestampCalculatorRecentTimeMessage): string;

	timestampTextForDateTimeZone(date: Date, timeZone: NSTimeZone): string;

	timestampTextForUpdatedDate(date: Date): string;
}

declare const enum ICMTimestampCalculatorRecentTimeMessage {

	JustNow = 0,

	Delivered = 1
}

declare const enum ICMTimestampCalculatorTimeAgoFormat {

	Short = 0,

	Long = 1
}

declare class ICMTranslationManager extends NSObject {

	static alloc(): ICMTranslationManager; // inherited from NSObject

	static new(): ICMTranslationManager; // inherited from NSObject

	static supportedLocales(): NSArray<any>;

	static translationForKey(key: string): string;

	static translationForKeyParams(key: string, params: NSDictionary<string, string>): string;

	static translationLocale(): NSLocale;
}

declare class ICMUnreadManager extends NSObject {

	static alloc(): ICMUnreadManager; // inherited from NSObject

	static new(): ICMUnreadManager; // inherited from NSObject

	unreadConversationIds: NSOrderedSet<string>;

	conversationIdRead(conversationId: string): void;
}

declare const enum ICMUserIdentityType {

	Email = 0,

	UserId = 1,

	IntercomId = 2
}

declare class ICMUtils extends NSObject {

	static accessibilityFontSizesEnabled(): boolean;

	static alloc(): ICMUtils; // inherited from NSObject

	static appVersion(): string;

	static applicationName(): string;

	static autoIntegratePushNotifications(): boolean;

	static bundleIdentifier(): string;

	static checkIntegration(): void;

	static debugLoggingEnabled(): boolean;

	static enableRTLSupportForContainerClass(containerClass: typeof NSObject): void;

	static extractArticleIdFromSheetParams(params: NSDictionary<any, any>): string;

	static fontOfSizeWeight(fontSize: number, weight: ICMFontWeight): UIFont;

	static intercomAgent(): string;

	static intercomBundle(): NSBundle;

	static intercomCachesDirectory(): string;

	static intercomDocumentsDirectory(): string;

	static intercomVersion(): string;

	static jsonArrayFromLocalFileError(path: string): NSArray<any>;

	static minimumOSVersion(): string;

	static new(): ICMUtils; // inherited from NSObject

	static photoUsageDescriptionPresent(): boolean;

	static scaleToAccessibilitySizing(pointSize: number): number;

	static sceneManifestPresent(): boolean;

	static setDebugLoggingEnabled(loggingEnabled: boolean): void;

	static shouldShowPhotoUsagePListError(): boolean;

	static translationsBundle(): NSBundle;
}

declare const enum IntercomPresentationContext {

	Messenger = 0,

	HelpCenter = 1,

	ContentModal = 2,

	Sheet = 3
}

declare var IntercomSDKErrorDomain: string;

declare var kICMContentHolderDismissButtonBackgroundAlpha: number;

declare var kICMConversationAvatarWidth: number;

declare var kICMHTTPClientDefaultPageSize: number;

declare var kNewContentEventTypeCarousel: number;

declare var kStartConversationButtonHeight: number;
