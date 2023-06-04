/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module aptabase {
		export class Aptabase {
			public static class: java.lang.Class<com.aptabase.Aptabase>;
			public trackEvent(param0: string, param1: java.util.Map<string, any>): void;
			public static getInstance(): com.aptabase.Aptabase;
			public initialize(param0: globalAndroid.content.Context, param1: string, param2: com.aptabase.InitOptions): void;
		}
		export module Aptabase {
			export class Companion {
				public static class: java.lang.Class<com.aptabase.Aptabase.Companion>;
				public getInstance(): com.aptabase.Aptabase;
			}
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

declare module com {
	export module aptabase {
		export class InitOptions {
			public static class: java.lang.Class<com.aptabase.InitOptions>;
			public equals(param0: any): boolean;
			public copy(param0: string): com.aptabase.InitOptions;
			public toString(): string;
			public getHost(): string;
			public setHost(string): void;
			public component1(): string;
			public constructor();
			public constructor(param0: string);
			public hashCode(): number;
		}
	}
}

//Generics information:
