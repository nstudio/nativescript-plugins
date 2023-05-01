/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module aptabase {
		export class Aptabase {
			public static class: java.lang.Class<com.aptabase.Aptabase>;
			public trackEvent(param0: string, param1: java.util.Map<string, any>): void;
			public initialize(param0: globalAndroid.content.Context, param1: string): void;
			public static getShared(): com.aptabase.Aptabase;
		}
		export module Aptabase {
			export class Companion {
				public static class: java.lang.Class<com.aptabase.Aptabase.Companion>;
				public getShared(): com.aptabase.Aptabase;
			}
		}
	}
}

declare module com {
	export module aptabase {
		export class BuildConfig {
			public static class: java.lang.Class<com.aptabase.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static BUILD_TYPE: string;
			public constructor();
		}
	}
}

declare module com {
	export module aptabase {
		export class EnvironmentInfo {
			public static class: java.lang.Class<com.aptabase.EnvironmentInfo>;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
			public setOsName(param0: string): void;
			public equals(param0: any): boolean;
			public copy(param0: string, param1: string, param2: string, param3: string, param4: string): com.aptabase.EnvironmentInfo;
			public component1(): string;
			public constructor();
			public component5(): string;
			public getAppBuildNumber(): string;
			public getOsVersion(): string;
			public component3(): string;
			public getLocale(): string;
			public toString(): string;
			public setLocale(param0: string): void;
			public setAppBuildNumber(param0: string): void;
			public getOsName(): string;
			public setOsVersion(param0: string): void;
			public getAppVersion(): string;
			public component2(): string;
			public component4(): string;
			public setAppVersion(param0: string): void;
			public hashCode(): number;
		}
		export module EnvironmentInfo {
			export class Companion {
				public static class: java.lang.Class<com.aptabase.EnvironmentInfo.Companion>;
				public get(param0: globalAndroid.content.Context): com.aptabase.EnvironmentInfo;
			}
		}
	}
}

//Generics information:
