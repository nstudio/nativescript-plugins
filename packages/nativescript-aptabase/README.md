# @nstudio/nativescript-aptabase

```javascript
npm install @nstudio/nativescript-aptabase
```

## Usage

```ts
import { Aptabase } from '@nstudio/nativescript-aptabase';

// Initialize
Aptabase.initialize('<api-key>')

// Track event
Aptabase.track('Hello Aptabase')

// Track event with properties
Aptabase.track('Hello Aptabase', { 
    from: 'NativeScript'
})
```

## License

Apache License Version 2.0
