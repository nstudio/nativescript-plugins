declare module com {
	export module urbanairship {
		export abstract class AirshipComponent {
			public static class: java.lang.Class<com.urbanairship.AirshipComponent>;
			public onComponentEnableChange(param0: boolean): void;
			public getComponentGroup(): number;
			public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
			public init(): void;
			public onNewConfig(param0: com.urbanairship.json.JsonMap): void;
			public setComponentEnabled(param0: boolean): void;
			public onAirshipDeepLink(param0: globalAndroid.net.Uri): boolean;
			public tearDown(): void;
			public getDataStore(): com.urbanairship.PreferenceDataStore;
			public getContext(): globalAndroid.content.Context;
			public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
			public getJobExecutor(param0: com.urbanairship.job.JobInfo): java.util.concurrent.Executor;
			public isComponentEnabled(): boolean;
			public onAirshipReady(param0: com.urbanairship.UAirship): void;
			public onUrlConfigUpdated(): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class AirshipComponentGroups {
			public static class: java.lang.Class<com.urbanairship.AirshipComponentGroups>;
			/**
			 * Constructs a new instance of the com.urbanairship.AirshipComponentGroups interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static ANALYTICS: number;
			public static PREFERENCE_CENTER: number;
			public static NONE: number;
			public static PUSH: number;
			public static IN_APP: number;
			public static MESSAGE_CENTER: number;
			public static LOCATION: number;
			public static CONTACT: number;
			public static NAMED_USER: number;
			public static CHANNEL: number;
			public static ACTION_AUTOMATION: number;
			public static CHAT: number;
		}
		export module AirshipComponentGroups {
			export class Group {
				public static class: java.lang.Class<com.urbanairship.AirshipComponentGroups.Group>;
				/**
				 * Constructs a new instance of the com.urbanairship.AirshipComponentGroups$Group interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class AirshipConfigOptions {
			public static class: java.lang.Class<com.urbanairship.AirshipConfigOptions>;
			public static FEATURE_IN_APP_AUTOMATION: string;
			public static FEATURE_TAGS_AND_ATTRIBUTES: string;
			public static FEATURE_MESSAGE_CENTER: string;
			public static FEATURE_ANALYTICS: string;
			public static FEATURE_PUSH: string;
			public static FEATURE_CHAT: string;
			public static FEATURE_CONTACTS: string;
			public static FEATURE_LOCATION: string;
			public static FEATURE_NONE: string;
			public static FEATURE_ALL: string;
			public static SITE_US: string;
			public static SITE_EU: string;
			public static ADM_TRANSPORT: string;
			public static FCM_TRANSPORT: string;
			public static HMS_TRANSPORT: string;
			public appKey: string;
			public appSecret: string;
			public deviceUrl: string;
			public analyticsUrl: string;
			public remoteDataUrl: string;
			public walletUrl: string;
			public chatUrl: string;
			public chatSocketUrl: string;
			public appStoreUri: globalAndroid.net.Uri;
			public allowedTransports: java.util.List<string>;
			public customPushProvider: com.urbanairship.push.PushProvider;
			public urlAllowList: java.util.List<string>;
			public urlAllowListScopeJavaScriptInterface: java.util.List<string>;
			public urlAllowListScopeOpenUrl: java.util.List<string>;
			public analyticsEnabled: boolean;
			public backgroundReportingIntervalMS: number;
			public logLevel: number;
			public autoLaunchApplication: boolean;
			public channelCreationDelayEnabled: boolean;
			public channelCaptureEnabled: boolean;
			public dataCollectionOptInEnabled: boolean;
			public enabledFeatures: number;
			public extendedBroadcastsEnabled: boolean;
			public notificationIcon: number;
			public notificationLargeIcon: number;
			public notificationAccentColor: number;
			public notificationChannel: string;
			public inProduction: boolean;
			public requireInitialRemoteConfigEnabled: boolean;
			public validate(): void;
			public static newBuilder(): com.urbanairship.AirshipConfigOptions.Builder;
		}
		export module AirshipConfigOptions {
			export class Builder {
				public static class: java.lang.Class<com.urbanairship.AirshipConfigOptions.Builder>;
				public enabledFeatures: number;
				public setEnabledFeatures(param0: androidNative.Array<number>): com.urbanairship.AirshipConfigOptions.Builder;
				public setSuppressAllowListError(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setAnalyticsEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public applyProperties(param0: globalAndroid.content.Context, param1: java.util.Properties): com.urbanairship.AirshipConfigOptions.Builder;
				public setInProduction(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setSite(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setAppSecret(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setDevelopmentAppSecret(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setChatSocketUrl(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setUrlAllowListScopeJavaScriptInterface(param0: androidNative.Array<string>): com.urbanairship.AirshipConfigOptions.Builder;
				public setNotificationIcon(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public constructor();
				public setCustomPushProvider(param0: com.urbanairship.push.PushProvider): com.urbanairship.AirshipConfigOptions.Builder;
				public applyDefaultProperties(param0: globalAndroid.content.Context): com.urbanairship.AirshipConfigOptions.Builder;
				public setRequireInitialRemoteConfigEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setUrlAllowList(param0: androidNative.Array<string>): com.urbanairship.AirshipConfigOptions.Builder;
				public setBackgroundReportingIntervalMS(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setExtendedBroadcastsEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setProductionAppSecret(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setRemoteDataUrl(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setUrlAllowListScopeOpenUrl(param0: androidNative.Array<string>): com.urbanairship.AirshipConfigOptions.Builder;
				public setAutoLaunchApplication(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setAnalyticsUrl(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setProductionLogLevel(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setLogLevel(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setWalletUrl(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				/** @deprecated */
				public setDataCollectionOptInEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setNotificationLargeIcon(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setChatUrl(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public build(): com.urbanairship.AirshipConfigOptions;
				public setDevelopmentLogLevel(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setAppStoreUri(param0: globalAndroid.net.Uri): com.urbanairship.AirshipConfigOptions.Builder;
				public applyProperties(param0: globalAndroid.content.Context, param1: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setAppKey(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setNotificationChannel(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public detectProvisioningMode(param0: globalAndroid.content.Context): com.urbanairship.AirshipConfigOptions.Builder;
				public setDeviceUrl(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setNotificationAccentColor(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setChannelCaptureEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setChannelCreationDelayEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public applyConfig(param0: globalAndroid.content.Context, param1: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setProductionAppKey(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setAllowedTransports(param0: androidNative.Array<string>): com.urbanairship.AirshipConfigOptions.Builder;
				public setDevelopmentAppKey(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
			}
			export class Site {
				public static class: java.lang.Class<com.urbanairship.AirshipConfigOptions.Site>;
				/**
				 * Constructs a new instance of the com.urbanairship.AirshipConfigOptions$Site interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class AirshipExecutors {
			public static class: java.lang.Class<com.urbanairship.AirshipExecutors>;
			public static THREAD_POOL_EXECUTOR: java.util.concurrent.ExecutorService;
			public static newSerialExecutor(): java.util.concurrent.Executor;
			public constructor();
		}
	}
}

declare module com {
	export module urbanairship {
		export class AirshipLoopers {
			public static class: java.lang.Class<com.urbanairship.AirshipLoopers>;
			public static getBackgroundLooper(): globalAndroid.os.Looper;
			public constructor();
		}
	}
}

declare module com {
	export module urbanairship {
		export class AirshipVersionInfo {
			public static class: java.lang.Class<com.urbanairship.AirshipVersionInfo>;
			/**
			 * Constructs a new instance of the com.urbanairship.AirshipVersionInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAirshipVersion(): string;
				getPackageVersion(): string;
			});
			public constructor();
			public getPackageVersion(): string;
			public getAirshipVersion(): string;
		}
	}
}

declare module com {
	export module urbanairship {
		export class ApplicationMetrics extends com.urbanairship.AirshipComponent {
			public static class: java.lang.Class<com.urbanairship.ApplicationMetrics>;
			public getAppVersionUpdated(): boolean;
			public tearDown(): void;
			/** @deprecated */
			public getLastOpenTimeMillis(): number;
			public init(): void;
			public getCurrentAppVersion(): number;
		}
	}
}

declare module com {
	export module urbanairship {
		export class Autopilot extends com.urbanairship.UAirship.OnReadyCallback {
			public static class: java.lang.Class<com.urbanairship.Autopilot>;
			public static AUTOPILOT_MANIFEST_KEY: string;
			public allowEarlyTakeOff(param0: globalAndroid.content.Context): boolean;
			public isReady(param0: globalAndroid.content.Context): boolean;
			public static automaticTakeOff(param0: globalAndroid.app.Application): void;
			public constructor();
			public static automaticTakeOff(param0: globalAndroid.content.Context): void;
			public createAirshipConfigOptions(param0: globalAndroid.content.Context): com.urbanairship.AirshipConfigOptions;
			public onAirshipReady(param0: com.urbanairship.UAirship): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class BuildConfig {
			public static class: java.lang.Class<com.urbanairship.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static BUILD_TYPE: string;
			public static AIRSHIP_VERSION: string;
			public static SDK_VERSION: string;
			public constructor();
		}
	}
}

declare module com {
	export module urbanairship {
		export class Cancelable {
			public static class: java.lang.Class<com.urbanairship.Cancelable>;
			/**
			 * Constructs a new instance of the com.urbanairship.Cancelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				cancel(param0: boolean): boolean;
				cancel(): boolean;
				isDone(): boolean;
				isCancelled(): boolean;
			});
			public constructor();
			public cancel(param0: boolean): boolean;
			public cancel(): boolean;
			public isCancelled(): boolean;
			public isDone(): boolean;
		}
	}
}

declare module com {
	export module urbanairship {
		export class CancelableOperation extends com.urbanairship.Cancelable {
			public static class: java.lang.Class<com.urbanairship.CancelableOperation>;
			public cancel(param0: boolean): boolean;
			public cancel(): boolean;
			public addOnCancel(param0: com.urbanairship.Cancelable): com.urbanairship.CancelableOperation;
			public onCancel(): void;
			public onRun(): void;
			public constructor(param0: globalAndroid.os.Looper);
			public run(): void;
			public isCancelled(): boolean;
			public constructor();
			public isDone(): boolean;
			public addOnRun(param0: java.lang.Runnable): com.urbanairship.CancelableOperation;
			public getHandler(): globalAndroid.os.Handler;
		}
	}
}

declare module com {
	export module urbanairship {
		export class ChannelCapture extends com.urbanairship.AirshipComponent {
			public static class: java.lang.Class<com.urbanairship.ChannelCapture>;
			public isEnabled(): boolean;
			public tearDown(): void;
			public init(): void;
			public setEnabled(param0: boolean): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class DeferredPlatformProvider extends com.urbanairship.config.PlatformProvider {
			public static class: java.lang.Class<com.urbanairship.DeferredPlatformProvider>;
			public getPlatform(): number;
			public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.base.Supplier<com.urbanairship.PushProviders>);
		}
	}
}

declare module com {
	export module urbanairship {
		export class Fonts {
			public static class: java.lang.Class<com.urbanairship.Fonts>;
			public addFontFamily(param0: string, param1: globalAndroid.graphics.Typeface): void;
			public getFontFamily(param0: string): globalAndroid.graphics.Typeface;
			public static shared(param0: globalAndroid.content.Context): com.urbanairship.Fonts;
		}
	}
}

declare module com {
	export module urbanairship {
		export class Logger {
			public static class: java.lang.Class<com.urbanairship.Logger>;
			public static getLogLevel(): number;
			public static verbose(param0: java.lang.Throwable): void;
			public static warn(param0: java.lang.Throwable): void;
			public static addListener(param0: com.urbanairship.LoggerListener): void;
			public static verbose(param0: string, param1: androidNative.Array<any>): void;
			public static debug(param0: string, param1: androidNative.Array<any>): void;
			public static warn(param0: string, param1: androidNative.Array<any>): void;
			public static warn(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
			public static error(param0: string, param1: androidNative.Array<any>): void;
			public static info(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
			public static error(param0: java.lang.Throwable): void;
			public static disableDefaultLogger(): void;
			public static info(param0: string, param1: androidNative.Array<any>): void;
			public static removeListener(param0: com.urbanairship.LoggerListener): void;
			public static debug(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
			public static error(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
			public static setLogLevel(param0: number): void;
			public static setTag(param0: string): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class LoggerListener {
			public static class: java.lang.Class<com.urbanairship.LoggerListener>;
			/**
			 * Constructs a new instance of the com.urbanairship.LoggerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onLog(param0: number, param1: java.lang.Throwable, param2: string): void;
			});
			public constructor();
			public onLog(param0: number, param1: java.lang.Throwable, param2: string): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class LoggingCore {
			public static class: java.lang.Class<com.urbanairship.LoggingCore>;
			public setTag(param0: string): void;
			public setDefaultLoggerEnabled(param0: boolean): void;
			public addListener(param0: com.urbanairship.LoggerListener): void;
			public getLogLevel(): number;
			public constructor(param0: number, param1: string);
			public removeListener(param0: com.urbanairship.LoggerListener): void;
			public setLogLevel(param0: number): void;
			public log(param0: number, param1: java.lang.Throwable, param2: string, param3: androidNative.Array<any>): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class MessageCenterDataManager extends com.urbanairship.util.DataManager {
			public static class: java.lang.Class<com.urbanairship.MessageCenterDataManager>;
			public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
			public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
			public constructor(param0: globalAndroid.content.Context, param1: string);
			public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
			public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
		}
		export module MessageCenterDataManager {
			export class MessageTable {
				public static class: java.lang.Class<com.urbanairship.MessageCenterDataManager.MessageTable>;
				/**
				 * Constructs a new instance of the com.urbanairship.MessageCenterDataManager$MessageTable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static COLUMN_NAME_MESSAGE_ID: string;
				public static COLUMN_NAME_MESSAGE_URL: string;
				public static COLUMN_NAME_UNREAD_ORIG: string;
				public static COLUMN_NAME_TITLE: string;
				public static COLUMN_NAME_RAW_MESSAGE_OBJECT: string;
				public static TABLE_NAME: string;
				public static COLUMN_NAME_MESSAGE_READ_URL: string;
				public static COLUMN_NAME_DELETED: string;
				public static COLUMN_NAME_EXTRA: string;
				public static COLUMN_NAME_KEY: string;
				public static COLUMN_NAME_EXPIRATION_TIMESTAMP: string;
				public static COLUMN_NAME_MESSAGE_BODY_URL: string;
				public static COLUMN_NAME_TIMESTAMP: string;
				public static COLUMN_NAME_UNREAD: string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class PendingResult<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.urbanairship.PendingResult<any>>;
			public cancel(param0: boolean): boolean;
			public cancel(): boolean;
			public setResult(param0: T): void;
			public addResultCallback(param0: com.urbanairship.ResultCallback<T>): com.urbanairship.PendingResult<T>;
			public get(param0: number, param1: java.util.concurrent.TimeUnit): T;
			public addCancelable(param0: com.urbanairship.Cancelable): com.urbanairship.PendingResult<T>;
			public isCancelled(): boolean;
			public constructor();
			public isDone(): boolean;
			public get(): T;
			public getResult(): T;
			public addResultCallback(param0: globalAndroid.os.Looper, param1: com.urbanairship.ResultCallback<T>): com.urbanairship.PendingResult<T>;
		}
	}
}

declare module com {
	export module urbanairship {
		export class Predicate<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.urbanairship.Predicate<any>>;
			/**
			 * Constructs a new instance of the com.urbanairship.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				apply(param0: T): boolean;
			});
			public constructor();
			public apply(param0: T): boolean;
		}
	}
}

declare module com {
	export module urbanairship {
		export class PreferenceData {
			public static class: java.lang.Class<com.urbanairship.PreferenceData>;
			public _id: string;
			public value: string;
			public constructor(param0: string, param1: string);
			public getKey(): string;
			public getValue(): string;
		}
	}
}

declare module com {
	export module urbanairship {
		export abstract class PreferenceDataDao {
			public static class: java.lang.Class<com.urbanairship.PreferenceDataDao>;
			public getPreferences(): java.util.List<com.urbanairship.PreferenceData>;
			public upsert(param0: com.urbanairship.PreferenceData): void;
			public deleteAll(): void;
			public queryKeys(): java.util.List<string>;
			public queryValue(param0: string): com.urbanairship.PreferenceData;
			public constructor();
			public delete(param0: string): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class PreferenceDataDao_Impl extends com.urbanairship.PreferenceDataDao {
			public static class: java.lang.Class<com.urbanairship.PreferenceDataDao_Impl>;
			public static getRequiredConverters(): java.util.List<java.lang.Class<any>>;
			public getPreferences(): java.util.List<com.urbanairship.PreferenceData>;
			public upsert(param0: com.urbanairship.PreferenceData): void;
			public deleteAll(): void;
			public constructor(param0: androidx.room.RoomDatabase);
			public queryKeys(): java.util.List<string>;
			public queryValue(param0: string): com.urbanairship.PreferenceData;
			public constructor();
			public delete(param0: string): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export abstract class PreferenceDataDatabase {
			public static class: java.lang.Class<com.urbanairship.PreferenceDataDatabase>;
			public static createDatabase(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions): com.urbanairship.PreferenceDataDatabase;
			public getDao(): com.urbanairship.PreferenceDataDao;
			public static createInMemoryDatabase(param0: globalAndroid.content.Context): com.urbanairship.PreferenceDataDatabase;
			public constructor();
			public exists(param0: globalAndroid.content.Context): boolean;
		}
	}
}

declare module com {
	export module urbanairship {
		export class PreferenceDataDatabase_Impl extends com.urbanairship.PreferenceDataDatabase {
			public static class: java.lang.Class<com.urbanairship.PreferenceDataDatabase_Impl>;
			public getRequiredTypeConverters(): java.util.Map<java.lang.Class<any>,java.util.List<java.lang.Class<any>>>;
			public getDao(): com.urbanairship.PreferenceDataDao;
			public createOpenHelper(param0: androidx.room.DatabaseConfiguration): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public createInvalidationTracker(): androidx.room.InvalidationTracker;
			public constructor();
			public clearAllTables(): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class PreferenceDataStore {
			public static class: java.lang.Class<com.urbanairship.PreferenceDataStore>;
			public getInt(param0: string, param1: number): number;
			public getJsonValue(param0: string): com.urbanairship.json.JsonValue;
			public put(param0: string, param1: com.urbanairship.json.JsonValue): void;
			public getLong(param0: string, param1: number): number;
			public put(param0: string, param1: number): void;
			public put(param0: string, param1: boolean): void;
			public removeListener(param0: com.urbanairship.PreferenceDataStore.PreferenceChangeListener): void;
			public addListener(param0: com.urbanairship.PreferenceDataStore.PreferenceChangeListener): void;
			public static loadDataStore(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions): com.urbanairship.PreferenceDataStore;
			public tearDown(): void;
			public remove(param0: string): void;
			public putSync(param0: string, param1: string): boolean;
			public static inMemoryStore(param0: globalAndroid.content.Context): com.urbanairship.PreferenceDataStore;
			public getBoolean(param0: string, param1: boolean): boolean;
			public getString(param0: string, param1: string): string;
			public put(param0: string, param1: com.urbanairship.json.JsonSerializable): void;
			public isSet(param0: string): boolean;
			public put(param0: string, param1: string): void;
		}
		export module PreferenceDataStore {
			export class Preference {
				public static class: java.lang.Class<com.urbanairship.PreferenceDataStore.Preference>;
			}
			export class PreferenceChangeListener {
				public static class: java.lang.Class<com.urbanairship.PreferenceDataStore.PreferenceChangeListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.PreferenceDataStore$PreferenceChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceChange(param0: string): void;
				});
				public constructor();
				public onPreferenceChange(param0: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class PrivacyManager {
			public static class: java.lang.Class<com.urbanairship.PrivacyManager>;
			public static FEATURE_IN_APP_AUTOMATION: number;
			public static FEATURE_MESSAGE_CENTER: number;
			public static FEATURE_PUSH: number;
			public static FEATURE_CHAT: number;
			public static FEATURE_ANALYTICS: number;
			public static FEATURE_TAGS_AND_ATTRIBUTES: number;
			public static FEATURE_CONTACTS: number;
			public static FEATURE_LOCATION: number;
			public static FEATURE_NONE: number;
			public static FEATURE_ALL: number;
			public isAnyEnabled(param0: androidNative.Array<number>): boolean;
			public enable(param0: androidNative.Array<number>): void;
			public isAnyFeatureEnabled(): boolean;
			public setEnabledFeatures(param0: androidNative.Array<number>): void;
			public addListener(param0: com.urbanairship.PrivacyManager.Listener): void;
			public removeListener(param0: com.urbanairship.PrivacyManager.Listener): void;
			public isEnabled(param0: androidNative.Array<number>): boolean;
			public getEnabledFeatures(): number;
			public disable(param0: androidNative.Array<number>): void;
			public constructor(param0: com.urbanairship.PreferenceDataStore, param1: number);
		}
		export module PrivacyManager {
			export class Feature {
				public static class: java.lang.Class<com.urbanairship.PrivacyManager.Feature>;
				/**
				 * Constructs a new instance of the com.urbanairship.PrivacyManager$Feature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export class Listener {
				public static class: java.lang.Class<com.urbanairship.PrivacyManager.Listener>;
				/**
				 * Constructs a new instance of the com.urbanairship.PrivacyManager$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onEnabledFeaturesChanged(): void;
				});
				public constructor();
				public onEnabledFeaturesChanged(): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class PushProviders {
			public static class: java.lang.Class<com.urbanairship.PushProviders>;
			public getAvailableProviders(): java.util.List<com.urbanairship.push.PushProvider>;
			public constructor(param0: com.urbanairship.AirshipConfigOptions);
			public getProvider(param0: number, param1: string): com.urbanairship.push.PushProvider;
			public getBestProvider(param0: number): com.urbanairship.push.PushProvider;
		}
		export module PushProviders {
			export class LazyLoader extends com.urbanairship.base.Supplier<com.urbanairship.PushProviders> {
				public static class: java.lang.Class<com.urbanairship.PushProviders.LazyLoader>;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions);
				public get(): any;
				public get(): com.urbanairship.PushProviders;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class ResultCallback<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.urbanairship.ResultCallback<any>>;
			/**
			 * Constructs a new instance of the com.urbanairship.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onResult(param0: T): void;
			});
			public constructor();
			public onResult(param0: T): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class UAirship {
			public static class: java.lang.Class<com.urbanairship.UAirship>;
			public static ACTION_AIRSHIP_READY: string;
			public static EXTRA_CHANNEL_ID_KEY: string;
			public static EXTRA_PAYLOAD_VERSION_KEY: string;
			public static EXTRA_APP_KEY_KEY: string;
			public static EXTRA_AIRSHIP_DEEP_LINK_SCHEME: string;
			public static AMAZON_PLATFORM: number;
			public static ANDROID_PLATFORM: number;
			public static UNKNOWN_PLATFORM: number;
			public static LOG_TAKE_OFF_STACKTRACE: boolean;
			public setLocaleOverride(param0: java.util.Locale): void;
			public static getPackageName(): string;
			public getComponents(): java.util.List<com.urbanairship.AirshipComponent>;
			public getPushManager(): com.urbanairship.push.PushManager;
			public static shared(param0: com.urbanairship.UAirship.OnReadyCallback): com.urbanairship.Cancelable;
			public static getVersion(): string;
			public getChannel(): com.urbanairship.channel.AirshipChannel;
			public getComponent(param0: java.lang.Class): com.urbanairship.AirshipComponent;
			public static takeOff(param0: globalAndroid.app.Application, param1: com.urbanairship.AirshipConfigOptions, param2: com.urbanairship.UAirship.OnReadyCallback): void;
			public getRuntimeConfig(): com.urbanairship.config.AirshipRuntimeConfig;
			public static land(): void;
			public setImageLoader(param0: com.urbanairship.images.ImageLoader): void;
			public getLocaleManager(): com.urbanairship.locale.LocaleManager;
			public getActionRegistry(): com.urbanairship.actions.ActionRegistry;
			public static getAppName(): string;
			public getRemoteData(): com.urbanairship.remotedata.RemoteData;
			public deepLink(param0: string): boolean;
			public static shared(param0: globalAndroid.os.Looper, param1: com.urbanairship.UAirship.OnReadyCallback): com.urbanairship.Cancelable;
			public static getPackageInfo(): globalAndroid.content.pm.PackageInfo;
			public getUrlAllowList(): com.urbanairship.js.UrlAllowList;
			public getContact(): com.urbanairship.contacts.Contact;
			public static shared(): com.urbanairship.UAirship;
			public getLocationClient(): com.urbanairship.modules.location.AirshipLocationClient;
			public getApplicationMetrics(): com.urbanairship.ApplicationMetrics;
			public static takeOff(param0: globalAndroid.app.Application, param1: com.urbanairship.AirshipConfigOptions): void;
			public getImageLoader(): com.urbanairship.images.ImageLoader;
			public static getPackageManager(): globalAndroid.content.pm.PackageManager;
			public static waitForTakeOff(param0: number): com.urbanairship.UAirship;
			public getAirshipConfigOptions(): com.urbanairship.AirshipConfigOptions;
			/** @deprecated */
			public getNamedUser(): com.urbanairship.channel.NamedUser;
			public static isMainProcess(): boolean;
			public static isFlying(): boolean;
			public getLocale(): java.util.Locale;
			public getChannelCapture(): com.urbanairship.ChannelCapture;
			public setDeepLinkListener(param0: com.urbanairship.actions.DeepLinkListener): void;
			public getPrivacyManager(): com.urbanairship.PrivacyManager;
			public static getApplicationContext(): globalAndroid.content.Context;
			public static getAppInfo(): globalAndroid.content.pm.ApplicationInfo;
			public getAccengageNotificationHandler(): com.urbanairship.modules.accengage.AccengageNotificationHandler;
			public static takeOff(param0: globalAndroid.app.Application, param1: com.urbanairship.UAirship.OnReadyCallback): void;
			public static isTakingOff(): boolean;
			public getDeepLinkListener(): com.urbanairship.actions.DeepLinkListener;
			public static takeOff(param0: globalAndroid.app.Application): void;
			public getAnalytics(): com.urbanairship.analytics.Analytics;
			public requireComponent(param0: java.lang.Class): com.urbanairship.AirshipComponent;
			/** @deprecated */
			public isDataCollectionEnabled(): boolean;
			public getPlatformType(): number;
			/** @deprecated */
			public setDataCollectionEnabled(param0: boolean): void;
			public static getAppIcon(): number;
			public static getAppVersion(): number;
		}
		export module UAirship {
			export class OnReadyCallback {
				public static class: java.lang.Class<com.urbanairship.UAirship.OnReadyCallback>;
				/**
				 * Constructs a new instance of the com.urbanairship.UAirship$OnReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAirshipReady(param0: com.urbanairship.UAirship): void;
				});
				public constructor();
				public onAirshipReady(param0: com.urbanairship.UAirship): void;
			}
			export class Platform {
				public static class: java.lang.Class<com.urbanairship.UAirship.Platform>;
				/**
				 * Constructs a new instance of the com.urbanairship.UAirship$Platform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class UrbanAirshipProvider {
			public static class: java.lang.Class<com.urbanairship.UrbanAirshipProvider>;
			public static QUERY_PARAMETER_LIMIT: string;
			public onCreate(): boolean;
			public bulkInsert(param0: globalAndroid.net.Uri, param1: androidNative.Array<globalAndroid.content.ContentValues>): number;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
			public static getRichPushContentUri(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
			public constructor();
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
			public shutdown(): void;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public static getPreferencesContentUri(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
			public getType(param0: globalAndroid.net.Uri): string;
			public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
			public static getAuthorityString(param0: globalAndroid.content.Context): string;
		}
		export module UrbanAirshipProvider {
			export class DatabaseModel {
				public static class: java.lang.Class<com.urbanairship.UrbanAirshipProvider.DatabaseModel>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class UrbanAirshipResolver {
			public static class: java.lang.Class<com.urbanairship.UrbanAirshipResolver>;
			public bulkInsert(param0: globalAndroid.net.Uri, param1: androidNative.Array<globalAndroid.content.ContentValues>): number;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
			public unregisterContentObserver(param0: globalAndroid.database.ContentObserver): void;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: androidNative.Array<string>): number;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public registerContentObserver(param0: globalAndroid.net.Uri, param1: boolean, param2: globalAndroid.database.ContentObserver): void;
			public constructor(param0: globalAndroid.content.Context);
			public query(param0: globalAndroid.net.Uri, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
			public notifyChange(param0: globalAndroid.net.Uri, param1: globalAndroid.database.ContentObserver): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export abstract class Action {
				public static class: java.lang.Class<com.urbanairship.actions.Action>;
				public static SITUATION_MANUAL_INVOCATION: number;
				public static SITUATION_PUSH_RECEIVED: number;
				public static SITUATION_PUSH_OPENED: number;
				public static SITUATION_WEB_VIEW_INVOCATION: number;
				public static SITUATION_FOREGROUND_NOTIFICATION_ACTION_BUTTON: number;
				public static SITUATION_BACKGROUND_NOTIFICATION_ACTION_BUTTON: number;
				public static SITUATION_AUTOMATION: number;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public onFinish(param0: com.urbanairship.actions.ActionArguments, param1: com.urbanairship.actions.ActionResult): void;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public onStart(param0: com.urbanairship.actions.ActionArguments): void;
				public constructor();
			}
			export module Action {
				export class Situation {
					public static class: java.lang.Class<com.urbanairship.actions.Action.Situation>;
					/**
					 * Constructs a new instance of the com.urbanairship.actions.Action$Situation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionArguments {
				public static class: java.lang.Class<com.urbanairship.actions.ActionArguments>;
				public static RICH_PUSH_ID_METADATA: string;
				public static PUSH_MESSAGE_METADATA: string;
				public static REMOTE_INPUT_METADATA: string;
				public static ACTION_SCHEDULE_ID_METADATA: string;
				public static REGISTRY_ACTION_NAME_METADATA: string;
				public constructor(param0: number, param1: com.urbanairship.actions.ActionValue, param2: globalAndroid.os.Bundle);
				public getValue(): com.urbanairship.actions.ActionValue;
				public toString(): string;
				public getMetadata(): globalAndroid.os.Bundle;
				public getSituation(): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionCompletionCallback {
				public static class: java.lang.Class<com.urbanairship.actions.ActionCompletionCallback>;
				/**
				 * Constructs a new instance of the com.urbanairship.actions.ActionCompletionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFinish(param0: com.urbanairship.actions.ActionArguments, param1: com.urbanairship.actions.ActionResult): void;
				});
				public constructor();
				public onFinish(param0: com.urbanairship.actions.ActionArguments, param1: com.urbanairship.actions.ActionResult): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionEntryParser {
				public static class: java.lang.Class<com.urbanairship.actions.ActionEntryParser>;
				public static fromXml(param0: globalAndroid.content.Context, param1: number): java.util.List<com.urbanairship.actions.ActionRegistry.Entry>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionRegistry {
				public static class: java.lang.Class<com.urbanairship.actions.ActionRegistry>;
				public registerDefaultActions(param0: globalAndroid.content.Context): void;
				public unregisterAction(param0: string): void;
				public registerAction(param0: java.lang.Class<any>, param1: androidNative.Array<string>): com.urbanairship.actions.ActionRegistry.Entry;
				public registerActions(param0: globalAndroid.content.Context, param1: number): void;
				public registerAction(param0: com.urbanairship.actions.Action, param1: androidNative.Array<string>): com.urbanairship.actions.ActionRegistry.Entry;
				public getEntry(param0: string): com.urbanairship.actions.ActionRegistry.Entry;
				public getEntries(): java.util.Set<com.urbanairship.actions.ActionRegistry.Entry>;
				public constructor();
			}
			export module ActionRegistry {
				export class Entry {
					public static class: java.lang.Class<com.urbanairship.actions.ActionRegistry.Entry>;
					public setPredicate(param0: com.urbanairship.actions.ActionRegistry.Predicate): void;
					public getNames(): java.util.List<string>;
					public toString(): string;
					public setSituationOverride(param0: number, param1: com.urbanairship.actions.Action): void;
					public getPredicate(): com.urbanairship.actions.ActionRegistry.Predicate;
					public getActionForSituation(param0: number): com.urbanairship.actions.Action;
					public getDefaultAction(): com.urbanairship.actions.Action;
					public setDefaultAction(param0: com.urbanairship.actions.Action): void;
				}
				export class Predicate {
					public static class: java.lang.Class<com.urbanairship.actions.ActionRegistry.Predicate>;
					/**
					 * Constructs a new instance of the com.urbanairship.actions.ActionRegistry$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					});
					public constructor();
					public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionResult {
				public static class: java.lang.Class<com.urbanairship.actions.ActionResult>;
				public static STATUS_COMPLETED: number;
				public static STATUS_REJECTED_ARGUMENTS: number;
				public static STATUS_ACTION_NOT_FOUND: number;
				public static STATUS_EXECUTION_ERROR: number;
				public getException(): java.lang.Exception;
				public static newErrorResult(param0: java.lang.Exception): com.urbanairship.actions.ActionResult;
				public getValue(): com.urbanairship.actions.ActionValue;
				public static newEmptyResult(): com.urbanairship.actions.ActionResult;
				public getStatus(): number;
				public static newResult(param0: com.urbanairship.actions.ActionValue): com.urbanairship.actions.ActionResult;
			}
			export module ActionResult {
				export class Status {
					public static class: java.lang.Class<com.urbanairship.actions.ActionResult.Status>;
					/**
					 * Constructs a new instance of the com.urbanairship.actions.ActionResult$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionRunRequest {
				public static class: java.lang.Class<com.urbanairship.actions.ActionRunRequest>;
				public setSituation(param0: number): com.urbanairship.actions.ActionRunRequest;
				public runSync(): com.urbanairship.actions.ActionResult;
				public setMetadata(param0: globalAndroid.os.Bundle): com.urbanairship.actions.ActionRunRequest;
				public run(param0: com.urbanairship.actions.ActionCompletionCallback): void;
				public static createRequest(param0: com.urbanairship.actions.Action): com.urbanairship.actions.ActionRunRequest;
				public run(param0: globalAndroid.os.Looper, param1: com.urbanairship.actions.ActionCompletionCallback): void;
				public setValue(param0: com.urbanairship.actions.ActionValue): com.urbanairship.actions.ActionRunRequest;
				public static createRequest(param0: string): com.urbanairship.actions.ActionRunRequest;
				public run(): void;
				public setExecutor(param0: java.util.concurrent.Executor): com.urbanairship.actions.ActionRunRequest;
				public setValue(param0: any): com.urbanairship.actions.ActionRunRequest;
				public static createRequest(param0: string, param1: com.urbanairship.actions.ActionRegistry): com.urbanairship.actions.ActionRunRequest;
				public constructor(param0: com.urbanairship.actions.Action);
			}
			export module ActionRunRequest {
				export abstract class ActionRunnable {
					public static class: java.lang.Class<com.urbanairship.actions.ActionRunRequest.ActionRunnable>;
					public constructor(param0: com.urbanairship.actions.ActionRunRequest, param1: com.urbanairship.actions.ActionArguments);
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionRunRequestExtender {
				public static class: java.lang.Class<com.urbanairship.actions.ActionRunRequestExtender>;
				/**
				 * Constructs a new instance of the com.urbanairship.actions.ActionRunRequestExtender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					extend(param0: com.urbanairship.actions.ActionRunRequest): com.urbanairship.actions.ActionRunRequest;
				});
				public constructor();
				public extend(param0: com.urbanairship.actions.ActionRunRequest): com.urbanairship.actions.ActionRunRequest;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionRunRequestFactory {
				public static class: java.lang.Class<com.urbanairship.actions.ActionRunRequestFactory>;
				public createActionRequest(param0: string): com.urbanairship.actions.ActionRunRequest;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionValue extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.actions.ActionValue>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.actions.ActionValue>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getString(): string;
				public constructor(param0: com.urbanairship.json.JsonValue);
				public getDouble(param0: number): number;
				public static wrap(param0: com.urbanairship.json.JsonSerializable): com.urbanairship.actions.ActionValue;
				public getMap(): com.urbanairship.json.JsonMap;
				public static wrap(param0: number): com.urbanairship.actions.ActionValue;
				public toString(): string;
				public constructor();
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getList(): com.urbanairship.json.JsonList;
				public static wrap(param0: boolean): com.urbanairship.actions.ActionValue;
				public static wrap(param0: string): com.urbanairship.actions.ActionValue;
				public getBoolean(param0: boolean): boolean;
				public hashCode(): number;
				public getLong(param0: number): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getString(param0: string): string;
				public static wrap(param0: any): com.urbanairship.actions.ActionValue;
				public getInt(param0: number): number;
				public isNull(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionValueException {
				public static class: java.lang.Class<com.urbanairship.actions.ActionValueException>;
				public constructor(param0: string, param1: java.lang.Exception);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class AddCustomEventAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.AddCustomEventAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
			export module AddCustomEventAction {
				export class AddCustomEventActionPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
					public static class: java.lang.Class<com.urbanairship.actions.AddCustomEventAction.AddCustomEventActionPredicate>;
					public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ClipboardAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.ClipboardAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static LABEL_KEY: string;
				public static TEXT_KEY: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class DeepLinkAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.DeepLinkAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class DeepLinkListener {
				public static class: java.lang.Class<com.urbanairship.actions.DeepLinkListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.actions.DeepLinkListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDeepLink(param0: string): boolean;
				});
				public constructor();
				public onDeepLink(param0: string): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class EnableFeatureAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.EnableFeatureAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static FEATURE_USER_NOTIFICATIONS: string;
				public static FEATURE_LOCATION: string;
				public static FEATURE_BACKGROUND_LOCATION: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor(param0: com.urbanairship.util.PermissionsRequester, param1: com.urbanairship.base.Supplier<com.urbanairship.UAirship>);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class FetchDeviceInfoAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.FetchDeviceInfoAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static CHANNEL_ID_KEY: string;
				public static NAMED_USER_ID_KEY: string;
				public static TAGS_KEY: string;
				public static PUSH_OPT_IN_KEY: string;
				public static LOCATION_ENABLED_KEY: string;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
			export module FetchDeviceInfoAction {
				export class FetchDeviceInfoPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
					public static class: java.lang.Class<com.urbanairship.actions.FetchDeviceInfoAction.FetchDeviceInfoPredicate>;
					public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class OpenExternalUrlAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.OpenExternalUrlAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class RateAppAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.RateAppAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static SHOW_LINK_PROMPT_KEY: string;
				public static TITLE_KEY: string;
				public static BODY_KEY: string;
				public static SHOW_RATE_APP_INTENT_ACTION: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class RateAppActivity extends com.urbanairship.activity.ThemedActivity {
				public static class: java.lang.Class<com.urbanairship.actions.RateAppActivity>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onCloseButtonClick(param0: globalAndroid.view.View): void;
				public onPause(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class SetAttributesAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.SetAttributesAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
			export module SetAttributesAction {
				export class SetAttributesPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
					public static class: java.lang.Class<com.urbanairship.actions.SetAttributesAction.SetAttributesPredicate>;
					public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ShareAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.ShareAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ToastAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.ToastAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static TEXT_KEY: string;
				public static LENGTH_KEY: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class WalletAction extends com.urbanairship.actions.OpenExternalUrlAction {
				public static class: java.lang.Class<com.urbanairship.actions.WalletAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class WalletLoadingActivity extends com.urbanairship.activity.ThemedActivity {
				public static class: java.lang.Class<com.urbanairship.actions.WalletLoadingActivity>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
			export module WalletLoadingActivity {
				export class Result {
					public static class: java.lang.Class<com.urbanairship.actions.WalletLoadingActivity.Result>;
					public constructor(param0: globalAndroid.net.Uri, param1: java.lang.Exception);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export module tags {
				export class AddTagsAction extends com.urbanairship.actions.tags.BaseTagsAction {
					public static class: java.lang.Class<com.urbanairship.actions.tags.AddTagsAction>;
					public static DEFAULT_REGISTRY_NAME: string;
					public static DEFAULT_REGISTRY_SHORT_NAME: string;
					public constructor();
				}
				export module AddTagsAction {
					export class AddTagsPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
						public static class: java.lang.Class<com.urbanairship.actions.tags.AddTagsAction.AddTagsPredicate>;
						public constructor();
						public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export module tags {
				export abstract class BaseTagsAction extends com.urbanairship.actions.Action {
					public static class: java.lang.Class<com.urbanairship.actions.tags.BaseTagsAction>;
					public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
					public getChannel(): com.urbanairship.channel.AirshipChannel;
					public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export module tags {
				export class RemoveTagsAction extends com.urbanairship.actions.tags.BaseTagsAction {
					public static class: java.lang.Class<com.urbanairship.actions.tags.RemoveTagsAction>;
					public static DEFAULT_REGISTRY_NAME: string;
					public static DEFAULT_REGISTRY_SHORT_NAME: string;
					public constructor();
				}
				export module RemoveTagsAction {
					export class RemoveTagsPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
						public static class: java.lang.Class<com.urbanairship.actions.tags.RemoveTagsAction.RemoveTagsPredicate>;
						public constructor();
						public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module activity {
			export class AppCompatDelegateWrapper {
				public static class: java.lang.Class<com.urbanairship.activity.AppCompatDelegateWrapper>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module activity {
			export abstract class ThemedActivity {
				public static class: java.lang.Class<com.urbanairship.activity.ThemedActivity>;
				public invalidateOptionsMenu(): void;
				public onPostCreate(param0: globalAndroid.os.Bundle): void;
				public setContentView(param0: number): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor();
				public setContentView(param0: globalAndroid.view.View): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onPostResume(): void;
				public onTitleChanged(param0: string, param1: number): void;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public hideActionBar(): void;
				public onStop(): void;
				public onDestroy(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AccountEventTemplate {
				public static class: java.lang.Class<com.urbanairship.analytics.AccountEventTemplate>;
				public static ACCOUNT_EVENT_TEMPLATE: string;
				public static REGISTERED_ACCOUNT_EVENT: string;
				public static LOGGED_IN: string;
				public static LOGGED_OUT: string;
				public setValue(param0: string): com.urbanairship.analytics.AccountEventTemplate;
				public setCategory(param0: string): com.urbanairship.analytics.AccountEventTemplate;
				public createEvent(): com.urbanairship.analytics.CustomEvent;
				public setValue(param0: java.math.BigDecimal): com.urbanairship.analytics.AccountEventTemplate;
				public setType(param0: string): com.urbanairship.analytics.AccountEventTemplate;
				public setValue(param0: number): com.urbanairship.analytics.AccountEventTemplate;
				public setTransactionId(param0: string): com.urbanairship.analytics.AccountEventTemplate;
				public static newRegisteredTemplate(): com.urbanairship.analytics.AccountEventTemplate;
				public setUserId(param0: string): com.urbanairship.analytics.AccountEventTemplate;
				public static newLoggedInTemplate(): com.urbanairship.analytics.AccountEventTemplate;
				public static newLoggedOutTemplate(): com.urbanairship.analytics.AccountEventTemplate;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class Analytics extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.analytics.Analytics>;
				public static EXTENSION_CORDOVA: string;
				public static EXTENSION_FLUTTER: string;
				public static EXTENSION_REACT_NATIVE: string;
				public static EXTENSION_UNITY: string;
				public static EXTENSION_XAMARIN: string;
				public static EXTENSION_TITANIUM: string;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public getComponentGroup(): number;
				public trackScreen(param0: string): void;
				public registerSDKExtension(param0: string, param1: string): void;
				/** @deprecated */
				public setEnabled(param0: boolean): void;
				public uploadEvents(): void;
				public addHeaderDelegate(param0: com.urbanairship.analytics.Analytics.AnalyticsHeaderDelegate): void;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public getAssociatedIdentifiers(): com.urbanairship.analytics.AssociatedIdentifiers;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.locale.LocaleManager);
				public addEventListener(param0: com.urbanairship.analytics.Analytics.EventListener): void;
				public init(): void;
				public isAppInForeground(): boolean;
				public tearDown(): void;
				public addEvent(param0: com.urbanairship.analytics.Event): void;
				public setConversionMetadata(param0: string): void;
				public removeAnalyticsListener(param0: com.urbanairship.analytics.AnalyticsListener): void;
				public getConversionSendId(): string;
				public getConversionMetadata(): string;
				public isEnabled(): boolean;
				public addAnalyticsListener(param0: com.urbanairship.analytics.AnalyticsListener): void;
				public editAssociatedIdentifiers(): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
				public setConversionSendId(param0: string): void;
				public getSessionId(): string;
			}
			export module Analytics {
				export class AnalyticsHeaderDelegate {
					public static class: java.lang.Class<com.urbanairship.analytics.Analytics.AnalyticsHeaderDelegate>;
					/**
					 * Constructs a new instance of the com.urbanairship.analytics.Analytics$AnalyticsHeaderDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateAnalyticsHeaders(): java.util.Map<string,string>;
					});
					public constructor();
					public onCreateAnalyticsHeaders(): java.util.Map<string,string>;
				}
				export class EventListener {
					public static class: java.lang.Class<com.urbanairship.analytics.Analytics.EventListener>;
					/**
					 * Constructs a new instance of the com.urbanairship.analytics.Analytics$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEventAdded(param0: com.urbanairship.analytics.Event, param1: string): void;
					});
					public constructor();
					public onEventAdded(param0: com.urbanairship.analytics.Event, param1: string): void;
				}
				export class ExtensionName {
					public static class: java.lang.Class<com.urbanairship.analytics.Analytics.ExtensionName>;
					/**
					 * Constructs a new instance of the com.urbanairship.analytics.Analytics$ExtensionName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AnalyticsListener {
				public static class: java.lang.Class<com.urbanairship.analytics.AnalyticsListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.analytics.AnalyticsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onScreenTracked(param0: string): void;
					onCustomEventAdded(param0: com.urbanairship.analytics.CustomEvent): void;
					onRegionEventAdded(param0: com.urbanairship.analytics.location.RegionEvent): void;
				});
				public constructor();
				public onCustomEventAdded(param0: com.urbanairship.analytics.CustomEvent): void;
				public onScreenTracked(param0: string): void;
				public onRegionEventAdded(param0: com.urbanairship.analytics.location.RegionEvent): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AppBackgroundEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.AppBackgroundEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AppForegroundEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.AppForegroundEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AssociateIdentifiersEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.AssociateIdentifiersEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public isValid(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AssociatedIdentifiers extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.analytics.AssociatedIdentifiers>;
				public static MAX_CHARACTER_COUNT: number;
				public static MAX_IDS: number;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getIds(): java.util.Map<string,string>;
				public getAdvertisingId(): string;
				public isLimitAdTrackingEnabled(): boolean;
				public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.analytics.AssociatedIdentifiers;
			}
			export module AssociatedIdentifiers {
				export abstract class Editor {
					public static class: java.lang.Class<com.urbanairship.analytics.AssociatedIdentifiers.Editor>;
					public removeIdentifier(param0: string): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public constructor();
					public addIdentifier(param0: string, param1: string): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public clear(): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public removeAdvertisingId(): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public setAdvertisingId(param0: string, param1: boolean): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public apply(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class CustomEvent extends com.urbanairship.analytics.Event implements com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.analytics.CustomEvent>;
				public static INTERACTION_ID: string;
				public static INTERACTION_TYPE: string;
				public static EVENT_NAME: string;
				public static EVENT_VALUE: string;
				public static TRANSACTION_ID: string;
				public static MCRAP_TRANSACTION_TYPE: string;
				public static CONVERSION_SEND_ID: string;
				public static CONVERSION_METADATA: string;
				public static LAST_RECEIVED_METADATA: string;
				public static TEMPLATE_TYPE: string;
				public static PROPERTIES: string;
				public static MAX_CHARACTER_LENGTH: number;
				public static MAX_TOTAL_PROPERTIES_SIZE: number;
				public getProperties(): com.urbanairship.json.JsonMap;
				public getType(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getInteractionType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public getEventValue(): java.math.BigDecimal;
				public getTransactionId(): string;
				public getInteractionId(): string;
				public static newBuilder(param0: string): com.urbanairship.analytics.CustomEvent.Builder;
				public isValid(): boolean;
				public getEventName(): string;
				public track(): com.urbanairship.analytics.CustomEvent;
			}
			export module CustomEvent {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.analytics.CustomEvent.Builder>;
					public setEventValue(param0: string): com.urbanairship.analytics.CustomEvent.Builder;
					public constructor(param0: string);
					public setMessageCenterInteraction(param0: string): com.urbanairship.analytics.CustomEvent.Builder;
					public setInteraction(param0: string, param1: string): com.urbanairship.analytics.CustomEvent.Builder;
					public addProperty(param0: string, param1: string): com.urbanairship.analytics.CustomEvent.Builder;
					public setEventValue(param0: java.math.BigDecimal): com.urbanairship.analytics.CustomEvent.Builder;
					public build(): com.urbanairship.analytics.CustomEvent;
					public setTransactionId(param0: string): com.urbanairship.analytics.CustomEvent.Builder;
					public addProperty(param0: string, param1: number): com.urbanairship.analytics.CustomEvent.Builder;
					public setAttribution(param0: com.urbanairship.push.PushMessage): com.urbanairship.analytics.CustomEvent.Builder;
					public setEventValue(param0: number): com.urbanairship.analytics.CustomEvent.Builder;
					public addProperty(param0: string, param1: boolean): com.urbanairship.analytics.CustomEvent.Builder;
					public addProperty(param0: string, param1: com.urbanairship.json.JsonSerializable): com.urbanairship.analytics.CustomEvent.Builder;
					public setProperties(param0: com.urbanairship.json.JsonMap): com.urbanairship.analytics.CustomEvent.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export abstract class Event {
				public static class: java.lang.Class<com.urbanairship.analytics.Event>;
				public static LOW_PRIORITY: number;
				public static NORMAL_PRIORITY: number;
				public static HIGH_PRIORITY: number;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public getCarrier(): string;
				public getTimezone(): number;
				public getPriority(): number;
				public getEventId(): string;
				public isValid(): boolean;
				public getConnectionType(): string;
				public static millisecondsToSecondsString(param0: number): string;
				public constructor();
				public getTime(): string;
				public constructor(param0: number);
				public createEventPayload(param0: string): string;
				public isDaylightSavingsTime(): boolean;
				public getConnectionSubType(): string;
			}
			export module Event {
				export class Priority {
					public static class: java.lang.Class<com.urbanairship.analytics.Event.Priority>;
					/**
					 * Constructs a new instance of the com.urbanairship.analytics.Event$Priority interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class InstallAttributionEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.InstallAttributionEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public constructor(param0: number);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class InstallReceiver {
				public static class: java.lang.Class<com.urbanairship.analytics.InstallReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class InteractiveNotificationEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.InteractiveNotificationEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public constructor(param0: com.urbanairship.push.NotificationInfo, param1: com.urbanairship.push.NotificationActionButtonInfo);
				public constructor(param0: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class MediaEventTemplate {
				public static class: java.lang.Class<com.urbanairship.analytics.MediaEventTemplate>;
				public static MEDIA_EVENT_TEMPLATE: string;
				public static BROWSED_CONTENT_EVENT: string;
				public static CONSUMED_CONTENT_EVENT: string;
				public static STARRED_CONTENT_EVENT: string;
				public static SHARED_CONTENT_EVENT: string;
				public static newSharedTemplate(param0: string, param1: string): com.urbanairship.analytics.MediaEventTemplate;
				public static newConsumedTemplate(): com.urbanairship.analytics.MediaEventTemplate;
				public static newConsumedTemplate(param0: java.math.BigDecimal): com.urbanairship.analytics.MediaEventTemplate;
				public setDescription(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public static newSharedTemplate(): com.urbanairship.analytics.MediaEventTemplate;
				public setCategory(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public setAuthor(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public createEvent(): com.urbanairship.analytics.CustomEvent;
				public static newConsumedTemplate(param0: number): com.urbanairship.analytics.MediaEventTemplate;
				public static newConsumedTemplate(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public setType(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public static newStarredTemplate(): com.urbanairship.analytics.MediaEventTemplate;
				public setId(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public static newBrowsedTemplate(): com.urbanairship.analytics.MediaEventTemplate;
				public setPublishedDate(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public setFeature(param0: boolean): com.urbanairship.analytics.MediaEventTemplate;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class PushArrivedEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.PushArrivedEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public constructor(param0: com.urbanairship.push.PushMessage, param1: com.urbanairship.push.notifications.NotificationChannelCompat);
				public constructor(param0: com.urbanairship.push.PushMessage);
				public constructor(param0: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class RetailEventTemplate {
				public static class: java.lang.Class<com.urbanairship.analytics.RetailEventTemplate>;
				public static RETAIL_EVENT_TEMPLATE: string;
				public static BROWSED_PRODUCT_EVENT: string;
				public static ADDED_TO_CART_EVENT: string;
				public static STARRED_PRODUCT_EVENT: string;
				public static SHARED_PRODUCT_EVENT: string;
				public static PURCHASED_EVENT: string;
				public static WISHLIST_EVENT: string;
				public setDescription(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setCategory(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setId(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setTransactionId(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setValue(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setValue(param0: java.math.BigDecimal): com.urbanairship.analytics.RetailEventTemplate;
				public static newBrowsedTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public static newPurchasedTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public createEvent(): com.urbanairship.analytics.CustomEvent;
				public static newWishlishTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public static newStarredProductTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public static newSharedProductTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public static newWishlishTemplate(param0: string, param1: string): com.urbanairship.analytics.RetailEventTemplate;
				public static newAddedToCartTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public setValue(param0: number): com.urbanairship.analytics.RetailEventTemplate;
				public setBrand(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public static newSharedProductTemplate(param0: string, param1: string): com.urbanairship.analytics.RetailEventTemplate;
				public setNewItem(param0: boolean): com.urbanairship.analytics.RetailEventTemplate;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class ScreenTrackingEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.ScreenTrackingEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public isValid(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class SearchEventTemplate {
				public static class: java.lang.Class<com.urbanairship.analytics.SearchEventTemplate>;
				public setId(param0: string): com.urbanairship.analytics.SearchEventTemplate;
				public createEvent(): com.urbanairship.analytics.CustomEvent;
				public setQuery(param0: string): com.urbanairship.analytics.SearchEventTemplate;
				public setValue(param0: java.math.BigDecimal): com.urbanairship.analytics.SearchEventTemplate;
				public setValue(param0: number): com.urbanairship.analytics.SearchEventTemplate;
				public static newSearchTemplate(): com.urbanairship.analytics.SearchEventTemplate;
				public setCategory(param0: string): com.urbanairship.analytics.SearchEventTemplate;
				public setTotalResults(param0: number): com.urbanairship.analytics.SearchEventTemplate;
				public setValue(param0: string): com.urbanairship.analytics.SearchEventTemplate;
				public setType(param0: string): com.urbanairship.analytics.SearchEventTemplate;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export abstract class AnalyticsDatabase {
					public static class: java.lang.Class<com.urbanairship.analytics.data.AnalyticsDatabase>;
					public static createDatabase(param0: globalAndroid.content.Context, param1: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.analytics.data.AnalyticsDatabase;
					public exists(param0: globalAndroid.content.Context): boolean;
					public constructor();
					public static createInMemoryDatabase(param0: globalAndroid.content.Context): com.urbanairship.analytics.data.AnalyticsDatabase;
					public getEventDao(): com.urbanairship.analytics.data.EventDao;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class AnalyticsDatabase_Impl extends com.urbanairship.analytics.data.AnalyticsDatabase {
					public static class: java.lang.Class<com.urbanairship.analytics.data.AnalyticsDatabase_Impl>;
					public createOpenHelper(param0: androidx.room.DatabaseConfiguration): androidx.sqlite.db.SupportSQLiteOpenHelper;
					public createInvalidationTracker(): androidx.room.InvalidationTracker;
					public constructor();
					public getRequiredTypeConverters(): java.util.Map<java.lang.Class<any>,java.util.List<java.lang.Class<any>>>;
					public clearAllTables(): void;
					public getEventDao(): com.urbanairship.analytics.data.EventDao;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventApiClient {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventApiClient>;
					public constructor(param0: com.urbanairship.config.AirshipRuntimeConfig);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export abstract class EventDao {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventDao>;
					public insert(param0: com.urbanairship.analytics.data.EventEntity): void;
					public constructor();
					public getBatch(param0: number): java.util.List<com.urbanairship.analytics.data.EventEntity.EventIdAndData>;
					public delete(param0: androidNative.Array<com.urbanairship.analytics.data.EventEntity>): void;
					public deleteAll(): void;
					public count(): number;
					public deleteBatch(param0: java.util.List<com.urbanairship.analytics.data.EventEntity.EventIdAndData>): void;
					public trimDatabase(param0: number): void;
					public databaseSize(): number;
					public get(): java.util.List<com.urbanairship.analytics.data.EventEntity>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventDao_Impl extends com.urbanairship.analytics.data.EventDao {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventDao_Impl>;
					public insert(param0: com.urbanairship.analytics.data.EventEntity): void;
					public constructor();
					public delete(param0: androidNative.Array<com.urbanairship.analytics.data.EventEntity>): void;
					public deleteAll(): void;
					public getBatch(param0: number): java.util.List<com.urbanairship.analytics.data.EventEntity.EventIdAndData>;
					public static getRequiredConverters(): java.util.List<java.lang.Class<any>>;
					public count(): number;
					public deleteBatch(param0: java.util.List<com.urbanairship.analytics.data.EventEntity.EventIdAndData>): void;
					public trimDatabase(param0: number): void;
					public databaseSize(): number;
					public constructor(param0: androidx.room.RoomDatabase);
					public get(): java.util.List<com.urbanairship.analytics.data.EventEntity>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventEntity {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventEntity>;
					public id: number;
					public type: string;
					public eventId: string;
					public time: string;
					public data: com.urbanairship.json.JsonValue;
					public sessionId: string;
					public eventSize: number;
					public equals(param0: any): boolean;
					public contentEquals(param0: any): boolean;
					public toString(): string;
					public static create(param0: com.urbanairship.analytics.Event, param1: string): com.urbanairship.analytics.data.EventEntity;
					public hashCode(): number;
				}
				export module EventEntity {
					export class EventIdAndData {
						public static class: java.lang.Class<com.urbanairship.analytics.data.EventEntity.EventIdAndData>;
						public id: number;
						public eventId: string;
						public data: com.urbanairship.json.JsonValue;
						public constructor(param0: number, param1: string, param2: com.urbanairship.json.JsonValue);
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventManager {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventManager>;
					public static ACTION_SEND: string;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig);
					public deleteEvents(): void;
					public addEvent(param0: com.urbanairship.analytics.Event, param1: string): void;
					public scheduleEventUpload(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public uploadEvents(param0: java.util.Map<string,string>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventResponse {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventResponse>;
					public constructor(param0: java.util.Map<string,java.util.List<string>>);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module location {
				export class CircularRegion {
					public static class: java.lang.Class<com.urbanairship.analytics.location.CircularRegion>;
					public static MAX_RADIUS: number;
					public getLatitude(): number;
					public getLongitude(): number;
					public constructor(param0: number, param1: number, param2: number);
					public isValid(): boolean;
					public getRadius(): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module location {
				export class LocationEvent extends com.urbanairship.analytics.Event {
					public static class: java.lang.Class<com.urbanairship.analytics.location.LocationEvent>;
					public static UPDATE_TYPE_CONTINUOUS: number;
					public static UPDATE_TYPE_SINGLE: number;
					public getPriority(): number;
					public constructor(param0: globalAndroid.location.Location, param1: number, param2: number, param3: number, param4: boolean);
					public constructor();
					public getEventData(): com.urbanairship.json.JsonMap;
					public getType(): string;
					public constructor(param0: number);
				}
				export module LocationEvent {
					export class UpdateType {
						public static class: java.lang.Class<com.urbanairship.analytics.location.LocationEvent.UpdateType>;
						/**
						 * Constructs a new instance of the com.urbanairship.analytics.location.LocationEvent$UpdateType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module location {
				export class ProximityRegion {
					public static class: java.lang.Class<com.urbanairship.analytics.location.ProximityRegion>;
					public getProximityId(): string;
					public getMinor(): number;
					public getMajor(): number;
					public getLongitude(): java.lang.Double;
					public getRssi(): java.lang.Integer;
					public setRssi(param0: java.lang.Integer): void;
					public isValid(): boolean;
					public setCoordinates(param0: java.lang.Double, param1: java.lang.Double): void;
					public getLatitude(): java.lang.Double;
					public constructor(param0: string, param1: number, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module location {
				export class RegionEvent extends com.urbanairship.analytics.Event implements com.urbanairship.json.JsonSerializable {
					public static class: java.lang.Class<com.urbanairship.analytics.location.RegionEvent>;
					public static TYPE: string;
					public static REGION_ID: string;
					public static BOUNDARY_EVENT_ENTER: number;
					public static BOUNDARY_EVENT_EXIT: number;
					public static MAX_CHARACTER_LENGTH: number;
					public static MAX_LATITUDE: number;
					public static MIN_LATITUDE: number;
					public static MAX_LONGITUDE: number;
					public static MIN_LONGITUDE: number;
					public getPriority(): number;
					public getBoundaryEvent(): number;
					public getEventData(): com.urbanairship.json.JsonMap;
					public isValid(): boolean;
					public static newBuilder(): com.urbanairship.analytics.location.RegionEvent.Builder;
					public getType(): string;
					public toJsonValue(): com.urbanairship.json.JsonValue;
				}
				export module RegionEvent {
					export class Boundary {
						public static class: java.lang.Class<com.urbanairship.analytics.location.RegionEvent.Boundary>;
						/**
						 * Constructs a new instance of the com.urbanairship.analytics.location.RegionEvent$Boundary interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.analytics.location.RegionEvent.Builder>;
						public setBoundaryEvent(param0: number): com.urbanairship.analytics.location.RegionEvent.Builder;
						public build(): com.urbanairship.analytics.location.RegionEvent;
						public setCircularRegion(param0: com.urbanairship.analytics.location.CircularRegion): com.urbanairship.analytics.location.RegionEvent.Builder;
						public setProximityRegion(param0: com.urbanairship.analytics.location.ProximityRegion): com.urbanairship.analytics.location.RegionEvent.Builder;
						public setRegionId(param0: string): com.urbanairship.analytics.location.RegionEvent.Builder;
						public setSource(param0: string): com.urbanairship.analytics.location.RegionEvent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class ActivityListener {
				public static class: java.lang.Class<com.urbanairship.app.ActivityListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.app.ActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class ActivityMonitor {
				public static class: java.lang.Class<com.urbanairship.app.ActivityMonitor>;
				/**
				 * Constructs a new instance of the com.urbanairship.app.ActivityMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					addActivityListener(param0: com.urbanairship.app.ActivityListener): void;
					removeActivityListener(param0: com.urbanairship.app.ActivityListener): void;
					addApplicationListener(param0: com.urbanairship.app.ApplicationListener): void;
					removeApplicationListener(param0: com.urbanairship.app.ApplicationListener): void;
					isAppForegrounded(): boolean;
					getResumedActivities(): java.util.List<globalAndroid.app.Activity>;
					getResumedActivities(param0: com.urbanairship.Predicate<globalAndroid.app.Activity>): java.util.List<globalAndroid.app.Activity>;
				});
				public constructor();
				public addActivityListener(param0: com.urbanairship.app.ActivityListener): void;
				public getResumedActivities(): java.util.List<globalAndroid.app.Activity>;
				public getResumedActivities(param0: com.urbanairship.Predicate<globalAndroid.app.Activity>): java.util.List<globalAndroid.app.Activity>;
				public removeApplicationListener(param0: com.urbanairship.app.ApplicationListener): void;
				public removeActivityListener(param0: com.urbanairship.app.ActivityListener): void;
				public addApplicationListener(param0: com.urbanairship.app.ApplicationListener): void;
				public isAppForegrounded(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class ApplicationListener {
				public static class: java.lang.Class<com.urbanairship.app.ApplicationListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.app.ApplicationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onForeground(param0: number): void;
					onBackground(param0: number): void;
				});
				public constructor();
				public onBackground(param0: number): void;
				public onForeground(param0: number): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class FilteredActivityListener extends com.urbanairship.app.ActivityListener {
				public static class: java.lang.Class<com.urbanairship.app.FilteredActivityListener>;
				public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityResumed(param0: globalAndroid.app.Activity): void;
				public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				public onActivityStarted(param0: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityStopped(param0: globalAndroid.app.Activity): void;
				public constructor(param0: com.urbanairship.app.ActivityListener, param1: com.urbanairship.Predicate<globalAndroid.app.Activity>);
				public onActivityPaused(param0: globalAndroid.app.Activity): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class ForwardingActivityListener extends com.urbanairship.app.ActivityListener {
				public static class: java.lang.Class<com.urbanairship.app.ForwardingActivityListener>;
				public removeListener(param0: com.urbanairship.app.ActivityListener): void;
				public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityResumed(param0: globalAndroid.app.Activity): void;
				public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				public onActivityStarted(param0: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityStopped(param0: globalAndroid.app.Activity): void;
				public addListener(param0: com.urbanairship.app.ActivityListener): void;
				public onActivityPaused(param0: globalAndroid.app.Activity): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class ForwardingApplicationListener extends com.urbanairship.app.ApplicationListener {
				public static class: java.lang.Class<com.urbanairship.app.ForwardingApplicationListener>;
				public addListener(param0: com.urbanairship.app.ApplicationListener): void;
				public onBackground(param0: number): void;
				public removeListener(param0: com.urbanairship.app.ApplicationListener): void;
				public onForeground(param0: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class GlobalActivityMonitor extends com.urbanairship.app.ActivityMonitor {
				public static class: java.lang.Class<com.urbanairship.app.GlobalActivityMonitor>;
				public addActivityListener(param0: com.urbanairship.app.ActivityListener): void;
				public getResumedActivities(): java.util.List<globalAndroid.app.Activity>;
				public static shared(param0: globalAndroid.content.Context): com.urbanairship.app.GlobalActivityMonitor;
				public getResumedActivities(param0: com.urbanairship.Predicate<globalAndroid.app.Activity>): java.util.List<globalAndroid.app.Activity>;
				public removeApplicationListener(param0: com.urbanairship.app.ApplicationListener): void;
				public removeActivityListener(param0: com.urbanairship.app.ActivityListener): void;
				public addApplicationListener(param0: com.urbanairship.app.ApplicationListener): void;
				public isAppForegrounded(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class SimpleActivityListener extends com.urbanairship.app.ActivityListener {
				public static class: java.lang.Class<com.urbanairship.app.SimpleActivityListener>;
				public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityResumed(param0: globalAndroid.app.Activity): void;
				public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				public onActivityStarted(param0: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityStopped(param0: globalAndroid.app.Activity): void;
				public onActivityPaused(param0: globalAndroid.app.Activity): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module app {
			export class SimpleApplicationListener extends com.urbanairship.app.ApplicationListener {
				public static class: java.lang.Class<com.urbanairship.app.SimpleApplicationListener>;
				public onBackground(param0: number): void;
				public onForeground(param0: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module base {
			export class Supplier<V>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.base.Supplier<any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.base.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(): V;
				});
				public constructor();
				public get(): V;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class AirshipChannel extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.channel.AirshipChannel>;
				public static ACTION_CHANNEL_CREATED: string;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public getComponentGroup(): number;
				public addTagGroupListener(param0: com.urbanairship.channel.TagGroupListener): void;
				public onComponentEnableChange(param0: boolean): void;
				public addAttributeListener(param0: com.urbanairship.channel.AttributeListener): void;
				public getId(): string;
				public onAirshipReady(param0: com.urbanairship.UAirship): void;
				public setTags(param0: java.util.Set<string>): void;
				public editSubscriptionLists(): com.urbanairship.channel.SubscriptionListEditor;
				public editTagGroups(): com.urbanairship.channel.TagGroupsEditor;
				public removeChannelRegistrationPayloadExtender(param0: com.urbanairship.channel.AirshipChannel.ChannelRegistrationPayloadExtender): void;
				public getChannelId(): com.urbanairship.PendingResult<string>;
				public updateRegistration(): void;
				public getTags(): java.util.Set<string>;
				public init(): void;
				public getChannelTagRegistrationEnabled(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.locale.LocaleManager);
				public getPendingTagUpdates(): java.util.List<com.urbanairship.channel.TagGroupsMutation>;
				public addSubscriptionListListener(param0: com.urbanairship.channel.SubscriptionListListener): void;
				public addChannelRegistrationPayloadExtender(param0: com.urbanairship.channel.AirshipChannel.ChannelRegistrationPayloadExtender): void;
				public getPendingSubscriptionListUpdates(): java.util.List<com.urbanairship.channel.SubscriptionListMutation>;
				public setChannelTagRegistrationEnabled(param0: boolean): void;
				public removeChannelListener(param0: com.urbanairship.channel.AirshipChannelListener): void;
				public editTags(): com.urbanairship.channel.TagEditor;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public addChannelListener(param0: com.urbanairship.channel.AirshipChannelListener): void;
				public editAttributes(): com.urbanairship.channel.AttributeEditor;
				public getPendingAttributeUpdates(): java.util.List<com.urbanairship.channel.AttributeMutation>;
				public removeSubscriptionListListener(param0: com.urbanairship.channel.SubscriptionListListener): void;
				public getSubscriptionLists(param0: boolean): com.urbanairship.PendingResult<java.util.Set<string>>;
				public enableChannelCreation(): void;
				public onUrlConfigUpdated(): void;
			}
			export module AirshipChannel {
				export class ChannelRegistrationPayloadExtender {
					public static class: java.lang.Class<com.urbanairship.channel.AirshipChannel.ChannelRegistrationPayloadExtender>;
					/**
					 * Constructs a new instance of the com.urbanairship.channel.AirshipChannel$ChannelRegistrationPayloadExtender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extend(param0: com.urbanairship.channel.ChannelRegistrationPayload.Builder): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					});
					public constructor();
					public extend(param0: com.urbanairship.channel.ChannelRegistrationPayload.Builder): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class AirshipChannelListener {
				public static class: java.lang.Class<com.urbanairship.channel.AirshipChannelListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.channel.AirshipChannelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onChannelCreated(param0: string): void;
					onChannelUpdated(param0: string): void;
				});
				public constructor();
				public onChannelCreated(param0: string): void;
				public onChannelUpdated(param0: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class AttributeApiClient {
				public static class: java.lang.Class<com.urbanairship.channel.AttributeApiClient>;
				public static namedUserClient(param0: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.channel.AttributeApiClient;
				public static channelClient(param0: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.channel.AttributeApiClient;
				public static contactClient(param0: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.channel.AttributeApiClient;
			}
			export module AttributeApiClient {
				export class UrlFactory {
					public static class: java.lang.Class<com.urbanairship.channel.AttributeApiClient.UrlFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.channel.AttributeApiClient$UrlFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createUrl(param0: com.urbanairship.config.AirshipRuntimeConfig, param1: string): globalAndroid.net.Uri;
					});
					public constructor();
					public createUrl(param0: com.urbanairship.config.AirshipRuntimeConfig, param1: string): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export abstract class AttributeEditor {
				public static class: java.lang.Class<com.urbanairship.channel.AttributeEditor>;
				public apply(): void;
				public removeAttribute(param0: string): com.urbanairship.channel.AttributeEditor;
				public setAttribute(param0: string, param1: string): com.urbanairship.channel.AttributeEditor;
				public onApply(param0: java.util.List<com.urbanairship.channel.AttributeMutation>): void;
				public constructor(param0: com.urbanairship.util.Clock);
				public setAttribute(param0: string, param1: number): com.urbanairship.channel.AttributeEditor;
				public setAttribute(param0: string, param1: java.util.Date): com.urbanairship.channel.AttributeEditor;
			}
			export module AttributeEditor {
				export class PartialAttributeMutation {
					public static class: java.lang.Class<com.urbanairship.channel.AttributeEditor.PartialAttributeMutation>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class AttributeListener {
				public static class: java.lang.Class<com.urbanairship.channel.AttributeListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.channel.AttributeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAttributeMutationsUploaded(param0: java.util.List<com.urbanairship.channel.AttributeMutation>): void;
				});
				public constructor();
				public onAttributeMutationsUploaded(param0: java.util.List<com.urbanairship.channel.AttributeMutation>): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class AttributeMutation extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.channel.AttributeMutation>;
				public static ATTRIBUTE_ACTION_REMOVE: string;
				public static ATTRIBUTE_ACTION_SET: string;
				public action: string;
				public name: string;
				public value: com.urbanairship.json.JsonValue;
				public timestamp: string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static collapseMutations(param0: java.util.List<com.urbanairship.channel.AttributeMutation>): java.util.List<com.urbanairship.channel.AttributeMutation>;
				public hashCode(): number;
				public static newRemoveAttributeMutation(param0: string, param1: number): com.urbanairship.channel.AttributeMutation;
				public equals(param0: any): boolean;
				public toString(): string;
				public static fromJsonList(param0: com.urbanairship.json.JsonList): java.util.List<com.urbanairship.channel.AttributeMutation>;
				public static newSetAttributeMutation(param0: string, param1: com.urbanairship.json.JsonValue, param2: number): com.urbanairship.channel.AttributeMutation;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class AttributeRegistrar {
				public static class: java.lang.Class<com.urbanairship.channel.AttributeRegistrar>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class ChannelApiClient {
				public static class: java.lang.Class<com.urbanairship.channel.ChannelApiClient>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class ChannelRegistrationPayload extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.channel.ChannelRegistrationPayload>;
				public static ANDROID_DEVICE_TYPE: string;
				public static AMAZON_DEVICE_TYPE: string;
				public optIn: boolean;
				public backgroundEnabled: boolean;
				public deviceType: string;
				public pushAddress: string;
				public setTags: boolean;
				public tags: java.util.Set<string>;
				public tagChanges: com.urbanairship.json.JsonMap;
				public userId: string;
				public timezone: string;
				public language: string;
				public country: string;
				public locationSettings: java.lang.Boolean;
				public appVersion: string;
				public sdkVersion: string;
				public deviceModel: string;
				public apiVersion: java.lang.Integer;
				public carrier: string;
				public accengageDeviceId: string;
				public deliveryType: string;
				public contactId: string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public minimizedPayload(param0: com.urbanairship.channel.ChannelRegistrationPayload): com.urbanairship.channel.ChannelRegistrationPayload;
				public toString(): string;
			}
			export module ChannelRegistrationPayload {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.channel.ChannelRegistrationPayload.Builder>;
					public setCountry(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setDeviceType(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setBackgroundEnabled(param0: boolean): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setOptIn(param0: boolean): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setTimezone(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setCarrier(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setDeviceModel(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setApiVersion(param0: java.lang.Integer): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setDeliveryType(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setContactId(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setTags(param0: boolean, param1: java.util.Set<string>): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public constructor(param0: com.urbanairship.channel.ChannelRegistrationPayload);
					public setPushAddress(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setUserId(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setAppVersion(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setAccengageDeviceId(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public constructor();
					public setSdkVersion(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public build(): com.urbanairship.channel.ChannelRegistrationPayload;
					public setLanguage(param0: string): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
					public setLocationSettings(param0: java.lang.Boolean): com.urbanairship.channel.ChannelRegistrationPayload.Builder;
				}
				export class DeviceType {
					public static class: java.lang.Class<com.urbanairship.channel.ChannelRegistrationPayload.DeviceType>;
					/**
					 * Constructs a new instance of the com.urbanairship.channel.ChannelRegistrationPayload$DeviceType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class Contact extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.channel.Contact>;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public getComponentGroup(): number;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel);
				public reset(): void;
				public editTags(): com.urbanairship.channel.TagGroupsEditor;
				public identify(param0: string): void;
				public editAttributes(): com.urbanairship.channel.AttributeEditor;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class ContactApiClient {
				public static class: java.lang.Class<com.urbanairship.channel.ContactApiClient>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class ContactIdentity {
				public static class: java.lang.Class<com.urbanairship.channel.ContactIdentity>;
				public getContactId(): string;
				public isAnonymous(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class NamedUser extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.channel.NamedUser>;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public getComponentGroup(): number;
				/** @deprecated */
				public forceUpdate(): void;
				/** @deprecated */
				public editAttributes(): com.urbanairship.channel.AttributeEditor;
				/** @deprecated */
				public editTagGroups(): com.urbanairship.channel.TagGroupsEditor;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.contacts.Contact);
				/** @deprecated */
				public setId(param0: string): void;
				/** @deprecated */
				public getId(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class NamedUserApiClient {
				public static class: java.lang.Class<com.urbanairship.channel.NamedUserApiClient>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class PendingAttributeMutationStore extends com.urbanairship.util.JsonDataStoreQueue<java.util.List<com.urbanairship.channel.AttributeMutation>> {
				public static class: java.lang.Class<com.urbanairship.channel.PendingAttributeMutationStore>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class PendingSubscriptionListMutationStore extends com.urbanairship.util.JsonDataStoreQueue<java.util.List<com.urbanairship.channel.SubscriptionListMutation>> {
				public static class: java.lang.Class<com.urbanairship.channel.PendingSubscriptionListMutationStore>;
				public constructor(param0: com.urbanairship.PreferenceDataStore, param1: string, param2: androidx.arch.core.util.Function<any,any>, param3: androidx.arch.core.util.Function<com.urbanairship.json.JsonValue,any>);
				public collapseAndSaveMutations(): void;
				public constructor(param0: com.urbanairship.PreferenceDataStore, param1: string);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class PendingTagGroupMutationStore extends com.urbanairship.util.JsonDataStoreQueue<com.urbanairship.channel.TagGroupsMutation> {
				public static class: java.lang.Class<com.urbanairship.channel.PendingTagGroupMutationStore>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class SubscriptionListApiClient {
				public static class: java.lang.Class<com.urbanairship.channel.SubscriptionListApiClient>;
				public static channelClient(param0: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.channel.SubscriptionListApiClient;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export abstract class SubscriptionListEditor {
				public static class: java.lang.Class<com.urbanairship.channel.SubscriptionListEditor>;
				public apply(): void;
				public subscribe(param0: string): com.urbanairship.channel.SubscriptionListEditor;
				public subscribe(param0: java.util.Set<string>): com.urbanairship.channel.SubscriptionListEditor;
				public mutate(param0: string, param1: boolean): com.urbanairship.channel.SubscriptionListEditor;
				public constructor(param0: com.urbanairship.util.Clock);
				public unsubscribe(param0: string): com.urbanairship.channel.SubscriptionListEditor;
				public unsubscribe(param0: java.util.Set<string>): com.urbanairship.channel.SubscriptionListEditor;
				public onApply(param0: java.util.List<com.urbanairship.channel.SubscriptionListMutation>): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export abstract class SubscriptionListListener {
				public static class: java.lang.Class<com.urbanairship.channel.SubscriptionListListener>;
				public onSubscriptionListMutationUploaded(param0: string, param1: java.util.List<com.urbanairship.channel.SubscriptionListMutation>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class SubscriptionListMutation extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.channel.SubscriptionListMutation>;
				public static ACTION_SUBSCRIBE: string;
				public static ACTION_UNSUBSCRIBE: string;
				public static newSubscribeMutation(param0: string, param1: number): com.urbanairship.channel.SubscriptionListMutation;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getTimestamp(): string;
				public static newUnsubscribeMutation(param0: string, param1: number): com.urbanairship.channel.SubscriptionListMutation;
				public static collapseMutations(param0: java.util.List<com.urbanairship.channel.SubscriptionListMutation>): java.util.List<com.urbanairship.channel.SubscriptionListMutation>;
				public static fromJsonValue(param0: com.urbanairship.json.JsonValue): com.urbanairship.channel.SubscriptionListMutation;
				public hashCode(): number;
				public getAction(): string;
				public equals(param0: any): boolean;
				public getListId(): string;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class SubscriptionListRegistrar {
				public static class: java.lang.Class<com.urbanairship.channel.SubscriptionListRegistrar>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export abstract class TagEditor {
				public static class: java.lang.Class<com.urbanairship.channel.TagEditor>;
				public removeTags(param0: java.util.Set<string>): com.urbanairship.channel.TagEditor;
				public removeTag(param0: string): com.urbanairship.channel.TagEditor;
				public apply(): void;
				public onApply(param0: boolean, param1: java.util.Set<string>, param2: java.util.Set<string>): void;
				public clear(): com.urbanairship.channel.TagEditor;
				public addTag(param0: string): com.urbanairship.channel.TagEditor;
				public addTags(param0: java.util.Set<string>): com.urbanairship.channel.TagEditor;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class TagGroupApiClient {
				public static class: java.lang.Class<com.urbanairship.channel.TagGroupApiClient>;
				public static namedUserClient(param0: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.channel.TagGroupApiClient;
				public static contactClient(param0: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.channel.TagGroupApiClient;
				public static channelClient(param0: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.channel.TagGroupApiClient;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class TagGroupListener {
				public static class: java.lang.Class<com.urbanairship.channel.TagGroupListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.channel.TagGroupListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onTagGroupsMutationUploaded(param0: java.util.List<com.urbanairship.channel.TagGroupsMutation>): void;
				});
				public constructor();
				public onTagGroupsMutationUploaded(param0: java.util.List<com.urbanairship.channel.TagGroupsMutation>): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class TagGroupRegistrar {
				public static class: java.lang.Class<com.urbanairship.channel.TagGroupRegistrar>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class TagGroupsEditor {
				public static class: java.lang.Class<com.urbanairship.channel.TagGroupsEditor>;
				public setTag(param0: string, param1: string): com.urbanairship.channel.TagGroupsEditor;
				public apply(): void;
				public removeTags(param0: string, param1: java.util.Set<string>): com.urbanairship.channel.TagGroupsEditor;
				public setTags(param0: string, param1: java.util.Set<string>): com.urbanairship.channel.TagGroupsEditor;
				public addTag(param0: string, param1: string): com.urbanairship.channel.TagGroupsEditor;
				public addTags(param0: string, param1: java.util.Set<string>): com.urbanairship.channel.TagGroupsEditor;
				public removeTag(param0: string, param1: string): com.urbanairship.channel.TagGroupsEditor;
				public allowTagGroupChange(param0: string): boolean;
				public onApply(param0: java.util.List<com.urbanairship.channel.TagGroupsMutation>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class TagGroupsMutation extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.channel.TagGroupsMutation>;
				public static collapseMutations(param0: java.util.List<com.urbanairship.channel.TagGroupsMutation>): java.util.List<com.urbanairship.channel.TagGroupsMutation>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static newAddTagsMutation(param0: string, param1: java.util.Set<string>): com.urbanairship.channel.TagGroupsMutation;
				public static fromJsonValue(param0: com.urbanairship.json.JsonValue): com.urbanairship.channel.TagGroupsMutation;
				public hashCode(): number;
				public static fromJsonList(param0: com.urbanairship.json.JsonList): java.util.List<com.urbanairship.channel.TagGroupsMutation>;
				public static newSetTagsMutation(param0: string, param1: java.util.Set<string>): com.urbanairship.channel.TagGroupsMutation;
				public equals(param0: any): boolean;
				public apply(param0: java.util.Map<string,java.util.Set<string>>): void;
				public static newRemoveTagsMutation(param0: string, param1: java.util.Set<string>): com.urbanairship.channel.TagGroupsMutation;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module channel {
			export class TagUtils {
				public static class: java.lang.Class<com.urbanairship.channel.TagUtils>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module config {
			export class AirshipRuntimeConfig {
				public static class: java.lang.Class<com.urbanairship.config.AirshipRuntimeConfig>;
				public getUrlConfig(): com.urbanairship.config.AirshipUrlConfig;
				public constructor(param0: com.urbanairship.config.PlatformProvider, param1: com.urbanairship.AirshipConfigOptions, param2: com.urbanairship.config.AirshipUrlConfigProvider);
				public getPlatform(): number;
				public getConfigOptions(): com.urbanairship.AirshipConfigOptions;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module config {
			export class AirshipUrlConfig {
				public static class: java.lang.Class<com.urbanairship.config.AirshipUrlConfig>;
				public remoteDataUrl(): com.urbanairship.config.UrlBuilder;
				public walletUrl(): com.urbanairship.config.UrlBuilder;
				public deviceUrl(): com.urbanairship.config.UrlBuilder;
				public analyticsUrl(): com.urbanairship.config.UrlBuilder;
				public chatUrl(): com.urbanairship.config.UrlBuilder;
				public hashCode(): number;
				public isChatSocketUrlAvailable(): boolean;
				public static newBuilder(): com.urbanairship.config.AirshipUrlConfig.Builder;
				public equals(param0: any): boolean;
				public chatSocketUrl(): com.urbanairship.config.UrlBuilder;
				public isChatUrlAvailable(): boolean;
			}
			export module AirshipUrlConfig {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.config.AirshipUrlConfig.Builder>;
					public build(): com.urbanairship.config.AirshipUrlConfig;
					public setRemoteDataUrl(param0: string): com.urbanairship.config.AirshipUrlConfig.Builder;
					public constructor();
					public setAnalyticsUrl(param0: string): com.urbanairship.config.AirshipUrlConfig.Builder;
					public setChatSocketUrl(param0: string): com.urbanairship.config.AirshipUrlConfig.Builder;
					public setChatUrl(param0: string): com.urbanairship.config.AirshipUrlConfig.Builder;
					public setWalletUrl(param0: string): com.urbanairship.config.AirshipUrlConfig.Builder;
					public setDeviceUrl(param0: string): com.urbanairship.config.AirshipUrlConfig.Builder;
				}
				export class Listener {
					public static class: java.lang.Class<com.urbanairship.config.AirshipUrlConfig.Listener>;
					/**
					 * Constructs a new instance of the com.urbanairship.config.AirshipUrlConfig$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUrlConfigUpdated(): void;
					});
					public constructor();
					public onUrlConfigUpdated(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module config {
			export class AirshipUrlConfigProvider {
				public static class: java.lang.Class<com.urbanairship.config.AirshipUrlConfigProvider>;
				/**
				 * Constructs a new instance of the com.urbanairship.config.AirshipUrlConfigProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getConfig(): com.urbanairship.config.AirshipUrlConfig;
				});
				public constructor();
				public getConfig(): com.urbanairship.config.AirshipUrlConfig;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module config {
			export class PlatformProvider {
				public static class: java.lang.Class<com.urbanairship.config.PlatformProvider>;
				/**
				 * Constructs a new instance of the com.urbanairship.config.PlatformProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPlatform(): number;
				});
				public constructor();
				public getPlatform(): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module config {
			export class RemoteAirshipUrlConfigProvider implements com.urbanairship.config.AirshipUrlConfigProvider, com.urbanairship.remoteconfig.RemoteAirshipConfigListener {
				public static class: java.lang.Class<com.urbanairship.config.RemoteAirshipUrlConfigProvider>;
				public disableFallbackUrls(): void;
				public addUrlConfigListener(param0: com.urbanairship.config.AirshipUrlConfig.Listener): void;
				public removeUrlConfigListener(param0: com.urbanairship.config.AirshipUrlConfig.Listener): void;
				public constructor(param0: com.urbanairship.AirshipConfigOptions, param1: com.urbanairship.PreferenceDataStore);
				public getConfig(): com.urbanairship.config.AirshipUrlConfig;
				public onRemoteConfigUpdated(param0: com.urbanairship.remoteconfig.RemoteAirshipConfig): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module config {
			export class UrlBuilder {
				public static class: java.lang.Class<com.urbanairship.config.UrlBuilder>;
				public appendQueryParameter(param0: string, param1: string): com.urbanairship.config.UrlBuilder;
				public build(): globalAndroid.net.Uri;
				public appendEncodedPath(param0: string): com.urbanairship.config.UrlBuilder;
				public appendPath(param0: string): com.urbanairship.config.UrlBuilder;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module contacts {
			export class Contact extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.contacts.Contact>;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public getComponentGroup(): number;
				public addTagGroupListener(param0: com.urbanairship.channel.TagGroupListener): void;
				public onComponentEnableChange(param0: boolean): void;
				public addAttributeListener(param0: com.urbanairship.channel.AttributeListener): void;
				public removeContactChangeListener(param0: com.urbanairship.contacts.ContactChangeListener): void;
				public removeTagGroupListener(param0: com.urbanairship.channel.TagGroupListener): void;
				public setContactConflictListener(param0: com.urbanairship.contacts.ContactConflictListener): void;
				public removeAttributeListener(param0: com.urbanairship.channel.AttributeListener): void;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public editTagGroups(): com.urbanairship.channel.TagGroupsEditor;
				public addContactChangeListener(param0: com.urbanairship.contacts.ContactChangeListener): void;
				public getNamedUserId(): string;
				public init(): void;
				public editAttributes(): com.urbanairship.channel.AttributeEditor;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel);
				public reset(): void;
				public getPendingAttributeUpdates(): java.util.List<com.urbanairship.channel.AttributeMutation>;
				public getPendingTagUpdates(): java.util.List<com.urbanairship.channel.TagGroupsMutation>;
				public identify(param0: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module contacts {
			export class ContactApiClient {
				public static class: java.lang.Class<com.urbanairship.contacts.ContactApiClient>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module contacts {
			export class ContactChangeListener {
				public static class: java.lang.Class<com.urbanairship.contacts.ContactChangeListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.contacts.ContactChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onContactChanged(): void;
				});
				public constructor();
				public onContactChanged(): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module contacts {
			export class ContactConflictListener {
				public static class: java.lang.Class<com.urbanairship.contacts.ContactConflictListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.contacts.ContactConflictListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConflict(param0: com.urbanairship.contacts.ContactData, param1: string): void;
				});
				public constructor();
				public onConflict(param0: com.urbanairship.contacts.ContactData, param1: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module contacts {
			export class ContactData extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.contacts.ContactData>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public hashCode(): number;
				public getTagGroups(): java.util.Map<string,java.util.Set<string>>;
				public equals(param0: any): boolean;
				public getAttributes(): java.util.Map<string,com.urbanairship.json.JsonValue>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module contacts {
			export class ContactIdentity extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.contacts.ContactIdentity>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getContactId(): string;
				public isAnonymous(): boolean;
				public getNamedUserId(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module contacts {
			export class ContactOperation extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.contacts.ContactOperation>;
				public getType(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getPayload(): com.urbanairship.contacts.ContactOperation.Payload;
				public coercePayload(): com.urbanairship.contacts.ContactOperation.Payload;
				public toString(): string;
			}
			export module ContactOperation {
				export class IdentifyPayload extends com.urbanairship.contacts.ContactOperation.Payload {
					public static class: java.lang.Class<com.urbanairship.contacts.ContactOperation.IdentifyPayload>;
					public toString(): string;
					public constructor(param0: string);
					public getIdentifier(): string;
					public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.contacts.ContactOperation.IdentifyPayload;
					public toJsonValue(): com.urbanairship.json.JsonValue;
				}
				export class Payload extends com.urbanairship.json.JsonSerializable {
					public static class: java.lang.Class<com.urbanairship.contacts.ContactOperation.Payload>;
					/**
					 * Constructs a new instance of the com.urbanairship.contacts.ContactOperation$Payload interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toJsonValue(): com.urbanairship.json.JsonValue;
					});
					public constructor();
					public toJsonValue(): com.urbanairship.json.JsonValue;
				}
				export class UpdatePayload extends com.urbanairship.contacts.ContactOperation.Payload {
					public static class: java.lang.Class<com.urbanairship.contacts.ContactOperation.UpdatePayload>;
					public toString(): string;
					public getTagGroupMutations(): java.util.List<com.urbanairship.channel.TagGroupsMutation>;
					public getAttributeMutations(): java.util.List<com.urbanairship.channel.AttributeMutation>;
					public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.contacts.ContactOperation.UpdatePayload;
					public constructor(param0: java.util.List<com.urbanairship.channel.TagGroupsMutation>, param1: java.util.List<com.urbanairship.channel.AttributeMutation>);
					public toJsonValue(): com.urbanairship.json.JsonValue;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module google {
			export class GooglePlayServicesUtilWrapper {
				public static class: java.lang.Class<com.urbanairship.google.GooglePlayServicesUtilWrapper>;
				public static isUserRecoverableError(param0: number): boolean;
				public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module google {
			export class NetworkProviderInstaller {
				public static class: java.lang.Class<com.urbanairship.google.NetworkProviderInstaller>;
				public static PROVIDER_INSTALLED: number;
				public static PROVIDER_RECOVERABLE_ERROR: number;
				public static PROVIDER_ERROR: number;
				public static installSecurityProvider(param0: globalAndroid.content.Context): number;
				public constructor();
			}
			export module NetworkProviderInstaller {
				export class Result {
					public static class: java.lang.Class<com.urbanairship.google.NetworkProviderInstaller.Result>;
					/**
					 * Constructs a new instance of the com.urbanairship.google.NetworkProviderInstaller$Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module google {
			export class PlayServicesErrorActivity {
				public static class: java.lang.Class<com.urbanairship.google.PlayServicesErrorActivity>;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onStart(): void;
				public onStop(): void;
				public constructor();
			}
			export module PlayServicesErrorActivity {
				export class ErrorDialogFragment {
					public static class: java.lang.Class<com.urbanairship.google.PlayServicesErrorActivity.ErrorDialogFragment>;
					public onCancel(param0: globalAndroid.content.DialogInterface): void;
					public constructor();
					public static createInstance(param0: number): com.urbanairship.google.PlayServicesErrorActivity.ErrorDialogFragment;
					public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module google {
			export class PlayServicesUtils {
				public static class: java.lang.Class<com.urbanairship.google.PlayServicesUtils>;
				public static MISSING_PLAY_SERVICE_DEPENDENCY: number;
				public static isGooglePlayServicesDependencyAvailable(): boolean;
				public static isGooglePlayStoreAvailable(param0: globalAndroid.content.Context): boolean;
				public static isFusedLocationDependencyAvailable(): boolean;
				public static isGoogleAdsDependencyAvailable(): boolean;
				public static handleAnyPlayServicesError(param0: globalAndroid.content.Context): void;
				public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module google {
			export class ProviderInstallerWrapper {
				public static class: java.lang.Class<com.urbanairship.google.ProviderInstallerWrapper>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module http {
			export class Request {
				public static class: java.lang.Class<com.urbanairship.http.Request>;
				public uri: globalAndroid.net.Uri;
				public user: string;
				public password: string;
				public requestMethod: string;
				public body: string;
				public contentType: string;
				public ifModifiedSince: number;
				public compressRequestBody: boolean;
				public followRedirects: boolean;
				public responseProperties: java.util.Map<string,string>;
				public setIfModifiedSince(param0: number): com.urbanairship.http.Request;
				public setCompressRequestBody(param0: boolean): com.urbanairship.http.Request;
				public setRequestBody(param0: com.urbanairship.json.JsonSerializable): com.urbanairship.http.Request;
				public addHeaders(param0: java.util.Map<string,string>): com.urbanairship.http.Request;
				public setInstanceFollowRedirects(param0: boolean): com.urbanairship.http.Request;
				public setHeader(param0: string, param1: string): com.urbanairship.http.Request;
				public constructor(param0: string, param1: globalAndroid.net.Uri);
				public constructor();
				public execute(param0: com.urbanairship.http.ResponseParser<any>): com.urbanairship.http.Response<any>;
				public setAirshipUserAgent(param0: com.urbanairship.config.AirshipRuntimeConfig): com.urbanairship.http.Request;
				public setOperation(param0: string, param1: globalAndroid.net.Uri): com.urbanairship.http.Request;
				public setRequestBody(param0: string, param1: string): com.urbanairship.http.Request;
				public setAirshipJsonAcceptsHeader(): com.urbanairship.http.Request;
				public execute(): com.urbanairship.http.Response<java.lang.Void>;
				public setCredentials(param0: string, param1: string): com.urbanairship.http.Request;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module http {
			export class RequestException {
				public static class: java.lang.Class<com.urbanairship.http.RequestException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module http {
			export class RequestFactory {
				public static class: java.lang.Class<com.urbanairship.http.RequestFactory>;
				public static DEFAULT_REQUEST_FACTORY: com.urbanairship.http.RequestFactory;
				public createRequest(): com.urbanairship.http.Request;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module http {
			export class Response<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.http.Response<any>>;
				public static HTTP_TOO_MANY_REQUESTS: number;
				public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
				public getResponseBody(): string;
				public isClientError(): boolean;
				public getLastModifiedTime(): number;
				public constructor(param0: com.urbanairship.http.Response<T>);
				public getResponseHeader(param0: string): string;
				public getStatus(): number;
				public isSuccessful(): boolean;
				public getResult(): T;
				public isServerError(): boolean;
				public isTooManyRequestsError(): boolean;
				public toString(): string;
			}
			export module Response {
				export class Builder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.http.Response.Builder<any>>;
					public setResponseBody(param0: string): com.urbanairship.http.Response.Builder<T>;
					public setResult(param0: T): com.urbanairship.http.Response.Builder<T>;
					public setLastModified(param0: number): com.urbanairship.http.Response.Builder<T>;
					public build(): com.urbanairship.http.Response<T>;
					public constructor(param0: number);
					public setResponseHeaders(param0: java.util.Map<string,java.util.List<string>>): com.urbanairship.http.Response.Builder<T>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module http {
			export class ResponseParser<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.http.ResponseParser<any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.http.ResponseParser<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					parseResponse(param0: number, param1: java.util.Map<string,java.util.List<string>>, param2: string): T;
				});
				public constructor();
				public parseResponse(param0: number, param1: java.util.Map<string,java.util.List<string>>, param2: string): T;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module images {
			export class DefaultImageLoader extends com.urbanairship.images.ImageLoader {
				public static class: java.lang.Class<com.urbanairship.images.DefaultImageLoader>;
				public load(param0: globalAndroid.content.Context, param1: globalAndroid.widget.ImageView, param2: com.urbanairship.images.ImageRequestOptions): void;
				public constructor(param0: globalAndroid.content.Context);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module images {
			export class ImageCache {
				public static class: java.lang.Class<com.urbanairship.images.ImageCache>;
			}
			export module ImageCache {
				export class CacheEntry {
					public static class: java.lang.Class<com.urbanairship.images.ImageCache.CacheEntry>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module images {
			export class ImageLoader {
				public static class: java.lang.Class<com.urbanairship.images.ImageLoader>;
				/**
				 * Constructs a new instance of the com.urbanairship.images.ImageLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: globalAndroid.content.Context, param1: globalAndroid.widget.ImageView, param2: com.urbanairship.images.ImageRequestOptions): void;
				});
				public constructor();
				public load(param0: globalAndroid.content.Context, param1: globalAndroid.widget.ImageView, param2: com.urbanairship.images.ImageRequestOptions): void;
			}
			export module ImageLoader {
				export class ImageLoadedCallback {
					public static class: java.lang.Class<com.urbanairship.images.ImageLoader.ImageLoadedCallback>;
					/**
					 * Constructs a new instance of the com.urbanairship.images.ImageLoader$ImageLoadedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onImageLoaded(): void;
					});
					public constructor();
					public onImageLoaded(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module images {
			export abstract class ImageRequest {
				public static class: java.lang.Class<com.urbanairship.images.ImageRequest>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module images {
			export class ImageRequestOptions {
				public static class: java.lang.Class<com.urbanairship.images.ImageRequestOptions>;
				public getPlaceHolder(): number;
				public getCallback(): com.urbanairship.images.ImageLoader.ImageLoadedCallback;
				public getUrl(): string;
				public static newBuilder(param0: string): com.urbanairship.images.ImageRequestOptions.Builder;
			}
			export module ImageRequestOptions {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.images.ImageRequestOptions.Builder>;
					public setPlaceHolder(param0: number): com.urbanairship.images.ImageRequestOptions.Builder;
					public setImageLoadedCallback(param0: com.urbanairship.images.ImageLoader.ImageLoadedCallback): com.urbanairship.images.ImageRequestOptions.Builder;
					public build(): com.urbanairship.images.ImageRequestOptions;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module javascript {
			export class JavaScriptEnvironment {
				public static class: java.lang.Class<com.urbanairship.javascript.JavaScriptEnvironment>;
				public getJavaScript(param0: globalAndroid.content.Context): string;
				public static newBuilder(): com.urbanairship.javascript.JavaScriptEnvironment.Builder;
			}
			export module JavaScriptEnvironment {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.javascript.JavaScriptEnvironment.Builder>;
					public addGetter(param0: string, param1: com.urbanairship.json.JsonSerializable): com.urbanairship.javascript.JavaScriptEnvironment.Builder;
					public addGetter(param0: string, param1: number): com.urbanairship.javascript.JavaScriptEnvironment.Builder;
					public addGetter(param0: string, param1: string): com.urbanairship.javascript.JavaScriptEnvironment.Builder;
					public build(): com.urbanairship.javascript.JavaScriptEnvironment;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module javascript {
			export class JavaScriptExecutor {
				public static class: java.lang.Class<com.urbanairship.javascript.JavaScriptExecutor>;
				/**
				 * Constructs a new instance of the com.urbanairship.javascript.JavaScriptExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					executeJavaScript(param0: string): void;
				});
				public constructor();
				public executeJavaScript(param0: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module javascript {
			export class NativeBridge {
				public static class: java.lang.Class<com.urbanairship.javascript.NativeBridge>;
				public loadJavaScriptEnvironment(param0: globalAndroid.content.Context, param1: com.urbanairship.javascript.JavaScriptEnvironment, param2: com.urbanairship.javascript.JavaScriptExecutor): com.urbanairship.Cancelable;
				public setActionCompletionCallback(param0: com.urbanairship.actions.ActionCompletionCallback): void;
				public constructor(param0: com.urbanairship.actions.ActionRunRequestFactory);
				public onHandleCommand(param0: string, param1: com.urbanairship.javascript.JavaScriptExecutor, param2: com.urbanairship.actions.ActionRunRequestExtender, param3: com.urbanairship.javascript.NativeBridge.CommandDelegate): boolean;
				public constructor();
			}
			export module NativeBridge {
				export class CommandDelegate {
					public static class: java.lang.Class<com.urbanairship.javascript.NativeBridge.CommandDelegate>;
					/**
					 * Constructs a new instance of the com.urbanairship.javascript.NativeBridge$CommandDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClose(): void;
						onAirshipCommand(param0: string, param1: globalAndroid.net.Uri): void;
					});
					public constructor();
					public onClose(): void;
					public onAirshipCommand(param0: string, param1: globalAndroid.net.Uri): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class AirshipWorker {
				public static class: java.lang.Class<com.urbanairship.job.AirshipWorker>;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
				public startWork(): com.google.common.util.concurrent.ListenableFuture<androidx.work.ListenableWorker.Result>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class JobDispatcher {
				public static class: java.lang.Class<com.urbanairship.job.JobDispatcher>;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.job.Scheduler);
				public static setInstance(param0: com.urbanairship.job.JobDispatcher): void;
				public dispatch(param0: com.urbanairship.job.JobInfo): void;
				public static shared(param0: globalAndroid.content.Context): com.urbanairship.job.JobDispatcher;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class JobInfo {
				public static class: java.lang.Class<com.urbanairship.job.JobInfo>;
				public static JOB_FINISHED: number;
				public static JOB_RETRY: number;
				public static REPLACE: number;
				public static APPEND: number;
				public static KEEP: number;
				public getAirshipComponentName(): string;
				public hashCode(): number;
				public getExtras(): com.urbanairship.json.JsonMap;
				public getAction(): string;
				public getInitialDelay(): number;
				public equals(param0: any): boolean;
				public getConflictStrategy(): number;
				public isNetworkAccessRequired(): boolean;
				public static newBuilder(): com.urbanairship.job.JobInfo.Builder;
				public toString(): string;
			}
			export module JobInfo {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.job.JobInfo.Builder>;
					public setExtras(param0: com.urbanairship.json.JsonMap): com.urbanairship.job.JobInfo.Builder;
					public setAirshipComponent(param0: java.lang.Class<any>): com.urbanairship.job.JobInfo.Builder;
					public setConflictStrategy(param0: number): com.urbanairship.job.JobInfo.Builder;
					public setAction(param0: string): com.urbanairship.job.JobInfo.Builder;
					public setInitialDelay(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.job.JobInfo.Builder;
					public setNetworkAccessRequired(param0: boolean): com.urbanairship.job.JobInfo.Builder;
					public build(): com.urbanairship.job.JobInfo;
				}
				export class ConflictStrategy {
					public static class: java.lang.Class<com.urbanairship.job.JobInfo.ConflictStrategy>;
					/**
					 * Constructs a new instance of the com.urbanairship.job.JobInfo$ConflictStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class JobResult {
					public static class: java.lang.Class<com.urbanairship.job.JobInfo.JobResult>;
					/**
					 * Constructs a new instance of the com.urbanairship.job.JobInfo$JobResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class JobRunnable {
				public static class: java.lang.Class<com.urbanairship.job.JobRunnable>;
				public run(): void;
				public static newBuilder(param0: com.urbanairship.job.JobInfo): com.urbanairship.job.JobRunnable.Builder;
			}
			export module JobRunnable {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.job.JobRunnable.Builder>;
				}
				export class Callback {
					public static class: java.lang.Class<com.urbanairship.job.JobRunnable.Callback>;
					/**
					 * Constructs a new instance of the com.urbanairship.job.JobRunnable$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFinish(param0: com.urbanairship.job.JobRunnable, param1: number): void;
					});
					public constructor();
					public onFinish(param0: com.urbanairship.job.JobRunnable, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class Scheduler {
				public static class: java.lang.Class<com.urbanairship.job.Scheduler>;
				/**
				 * Constructs a new instance of the com.urbanairship.job.Scheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					schedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo): void;
				});
				public constructor();
				public schedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class SchedulerException {
				public static class: java.lang.Class<com.urbanairship.job.SchedulerException>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class WorkManagerScheduler extends com.urbanairship.job.Scheduler {
				public static class: java.lang.Class<com.urbanairship.job.WorkManagerScheduler>;
				public schedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export abstract class WorkUtils {
				public static class: java.lang.Class<com.urbanairship.job.WorkUtils>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module js {
			export class UrlAllowList {
				public static class: java.lang.Class<com.urbanairship.js.UrlAllowList>;
				public static SCOPE_JAVASCRIPT_INTERFACE: number;
				public static SCOPE_OPEN_URL: number;
				public static SCOPE_ALL: number;
				public isAllowed(param0: string): boolean;
				public addEntry(param0: string): boolean;
				public isAllowed(param0: string, param1: number): boolean;
				public addEntry(param0: string, param1: number): boolean;
				public static createDefaultUrlAllowList(param0: com.urbanairship.AirshipConfigOptions): com.urbanairship.js.UrlAllowList;
				public setUrlAllowListCallback(param0: com.urbanairship.js.UrlAllowList.OnUrlAllowListCallback): void;
				public constructor();
			}
			export module UrlAllowList {
				export class Entry {
					public static class: java.lang.Class<com.urbanairship.js.UrlAllowList.Entry>;
				}
				export class OnUrlAllowListCallback {
					public static class: java.lang.Class<com.urbanairship.js.UrlAllowList.OnUrlAllowListCallback>;
					/**
					 * Constructs a new instance of the com.urbanairship.js.UrlAllowList$OnUrlAllowListCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						allowUrl(param0: string, param1: number): boolean;
					});
					public constructor();
					public allowUrl(param0: string, param1: number): boolean;
				}
				export class Scope {
					public static class: java.lang.Class<com.urbanairship.js.UrlAllowList.Scope>;
					/**
					 * Constructs a new instance of the com.urbanairship.js.UrlAllowList$Scope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class UriPattern {
					public static class: java.lang.Class<com.urbanairship.js.UrlAllowList.UriPattern>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonException {
				public static class: java.lang.Class<com.urbanairship.json.JsonException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonList extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.JsonList>;
				public static EMPTY_LIST: com.urbanairship.json.JsonList;
				public iterator(): java.util.Iterator<com.urbanairship.json.JsonValue>;
				public getList(): java.util.List<com.urbanairship.json.JsonValue>;
				public constructor(param0: java.util.List<com.urbanairship.json.JsonValue>);
				public toString(): string;
				public indexOf(param0: com.urbanairship.json.JsonValue): number;
				public size(): number;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public lastIndexOf(param0: com.urbanairship.json.JsonValue): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public contains(param0: com.urbanairship.json.JsonValue): boolean;
				public get(param0: number): com.urbanairship.json.JsonValue;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonMap extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.JsonMap>;
				public static EMPTY_MAP: com.urbanairship.json.JsonMap;
				public keySet(): java.util.Set<string>;
				public containsKey(param0: string): boolean;
				public iterator(): java.util.Iterator<java.util.Map.Entry<string,com.urbanairship.json.JsonValue>>;
				public opt(param0: string): com.urbanairship.json.JsonValue;
				public toString(): string;
				public get(param0: string): com.urbanairship.json.JsonValue;
				public size(): number;
				public getMap(): java.util.Map<string,com.urbanairship.json.JsonValue>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public entrySet(): java.util.Set<java.util.Map.Entry<string,com.urbanairship.json.JsonValue>>;
				public values(): java.util.Collection<com.urbanairship.json.JsonValue>;
				public constructor(param0: java.util.Map<string,com.urbanairship.json.JsonValue>);
				public hashCode(): number;
				public static newBuilder(): com.urbanairship.json.JsonMap.Builder;
				public equals(param0: any): boolean;
				public containsValue(param0: com.urbanairship.json.JsonValue): boolean;
				public isEmpty(): boolean;
			}
			export module JsonMap {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.json.JsonMap.Builder>;
					public put(param0: string, param1: string): com.urbanairship.json.JsonMap.Builder;
					public put(param0: string, param1: boolean): com.urbanairship.json.JsonMap.Builder;
					public put(param0: string, param1: com.urbanairship.json.JsonSerializable): com.urbanairship.json.JsonMap.Builder;
					public putOpt(param0: string, param1: any): com.urbanairship.json.JsonMap.Builder;
					public put(param0: string, param1: number): com.urbanairship.json.JsonMap.Builder;
					public build(): com.urbanairship.json.JsonMap;
					public putAll(param0: com.urbanairship.json.JsonMap): com.urbanairship.json.JsonMap.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonMatcher extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.JsonMatcher>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static parse(param0: com.urbanairship.json.JsonValue): com.urbanairship.json.JsonMatcher;
				public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
				public hashCode(): number;
				public static newBuilder(): com.urbanairship.json.JsonMatcher.Builder;
				public equals(param0: any): boolean;
				public apply(param0: any): boolean;
			}
			export module JsonMatcher {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.json.JsonMatcher.Builder>;
					public setScope(param0: string): com.urbanairship.json.JsonMatcher.Builder;
					public setScope(param0: java.util.List<string>): com.urbanairship.json.JsonMatcher.Builder;
					public build(): com.urbanairship.json.JsonMatcher;
					public setKey(param0: string): com.urbanairship.json.JsonMatcher.Builder;
					public setValueMatcher(param0: com.urbanairship.json.ValueMatcher): com.urbanairship.json.JsonMatcher.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonPredicate extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.JsonPredicate>;
				public static OR_PREDICATE_TYPE: string;
				public static AND_PREDICATE_TYPE: string;
				public static NOT_PREDICATE_TYPE: string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public apply(param0: any): boolean;
				public static newBuilder(): com.urbanairship.json.JsonPredicate.Builder;
				public static parse(param0: com.urbanairship.json.JsonValue): com.urbanairship.json.JsonPredicate;
			}
			export module JsonPredicate {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.json.JsonPredicate.Builder>;
					public setPredicateType(param0: string): com.urbanairship.json.JsonPredicate.Builder;
					public build(): com.urbanairship.json.JsonPredicate;
					public constructor();
					public addPredicate(param0: com.urbanairship.json.JsonPredicate): com.urbanairship.json.JsonPredicate.Builder;
					public addMatcher(param0: com.urbanairship.json.JsonMatcher): com.urbanairship.json.JsonPredicate.Builder;
				}
				export class PredicateType {
					public static class: java.lang.Class<com.urbanairship.json.JsonPredicate.PredicateType>;
					/**
					 * Constructs a new instance of the com.urbanairship.json.JsonPredicate$PredicateType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.json.JsonSerializable>;
				/**
				 * Constructs a new instance of the com.urbanairship.json.JsonSerializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					toJsonValue(): com.urbanairship.json.JsonValue;
				});
				public constructor();
				public toJsonValue(): com.urbanairship.json.JsonValue;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonTypeConverters {
				public static class: java.lang.Class<com.urbanairship.json.JsonTypeConverters>;
				public jsonPredicateFromString(param0: string): com.urbanairship.json.JsonPredicate;
				public jsonValueToString(param0: com.urbanairship.json.JsonValue): string;
				public jsonValueFromString(param0: string): com.urbanairship.json.JsonValue;
				public jsonMapToString(param0: com.urbanairship.json.JsonMap): string;
				public jsonPredicateToString(param0: com.urbanairship.json.JsonPredicate): string;
				public jsonMapFromString(param0: string): com.urbanairship.json.JsonMap;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonValue extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.json.JsonValue>;
				public static NULL: com.urbanairship.json.JsonValue;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.json.JsonValue>;
				public getNumber(): java.lang.Number;
				public isFloat(): boolean;
				public getDouble(param0: number): number;
				public static wrap(param0: boolean): com.urbanairship.json.JsonValue;
				public optString(): string;
				public isNumber(): boolean;
				public static wrap(param0: com.urbanairship.json.JsonSerializable): com.urbanairship.json.JsonValue;
				public isDouble(): boolean;
				public getValue(): any;
				public static wrap(param0: string): com.urbanairship.json.JsonValue;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public isLong(): boolean;
				public getBoolean(param0: boolean): boolean;
				public hashCode(): number;
				public getLong(param0: number): number;
				public equals(param0: any): boolean;
				public getString(param0: string): string;
				public static wrap(param0: any): com.urbanairship.json.JsonValue;
				public getInt(param0: number): number;
				public isBoolean(): boolean;
				public optMap(): com.urbanairship.json.JsonMap;
				public getBoolean(): java.lang.Boolean;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getString(): string;
				public isJsonMap(): boolean;
				public static wrapOpt(param0: any): com.urbanairship.json.JsonValue;
				public getMap(): com.urbanairship.json.JsonMap;
				public static wrap(param0: any, param1: com.urbanairship.json.JsonValue): com.urbanairship.json.JsonValue;
				public isInteger(): boolean;
				public static parseString(param0: string): com.urbanairship.json.JsonValue;
				public toString(): string;
				public isJsonList(): boolean;
				public optList(): com.urbanairship.json.JsonList;
				public getList(): com.urbanairship.json.JsonList;
				public isString(): boolean;
				public describeContents(): number;
				public isNull(): boolean;
				public static wrap(param0: number): com.urbanairship.json.JsonValue;
				public getFloat(param0: number): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export abstract class ValueMatcher extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.ValueMatcher>;
				public static newArrayContainsMatcher(param0: com.urbanairship.json.JsonPredicate, param1: number): com.urbanairship.json.ValueMatcher;
				public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				public static newArrayContainsMatcher(param0: com.urbanairship.json.JsonPredicate): com.urbanairship.json.ValueMatcher;
				public toString(): string;
				public constructor();
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static newValueMatcher(param0: com.urbanairship.json.JsonValue): com.urbanairship.json.ValueMatcher;
				public static parse(param0: com.urbanairship.json.JsonValue): com.urbanairship.json.ValueMatcher;
				public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
				public static newVersionMatcher(param0: string): com.urbanairship.json.ValueMatcher;
				public static newNumberRangeMatcher(param0: java.lang.Double, param1: java.lang.Double): com.urbanairship.json.ValueMatcher;
				public apply(param0: any): boolean;
				public static newIsPresentMatcher(): com.urbanairship.json.ValueMatcher;
				public static newIsAbsentMatcher(): com.urbanairship.json.ValueMatcher;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class ArrayContainsMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.ArrayContainsMatcher>;
					public static ARRAY_CONTAINS_KEY: string;
					public static INDEX_KEY: string;
					public equals(param0: any): boolean;
					public constructor();
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public hashCode(): number;
					public apply(param0: any): boolean;
					public constructor(param0: com.urbanairship.json.JsonPredicate, param1: java.lang.Integer);
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class ExactValueMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.ExactValueMatcher>;
					public static EQUALS_VALUE_KEY: string;
					public equals(param0: any): boolean;
					public isEquals(param0: com.urbanairship.json.JsonValue, param1: com.urbanairship.json.JsonValue, param2: boolean): boolean;
					public constructor();
					public constructor(param0: com.urbanairship.json.JsonValue);
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public hashCode(): number;
					public apply(param0: any): boolean;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class NumberRangeMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.NumberRangeMatcher>;
					public static MIN_VALUE_KEY: string;
					public static MAX_VALUE_KEY: string;
					public equals(param0: any): boolean;
					public constructor();
					public constructor(param0: java.lang.Double, param1: java.lang.Double);
					public hashCode(): number;
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public apply(param0: any): boolean;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
					public toJsonValue(): com.urbanairship.json.JsonValue;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class PresenceMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.PresenceMatcher>;
					public static IS_PRESENT_VALUE_KEY: string;
					public equals(param0: any): boolean;
					public constructor(param0: boolean);
					public constructor();
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public hashCode(): number;
					public apply(param0: any): boolean;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class VersionMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.VersionMatcher>;
					public static VERSION_KEY: string;
					public static ALTERNATE_VERSION_KEY: string;
					public equals(param0: any): boolean;
					public constructor();
					public constructor(param0: com.urbanairship.util.IvyVersionMatcher);
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public hashCode(): number;
					public apply(param0: any): boolean;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module locale {
			export class LocaleChangeReceiver {
				public static class: java.lang.Class<com.urbanairship.locale.LocaleChangeReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module locale {
			export class LocaleChangedListener {
				public static class: java.lang.Class<com.urbanairship.locale.LocaleChangedListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.locale.LocaleChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onLocaleChanged(param0: java.util.Locale): void;
				});
				public constructor();
				public onLocaleChanged(param0: java.util.Locale): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module locale {
			export class LocaleManager {
				public static class: java.lang.Class<com.urbanairship.locale.LocaleManager>;
				public static LOCALE_OVERRIDE_LANGUAGE_KEY: string;
				public static LOCALE_OVERRIDE_COUNTRY_KEY: string;
				public static LOCALE_OVERRIDE_VARIANT_KEY: string;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public setLocaleOverride(param0: java.util.Locale): void;
				public addListener(param0: com.urbanairship.locale.LocaleChangedListener): void;
				public getLocale(): java.util.Locale;
				public removeListener(param0: com.urbanairship.locale.LocaleChangedListener): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export class Module {
				public static class: java.lang.Class<com.urbanairship.modules.Module>;
				public getComponents(): java.util.Set<any>;
				public registerActions(param0: globalAndroid.content.Context, param1: com.urbanairship.actions.ActionRegistry): void;
				public constructor(param0: java.util.Set<any>, param1: number);
				public static multipleComponents(param0: java.util.Collection<com.urbanairship.AirshipComponent>, param1: number): com.urbanairship.modules.Module;
				public constructor(param0: java.util.Set<any>);
				public static singleComponent(param0: com.urbanairship.AirshipComponent, param1: number): com.urbanairship.modules.Module;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export class Modules {
				public static class: java.lang.Class<com.urbanairship.modules.Modules>;
				public static debug(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore): com.urbanairship.modules.Module;
				public static chat(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager): com.urbanairship.modules.Module;
				public static adId(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.analytics.Analytics): com.urbanairship.modules.Module;
				public static preferenceCenter(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.remotedata.RemoteData): com.urbanairship.modules.Module;
				public static location(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.channel.AirshipChannel, param4: com.urbanairship.analytics.Analytics): com.urbanairship.modules.location.LocationModule;
				public static automation(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager, param6: com.urbanairship.analytics.Analytics, param7: com.urbanairship.remotedata.RemoteData, param8: com.urbanairship.contacts.Contact): com.urbanairship.modules.Module;
				public static messageCenter(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.channel.AirshipChannel, param4: com.urbanairship.push.PushManager, param5: com.urbanairship.AirshipConfigOptions): com.urbanairship.modules.Module;
				public static accengage(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions, param2: com.urbanairship.PreferenceDataStore, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager): com.urbanairship.modules.accengage.AccengageModule;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module aaid {
				export class AdIdModuleFactory extends com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.modules.aaid.AdIdModuleFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.aaid.AdIdModuleFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.analytics.Analytics): com.urbanairship.modules.Module;
						getAirshipVersion(): string;
						getPackageVersion(): string;
					});
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.analytics.Analytics): com.urbanairship.modules.Module;
					public getPackageVersion(): string;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module accengage {
				export class AccengageModule extends com.urbanairship.modules.Module {
					public static class: java.lang.Class<com.urbanairship.modules.accengage.AccengageModule>;
					public constructor(param0: java.util.Set<any>);
					public constructor(param0: com.urbanairship.AirshipComponent, param1: com.urbanairship.modules.accengage.AccengageNotificationHandler);
					public getAccengageNotificationHandler(): com.urbanairship.modules.accengage.AccengageNotificationHandler;
					public constructor(param0: java.util.Set<any>, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module accengage {
				export class AccengageModuleFactory extends com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.modules.accengage.AccengageModuleFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.accengage.AccengageModuleFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions, param2: com.urbanairship.PreferenceDataStore, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager): com.urbanairship.modules.accengage.AccengageModule;
						getAirshipVersion(): string;
						getPackageVersion(): string;
					});
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions, param2: com.urbanairship.PreferenceDataStore, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager): com.urbanairship.modules.accengage.AccengageModule;
					public getPackageVersion(): string;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module accengage {
				export class AccengageNotificationHandler {
					public static class: java.lang.Class<com.urbanairship.modules.accengage.AccengageNotificationHandler>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.accengage.AccengageNotificationHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getNotificationProvider(): com.urbanairship.push.notifications.NotificationProvider;
					});
					public constructor();
					public getNotificationProvider(): com.urbanairship.push.notifications.NotificationProvider;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module automation {
				export class AutomationModuleFactory extends com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.modules.automation.AutomationModuleFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.automation.AutomationModuleFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager, param6: com.urbanairship.analytics.Analytics, param7: com.urbanairship.remotedata.RemoteData, param8: com.urbanairship.contacts.Contact): com.urbanairship.modules.Module;
						getAirshipVersion(): string;
						getPackageVersion(): string;
					});
					public constructor();
					public getPackageVersion(): string;
					public build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager, param6: com.urbanairship.analytics.Analytics, param7: com.urbanairship.remotedata.RemoteData, param8: com.urbanairship.contacts.Contact): com.urbanairship.modules.Module;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module chat {
				export class ChatModuleFactory extends com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.modules.chat.ChatModuleFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.chat.ChatModuleFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager): com.urbanairship.modules.Module;
						getAirshipVersion(): string;
						getPackageVersion(): string;
					});
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.channel.AirshipChannel, param5: com.urbanairship.push.PushManager): com.urbanairship.modules.Module;
					public getPackageVersion(): string;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module debug {
				export class DebugModuleFactory extends com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.modules.debug.DebugModuleFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.debug.DebugModuleFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore): com.urbanairship.modules.Module;
						getAirshipVersion(): string;
						getPackageVersion(): string;
					});
					public constructor();
					public getPackageVersion(): string;
					public getAirshipVersion(): string;
					public build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore): com.urbanairship.modules.Module;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module location {
				export class AirshipLocationClient {
					public static class: java.lang.Class<com.urbanairship.modules.location.AirshipLocationClient>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.location.AirshipLocationClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isLocationUpdatesEnabled(): boolean;
						setLocationUpdatesEnabled(param0: boolean): void;
						isBackgroundLocationAllowed(): boolean;
						setBackgroundLocationAllowed(param0: boolean): void;
						isOptIn(): boolean;
					});
					public constructor();
					public isOptIn(): boolean;
					public setBackgroundLocationAllowed(param0: boolean): void;
					public setLocationUpdatesEnabled(param0: boolean): void;
					public isBackgroundLocationAllowed(): boolean;
					public isLocationUpdatesEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module location {
				export class LocationModule extends com.urbanairship.modules.Module {
					public static class: java.lang.Class<com.urbanairship.modules.location.LocationModule>;
					public getLocationClient(): com.urbanairship.modules.location.AirshipLocationClient;
					public constructor(param0: com.urbanairship.AirshipComponent, param1: com.urbanairship.modules.location.AirshipLocationClient);
					public constructor(param0: java.util.Set<any>);
					public constructor(param0: java.util.Set<any>, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module location {
				export class LocationModuleFactory extends com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.modules.location.LocationModuleFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.location.LocationModuleFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.channel.AirshipChannel, param4: com.urbanairship.analytics.Analytics): com.urbanairship.modules.location.LocationModule;
						getAirshipVersion(): string;
						getPackageVersion(): string;
					});
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.channel.AirshipChannel, param4: com.urbanairship.analytics.Analytics): com.urbanairship.modules.location.LocationModule;
					public getPackageVersion(): string;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module messagecenter {
				export class MessageCenterModuleFactory extends com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.modules.messagecenter.MessageCenterModuleFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.messagecenter.MessageCenterModuleFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.channel.AirshipChannel, param4: com.urbanairship.push.PushManager, param5: com.urbanairship.AirshipConfigOptions): com.urbanairship.modules.Module;
						getAirshipVersion(): string;
						getPackageVersion(): string;
					});
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.channel.AirshipChannel, param4: com.urbanairship.push.PushManager, param5: com.urbanairship.AirshipConfigOptions): com.urbanairship.modules.Module;
					public getPackageVersion(): string;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module modules {
			export module preferencecenter {
				export class PreferenceCenterModuleFactory extends com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.modules.preferencecenter.PreferenceCenterModuleFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.modules.preferencecenter.PreferenceCenterModuleFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.remotedata.RemoteData): com.urbanairship.modules.Module;
						getAirshipVersion(): string;
						getPackageVersion(): string;
					});
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.PrivacyManager, param3: com.urbanairship.remotedata.RemoteData): com.urbanairship.modules.Module;
					public getPackageVersion(): string;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class ActionButtonGroupsParser {
				public static class: java.lang.Class<com.urbanairship.push.ActionButtonGroupsParser>;
				public static fromXml(param0: globalAndroid.content.Context, param1: number): java.util.Map<string,com.urbanairship.push.notifications.NotificationActionButtonGroup>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class IncomingPushRunnable {
				public static class: java.lang.Class<com.urbanairship.push.IncomingPushRunnable>;
				public run(): void;
			}
			export module IncomingPushRunnable {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.push.IncomingPushRunnable.Builder>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class InternalNotificationListener {
				public static class: java.lang.Class<com.urbanairship.push.InternalNotificationListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.push.InternalNotificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNotificationResponse(param0: com.urbanairship.push.NotificationInfo, param1: com.urbanairship.push.NotificationActionButtonInfo): void;
				});
				public constructor();
				public onNotificationResponse(param0: com.urbanairship.push.NotificationInfo, param1: com.urbanairship.push.NotificationActionButtonInfo): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NotificationActionButtonInfo {
				public static class: java.lang.Class<com.urbanairship.push.NotificationActionButtonInfo>;
				public constructor(param0: string, param1: boolean, param2: globalAndroid.os.Bundle, param3: string);
				public getButtonId(): string;
				public isForeground(): boolean;
				public getRemoteInput(): globalAndroid.os.Bundle;
				public getDescription(): string;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NotificationInfo {
				public static class: java.lang.Class<com.urbanairship.push.NotificationInfo>;
				public getNotificationId(): number;
				public getNotificationTag(): string;
				public constructor(param0: com.urbanairship.push.PushMessage, param1: number, param2: string);
				public toString(): string;
				public getMessage(): com.urbanairship.push.PushMessage;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NotificationIntentProcessor {
				public static class: java.lang.Class<com.urbanairship.push.NotificationIntentProcessor>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NotificationListener {
				public static class: java.lang.Class<com.urbanairship.push.NotificationListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.push.NotificationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNotificationPosted(param0: com.urbanairship.push.NotificationInfo): void;
					onNotificationOpened(param0: com.urbanairship.push.NotificationInfo): boolean;
					onNotificationForegroundAction(param0: com.urbanairship.push.NotificationInfo, param1: com.urbanairship.push.NotificationActionButtonInfo): boolean;
					onNotificationBackgroundAction(param0: com.urbanairship.push.NotificationInfo, param1: com.urbanairship.push.NotificationActionButtonInfo): void;
					onNotificationDismissed(param0: com.urbanairship.push.NotificationInfo): void;
				});
				public constructor();
				public onNotificationForegroundAction(param0: com.urbanairship.push.NotificationInfo, param1: com.urbanairship.push.NotificationActionButtonInfo): boolean;
				public onNotificationPosted(param0: com.urbanairship.push.NotificationInfo): void;
				public onNotificationOpened(param0: com.urbanairship.push.NotificationInfo): boolean;
				public onNotificationDismissed(param0: com.urbanairship.push.NotificationInfo): void;
				public onNotificationBackgroundAction(param0: com.urbanairship.push.NotificationInfo, param1: com.urbanairship.push.NotificationActionButtonInfo): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NotificationProxyActivity {
				public static class: java.lang.Class<com.urbanairship.push.NotificationProxyActivity>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NotificationProxyReceiver {
				public static class: java.lang.Class<com.urbanairship.push.NotificationProxyReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushListener {
				public static class: java.lang.Class<com.urbanairship.push.PushListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.push.PushListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPushReceived(param0: com.urbanairship.push.PushMessage, param1: boolean): void;
				});
				public constructor();
				public onPushReceived(param0: com.urbanairship.push.PushMessage, param1: boolean): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushManager extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.push.PushManager>;
				public static ACTION_NOTIFICATION_RESPONSE: string;
				public static ACTION_NOTIFICATION_DISMISSED: string;
				public static EXTRA_NOTIFICATION_ID: string;
				public static EXTRA_NOTIFICATION_TAG: string;
				public static EXTRA_PUSH_MESSAGE_BUNDLE: string;
				public static EXTRA_NOTIFICATION_BUTTON_ID: string;
				public static EXTRA_NOTIFICATION_BUTTON_FOREGROUND: string;
				public static EXTRA_NOTIFICATION_CONTENT_INTENT: string;
				public static EXTRA_NOTIFICATION_DELETE_INTENT: string;
				public static EXTRA_NOTIFICATION_ACTION_BUTTON_DESCRIPTION: string;
				public static EXTRA_NOTIFICATION_BUTTON_ACTIONS_PAYLOAD: string;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public getComponentGroup(): number;
				public getNotificationActionGroup(param0: string): com.urbanairship.push.notifications.NotificationActionButtonGroup;
				public onComponentEnableChange(param0: boolean): void;
				/** @deprecated */
				public isInQuietTime(): boolean;
				/** @deprecated */
				public isQuietTimeEnabled(): boolean;
				/** @deprecated */
				public isVibrateEnabled(): boolean;
				public addNotificationActionButtonGroups(param0: globalAndroid.content.Context, param1: number): void;
				/** @deprecated */
				public setPushEnabled(param0: boolean): void;
				public init(): void;
				/** @deprecated */
				public setSoundEnabled(param0: boolean): void;
				public addPushTokenListener(param0: com.urbanairship.push.PushTokenListener): void;
				public setNotificationProvider(param0: com.urbanairship.push.notifications.NotificationProvider): void;
				public isPushAvailable(): boolean;
				/** @deprecated */
				public setQuietTimeEnabled(param0: boolean): void;
				public removePushListener(param0: com.urbanairship.push.PushListener): void;
				/** @deprecated */
				public setVibrateEnabled(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.base.Supplier<com.urbanairship.PushProviders>, param5: com.urbanairship.channel.AirshipChannel, param6: com.urbanairship.analytics.Analytics);
				/** @deprecated */
				public setQuietTimeInterval(param0: java.util.Date, param1: java.util.Date): void;
				public setNotificationListener(param0: com.urbanairship.push.NotificationListener): void;
				public getUserNotificationsEnabled(): boolean;
				public getNotificationChannelRegistry(): com.urbanairship.push.notifications.NotificationChannelRegistry;
				public setUserNotificationsEnabled(param0: boolean): void;
				public removeNotificationActionButtonGroup(param0: string): void;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public getLastReceivedMetadata(): string;
				public removePushTokenListener(param0: com.urbanairship.push.PushTokenListener): void;
				/** @deprecated */
				public isPushTokenRegistrationEnabled(): boolean;
				public addNotificationActionButtonGroup(param0: string, param1: com.urbanairship.push.notifications.NotificationActionButtonGroup): void;
				/** @deprecated */
				public getQuietTimeInterval(): androidNative.Array<java.util.Date>;
				public isOptIn(): boolean;
				/** @deprecated */
				public setPushTokenRegistrationEnabled(param0: boolean): void;
				/** @deprecated */
				public isSoundEnabled(): boolean;
				public getNotificationListener(): com.urbanairship.push.NotificationListener;
				public areNotificationsOptedIn(): boolean;
				public getPushToken(): string;
				/** @deprecated */
				public isPushEnabled(): boolean;
				public getPushProvider(): com.urbanairship.push.PushProvider;
				public getNotificationProvider(): com.urbanairship.push.notifications.NotificationProvider;
				public addPushListener(param0: com.urbanairship.push.PushListener): void;
				public addInternalNotificationListener(param0: com.urbanairship.push.InternalNotificationListener): void;
				public addInternalPushListener(param0: com.urbanairship.push.PushListener): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushMessage extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.push.PushMessage>;
				public static EXTRA_RICH_PUSH_ID: string;
				public static EXTRA_ALERT: string;
				public static EXTRA_SEND_ID: string;
				public static EXTRA_METADATA: string;
				public static EXTRA_ACTIONS: string;
				public static EXTRA_INTERACTIVE_ACTIONS: string;
				public static EXTRA_INTERACTIVE_TYPE: string;
				public static EXTRA_TITLE: string;
				public static EXTRA_SUMMARY: string;
				public static EXTRA_WEARABLE: string;
				public static EXTRA_STYLE: string;
				public static EXTRA_LOCAL_ONLY: string;
				public static EXTRA_ICON_COLOR: string;
				public static EXTRA_ICON: string;
				public static EXTRA_PRIORITY: string;
				public static EXTRA_SOUND: string;
				public static EXTRA_VISIBILITY: string;
				public static EXTRA_PUBLIC_NOTIFICATION: string;
				public static EXTRA_CATEGORY: string;
				public static EXTRA_PUSH_ID: string;
				public static EXTRA_EXPIRATION: string;
				public static EXTRA_IN_APP_MESSAGE: string;
				public static EXTRA_NOTIFICATION_TAG: string;
				public static EXTRA_NOTIFICATION_CHANNEL: string;
				public static EXTRA_DELIVERY_PRIORITY: string;
				public static PRIORITY_HIGH: string;
				public static EXTRA_FOREGROUND_DISPLAY: string;
				public static REMOTE_DATA_UPDATE_KEY: string;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.push.PushMessage>;
				public getExtra(param0: string): string;
				public isAccengagePush(): boolean;
				public isAccengageVisiblePush(): boolean;
				public getNotificationChannel(param0: string): string;
				public isForegroundDisplayable(): boolean;
				public containsKey(param0: string): boolean;
				public getPublicNotificationPayload(): string;
				public getInteractiveNotificationType(): string;
				public getWearablePayload(): string;
				public isLocalOnly(): boolean;
				public getCategory(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static fromJsonValue(param0: com.urbanairship.json.JsonValue): com.urbanairship.push.PushMessage;
				/** @deprecated */
				public getSound(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
				public getIconColor(param0: number): number;
				public getCanonicalPushId(): string;
				public hashCode(): number;
				public getNotificationChannel(): string;
				public equals(param0: any): boolean;
				public getAlert(): string;
				public isRemoteDataUpdate(): boolean;
				public getMetadata(): string;
				public getSummary(): string;
				public getActions(): java.util.Map<string,com.urbanairship.actions.ActionValue>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getIcon(param0: globalAndroid.content.Context, param1: number): number;
				public isAirshipPush(): boolean;
				public getNotificationTag(): string;
				public getPriority(): number;
				public constructor(param0: globalAndroid.os.Bundle);
				public toString(): string;
				public getTitle(): string;
				public getPushBundle(): globalAndroid.os.Bundle;
				public getInteractiveActionsPayload(): string;
				public constructor(param0: java.util.Map<string,string>);
				public static fromIntent(param0: globalAndroid.content.Intent): com.urbanairship.push.PushMessage;
				public getVisibility(): number;
				public getExtra(param0: string, param1: string): string;
				public getRichPushMessageId(): string;
				public getStylePayload(): string;
				public describeContents(): number;
				public containsAirshipKeys(): boolean;
				public getSendId(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushProvider {
				public static class: java.lang.Class<com.urbanairship.push.PushProvider>;
				/**
				 * Constructs a new instance of the com.urbanairship.push.PushProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPlatform(): number;
					getDeliveryType(): string;
					getRegistrationToken(param0: globalAndroid.content.Context): string;
					isAvailable(param0: globalAndroid.content.Context): boolean;
					isSupported(param0: globalAndroid.content.Context): boolean;
				});
				public constructor();
				public static ADM_DELIVERY_TYPE: string;
				public static FCM_DELIVERY_TYPE: string;
				public static HMS_DELIVERY_TYPE: string;
				public isSupported(param0: globalAndroid.content.Context): boolean;
				public getRegistrationToken(param0: globalAndroid.content.Context): string;
				public getPlatform(): number;
				public getDeliveryType(): string;
				public isAvailable(param0: globalAndroid.content.Context): boolean;
			}
			export module PushProvider {
				export class DeliveryType {
					public static class: java.lang.Class<com.urbanairship.push.PushProvider.DeliveryType>;
					/**
					 * Constructs a new instance of the com.urbanairship.push.PushProvider$DeliveryType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class RegistrationException {
					public static class: java.lang.Class<com.urbanairship.push.PushProvider.RegistrationException>;
					public isRecoverable(): boolean;
					public constructor(param0: string, param1: boolean);
					public constructor(param0: string, param1: boolean, param2: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export abstract class PushProviderBridge {
				public static class: java.lang.Class<com.urbanairship.push.PushProviderBridge>;
				/** @deprecated */
				public static requestRegistrationUpdate(param0: globalAndroid.content.Context): void;
				public static processPush(param0: java.lang.Class<any>, param1: com.urbanairship.push.PushMessage): com.urbanairship.push.PushProviderBridge.ProcessPushRequest;
				public static requestRegistrationUpdate(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: string): void;
				public constructor();
			}
			export module PushProviderBridge {
				export class ProcessPushRequest {
					public static class: java.lang.Class<com.urbanairship.push.PushProviderBridge.ProcessPushRequest>;
					public setMaxCallbackWaitTime(param0: number): com.urbanairship.push.PushProviderBridge.ProcessPushRequest;
					public executeSync(param0: globalAndroid.content.Context): void;
					public execute(param0: globalAndroid.content.Context, param1: java.lang.Runnable): void;
					public execute(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushTokenListener {
				public static class: java.lang.Class<com.urbanairship.push.PushTokenListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.push.PushTokenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPushTokenUpdated(param0: string): void;
				});
				public constructor();
				public onPushTokenUpdated(param0: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class QuietTimeInterval extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.push.QuietTimeInterval>;
				public static newBuilder(): com.urbanairship.push.QuietTimeInterval.Builder;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.push.QuietTimeInterval;
				public toString(): string;
			}
			export module QuietTimeInterval {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.push.QuietTimeInterval.Builder>;
					public constructor();
					public setQuietTimeInterval(param0: java.util.Date, param1: java.util.Date): com.urbanairship.push.QuietTimeInterval.Builder;
					public setEndMin(param0: number): com.urbanairship.push.QuietTimeInterval.Builder;
					public build(): com.urbanairship.push.QuietTimeInterval;
					public setStartHour(param0: number): com.urbanairship.push.QuietTimeInterval.Builder;
					public setStartMin(param0: number): com.urbanairship.push.QuietTimeInterval.Builder;
					public setEndHour(param0: number): com.urbanairship.push.QuietTimeInterval.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class ActionsNotificationExtender {
					public static class: java.lang.Class<com.urbanairship.push.notifications.ActionsNotificationExtender>;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.push.notifications.NotificationArguments);
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class AirshipNotificationProvider extends com.urbanairship.push.notifications.NotificationProvider {
					public static class: java.lang.Class<com.urbanairship.push.notifications.AirshipNotificationProvider>;
					public static TAG_NOTIFICATION_ID: number;
					public onCreateNotification(param0: globalAndroid.content.Context, param1: com.urbanairship.push.notifications.NotificationArguments): com.urbanairship.push.notifications.NotificationResult;
					public getDefaultTitle(): number;
					public getDefaultAccentColor(): number;
					public getTitle(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage): string;
					public getLargeIcon(): number;
					public onCreateNotificationArguments(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage): com.urbanairship.push.notifications.NotificationArguments;
					public onNotificationCreated(param0: globalAndroid.content.Context, param1: globalAndroid.app.Notification, param2: com.urbanairship.push.notifications.NotificationArguments): void;
					public setSmallIcon(param0: number): void;
					public setDefaultNotificationChannelId(param0: string): void;
					public onExtendBuilder(param0: globalAndroid.content.Context, param1: androidx.core.app.NotificationCompat.Builder, param2: com.urbanairship.push.notifications.NotificationArguments): androidx.core.app.NotificationCompat.Builder;
					public setLargeIcon(param0: number): void;
					public setDefaultAccentColor(param0: number): void;
					public getSmallIcon(): number;
					public setDefaultTitle(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions);
					public getNextId(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage): number;
					public getDefaultNotificationChannelId(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class CustomLayoutNotificationProvider extends com.urbanairship.push.notifications.AirshipNotificationProvider {
					public static class: java.lang.Class<com.urbanairship.push.notifications.CustomLayoutNotificationProvider>;
					public onCreateNotification(param0: globalAndroid.content.Context, param1: com.urbanairship.push.notifications.NotificationArguments): com.urbanairship.push.notifications.NotificationResult;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions, param2: number);
					public onCreateNotificationArguments(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage): com.urbanairship.push.notifications.NotificationArguments;
					public onNotificationCreated(param0: globalAndroid.content.Context, param1: globalAndroid.app.Notification, param2: com.urbanairship.push.notifications.NotificationArguments): void;
					public onBindContentView(param0: globalAndroid.widget.RemoteViews, param1: com.urbanairship.push.notifications.NotificationArguments): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions);
					public onExtendBuilder(param0: globalAndroid.content.Context, param1: androidx.core.app.NotificationCompat.Builder, param2: com.urbanairship.push.notifications.NotificationArguments): androidx.core.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class LocalizableRemoteInput {
					public static class: java.lang.Class<com.urbanairship.push.notifications.LocalizableRemoteInput>;
					public getAllowFreeFormInput(): boolean;
					public getExtras(): globalAndroid.os.Bundle;
					public getChoices(): androidNative.Array<number>;
					public createRemoteInput(param0: globalAndroid.content.Context): androidx.core.app.RemoteInput;
					public getResultKey(): string;
					public getLabel(): number;
				}
				export module LocalizableRemoteInput {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.push.notifications.LocalizableRemoteInput.Builder>;
						public setLabel(param0: number): com.urbanairship.push.notifications.LocalizableRemoteInput.Builder;
						public build(): com.urbanairship.push.notifications.LocalizableRemoteInput;
						public addExtras(param0: globalAndroid.os.Bundle): com.urbanairship.push.notifications.LocalizableRemoteInput.Builder;
						public constructor(param0: string);
						public setChoices(param0: number): com.urbanairship.push.notifications.LocalizableRemoteInput.Builder;
						public setAllowFreeFormInput(param0: boolean): com.urbanairship.push.notifications.LocalizableRemoteInput.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationActionButton {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationActionButton>;
					public getIcon(): number;
					public isForegroundAction(): boolean;
					public getId(): string;
					public getExtras(): globalAndroid.os.Bundle;
					public getRemoteInputs(): java.util.List<com.urbanairship.push.notifications.LocalizableRemoteInput>;
					public createAndroidNotificationAction(param0: globalAndroid.content.Context, param1: string, param2: com.urbanairship.push.notifications.NotificationArguments): androidx.core.app.NotificationCompat.Action;
					public getDescription(): string;
					public static newBuilder(param0: string): com.urbanairship.push.notifications.NotificationActionButton.Builder;
					public getLabel(param0: globalAndroid.content.Context): string;
				}
				export module NotificationActionButton {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationActionButton.Builder>;
						public setIcon(param0: number): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public setLabel(param0: number): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public setPerformsInForeground(param0: boolean): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public setDescription(param0: string): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public addRemoteInput(param0: com.urbanairship.push.notifications.LocalizableRemoteInput): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public build(): com.urbanairship.push.notifications.NotificationActionButton;
						public extend(param0: androidx.core.app.NotificationCompat.Action.Extender): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public constructor(param0: string);
						public setLabel(param0: string): com.urbanairship.push.notifications.NotificationActionButton.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationActionButtonGroup {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationActionButtonGroup>;
					public getNotificationActionButtons(): java.util.List<com.urbanairship.push.notifications.NotificationActionButton>;
					public static newBuilder(): com.urbanairship.push.notifications.NotificationActionButtonGroup.Builder;
				}
				export module NotificationActionButtonGroup {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationActionButtonGroup.Builder>;
						public constructor();
						public build(): com.urbanairship.push.notifications.NotificationActionButtonGroup;
						public addNotificationActionButton(param0: com.urbanairship.push.notifications.NotificationActionButton): com.urbanairship.push.notifications.NotificationActionButtonGroup.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationArguments {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationArguments>;
					public getNotificationId(): number;
					public getMessage(): com.urbanairship.push.PushMessage;
					public getRequiresLongRunningTask(): boolean;
					public getNotificationTag(): string;
					public getNotificationChannelId(): string;
					public static newBuilder(param0: com.urbanairship.push.PushMessage): com.urbanairship.push.notifications.NotificationArguments.Builder;
				}
				export module NotificationArguments {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationArguments.Builder>;
						public setNotificationChannelId(param0: string): com.urbanairship.push.notifications.NotificationArguments.Builder;
						public setNotificationId(param0: string, param1: number): com.urbanairship.push.notifications.NotificationArguments.Builder;
						public setRequiresLongRunningTask(param0: boolean): com.urbanairship.push.notifications.NotificationArguments.Builder;
						public build(): com.urbanairship.push.notifications.NotificationArguments;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationChannelCompat extends com.urbanairship.json.JsonSerializable {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationChannelCompat>;
					public setLightColor(param0: number): void;
					public setDescription(param0: string): void;
					public getId(): string;
					public getImportance(): number;
					public getGroup(): string;
					public shouldShowLights(): boolean;
					public getSound(): globalAndroid.net.Uri;
					public constructor(param0: globalAndroid.app.NotificationChannel);
					public setBypassDnd(param0: boolean): void;
					public static fromXml(param0: globalAndroid.content.Context, param1: number): java.util.List<com.urbanairship.push.notifications.NotificationChannelCompat>;
					public toString(): string;
					public setShowBadge(param0: boolean): void;
					public constructor(param0: string, param1: string, param2: number);
					public getLockscreenVisibility(): number;
					public getShowBadge(): boolean;
					public hashCode(): number;
					public getLightColor(): number;
					public setGroup(param0: string): void;
					public setVibrationPattern(param0: androidNative.Array<number>): void;
					public getBypassDnd(): boolean;
					public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.push.notifications.NotificationChannelCompat;
					public setImportance(param0: number): void;
					public setLockscreenVisibility(param0: number): void;
					public toNotificationChannel(): globalAndroid.app.NotificationChannel;
					public enableLights(param0: boolean): void;
					public setName(param0: string): void;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public equals(param0: any): boolean;
					public shouldVibrate(): boolean;
					public getVibrationPattern(): androidNative.Array<number>;
					public enableVibration(param0: boolean): void;
					public getName(): string;
					public getDescription(): string;
					public setSound(param0: globalAndroid.net.Uri): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationChannelRegistry {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationChannelRegistry>;
					public getNotificationChannel(param0: string): com.urbanairship.PendingResult<com.urbanairship.push.notifications.NotificationChannelCompat>;
					public getNotificationChannelSync(param0: string): com.urbanairship.push.notifications.NotificationChannelCompat;
					public createNotificationChannel(param0: com.urbanairship.push.notifications.NotificationChannelCompat): void;
					public deleteNotificationChannel(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions);
					public createDeferredNotificationChannel(param0: com.urbanairship.push.notifications.NotificationChannelCompat): void;
					public createNotificationChannels(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationChannelRegistryDataManager extends com.urbanairship.util.DataManager {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationChannelRegistryDataManager>;
					public createChannel(param0: com.urbanairship.push.notifications.NotificationChannelCompat): boolean;
					public deleteChannel(param0: string): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
					public getChannels(): java.util.Set<com.urbanairship.push.notifications.NotificationChannelCompat>;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
					public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public getChannel(param0: string): com.urbanairship.push.notifications.NotificationChannelCompat;
					public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationChannelUtils {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationChannelUtils>;
					public static getActiveChannel(param0: string, param1: string): string;
					public constructor();
					public static applyLegacySettings(param0: globalAndroid.app.Notification, param1: com.urbanairship.push.notifications.NotificationChannelCompat): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationProvider {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationProvider>;
					/**
					 * Constructs a new instance of the com.urbanairship.push.notifications.NotificationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateNotificationArguments(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage): com.urbanairship.push.notifications.NotificationArguments;
						onCreateNotification(param0: globalAndroid.content.Context, param1: com.urbanairship.push.notifications.NotificationArguments): com.urbanairship.push.notifications.NotificationResult;
						onNotificationCreated(param0: globalAndroid.content.Context, param1: globalAndroid.app.Notification, param2: com.urbanairship.push.notifications.NotificationArguments): void;
					});
					public constructor();
					public static DEFAULT_NOTIFICATION_CHANNEL: string;
					public onCreateNotification(param0: globalAndroid.content.Context, param1: com.urbanairship.push.notifications.NotificationArguments): com.urbanairship.push.notifications.NotificationResult;
					public onCreateNotificationArguments(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage): com.urbanairship.push.notifications.NotificationArguments;
					public onNotificationCreated(param0: globalAndroid.content.Context, param1: globalAndroid.app.Notification, param2: com.urbanairship.push.notifications.NotificationArguments): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationResult {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationResult>;
					public static OK: number;
					public static RETRY: number;
					public static CANCEL: number;
					public static notification(param0: globalAndroid.app.Notification): com.urbanairship.push.notifications.NotificationResult;
					public getNotification(): globalAndroid.app.Notification;
					public static retry(): com.urbanairship.push.notifications.NotificationResult;
					public static cancel(): com.urbanairship.push.notifications.NotificationResult;
					public getStatus(): number;
				}
				export module NotificationResult {
					export class Status {
						public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationResult.Status>;
						/**
						 * Constructs a new instance of the com.urbanairship.push.notifications.NotificationResult$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationUtils {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationUtils>;
					public constructor();
					public static fetchBigImage(param0: globalAndroid.content.Context, param1: java.net.URL): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class PublicNotificationExtender {
					public static class: java.lang.Class<com.urbanairship.push.notifications.PublicNotificationExtender>;
					public setSmallIcon(param0: number): com.urbanairship.push.notifications.PublicNotificationExtender;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.push.notifications.NotificationArguments);
					public setAccentColor(param0: number): com.urbanairship.push.notifications.PublicNotificationExtender;
					public setLargeIcon(param0: number): com.urbanairship.push.notifications.PublicNotificationExtender;
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class StyleNotificationExtender {
					public static class: java.lang.Class<com.urbanairship.push.notifications.StyleNotificationExtender>;
					public setDefaultStyle(param0: androidx.core.app.NotificationCompat.Style): com.urbanairship.push.notifications.StyleNotificationExtender;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage);
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class WearableNotificationExtender {
					public static class: java.lang.Class<com.urbanairship.push.notifications.WearableNotificationExtender>;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.push.notifications.NotificationArguments);
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class BiFunction<T, U, R>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.BiFunction<any,any,any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.BiFunction<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: T, param1: U): R;
				});
				public constructor();
				public apply(param0: T, param1: U): R;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class CompoundSubscription extends com.urbanairship.reactive.Subscription {
				public static class: java.lang.Class<com.urbanairship.reactive.CompoundSubscription>;
				public add(param0: com.urbanairship.reactive.Subscription): void;
				public remove(param0: com.urbanairship.reactive.Subscription): void;
				public cancel(): void;
				public constructor(param0: java.lang.Runnable);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Function<T, R>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.Function<any,any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.Function<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: T): R;
				});
				public constructor();
				public apply(param0: T): R;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Observable<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.Observable<any>>;
				public onSubscribe: com.urbanairship.reactive.Function<com.urbanairship.reactive.Observer<T>,com.urbanairship.reactive.Subscription>;
				public map(param0: com.urbanairship.reactive.Function<any,any>): com.urbanairship.reactive.Observable<any>;
				public distinctUntilChanged(): com.urbanairship.reactive.Observable<T>;
				public defaultIfEmpty(param0: T): com.urbanairship.reactive.Observable<T>;
				public static error(param0: java.lang.Exception): com.urbanairship.reactive.Observable<any>;
				public subscribe(param0: com.urbanairship.reactive.Observer<T>): com.urbanairship.reactive.Subscription;
				public static from(param0: java.util.Collection): com.urbanairship.reactive.Observable<any>;
				public observeOn(param0: com.urbanairship.reactive.Scheduler): com.urbanairship.reactive.Observable<T>;
				public constructor();
				public static never(): com.urbanairship.reactive.Observable<any>;
				public static merge(param0: java.util.Collection): com.urbanairship.reactive.Observable<any>;
				public subscribeOn(param0: com.urbanairship.reactive.Scheduler): com.urbanairship.reactive.Observable<T>;
				public static just(param0: any): com.urbanairship.reactive.Observable<any>;
				public static zip(param0: com.urbanairship.reactive.Observable<any>, param1: com.urbanairship.reactive.Observable<any>, param2: com.urbanairship.reactive.BiFunction<any,any,any>): com.urbanairship.reactive.Observable<any>;
				public static create(param0: com.urbanairship.reactive.Function<any,any>): com.urbanairship.reactive.Observable<any>;
				public flatMap(param0: com.urbanairship.reactive.Function<any,any>): com.urbanairship.reactive.Observable<any>;
				public constructor(param0: com.urbanairship.reactive.Function<com.urbanairship.reactive.Observer<T>,com.urbanairship.reactive.Subscription>);
				public static merge(param0: com.urbanairship.reactive.Observable<any>, param1: com.urbanairship.reactive.Observable<any>): com.urbanairship.reactive.Observable<any>;
				public static defer(param0: com.urbanairship.reactive.Supplier<any>): com.urbanairship.reactive.Observable<any>;
				public static empty(): com.urbanairship.reactive.Observable<any>;
				public filter(param0: com.urbanairship.Predicate<T>): com.urbanairship.reactive.Observable<T>;
				public static concat(param0: com.urbanairship.reactive.Observable<any>, param1: com.urbanairship.reactive.Observable<any>): com.urbanairship.reactive.Observable<any>;
			}
			export module Observable {
				export class Holder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.reactive.Observable.Holder<any>>;
				}
				export class ObservableTracker<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.reactive.Observable.ObservableTracker<any>>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Observer<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.Observer<any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.Observer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNext(param0: T): void;
					onCompleted(): void;
					onError(param0: java.lang.Exception): void;
				});
				public constructor();
				public onCompleted(): void;
				public onError(param0: java.lang.Exception): void;
				public onNext(param0: T): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Scheduler {
				public static class: java.lang.Class<com.urbanairship.reactive.Scheduler>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.Scheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					schedule(param0: java.lang.Runnable): com.urbanairship.reactive.Subscription;
					schedule(param0: number, param1: java.lang.Runnable): com.urbanairship.reactive.Subscription;
				});
				public constructor();
				public schedule(param0: java.lang.Runnable): com.urbanairship.reactive.Subscription;
				public schedule(param0: number, param1: java.lang.Runnable): com.urbanairship.reactive.Subscription;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Schedulers {
				public static class: java.lang.Class<com.urbanairship.reactive.Schedulers>;
				public static main(): com.urbanairship.reactive.Schedulers.LooperScheduler;
				public static looper(param0: globalAndroid.os.Looper): com.urbanairship.reactive.Schedulers.LooperScheduler;
				public constructor();
			}
			export module Schedulers {
				export class LooperScheduler extends com.urbanairship.reactive.Scheduler {
					public static class: java.lang.Class<com.urbanairship.reactive.Schedulers.LooperScheduler>;
					public schedule(param0: java.lang.Runnable): com.urbanairship.reactive.Subscription;
					public constructor(param0: globalAndroid.os.Looper);
					public schedule(param0: number, param1: java.lang.Runnable): com.urbanairship.reactive.Subscription;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class SerialSubscription extends com.urbanairship.reactive.Subscription {
				public static class: java.lang.Class<com.urbanairship.reactive.SerialSubscription>;
				public cancel(): void;
				public setSubscription(param0: com.urbanairship.reactive.Subscription): void;
				public constructor(param0: java.lang.Runnable);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Subject<T>  extends com.urbanairship.reactive.Observable<any> implements com.urbanairship.reactive.Observer<any>  {
				public static class: java.lang.Class<com.urbanairship.reactive.Subject<any>>;
				public constructor(param0: com.urbanairship.reactive.Function<com.urbanairship.reactive.Observer<any>,com.urbanairship.reactive.Subscription>);
				public onCompleted(): void;
				public static create(): com.urbanairship.reactive.Subject<any>;
				public onNext(param0: any): void;
				public static create(param0: com.urbanairship.reactive.Function<any,any>): com.urbanairship.reactive.Observable<any>;
				public onError(param0: java.lang.Exception): void;
				public subscribe(param0: com.urbanairship.reactive.Observer<any>): com.urbanairship.reactive.Subscription;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Subscriber<T>  extends com.urbanairship.reactive.Observer<any> {
				public static class: java.lang.Class<com.urbanairship.reactive.Subscriber<any>>;
				public onCompleted(): void;
				public onNext(param0: any): void;
				public onError(param0: java.lang.Exception): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Subscription {
				public static class: java.lang.Class<com.urbanairship.reactive.Subscription>;
				public cancel(): void;
				public static create(param0: java.lang.Runnable): com.urbanairship.reactive.Subscription;
				public static empty(): com.urbanairship.reactive.Subscription;
				public constructor(param0: java.lang.Runnable);
				public isCancelled(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Supplier<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.Supplier<any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(): T;
				});
				public constructor();
				public apply(): T;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class DisableInfo extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.DisableInfo>;
				public static filter(param0: java.util.Collection<com.urbanairship.remoteconfig.DisableInfo>, param1: string, param2: number): java.util.List<com.urbanairship.remoteconfig.DisableInfo>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.remoteconfig.DisableInfo;
				public getRemoteDataRefreshInterval(): number;
				public equals(param0: any): boolean;
				public getDisabledModules(): java.util.Set<string>;
				public static newBuilder(): com.urbanairship.remoteconfig.DisableInfo.Builder;
				public getSdkVersionConstraints(): java.util.Set<string>;
				public getAppVersionPredicate(): com.urbanairship.json.JsonPredicate;
			}
			export module DisableInfo {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.remoteconfig.DisableInfo.Builder>;
					public setRemoteDataInterval(param0: number): com.urbanairship.remoteconfig.DisableInfo.Builder;
					public setAppVersionPredicate(param0: com.urbanairship.json.JsonPredicate): com.urbanairship.remoteconfig.DisableInfo.Builder;
					public setDisabledModules(param0: java.util.Collection<string>): com.urbanairship.remoteconfig.DisableInfo.Builder;
					public setSDKVersionConstraints(param0: java.util.Collection<string>): com.urbanairship.remoteconfig.DisableInfo.Builder;
					public build(): com.urbanairship.remoteconfig.DisableInfo;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class ModuleAdapter {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.ModuleAdapter>;
				public setComponentEnabled(param0: string, param1: boolean): void;
				public onNewConfig(param0: string, param1: com.urbanairship.json.JsonMap): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class Modules {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.Modules>;
				/**
				 * Constructs a new instance of the com.urbanairship.remoteconfig.Modules interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					<clinit>(): void;
				});
				public constructor();
				public static MESSAGE_CENTER: string;
				public static NAMED_USER_MODULE: string;
				public static CHANNEL_MODULE: string;
				public static PREFERENCE_CENTER_MODULE: string;
				public static ANALYTICS_MODULE: string;
				public static IN_APP_MODULE: string;
				public static CHAT_MODULE: string;
				public static LOCATION_MODULE: string;
				public static ALL_MODULES: java.util.List<string>;
				public static PUSH_MODULE: string;
				public static AUTOMATION_MODULE: string;
				public static CONTACT_MODULE: string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class RemoteAirshipConfig extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.RemoteAirshipConfig>;
				public getWalletUrl(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string);
				public getAnalyticsUrl(): string;
				public getChatSocketUrl(): string;
				public getChatUrl(): string;
				public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.remoteconfig.RemoteAirshipConfig;
				public getDeviceApiUrl(): string;
				public getRemoteDataUrl(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class RemoteAirshipConfigListener {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.RemoteAirshipConfigListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.remoteconfig.RemoteAirshipConfigListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRemoteConfigUpdated(param0: com.urbanairship.remoteconfig.RemoteAirshipConfig): void;
				});
				public constructor();
				public onRemoteConfigUpdated(param0: com.urbanairship.remoteconfig.RemoteAirshipConfig): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class RemoteConfigManager extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.RemoteConfigManager>;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public tearDown(): void;
				public addRemoteAirshipConfigListener(param0: com.urbanairship.remoteconfig.RemoteAirshipConfigListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.remotedata.RemoteData);
				public init(): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteData extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteData>;
				public static DEFAULT_FOREGROUND_REFRESH_INTERVAL_MS: number;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore);
				public payloadsForType(param0: string): com.urbanairship.reactive.Observable<com.urbanairship.remotedata.RemoteDataPayload>;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.config.AirshipRuntimeConfig, param3: com.urbanairship.PrivacyManager, param4: com.urbanairship.push.PushManager, param5: com.urbanairship.locale.LocaleManager, param6: com.urbanairship.base.Supplier<com.urbanairship.PushProviders>);
				public isMetadataCurrent(param0: com.urbanairship.json.JsonMap): boolean;
				public init(): void;
				public tearDown(): void;
				public getForegroundRefreshInterval(): number;
				public payloadsForTypes(param0: androidNative.Array<string>): com.urbanairship.reactive.Observable<java.util.Collection<com.urbanairship.remotedata.RemoteDataPayload>>;
				public setForegroundRefreshInterval(param0: number): void;
				public refresh(): void;
				public onUrlConfigUpdated(): void;
				public payloadsForTypes(param0: java.util.Collection<string>): com.urbanairship.reactive.Observable<java.util.Collection<com.urbanairship.remotedata.RemoteDataPayload>>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteDataApiClient {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataApiClient>;
				public getRemoteDataUrl(param0: java.util.Locale): globalAndroid.net.Uri;
			}
			export module RemoteDataApiClient {
				export class PayloadParser {
					public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataApiClient.PayloadParser>;
					/**
					 * Constructs a new instance of the com.urbanairship.remotedata.RemoteDataApiClient$PayloadParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						parse(param0: globalAndroid.net.Uri, param1: com.urbanairship.json.JsonList): java.util.Set<com.urbanairship.remotedata.RemoteDataPayload>;
					});
					public constructor();
					public parse(param0: globalAndroid.net.Uri, param1: com.urbanairship.json.JsonList): java.util.Set<com.urbanairship.remotedata.RemoteDataPayload>;
				}
				export class Result {
					public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataApiClient.Result>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteDataPayload {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataPayload>;
				public static METADATA_LANGUAGE: string;
				public static METADATA_COUNTRY: string;
				public static METADATA_SDK_VERSION: string;
				public getData(): com.urbanairship.json.JsonMap;
				public getType(): string;
				public static newBuilder(): com.urbanairship.remotedata.RemoteDataPayload.Builder;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public getTimestamp(): number;
				public getMetadata(): com.urbanairship.json.JsonMap;
			}
			export module RemoteDataPayload {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataPayload.Builder>;
					public build(): com.urbanairship.remotedata.RemoteDataPayload;
					public setTimeStamp(param0: number): com.urbanairship.remotedata.RemoteDataPayload.Builder;
					public setMetadata(param0: com.urbanairship.json.JsonMap): com.urbanairship.remotedata.RemoteDataPayload.Builder;
					public constructor();
					public setData(param0: com.urbanairship.json.JsonMap): com.urbanairship.remotedata.RemoteDataPayload.Builder;
					public setType(param0: string): com.urbanairship.remotedata.RemoteDataPayload.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteDataStore extends com.urbanairship.util.DataManager {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataStore>;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
				public getPayloads(): java.util.Set<com.urbanairship.remotedata.RemoteDataPayload>;
				public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public savePayloads(param0: java.util.Set<com.urbanairship.remotedata.RemoteDataPayload>): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class AirshipComponentUtils {
				public static class: java.lang.Class<com.urbanairship.util.AirshipComponentUtils>;
				public static callableForComponent(param0: java.lang.Class): java.util.concurrent.Callable;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class AirshipHandlerThread {
				public static class: java.lang.Class<com.urbanairship.util.AirshipHandlerThread>;
				public run(): void;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class AirshipThreadFactory {
				public static class: java.lang.Class<com.urbanairship.util.AirshipThreadFactory>;
				public static THREAD_STATS_TAG: number;
				public static DEFAULT_THREAD_FACTORY: com.urbanairship.util.AirshipThreadFactory;
				public newThread(param0: java.lang.Runnable): java.lang.Thread;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class AttributeSetConfigParser extends com.urbanairship.util.ConfigParser {
				public static class: java.lang.Class<com.urbanairship.util.AttributeSetConfigParser>;
				public getName(param0: number): string;
				public getString(param0: string, param1: string): string;
				public getStringArray(param0: string): androidNative.Array<string>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getLong(param0: string, param1: number): number;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getRawResourceId(param0: string): number;
				public getColor(param0: string, param1: number): number;
				public getString(param0: string): string;
				public getCount(): number;
				public getDrawableResourceId(param0: string): number;
				public getInt(param0: string, param1: number): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class Attributes {
				public static class: java.lang.Class<com.urbanairship.util.Attributes>;
				/**
				 * Constructs a new instance of the com.urbanairship.util.Attributes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static ACCOUNT_CREATION: string;
				public static MOBILE_PHONE: string;
				public static ADVERTISING_ID: string;
				public static CITY: string;
				public static COUNTRY: string;
				public static GENDER: string;
				public static USERNAME: string;
				public static FULL_NAME: string;
				public static TITLE: string;
				public static HOME_PHONE: string;
				public static AGE: string;
				public static ZIP_CODE: string;
				public static LOYALTY_TIER: string;
				public static BIRTHDATE: string;
				public static WORK_PHONE: string;
				public static LAST_NAME: string;
				public static EMAIL: string;
				public static REGION: string;
				public static COMPANY: string;
				public static FIRST_NAME: string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class Checks {
				public static class: java.lang.Class<com.urbanairship.util.Checks>;
				public static checkNotNull(param0: any, param1: string): void;
				public constructor();
				public static checkArgument(param0: boolean, param1: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class Clock {
				public static class: java.lang.Class<com.urbanairship.util.Clock>;
				public static DEFAULT_CLOCK: com.urbanairship.util.Clock;
				public currentTimeMillis(): number;
				public elapsedRealtime(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ColorUtils {
				public static class: java.lang.Class<com.urbanairship.util.ColorUtils>;
				public static convertToString(param0: number): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ConfigParser {
				public static class: java.lang.Class<com.urbanairship.util.ConfigParser>;
				/**
				 * Constructs a new instance of the com.urbanairship.util.ConfigParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCount(): number;
					getName(param0: number): string;
					getString(param0: string): string;
					getString(param0: string, param1: string): string;
					getBoolean(param0: string, param1: boolean): boolean;
					getStringArray(param0: string): androidNative.Array<string>;
					getDrawableResourceId(param0: string): number;
					getColor(param0: string, param1: number): number;
					getLong(param0: string, param1: number): number;
					getInt(param0: string, param1: number): number;
					getRawResourceId(param0: string): number;
				});
				public constructor();
				public getName(param0: number): string;
				public getString(param0: string, param1: string): string;
				public getStringArray(param0: string): androidNative.Array<string>;
				public getLong(param0: string, param1: number): number;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getRawResourceId(param0: string): number;
				public getColor(param0: string, param1: number): number;
				public getString(param0: string): string;
				public getCount(): number;
				public getDrawableResourceId(param0: string): number;
				public getInt(param0: string, param1: number): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ConnectionUtils {
				public static class: java.lang.Class<com.urbanairship.util.ConnectionUtils>;
				public static openSecureConnection(param0: globalAndroid.content.Context, param1: java.net.URL): java.net.URLConnection;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export abstract class DataManager {
				public static class: java.lang.Class<com.urbanairship.util.DataManager>;
				public delete(param0: string, param1: string, param2: androidNative.Array<string>): number;
				public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string, param5: string): globalAndroid.database.Cursor;
				public close(): void;
				public rawQuery(param0: string, param1: androidNative.Array<string>): globalAndroid.database.Cursor;
				public onConfigure(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public getReadableDatabase(): globalAndroid.database.sqlite.SQLiteDatabase;
				public getWritableDatabase(): globalAndroid.database.sqlite.SQLiteDatabase;
				public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public databaseExists(param0: globalAndroid.content.Context): boolean;
				public deleteDatabase(param0: globalAndroid.content.Context): boolean;
				public update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: androidNative.Array<string>): number;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
				public query(param0: string, param1: androidNative.Array<string>, param2: string, param3: androidNative.Array<string>, param4: string): globalAndroid.database.Cursor;
				public insert(param0: string, param1: globalAndroid.content.ContentValues): number;
				public static migrateDatabase(param0: globalAndroid.content.Context, param1: string, param2: string): string;
				public onOpen(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public bulkInsert(param0: string, param1: androidNative.Array<globalAndroid.content.ContentValues>): java.util.List<globalAndroid.content.ContentValues>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class DateUtils {
				public static class: java.lang.Class<com.urbanairship.util.DateUtils>;
				public static parseIso8601(param0: string, param1: number): number;
				public static createIso8601TimeStamp(param0: number): string;
				public static parseIso8601(param0: string): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export abstract class FileUtils {
				public static class: java.lang.Class<com.urbanairship.util.FileUtils>;
				public static downloadFile(param0: java.net.URL, param1: java.io.File): com.urbanairship.util.FileUtils.DownloadResult;
				public static deleteRecursively(param0: java.io.File): boolean;
				public constructor();
			}
			export module FileUtils {
				export class DownloadResult {
					public static class: java.lang.Class<com.urbanairship.util.FileUtils.DownloadResult>;
					public statusCode: number;
					public isSuccess: boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class HelperActivity {
				public static class: java.lang.Class<com.urbanairship.util.HelperActivity>;
				public static PERMISSIONS_EXTRA: string;
				public static RESULT_RECEIVER_EXTRA: string;
				public static RESULT_INTENT_EXTRA: string;
				public static START_ACTIVITY_INTENT_EXTRA: string;
				public static requestPermissions(param0: globalAndroid.content.Context, param1: androidNative.Array<string>): androidNative.Array<number>;
				public static startActivityForResult(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): com.urbanairship.util.HelperActivity.ActivityResult;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
				public constructor();
			}
			export module HelperActivity {
				export class ActivityResult {
					public static class: java.lang.Class<com.urbanairship.util.HelperActivity.ActivityResult>;
					public getResultCode(): number;
					public constructor();
					public getIntent(): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ImageUtils {
				public static class: java.lang.Class<com.urbanairship.util.ImageUtils>;
				public static calculateTargetSize(param0: number, param1: number, param2: number, param3: number): com.urbanairship.util.ImageUtils.Size;
				public static fetchScaledBitmap(param0: globalAndroid.content.Context, param1: java.net.URL, param2: number, param3: number): globalAndroid.graphics.Bitmap;
				public static fetchScaledDrawable(param0: globalAndroid.content.Context, param1: java.net.URL, param2: number, param3: number): com.urbanairship.util.ImageUtils.DrawableResult;
				public static calculateInSampleSize(param0: number, param1: number, param2: number, param3: number): number;
				public constructor();
			}
			export module ImageUtils {
				export class DrawableResult {
					public static class: java.lang.Class<com.urbanairship.util.ImageUtils.DrawableResult>;
					public drawable: globalAndroid.graphics.drawable.Drawable;
					public bytes: number;
				}
				export class ImageProcessor<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.util.ImageUtils.ImageProcessor<any>>;
					/**
					 * Constructs a new instance of the com.urbanairship.util.ImageUtils$ImageProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProcessFile(param0: java.io.File): T;
					});
					public constructor();
					public onProcessFile(param0: java.io.File): T;
				}
				export class Size {
					public static class: java.lang.Class<com.urbanairship.util.ImageUtils.Size>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class IvyVersionMatcher extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.util.IvyVersionMatcher>;
				public static newMatcher(param0: string): com.urbanairship.util.IvyVersionMatcher;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public apply(param0: string): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public apply(param0: any): boolean;
			}
			export module IvyVersionMatcher {
				export class Version extends java.lang.Comparable<com.urbanairship.util.IvyVersionMatcher.Version> {
					public static class: java.lang.Class<com.urbanairship.util.IvyVersionMatcher.Version>;
					public constructor(param0: string);
					public compareTo(param0: com.urbanairship.util.IvyVersionMatcher.Version): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class JsonDataStoreQueue<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.util.JsonDataStoreQueue<any>>;
				public addAll(param0: java.util.List<T>): void;
				public peek(): T;
				public add(param0: T): void;
				public constructor(param0: com.urbanairship.PreferenceDataStore, param1: string, param2: androidx.arch.core.util.Function<T,any>, param3: androidx.arch.core.util.Function<com.urbanairship.json.JsonValue,T>);
				public pop(): T;
				public getList(): java.util.List<T>;
				public apply(param0: androidx.arch.core.util.Function<java.util.List<T>,java.util.List<T>>): void;
				public removeAll(): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ManifestUtils {
				public static class: java.lang.Class<com.urbanairship.util.ManifestUtils>;
				public static ENABLE_LOCAL_STORAGE: string;
				public static LOCAL_STORAGE_DATABASE_DIRECTORY: string;
				public static isPermissionGranted(param0: string): boolean;
				public static getApplicationInfo(): globalAndroid.content.pm.ApplicationInfo;
				public static shouldInstallNetworkSecurityProvider(): boolean;
				public static shouldEnableLocalStorage(): boolean;
				public static getActivityInfo(param0: java.lang.Class): globalAndroid.content.pm.ActivityInfo;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class Network {
				public static class: java.lang.Class<com.urbanairship.util.Network>;
				public static isConnected(): boolean;
				public static getCarrier(): string;
				public constructor();
			}
			export module Network {
				export class ConnectionListener {
					public static class: java.lang.Class<com.urbanairship.util.Network.ConnectionListener>;
					/**
					 * Constructs a new instance of the com.urbanairship.util.Network$ConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnectionChanged(param0: boolean): void;
					});
					public constructor();
					public onConnectionChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class NotificationIdGenerator {
				public static class: java.lang.Class<com.urbanairship.util.NotificationIdGenerator>;
				public static nextID(): number;
				public static getStart(): number;
				public static setStart(param0: number): void;
				public static setRange(param0: number): void;
				public static getRange(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class PendingIntentCompat {
				public static class: java.lang.Class<com.urbanairship.util.PendingIntentCompat>;
				public static FLAG_MUTABLE: number;
				public static getService(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.content.Intent, param3: number): globalAndroid.app.PendingIntent;
				public static getBroadcast(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.content.Intent, param3: number): globalAndroid.app.PendingIntent;
				public static getActivity(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.content.Intent, param3: number): globalAndroid.app.PendingIntent;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class PermissionsRequester {
				public static class: java.lang.Class<com.urbanairship.util.PermissionsRequester>;
				/**
				 * Constructs a new instance of the com.urbanairship.util.PermissionsRequester interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					requestPermissions(param0: globalAndroid.content.Context, param1: java.util.List<string>): androidNative.Array<number>;
				});
				public constructor();
				public requestPermissions(param0: globalAndroid.content.Context, param1: java.util.List<string>): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class PlatformUtils {
				public static class: java.lang.Class<com.urbanairship.util.PlatformUtils>;
				public static AMAZON: string;
				public static ANDROID: string;
				public static UNKNOWN: string;
				public static getDeviceType(param0: number): string;
				public static parsePlatform(param0: number): number;
				public static asString(param0: number): string;
				public constructor();
				public static isPlatformValid(param0: number): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class PropertiesConfigParser extends com.urbanairship.util.ConfigParser {
				public static class: java.lang.Class<com.urbanairship.util.PropertiesConfigParser>;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getColor(param0: string, param1: number): number;
				public getCount(): number;
				public getInt(param0: string, param1: number): number;
				public getName(param0: number): string;
				public getString(param0: string, param1: string): string;
				public getStringArray(param0: string): androidNative.Array<string>;
				public getLong(param0: string, param1: number): number;
				public getRawResourceId(param0: string): number;
				public static fromAssets(param0: globalAndroid.content.Context, param1: string): com.urbanairship.util.PropertiesConfigParser;
				public getString(param0: string): string;
				public getDrawableResourceId(param0: string): number;
				public static fromProperties(param0: globalAndroid.content.Context, param1: java.util.Properties): com.urbanairship.util.PropertiesConfigParser;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class RetryingExecutor {
				public static class: java.lang.Class<com.urbanairship.util.RetryingExecutor>;
				public static RESULT_FINISHED: number;
				public static RESULT_RETRY: number;
				public static RESULT_CANCEL: number;
				public execute(param0: java.lang.Runnable): void;
				public execute(param0: androidNative.Array<com.urbanairship.util.RetryingExecutor.Operation>): void;
				public static newSerialExecutor(param0: globalAndroid.os.Looper): com.urbanairship.util.RetryingExecutor;
				public execute(param0: com.urbanairship.util.RetryingExecutor.Operation): void;
				public constructor(param0: globalAndroid.os.Handler, param1: java.util.concurrent.Executor);
				public setPaused(param0: boolean): void;
			}
			export module RetryingExecutor {
				export class ChainedOperations extends com.urbanairship.util.RetryingExecutor.Operation {
					public static class: java.lang.Class<com.urbanairship.util.RetryingExecutor.ChainedOperations>;
					public run(): number;
				}
				export class Operation {
					public static class: java.lang.Class<com.urbanairship.util.RetryingExecutor.Operation>;
					/**
					 * Constructs a new instance of the com.urbanairship.util.RetryingExecutor$Operation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						run(): number;
					});
					public constructor();
					public run(): number;
				}
				export class Result {
					public static class: java.lang.Class<com.urbanairship.util.RetryingExecutor.Result>;
					/**
					 * Constructs a new instance of the com.urbanairship.util.RetryingExecutor$Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class SerialExecutor {
				public static class: java.lang.Class<com.urbanairship.util.SerialExecutor>;
				public execute(param0: java.lang.Runnable): void;
				public constructor(param0: java.util.concurrent.Executor);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class UAHttpStatusUtil {
				public static class: java.lang.Class<com.urbanairship.util.UAHttpStatusUtil>;
				public static inRedirectionRange(param0: number): boolean;
				public static inClientErrorRange(param0: number): boolean;
				public static inServerErrorRange(param0: number): boolean;
				public static inSuccessRange(param0: number): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export abstract class UAMathUtil {
				public static class: java.lang.Class<com.urbanairship.util.UAMathUtil>;
				public static constrain(param0: number, param1: number, param2: number): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export abstract class UAStringUtil {
				public static class: java.lang.Class<com.urbanairship.util.UAStringUtil>;
				public static namedStringResource(param0: globalAndroid.content.Context, param1: string, param2: string): string;
				public static base64Decode(param0: string): androidNative.Array<number>;
				public static sha256Digest(param0: string): androidNative.Array<number>;
				public static byteToHex(param0: androidNative.Array<number>): string;
				public static equals(param0: string, param1: string): boolean;
				public static nullIfEmpty(param0: string): string;
				public static repeat(param0: string, param1: number, param2: string): string;
				public static base64DecodedString(param0: string): string;
				public static join(param0: java.util.Collection<string>, param1: string): string;
				public static isEmpty(param0: string): boolean;
				public constructor();
				public static sha256(param0: string): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class UriUtils {
				public static class: java.lang.Class<com.urbanairship.util.UriUtils>;
				public static getQueryParameters(param0: globalAndroid.net.Uri): java.util.Map<string,java.util.List<string>>;
				public static parse(param0: any): globalAndroid.net.Uri;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class VersionUtils {
				public static class: java.lang.Class<com.urbanairship.util.VersionUtils>;
				public static createVersionPredicate(param0: com.urbanairship.json.ValueMatcher): com.urbanairship.json.JsonPredicate;
				public static createVersionObject(): com.urbanairship.json.JsonSerializable;
				public static createVersionObject(param0: number): com.urbanairship.json.JsonSerializable;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ViewUtils {
				public static class: java.lang.Class<com.urbanairship.util.ViewUtils>;
				public static applyTextStyle(param0: globalAndroid.content.Context, param1: globalAndroid.widget.TextView, param2: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class XmlConfigParser extends com.urbanairship.util.AttributeSetConfigParser {
				public static class: java.lang.Class<com.urbanairship.util.XmlConfigParser>;
				public close(): void;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getColor(param0: string, param1: number): number;
				public getCount(): number;
				public getInt(param0: string, param1: number): number;
				public static parseElement(param0: globalAndroid.content.Context, param1: number, param2: string): com.urbanairship.util.XmlConfigParser;
				public getName(param0: number): string;
				public getString(param0: string, param1: string): string;
				public getStringArray(param0: string): androidNative.Array<string>;
				public getLong(param0: string, param1: number): number;
				public getRawResourceId(param0: string): number;
				public getString(param0: string): string;
				public getDrawableResourceId(param0: string): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class Callback {
				public static class: java.lang.Class<com.urbanairship.wallet.Callback>;
				/**
				 * Constructs a new instance of the com.urbanairship.wallet.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onResult(param0: com.urbanairship.wallet.Pass): void;
					onError(param0: number): void;
				});
				public constructor();
				public onResult(param0: com.urbanairship.wallet.Pass): void;
				public onError(param0: number): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class CancelableCallback extends com.urbanairship.CancelableOperation {
				public static class: java.lang.Class<com.urbanairship.wallet.CancelableCallback>;
				public isDone(): boolean;
				public onCancel(): void;
				public constructor(param0: globalAndroid.os.Looper);
				public cancel(): boolean;
				public cancel(param0: boolean): boolean;
				public onRun(): void;
				public constructor(param0: com.urbanairship.wallet.Callback, param1: globalAndroid.os.Looper);
				public isCancelled(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class Field extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.wallet.Field>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public toString(): string;
				public static newBuilder(): com.urbanairship.wallet.Field.Builder;
			}
			export module Field {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.wallet.Field.Builder>;
					public setValue(param0: number): com.urbanairship.wallet.Field.Builder;
					public constructor();
					public setLabel(param0: string): com.urbanairship.wallet.Field.Builder;
					public setName(param0: string): com.urbanairship.wallet.Field.Builder;
					public setValue(param0: string): com.urbanairship.wallet.Field.Builder;
					public build(): com.urbanairship.wallet.Field;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class Pass {
				public static class: java.lang.Class<com.urbanairship.wallet.Pass>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.wallet.Pass>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public requestToSavePass(param0: globalAndroid.content.Context): void;
				public getId(): string;
				public describeContents(): number;
				public getPublicUri(): globalAndroid.net.Uri;
				public constructor(param0: globalAndroid.os.Parcel);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class PassRequest {
				public static class: java.lang.Class<com.urbanairship.wallet.PassRequest>;
				public execute(param0: com.urbanairship.wallet.Callback): void;
				public static newBuilder(): com.urbanairship.wallet.PassRequest.Builder;
				public cancel(): void;
				public execute(param0: com.urbanairship.wallet.Callback, param1: globalAndroid.os.Looper): void;
				public toString(): string;
			}
			export module PassRequest {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.wallet.PassRequest.Builder>;
					public build(): com.urbanairship.wallet.PassRequest;
					public setExpirationDate(param0: string, param1: string): com.urbanairship.wallet.PassRequest.Builder;
					public constructor();
					public setBarcodeValue(param0: string, param1: string): com.urbanairship.wallet.PassRequest.Builder;
					public setTag(param0: string): com.urbanairship.wallet.PassRequest.Builder;
					public setAuth(param0: string, param1: string): com.urbanairship.wallet.PassRequest.Builder;
					public addField(param0: com.urbanairship.wallet.Field): com.urbanairship.wallet.PassRequest.Builder;
					public setBarcodeAltText(param0: string, param1: string): com.urbanairship.wallet.PassRequest.Builder;
					public setTemplateId(param0: string): com.urbanairship.wallet.PassRequest.Builder;
					public setExternalId(param0: string): com.urbanairship.wallet.PassRequest.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module webkit {
			export class AirshipWebChromeClient {
				public static class: java.lang.Class<com.urbanairship.webkit.AirshipWebChromeClient>;
				public onHideCustomView(): void;
				public onCreateWindow(param0: globalAndroid.webkit.WebView, param1: boolean, param2: boolean, param3: globalAndroid.os.Message): boolean;
				public constructor(param0: globalAndroid.app.Activity);
				public getDefaultVideoPoster(): globalAndroid.graphics.Bitmap;
				public onShowCustomView(param0: globalAndroid.view.View, param1: globalAndroid.webkit.WebChromeClient.CustomViewCallback): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module webkit {
			export class AirshipWebView {
				public static class: java.lang.Class<com.urbanairship.webkit.AirshipWebView>;
				public setClientAuthRequest(param0: string, param1: string, param2: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public loadUrl(param0: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onPreLoad(): void;
				public loadDataWithBaseURL(param0: string, param1: string, param2: string, param3: string, param4: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public populateCustomJavascriptInterfaces(): void;
				public loadUrl(param0: string, param1: java.util.Map<string,string>): void;
				public constructor(param0: globalAndroid.content.Context);
				public loadData(param0: string, param1: string, param2: string): void;
				public initializeView(): void;
				public createBasicAuth(param0: string, param1: string): string;
				public setWebViewClient(param0: globalAndroid.webkit.WebViewClient): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module webkit {
			export class AirshipWebViewClient {
				public static class: java.lang.Class<com.urbanairship.webkit.AirshipWebViewClient>;
				public extendJavascriptEnvironment(param0: com.urbanairship.javascript.JavaScriptEnvironment.Builder, param1: globalAndroid.webkit.WebView): com.urbanairship.javascript.JavaScriptEnvironment.Builder;
				public onPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
				public isAllowed(param0: string): boolean;
				public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
				public setFaviconEnabled(param0: boolean): void;
				public setActionCompletionCallback(param0: com.urbanairship.actions.ActionCompletionCallback): void;
				public addAuthRequestCredentials(param0: string, param1: string, param2: string): void;
				public onClose(param0: globalAndroid.webkit.WebView): void;
				public constructor(param0: com.urbanairship.actions.ActionRunRequestFactory);
				public extendActionRequest(param0: com.urbanairship.actions.ActionRunRequest, param1: globalAndroid.webkit.WebView): com.urbanairship.actions.ActionRunRequest;
				public constructor();
				public onLoadResource(param0: globalAndroid.webkit.WebView, param1: string): void;
				public removeAuthRequestCredentials(param0: string): void;
				public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: string): globalAndroid.webkit.WebResourceResponse;
				public constructor(param0: com.urbanairship.javascript.NativeBridge);
				public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
				public shouldInterceptRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest): globalAndroid.webkit.WebResourceResponse;
				public onReceivedHttpAuthRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.HttpAuthHandler, param2: string, param3: string): void;
				public onAirshipCommand(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.net.Uri): void;
			}
			export module AirshipWebViewClient {
				export class Credentials {
					public static class: java.lang.Class<com.urbanairship.webkit.AirshipWebViewClient.Credentials>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module webkit {
			export class WebViewJavaScriptExecutor extends com.urbanairship.javascript.JavaScriptExecutor {
				public static class: java.lang.Class<com.urbanairship.webkit.WebViewJavaScriptExecutor>;
				public executeJavaScript(param0: string): void;
				public constructor(param0: globalAndroid.webkit.WebView);
			}
		}
	}
}

//Generics information:
//com.urbanairship.PendingResult:1
//com.urbanairship.Predicate:1
//com.urbanairship.ResultCallback:1
//com.urbanairship.base.Supplier:1
//com.urbanairship.http.Response:1
//com.urbanairship.http.Response.Builder:1
//com.urbanairship.http.ResponseParser:1
//com.urbanairship.reactive.BiFunction:3
//com.urbanairship.reactive.Function:2
//com.urbanairship.reactive.Observable:1
//com.urbanairship.reactive.Observable.Holder:1
//com.urbanairship.reactive.Observable.ObservableTracker:1
//com.urbanairship.reactive.Observer:1
//com.urbanairship.reactive.Subject:1
//com.urbanairship.reactive.Subscriber:1
//com.urbanairship.reactive.Supplier:1
//com.urbanairship.util.ImageUtils.ImageProcessor:1
//com.urbanairship.util.JsonDataStoreQueue:1

