module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...React...': {
				script: `npx cowsay "You like your TS with an X..."`,
				description: ` 🔻 React`,
			},
			'demo-react': {
				clean: {
					script: 'nx run demo-react:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-react:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-react:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Svelte...': {
				script: `npx cowsay "You are a minimalist!"`,
				description: ` 🔻 Svelte`,
			},
			'demo-svelte': {
				clean: {
					script: 'nx run demo-svelte:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-svelte:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-svelte:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Vue...': {
				script: `npx cowsay "You like the vue here..."`,
				description: ` 🔻 Vue`,
			},
			'demo-vue': {
				clean: {
					script: 'nx run demo-vue:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-vue:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-vue:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@nstudio/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nstudio/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nstudio': {
			// @nstudio/nativescript-filterable-listpicker
			'nativescript-filterable-listpicker': {
				build: {
					script: 'nx run nativescript-filterable-listpicker:build.all',
					description: '@nstudio/nativescript-filterable-listpicker: Build',
				},
			},
			// @nstudio/nativescript-exoplayer
			'nativescript-exoplayer': {
				build: {
					script: 'nx run nativescript-exoplayer:build.all',
					description: '@nstudio/nativescript-exoplayer: Build',
				},
			},
			// @nstudio/nativescript-checkbox
			'nativescript-checkbox': {
				build: {
					script: 'nx run nativescript-checkbox:build.all',
					description: '@nstudio/nativescript-checkbox: Build',
				},
			},
			// @nstudio/nativescript-onfido
			'nativescript-onfido': {
				build: {
					script: 'nx run nativescript-onfido:build.all',
					description: '@nstudio/nativescript-onfido: Build',
				},
			},
			// @nstudio/nativescript-plaid
			'nativescript-plaid': {
				build: {
					script: 'nx run nativescript-plaid:build.all',
					description: '@nstudio/nativescript-plaid: Build',
				},
			},
			// @nstudio/nativescript-input-mask
			'nativescript-input-mask': {
				build: {
					script: 'nx run nativescript-input-mask:build.all',
					description: '@nstudio/nativescript-input-mask: Build',
				},
			},
			// @nstudio/nativescript-camera-plus
			'nativescript-camera-plus': {
				build: {
					script: 'nx run nativescript-camera-plus:build.all',
					description: '@nstudio/nativescript-camera-plus: Build',
				},
			},
			// @nstudio/nativescript-dynatrace
			'nativescript-dynatrace': {
				build: {
					script: 'nx run nativescript-dynatrace:build.all',
					description: '@nstudio/nativescript-dynatrace: Build',
				},
			},
			// @nstudio/nativescript-tracking-transparency
			'nativescript-tracking-transparency': {
				build: {
					script: 'nx run nativescript-tracking-transparency:build.all',
					description: '@nstudio/nativescript-tracking-transparency: Build',
				},
			},
			// @nstudio/nativescript-fancyalert
			'nativescript-fancyalert': {
				build: {
					script: 'nx run nativescript-fancyalert:build.all',
					description: '@nstudio/nativescript-fancyalert: Build',
				},
			},
			// @nstudio/nativescript-blur
			'nativescript-blur': {
				build: {
					script: 'nx run nativescript-blur:build.all',
					description: '@nstudio/nativescript-blur: Build',
				},
			},
			// @nstudio/nativescript-qr
			'nativescript-qr': {
				build: {
					script: 'nx run nativescript-qr:build.all',
					description: '@nstudio/nativescript-qr: Build',
				},
			},
			// @nstudio/nativescript-embrace
			'nativescript-embrace': {
				build: {
					script: 'nx run nativescript-embrace:build.all',
					description: '@nstudio/nativescript-embrace: Build',
				},
			},
			// @nstudio/nativescript-airship
			'nativescript-airship': {
				build: {
					script: 'nx run nativescript-airship:build.all',
					description: '@nstudio/nativescript-airship: Build',
				},
			},
			// @nstudio/nativescript-airship-fcm
			'nativescript-airship-fcm': {
				build: {
					script: 'nx run nativescript-airship-fcm:build.all',
					description: '@nstudio/nativescript-airship-fcm: Build',
				},
			},
			// @nstudio/nativescript-airship-adm
			'nativescript-airship-adm': {
				build: {
					script: 'nx run nativescript-airship-adm:build.all',
					description: '@nstudio/nativescript-airship-adm: Build',
				},
			},
			// @nstudio/nativescript-airship-hms
			'nativescript-airship-hms': {
				build: {
					script: 'nx run nativescript-airship-hms:build.all',
					description: '@nstudio/nativescript-airship-hms: Build',
				},
			},
			// @nstudio/nativescript-barcodescanner
			'nativescript-barcodescanner': {
				build: {
					script: 'nx run nativescript-barcodescanner:build.all',
					description: '@nstudio/nativescript-barcodescanner: Build',
				},
			},
			// @nstudio/nativescript-intercom
			'nativescript-intercom': {
				build: {
					script: 'nx run nativescript-intercom:build.all',
					description: '@nstudio/nativescript-intercom: Build',
				},
			},
			// @nstudio/nativescript-loading-indicator
			'nativescript-loading-indicator': {
				build: {
					script: 'nx run nativescript-loading-indicator:build.all',
					description: '@nstudio/nativescript-loading-indicator: Build',
				},
			},
			// @nstudio/nativescript-carousel
			'nativescript-carousel': {
				build: {
					script: 'nx run nativescript-carousel:build.all',
					description: '@nstudio/nativescript-carousel: Build',
				},
			},
			// @nstudio/nativescript-persona
			'nativescript-persona': {
				build: {
					script: 'nx run nativescript-persona:build.all',
					description: '@nstudio/nativescript-persona: Build',
				}
			},
			// @nstudio/nativescript-walletconnect
			'nativescript-walletconnect': {
				build: {
					script: 'nx run nativescript-walletconnect:build.all',
					description: '@nstudio/nativescript-walletconnect: Build',
				},
			},
			'build-all': {
				script: 'nx run-many --target=build.all --all',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-filterable-listpicker': {
				script: 'nx run nativescript-filterable-listpicker:focus',
				description: 'Focus on @nstudio/nativescript-filterable-listpicker',
			},
			'nativescript-exoplayer': {
				script: 'nx run nativescript-exoplayer:focus',
				description: 'Focus on @nstudio/nativescript-exoplayer',
			},
			'nativescript-checkbox': {
				script: 'nx run nativescript-checkbox:focus',
				description: 'Focus on @nstudio/nativescript-checkbox',
			},
			'nativescript-onfido': {
				script: 'nx run nativescript-onfido:focus',
				description: 'Focus on @nstudio/nativescript-onfido',
			},
			'nativescript-plaid': {
				script: 'nx run nativescript-plaid:focus',
				description: 'Focus on @nstudio/nativescript-plaid',
			},
			'nativescript-input-mask': {
				script: 'nx run nativescript-input-mask:focus',
				description: 'Focus on @nstudio/nativescript-input-mask',
			},
			'nativescript-camera-plus': {
				script: 'nx run nativescript-camera-plus:focus',
				description: 'Focus on @nstudio/nativescript-camera-plus',
			},
			'nativescript-dynatrace': {
				script: 'nx run nativescript-dynatrace:focus',
				description: 'Focus on @nstudio/nativescript-dynatrace',
			},
			'nativescript-tracking-transparency': {
				script: 'nx run nativescript-tracking-transparency:focus',
				description: 'Focus on @nstudio/nativescript-tracking-transparency',
			},
			'nativescript-fancyalert': {
				script: 'nx run nativescript-fancyalert:focus',
				description: 'Focus on @nstudio/nativescript-fancyalert',
			},
			'nativescript-blur': {
				script: 'nx run nativescript-blur:focus',
				description: 'Focus on @nstudio/nativescript-blur',
			},
			'nativescript-qr': {
				script: 'nx run nativescript-qr:focus',
				description: 'Focus on @nstudio/nativescript-qr',
			},
			'nativescript-embrace': {
				script: 'nx run nativescript-embrace:focus',
				description: 'Focus on @nstudio/nativescript-embrace',
			},
			'nativescript-airship': {
				script: 'nx run nativescript-airship:focus',
				description: 'Focus on @nstudio/nativescript-airship',
			},
			'nativescript-airship-fcm': {
				script: 'nx run nativescript-airship-fcm:focus',
				description: 'Focus on @nstudio/nativescript-airship-fcm',
			},
			'nativescript-airship': {
				script: 'nx run nativescript-airship:focus',
				description: 'Focus on @nstudio/nativescript-airship',
			},
			'nativescript-airship-adm': {
				script: 'nx run nativescript-airship-adm:focus',
				description: 'Focus on @nstudio/nativescript-airship-adm',
			},
			'nativescript-airship-hms': {
				script: 'nx run nativescript-airship-hms:focus',
				description: 'Focus on @nstudio/nativescript-airship-hms',
			},
			'nativescript-barcodescanner': {
				script: 'nx run nativescript-barcodescanner:focus',
				description: 'Focus on @nstudio/nativescript-barcodescanner',
			},
			'nativescript-intercom': {
				script: 'nx run nativescript-intercom:focus',
				description: 'Focus on @nstudio/nativescript-intercom',
			},
			'nativescript-loading-indicator': {
				script: 'nx run nativescript-loading-indicator:focus',
				description: 'Focus on @nstudio/nativescript-loading-indicator',
			},
			'nativescript-carousel': {
				script: 'nx run nativescript-carousel:focus',
				description: 'Focus on @nstudio/nativescript-carousel',
			},
			'nativescript-persona': {
				script: 'nx run nativescript-persona:focus',
				description: 'Focus on @nstudio/nativescript-persona',
			},
			'nativescript-walletconnect': {
				script: 'nx run nativescript-walletconnect:focus',
				description: 'Focus on @nstudio/nativescript-walletconnect',
			},
			reset: {
				script: 'nx g @nativescript/plugin-tools:focus-packages',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
