import type { StandardEvent } from './common';
export * from './common';

export class Config {
	constructor(accessToken: string, appId: string, tiktokAppId: string | string[]);

	paymentTracking: boolean;

	debugMode: boolean;

	setFlushTimeInterval(seconds: number): this;

	autoTracking: boolean;

	launchTracking: boolean;

	disableAutoEnhancedDataPostbackEvent(): this;

	retentionTracking: boolean;

	installTracking: boolean;

	setIsLowPerformanceDevice(isLowPerformanceDevice: boolean): this;

	setLogLevel(level: LogLevel): this;
}
export class BusinessSdk {
	static initialize(config: Config): Promise<BusinessSdk>;

	static startTrack(): void;

	static identify(externalId: string, externalUserName: string, email: string, phoneNumber: string): void;

	static logout(): void;

	static flush(): void;

	static fetchDeferredDeepLinkData(): Promise<string>;

	static trackEvent(options: { eventName: string; eventId?: string; event?: Events }): void;
}
