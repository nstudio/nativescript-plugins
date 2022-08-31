# @nstudio/nativescript-walletconnect

```javascript
ns plugin add @nstudio/nativescript-walletconnect
```

## Usage

```ts
import { WalletConnect } from '@nstudio/nativescript-walletconnect';

// Create connector
const connector = new WalletConnect({
	// Required
	uri: 'wc:8a5e5bdc-a0e4-47...TJRNmhWJmoxdFo6UDk2WlhaOyQ5N0U=',
	// Required
	clientMeta: {
		description: 'WalletConnect Developer App',
		url: 'https://walletconnect.org',
		icons: ['https://walletconnect.org/walletconnect-logo.png'],
		name: 'WalletConnect',
	},
});

// Subscribe to session requests
connector.on('session_request', (error, payload) => {
	if (error) {
		throw error;
	}

	// Handle Session Request

	/* payload:
  {
    id: 1,
    jsonrpc: '2.0'.
    method: 'session_request',
    params: [{
      peerId: '15d8b6a3-15bd-493e-9358-111e3a4e6ee4',
      peerMeta: {
        name: "WalletConnect Example",
        description: "Try out WalletConnect v1.0",
        icons: ["https://example.walletconnect.org/favicon.ico"],
        url: "https://example.walletconnect.org"
      }
    }]
  }
  */
});

// Subscribe to call requests
connector.on('call_request', (error, payload) => {
	if (error) {
		throw error;
	}

	// Handle Call Request

	/* payload:
  {
    id: 1,
    jsonrpc: '2.0'.
    method: 'eth_sign',
    params: [
      "0xbc28ea04101f03ea7a94c1379bc3ab32e65e62d3",
      "My email is john@doe.com - 1537836206101"
    ]
  }
  */
});

connector.on('disconnect', (error, payload) => {
	if (error) {
		throw error;
	}

	// Delete connector
});
```

Manage Connection

```ts
// Approve Session
connector.approveSession({
	accounts: [
		// required
		'0x4292...931B3',
		'0xa4a7...784E8',
	],
	chainId: 1, // required
});

// Reject Session
connector.rejectSession({
	message: 'OPTIONAL_ERROR_MESSAGE', // optional
});

// Kill Session
connector.killSession();
```

Manage Call Requests

```ts
// Approve Call Request
connector.approveRequest({
  id: 1,
  result: "0x41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a"
});

// Reject Call Request
connector.rejectRequest({
  id: 1,                                  // required
  error: {
    code: "OPTIONAL_ERROR_CODE"           // optional
    message: "OPTIONAL_ERROR_MESSAGE"     // optional
  }
});
```

## License

Apache License Version 2.0
