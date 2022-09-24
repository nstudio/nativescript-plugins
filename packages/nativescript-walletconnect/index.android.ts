declare const com, okhttp3, io, kotlin;
import { fromObject } from '@nativescript/core';
import { IWalletConnect, IWalletConnectSession, WalletConnectConfig, WalletEvent } from '.';
export function toHex(value: string): string {
	return `0x${io.nstudio.plugins.walletconnect.Utils.toHex(value)}`;
}

export class EthereumTransaction {
	private _native: com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction;
	constructor(instance) {
		if (instance instanceof com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction) {
			this._native = instance;
		}

		if (!this._native) {
			return null;
		}
	}

	get from(): string {
		return this._native.getFrom();
	}

	get to(): string {
		return this._native.getTo();
	}
	get nonce(): string {
		return this._native.getNonce();
	}
	get gasPrice(): string {
		return this._native.getGasPrice();
	}
	get gas(): string {
		return this._native.getGas();
	}
	get value(): string {
		return this.native.getValue();
	}
	get data(): string {
		return this.native.getData();
	}
	get native() {
		return this._native;
	}

	toJSON() {
		return {
			from: this.from,
			to: this.to,
			nonce: this.nonce,
			gasPrice: this.gasPrice,
			gas: this.gas,
			value: this.value,
			data: this.data,
		};
	}
}

export class ClientMeta {
	private _meta: com.trustwallet.walletconnect.models.WCPeerMeta;
	static fromNative(meta: com.trustwallet.walletconnect.models.WCPeerMeta) {
		if (meta instanceof com.trustwallet.walletconnect.models.WCPeerMeta) {
			const ret = new ClientMeta();
			ret._meta = meta;
			return ret;
		}
		return null;
	}

	get native() {
		return this._meta;
	}

	get description(): string {
		return this.native?.getDescription?.();
	}

	get url(): string {
		return this.native?.getUrl?.();
	}

	get icons(): string[] {
		const icons = this.native.getIcons?.();
		const ret = [];
		if (icons) {
			const size = icons.size();
			for (let i = 0; i < size; i++) {
				ret.push(icons.get(i));
			}
		}

		return ret;
	}

	get name(): string {
		return this.native?.getName?.();
	}

	toJSON() {
		return {
			description: this.description,
			url: this.url,
			icons: this.icons,
			name: this.name,
		};
	}
}

export class WalletConnectError extends Error {
	private _native: java.lang.Exception;
	static fromNative(native: java.lang.Exception, message?: string) {
		const error = new WalletConnectError(message || native?.getMessage?.());
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}

	intoNative() {
		if (!this._native) {
			return new java.lang.Exception(this.message);
		}
		return this._native;
	}
}

export class WalletConnect implements IWalletConnect {
	_internal_events = fromObject({});
	_events = {
		connected: [],
		disconnected: [],
		closed: [],
		error: [],
		session_update: [],
		call_request: [],
		session_request: [],
	};
	_session: com.trustwallet.walletconnect.models.session.WCSession;
	_client: io.nstudio.plugins.walletconnect.WCClientImpl;
	_connected: boolean = false;
	_clientId: string = '';
	_clientMeta: com.trustwallet.walletconnect.models.WCPeerMeta;
	_accounts = [];
	constructor(configuration: WalletConnectConfig) {
		this._session = new io.nstudio.plugins.walletconnect.Utils.createSession(configuration.uri);
		this._client = new com.trustwallet.walletconnect.WCClient(new com.google.gson.GsonBuilder(), new okhttp3.OkHttpClient()); //new io.nstudio.plugins.walletconnect.WCClientImpl(new com.google.gson.GsonBuilder(), new okhttp3.OkHttpClient());

		if (configuration.clientMeta) {
			this._clientMeta = new com.trustwallet.walletconnect.models.WCPeerMeta(configuration.clientMeta.name, configuration.clientMeta.url, configuration.clientMeta.description || '', java.util.Arrays.asList(configuration.clientMeta.icons || []));
		}

		this._clientId = java.util.UUID.randomUUID().toString();

		const ref = new WeakRef(this);

		this._client.setOnDisconnect(
			new kotlin.jvm.functions.Function2({
				invoke(code: java.lang.Integer, reason: string) {
					const owner = ref.get?.();
					if (owner) {
						owner._emitEvent('disconnect', [null, null]);
						owner._accounts = [];
					}
				},
			})
		);

		this._client.setOnFailure(
			new kotlin.jvm.functions.Function1({
				invoke(error: java.lang.Throwable) {
					const owner = ref.get?.();
					if (owner) {
						const err = WalletConnectError.fromNative(error, error.getMessage?.());
						owner._internal_events.notify({
							eventName: 'error',
							err,
						});
						owner._emitEvent('error', [err, null]);
					}
				},
			})
		);

		this._client.setOnCustomRequest(
			new kotlin.jvm.functions.Function2({
				invoke(id: java.lang.Long, payload: string) {
					const owner = ref.get?.();
					if (owner) {
						console.log('setOnCustomRequest', id, payload);
						// const err = WalletConnectError.fromNative(error, error.getMessage?.());
						// 		owner._internal_events.notify({
						// 			eventName: 'error',
						// 			err,
						// 		});
						// 		owner._emitEvent('error', [err, null]);
					}
				},
			})
		);

		this._client.setOnSessionRequest(
			new kotlin.jvm.functions.Function2({
				invoke(id: java.lang.Long, meta: com.trustwallet.walletconnect.models.WCPeerMeta) {
					const owner = ref.get?.();
					if (owner) {
						const idValue = id?.longValue?.() || id;
						const peerId = owner._client.getRemotePeerId?.();
						const payload = {
							id: idValue,
							method: 'session_request',
							params: [peerId, ClientMeta.fromNative(meta)],
						};
						owner._internal_events.notify({
							eventName: 'session_request',
							payload,
						});
						owner._emitEvent('session_request', [null, payload]);
					}
				},
			})
		);

		this._client.setOnGetAccounts(
			new kotlin.jvm.functions.Function1({
				invoke(id: java.lang.Long) {
					const owner = ref.get?.();
					if (owner) {
						console.log('setOnGetAccounts', id);
						// const err = WalletConnectError.fromNative(error, error.getMessage?.());
						// 		owner._internal_events.notify({
						// 			eventName: 'error',
						// 			err,
						// 		});
						// 		owner._emitEvent('error', [err, null]);
					}
				},
			})
		);

		this._client.setOnEthSign(
			new kotlin.jvm.functions.Function2({
				invoke(id: java.lang.Long, message: com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage) {
					const owner = ref.get?.();
					if (owner) {
						const idValue = id?.longValue?.() || id;
						const payload = {
							id: idValue,
							method: '',
							params: message.getRaw().toArray(),
						};

						switch (message.getType()) {
							case com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType.MESSAGE:
								payload.method = 'eth_sign';
								break;
							case com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType.PERSONAL_MESSAGE:
								payload.method = 'personal_sign';
								break;
							case com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType.TYPED_MESSAGE:
								payload.method = 'eth_signTypedData';
								break;
						}

						owner._internal_events.notify({
							eventName: 'call_request',
							payload,
						});
						owner._emitEvent('call_request', [null, payload]);
					}
				},
			})
		);

		this._client.setOnEthSignTransaction(
			new kotlin.jvm.functions.Function2({
				invoke(id: java.lang.Long, transaction: com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction) {
					const owner = ref.get?.();
					if (owner) {
						const idValue = id?.longValue?.() || id;
						const tx = new EthereumTransaction(transaction);
						const payload = {
							id: idValue,
							method: 'eth_signTransaction',
							params: [tx],
							transaction: tx,
						};

						owner._internal_events.notify({
							eventName: 'call_request',
							payload,
						});
						owner._emitEvent('call_request', [null, payload]);
					}
				},
			})
		);

		this._client.setOnEthSendTransaction(
			new kotlin.jvm.functions.Function2({
				invoke(id: java.lang.Long, transaction: com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction) {
					const owner = ref.get?.();
					if (owner) {
						const idValue = id?.longValue?.() || id;
						const tx = new EthereumTransaction(transaction);
						const payload = {
							id: idValue,
							method: 'eth_sendTransaction',
							params: [tx],
							transaction: tx,
						};

						owner._internal_events.notify({
							eventName: 'call_request',
							payload,
						});
						owner._emitEvent('call_request', [null, payload]);
					}
				},
			})
		);
	}

	get accounts(): string[] {
		return this._accounts;
	}

	get uri() {
		return this._session?.toUri?.() ?? '';
	}

	get bridge() {
		return this._session?.getBridge?.() ?? '';
	}

	get clientId() {
		return this._clientId;
	}

	get handshakeId(): number {
		return -1;
	}

	get handshakeTopic() {
		return this._session?.getTopic?.() ?? '';
	}

	get connected() {
		return this._client?.isConnected?.() || false;
	}

	get chainId(): number {
		const id = parseInt(this._client?.getChainId?.());
		return isNaN(id) ? 0 : id;
	}

	get key() {
		return this._session.getKey?.() ?? '';
	}

	get clientMeta() {
		return ClientMeta.fromNative(this._clientMeta);
	}

	get peerId() {
		return this._client?.getPeerId?.() ?? '';
	}

	get peerMeta() {
		return ClientMeta.fromNative(this._client.getPeerMeta?.());
	}

	get session(): IWalletConnectSession {
		return {
			connected: this._connected,
			accounts: this.accounts,
			chainId: this.chainId,
			bridge: this.bridge,
			key: this.key,
			clientId: this.clientId,
			clientMeta: this.clientMeta,
			peerId: this.peerId,
			peerMeta: this.peerMeta,
			handshakeId: this.handshakeId,
			handshakeTopic: this.handshakeTopic,
		};
	}

	_emitEvent(event: WalletEvent, data) {
		switch (event) {
			case 'connect':
				this._events.connected.forEach((cb) => {
					cb(...data);
				});
				break;
			case 'disconnect':
				this._events.disconnected.forEach((cb) => {
					cb(...data);
				});
				break;
			case 'error':
				this._events.error.forEach((cb) => {
					cb(...data);
				});
				break;
			case 'session_update':
				this._events.session_update.forEach((cb) => {
					cb(...data);
				});
				break;
			case 'session_request':
				this._events.session_request.forEach((cb) => {
					cb(...data);
				});
				break;
			case 'call_request':
				this._events.call_request.forEach((cb) => {
					cb(...data);
				});
				break;
		}
	}

	createSession(): Promise<{ chainId: number; accounts: string[] }> {
		return new Promise((resolve, reject) => {
			let on_connect_func = (args) => {
				this._connected = true;
				resolve({
					accounts: this.accounts,
					chainId: this.chainId,
				});
			};
			let on_connect = on_connect_func.bind(this);

			this._internal_events.once('connected', on_connect);

			let on_error_func = (args) => {
				reject(args.error);
			};
			let on_error = on_error_func.bind(this);
			this._internal_events.once('error', on_error);

			this._client.connect(this._session, this._clientMeta, java.util.UUID.randomUUID().toString(), null);
		});
	}

	approveSession(sessionStatus: { chainId: number; accounts: string[] }) {
		this._client.approveSession(java.util.Arrays.asList(sessionStatus.accounts), sessionStatus.chainId);
		this._accounts = sessionStatus?.accounts ?? [];
		this._internal_events.notify({
			eventName: 'connected',
		});
		this._emitEvent('connect', [null, null]);
	}

	rejectSession(sessionError?: { message: string }) {
		this._client.rejectSession(sessionError?.message || 'Session Rejected');
	}

	killSession(sessionError?: { message: string }): Promise<void> {
		return new Promise((resolve, reject) => {
			this._internal_events.once('closed', (args) => {
				resolve();
			});
			this._client.killSession();
		});
	}

	updateSession(sessionStatus: { chainId: number; accounts: string[] }) {
		return new Promise((resolve, reject) => {
			this._client.updateSession(java.util.Arrays.asList(sessionStatus.accounts), java.lang.Integer.valueOf(sessionStatus.chainId), true);
		});
	}

	approveRequest(response: { id: number; result: any }) {
		this._client.approveRequest(response.id, response.result);
	}

	rejectRequest(response: {
		id: number;
		error?: {
			code?: number;
			message?: string;
		};
	}) {
		this._client.rejectRequest(response.id, response?.error?.message || 'Reject by the user');
	}

	disconnect() {
		this._client.disconnect();
	}

	on(event: WalletEvent, callback) {
		if (typeof callback !== 'function') {
			return;
		}
		switch (event) {
			case 'disconnect':
				{
					const has = this._events.disconnected.find(callback);
					if (has) {
						return;
					}
					this._events.disconnected.push(callback);
				}
				break;
			case 'connect':
				{
					const has = this._events.connected.find(callback);
					if (has) {
						return;
					}
					this._events.connected.push(callback);
				}
				break;
			case 'error':
				{
					const has = this._events.error.find(callback);
					if (has) {
						return;
					}
					this._events.error.push(callback);
				}
				break;
			case 'session_update':
				{
					const has = this._events.session_update.find(callback);
					if (has) {
						return;
					}
					this._events.session_update.push(callback);
				}
				break;
			case 'call_request':
				{
					const has = this._events.call_request.find(callback);
					if (has) {
						return;
					}
					this._events.call_request.push(callback);
				}
				break;
			case 'session_request':
				{
					const has = this._events.session_request.find(callback);
					if (has) {
						return;
					}
					this._events.session_request.push(callback);
				}
				break;
		}
	}

	off(event: WalletEvent, callback) {
		if (typeof callback !== 'function') {
			return;
		}
		switch (event) {
			case 'disconnect':
				{
					const index = this._events.disconnected.indexOf(callback);
					if (index > -1) {
						this._events.disconnected.splice(index, 1);
					}
				}
				break;
			case 'connect':
				{
					const index = this._events.connected.indexOf(callback);
					if (index > -1) {
						this._events.connected.splice(index, 1);
					}
				}
				break;
			case 'error':
				{
					const index = this._events.error.indexOf(callback);
					if (index > -1) {
						this._events.error.splice(index, 1);
					}
				}
				break;
			case 'session_update':
				{
					const index = this._events.session_update.indexOf(callback);
					if (index > -1) {
						this._events.session_update.splice(index, 1);
					}
				}
				break;
			case 'call_request':
				{
					const index = this._events.call_request.indexOf(callback);
					if (index > -1) {
						this._events.call_request.splice(index, 1);
					}
				}
				break;
			case 'session_request':
				{
					const index = this._events.session_request.indexOf(callback);
					if (index > -1) {
						this._events.session_request.splice(index, 1);
					}
				}
				break;
		}
	}
}
