import { Utils } from '@nativescript/core';
import { FullstorySDKCommon } from './common';

export { FullStoryEvents } from './common';

export class FullstorySDK extends FullstorySDKCommon {
	static identify(id: string, params?: any) {
		FullstorySDK.Log('identify:', id, params);
		if (params) {
			com.fullstory.FS.identify(id, Utils.dataSerialize(params, true));
		} else {
			com.fullstory.FS.identify(id);
		}
	}

	static setUserVars(params: any) {
		FullstorySDK.Log('setUserVars:', params);
		com.fullstory.FS.setUserVars(Utils.dataSerialize(params, true));
	}

	static consent(consented: boolean) {
		FullstorySDK.Log('consent:', consented);
		com.fullstory.FS.consent(consented);
	}

	static shutdown() {
		FullstorySDK.Log('shutdown');
		com.fullstory.FS.shutdown();
	}

	static restart() {
		FullstorySDK.Log('restart');
		com.fullstory.FS.restart();
	}
}

// Empty: not needed on Android
export class FSDelegateImpl {}