import { DemoSharedBase } from '../utils';
import { AppcuesSDK } from '@nstudio/nativescript-appcues';

export class DemoSharedNativescriptAppcues extends DemoSharedBase {

  init() {
    //AppcuesSDK.init('69047', 'a2355571-cbd5-4a8e-a0ed-a9ea09f0b904');
    AppcuesSDK.show('11111').then(shown =>{
      console.log('shown', shown);
    })
    .catch(err =>{
      console.log('error', err);
    })
  }

  track() {
    AppcuesSDK.track('hello', {
      name: 'Test'
    });
  }

  identify() {
    AppcuesSDK.identify('789', {
      name: 'Testing Demo'
    })
  }
}