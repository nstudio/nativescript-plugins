declare const enum ContentType {
	article = 0,

	survey = 1,

	carousel = 2,

	helpCenterCollections = 3,

	conversation = 4,

	ticket = 5,
}

declare class ICMCompany extends NSObject {
	static alloc(): ICMCompany; // inherited from NSObject

	static new(): ICMCompany; // inherited from NSObject

	static nullDateAttribute(): Date;

	static nullNumberAttribute(): number;

	static nullStringAttribute(): string;

	companyId: string;

	createdAt: Date;

	customAttributes: NSDictionary<string, any>;

	monthlySpend: number;

	name: string;

	plan: string;

	attributes(): NSDictionary<string, any>;
}

declare class ICMHelpCenterArticle extends NSObject {
	static alloc(): ICMHelpCenterArticle; // inherited from NSObject

	static new(): ICMHelpCenterArticle; // inherited from NSObject

	articleId: string;

	title: string;

	constructor(o: { articleId: string; title: string });

	initWithArticleIdTitle(articleId: string, title: string): this;
}

declare class ICMHelpCenterArticleAuthor extends NSObject {
	static alloc(): ICMHelpCenterArticleAuthor; // inherited from NSObject

	static new(): ICMHelpCenterArticleAuthor; // inherited from NSObject

	authorId: string;

	avatarURL: NSURL;

	displayName: string;

	constructor(o: { authorId: string; displayName: string; avatarURL: NSURL });

	initWithAuthorIdDisplayNameAvatarURL(authorId: string, displayName: string, avatarURL: NSURL): this;
}

declare class ICMHelpCenterArticleSearchResult extends NSObject {
	static alloc(): ICMHelpCenterArticleSearchResult; // inherited from NSObject

	static new(): ICMHelpCenterArticleSearchResult; // inherited from NSObject

	articleId: string;

	matchingSnippet: string;

	summary: string;

	title: string;

	constructor(o: { articleId: string; title: string; summary: string; matchingSnippet: string });

	initWithArticleIdTitleSummaryMatchingSnippet(articleId: string, title: string, summary: string, matchingSnippet: string): this;
}

declare class ICMHelpCenterCollection extends NSObject {
	static alloc(): ICMHelpCenterCollection; // inherited from NSObject

	static new(): ICMHelpCenterCollection; // inherited from NSObject

	articleCount: number;

	collectionCount: number;

	collectionId: string;

	summary: string;

	title: string;

	constructor(o: { collectionId: string; title: string; summary: string; articleCount: number });

	constructor(o: { collectionId: string; title: string; summary: string; articleCount: number; collectionCount: number });

	initWithCollectionIdTitleSummaryArticleCount(collectionId: string, title: string, summary: string, articleCount: number): this;

	initWithCollectionIdTitleSummaryArticleCountCollectionCount(collectionId: string, title: string, summary: string, articleCount: number, collectionCount: number): this;
}

declare class ICMHelpCenterCollectionContent extends NSObject {
	static alloc(): ICMHelpCenterCollectionContent; // inherited from NSObject

	static new(): ICMHelpCenterCollectionContent; // inherited from NSObject

	articleCount: number;

	articles: NSArray<ICMHelpCenterArticle>;

	authors: NSArray<ICMHelpCenterArticleAuthor>;

	collectionId: string;

	collections: NSArray<ICMHelpCenterCollection>;

	summary: string;

	title: string;

	constructor(o: { collectionId: string; title: string; summary: string; articles: NSArray<ICMHelpCenterArticle> | ICMHelpCenterArticle[]; articleCount: number; collections: NSArray<ICMHelpCenterCollection> | ICMHelpCenterCollection[]; authors: NSArray<ICMHelpCenterArticleAuthor> | ICMHelpCenterArticleAuthor[] });

	initWithCollectionIdTitleSummaryArticlesArticleCountCollectionsAuthors(collectionId: string, title: string, summary: string, articles: NSArray<ICMHelpCenterArticle> | ICMHelpCenterArticle[], articleCount: number, collections: NSArray<ICMHelpCenterCollection> | ICMHelpCenterCollection[], authors: NSArray<ICMHelpCenterArticleAuthor> | ICMHelpCenterArticleAuthor[]): this;
}

declare const enum ICMHelpCenterDataError {
	contentNotAvailable = 1,

	networkError = 2,

	somethingWentWrong = 3,

	noUserRegistered = 4,

	noAppRegistered = 5,
}

declare var ICMHelpCenterDataErrorDomain: string;

declare const enum ICMThemeOverride {
	None = 0,

	Light = 1,

	Dark = 2,

	System = 3,
}

declare class ICMUserAttributes extends NSObject {
	static alloc(): ICMUserAttributes; // inherited from NSObject

	static new(): ICMUserAttributes; // inherited from NSObject

	static nullDateAttribute(): Date;

	static nullNumberAttribute(): number;

	static nullStringAttribute(): string;

	companies: NSArray<ICMCompany>;

	customAttributes: NSDictionary<string, any>;

	email: string;

	languageOverride: string;

	name: string;

	phone: string;

	signedUpAt: Date;

	unsubscribedFromEmails: boolean;

	userId: string;

	attributes(): NSDictionary<string, any>;

	hasNonIdentifyingAttributes(): boolean;

	registrationAttributes(): NSDictionary<number, string>;
}

declare class Intercom extends NSObject {
	static alloc(): Intercom; // inherited from NSObject

	static enableLogging(): void;

	static fetchHelpCenterCollectionWithCompletion(collectionId: string, completion: (p1: ICMHelpCenterCollectionContent, p2: NSError) => void): void;

	static fetchHelpCenterCollectionsWithCompletion(completion: (p1: NSArray<ICMHelpCenterCollection>, p2: NSError) => void): void;

	static fetchLoggedInUserAttributes(): ICMUserAttributes;

	static handleIntercomPushNotification(userInfo: NSDictionary<any, any>): void;

	static handleIntercomRichPushNotificationContentWithContentHandler(notificationContent: UNNotificationContent, contentHandler: (p1: UNNotificationContent) => void): void;

	static hideIntercom(): void;

	static isIntercomPushNotification(userInfo: NSDictionary<any, any>): boolean;

	static isUserLoggedIn(): boolean;

	static logEventWithName(name: string): void;

	static logEventWithNameMetaData(name: string, metaData: NSDictionary<any, any>): void;

	static loginUnidentifiedUserWithSuccessFailure(success: () => void, failure: (p1: NSError) => void): void;

	static loginUserWithUserAttributesSuccessFailure(userAttributes: ICMUserAttributes, success: () => void, failure: (p1: NSError) => void): void;

	static logout(): void;

	static new(): Intercom; // inherited from NSObject

	static presentContent(content: IntercomContent): void;

	static presentIntercom(space: Space): void;

	static presentMessageComposer(initialMessage: string): void;

	static searchHelpCenterWithCompletion(searchTerm: string, completion: (p1: NSArray<ICMHelpCenterArticleSearchResult>, p2: NSError) => void): void;

	static setApiKeyForAppId(apiKey: string, appId: string): void;

	static setAuthTokensSuccessFailure(authTokens: NSDictionary<string, string>, success: () => void, failure: (p1: NSError) => void): void;

	static setBottomPadding(bottomPadding: number): void;

	static setDeviceTokenFailure(deviceToken: NSData, failure: (p1: NSError) => void): void;

	static setDeviceTokenSuccessFailure(deviceToken: NSData, success: () => void, failure: (p1: NSError) => void): void;

	static setInAppMessagesVisible(visible: boolean): void;

	static setLauncherVisible(visible: boolean): void;

	static setNeedsStatusBarAppearanceUpdate(): void;

	static setThemeOverride(themeOverride: ICMThemeOverride): void;

	static setUserHash(userHash: string): void;

	static setUserJwt(jwt: string): void;

	static unreadConversationCount(): number;

	static updateUserSuccessFailure(userAttributes: ICMUserAttributes, success: () => void, failure: (p1: NSError) => void): void;
}

declare class IntercomContent extends NSObject implements IntercomContentProtocol {
	static alloc(): IntercomContent; // inherited from NSObject

	static articleWithId(articleId: string): IntercomContent;

	static carouselWithId(carouselId: string): IntercomContent;

	static conversationWithId(conversationId: string): IntercomContent;

	static helpCenterCollectionsWithIds(collectionIds: NSArray<string> | string[]): IntercomContent;

	static new(): IntercomContent; // inherited from NSObject

	static surveyWithId(surveyId: string): IntercomContent;

	static ticketWithId(ticketId: string): IntercomContent;

	contentId: any; // inherited from IntercomContentProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	type: ContentType; // inherited from IntercomContentProtocol

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

interface IntercomContentProtocol extends NSObjectProtocol {
	contentId: any;

	type: ContentType;
}
declare var IntercomContentProtocol: {
	prototype: IntercomContentProtocol;
};

declare var IntercomDidStartNewConversationNotification: string;

declare var IntercomUnreadConversationCountDidChangeNotification: string;

declare var IntercomUnreadTicketCountDidChangeNotification: string;

declare var IntercomWindowDidHideNotification: string;

declare var IntercomWindowDidShowNotification: string;

declare var IntercomWindowWillHideNotification: string;

declare var IntercomWindowWillShowNotification: string;

declare const enum Space {
	home = 0,

	helpCenter = 1,

	messages = 2,

	tickets = 3,
}
