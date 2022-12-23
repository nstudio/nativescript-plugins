import { DemoSharedBase } from '../utils';
import { AppcuesSDK } from '@nstudio/nativescript-appcues';

export class DemoSharedNativescriptAppcues extends DemoSharedBase {

  init() {
    AppcuesSDK.init('123', '123');
  }

  track() {
    AppcuesSDK.track('hello', {
      name: 'Test'
    });
  }
}