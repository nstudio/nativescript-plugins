import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'ep.com.universalplantllc.foremantoolbox',
	appResourcesPath: 'App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
		codeCache: true,
		suppressCallJSMethodExceptions: false,
	},
	ios: {
		discardUncaughtJsExceptions: false,
		SPMPackages: [
			{
				name: 'Auth0',
				libs: ['Auth0'],
				repositoryURL: 'https://github.com/auth0/Auth0.swift',
				version: '2.13',
			},
		],
	},
	appPath: 'src',
	cli: {
		packageManager: 'npm',
	},
	hooks: [
		{
			type: 'after-prepare',
			script: '../../../node_modules/@nativescript/appsync/scripts/ios/appsync-ios.js',
		},
		{
			type: 'after-prepare',
			script: '../../../node_modules/@nativescript/appsync/scripts/android/appsync-android.js',
		},
	],
} as NativeScriptConfig;
