export enum LogLevel {
	Info,
	Debug,
}

export enum DataCollectionLevel {
	Off,
	Performance,
	UserBehavior,
}

export interface IUserPrivacyOptions {
	crashReportingOptedIn: boolean;
	dataCollectionLevel: DataCollectionLevel;
}

export interface IDynatraceStartupConfiguration {
	beaconUrl: string;
	applicationId: string;
	reportCrash?: boolean;
	logLevel?: LogLevel;
	lifecycleUpdate?: boolean;
	certificateValidation?: boolean;
	userOptIn?: boolean;
}

export interface IDynatraceAction {
	leaveAction(): void;

	reportError(errorName: string, errorCode: number): void;

	reportEvent(eventName: string): void;

	reportValue(valueName: string, value: string | number): void;
}

export abstract class DynatraceStartupConfigurationBase {
	public get native(): any {
		return undefined;
	}

	readonly isManual;

	protected constructor(manual: boolean) {
		this.isManual = manual;
	}
}
