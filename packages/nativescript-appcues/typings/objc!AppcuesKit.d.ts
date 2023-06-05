
declare class Appcues extends NSObject {

	static alloc(): Appcues; // inherited from NSObject

	static new(): Appcues; // inherited from NSObject

	static sdkVersion(): string;

	analyticsDelegate: AppcuesAnalyticsDelegate;

	experienceDelegate: AppcuesExperienceDelegate;

	constructor(o: { config: Config; });

	anonymousWithProperties(properties: NSDictionary<string, any>): void;

	debug(): void;

	didHandleURL(url: NSURL): boolean;

	filterAndHandle(URLContexts: NSSet<UIOpenURLContext>): NSSet<UIOpenURLContext>;

	groupWithGroupIDProperties(groupID: string, properties: NSDictionary<string, any>): void;

	identifyWithUserIDProperties(userID: string, properties: NSDictionary<string, any>): void;

	initWithConfig(config: Config): this;

	registerWithAction(action: typeof NSObject): void;

	registerWithTrait(trait: typeof NSObject): void;

	reset(): void;

	screenWithTitleProperties(title: string, properties: NSDictionary<string, any>): void;

	showWithExperienceIDCompletion(experienceID: string, completion: (p1: boolean, p2: NSError) => void): void;

	trackScreens(): void;

	trackWithNameProperties(name: string, properties: NSDictionary<string, any>): void;

	version(): string;
}

declare const enum AppcuesAnalytic {

	Event = 0,

	Screen = 1,

	Identify = 2,

	Group = 3
}

interface AppcuesAnalyticsDelegate {

	didTrackWithAnalyticValuePropertiesIsInternal(analytic: AppcuesAnalytic, value: string, properties: NSDictionary<string, any>, isInternal: boolean): void;
}
declare var AppcuesAnalyticsDelegate: {

	prototype: AppcuesAnalyticsDelegate;
};

interface AppcuesExperienceDelegate {

	canDisplayExperienceWithExperienceID(experienceID: string): boolean;

	experienceDidAppear(): void;

	experienceDidDisappear(): void;

	experienceWillAppear(): void;

	experienceWillDisappear(): void;
}
declare var AppcuesExperienceDelegate: {

	prototype: AppcuesExperienceDelegate;
};

declare var AppcuesKitVersionNumber: number;

declare var AppcuesKitVersionString: interop.Reference<number>;

interface BackdropDecoratingTrait extends ExperienceTrait {

	decorateWithBackdropViewError(backdropView: UIView): boolean;
}
declare var BackdropDecoratingTrait: {

	prototype: BackdropDecoratingTrait;

	type(): string;
};

declare class Config extends NSObject {

	static alloc(): Config; // inherited from NSObject

	static new(): Config; // inherited from NSObject

	constructor(o: { accountID: string; applicationID: string; });

	activityStorageMaxAge(activityStorageMaxAge: number): this;

	activityStorageMaxSize(activityStorageMaxSize: number): this;

	additionalAutoProperties(additionalAutoProperties: NSDictionary<string, any>): this;

	anonymousIDFactory(anonymousIDFactory: () => string): this;

	apiHost(apiHost: NSURL): this;

	enableUniversalLinks(enabled: boolean): this;

	initWithAccountIDApplicationID(accountID: string, applicationID: string): this;

	logging(enabled: boolean): this;

	sessionTimeout(sessionTimeout: number): this;

	urlSession(urlSession: NSURLSession): this;
}

interface ContainerCreatingTrait extends ExperienceTrait {

	createContainerForTargetPageIndexError(stepControllers: NSArray<UIViewController> | UIViewController[], targetPageIndex: number): UIViewController;
}
declare var ContainerCreatingTrait: {

	prototype: ContainerCreatingTrait;

	type(): string;
};

interface ContainerDecoratingTrait extends ExperienceTrait {

	decorateWithContainerControllerError(containerController: UIViewController): boolean;
}
declare var ContainerDecoratingTrait: {

	prototype: ContainerDecoratingTrait;

	type(): string;
};

interface ExperienceAction {

	executeInContextCompletion(appcues: Appcues, completion: () => void): void;

	initWithConfig?(config: NSDictionary<string, any>): ExperienceAction;
}
declare var ExperienceAction: {

	prototype: ExperienceAction;

	type(): string;
};

interface ExperienceContainer {

	lifecycleHandler: ExperienceContainerLifecycleHandler;

	pageMonitor: PageMonitor;

	navigateToAnimated(pageIndex: number, animated: boolean): void;
}
declare var ExperienceContainer: {

	prototype: ExperienceContainer;
};

interface ExperienceContainerLifecycleHandler {

	containerDidAppear(): void;

	containerDidDisappear(): void;

	containerNavigatedFromTo(oldPageIndex: number, newPageIndex: number): void;

	containerWillAppear(): void;

	containerWillDisappear(): void;
}
declare var ExperienceContainerLifecycleHandler: {

	prototype: ExperienceContainerLifecycleHandler;
};

interface ExperienceTrait {

	initWithConfigLevel?(config: NSDictionary<string, any>, level: ExperienceTraitLevel): ExperienceTrait;
}
declare var ExperienceTrait: {

	prototype: ExperienceTrait;

	type(): string;
};

declare const enum ExperienceTraitLevel {

	Experience = 0,

	Group = 1,

	Step = 2
}

declare class PageMonitor extends NSObject {

	static alloc(): PageMonitor; // inherited from NSObject

	static new(): PageMonitor; // inherited from NSObject

	readonly currentPage: number;

	readonly numberOfPages: number;

	constructor(o: { numberOfPages: number; currentPage: number; });

	addObserverWithClosure(closure: (p1: number, p2: number) => void): void;

	initWithNumberOfPagesCurrentPage(numberOfPages: number, currentPage: number): this;

	setWithCurrentPage(currentPage: number): void;
}

interface PresentingTrait extends ExperienceTrait {

	presentWithViewControllerErrorCompletion(viewController: UIViewController, error: interop.Pointer | interop.Reference<NSError>, completion: () => void): boolean;

	removeWithViewControllerCompletion(viewController: UIViewController, completion: () => void): void;
}
declare var PresentingTrait: {

	prototype: PresentingTrait;

	type(): string;
};

interface StepDecoratingTrait extends ExperienceTrait {

	decorateWithStepControllerError(stepController: UIViewController): boolean;
}
declare var StepDecoratingTrait: {

	prototype: StepDecoratingTrait;

	type(): string;
};

interface WrapperCreatingTrait extends ExperienceTrait {

	addBackdropWithBackdropViewTo(backdropView: UIView, wrapperController: UIViewController): void;

	createWrapperWithAroundError(containerController: UIViewController): UIViewController;
}
declare var WrapperCreatingTrait: {

	prototype: WrapperCreatingTrait;

	type(): string;
};
