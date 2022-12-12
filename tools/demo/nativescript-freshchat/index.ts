import { DemoSharedBase } from '../utils';
import { FreshChatSDK } from '@nstudio/nativescript-freshchat';

export class DemoSharedFreshChatSDK extends DemoSharedBase {



  initFreshChat() {
    let appID = 'YOURAPPID';
    let appKey = 'YOURAPPKEY';
    let domain = 'YOURDOMAIN.com'
    FreshChatSDK.init(appID, appKey, domain);
    alert('Freshchat initted.')
  }

  setUser() {
    let user = FreshChatSDK.setUser({
      firstName: 'Dave',
      lastName: 'Coffin',
      email: 'dave@davecoffin.com',
      phoneCountryCode: '1',
      phoneNumber: '2075762034'
    })
    if (user) alert('Freshchat user set!')
    console.log('user', user);
  }

  resetUser() {
    if (FreshChatSDK.resetUser()) alert('user reset');
  }

  trackEvent() {
    FreshChatSDK.trackEvent('tookPicture', {
      time: new Date(),
      foo: 'bar'
    })
  }

  setUserProperties() {
    let setProps = FreshChatSDK.setUserProperties({
      old: true,
      isCool: false
    })
    if (setProps) alert('set user properties!')
  }

  showConversations() {
    // You can pass in an array of "tags" to filter conversations.
    let tags;
    tags = ['foo', 'bar'];
    FreshChatSDK.showConversations(tags);
  }

  setExternalID() {
    let identified = FreshChatSDK.identifyUser('1234', null)
    if (identified) alert('External ID set to 1234')
  }

  getRestoreID() {
    // save this ID in your backend, and you can use it along with your external ID to restore conversations across platforms.
    alert(FreshChatSDK.getRestoreID());
  }

  sendMessage() {
    let msg = 'How do I win at chess?';
    FreshChatSDK.sendMessage(msg, 'foo')
    this.showConversations();
  }

  getUnreadCount() {
    FreshChatSDK.getUnreadCount((count) => {
      alert('Count is ' + count);
    })
  }

  showFAQs() {
    FreshChatSDK.showFAQs({
      showContactUsOnAppBar: true,
      showFaqCategoriesAsGrid: true,
      filterByTags: {
        tags: ['foo', 'bar'],
        title: 'My_Tags',
        type: 'ARTICLE'
      }
    });
  }
}