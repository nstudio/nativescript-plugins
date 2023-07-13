import { Application } from '@nativescript/core';
// import { Inquiry } from '@nstudio/nativescript-persona';

// Inquiry.init();

// Uncomment to test AppCues:
import { AppcuesSDK } from '@nstudio/nativescript-appcues';
Application.on(Application.launchEvent, () => {
    AppcuesSDK.init('69047', 'a2355571-cbd5-4a8e-a0ed-a9ea09f0b904');
})

Application.run({ moduleName: 'app-root' });
