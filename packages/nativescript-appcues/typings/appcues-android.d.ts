declare module com {
	export module appcues {
		export class AnalyticType {
			public static class: java.lang.Class<com.appcues.AnalyticType>;
			public static IDENTIFY: com.appcues.AnalyticType;
			public static GROUP: com.appcues.AnalyticType;
			public static EVENT: com.appcues.AnalyticType;
			public static SCREEN: com.appcues.AnalyticType;
			public static values(): androidNative.Array<com.appcues.AnalyticType>;
			public static valueOf(param0: string): com.appcues.AnalyticType;
		}
	}
}

declare module com {
	export module appcues {
		export class AnalyticsListener {
			public static class: java.lang.Class<com.appcues.AnalyticsListener>;
			/**
			 * Constructs a new instance of the com.appcues.AnalyticsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				trackedAnalytic(param0: com.appcues.AnalyticType, param1: string, param2: java.util.Map<string,any>, param3: boolean): void;
			});
			public constructor();
			public trackedAnalytic(param0: com.appcues.AnalyticType, param1: string, param2: java.util.Map<string,any>, param3: boolean): void;
		}
	}
}

declare module com {
	export module appcues {
		export class AnalyticsPublisher {
			public static class: java.lang.Class<com.appcues.AnalyticsPublisher>;
			public constructor(param0: com.appcues.Storage);
			public publish(param0: com.appcues.AnalyticsListener, param1: com.appcues.analytics.TrackingData): void;
		}
		export module AnalyticsPublisher {
			export class WhenMappings {
				public static class: java.lang.Class<com.appcues.AnalyticsPublisher.WhenMappings>;
			}
		}
	}
}

declare module com {
	export module appcues {
		export class Appcues {
			public static class: java.lang.Class<com.appcues.Appcues>;
			public static $stable: number;
			public getAnalyticsListener(): com.appcues.AnalyticsListener;
			public setInterceptor(param0: com.appcues.AppcuesInterceptor): void;
			public track(param0: string, param1: java.util.Map<string,any>): void;
			public trackScreens(): void;
			public constructor(param0: org.koin.core.scope.Scope);
			public registerAction(param0: string, param1: any): void;
			public onNewIntent(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent): boolean;
			public group(param0: string, param1: java.util.Map<string,any>): void;
			public setExperienceListener(param0: com.appcues.ExperienceListener): void;
			public getExperienceListener(): com.appcues.ExperienceListener;
			public registerTrait(param0: string, param1: any): void;
			public setAnalyticsListener(param0: com.appcues.AnalyticsListener): void;
			public debug(param0: globalAndroid.app.Activity): void;
			public stop(): void;
			public getInterceptor(): com.appcues.AppcuesInterceptor;
			public reset(): void;
			public getVersion(): string;
			public identify(param0: string, param1: java.util.Map<string,any>): void;
			public show(param0: string, param1: any): any;
			public anonymous(param0: java.util.Map<string,any>): void;
			public screen(param0: string, param1: java.util.Map<string,any>): void;
		}
		export module Appcues {
			export class Companion {
				public static class: java.lang.Class<com.appcues.Appcues.Companion>;
				public getVersion(): string;
			}
		}
	}
}

declare module com {
	export module appcues {
		export class AppcuesConfig {
			public static class: java.lang.Class<com.appcues.AppcuesConfig>;
			public static $stable: number;
			public static SESSION_TIMEOUT_DEFAULT: number;
			public static ACTIVITY_STORAGE_MAX_SIZE: number;
			public getAccountId$appcues_release(): string;
			public equals(param0: any): boolean;
			public getActivityStorageMaxSize(): number;
			public getAnalyticsListener(): com.appcues.AnalyticsListener;
			public getActivityStorageMaxAge(): java.lang.Integer;
			public getApiBasePath(): string;
			public getAdditionalAutoProperties(): java.util.Map<string,any>;
			public constructor(param0: string, param1: string);
			public setSessionTimeout(param0: number): void;
			public setActivityStorageMaxAge(param0: java.lang.Integer): void;
			public getApplicationId$appcues_release(): string;
			public setExperienceListener(param0: com.appcues.ExperienceListener): void;
			public getExperienceListener(): com.appcues.ExperienceListener;
			public setActivityStorageMaxSize(param0: number): void;
			public getSessionTimeout(): number;
			public setLoggingLevel(param0: com.appcues.LoggingLevel): void;
			public setApiBasePath(param0: string): void;
			public setInterceptor(param0: com.appcues.AppcuesInterceptor): void;
			public setAdditionalAutoProperties(param0: java.util.Map<string,any>): void;
			public component1$appcues_release(): string;
			public setAnonymousIdFactory(param0: any): void;
			public toString(): string;
			public getLoggingLevel(): com.appcues.LoggingLevel;
			public setAnalyticsListener(param0: com.appcues.AnalyticsListener): void;
			public component2$appcues_release(): string;
			public getAnonymousIdFactory(): any;
			public getInterceptor(): com.appcues.AppcuesInterceptor;
			public copy(param0: string, param1: string): com.appcues.AppcuesConfig;
			public hashCode(): number;
		}
		export module AppcuesConfig {
			export class Companion {
				public static class: java.lang.Class<com.appcues.AppcuesConfig.Companion>;
			}
		}
	}
}

declare module com {
	export module appcues {
		export class AppcuesCoroutineScope {
			public static class: java.lang.Class<com.appcues.AppcuesCoroutineScope>;
			public constructor(param0: com.appcues.logging.Logcues);
			public getCoroutineContext(): any;
		}
	}
}

declare module com {
	export module appcues {
		export class AppcuesInterceptor {
			public static class: java.lang.Class<com.appcues.AppcuesInterceptor>;
			/**
			 * Constructs a new instance of the com.appcues.AppcuesInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				canDisplayExperience(param0: java.util.UUID, param1: any): any;
			});
			public constructor();
			public canDisplayExperience(param0: java.util.UUID, param1: any): any;
		}
	}
}

declare module com {
	export module appcues {
		export class AppcuesKoin extends com.appcues.di.KoinScopePlugin {
			public static class: java.lang.Class<com.appcues.AppcuesKoin>;
			public static INSTANCE: com.appcues.AppcuesKoin;
			public install(param0: org.koin.dsl.ScopeDSL): void;
		}
	}
}

declare module com {
	export module appcues {
		export class BuildConfig {
			public static class: java.lang.Class<com.appcues.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static BUILD_TYPE: string;
			public static SDK_VERSION: string;
			public constructor();
		}
	}
}

declare module com {
	export module appcues {
		export class DeepLinkHandler {
			public static class: java.lang.Class<com.appcues.DeepLinkHandler>;
			public constructor(param0: com.appcues.AppcuesConfig, param1: com.appcues.ui.ExperienceRenderer, param2: com.appcues.AppcuesCoroutineScope, param3: com.appcues.debugger.AppcuesDebuggerManager);
			public handle(param0: globalAndroid.app.Activity, param1: globalAndroid.content.Intent): boolean;
		}
	}
}

declare module com {
	export module appcues {
		export class ExperienceListener {
			public static class: java.lang.Class<com.appcues.ExperienceListener>;
			/**
			 * Constructs a new instance of the com.appcues.ExperienceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				experienceStarted(param0: java.util.UUID): void;
				experienceFinished(param0: java.util.UUID): void;
			});
			public constructor();
			public experienceStarted(param0: java.util.UUID): void;
			public experienceFinished(param0: java.util.UUID): void;
		}
	}
}

declare module com {
	export module appcues {
		export class LoggingLevel {
			public static class: java.lang.Class<com.appcues.LoggingLevel>;
			public static NONE: com.appcues.LoggingLevel;
			public static INFO: com.appcues.LoggingLevel;
			public static DEBUG: com.appcues.LoggingLevel;
			public static values(): androidNative.Array<com.appcues.LoggingLevel>;
			public static valueOf(param0: string): com.appcues.LoggingLevel;
		}
	}
}

declare module com {
	export module appcues {
		export class SessionMonitor {
			public static class: java.lang.Class<com.appcues.SessionMonitor>;
			public getKoin(): org.koin.core.Koin;
			public onStop(param0: androidx.lifecycle.LifecycleOwner): void;
			public closeScope(): void;
			public getScope(): org.koin.core.scope.Scope;
			public reset(): void;
			public getSessionId(): java.util.UUID;
			public checkSession(param0: string): boolean;
			public onStart(param0: androidx.lifecycle.LifecycleOwner): void;
			public constructor(param0: org.koin.core.scope.Scope);
			public start(): void;
			public isActive(): boolean;
		}
	}
}

declare module com {
	export module appcues {
		export class Storage {
			public static class: java.lang.Class<com.appcues.Storage>;
			public setUserId(param0: string): void;
			public getDeviceId(): string;
			public setGroupId(param0: string): void;
			public setDeviceId(param0: string): void;
			public setLastContentShownAt(param0: java.util.Date): void;
			public getGroupId(): string;
			public getLastContentShownAt(): java.util.Date;
			public setAnonymous(param0: boolean): void;
			public getUserId(): string;
			public isAnonymous(): boolean;
			public constructor(param0: globalAndroid.content.Context, param1: com.appcues.AppcuesConfig);
		}
		export module Storage {
			export class Constants {
				public static class: java.lang.Class<com.appcues.Storage.Constants>;
				public static DeviceId: com.appcues.Storage.Constants;
				public static UserId: com.appcues.Storage.Constants;
				public static GroupId: com.appcues.Storage.Constants;
				public static IsAnonymous: com.appcues.Storage.Constants;
				public static LastContentShownAt: com.appcues.Storage.Constants;
				public static values(): androidNative.Array<com.appcues.Storage.Constants>;
				public getRawVal(): string;
				public static valueOf(param0: string): com.appcues.Storage.Constants;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export class ActionKoin extends com.appcues.di.KoinScopePlugin {
				public static class: java.lang.Class<com.appcues.action.ActionKoin>;
				public static INSTANCE: com.appcues.action.ActionKoin;
				public install(param0: org.koin.dsl.ScopeDSL): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export class ActionProcessor {
				public static class: java.lang.Class<com.appcues.action.ActionProcessor>;
				public process(param0: java.util.List<any>, param1: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType, param2: string): void;
				public process(param0: java.util.List<any>): void;
				public constructor(param0: org.koin.core.scope.Scope);
				public getScope(): org.koin.core.scope.Scope;
				public getKoin(): org.koin.core.Koin;
				public closeScope(): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export class ActionRegistry {
				public static class: java.lang.Class<com.appcues.action.ActionRegistry>;
				public get(param0: string): any;
				public constructor(param0: org.koin.core.scope.Scope);
				public getScope(): org.koin.core.scope.Scope;
				public getKoin(): org.koin.core.Koin;
				public register(param0: string, param1: any): void;
				public closeScope(): void;
			}
			export module ActionRegistry {
				export class AppcuesDuplicateActionException {
					public static class: java.lang.Class<com.appcues.action.ActionRegistry.AppcuesDuplicateActionException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export class ExperienceAction {
				public static class: java.lang.Class<com.appcues.action.ExperienceAction>;
				/**
				 * Constructs a new instance of the com.appcues.action.ExperienceAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getConfig(): java.util.Map<string,any>;
					execute(param0: com.appcues.Appcues, param1: any): any;
				});
				public constructor();
				public execute(param0: com.appcues.Appcues, param1: any): any;
				public getConfig(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export class ExperienceActionQueueTransforming extends com.appcues.action.ExperienceAction {
				public static class: java.lang.Class<com.appcues.action.ExperienceActionQueueTransforming>;
				/**
				 * Constructs a new instance of the com.appcues.action.ExperienceActionQueueTransforming interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					transformQueue(param0: java.util.List<any>, param1: number, param2: com.appcues.Appcues): java.util.List<com.appcues.action.ExperienceAction>;
					getConfig(): java.util.Map<string,any>;
					execute(param0: com.appcues.Appcues, param1: any): any;
				});
				public constructor();
				public execute(param0: com.appcues.Appcues, param1: any): any;
				public transformQueue(param0: java.util.List<any>, param1: number, param2: com.appcues.Appcues): java.util.List<com.appcues.action.ExperienceAction>;
				public getConfig(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export class MetadataSettingsAction {
				public static class: java.lang.Class<com.appcues.action.MetadataSettingsAction>;
				/**
				 * Constructs a new instance of the com.appcues.action.MetadataSettingsAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCategory(): string;
					getDestination(): string;
				});
				public constructor();
				public getCategory(): string;
				public getDestination(): string;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export module appcues {
				export class CloseAction implements com.appcues.action.ExperienceAction, com.appcues.action.MetadataSettingsAction {
					public static class: java.lang.Class<com.appcues.action.appcues.CloseAction>;
					public static TYPE: string;
					public execute(param0: com.appcues.Appcues, param1: any): any;
					public getConfig(): java.util.Map<string,any>;
					public getDestination(): string;
					public getCategory(): string;
					public constructor(param0: java.util.Map<string,any>, param1: com.appcues.ui.ExperienceRenderer);
				}
				export module CloseAction {
					export class Companion {
						public static class: java.lang.Class<com.appcues.action.appcues.CloseAction.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export module appcues {
				export class ContinueAction implements com.appcues.action.ExperienceAction, com.appcues.action.MetadataSettingsAction {
					public static class: java.lang.Class<com.appcues.action.appcues.ContinueAction>;
					public static TYPE: string;
					public execute(param0: com.appcues.Appcues, param1: any): any;
					public constructor(param0: java.util.Map<string,any>, param1: com.appcues.statemachine.StateMachine);
					public getConfig(): java.util.Map<string,any>;
					public getDestination(): string;
					public getCategory(): string;
				}
				export module ContinueAction {
					export class Companion {
						public static class: java.lang.Class<com.appcues.action.appcues.ContinueAction.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export module appcues {
				export class LaunchExperienceAction implements com.appcues.action.ExperienceAction, com.appcues.action.MetadataSettingsAction {
					public static class: java.lang.Class<com.appcues.action.appcues.LaunchExperienceAction>;
					public static TYPE: string;
					public execute(param0: com.appcues.Appcues, param1: any): any;
					public getConfig(): java.util.Map<string,any>;
					public constructor(param0: string);
					public getDestination(): string;
					public getCategory(): string;
					public constructor(param0: java.util.Map<string,any>);
				}
				export module LaunchExperienceAction {
					export class Companion {
						public static class: java.lang.Class<com.appcues.action.appcues.LaunchExperienceAction.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export module appcues {
				export class LinkAction implements com.appcues.action.ExperienceAction, com.appcues.action.MetadataSettingsAction {
					public static class: java.lang.Class<com.appcues.action.appcues.LinkAction>;
					public static TYPE: string;
					public constructor(param0: java.util.Map<string,any>, param1: com.appcues.util.LinkOpener);
					public execute(param0: com.appcues.Appcues, param1: any): any;
					public getConfig(): java.util.Map<string,any>;
					public getDestination(): string;
					public constructor(param0: string, param1: com.appcues.util.LinkOpener);
					public getCategory(): string;
				}
				export module LinkAction {
					export class Companion {
						public static class: java.lang.Class<com.appcues.action.appcues.LinkAction.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export module appcues {
				export class StepInteractionAction extends com.appcues.action.ExperienceAction {
					public static class: java.lang.Class<com.appcues.action.appcues.StepInteractionAction>;
					public static TYPE: string;
					public constructor(param0: java.util.Map<string,any>, param1: com.appcues.action.appcues.StepInteractionAction.StepInteractionData, param2: com.appcues.analytics.AnalyticsTracker, param3: com.appcues.statemachine.StateMachine);
					public execute(param0: com.appcues.Appcues, param1: any): any;
					public getConfig(): java.util.Map<string,any>;
					public getInteraction(): com.appcues.action.appcues.StepInteractionAction.StepInteractionData;
				}
				export module StepInteractionAction {
					export class Companion {
						public static class: java.lang.Class<com.appcues.action.appcues.StepInteractionAction.Companion>;
					}
					export class StepInteractionData {
						public static class: java.lang.Class<com.appcues.action.appcues.StepInteractionAction.StepInteractionData>;
						public static $stable: number;
						public getProperties(): java.util.HashMap<string,any>;
						public constructor(param0: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType, param1: string, param2: string, param3: string);
						public getInteractionType(): com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export module appcues {
				export class SubmitFormAction extends com.appcues.action.ExperienceActionQueueTransforming {
					public static class: java.lang.Class<com.appcues.action.appcues.SubmitFormAction>;
					public static TYPE: string;
					public execute(param0: com.appcues.Appcues, param1: any): any;
					public getConfig(): java.util.Map<string,any>;
					public constructor(param0: java.util.Map<string,any>, param1: com.appcues.statemachine.StateMachine, param2: com.appcues.analytics.AnalyticsTracker);
					public transformQueue(param0: java.util.List<any>, param1: number, param2: com.appcues.Appcues): java.util.List<com.appcues.action.ExperienceAction>;
				}
				export module SubmitFormAction {
					export class Companion {
						public static class: java.lang.Class<com.appcues.action.appcues.SubmitFormAction.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export module appcues {
				export class TrackEventAction extends com.appcues.action.ExperienceAction {
					public static class: java.lang.Class<com.appcues.action.appcues.TrackEventAction>;
					public static TYPE: string;
					public execute(param0: com.appcues.Appcues, param1: any): any;
					public getConfig(): java.util.Map<string,any>;
					public constructor(param0: java.util.Map<string,any>);
				}
				export module TrackEventAction {
					export class Companion {
						public static class: java.lang.Class<com.appcues.action.appcues.TrackEventAction.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module action {
			export module appcues {
				export class UpdateProfileAction extends com.appcues.action.ExperienceAction {
					public static class: java.lang.Class<com.appcues.action.appcues.UpdateProfileAction>;
					public static TYPE: string;
					public constructor(param0: java.util.Map<string,any>, param1: com.appcues.Storage);
					public execute(param0: com.appcues.Appcues, param1: any): any;
					public getConfig(): java.util.Map<string,any>;
				}
				export module UpdateProfileAction {
					export class Companion {
						public static class: java.lang.Class<com.appcues.action.appcues.UpdateProfileAction.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class ActivityRequestBuilder {
				public static class: java.lang.Class<com.appcues.analytics.ActivityRequestBuilder>;
				public static SCREEN_TITLE_ATTRIBUTE: string;
				public static SCREEN_TITLE_CONTEXT: string;
				public constructor(param0: com.appcues.AppcuesConfig, param1: com.appcues.Storage, param2: com.appcues.analytics.AutoPropertyDecorator);
				public screen(param0: string, param1: java.util.Map<string,any>): com.appcues.data.remote.request.ActivityRequest;
				public identify(param0: java.util.Map<string,any>): com.appcues.data.remote.request.ActivityRequest;
				public group(param0: java.util.Map<string,any>): com.appcues.data.remote.request.ActivityRequest;
				public track(param0: string, param1: java.util.Map<string,any>): com.appcues.data.remote.request.ActivityRequest;
			}
			export module ActivityRequestBuilder {
				export class Companion {
					public static class: java.lang.Class<com.appcues.analytics.ActivityRequestBuilder.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class ActivityScreenTracking {
				public static class: java.lang.Class<com.appcues.analytics.ActivityScreenTracking>;
				public stop(): void;
				public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.appcues.analytics.AnalyticsTracker, param2: com.appcues.logging.Logcues);
				public onActivityResumed(param0: globalAndroid.app.Activity): void;
				public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				public onActivityStarted(param0: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityStopped(param0: globalAndroid.app.Activity): void;
				public trackScreens(): void;
				public onActivityPaused(param0: globalAndroid.app.Activity): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class AnalyticsEvent {
				public static class: java.lang.Class<com.appcues.analytics.AnalyticsEvent>;
				public static ScreenView: com.appcues.analytics.AnalyticsEvent;
				public static SessionStarted: com.appcues.analytics.AnalyticsEvent;
				public static SessionSuspended: com.appcues.analytics.AnalyticsEvent;
				public static SessionResumed: com.appcues.analytics.AnalyticsEvent;
				public static SessionReset: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceStepSeen: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceStepInteraction: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceStepCompleted: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceStepError: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceStepRecovered: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceStarted: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceCompleted: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceDismissed: com.appcues.analytics.AnalyticsEvent;
				public static ExperienceError: com.appcues.analytics.AnalyticsEvent;
				public static ExperimentEntered: com.appcues.analytics.AnalyticsEvent;
				public static values(): androidNative.Array<com.appcues.analytics.AnalyticsEvent>;
				public static valueOf(param0: string): com.appcues.analytics.AnalyticsEvent;
				public getEventName(): string;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class AnalyticsKoin extends com.appcues.di.KoinScopePlugin {
				public static class: java.lang.Class<com.appcues.analytics.AnalyticsKoin>;
				public static INSTANCE: com.appcues.analytics.AnalyticsKoin;
				public install(param0: org.koin.dsl.ScopeDSL): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class AnalyticsPolicy {
				public static class: java.lang.Class<com.appcues.analytics.AnalyticsPolicy>;
				public canTrackEvent(): boolean;
				public canTrackGroup(): boolean;
				public constructor(param0: com.appcues.SessionMonitor, param1: com.appcues.AppcuesCoroutineScope, param2: com.appcues.statemachine.StateMachine, param3: com.appcues.logging.Logcues);
				public canIdentify(): boolean;
				public canTrackScreen(param0: string): boolean;
				public onPause(param0: androidx.lifecycle.LifecycleOwner): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class AnalyticsQueueProcessor {
				public static class: java.lang.Class<com.appcues.analytics.AnalyticsQueueProcessor>;
				public queueForTesting(param0: com.appcues.data.remote.request.ActivityRequest): void;
				public flushThenSend(param0: com.appcues.data.remote.request.ActivityRequest): void;
				public constructor(param0: com.appcues.AppcuesCoroutineScope, param1: com.appcues.data.AppcuesRepository, param2: com.appcues.ui.ExperienceRenderer, param3: com.appcues.analytics.AnalyticsQueueProcessor.QueueScheduler);
				public queue(param0: com.appcues.data.remote.request.ActivityRequest): void;
				public queueThenFlush(param0: com.appcues.data.remote.request.ActivityRequest): void;
				public flushAsync(): void;
			}
			export module AnalyticsQueueProcessor {
				export class AnalyticsQueueScheduler extends com.appcues.analytics.AnalyticsQueueProcessor.QueueScheduler {
					public static class: java.lang.Class<com.appcues.analytics.AnalyticsQueueProcessor.AnalyticsQueueScheduler>;
					public static $stable: number;
					public schedule(param0: any): void;
					public constructor();
					public cancel(): void;
				}
				export class QueueScheduler {
					public static class: java.lang.Class<com.appcues.analytics.AnalyticsQueueProcessor.QueueScheduler>;
					/**
					 * Constructs a new instance of the com.appcues.analytics.AnalyticsQueueProcessor$QueueScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						schedule(param0: any): void;
						cancel(): void;
					});
					public constructor();
					public schedule(param0: any): void;
					public cancel(): void;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class AnalyticsTracker {
				public static class: java.lang.Class<com.appcues.analytics.AnalyticsTracker>;
				public group(param0: java.util.Map<string,any>): void;
				public constructor(param0: com.appcues.AppcuesCoroutineScope, param1: com.appcues.analytics.ActivityRequestBuilder, param2: com.appcues.analytics.ExperienceLifecycleTracker, param3: com.appcues.analytics.AnalyticsPolicy, param4: com.appcues.analytics.AnalyticsQueueProcessor);
				public identify(param0: java.util.Map<string,any>, param1: boolean): void;
				public track(param0: string, param1: java.util.Map<string,any>, param2: boolean, param3: boolean): void;
				public track(param0: com.appcues.analytics.AnalyticsEvent, param1: java.util.Map<string,any>, param2: boolean): void;
				public getAnalyticsFlow(): kotlinx.coroutines.flow.SharedFlow<com.appcues.analytics.TrackingData>;
				public flushPendingActivity(): void;
				public screen(param0: string, param1: java.util.Map<string,any>, param2: boolean): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class AutoPropertyDecorator {
				public static class: java.lang.Class<com.appcues.analytics.AutoPropertyDecorator>;
				public static IDENTITY_PROPERTY: string;
				public static UPDATED_AT_PROPERTY: string;
				public getAutoProperties(): java.util.Map<string,any>;
				public decorateIdentify(param0: com.appcues.data.remote.request.ActivityRequest): com.appcues.data.remote.request.ActivityRequest;
				public constructor(param0: com.appcues.AppcuesConfig, param1: com.appcues.AppcuesCoroutineScope, param2: com.appcues.util.ContextResources, param3: com.appcues.Storage, param4: com.appcues.SessionMonitor, param5: com.appcues.analytics.SessionRandomizer);
				public decorateTrack(param0: com.appcues.data.remote.request.EventRequest): com.appcues.data.remote.request.EventRequest;
			}
			export module AutoPropertyDecorator {
				export class Companion {
					public static class: java.lang.Class<com.appcues.analytics.AutoPropertyDecorator.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export abstract class ExperienceLifecycleEvent {
				public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent>;
				public static INTERACTION_TYPE_KEY: string;
				public static INTERACTION_DATA_KEY: string;
				public static FORM_SUBMITTED_INTERACTION_TYPE: string;
				public static BUTTON_TAPPED_INTERACTION_TYPE: string;
				public static BUTTON_LONG_PRESSED_INTERACTION_TYPE: string;
				public getExperience(): com.appcues.data.model.Experience;
				public getProperties(): java.util.Map<string,any>;
				public getName(): string;
				public getEvent(): com.appcues.analytics.AnalyticsEvent;
			}
			export module ExperienceLifecycleEvent {
				export class Companion {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.Companion>;
				}
				export class ExperienceCompleted extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.ExperienceCompleted>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public copy(param0: com.appcues.data.model.Experience): com.appcues.analytics.ExperienceLifecycleEvent.ExperienceCompleted;
					public toString(): string;
					public constructor(param0: com.appcues.data.model.Experience);
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public hashCode(): number;
				}
				export class ExperienceDismissed extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.ExperienceDismissed>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public constructor(param0: com.appcues.data.model.Experience, param1: number);
					public component2(): number;
					public copy(param0: com.appcues.data.model.Experience, param1: number): com.appcues.analytics.ExperienceLifecycleEvent.ExperienceDismissed;
					public getStepIndex(): number;
					public hashCode(): number;
				}
				export class ExperienceError extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.ExperienceError>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public component1(): com.appcues.statemachine.Error.ExperienceError;
					public toString(): string;
					public component2(): com.appcues.data.model.Experience;
					public constructor(param0: com.appcues.statemachine.Error.ExperienceError, param1: com.appcues.data.model.Experience);
					public copy(param0: com.appcues.statemachine.Error.ExperienceError, param1: com.appcues.data.model.Experience): com.appcues.analytics.ExperienceLifecycleEvent.ExperienceError;
					public getExperience(): com.appcues.data.model.Experience;
					public hashCode(): number;
					public getExperienceError(): com.appcues.statemachine.Error.ExperienceError;
				}
				export class ExperienceStarted extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.ExperienceStarted>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: com.appcues.data.model.Experience);
					public component1(): com.appcues.data.model.Experience;
					public copy(param0: com.appcues.data.model.Experience): com.appcues.analytics.ExperienceLifecycleEvent.ExperienceStarted;
					public getExperience(): com.appcues.data.model.Experience;
					public hashCode(): number;
				}
				export class StepCompleted extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.StepCompleted>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public constructor(param0: com.appcues.data.model.Experience, param1: number);
					public component2(): number;
					public getStepIndex(): number;
					public hashCode(): number;
					public copy(param0: com.appcues.data.model.Experience, param1: number): com.appcues.analytics.ExperienceLifecycleEvent.StepCompleted;
				}
				export class StepError extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.StepError>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public constructor(param0: com.appcues.statemachine.Error.StepError, param1: com.appcues.data.model.Experience);
					public toString(): string;
					public component2(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public component1(): com.appcues.statemachine.Error.StepError;
					public getStepError(): com.appcues.statemachine.Error.StepError;
					public copy(param0: com.appcues.statemachine.Error.StepError, param1: com.appcues.data.model.Experience): com.appcues.analytics.ExperienceLifecycleEvent.StepError;
					public hashCode(): number;
				}
				export class StepInteraction extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction>;
					public static $stable: number;
					public component4(): java.util.HashMap<string,any>;
					public getInteractionType(): com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType;
					public constructor(param0: com.appcues.data.model.Experience, param1: number, param2: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType, param3: java.util.HashMap<string,any>);
					public copy(param0: com.appcues.data.model.Experience, param1: number, param2: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType, param3: java.util.HashMap<string,any>): com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public component2(): number;
					public getInteractionProperties(): java.util.HashMap<string,any>;
					public getStepIndex(): number;
					public hashCode(): number;
					public component3(): com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType;
				}
				export module StepInteraction {
					export class InteractionType {
						public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType>;
						public static FORM_SUBMITTED: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType;
						public static BUTTON_TAPPED: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType;
						public static BUTTON_LONG_PRESSED: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType;
						public static values(): androidNative.Array<com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType>;
						public static valueOf(param0: string): com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType;
					}
				}
				export class StepRecovered extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.StepRecovered>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public constructor(param0: com.appcues.data.model.Experience, param1: number);
					public copy(param0: com.appcues.data.model.Experience, param1: number): com.appcues.analytics.ExperienceLifecycleEvent.StepRecovered;
					public component2(): number;
					public getStepIndex(): number;
					public hashCode(): number;
				}
				export class StepSeen extends com.appcues.analytics.ExperienceLifecycleEvent {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.StepSeen>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public copy(param0: com.appcues.data.model.Experience, param1: number): com.appcues.analytics.ExperienceLifecycleEvent.StepSeen;
					public constructor(param0: com.appcues.data.model.Experience, param1: number);
					public component2(): number;
					public getStepIndex(): number;
					public hashCode(): number;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleEvent.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class ExperienceLifecycleTracker {
				public static class: java.lang.Class<com.appcues.analytics.ExperienceLifecycleTracker>;
				public constructor(param0: org.koin.core.scope.Scope);
				public start(param0: kotlinx.coroutines.CoroutineDispatcher, param1: any): any;
				public getScope(): org.koin.core.scope.Scope;
				public getKoin(): org.koin.core.Koin;
				public closeScope(): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class SdkMetrics {
				public static class: java.lang.Class<com.appcues.analytics.SdkMetrics>;
				public static METRICS_PROPERTY: string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: java.util.Date, param1: java.util.Date, param2: java.util.Date, param3: java.util.Date);
				public toString(): string;
				public copy(param0: java.util.Date, param1: java.util.Date, param2: java.util.Date, param3: java.util.Date): com.appcues.analytics.SdkMetrics;
				public constructor();
			}
			export module SdkMetrics {
				export class Companion {
					public static class: java.lang.Class<com.appcues.analytics.SdkMetrics.Companion>;
					public trackRender(param0: java.util.UUID): java.util.Map<string,any>;
					public tracked(param0: java.util.UUID, param1: java.util.Date): void;
					public requested(param0: string, param1: java.util.Date): void;
					public renderStart(param0: java.util.UUID, param1: java.util.Date): void;
					public clear(): void;
					public responded(param0: string, param1: java.util.Date): void;
					public remove(param0: java.util.UUID): void;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class SessionRandomizer {
				public static class: java.lang.Class<com.appcues.analytics.SessionRandomizer>;
				public get(): number;
				public constructor();
			}
			export module SessionRandomizer {
				export class Companion {
					public static class: java.lang.Class<com.appcues.analytics.SessionRandomizer.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module analytics {
			export class TrackingData {
				public static class: java.lang.Class<com.appcues.analytics.TrackingData>;
				public getType(): com.appcues.AnalyticType;
				public copy(param0: com.appcues.AnalyticType, param1: boolean, param2: com.appcues.data.remote.request.ActivityRequest): com.appcues.analytics.TrackingData;
				public component2(): boolean;
				public component3(): com.appcues.data.remote.request.ActivityRequest;
				public getRequest(): com.appcues.data.remote.request.ActivityRequest;
				public hashCode(): number;
				public constructor(param0: com.appcues.AnalyticType, param1: boolean, param2: com.appcues.data.remote.request.ActivityRequest);
				public equals(param0: any): boolean;
				public component1(): com.appcues.AnalyticType;
				public toString(): string;
				public isInternal(): boolean;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export class AppcuesRepository {
				public static class: java.lang.Class<com.appcues.data.AppcuesRepository>;
				public trackActivity(param0: com.appcues.data.remote.request.ActivityRequest, param1: any): any;
				public getExperiencePreview(param0: string, param1: any): any;
				public getExperienceContent(param0: string, param1: any): any;
				public constructor(param0: com.appcues.data.remote.AppcuesRemoteSource, param1: com.appcues.data.local.AppcuesLocalSource, param2: com.appcues.data.mapper.experience.ExperienceMapper, param3: com.appcues.AppcuesConfig, param4: com.appcues.logging.Logcues);
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export class MoshiConfiguration {
				public static class: java.lang.Class<com.appcues.data.MoshiConfiguration>;
				public static INSTANCE: com.appcues.data.MoshiConfiguration;
				public getMoshi(): com.squareup.moshi.Moshi;
			}
			export module MoshiConfiguration {
				export class SerializeNull {
					public static class: java.lang.Class<com.appcues.data.MoshiConfiguration.SerializeNull>;
					/**
					 * Constructs a new instance of the com.appcues.data.MoshiConfiguration$SerializeNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						<clinit>(): void;
					});
					public constructor();
				}
				export module SerializeNull {
					export class Companion {
						public static class: java.lang.Class<com.appcues.data.MoshiConfiguration.SerializeNull.Companion>;
						public getJSON_ADAPTER_FACTORY(): com.squareup.moshi.JsonAdapter.Factory;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export class AppcuesLocalSource {
					public static class: java.lang.Class<com.appcues.data.local.AppcuesLocalSource>;
					/**
					 * Constructs a new instance of the com.appcues.data.local.AppcuesLocalSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						saveActivity(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
						removeActivity(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
						getAllActivity(param0: any): any;
					});
					public constructor();
					public saveActivity(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
					public removeActivity(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
					public getAllActivity(param0: any): any;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export class DataLocalKoin extends com.appcues.di.KoinScopePlugin {
					public static class: java.lang.Class<com.appcues.data.local.DataLocalKoin>;
					public static INSTANCE: com.appcues.data.local.DataLocalKoin;
					public install(param0: org.koin.dsl.ScopeDSL): void;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export module model {
					export class ActivityStorage {
						public static class: java.lang.Class<com.appcues.data.local.model.ActivityStorage>;
						public constructor(param0: java.util.UUID, param1: string, param2: string, param3: string, param4: java.util.Date);
						public getUserId(): string;
						public getAccountId(): string;
						public component3(): string;
						public component5(): java.util.Date;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getData(): string;
						public getRequestId(): java.util.UUID;
						public toString(): string;
						public component4(): string;
						public component2(): string;
						public getCreated(): java.util.Date;
						public component1(): java.util.UUID;
						public copy(param0: java.util.UUID, param1: string, param2: string, param3: string, param4: java.util.Date): com.appcues.data.local.model.ActivityStorage;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export module room {
					export class ActivityStorageDao {
						public static class: java.lang.Class<com.appcues.data.local.room.ActivityStorageDao>;
						/**
						 * Constructs a new instance of the com.appcues.data.local.room.ActivityStorageDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAll(param0: any): any;
							insertAll(param0: androidNative.Array<com.appcues.data.local.model.ActivityStorage>, param1: any): any;
							delete(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
						});
						public constructor();
						public delete(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
						public insertAll(param0: androidNative.Array<com.appcues.data.local.model.ActivityStorage>, param1: any): any;
						public getAll(param0: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export module room {
					export class ActivityStorageDao_Impl extends com.appcues.data.local.room.ActivityStorageDao {
						public static class: java.lang.Class<com.appcues.data.local.room.ActivityStorageDao_Impl>;
						public delete(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
						public constructor(param0: androidx.room.RoomDatabase);
						public insertAll(param0: androidNative.Array<com.appcues.data.local.model.ActivityStorage>, param1: any): any;
						public getAll(param0: any): any;
						public static getRequiredConverters(): java.util.List<java.lang.Class<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export module room {
					export abstract class AppcuesDatabase {
						public static class: java.lang.Class<com.appcues.data.local.room.AppcuesDatabase>;
						public activityStorageDao(): com.appcues.data.local.room.ActivityStorageDao;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export module room {
					export class AppcuesDatabase_Impl extends com.appcues.data.local.room.AppcuesDatabase {
						public static class: java.lang.Class<com.appcues.data.local.room.AppcuesDatabase_Impl>;
						public createOpenHelper(param0: androidx.room.DatabaseConfiguration): androidx.sqlite.db.SupportSQLiteOpenHelper;
						public activityStorageDao(): com.appcues.data.local.room.ActivityStorageDao;
						public constructor();
						public createInvalidationTracker(): androidx.room.InvalidationTracker;
						public clearAllTables(): void;
						public getAutoMigrations(param0: java.util.Map<java.lang.Class<any>,androidx.room.migration.AutoMigrationSpec>): java.util.List<androidx.room.migration.Migration>;
						public getRequiredTypeConverters(): java.util.Map<java.lang.Class<any>,java.util.List<java.lang.Class<any>>>;
						public getRequiredAutoMigrationSpecs(): java.util.Set<java.lang.Class<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export module room {
					export class DateConverter {
						public static class: java.lang.Class<com.appcues.data.local.room.DateConverter>;
						public static INSTANCE: com.appcues.data.local.room.DateConverter;
						public toTimestamp(param0: java.util.Date): java.lang.Long;
						public toDate(param0: java.lang.Long): java.util.Date;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export module room {
					export class RoomAppcuesLocalSource extends com.appcues.data.local.AppcuesLocalSource {
						public static class: java.lang.Class<com.appcues.data.local.room.RoomAppcuesLocalSource>;
						public getAllActivity(param0: any): any;
						public saveActivity(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
						public removeActivity(param0: com.appcues.data.local.model.ActivityStorage, param1: any): any;
						public constructor(param0: com.appcues.data.local.room.AppcuesDatabase);
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module local {
				export module room {
					export class RoomWrapper {
						public static class: java.lang.Class<com.appcues.data.local.room.RoomWrapper>;
						public constructor(param0: globalAndroid.content.Context, param1: com.appcues.AppcuesConfig);
						public create(): com.appcues.data.local.room.AppcuesDatabase;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module mapper {
				export class AppcuesMappingException {
					public static class: java.lang.Class<com.appcues.data.mapper.AppcuesMappingException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module mapper {
				export class DataMapperKoin extends com.appcues.di.KoinScopePlugin {
					public static class: java.lang.Class<com.appcues.data.mapper.DataMapperKoin>;
					public static INSTANCE: com.appcues.data.mapper.DataMapperKoin;
					public install(param0: org.koin.dsl.ScopeDSL): void;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module mapper {
				export module action {
					export class ActionsMapper {
						public static class: java.lang.Class<com.appcues.data.mapper.action.ActionsMapper>;
						public map(param0: java.util.Map<java.util.UUID,any>): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.model.Action>>;
						public constructor(param0: com.appcues.action.ActionRegistry);
						public map(param0: java.util.Map<java.util.UUID,any>, param1: java.util.UUID): java.util.List<com.appcues.data.model.Action>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module mapper {
				export module experience {
					export class ExperienceMapper {
						public static class: java.lang.Class<com.appcues.data.mapper.experience.ExperienceMapper>;
						public map(param0: com.appcues.data.remote.response.experience.ExperienceResponse, param1: com.appcues.data.model.ExperiencePriority, param2: java.util.List<com.appcues.data.remote.response.ExperimentResponse>, param3: java.util.UUID): com.appcues.data.model.Experience;
						public constructor(param0: com.appcues.data.mapper.step.StepMapper, param1: com.appcues.data.mapper.trait.TraitsMapper, param2: org.koin.core.scope.Scope, param3: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module mapper {
				export module step {
					export class StepMapper {
						public static class: java.lang.Class<com.appcues.data.mapper.step.StepMapper>;
						public constructor(param0: com.appcues.data.mapper.trait.TraitsMapper, param1: com.appcues.data.mapper.action.ActionsMapper);
						public map(param0: com.appcues.data.remote.response.step.StepResponse, param1: java.util.List<any>, param2: java.util.Map<java.util.UUID,any>): com.appcues.data.model.Step;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module mapper {
				export module trait {
					export class TraitsMapper {
						public static class: java.lang.Class<com.appcues.data.mapper.trait.TraitsMapper>;
						public constructor(param0: com.appcues.trait.TraitRegistry);
						public map(param0: java.util.List<any>): java.util.List<com.appcues.trait.ExperienceTrait>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export class Action {
					public static class: java.lang.Class<com.appcues.data.model.Action>;
					public equals(param0: any): boolean;
					public component2(): com.appcues.action.ExperienceAction;
					public toString(): string;
					public component1(): com.appcues.data.model.Action.Motion;
					public getExperienceAction(): com.appcues.action.ExperienceAction;
					public copy(param0: com.appcues.data.model.Action.Motion, param1: com.appcues.action.ExperienceAction): com.appcues.data.model.Action;
					public hashCode(): number;
					public constructor(param0: com.appcues.data.model.Action.Motion, param1: com.appcues.action.ExperienceAction);
					public getOn(): com.appcues.data.model.Action.Motion;
				}
				export module Action {
					export class Motion {
						public static class: java.lang.Class<com.appcues.data.model.Action.Motion>;
						public static TAP: com.appcues.data.model.Action.Motion;
						public static LONG_PRESS: com.appcues.data.model.Action.Motion;
						public static values(): androidNative.Array<com.appcues.data.model.Action.Motion>;
						public static valueOf(param0: string): com.appcues.data.model.Action.Motion;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export class Experience {
					public static class: java.lang.Class<com.appcues.data.model.Experience>;
					public component2(): string;
					public getGroupLookup(): java.util.Map<java.lang.Integer,java.lang.Integer>;
					public getPriority(): com.appcues.data.model.ExperiencePriority;
					public component9(): java.util.List<com.appcues.action.ExperienceAction>;
					public getStepContainers(): java.util.List<com.appcues.data.model.StepContainer>;
					public component8(): com.appcues.data.model.Experiment;
					public component5(): com.appcues.data.model.ExperiencePriority;
					public component1(): java.util.UUID;
					public toString(): string;
					public getType(): string;
					public hashCode(): number;
					public getPublishedAt(): java.lang.Long;
					public getExperiment(): com.appcues.data.model.Experiment;
					public getRequestId(): java.util.UUID;
					public component10(): java.util.UUID;
					public component7(): java.lang.Long;
					public component3(): java.util.List<com.appcues.data.model.StepContainer>;
					public constructor(param0: java.util.UUID, param1: string, param2: java.util.List<com.appcues.data.model.StepContainer>, param3: boolean, param4: com.appcues.data.model.ExperiencePriority, param5: string, param6: java.lang.Long, param7: com.appcues.data.model.Experiment, param8: java.util.List<any>, param9: java.util.UUID);
					public getFlatSteps(): java.util.List<com.appcues.data.model.Step>;
					public getStepIndexLookup(): java.util.Map<java.lang.Integer,java.lang.Integer>;
					public copy(param0: java.util.UUID, param1: string, param2: java.util.List<com.appcues.data.model.StepContainer>, param3: boolean, param4: com.appcues.data.model.ExperiencePriority, param5: string, param6: java.lang.Long, param7: com.appcues.data.model.Experiment, param8: java.util.List<any>, param9: java.util.UUID): com.appcues.data.model.Experience;
					public equals(param0: any): boolean;
					public getName(): string;
					public getPublished(): boolean;
					public component4(): boolean;
					public getId(): java.util.UUID;
					public component6(): string;
					public getInstanceId(): java.util.UUID;
					public getCompletionActions(): java.util.List<com.appcues.action.ExperienceAction>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export abstract class ExperiencePrimitive {
					public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive>;
					public getStyle(): com.appcues.data.model.styling.ComponentStyle;
					public getTextDescription(): string;
					public getId(): java.util.UUID;
					public joinTextDescriptions(param0: java.util.List<any>): string;
				}
				export module ExperiencePrimitive {
					export class BoxPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.BoxPrimitive>;
						public static $stable: number;
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public getTextDescription(): string;
						public component3(): java.util.List<com.appcues.data.model.ExperiencePrimitive>;
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: java.util.List<any>): com.appcues.data.model.ExperiencePrimitive.BoxPrimitive;
						public getId(): java.util.UUID;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: java.util.List<any>);
						public component1(): java.util.UUID;
						public getItems(): java.util.List<com.appcues.data.model.ExperiencePrimitive>;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public toString(): string;
					}
					export class ButtonPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.ButtonPrimitive>;
						public static $stable: number;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: com.appcues.data.model.ExperiencePrimitive);
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public getTextDescription(): string;
						public getId(): java.util.UUID;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component3(): com.appcues.data.model.ExperiencePrimitive;
						public component1(): java.util.UUID;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: com.appcues.data.model.ExperiencePrimitive): com.appcues.data.model.ExperiencePrimitive.ButtonPrimitive;
						public toString(): string;
						public getContent(): com.appcues.data.model.ExperiencePrimitive;
					}
					export class EmbedHtmlPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.EmbedHtmlPrimitive>;
						public static $stable: number;
						public getEmbed(): string;
						public component3(): string;
						public getTextDescription(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public toString(): string;
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public component4(): com.appcues.data.model.styling.ComponentSize;
						public getIntrinsicSize(): com.appcues.data.model.styling.ComponentSize;
						public getId(): java.util.UUID;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: string, param3: com.appcues.data.model.styling.ComponentSize);
						public component1(): java.util.UUID;
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: string, param3: com.appcues.data.model.styling.ComponentSize): com.appcues.data.model.ExperiencePrimitive.EmbedHtmlPrimitive;
					}
					export class HorizontalStackPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.HorizontalStackPrimitive>;
						public static $stable: number;
						public getDistribution(): com.appcues.data.model.styling.ComponentDistribution;
						public getTextDescription(): string;
						public component3(): java.util.List<com.appcues.data.model.ExperiencePrimitive>;
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: java.util.List<any>, param3: number, param4: com.appcues.data.model.styling.ComponentDistribution): com.appcues.data.model.ExperiencePrimitive.HorizontalStackPrimitive;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: java.util.List<any>, param3: number, param4: com.appcues.data.model.styling.ComponentDistribution);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSpacing(): number;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public component4(): number;
						public toString(): string;
						public component5(): com.appcues.data.model.styling.ComponentDistribution;
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public getId(): java.util.UUID;
						public component1(): java.util.UUID;
						public getItems(): java.util.List<com.appcues.data.model.ExperiencePrimitive>;
					}
					export class ImagePrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.ImagePrimitive>;
						public static $stable: number;
						public getContentMode(): com.appcues.data.model.styling.ComponentContentMode;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: string, param3: string, param4: com.appcues.data.model.styling.ComponentSize, param5: com.appcues.data.model.styling.ComponentContentMode, param6: string);
						public component3(): string;
						public getTextDescription(): string;
						public component5(): com.appcues.data.model.styling.ComponentSize;
						public component7(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public getBlurHash(): string;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public toString(): string;
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public component4(): string;
						public getIntrinsicSize(): com.appcues.data.model.styling.ComponentSize;
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: string, param3: string, param4: com.appcues.data.model.styling.ComponentSize, param5: com.appcues.data.model.styling.ComponentContentMode, param6: string): com.appcues.data.model.ExperiencePrimitive.ImagePrimitive;
						public getId(): java.util.UUID;
						public getAccessibilityLabel(): string;
						public component1(): java.util.UUID;
						public component6(): com.appcues.data.model.styling.ComponentContentMode;
					}
					export class OptionSelectPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive>;
						public static $stable: number;
						public getTextDescription(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component11(): com.appcues.data.model.styling.ComponentDisplayFormat;
						public getSelectMode(): com.appcues.data.model.styling.ComponentSelectMode;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public component10(): com.appcues.data.model.styling.ComponentControlPosition;
						public component14(): com.appcues.data.model.styling.ComponentColor;
						public getLabel(): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public getPickerStyle(): com.appcues.data.model.styling.ComponentStyle;
						public component3(): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public component13(): com.appcues.data.model.ExperiencePrimitive;
						public component17(): string;
						public getId(): java.util.UUID;
						public component12(): com.appcues.data.model.styling.ComponentStyle;
						public getPlaceholder(): com.appcues.data.model.ExperiencePrimitive;
						public getErrorLabel(): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public getUnselectedColor(): com.appcues.data.model.styling.ComponentColor;
						public getAttributeName(): string;
						public component6(): java.util.List<com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive.OptionItem>;
						public getAccentColor(): com.appcues.data.model.styling.ComponentColor;
						public toString(): string;
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public component4(): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public component15(): com.appcues.data.model.styling.ComponentColor;
						public component5(): com.appcues.data.model.styling.ComponentSelectMode;
						public getOptions(): java.util.List<com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive.OptionItem>;
						public getControlPosition(): com.appcues.data.model.styling.ComponentControlPosition;
						public component16(): com.appcues.data.model.styling.ComponentColor;
						public getSelectedColor(): com.appcues.data.model.styling.ComponentColor;
						public component7(): java.util.Set<string>;
						public getDefaultValue(): java.util.Set<string>;
						public component1(): java.util.UUID;
						public getDisplayFormat(): com.appcues.data.model.styling.ComponentDisplayFormat;
					}
					export module OptionSelectPrimitive {
						export class OptionItem {
							public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive.OptionItem>;
							public static $stable: number;
							public hashCode(): number;
							public getContent(): com.appcues.data.model.ExperiencePrimitive;
							public constructor(param0: string, param1: com.appcues.data.model.ExperiencePrimitive, param2: com.appcues.data.model.ExperiencePrimitive);
							public getValue(): string;
							public getSelectedContent(): com.appcues.data.model.ExperiencePrimitive;
							public toString(): string;
							public component3(): com.appcues.data.model.ExperiencePrimitive;
							public component2(): com.appcues.data.model.ExperiencePrimitive;
							public equals(param0: any): boolean;
							public component1(): string;
							public copy(param0: string, param1: com.appcues.data.model.ExperiencePrimitive, param2: com.appcues.data.model.ExperiencePrimitive): com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive.OptionItem;
						}
					}
					export class SpacerPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.SpacerPrimitive>;
						public static $stable: number;
						public component2(): number;
						public getTextDescription(): string;
						public getId(): java.util.UUID;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.UUID, param1: number);
						public component1(): java.util.UUID;
						public getSpacing(): number;
						public copy(param0: java.util.UUID, param1: number): com.appcues.data.model.ExperiencePrimitive.SpacerPrimitive;
						public toString(): string;
					}
					export class TextInputPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.TextInputPrimitive>;
						public static $stable: number;
						public component5(): com.appcues.data.model.ExperiencePrimitive;
						public getTextDescription(): string;
						public getMaxLength(): java.lang.Integer;
						public getTextFieldStyle(): com.appcues.data.model.styling.ComponentStyle;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRequired(): boolean;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public getLabel(): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: com.appcues.data.model.ExperiencePrimitive.TextPrimitive, param3: com.appcues.data.model.ExperiencePrimitive.TextPrimitive, param4: com.appcues.data.model.ExperiencePrimitive, param5: string, param6: boolean, param7: number, param8: java.lang.Integer, param9: com.appcues.data.model.styling.ComponentDataType, param10: com.appcues.data.model.styling.ComponentStyle, param11: com.appcues.data.model.styling.ComponentColor, param12: string);
						public component3(): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public component11(): com.appcues.data.model.styling.ComponentStyle;
						public component12(): com.appcues.data.model.styling.ComponentColor;
						public getId(): java.util.UUID;
						public getPlaceholder(): com.appcues.data.model.ExperiencePrimitive;
						public component8(): number;
						public getErrorLabel(): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public getDataType(): com.appcues.data.model.styling.ComponentDataType;
						public component9(): java.lang.Integer;
						public component13(): string;
						public getAttributeName(): string;
						public getNumberOfLines(): number;
						public getCursorColor(): com.appcues.data.model.styling.ComponentColor;
						public toString(): string;
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public component4(): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: com.appcues.data.model.ExperiencePrimitive.TextPrimitive, param3: com.appcues.data.model.ExperiencePrimitive.TextPrimitive, param4: com.appcues.data.model.ExperiencePrimitive, param5: string, param6: boolean, param7: number, param8: java.lang.Integer, param9: com.appcues.data.model.styling.ComponentDataType, param10: com.appcues.data.model.styling.ComponentStyle, param11: com.appcues.data.model.styling.ComponentColor, param12: string): com.appcues.data.model.ExperiencePrimitive.TextInputPrimitive;
						public getDefaultValue(): string;
						public component10(): com.appcues.data.model.styling.ComponentDataType;
						public component1(): java.util.UUID;
						public component6(): string;
						public component7(): boolean;
					}
					export class TextPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.TextPrimitive>;
						public static $stable: number;
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public component3(): string;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: string);
						public getTextDescription(): string;
						public getId(): java.util.UUID;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): java.util.UUID;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: string): com.appcues.data.model.ExperiencePrimitive.TextPrimitive;
						public getText(): string;
						public toString(): string;
					}
					export class VerticalStackPrimitive extends com.appcues.data.model.ExperiencePrimitive {
						public static class: java.lang.Class<com.appcues.data.model.ExperiencePrimitive.VerticalStackPrimitive>;
						public static $stable: number;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: java.util.List<any>, param3: number);
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.styling.ComponentStyle, param2: java.util.List<any>, param3: number): com.appcues.data.model.ExperiencePrimitive.VerticalStackPrimitive;
						public getTextDescription(): string;
						public component3(): java.util.List<com.appcues.data.model.ExperiencePrimitive>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSpacing(): number;
						public component2(): com.appcues.data.model.styling.ComponentStyle;
						public component4(): number;
						public toString(): string;
						public getStyle(): com.appcues.data.model.styling.ComponentStyle;
						public getId(): java.util.UUID;
						public component1(): java.util.UUID;
						public getItems(): java.util.List<com.appcues.data.model.ExperiencePrimitive>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export class ExperiencePriority {
					public static class: java.lang.Class<com.appcues.data.model.ExperiencePriority>;
					public static LOW: com.appcues.data.model.ExperiencePriority;
					public static NORMAL: com.appcues.data.model.ExperiencePriority;
					public static valueOf(param0: string): com.appcues.data.model.ExperiencePriority;
					public static values(): androidNative.Array<com.appcues.data.model.ExperiencePriority>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export abstract class ExperienceStepFormItemState {
					public static class: java.lang.Class<com.appcues.data.model.ExperienceStepFormItemState>;
					public getIndex(): number;
					public getLabel(): string;
					public getValue(): string;
					public getAttributeName(): string;
					public getId(): java.util.UUID;
					public toHashMap(): java.util.HashMap<string,any>;
					public isComplete(): boolean;
					public isTextFocusable(): boolean;
					public getType(): string;
					public isRequired(): boolean;
				}
				export module ExperienceStepFormItemState {
					export class OptionSelectFormItemState extends com.appcues.data.model.ExperienceStepFormItemState {
						public static class: java.lang.Class<com.appcues.data.model.ExperienceStepFormItemState.OptionSelectFormItemState>;
						public static $stable: number;
						public getPrimitive(): com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive;
						public setValue(param0: string): void;
						public getIndex(): number;
						public constructor(param0: number, param1: com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive);
						public getValues(): androidx.compose.runtime.MutableState<java.util.Set<string>>;
						public setValues(param0: androidx.compose.runtime.MutableState<java.util.Set<string>>): void;
					}
					export module OptionSelectFormItemState {
						export class WhenMappings {
							public static class: java.lang.Class<com.appcues.data.model.ExperienceStepFormItemState.OptionSelectFormItemState.WhenMappings>;
						}
					}
					export class TextInputFormItemState extends com.appcues.data.model.ExperienceStepFormItemState {
						public static class: java.lang.Class<com.appcues.data.model.ExperienceStepFormItemState.TextInputFormItemState>;
						public static $stable: number;
						public getPrimitive(): com.appcues.data.model.ExperiencePrimitive.TextInputPrimitive;
						public getText(): androidx.compose.runtime.MutableState<string>;
						public setValue(param0: string): void;
						public constructor(param0: number, param1: com.appcues.data.model.ExperiencePrimitive.TextInputPrimitive);
						public setText(param0: androidx.compose.runtime.MutableState<string>): void;
						public getIndex(): number;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.appcues.data.model.ExperienceStepFormItemState.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export class ExperienceStepFormState {
					public static class: java.lang.Class<com.appcues.data.model.ExperienceStepFormState>;
					public getValue(param0: com.appcues.data.model.ExperiencePrimitive.TextInputPrimitive): string;
					public constructor();
					public setValue(param0: com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive, param1: string): void;
					public getFormItems(): java.util.Collection<com.appcues.data.model.ExperienceStepFormItemState>;
					public setValue(param0: com.appcues.data.model.ExperiencePrimitive.TextInputPrimitive, param1: string): void;
					public toHashMap(): java.util.HashMap<string,any>;
					public shouldShowError(param0: com.appcues.data.model.ExperiencePrimitive): boolean;
					public getShouldShowErrors(): androidx.compose.runtime.MutableState<java.lang.Boolean>;
					public isFormComplete(): boolean;
					public getLastTextFocusableItem(): com.appcues.data.model.ExperienceStepFormItemState;
					public register(param0: com.appcues.data.model.ExperiencePrimitive): void;
					public getValue(param0: com.appcues.data.model.ExperiencePrimitive.OptionSelectPrimitive): java.util.Set<string>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export class Experiment {
					public static class: java.lang.Class<com.appcues.data.model.Experiment>;
					public equals(param0: any): boolean;
					public component1(): java.util.UUID;
					public toString(): string;
					public copy(param0: java.util.UUID, param1: string): com.appcues.data.model.Experiment;
					public component2(): string;
					public getGroup(): string;
					public getId(): java.util.UUID;
					public hashCode(): number;
					public constructor(param0: java.util.UUID, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export class Step {
					public static class: java.lang.Class<com.appcues.data.model.Step>;
					public getFormState(): com.appcues.data.model.ExperienceStepFormState;
					public getStepDecoratingTraits(): java.util.List<com.appcues.trait.StepDecoratingTrait>;
					public component5(): string;
					public getContent(): com.appcues.data.model.ExperiencePrimitive;
					public equals(param0: any): boolean;
					public component2(): com.appcues.data.model.ExperiencePrimitive;
					public constructor(param0: java.util.UUID, param1: com.appcues.data.model.ExperiencePrimitive, param2: java.util.List<any>, param3: java.util.Map<java.util.UUID,any>, param4: string, param5: com.appcues.data.model.ExperienceStepFormState);
					public component1(): java.util.UUID;
					public toString(): string;
					public component6(): com.appcues.data.model.ExperienceStepFormState;
					public getId(): java.util.UUID;
					public getActions(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.model.Action>>;
					public component4(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.model.Action>>;
					public copy(param0: java.util.UUID, param1: com.appcues.data.model.ExperiencePrimitive, param2: java.util.List<any>, param3: java.util.Map<java.util.UUID,any>, param4: string, param5: com.appcues.data.model.ExperienceStepFormState): com.appcues.data.model.Step;
					public getType(): string;
					public hashCode(): number;
					public component3(): java.util.List<com.appcues.trait.StepDecoratingTrait>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export class StepContainer {
					public static class: java.lang.Class<com.appcues.data.model.StepContainer>;
					public getPresentingTrait(): com.appcues.trait.PresentingTrait;
					public component2(): com.appcues.trait.PresentingTrait;
					public component5(): java.util.List<com.appcues.trait.BackdropDecoratingTrait>;
					public getContentHolderTrait(): com.appcues.trait.ContentHolderTrait;
					public component4(): com.appcues.trait.ContentWrappingTrait;
					public component1(): java.util.List<com.appcues.data.model.Step>;
					public component6(): java.util.List<com.appcues.trait.ContainerDecoratingTrait>;
					public getBackdropDecoratingTraits(): java.util.List<com.appcues.trait.BackdropDecoratingTrait>;
					public copy(param0: java.util.List<com.appcues.data.model.Step>, param1: com.appcues.trait.PresentingTrait, param2: com.appcues.trait.ContentHolderTrait, param3: com.appcues.trait.ContentWrappingTrait, param4: java.util.List<any>, param5: java.util.List<any>): com.appcues.data.model.StepContainer;
					public getContainerDecoratingTraits(): java.util.List<com.appcues.trait.ContainerDecoratingTrait>;
					public equals(param0: any): boolean;
					public getContentWrappingTrait(): com.appcues.trait.ContentWrappingTrait;
					public toString(): string;
					public constructor(param0: java.util.List<com.appcues.data.model.Step>, param1: com.appcues.trait.PresentingTrait, param2: com.appcues.trait.ContentHolderTrait, param3: com.appcues.trait.ContentWrappingTrait, param4: java.util.List<any>, param5: java.util.List<any>);
					public component3(): com.appcues.trait.ContentHolderTrait;
					public hashCode(): number;
					public getSteps(): java.util.List<com.appcues.data.model.Step>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentBackgroundImage {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentBackgroundImage>;
						public getContentMode(): com.appcues.data.model.styling.ComponentContentMode;
						public constructor(param0: string, param1: string, param2: com.appcues.data.model.styling.ComponentSize, param3: com.appcues.data.model.styling.ComponentContentMode, param4: com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment, param5: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment);
						public component3(): com.appcues.data.model.styling.ComponentSize;
						public getHorizontalAlignment(): com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getBlurHash(): string;
						public toString(): string;
						public component4(): com.appcues.data.model.styling.ComponentContentMode;
						public getIntrinsicSize(): com.appcues.data.model.styling.ComponentSize;
						public copy(param0: string, param1: string, param2: com.appcues.data.model.styling.ComponentSize, param3: com.appcues.data.model.styling.ComponentContentMode, param4: com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment, param5: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment): com.appcues.data.model.styling.ComponentBackgroundImage;
						public component2(): string;
						public getVerticalAlignment(): com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment;
						public component5(): com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment;
						public getImageUrl(): string;
						public component6(): com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentColor {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentColor>;
						public getDark(): number;
						public component2(): number;
						public getLight(): number;
						public copy(param0: number, param1: number): com.appcues.data.model.styling.ComponentColor;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentContentMode {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentContentMode>;
						public static FILL: com.appcues.data.model.styling.ComponentContentMode;
						public static FIT: com.appcues.data.model.styling.ComponentContentMode;
						public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentContentMode>;
						public static valueOf(param0: string): com.appcues.data.model.styling.ComponentContentMode;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentControlPosition {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentControlPosition>;
						public static LEADING: com.appcues.data.model.styling.ComponentControlPosition;
						public static TRAILING: com.appcues.data.model.styling.ComponentControlPosition;
						public static TOP: com.appcues.data.model.styling.ComponentControlPosition;
						public static BOTTOM: com.appcues.data.model.styling.ComponentControlPosition;
						public static HIDDEN: com.appcues.data.model.styling.ComponentControlPosition;
						public static valueOf(param0: string): com.appcues.data.model.styling.ComponentControlPosition;
						public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentControlPosition>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentDataType {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentDataType>;
						public static TEXT: com.appcues.data.model.styling.ComponentDataType;
						public static NUMBER: com.appcues.data.model.styling.ComponentDataType;
						public static EMAIL: com.appcues.data.model.styling.ComponentDataType;
						public static PHONE: com.appcues.data.model.styling.ComponentDataType;
						public static NAME: com.appcues.data.model.styling.ComponentDataType;
						public static ADDRESS: com.appcues.data.model.styling.ComponentDataType;
						public static URL: com.appcues.data.model.styling.ComponentDataType;
						public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentDataType>;
						public static valueOf(param0: string): com.appcues.data.model.styling.ComponentDataType;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentDisplayFormat {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentDisplayFormat>;
						public static VERTICAL_LIST: com.appcues.data.model.styling.ComponentDisplayFormat;
						public static HORIZONTAL_LIST: com.appcues.data.model.styling.ComponentDisplayFormat;
						public static PICKER: com.appcues.data.model.styling.ComponentDisplayFormat;
						public static NPS: com.appcues.data.model.styling.ComponentDisplayFormat;
						public static valueOf(param0: string): com.appcues.data.model.styling.ComponentDisplayFormat;
						public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentDisplayFormat>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentDistribution {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentDistribution>;
						public static CENTER: com.appcues.data.model.styling.ComponentDistribution;
						public static EQUAL: com.appcues.data.model.styling.ComponentDistribution;
						public static valueOf(param0: string): com.appcues.data.model.styling.ComponentDistribution;
						public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentDistribution>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentSelectMode {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentSelectMode>;
						public static SINGLE: com.appcues.data.model.styling.ComponentSelectMode;
						public static MULTIPLE: com.appcues.data.model.styling.ComponentSelectMode;
						public static valueOf(param0: string): com.appcues.data.model.styling.ComponentSelectMode;
						public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentSelectMode>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentShadow {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentShadow>;
						public getX(): number;
						public getRadius(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getColor(): com.appcues.data.model.styling.ComponentColor;
						public component4(): number;
						public toString(): string;
						public copy(param0: com.appcues.data.model.styling.ComponentColor, param1: number, param2: number, param3: number): com.appcues.data.model.styling.ComponentShadow;
						public component2(): number;
						public getY(): number;
						public component1(): com.appcues.data.model.styling.ComponentColor;
						public constructor(param0: com.appcues.data.model.styling.ComponentColor, param1: number, param2: number, param3: number);
						public component3(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentSize {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentSize>;
						public component2(): number;
						public copy(param0: number, param1: number): com.appcues.data.model.styling.ComponentSize;
						public getWidth(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getHeight(): number;
						public component1(): number;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module model {
				export module styling {
					export class ComponentStyle {
						public static class: java.lang.Class<com.appcues.data.model.styling.ComponentStyle>;
						public getBackgroundColor(): com.appcues.data.model.styling.ComponentColor;
						public constructor(param0: java.lang.Double, param1: java.lang.Double, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: com.appcues.data.model.styling.ComponentColor, param12: com.appcues.data.model.styling.ComponentColor, param13: java.util.List<com.appcues.data.model.styling.ComponentColor>, param14: com.appcues.data.model.styling.ComponentBackgroundImage, param15: com.appcues.data.model.styling.ComponentColor, param16: java.lang.Double, param17: com.appcues.data.model.styling.ComponentShadow, param18: string, param19: java.lang.Double, param20: java.lang.Double, param21: java.lang.Double, param22: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment, param23: com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment, param24: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment);
						public getMarginTrailing(): number;
						public getShadow(): com.appcues.data.model.styling.ComponentShadow;
						public equals(param0: any): boolean;
						public getForegroundColor(): com.appcues.data.model.styling.ComponentColor;
						public getFontName(): string;
						public getFontSize(): java.lang.Double;
						public component6(): number;
						public component9(): number;
						public getPaddingBottom(): number;
						public getWidth(): java.lang.Double;
						public component12(): com.appcues.data.model.styling.ComponentColor;
						public getMarginLeading(): number;
						public component20(): java.lang.Double;
						public component14(): java.util.List<com.appcues.data.model.styling.ComponentColor>;
						public constructor();
						public component17(): java.lang.Double;
						public component11(): number;
						public component4(): number;
						public toString(): string;
						public getBackgroundImage(): com.appcues.data.model.styling.ComponentBackgroundImage;
						public component21(): java.lang.Double;
						public copy(param0: java.lang.Double, param1: java.lang.Double, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: com.appcues.data.model.styling.ComponentColor, param12: com.appcues.data.model.styling.ComponentColor, param13: java.util.List<com.appcues.data.model.styling.ComponentColor>, param14: com.appcues.data.model.styling.ComponentBackgroundImage, param15: com.appcues.data.model.styling.ComponentColor, param16: java.lang.Double, param17: com.appcues.data.model.styling.ComponentShadow, param18: string, param19: java.lang.Double, param20: java.lang.Double, param21: java.lang.Double, param22: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment, param23: com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment, param24: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment): com.appcues.data.model.styling.ComponentStyle;
						public getLetterSpacing(): java.lang.Double;
						public component3(): number;
						public component2(): java.lang.Double;
						public getHeight(): java.lang.Double;
						public getPaddingTop(): number;
						public getBackgroundGradient(): java.util.List<com.appcues.data.model.styling.ComponentColor>;
						public getCornerRadius(): number;
						public component18(): com.appcues.data.model.styling.ComponentShadow;
						public hashCode(): number;
						public getTextAlignment(): com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
						public component15(): com.appcues.data.model.styling.ComponentBackgroundImage;
						public component24(): com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment;
						public getBorderWidth(): java.lang.Double;
						public component22(): java.lang.Double;
						public component10(): number;
						public component13(): com.appcues.data.model.styling.ComponentColor;
						public getMarginTop(): number;
						public getVerticalAlignment(): com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment;
						public component1(): java.lang.Double;
						public getPaddingTrailing(): number;
						public getPaddingLeading(): number;
						public component5(): number;
						public component23(): com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
						public getLineHeight(): java.lang.Double;
						public component8(): number;
						public getMarginBottom(): number;
						public getHorizontalAlignment(): com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
						public component19(): string;
						public component16(): com.appcues.data.model.styling.ComponentColor;
						public getBorderColor(): com.appcues.data.model.styling.ComponentColor;
						public component25(): com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
						public component7(): number;
					}
					export module ComponentStyle {
						export class ComponentFontWeight {
							public static class: java.lang.Class<com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight>;
							public static ULTRA_LIGHT: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static THIN: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static LIGHT: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static REGULAR: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static MEDIUM: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static SEMI_BOLD: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static BOLD: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static HEAVY: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static BLACK: com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
							public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight>;
							public static valueOf(param0: string): com.appcues.data.model.styling.ComponentStyle.ComponentFontWeight;
						}
						export class ComponentHorizontalAlignment {
							public static class: java.lang.Class<com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment>;
							public static LEADING: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
							public static CENTER: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
							public static TRAILING: com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
							public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment>;
							public static valueOf(param0: string): com.appcues.data.model.styling.ComponentStyle.ComponentHorizontalAlignment;
						}
						export class ComponentVerticalAlignment {
							public static class: java.lang.Class<com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment>;
							public static TOP: com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment;
							public static CENTER: com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment;
							public static BOTTOM: com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment;
							public static values(): androidNative.Array<com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment>;
							public static valueOf(param0: string): com.appcues.data.model.styling.ComponentStyle.ComponentVerticalAlignment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export class AppcuesRemoteSource {
					public static class: java.lang.Class<com.appcues.data.remote.AppcuesRemoteSource>;
					/**
					 * Constructs a new instance of the com.appcues.data.remote.AppcuesRemoteSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExperienceContent(param0: string, param1: any): any;
						getExperiencePreview(param0: string, param1: any): any;
						postActivity(param0: string, param1: string, param2: any): any;
						qualify(param0: string, param1: java.util.UUID, param2: string, param3: any): any;
						checkAppcuesConnection(param0: any): any;
					});
					public constructor();
					public getExperiencePreview(param0: string, param1: any): any;
					public postActivity(param0: string, param1: string, param2: any): any;
					public getExperienceContent(param0: string, param1: any): any;
					public qualify(param0: string, param1: java.util.UUID, param2: string, param3: any): any;
					public checkAppcuesConnection(param0: any): any;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export class DataRemoteKoin extends com.appcues.di.KoinScopePlugin {
					public static class: java.lang.Class<com.appcues.data.remote.DataRemoteKoin>;
					public static INSTANCE: com.appcues.data.remote.DataRemoteKoin;
					public install(param0: org.koin.dsl.ScopeDSL): void;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export abstract class RemoteError {
					public static class: java.lang.Class<com.appcues.data.remote.RemoteError>;
				}
				export module RemoteError {
					export class HttpError extends com.appcues.data.remote.RemoteError {
						public static class: java.lang.Class<com.appcues.data.remote.RemoteError.HttpError>;
						public static $stable: number;
						public component2(): com.appcues.data.remote.response.ErrorResponse;
						public copy(param0: java.lang.Integer, param1: com.appcues.data.remote.response.ErrorResponse): com.appcues.data.remote.RemoteError.HttpError;
						public constructor();
						public constructor(param0: java.lang.Integer, param1: com.appcues.data.remote.response.ErrorResponse);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getError(): com.appcues.data.remote.response.ErrorResponse;
						public getCode(): java.lang.Integer;
						public component1(): java.lang.Integer;
						public toString(): string;
					}
					export class NetworkError extends com.appcues.data.remote.RemoteError {
						public static class: java.lang.Class<com.appcues.data.remote.RemoteError.NetworkError>;
						public static $stable: number;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public component1(): java.lang.Throwable;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getThrowable(): java.lang.Throwable;
						public copy(param0: java.lang.Throwable): com.appcues.data.remote.RemoteError.NetworkError;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module adapters {
					export class DateAdapter {
						public static class: java.lang.Class<com.appcues.data.remote.adapters.DateAdapter>;
						public constructor();
						public toJson(param0: java.util.Date): number;
						public fromJson(param0: number): java.util.Date;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module adapters {
					export class ExperienceStepFormStateAdapter {
						public static class: java.lang.Class<com.appcues.data.remote.adapters.ExperienceStepFormStateAdapter>;
						public constructor();
						public fromJson(param0: com.appcues.data.remote.adapters.ExperienceStepFormStateAdapter.StubExperienceStepFormState): com.appcues.data.model.ExperienceStepFormState;
						public toJson(param0: com.appcues.data.model.ExperienceStepFormState): java.util.Map<string,any>;
					}
					export module ExperienceStepFormStateAdapter {
						export class StubExperienceStepFormState {
							public static class: java.lang.Class<com.appcues.data.remote.adapters.ExperienceStepFormStateAdapter.StubExperienceStepFormState>;
							public copy(param0: string): com.appcues.data.remote.adapters.ExperienceStepFormStateAdapter.StubExperienceStepFormState;
							public hashCode(): number;
							public constructor(param0: string);
							public getValue(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module adapters {
					export class ExperienceStepFormStateAdapter_StubExperienceStepFormStateJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.adapters.ExperienceStepFormStateAdapter.StubExperienceStepFormState> {
						public static class: java.lang.Class<com.appcues.data.remote.adapters.ExperienceStepFormStateAdapter_StubExperienceStepFormStateJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.adapters.ExperienceStepFormStateAdapter.StubExperienceStepFormState): void;
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.adapters.ExperienceStepFormStateAdapter.StubExperienceStepFormState;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module adapters {
					export class StepContainerAdapter {
						public static class: java.lang.Class<com.appcues.data.remote.adapters.StepContainerAdapter>;
						public constructor();
						public toJson(param0: com.appcues.data.remote.response.step.StepContainerResponse): string;
						public fromJson(param0: com.appcues.data.remote.adapters.StepOrContainerResponse): com.appcues.data.remote.response.step.StepContainerResponse;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module adapters {
					export class StepOrContainerResponse {
						public static class: java.lang.Class<com.appcues.data.remote.adapters.StepOrContainerResponse>;
						public getType(): string;
						public component3(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
						public component5(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.remote.response.action.ActionResponse>>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getContent(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
						public copy(param0: java.util.UUID, param1: java.util.List<com.appcues.data.remote.response.step.StepResponse>, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse, param3: java.util.List<com.appcues.data.remote.response.trait.TraitResponse>, param4: java.util.Map<java.util.UUID,any>, param5: string): com.appcues.data.remote.adapters.StepOrContainerResponse;
						public constructor(param0: java.util.UUID, param1: java.util.List<com.appcues.data.remote.response.step.StepResponse>, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse, param3: java.util.List<com.appcues.data.remote.response.trait.TraitResponse>, param4: java.util.Map<java.util.UUID,any>, param5: string);
						public getActions(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.remote.response.action.ActionResponse>>;
						public toString(): string;
						public component2(): java.util.List<com.appcues.data.remote.response.step.StepResponse>;
						public getTraits(): java.util.List<com.appcues.data.remote.response.trait.TraitResponse>;
						public getId(): java.util.UUID;
						public component1(): java.util.UUID;
						public component6(): string;
						public component4(): java.util.List<com.appcues.data.remote.response.trait.TraitResponse>;
						public getChildren(): java.util.List<com.appcues.data.remote.response.step.StepResponse>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module adapters {
					export class StepOrContainerResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.adapters.StepOrContainerResponse> {
						public static class: java.lang.Class<com.appcues.data.remote.adapters.StepOrContainerResponseJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.adapters.StepOrContainerResponse): void;
						public toString(): string;
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.adapters.StepOrContainerResponse;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module adapters {
					export class UUIDAdapter {
						public static class: java.lang.Class<com.appcues.data.remote.adapters.UUIDAdapter>;
						public fromJson(param0: string): java.util.UUID;
						public constructor();
						public toJson(param0: java.util.UUID): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module request {
					export class ActivityRequest {
						public static class: java.lang.Class<com.appcues.data.remote.request.ActivityRequest>;
						public getEvents(): java.util.List<com.appcues.data.remote.request.EventRequest>;
						public getUserId(): string;
						public getAccountId(): string;
						public copy(param0: java.util.UUID, param1: java.util.List<com.appcues.data.remote.request.EventRequest>, param2: java.util.Map<string,any>, param3: string, param4: string, param5: string, param6: java.util.Map<string,any>, param7: java.util.Date): com.appcues.data.remote.request.ActivityRequest;
						public component5(): string;
						public component8(): java.util.Date;
						public getTimestamp(): java.util.Date;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getRequestId(): java.util.UUID;
						public getProfileUpdate(): java.util.Map<string,any>;
						public toString(): string;
						public component4(): string;
						public component2(): java.util.List<com.appcues.data.remote.request.EventRequest>;
						public constructor(param0: java.util.UUID, param1: java.util.List<com.appcues.data.remote.request.EventRequest>, param2: java.util.Map<string,any>, param3: string, param4: string, param5: string, param6: java.util.Map<string,any>, param7: java.util.Date);
						public component3(): java.util.Map<string,any>;
						public getGroupUpdate(): java.util.Map<string,any>;
						public getGroupId(): string;
						public component1(): java.util.UUID;
						public component6(): string;
						public component7(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module request {
					export class ActivityRequestJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.request.ActivityRequest> {
						public static class: java.lang.Class<com.appcues.data.remote.request.ActivityRequestJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.request.ActivityRequest): void;
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.request.ActivityRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module request {
					export class EventRequest {
						public static class: java.lang.Class<com.appcues.data.remote.request.EventRequest>;
						public getTimestamp(): java.util.Date;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getContext(): java.util.Map<string,any>;
						public getName(): string;
						public copy(param0: string, param1: java.util.Date, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>): com.appcues.data.remote.request.EventRequest;
						public toString(): string;
						public component3(): java.util.Map<string,any>;
						public component2(): java.util.Date;
						public component4(): java.util.Map<string,any>;
						public constructor(param0: string, param1: java.util.Date, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>);
						public getAttributes(): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module request {
					export class EventRequestJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.request.EventRequest> {
						public static class: java.lang.Class<com.appcues.data.remote.request.EventRequestJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.request.EventRequest): void;
						public toString(): string;
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.request.EventRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class ActivityResponse {
						public static class: java.lang.Class<com.appcues.data.remote.response.ActivityResponse>;
						public copy(param0: boolean): com.appcues.data.remote.response.ActivityResponse;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: boolean);
						public component1(): boolean;
						public toString(): string;
						public getOk(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class ActivityResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.ActivityResponse> {
						public static class: java.lang.Class<com.appcues.data.remote.response.ActivityResponseJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.ActivityResponse): void;
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.ActivityResponse;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class ErrorMessageResponse {
						public static class: java.lang.Class<com.appcues.data.remote.response.ErrorMessageResponse>;
						public component3(): string;
						public constructor(param0: string, param1: string, param2: string);
						public component2(): string;
						public getType(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: string, param2: string): com.appcues.data.remote.response.ErrorMessageResponse;
						public getDescription(): string;
						public toString(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class ErrorMessageResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.ErrorMessageResponse> {
						public static class: java.lang.Class<com.appcues.data.remote.response.ErrorMessageResponseJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.ErrorMessageResponse;
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.ErrorMessageResponse): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class ErrorResponse {
						public static class: java.lang.Class<com.appcues.data.remote.response.ErrorResponse>;
						public constructor(param0: boolean, param1: number, param2: com.appcues.data.remote.response.ErrorMessageResponse);
						public getStatusCode(): number;
						public component2(): number;
						public component3(): com.appcues.data.remote.response.ErrorMessageResponse;
						public getError(): boolean;
						public getMessage(): com.appcues.data.remote.response.ErrorMessageResponse;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): boolean;
						public copy(param0: boolean, param1: number, param2: com.appcues.data.remote.response.ErrorMessageResponse): com.appcues.data.remote.response.ErrorResponse;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class ErrorResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.ErrorResponse> {
						public static class: java.lang.Class<com.appcues.data.remote.response.ErrorResponseJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.ErrorResponse;
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.ErrorResponse): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class ExperimentResponse {
						public static class: java.lang.Class<com.appcues.data.remote.response.ExperimentResponse>;
						public component3(): java.util.UUID;
						public getExperimentId(): java.util.UUID;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: java.util.UUID, param2: java.util.UUID): com.appcues.data.remote.response.ExperimentResponse;
						public constructor(param0: string, param1: java.util.UUID, param2: java.util.UUID);
						public getExperienceId(): java.util.UUID;
						public component2(): java.util.UUID;
						public toString(): string;
						public getGroup(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class ExperimentResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.ExperimentResponse> {
						public static class: java.lang.Class<com.appcues.data.remote.response.ExperimentResponseJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.ExperimentResponse;
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.ExperimentResponse): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class HealthCheckResponse {
						public static class: java.lang.Class<com.appcues.data.remote.response.HealthCheckResponse>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: boolean);
						public component1(): boolean;
						public toString(): string;
						public getOk(): boolean;
						public copy(param0: boolean): com.appcues.data.remote.response.HealthCheckResponse;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class HealthCheckResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.HealthCheckResponse> {
						public static class: java.lang.Class<com.appcues.data.remote.response.HealthCheckResponseJsonAdapter>;
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.HealthCheckResponse;
						public constructor(param0: com.squareup.moshi.Moshi);
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.HealthCheckResponse): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class QualifyResponse {
						public static class: java.lang.Class<com.appcues.data.remote.response.QualifyResponse>;
						public component3(): boolean;
						public copy(param0: java.util.List<com.appcues.data.remote.response.experience.ExperienceResponse>, param1: java.util.List<com.appcues.data.remote.response.ExperimentResponse>, param2: boolean, param3: string): com.appcues.data.remote.response.QualifyResponse;
						public component2(): java.util.List<com.appcues.data.remote.response.ExperimentResponse>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.List<com.appcues.data.remote.response.experience.ExperienceResponse>, param1: java.util.List<com.appcues.data.remote.response.ExperimentResponse>, param2: boolean, param3: string);
						public getPerformedQualification(): boolean;
						public toString(): string;
						public component4(): string;
						public component1(): java.util.List<com.appcues.data.remote.response.experience.ExperienceResponse>;
						public getExperiences(): java.util.List<com.appcues.data.remote.response.experience.ExperienceResponse>;
						public getExperiments(): java.util.List<com.appcues.data.remote.response.ExperimentResponse>;
						public getQualificationReason(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export class QualifyResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.QualifyResponse> {
						public static class: java.lang.Class<com.appcues.data.remote.response.QualifyResponseJsonAdapter>;
						public constructor(param0: com.squareup.moshi.Moshi);
						public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.QualifyResponse): void;
						public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.QualifyResponse;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module action {
						export class ActionResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.action.ActionResponse>;
							public component2(): string;
							public copy(param0: string, param1: string, param2: java.util.Map<string,any>): com.appcues.data.remote.response.action.ActionResponse;
							public hashCode(): number;
							public getConfig(): java.util.Map<string,any>;
							public component3(): java.util.Map<string,any>;
							public constructor(param0: string, param1: string, param2: java.util.Map<string,any>);
							public toString(): string;
							public getOn(): string;
							public equals(param0: any): boolean;
							public getType(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module action {
						export class ActionResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.action.ActionResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.action.ActionResponseJsonAdapter>;
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.action.ActionResponse;
							public constructor(param0: com.squareup.moshi.Moshi);
							public toString(): string;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.action.ActionResponse): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module experience {
						export class ExperienceResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.experience.ExperienceResponse>;
							public getPublishedAt(): java.lang.Long;
							public component7(): string;
							public getState(): string;
							public hashCode(): number;
							public component10(): string;
							public component4(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.remote.response.action.ActionResponse>>;
							public toString(): string;
							public component3(): string;
							public getActions(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.remote.response.action.ActionResponse>>;
							public getNextContentId(): string;
							public component1(): java.util.UUID;
							public constructor(param0: java.util.UUID, param1: string, param2: string, param3: java.util.Map<java.util.UUID,any>, param4: java.util.List<com.appcues.data.remote.response.trait.TraitResponse>, param5: java.util.List<com.appcues.data.remote.response.step.StepContainerResponse>, param6: string, param7: string, param8: java.lang.Long, param9: string, param10: string);
							public getId(): java.util.UUID;
							public getType(): string;
							public getRedirectUrl(): string;
							public component2(): string;
							public component9(): java.lang.Long;
							public getSteps(): java.util.List<com.appcues.data.remote.response.step.StepContainerResponse>;
							public getTheme(): string;
							public component6(): java.util.List<com.appcues.data.remote.response.step.StepContainerResponse>;
							public copy(param0: java.util.UUID, param1: string, param2: string, param3: java.util.Map<java.util.UUID,any>, param4: java.util.List<com.appcues.data.remote.response.trait.TraitResponse>, param5: java.util.List<com.appcues.data.remote.response.step.StepContainerResponse>, param6: string, param7: string, param8: java.lang.Long, param9: string, param10: string): com.appcues.data.remote.response.experience.ExperienceResponse;
							public component5(): java.util.List<com.appcues.data.remote.response.trait.TraitResponse>;
							public component8(): string;
							public getName(): string;
							public getTraits(): java.util.List<com.appcues.data.remote.response.trait.TraitResponse>;
							public component11(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module experience {
						export class ExperienceResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.experience.ExperienceResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.experience.ExperienceResponseJsonAdapter>;
							public constructor(param0: com.squareup.moshi.Moshi);
							public toString(): string;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.experience.ExperienceResponse): void;
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.experience.ExperienceResponse;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module step {
						export class StepContainerResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.step.StepContainerResponse>;
							public hashCode(): number;
							public constructor(param0: java.util.UUID, param1: java.util.List<com.appcues.data.remote.response.step.StepResponse>, param2: java.util.List<com.appcues.data.remote.response.trait.TraitResponse>, param3: java.util.Map<java.util.UUID,any>);
							public component4(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.remote.response.action.ActionResponse>>;
							public toString(): string;
							public component3(): java.util.List<com.appcues.data.remote.response.trait.TraitResponse>;
							public component2(): java.util.List<com.appcues.data.remote.response.step.StepResponse>;
							public getActions(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.remote.response.action.ActionResponse>>;
							public getTraits(): java.util.List<com.appcues.data.remote.response.trait.TraitResponse>;
							public component1(): java.util.UUID;
							public getChildren(): java.util.List<com.appcues.data.remote.response.step.StepResponse>;
							public getId(): java.util.UUID;
							public equals(param0: any): boolean;
							public copy(param0: java.util.UUID, param1: java.util.List<com.appcues.data.remote.response.step.StepResponse>, param2: java.util.List<com.appcues.data.remote.response.trait.TraitResponse>, param3: java.util.Map<java.util.UUID,any>): com.appcues.data.remote.response.step.StepContainerResponse;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module step {
						export class StepResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.step.StepResponse>;
							public getContent(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
							public hashCode(): number;
							public component2(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
							public component4(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.remote.response.action.ActionResponse>>;
							public toString(): string;
							public component5(): string;
							public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.step.primitive.PrimitiveResponse, param2: java.util.List<com.appcues.data.remote.response.trait.TraitResponse>, param3: java.util.Map<java.util.UUID,any>, param4: string);
							public component3(): java.util.List<com.appcues.data.remote.response.trait.TraitResponse>;
							public getActions(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.remote.response.action.ActionResponse>>;
							public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.step.primitive.PrimitiveResponse, param2: java.util.List<com.appcues.data.remote.response.trait.TraitResponse>, param3: java.util.Map<java.util.UUID,any>, param4: string): com.appcues.data.remote.response.step.StepResponse;
							public getTraits(): java.util.List<com.appcues.data.remote.response.trait.TraitResponse>;
							public component1(): java.util.UUID;
							public getId(): java.util.UUID;
							public equals(param0: any): boolean;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module step {
						export class StepResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.step.StepResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.step.StepResponseJsonAdapter>;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.step.StepResponse): void;
							public constructor(param0: com.squareup.moshi.Moshi);
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.step.StepResponse;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module step {
						export module primitive {
							export abstract class PrimitiveResponse {
								public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse>;
								public getType(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
							}
							export module PrimitiveResponse {
								export class BlockPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.BlockPrimitiveResponse>;
									public component2(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
									public hashCode(): number;
									public getId(): java.util.UUID;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.step.primitive.PrimitiveResponse): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.BlockPrimitiveResponse;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.step.primitive.PrimitiveResponse);
									public equals(param0: any): boolean;
									public toString(): string;
									public getContent(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
									public component1(): java.util.UUID;
								}
								export class BoxPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.BoxPrimitiveResponse>;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: java.util.List<any>): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.BoxPrimitiveResponse;
									public hashCode(): number;
									public getStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public component3(): java.util.List<com.appcues.data.remote.response.step.primitive.PrimitiveResponse>;
									public getId(): java.util.UUID;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: java.util.List<any>);
									public equals(param0: any): boolean;
									public toString(): string;
									public getItems(): java.util.List<com.appcues.data.remote.response.step.primitive.PrimitiveResponse>;
									public component2(): com.appcues.data.remote.response.styling.StyleResponse;
									public component1(): java.util.UUID;
								}
								export class ButtonPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.ButtonPrimitiveResponse>;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.ButtonPrimitiveResponse;
									public hashCode(): number;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse);
									public getStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public getId(): java.util.UUID;
									public equals(param0: any): boolean;
									public component3(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
									public toString(): string;
									public getContent(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
									public component2(): com.appcues.data.remote.response.styling.StyleResponse;
									public component1(): java.util.UUID;
								}
								export class EmbedPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.EmbedPrimitiveResponse>;
									public hashCode(): number;
									public equals(param0: any): boolean;
									public getEmbed(): string;
									public toString(): string;
									public component3(): string;
									public getIntrinsicSize(): com.appcues.data.remote.response.styling.StyleSizeResponse;
									public component1(): java.util.UUID;
									public getStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: string, param3: com.appcues.data.remote.response.styling.StyleSizeResponse);
									public getId(): java.util.UUID;
									public component4(): com.appcues.data.remote.response.styling.StyleSizeResponse;
									public component2(): com.appcues.data.remote.response.styling.StyleResponse;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: string, param3: com.appcues.data.remote.response.styling.StyleSizeResponse): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.EmbedPrimitiveResponse;
								}
								export class ImagePrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.ImagePrimitiveResponse>;
									public hashCode(): number;
									public component7(): string;
									public equals(param0: any): boolean;
									public component5(): string;
									public toString(): string;
									public getBlurHash(): string;
									public getContentMode(): string;
									public component3(): string;
									public getIntrinsicSize(): com.appcues.data.remote.response.styling.StyleSizeResponse;
									public component1(): java.util.UUID;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: string, param3: string, param4: string, param5: com.appcues.data.remote.response.styling.StyleSizeResponse, param6: string): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.ImagePrimitiveResponse;
									public getAccessibilityLabel(): string;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: string, param3: string, param4: string, param5: com.appcues.data.remote.response.styling.StyleSizeResponse, param6: string);
									public getStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public getImageUrl(): string;
									public getId(): java.util.UUID;
									public component6(): com.appcues.data.remote.response.styling.StyleSizeResponse;
									public component2(): com.appcues.data.remote.response.styling.StyleResponse;
									public component4(): string;
								}
								export class OptionSelectPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.OptionSelectPrimitiveResponse>;
									public component7(): java.util.Set<string>;
									public getSelectMode(): string;
									public component11(): string;
									public component16(): com.appcues.data.remote.response.styling.StyleColorResponse;
									public component17(): string;
									public getLabel(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public component9(): java.lang.Integer;
									public getSelectedColor(): com.appcues.data.remote.response.styling.StyleColorResponse;
									public component14(): com.appcues.data.remote.response.styling.StyleColorResponse;
									public component15(): com.appcues.data.remote.response.styling.StyleColorResponse;
									public component6(): java.util.List<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.OptionSelectPrimitiveResponse.OptionItem>;
									public component1(): java.util.UUID;
									public getStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public getId(): java.util.UUID;
									public component8(): java.lang.Integer;
									public getMaxSelections(): java.lang.Integer;
									public getControlPosition(): string;
									public component2(): com.appcues.data.remote.response.styling.StyleResponse;
									public getPlaceholder(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
									public getMinSelections(): java.lang.Integer;
									public component10(): string;
									public component12(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
									public hashCode(): number;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param3: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param4: string, param5: java.util.List<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.OptionSelectPrimitiveResponse.OptionItem>, param6: java.util.Set<string>, param7: java.lang.Integer, param8: java.lang.Integer, param9: string, param10: string, param11: com.appcues.data.remote.response.step.primitive.PrimitiveResponse, param12: com.appcues.data.remote.response.styling.StyleResponse, param13: com.appcues.data.remote.response.styling.StyleColorResponse, param14: com.appcues.data.remote.response.styling.StyleColorResponse, param15: com.appcues.data.remote.response.styling.StyleColorResponse, param16: string);
									public getUnselectedColor(): com.appcues.data.remote.response.styling.StyleColorResponse;
									public equals(param0: any): boolean;
									public component5(): string;
									public toString(): string;
									public component13(): com.appcues.data.remote.response.styling.StyleResponse;
									public component4(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public getDisplayFormat(): string;
									public getErrorLabel(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public getOptions(): java.util.List<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.OptionSelectPrimitiveResponse.OptionItem>;
									public getAccentColor(): com.appcues.data.remote.response.styling.StyleColorResponse;
									public getAttributeName(): string;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param3: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param4: string, param5: java.util.List<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.OptionSelectPrimitiveResponse.OptionItem>, param6: java.util.Set<string>, param7: java.lang.Integer, param8: java.lang.Integer, param9: string, param10: string, param11: com.appcues.data.remote.response.step.primitive.PrimitiveResponse, param12: com.appcues.data.remote.response.styling.StyleResponse, param13: com.appcues.data.remote.response.styling.StyleColorResponse, param14: com.appcues.data.remote.response.styling.StyleColorResponse, param15: com.appcues.data.remote.response.styling.StyleColorResponse, param16: string): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.OptionSelectPrimitiveResponse;
									public getPickerStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public component3(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public getDefaultValue(): java.util.Set<string>;
								}
								export module OptionSelectPrimitiveResponse {
									export class OptionItem {
										public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.OptionSelectPrimitiveResponse.OptionItem>;
										public static $stable: number;
										public equals(param0: any): boolean;
										public component3(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
										public hashCode(): number;
										public getSelectedContent(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
										public component2(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
										public getValue(): string;
										public toString(): string;
										public constructor(param0: string, param1: com.appcues.data.remote.response.step.primitive.PrimitiveResponse, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse);
										public copy(param0: string, param1: com.appcues.data.remote.response.step.primitive.PrimitiveResponse, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.OptionSelectPrimitiveResponse.OptionItem;
										public getContent(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse;
										public component1(): string;
									}
								}
								export class SpacerPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.SpacerPrimitiveResponse>;
									public hashCode(): number;
									public getId(): java.util.UUID;
									public component2(): number;
									public copy(param0: java.util.UUID, param1: number): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.SpacerPrimitiveResponse;
									public equals(param0: any): boolean;
									public toString(): string;
									public constructor(param0: java.util.UUID, param1: number);
									public getSpacing(): number;
									public component1(): java.util.UUID;
								}
								export class StackPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.StackPrimitiveResponse>;
									public hashCode(): number;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: string, param3: java.util.List<any>, param4: string, param5: number);
									public equals(param0: any): boolean;
									public component4(): java.util.List<com.appcues.data.remote.response.step.primitive.PrimitiveResponse>;
									public component5(): string;
									public toString(): string;
									public getOrientation(): string;
									public getDistribution(): string;
									public component3(): string;
									public component1(): java.util.UUID;
									public getStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public getId(): java.util.UUID;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: string, param3: java.util.List<any>, param4: string, param5: number): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.StackPrimitiveResponse;
									public component6(): number;
									public getItems(): java.util.List<com.appcues.data.remote.response.step.primitive.PrimitiveResponse>;
									public getSpacing(): number;
									public component2(): com.appcues.data.remote.response.styling.StyleResponse;
								}
								export class TextInputPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextInputPrimitiveResponse>;
									public component5(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public getMaxLength(): java.lang.Integer;
									public getLabel(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public component9(): java.lang.Integer;
									public component1(): java.util.UUID;
									public component12(): com.appcues.data.remote.response.styling.StyleColorResponse;
									public getNumberOfLines(): java.lang.Integer;
									public getStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public component13(): string;
									public getId(): java.util.UUID;
									public getPlaceholder(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public getDefaultValue(): string;
									public component8(): java.lang.Integer;
									public component2(): com.appcues.data.remote.response.styling.StyleResponse;
									public component6(): string;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param3: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param4: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param5: string, param6: java.lang.Boolean, param7: java.lang.Integer, param8: java.lang.Integer, param9: string, param10: com.appcues.data.remote.response.styling.StyleResponse, param11: com.appcues.data.remote.response.styling.StyleColorResponse, param12: string): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextInputPrimitiveResponse;
									public getRequired(): java.lang.Boolean;
									public component10(): string;
									public hashCode(): number;
									public getTextFieldStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public component11(): com.appcues.data.remote.response.styling.StyleResponse;
									public equals(param0: any): boolean;
									public toString(): string;
									public component7(): java.lang.Boolean;
									public getCursorColor(): com.appcues.data.remote.response.styling.StyleColorResponse;
									public component4(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param3: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param4: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse, param5: string, param6: java.lang.Boolean, param7: java.lang.Integer, param8: java.lang.Integer, param9: string, param10: com.appcues.data.remote.response.styling.StyleResponse, param11: com.appcues.data.remote.response.styling.StyleColorResponse, param12: string);
									public getDataType(): string;
									public getErrorLabel(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public getAttributeName(): string;
									public component3(): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
								}
								export class TextPrimitiveResponse extends com.appcues.data.remote.response.step.primitive.PrimitiveResponse {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse>;
									public getText(): string;
									public hashCode(): number;
									public getStyle(): com.appcues.data.remote.response.styling.StyleResponse;
									public getId(): java.util.UUID;
									public equals(param0: any): boolean;
									public toString(): string;
									public component2(): com.appcues.data.remote.response.styling.StyleResponse;
									public copy(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: string): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.TextPrimitiveResponse;
									public component3(): string;
									public constructor(param0: java.util.UUID, param1: com.appcues.data.remote.response.styling.StyleResponse, param2: string);
									public component1(): java.util.UUID;
								}
								export class Type {
									public static class: java.lang.Class<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type>;
									public static STACK: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static BOX: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static BUTTON: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static TEXT: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static IMAGE: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static EMBED: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static SPACER: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static TEXT_INPUT: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static OPTION_SELECT: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static BLOCK: com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static valueOf(param0: string): com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type;
									public static values(): androidNative.Array<com.appcues.data.remote.response.step.primitive.PrimitiveResponse.Type>;
									public getJsonName(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleBackgroundImageResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleBackgroundImageResponse>;
							public getImageUrl(): string;
							public component2(): string;
							public hashCode(): number;
							public copy(param0: string, param1: string, param2: com.appcues.data.remote.response.styling.StyleSizeResponse, param3: string, param4: string, param5: string): com.appcues.data.remote.response.styling.StyleBackgroundImageResponse;
							public toString(): string;
							public component5(): string;
							public getHorizontalAlignment(): string;
							public component1(): string;
							public constructor(param0: string, param1: string, param2: com.appcues.data.remote.response.styling.StyleSizeResponse, param3: string, param4: string, param5: string);
							public getIntrinsicSize(): com.appcues.data.remote.response.styling.StyleSizeResponse;
							public component3(): com.appcues.data.remote.response.styling.StyleSizeResponse;
							public getVerticalAlignment(): string;
							public getBlurHash(): string;
							public component4(): string;
							public getContentMode(): string;
							public component6(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleBackgroundImageResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.styling.StyleBackgroundImageResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleBackgroundImageResponseJsonAdapter>;
							public constructor(param0: com.squareup.moshi.Moshi);
							public toString(): string;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.styling.StyleBackgroundImageResponse): void;
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.styling.StyleBackgroundImageResponse;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleColorResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleColorResponse>;
							public getLight(): string;
							public component2(): string;
							public hashCode(): number;
							public constructor(param0: string, param1: string);
							public getDark(): string;
							public copy(param0: string, param1: string): com.appcues.data.remote.response.styling.StyleColorResponse;
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleColorResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.styling.StyleColorResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleColorResponseJsonAdapter>;
							public constructor(param0: com.squareup.moshi.Moshi);
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.styling.StyleColorResponse;
							public toString(): string;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.styling.StyleColorResponse): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleGradientColorResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleGradientColorResponse>;
							public copy(param0: java.util.List<com.appcues.data.remote.response.styling.StyleColorResponse>, param1: string, param2: string): com.appcues.data.remote.response.styling.StyleGradientColorResponse;
							public component2(): string;
							public getColors(): java.util.List<com.appcues.data.remote.response.styling.StyleColorResponse>;
							public hashCode(): number;
							public getStartPoint(): string;
							public toString(): string;
							public component1(): java.util.List<com.appcues.data.remote.response.styling.StyleColorResponse>;
							public equals(param0: any): boolean;
							public component3(): string;
							public constructor(param0: java.util.List<com.appcues.data.remote.response.styling.StyleColorResponse>, param1: string, param2: string);
							public getEndPoint(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleGradientColorResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.styling.StyleGradientColorResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleGradientColorResponseJsonAdapter>;
							public constructor(param0: com.squareup.moshi.Moshi);
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.styling.StyleGradientColorResponse;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.styling.StyleGradientColorResponse): void;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleResponse>;
							public component17(): java.lang.Double;
							public component23(): string;
							public component5(): number;
							public component11(): number;
							public component1(): java.lang.Double;
							public getLetterSpacing(): java.lang.Double;
							public getTextAlignment(): string;
							public getMarginTrailing(): number;
							public component21(): java.lang.Double;
							public copy(param0: java.lang.Double, param1: java.lang.Double, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: com.appcues.data.remote.response.styling.StyleShadowResponse, param12: com.appcues.data.remote.response.styling.StyleColorResponse, param13: com.appcues.data.remote.response.styling.StyleColorResponse, param14: com.appcues.data.remote.response.styling.StyleGradientColorResponse, param15: com.appcues.data.remote.response.styling.StyleColorResponse, param16: java.lang.Double, param17: string, param18: java.lang.Double, param19: java.lang.Double, param20: java.lang.Double, param21: string, param22: string, param23: string, param24: com.appcues.data.remote.response.styling.StyleBackgroundImageResponse): com.appcues.data.remote.response.styling.StyleResponse;
							public getCornerRadius(): number;
							public component15(): com.appcues.data.remote.response.styling.StyleGradientColorResponse;
							public getVerticalAlignment(): string;
							public component13(): com.appcues.data.remote.response.styling.StyleColorResponse;
							public getBackgroundColor(): com.appcues.data.remote.response.styling.StyleColorResponse;
							public component2(): java.lang.Double;
							public getPaddingBottom(): number;
							public getPaddingTrailing(): number;
							public constructor(param0: java.lang.Double, param1: java.lang.Double, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: com.appcues.data.remote.response.styling.StyleShadowResponse, param12: com.appcues.data.remote.response.styling.StyleColorResponse, param13: com.appcues.data.remote.response.styling.StyleColorResponse, param14: com.appcues.data.remote.response.styling.StyleGradientColorResponse, param15: com.appcues.data.remote.response.styling.StyleColorResponse, param16: java.lang.Double, param17: string, param18: java.lang.Double, param19: java.lang.Double, param20: java.lang.Double, param21: string, param22: string, param23: string, param24: com.appcues.data.remote.response.styling.StyleBackgroundImageResponse);
							public getBorderWidth(): java.lang.Double;
							public getPaddingTop(): number;
							public component24(): string;
							public component4(): number;
							public getWidth(): java.lang.Double;
							public getBorderColor(): com.appcues.data.remote.response.styling.StyleColorResponse;
							public getPaddingLeading(): number;
							public getHeight(): java.lang.Double;
							public equals(param0: any): boolean;
							public component19(): java.lang.Double;
							public hashCode(): number;
							public getBackgroundGradient(): com.appcues.data.remote.response.styling.StyleGradientColorResponse;
							public component9(): number;
							public toString(): string;
							public getMarginTop(): number;
							public getHorizontalAlignment(): string;
							public component22(): string;
							public component16(): com.appcues.data.remote.response.styling.StyleColorResponse;
							public component10(): number;
							public getFontSize(): java.lang.Double;
							public component6(): number;
							public getFontName(): string;
							public component3(): number;
							public component14(): com.appcues.data.remote.response.styling.StyleColorResponse;
							public constructor();
							public component7(): number;
							public component12(): com.appcues.data.remote.response.styling.StyleShadowResponse;
							public component18(): string;
							public component20(): java.lang.Double;
							public getMarginBottom(): number;
							public component25(): com.appcues.data.remote.response.styling.StyleBackgroundImageResponse;
							public getForegroundColor(): com.appcues.data.remote.response.styling.StyleColorResponse;
							public component8(): number;
							public getMarginLeading(): number;
							public getBackgroundImage(): com.appcues.data.remote.response.styling.StyleBackgroundImageResponse;
							public getShadow(): com.appcues.data.remote.response.styling.StyleShadowResponse;
							public getLineHeight(): java.lang.Double;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.styling.StyleResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleResponseJsonAdapter>;
							public constructor(param0: com.squareup.moshi.Moshi);
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.styling.StyleResponse): void;
							public toString(): string;
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.styling.StyleResponse;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleShadowResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleShadowResponse>;
							public getRadius(): number;
							public getY(): number;
							public hashCode(): number;
							public component2(): number;
							public toString(): string;
							public constructor(param0: com.appcues.data.remote.response.styling.StyleColorResponse, param1: number, param2: number, param3: number);
							public getColor(): com.appcues.data.remote.response.styling.StyleColorResponse;
							public component1(): com.appcues.data.remote.response.styling.StyleColorResponse;
							public copy(param0: com.appcues.data.remote.response.styling.StyleColorResponse, param1: number, param2: number, param3: number): com.appcues.data.remote.response.styling.StyleShadowResponse;
							public component4(): number;
							public component3(): number;
							public equals(param0: any): boolean;
							public getX(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleShadowResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.styling.StyleShadowResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleShadowResponseJsonAdapter>;
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.styling.StyleShadowResponse;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.styling.StyleShadowResponse): void;
							public constructor(param0: com.squareup.moshi.Moshi);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleSizeResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleSizeResponse>;
							public getWidth(): number;
							public getHeight(): number;
							public component1(): number;
							public constructor(param0: number, param1: number);
							public hashCode(): number;
							public component2(): number;
							public copy(param0: number, param1: number): com.appcues.data.remote.response.styling.StyleSizeResponse;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module styling {
						export class StyleSizeResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.styling.StyleSizeResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.styling.StyleSizeResponseJsonAdapter>;
							public constructor(param0: com.squareup.moshi.Moshi);
							public toString(): string;
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.styling.StyleSizeResponse;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.styling.StyleSizeResponse): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module trait {
						export class TraitResponse {
							public static class: java.lang.Class<com.appcues.data.remote.response.trait.TraitResponse>;
							public constructor(param0: string, param1: java.util.Map<string,any>);
							public hashCode(): number;
							public getConfig(): java.util.Map<string,any>;
							public copy(param0: string, param1: java.util.Map<string,any>): com.appcues.data.remote.response.trait.TraitResponse;
							public toString(): string;
							public equals(param0: any): boolean;
							public component2(): java.util.Map<string,any>;
							public getType(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module response {
					export module trait {
						export class TraitResponseJsonAdapter extends com.squareup.moshi.JsonAdapter<com.appcues.data.remote.response.trait.TraitResponse> {
							public static class: java.lang.Class<com.appcues.data.remote.response.trait.TraitResponseJsonAdapter>;
							public constructor(param0: com.squareup.moshi.Moshi);
							public fromJson(param0: com.squareup.moshi.JsonReader): com.appcues.data.remote.response.trait.TraitResponse;
							public toString(): string;
							public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.appcues.data.remote.response.trait.TraitResponse): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module retrofit {
					export class AppcuesService {
						public static class: java.lang.Class<com.appcues.data.remote.retrofit.AppcuesService>;
						/**
						 * Constructs a new instance of the com.appcues.data.remote.retrofit.AppcuesService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							activity(param0: string, param1: string, param2: okhttp3.RequestBody, param3: any): any;
							qualify(param0: string, param1: string, param2: java.util.UUID, param3: okhttp3.RequestBody, param4: any): any;
							experienceContent(param0: string, param1: string, param2: string, param3: any): any;
							experiencePreview(param0: string, param1: string, param2: string, param3: any): any;
							experiencePreview(param0: string, param1: string, param2: any): any;
							healthCheck(param0: any): any;
						});
						public constructor();
						public healthCheck(param0: any): any;
						public experiencePreview(param0: string, param1: string, param2: any): any;
						public qualify(param0: string, param1: string, param2: java.util.UUID, param3: okhttp3.RequestBody, param4: any): any;
						public experienceContent(param0: string, param1: string, param2: string, param3: any): any;
						public experiencePreview(param0: string, param1: string, param2: string, param3: any): any;
						public activity(param0: string, param1: string, param2: okhttp3.RequestBody, param3: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module retrofit {
					export class MetricsInterceptor {
						public static class: java.lang.Class<com.appcues.data.remote.retrofit.MetricsInterceptor>;
						public constructor();
						public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module retrofit {
					export class RetrofitAppcuesRemoteSource extends com.appcues.data.remote.AppcuesRemoteSource {
						public static class: java.lang.Class<com.appcues.data.remote.retrofit.RetrofitAppcuesRemoteSource>;
						public request(param0: any, param1: any): any;
						public postActivity(param0: string, param1: string, param2: any): any;
						public qualify(param0: string, param1: java.util.UUID, param2: string, param3: any): any;
						public getExperiencePreview(param0: string, param1: any): any;
						public getExperienceContent(param0: string, param1: any): any;
						public checkAppcuesConnection(param0: any): any;
						public constructor(param0: com.appcues.data.remote.retrofit.AppcuesService, param1: string, param2: com.appcues.Storage, param3: com.appcues.SessionMonitor);
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module data {
			export module remote {
				export module retrofit {
					export class RetrofitWrapper {
						public static class: java.lang.Class<com.appcues.data.remote.retrofit.RetrofitWrapper>;
						public static READ_TIMEOUT_SECONDS: number;
						public create(param0: any): any;
						public constructor(param0: okhttp3.HttpUrl, param1: boolean);
					}
					export module RetrofitWrapper {
						export class Companion {
							public static class: java.lang.Class<com.appcues.data.remote.retrofit.RetrofitWrapper.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module databinding {
			export class AppcuesActivityLayoutBinding {
				public static class: java.lang.Class<com.appcues.databinding.AppcuesActivityLayoutBinding>;
				public appcuesActivityComposeView: androidx.compose.ui.platform.ComposeView;
				public appcuesCustomViewContainer: globalAndroid.widget.FrameLayout;
				public getRoot(): androidx.constraintlayout.widget.ConstraintLayout;
				public static bind(param0: globalAndroid.view.View): com.appcues.databinding.AppcuesActivityLayoutBinding;
				public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.appcues.databinding.AppcuesActivityLayoutBinding;
				public static inflate(param0: globalAndroid.view.LayoutInflater): com.appcues.databinding.AppcuesActivityLayoutBinding;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module di {
			export class AppcuesKoinContext {
				public static class: java.lang.Class<com.appcues.di.AppcuesKoinContext>;
				public static INSTANCE: com.appcues.di.AppcuesKoinContext;
				public getKoin(): org.koin.core.Koin;
				public createAppcuesScope(param0: globalAndroid.content.Context, param1: com.appcues.AppcuesConfig): org.koin.core.scope.Scope;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module di {
			export class KoinScopePlugin {
				public static class: java.lang.Class<com.appcues.di.KoinScopePlugin>;
				/**
				 * Constructs a new instance of the com.appcues.di.KoinScopePlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					install(param0: org.koin.dsl.ScopeDSL): void;
				});
				public constructor();
				public install(param0: org.koin.dsl.ScopeDSL): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module logging {
			export class Logcues {
				public static class: java.lang.Class<com.appcues.logging.Logcues>;
				public info(param0: string): void;
				public error(param0: string): void;
				public error(param0: java.lang.Throwable): void;
				public constructor(param0: com.appcues.LoggingLevel);
			}
			export module Logcues {
				export class Companion {
					public static class: java.lang.Class<com.appcues.logging.Logcues.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module statemachine {
			export abstract class Action {
				public static class: java.lang.Class<com.appcues.statemachine.Action>;
			}
			export module Action {
				export class EndExperience extends com.appcues.statemachine.Action {
					public static class: java.lang.Class<com.appcues.statemachine.Action.EndExperience>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public constructor(param0: boolean, param1: boolean);
					public toString(): string;
					public getMarkComplete(): boolean;
					public copy(param0: boolean, param1: boolean): com.appcues.statemachine.Action.EndExperience;
					public getDestroyed(): boolean;
					public component1(): boolean;
					public hashCode(): number;
					public component2(): boolean;
				}
				export class Pause extends com.appcues.statemachine.Action {
					public static class: java.lang.Class<com.appcues.statemachine.Action.Pause>;
					public static INSTANCE: com.appcues.statemachine.Action.Pause;
					public static $stable: number;
				}
				export class RenderStep extends com.appcues.statemachine.Action {
					public static class: java.lang.Class<com.appcues.statemachine.Action.RenderStep>;
					public static INSTANCE: com.appcues.statemachine.Action.RenderStep;
					public static $stable: number;
				}
				export class ReportError extends com.appcues.statemachine.Action {
					public static class: java.lang.Class<com.appcues.statemachine.Action.ReportError>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public getError(): com.appcues.statemachine.Error;
					public component1(): com.appcues.statemachine.Error;
					public toString(): string;
					public copy(param0: com.appcues.statemachine.Error): com.appcues.statemachine.Action.ReportError;
					public hashCode(): number;
					public constructor(param0: com.appcues.statemachine.Error);
				}
				export class Reset extends com.appcues.statemachine.Action {
					public static class: java.lang.Class<com.appcues.statemachine.Action.Reset>;
					public static INSTANCE: com.appcues.statemachine.Action.Reset;
					public static $stable: number;
				}
				export class Resume extends com.appcues.statemachine.Action {
					public static class: java.lang.Class<com.appcues.statemachine.Action.Resume>;
					public static INSTANCE: com.appcues.statemachine.Action.Resume;
					public static $stable: number;
				}
				export class StartExperience extends com.appcues.statemachine.Action {
					public static class: java.lang.Class<com.appcues.statemachine.Action.StartExperience>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: com.appcues.data.model.Experience);
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public copy(param0: com.appcues.data.model.Experience): com.appcues.statemachine.Action.StartExperience;
					public hashCode(): number;
				}
				export class StartStep extends com.appcues.statemachine.Action {
					public static class: java.lang.Class<com.appcues.statemachine.Action.StartStep>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public getStepReference(): com.appcues.statemachine.StepReference;
					public component1(): com.appcues.statemachine.StepReference;
					public constructor(param0: com.appcues.statemachine.StepReference);
					public hashCode(): number;
					public copy(param0: com.appcues.statemachine.StepReference): com.appcues.statemachine.Action.StartStep;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module statemachine {
			export abstract class Error {
				public static class: java.lang.Class<com.appcues.statemachine.Error>;
				public getId(): java.util.UUID;
				public getMessage(): string;
			}
			export module Error {
				export class ExperienceAlreadyActive extends com.appcues.statemachine.Error {
					public static class: java.lang.Class<com.appcues.statemachine.Error.ExperienceAlreadyActive>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public getIgnoredExperience(): com.appcues.data.model.Experience;
					public toString(): string;
					public copy(param0: com.appcues.data.model.Experience, param1: string): com.appcues.statemachine.Error.ExperienceAlreadyActive;
					public component2(): string;
					public component1(): com.appcues.data.model.Experience;
					public getMessage(): string;
					public hashCode(): number;
					public constructor(param0: com.appcues.data.model.Experience, param1: string);
				}
				export class ExperienceError extends com.appcues.statemachine.Error {
					public static class: java.lang.Class<com.appcues.statemachine.Error.ExperienceError>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public component2(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public getMessage(): string;
					public copy(param0: com.appcues.data.model.Experience, param1: string): com.appcues.statemachine.Error.ExperienceError;
					public hashCode(): number;
					public constructor(param0: com.appcues.data.model.Experience, param1: string);
				}
				export class StepError extends com.appcues.statemachine.Error {
					public static class: java.lang.Class<com.appcues.statemachine.Error.StepError>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: com.appcues.data.model.Experience, param1: number, param2: string);
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public getMessage(): string;
					public component2(): number;
					public component3(): string;
					public copy(param0: com.appcues.data.model.Experience, param1: number, param2: string): com.appcues.statemachine.Error.StepError;
					public getStepIndex(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module statemachine {
			export abstract class SideEffect {
				public static class: java.lang.Class<com.appcues.statemachine.SideEffect>;
			}
			export module SideEffect {
				export class AwaitEffect extends com.appcues.statemachine.SideEffect {
					public static class: java.lang.Class<com.appcues.statemachine.SideEffect.AwaitEffect>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public component1(): kotlinx.coroutines.CompletableDeferred<com.appcues.util.ResultOf<com.appcues.statemachine.State,com.appcues.statemachine.Error>>;
					public toString(): string;
					public copy(param0: kotlinx.coroutines.CompletableDeferred<com.appcues.util.ResultOf<com.appcues.statemachine.State,com.appcues.statemachine.Error>>): com.appcues.statemachine.SideEffect.AwaitEffect;
					public hashCode(): number;
					public constructor(param0: kotlinx.coroutines.CompletableDeferred<com.appcues.util.ResultOf<com.appcues.statemachine.State,com.appcues.statemachine.Error>>);
					public getCompletion(): kotlinx.coroutines.CompletableDeferred<com.appcues.util.ResultOf<com.appcues.statemachine.State,com.appcues.statemachine.Error>>;
				}
				export class ContinuationEffect extends com.appcues.statemachine.SideEffect {
					public static class: java.lang.Class<com.appcues.statemachine.SideEffect.ContinuationEffect>;
					public static $stable: number;
					public constructor(param0: com.appcues.statemachine.Action);
					public component1(): com.appcues.statemachine.Action;
					public equals(param0: any): boolean;
					public toString(): string;
					public getAction(): com.appcues.statemachine.Action;
					public copy(param0: com.appcues.statemachine.Action): com.appcues.statemachine.SideEffect.ContinuationEffect;
					public hashCode(): number;
				}
				export class PresentContainerEffect extends com.appcues.statemachine.SideEffect {
					public static class: java.lang.Class<com.appcues.statemachine.SideEffect.PresentContainerEffect>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public constructor(param0: com.appcues.data.model.Experience, param1: number, param2: kotlinx.coroutines.CompletableDeferred<com.appcues.util.ResultOf<com.appcues.statemachine.State,com.appcues.statemachine.Error>>);
					public toString(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public copy(param0: com.appcues.data.model.Experience, param1: number, param2: kotlinx.coroutines.CompletableDeferred<com.appcues.util.ResultOf<com.appcues.statemachine.State,com.appcues.statemachine.Error>>): com.appcues.statemachine.SideEffect.PresentContainerEffect;
					public component3(): kotlinx.coroutines.CompletableDeferred<com.appcues.util.ResultOf<com.appcues.statemachine.State,com.appcues.statemachine.Error>>;
					public component2(): number;
					public hashCode(): number;
					public getContainerIndex(): number;
					public getCompletion(): kotlinx.coroutines.CompletableDeferred<com.appcues.util.ResultOf<com.appcues.statemachine.State,com.appcues.statemachine.Error>>;
				}
				export class ProcessActions extends com.appcues.statemachine.SideEffect {
					public static class: java.lang.Class<com.appcues.statemachine.SideEffect.ProcessActions>;
					public static $stable: number;
					public component1(): java.util.List<com.appcues.action.ExperienceAction>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: java.util.List<any>);
					public getActions(): java.util.List<com.appcues.action.ExperienceAction>;
					public copy(param0: java.util.List<any>): com.appcues.statemachine.SideEffect.ProcessActions;
					public hashCode(): number;
				}
				export class ReportErrorEffect extends com.appcues.statemachine.SideEffect {
					public static class: java.lang.Class<com.appcues.statemachine.SideEffect.ReportErrorEffect>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public getError(): com.appcues.statemachine.Error;
					public component1(): com.appcues.statemachine.Error;
					public toString(): string;
					public copy(param0: com.appcues.statemachine.Error): com.appcues.statemachine.SideEffect.ReportErrorEffect;
					public hashCode(): number;
					public constructor(param0: com.appcues.statemachine.Error);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module statemachine {
			export abstract class State {
				public static class: java.lang.Class<com.appcues.statemachine.State>;
				public getCurrentExperience(): com.appcues.data.model.Experience;
				public isOnLastStep(): boolean;
				public getCurrentStepIndex(): java.lang.Integer;
			}
			export module State {
				export class BeginningExperience extends com.appcues.statemachine.State {
					public static class: java.lang.Class<com.appcues.statemachine.State.BeginningExperience>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: com.appcues.data.model.Experience);
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public copy(param0: com.appcues.data.model.Experience): com.appcues.statemachine.State.BeginningExperience;
					public hashCode(): number;
				}
				export class BeginningStep extends com.appcues.statemachine.State {
					public static class: java.lang.Class<com.appcues.statemachine.State.BeginningStep>;
					public static $stable: number;
					public constructor(param0: com.appcues.data.model.Experience, param1: number, param2: boolean, param3: any);
					public isFirst(): boolean;
					public getPresentationComplete(): any;
					public equals(param0: any): boolean;
					public getFlatStepIndex(): number;
					public toString(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public component2(): number;
					public component3(): boolean;
					public component4(): any;
					public hashCode(): number;
					public copy(param0: com.appcues.data.model.Experience, param1: number, param2: boolean, param3: any): com.appcues.statemachine.State.BeginningStep;
				}
				export class EndingExperience extends com.appcues.statemachine.State {
					public static class: java.lang.Class<com.appcues.statemachine.State.EndingExperience>;
					public static $stable: number;
					public copy(param0: com.appcues.data.model.Experience, param1: number, param2: boolean): com.appcues.statemachine.State.EndingExperience;
					public equals(param0: any): boolean;
					public getFlatStepIndex(): number;
					public toString(): string;
					public getMarkComplete(): boolean;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public component2(): number;
					public component3(): boolean;
					public hashCode(): number;
					public constructor(param0: com.appcues.data.model.Experience, param1: number, param2: boolean);
				}
				export class EndingStep extends com.appcues.statemachine.State {
					public static class: java.lang.Class<com.appcues.statemachine.State.EndingStep>;
					public static $stable: number;
					public constructor(param0: com.appcues.data.model.Experience, param1: number, param2: boolean, param3: any);
					public getMarkComplete(): boolean;
					public equals(param0: any): boolean;
					public getFlatStepIndex(): number;
					public toString(): string;
					public copy(param0: com.appcues.data.model.Experience, param1: number, param2: boolean, param3: any): com.appcues.statemachine.State.EndingStep;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public getDismissAndContinue(): any;
					public component2(): number;
					public component3(): boolean;
					public component4(): any;
					public hashCode(): number;
				}
				export class Idling extends com.appcues.statemachine.State {
					public static class: java.lang.Class<com.appcues.statemachine.State.Idling>;
					public static INSTANCE: com.appcues.statemachine.State.Idling;
					public static $stable: number;
				}
				export class Paused extends com.appcues.statemachine.State {
					public static class: java.lang.Class<com.appcues.statemachine.State.Paused>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public getState(): com.appcues.statemachine.State;
					public toString(): string;
					public constructor(param0: com.appcues.statemachine.State);
					public hashCode(): number;
					public component1(): com.appcues.statemachine.State;
					public copy(param0: com.appcues.statemachine.State): com.appcues.statemachine.State.Paused;
				}
				export class RenderingStep extends com.appcues.statemachine.State {
					public static class: java.lang.Class<com.appcues.statemachine.State.RenderingStep>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public getFlatStepIndex(): number;
					public toString(): string;
					public component1(): com.appcues.data.model.Experience;
					public getExperience(): com.appcues.data.model.Experience;
					public copy(param0: com.appcues.data.model.Experience, param1: number, param2: boolean): com.appcues.statemachine.State.RenderingStep;
					public component2(): number;
					public component3(): boolean;
					public isFirst(): boolean;
					public hashCode(): number;
					public constructor(param0: com.appcues.data.model.Experience, param1: number, param2: boolean);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module statemachine {
			export class StateMachine {
				public static class: java.lang.Class<com.appcues.statemachine.StateMachine>;
				public stop(): void;
				public handleAction(param0: com.appcues.statemachine.Action, param1: any): any;
				public constructor(param0: com.appcues.AppcuesCoroutineScope, param1: com.appcues.AppcuesConfig, param2: com.appcues.action.ActionProcessor, param3: com.appcues.statemachine.State);
				public getErrorFlow(): kotlinx.coroutines.flow.SharedFlow<com.appcues.statemachine.Error>;
				public getStateFlow(): kotlinx.coroutines.flow.SharedFlow<com.appcues.statemachine.State>;
				public getState(): com.appcues.statemachine.State;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module statemachine {
			export abstract class StepReference {
				public static class: java.lang.Class<com.appcues.statemachine.StepReference>;
				public getDestination(): string;
				public getIndex(param0: com.appcues.data.model.Experience, param1: number): java.lang.Integer;
				public validateStepIndexOrNull(param0: com.appcues.data.model.Experience, param1: number): java.lang.Integer;
			}
			export module StepReference {
				export class StepGroupPageIndex extends com.appcues.statemachine.StepReference {
					public static class: java.lang.Class<com.appcues.statemachine.StepReference.StepGroupPageIndex>;
					public static $stable: number;
					public getIndex(): number;
					public equals(param0: any): boolean;
					public getFlatStepIndex(): number;
					public toString(): string;
					public getIndex(param0: com.appcues.data.model.Experience, param1: number): java.lang.Integer;
					public getDestination(): string;
					public component1(): number;
					public component2(): number;
					public hashCode(): number;
					public constructor(param0: number, param1: number);
					public copy(param0: number, param1: number): com.appcues.statemachine.StepReference.StepGroupPageIndex;
				}
				export class StepId extends com.appcues.statemachine.StepReference {
					public static class: java.lang.Class<com.appcues.statemachine.StepReference.StepId>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public component1(): java.util.UUID;
					public toString(): string;
					public getIndex(param0: com.appcues.data.model.Experience, param1: number): java.lang.Integer;
					public getDestination(): string;
					public getId(): java.util.UUID;
					public copy(param0: java.util.UUID): com.appcues.statemachine.StepReference.StepId;
					public hashCode(): number;
					public constructor(param0: java.util.UUID);
				}
				export class StepIndex extends com.appcues.statemachine.StepReference {
					public static class: java.lang.Class<com.appcues.statemachine.StepReference.StepIndex>;
					public static $stable: number;
					public getIndex(): number;
					public equals(param0: any): boolean;
					public toString(): string;
					public getIndex(param0: com.appcues.data.model.Experience, param1: number): java.lang.Integer;
					public getDestination(): string;
					public component1(): number;
					public hashCode(): number;
					public copy(param0: number): com.appcues.statemachine.StepReference.StepIndex;
					public constructor(param0: number);
				}
				export class StepOffset extends com.appcues.statemachine.StepReference {
					public static class: java.lang.Class<com.appcues.statemachine.StepReference.StepOffset>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public copy(param0: number): com.appcues.statemachine.StepReference.StepOffset;
					public toString(): string;
					public getIndex(param0: com.appcues.data.model.Experience, param1: number): java.lang.Integer;
					public getDestination(): string;
					public component1(): number;
					public getOffset(): number;
					public hashCode(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module statemachine {
			export class Transition {
				public static class: java.lang.Class<com.appcues.statemachine.Transition>;
				public getEmitStateChange(): boolean;
				public constructor(param0: com.appcues.statemachine.State, param1: com.appcues.statemachine.SideEffect, param2: boolean);
				public getSideEffect(): com.appcues.statemachine.SideEffect;
				public getState(): com.appcues.statemachine.State;
			}
			export module Transition {
				export class EmptyTransition extends com.appcues.statemachine.Transition {
					public static class: java.lang.Class<com.appcues.statemachine.Transition.EmptyTransition>;
					public static $stable: number;
					public constructor();
					public constructor(param0: com.appcues.statemachine.State, param1: com.appcues.statemachine.SideEffect, param2: boolean);
				}
				export class ErrorLoggingTransition extends com.appcues.statemachine.Transition {
					public static class: java.lang.Class<com.appcues.statemachine.Transition.ErrorLoggingTransition>;
					public static $stable: number;
					public constructor(param0: com.appcues.statemachine.State, param1: com.appcues.statemachine.SideEffect, param2: boolean);
					public constructor(param0: com.appcues.statemachine.Error);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module statemachine {
			export class Transitions {
				public static class: java.lang.Class<com.appcues.statemachine.Transitions>;
				/**
				 * Constructs a new instance of the com.appcues.statemachine.Transitions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					fromIdlingToBeginningExperience(param0: com.appcues.statemachine.State.Idling, param1: com.appcues.statemachine.Action.StartExperience): com.appcues.statemachine.Transition;
					fromBeginningExperienceToBeginningStep(param0: com.appcues.statemachine.State.BeginningExperience, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
					fromBeginningStepToRenderingStep(param0: com.appcues.statemachine.State.BeginningStep, param1: com.appcues.statemachine.Action.RenderStep): com.appcues.statemachine.Transition;
					fromRenderingStepToEndingStep(param0: com.appcues.statemachine.State.RenderingStep, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
					fromRenderingStepToEndingExperience(param0: com.appcues.statemachine.State.RenderingStep, param1: com.appcues.statemachine.Action.EndExperience, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
					fromEndingStepToEndingExperience(param0: com.appcues.statemachine.State.EndingStep, param1: com.appcues.statemachine.Action.EndExperience): com.appcues.statemachine.Transition;
					fromEndingStepToBeginningStep(param0: com.appcues.statemachine.State.EndingStep, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
					fromEndingExperienceToIdling(param0: com.appcues.statemachine.State.EndingExperience, param1: com.appcues.statemachine.Action.Reset): com.appcues.statemachine.Transition;
					<clinit>(): void;
				});
				public constructor();
				public fromIdlingToBeginningExperience(param0: com.appcues.statemachine.State.Idling, param1: com.appcues.statemachine.Action.StartExperience): com.appcues.statemachine.Transition;
				public fromRenderingStepToEndingStep(param0: com.appcues.statemachine.State.RenderingStep, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
				public fromRenderingStepToEndingExperience(param0: com.appcues.statemachine.State.RenderingStep, param1: com.appcues.statemachine.Action.EndExperience, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
				public fromBeginningExperienceToBeginningStep(param0: com.appcues.statemachine.State.BeginningExperience, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
				public fromEndingStepToEndingExperience(param0: com.appcues.statemachine.State.EndingStep, param1: com.appcues.statemachine.Action.EndExperience): com.appcues.statemachine.Transition;
				public fromEndingStepToBeginningStep(param0: com.appcues.statemachine.State.EndingStep, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
				public fromBeginningStepToRenderingStep(param0: com.appcues.statemachine.State.BeginningStep, param1: com.appcues.statemachine.Action.RenderStep): com.appcues.statemachine.Transition;
				public fromEndingExperienceToIdling(param0: com.appcues.statemachine.State.EndingExperience, param1: com.appcues.statemachine.Action.Reset): com.appcues.statemachine.Transition;
			}
			export module Transitions {
				export class Companion extends com.appcues.statemachine.Transitions {
					public static class: java.lang.Class<com.appcues.statemachine.Transitions.Companion>;
					public fromRenderingStepToEndingStep(param0: com.appcues.statemachine.State.RenderingStep, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
					public fromRenderingStepToEndingExperience(param0: com.appcues.statemachine.State.RenderingStep, param1: com.appcues.statemachine.Action.EndExperience, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
					public fromIdlingToBeginningExperience(param0: com.appcues.statemachine.State.Idling, param1: com.appcues.statemachine.Action.StartExperience): com.appcues.statemachine.Transition;
					public fromEndingStepToBeginningStep(param0: com.appcues.statemachine.State.EndingStep, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
					public fromEndingStepToEndingExperience(param0: com.appcues.statemachine.State.EndingStep, param1: com.appcues.statemachine.Action.EndExperience): com.appcues.statemachine.Transition;
					public fromBeginningStepToRenderingStep(param0: com.appcues.statemachine.State.BeginningStep, param1: com.appcues.statemachine.Action.RenderStep): com.appcues.statemachine.Transition;
					public fromEndingExperienceToIdling(param0: com.appcues.statemachine.State.EndingExperience, param1: com.appcues.statemachine.Action.Reset): com.appcues.statemachine.Transition;
					public fromBeginningExperienceToBeginningStep(param0: com.appcues.statemachine.State.BeginningExperience, param1: com.appcues.statemachine.Action.StartStep, param2: kotlinx.coroutines.CoroutineScope, param3: any): com.appcues.statemachine.Transition;
				}
				export class DefaultImpls {
					public static class: java.lang.Class<com.appcues.statemachine.Transitions.DefaultImpls>;
					public static fromEndingExperienceToIdling(param0: com.appcues.statemachine.Transitions, param1: com.appcues.statemachine.State.EndingExperience, param2: com.appcues.statemachine.Action.Reset): com.appcues.statemachine.Transition;
					public static fromEndingStepToEndingExperience(param0: com.appcues.statemachine.Transitions, param1: com.appcues.statemachine.State.EndingStep, param2: com.appcues.statemachine.Action.EndExperience): com.appcues.statemachine.Transition;
					public static fromIdlingToBeginningExperience(param0: com.appcues.statemachine.Transitions, param1: com.appcues.statemachine.State.Idling, param2: com.appcues.statemachine.Action.StartExperience): com.appcues.statemachine.Transition;
					public static fromRenderingStepToEndingStep(param0: com.appcues.statemachine.Transitions, param1: com.appcues.statemachine.State.RenderingStep, param2: com.appcues.statemachine.Action.StartStep, param3: kotlinx.coroutines.CoroutineScope, param4: any): com.appcues.statemachine.Transition;
					public static fromBeginningExperienceToBeginningStep(param0: com.appcues.statemachine.Transitions, param1: com.appcues.statemachine.State.BeginningExperience, param2: com.appcues.statemachine.Action.StartStep, param3: kotlinx.coroutines.CoroutineScope, param4: any): com.appcues.statemachine.Transition;
					public static fromBeginningStepToRenderingStep(param0: com.appcues.statemachine.Transitions, param1: com.appcues.statemachine.State.BeginningStep, param2: com.appcues.statemachine.Action.RenderStep): com.appcues.statemachine.Transition;
					public static fromRenderingStepToEndingExperience(param0: com.appcues.statemachine.Transitions, param1: com.appcues.statemachine.State.RenderingStep, param2: com.appcues.statemachine.Action.EndExperience, param3: kotlinx.coroutines.CoroutineScope, param4: any): com.appcues.statemachine.Transition;
					public static fromEndingStepToBeginningStep(param0: com.appcues.statemachine.Transitions, param1: com.appcues.statemachine.State.EndingStep, param2: com.appcues.statemachine.Action.StartStep, param3: kotlinx.coroutines.CoroutineScope, param4: any): com.appcues.statemachine.Transition;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class BackdropDecoratingTrait extends com.appcues.trait.ExperienceTrait {
				public static class: java.lang.Class<com.appcues.trait.BackdropDecoratingTrait>;
				/**
				 * Constructs a new instance of the com.appcues.trait.BackdropDecoratingTrait interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					Backdrop(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
					getConfig(): java.util.Map<string,any>;
				});
				public constructor();
				public Backdrop(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
				public getConfig(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class ContainerDecoratingTrait extends com.appcues.trait.ExperienceTrait {
				public static class: java.lang.Class<com.appcues.trait.ContainerDecoratingTrait>;
				/**
				 * Constructs a new instance of the com.appcues.trait.ContainerDecoratingTrait interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getContainerComposeOrder(): com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType;
					DecorateContainer(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
					getConfig(): java.util.Map<string,any>;
				});
				public constructor();
				public DecorateContainer(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
				public getContainerComposeOrder(): com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType;
				public getConfig(): java.util.Map<string,any>;
			}
			export module ContainerDecoratingTrait {
				export class ContainerDecoratingType {
					public static class: java.lang.Class<com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType>;
					public static UNDERLAY: com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType;
					public static OVERLAY: com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType;
					public static values(): androidNative.Array<com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType>;
					public static valueOf(param0: string): com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class ContentHolderTrait extends com.appcues.trait.ExperienceTrait {
				public static class: java.lang.Class<com.appcues.trait.ContentHolderTrait>;
				/**
				 * Constructs a new instance of the com.appcues.trait.ContentHolderTrait interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					CreateContentHolder(param0: androidx.compose.foundation.layout.BoxScope, param1: com.appcues.trait.ContentHolderTrait.ContainerPages, param2: androidx.compose.runtime.Composer, param3: number): void;
					getConfig(): java.util.Map<string,any>;
				});
				public constructor();
				public CreateContentHolder(param0: androidx.compose.foundation.layout.BoxScope, param1: com.appcues.trait.ContentHolderTrait.ContainerPages, param2: androidx.compose.runtime.Composer, param3: number): void;
				public getConfig(): java.util.Map<string,any>;
			}
			export module ContentHolderTrait {
				export class ContainerPages {
					public static class: java.lang.Class<com.appcues.trait.ContentHolderTrait.ContainerPages>;
					public static $stable: number;
					public syncPaginationData$appcues_release(): void;
					public constructor(param0: number, param1: number, param2: any);
					public setPaginationData(param0: com.appcues.ui.composables.AppcuesPaginationData): void;
					public getComposePage(): any;
					public copy(param0: number, param1: number, param2: any): com.appcues.trait.ContentHolderTrait.ContainerPages;
					public getPageCount(): number;
					public equals(param0: any): boolean;
					public toString(): string;
					public component3(): any;
					public component1(): number;
					public component2(): number;
					public getCurrentPage(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class ContentWrappingTrait extends com.appcues.trait.ExperienceTrait {
				public static class: java.lang.Class<com.appcues.trait.ContentWrappingTrait>;
				/**
				 * Constructs a new instance of the com.appcues.trait.ContentWrappingTrait interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					WrapContent(param0: any, param1: androidx.compose.runtime.Composer, param2: number): void;
					getConfig(): java.util.Map<string,any>;
				});
				public constructor();
				public WrapContent(param0: any, param1: androidx.compose.runtime.Composer, param2: number): void;
				public getConfig(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class ExperienceTrait {
				public static class: java.lang.Class<com.appcues.trait.ExperienceTrait>;
				/**
				 * Constructs a new instance of the com.appcues.trait.ExperienceTrait interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getConfig(): java.util.Map<string,any>;
				});
				public constructor();
				public getConfig(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class ExperienceTraitLevel {
				public static class: java.lang.Class<com.appcues.trait.ExperienceTraitLevel>;
				public static EXPERIENCE: com.appcues.trait.ExperienceTraitLevel;
				public static GROUP: com.appcues.trait.ExperienceTraitLevel;
				public static STEP: com.appcues.trait.ExperienceTraitLevel;
				public static values(): androidNative.Array<com.appcues.trait.ExperienceTraitLevel>;
				public static valueOf(param0: string): com.appcues.trait.ExperienceTraitLevel;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class PresentingTrait extends com.appcues.trait.ExperienceTrait {
				public static class: java.lang.Class<com.appcues.trait.PresentingTrait>;
				/**
				 * Constructs a new instance of the com.appcues.trait.PresentingTrait interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					present(): void;
					getConfig(): java.util.Map<string,any>;
				});
				public constructor();
				public present(): void;
				public getConfig(): java.util.Map<string,any>;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class StepDecoratingPadding {
				public static class: java.lang.Class<com.appcues.trait.StepDecoratingPadding>;
				public static $stable: number;
				public setBottomPadding(param0: number): void;
				public setTopPadding(param0: number): void;
				public getPaddingValues(): androidx.compose.runtime.State<androidx.compose.foundation.layout.PaddingValues>;
				public constructor(param0: androidx.compose.ui.unit.Density);
				public setStartPadding(param0: number): void;
				public setEndPadding(param0: number): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class StepDecoratingTrait extends com.appcues.trait.ExperienceTrait {
				public static class: java.lang.Class<com.appcues.trait.StepDecoratingTrait>;
				/**
				 * Constructs a new instance of the com.appcues.trait.StepDecoratingTrait interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getStepComposeOrder(): com.appcues.trait.StepDecoratingTrait.StepDecoratingType;
					DecorateStep(param0: androidx.compose.foundation.layout.BoxScope, param1: com.appcues.trait.StepDecoratingPadding, param2: androidx.compose.runtime.Composer, param3: number): void;
					getConfig(): java.util.Map<string,any>;
				});
				public constructor();
				public getStepComposeOrder(): com.appcues.trait.StepDecoratingTrait.StepDecoratingType;
				public DecorateStep(param0: androidx.compose.foundation.layout.BoxScope, param1: com.appcues.trait.StepDecoratingPadding, param2: androidx.compose.runtime.Composer, param3: number): void;
				public getConfig(): java.util.Map<string,any>;
			}
			export module StepDecoratingTrait {
				export class StepDecoratingType {
					public static class: java.lang.Class<com.appcues.trait.StepDecoratingTrait.StepDecoratingType>;
					public static UNDERLAY: com.appcues.trait.StepDecoratingTrait.StepDecoratingType;
					public static OVERLAY: com.appcues.trait.StepDecoratingTrait.StepDecoratingType;
					public static valueOf(param0: string): com.appcues.trait.StepDecoratingTrait.StepDecoratingType;
					public static values(): androidNative.Array<com.appcues.trait.StepDecoratingTrait.StepDecoratingType>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class TraitKoin extends com.appcues.di.KoinScopePlugin {
				public static class: java.lang.Class<com.appcues.trait.TraitKoin>;
				public static INSTANCE: com.appcues.trait.TraitKoin;
				public install(param0: org.koin.dsl.ScopeDSL): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export class TraitRegistry {
				public static class: java.lang.Class<com.appcues.trait.TraitRegistry>;
				public getScope(): org.koin.core.scope.Scope;
				public get(param0: string): any;
				public getKoin(): org.koin.core.Koin;
				public constructor(param0: org.koin.core.scope.Scope, param1: com.appcues.logging.Logcues);
				public closeScope(): void;
				public register(param0: string, param1: any): void;
			}
			export module TraitRegistry {
				export class AppcuesDuplicateTraitException {
					public static class: java.lang.Class<com.appcues.trait.TraitRegistry.AppcuesDuplicateTraitException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class BackdropTrait extends com.appcues.trait.BackdropDecoratingTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.BackdropTrait>;
					public static TYPE: string;
					public getConfig(): java.util.Map<string,any>;
					public Backdrop(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
					public constructor(param0: java.util.Map<string,any>);
				}
				export module BackdropTrait {
					export class Companion {
						public static class: java.lang.Class<com.appcues.trait.appcues.BackdropTrait.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class BackgroundContentTrait implements com.appcues.trait.ContainerDecoratingTrait, com.appcues.trait.StepDecoratingTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.BackgroundContentTrait>;
					public static TYPE: string;
					public getConfig(): java.util.Map<string,any>;
					public getContainerComposeOrder(): com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType;
					public constructor(param0: java.util.Map<string,any>, param1: com.appcues.trait.ExperienceTraitLevel);
					public getStepComposeOrder(): com.appcues.trait.StepDecoratingTrait.StepDecoratingType;
					public DecorateStep(param0: androidx.compose.foundation.layout.BoxScope, param1: com.appcues.trait.StepDecoratingPadding, param2: androidx.compose.runtime.Composer, param3: number): void;
					public DecorateContainer(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
				}
				export module BackgroundContentTrait {
					export class Companion {
						public static class: java.lang.Class<com.appcues.trait.appcues.BackgroundContentTrait.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class CarouselTrait extends com.appcues.trait.ContentHolderTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.CarouselTrait>;
					public static TYPE: string;
					public getConfig(): java.util.Map<string,any>;
					public CreateContentHolder(param0: androidx.compose.foundation.layout.BoxScope, param1: com.appcues.trait.ContentHolderTrait.ContainerPages, param2: androidx.compose.runtime.Composer, param3: number): void;
					public constructor(param0: java.util.Map<string,any>);
				}
				export module CarouselTrait {
					export class Companion {
						public static class: java.lang.Class<com.appcues.trait.appcues.CarouselTrait.Companion>;
					}
					export class HorizontalPagerSize {
						public static class: java.lang.Class<com.appcues.trait.appcues.CarouselTrait.HorizontalPagerSize>;
						public getHeightMap(): androidx.compose.runtime.snapshots.SnapshotStateMap<java.lang.Integer,java.lang.Integer>;
						public onHeightChanged(param0: number, param1: number): void;
						public constructor(param0: com.google.accompanist.pager.PagerState);
						public getContainerHeight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class DefaultContentHolderTrait extends com.appcues.trait.ContentHolderTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.DefaultContentHolderTrait>;
					public getConfig(): java.util.Map<string,any>;
					public CreateContentHolder(param0: androidx.compose.foundation.layout.BoxScope, param1: com.appcues.trait.ContentHolderTrait.ContainerPages, param2: androidx.compose.runtime.Composer, param3: number): void;
					public constructor(param0: java.util.Map<string,any>);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class DefaultPresentingTrait extends com.appcues.trait.PresentingTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.DefaultPresentingTrait>;
					public present(): void;
					public getConfig(): java.util.Map<string,any>;
					public constructor(param0: java.util.Map<string,any>, param1: org.koin.core.scope.Scope, param2: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class ModalTrait extends com.appcues.trait.ContentWrappingTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.ModalTrait>;
					public static TYPE: string;
					public getConfig(): java.util.Map<string,any>;
					public constructor(param0: java.util.Map<string,any>);
					public WrapContent(param0: any, param1: androidx.compose.runtime.Composer, param2: number): void;
				}
				export module ModalTrait {
					export class Companion {
						public static class: java.lang.Class<com.appcues.trait.appcues.ModalTrait.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class PagingDotsTrait extends com.appcues.trait.ContainerDecoratingTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.PagingDotsTrait>;
					public static TYPE: string;
					public getConfig(): java.util.Map<string,any>;
					public getContainerComposeOrder(): com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType;
					public constructor(param0: java.util.Map<string,any>);
					public DecorateContainer(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
				}
				export module PagingDotsTrait {
					export class Companion {
						public static class: java.lang.Class<com.appcues.trait.appcues.PagingDotsTrait.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class SkippableTrait implements com.appcues.trait.ContainerDecoratingTrait, com.appcues.trait.BackdropDecoratingTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.SkippableTrait>;
					public static TYPE: string;
					public getConfig(): java.util.Map<string,any>;
					public getContainerComposeOrder(): com.appcues.trait.ContainerDecoratingTrait.ContainerDecoratingType;
					public Backdrop(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
					public DecorateContainer(param0: androidx.compose.foundation.layout.BoxScope, param1: androidx.compose.runtime.Composer, param2: number): void;
					public constructor(param0: java.util.Map<string,any>, param1: com.appcues.ui.ExperienceRenderer, param2: com.appcues.AppcuesCoroutineScope);
				}
				export module SkippableTrait {
					export class Companion {
						public static class: java.lang.Class<com.appcues.trait.appcues.SkippableTrait.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module trait {
			export module appcues {
				export class StickyContentTrait extends com.appcues.trait.StepDecoratingTrait {
					public static class: java.lang.Class<com.appcues.trait.appcues.StickyContentTrait>;
					public static TYPE: string;
					public getConfig(): java.util.Map<string,any>;
					public getStepComposeOrder(): com.appcues.trait.StepDecoratingTrait.StepDecoratingType;
					public DecorateStep(param0: androidx.compose.foundation.layout.BoxScope, param1: com.appcues.trait.StepDecoratingPadding, param2: androidx.compose.runtime.Composer, param3: number): void;
					public constructor(param0: java.util.Map<string,any>);
				}
				export module StickyContentTrait {
					export class Companion {
						public static class: java.lang.Class<com.appcues.trait.appcues.StickyContentTrait.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export class AppcuesActivity {
				public static class: java.lang.Class<com.appcues.ui.AppcuesActivity>;
				public onBackPressed(): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onPause(): void;
				public finish(): void;
				public constructor();
			}
			export module AppcuesActivity {
				export class Companion {
					public static class: java.lang.Class<com.appcues.ui.AppcuesActivity.Companion>;
					public getIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export class AppcuesViewModel {
				public static class: java.lang.Class<com.appcues.ui.AppcuesViewModel>;
				public onBackPressed(): void;
				public constructor(param0: org.koin.core.scope.Scope);
				public onResume(): void;
				public onPause(): void;
				public closeScope(): void;
				public onFinish(): void;
				public onActions(param0: java.util.List<any>, param1: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType, param2: string): void;
				public onCleared(): void;
				public getScope(): org.koin.core.scope.Scope;
				public getKoin(): org.koin.core.Koin;
				public getUiState(): kotlinx.coroutines.flow.StateFlow<com.appcues.ui.AppcuesViewModel.UIState>;
				public onPageChanged(param0: number): void;
				public refreshPreview(): void;
			}
			export module AppcuesViewModel {
				export abstract class UIState {
					public static class: java.lang.Class<com.appcues.ui.AppcuesViewModel.UIState>;
					public static $stable: number;
				}
				export module UIState {
					export class Dismissing extends com.appcues.ui.AppcuesViewModel.UIState {
						public static class: java.lang.Class<com.appcues.ui.AppcuesViewModel.UIState.Dismissing>;
						public static $stable: number;
						public copy(param0: any): com.appcues.ui.AppcuesViewModel.UIState.Dismissing;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: any);
						public toString(): string;
						public getContinueAction(): any;
						public component1(): any;
					}
					export class Idle extends com.appcues.ui.AppcuesViewModel.UIState {
						public static class: java.lang.Class<com.appcues.ui.AppcuesViewModel.UIState.Idle>;
						public static INSTANCE: com.appcues.ui.AppcuesViewModel.UIState.Idle;
						public static $stable: number;
					}
					export class Rendering extends com.appcues.ui.AppcuesViewModel.UIState {
						public static class: java.lang.Class<com.appcues.ui.AppcuesViewModel.UIState.Rendering>;
						public static $stable: number;
						public component5(): boolean;
						public component6(): any;
						public isPreview(): boolean;
						public getPosition(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component2(): com.appcues.data.model.StepContainer;
						public component4(): number;
						public constructor(param0: java.util.UUID, param1: com.appcues.data.model.StepContainer, param2: number, param3: number, param4: boolean, param5: any);
						public toString(): string;
						public copy(param0: java.util.UUID, param1: com.appcues.data.model.StepContainer, param2: number, param3: number, param4: boolean, param5: any): com.appcues.ui.AppcuesViewModel.UIState.Rendering;
						public getStepContainer(): com.appcues.data.model.StepContainer;
						public component1(): java.util.UUID;
						public getExperienceId(): java.util.UUID;
						public getFlatStepIndex(): number;
						public getPresentationComplete(): any;
						public component3(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export class AppcuesViewModelFactory {
				public static class: java.lang.Class<com.appcues.ui.AppcuesViewModelFactory>;
				public constructor(param0: org.koin.core.scope.Scope);
				public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export class ExperienceRenderer {
				public static class: java.lang.Class<com.appcues.ui.ExperienceRenderer>;
				public show(param0: com.appcues.data.model.Experience, param1: any): any;
				public stop(): void;
				public constructor(param0: org.koin.core.scope.Scope);
				public show(param0: string, param1: any): any;
				public getScope(): org.koin.core.scope.Scope;
				public getKoin(): org.koin.core.Koin;
				public show(param0: java.util.List<com.appcues.data.model.Experience>, param1: any): any;
				public closeScope(): void;
				public preview(param0: string, param1: any): any;
				public dismissCurrentExperience(param0: boolean, param1: boolean, param2: any): any;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export class ShakeGestureListener {
				public static class: java.lang.Class<com.appcues.ui.ShakeGestureListener>;
				public stop(): void;
				public addListener(param0: boolean, param1: any): void;
				public constructor(param0: globalAndroid.content.Context);
				public start(): void;
				public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
				public clearListener(): void;
				public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
			}
			export module ShakeGestureListener {
				export class Companion {
					public static class: java.lang.Class<com.appcues.ui.ShakeGestureListener.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module composables {
				export class AppcuesActionsDelegate {
					public static class: java.lang.Class<com.appcues.ui.composables.AppcuesActionsDelegate>;
					/**
					 * Constructs a new instance of the com.appcues.ui.composables.AppcuesActionsDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActions(param0: java.util.List<any>, param1: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType, param2: string): void;
					});
					public constructor();
					public onActions(param0: java.util.List<any>, param1: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module composables {
				export class AppcuesPagination {
					public static class: java.lang.Class<com.appcues.ui.composables.AppcuesPagination>;
					public equals(param0: any): boolean;
					public constructor(param0: any);
					public toString(): string;
					public component1(): any;
					public getOnPageChanged(): any;
					public copy(param0: any): com.appcues.ui.composables.AppcuesPagination;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module composables {
				export class AppcuesPaginationData {
					public static class: java.lang.Class<com.appcues.ui.composables.AppcuesPaginationData>;
					public static $stable: number;
					public copy(param0: number, param1: number, param2: number): com.appcues.ui.composables.AppcuesPaginationData;
					public equals(param0: any): boolean;
					public toString(): string;
					public component3(): number;
					public constructor(param0: number, param1: number, param2: number);
					public component1(): number;
					public component2(): number;
					public getCurrentPage(): number;
					public getScrollOffset(): number;
					public hashCode(): number;
					public getPageCount(): number;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module composables {
				export class DefaultAppcuesActionsDelegate extends com.appcues.ui.composables.AppcuesActionsDelegate {
					public static class: java.lang.Class<com.appcues.ui.composables.DefaultAppcuesActionsDelegate>;
					public constructor(param0: com.appcues.ui.AppcuesViewModel);
					public onActions(param0: java.util.List<any>, param1: com.appcues.analytics.ExperienceLifecycleEvent.StepInteraction.InteractionType, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module composables {
				export abstract class StackScope {
					public static class: java.lang.Class<com.appcues.ui.composables.StackScope>;
					public getGreaterSize(): androidx.compose.runtime.State<java.lang.Float>;
					public updateChildSize(param0: java.util.UUID, param1: number): void;
				}
				export module StackScope {
					export class ColumnStackScope extends com.appcues.ui.composables.StackScope {
						public static class: java.lang.Class<com.appcues.ui.composables.StackScope.ColumnStackScope>;
						public static $stable: number;
						public getWidth(): java.lang.Double;
						public constructor(param0: java.lang.Double, param1: number);
					}
					export class RowStackScope extends com.appcues.ui.composables.StackScope {
						public static class: java.lang.Class<com.appcues.ui.composables.StackScope.RowStackScope>;
						public static $stable: number;
						public getHeight(): java.lang.Double;
						public constructor(param0: java.lang.Double, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module extensions {
				export class PrimitiveGestureProperties {
					public static class: java.lang.Class<com.appcues.ui.extensions.PrimitiveGestureProperties>;
					public component4(): androidx.compose.foundation.Indication;
					public component3(): androidx.compose.foundation.interaction.MutableInteractionSource;
					public getActionsDelegate(): com.appcues.ui.composables.AppcuesActionsDelegate;
					public component2(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.model.Action>>;
					public component5(): boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public getActions(): java.util.Map<java.util.UUID,java.util.List<com.appcues.data.model.Action>>;
					public getInteractionSource(): androidx.compose.foundation.interaction.MutableInteractionSource;
					public getEnabled(): boolean;
					public getIndication(): androidx.compose.foundation.Indication;
					public component1(): com.appcues.ui.composables.AppcuesActionsDelegate;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module primitive {
				export class EmbedChromeClient {
					public static class: java.lang.Class<com.appcues.ui.primitive.EmbedChromeClient>;
					public onShowCustomView(param0: globalAndroid.view.View, param1: globalAndroid.webkit.WebChromeClient.CustomViewCallback): void;
					public constructor(param0: globalAndroid.view.ViewGroup);
					public onHideCustomView(): void;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module utils {
				export class AppcuesArrangement {
					public static class: java.lang.Class<com.appcues.ui.utils.AppcuesArrangement>;
					public static INSTANCE: com.appcues.ui.utils.AppcuesArrangement;
					public spacedCenter$appcues_release(param0: number): androidx.compose.foundation.layout.Arrangement.HorizontalOrVertical;
					public spacedEvenly$appcues_release(param0: number): androidx.compose.foundation.layout.Arrangement.HorizontalOrVertical;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module utils {
				export class AppcuesAspectRatioModifier {
					public static class: java.lang.Class<com.appcues.ui.utils.AppcuesAspectRatioModifier>;
					public minIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: androidx.compose.ui.layout.IntrinsicMeasurable, param2: number): number;
					public equals(param0: any): boolean;
					public minIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: androidx.compose.ui.layout.IntrinsicMeasurable, param2: number): number;
					public toString(): string;
					public constructor(param0: number, param1: com.appcues.data.model.styling.ComponentContentMode, param2: com.appcues.ui.composables.StackScope, param3: java.lang.Float, param4: java.lang.Float);
					public maxIntrinsicHeight(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: androidx.compose.ui.layout.IntrinsicMeasurable, param2: number): number;
					public maxIntrinsicWidth(param0: androidx.compose.ui.layout.IntrinsicMeasureScope, param1: androidx.compose.ui.layout.IntrinsicMeasurable, param2: number): number;
					public hashCode(): number;
				}
				export module AppcuesAspectRatioModifier {
					export class WhenMappings {
						public static class: java.lang.Class<com.appcues.ui.utils.AppcuesAspectRatioModifier.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module utils {
				export class AppcuesWindowInfo {
					public static class: java.lang.Class<com.appcues.ui.utils.AppcuesWindowInfo>;
					public getScreenWidthType(): com.appcues.ui.utils.AppcuesWindowInfo.ScreenType;
					public getOrientation(): com.appcues.ui.utils.AppcuesWindowInfo.Orientation;
					public component2(): com.appcues.ui.utils.AppcuesWindowInfo.ScreenType;
					public component1(): com.appcues.ui.utils.AppcuesWindowInfo.ScreenType;
					public getScreenHeightType(): com.appcues.ui.utils.AppcuesWindowInfo.ScreenType;
					public equals(param0: any): boolean;
					public component6(): com.appcues.ui.utils.AppcuesWindowInfo.DeviceType;
					public toString(): string;
					public getDeviceType(): com.appcues.ui.utils.AppcuesWindowInfo.DeviceType;
					public component5(): com.appcues.ui.utils.AppcuesWindowInfo.Orientation;
					public hashCode(): number;
				}
				export module AppcuesWindowInfo {
					export class DeviceType {
						public static class: java.lang.Class<com.appcues.ui.utils.AppcuesWindowInfo.DeviceType>;
						public static MOBILE: com.appcues.ui.utils.AppcuesWindowInfo.DeviceType;
						public static TABLET: com.appcues.ui.utils.AppcuesWindowInfo.DeviceType;
						public static values(): androidNative.Array<com.appcues.ui.utils.AppcuesWindowInfo.DeviceType>;
						public static valueOf(param0: string): com.appcues.ui.utils.AppcuesWindowInfo.DeviceType;
					}
					export class Orientation {
						public static class: java.lang.Class<com.appcues.ui.utils.AppcuesWindowInfo.Orientation>;
						public static PORTRAIT: com.appcues.ui.utils.AppcuesWindowInfo.Orientation;
						public static LANDSCAPE: com.appcues.ui.utils.AppcuesWindowInfo.Orientation;
						public static values(): androidNative.Array<com.appcues.ui.utils.AppcuesWindowInfo.Orientation>;
						public static valueOf(param0: string): com.appcues.ui.utils.AppcuesWindowInfo.Orientation;
					}
					export class ScreenType {
						public static class: java.lang.Class<com.appcues.ui.utils.AppcuesWindowInfo.ScreenType>;
						public static COMPACT: com.appcues.ui.utils.AppcuesWindowInfo.ScreenType;
						public static MEDIUM: com.appcues.ui.utils.AppcuesWindowInfo.ScreenType;
						public static EXPANDED: com.appcues.ui.utils.AppcuesWindowInfo.ScreenType;
						public static valueOf(param0: string): com.appcues.ui.utils.AppcuesWindowInfo.ScreenType;
						public static values(): androidNative.Array<com.appcues.ui.utils.AppcuesWindowInfo.ScreenType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module utils {
				export class BlurHashDecoder {
					public static class: java.lang.Class<com.appcues.ui.utils.BlurHashDecoder>;
					public static INSTANCE: com.appcues.ui.utils.BlurHashDecoder;
					public clearCache(): void;
					public decode(param0: string, param1: number, param2: number, param3: number, param4: boolean): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module ui {
			export module utils {
				export class MarginValuesModifier {
					public static class: java.lang.Class<com.appcues.ui.utils.MarginValuesModifier>;
					public equals(param0: any): boolean;
					public constructor(param0: androidx.compose.foundation.layout.PaddingValues, param1: any);
					public getPaddingValues(): androidx.compose.foundation.layout.PaddingValues;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module appcues {
		export module util {
			export class ContextResources {
				public static class: java.lang.Class<com.appcues.util.ContextResources>;
				public getDeviceName(): string;
				public getAppVersion(): string;
				public getString(param0: number): string;
				public getAppBuild(): number;
				public getAppName(): string;
				public constructor(param0: globalAndroid.content.Context);
				public getLanguage(): string;
				public getPackageName(): string;
				public getString(param0: number, param1: androidNative.Array<any>): string;
				public getUserAgent(param0: any): any;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module util {
			export class LinkOpener {
				public static class: java.lang.Class<com.appcues.util.LinkOpener>;
				public constructor(param0: globalAndroid.content.Context);
				public startNewIntent(param0: globalAndroid.net.Uri): void;
				public openCustomTabs(param0: globalAndroid.net.Uri): void;
			}
		}
	}
}

declare module com {
	export module appcues {
		export module util {
			export abstract class ResultOf<Success, Failure>  extends java.lang.Object {
				public static class: java.lang.Class<com.appcues.util.ResultOf<any,any>>;
			}
			export module ResultOf {
				export class Failure<Failure>  extends com.appcues.util.ResultOf<any,any> {
					public static class: java.lang.Class<com.appcues.util.ResultOf.Failure<any>>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public copy(param0: any): com.appcues.util.ResultOf.Failure<any>;
					public toString(): string;
					public component1(): any;
					public constructor(param0: any);
					public hashCode(): number;
					public getReason(): any;
				}
				export class Success<Success>  extends com.appcues.util.ResultOf<any,any> {
					public static class: java.lang.Class<com.appcues.util.ResultOf.Success<any>>;
					public static $stable: number;
					public equals(param0: any): boolean;
					public getValue(): any;
					public copy(param0: any): com.appcues.util.ResultOf.Success<any>;
					public toString(): string;
					public component1(): any;
					public constructor(param0: any);
					public hashCode(): number;
				}
			}
		}
	}
}

//Generics information:
//com.appcues.util.ResultOf:2
//com.appcues.util.ResultOf.Failure:1
//com.appcues.util.ResultOf.Success:1

