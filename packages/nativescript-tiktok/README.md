# @nstudio/nativescript-tiktok

TikTok Business SDK (App Events) for NativeScript.

## Installation

```bash
npm install @nstudio/nativescript-tiktok
```

## Prerequisites

Before initializing the SDK, make sure you have:

- A TikTok Business account.
- Your **Access Token**.
- Your **App ID**.
- Your **TikTok App ID** (single ID or multiple IDs).

Official TikTok docs:

- TikTok Business SDK / App Events docs: https://business-api.tiktok.com/portal/docs?id=1739584951798785

## Quick Start

Initialize once when your app launches.

```ts
import { Application } from '@nativescript/core';
import { BusinessSdk, Config, LogLevel } from '@nstudio/nativescript-tiktok';

Application.on(Application.launchEvent, async () => {
	const config = new Config(
		'<TIKTOK_ACCESS_TOKEN>',
		'<TIKTOK_APP_ID>',
		'<TIKTOK_SDK_APP_ID>'
	)
		.setLogLevel(LogLevel.Warning)
		.setFlushTimeInterval(15);

	config.debugMode = false;
	config.autoTracking = true;

	await BusinessSdk.initialize(config);
});
```

If you disable auto-tracking (`config.autoTracking = false`), start tracking manually:

```ts
BusinessSdk.startTrack();
```

## Configuration

`Config` constructor:

```ts
new Config(accessToken: string, appId: string, tiktokAppId: string | string[])
```

### Config properties

- `paymentTracking: boolean`
- `debugMode: boolean`
- `autoTracking: boolean`
- `launchTracking: boolean`
- `retentionTracking: boolean`
- `installTracking: boolean`

### Config methods

- `setFlushTimeInterval(seconds: number): this`
- `disableAutoEnhancedDataPostbackEvent(): this`
- `setIsLowPerformanceDevice(isLowPerformanceDevice: boolean): this`
- `setLogLevel(level: LogLevel): this`

### Log levels

```ts
enum LogLevel {
	None = 0,
	Info = 1,
	Warning = 2,
	Debug = 3,
}
```

## User Identity

Use `identify` to associate events with your user profile:

```ts
BusinessSdk.identify(
	'external-user-id',
	'username',
	'user@example.com',
	'+11234567890'
);
```

Clear identity with:

```ts
BusinessSdk.logout();
```

## Event Tracking

The plugin supports generic and strongly-typed event tracking.

```ts
BusinessSdk.trackEvent({
	eventName: 'registration',
	eventId: 'evt-001',
	event: {
		type: 'registration',
		method: 'email',
	},
});
```

### Standard event names

Use `StandardEvent` for type-safe event names.

```ts
import { StandardEvent } from '@nstudio/nativescript-tiktok';

BusinessSdk.trackEvent({
	eventName: StandardEvent.Purchase,
	eventId: 'order-1001',
	event: {
		type: StandardEvent.Purchase,
		content_type: 'product',
		content_id: 'sku_42',
		description: 'Premium Plan',
		currency: 'USD',
		value: '9.99',
	},
});
```

### Content events

The following event types require content-related fields:

- `addToCart`
- `addToWishlist`
- `checkout`
- `purchase`
- `viewContent`

Required fields for those events:

- `content_type: string`
- `content_id: string`
- `description: string`
- `currency: string`
- `value: string`

### Impression-level ad revenue events

The plugin supports impression revenue payload types for:

- `applovin_max_sdk`
- `ironsource_sdk`
- `admob_sdk`

Example:

```ts
BusinessSdk.trackEvent({
	eventName: StandardEvent.ImpressionLevelAdRevenue,
	event: {
		type: StandardEvent.ImpressionLevelAdRevenue,
		revenue: '0.032',
		placement: 'main_feed',
		device_ad_mediation_platform: 'admob_sdk',
		value: '0.032',
		currency_code: 'USD',
		precision: 'ESTIMATED',
		ad_unit_id: 'unit-1',
		ad_source_name: 'admob',
		ad_source_id: 'source-1',
		ad_source_instance_name: 'instance-a',
		ad_source_instance_id: 'instance-1',
		mediation_group_name: 'default-group',
		mediation_ab_test_name: 'test-a',
		mediation_ab_test_variant: 'A',
		ad_format: 'interstitial',
	},
});
```

## Deferred Deep Link

```ts
const deepLink = await BusinessSdk.fetchDeferredDeepLinkData();
console.log('Deferred deep link:', deepLink);
```

## Manual Flush

```ts
BusinessSdk.flush();
```

## API Surface

Main exports:

- `BusinessSdk`
- `Config`
- `LogLevel`
- `StandardEvent`
- `Events` and event payload interfaces

Full typings: [index.d.ts](./index.d.ts)

## Platform Notes

- iOS SDK is integrated via Swift Package Manager (`tiktok-business-ios-sdk`, currently `1.6.0`).
- Android SDK dependency currently uses `com.github.tiktok:tiktok-business-android-sdk:1.6.0`.

## License

Apache License Version 2.0
