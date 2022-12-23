import { Utils } from '@nativescript/core';
import { AppcuesSDKCommon } from './common';

let appcuesInstance: Appcues;

export class AppcuesSDK extends AppcuesSDKCommon {
    static init(accountId: string, appId: string) {
        const config = Config.alloc().initWithAccountIDApplicationID(accountId, appId);
        appcuesInstance = Appcues.alloc().initWithConfig(config);
    }

    static identify(userId: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.identifyWithUserIDProperties(userId, Utils.dataSerialize(properties || {}));
        }
    }

    static track(name: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.trackWithNameProperties(name, Utils.dataSerialize(properties || {}))
        }
    }

    static trackScreens() {
        if (appcuesInstance) {
            appcuesInstance.trackScreens();
        }
    }

    static screen(title: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.screenWithTitleProperties(title, Utils.dataSerialize(properties || {}))
        }
    }

    static nativeInstance() {
        return appcuesInstance;
    }
}
