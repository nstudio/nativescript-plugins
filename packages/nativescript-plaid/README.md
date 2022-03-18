# @nstudio/nativescript-plaid

NativeScript plugin that opens the Plaid native sdk to log in to banking services.

```javascript
npm install @nstudio/nativescript-plaid
```

## Usage

This plugin opens the Plaid Link flow, which walks the user through finding their institution and linking their bank account.
It opens the flow in a modal view, and returns metadata for events, on exit, and on success.

```TS

import { PlaidLink } from '@nstudio/nativescript-plaid';

export class YourClass {

  successPublicToken: string;

  constructor() {}

  open() {
    // first set an event listener for the events Plaid reports back.
    PlaidLink.setLinkEventListener((event) => {
      console.log('linkEventListener', event);
    });

    // create a handler and pass your link token. (https://plaid.com/docs/api/tokens/)
    const handler = PlaidLink.createHandler({
      token: 'YOURLINKTOKEN',
      onSuccess: (linkSuccess) => {
        console.log('linkSuccess', linkSuccess);
        this.set('successPublicToken', linkSuccess.publicToken)
      },
      onExit: (linkExit) => {
        console.log('linkExit', linkExit);
      }
    });
    handler.open();
  }
}

```

## Screenshot

![](https://github.com/nstudio/nativescript-plugins/raw/master/packages/nativescript-plaid/demo.gif)

## API

- **setLinkEventListener()** - Listens to events created by the flow.
- **createHandler()** - Creates a handler with a config including token, onSuccess and onExit functions.
- **handler.open(config: PlaidLinkConfig)** - Opens the flow in a modal. When user exits or successfully links an account, the modal closes.

### Contributors

- Dave Coffin [@davecoffin](https://twitter.com/davecoffin)
- Osei Fortune [@triniwiz](https://twitter.com/triniwiz)

## License

Apache License Version 2.0
