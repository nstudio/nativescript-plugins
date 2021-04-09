import { DataCollectionLevel, DynatraceStartupConfigurationBase, IDynatraceAction, IDynatraceStartupConfiguration, IUserPrivacyOptions, LogLevel } from './common';
import { Utils } from '@nativescript/core';

export { DataCollectionLevel, LogLevel };

export class DynatraceStartupConfiguration extends DynatraceStartupConfigurationBase {
	private readonly _native: any;
	get native() {
		return this._native;
	}

	constructor(config: IDynatraceStartupConfiguration) {
		super(false);
		this._native = new com.dynatrace.android.agent.conf.DynatraceConfigurationBuilder(config.applicationId, config.beaconUrl).buildConfiguration();
	}
}

export class ManualStartupConfiguration extends DynatraceStartupConfigurationBase {
	private readonly _native: any;
	get native() {
		return this._native;
	}

	constructor(config: IDynatraceStartupConfiguration) {
		super(true);
		this._native = new com.dynatrace.android.agent.conf.DynatraceConfigurationBuilder(config.applicationId, config.beaconUrl)
			.withCertificateValidation(config?.certificateValidation ?? true)
			.withCrashReporting(config?.reportCrash ?? true)
			.withUserOptIn(config?.userOptIn ?? false)
			.withDebugLogging((config?.logLevel ?? LogLevel.Info) === LogLevel.Debug)
			.buildConfiguration();
	}
}

export class Action implements IDynatraceAction {
	readonly native: com.dynatrace.android.agent.DTXAction;

	private constructor(native: any) {
		this.native = native;
	}

	public static fromNative(native: any) {
		if (native instanceof com.dynatrace.android.agent.DTXAction) {
			return new Action(native);
		}
		return null;
	}

	public leaveAction() {
		this.native.leaveAction();
	}

	public reportError(errorName: string, errorCode: number) {
		this.native.reportError(errorName, errorCode);
	}

	public reportEvent(eventName: string) {
		this.native.reportEvent(eventName);
	}

	public reportValue(valueName: string, value: string | number) {
		if (typeof value === 'string') {
			this.native.reportValue(valueName, value);
		} else if (typeof value === 'number') {
			this.native.reportValue(valueName, value);
		}
	}
}

export class UserPrivacyOptions implements IUserPrivacyOptions {
	crashReportingOptedIn: boolean;
	dataCollectionLevel: DataCollectionLevel;

	public static fromNative(options: any): IUserPrivacyOptions | null {
		if (options instanceof com.dynatrace.android.agent.conf.UserPrivacyOptions) {
			const result = new UserPrivacyOptions();
			switch (options.getDataCollectionLevel()) {
				case com.dynatrace.android.agent.conf.DataCollectionLevel.OFF:
					result.dataCollectionLevel = DataCollectionLevel.Off;
					break;
				case com.dynatrace.android.agent.conf.DataCollectionLevel.PERFORMANCE:
					result.dataCollectionLevel = DataCollectionLevel.Performance;
					break;
				case com.dynatrace.android.agent.conf.DataCollectionLevel.USER_BEHAVIOR:
					result.dataCollectionLevel = DataCollectionLevel.UserBehavior;
					break;
			}
			result.crashReportingOptedIn = options.isCrashReportingOptedIn();
			Object.freeze(result);
			return result;
		}
		return null;
	}
}

export class TNSDynatrace {
	public static start(config: DynatraceStartupConfigurationBase) {
		com.dynatrace.android.agent.Dynatrace.startup(Utils.android.getApplicationContext(), config.native);
	}

	public static enterAction(name: string, action?: Action) {
		if (action instanceof Action) {
			return Action.fromNative(com.dynatrace.android.agent.Dynatrace.enterAction(name, action.native));
		} else {
			return Action.fromNative(com.dynatrace.android.agent.Dynatrace.enterAction(name));
		}
	}

	public static identifyUser(name: string, action?: Action) {
		if (action instanceof Action) {
			com.dynatrace.android.agent.Dynatrace.identifyUser(name, action.native);
		} else {
			com.dynatrace.android.agent.Dynatrace.identifyUser(name);
		}
	}

	public static getUserPrivacyOptions() {
		return UserPrivacyOptions.fromNative(com.dynatrace.android.agent.Dynatrace.getUserPrivacyOptions());
	}

	public static async applyUserPrivacyOptions(options: UserPrivacyOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			if (options instanceof UserPrivacyOptions) {
				const builder = new com.dynatrace.android.agent.conf.UserPrivacyOptions.Builder();
				builder.withCrashReportingOptedIn(options?.crashReportingOptedIn ?? false);
				switch (options.dataCollectionLevel) {
					case DataCollectionLevel.Off:
						builder.withDataCollectionLevel(com.dynatrace.android.agent.conf.DataCollectionLevel.OFF);
						break;
					case DataCollectionLevel.Performance:
						builder.withDataCollectionLevel(com.dynatrace.android.agent.conf.DataCollectionLevel.PERFORMANCE);
						break;
					case DataCollectionLevel.UserBehavior:
						builder.withDataCollectionLevel(com.dynatrace.android.agent.conf.DataCollectionLevel.USER_BEHAVIOR);
				}

				com.dynatrace.android.agent.Dynatrace.applyUserPrivacyOptions(builder.build());
				resolve(null);
			} else {
				reject();
			}
		});
	}

	public static setGPSLocation(latitude: number, longitude: number) {
		const location = new android.location.Location('');
		location.setLatitude(latitude);
		location.setLongitude(longitude);
		com.dynatrace.android.agent.Dynatrace.setGpsLocation(location);
	}

	public static setBeaconHeaders(headers?: Map<string, string>) {
		if (headers instanceof Map) {
			const map = new java.util.HashMap();
			headers.forEach((value, key) => {
				map.put(key, value);
			});
			com.dynatrace.android.agent.Dynatrace.setBeaconHeaders(map);
		} else {
			com.dynatrace.android.agent.Dynatrace.setBeaconHeaders(null);
		}
	}

	public static shutdown() {
		com.dynatrace.android.agent.Dynatrace.shutdown();
	}

	public static endVisit() {
		com.dynatrace.android.agent.Dynatrace.endVisit();
	}

	public static flushEvents() {
		com.dynatrace.android.agent.Dynatrace.flushEvents();
	}
}
