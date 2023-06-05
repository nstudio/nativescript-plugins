import { AppcuesSDKCommon } from './common';

export declare class AppcuesSDK extends AppcuesSDKCommon {
    static nativeInstance(): any /* iOS or Android SDK instance */
    static init(accountId: string, appId: string): void;
    static identify(userId: string, properties?: any): void;
    static track(name: string, properties?: any): void;
    static trackScreens(): void;
    static screen(title: string, properties?: any): void;
}
