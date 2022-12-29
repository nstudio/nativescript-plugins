import { Utils } from '@nativescript/core';
import { FullstorySDKCommon } from './common';

export class FullstorySDK extends FullstorySDKCommon {
	static identify(id: string, params?: any) {
		if (params) {
			com.fullstory.FS.identify(id, Utils.dataSerialize(params, true));
		} else {
			com.fullstory.FS.identify(id);
		}
	}

	static setUserVars(params: any) {
		com.fullstory.FS.setUserVars(Utils.dataSerialize(params, true));
	}

	static consent(consented: boolean) {
		com.fullstory.FS.consent(consented);
	}

	static shutdown() {
		com.fullstory.FS.shutdown();
	}

	static restart() {
		com.fullstory.FS.restart();
	}
}
