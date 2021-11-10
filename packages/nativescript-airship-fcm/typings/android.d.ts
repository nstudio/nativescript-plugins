declare module com {
	export module urbanairship {
		export module push {
			export module fcm {
				export class AirshipFirebaseIntegration {
					public static class: java.lang.Class<com.urbanairship.push.fcm.AirshipFirebaseIntegration>;
					/** @deprecated */
					public static processNewToken(param0: globalAndroid.content.Context): void;
					public static isAirshipPush(param0: com.google.firebase.messaging.RemoteMessage): boolean;
					public constructor();
					public static processMessage(param0: globalAndroid.content.Context, param1: com.google.firebase.messaging.RemoteMessage): java.util.concurrent.Future<java.lang.Void>;
					public static processMessageSync(param0: globalAndroid.content.Context, param1: com.google.firebase.messaging.RemoteMessage): void;
					public static processNewToken(param0: globalAndroid.content.Context, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module fcm {
				export class AirshipFirebaseMessagingService {
					public static class: java.lang.Class<com.urbanairship.push.fcm.AirshipFirebaseMessagingService>;
					public onNewToken(param0: string): void;
					public constructor();
					public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module fcm {
				export class BuildConfig {
					public static class: java.lang.Class<com.urbanairship.push.fcm.BuildConfig>;
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
			export module fcm {
				export class FcmPushProvider {
					public static class: java.lang.Class<com.urbanairship.push.fcm.FcmPushProvider>;
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

//Generics information:

