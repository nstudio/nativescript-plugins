import { FullstorySDKCommon } from './common';

export declare class FullstorySDK extends FullstorySDKCommon {
	static identify(id: string, params?: any);
	static setUserVars(params: any);
	static consent(consented: boolean);
	static shutdown();
	static restart();
}
