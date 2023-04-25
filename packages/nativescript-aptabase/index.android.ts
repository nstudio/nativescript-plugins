import { AptabaseCommon } from "./common";

export class Aptabase extends AptabaseCommon {
    static initialize(appKey: string) {
        console.log('Not supported on Android yet.')
    }

    static track(name: string, properties?: any) {
        console.log('Not supported on Android yet.')
    }
}