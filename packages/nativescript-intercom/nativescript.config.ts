import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'Intercom',
				libs: ['Intercom'],
				repositoryURL: 'https://github.com/intercom/intercom-ios-sp.git',
				version: '19.3.2',
			},
		],
	},
} as NativeScriptConfig;
