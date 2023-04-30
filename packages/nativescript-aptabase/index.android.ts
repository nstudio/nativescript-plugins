import { Utils } from '@nativescript/core';
import { AptabaseCommon } from './common';

export class Aptabase extends AptabaseCommon {
	static initialize(appKey: string) {
		org.nativescript.plugins.aptabase.Aptabase.Companion.getShared().initialize(appKey, Utils.android.getApplicationContext());
	}

	static track(name: string, properties?: any) {
		const map = new java.util.HashMap<string, any>();
		if (properties) {
			Object.keys(properties).forEach((key) => {
				map.put(key, properties[key]);
			});
		}
		return org.nativescript.plugins.aptabase.Aptabase.Companion.getShared().trackEvent(name, map);
	}
}
