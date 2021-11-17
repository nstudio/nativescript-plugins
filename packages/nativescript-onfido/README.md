# Onfido SDK for NativeScript

* [Onfido Android](https://documentation.onfido.com/sdk/android/)
* [Onfido iOS](https://documentation.onfido.com/sdk/ios/)

```javascript
npm install @nstudio/nativescript-onfido
```

## Usage

```
import { OnfidoUtils, Onfido, OnfidoCaptureType } from '@nstudio/nativescript-onfido';

OnfidoUtils.init('<token>', '<app id>');

Onfido.debugMode = true;
Onfido.start({
    sdkToken: token,
    flowSteps: {
        welcome: true,
        captureDocument: {},
        captureFace: {
          type: OnfidoCaptureType.PHOTO,
        },
    },
}).then(data => {
    // onfido data
}).catch((error) => {
    // onfido data
});
```

## License

Apache License Version 2.0
