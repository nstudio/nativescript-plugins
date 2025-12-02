# @nstudio/nativescript-auth0

```javascript
npm install @nstudio/nativescript-auth0
```

## Usage

```ts
import { Auth0 } from '@nstudio/nativescript-auth0';

const auth0Client = new Auth0({
    clientId: '<client-id>',
    domain: '<domain>'
});

const credentials = await auth0Client.webAuth.start();
console.log(credentials) // tokens!
```

## License

Apache License Version 2.0
