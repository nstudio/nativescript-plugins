![Aptabase](https://aptabase.com/og.png)

# @nstudio/nativescript-aptabase

Instrument your NativeScript apps with Aptabase, an Open Source, Privacy-First and Simple Analytics for Mobile, Desktop and Web Apps.

## Install

Install the SDK using your preferred JavaScript package manager

```bash
pnpm add @nstudio/nativescript-aptabase
# or
npm add @nstudio/nativescript-aptabase
# or
yarn add @nstudio/nativescript-aptabase
```

For iOS, configure your `nativescript.config.ts` to use the Swift Package:

```ts
ios: {
    SPMPackages: [
        {
            name: 'Aptabase',
            libs: ['Aptabase'],
            repositoryURL: 'https://github.com/aptabase/aptabase-swift.git',
            version: '0.1.0'
        }
    ]
}
```

## Usage

First you need to get your `App Key` from Aptabase, you can find it in the `Instructions` menu on the left side menu.

Initialize the SDK using your `App Key` and the `initialize` function. We would recommend calling it as early as possible in your app life cycle. 


```ts
import { Aptabase } from '@nstudio/nativescript-aptabase';

Aptabase.initialize('<YOUR_APP_KEY>'); // 👈 this is where you enter your App Key
```

Afterwards you can start tracking events with `track`:

```js
import { Aptabase } from '@nstudio/nativescript-aptabase';

// Track an event
Aptabase.track("connect_click");
 
// Track events with custom properties
Aptabase.track("play_music", {
  name: "Here comes the sun"
});
```

A few important notes:

1. The SDK will automatically enhance the event with some useful information, like the OS, the app version, and other things.
2. You're in control of what is sent to Aptabase. This SDK does not automatically track any events, you need to call `track` manually.
   - Because of this, it's generally recommended to at least track an event at startup
3. You do not need to await the `track` function, it'll run in the background.
4. Only strings and numbers values are allowed on custom properties

## License

Apache License Version 2.0

