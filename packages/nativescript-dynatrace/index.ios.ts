import { DataCollectionLevel, DynatraceStartupConfigurationBase, IDynatraceAction, IDynatraceStartupConfiguration, IUserPrivacyOptions, LogLevel } from './common';

export { DataCollectionLevel, LogLevel };
export class DynatraceStartupConfiguration extends DynatraceStartupConfigurationBase {
	get native() {
		return null;
	}
	config: IDynatraceStartupConfiguration;
	constructor(config: IDynatraceStartupConfiguration) {
		super(false);
		this.config = config;
	}
}

export class ManualStartupConfiguration extends DynatraceStartupConfigurationBase {
	get native() {
		return null;
	}
	config: IDynatraceStartupConfiguration;
	constructor(config: IDynatraceStartupConfiguration) {
		super(true);
		this.config = config;
	}
}

export class Action implements IDynatraceAction {
	readonly native: DTXAction;

	private constructor(native: any) {
		this.native = native;
	}

	public static fromNative(native: any) {
		if (native instanceof DTXAction) {
			return new Action(native);
		}
		return null;
	}

	public leaveAction() {
		this.native.leaveAction();
	}

	public reportError(errorName: string, errorCode: number) {
		this.native.reportErrorWithNameErrorValue(errorName, errorCode);
	}

	public reportEvent(eventName: string) {
		this.native.reportEventWithName(eventName);
	}

	public reportValue(valueName: string, value: string | number) {
		if (typeof value === 'string') {
			this.native.reportValueWithNameStringValue(valueName, value);
		} else if (typeof value === 'number') {
			if (String(value).indexOf('.')) {
				this.native.reportValueWithNameDoubleValue(valueName, value);
			} else {
				this.native.reportValueWithNameIntValue(valueName, value);
			}
		}
	}
}

export class UserPrivacyOptions implements IUserPrivacyOptions {
	crashReportingOptedIn: boolean;
	dataCollectionLevel: DataCollectionLevel;

	public static fromNative(options: any): IUserPrivacyOptions | null {
		if (options) {
			const result = new UserPrivacyOptions();
			switch (options.dataCollectionLevel) {
				case DTX_DataCollectionLevel.Off:
					result.dataCollectionLevel = DataCollectionLevel.Off;
					break;
				case DTX_DataCollectionLevel.Performance:
					result.dataCollectionLevel = DataCollectionLevel.Performance;
					break;
				case DTX_DataCollectionLevel.UserBehavior:
					result.dataCollectionLevel = DataCollectionLevel.UserBehavior;
					break;
			}
			result.crashReportingOptedIn = options.crashReportingOptedIn;
			Object.freeze(result);
			return result;
		}
		return null;
	}
}

export class TNSDynatrace {
	public static start(config: DynatraceStartupConfigurationBase) {
		const options = (config as any).config as IDynatraceStartupConfiguration;
		const opts = {};
		opts[kDTXCrashReportingEnabled] = true;
		opts[kDTXLogLevel] = 'INFO';
		opts[kDTXAllowAnyCert] = false;
		opts[kDTXUserOptIn] = false;
		Object.keys(options).forEach((key) => {
			const value = options[key];
			switch (key) {
				case 'beaconUrl':
					opts[kDTXBeaconURL] = value;
					break;
				case 'applicationId':
					opts[kDTXApplicationID] = value;
					break;
				case 'reportCrash':
					opts[kDTXCrashReportingEnabled] = value;
					break;
				case 'logLevel':
					if (value === LogLevel.Debug) {
						opts[kDTXLogLevel] = 'ALL';
					} else {
						opts[kDTXLogLevel] = 'INFO';
					}
					break;
				case 'certificateValidation':
					opts[kDTXAllowAnyCert] = !value;
					break;
				case 'userOptIn':
					opts[kDTXUserOptIn] = value;
					break;
			}
		});
		Dynatrace.startupWithConfig(opts as any);
	}

	public static enterAction(name: string, action?: Action) {
		if (action instanceof Action) {
			return Action.fromNative(DTXAction.enterActionWithNameParentAction(name, action.native));
		} else {
			return Action.fromNative(DTXAction.enterActionWithName(name));
		}
	}

	public static identifyUser(name: string, action?: Action) {
		if (action instanceof Action) {
			Dynatrace.identifyUserParentAction(name, action.native);
		} else {
			Dynatrace.identifyUser(name);
		}
	}

	public static getUserPrivacyOptions() {
		return UserPrivacyOptions.fromNative(Dynatrace.userPrivacyOptions());
	}

	public static async applyUserPrivacyOptions(options: UserPrivacyOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			if (options instanceof UserPrivacyOptions) {
				const builder = Dynatrace.userPrivacyOptions();
				builder.crashReportingOptedIn = options.crashReportingOptedIn;
				switch (options.dataCollectionLevel) {
					case DataCollectionLevel.Off:
						builder.dataCollectionLevel = DTX_DataCollectionLevel.Off;
						break;
					case DataCollectionLevel.Performance:
						builder.dataCollectionLevel = DTX_DataCollectionLevel.Performance;
						break;
					case DataCollectionLevel.UserBehavior:
						builder.dataCollectionLevel = DTX_DataCollectionLevel.UserBehavior;
				}

				Dynatrace.applyUserPrivacyOptionsCompletion(builder, (completed) => {
					if (completed) {
						resolve(null);
					} else {
						reject();
					}
				});
			} else {
				reject();
			}
		});
	}

	public static setGPSLocation(latitude: number, longitude: number) {
		Dynatrace.setGpsLocation(CLLocation.alloc().initWithLatitudeLongitude(latitude, longitude));
	}

	public static setBeaconHeaders(headers?: Map<string, string>) {
		if (headers instanceof Map) {
			//@ts-ignore
			const map = Object.fromEntries(headers);
			Dynatrace.setBeaconHeaders(map as any);
		} else {
			Dynatrace.setBeaconHeaders(null);
		}
	}

	public static shutdown() {
		Dynatrace.shutdown();
	}

	public static endVisit() {
		Dynatrace.endVisit();
	}

	public static flushEvents() {
		Dynatrace.flushEvents();
	}
}
