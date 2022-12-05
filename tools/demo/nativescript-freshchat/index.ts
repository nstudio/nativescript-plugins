import { DemoSharedBase } from '../utils';
import { NativescriptFreshchat } from '@nstudio/nativescript-freshchat';

export class DemoSharedNativescriptFreshchat extends DemoSharedBase {



  initFreshChat() {
    NativescriptFreshchat.init('c3873dc0-2997-4253-b976-841f7f7344bb', '3f151424-a3d8-4deb-8315-7e410c9949e9', 'msdk.freshchat.com');
    alert('Freshchat initted.')
  }

  setUser() {
    let user = NativescriptFreshchat.setUser({
      firstName: 'Dave',
      lastName: 'Coffin',
      email: 'dave@davecoffin.com',
      phoneCountryCode: '1',
      phoneNumber: '2075762034'
    })
    alert('Freshchat user set!')
  }

  showConversations() {
    NativescriptFreshchat.showConversations();
  }

  setExternalID() {
    NativescriptFreshchat.identifyUser('1234', null)
    alert('External ID set to 1234')
  }

  getRestoreID() {
    // save this ID in your backend, and you can use it along with your external ID to restore conversations across platforms.
    alert(NativescriptFreshchat.getRestoreID());
  }
}