import { Utils } from '@nativescript/core';
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
