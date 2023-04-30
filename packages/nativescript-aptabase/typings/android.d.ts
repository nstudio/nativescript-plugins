/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module nativescript {
		export module plugins {
			export module aptabase {
				export class Aptabase {
					public static class: java.lang.Class<org.nativescript.plugins.aptabase.Aptabase>;
					public trackEvent(param0: string, param1: java.util.Map<string, any>): void;
					public initialize(param0: string, param1: android.content.Context): void;
				}
				export module Aptabase {
					export class Companion {
						public static class: java.lang.Class<org.nativescript.plugins.aptabase.Aptabase.Companion>;
						public static getShared(): org.nativescript.plugins.aptabase.Aptabase;
					}
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module plugins {
			export module aptabase {
				export class EnvironmentInfo {
					public static class: java.lang.Class<org.nativescript.plugins.aptabase.EnvironmentInfo>;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
					public getAppBuildNumber(): string;
					public component2(): string;
					public component5(): string;
					public component3(): string;
					public getOsName(): string;
					public equals(param0: any): boolean;
					public getLocale(): string;
					public toString(): string;
					public getAppVersion(): string;
					public component1(): string;
					public getOsVersion(): string;
					public component4(): string;
					public copy(param0: string, param1: string, param2: string, param3: string, param4: string): org.nativescript.plugins.aptabase.EnvironmentInfo;
					public hashCode(): number;
				}
				export module EnvironmentInfo {
					export class Companion {
						public static class: java.lang.Class<org.nativescript.plugins.aptabase.EnvironmentInfo.Companion>;
						public get(context: android.content.Context): org.nativescript.plugins.aptabase.EnvironmentInfo;
					}
				}
			}
		}
	}
}

//Generics information:
