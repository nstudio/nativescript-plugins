import { Utils, View } from '@nativescript/core';
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

	static unmask(view: View) {
		if (view?.android) {
			com.fullstory.FS.unmask(view.android);
		}
	}

	static unmaskWithConsent(view: View) {
		if (view?.android) {
			com.fullstory.FS.unmaskWithConsent(view.android);
		}
	}

	static addClass(view: View, name: string): void {
		if (view?.android) {
			com.fullstory.FS.addClass(view.android, name);
		}
	}

	static addClasses(view: View, names: Array<string>): void {
		if (view?.android) {
			com.fullstory.FS.addClasses(view.android, Utils.android.collections.stringArrayToStringSet(names));
		}
	}

	static setAttribute(view: View, name: string, value: string) {
		if (view?.android) {
			com.fullstory.FS.setAttribute(view.android, name, value)
		}
	}

	static removeAttribute(view: View, name: string) {
		if (view?.android) {
			com.fullstory.FS.removeAttribute(view.android, name)
		}
	}
}

// Empty: not needed on Android
export class FSDelegateImpl {}