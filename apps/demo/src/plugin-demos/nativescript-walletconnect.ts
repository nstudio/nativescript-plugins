import {Observable, EventData, Page, Application, Dialogs} from '@nativescript/core';
import {DemoSharedNativescriptWalletconnect} from '@demo/shared';
import {Client, Namespaces} from '@nstudio/nativescript-walletconnect';

//import {PrivateKey, CoinType, CoinTypeInstance, Utils} from '@nstudio/nativescript-walletconnect/utils';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWalletconnect {
  state: 'Disconnected';
  //wallet: Client;
  wcurl: string = '';
  accounts: string;
  // key: PrivateKey;
  address: string;

  constructor() {
    super();
    Client.initialize('a296125a15cc255e4aa63fffdc421458', null, {
      description: 'WalletConnect Developer App',
      url: 'https://walletconnect.org',
      icons: ['https://walletconnect.org/walletconnect-logo.png'],
      name: 'WalletConnect',
    });


    Client.instance.sign.on('session_proposal', args => {
      console.log(args);
      // 0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb
      //Client.instance.sign.ap
    /*  const ns: Namespaces = {
        '': {}
      };
      Client.instance.sign.approve({id: args.event.id, namespaces:args.event.requiredNamespaces})
 
     */
    });

    Client.instance.sign.on('session_event', args => {
      console.log(args);
    });

    Client.instance.pair.create();

    Client.instance.pair.pair({uri: 'wc:967e8c41c02ec5b153e853509a8166e856280f16fcd2862f9cc40292e2cd15d2@2?relay-protocol=irn&symKey=6096d9ddbdf57d75fbcba4d5f672777bb30685d9efb6379b3edf9aa1b8bdce5f'});

    Client.instance.pair.getPairings().forEach(item => {
      console.log(item.native, item.expiryDate, item.peer, item.topic);
      Client.instance.pair.disconnect({topic: item.topic})
    });

    console.log(Client.instance.pair.getPairings());

    //	this.key = new PrivateKey('ba005cd605d8a02e3d5dfd04234cef3a3ee4f76bfbad2722d1fb5af8e12e6764');

    //	this.address = CoinType.getInstance(CoinTypeInstance.Ethereum).deriveAddress(this.key);
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
