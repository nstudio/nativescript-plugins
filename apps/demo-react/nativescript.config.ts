import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'io.nstudio.plugindemoreact',
	appResourcesPath: '../../tools/assets/App_Resources',
  appPath: 'src',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
	cli: {
		packageManager: 'npm'
	}
} as NativeScriptConfig;