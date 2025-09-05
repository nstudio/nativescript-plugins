import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'MBProgressHUD',
				libs: ['MBProgressHUD'],
				repositoryURL: 'https://github.com/jdg/MBProgressHUD.git',
				version: '1.2.0',
			},
		],
	},
} as NativeScriptConfig;
