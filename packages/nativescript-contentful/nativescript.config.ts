import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'Contentful',
				libs: ['Contentful'],
				repositoryURL: 'https://github.com/contentful/contentful.swift',
				version: '5.0.0',
			},
		],
	},
} as NativeScriptConfig;
