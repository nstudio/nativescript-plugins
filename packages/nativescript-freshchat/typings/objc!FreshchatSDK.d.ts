
declare class ConversationOptions extends FreshchatOptions {

	static alloc(): ConversationOptions; // inherited from NSObject

	static new(): ConversationOptions; // inherited from NSObject

	filterByTagsWithTitle(tags: NSArray<any> | any[], title: string): void;

	filteredViewTitle(): string;

	tags(): NSArray<any>;
}

declare class FAQOptions extends FreshchatOptions {

	static alloc(): FAQOptions; // inherited from NSObject

	static new(): FAQOptions; // inherited from NSObject

	showContactUsOnAppBar: boolean;

	showContactUsOnFaqNotHelpful: boolean;

	showContactUsOnFaqScreens: boolean;

	showFaqCategoriesAsGrid: boolean;

	contactUsTags(): NSArray<any>;

	contactUsTitle(): string;

	filterByTagsWithTitleAndType(tags: NSArray<any> | any[], title: string, type: TagFilterType): void;

	filterContactUsByTagsWithTitle(tags: NSArray<any> | any[], title: string): void;

	filteredType(): TagFilterType;

	filteredViewTitle(): string;

	tags(): NSArray<any>;
}

declare const enum FCEvent {

	FAQCategoryListOpen = 0,

	FAQListOpen = 1,

	FAQOpen = 2,

	BotFAQOpen = 3,

	FAQSearch = 4,

	FAQVote = 5,

	BotFAQVote = 6,

	ChannelListOpen = 7,

	MessageSent = 8,

	ConversationOpen = 9,

	CSatOpen = 10,

	CSatSubmit = 11,

	CSatExpiry = 12,

	LinkTap = 13,

	ScreenView = 14,

	MessageReceive = 15,

	NotificationReceive = 16,

	IdTokenStatusChange = 17,

	DropDownReceive = 18,

	DropDownSelect = 19,

	CarouselShow = 20,

	CarouselSelect = 21,

	ShowOriginalClick = 22,

	HideOriginalClick = 23,

	CarouselView = 24,

	CalendarFindTimeSlotClick = 25,

	CalendarInviteCancel = 26,

	CalendarNoTimeSlotFound = 27,

	CalendarBookingSuccess = 28,

	CalendarBookingRetry = 29,

	CalendarBookingFailure = 30,

	FileAttachmentUploadSuccess = 31,

	FileAttachmentUploadError = 32,

	FileAttachmentOpen = 33,

	FileAttachmentOpenError = 34,

	BotFileAttachmentUpload = 35,

	QuickActionSelect = 36,

	FeedbackMessageSent = 37
}

declare const enum FCEventProperty {

	PropertyBotFAQReferenceId = 0,

	PropertyBotFAQPlaceholderReferenceId = 1,

	PropertyFAQCategoryID = 2,

	PropertyFAQCategoryName = 3,

	PropertyBotFAQTitle = 4,

	PropertyBotFAQFeedback = 5,

	PropertyFAQID = 6,

	PropertyFAQTitle = 7,

	PropertySearchKey = 8,

	PropertySearchFAQCount = 9,

	PropertyChannelID = 10,

	PropertyChannelName = 11,

	PropertyConversationID = 12,

	PropertyIsHelpful = 13,

	PropertyIsRelevant = 14,

	PropertyInputTags = 15,

	PropertyRating = 16,

	PropertyResolutionStatus = 17,

	PropertyComment = 18,

	PropertyURL = 19,

	PropertyOption = 20,

	PropertyInviteId = 21,

	ProperyQuickActionType = 22,

	ProperyQuickActionLabel = 23,

	PropertyFeedbackType = 24
}

declare class Freshchat extends NSObject {

	static SDKVersion(): string;

	static alloc(): Freshchat; // inherited from NSObject

	static new(): Freshchat; // inherited from NSObject

	static sharedInstance(): Freshchat;

	readonly config: FreshchatConfig;

	customLinkHandler: (p1: NSURL) => boolean;

	onNotificationClicked: (p1: string) => boolean;

	dismissFreshchatViews(): void;

	getConversationsControllerForEmbed(): UIViewController;

	getConversationsControllerForEmbedWithOptions(convOptions: ConversationOptions): UIViewController;

	getFAQsControllerForEmbed(): UIViewController;

	getFAQsControllerForEmbedWithOptions(faqOptions: FAQOptions): UIViewController;

	getFreshchatUserId(): string;

	getUserIdTokenStatus(): string;

	handleRemoteNotificationAndAppstate(info: NSDictionary<any, any>, appState: UIApplicationState): void;

	identifyUserWithExternalIDRestoreID(externalID: string, restoreID: string): void;

	initWithConfig(config: FreshchatConfig): void;

	isFreshchatNotification(info: NSDictionary<any, any>): boolean;

	openFreshchatDeeplinkViewController(linkStr: string, viewController: UIViewController): void;

	resetUserWithCompletion(completion: () => void): void;

	restoreUserWithIdToken(jwtIdToken: string): void;

	sendMessage(messageObject: FreshchatMessage): void;

	setPushRegistrationToken(deviceToken: NSData): void;

	setUser(user: FreshchatUser): void;

	setUserProperties(props: NSDictionary<string, string>): void;

	setUserPropertyforKeyWithValue(key: string, value: string): void;

	setUserWithIdToken(jwtIdToken: string): void;

	showConversations(controller: UIViewController): void;

	showConversationsWithOptions(controller: UIViewController, options: ConversationOptions): void;

	showFAQs(controller: UIViewController): void;

	showFAQsWithOptions(controller: UIViewController, options: FAQOptions): void;

	trackEventWithProperties(name: string, properties: NSDictionary<string, any>): void;

	unreadCountForTagsWithCompletion(tags: NSArray<any> | any[], completion: (p1: number) => void): void;

	unreadCountWithCompletion(completion: (p1: number) => void): void;

	updateConversationBannerMessage(message: string): void;
}

declare class FreshchatConfig extends NSObject {

	static alloc(): FreshchatConfig; // inherited from NSObject

	static new(): FreshchatConfig; // inherited from NSObject

	appID: string;

	appKey: string;

	cameraCaptureEnabled: boolean;

	domain: string;

	errorLogsEnabled: boolean;

	eventsUploadEnabled: boolean;

	fileAttachmentEnabled: boolean;

	gallerySelectionEnabled: boolean;

	notificationSoundEnabled: boolean;

	responseExpectationVisible: boolean;

	showNotificationBanner: boolean;

	stringsBundle: string;

	teamMemberInfoVisible: boolean;

	themeName: string;

	constructor(o: { appID: string; andAppKey: string; });

	initWithAppIDAndAppKey(appID: string, appKey: string): this;
}

declare class FreshchatEvent extends NSObject {

	static alloc(): FreshchatEvent; // inherited from NSObject

	static new(): FreshchatEvent; // inherited from NSObject

	name: FCEvent;

	properties: NSDictionary<any, any>;

	getEventName(): string;

	valueForEventProperty(property: FCEventProperty): any;
}

declare class FreshchatMessage extends NSObject {

	static alloc(): FreshchatMessage; // inherited from NSObject

	static new(): FreshchatMessage; // inherited from NSObject

	message: string;

	tag: string;

	constructor(o: { message: string; andTag: string; });

	initWithMessageAndTag(message: string, tag: string): this;
}

declare class FreshchatOptions extends NSObject {

	static alloc(): FreshchatOptions; // inherited from NSObject

	static new(): FreshchatOptions; // inherited from NSObject
}

declare class FreshchatUser extends NSObject {

	static alloc(): FreshchatUser; // inherited from NSObject

	static new(): FreshchatUser; // inherited from NSObject

	static sharedInstance(): FreshchatUser;

	email: string;

	readonly externalID: string;

	firstName: string;

	lastName: string;

	phoneCountryCode: string;

	phoneNumber: string;

	readonly restoreID: string;
}

declare const enum TagFilterType {

	ARTICLE = 1,

	CATEGORY = 2
}
