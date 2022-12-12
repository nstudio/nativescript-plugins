# @nstudio/nativescript-freshchat

```javascript
ns plugin add @nstudio/nativescript-freshchat
```

## Usage

The first step is to call the init method, I would recommend calling it as early as possible in your app life cycle. 

```
import { FreshChatSDK } from '@nstudio/nativescript-freshchat';
let appID = 'YOURAPPID';
let appKey = 'YOURAPPKEY';
let domain = 'YOURDOMAIN.com'
FreshChatSDK.init(appID, appKey, domain);
```

Then, you can interact with the Freshchat sdk with the following methods:

#### setUser
You can get basic user information at any point to give you more context on the user when your support agents are messaging back and forth with them. 
```
let user = FreshChatSDK.setUser({
  firstName: 'Dave',
  lastName: 'Coffin',
  email: 'dave@davecoffin.com',
  phoneCountryCode: '1',
  phoneNumber: '2075762034'
})
if (user) alert('Freshchat user set!')
```

#### setUserProperties
You can capture and send additional metadata about the user and the events in the app, all of which also becomes a way to segment your users to later push messages to them.
```
let setProps = FreshChatSDK.setUserProperties({
  old: true,
  isCool: false
})
if (setProps) alert('set user properties!')
```

#### trackEvent
Tracking user events will give you more insight and context about the user(s) in your application. Events like user actions and failure/error cases can be tracked using this API. Tracked events are listed under Events Timeline on the agent side.
```
FreshChatSDK.trackEvent('tookPicture', {
  time: new Date(),
  foo: 'bar'
})
```

#### resetUser
Reset user data at logout or when deemed appropriate based on user action in the app by invoking the resetUser API. Optionally accepts a completion callback.
```
FreshChatSDK.resetUser(() => {
  console.log('user reset!');
})
```

#### showConversations
This method will bring up the user's conversations. You can optionally pass an array of topics.
Different sets of Topics can be displayed to different types of users or on different screens by using tags to filter Topics. 
```
let tags;
tags = ['foo', 'bar'];
FreshChatSDK.showConversations(tags);
```

#### identifyUser
Use this method to both set an external ID and restore a user's conversations using a restore ID previously retrieved. First, you must set a user's external ID (the unique ID on your system).
```
let identified = FreshChatSDK.identifyUser('1234', null)
```
The `identifyUser` method accepts an external ID and a restore ID. The first time you call it, you won't have a restore ID, but identifying a user with an external ID and `null` as restore ID will generate a restore ID for the user. You can get this restore ID by using...

#### getRestoreID
This will return a user's restore ID. 

```
let restoreID = FreshChatSDK.getRestoreID();
this.myService.saveUserRestoreID(restoreID).then(profit); // save the ID in your database or backend system.
```

Save this ID in your system, then when that user changes devices or platforms (visits your app on the web for example), you can restore the user's conversations by calling `identifyUser` again with the restore ID.

```
this.myService.getUserRestoreIDFromMyCoolBackend('1234').subscribe(restoreID => {
  FreshChatSDK.identifyUser('1234', restoreID);
})
```

#### sendMessage
The app can send a message on behalf of the user using the sendMessage: API. It will silently send a message and not launch the Freshchat SDK UI. This API can be helpful in setting more context for customers before starting a conversation. Optionally pass a single tag.
```
let msg = 'How do I win at chess?';
FreshChatSDK.sendMessage(msg, 'foo')
this.showConversations();
```
<i>Note: If there are no matching Topics, the message will be sent to the default Topic. If there are multiple matching Topics, the message will be sent to the oldest Topic. </i>

#### getUnreadCount
If you want to indicate to the users that they have unread messages in their inbox, you can retrieve the unread count to display. The method returns an int indicating the number of unread messages for the user.

```
FreshChatSDK.getUnreadCount((count) => {
  alert('Count is ' + count);
})
```

#### showFAQs
To bring up the Freshchat 's FAQ overlay at any point, use showFAQs() API.

```
FreshChatSDK.showFAQs({
  showContactUsOnAppBar: true,
  showFaqCategoriesAsGrid: true,
  filterByTags: {
    tags: ['foo', 'bar'],
    title: 'My_Tags',
    type: 'ARTICLE'
  }
});
```

This method accepts a config object with the following definition: 
```
export interface FreshchatFAQOptions {
  showFaqCategoriesAsGrid?: boolean // Show FAQ in grid formal, false to list view
  showContactUsOnFaqScreens?: boolean // Show chat option from FAQ section
  showContactUsOnFaqNotHelpful?: boolean // Show contact us in article detail when user select Not Helpful
  showContactUsOnAppBar?: boolean // Show chat option over navigation bar in FAQ category view or article list view
  filterByTags?: {
    tags: Array<any>
    title: string
    type: 'ARTICLE'|'CATEGORY'
  }
  filterContactUsByTags?: {
    tags: Array<any>
    title: string
  }
}
```


## License

Apache License Version 2.0
