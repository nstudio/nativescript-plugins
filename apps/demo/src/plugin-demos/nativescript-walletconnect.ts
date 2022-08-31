import { Observable, EventData, Page, Application } from '@nativescript/core';
import { DemoSharedNativescriptWalletconnect } from '@demo/shared';
import { toHex, WalletConnect } from '@nstudio/nativescript-walletconnect';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWalletconnect {
	state: 'Disconnected';
	wallet: WalletConnect;
	wcurl: string;
	bridge = 'https://bridge.walletconnect.org';
	accounts: string;
	constructor() {
		super();
		this.resetConnection();
	}

	resetConnection() {
		this.wallet = new WalletConnect({
			uri: this.wcurl,
			bridge: this.bridge,
			clientMeta: {
				description: 'WalletConnect Developer App',
				url: 'https://walletconnect.org',
				icons: ['https://walletconnect.org/walletconnect-logo.png'],
				name: 'WalletConnect',
			},
		});

		this.wallet.on('connect', () => {
			this.set('state', 'Connected');
			this.set('accounts', this.wallet.accounts.toString());
		});
		this.wallet.on('disconnect', () => {
			this.set('accounts', undefined);
			this.set('wcurl', undefined);
			this.set('state', 'Disconnected');
			this.resetConnection();
		});

		this.wallet.on('error', (error) => {
			this.set('state', `Error: ${error}`);
		});
	}

	openWCUrl() {
		if (global.isAndroid) {
			const i = new android.content.Intent(android.content.Intent.ACTION_VIEW);
			i.setData(android.net.Uri.parse(this.wallet.uri));
			Application.android.foregroundActivity.startActivity(i);
		} else {
		}
	}

	createSession() {
		this.set('wcurl', this.wallet.uri);
		this.wallet
			.createSession()
			.then((res) => {
				console.log('createSession', res);
			})
			.catch((e) => {
				console.error('createSession', e);
			});
	}

	approveSession() {
		this.wallet.approveSession({
			chainId: this.wallet.chainId || 1,
			accounts: [''],
		});
	}

	connect() {
		this.set('wcurl', this.wallet.uri);
		this.wallet
			.connect()
			.then((res) => {
				console.log('connect', res);
			})
			.catch((e) => {
				console.error('connect', e);
			});
	}

	killSession() {
		this.wallet.killSession();
	}

	reject() {
		//this.wallet.rejectRequest();
	}

	async sendTransaction() {
		const account = this.wallet.accounts[0];
		if (account) {
			// 0x02540be400
			// 0x9c40
			const ret = await this.wallet.sendTransaction({
				from: account, // Required
				to: account, // Required (for non contract deployments)
				data: toHex(''), // Required
				gasPrice: '0x02540be400', // Optional
				gas: '0x9c40', // Optional
				value: '0x0', // Optional
				nonce: '0x0114', // Optional
			});
			console.log('sendTransaction', ret);
		}
	}

	async signMessage() {
		const account = this.wallet.accounts[0];
		if (account) {
			const ret = await this.wallet.signMessage([`My email is john@doe.com - ${Date.now()}`, account]);
			console.log('signMessage', ret);
		}
	}

	async signPersonalMessage() {
		const account = this.wallet.accounts[0];
		if (account) {
			const ret = await this.wallet.signPersonalMessage([toHex(`My email is john@doe.com - ${Date.now()}`), account]);
			console.log('signPersonalMessage', ret);
		}
	}

	async signTypedData() {
		const account = this.wallet.accounts[0];
		if (account) {
			const typedData = {
				types: {
					EIP712Domain: [
						{ name: 'name', type: 'string' },
						{ name: 'version', type: 'string' },
						{ name: 'chainId', type: 'uint256' },
						{ name: 'verifyingContract', type: 'address' },
					],
					Person: [
						{ name: 'name', type: 'string' },
						{ name: 'account', type: 'address' },
					],
					Mail: [
						{ name: 'from', type: 'Person' },
						{ name: 'to', type: 'Person' },
						{ name: 'contents', type: 'string' },
					],
				},
				primaryType: 'Mail',
				domain: {
					name: 'Example Dapp',
					version: '1.0',
					chainId: 1,
					verifyingContract: '0x0000000000000000000000000000000000000000',
				},
				message: {
					from: {
						name: 'Alice',
						account: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
					},
					to: {
						name: 'Bob',
						account: '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
					},
					contents: 'Hey, Bob!',
				},
			};

			const msgParams = [
				account, // Required
				JSON.stringify(typedData), // Required
			];

			// Sign Typed Data
			this.wallet
				.signTypedData(msgParams)
				.then((result) => {
					// Returns signature.
					console.log(result);
				})
				.catch((error) => {
					// Error returned when rejected
					console.error(error);
				});
		}
	}

	rejectSession() {
		this.wallet.rejectSession();
	}
}
