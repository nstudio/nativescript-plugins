import { DemoSharedBase } from '../utils';
import { AppcuesSDK } from '@nstudio/nativescript-appcues';

export class DemoSharedNativescriptAppcues extends DemoSharedBase {

  init() {
    AppcuesSDK.init('<account-id>', '<app-id>');
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