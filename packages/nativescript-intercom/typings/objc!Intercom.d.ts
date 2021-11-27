
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

	constructor(o: { articleId: string; title: string; });

	initWithArticleIdTitle(articleId: string, title: string): this;
}

declare class ICMHelpCenterArticleSearchResult extends NSObject {

	static alloc(): ICMHelpCenterArticleSearchResult; // inherited from NSObject

	static new(): ICMHelpCenterArticleSearchResult; // inherited from NSObject

	articleId: string;

	matchingSnippet: string;

	summary: string;

	title: string;

	constructor(o: { articleId: string; title: string; summary: string; matchingSnippet: string; });

	initWithArticleIdTitleSummaryMatchingSnippet(articleId: string, title: string, summary: string, matchingSnippet: string): this;
}

declare class ICMHelpCenterCollection extends NSObject {

	static alloc(): ICMHelpCenterCollection; // inherited from NSObject

	static new(): ICMHelpCenterCollection; // inherited from NSObject

	collectionId: string;

	summary: string;

	title: string;

	constructor(o: { collectionId: string; title: string; summary: string; });

	initWithCollectionIdTitleSummary(collectionId: string, title: string, summary: string): this;
}

declare class ICMHelpCenterCollectionContent extends NSObject {

	static alloc(): ICMHelpCenterCollectionContent; // inherited from NSObject

	static new(): ICMHelpCenterCollectionContent; // inherited from NSObject

	articles: NSArray<ICMHelpCenterArticle>;

	collectionId: string;

	sections: NSArray<ICMHelpCenterSection>;

	summary: string;

	title: string;

	constructor(o: { collectionId: string; title: string; summary: string; articles: NSArray<ICMHelpCenterArticle> | ICMHelpCenterArticle[]; sections: NSArray<ICMHelpCenterSection> | ICMHelpCenterSection[]; });

	initWithCollectionIdTitleSummaryArticlesSections(collectionId: string, title: string, summary: string, articles: NSArray<ICMHelpCenterArticle> | ICMHelpCenterArticle[], sections: NSArray<ICMHelpCenterSection> | ICMHelpCenterSection[]): this;
}

declare const enum ICMHelpCenterDataError {

	contentNotAvailable = 1,

	networkError = 2,

	somethingWentWrong = 3,

	noUserRegistered = 4,

	noAppRegistered = 5
}

declare var ICMHelpCenterDataErrorDomain: string;

declare class ICMHelpCenterSection extends NSObject {

	static alloc(): ICMHelpCenterSection; // inherited from NSObject

	static new(): ICMHelpCenterSection; // inherited from NSObject

	articles: NSArray<ICMHelpCenterArticle>;

	title: string;

	constructor(o: { title: string; articles: NSArray<ICMHelpCenterArticle> | ICMHelpCenterArticle[]; });

	initWithTitleArticles(title: string, articles: NSArray<ICMHelpCenterArticle> | ICMHelpCenterArticle[]): this;
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
}

declare class Intercom extends NSObject {

	static alloc(): Intercom; // inherited from NSObject

	static enableLogging(): void;

	static fetchHelpCenterCollectionWithCompletion(collectionId: string, completion: (p1: ICMHelpCenterCollectionContent, p2: NSError) => void): void;

	static fetchHelpCenterCollectionsWithCompletion(completion: (p1: NSArray<ICMHelpCenterCollection>, p2: NSError) => void): void;

	static handleIntercomPushNotification(userInfo: NSDictionary<any, any>): void;

	static hideIntercom(): void;

	static isIntercomPushNotification(userInfo: NSDictionary<any, any>): boolean;

	static logEventWithName(name: string): void;

	static logEventWithNameMetaData(name: string, metaData: NSDictionary<any, any>): void;

	static logout(): void;

	static new(): Intercom; // inherited from NSObject

	static presentArticle(articleId: string): void;

	static presentCarousel(carouselId: string): void;

	static presentConversationList(): void;

	static presentHelpCenter(): void;

	static presentHelpCenterCollections(collectionIds: NSArray<string> | string[]): void;

	static presentMessageComposer(initialMessage: string): void;

	static presentMessageComposerWithInitialMessage(message: string): void;

	static presentMessenger(): void;

	static registerUnidentifiedUser(): void;

	static registerUserWithEmail(email: string): void;

	static registerUserWithUserId(userId: string): void;

	static registerUserWithUserIdEmail(userId: string, email: string): void;

	static reset(): void;

	static searchHelpCenterWithCompletion(searchTerm: string, completion: (p1: NSArray<ICMHelpCenterArticleSearchResult>, p2: NSError) => void): void;

	static setApiKeyForAppId(apiKey: string, appId: string): void;

	static setBottomPadding(bottomPadding: number): void;

	static setDeviceToken(deviceToken: NSData): void;

	static setInAppMessagesVisible(visible: boolean): void;

	static setLauncherVisible(visible: boolean): void;

	static setNeedsStatusBarAppearanceUpdate(): void;

	static setUserHash(userHash: string): void;

	static unreadConversationCount(): number;

	static updateUser(userAttributes: ICMUserAttributes): void;
}

declare var IntercomDidStartNewConversationNotification: string;

declare var IntercomHelpCenterDidHideNotification: string;

declare var IntercomHelpCenterDidShowNotification: string;

declare var IntercomHelpCenterWillHideNotification: string;

declare var IntercomHelpCenterWillShowNotification: string;

declare var IntercomUnreadConversationCountDidChangeNotification: string;

declare var IntercomWindowDidHideNotification: string;

declare var IntercomWindowDidShowNotification: string;

declare var IntercomWindowWillHideNotification: string;

declare var IntercomWindowWillShowNotification: string;
