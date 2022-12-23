
declare class FS extends NSObject {

	static addClassClassName(view: UIView, name: string): void;

	static addClassesClassNames(view: UIView, names: NSArray<string> | string[]): void;

	static alloc(): FS; // inherited from NSObject

	static anonymize(): void;

	static consent(consented: boolean): void;

	static eventProperties(name: string, properties: NSDictionary<string, any>): void;

	static exclude(view: UIView): void;

	static excludeWithoutConsent(view: UIView): void;

	static identify(uid: string): void;

	static identifyUserVars(uid: string, userVars: NSDictionary<string, any>): void;

	static logWithLevelMessage(level: FSEventLogLevel, string: string): void;

	static mask(view: UIView): void;

	static maskWithoutConsent(view: UIView): void;

	static new(): FS; // inherited from NSObject

	static removeAllClasses(view: UIView): void;

	static removeAttributeAttributeName(view: UIView, name: string): void;

	static removeClassClassName(view: UIView, name: string): void;

	static removeClassesClassNames(view: UIView, names: NSArray<string> | string[]): void;

	static resetIdleTimer(): void;

	static restart(): void;

	static setAttributeAttributeNameAttributeValue(view: UIView, name: string, value: string): void;

	static setTagNameTagName(view: UIView, tagName: string): void;

	static setUserVars(userVars: NSDictionary<string, any>): void;

	static shutdown(): void;

	static unmask(view: UIView): void;

	static unmaskWithConsent(view: UIView): void;

	static readonly currentSession: string;

	static readonly currentSessionURL: string;

	static delegate: FSDelegate;
}

interface FSDelegate extends NSObjectProtocol {

	fullstoryDidStartSession?(sessionUrl: string): void;

	fullstoryDidStopSession?(): void;

	fullstoryDidTerminateWithError?(error: NSError): void;
}
declare var FSDelegate: {

	prototype: FSDelegate;
};

declare const enum FSErrorCode {

	Inconsistency = 1,

	Underlying = 2,

	InsufficientResources = 3
}

declare var FSErrorDomain: string;

declare const enum FSEventLogLevel {

	Assert = 0,

	Error = 1,

	Warning = 2,

	Info = 3,

	Debug = 4
}

declare var FSLOG_ASSERT: FSEventLogLevel;

declare var FSLOG_DEBUG: FSEventLogLevel;

declare var FSLOG_ERROR: FSEventLogLevel;

declare var FSLOG_INFO: FSEventLogLevel;

declare var FSLOG_WARNING: FSEventLogLevel;

interface FSScreen extends NSObjectProtocol {

	fullstoryScreenName: string;
}
declare var FSScreen: {

	prototype: FSScreen;
};

declare var FSViewClassExclude: string;

declare var FSViewClassExcludeWithoutConsent: string;

declare var FSViewClassMask: string;

declare var FSViewClassMaskWithoutConsent: string;

declare var FSViewClassUnmask: string;

declare var FSViewClassUnmaskWithConsent: string;

declare var FullStoryVersionNumber: number;

declare var FullStoryVersionString: interop.Reference<number>;
