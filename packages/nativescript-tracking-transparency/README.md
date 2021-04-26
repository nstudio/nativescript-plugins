# @nstudio/nativescript-tracking-transparency

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

## License

Apache License Version 2.0
