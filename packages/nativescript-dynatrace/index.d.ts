import { DataCollectionLevel, DynatraceStartupConfigurationBase, LogLevel, IUserPrivacyOptions, IDynatraceAction, IDynatraceStartupConfiguration } from './common';

export { DataCollectionLevel, LogLevel, IDynatraceStartupConfiguration };

export declare class Action implements IDynatraceAction {
	readonly native: any;

	private constructor(native: any);

	public leaveAction();

	public reportError(errorName: string, errorCode: number);

	public reportEvent(eventName: string);

	public reportValue(valueName: string, value: string | number);
}

export declare class DynatraceStartupConfiguration extends DynatraceStartupConfigurationBase {
	native(): any;
	constructor(config: IDynatraceStartupConfiguration);
}

export declare class ManualStartupConfiguration extends DynatraceStartupConfigurationBase {
	native(): any;
	constructor(config: IDynatraceStartupConfiguration);
}

export declare class UserPrivacyOptions implements IUserPrivacyOptions {
	crashReportingOptedIn: boolean;
	dataCollectionLevel: DataCollectionLevel;
}

export declare class TNSDynatrace {
	public static start(config: DynatraceStartupConfigurationBase);

	public static enterAction(name: string, action?: Action): Action;

	public static identifyUser(name: string, action?: Action);

	public static getUserPrivacyOptions(): UserPrivacyOptions;

	public static applyUserPrivacyOptions(options: UserPrivacyOptions): Promise<any>;

	public static setGPSLocation(latitude: number, longitude: number);

	public static setBeaconHeaders(headers?: Map<string, string>);

	public static shutdown();

	public static endVisit();

	public static flushEvents();
}
