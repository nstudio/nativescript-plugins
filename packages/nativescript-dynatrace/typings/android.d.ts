declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class ActionThreadLocal {
					public static class: java.lang.Class<com.dynatrace.android.agent.ActionThreadLocal>;
					public static getCurrentAction(): com.dynatrace.android.agent.DTXActionImpl;
					public constructor();
					public static closeAll(): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class AdkSettings {
					public static class: java.lang.Class<com.dynatrace.android.agent.AdkSettings>;
					public static TECHNOLOGY_TYPE: string;
					public static PLATFORM_TYPE_MOBILE: string;
					public static GLOBAL_CHAR_LIMIT: number;
					public static SELF_MONITORING_PAYLOAD_CHAR_LIMIT: number;
					public static appIdEncoded: string;
					public static applName: string;
					public static applIdentifier: string;
					public newVisitorSentPending: java.util.concurrent.atomic.AtomicBoolean;
					public newVisitorSent: java.util.concurrent.atomic.AtomicBoolean;
					public serverId: number;
					public preferencesManager: com.dynatrace.android.agent.conf.PreferencesManager;
					public static getInstance(): com.dynatrace.android.agent.AdkSettings;
					public getSessionSplitConfiguration(): com.dynatrace.android.agent.conf.SessionSplitConfiguration;
					public setup(param0: com.dynatrace.android.agent.conf.Configuration, param1: globalAndroid.content.Context): void;
					public switchServerConfiguration(param0: com.dynatrace.android.agent.conf.ServerConfiguration): void;
					public getContext(): globalAndroid.content.Context;
					public setNewVisitorSent(param0: boolean): void;
					public getConfiguration(): com.dynatrace.android.agent.conf.Configuration;
					public getServerConfiguration(): com.dynatrace.android.agent.conf.ServerConfiguration;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class AgentStateListener {
					public static class: java.lang.Class<com.dynatrace.android.agent.AgentStateListener>;
					/**
					 * Constructs a new instance of the com.dynatrace.android.agent.AgentStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onNewSessionStarted(param0: com.dynatrace.android.agent.data.Session, param1: number): void; onSessionDiscarded(param0: com.dynatrace.android.agent.data.Session): void; onServerConfigurationChanged(param0: com.dynatrace.android.agent.conf.ServerConfiguration): void; onServerIdForceChanged(param0: number): void });
					public constructor();
					public onServerConfigurationChanged(param0: com.dynatrace.android.agent.conf.ServerConfiguration): void;
					public onServerIdForceChanged(param0: number): void;
					public onNewSessionStarted(param0: com.dynatrace.android.agent.data.Session, param1: number): void;
					public onSessionDiscarded(param0: com.dynatrace.android.agent.data.Session): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class AgentUtil {
					public static class: java.lang.Class<com.dynatrace.android.agent.AgentUtil>;
					public static getRequestTag(): com.dynatrace.android.agent.WebReqTag;
					public static internalTagRequest(param0: com.dynatrace.android.agent.DTXActionImpl, param1: java.net.HttpURLConnection): com.dynatrace.android.agent.WebReqTag;
					public static internalTagRequest(param0: com.dynatrace.android.agent.DTXActionImpl): com.dynatrace.android.agent.WebReqTag;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class ApacheUtil {
					public static class: java.lang.Class<com.dynatrace.android.agent.ApacheUtil>;
					public constructor();
					public static tagRequest(param0: com.dynatrace.android.agent.DTXActionImpl, param1: org.apache.http.HttpRequest): com.dynatrace.android.agent.WebReqTag;
					public static tagRequest(param0: org.apache.http.HttpRequest): com.dynatrace.android.agent.WebReqTag;
					public static fetchWebReqTag(param0: org.apache.http.HttpRequest): string;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class AppFgBgStateListener extends com.dynatrace.android.agent.intf.AppStateListener {
					public static class: java.lang.Class<com.dynatrace.android.agent.AppFgBgStateListener>;
					public constructor();
					public onAppGoesBg(): void;
					public onAppGoesFg(): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class BasicSegment {
					public static class: java.lang.Class<com.dynatrace.android.agent.BasicSegment>;
					public mobuApplVersionName: string;
					public mobpApplVersionCode: number;
					public metrics: com.dynatrace.android.agent.metrics.AndroidMetrics;
					public mockDeviceLocation: string;
					public mtsOcUpdt: java.lang.Long;
					public static addNewVisitorInfoToDataChunk(param0: com.dynatrace.android.agent.comm.MonitoringDataPacket): boolean;
					public setGpsLocation(param0: globalAndroid.location.Location): void;
					public constructor(param0: boolean);
					public update(param0: boolean): void;
					public createEventData(param0: com.dynatrace.android.agent.data.Session, param1: boolean): java.lang.StringBuilder;
				}
				export module BasicSegment {
					export class UpdatableDataGenerator {
						public static class: java.lang.Class<com.dynatrace.android.agent.BasicSegment.UpdatableDataGenerator>;
						public constructor();
						public generateUpdatableData(param0: number, param1: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class CalloutTable {
					public static class: java.lang.Class<com.dynatrace.android.agent.CalloutTable>;
					public removeActionSendEvent(param0: com.dynatrace.android.agent.CustomSegment): boolean;
					public toString(): string;
					public addPendingItem(param0: com.dynatrace.android.agent.CustomSegment): void;
					public addOtherEvent(): void;
					public changeSendEventTimeout(param0: number): void;
					public removePendingItems(): java.util.Vector<com.dynatrace.android.agent.CalloutTable.PendingItem>;
					public addActionEvent(param0: com.dynatrace.android.agent.CustomSegment): void;
					public isItTimeToSend(): boolean;
					public constructor(param0: number);
					public purge(): void;
				}
				export module CalloutTable {
					export class CTElement {
						public static class: java.lang.Class<com.dynatrace.android.agent.CalloutTable.CTElement>;
						public constructor(param0: com.dynatrace.android.agent.CalloutTable, param1: com.dynatrace.android.agent.CustomSegment, param2: number);
					}
					export class PendingItem {
						public static class: java.lang.Class<com.dynatrace.android.agent.CalloutTable.PendingItem>;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class CommunicationManager {
					public static class: java.lang.Class<com.dynatrace.android.agent.CommunicationManager>;
					public dao: com.dynatrace.android.agent.db.DataAccessObject;
					public flushEvents(): void;
					public setAgentStateListener(param0: com.dynatrace.android.agent.AgentStateListener): void;
					public shutdown(param0: number): void;
					public stopTimerLoop(): void;
				}
				export module CommunicationManager {
					export class DataSendTimerTask {
						public static class: java.lang.Class<com.dynatrace.android.agent.CommunicationManager.DataSendTimerTask>;
						public run(): void;
					}
					export class EventSenderThread {
						public static class: java.lang.Class<com.dynatrace.android.agent.CommunicationManager.EventSenderThread>;
						public run(): void;
					}
					export class PostCrashReportThread {
						public static class: java.lang.Class<com.dynatrace.android.agent.CommunicationManager.PostCrashReportThread>;
						public run(): void;
					}
					export class SendState {
						public static class: java.lang.Class<com.dynatrace.android.agent.CommunicationManager.SendState>;
						public static NO_DATA: com.dynatrace.android.agent.CommunicationManager.SendState;
						public static DATA_NOT_SENT: com.dynatrace.android.agent.CommunicationManager.SendState;
						public static MORE_DATA_AVAILABLE: com.dynatrace.android.agent.CommunicationManager.SendState;
						public static FINISHED: com.dynatrace.android.agent.CommunicationManager.SendState;
						public static values(): native.Array<com.dynatrace.android.agent.CommunicationManager.SendState>;
						public static valueOf(param0: string): com.dynatrace.android.agent.CommunicationManager.SendState;
					}
					export class WriteLock {
						public static class: java.lang.Class<com.dynatrace.android.agent.CommunicationManager.WriteLock>;
						public available(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class ConnectionAttemptMonitor {
					public static class: java.lang.Class<com.dynatrace.android.agent.ConnectionAttemptMonitor>;
					public restartTimer(): void;
					public stop(): void;
					public notifyConnectionState(param0: boolean, param1: boolean): void;
					public notifyStateTooManyRequests(param0: number): void;
				}
				export module ConnectionAttemptMonitor {
					export class AttemptTimer {
						public static class: java.lang.Class<com.dynatrace.android.agent.ConnectionAttemptMonitor.AttemptTimer>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class Core {
					public static class: java.lang.Class<com.dynatrace.android.agent.Core>;
					public static DEFAULT_PURGE_DATA_TIMEOUT_MS: number;
					public static dao: com.dynatrace.android.agent.db.DataAccessObject;
					public static saveSegment(param0: com.dynatrace.android.agent.CustomSegment): void;
					public static modifyUserAction(param0: com.dynatrace.android.agent.UserActionModifier): void;
					public static startNewSession(param0: boolean, param1: com.dynatrace.android.agent.conf.PrivacyRules): void;
					public constructor();
					public static removeFromCalloutTable(param0: com.dynatrace.android.agent.CustomSegment): void;
					public static setAgentStateListener(param0: com.dynatrace.android.agent.AgentStateListener): void;
					public static startNewSession(param0: com.dynatrace.android.agent.data.Session, param1: boolean): void;
					public static endVisit(): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class CrashReporter extends com.dynatrace.android.agent.crash.CrashListener {
					public static class: java.lang.Class<com.dynatrace.android.agent.CrashReporter>;
					public communicationManager: com.dynatrace.android.agent.CommunicationManager;
					public notifyCustomCrash(param0: string, param1: string, param2: string, param3: string): void;
					public findWrapCrashEvent(): com.dynatrace.android.agent.DTXActionImpl;
					public static hasCrashed(): boolean;
					public constructor(param0: com.dynatrace.android.agent.CommunicationManager);
					public reportCrash(param0: java.lang.Thread, param1: java.lang.Throwable, param2: boolean, param3: com.dynatrace.android.agent.DTXActionImpl, param4: com.dynatrace.android.agent.data.Session, param5: number): void;
					public notifyJavaCrash(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class CrashSegment extends com.dynatrace.android.agent.ErrorSegment {
					public static class: java.lang.Class<com.dynatrace.android.agent.CrashSegment>;
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: string, param4: string, param5: string, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number, param9: string);
					public createEventData(): java.lang.StringBuilder;
					public constructor(param0: string, param1: string, param2: string, param3: number, param4: com.dynatrace.android.agent.data.Session, param5: number, param6: string);
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: com.dynatrace.android.agent.data.Session, param5: number);
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: com.dynatrace.android.agent.data.Session, param6: number, param7: string);
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: number, param5: number, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number);
				}
				export module CrashSegment {
					export class CrashSegmentModifier {
						public static class: java.lang.Class<com.dynatrace.android.agent.CrashSegment.CrashSegmentModifier>;
						public constructor();
						public convertToStandaloneCrash(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class CustomSegment extends com.dynatrace.android.agent.Segment {
					public static class: java.lang.Class<com.dynatrace.android.agent.CustomSegment>;
					public mValue: string;
					public mEventStartTime: number;
					public mEventEndTime: number;
					public mParentTagId: number;
					public mFinalized: boolean;
					public enabled: boolean;
					public lcSeqNum: number;
					public session: com.dynatrace.android.agent.data.Session;
					public serverId: number;
					public eventType: com.dynatrace.android.agent.EventType;
					public getType(): number;
					public getSessionRunningTime(): number;
					public getOverrideEndTime(): number;
					public getEventType(): com.dynatrace.android.agent.EventType;
					public disable(): void;
					public setParentTagId(param0: number): void;
					public getStartTime(): number;
					public getServerId(): number;
					public isEnabled(): boolean;
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: com.dynatrace.android.agent.data.Session, param5: number);
					public getEndTime(): number;
					public updateEndTime(): void;
					public setStartTime(param0: number): void;
					public nameMissing(): boolean;
					public createEventData(): java.lang.StringBuilder;
					public getLcSeqNum(): number;
					public setName(param0: string): void;
					public isFinalized(): boolean;
					public getParentTagId(): number;
					public getName(): string;
					public appendOptionalValue(param0: java.lang.StringBuilder, param1: string, param2: string): void;
					public getTagId(): number;
					public updateEndTime(param0: number): void;
					public setLcSeqNum(param0: number): void;
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: number, param5: number, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number);
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class DTXAction {
					public static class: java.lang.Class<com.dynatrace.android.agent.DTXAction>;
					/**
					 * Constructs a new instance of the com.dynatrace.android.agent.DTXAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { leaveAction(): void; reportEvent(param0: string): void; reportValue(param0: string, param1: number): void; reportValue(param0: string, param1: number): void; reportValue(param0: string, param1: number): void; reportValue(param0: string, param1: string): void; reportError(param0: string, param1: number): void; reportError(param0: string, param1: java.lang.Throwable): void; tagRequest(param0: java.net.HttpURLConnection): void; getRequestTagHeader(): string; getRequestTag(): string });
					public constructor();
					public reportError(param0: string, param1: number): void;
					public getRequestTagHeader(): string;
					public reportValue(param0: string, param1: number): void;
					public getRequestTag(): string;
					public reportError(param0: string, param1: java.lang.Throwable): void;
					public reportValue(param0: string, param1: string): void;
					public tagRequest(param0: java.net.HttpURLConnection): void;
					public reportEvent(param0: string): void;
					public leaveAction(): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class DTXActionImpl extends com.dynatrace.android.agent.CustomSegment implements com.dynatrace.android.agent.DTXAction {
					public static class: java.lang.Class<com.dynatrace.android.agent.DTXActionImpl>;
					public static globalLastActionEndTime: java.util.concurrent.atomic.AtomicLong;
					public endActionSequenceNum: number;
					public childEventVector: java.util.Vector<com.dynatrace.android.agent.CustomSegment>;
					public parentAction: com.dynatrace.android.agent.DTXActionImpl;
					public viewDuration: number;
					public viewAtStart: string;
					public viewAtEnd: string;
					public reportError(param0: string, param1: number): void;
					public getRequestTagHeader(): string;
					public reportValue(param0: string, param1: number): void;
					public tagRequest(): string;
					public discardAction(): void;
					public getPreconditions(): boolean;
					public getChildEventVector(): java.util.Vector<com.dynatrace.android.agent.CustomSegment>;
					public leaveAction(param0: boolean): void;
					public reportValue(param0: string, param1: string): void;
					public addViewDurationData(param0: java.lang.StringBuilder, param1: native.Array<string>): void;
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: com.dynatrace.android.agent.data.Session, param5: number);
					public getInternalRequestTag(): com.dynatrace.android.agent.WebReqTag;
					public leaveAction(): void;
					public getRequestTag(): string;
					public createEventData(): java.lang.StringBuilder;
					/** @deprecated */
					public adoptOrphans(): void;
					public constructor(param0: string, param1: com.dynatrace.android.agent.EventType, param2: number, param3: com.dynatrace.android.agent.data.Session, param4: number);
					public tagRequest(param0: java.net.HttpURLConnection): void;
					public getParentAction(): com.dynatrace.android.agent.DTXActionImpl;
					public reportError(param0: string, param1: java.lang.Throwable): void;
					public reportEvent(param0: string): void;
					public leaveInnerActions(): void;
					public static createAction(param0: string, param1: com.dynatrace.android.agent.DTXAction): com.dynatrace.android.agent.DTXAction;
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: number, param5: number, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number);
					public removeChildEvent(param0: string): void;
					public notifyChildAdded(param0: com.dynatrace.android.agent.CustomSegment): void;
				}
				export module DTXActionImpl {
					export class ActionLeaveNotification {
						public static class: java.lang.Class<com.dynatrace.android.agent.DTXActionImpl.ActionLeaveNotification>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class DTXAutoAction extends com.dynatrace.android.agent.DTXActionImpl implements com.dynatrace.android.agent.intf.DTXActionListener {
					public static class: java.lang.Class<com.dynatrace.android.agent.DTXAutoAction>;
					public reportError(param0: string, param1: number): void;
					public getRequestTagHeader(): string;
					public static createAutoAction(param0: string, param1: com.dynatrace.android.agent.data.Session, param2: number, param3: number): com.dynatrace.android.agent.DTXAutoAction;
					public tagRequest(): string;
					public reportValue(param0: string, param1: number): void;
					public getOverrideEndTime(): number;
					public static createAutoAction(param0: string, param1: com.dynatrace.android.agent.data.Session, param2: number): com.dynatrace.android.agent.DTXAutoAction;
					public discardAction(): void;
					public static closeAll(): void;
					public getPreconditions(): boolean;
					public isGraceTimeOver(): boolean;
					public startTimer(): void;
					public startTimerIfNeeded(): void;
					public leaveAction(param0: boolean): void;
					public reportValue(param0: string, param1: string): void;
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: com.dynatrace.android.agent.data.Session, param5: number);
					public getInternalRequestTag(): com.dynatrace.android.agent.WebReqTag;
					public leaveAction(): void;
					public onLeaveAction(param0: com.dynatrace.android.agent.DTXActionImpl): void;
					public getRequestTag(): string;
					public createEventData(): java.lang.StringBuilder;
					public static getAutoAction(): com.dynatrace.android.agent.DTXAutoAction;
					public cancelTimer(): void;
					public constructor(param0: string, param1: com.dynatrace.android.agent.EventType, param2: number, param3: com.dynatrace.android.agent.data.Session, param4: number);
					public tagRequest(param0: java.net.HttpURLConnection): void;
					public static setAutoInstrProperties(param0: com.dynatrace.android.agent.conf.Configuration): void;
					public startTimer(param0: number): void;
					public markOverrideEndTime(): void;
					public onWrFinished(param0: number): number;
					public reportError(param0: string, param1: java.lang.Throwable): void;
					public reportEvent(param0: string): void;
					public constructor(param0: string, param1: com.dynatrace.android.agent.data.Session, param2: number);
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: number, param5: number, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number);
					public notifyChildAdded(param0: com.dynatrace.android.agent.CustomSegment): void;
					public removeChildEvent(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class Dynatrace {
					public static class: java.lang.Class<com.dynatrace.android.agent.Dynatrace>;
					/** @deprecated */
					public static isCrashReportingOptedIn(): boolean;
					public static identifyUser(param0: string, param1: com.dynatrace.android.agent.DTXAction): void;
					public static getWebRequestTiming(param0: string): com.dynatrace.android.agent.WebRequestTiming;
					public static reportError(param0: string, param1: number): void;
					/** @deprecated */
					public static setDataCollectionLevel(param0: com.dynatrace.android.agent.conf.DataCollectionLevel): void;
					public static reportError(param0: string, param1: java.lang.Throwable): void;
					public static setBeaconHeaders(param0: java.util.Map<string, string>): void;
					public static modifyUserAction(param0: com.dynatrace.android.agent.UserActionModifier): void;
					public constructor();
					public static pause(): void;
					public static flushEvents(): void;
					public static enterAction(param0: string): com.dynatrace.android.agent.DTXAction;
					/** @deprecated */
					public static setCrashReportingOptedIn(param0: boolean): void;
					public static shutdown(): void;
					public static setGpsLocation(param0: globalAndroid.location.Location): void;
					/** @deprecated */
					public static getDataCollectionLevel(): com.dynatrace.android.agent.conf.DataCollectionLevel;
					public static getCaptureStatus(): boolean;
					public static enterAction(param0: string, param1: com.dynatrace.android.agent.DTXAction): com.dynatrace.android.agent.DTXAction;
					public static getWebRequestTiming(param0: java.net.HttpURLConnection): com.dynatrace.android.agent.WebRequestTiming;
					public static applyUserPrivacyOptions(param0: com.dynatrace.android.agent.conf.UserPrivacyOptions): void;
					public static getRequestTag(): string;
					public static getUserPrivacyOptions(): com.dynatrace.android.agent.conf.UserPrivacyOptions;
					public static endVisit(): void;
					public static getRequestTagHeader(): string;
					public static resume(): void;
					public static tagRequest(param0: java.net.HttpURLConnection): void;
					public static instrumentWebView(param0: globalAndroid.webkit.WebView): void;
					public static startup(param0: globalAndroid.content.Context, param1: com.dynatrace.android.agent.conf.Configuration): void;
					public static restoreCookies(): void;
					public static identifyUser(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class ErrorSegment extends com.dynatrace.android.agent.CustomSegment {
					public static class: java.lang.Class<com.dynatrace.android.agent.ErrorSegment>;
					public exceptionName: string;
					public reason: string;
					public stacktrace: string;
					public platformType: string;
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: string, param4: string, param5: string, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number, param9: string);
					public createEventData(): java.lang.StringBuilder;
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: com.dynatrace.android.agent.data.Session, param5: number);
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: com.dynatrace.android.agent.data.Session, param6: number, param7: string);
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: number, param5: number, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number);
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class EventType {
					public static class: java.lang.Class<com.dynatrace.android.agent.EventType>;
					public static ACTION_MANUAL: com.dynatrace.android.agent.EventType;
					public static ACTION_AUTO: com.dynatrace.android.agent.EventType;
					public static ACTION_AUTO_LOADING_APP: com.dynatrace.android.agent.EventType;
					public static NAMED_EVENT: com.dynatrace.android.agent.EventType;
					public static VALUE_STRING: com.dynatrace.android.agent.EventType;
					public static VALUE_INT64: com.dynatrace.android.agent.EventType;
					public static VALUE_DOUBLE: com.dynatrace.android.agent.EventType;
					public static VISIT_END: com.dynatrace.android.agent.EventType;
					public static APP_START: com.dynatrace.android.agent.EventType;
					public static DISPLAY: com.dynatrace.android.agent.EventType;
					public static REDISPLAY: com.dynatrace.android.agent.EventType;
					public static WEB_REQUEST: com.dynatrace.android.agent.EventType;
					public static ERROR_INT: com.dynatrace.android.agent.EventType;
					public static ERROR_EXCEPTION: com.dynatrace.android.agent.EventType;
					public static CRASH: com.dynatrace.android.agent.EventType;
					public static IDENTIFY_USER: com.dynatrace.android.agent.EventType;
					public static SELF_MONITORING_EVENT: com.dynatrace.android.agent.EventType;
					public static PLACEHOLDER: com.dynatrace.android.agent.EventType;
					public static values(): native.Array<com.dynatrace.android.agent.EventType>;
					public static valueOf(param0: string): com.dynatrace.android.agent.EventType;
					public getDataCollectionLevel(): com.dynatrace.android.agent.conf.DataCollectionLevel;
					public getProtocolId(): number;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class ExposedUserAction extends com.dynatrace.android.agent.ModifiableUserAction {
					public static class: java.lang.Class<com.dynatrace.android.agent.ExposedUserAction>;
					public reportError(param0: string, param1: number): void;
					public setActionName(param0: string): void;
					public reportValue(param0: string, param1: number): void;
					public getActionName(): string;
					public reportError(param0: string, param1: java.lang.Throwable): void;
					public reportValue(param0: string, param1: string): void;
					public reportEvent(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class Global {
					public static class: java.lang.Class<com.dynatrace.android.agent.Global>;
					public static CHAR_SET_NAME: string;
					public static EQUAL: string;
					public static EMPTY_STRING: string;
					public static COLON: string;
					public static QUESTION: string;
					public static NEWLINE: string;
					public static BLANK: string;
					public static AMPERSAND: string;
					public static SEMICOLON: string;
					public static UNDERSCORE: string;
					public static UNDERSCORE_ENCODED: string;
					public static HYPHEN: string;
					public static UNKNOWN: string;
					public static DB_ERROR: string;
					public static REQUIRED_PERMISSIONS: native.Array<string>;
					public static LOG_PREFIX: string;
					public static DEBUG: boolean;
					public static LOADING: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class JavascriptAgentInterface {
					public static class: java.lang.Class<com.dynatrace.android.agent.JavascriptAgentInterface>;
					public constructor();
					public incrementActionCount(): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class LcAction extends com.dynatrace.android.agent.DTXActionImpl {
					public static class: java.lang.Class<com.dynatrace.android.agent.LcAction>;
					public static createAction(param0: string, param1: com.dynatrace.android.agent.EventType, param2: com.dynatrace.android.agent.DTXAutoAction): com.dynatrace.android.agent.LcAction;
					public reportError(param0: string, param1: number): void;
					public setActivityName(param0: string): void;
					public getRequestTagHeader(): string;
					public reportValue(param0: string, param1: number): void;
					public tagRequest(): string;
					public createEventData(): java.lang.StringBuilder;
					public getRequestTag(): string;
					public tagRequest(param0: java.net.HttpURLConnection): void;
					public getPreconditions(): boolean;
					public leaveAction(param0: boolean): void;
					public reportError(param0: string, param1: java.lang.Throwable): void;
					public addChildEvent(param0: string): void;
					public reportValue(param0: string, param1: string): void;
					public reportEvent(param0: string): void;
					public static createAction(param0: string, param1: com.dynatrace.android.agent.DTXAction): com.dynatrace.android.agent.DTXAction;
					public leaveAction(): void;
					public getOnPostResumeSequenceNumber(): number;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class ModifiableUserAction {
					public static class: java.lang.Class<com.dynatrace.android.agent.ModifiableUserAction>;
					/**
					 * Constructs a new instance of the com.dynatrace.android.agent.ModifiableUserAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getActionName(): string; setActionName(param0: string): void; reportEvent(param0: string): void; reportValue(param0: string, param1: number): void; reportValue(param0: string, param1: number): void; reportValue(param0: string, param1: number): void; reportValue(param0: string, param1: string): void; reportError(param0: string, param1: number): void; reportError(param0: string, param1: java.lang.Throwable): void });
					public constructor();
					public reportError(param0: string, param1: number): void;
					public setActionName(param0: string): void;
					public reportValue(param0: string, param1: number): void;
					public getActionName(): string;
					public reportError(param0: string, param1: java.lang.Throwable): void;
					public reportValue(param0: string, param1: string): void;
					public reportEvent(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class RootDetector {
					public static class: java.lang.Class<com.dynatrace.android.agent.RootDetector>;
					public static isDeviceRooted(): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class Segment {
					public static class: java.lang.Class<com.dynatrace.android.agent.Segment>;
					/**
					 * Constructs a new instance of the com.dynatrace.android.agent.Segment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { createEventData(): java.lang.StringBuilder });
					public constructor();
					public createEventData(): java.lang.StringBuilder;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class SegmentConstants {
					public static class: java.lang.Class<com.dynatrace.android.agent.SegmentConstants>;
					public static DELIMITER: string;
					public static ASSIGN: string;
					public static B_TV: string;
					public static B_TX: string;
					public static B_MP: string;
					public static NU_POST_SIZE: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class SelfMonitoring {
					public static class: java.lang.Class<com.dynatrace.android.agent.SelfMonitoring>;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class TimeLineProvider {
					public static class: java.lang.Class<com.dynatrace.android.agent.TimeLineProvider>;
					public constructor();
					public now(): number;
					public constructor(param0: number);
					public static getSystemTime(): number;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class UserActionModifier {
					public static class: java.lang.Class<com.dynatrace.android.agent.UserActionModifier>;
					/**
					 * Constructs a new instance of the com.dynatrace.android.agent.UserActionModifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { modify(param0: com.dynatrace.android.agent.ModifiableUserAction): void });
					public constructor();
					public modify(param0: com.dynatrace.android.agent.ModifiableUserAction): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class Version {
					public static class: java.lang.Class<com.dynatrace.android.agent.Version>;
					public static getMajor(): number;
					public static getFullVersion(): string;
					public constructor();
					public static getRevision(): number;
					public static getVersion(): string;
					public static getBuildNumber(): number;
					public static getMinor(): number;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class VisitSegment extends com.dynatrace.android.agent.CustomSegment {
					public static class: java.lang.Class<com.dynatrace.android.agent.VisitSegment>;
					public createEventData(): java.lang.StringBuilder;
					public constructor(param0: com.dynatrace.android.agent.data.Session, param1: number);
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: com.dynatrace.android.agent.data.Session, param5: number);
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: number, param5: number, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number);
					public static createVisitSegment(param0: com.dynatrace.android.agent.data.Session, param1: number): com.dynatrace.android.agent.VisitSegment;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class WebReqSegment extends com.dynatrace.android.agent.CustomSegment {
					public static class: java.lang.Class<com.dynatrace.android.agent.WebReqSegment>;
					public respPhrase: string;
					public respCode: number;
					public createEventData(): java.lang.StringBuilder;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: string, param7: number, param8: number, param9: com.dynatrace.android.agent.data.Session, param10: number);
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: com.dynatrace.android.agent.data.Session, param5: number);
					public constructor(param0: string, param1: number, param2: com.dynatrace.android.agent.EventType, param3: number, param4: number, param5: number, param6: number, param7: com.dynatrace.android.agent.data.Session, param8: number);
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class WebReqTag {
					public static class: java.lang.Class<com.dynatrace.android.agent.WebReqTag>;
					public getSeqNumber(): number;
					public static getTagPrefix(): string;
					public static tagToString(param0: com.dynatrace.android.agent.WebReqTag): string;
					public static parseTag(param0: string, param1: com.dynatrace.android.agent.data.Session): com.dynatrace.android.agent.WebReqTag;
					public constructor(param0: number, param1: number, param2: com.dynatrace.android.agent.data.Session);
					public toString(): string;
					public getParentTagId(): number;
					public constructor(param0: number, param1: com.dynatrace.android.agent.data.Session, param2: string, param3: number, param4: number, param5: number);
					public sameAs(param0: string): boolean;
					public getSession(): com.dynatrace.android.agent.data.Session;
					public getServerId(): number;
					public sameAs(param0: com.dynatrace.android.agent.WebReqTag): boolean;
					public static fetchWebReqTag(param0: java.net.URLConnection): string;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export class WebRequestTiming {
					public static class: java.lang.Class<com.dynatrace.android.agent.WebRequestTiming>;
					public constructor(param0: java.net.HttpURLConnection);
					public startWebRequestTiming(): void;
					public isFinalized(): boolean;
					public constructor(param0: string);
					public stopWebRequestTiming(param0: string, param1: number, param2: string): void;
					public stopWebRequestTiming(): void;
					public stopWebRequestTiming(param0: java.net.URL, param1: number, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class CommHandler {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.CommHandler>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class CommunicationProblemListener {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.CommunicationProblemListener>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.agent.comm.CommunicationProblemListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onFailure(param0: number, param1: string, param2: string): void; onError(param0: java.lang.Throwable): void });
						public constructor();
						public onFailure(param0: number, param1: string, param2: string): void;
						public onError(param0: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class CommunicationProblemListenerTask {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.CommunicationProblemListenerTask>;
						public run(): void;
						public constructor(param0: com.dynatrace.android.agent.comm.CommunicationProblemListener, param1: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class HttpConstants {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.HttpConstants>;
						public static MAKRO_NOW: string;
						public static customBeaconHeaders: java.util.Map<string, string>;
						public static bGHttps: boolean;
						public static bGHttpsAnyCert: boolean;
						public static keyStore: java.security.KeyStore;
						public static keyMgrs: native.Array<javax.net.ssl.KeyManager>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class HttpResponse {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.HttpResponse>;
						public responseCode: number;
						public responseMessage: string;
						public body: string;
						public headers: java.util.Map<string, java.util.List<string>>;
						public isSuccessful(): boolean;
						public equals(param0: any): boolean;
						public constructor(param0: number, param1: string, param2: string, param3: java.util.Map<string, java.util.List<string>>);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class InvalidConfigurationException {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.InvalidConfigurationException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class InvalidResponseException {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.InvalidResponseException>;
						public constructor(param0: string, param1: java.lang.Throwable, param2: com.dynatrace.android.agent.comm.HttpResponse);
						public getResponse(): com.dynatrace.android.agent.comm.HttpResponse;
						public constructor(param0: string, param1: com.dynatrace.android.agent.comm.HttpResponse);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class MonitoringDataPacket {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.MonitoringDataPacket>;
						public basicData: string;
						public events: java.util.List<string>;
						public generatePayload(): string;
						public constructor(param0: string, param1: java.util.List<string>);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class RequestExecutor {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.RequestExecutor>;
						public static APPMON_DEFAULT_MONITOR: string;
						public sendBeacon(param0: com.dynatrace.android.agent.conf.ServerConfiguration, param1: boolean, param2: number): com.dynatrace.android.agent.conf.ServerConfiguration;
						public sendData(param0: com.dynatrace.android.agent.conf.ServerConfiguration, param1: string, param2: number): com.dynatrace.android.agent.conf.ServerConfiguration;
						public resetBeaconRetries(): void;
						public constructor(param0: com.dynatrace.android.agent.comm.CommHandler, param1: com.dynatrace.android.agent.conf.Configuration, param2: com.dynatrace.android.agent.conf.ServerConfigurationParser);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export class TLSSocketFactory {
						public static class: java.lang.Class<com.dynatrace.android.agent.comm.TLSSocketFactory>;
						public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
						public createSocket(param0: string, param1: number): java.net.Socket;
						public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
						public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
						public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
						public getSupportedCipherSuites(): native.Array<string>;
						public createSocket(): java.net.Socket;
						public getDefaultCipherSuites(): native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export module ssl {
						export class LocalX509TrustManager {
							public static class: java.lang.Class<com.dynatrace.android.agent.comm.ssl.LocalX509TrustManager>;
							public checkServerTrusted(param0: native.Array<java.security.cert.X509Certificate>, param1: string): void;
							public getAcceptedIssuers(): native.Array<java.security.cert.X509Certificate>;
							public checkClientTrusted(param0: native.Array<java.security.cert.X509Certificate>, param1: string): void;
							public constructor(param0: java.security.KeyStore, param1: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module comm {
					export module ssl {
						export class SimpleX509TrustManager {
							public static class: java.lang.Class<com.dynatrace.android.agent.comm.ssl.SimpleX509TrustManager>;
							public checkServerTrusted(param0: native.Array<java.security.cert.X509Certificate>, param1: string): void;
							public getAcceptedIssuers(): native.Array<java.security.cert.X509Certificate>;
							public constructor(param0: java.security.KeyStore);
							public checkClientTrusted(param0: native.Array<java.security.cert.X509Certificate>, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class AgentMode {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.AgentMode>;
						public static APP_MON: com.dynatrace.android.agent.conf.AgentMode;
						public static SAAS: com.dynatrace.android.agent.conf.AgentMode;
						public static valueOf(param0: string): com.dynatrace.android.agent.conf.AgentMode;
						public static values(): native.Array<com.dynatrace.android.agent.conf.AgentMode>;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class AppMonConfigurationBuilder extends com.dynatrace.android.agent.conf.ConfigurationBuilder {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.AppMonConfigurationBuilder>;
						public constructor(param0: com.dynatrace.android.agent.conf.AgentMode, param1: string, param2: string, param3: com.dynatrace.android.agent.conf.ConfigurationPreset);
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class BuilderUtil {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.BuilderUtil>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class Configuration {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.Configuration>;
						public appIdEncoded: string;
						public beaconUrl: string;
						public mode: com.dynatrace.android.agent.conf.AgentMode;
						public certificateValidation: boolean;
						public keyStore: java.security.KeyStore;
						public keyManagers: native.Array<javax.net.ssl.KeyManager>;
						public graceTime: number;
						public waitTime: number;
						public sendEmptyAction: boolean;
						public applicationMonitoring: boolean;
						public activityMonitoring: boolean;
						public crashReporting: boolean;
						public webRequestTiming: boolean;
						public monitoredDomains: native.Array<string>;
						public noSendInBg: boolean;
						public hybridApp: boolean;
						public debugLogLevel: boolean;
						public communicationProblemListener: com.dynatrace.android.agent.comm.CommunicationProblemListener;
						public autoStart: boolean;
						public userOptIn: boolean;
						public startupLoadBalancing: boolean;
						public instrumentationMode: com.dynatrace.android.agent.conf.InstrumentationMode;
						public getServerUrl(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class ConfigurationBuilder {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.ConfigurationBuilder>;
						public static LOGTAG: string;
						public withCertificateValidation(param0: boolean): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public withCommunicationProblemListener(param0: com.dynatrace.android.agent.comm.CommunicationProblemListener): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public withStartupLoadBalancing(param0: boolean): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public withMonitoredDomains(param0: native.Array<string>): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public withUserOptIn(param0: boolean): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public withDebugLogging(param0: boolean): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public constructor(param0: com.dynatrace.android.agent.conf.AgentMode, param1: string, param2: string, param3: com.dynatrace.android.agent.conf.ConfigurationPreset);
						public withHybridMonitoring(param0: boolean): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public withKeyStore(param0: java.security.KeyStore): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public withKeyManagers(param0: native.Array<javax.net.ssl.KeyManager>): com.dynatrace.android.agent.conf.ConfigurationBuilder;
						public buildConfiguration(): com.dynatrace.android.agent.conf.Configuration;
						public withCrashReporting(param0: boolean): com.dynatrace.android.agent.conf.ConfigurationBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class ConfigurationFactory {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.ConfigurationFactory>;
						public constructor();
						public static getConfiguration(): com.dynatrace.android.agent.conf.Configuration;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class ConfigurationPreset {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.ConfigurationPreset>;
						public static CERTIFICATE_VALIDATION_DEFAULT: boolean;
						public static SEND_EMPTY_ACTION_DEFAULT: boolean;
						public static GRACE_TIME_DEFAULT: number;
						public static WAIT_TIME_DEFAULT: number;
						public static CRASH_REPORTING_DEFAULT: boolean;
						public static APPLICATION_MONITORING_DEFAULT: boolean;
						public static ACTIVITY_MONITORING_DEFAULT: boolean;
						public static WEB_REQUEST_TIMING_DEFAULT: boolean;
						public static HYBRID_APP_DEFAULT: boolean;
						public static NO_BG_SEND_MODE_DEFAULT: boolean;
						public static MONITORED_DOMAINS_DEFAULT: native.Array<string>;
						public static AUTO_START_DEFAULT: boolean;
						public static USER_OPT_IN_DEFAULT: boolean;
						public static DEBUG_LOG_LEVEL_DEFAULT: boolean;
						public static STARTUP_LOAD_BALANCING: boolean;
						public static INSTRUMENTATION_MODE: com.dynatrace.android.agent.conf.InstrumentationMode;
						public constructor();
						public getGraceTime(): number;
						public getActivityMonitoring(): boolean;
						public getUserOptIn(): boolean;
						public getNoSendInBg(): boolean;
						public getStartupLoadBalancing(): boolean;
						public getWaitTime(): number;
						public getWebRequestTiming(): boolean;
						public getInstrumentationMode(): com.dynatrace.android.agent.conf.InstrumentationMode;
						public getMonitoredDomains(): native.Array<string>;
						public getAutoStart(): boolean;
						public toString(): string;
						public getSendEmptyActions(): boolean;
						/** @deprecated */
						public static generateImproperConfiguration(): com.dynatrace.android.agent.conf.Configuration;
						public getCrashReporting(): boolean;
						public getDebugLogLevel(): boolean;
						public getHybridApp(): boolean;
						public getApplicationMonitoring(): boolean;
						public getCertificateValidation(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class DataCollectionLevel {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.DataCollectionLevel>;
						public static OFF: com.dynatrace.android.agent.conf.DataCollectionLevel;
						public static PERFORMANCE: com.dynatrace.android.agent.conf.DataCollectionLevel;
						public static USER_BEHAVIOR: com.dynatrace.android.agent.conf.DataCollectionLevel;
						public static values(): native.Array<com.dynatrace.android.agent.conf.DataCollectionLevel>;
						public static valueOf(param0: string): com.dynatrace.android.agent.conf.DataCollectionLevel;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class DynatraceConfigurationBuilder extends com.dynatrace.android.agent.conf.ConfigurationBuilder {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.DynatraceConfigurationBuilder>;
						public constructor(param0: com.dynatrace.android.agent.conf.AgentMode, param1: string, param2: string, param3: com.dynatrace.android.agent.conf.ConfigurationPreset);
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class InitialServerIdProvider {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.InitialServerIdProvider>;
						public constructor();
						public getDefaultServerId(param0: com.dynatrace.android.agent.conf.Configuration): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class InstrumentationMode {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.InstrumentationMode>;
						public static DEFAULT: com.dynatrace.android.agent.conf.InstrumentationMode;
						public static XAMARIN: com.dynatrace.android.agent.conf.InstrumentationMode;
						public static values(): native.Array<com.dynatrace.android.agent.conf.InstrumentationMode>;
						public static valueOf(param0: string): com.dynatrace.android.agent.conf.InstrumentationMode;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class InternalUserPrivacyOptions {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.InternalUserPrivacyOptions>;
						public static isCrashReplayOptedIn(param0: com.dynatrace.android.agent.conf.UserPrivacyOptions): boolean;
						public static withCrashReplayOptedIn(param0: com.dynatrace.android.agent.conf.UserPrivacyOptions.Builder, param1: boolean): com.dynatrace.android.agent.conf.UserPrivacyOptions.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class PreferencesManager {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.PreferencesManager>;
						public removeServerConfiguration(): void;
						/** @deprecated */
						public removeBeacon(): void;
						public readPrivacySettings(): com.dynatrace.android.agent.conf.UserPrivacyOptions;
						/** @deprecated */
						public setBeacon(param0: string): void;
						public removePrivacySettings(): void;
						public static createPreferencesManager(param0: globalAndroid.content.Context, param1: com.dynatrace.android.agent.conf.ServerConfigurationManager): com.dynatrace.android.agent.conf.PreferencesManager;
						public getNewVisitorFlag(): boolean;
						public getServerConfiguration(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration;
						public setServerConfiguration(param0: com.dynatrace.android.agent.conf.ServerConfiguration): void;
						public setNewVisitorSent(param0: boolean): void;
						/** @deprecated */
						public getBeacon(): string;
						public storePrivacySettings(param0: com.dynatrace.android.agent.conf.UserPrivacyOptions): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class PrivacyRules {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.PrivacyRules>;
						public static PRIVACY_MODE_DEACTIVATED: com.dynatrace.android.agent.conf.PrivacyRules;
						public static NO_USER_DEFINED_VALUE: com.dynatrace.android.agent.conf.UserPrivacyOptions;
						public getPrivacySettings(): com.dynatrace.android.agent.conf.UserPrivacyOptions;
						public allowUserRelatedCookies(): boolean;
						public allowLocationReporting(): boolean;
						public shouldCollectEvent(param0: com.dynatrace.android.agent.EventType): boolean;
						public keepVisitorId(): boolean;
						public constructor(param0: com.dynatrace.android.agent.conf.UserPrivacyOptions);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class ReplayConfiguration {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.ReplayConfiguration>;
						public newBuilder(): com.dynatrace.android.agent.conf.ReplayConfiguration.Builder;
						public isCaptureOn(): boolean;
						public static builder(): com.dynatrace.android.agent.conf.ReplayConfiguration.Builder;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export module ReplayConfiguration {
						export class Builder {
							public static class: java.lang.Class<com.dynatrace.android.agent.conf.ReplayConfiguration.Builder>;
							public constructor();
							public withCapture(param0: boolean): com.dynatrace.android.agent.conf.ReplayConfiguration.Builder;
							public build(): com.dynatrace.android.agent.conf.ReplayConfiguration;
							public constructor(param0: com.dynatrace.android.agent.conf.ReplayConfiguration);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class ServerConfiguration {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.ServerConfiguration>;
						public getMaxBeaconSizeKb(): number;
						public getCapture(): number;
						public maxSendLength(): number;
						public getMaxCachedCrashesCount(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getStatus(): com.dynatrace.android.agent.conf.ServerConfiguration.Status;
						public getTimestamp(): number;
						public getCaptureLifecycle(): number;
						public getReportCrashes(): number;
						public getTrafficControlPercentage(): number;
						public getReplayConfiguration(): com.dynatrace.android.agent.conf.ReplayConfiguration;
						public static builder(): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
						public isSwitchServer(): boolean;
						public isSelfmonitoring(): boolean;
						public getMultiplicity(): number;
						public newBuilder(): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
						public getReportErrors(): number;
						public toString(): string;
						public getSessionSplitConfiguration(): com.dynatrace.android.agent.conf.SessionSplitConfiguration;
						public getServerId(): number;
						public isCaptureOn(): boolean;
						public isCachingCrashes(): boolean;
						public getVisitStoreVersion(): com.dynatrace.android.agent.data.VisitStoreVersion;
						public newBuilder(param0: boolean): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
						public getSendIntervalSec(): number;
					}
					export module ServerConfiguration {
						export class Builder {
							public static class: java.lang.Class<com.dynatrace.android.agent.conf.ServerConfiguration.Builder>;
							public constructor();
							public withCapture(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withCaptureOff(): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withReportErrors(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withReportCrashes(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withStatus(param0: com.dynatrace.android.agent.conf.ServerConfiguration.Status): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withMaxBeaconSizeKb(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withSwitchServer(param0: boolean): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withMaxCachedCrashesCount(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withMultiplicity(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public constructor(param0: com.dynatrace.android.agent.conf.ServerConfiguration);
							public withCaptureLifecycle(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withReplayConfiguration(param0: com.dynatrace.android.agent.conf.ReplayConfiguration): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public build(): com.dynatrace.android.agent.conf.ServerConfiguration;
							public withSelfmonitoring(param0: boolean): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withServerId(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withTrafficControlPercentage(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public constructor(param0: com.dynatrace.android.agent.conf.ServerConfiguration, param1: boolean);
							public withSessionSplitConfiguration(param0: com.dynatrace.android.agent.conf.SessionSplitConfiguration): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withVisitStoreVersion(param0: com.dynatrace.android.agent.data.VisitStoreVersion): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withTimestamp(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
							public withSendIntervalSec(param0: number): com.dynatrace.android.agent.conf.ServerConfiguration.Builder;
						}
						export class Status {
							public static class: java.lang.Class<com.dynatrace.android.agent.conf.ServerConfiguration.Status>;
							public static OK: com.dynatrace.android.agent.conf.ServerConfiguration.Status;
							public static ERROR: com.dynatrace.android.agent.conf.ServerConfiguration.Status;
							public static valueOf(param0: string): com.dynatrace.android.agent.conf.ServerConfiguration.Status;
							public static values(): native.Array<com.dynatrace.android.agent.conf.ServerConfiguration.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class ServerConfigurationManager extends com.dynatrace.android.agent.conf.ServerConfigurationParser {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.ServerConfigurationManager>;
						public fromMap(param0: java.util.Map<string, string>, param1: com.dynatrace.android.agent.conf.AgentMode): com.dynatrace.android.agent.conf.ServerConfiguration;
						public fromMemory(param0: string): com.dynatrace.android.agent.conf.ServerConfiguration;
						public generateStorableConfiguration(param0: com.dynatrace.android.agent.conf.ServerConfiguration): string;
						public fromJSON(param0: com.dynatrace.android.agent.conf.ServerConfiguration, param1: string): com.dynatrace.android.agent.conf.ServerConfiguration;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class ServerConfigurationParser {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.ServerConfigurationParser>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.agent.conf.ServerConfigurationParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { fromJSON(param0: com.dynatrace.android.agent.conf.ServerConfiguration, param1: string): com.dynatrace.android.agent.conf.ServerConfiguration; fromMap(param0: java.util.Map<string, string>, param1: com.dynatrace.android.agent.conf.AgentMode): com.dynatrace.android.agent.conf.ServerConfiguration });
						public constructor();
						public fromMap(param0: java.util.Map<string, string>, param1: com.dynatrace.android.agent.conf.AgentMode): com.dynatrace.android.agent.conf.ServerConfiguration;
						public fromJSON(param0: com.dynatrace.android.agent.conf.ServerConfiguration, param1: string): com.dynatrace.android.agent.conf.ServerConfiguration;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class SessionSplitConfiguration {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.SessionSplitConfiguration>;
						public getInactivityTimeoutMs(): number;
						public static builder(): com.dynatrace.android.agent.conf.SessionSplitConfiguration.Builder;
						public getMaxSessionDurationMinutes(): number;
						public newBuilder(): com.dynatrace.android.agent.conf.SessionSplitConfiguration.Builder;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getInactivityTimeoutSeconds(): number;
						public getMaxSessionDurationMs(): number;
						public toString(): string;
						public getMaxRootActions(): number;
					}
					export module SessionSplitConfiguration {
						export class Builder {
							public static class: java.lang.Class<com.dynatrace.android.agent.conf.SessionSplitConfiguration.Builder>;
							public constructor();
							public withMaxSessionDuration(param0: number): com.dynatrace.android.agent.conf.SessionSplitConfiguration.Builder;
							public constructor(param0: com.dynatrace.android.agent.conf.SessionSplitConfiguration);
							public withInactivityTimeout(param0: number): com.dynatrace.android.agent.conf.SessionSplitConfiguration.Builder;
							public withMaxRootActions(param0: number): com.dynatrace.android.agent.conf.SessionSplitConfiguration.Builder;
							public build(): com.dynatrace.android.agent.conf.SessionSplitConfiguration;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module conf {
					export class UserPrivacyOptions {
						public static class: java.lang.Class<com.dynatrace.android.agent.conf.UserPrivacyOptions>;
						public isCrashReportingOptedIn(): boolean;
						public newBuilder(): com.dynatrace.android.agent.conf.UserPrivacyOptions.Builder;
						public getDataCollectionLevel(): com.dynatrace.android.agent.conf.DataCollectionLevel;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static builder(): com.dynatrace.android.agent.conf.UserPrivacyOptions.Builder;
						public toString(): string;
					}
					export module UserPrivacyOptions {
						export class Builder {
							public static class: java.lang.Class<com.dynatrace.android.agent.conf.UserPrivacyOptions.Builder>;
							public constructor();
							public withDataCollectionLevel(param0: com.dynatrace.android.agent.conf.DataCollectionLevel): com.dynatrace.android.agent.conf.UserPrivacyOptions.Builder;
							public build(): com.dynatrace.android.agent.conf.UserPrivacyOptions;
							public withCrashReportingOptedIn(param0: boolean): com.dynatrace.android.agent.conf.UserPrivacyOptions.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module cookie {
					export class CookieHandler {
						public static class: java.lang.Class<com.dynatrace.android.agent.cookie.CookieHandler>;
						public onSessionStart(param0: com.dynatrace.android.agent.data.Session, param1: string): void;
						public constructor(param0: java.util.Set<string>, param1: com.dynatrace.android.agent.conf.AgentMode);
						public restoreCookies(): void;
						public onAgentStart(param0: globalAndroid.content.Context): void;
						public onTrafficControlUpdate(param0: com.dynatrace.android.agent.data.Session): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module cookie {
					export class CookieProducer {
						public static class: java.lang.Class<com.dynatrace.android.agent.cookie.CookieProducer>;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module cookie {
					export class CookieWriter {
						public static class: java.lang.Class<com.dynatrace.android.agent.cookie.CookieWriter>;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class CrashCatcher {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.CrashCatcher>;
						public static registered: boolean;
						public constructor();
						public static registerUncaughtExceptionListener(param0: com.dynatrace.android.agent.crash.CrashListener): void;
						public static notifyListeners(param0: string, param1: string, param2: string, param3: string): void;
						public static installUncaughtExceptionHandler(): void;
						public static unregisterUncaughtExceptionListener(param0: com.dynatrace.android.agent.crash.CrashListener): void;
						public static uninstallUncaughtExceptionHandler(): void;
					}
					export module CrashCatcher {
						export class DTXAgentUncaughtExceptionHandler {
							public static class: java.lang.Class<com.dynatrace.android.agent.crash.CrashCatcher.DTXAgentUncaughtExceptionHandler>;
							public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class CrashListener {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.CrashListener>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.agent.crash.CrashListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { notifyJavaCrash(param0: java.lang.Thread, param1: java.lang.Throwable): void; notifyCustomCrash(param0: string, param1: string, param2: string, param3: string): void });
						public constructor();
						public notifyCustomCrash(param0: string, param1: string, param2: string, param3: string): void;
						public notifyJavaCrash(param0: java.lang.Thread, param1: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class JavaStacktraceProcessor extends com.dynatrace.android.agent.crash.StacktraceProcessor {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.JavaStacktraceProcessor>;
						public constructor(param0: java.lang.Throwable, param1: number);
						public process(): com.dynatrace.android.agent.crash.StacktraceData;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class PlatformType {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.PlatformType>;
						public static JAVA: com.dynatrace.android.agent.crash.PlatformType;
						public static JAVA_SCRIPT: com.dynatrace.android.agent.crash.PlatformType;
						public static XAMARIN: com.dynatrace.android.agent.crash.PlatformType;
						public static DART: com.dynatrace.android.agent.crash.PlatformType;
						public static CUSTOM: com.dynatrace.android.agent.crash.PlatformType;
						public static values(): native.Array<com.dynatrace.android.agent.crash.PlatformType>;
						public static valueOf(param0: string): com.dynatrace.android.agent.crash.PlatformType;
						public getProtocolValue(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class SafeXamarinStacktraceProcessor extends com.dynatrace.android.agent.crash.StacktraceProcessor {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.SafeXamarinStacktraceProcessor>;
						public constructor(param0: java.lang.Throwable, param1: string, param2: number);
						public process(): com.dynatrace.android.agent.crash.StacktraceData;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class StacktraceData {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.StacktraceData>;
						public getStacktrace(): string;
						public getType(): com.dynatrace.android.agent.crash.PlatformType;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: string, param2: string, param3: com.dynatrace.android.agent.crash.PlatformType);
						public getReason(): string;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class StacktraceProcessor {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.StacktraceProcessor>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.agent.crash.StacktraceProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { process(): com.dynatrace.android.agent.crash.StacktraceData });
						public constructor();
						public process(): com.dynatrace.android.agent.crash.StacktraceData;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class StacktraceProcessorFactory {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.StacktraceProcessorFactory>;
						public static MAX_REASON_LENGTH: number;
						public static MAX_STACKTRACE_LENGTH: number;
						public static STACKTRACE_LINES: number;
						public static ERROR_STACKTRACE_LINES: number;
						public constructor();
						public determineCrashProcessor(param0: java.lang.Throwable, param1: com.dynatrace.android.agent.conf.InstrumentationMode): com.dynatrace.android.agent.crash.StacktraceProcessor;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module crash {
					export class XamarinStacktraceProcessor extends com.dynatrace.android.agent.crash.StacktraceProcessor {
						public static class: java.lang.Class<com.dynatrace.android.agent.crash.XamarinStacktraceProcessor>;
						public constructor(param0: string, param1: number);
						public static convertToXamarinOrNull(param0: java.lang.Throwable): string;
						public process(): com.dynatrace.android.agent.crash.StacktraceData;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module data {
					export class LcState {
						public static class: java.lang.Class<com.dynatrace.android.agent.data.LcState>;
						public static onApplicationCreate: com.dynatrace.android.agent.data.LcState;
						public static onApplicationPostCreate: com.dynatrace.android.agent.data.LcState;
						public static onActivityCreate: com.dynatrace.android.agent.data.LcState;
						public static onActivityPostCreate: com.dynatrace.android.agent.data.LcState;
						public static onActivityStart: com.dynatrace.android.agent.data.LcState;
						public static onActivityRestart: com.dynatrace.android.agent.data.LcState;
						public static onActivityResume: com.dynatrace.android.agent.data.LcState;
						public static onActivityPostResume: com.dynatrace.android.agent.data.LcState;
						public static onActivityPause: com.dynatrace.android.agent.data.LcState;
						public static onActivityStop: com.dynatrace.android.agent.data.LcState;
						public static onActivityDestroy: com.dynatrace.android.agent.data.LcState;
						public static values(): native.Array<com.dynatrace.android.agent.data.LcState>;
						public static valueOf(param0: string): com.dynatrace.android.agent.data.LcState;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module data {
					export class RandomFactory {
						public static class: java.lang.Class<com.dynatrace.android.agent.data.RandomFactory>;
						public constructor();
						public generateRandom(): java.util.Random;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module data {
					export class Session {
						public static class: java.lang.Class<com.dynatrace.android.agent.data.Session>;
						public sessionStartTime: number;
						public visitorId: number;
						public sessionId: number;
						public sequenceNumber: number;
						public visitStoreVersion: com.dynatrace.android.agent.data.VisitStoreVersion;
						public multiplicity: number;
						/** @deprecated */
						public internalSetPrivacyRules(param0: com.dynatrace.android.agent.conf.PrivacyRules): void;
						public static currentSession(): com.dynatrace.android.agent.data.Session;
						public addSelfMonitoringEvent(): void;
						public static startNewSession(param0: com.dynatrace.android.agent.conf.PrivacyRules): com.dynatrace.android.agent.data.Session;
						public isConfigurationApplied(): boolean;
						public static startNewSessionIfNeeded(param0: com.dynatrace.android.agent.conf.PrivacyRules): com.dynatrace.android.agent.data.Session;
						public getRunningTime(): number;
						public getPrivacyRules(): com.dynatrace.android.agent.conf.PrivacyRules;
						public constructor(param0: number, param1: java.util.Random, param2: com.dynatrace.android.agent.data.VisitStoreVersion, param3: com.dynatrace.android.agent.conf.PrivacyRules);
						public static determineActiveSession(param0: boolean, param1: boolean): com.dynatrace.android.agent.data.Session;
						public updateLastInteractionTime(param0: number): void;
						public isSelfMonitoringLimitReached(): boolean;
						public static determineActiveSessionForInternalEvent(): com.dynatrace.android.agent.data.Session;
						public handleTrafficLimitation(param0: number, param1: number, param2: com.dynatrace.android.agent.AgentStateListener): void;
						public isActive(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module data {
					export class SessionState {
						public static class: java.lang.Class<com.dynatrace.android.agent.data.SessionState>;
						public static CREATED: com.dynatrace.android.agent.data.SessionState;
						public static ENABLED: com.dynatrace.android.agent.data.SessionState;
						public static DISABLED: com.dynatrace.android.agent.data.SessionState;
						public static valueOf(param0: string): com.dynatrace.android.agent.data.SessionState;
						public static values(): native.Array<com.dynatrace.android.agent.data.SessionState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module data {
					export class VisitStoreVersion {
						public static class: java.lang.Class<com.dynatrace.android.agent.data.VisitStoreVersion>;
						public static V1_SERVER_SPLITTING: com.dynatrace.android.agent.data.VisitStoreVersion;
						public static V2_AGENT_SPLITTING: com.dynatrace.android.agent.data.VisitStoreVersion;
						public static values(): native.Array<com.dynatrace.android.agent.data.VisitStoreVersion>;
						public static valueOf(param0: string): com.dynatrace.android.agent.data.VisitStoreVersion;
						public getInternalValue(): number;
						public static fromServerResponse(param0: number, param1: com.dynatrace.android.agent.data.VisitStoreVersion): com.dynatrace.android.agent.data.VisitStoreVersion;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module db {
					export class DataAccessObject {
						public static class: java.lang.Class<com.dynatrace.android.agent.db.DataAccessObject>;
						public constructor(param0: globalAndroid.content.Context);
						public deleteSentEvents(param0: com.dynatrace.android.agent.db.MonitoringDataEntity): void;
						public constructor(param0: com.dynatrace.android.agent.db.EventsDbHelper, param1: com.dynatrace.android.agent.db.ParmDbHelper);
						public deleteAllEvents(): boolean;
						public deleteVisitorInformation(): void;
						public updateSessionId(): number;
						public deleteOldCrashes(param0: number): void;
						public insertBatchEvents(param0: java.util.LinkedList<com.dynatrace.android.agent.db.DatabaseWriteQueue.DatabaseRecord>, param1: com.dynatrace.android.agent.conf.ServerConfiguration): void;
						public deleteOldEvents(param0: number, param1: boolean): void;
						public generateVisitorId(): number;
						public updateMultiplicity(param0: com.dynatrace.android.agent.data.Session): boolean;
						public fetchEvents(param0: number, param1: com.dynatrace.android.agent.BasicSegment.UpdatableDataGenerator, param2: number, param3: com.dynatrace.android.agent.CrashSegment.CrashSegmentModifier): com.dynatrace.android.agent.db.MonitoringDataEntity;
						public deleteEventsFromVisit(param0: number, param1: number): void;
						public getVisitorId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module db {
					export class DatabaseWriteQueue {
						public static class: java.lang.Class<com.dynatrace.android.agent.db.DatabaseWriteQueue>;
						public run(): void;
						public start(): void;
						public static getInstance(): com.dynatrace.android.agent.db.DatabaseWriteQueue;
						public flushQueue(): void;
						public accept(param0: com.dynatrace.android.agent.db.DatabaseWriteQueue.DatabaseRecord): void;
						public stopThread(): void;
					}
					export module DatabaseWriteQueue {
						export class DatabaseRecord {
							public static class: java.lang.Class<com.dynatrace.android.agent.db.DatabaseWriteQueue.DatabaseRecord>;
							public sObvc: string;
							public sOa: string;
							public session: com.dynatrace.android.agent.data.Session;
							public eventId: number;
							public eventStart: number;
							public serverId: number;
							public constructor(param0: string, param1: string, param2: com.dynatrace.android.agent.data.Session, param3: number, param4: number, param5: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module db {
					export class EventsDbHelper {
						public static class: java.lang.Class<com.dynatrace.android.agent.db.EventsDbHelper>;
						public constructor(param0: globalAndroid.content.Context);
						public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public deleteEventsByDate(param0: number, param1: boolean): void;
						public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public fetchEvents(param0: number): globalAndroid.database.Cursor;
						public deleteEventsByEventId(param0: number, param1: number): number;
						public fetchEvents(): globalAndroid.database.Cursor;
						public updateMultiplicity(param0: com.dynatrace.android.agent.data.Session): boolean;
						public insertBatch(param0: java.util.LinkedList<com.dynatrace.android.agent.db.DatabaseWriteQueue.DatabaseRecord>): void;
						public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module db {
					export class MonitoringDataEntity {
						public static class: java.lang.Class<com.dynatrace.android.agent.db.MonitoringDataEntity>;
						public visitorId: number;
						public sessionId: number;
						public sequenceNumber: number;
						public serverId: number;
						public lastRowId: number;
						public monitoringData: com.dynatrace.android.agent.comm.MonitoringDataPacket;
						public finished: boolean;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: com.dynatrace.android.agent.comm.MonitoringDataPacket, param6: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module db {
					export class ParmDbHelper {
						public static class: java.lang.Class<com.dynatrace.android.agent.db.ParmDbHelper>;
						public resetMainRow(): boolean;
						public fetchSessionId(): java.lang.Long;
						public constructor(param0: globalAndroid.content.Context);
						public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public updateSessionId(param0: number): boolean;
						public updateVisitorId(param0: number): boolean;
						public createMainRow(): number;
						public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
						public fetchVisitorId(): java.lang.Long;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module intf {
					export class AppStateListener {
						public static class: java.lang.Class<com.dynatrace.android.agent.intf.AppStateListener>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.agent.intf.AppStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onAppGoesFg(): void; onAppGoesBg(): void });
						public constructor();
						public onAppGoesFg(): void;
						public onAppGoesBg(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module intf {
					export class DTXActionListener {
						public static class: java.lang.Class<com.dynatrace.android.agent.intf.DTXActionListener>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.agent.intf.DTXActionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onLeaveAction(param0: com.dynatrace.android.agent.DTXActionImpl): void });
						public constructor();
						public onLeaveAction(param0: com.dynatrace.android.agent.DTXActionImpl): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module metrics {
					export class AndroidMetrics {
						public static class: java.lang.Class<com.dynatrace.android.agent.metrics.AndroidMetrics>;
						public deviceMemorySize: java.lang.Long;
						public manufacturer: string;
						public userLang: string;
						public deviceRooted: boolean;
						public deviceCarrier: string;
						public connectionType: com.dynatrace.android.agent.metrics.ConnectionType;
						public screenWidth: number;
						public screenHeight: number;
						public screenDensityDpi: number;
						public networkProtocol: string;
						public deviceOrientation: number;
						public operatingSystem: string;
						public cpuInformation: string;
						public batteryLevel: number;
						public deviceMemoryFree: java.lang.Long;
						public modelId: string;
						public constructor(param0: globalAndroid.content.Context);
						public getConnType(param0: globalAndroid.net.NetworkInfo): com.dynatrace.android.agent.metrics.ConnectionType;
						public updateCommonMetrics(): void;
						public static formatUserLanguage(param0: java.util.Locale): string;
						public static getInstance(): com.dynatrace.android.agent.metrics.AndroidMetrics;
						public updateBasicMetrics(): void;
						public getConnType(): com.dynatrace.android.agent.metrics.ConnectionType;
						public isNetworkAvailable(): boolean;
						public updateVerboseMetrics(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module metrics {
					export class ConnectionType {
						public static class: java.lang.Class<com.dynatrace.android.agent.metrics.ConnectionType>;
						public static OFFLINE: com.dynatrace.android.agent.metrics.ConnectionType;
						public static MOBILE: com.dynatrace.android.agent.metrics.ConnectionType;
						public static WIFI: com.dynatrace.android.agent.metrics.ConnectionType;
						public static LAN: com.dynatrace.android.agent.metrics.ConnectionType;
						public static OTHER: com.dynatrace.android.agent.metrics.ConnectionType;
						public static values(): native.Array<com.dynatrace.android.agent.metrics.ConnectionType>;
						public getProtocolValue(): string;
						public static valueOf(param0: string): com.dynatrace.android.agent.metrics.ConnectionType;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module agent {
				export module util {
					export class Utility {
						public static class: java.lang.Class<com.dynatrace.android.agent.util.Utility>;
						public static zlogI(param0: string, param1: string): void;
						public static getCPUInfo(): string;
						public static getNextTagId(): number;
						public static parseKeyValueString(param0: string): java.util.Map<string, string>;
						public static parseInt(param0: java.util.Map<string, string>, param1: string, param2: number, param3: number, param4: number, param5: boolean): number;
						public static zlogD(param0: string, param1: string): void;
						public static zlogE(param0: string, param1: string): void;
						public static readStream(param0: java.io.InputStream): native.Array<number>;
						public static parseInt(param0: java.util.Map<string, string>, param1: string, param2: number, param3: number, param4: number): number;
						public static zlogW(param0: string, param1: string): void;
						public static urlEncode(param0: string): string;
						public static parseInt(param0: string, param1: string, param2: number, param3: number, param4: number): number;
						public static getAppTargetSdk(param0: globalAndroid.content.Context): number;
						public static zlogE(param0: string, param1: string, param2: java.lang.Throwable): void;
						public static parseLong(param0: string, param1: string, param2: number, param3: number): java.lang.Long;
						public constructor();
						public static trimWebRequest(param0: string): string;
						public static parseInt(param0: string, param1: string, param2: number, param3: number, param4: number, param5: boolean): number;
						public static zlogD(param0: string, param1: string, param2: java.lang.Throwable): void;
						public static trimString(param0: string, param1: number): string;
						public static parseFloat(param0: string, param1: string, param2: number, param3: number): java.lang.Float;
						public static getEventSeqNum(): number;
						public static isValidEventName(param0: string, param1: number): boolean;
						public static hasPermissions(param0: globalAndroid.content.Context): boolean;
						public static resetEventSeqNum(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module app {
				export class Application {
					public static class: java.lang.Class<com.dynatrace.android.app.Application>;
					public onCreate(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module app {
				export class LcCallbacks {
					public static class: java.lang.Class<com.dynatrace.android.app.LcCallbacks>;
					public onActivityResume(param0: globalAndroid.app.Activity): void;
					public onActivityPostCreate(param0: globalAndroid.app.Activity): void;
					public onActivityStart(param0: globalAndroid.app.Activity): void;
					public onActivityCreate(param0: globalAndroid.app.Activity): void;
					public onActivityStop(param0: globalAndroid.app.Activity): void;
					public onActivityRestart(param0: globalAndroid.app.Activity): void;
					public onActivityDestroy(param0: globalAndroid.app.Activity): void;
					public onActivityCreate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
					public onActivityPostResume(param0: globalAndroid.app.Activity): void;
					public onActivityPause(param0: globalAndroid.app.Activity): void;
					public onApplicationCreate(): void;
					public onActivityPostCreate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module app {
				export class LcContext {
					public static class: java.lang.Class<com.dynatrace.android.app.LcContext>;
					public setCaptureMode(param0: boolean): void;
					public forceCloseActiveActions(param0: string): void;
					public getActivityLcCallbacks(): com.dynatrace.android.app.LcCallbacks;
					public static getInstance(): com.dynatrace.android.app.LcContext;
					public getCurrentAction(): com.dynatrace.android.agent.LcAction;
					public isLifecycleInEffect(): boolean;
					public cleanUpAppStart(param0: com.dynatrace.android.agent.LcAction): void;
					public getCaptureMode(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public static initManualLifecycleInstrumentation(param0: globalAndroid.content.Context): void;
					public resetLifecycleData(): void;
					public isForceClosingActions(): boolean;
					public cleanUpDisplay(param0: com.dynatrace.android.agent.LcAction): void;
				}
				export module LcContext {
					export class AppStateTracker extends com.dynatrace.android.agent.intf.AppStateListener {
						public static class: java.lang.Class<com.dynatrace.android.app.LcContext.AppStateTracker>;
						public onAppGoesFg(): void;
						public onAppGoesBg(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module app {
				export class LcUtility {
					public static class: java.lang.Class<com.dynatrace.android.app.LcUtility>;
					public registerAppStateListener(param0: com.dynatrace.android.agent.intf.AppStateListener): void;
					public getPreviousActivityName(): string;
					public getCurrentActivityName(): string;
					public static getInstance(): com.dynatrace.android.app.LcUtility;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class Callback {
					public static class: java.lang.Class<com.dynatrace.android.callback.Callback>;
					public static onPostResume(param0: globalAndroid.app.Activity): void;
					public static getInputStream(param0: java.net.HttpURLConnection): java.io.InputStream;
					public static onStart(param0: globalAndroid.app.Activity): void;
					public static onPageSelected_EXIT(): void;
					public static openConnection(param0: java.net.URLConnection): void;
					public static onDestroy(param0: globalAndroid.app.Activity): void;
					public static onMenuItemClick_EXIT(): void;
					public static getOutputStream(param0: java.net.HttpURLConnection): java.io.OutputStream;
					public static onItemSelected_EXIT(): void;
					public static onStop(param0: globalAndroid.app.Activity): void;
					public static newInstance(param0: java.net.HttpURLConnection): void;
					public static onCreate(param0: globalAndroid.app.Application): void;
					public static onPostCreate(param0: globalAndroid.app.Activity): void;
					public static onOptionsItemSelected_EXIT(): void;
					public static onPause(param0: globalAndroid.app.Activity): void;
					public static onMenuItemClick_ENTER(param0: globalAndroid.view.MenuItem): void;
					public static getInputStream(param0: java.net.URLConnection): java.io.InputStream;
					public static onRefresh_EXIT(): void;
					public static onRestart(param0: globalAndroid.app.Activity): void;
					public static onClick_ENTER(param0: globalAndroid.view.View): void;
					public static onResume(param0: globalAndroid.app.Activity): void;
					public static onClick_EXIT(): void;
					public static onCreate(param0: globalAndroid.app.Activity): void;
					public static onPageSelected_ENTER(param0: number): void;
					public static onItemClick_ENTER(param0: globalAndroid.view.View, param1: number): void;
					public static onRefresh_ENTER(): void;
					public static getResponseCode(param0: java.net.HttpURLConnection): number;
					public static onItemSelected_ENTER(param0: globalAndroid.view.View, param1: number): void;
					public static onItemClick_EXIT(): void;
					public static onOptionsItemSelected_ENTER(param0: globalAndroid.view.MenuItem): void;
					public static getOutputStream(param0: java.net.URLConnection): java.io.OutputStream;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class CallbackCore {
					public static class: java.lang.Class<com.dynatrace.android.callback.CallbackCore>;
				}
				export module CallbackCore {
					export class ConnRegistration {
						public static class: java.lang.Class<com.dynatrace.android.callback.CallbackCore.ConnRegistration>;
						public run(): void;
					}
					export class ListenerActionType {
						public static class: java.lang.Class<com.dynatrace.android.callback.CallbackCore.ListenerActionType>;
						public static Clicked: com.dynatrace.android.callback.CallbackCore.ListenerActionType;
						public static ItemClicked: com.dynatrace.android.callback.CallbackCore.ListenerActionType;
						public static ItemSelected: com.dynatrace.android.callback.CallbackCore.ListenerActionType;
						public static MenuItemClick: com.dynatrace.android.callback.CallbackCore.ListenerActionType;
						public static OptionsItemSelected: com.dynatrace.android.callback.CallbackCore.ListenerActionType;
						public static PageSelected: com.dynatrace.android.callback.CallbackCore.ListenerActionType;
						public static SwipeToRefresh: com.dynatrace.android.callback.CallbackCore.ListenerActionType;
						public static values(): native.Array<com.dynatrace.android.callback.CallbackCore.ListenerActionType>;
						public static valueOf(param0: string): com.dynatrace.android.callback.CallbackCore.ListenerActionType;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class CbConstants {
					public static class: java.lang.Class<com.dynatrace.android.callback.CbConstants>;
				}
				export module CbConstants {
					export class WrMethod {
						public static class: java.lang.Class<com.dynatrace.android.callback.CbConstants.WrMethod>;
						public static getInputStream: com.dynatrace.android.callback.CbConstants.WrMethod;
						public static getOutputStream: com.dynatrace.android.callback.CbConstants.WrMethod;
						public static getResponseCode: com.dynatrace.android.callback.CbConstants.WrMethod;
						public static execute: com.dynatrace.android.callback.CbConstants.WrMethod;
						public static enqueue: com.dynatrace.android.callback.CbConstants.WrMethod;
						public static valueOf(param0: string): com.dynatrace.android.callback.CbConstants.WrMethod;
						public static values(): native.Array<com.dynatrace.android.callback.CbConstants.WrMethod>;
					}
					export class WrStates {
						public static class: java.lang.Class<com.dynatrace.android.callback.CbConstants.WrStates>;
						public static PRE_EXEC: com.dynatrace.android.callback.CbConstants.WrStates;
						public static POST_EXEC_OK: com.dynatrace.android.callback.CbConstants.WrStates;
						public static POST_EXEC_ERR: com.dynatrace.android.callback.CbConstants.WrStates;
						public static POST_EXEC_FINALIZE: com.dynatrace.android.callback.CbConstants.WrStates;
						public static values(): native.Array<com.dynatrace.android.callback.CbConstants.WrStates>;
						public static valueOf(param0: string): com.dynatrace.android.callback.CbConstants.WrStates;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class CbURIDesc {
					public static class: java.lang.Class<com.dynatrace.android.callback.CbURIDesc>;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class CbWebReqTracker {
					public static class: java.lang.Class<com.dynatrace.android.callback.CbWebReqTracker>;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class ConnStateParms extends com.dynatrace.android.callback.WebReqStateParms {
					public static class: java.lang.Class<com.dynatrace.android.callback.ConnStateParms>;
					public getRequestClassName(param0: any): string;
					public getRequestClassName(): string;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class HttpClientCallback {
					public static class: java.lang.Class<com.dynatrace.android.callback.HttpClientCallback>;
					public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler<any>): any;
					public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
					public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest): org.apache.http.HttpResponse;
					public static newInstance(param0: org.apache.http.client.methods.HttpRequestBase): void;
					public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest): org.apache.http.HttpResponse;
					public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler<any>): any;
					public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
					public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.client.methods.HttpUriRequest, param2: org.apache.http.client.ResponseHandler<any>, param3: org.apache.http.protocol.HttpContext): any;
					public static execute(param0: org.apache.http.client.HttpClient, param1: org.apache.http.HttpHost, param2: org.apache.http.HttpRequest, param3: org.apache.http.client.ResponseHandler<any>, param4: org.apache.http.protocol.HttpContext): any;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class HttpClientCallbackCore {
					public static class: java.lang.Class<com.dynatrace.android.callback.HttpClientCallbackCore>;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class OkCallback {
					public static class: java.lang.Class<com.dynatrace.android.callback.OkCallback>;
					public static onResponse_EXIT(): void;
					public static newInstance_START(param0: okhttp3.OkHttpClient.Builder): void;
					public static execute(param0: okhttp3.Call): okhttp3.Response;
					public constructor();
					public static onFailure_EXIT(): void;
					public static onFailure_ENTER(param0: okhttp3.Call, param1: java.io.IOException): void;
					public static onResponse_ENTER(param0: okhttp3.Call, param1: okhttp3.Response): void;
					public static enqueue(param0: okhttp3.Call, param1: okhttp3.Callback): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class OkInterceptor {
					public static class: java.lang.Class<com.dynatrace.android.callback.OkInterceptor>;
					public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class OkRequestStateParms extends com.dynatrace.android.callback.WebReqStateParms {
					public static class: java.lang.Class<com.dynatrace.android.callback.OkRequestStateParms>;
					public getRequestClassName(param0: any): string;
					public getRequestClassName(): string;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export class UriReqStateParms extends com.dynatrace.android.callback.WebReqStateParms {
					public static class: java.lang.Class<com.dynatrace.android.callback.UriReqStateParms>;
					public getRequestClassName(param0: any): string;
					public getRequestClassName(): string;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module callback {
				export abstract class WebReqStateParms {
					public static class: java.lang.Class<com.dynatrace.android.callback.WebReqStateParms>;
					public desc: string;
					public getRequestClassName(param0: any): string;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export class Action {
					public static class: java.lang.Class<com.dynatrace.android.lifecycle.Action>;
					/**
					 * Constructs a new instance of the com.dynatrace.android.lifecycle.Action interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export class ActionAggregator {
					public static class: java.lang.Class<com.dynatrace.android.lifecycle.ActionAggregator>;
					/**
					 * Constructs a new instance of the com.dynatrace.android.lifecycle.ActionAggregator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { aggregateLifecycleAction(param0: com.dynatrace.android.lifecycle.action.LifecycleAction): void });
					public constructor();
					public aggregateLifecycleAction(param0: com.dynatrace.android.lifecycle.action.LifecycleAction): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export class LifecycleController {
					public static class: java.lang.Class<com.dynatrace.android.lifecycle.LifecycleController>;
					public createEvent(param0: string, param1: com.dynatrace.android.lifecycle.event.ActivityEventType, param2: number): void;
					public extendDuration(param0: string, param1: number): void;
					public constructor(param0: com.dynatrace.android.lifecycle.action.LifecycleActionFactory, param1: com.dynatrace.android.lifecycle.action.LifecycleActionObserver, param2: com.dynatrace.android.lifecycle.ActionAggregator, param3: com.dynatrace.android.lifecycle.provider.SequenceNumberProvider);
					public closeAction(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module action {
					export class ActivityLifecycleAction extends com.dynatrace.android.lifecycle.action.LifecycleAction {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.action.ActivityLifecycleAction>;
						public getActionCreationTime(): number;
						public getEndTime(): number;
						public setParentAction(param0: com.dynatrace.android.lifecycle.Action): void;
						public setEndTime(param0: number): void;
						public addEvent(param0: com.dynatrace.android.lifecycle.event.LifecycleEvent): void;
						public constructor(param0: string, param1: number, param2: number);
						public getParentAction(): com.dynatrace.android.lifecycle.Action;
						public getLifecycleEvents(): java.util.Set<com.dynatrace.android.lifecycle.event.LifecycleEvent>;
						public getLifecycleOwner(): string;
						public getSequenceNr(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module action {
					export class LifecycleAction {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.action.LifecycleAction>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.lifecycle.action.LifecycleAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { addEvent(param0: com.dynatrace.android.lifecycle.event.LifecycleEvent): void; setEndTime(param0: number): void });
						public constructor();
						public setEndTime(param0: number): void;
						public addEvent(param0: com.dynatrace.android.lifecycle.event.LifecycleEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module action {
					export class LifecycleActionFactory {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.action.LifecycleActionFactory>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.lifecycle.action.LifecycleActionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { createAction(param0: string, param1: number): com.dynatrace.android.lifecycle.action.LifecycleAction });
						public constructor();
						public createAction(param0: string, param1: number): com.dynatrace.android.lifecycle.action.LifecycleAction;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module action {
					export class LifecycleActionFactoryImpl extends com.dynatrace.android.lifecycle.action.LifecycleActionFactory {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.action.LifecycleActionFactoryImpl>;
						public constructor(param0: com.dynatrace.android.lifecycle.provider.SequenceNumberProvider);
						public createAction(param0: string, param1: number): com.dynatrace.android.lifecycle.action.LifecycleAction;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module action {
					export class LifecycleActionObserver {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.action.LifecycleActionObserver>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.lifecycle.action.LifecycleActionObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { closeAction(param0: com.dynatrace.android.lifecycle.action.LifecycleAction): void });
						public constructor();
						public closeAction(param0: com.dynatrace.android.lifecycle.action.LifecycleAction): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module callback {
					export class DynatraceActivityLifecycleListener {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.callback.DynatraceActivityLifecycleListener>;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityPreCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityPostCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityPreResumed(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivityPostStarted(param0: globalAndroid.app.Activity): void;
						public constructor(param0: com.dynatrace.android.lifecycle.LifecycleController);
						public onActivityPostResumed(param0: globalAndroid.app.Activity): void;
						public onActivityPreStarted(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module callback {
					export class DynatraceActivityLifecycleListenerLegacy {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.callback.DynatraceActivityLifecycleListenerLegacy>;
						public onActivityPaused(param0: globalAndroid.app.Activity): void;
						public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
						public onActivityStarted(param0: globalAndroid.app.Activity): void;
						public onActivityResumed(param0: globalAndroid.app.Activity): void;
						public constructor(param0: com.dynatrace.android.lifecycle.LifecycleController);
						public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
						public onActivityStopped(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module event {
					export class ActivityEventType {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.event.ActivityEventType>;
						public static ON_CREATE: com.dynatrace.android.lifecycle.event.ActivityEventType;
						public static ON_START: com.dynatrace.android.lifecycle.event.ActivityEventType;
						public static ON_RESUME: com.dynatrace.android.lifecycle.event.ActivityEventType;
						public static valueOf(param0: string): com.dynatrace.android.lifecycle.event.ActivityEventType;
						public static values(): native.Array<com.dynatrace.android.lifecycle.event.ActivityEventType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module event {
					export class LifecycleEvent {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.event.LifecycleEvent>;
						public constructor(param0: com.dynatrace.android.lifecycle.event.ActivityEventType, param1: number, param2: number);
						public getTimestamp(): number;
						public getSequenceNumber(): number;
						public getEventType(): com.dynatrace.android.lifecycle.event.ActivityEventType;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module provider {
					export class SequenceNumberProvider {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.provider.SequenceNumberProvider>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.lifecycle.provider.SequenceNumberProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { generateSequenceNumber(): number });
						public constructor();
						public generateSequenceNumber(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module dynatrace {
		export module android {
			export module lifecycle {
				export module provider {
					export class TimingProvider {
						public static class: java.lang.Class<com.dynatrace.android.lifecycle.provider.TimingProvider>;
						/**
						 * Constructs a new instance of the com.dynatrace.android.lifecycle.provider.TimingProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getSystemTime(): number });
						public constructor();
						public getSystemTime(): number;
					}
				}
			}
		}
	}
}

//Generics information:
