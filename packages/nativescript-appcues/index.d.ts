import { AppcuesSDKCommon } from './common';
import { EventData } from '@nativescript/core';

export declare class AppcuesSDK extends AppcuesSDKCommon {
    static nativeInstance(): any /* iOS or Android SDK instance */
    static init(accountId: string, appId: string): void;
    static identify(userId: string, properties?: any): void;
    static track(name: string, properties?: any): void;
    static trackScreens(): void;
    static screen(title: string, properties?: any): void;
    static show(experienceId: string): Promise<boolean>;
    static reset(): void;
    static anonymous(properties?: any);
	static group(groupId?: string, properties?: any);
    static debug();
    static didHandleURL(value: any): boolean;
    static on(event: 'analytics', callback: (args: EventData & {
        type: 'identify' | 'group' | 'event' | 'screen',
		value: string,
		properties: Record<any, any>,
		isInternal: boolean,
    }) => void, thisArg?: any): void;
    static on(event: 'experience', callback: (args: EventData & {
        started: boolean,
        id: string
    }) => void, thisArg?: any): void;
}
