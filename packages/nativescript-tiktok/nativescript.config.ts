import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'TikTokBusinessSDK',
				libs: ['TikTokBusinessSDK'],
				repositoryURL: 'https://github.com/tiktok/tiktok-business-ios-sdk',
				version: '1.6.0',
			},
		],
	},
} as NativeScriptConfig;
