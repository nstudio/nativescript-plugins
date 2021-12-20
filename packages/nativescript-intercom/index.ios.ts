import { IIntercomRegisterUser } from './common';

export class IntercomModule {
	static initialized = false;
	static init(apiKey: string, appId: string) {
		Intercom.setApiKeyForAppId(apiKey, appId);
		IntercomModule.initialized = true;
	}
	static registerIdentifiedUser(options: IIntercomRegisterUser) {
		if (typeof options.userId == 'number') {
			options.userId = String(options.userId);
		}
		if (options.userId && options.email && options.userId.length > 0 && options.email.length > 0) {
			Intercom.registerUserWithUserIdEmail(options.userId, options.email);
		} else if (options.userId && options.userId.length > 0) {
			Intercom.registerUserWithUserId(options.userId);
		} else if (options.email && options.email.length > 0) {
			Intercom.registerUserWithEmail(options.email);
		} else {
			console.log('IntercomModule ERROR - No user registered. You must supply an email, a userId or both');
		}
	}
    static registerUnidentifiedUser() {
        Intercom.registerUnidentifiedUser();
    }
    static displayMessenger() {
        Intercom.presentMessenger();
    }
    static displayMessageComposer(initialMessage?: string) {
        if (initialMessage) {
            Intercom.presentMessageComposer('');
        } else {
            Intercom.presentMessageComposerWithInitialMessage(initialMessage);
        }
    }
    static hideMessenger() {
        Intercom.hideIntercom();
    }
    static reset() {
        Intercom.reset();
    }
}
