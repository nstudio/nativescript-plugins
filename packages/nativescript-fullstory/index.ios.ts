import { Utils, View } from '@nativescript/core';
import { FullStoryEvents, FullstorySDKCommon } from './common';

export { FullStoryEvents } from './common';

export class FullstorySDK extends FullstorySDKCommon {
	static identify(id: string, params?: any) {
		FullstorySDK.Log('identify:', id, params);
		if (params) {
			FS.identifyUserVars(id, Utils.dataSerialize(params));
		} else {
			FS.identify(id);
		}
	}

	static setUserVars(params: any) {
		FullstorySDK.Log('setUserVars:', params);
		FS.setUserVars(Utils.dataSerialize(params));
	}

	static consent(consented: boolean) {
		FullstorySDK.Log('consent:', consented);
		FS.consent(consented);
	}

	static shutdown() {
		FullstorySDK.Log('shutdown');
		FS.shutdown();
	}

	static restart() {
		FullstorySDK.Log('restart');
		FS.restart();
	}

	static unmask(view: View) {
		if (view?.ios) {
			FS.unmask(view.ios);
		}
	}

	static unmaskWithConsent(view: View) {
		if (view?.ios) {
			FS.unmaskWithConsent(view.ios);
		}
	}

	static addClass(view: View, name: string): void {
		if (view?.ios) {
			FS.addClassClassName(view.ios, name);
		}
	}

	static addClasses(view: View, names: Array<string>): void {
		if (view?.ios) {
			FS.addClassesClassNames(view.ios, names);
		}
	}

	static removeClass(view: View, name: string): void {
		if (view?.ios) {
			FS.removeClassClassName(view.ios, name);
		}
	}

	static removeClasses(view: View, names: Array<string>): void {
		if (view?.ios) {
			FS.removeClassesClassNames(view.ios, names);
		}
	}

	static setAttribute(view: View, name: string, value: string) {
		if (view?.ios) {
			FS.setAttributeAttributeNameAttributeValue(view.ios, name, value)
		}
	}

	static removeAttribute(view: View, name: string) {
		if (view?.ios) {
			FS.removeAttributeAttributeName(view.ios, name)
		}
	}
}

@NativeClass()
class FSDelegateImpl extends NSObject {
	static ObjCProtocols = [FSDelegate];

	fullstoryDidStartSession(sessionUrl: string): void {
		FullstorySDK.Events().notify({
			eventName: FullStoryEvents.startSession,
			object: FullstorySDK.Events(),
			data: sessionUrl,
		});
	}

	fullstoryDidStopSession(): void {
		FullstorySDK.Events().notify({
			eventName: FullStoryEvents.stopSession,
			object: FullstorySDK.Events(),
		});
	}

	fullstoryDidTerminateWithError(error: NSError): void {
		FullstorySDK.Events().notify({
			eventName: FullStoryEvents.terminateWithError,
			object: FullstorySDK.Events(),
			data: error ? error.localizedDescription : null,
		});
	}
}

export { FSDelegateImpl };
