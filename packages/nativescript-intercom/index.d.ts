import { IIntercomRegisterUser } from './common';
export * from './common';
export declare class IntercomModule {
	static initialized: boolean;
	static init(apiKey: string, appId: string): void;
	static registerIdentifiedUser(options: IIntercomRegisterUser): void;
	static registerUnidentifiedUser(): void;
	static setUserJwt(jwt: string): void;
	static displayMessenger(): void;
	static displayMessageComposer(initialMessage?: string): void;
	static hideMessenger(): void;
	static setThemeOverride(style: 'none' | 'light' | 'dark' | 'system'): void;
	static reset(): void;
}
