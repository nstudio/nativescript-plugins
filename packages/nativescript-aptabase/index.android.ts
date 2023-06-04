import { Utils } from '@nativescript/core';
import { AptabaseCommon } from './common';
import { InitOptions } from '.';

function initOptionsFromOptions(options: InitOptions) {
	const initOptions = new com.aptabase.InitOptions();
	if (options?.host) {
		initOptions.setHost(options.host);
	}

	return initOptions;
}

export class Aptabase extends AptabaseCommon {
	static initialize(appKey: string, opts?: InitOptions) {
		const initOptions = initOptionsFromOptions(opts);
		com.aptabase.Aptabase.getInstance().initialize(Utils.android.getApplicationContext(), appKey, initOptions);
	}

	static track(name: string, properties?: any) {
		const map = new java.util.HashMap<string, any>();
		if (properties) {
			Object.keys(properties).forEach((key) => {
				map.put(key, properties[key]);
			});
		}
		return com.aptabase.Aptabase.getInstance().trackEvent(name, map);
	}
}
