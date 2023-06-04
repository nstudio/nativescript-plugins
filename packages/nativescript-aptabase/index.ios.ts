import { InitOptions } from '.';
import { AptabaseCommon } from './common';

function initOptionsFromOptions(options: InitOptions) {
	if (options?.host) {
    return NSCInitOptions.alloc().initWithHost(options.host);
	}

	return;
}

export class Aptabase extends AptabaseCommon {
	static initialize(appKey: string, opts?: InitOptions) {
		const options = initOptionsFromOptions(opts);
		NSCAptabase.initializeWithAppKeyOpts(appKey, options);
	}

	static track(name: string, properties?: any) {
		NSCAptabase.trackWithNameProperties(name, properties);
	}
}
