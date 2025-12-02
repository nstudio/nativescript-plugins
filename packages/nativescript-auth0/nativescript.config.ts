import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		discardUncaughtJsExceptions: false,
		SPMPackages: [
			{
				name: 'Auth0',
				libs: ['Auth0'],
				repositoryURL: 'https://github.com/auth0/Auth0.swift',
				version: '2.15.1',
			},
		],
	},
} as NativeScriptConfig;
