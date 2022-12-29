import { Utils } from '@nativescript/core';
import { FullstorySDKCommon } from './common';

export class FullstorySDK extends FullstorySDKCommon {
	static identify(id: string, params?: any) {
		if (params) {
			FS.identifyUserVars(id, Utils.dataSerialize(params));
		} else {
			FS.identify(id);
		}
	}

	static setUserVars(params: any) {
		FS.setUserVars(Utils.dataSerialize(params));
	}

	static consent(consented: boolean) {
		FS.consent(consented);
	}

	static shutdown() {
		FS.shutdown();
	}

	static restart() {
		FS.restart();
	}
}
