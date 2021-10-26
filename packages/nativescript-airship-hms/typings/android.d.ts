declare module com {
	export module urbanairship {
		export module push {
			export module hms {
				export class AirshipHmsIntegration {
					public static class: java.lang.Class<com.urbanairship.push.hms.AirshipHmsIntegration>;
					public static isAirshipPush(param0: com.huawei.hms.push.RemoteMessage): boolean;
					public constructor();
					public static processMessage(param0: globalAndroid.content.Context, param1: com.huawei.hms.push.RemoteMessage): java.util.concurrent.Future<java.lang.Void>;
					public static processMessageSync(param0: globalAndroid.content.Context, param1: com.huawei.hms.push.RemoteMessage): void;
					public static processNewToken(param0: globalAndroid.content.Context, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module hms {
				export class AirshipHmsMessageService {
					public static class: java.lang.Class<com.urbanairship.push.hms.AirshipHmsMessageService>;
					public onNewToken(param0: string): void;
					public constructor();
					public onMessageReceived(param0: com.huawei.hms.push.RemoteMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module hms {
				export class BuildConfig {
					public static class: java.lang.Class<com.urbanairship.push.hms.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static AIRSHIP_VERSION: string;
					public static SDK_VERSION: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module hms {
				export class HmsPushProvider {
					public static class: java.lang.Class<com.urbanairship.push.hms.HmsPushProvider>;
					public toString(): string;
					public isAvailable(param0: globalAndroid.content.Context): boolean;
					public constructor();
					public getDeliveryType(): string;
					public isSupported(param0: globalAndroid.content.Context): boolean;
					public getPackageVersion(): string;
					public getPlatform(): number;
					public getRegistrationToken(param0: globalAndroid.content.Context): string;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module hms {
				export class HmsTokenCache {
					public static class: java.lang.Class<com.urbanairship.push.hms.HmsTokenCache>;
					public static shared(): com.urbanairship.push.hms.HmsTokenCache;
					public get(param0: globalAndroid.content.Context): string;
					public set(param0: globalAndroid.content.Context, param1: string): void;
				}
			}
		}
	}
}

//Generics information:

