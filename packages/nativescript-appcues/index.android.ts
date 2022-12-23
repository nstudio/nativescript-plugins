import { Utils } from '@nativescript/core';
import { AppcuesSDKCommon } from './common';

let appcuesInstance: com.appcues.Appcues;

export class AppcuesSDK extends AppcuesSDKCommon {
    static init(accountId: string, appId: string) {
        // console.log('org.koin:', org.koin)
        // for (const key in org.koin) {
        //     console.log(key)
        // }
        // console.log('---')
        // console.dir(org.koin.core.scope.Scope);
        // const koin = new org.koin.core.Koin();
        // koin.createScope()
        // org.koin.core.scope.Scope
        // appcuesInstance = new com.appcues.Appcues(Utils.android.getApplicationContext());//, accountId, appId)
        console.log('Android TODO. Need Osei help on constructor with Koin.Scope.')
    }

    static identify(userId: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.identify(userId, Utils.dataSerialize(properties || {}));
        }
    }

    static track(name: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.track(name, Utils.dataSerialize(properties || {}))
        }
    }

    static trackScreens() {
        if (appcuesInstance) {
            appcuesInstance.trackScreens();
        }
    }

    static screen(title: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.screen(title, Utils.dataSerialize(properties || {}))
        }
    }

    static nativeInstance() {
        return appcuesInstance;
    }
}
