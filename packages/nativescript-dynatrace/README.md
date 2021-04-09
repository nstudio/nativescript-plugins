# @nstudio/dynatrace

```bash
ns plugin add @nstudio/dynatrace
```

## Usage

### Manual OneAgent startup

If you can't do an automated startup through the dynatrace.config.js, you can always perform a
manual startup and decide values such as beaconUrl and applicationId at runtime.

Note: An automated startup usually provides you with a lifecycle application start-up event. A manual startup on the
other hand occurs later, thereby causing you to miss everything, including this application startup event, until the
startup occurs.

A manual startup requires the following two steps:

Deactivate the automated startup in dynatrace.config.js:

```ts
module.exports = {
	android: {
		config: 'dynatrace { configurations { defaultConfig { autoStart.enabled false } } }',
	},
	ios: {
		config: '<key>DTXAutoStart</key> <false/>',
	},
};
```

Make the start-up call with at least beaconUrl and applicationId:
Example of a startup call:

```ts
import { TNSDynatrace, DynatraceStartupConfiguration } from '@nstudio/nativescript-dynatrace';

TNSDynatrace.start(new DynatraceStartupConfiguration({ beaconUrl: 'beaconUrl', applicationId: 'applicationId' }));
```

For more details see the section about startup API.

Note: If you don't deactivate the automated startup with the dynatrace.config.js file, the beaconUrl and applicationId
values have no impact and are thrown away.

#### Manual instrumentation

To use the API of the NativeScript plugin, import the API:

```ts
import { TNSDynatrace } from '@nstudio/nativescript-dynatrace';
```

#### Plugin startup

The manual startup of the plugin is triggered via the start(configuration: ManualStartupConfiguration)
method. If you configured dynatrace.config.js for manual startup then the plugin doesn't send any data when not
calling this function. Besides the application id and the beacon URL, there are several optional configuration
parameters, which are shown in the table below:

```ts
new ManualStartupConfiguration({
	beaconUrl: string,
	applicationId: string,
	reportCrash: boolean,
	logLevel: LogLevel,
	certificateValidation: boolean,
	userOptIn: boolean,
});
```

|     Property name     |  Type   | Default |                                                                                                                                                            Description                                                                                                                                                            |
| :-------------------: | :-----: | :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       beaconUrl       | string  |  null   |                                                                                         Identifies your environment within Dynatrace. This property is mandatory for manual startup. OneAgent issues an error when the key isn't present.                                                                                         |
|     applicationId     | string  |  null   |                                                                                                  Identifies your mobile app. This property is mandatory for manual startup. OneAgent issues an error when the key isn't present.                                                                                                  |
|      reportCrash      | boolean |  true   |                                                                                                                                                         Reports crashes.                                                                                                                                                          |
| certificateValidation | boolean |  true   | Allows the use of self-signed certificates. By default, it is set to false. When set to true, OneAgent accepts self-signed certificates that are not signed by a root-CA. This configuration key doesn't impact mobile app connections. It's only used for OneAgent communication, but doesn't overrule the host-name validation. |
|       userOptIn       | boolean |  false  |                                                            User consent must be queried and set. The privacy settings for data collection and crash reporting can be changed via OneAgent SDK for Mobile as described under Data privacy. The default value is false.                                                             |

Note: The values used for the parameters are their default value.

Attention: Please use those parameters only when doing a manual startup. If you want to do an automated startup, please
configure the properties via the auto startup configuration. You will find a list which explains all the counterparts
for the available options here.

#### Create manual actions

To create a manual action named "MyButton tapped", use the following code. The leaveAction closes
the action again. To report values for this action before closing, see Report Values.

```ts
let myAction = TNSDynatrace.enterAction('MyButton tapped');
//Perform the action and whatever else is needed.
myAction.leaveAction();
```

#### Create manual sub actions

You can create a single manual action as well as sub actions. The MyButton Sub Action is
automatically put under the MyButton tapped. As long as MyButton tapped is open, it gathers all the web requests.

```ts
let myAction = TNSDynatrace.enterAction('MyButton tapped');
let mySubAction = TNSDynatrace.enterAction('MyButton Sub Action');
//Perform the action and whatever else is needed.
mySubAction.leaveAction();
myAction.leaveAction();
```

#### Report values

For any open action you can report certain values. The following API is available for action:

```ts
reportValue(valueName, value);
reportError(errorName, errorCode);
reportEvent(eventName);
```

To report a string value, use the following:

```ts
let myAction = TNSDynatrace.enterAction('MyButton tapped');
myAction.reportStringValue('ValueName', 'ImportantValue');
myAction.leaveAction();
```

Report an error stacktrace To manually report an error stacktrace, use the following API call:

#### Identify a user

You can identify a user and tag the current session with a name by making the following call:

```ts
TNSDynatrace.identifyUser('User XY');
```

Manually report an error You can manually report a crash via the following API call:

```ts
reportError(errorName, errorCode);
```

#### Data collection

The privacy API methods allow you to dynamically change the data-collection level based on the
individual preferences of your end users. Each end user can select from three data-privacy levels:

```ts
export enum DataCollectionLevel {
	Off,
	Performance,
	UserBehavior,
}
```

- Off: Native Agent doesn't capture any monitoring data.
- Performance: Native Agent captures only anonymous performance
  data. Monitoring data that can be used to identify individual users, such as user tags and custom values, aren't
  captured.
- UserBehavior: Native Agent captures both performance and user data. In this mode, Native Agent recognizes and
  reports users who re-visit in future sessions. The API to get and set the current level looks like this:

```ts
getUserPrivacyOptions();
applyUserPrivacyOptions(userPrivacyOptions);
```

To check the current privacy options that are set:

```ts
let privacyOptions = TNSDynatrace.getUserPrivacyOptions();
```

If you want to create a new UserPrivacyOptions object:

```ts
let privacyConfig = new UserPrivacyOptions();
privacyConfig.crashReportingOptedIn = true;
privacyConfig.dataCollectionLevel = DataCollectionLevel.UserBehavior;
```

To set new values to this object:

```ts
privacyConfig.crashReportingOptedIn = false;
privacyConfig.dataCollectionLevel = DataCollectionLevel.Performance;
```

The properties that are used to set the privacy options can also be used to fetch the options:

```ts
let level = privacyConfig.dataCollectionLevel;
let crashReporting = privacyConfig.crashReportingOptedIn;
```

To apply the values that were set on the object:

```ts
TNSDynatrace.applyUserPrivacyOptions(privacyConfig);
```

#### Report GPS Location

You can report latitude and longitude and specify
an optional platform.

```ts
setGPSLocation(latitude, longitude);
```

#### Setting beacon headers

This allows you to put a set of http headers on every agent http
request (i.e. Authorization header etc.). It will also trigger the agent to reconnect to the beacon endpoint with the
new headers.

Note: To clear the previously set headers, call the method without the headers parameter or with a null value for the
headers parameter.

```ts
setBeaconHeaders(headers);
```

#### Structure of the dynatrace.config.js file

The configuration is structured in the following way:

```js
module.exports = {
	android: {
		/* Configuration for Android auto instrumentation*/
	},
	ios: {
		/* Configuration for iOS auto instrumentation */
	},
};
```

#### Manual Startup Counterparts

Here is a list of all the counterparts for the options that can be used with a manual startup. Below the counterparts
table you will find an example configuration block for both Android and iOS.

|     Property name     |    Default    |           Android           |        iOS        |
| :-------------------: | :-----------: | :-------------------------: | :---------------: |
|       beaconUrl       |     null      |     autoStart.beaconUrl     |   DTXBeaconURL    |
|     applicationId     |     null      |   autoStart.applicationId   | DTXApplicationId  |
|      reportCrash      |     true      |       crashReporting        | DTXCrashReporting |
|       logLevel        | LogLevel.Info |     debug.agentLogging      |    DTXLogLevel    |
| certificateValidation |     false     | debug.certificateValidation |  DTXAllowAnyCert  |
|       userOptIn       |     false     |          userOptIn          |   DTXUserOptIn    |

Android block The Android block is a wrapper for the Android configuration you find in the WebUI (in the Mobile
Application Settings). Copy the content into the following block:

android : { config : `CONTENT_OF_ANDROID_CONFIG`
} The content of the config block is directly copied to the Gradle file. To know more about the possible configuration
options, see the DSL documentation of our Gradle plugin.

iOS block The iOS block is a wrapper for the iOS configuration you find in the WebUI (in the Mobile Application
Settings). Copy the content into the following block:

ios : { config : `CONTENT_OF_IOS_CONFIG`
} The content of the config block is directly copied to the plist file. Therefore, you can use every setting that is
possible and you find in the official Mobile Agent documentation.

Define build stages in dynatrace.config.js If you have several stages such as debug, QA, and production, you probably
want to separate them and let them report in different applications. This can be done with two different approaches:

Android In Android, you can enter all the information in the config file. The following dynatrace {} block must be
inserted into the android config variable in your dynatrace.config.js file.

```js
module.exports = {
	android: {
		config: `dynatrace {
configurations {
dev { variantFilter "Debug"}
demo {variantFilter "demo"}
prod {variantFilter "Release"}
}
}`,
	},
};
```

iOS In iOS, you can define some variables in the dynatrace.config.js file. The following properties must be inserted into the iOS config variable in your dynatrace.config.js
file.

```js
module.exports = {
	ios: {
		config: `
<key>DTXApplicationID</key>
<string>Your ApplicationId</string>
<key>DTXBeaconURL</key>
<string>Your Beacon URL</string>
`,
	},
};
```

User opt-in mode Specifies if the user has to opt-in for being monitored. When enabled, you must specify the privacy
setting. For more information, see the API section.

```js
module.exports = {
	android: {
		config: `
dynatrace { configurations { defaultConfig { autoStart{ ... } userOptIn true } } }
`,
	},
	ios: {
		config: `
<key>DTXUserOptIn</key>
</true>
`,
	},
};
```

Native OneAgent debug logs If the instrumentation runs through, and your application starts but you see no data, you
probably need to dig deeper to find out why the OneAgents aren't sending any data. Opening up a support ticket is a
great idea, but gathering logs first is even better.

Android Add the following configuration snippet to your other configuration in dynatrace.config.js right under the
autoStart block (the whole structure is visible, so you know where the config belongs) and run npm run
instrumentDynatrace:

```js
module.exports = {
	android: {
		config: `
dynatrace { configurations { defaultConfig { autoStart{ ... } debug.agentLogging true } } }
`,
	},
};
```

iOS Add the following configuration snippet to your other configuration in dynatrace.config.js (the whole structure is
visible, so you know where the config belongs) and run npm run instrumentDynatrace:

```js
module.exports = {
	ios: {
		config: `
<key>DTXLogLevel</key>
<string>ALL</string>
`,
	},
};
```

## License

Apache License Version 2.0
