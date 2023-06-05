# Appcues NativeScript Plugin

Appcues NativeScript Plugin allows you to integrate Appcues experiences into your iOS and Android devices.

- [Appcues NativeScript Plugin](#appcues-nativescript-plugin)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [One Time Setup](#one-time-setup)
      - [Initializing the SDK](#initializing-the-sdk)
    - [Identifying Users](#identifying-users)
    - [Tracking Screens and Events](#tracking-screens-and-events)
  - [📝 Documentation](#-documentation)
  - [🎬 Examples](#-examples)
  - [📄 License](#-license)

## 🚀 Getting Started

### Prerequisites

**Android** - your application's `App_Resources/Android/app.gradle` must have a `compileSdkVersion` of 33+ and `minSdkVersion` of 21+
```
android {
    compileSdkVersion 33

    defaultConfig {
        minSdkVersion 21
    }
}
```

**iOS** - your application must target iOS 11+ to install the SDK, and iOS 13+ to render Appcues content. Update the `App_Resources/iOS/build.xcconfig` to set the deployment target, if needed. In the application's `App_Resources/iOS/Podfile`, include at least this minimum version.
```rb
# Podfile
platform :ios, '11.0'
```

### Installation

In your app's root directory, run:
```sh
npm install @nstudio/nativescript-appcues
```

### One Time Setup

#### Initializing the SDK

An instance of the Appcues SDK should be initialized when your app launches.

```js
import { Application } from '@nativescript/core';
import { AppcuesSDK } from '@nstudio/nativescript-appcues';

Application.on(Application.launchEvent, () => {
    AppcuesSDK.init('APPCUES_ACCOUNT_ID', 'APPCUES_APPLICATION_ID');
});
```

Initializing the SDK requires you to provide two values, an Appcues account ID, and an Appcues mobile application ID. These values can be obtained from your [Appcues settings](https://studio.appcues.com/settings/account). Refer to the help documentation on [Registering your mobile app in Studio](https://docs.appcues.com/article/848-registering-your-mobile-app-in-studio) for more information.

### Identifying Users

In order to target content to the right users at the right time, you need to identify users and send Appcues data about them. A user is identified with a unique ID.

```js
// Identify a user
AppcuesSDK.identify('my-user-id')
// Identify a user with property
AppcuesSDK.identify('my-user-id', { company: "Appcues"})
```

### Tracking Screens and Events

Events are the “actions” your users take in your application, which can be anything from clicking a certain button to viewing a specific screen. Once you’ve installed and initialized the Appcues NativeScript Plugin, you can start tracking screens and events using the following methods:

```js
// Track event
AppcuesSDK.track("Sent Message")
// Track event with property
AppcuesSDK.track("Deleted Contact", { id: 123 })

// Track screen
AppcuesSDK.screen("Contact List")   
// Track screen with property
AppcuesSDK.screen("Contact List", { reference: "abc" })
```

## 📝 Documentation

API is available [here](http://github.com/nstudio/nativescript-plugins/tree/main/packages/nativescript-appcues/index.d.ts).

> Full documentation is available at https://docs.appcues.com/

## 🎬 Examples

The [demo example](https://github.com/nstudio/nativescript-plugins/tree/main/tools/demo/nativescript-appcues) in this repository contains example iOS/Android app to providing references for correct installation and usage of the Appcues API.

## 📄 License

This project is licensed under the Apache 2.0 License. See [LICENSE](https://github.com/nstudio/nativescript-plugins/blob/main/LICENSE) for more information.
