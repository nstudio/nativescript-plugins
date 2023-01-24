import { Observable, EventData, Page, Application, Dialogs } from '@nativescript/core';
import { DemoSharedNativescriptWalletconnect } from '@demo/shared';
import { Client, Namespaces, PrivateKey, eth_signTypedData, eth_personalSign, eth_sendTransaction, eth_sign, eth_signTransaction } from '@nstudio/nativescript-walletconnect';

//import {PrivateKey, CoinType, CoinTypeInstance, Utils} from '@nstudio/nativescript-walletconnect/utils';

declare const io;

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWalletconnect {
	state: 'Disconnected';
	//wallet: Client;
	wcurl: string = '';
	accounts: string[];
	key = new PrivateKey('0xe56da0e170b5e09a8bb8f1b693392c7d56c3739a9c75740fbc558a2877868540');
	constructor() {
		super();

		Client.instance.sign.on('session_settle', (args) => {
			const event = args.event;
			const namespaces = event.namespaces;
			const firstNs = Object.keys(namespaces)[0];
			this.accounts = namespaces[firstNs].accounts;
			console.log('session_settle', event);
		});

		Client.instance.sign.on('session_proposal', (args) => {
			const meta = args.event.proposer;
			Dialogs.confirm({
				title: `Connect to ${meta.name}`,
				message: `${meta.description}\n${meta.url}`,
				okButtonText: 'Approve',
				cancelButtonText: 'Reject',
			}).then((done) => {
				if (done) {
					const proposed = args.event.requiredNamespaces;
					const ns: Namespaces = {};

					Object.keys(proposed).forEach((key) => {
						const value = proposed[key];
						const accounts = value.chains.map((id) => {
							return `${id}:${this.key.address.hex(id.indexOf('eip55') > -1)}`;
						});
						this.accounts = accounts;
						ns[key] = {
							accounts,
							methods: value.methods,
							chains: value.chains,
							events: value.events,
							extension:
								value?.extensions?.map?.((item) => {
									return { ...item, accounts };
								}) ?? undefined,
						};
					});

					Client.instance.sign.approve({ id: args.event.id, namespaces: ns }).catch((e) => {
						console.log('session_proposal', 'approve', 'error', e);
					});
				} else {
					Client.instance.sign.reject({ id: args.event.id, reason: 'rejected' }).catch((e) => {
						console.log('session_proposal', 'reject', 'error', e);
					});
				}
			});
		});

		Client.instance.sign.on('session_event', (args) => {
			console.log('session_event', args.event);
		});

		Client.instance.sign.on('session_ping', (args) => {
			console.log('session_ping', args.event?.topic);
		});

		Client.instance.sign.on('session_request', (args) => {
			const event = args.event;
			const request = event.request;
			const method = request.method;
			const isTransaction = method === 'eth_signTransaction' || method === 'eth_sendTransaction';

			console.log(request.params);

			const message = JSON.stringify(request?.params);

			Dialogs.confirm({
				title: method,
				message,
				okButtonText: isTransaction ? 'Approve' : 'Sign',
				cancelButtonText: isTransaction ? 'Deny' : 'Cancel',
			}).then((done) => {
				if (done) {
					let value;

					if (!this.accounts) {
						const first = Client.instance.sign.getSessions()[0];
						const namespaces = first?.namespaces;
						const firstNs = Object.keys(namespaces)[0];
						this.accounts = namespaces[firstNs].accounts;
					}

					if (!isTransaction) {
						switch (method) {
							case 'eth_sign':
								value = eth_sign(this.key, request.params);
								break;
							case 'personal_sign':
								value = eth_personalSign(this.key, request.params);
								break;
							case 'eth_signTypedData':
								value = eth_signTypedData(this.key, request.params);
								break;
						}
					} else {
						if (method === 'eth_signTransaction') {
							value = eth_signTransaction(this.key, request.params);
							console.log(value);
						} else {
							value = eth_sendTransaction(this.key, request.params);
						}
					}
					console.log('aaa', value);

					console.log({ topic: event.topic, id: request.id, response: value });

					Client.instance.sign.respond({ topic: event.topic, id: request.id, response: value });
				} else {
					Client.instance.sign.respond({
						id: event.request.id,
						topic: event.topic,
						response: {
							code: 1000,
							message: 'User Rejected Session Request',
						},
					});
				}
			});
		});

		Client.instance.sign.on('session_update', (args) => {
			console.log(args.event.namespaces);
			console.log('session_update', args.event);
		});

		Client.instance.sign.on('session_delete', (args) => {
			console.log('session_delete', args.event);
		});

		//	this.key = new PrivateKey('ba005cd605d8a02e3d5dfd04234cef3a3ee4f76bfbad2722d1fb5af8e12e6764');

		//	this.address = CoinType.getInstance(CoinTypeInstance.Ethereum).deriveAddress(this.key);
	}

	pair() {
		Client.instance.pair.pair({ uri: this.wcurl });

		Client.instance.pair.getPairings().forEach((item) => {
			Client.instance.pair.disconnect({ topic: item.topic });
		});
	}

	/*

	resetConnection() {
		this.wallet = new WalletConnect({
			uri: this.wcurl,
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
			//this.set('wcurl', undefined);
			this.set('state', 'Disconnected');
			//this.resetConnection();
		});

		this.wallet.on('error', (error) => {
			this.set('state', `Error: ${error}`);
		});

		this.wallet.on('session_request', (error, payload) => {
			if (error) {
				throw error;
			}

			const meta = payload.params[1];
			Dialogs.confirm({
				title: meta.name,
				message: `${meta.description}\n${meta.url}`,
				okButtonText: 'Approve',
				cancelButtonText: 'Reject',
			}).then((done) => {
				if (done) {
					this.wallet.approveSession({
						chainId: 1,
						accounts: [this.address],
					});
				} else {
					this.wallet.rejectSession();
					this.wallet.disconnect();
				}
			});
		});

		this.wallet.on('call_request', (error, payload) => {
			if (error) {
				throw error;
			}

			const method = payload.method;
			const isTransaction = method === 'eth_signTransaction' || method === 'eth_sendTransaction';
			const data = (method.indexOf('personal_sign') > -1 || isTransaction ? payload.params[0] : payload.params[1])?.toString?.();

			Dialogs.confirm({
				title: method,
				message: isTransaction ? data?.toString?.() : data,
				okButtonText: isTransaction ? 'Approve' : 'Sign',
				cancelButtonText: isTransaction ? 'Deny' : 'Cancel',
			}).then((done) => {
				if (done) {
					if (!isTransaction) {
						let value;
						console.log('method', method, method === 'eth_signTypedData');
						switch (method) {
							case 'eth_sign':
							case 'personal_sign':
								{
									// sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))
									// 🤷🏽‍♂️
									const signed = this.key.sign(Utils.createEthSignKeccak256(data), CoinType.getInstance(CoinTypeInstance.Ethereum).curve());
									value = '0x' + signed;
								}
								break;
							case 'eth_signTypedData':
								{
									// keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))
									const signed = Utils.createEthSignKeccak256(data);
									value = signed; // '0x' + Utils.bufferToString(signed);
								}
								break;
						}
						this.wallet.approveRequest({
							id: payload.id,
							result: value,
						});
					} else {
						this.wallet.approveRequest({
							id: payload.id,
							result: data,
						});
					}
				} else {
					this.wallet.rejectRequest({ id: payload.id });
				}
			});
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
		this.resetConnection();
		//this.set('wcurl', this.wallet.uri);
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
			accounts: [this.address],
		});
	}

	connect() {
		//	this.set('wcurl', this.wallet.uri);
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

	rejectSession() {
		this.wallet.rejectSession();
	}

  */
}

/*
[
	{
		types: {
			EIP712Domain: [
				{ name: 'name', type: 'string' },
				{ name: 'version', type: 'string' },
				{ name: 'chainId', type: 'uint256' },
				{ name: 'verifyingContract', type: 'address' },
			],
			Person: [
				{ name: 'name', type: 'string' },
				{ name: 'wallet', type: 'address' },
			],
			Mail: [
				{ name: 'from', type: 'Person' },
				{ name: 'to', type: 'Person' },
				{ name: 'contents', type: 'string' },
			],
		},
		primaryType: 'Mail',
		domain: { name: 'Ether Mail', version: '1', chainId: 1, verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC' },
		message: { from: { name: 'Cow', wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826' }, to: { name: 'Bob', wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB' }, contents: 'Hello, Bob!' },
	},
];
*/
