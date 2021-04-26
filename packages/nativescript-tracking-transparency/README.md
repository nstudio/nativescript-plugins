# @nstudio/nativescript-tracking-transparency

🕵️ A NativeScript Library for interacting with the tracking API for iOS 14+

```javascript
ns plugin add @nstudio/nativescript-tracking-transparency
```

## Usage

Open App_Resources/iOS/Info.plist and add this to the bottom:

```Plist
<key>NSUserTrackingUsageDescription</key>
<string>$(PRODUCT_NAME) requires your permission to track in order to show you more relevant ads.</string>
```

Replace `NSUserTrackingUsageDescription` description string with something of your liking.

```
import { TrackingTransparency, TrackingStatus } from '@nstudio/nativescript-tracking-transparency';

// get status
const status = TrackingTransparency.getTrackingStatus();
if (status === TrackingStatus.Authorized || status === TrackingStatus.Unavailable) {
    // enable tracking features
}

// request access
TrackingTransparency.requestTrackingPermission().then(status => {
  if (status === TrackingStatus.Authorized) {
    // enable tracking features
  }
});
```

- `TrackingStatus.Unavailable`: The tracking API is not available on the current device. That's the case on Android devices and iPhones below iOS 14.
- `TrackingStatus.Denied`: The user has explicitly denied permission to track. You'd want to respect that and disable any tracking features in your app.
- `TrackingStatus.Authorized`: The user has granted permission to track. You can now enable tracking features in your app.
- `TrackingStatus.Restricted`: The tracking permission alert cannot be shown, because the device is restricted. See [ATTrackingManager.AuthorizationStatus.restricted](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/authorizationstatus/restricted) for more information.
- `TrackingStatus.NotDetermined`: The user has not been asked to grant tracking permissions yet. Call requestTrackingPermission().

## License

Apache License Version 2.0
