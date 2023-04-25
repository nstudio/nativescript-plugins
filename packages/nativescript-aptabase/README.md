# @nstudio/nativescript-aptabase

https://aptabase.com/

Analytics for Apps. Privacy-First. Simple.

## Usage

```javascript
npm install @nstudio/nativescript-aptabase
```

For iOS, configure your `nativescript.config.ts` to use the Swift Package:

```ts
ios: {
    SPMPackages: [
        {
            name: 'Aptabase',
            libs: ['Aptabase'],
            repositoryURL: 'https://github.com/aptabase/aptabase-swift.git',
            version: '0.0.4'
        }
    ]
}
```

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
