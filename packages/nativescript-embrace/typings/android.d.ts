declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ActivityListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ActivityListener>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.ActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBackground(): void;
						onForeground(param0: boolean, param1: number): void;
						applicationStartupComplete(): void;
						onView(param0: globalAndroid.app.Activity): void;
						onViewClose(param0: globalAndroid.app.Activity): void;
					});
					public constructor();
					public applicationStartupComplete(): void;
					public onView(param0: globalAndroid.app.Activity): void;
					public onBackground(): void;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public onForeground(param0: boolean, param1: number): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ActivityService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ActivityService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.ActivityService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isInBackground(): boolean;
						getForegroundActivity(): io.embrace.android.embracesdk.utils.optional.Optional<globalAndroid.app.Activity>;
						addListener(param0: io.embrace.android.embracesdk.ActivityListener, param1: boolean): void;
						addListener(param0: io.embrace.android.embracesdk.ActivityListener): void;
						removeListener(param0: io.embrace.android.embracesdk.ActivityListener): void;
					});
					public constructor();
					public addListener(param0: io.embrace.android.embracesdk.ActivityListener): void;
					public removeListener(param0: io.embrace.android.embracesdk.ActivityListener): void;
					public isInBackground(): boolean;
					public addListener(param0: io.embrace.android.embracesdk.ActivityListener, param1: boolean): void;
					public getForegroundActivity(): io.embrace.android.embracesdk.utils.optional.Optional<globalAndroid.app.Activity>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class AnrInterval {
					public static class: java.lang.Class<io.embrace.android.embracesdk.AnrInterval>;
					public static newBuilder(): io.embrace.android.embracesdk.AnrInterval.Builder;
				}
				export module AnrInterval {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.AnrInterval.Builder>;
						public build(): io.embrace.android.embracesdk.AnrInterval;
					}
					export class Type {
						public static class: java.lang.Class<io.embrace.android.embracesdk.AnrInterval.Type>;
						public static UI: io.embrace.android.embracesdk.AnrInterval.Type;
						public static valueOf(param0: string): io.embrace.android.embracesdk.AnrInterval.Type;
						public static values(): androidNative.Array<io.embrace.android.embracesdk.AnrInterval.Type>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class AnrService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.AnrService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.AnrService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAnrIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.AnrInterval>;
						forceANRTrackingStopOnCrash(): void;
					});
					public constructor();
					public getAnrIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.AnrInterval>;
					public forceANRTrackingStopOnCrash(): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class AnrStacktraces {
					public static class: java.lang.Class<io.embrace.android.embracesdk.AnrStacktraces>;
					public add(param0: io.embrace.android.embracesdk.AnrTick): void;
					public getTicks(): java.util.List<io.embrace.android.embracesdk.AnrTick>;
					public size(): number;
					public addAll(param0: java.util.List<io.embrace.android.embracesdk.AnrTick>): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class AnrTick {
					public static class: java.lang.Class<io.embrace.android.embracesdk.AnrTick>;
					public equals(param0: any): boolean;
					public add(param0: io.embrace.android.embracesdk.ThreadInfo): void;
					public isEmpty(): boolean;
					public getTimestamp(): number;
					public hashCode(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ApiClient {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ApiClient>;
					public close(): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ApiClientRetryWorker<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ApiClientRetryWorker<any>>;
				}
				export module ApiClientRetryWorker {
					export class FailedApiCall<P>  extends java.lang.Object {
						public static class: java.lang.Class<io.embrace.android.embracesdk.ApiClientRetryWorker.FailedApiCall<any>>;
					}
					export class FailedCalls<P>  extends java.lang.Object {
						public static class: java.lang.Class<io.embrace.android.embracesdk.ApiClientRetryWorker.FailedCalls<any>>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ApiRequest {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ApiRequest>;
				}
				export module ApiRequest {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.ApiRequest.Builder>;
						public withHttpMethod(param0: io.embrace.android.embracesdk.network.http.HttpMethod): io.embrace.android.embracesdk.ApiRequest.Builder;
						public build(): io.embrace.android.embracesdk.ApiRequest;
						public withAppId(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withUrl(param0: io.embrace.android.embracesdk.networking.EmbraceUrl): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withLogId(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withUserAgent(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withContentEncoding(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withDeviceId(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withEventId(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withContentType(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withAcceptEncoding(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
						public withAccept(param0: string): io.embrace.android.embracesdk.ApiRequest.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class AppInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.AppInfo>;
					public toJson(): string;
				}
				export module AppInfo {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.AppInfo.Builder>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class BackgroundWorker {
					public static class: java.lang.Class<io.embrace.android.embracesdk.BackgroundWorker>;
					public static ofSingleThread(param0: string): io.embrace.android.embracesdk.BackgroundWorker;
					public close(): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class BatteryMeasurement {
					public static class: java.lang.Class<io.embrace.android.embracesdk.BatteryMeasurement>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Breadcrumb {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Breadcrumb>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.Breadcrumb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getStartTime(): number;
					});
					public constructor();
					public getStartTime(): number;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class BreadcrumbService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.BreadcrumbService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.BreadcrumbService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getViewBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.ViewBreadcrumb>;
						getTapBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.TapBreadcrumb>;
						getCustomBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.CustomBreadcrumb>;
						getWebViewBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.WebViewBreadcrumb>;
						getFragmentBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.FragmentBreadcrumb>;
						getBreadcrumbs(param0: number, param1: number): io.embrace.android.embracesdk.Breadcrumbs;
						logView(param0: string, param1: number): void;
						forceLogView(param0: string, param1: number): void;
						startFragment(param0: string): boolean;
						endFragment(param0: string): boolean;
						logTap(param0: globalAndroid.util.Pair<java.lang.Float,java.lang.Float>, param1: string, param2: number, param3: io.embrace.android.embracesdk.TapBreadcrumb.TapBreadcrumbType): void;
						logCustom(param0: string, param1: number): void;
						logWebView(param0: string, param1: number): void;
						getLastViewBreadcrumbScreenName(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					});
					public constructor();
					public getTapBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.TapBreadcrumb>;
					public logView(param0: string, param1: number): void;
					public getViewBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.ViewBreadcrumb>;
					public getBreadcrumbs(param0: number, param1: number): io.embrace.android.embracesdk.Breadcrumbs;
					public logCustom(param0: string, param1: number): void;
					public getFragmentBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.FragmentBreadcrumb>;
					public getCustomBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.CustomBreadcrumb>;
					public startFragment(param0: string): boolean;
					public logTap(param0: globalAndroid.util.Pair<java.lang.Float,java.lang.Float>, param1: string, param2: number, param3: io.embrace.android.embracesdk.TapBreadcrumb.TapBreadcrumbType): void;
					public logWebView(param0: string, param1: number): void;
					public endFragment(param0: string): boolean;
					public getWebViewBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.WebViewBreadcrumb>;
					public forceLogView(param0: string, param1: number): void;
					public getLastViewBreadcrumbScreenName(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Breadcrumbs {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Breadcrumbs>;
				}
				export module Breadcrumbs {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Breadcrumbs.Builder>;
						public withWebViewBreadcrumbs(param0: java.util.List<io.embrace.android.embracesdk.WebViewBreadcrumb>): io.embrace.android.embracesdk.Breadcrumbs.Builder;
						public withFragmentBreadcrumbs(param0: java.util.List<io.embrace.android.embracesdk.FragmentBreadcrumb>): io.embrace.android.embracesdk.Breadcrumbs.Builder;
						public withCustomBreadcrumbs(param0: java.util.List<io.embrace.android.embracesdk.CustomBreadcrumb>): io.embrace.android.embracesdk.Breadcrumbs.Builder;
						public withTapBreadcrumbs(param0: java.util.List<io.embrace.android.embracesdk.TapBreadcrumb>): io.embrace.android.embracesdk.Breadcrumbs.Builder;
						public build(): io.embrace.android.embracesdk.Breadcrumbs;
						public withViewBreadcrumbs(param0: java.util.List<io.embrace.android.embracesdk.ViewBreadcrumb>): io.embrace.android.embracesdk.Breadcrumbs.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class BuildConfig {
					public static class: java.lang.Class<io.embrace.android.embracesdk.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class BuildInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.BuildInfo>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class CacheService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.CacheService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.CacheService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cacheObject(param0: string, param1: any, param2: java.lang.Class): void;
						loadObject(param0: string, param1: java.lang.Class): io.embrace.android.embracesdk.utils.optional.Optional<any>;
						loadObjectsByRegex(param0: string, param1: java.lang.Class): java.util.List;
						deleteObject(param0: string): boolean;
						deleteObjectsByRegex(param0: string): boolean;
						moveObject(param0: string, param1: string): boolean;
					});
					public constructor();
					public cacheObject(param0: string, param1: any, param2: java.lang.Class): void;
					public moveObject(param0: string, param1: string): boolean;
					public deleteObject(param0: string): boolean;
					public loadObject(param0: string, param1: java.lang.Class): io.embrace.android.embracesdk.utils.optional.Optional<any>;
					public deleteObjectsByRegex(param0: string): boolean;
					public loadObjectsByRegex(param0: string, param1: java.lang.Class): java.util.List;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Clock {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Clock>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						now(): number;
					});
					public constructor();
					public now(): number;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Config {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Config>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
				export module Config {
					export class AnrConfig {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Config.AnrConfig>;
						public getMinDuration(): number;
						public isMainThreadOnly(): boolean;
						public getStacktracesPerInterval(): number;
						public getStacktraceMaxLength(): number;
						public getAllowPatternList(): java.util.List<java.util.regex.Pattern>;
						public getPriority(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getIntervalMs(): number;
						public getBlockPatternList(): java.util.List<java.util.regex.Pattern>;
						public getMaxAnrCapturedIntervalsPerSession(): number;
						public getPctEnabled(): number;
					}
					export class LogConfig {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Config.LogConfig>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export class NetworkConfig {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Config.NetworkConfig>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export class SessionControl {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Config.SessionControl>;
						public endSessionInBackgroundThread(): boolean;
					}
					export class UiConfig {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Config.UiConfig>;
						public getWebViews(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
						public getFragments(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
						public getViews(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getBreadcrumbs(): number;
						public getTaps(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ConfigListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ConfigListener>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.ConfigListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConfigChange(param0: io.embrace.android.embracesdk.Config, param1: io.embrace.android.embracesdk.Config): void;
					});
					public constructor();
					public onConfigChange(param0: io.embrace.android.embracesdk.Config, param1: io.embrace.android.embracesdk.Config): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ConfigService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ConfigService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.ConfigService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getConfig(): io.embrace.android.embracesdk.Config;
						isScreenshotDisabledForEvent(param0: string): boolean;
						isEventDisabled(param0: string): boolean;
						isLogMessageDisabled(param0: string): boolean;
						isMessageTypeDisabled(param0: io.embrace.android.embracesdk.MessageType): boolean;
						isUrlDisabled(param0: string): boolean;
						isSdkDisabled(): boolean;
						isAnrCaptureEnabled(): boolean;
						addListener(param0: io.embrace.android.embracesdk.ConfigListener): void;
						removeListener(param0: io.embrace.android.embracesdk.ConfigListener): void;
						isSessionControlEnabled(): boolean;
						isInternalExceptionCaptureEnabled(): boolean;
					});
					public constructor();
					public isLogMessageDisabled(param0: string): boolean;
					public isMessageTypeDisabled(param0: io.embrace.android.embracesdk.MessageType): boolean;
					public removeListener(param0: io.embrace.android.embracesdk.ConfigListener): void;
					public isEventDisabled(param0: string): boolean;
					public isSessionControlEnabled(): boolean;
					public addListener(param0: io.embrace.android.embracesdk.ConfigListener): void;
					public isSdkDisabled(): boolean;
					public isScreenshotDisabledForEvent(param0: string): boolean;
					public isInternalExceptionCaptureEnabled(): boolean;
					public getConfig(): io.embrace.android.embracesdk.Config;
					public isUrlDisabled(param0: string): boolean;
					public isAnrCaptureEnabled(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ConnectionQuality {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ConnectionQuality>;
					public static POOR: io.embrace.android.embracesdk.ConnectionQuality;
					public static MODERATE: io.embrace.android.embracesdk.ConnectionQuality;
					public static GOOD: io.embrace.android.embracesdk.ConnectionQuality;
					public static EXCELLENT: io.embrace.android.embracesdk.ConnectionQuality;
					public static UNKNOWN: io.embrace.android.embracesdk.ConnectionQuality;
					public static values(): androidNative.Array<io.embrace.android.embracesdk.ConnectionQuality>;
					public static valueOf(param0: string): io.embrace.android.embracesdk.ConnectionQuality;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ConnectionQualityInterval {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ConnectionQualityInterval>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ConnectionQualityListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ConnectionQualityListener>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.ConnectionQualityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnectionQualityChange(param0: io.embrace.android.embracesdk.ConnectionQuality, param1: io.embrace.android.embracesdk.ConnectionQuality, param2: number): void;
					});
					public constructor();
					public onConnectionQualityChange(param0: io.embrace.android.embracesdk.ConnectionQuality, param1: io.embrace.android.embracesdk.ConnectionQuality, param2: number): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Crash {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Crash>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class CrashService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.CrashService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.CrashService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handleCrash(param0: java.lang.Thread, param1: java.lang.Throwable): void;
						logUnhandledJsException(param0: io.embrace.android.embracesdk.JsException): void;
					});
					public constructor();
					public logUnhandledJsException(param0: io.embrace.android.embracesdk.JsException): void;
					public handleCrash(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class CustomBreadcrumb extends io.embrace.android.embracesdk.Breadcrumb {
					public static class: java.lang.Class<io.embrace.android.embracesdk.CustomBreadcrumb>;
					public getStartTime(): number;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export abstract class CustomFlow {
					public static class: java.lang.Class<io.embrace.android.embracesdk.CustomFlow>;
					public static PROP_MOMENT_ID: string;
					public static PROP_MOMENT_NAME: string;
					public static PROP_MESSAGE: string;
					public customMoments: java.util.Map<string,java.util.Map<string,io.embrace.android.embracesdk.CustomFlow.Moment>>;
					public momentFail(param0: string, param1: string): boolean;
					public momentComplete(param0: string): boolean;
					public momentFail(param0: string, param1: string, param2: string): boolean;
					public sendLogError(param0: string, param1: boolean, param2: java.util.Map<string,any>): void;
					public constructor();
					public momentComplete(param0: string, param1: string): boolean;
					public sendMomentStartEvent(param0: string, param1: string, param2: boolean, param3: java.util.Map<string,any>): void;
					public momentComplete(param0: string, param1: string, param2: java.util.Map<string,any>): boolean;
					public sendMomentEndEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public sendLogInfo(param0: string, param1: java.util.Map<string,any>): void;
					public momentStart(param0: string, param1: boolean, param2: java.util.Map<string,any>): string;
					public momentFail(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>): boolean;
				}
				export module CustomFlow {
					export class Moment {
						public static class: java.lang.Class<io.embrace.android.embracesdk.CustomFlow.Moment>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class DeviceInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.DeviceInfo>;
					public toJson(): string;
					public static newBuilder(): io.embrace.android.embracesdk.DeviceInfo.Builder;
				}
				export module DeviceInfo {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.DeviceInfo.Builder>;
						public withModel(param0: string): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withInternalStorageTotalCapacity(param0: java.lang.Long): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withScreenResolution(param0: string): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withOperatingSystemType(param0: string): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public build(): io.embrace.android.embracesdk.DeviceInfo;
						public withOperatingSystemVersionCode(param0: java.lang.Integer): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withTimezoneDescription(param0: string): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withArchitecture(param0: string): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withJailbroken(param0: java.lang.Boolean): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withUptime(param0: java.lang.Long): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withOperatingSystemVersion(param0: string): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withManufacturer(param0: string): io.embrace.android.embracesdk.DeviceInfo.Builder;
						public withLocale(param0: string): io.embrace.android.embracesdk.DeviceInfo.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class DiskUsage {
					public static class: java.lang.Class<io.embrace.android.embracesdk.DiskUsage>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Embrace {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Embrace>;
					public setUserAsPayer(): void;
					public endSession(): void;
					public setUserEmail(param0: string): void;
					public logNetworkClientError(param0: string, param1: io.embrace.android.embracesdk.network.http.HttpMethod, param2: number, param3: number, param4: string, param5: string): void;
					/** @deprecated */
					public setLogLevel(param0: io.embrace.android.embracesdk.EmbraceLogger.Severity): void;
					public clearUserPersona(param0: string): void;
					public enableDebugLogging(): void;
					public isStarted(): boolean;
					public endEvent(param0: string): void;
					public clearUserIdentifier(): void;
					public endFragment(param0: string): boolean;
					public logError(param0: string, param1: java.util.Map<string,any>, param2: boolean, param3: string, param4: boolean): void;
					public constructor();
					public start(param0: globalAndroid.content.Context, param1: boolean): void;
					public getTraceIdHeader(): string;
					public logNetworkRequest(param0: io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2): void;
					public logNetworkCall(param0: string, param1: io.embrace.android.embracesdk.network.http.HttpMethod, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public logError(param0: java.lang.Throwable, param1: string, param2: java.util.Map<string,any>, param3: boolean): void;
					public start(param0: globalAndroid.content.Context, param1: boolean, param2: io.embrace.android.embracesdk.Embrace.AppFramework): void;
					public endAppStartup(): void;
					/** @deprecated */
					public removeConnectionQualityListener(param0: io.embrace.android.embracesdk.ConnectionQualityListener): void;
					public startEvent(param0: string, param1: string): void;
					public removeSessionProperty(param0: string): boolean;
					public logError(param0: string, param1: java.util.Map<string,any>, param2: boolean, param3: string): void;
					public logError(param0: java.lang.Throwable, param1: java.util.Map<string,any>, param2: boolean): void;
					public logError(param0: java.lang.Throwable): void;
					public setJavaScriptPatchNumber(param0: string): void;
					public setUserPersona(param0: string): void;
					public addSessionProperty(param0: string, param1: string, param2: boolean): boolean;
					public logWarning(param0: string, param1: java.util.Map<string,any>, param2: boolean, param3: string): void;
					public logError(param0: string): void;
					public logNetworkClientError(param0: string, param1: io.embrace.android.embracesdk.network.http.HttpMethod, param2: number, param3: number, param4: string, param5: string, param6: string): void;
					public logError(param0: java.lang.Throwable, param1: java.util.Map<string,any>): void;
					public static getInstance(): io.embrace.android.embracesdk.Embrace;
					public clearUserEmail(): void;
					public clearUsername(): void;
					public startFragment(param0: string): boolean;
					public clearUserAsPayer(): void;
					public startEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public logError(param0: string, param1: java.util.Map<string,any>, param2: boolean): void;
					public getLocalConfig(): io.embrace.android.embracesdk.LocalConfig;
					public logBreadcrumb(param0: string): void;
					public disableDebugLogging(): void;
					public setJavaScriptBundleURL(param0: string): void;
					public getSessionProperties(): java.util.Map<string,string>;
					public endEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public logNetworkCall(param0: string, param1: io.embrace.android.embracesdk.network.http.HttpMethod, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string): void;
					public logWarning(param0: string, param1: java.util.Map<string,any>): void;
					public endEvent(param0: string, param1: string): void;
					public logInfo(param0: string, param1: java.util.Map<string,any>): void;
					public endAppStartup(param0: java.util.Map<string,any>): void;
					public setUnityMetaData(param0: string, param1: string): void;
					/** @deprecated */
					public addConnectionQualityListener(param0: io.embrace.android.embracesdk.ConnectionQualityListener): void;
					public clearAllUserPersonas(): void;
					public startEvent(param0: string, param1: string, param2: boolean): void;
					public setUserIdentifier(param0: string): void;
					public endEvent(param0: string, param1: java.util.Map<string,any>): void;
					public logNetworkRequest(param0: io.embrace.android.embracesdk.network.EmbraceNetworkRequest): void;
					public logInfo(param0: string): void;
					public logWarning(param0: string): void;
					public setReactNativeVersionNumber(param0: string): void;
					public start(param0: globalAndroid.content.Context): void;
					public logError(param0: string, param1: java.util.Map<string,any>): void;
					public logWarning(param0: string, param1: java.util.Map<string,any>, param2: boolean): void;
					public logNetworkRequest(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string): void;
					public throwException(): void;
					public startEvent(param0: string, param1: string, param2: boolean, param3: java.util.Map<string,any>): void;
					public setUsername(param0: string): void;
					public setAppId(param0: string): boolean;
					public logUnhandledJsException(param0: string, param1: string, param2: string, param3: string): void;
					public logUnhandledUnityException(param0: string, param1: string): void;
					public getDeviceId(): string;
					public startEvent(param0: string): void;
					public endSession(param0: boolean): void;
				}
				export module Embrace {
					export class AppFramework {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Embrace.AppFramework>;
						public static NATIVE: io.embrace.android.embracesdk.Embrace.AppFramework;
						public static REACT_NATIVE: io.embrace.android.embracesdk.Embrace.AppFramework;
						public static UNITY: io.embrace.android.embracesdk.Embrace.AppFramework;
						public static values(): androidNative.Array<io.embrace.android.embracesdk.Embrace.AppFramework>;
						public static valueOf(param0: string): io.embrace.android.embracesdk.Embrace.AppFramework;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceActivityService extends io.embrace.android.embracesdk.ActivityService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceActivityService>;
					public onActivityStarted(param0: globalAndroid.app.Activity): void;
					public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public onLowMemory(): void;
					public addListener(param0: io.embrace.android.embracesdk.ActivityListener, param1: boolean): void;
					public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public addListener(param0: io.embrace.android.embracesdk.ActivityListener): void;
					public removeListener(param0: io.embrace.android.embracesdk.ActivityListener): void;
					public onActivityStopped(param0: globalAndroid.app.Activity): void;
					public onTrimMemory(param0: number): void;
					public isInBackground(): boolean;
					public close(): void;
					public onActivityResumed(param0: globalAndroid.app.Activity): void;
					public onActivityPaused(param0: globalAndroid.app.Activity): void;
					public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
					public getForegroundActivity(): io.embrace.android.embracesdk.utils.optional.Optional<globalAndroid.app.Activity>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceActivityService_LifecycleAdapter {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceActivityService_LifecycleAdapter>;
					public callMethods(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event, param2: boolean, param3: androidx.lifecycle.MethodCallsLogger): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceAnrService implements io.embrace.android.embracesdk.AnrService, io.embrace.android.embracesdk.MemoryCleanerListener, io.embrace.android.embracesdk.ActivityListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceAnrService>;
					public applicationStartupComplete(): void;
					public onView(param0: globalAndroid.app.Activity): void;
					public onBackground(): void;
					public cleanCollections(): void;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public getAnrIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.AnrInterval>;
					public close(): void;
					public onForeground(param0: boolean, param1: number): void;
					public forceANRTrackingStopOnCrash(): void;
				}
				export module EmbraceAnrService {
					export class MainThreadHandler {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceAnrService.MainThreadHandler>;
						public constructor(param0: io.embrace.android.embracesdk.EmbraceAnrService, param1: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
					}
					export class MonitoringThreadHandler {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceAnrService.MonitoringThreadHandler>;
						public constructor(param0: io.embrace.android.embracesdk.EmbraceAnrService, param1: globalAndroid.os.Looper);
						public handleMessage(param0: globalAndroid.os.Message): void;
						public handleHealthCheckResponse(param0: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceBreadcrumbService implements io.embrace.android.embracesdk.BreadcrumbService, io.embrace.android.embracesdk.ActivityListener, io.embrace.android.embracesdk.MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceBreadcrumbService>;
					public logView(param0: string, param1: number): void;
					public getTapBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.TapBreadcrumb>;
					public applicationStartupComplete(): void;
					public onBackground(): void;
					public cleanCollections(): void;
					public getViewBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.ViewBreadcrumb>;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public getBreadcrumbs(param0: number, param1: number): io.embrace.android.embracesdk.Breadcrumbs;
					public logCustom(param0: string, param1: number): void;
					public onForeground(param0: boolean, param1: number): void;
					public getFragmentBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.FragmentBreadcrumb>;
					public getCustomBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.CustomBreadcrumb>;
					public startFragment(param0: string): boolean;
					public logTap(param0: globalAndroid.util.Pair<java.lang.Float,java.lang.Float>, param1: string, param2: number, param3: io.embrace.android.embracesdk.TapBreadcrumb.TapBreadcrumbType): void;
					public logWebView(param0: string, param1: number): void;
					public onView(param0: globalAndroid.app.Activity): void;
					public endFragment(param0: string): boolean;
					public getWebViewBreadcrumbsForSession(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.WebViewBreadcrumb>;
					public forceLogView(param0: string, param1: number): void;
					public getLastViewBreadcrumbScreenName(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceCacheService extends io.embrace.android.embracesdk.CacheService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceCacheService>;
					public cacheObject(param0: string, param1: any, param2: java.lang.Class): void;
					public moveObject(param0: string, param1: string): boolean;
					public deleteObject(param0: string): boolean;
					public loadObject(param0: string, param1: java.lang.Class): io.embrace.android.embracesdk.utils.optional.Optional<any>;
					public deleteObjectsByRegex(param0: string): boolean;
					public loadObjectsByRegex(param0: string, param1: java.lang.Class): java.util.List;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceConfigService implements io.embrace.android.embracesdk.ConfigService, io.embrace.android.embracesdk.ActivityListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceConfigService>;
					public applicationStartupComplete(): void;
					public isMessageTypeDisabled(param0: io.embrace.android.embracesdk.MessageType): boolean;
					public onBackground(): void;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public onForeground(param0: boolean, param1: number): void;
					public isScreenshotDisabledForEvent(param0: string): boolean;
					public isUrlDisabled(param0: string): boolean;
					public isAnrCaptureEnabled(): boolean;
					public isLogMessageDisabled(param0: string): boolean;
					public onView(param0: globalAndroid.app.Activity): void;
					public removeListener(param0: io.embrace.android.embracesdk.ConfigListener): void;
					public isEventDisabled(param0: string): boolean;
					public close(): void;
					public isSessionControlEnabled(): boolean;
					public addListener(param0: io.embrace.android.embracesdk.ConfigListener): void;
					public isSdkDisabled(): boolean;
					public isInternalExceptionCaptureEnabled(): boolean;
					public getConfig(): io.embrace.android.embracesdk.Config;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceCrashService extends io.embrace.android.embracesdk.CrashService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceCrashService>;
					public logUnhandledJsException(param0: io.embrace.android.embracesdk.JsException): void;
					public handleCrash(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceEvent {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceEvent>;
				}
				export module EmbraceEvent {
					export abstract class Type {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceEvent.Type>;
						public static START: io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static LATE: io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static INTERRUPT: io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static CRASH: io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static END: io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static INFO_LOG: io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static ERROR_LOG: io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static WARNING_LOG: io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static valueOf(param0: string): io.embrace.android.embracesdk.EmbraceEvent.Type;
						public static values(): androidNative.Array<io.embrace.android.embracesdk.EmbraceEvent.Type>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceEventService implements io.embrace.android.embracesdk.EventService, io.embrace.android.embracesdk.ActivityListener, io.embrace.android.embracesdk.MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceEventService>;
					public static STARTUP_EVENT_NAME: string;
					public applicationStartupComplete(): void;
					public endEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public getActiveEventIds(): java.util.List<string>;
					public onBackground(): void;
					public cleanCollections(): void;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public endEvent(param0: string, param1: string): void;
					public onForeground(param0: boolean, param1: number): void;
					public constructor(param0: number, param1: io.embrace.android.embracesdk.ApiClient, param2: io.embrace.android.embracesdk.ConfigService, param3: io.embrace.android.embracesdk.LocalConfig, param4: io.embrace.android.embracesdk.MetadataService, param5: io.embrace.android.embracesdk.PerformanceInfoService, param6: io.embrace.android.embracesdk.UserService, param7: io.embrace.android.embracesdk.ScreenshotService, param8: io.embrace.android.embracesdk.EmbraceActivityService, param9: io.embrace.android.embracesdk.MemoryCleanerService, param10: io.embrace.android.embracesdk.EmbraceSessionProperties);
					public sendStartupMoment(): void;
					public endEvent(param0: string): void;
					public startEvent(param0: string, param1: string, param2: boolean, param3: java.util.Map<string,any>): void;
					public onView(param0: globalAndroid.app.Activity): void;
					public startEvent(param0: string, param1: string, param2: boolean): void;
					public startEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public startEvent(param0: string, param1: string, param2: boolean, param3: java.util.Map<string,any>, param4: java.lang.Long): void;
					public close(): void;
					public endEvent(param0: string, param1: java.util.Map<string,any>): void;
					public findEventIdsForSession(param0: number, param1: number): java.util.List<string>;
					public getStartupMomentInfo(): io.embrace.android.embracesdk.StartupEventInfo;
					public startEvent(param0: string): void;
					public startEvent(param0: string, param1: string): void;
				}
				export module EmbraceEventService {
					export class EventDescription {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceEventService.EventDescription>;
						public isAllowScreenshot(): boolean;
						public getLateTimer(): java.util.concurrent.Future<any>;
						public getEvent(): io.embrace.android.embracesdk.Event;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceExceptionService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceExceptionService>;
					public setConfigService(param0: io.embrace.android.embracesdk.ConfigService): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceLogger {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceLogger>;
					public static log(param0: io.embrace.android.embracesdk.EmbraceLogger.Severity, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public static logError(param0: string, param1: java.lang.Throwable): void;
					public static logInfo(param0: string, param1: java.lang.Throwable): void;
					public static logDebug(param0: string, param1: java.lang.Throwable, param2: java.lang.Boolean): void;
					public static logWarning(param0: string, param1: java.lang.Throwable, param2: java.lang.Boolean): void;
					public static logInfo(param0: string, param1: java.lang.Throwable, param2: java.lang.Boolean): void;
					public static setThreshold(param0: io.embrace.android.embracesdk.EmbraceLogger.Severity): void;
					public static logWarning(param0: string, param1: java.lang.Throwable): void;
					public static logError(param0: string): void;
					public static logWarning(param0: string): void;
					public static logDebug(param0: string): void;
					public static logInfo(param0: string): void;
					public static logDebug(param0: string, param1: java.lang.Throwable): void;
					public static logError(param0: string, param1: java.lang.Throwable, param2: java.lang.Boolean): void;
				}
				export module EmbraceLogger {
					export class Severity {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceLogger.Severity>;
						public static DEBUG: io.embrace.android.embracesdk.EmbraceLogger.Severity;
						public static INFO: io.embrace.android.embracesdk.EmbraceLogger.Severity;
						public static WARNING: io.embrace.android.embracesdk.EmbraceLogger.Severity;
						public static ERROR: io.embrace.android.embracesdk.EmbraceLogger.Severity;
						public static NONE: io.embrace.android.embracesdk.EmbraceLogger.Severity;
						public static values(): androidNative.Array<io.embrace.android.embracesdk.EmbraceLogger.Severity>;
						public static valueOf(param0: string): io.embrace.android.embracesdk.EmbraceLogger.Severity;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceMemoryCleanerService extends io.embrace.android.embracesdk.MemoryCleanerService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceMemoryCleanerService>;
					public cleanServicesCollections(): void;
					public addListener(param0: io.embrace.android.embracesdk.MemoryCleanerListener): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceMemoryService implements io.embrace.android.embracesdk.MemoryService, io.embrace.android.embracesdk.MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceMemoryService>;
					public cleanCollections(): void;
					public close(): void;
					public getMemorySamples(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.MemorySample>;
					public constructor(param0: globalAndroid.app.ActivityManager, param1: io.embrace.android.embracesdk.MemoryCleanerService);
					public static ofContext(param0: globalAndroid.content.Context, param1: io.embrace.android.embracesdk.MemoryCleanerService): io.embrace.android.embracesdk.EmbraceMemoryService;
					public onMemoryWarning(): void;
					public getMemoryWarnings(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.MemoryWarning>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceMetadataService implements io.embrace.android.embracesdk.MetadataService, io.embrace.android.embracesdk.ActivityListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceMetadataService>;
					public setActiveSessionId(param0: string): void;
					public applicationStartupComplete(): void;
					public getAppId(): string;
					public getActiveSessionId(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public onBackground(): void;
					public getDiskUsage(): io.embrace.android.embracesdk.DiskUsage;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public getAppState(): string;
					public onForeground(param0: boolean, param1: number): void;
					public getAppVersionCodeForRequest(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getScreenResolution(): string;
					public getAppVersionCode(): string;
					public isOsUpdated(): boolean;
					public getIsJailbroken(): java.lang.Boolean;
					public isDebug(): boolean;
					public onView(param0: globalAndroid.app.Activity): void;
					public isAppUpdated(): boolean;
					public getDeviceId(): string;
					public getDeviceInfo(): io.embrace.android.embracesdk.DeviceInfo;
					public getAppVersionName(): string;
					public getAppInfo(): io.embrace.android.embracesdk.AppInfo;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceNdkService implements io.embrace.android.embracesdk.NdkService, io.embrace.android.embracesdk.ActivityListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceNdkService>;
					public applicationStartupComplete(): void;
					public _testNativeCrash_C(): void;
					public onBackground(): void;
					public _getErrors(param0: string): string;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public onUserInfoUpdate(): void;
					public _updateAppState(param0: string): void;
					public onForeground(param0: boolean, param1: number): void;
					public _installSignalHandlers(param0: string, param1: string, param2: string, param3: string, param4: string, param5: number, param6: boolean): void;
					public getUnityCrashId(): string;
					public testCrash(param0: boolean): void;
					public onView(param0: globalAndroid.app.Activity): void;
					public _testNativeCrash_CPP(): void;
					public _updateSessionId(param0: string): void;
					public updateSessionId(param0: string): void;
					public onSessionPropertiesUpdate(param0: java.util.Map<string,string>): void;
					public _updateMetaData(param0: string): void;
					public _getCrashReport(param0: string): string;
					public _uninstallSignals(): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceNetworkConnectivityService implements io.embrace.android.embracesdk.NetworkConnectivityService, io.embrace.android.embracesdk.MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceNetworkConnectivityService>;
					public cleanCollections(): void;
					public close(): void;
					public networkStatusOnSessionStarted(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: io.embrace.android.embracesdk.Clock, param2: io.embrace.android.embracesdk.MemoryCleanerService);
					public getNetworkInterfaceIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.Interval>;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
				export module EmbraceNetworkConnectivityService {
					export class NetworkStatus {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceNetworkConnectivityService.NetworkStatus>;
						public static NOT_REACHABLE: io.embrace.android.embracesdk.EmbraceNetworkConnectivityService.NetworkStatus;
						public static WIFI: io.embrace.android.embracesdk.EmbraceNetworkConnectivityService.NetworkStatus;
						public static WAN: io.embrace.android.embracesdk.EmbraceNetworkConnectivityService.NetworkStatus;
						public static values(): androidNative.Array<io.embrace.android.embracesdk.EmbraceNetworkConnectivityService.NetworkStatus>;
						public static valueOf(param0: string): io.embrace.android.embracesdk.EmbraceNetworkConnectivityService.NetworkStatus;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceNetworkLoggingService implements io.embrace.android.embracesdk.NetworkLoggingService, io.embrace.android.embracesdk.MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceNetworkLoggingService>;
					public cleanCollections(): void;
					public logNetworkCall(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string): void;
					public logNetworkError(param0: string, param1: string, param2: number, param3: number, param4: string, param5: string, param6: string): void;
					public getNetworkSession(param0: number, param1: number): io.embrace.android.embracesdk.NetworkSessionV2;
					public constructor(param0: io.embrace.android.embracesdk.ConfigService, param1: io.embrace.android.embracesdk.LocalConfig, param2: io.embrace.android.embracesdk.MemoryCleanerService);
					public getNetworkCalls(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.NetworkCallV2>;
				}
				export module EmbraceNetworkLoggingService {
					export class DomainSettings {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceNetworkLoggingService.DomainSettings>;
						public getSuffix(): string;
						public getLimit(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceNetworkUtils {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceNetworkUtils>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceOrientationService implements io.embrace.android.embracesdk.OrientationService, io.embrace.android.embracesdk.MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceOrientationService>;
					public cleanCollections(): void;
					public getOrientations(): java.util.List<io.embrace.android.embracesdk.Orientation>;
					public onOrientationChanged(param0: io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbracePerformanceInfoService extends io.embrace.android.embracesdk.PerformanceInfoService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbracePerformanceInfoService>;
					public getPerformanceInfo(param0: number, param1: number): io.embrace.android.embracesdk.EventPerformanceInfo;
					public getSessionPerformanceInfo(param0: number, param1: number): io.embrace.android.embracesdk.SessionPerformanceInfo;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbracePowerService implements io.embrace.android.embracesdk.PowerService, io.embrace.android.embracesdk.MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbracePowerService>;
					public getBatteryMeasurements(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.BatteryMeasurement>;
					public getLatestBatteryLevel(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Float>;
					public cleanCollections(): void;
					public close(): void;
					public getChargingIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.Interval>;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbracePreferencesService implements io.embrace.android.embracesdk.PreferencesService, io.embrace.android.embracesdk.ActivityListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbracePreferencesService>;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public setUnityBuildIdNumber(param0: string): void;
					public getSDKDisabled(): boolean;
					public setUnityVersionNumber(param0: string): void;
					public setPermanentSessionProperties(param0: java.util.Map<string,string>): void;
					public onView(param0: globalAndroid.app.Activity): void;
					public setSessionNumber(param0: number): void;
					public getDeviceIdentifier(): string;
					public getInstallDate(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Long>;
					public setInstallDate(param0: number): void;
					public getUserIdentifier(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getJavaScriptPatchNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getUsername(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setUserPersonas(param0: java.util.Set<string>): void;
					public setJavaScriptPatchNumber(param0: string): void;
					public setUserMessageNeedsRetry(param0: boolean): void;
					public getLastConfigFetchDate(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Long>;
					public onForeground(param0: boolean, param1: number): void;
					public getJavaScriptBundleURL(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setAppVersion(param0: string): void;
					public getOsVersion(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setIsJailbroken(param0: java.lang.Boolean): void;
					public isUsersFirstDay(): boolean;
					public setJavaScriptBundleURL(param0: string): void;
					public setUserEmailAddress(param0: string): void;
					public userMessageNeedsRetry(): boolean;
					public onBackground(): void;
					public setUserPayer(param0: boolean): void;
					public getUnityBuildIdNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getUnityVersionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getCustomPersonas(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Set<string>>;
					public getAppVersion(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getPermanentSessionProperties(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Map<string,string>>;
					public getSDKStartupStatus(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setUserIdentifier(param0: string): void;
					public getUserEmailAddress(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getScreenResolution(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getUserPersonas(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Set<string>>;
					public getReactNativeVersionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setDeviceIdentifier(param0: string): void;
					public setReactNativeVersionNumber(param0: string): void;
					public setLastConfigFetchDate(param0: number): void;
					public applicationStartupComplete(): void;
					public getUserPayer(): boolean;
					public setOsVersion(param0: string): void;
					public setSDKDisabled(param0: boolean): void;
					public setUsername(param0: string): void;
					public getSessionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public setScreenResolution(param0: string): void;
					/** @deprecated */
					public getCustomPersonas(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Set<string>>;
					public getJailbroken(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Boolean>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceRemoteLogger extends io.embrace.android.embracesdk.MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceRemoteLogger>;
					public cleanCollections(): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceScreenshotService extends io.embrace.android.embracesdk.ScreenshotService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceScreenshotService>;
					public takeScreenshotLogEvent(param0: string): boolean;
					public constructor(param0: io.embrace.android.embracesdk.ActivityService, param1: io.embrace.android.embracesdk.ConfigService, param2: io.embrace.android.embracesdk.ApiClient);
					public takeScreenshotMoment(param0: string): boolean;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceSessionProperties {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceSessionProperties>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceSessionService implements io.embrace.android.embracesdk.SessionService, io.embrace.android.embracesdk.ActivityListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceSessionService>;
					public static APPLICATION_STATE_ACTIVE: string;
					public static APPLICATION_STATE_BACKGROUND: string;
					public applicationStartupComplete(): void;
					public onBackground(): void;
					public addProperty(param0: string, param1: string, param2: boolean): boolean;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public onForeground(param0: boolean, param1: number): void;
					public handleNativeCrash(param0: io.embrace.android.embracesdk.utils.optional.Optional<io.embrace.android.embracesdk.NativeCrashData>): void;
					public getProperties(): java.util.Map<string,string>;
					public static stashPreviousSession(param0: io.embrace.android.embracesdk.CacheService): boolean;
					public handleCrash(param0: string): void;
					public startSession(param0: boolean, param1: io.embrace.android.embracesdk.Session.SessionLifeEventType): void;
					public onView(param0: globalAndroid.app.Activity): void;
					public setSdkStartupDuration(param0: number): void;
					public removeProperty(param0: string): boolean;
					public sdkStartupFailedLastSession(): boolean;
					public triggerStatelessSessionEnd(param0: io.embrace.android.embracesdk.Session.SessionLifeEventType): void;
					public close(): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceUncaughtExceptionHandler {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceUncaughtExceptionHandler>;
					public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EmbraceUserService implements io.embrace.android.embracesdk.ActivityListener, io.embrace.android.embracesdk.UserService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EmbraceUserService>;
					public setUserAsPayer(): void;
					public applicationStartupComplete(): void;
					public setUserPersona(param0: string): void;
					public onBackground(): void;
					public setUserEmail(param0: string): void;
					public onViewClose(param0: globalAndroid.app.Activity): void;
					public clearUserPersona(param0: string): void;
					public onForeground(param0: boolean, param1: number): void;
					public clearUsername(): void;
					public clearUserEmail(): void;
					public clearUserAsPayer(): void;
					public onView(param0: globalAndroid.app.Activity): void;
					public clearUserIdentifier(): void;
					public setUsername(param0: string): void;
					public clearAllUserInfo(): void;
					public clearAllUserPersonas(): void;
					public getUserInfo(): io.embrace.android.embracesdk.UserInfo;
					public loadUserInfoFromDisk(): io.embrace.android.embracesdk.utils.optional.Optional<io.embrace.android.embracesdk.UserInfo>;
					public setUserIdentifier(param0: string): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Event {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Event>;
					public getSessionProperties(): java.util.Map<string,string>;
					public getMessageId(): string;
					public getDuration(): java.lang.Long;
					public getActiveEventIds(): java.util.List<string>;
					public getTimestamp(): java.lang.Long;
					public getAppState(): string;
					public getEventId(): string;
					public static newBuilder(): io.embrace.android.embracesdk.Event.Builder;
					public getType(): io.embrace.android.embracesdk.EmbraceEvent.Type;
					public getLateThreshold(): java.lang.Long;
					public isScreenshotTaken(): boolean;
					public getName(): string;
					public getSessionId(): string;
					public getCustomProperties(): java.util.Map<string,any>;
				}
				export module Event {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Event.Builder>;
						public withEventId(param0: string): io.embrace.android.embracesdk.Event.Builder;
						public withIsException(param0: java.lang.Boolean): io.embrace.android.embracesdk.Event.Builder;
						public withName(param0: string): io.embrace.android.embracesdk.Event.Builder;
						public withCustomProperties(param0: java.util.Map<string,any>): io.embrace.android.embracesdk.Event.Builder;
						public withType(param0: io.embrace.android.embracesdk.EmbraceEvent.Type): io.embrace.android.embracesdk.Event.Builder;
						public withMessageId(param0: string): io.embrace.android.embracesdk.Event.Builder;
						public withTimestamp(param0: java.lang.Long): io.embrace.android.embracesdk.Event.Builder;
						public withAppState(param0: string): io.embrace.android.embracesdk.Event.Builder;
						public build(): io.embrace.android.embracesdk.Event;
						public withDuration(param0: java.lang.Long): io.embrace.android.embracesdk.Event.Builder;
						public withScreenshotTaken(param0: boolean): io.embrace.android.embracesdk.Event.Builder;
						public withActiveEventIds(param0: java.util.List<string>): io.embrace.android.embracesdk.Event.Builder;
						public withLateThreshold(param0: java.lang.Long): io.embrace.android.embracesdk.Event.Builder;
						public withSessionId(param0: string): io.embrace.android.embracesdk.Event.Builder;
						public withSessionProperties(param0: java.util.Map<string,string>): io.embrace.android.embracesdk.Event.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EventMessage {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EventMessage>;
					public getStacktraces(): io.embrace.android.embracesdk.Stacktraces;
					public getCrash(): io.embrace.android.embracesdk.Crash;
					public getPerformanceInfo(): io.embrace.android.embracesdk.PerformanceInfo;
					public getUserInfo(): io.embrace.android.embracesdk.UserInfo;
					public static newBuilder(): io.embrace.android.embracesdk.EventMessage.Builder;
					public getDeviceInfo(): io.embrace.android.embracesdk.DeviceInfo;
					public getEvent(): io.embrace.android.embracesdk.Event;
					public getAppInfo(): io.embrace.android.embracesdk.AppInfo;
					public getNativeCrash(): io.embrace.android.embracesdk.NativeCrash;
				}
				export module EventMessage {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EventMessage.Builder>;
						public withAppInfo(param0: io.embrace.android.embracesdk.AppInfo): io.embrace.android.embracesdk.EventMessage.Builder;
						public withNativeCrash(param0: io.embrace.android.embracesdk.NativeCrash): io.embrace.android.embracesdk.EventMessage.Builder;
						public withUserInfo(param0: io.embrace.android.embracesdk.UserInfo): io.embrace.android.embracesdk.EventMessage.Builder;
						public withCrash(param0: io.embrace.android.embracesdk.Crash): io.embrace.android.embracesdk.EventMessage.Builder;
						public withDeviceInfo(param0: io.embrace.android.embracesdk.DeviceInfo): io.embrace.android.embracesdk.EventMessage.Builder;
						public withStacktraces(param0: io.embrace.android.embracesdk.Stacktraces): io.embrace.android.embracesdk.EventMessage.Builder;
						public withPerformanceInfo(param0: io.embrace.android.embracesdk.EventPerformanceInfo): io.embrace.android.embracesdk.EventMessage.Builder;
						public withEvent(param0: io.embrace.android.embracesdk.Event): io.embrace.android.embracesdk.EventMessage.Builder;
						public build(): io.embrace.android.embracesdk.EventMessage;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EventPerformanceInfo extends io.embrace.android.embracesdk.PerformanceInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EventPerformanceInfo>;
					public static newBuilder(): io.embrace.android.embracesdk.EventPerformanceInfo.Builder;
				}
				export module EventPerformanceInfo {
					export class Builder extends io.embrace.android.embracesdk.PerformanceInfo.Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.EventPerformanceInfo.Builder>;
						public withNetworkCalls(param0: java.util.List<io.embrace.android.embracesdk.NetworkCallV2>): io.embrace.android.embracesdk.EventPerformanceInfo.Builder;
						public build(): io.embrace.android.embracesdk.EventPerformanceInfo;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class EventService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.EventService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.EventService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						startEvent(param0: string): void;
						startEvent(param0: string, param1: string): void;
						startEvent(param0: string, param1: string, param2: boolean): void;
						startEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
						startEvent(param0: string, param1: string, param2: boolean, param3: java.util.Map<string,any>): void;
						startEvent(param0: string, param1: string, param2: boolean, param3: java.util.Map<string,any>, param4: java.lang.Long): void;
						endEvent(param0: string): void;
						endEvent(param0: string, param1: string): void;
						endEvent(param0: string, param1: java.util.Map<string,any>): void;
						endEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
						findEventIdsForSession(param0: number, param1: number): java.util.List<string>;
						getActiveEventIds(): java.util.List<string>;
						getStartupMomentInfo(): io.embrace.android.embracesdk.StartupEventInfo;
						sendStartupMoment(): void;
					});
					public constructor();
					public endEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public getActiveEventIds(): java.util.List<string>;
					public endEvent(param0: string, param1: string): void;
					public endEvent(param0: string): void;
					public sendStartupMoment(): void;
					public startEvent(param0: string, param1: string, param2: boolean, param3: java.util.Map<string,any>): void;
					public startEvent(param0: string, param1: string, param2: boolean): void;
					public startEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public startEvent(param0: string, param1: string, param2: boolean, param3: java.util.Map<string,any>, param4: java.lang.Long): void;
					public endEvent(param0: string, param1: java.util.Map<string,any>): void;
					public findEventIdsForSession(param0: number, param1: number): java.util.List<string>;
					public getStartupMomentInfo(): io.embrace.android.embracesdk.StartupEventInfo;
					public startEvent(param0: string): void;
					public startEvent(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ExceptionError {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ExceptionError>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ExceptionErrorInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ExceptionErrorInfo>;
					public constructor(param0: java.lang.Long, param1: string, param2: java.util.List<io.embrace.android.embracesdk.ExceptionInfo>);
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ExceptionInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ExceptionInfo>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class FragmentBreadcrumb extends io.embrace.android.embracesdk.Breadcrumb {
					public static class: java.lang.Class<io.embrace.android.embracesdk.FragmentBreadcrumb>;
					public equals(param0: any): boolean;
					public setStartTime(param0: number): void;
					public getName(): string;
					public getStartTime(): number;
					public hashCode(): number;
					public setEndTime(param0: number): void;
					public getEndTime(): number;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class HttpPathOverrideRequest<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.embrace.android.embracesdk.HttpPathOverrideRequest<any>>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.HttpPathOverrideRequest<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getHeaderByName(param0: string): string;
						getOverriddenURL(param0: string): string;
						getURLString(): string;
					});
					public constructor();
					public getHeaderByName(param0: string): string;
					public getURLString(): string;
					public getOverriddenURL(param0: string): string;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Interval {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Interval>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class JsException {
					public static class: java.lang.Class<io.embrace.android.embracesdk.JsException>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class LocalConfig {
					public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig>;
					public getConfigurations(): io.embrace.android.embracesdk.LocalConfig.SdkConfigs;
				}
				export module LocalConfig {
					export class SdkConfigs {
						public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs>;
						public getNetworking(): io.embrace.android.embracesdk.LocalConfig.SdkConfigs.Networking;
						public getWebViewConfig(): io.embrace.android.embracesdk.LocalConfig.SdkConfigs.WebView;
					}
					export module SdkConfigs {
						export class App extends io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.App>;
							public getNonDefaultValues(): java.util.List<string>;
						}
						export class BaseUrls extends io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.BaseUrls>;
							public getNonDefaultValues(): java.util.List<string>;
						}
						export class ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement>;
							/**
							 * Constructs a new instance of the io.embrace.android.embracesdk.LocalConfig$SdkConfigs$ConfigElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getNonDefaultValues(): java.util.List<string>;
							});
							public constructor();
							public getNonDefaultValues(): java.util.List<string>;
						}
						export class CrashHandler extends io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.CrashHandler>;
							public getNonDefaultValues(): java.util.List<string>;
						}
						export class Networking extends io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.Networking>;
							public getCaptureRequestContentLength(): java.lang.Boolean;
							public getNonDefaultValues(): java.util.List<string>;
							public isNativeNetworkingMonitoringEnabled(): java.lang.Boolean;
							public getDomains(): java.util.List<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.Networking.Domain>;
							public getDefaultCaptureLimit(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
						}
						export module Networking {
							export class Domain {
								public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.Networking.Domain>;
							}
						}
						export class SessionConfig extends io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.SessionConfig>;
							public getNonDefaultValues(): java.util.List<string>;
						}
						export class StartupMoment extends io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.StartupMoment>;
							public getNonDefaultValues(): java.util.List<string>;
						}
						export class Taps extends io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.Taps>;
							public getNonDefaultValues(): java.util.List<string>;
						}
						export class WebView extends io.embrace.android.embracesdk.LocalConfig.SdkConfigs.ConfigElement {
							public static class: java.lang.Class<io.embrace.android.embracesdk.LocalConfig.SdkConfigs.WebView>;
							public getNonDefaultValues(): java.util.List<string>;
							public isQueryParamsCaptureEnabled(): java.lang.Boolean;
							public constructor(param0: java.lang.Boolean, param1: java.lang.Boolean);
							public isWebViewsCaptureEnabled(): java.lang.Boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MemoryCleanerListener {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MemoryCleanerListener>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.MemoryCleanerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cleanCollections(): void;
					});
					public constructor();
					public cleanCollections(): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MemoryCleanerService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MemoryCleanerService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.MemoryCleanerService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addListener(param0: io.embrace.android.embracesdk.MemoryCleanerListener): void;
						cleanServicesCollections(): void;
					});
					public constructor();
					public cleanServicesCollections(): void;
					public addListener(param0: io.embrace.android.embracesdk.MemoryCleanerListener): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MemorySample {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MemorySample>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MemoryService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MemoryService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.MemoryService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMemoryWarning(): void;
						getMemorySamples(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.MemorySample>;
						getMemoryWarnings(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.MemoryWarning>;
					});
					public constructor();
					public getMemorySamples(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.MemorySample>;
					public onMemoryWarning(): void;
					public getMemoryWarnings(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.MemoryWarning>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MemoryWarning {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MemoryWarning>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MessageType {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MessageType>;
					public static EVENT: io.embrace.android.embracesdk.MessageType;
					public static LOG: io.embrace.android.embracesdk.MessageType;
					public static SESSION: io.embrace.android.embracesdk.MessageType;
					public static USER: io.embrace.android.embracesdk.MessageType;
					public static valueOf(param0: string): io.embrace.android.embracesdk.MessageType;
					public static values(): androidNative.Array<io.embrace.android.embracesdk.MessageType>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MessageUtils {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MessageUtils>;
					public static withNull(param0: java.lang.Long): string;
					public static withNull(param0: string): string;
					public static boolToStr(param0: boolean): string;
					public static withSet(param0: java.util.Set<string>): string;
					public static withNull(param0: java.lang.Integer): string;
					public static withMap(param0: java.util.Map<string,string>): string;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MetadataService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MetadataService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.MetadataService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAppInfo(): io.embrace.android.embracesdk.AppInfo;
						isDebug(): boolean;
						getAppId(): string;
						getDeviceInfo(): io.embrace.android.embracesdk.DeviceInfo;
						getDiskUsage(): io.embrace.android.embracesdk.DiskUsage;
						getScreenResolution(): string;
						getIsJailbroken(): java.lang.Boolean;
						getAppVersionCodeForRequest(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						getDeviceId(): string;
						getAppVersionCode(): string;
						getAppVersionName(): string;
						isAppUpdated(): boolean;
						isOsUpdated(): boolean;
						getActiveSessionId(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setActiveSessionId(param0: string): void;
						getAppState(): string;
					});
					public constructor();
					public setActiveSessionId(param0: string): void;
					public getAppId(): string;
					public getActiveSessionId(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getDiskUsage(): io.embrace.android.embracesdk.DiskUsage;
					public getAppState(): string;
					public getScreenResolution(): string;
					public getAppVersionCodeForRequest(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getAppVersionCode(): string;
					public isOsUpdated(): boolean;
					public getIsJailbroken(): java.lang.Boolean;
					public isDebug(): boolean;
					public isAppUpdated(): boolean;
					public getDeviceId(): string;
					public getDeviceInfo(): io.embrace.android.embracesdk.DeviceInfo;
					public getAppVersionName(): string;
					public getAppInfo(): io.embrace.android.embracesdk.AppInfo;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class MetadataUtils {
					public static class: java.lang.Class<io.embrace.android.embracesdk.MetadataUtils>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NativeCrash {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NativeCrash>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NativeCrashData {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NativeCrashData>;
					public setMap(param0: string): void;
					public getMap(): string;
					public setSymbols(param0: java.util.Map<string,string>): void;
					public getTimestamp(): java.lang.Long;
					public getAppState(): string;
					public getErrors(): java.util.List<io.embrace.android.embracesdk.NativeCrashData.Error>;
					public getCrash(): io.embrace.android.embracesdk.NativeCrash;
					public setErrors(param0: java.util.List<io.embrace.android.embracesdk.NativeCrashData.Error>): void;
					public getSessionId(): string;
					public getSymbols(): java.util.Map<string,string>;
					public constructor(param0: string, param1: string, param2: java.lang.Long, param3: string, param4: io.embrace.android.embracesdk.NativeCrashData.NativeCrashMetadata, param5: string, param6: java.util.Map<string,string>, param7: java.util.List<io.embrace.android.embracesdk.NativeCrashData.Error>, param8: string);
					public getNativeCrashId(): string;
					public getMetadata(): io.embrace.android.embracesdk.NativeCrashData.NativeCrashMetadata;
				}
				export module NativeCrashData {
					export class Error {
						public static class: java.lang.Class<io.embrace.android.embracesdk.NativeCrashData.Error>;
						public getContext(): number;
						public getNumber(): number;
					}
					export class NativeCrashMetadata {
						public static class: java.lang.Class<io.embrace.android.embracesdk.NativeCrashData.NativeCrashMetadata>;
						public getAppInfo(): io.embrace.android.embracesdk.AppInfo;
						public getSessionProperties(): java.util.Map<string,string>;
						public getDeviceInfo(): io.embrace.android.embracesdk.DeviceInfo;
						public toJson(): string;
						public getUserInfo(): io.embrace.android.embracesdk.UserInfo;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NativeSymbols {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NativeSymbols>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NdkService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NdkService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.NdkService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						updateSessionId(param0: string): void;
						onSessionPropertiesUpdate(param0: java.util.Map<string,string>): void;
						onUserInfoUpdate(): void;
						getUnityCrashId(): string;
						testCrash(param0: boolean): void;
					});
					public constructor();
					public testCrash(param0: boolean): void;
					public onUserInfoUpdate(): void;
					public updateSessionId(param0: string): void;
					public onSessionPropertiesUpdate(param0: java.util.Map<string,string>): void;
					public getUnityCrashId(): string;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NetworkCall {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkCall>;
					public getStatusCode(): java.lang.Integer;
					public getErrorMessage(): string;
					public getBytesReceived(): number;
					public getErrorType(): string;
					public isDidClientError(): boolean;
					public isValidNetworkCall(): boolean;
					public getHttpMethod(): string;
					public static newBuilder(): io.embrace.android.embracesdk.NetworkCall.Builder;
					public getDuration(): number;
					public getBytesSent(): number;
					public getUrl(): string;
					public getRequestId(): string;
					public getStartTime(): number;
					public getEndTime(): number;
				}
				export module NetworkCall {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkCall.Builder>;
						public withDuration(param0: number): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withRequestId(param0: string): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withBytesReceived(param0: number): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withBytesSent(param0: number): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withHttpMethod(param0: string): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withErrorMessage(param0: string): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withDidClientError(param0: boolean): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withStatusCode(param0: java.lang.Integer): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withErrorType(param0: string): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withStartTime(param0: number): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withUrl(param0: string): io.embrace.android.embracesdk.NetworkCall.Builder;
						public withEndTime(param0: number): io.embrace.android.embracesdk.NetworkCall.Builder;
						public build(): io.embrace.android.embracesdk.NetworkCall;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NetworkCallV2 {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkCallV2>;
					public getErrorMessage(): string;
					public getBytesReceived(): number;
					public getBytesSent(): number;
					public getDuration(): number;
					public getResponseCode(): number;
					public getUrl(): string;
					public getErrorType(): string;
					public getStartTime(): number;
					public getTraceId(): string;
					public getHttpMethod(): string;
					public getEndTime(): number;
				}
				export module NetworkCallV2 {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkCallV2.Builder>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NetworkConnectivityService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkConnectivityService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.NetworkConnectivityService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getNetworkInterfaceIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.Interval>;
						networkStatusOnSessionStarted(param0: number): void;
					});
					public constructor();
					public networkStatusOnSessionStarted(param0: number): void;
					public getNetworkInterfaceIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.Interval>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NetworkLoggingService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkLoggingService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.NetworkLoggingService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getNetworkSession(param0: number, param1: number): io.embrace.android.embracesdk.NetworkSessionV2;
						getNetworkCalls(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.NetworkCallV2>;
						logNetworkCall(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string): void;
						logNetworkError(param0: string, param1: string, param2: number, param3: number, param4: string, param5: string, param6: string): void;
					});
					public constructor();
					public logNetworkCall(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string): void;
					public logNetworkError(param0: string, param1: string, param2: number, param3: number, param4: string, param5: string, param6: string): void;
					public getNetworkSession(param0: number, param1: number): io.embrace.android.embracesdk.NetworkSessionV2;
					public getNetworkCalls(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.NetworkCallV2>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NetworkSession {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkSession>;
				}
				export module NetworkSession {
					export class NetworkInfo {
						public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkSession.NetworkInfo>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NetworkSessionV2 {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkSessionV2>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
				export module NetworkSessionV2 {
					export class DomainCount {
						public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkSessionV2.DomainCount>;
						public getRequestCount(): number;
						public getCaptureLimit(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class NetworkTimeline {
					public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkTimeline>;
					public constructor(param0: java.util.List<io.embrace.android.embracesdk.NetworkTimeline.NetworkRequest>, param1: number);
				}
				export module NetworkTimeline {
					export class NetworkRequest {
						public static class: java.lang.Class<io.embrace.android.embracesdk.NetworkTimeline.NetworkRequest>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Orientation {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Orientation>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class OrientationService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.OrientationService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.OrientationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onOrientationChanged(param0: io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>): void;
						getOrientations(): java.util.List<io.embrace.android.embracesdk.Orientation>;
					});
					public constructor();
					public getOrientations(): java.util.List<io.embrace.android.embracesdk.Orientation>;
					public onOrientationChanged(param0: io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export abstract class PerformanceInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.PerformanceInfo>;
					public constructor(param0: io.embrace.android.embracesdk.PerformanceInfo.Builder);
				}
				export module PerformanceInfo {
					export abstract class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.PerformanceInfo.Builder>;
						public withMemorySamples(param0: java.util.List<io.embrace.android.embracesdk.MemorySample>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withAnrIntervals(param0: java.util.List<io.embrace.android.embracesdk.AnrInterval>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public constructor();
						public withChargingIntervals(param0: java.util.List<io.embrace.android.embracesdk.Interval>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withMemoryWarnings(param0: java.util.List<io.embrace.android.embracesdk.MemoryWarning>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withConnectionQualityIntervals(param0: java.util.List<io.embrace.android.embracesdk.ConnectionQualityInterval>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withCriticalCpuIntervals(param0: java.util.List<io.embrace.android.embracesdk.Interval>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withBatteryMeasurements(param0: java.util.List<io.embrace.android.embracesdk.BatteryMeasurement>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withDiskUsage(param0: io.embrace.android.embracesdk.DiskUsage): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withSignalStrength(param0: java.util.List<io.embrace.android.embracesdk.SignalStrength>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withBatteryLevel(param0: number): io.embrace.android.embracesdk.PerformanceInfo.Builder;
						public withNetworkInterfaceIntervals(param0: java.util.List<io.embrace.android.embracesdk.Interval>): io.embrace.android.embracesdk.PerformanceInfo.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class PerformanceInfoService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.PerformanceInfoService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.PerformanceInfoService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPerformanceInfo(param0: number, param1: number): io.embrace.android.embracesdk.EventPerformanceInfo;
						getSessionPerformanceInfo(param0: number, param1: number): io.embrace.android.embracesdk.SessionPerformanceInfo;
					});
					public constructor();
					public getPerformanceInfo(param0: number, param1: number): io.embrace.android.embracesdk.EventPerformanceInfo;
					public getSessionPerformanceInfo(param0: number, param1: number): io.embrace.android.embracesdk.SessionPerformanceInfo;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class PowerService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.PowerService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.PowerService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getChargingIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.Interval>;
						getBatteryMeasurements(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.BatteryMeasurement>;
						getLatestBatteryLevel(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Float>;
					});
					public constructor();
					public getBatteryMeasurements(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.BatteryMeasurement>;
					public getLatestBatteryLevel(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Float>;
					public getChargingIntervals(param0: number, param1: number): java.util.List<io.embrace.android.embracesdk.Interval>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class PreferencesService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.PreferencesService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.PreferencesService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAppVersion(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setAppVersion(param0: string): void;
						getOsVersion(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setOsVersion(param0: string): void;
						getInstallDate(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Long>;
						setInstallDate(param0: number): void;
						getDeviceIdentifier(): string;
						setDeviceIdentifier(param0: string): void;
						getSDKStartupStatus(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						getSDKDisabled(): boolean;
						setSDKDisabled(param0: boolean): void;
						getUserPayer(): boolean;
						setUserPayer(param0: boolean): void;
						getUserIdentifier(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setUserIdentifier(param0: string): void;
						getUserEmailAddress(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setUserEmailAddress(param0: string): void;
						getUserPersonas(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Set<string>>;
						setUserPersonas(param0: java.util.Set<string>): void;
						getPermanentSessionProperties(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Map<string,string>>;
						setPermanentSessionProperties(param0: java.util.Map<string,string>): void;
						getCustomPersonas(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Set<string>>;
						getUsername(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setUsername(param0: string): void;
						getLastConfigFetchDate(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Long>;
						setLastConfigFetchDate(param0: number): void;
						userMessageNeedsRetry(): boolean;
						setUserMessageNeedsRetry(param0: boolean): void;
						isUsersFirstDay(): boolean;
						setSessionNumber(param0: number): void;
						getSessionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
						setJavaScriptBundleURL(param0: string): void;
						getJavaScriptBundleURL(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setJavaScriptPatchNumber(param0: string): void;
						getJavaScriptPatchNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setReactNativeVersionNumber(param0: string): void;
						getReactNativeVersionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setUnityVersionNumber(param0: string): void;
						getUnityVersionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setUnityBuildIdNumber(param0: string): void;
						getUnityBuildIdNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
						setIsJailbroken(param0: java.lang.Boolean): void;
						getJailbroken(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Boolean>;
						setScreenResolution(param0: string): void;
						getScreenResolution(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					});
					public constructor();
					public static DAY_IN_MS: number;
					public setJavaScriptBundleURL(param0: string): void;
					public setUserEmailAddress(param0: string): void;
					public userMessageNeedsRetry(): boolean;
					public setUserPayer(param0: boolean): void;
					public setUnityBuildIdNumber(param0: string): void;
					public getUnityBuildIdNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getUnityVersionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getSDKDisabled(): boolean;
					public setUnityVersionNumber(param0: string): void;
					public setPermanentSessionProperties(param0: java.util.Map<string,string>): void;
					public setSessionNumber(param0: number): void;
					public getAppVersion(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getDeviceIdentifier(): string;
					public getPermanentSessionProperties(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Map<string,string>>;
					public getInstallDate(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Long>;
					public getSDKStartupStatus(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setInstallDate(param0: number): void;
					public setUserIdentifier(param0: string): void;
					public getUserIdentifier(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getUserEmailAddress(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getScreenResolution(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getUserPersonas(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Set<string>>;
					public getJavaScriptPatchNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getReactNativeVersionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setDeviceIdentifier(param0: string): void;
					public getUsername(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setReactNativeVersionNumber(param0: string): void;
					public setLastConfigFetchDate(param0: number): void;
					public setUserPersonas(param0: java.util.Set<string>): void;
					public setJavaScriptPatchNumber(param0: string): void;
					public getUserPayer(): boolean;
					public setUserMessageNeedsRetry(param0: boolean): void;
					public setOsVersion(param0: string): void;
					public getLastConfigFetchDate(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Long>;
					public setSDKDisabled(param0: boolean): void;
					public setUsername(param0: string): void;
					public getJavaScriptBundleURL(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public setAppVersion(param0: string): void;
					public getOsVersion(): io.embrace.android.embracesdk.utils.optional.Optional<string>;
					public getSessionNumber(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public setScreenResolution(param0: string): void;
					public setIsJailbroken(param0: java.lang.Boolean): void;
					/** @deprecated */
					public getCustomPersonas(): io.embrace.android.embracesdk.utils.optional.Optional<java.util.Set<string>>;
					public isUsersFirstDay(): boolean;
					public getJailbroken(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Boolean>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class PropertyUtils {
					public static class: java.lang.Class<io.embrace.android.embracesdk.PropertyUtils>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class PurchaseFlow extends io.embrace.android.embracesdk.CustomFlow {
					public static class: java.lang.Class<io.embrace.android.embracesdk.PurchaseFlow>;
					public addToCartStart(param0: string, param1: java.lang.Number, param2: java.lang.Number, param3: java.util.Map<string,any>): string;
					public addToCartFail(param0: string, param1: string, param2: java.util.Map<string,any>): boolean;
					public purchaseComplete(param0: java.util.Map<string,any>): boolean;
					public constructor();
					public addToCartFail(param0: string, param1: string): boolean;
					public purchaseStart(param0: string, param1: java.lang.Number, param2: java.lang.Number, param3: string, param4: java.util.Map<string,any>): boolean;
					public purchaseFail(param0: string): boolean;
					public purchaseFail(param0: string, param1: java.util.Map<string,any>): boolean;
					public addToCartComplete(param0: string): boolean;
					public purchaseComplete(): boolean;
					public addToCartComplete(param0: string, param1: java.util.Map<string,any>): boolean;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class RegistrationFlow extends io.embrace.android.embracesdk.CustomFlow {
					public static class: java.lang.Class<io.embrace.android.embracesdk.RegistrationFlow>;
					public static FLAG_SET_USER_PAYER: number;
					public registrationStart(param0: string, param1: java.util.Map<string,any>): boolean;
					public registrationStart(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>): boolean;
					public registrationComplete(): boolean;
					public constructor();
					public registrationComplete(param0: java.lang.Boolean, param1: java.util.Map<string,any>): boolean;
					public registrationFail(param0: string): boolean;
					public registrationComplete(param0: java.lang.Boolean): boolean;
					public registrationFail(param0: string, param1: java.util.Map<string,any>): boolean;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ScheduledWorker {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ScheduledWorker>;
					public close(): void;
					public isShutdown(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ScreenshotService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ScreenshotService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.ScreenshotService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						takeScreenshotLogEvent(param0: string): boolean;
						takeScreenshotMoment(param0: string): boolean;
					});
					public constructor();
					public takeScreenshotLogEvent(param0: string): boolean;
					public takeScreenshotMoment(param0: string): boolean;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class SdkDetectionUtils {
					public static class: java.lang.Class<io.embrace.android.embracesdk.SdkDetectionUtils>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Session {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Session>;
					public getLastState(): string;
					public getInfoLogIds(): java.util.List<string>;
					public getSessionType(): string;
					public static newBuilder(): io.embrace.android.embracesdk.Session.Builder;
					public getInfoLogsAttemptedToSend(): java.lang.Integer;
					public getTerminationTime(): java.lang.Long;
					public getErrorLogsAttemptedToSend(): java.lang.Integer;
					public getStartingBatteryLevel(): java.lang.Double;
					public getStartupDuration(): java.lang.Long;
					public getUnhandledExceptions(): java.lang.Integer;
					public getProperties(): java.util.Map<string,string>;
					public getUser(): io.embrace.android.embracesdk.UserInfo;
					public isColdStart(): java.lang.Boolean;
					public getExceptionError(): io.embrace.android.embracesdk.ExceptionError;
					public getStartType(): io.embrace.android.embracesdk.Session.SessionLifeEventType;
					public getWarnLogsAttemptedToSend(): java.lang.Integer;
					public getSessionId(): string;
					public getOrientations(): java.util.List<io.embrace.android.embracesdk.Orientation>;
					public getEndType(): io.embrace.android.embracesdk.Session.SessionLifeEventType;
					public getWarningLogIds(): java.util.List<string>;
					public static newBuilder(param0: io.embrace.android.embracesdk.Session): io.embrace.android.embracesdk.Session.Builder;
					public getLastHeartbeatTime(): java.lang.Long;
					public getCrashReportId(): string;
					public getEndTime(): java.lang.Long;
					public getSdkStartupDuration(): java.lang.Long;
					public getEventIds(): java.util.List<string>;
					public getStartupThreshold(): java.lang.Long;
					public getNumber(): java.lang.Integer;
					public isEndedCleanly(): java.lang.Boolean;
					public getErrorLogIds(): java.util.List<string>;
					public isReceivedTermination(): java.lang.Boolean;
					public getStartTime(): java.lang.Long;
				}
				export module Session {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Session.Builder>;
						public withStartingBatteryLevel(param0: io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Float>): io.embrace.android.embracesdk.Session.Builder;
						public withWarnLogsAttemptedToSend(param0: java.lang.Integer): io.embrace.android.embracesdk.Session.Builder;
						public withInfoLogsAttemptedToSend(param0: java.lang.Integer): io.embrace.android.embracesdk.Session.Builder;
						public withStartupDuration(param0: number): io.embrace.android.embracesdk.Session.Builder;
						public withEventIds(param0: java.util.List<string>): io.embrace.android.embracesdk.Session.Builder;
						public withWarningLogIds(param0: java.util.List<string>): io.embrace.android.embracesdk.Session.Builder;
						public withUnhandledExceptions(param0: number): io.embrace.android.embracesdk.Session.Builder;
						public withColdStart(param0: boolean): io.embrace.android.embracesdk.Session.Builder;
						public withStartupThreshold(param0: number): io.embrace.android.embracesdk.Session.Builder;
						public withInfoLogIds(param0: java.util.List<string>): io.embrace.android.embracesdk.Session.Builder;
						public withExceptionErrors(param0: io.embrace.android.embracesdk.ExceptionError): io.embrace.android.embracesdk.Session.Builder;
						public withStartType(param0: io.embrace.android.embracesdk.Session.SessionLifeEventType): io.embrace.android.embracesdk.Session.Builder;
						public withReceivedTermination(param0: boolean): io.embrace.android.embracesdk.Session.Builder;
						public withOrientations(param0: java.util.List<io.embrace.android.embracesdk.Orientation>): io.embrace.android.embracesdk.Session.Builder;
						public withSdkStartupDuration(param0: number): io.embrace.android.embracesdk.Session.Builder;
						public withStartTime(param0: java.lang.Long): io.embrace.android.embracesdk.Session.Builder;
						public withEndType(param0: io.embrace.android.embracesdk.Session.SessionLifeEventType): io.embrace.android.embracesdk.Session.Builder;
						public withCrashReportId(param0: string): io.embrace.android.embracesdk.Session.Builder;
						public withLastHeartbeatTime(param0: java.lang.Long): io.embrace.android.embracesdk.Session.Builder;
						public withSessionType(param0: string): io.embrace.android.embracesdk.Session.Builder;
						public withErrorLogIds(param0: java.util.List<string>): io.embrace.android.embracesdk.Session.Builder;
						public build(): io.embrace.android.embracesdk.Session;
						public withSessionId(param0: string): io.embrace.android.embracesdk.Session.Builder;
						public withNumber(param0: java.lang.Integer): io.embrace.android.embracesdk.Session.Builder;
						public withTerminationTime(param0: java.lang.Long): io.embrace.android.embracesdk.Session.Builder;
						public withEndedCleanly(param0: boolean): io.embrace.android.embracesdk.Session.Builder;
						public withUserInfo(param0: io.embrace.android.embracesdk.utils.optional.Optional<io.embrace.android.embracesdk.UserInfo>): io.embrace.android.embracesdk.Session.Builder;
						public withLastState(param0: string): io.embrace.android.embracesdk.Session.Builder;
						public withProperties(param0: io.embrace.android.embracesdk.EmbraceSessionProperties): io.embrace.android.embracesdk.Session.Builder;
						public withEndTime(param0: java.lang.Long): io.embrace.android.embracesdk.Session.Builder;
						public withErrorLogsAttemptedToSend(param0: java.lang.Integer): io.embrace.android.embracesdk.Session.Builder;
					}
					export class SessionLifeEventType {
						public static class: java.lang.Class<io.embrace.android.embracesdk.Session.SessionLifeEventType>;
						public static STATE: io.embrace.android.embracesdk.Session.SessionLifeEventType;
						public static MANUAL: io.embrace.android.embracesdk.Session.SessionLifeEventType;
						public static TIMED: io.embrace.android.embracesdk.Session.SessionLifeEventType;
						public static valueOf(param0: string): io.embrace.android.embracesdk.Session.SessionLifeEventType;
						public static values(): androidNative.Array<io.embrace.android.embracesdk.Session.SessionLifeEventType>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class SessionMessage {
					public static class: java.lang.Class<io.embrace.android.embracesdk.SessionMessage>;
					public static newBuilder(param0: io.embrace.android.embracesdk.SessionMessage): io.embrace.android.embracesdk.SessionMessage.Builder;
					public getSession(): io.embrace.android.embracesdk.Session;
					public getUserInfo(): io.embrace.android.embracesdk.UserInfo;
					public getPerformanceInfo(): io.embrace.android.embracesdk.SessionPerformanceInfo;
					public getDeviceInfo(): io.embrace.android.embracesdk.DeviceInfo;
					public static newBuilder(): io.embrace.android.embracesdk.SessionMessage.Builder;
					public getAppInfo(): io.embrace.android.embracesdk.AppInfo;
					public getBreadcrumbs(): io.embrace.android.embracesdk.Breadcrumbs;
				}
				export module SessionMessage {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.SessionMessage.Builder>;
						public withUserInfo(param0: io.embrace.android.embracesdk.UserInfo): io.embrace.android.embracesdk.SessionMessage.Builder;
						public withDeviceInfo(param0: io.embrace.android.embracesdk.DeviceInfo): io.embrace.android.embracesdk.SessionMessage.Builder;
						public withBreadcrumbs(param0: io.embrace.android.embracesdk.Breadcrumbs): io.embrace.android.embracesdk.SessionMessage.Builder;
						public withPerformanceInfo(param0: io.embrace.android.embracesdk.SessionPerformanceInfo): io.embrace.android.embracesdk.SessionMessage.Builder;
						public build(): io.embrace.android.embracesdk.SessionMessage;
						public withAppInfo(param0: io.embrace.android.embracesdk.AppInfo): io.embrace.android.embracesdk.SessionMessage.Builder;
						public withSession(param0: io.embrace.android.embracesdk.Session): io.embrace.android.embracesdk.SessionMessage.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class SessionPerformanceInfo extends io.embrace.android.embracesdk.PerformanceInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.SessionPerformanceInfo>;
					public static newBuilder(): io.embrace.android.embracesdk.SessionPerformanceInfo.Builder;
				}
				export module SessionPerformanceInfo {
					export class Builder extends io.embrace.android.embracesdk.PerformanceInfo.Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.SessionPerformanceInfo.Builder>;
						public withNetworkSessionV2(param0: io.embrace.android.embracesdk.NetworkSessionV2): io.embrace.android.embracesdk.SessionPerformanceInfo.Builder;
						public build(): io.embrace.android.embracesdk.SessionPerformanceInfo;
					}
					export class NetworkRequests {
						public static class: java.lang.Class<io.embrace.android.embracesdk.SessionPerformanceInfo.NetworkRequests>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class SessionService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.SessionService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.SessionService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						startSession(param0: boolean, param1: io.embrace.android.embracesdk.Session.SessionLifeEventType): void;
						triggerStatelessSessionEnd(param0: io.embrace.android.embracesdk.Session.SessionLifeEventType): void;
						sdkStartupFailedLastSession(): boolean;
						handleCrash(param0: string): void;
						handleNativeCrash(param0: io.embrace.android.embracesdk.utils.optional.Optional<io.embrace.android.embracesdk.NativeCrashData>): void;
						addProperty(param0: string, param1: string, param2: boolean): boolean;
						removeProperty(param0: string): boolean;
						getProperties(): java.util.Map<string,string>;
					});
					public constructor();
					public handleCrash(param0: string): void;
					public startSession(param0: boolean, param1: io.embrace.android.embracesdk.Session.SessionLifeEventType): void;
					public removeProperty(param0: string): boolean;
					public addProperty(param0: string, param1: string, param2: boolean): boolean;
					public triggerStatelessSessionEnd(param0: io.embrace.android.embracesdk.Session.SessionLifeEventType): void;
					public sdkStartupFailedLastSession(): boolean;
					public handleNativeCrash(param0: io.embrace.android.embracesdk.utils.optional.Optional<io.embrace.android.embracesdk.NativeCrashData>): void;
					public getProperties(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class SignalStrength {
					public static class: java.lang.Class<io.embrace.android.embracesdk.SignalStrength>;
					public getEvdoSnr(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getLteSignalStrength(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getLteRssnr(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public isGsm(): boolean;
					public getLteCqi(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getGsmBitErrorRate(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getCdmaDbm(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getGsmSignalStrength(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getEvdoEcio(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getTimestamp(): number;
					public getLteRsrq(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getCdmaEcio(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
					public getLteRsrp(): io.embrace.android.embracesdk.utils.optional.Optional<java.lang.Integer>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class SignalStrengthUtils {
					public static class: java.lang.Class<io.embrace.android.embracesdk.SignalStrengthUtils>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Stacktraces {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Stacktraces>;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class StartupEventInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.StartupEventInfo>;
					public getDuration(): java.lang.Long;
					public getThreshold(): java.lang.Long;
					public static newBuilder(): io.embrace.android.embracesdk.StartupEventInfo.Builder;
				}
				export module StartupEventInfo {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.StartupEventInfo.Builder>;
						public withThreshold(param0: number): io.embrace.android.embracesdk.StartupEventInfo.Builder;
						public withDuration(param0: number): io.embrace.android.embracesdk.StartupEventInfo.Builder;
						public build(): io.embrace.android.embracesdk.StartupEventInfo;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class StreamHandlerFactoryInstaller {
					public static class: java.lang.Class<io.embrace.android.embracesdk.StreamHandlerFactoryInstaller>;
				}
				export module StreamHandlerFactoryInstaller {
					export class WrappingFactory {
						public static class: java.lang.Class<io.embrace.android.embracesdk.StreamHandlerFactoryInstaller.WrappingFactory>;
						public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class SubscriptionPurchaseFlow extends io.embrace.android.embracesdk.CustomFlow {
					public static class: java.lang.Class<io.embrace.android.embracesdk.SubscriptionPurchaseFlow>;
					public subscriptionPurchaseFail(param0: string, param1: java.util.Map<string,any>): boolean;
					public constructor();
					public subscriptionPurchaseFail(param0: string): boolean;
					public subscriptionPurchaseStart(param0: string, param1: string, param2: java.lang.Number, param3: string, param4: java.util.Map<string,any>): boolean;
					public subscriptionPurchaseComplete(param0: java.util.Map<string,any>): boolean;
					public subscriptionPurchaseComplete(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class SystemClock extends io.embrace.android.embracesdk.Clock {
					public static class: java.lang.Class<io.embrace.android.embracesdk.SystemClock>;
					public constructor();
					public now(): number;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class TapBreadcrumb extends io.embrace.android.embracesdk.Breadcrumb {
					public static class: java.lang.Class<io.embrace.android.embracesdk.TapBreadcrumb>;
					public getStartTime(): number;
				}
				export module TapBreadcrumb {
					export class TapBreadcrumbType {
						public static class: java.lang.Class<io.embrace.android.embracesdk.TapBreadcrumb.TapBreadcrumbType>;
						public static TAP: io.embrace.android.embracesdk.TapBreadcrumb.TapBreadcrumbType;
						public static LONG_PRESS: io.embrace.android.embracesdk.TapBreadcrumb.TapBreadcrumbType;
						public static valueOf(param0: string): io.embrace.android.embracesdk.TapBreadcrumb.TapBreadcrumbType;
						public static values(): androidNative.Array<io.embrace.android.embracesdk.TapBreadcrumb.TapBreadcrumbType>;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ThreadInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ThreadInfo>;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public getThreadId(): number;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class UserInfo {
					public static class: java.lang.Class<io.embrace.android.embracesdk.UserInfo>;
					public getUsername(): string;
					public getPersonas(): java.util.Set<string>;
					public toJson(): string;
					public static ofStored(param0: io.embrace.android.embracesdk.PreferencesService): io.embrace.android.embracesdk.UserInfo;
					public static newBuilder(param0: io.embrace.android.embracesdk.UserInfo): io.embrace.android.embracesdk.UserInfo.Builder;
					public static newBuilder(): io.embrace.android.embracesdk.UserInfo.Builder;
					public getUserId(): string;
					public getEmail(): string;
					public static ofEmpty(): io.embrace.android.embracesdk.UserInfo;
				}
				export module UserInfo {
					export class Builder {
						public static class: java.lang.Class<io.embrace.android.embracesdk.UserInfo.Builder>;
						public getPersonas(): java.util.Set<string>;
						public withUsername(param0: string): io.embrace.android.embracesdk.UserInfo.Builder;
						public getUserId(): string;
						public getEmail(): string;
						public build(): io.embrace.android.embracesdk.UserInfo;
						public getUsername(): string;
						public withEmail(param0: string): io.embrace.android.embracesdk.UserInfo.Builder;
						public withPersonas(param0: java.util.Set<string>): io.embrace.android.embracesdk.UserInfo.Builder;
						public withUserId(param0: string): io.embrace.android.embracesdk.UserInfo.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class UserService {
					public static class: java.lang.Class<io.embrace.android.embracesdk.UserService>;
					/**
					 * Constructs a new instance of the io.embrace.android.embracesdk.UserService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUserInfo(): io.embrace.android.embracesdk.UserInfo;
						clearAllUserInfo(): void;
						loadUserInfoFromDisk(): io.embrace.android.embracesdk.utils.optional.Optional<io.embrace.android.embracesdk.UserInfo>;
						setUserIdentifier(param0: string): void;
						clearUserIdentifier(): void;
						setUserEmail(param0: string): void;
						clearUserEmail(): void;
						setUserAsPayer(): void;
						clearUserAsPayer(): void;
						setUserPersona(param0: string): void;
						clearUserPersona(param0: string): void;
						clearAllUserPersonas(): void;
						setUsername(param0: string): void;
						clearUsername(): void;
					});
					public constructor();
					public setUserAsPayer(): void;
					public setUserPersona(param0: string): void;
					public setUserEmail(param0: string): void;
					public clearUserPersona(param0: string): void;
					public clearUserEmail(): void;
					public clearUsername(): void;
					public clearUserAsPayer(): void;
					public clearAllUserInfo(): void;
					public clearUserIdentifier(): void;
					public setUsername(param0: string): void;
					public clearAllUserPersonas(): void;
					public getUserInfo(): io.embrace.android.embracesdk.UserInfo;
					public loadUserInfoFromDisk(): io.embrace.android.embracesdk.utils.optional.Optional<io.embrace.android.embracesdk.UserInfo>;
					public setUserIdentifier(param0: string): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class Uuid {
					public static class: java.lang.Class<io.embrace.android.embracesdk.Uuid>;
					public static getEmbUuid(): string;
					public static getEmbUuid(param0: string): string;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ViewBreadcrumb extends io.embrace.android.embracesdk.Breadcrumb {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ViewBreadcrumb>;
					public getEnd(): number;
					public getStartTime(): number;
					public getStart(): number;
					public setEnd(param0: java.lang.Long): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class ViewSwazzledHooks {
					public static class: java.lang.Class<io.embrace.android.embracesdk.ViewSwazzledHooks>;
					public constructor();
				}
				export module ViewSwazzledHooks {
					export class OnClickListener {
						public static class: java.lang.Class<io.embrace.android.embracesdk.ViewSwazzledHooks.OnClickListener>;
						public static _preOnClick(param0: globalAndroid.view.View.OnClickListener, param1: globalAndroid.view.View): void;
						public constructor();
					}
					export class OnLongClickListener {
						public static class: java.lang.Class<io.embrace.android.embracesdk.ViewSwazzledHooks.OnLongClickListener>;
						public constructor();
						public static _preOnLongClick(param0: globalAndroid.view.View.OnLongClickListener, param1: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class WebViewBreadcrumb extends io.embrace.android.embracesdk.Breadcrumb {
					public static class: java.lang.Class<io.embrace.android.embracesdk.WebViewBreadcrumb>;
					public getStartTime(): number;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class WebViewClientSwazzledHooks {
					public static class: java.lang.Class<io.embrace.android.embracesdk.WebViewClientSwazzledHooks>;
					public static _preOnPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export class WorkerUtils {
					public static class: java.lang.Class<io.embrace.android.embracesdk.WorkerUtils>;
				}
				export module WorkerUtils {
					export abstract class PriorityRunnable {
						public static class: java.lang.Class<io.embrace.android.embracesdk.WorkerUtils.PriorityRunnable>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module annotation {
					export class StartupActivity {
						public static class: java.lang.Class<io.embrace.android.embracesdk.annotation.StartupActivity>;
						/**
						 * Constructs a new instance of the io.embrace.android.embracesdk.annotation.StartupActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export class EmbraceNetworkRequest {
						public static class: java.lang.Class<io.embrace.android.embracesdk.network.EmbraceNetworkRequest>;
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public description(): string;
						public getBytesIn(): java.lang.Long;
						public getTraceId(): string;
						public canSend(): boolean;
						public getUrl(): string;
						public getHttpMethod(): string;
						public getBytesOut(): java.lang.Long;
						public static newBuilder(): io.embrace.android.embracesdk.network.EmbraceNetworkRequest.Builder;
						public getEndTime(): java.lang.Long;
						public getError(): java.lang.Throwable;
					}
					export module EmbraceNetworkRequest {
						export class Builder {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.EmbraceNetworkRequest.Builder>;
							public withBytesOut(param0: java.lang.Long): void;
							public withUrl(param0: string): void;
							public withStartTime(param0: java.lang.Long): void;
							public withEndTime(param0: java.lang.Long): void;
							public build(): io.embrace.android.embracesdk.network.EmbraceNetworkRequest;
							/** @deprecated */
							public withByteOut(param0: java.lang.Long): void;
							public withResponseCode(param0: java.lang.Integer): void;
							/** @deprecated */
							public withByteIn(param0: java.lang.Long): void;
							public withError(param0: java.lang.Throwable): void;
							public withTraceId(param0: string): void;
							public withBytesIn(param0: java.lang.Long): void;
							public withHttpMethod(param0: io.embrace.android.embracesdk.network.http.HttpMethod): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export class EmbraceNetworkRequestV2 {
						public static class: java.lang.Class<io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2>;
						public getStartTime(): java.lang.Long;
						public getResponseCode(): java.lang.Integer;
						public description(): string;
						public getBytesIn(): java.lang.Long;
						public static newBuilder(): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
						public getTraceId(): string;
						public canSend(): boolean;
						public getUrl(): string;
						public getHttpMethod(): string;
						public getBytesOut(): java.lang.Long;
						public getEndTime(): java.lang.Long;
						public getError(): java.lang.Throwable;
					}
					export module EmbraceNetworkRequestV2 {
						export class Builder {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder>;
							public withHttpMethod(param0: io.embrace.android.embracesdk.network.http.HttpMethod): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withBytesIn(param0: java.lang.Long): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							/** @deprecated */
							public withByteIn(param0: java.lang.Long): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							/** @deprecated */
							public withByteOut(param0: java.lang.Long): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public build(): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2;
							public withBytesIn(param0: number): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withUrl(param0: string): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withBytesOut(param0: number): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withEndTime(param0: java.lang.Long): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withStartTime(param0: java.lang.Long): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withBytesOut(param0: java.lang.Long): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withHttpMethod(param0: number): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withTraceId(param0: string): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withResponseCode(param0: java.lang.Integer): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
							public withError(param0: java.lang.Throwable): io.embrace.android.embracesdk.network.EmbraceNetworkRequestV2.Builder;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export abstract class EmbraceUrlStreamHandler {
						public static class: java.lang.Class<io.embrace.android.embracesdk.network.EmbraceUrlStreamHandler>;
						public static METHOD_NAME_OPEN_CONNECTION: string;
						public static MSG_ERROR_OPEN_CONNECTION: string;
						public handler: java.net.URLStreamHandler;
						public static enableRequestSizeCapture: java.lang.Boolean;
						public getMethodOpenConnection(param0: java.lang.Class<java.net.URL>): java.lang.reflect.Method;
						public newEmbraceUrlConnection(param0: java.net.URLConnection): java.net.URLConnection;
						public constructor(param0: java.net.URLStreamHandler);
						public openConnection(param0: java.net.URL): java.net.URLConnection;
						public static setEnableRequestSizeCapture(param0: java.lang.Boolean): void;
						public getDefaultPort(): number;
						public openConnection(param0: java.net.URL, param1: java.net.Proxy): java.net.URLConnection;
						public getMethodOpenConnection(param0: java.lang.Class<java.net.URL>, param1: java.lang.Class<java.net.Proxy>): java.lang.reflect.Method;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export class EmbraceUrlStreamHandlerFactory {
						public static class: java.lang.Class<io.embrace.android.embracesdk.network.EmbraceUrlStreamHandlerFactory>;
						public constructor();
						public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class CountingInputStreamWithCallback {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.CountingInputStreamWithCallback>;
							public mark(param0: number): void;
							public skip(param0: number): number;
							public constructor(param0: java.io.InputStream, param1: java9.util.function.Consumer<java.lang.Long>);
							public read(): number;
							public getCount(): number;
							public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class CountingOutputStream {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.CountingOutputStream>;
							public constructor(param0: java.io.OutputStream);
							public close(): void;
							public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
							public write(param0: number): void;
							public getCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class EmbraceHttpPathOverride {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.EmbraceHttpPathOverride>;
							public static PATH_OVERRIDE: string;
							public constructor();
							public static getURLString(param0: io.embrace.android.embracesdk.HttpPathOverrideRequest<any>): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class EmbraceHttpUrlConnection<T>  extends java.net.HttpURLConnection {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.EmbraceHttpUrlConnection<any>>;
							public setRequestProperty(param0: string, param1: string): void;
							public getReadTimeout(): number;
							public getDefaultUseCaches(): boolean;
							public setReadTimeout(param0: number): void;
							public getHeaderFieldInt(param0: string, param1: number): number;
							public getInstanceFollowRedirects(): boolean;
							public getResponseCode(): number;
							public getAllowUserInteraction(): boolean;
							public getExpiration(): number;
							public getContentType(): string;
							public setIfModifiedSince(param0: number): void;
							public getDoInput(): boolean;
							public getErrorStream(): java.io.InputStream;
							public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
							public setInstanceFollowRedirects(param0: boolean): void;
							public getRequestMethod(): string;
							public setDoOutput(param0: boolean): void;
							public getHeaderFieldKey(param0: number): string;
							public setConnectTimeout(param0: number): void;
							public setUseCaches(param0: boolean): void;
							public getIfModifiedSince(): number;
							public setChunkedStreamingMode(param0: number): void;
							public getHeaderField(param0: string): string;
							public getDoOutput(): boolean;
							public getURL(): java.net.URL;
							public getHeaderField(param0: number): string;
							public getHeaderFieldLong(param0: string, param1: number): number;
							public getContentLength(): number;
							public getContentLengthLong(): number;
							public constructor(param0: any, param1: boolean);
							public getDate(): number;
							public setDefaultUseCaches(param0: boolean): void;
							public toString(): string;
							public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
							public getRequestProperty(param0: string): string;
							public setFixedLengthStreamingMode(param0: number): void;
							public getHeaderFieldDate(param0: string, param1: number): number;
							public getOutputStream(): java.io.OutputStream;
							public connect(): void;
							public setDoInput(param0: boolean): void;
							public getPermission(): java.security.Permission;
							public getResponseMessage(): string;
							public disconnect(): void;
							public getInputStream(): java.io.InputStream;
							public getContent(): any;
							public getUseCaches(): boolean;
							public addRequestProperty(param0: string, param1: string): void;
							public setAllowUserInteraction(param0: boolean): void;
							public getConnectTimeout(): number;
							public setRequestMethod(param0: string): void;
							public getLastModified(): number;
							public usingProxy(): boolean;
							public getContentEncoding(): string;
							public getContent(param0: androidNative.Array<java.lang.Class>): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class EmbraceHttpUrlConnectionOverride extends io.embrace.android.embracesdk.HttpPathOverrideRequest<any> {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.EmbraceHttpUrlConnectionOverride>;
							public getURLString(): string;
							public getHeaderByName(param0: string): string;
							public getOverriddenURL(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class EmbraceHttpUrlStreamHandler extends io.embrace.android.embracesdk.network.EmbraceUrlStreamHandler {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.EmbraceHttpUrlStreamHandler>;
							public getMethodOpenConnection(param0: java.lang.Class<java.net.URL>): java.lang.reflect.Method;
							public getMethodOpenConnection(param0: java.lang.Class<java.net.URL>, param1: java.lang.Class<java.net.Proxy>): java.lang.reflect.Method;
							public getDefaultPort(): number;
							public newEmbraceUrlConnection(param0: java.net.URLConnection): java.net.URLConnection;
							public constructor(param0: java.net.URLStreamHandler);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class EmbraceHttpsUrlConnection<T>  extends javax.net.ssl.HttpsURLConnection {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.EmbraceHttpsUrlConnection<any>>;
							public setRequestProperty(param0: string, param1: string): void;
							public getReadTimeout(): number;
							public getDefaultUseCaches(): boolean;
							public setReadTimeout(param0: number): void;
							public getHeaderFieldInt(param0: string, param1: number): number;
							public getInstanceFollowRedirects(): boolean;
							public getResponseCode(): number;
							public getAllowUserInteraction(): boolean;
							public getExpiration(): number;
							public getServerCertificates(): androidNative.Array<java.security.cert.Certificate>;
							public getContentType(): string;
							public setIfModifiedSince(param0: number): void;
							public getDoInput(): boolean;
							public getErrorStream(): java.io.InputStream;
							public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
							public setInstanceFollowRedirects(param0: boolean): void;
							public getRequestMethod(): string;
							public setDoOutput(param0: boolean): void;
							public getHeaderFieldKey(param0: number): string;
							public setConnectTimeout(param0: number): void;
							public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
							public setUseCaches(param0: boolean): void;
							public getIfModifiedSince(): number;
							public setChunkedStreamingMode(param0: number): void;
							public getHeaderField(param0: string): string;
							public getDoOutput(): boolean;
							public getURL(): java.net.URL;
							public getHeaderField(param0: number): string;
							public getHeaderFieldLong(param0: string, param1: number): number;
							public getCipherSuite(): string;
							public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
							public getContentLength(): number;
							public getContentLengthLong(): number;
							public constructor(param0: any, param1: boolean);
							public getDate(): number;
							public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
							public setDefaultUseCaches(param0: boolean): void;
							public getPeerPrincipal(): java.security.Principal;
							public toString(): string;
							public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
							public getRequestProperty(param0: string): string;
							public getLocalCertificates(): androidNative.Array<java.security.cert.Certificate>;
							public getLocalPrincipal(): java.security.Principal;
							public setFixedLengthStreamingMode(param0: number): void;
							public getHeaderFieldDate(param0: string, param1: number): number;
							public getOutputStream(): java.io.OutputStream;
							public connect(): void;
							public setDoInput(param0: boolean): void;
							public getPermission(): java.security.Permission;
							public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
							public getResponseMessage(): string;
							public disconnect(): void;
							public getInputStream(): java.io.InputStream;
							public getContent(): any;
							public getUseCaches(): boolean;
							public addRequestProperty(param0: string, param1: string): void;
							public setAllowUserInteraction(param0: boolean): void;
							public getConnectTimeout(): number;
							public setRequestMethod(param0: string): void;
							public getLastModified(): number;
							public usingProxy(): boolean;
							public getContentEncoding(): string;
							public getContent(param0: androidNative.Array<java.lang.Class>): any;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class EmbraceHttpsUrlStreamHandler extends io.embrace.android.embracesdk.network.EmbraceUrlStreamHandler {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.EmbraceHttpsUrlStreamHandler>;
							public getMethodOpenConnection(param0: java.lang.Class<java.net.URL>): java.lang.reflect.Method;
							public getMethodOpenConnection(param0: java.lang.Class<java.net.URL>, param1: java.lang.Class<java.net.Proxy>): java.lang.reflect.Method;
							public getDefaultPort(): number;
							public newEmbraceUrlConnection(param0: java.net.URLConnection): java.net.URLConnection;
							public constructor(param0: java.net.URLStreamHandler);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module network {
					export module http {
						export class HttpMethod {
							public static class: java.lang.Class<io.embrace.android.embracesdk.network.http.HttpMethod>;
							public static GET: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static HEAD: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static POST: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static PUT: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static DELETE: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static CONNECT: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static OPTIONS: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static TRACE: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static PATCH: io.embrace.android.embracesdk.network.http.HttpMethod;
							public static values(): androidNative.Array<io.embrace.android.embracesdk.network.http.HttpMethod>;
							public static fromInt(param0: java.lang.Integer): io.embrace.android.embracesdk.network.http.HttpMethod;
							public static valueOf(param0: string): io.embrace.android.embracesdk.network.http.HttpMethod;
							public static fromString(param0: string): io.embrace.android.embracesdk.network.http.HttpMethod;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module networking {
					export class EmbraceConnection {
						public static class: java.lang.Class<io.embrace.android.embracesdk.networking.EmbraceConnection>;
						/**
						 * Constructs a new instance of the io.embrace.android.embracesdk.networking.EmbraceConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isHttps(): boolean;
							setRequestMethod(param0: string): void;
							setDoOutput(param0: java.lang.Boolean): void;
							setConnectTimeout(param0: java.lang.Integer): void;
							setReadTimeout(param0: java.lang.Integer): void;
							setRequestProperty(param0: string, param1: string): void;
							getURL(): io.embrace.android.embracesdk.networking.EmbraceUrl;
							getRequestMethod(): string;
							getHeaderField(param0: string): string;
							getHeaderFields(): java.util.Map<string,java.util.List<string>>;
							getOutputStream(): java.io.OutputStream;
							getInputStream(): java.io.InputStream;
							getErrorStream(): java.io.InputStream;
							connect(): void;
							getResponseCode(): number;
							getResponseMessage(): string;
							setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
							getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
						});
						public constructor();
						public setReadTimeout(param0: java.lang.Integer): void;
						public setConnectTimeout(param0: java.lang.Integer): void;
						public getResponseMessage(): string;
						public getResponseCode(): number;
						public setRequestMethod(param0: string): void;
						public getRequestMethod(): string;
						public getHeaderField(param0: string): string;
						public getInputStream(): java.io.InputStream;
						public connect(): void;
						public getOutputStream(): java.io.OutputStream;
						public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
						public getURL(): io.embrace.android.embracesdk.networking.EmbraceUrl;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getErrorStream(): java.io.InputStream;
						public isHttps(): boolean;
						public setDoOutput(param0: java.lang.Boolean): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module networking {
					export class EmbraceConnectionImpl extends io.embrace.android.embracesdk.networking.EmbraceConnection {
						public static class: java.lang.Class<io.embrace.android.embracesdk.networking.EmbraceConnectionImpl>;
						public setReadTimeout(param0: java.lang.Integer): void;
						public setConnectTimeout(param0: java.lang.Integer): void;
						public getResponseMessage(): string;
						public getResponseCode(): number;
						public setRequestMethod(param0: string): void;
						public getRequestMethod(): string;
						public getHeaderField(param0: string): string;
						public getInputStream(): java.io.InputStream;
						public connect(): void;
						public constructor(param0: java.net.HttpURLConnection, param1: io.embrace.android.embracesdk.networking.EmbraceUrl);
						public getOutputStream(): java.io.OutputStream;
						public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
						public getURL(): io.embrace.android.embracesdk.networking.EmbraceUrl;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getErrorStream(): java.io.InputStream;
						public isHttps(): boolean;
						public setDoOutput(param0: java.lang.Boolean): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module networking {
					export abstract class EmbraceUrl {
						public static class: java.lang.Class<io.embrace.android.embracesdk.networking.EmbraceUrl>;
						public constructor();
						public openConnection(): io.embrace.android.embracesdk.networking.EmbraceConnection;
						public static getUrl(param0: string): io.embrace.android.embracesdk.networking.EmbraceUrl;
						public getFile(): string;
						public toString(): string;
					}
					export module EmbraceUrl {
						export class UrlFactory {
							public static class: java.lang.Class<io.embrace.android.embracesdk.networking.EmbraceUrl.UrlFactory>;
							/**
							 * Constructs a new instance of the io.embrace.android.embracesdk.networking.EmbraceUrl$UrlFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getInstance(param0: string): io.embrace.android.embracesdk.networking.EmbraceUrl;
							});
							public constructor();
							public getInstance(param0: string): io.embrace.android.embracesdk.networking.EmbraceUrl;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module networking {
					export class EmbraceUrlImpl extends io.embrace.android.embracesdk.networking.EmbraceUrl {
						public static class: java.lang.Class<io.embrace.android.embracesdk.networking.EmbraceUrlImpl>;
						public openConnection(): io.embrace.android.embracesdk.networking.EmbraceConnection;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getFile(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export class Preconditions {
						public static class: java.lang.Class<io.embrace.android.embracesdk.utils.Preconditions>;
						public constructor();
						public static checkNotNull(param0: any): any;
						public static checkArgument(param0: boolean, param1: any): void;
						public static checkArgument(param0: boolean): void;
						public static checkNotNull(param0: any, param1: any): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export class ThreadUtils {
						public static class: java.lang.Class<io.embrace.android.embracesdk.utils.ThreadUtils>;
						public constructor();
						public static runOnMainThread(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module concurrent {
						export class ExecutorUtils {
							public static class: java.lang.Class<io.embrace.android.embracesdk.utils.concurrent.ExecutorUtils>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export class Unchecked {
							public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.Unchecked>;
							public static consumer(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedConsumer<any>): java9.util.function.Consumer;
							public static wrap(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedRunnable): void;
							public static propagate(param0: java.lang.Throwable): java.lang.RuntimeException;
							public static supplier(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedSupplier<any>): java9.util.function.Supplier;
							public static wrap(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedSupplier<any>): any;
							public static biConsumer(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiConsumer<any,any>): java9.util.function.BiConsumer;
							public static predicate(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedPredicate<any>): java9.util.function.Predicate;
							public static runnable(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedRunnable): java.lang.Runnable;
							public static binaryOperator(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedBinaryOperator<any>): java9.util.function.BinaryOperator;
							public static function(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedFunction<any,any>): java9.util.function.Function;
							public static biFunction(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiFunction<any,any,any>): java9.util.function.BiFunction;
							public static biPredicate(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiPredicate<any,any>): java9.util.function.BiPredicate;
							public static unaryOperator(param0: io.embrace.android.embracesdk.utils.exceptions.function.CheckedUnaryOperator<any>): java9.util.function.UnaryOperator;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedBiConsumer<T, U>  extends java.lang.Object {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiConsumer<any,any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									accept(param0: T, param1: U): void;
								});
								public constructor();
								public accept(param0: T, param1: U): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedBiFunction<T, U, R>  extends java.lang.Object {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiFunction<any,any,any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiFunction<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedBiPredicate<T, U>  extends java.lang.Object {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiPredicate<any,any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiPredicate<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									test(param0: T, param1: U): boolean;
								});
								public constructor();
								public test(param0: T, param1: U): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedBinaryOperator<T>  extends io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiFunction<any,any,any> {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedBinaryOperator<any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedBinaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									apply(param0: any, param1: any): any;
								});
								public constructor();
								public apply(param0: any, param1: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedConsumer<T>  extends java.lang.Object {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedConsumer<any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									accept(param0: T): void;
								});
								public constructor();
								public accept(param0: T): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedFunction<T, R>  extends java.lang.Object {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedFunction<any,any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedPredicate<T>  extends java.lang.Object {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedPredicate<any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedPredicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									test(param0: T): boolean;
								});
								public constructor();
								public test(param0: T): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedRunnable {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedRunnable>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedRunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									run(): void;
								});
								public constructor();
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedSupplier<R>  extends java.lang.Object {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedSupplier<any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedSupplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									get(): R;
								});
								public constructor();
								public get(): R;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module exceptions {
						export module 'function' {
							export class CheckedUnaryOperator<T>  extends io.embrace.android.embracesdk.utils.exceptions.function.CheckedFunction<any,any> {
								public static class: java.lang.Class<io.embrace.android.embracesdk.utils.exceptions.function.CheckedUnaryOperator<any>>;
								/**
								 * Constructs a new instance of the io.embrace.android.embracesdk.utils.exceptions.function.CheckedUnaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									apply(param0: any): any;
								});
								public constructor();
								public apply(param0: any): any;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module optional {
						export class Absent<T>  extends io.embrace.android.embracesdk.utils.optional.Optional<any> {
							public static class: java.lang.Class<io.embrace.android.embracesdk.utils.optional.Absent<any>>;
							public get(): any;
							public orNull(): any;
							public asSet(): java.util.Set<any>;
							public hashCode(): number;
							public or(param0: any): any;
							public or(param0: io.embrace.android.embracesdk.utils.optional.Optional<any>): io.embrace.android.embracesdk.utils.optional.Optional<any>;
							public toString(): string;
							public equals(param0: any): boolean;
							public isPresent(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module optional {
						export abstract class Optional<T>  extends java.io.Serializable {
							public static class: java.lang.Class<io.embrace.android.embracesdk.utils.optional.Optional<any>>;
							public get(): any;
							public orNull(): any;
							public asSet(): java.util.Set<any>;
							public hashCode(): number;
							public static of(param0: any): io.embrace.android.embracesdk.utils.optional.Optional<any>;
							public or(param0: any): any;
							public static absent(): io.embrace.android.embracesdk.utils.optional.Optional<any>;
							public or(param0: io.embrace.android.embracesdk.utils.optional.Optional<any>): io.embrace.android.embracesdk.utils.optional.Optional<any>;
							public toString(): string;
							public static fromNullable(param0: any): io.embrace.android.embracesdk.utils.optional.Optional<any>;
							public equals(param0: any): boolean;
							public isPresent(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module embrace {
		export module android {
			export module embracesdk {
				export module utils {
					export module optional {
						export class Present<T>  extends io.embrace.android.embracesdk.utils.optional.Optional<any> {
							public static class: java.lang.Class<io.embrace.android.embracesdk.utils.optional.Present<any>>;
							public get(): any;
							public orNull(): any;
							public asSet(): java.util.Set<any>;
							public hashCode(): number;
							public or(param0: any): any;
							public or(param0: io.embrace.android.embracesdk.utils.optional.Optional<any>): io.embrace.android.embracesdk.utils.optional.Optional<any>;
							public toString(): string;
							public equals(param0: any): boolean;
							public isPresent(): boolean;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//io.embrace.android.embracesdk.ApiClientRetryWorker:1
//io.embrace.android.embracesdk.ApiClientRetryWorker.FailedApiCall:1
//io.embrace.android.embracesdk.ApiClientRetryWorker.FailedCalls:1
//io.embrace.android.embracesdk.HttpPathOverrideRequest:1
//io.embrace.android.embracesdk.network.http.EmbraceHttpUrlConnection:1
//io.embrace.android.embracesdk.network.http.EmbraceHttpsUrlConnection:1
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiConsumer:2
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiFunction:3
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedBiPredicate:2
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedBinaryOperator:1
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedConsumer:1
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedFunction:2
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedPredicate:1
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedSupplier:1
//io.embrace.android.embracesdk.utils.exceptions.function.CheckedUnaryOperator:1
//io.embrace.android.embracesdk.utils.optional.Absent:1
//io.embrace.android.embracesdk.utils.optional.Optional:1
//io.embrace.android.embracesdk.utils.optional.Present:1

