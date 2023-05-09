import { InitOptions } from '.';
import { AptabaseCommon } from './common';

function initOptionsFromOptions(options: InitOptions) {
	const initOptions = NSCInitOptions.alloc().init();
	if (options.host) {
		initOptions.host = options.host;
	}

	return initOptions;
}

export class Aptabase extends AptabaseCommon {
	static initialize(appKey: string, opts?: InitOptions) {
		const options = initOptionsFromOptions(opts);
		NSCAptabase.initializeWithAppKey(appKey, options);
	}

	static track(name: string, properties?: any) {
		NSCAptabase.trackWithNameProperties(name, properties);
	}
}
