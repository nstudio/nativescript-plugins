import { Utils } from '@nativescript/core';
import { AptabaseCommon } from './common';

export class Aptabase extends AptabaseCommon {
	static initialize(appKey: string) {
		com.aptabase.Aptabase.getShared().initialize(Utils.android.getApplicationContext(), appKey);
	}

	static track(name: string, properties?: any) {
		const map = new java.util.HashMap<string, any>();
		if (properties) {
			Object.keys(properties).forEach((key) => {
				map.put(key, properties[key]);
			});
		}
		return com.aptabase.Aptabase.getShared().trackEvent(name, map);
	}
}
