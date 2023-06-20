import { DemoSharedBase } from '../utils';
import { Aptabase } from '@nstudio/nativescript-aptabase';

export class DemoSharedNativescriptAptabase extends DemoSharedBase {

  init() {
    Aptabase.initialize('<api-key>')
  }

  trackEvent() {
    Aptabase.track('Hello Aptabase')
  }

  trackEventWithData() {
    Aptabase.track('Hello Aptabase', { 
      from: 'NativeScript',
      trackPlayed: 1,
      count: 5
    })
  }
}