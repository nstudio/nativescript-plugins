import { DemoSharedBase } from '../utils';
import { FullstorySDK } from '@nstudio/nativescript-fullstory';

export class DemoSharedNativescriptFullstory extends DemoSharedBase {

  testIt() {
    FullstorySDK.identify('1234')
  }
}