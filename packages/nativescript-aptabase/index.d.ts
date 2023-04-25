import { AptabaseCommon } from './common';

export declare class Aptabase extends AptabaseCommon {
    static initialize(appKey: string): void;
    static track(name: string, properties?: any): void;
}
