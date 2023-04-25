import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'io.nstudio.plugindemo',
	appResourcesPath: '../../tools/assets/App_Resources',
	android: {
		v8Flags: '--expose_gc',
		markingMode: 'none',
	},
	appPath: 'src',
	cli: {
		packageManager: 'npm',
	},
	ios: {
		SPMPackages: [
			{
				name: 'Aptabase',
				libs: ['Aptabase'],
				repositoryURL: 'https://github.com/aptabase/aptabase-swift.git',
				version: '0.0.4'
			}
		]
	}
} as NativeScriptConfig;
