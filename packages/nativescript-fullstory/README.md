# @nstudio/nativescript-fullstory

[FullStory](https://www.fullstory.com/) Mobile SDK for NativeScript

```javascript
npm install @nstudio/nativescript-fullstory
```

## Usage

```
import { FullstorySDK } from '@nstudio/nativescript-fullstory';

FullstorySDK.identify('123', {
    name: 'William'
});

FullstorySDK.setUserVars({
    email: 'william@company.com'
});

FullstorySDK.consent(true);

FullstorySDK.shutdown();

FullstorySDK.restart();
```

## License

Apache License Version 2.0
