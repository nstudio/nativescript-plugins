import { AptabaseCommon } from './common';

export class Aptabase extends AptabaseCommon {
    static initialize(appKey: string) {
        NSCAptabase.initializeWithAppKey(appKey);
    }

    static track(name: string, properties?: any) {
        NSCAptabase.trackWithNameProperties(name, properties);
    }
}
