import { Utils } from '@nativescript/core';
import { FullstorySDKCommon } from './common';

export class FullstorySDK extends FullstorySDKCommon {
    static identify(id: string, params?: any) {
        FS.identify(id);
        if (params) {
            FS.identifyUserVars(id, Utils.dataSerialize(params));
        }
    }
}
