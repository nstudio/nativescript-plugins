import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptWalletconnectLegacy } from '@demo/shared';
import { WalletConnect } from '@nstudio/nativescript-walletconnect-legacy';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWalletconnectLegacy {
	wc: WalletConnect;
	uri = '';
	connect() {
		if (this.wc) {
			this.wc.killSession();
			this.wc = null;
			return;
		}
		const uri = decodeURIComponent(this.uri);
		this.wc = new WalletConnect({
			uri,
			clientMeta: {
				description: 'WalletConnect Developer App',
				url: 'https://walletconnect.org',
				icons: ['https://walletconnect.org/walletconnect-logo.png'],
				name: 'WalletConnect',
			},
		});

		this.wc.on('session_request', (error, payload) => {
			this.wc.approveSession({
				accounts: ['0xCF4140193531B8b2d6864cA7486Ff2e18da5cA95'],
				chainId: 1,
			});
		});

		this.wc.on('connect', (error, payload) =>{});

		this.wc
			.createSession()
			.then((value) => {
				console.log('hello', value);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	killSession() {
		this.wc?.killSession();
	}

	disconnect() {
		this.wc?.disconnect();
	}
}
