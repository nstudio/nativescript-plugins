declare module com {
	export module fullstory {
		export class FS {
			public static class: java.lang.Class<com.fullstory.FS>;
			public static OMIT_CLASS: string;
			public static OMIT_WITHOUT_CONSENT_CLASS: string;
			public static MASK_CLASS: string;
			public static MASK_WITHOUT_CONSENT_CLASS: string;
			public static UNMASK_CLASS: string;
			public static UNMASK_WITH_CONSENT_CLASS: string;
			public static EXCLUDE_CLASS: string;
			public static EXCLUDE_WITHOUT_CONSENT_CLASS: string;
			public static WATCH_CLASS: string;
			public static WATCH_WITH_CONSENT_CLASS: string;
			public static consent(param0: boolean): void;
			public static excludeWithoutConsent(param0: globalAndroid.view.View): void;
			public static maskWithoutConsent(param0: globalAndroid.view.View): void;
			public static setUserVars(param0: java.util.Map<string,any>): void;
			public static log(param0: com.fullstory.FS.LogLevel, param1: string): void;
			public static getCurrentSessionURL(param0: boolean): string;
			public static identify(param0: string): void;
			public static addPopupMenuClass(param0: any, param1: string): void;
			public static getCurrentSessionURL(): string;
			public static addClass(param0: globalAndroid.view.View, param1: string): void;
			public static unmask(param0: globalAndroid.view.View): void;
			public static removePopupMenuClass(param0: any, param1: string): void;
			public static unmaskWithConsent(param0: globalAndroid.view.View): void;
			public static maskPopupMenuWithoutConsent(param0: any): void;
			public static identify(param0: string, param1: java.util.Map<string,any>): void;
			public static setTagName(param0: globalAndroid.view.View, param1: string): void;
			public static removeAllClasses(param0: globalAndroid.view.View): void;
			public static addClasses(param0: globalAndroid.view.View, param1: java.util.Collection<string>): void;
			public static maskPopupMenu(param0: any): void;
			public static removeClass(param0: globalAndroid.view.View, param1: string): void;
			public static setAttribute(param0: globalAndroid.view.View, param1: string, param2: string): void;
			public static resetIdleTimer(): void;
			public static event(param0: string, param1: java.util.Map<string,any>): void;
			public static removeAttribute(param0: globalAndroid.view.View, param1: string): void;
			public static removeClasses(param0: globalAndroid.view.View, param1: java.util.Collection<string>): void;
			public constructor();
			public static shutdown(): void;
			public static anonymize(): void;
			public static unmaskPopupMenuWithConsent(param0: any): void;
			public static excludePopupMenuWithoutConsent(param0: any): void;
			public static restart(): void;
			public static excludePopupMenu(param0: any): void;
			public static setReadyListener(param0: com.fullstory.FSOnReadyListener): void;
			public static getCurrentSession(): string;
			public static unmaskPopupMenu(param0: any): void;
			public static mask(param0: globalAndroid.view.View): void;
			public static exclude(param0: globalAndroid.view.View): void;
		}
		export module FS {
			export class LogLevel {
				public static class: java.lang.Class<com.fullstory.FS.LogLevel>;
				public static OFF: com.fullstory.FS.LogLevel;
				public static LOG: com.fullstory.FS.LogLevel;
				public static DEBUG: com.fullstory.FS.LogLevel;
				public static INFO: com.fullstory.FS.LogLevel;
				public static WARN: com.fullstory.FS.LogLevel;
				public static ERROR: com.fullstory.FS.LogLevel;
				public static values(): androidNative.Array<com.fullstory.FS.LogLevel>;
				public static valueOf(param0: string): com.fullstory.FS.LogLevel;
			}
		}
	}
}

declare module com {
	export module fullstory {
		export class FSOnReadyListener {
			public static class: java.lang.Class<com.fullstory.FSOnReadyListener>;
			/**
			 * Constructs a new instance of the com.fullstory.FSOnReadyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onReady(param0: com.fullstory.FSSessionData): void;
			});
			public constructor();
			public onReady(param0: com.fullstory.FSSessionData): void;
		}
	}
}

declare module com {
	export module fullstory {
		export class FSSessionData {
			public static class: java.lang.Class<com.fullstory.FSSessionData>;
			public getCurrentSessionURL(): string;
			public constructor();
		}
	}
}

//Generics information:

