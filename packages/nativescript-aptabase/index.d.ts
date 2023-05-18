import { AptabaseCommon } from './common';

export interface InitOptions {
	host?: string;
}

export declare class Aptabase extends AptabaseCommon {
	static initialize(appKey: string, initOptions?: InitOptions): void;
	static track(name: string, properties?: Record<string, string | number | boolean>): void;
}
