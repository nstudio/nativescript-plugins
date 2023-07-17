import { Application, AndroidActivityNewIntentEventData } from '@nativescript/core';
// import { Inquiry } from '@nstudio/nativescript-persona';

// Inquiry.init();

// Uncomment to test AppCues:
import { AppcuesSDK } from '@nstudio/nativescript-appcues';

AppcuesSDK.on('analytics', (event) => {
	console.log(event);
});

AppcuesSDK.on('experience', (event) => {
	console.log(event);
});

if (global.isAndroid) {
	Application.android.on('activityNewIntent', (args: AndroidActivityNewIntentEventData) => {
		const didHandleURL = AppcuesSDK.didHandleURL(args.intent);
		if (didHandleURL) {
			const uri = args.intent.getData?.() as android.net.Uri;
			console.log(uri?.toString?.());
		}
	});
	Application.android.on('activityCreated', (args) => {
		console.log('activityCreated');
		AppcuesSDK.debug();
	});
	AppcuesSDK.init('69047', 'a2355571-cbd5-4a8e-a0ed-a9ea09f0b904');
} else {
	Application.on('launch', (args) => {
		AppcuesSDK.init('69047', 'a2355571-cbd5-4a8e-a0ed-a9ea09f0b904');
	});
	AppcuesSDK.debug();
}

Application.run({ moduleName: 'app-root' });
