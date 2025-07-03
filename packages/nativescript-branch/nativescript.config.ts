import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'BranchSDK',
				libs: ['BranchSDK'],
				repositoryURL: 'https://github.com/BranchMetrics/ios-branch-sdk-spm',
				version: '3.12.1',
			},
		],
	},
} as NativeScriptConfig;
