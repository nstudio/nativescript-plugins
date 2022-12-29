import { Observable } from '@nativescript/core';
import { FullstorySDKCommon } from './common';
export { FullStoryEvents } from './common';

export declare class FullstorySDK extends FullstorySDKCommon {
	static Debug: boolean;
	static Events(): Observable;
	static Log(...args: Array<any>): void;
	static identify(id: string, params?: any);
	static setUserVars(params: any);
	static consent(consented: boolean);
	static shutdown();
	static restart();
}
