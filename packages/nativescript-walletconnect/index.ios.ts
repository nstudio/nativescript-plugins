import { fromObject, Utils } from '@nativescript/core';
import { IClientMeta, IWalletConnect, IWalletConnectSession, WalletConnectConfig, WalletEvent } from '.';

export function toHex(value: string): string {
	return NSCWallectConnect.toHex(value);
}

export class EthereumTransaction {
	private _native: NSCWCEthereumTransaction;
	constructor(instance) {
		if (instance instanceof NSCWCEthereumTransaction) {
			this._native = instance;
		}

		if (!this._native) {
			return null;
		}
	}

	get from(): string {
		return this._native.from;
	}

	get to(): string {
		return this._native.to;
	}
	get nonce(): string {
		return this._native.nonce;
	}
	get gasPrice(): string {
		return this._native.gasPrice;
	}
	get gas(): string {
		return this._native.gas;
	}
	get value(): string {
		return this.native.value;
	}
	get data(): string {
		return this.native.data;
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
	private _meta: NSCClientMeta;
	static fromNative(meta: NSCClientMeta) {
		if (meta instanceof NSCClientMeta) {
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
		return this.native?.desc;
	}

	get url(): string {
		return this.native?.url;
	}

	get icons(): string[] {
		const icons = this.native?.icons;
		const ret = [];
		if (icons) {
			const size = icons?.count ?? 0;
			for (let i = 0; i < size; i++) {
				ret.push(icons.objectAtIndex(i));
			}
		}

		return ret;
	}

	get name(): string {
		return this.native?.name;
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
	_native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new WalletConnectError(message || native?.localizedDescription);
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}

	intoNative() {
		if (!this._native) {
			const exception = NSException.exceptionWithNameReasonUserInfo(NSGenericException, this.message, null);
			const info = {};
			info['ExceptionName'] = exception.name;
			info['ExceptionReason'] = exception.reason;
			info['ExceptionCallStackReturnAddresses'] = exception.callStackReturnAddresses;
			info['ExceptionCallStackSymbols'] = exception.callStackSymbols;
			info['ExceptionUserInfo'] = exception.userInfo;
			const error = NSError.alloc().initWithDomainCodeUserInfo('NativeScript', 1000, info as any);
			return error;
		}
		return this._native;
	}
}

@NativeClass
@ObjCClass(NSCWalletConnectDelegate)
class NSCWalletConnectDelegateImpl extends NSObject implements NSCWalletConnectDelegate {
	onBnbSignWithIdOrder(id: number, order: string): void {}
	onConnect(): void {}
	onCustomRequestWithIdRequest(id: number, request: NSDictionary<string, any>): void {}
	onDisconnectWithReasonCode(reason: string, code: number): void {
		const owner = this._owner.get?.();
		if (owner) {
			owner._emitEvent('disconnect', [null, null]);
		}
	}
	onErrorWithError(error: NSError): void {
		const owner = this._owner.get?.();
		if (owner) {
			const err = WalletConnectError.fromNative(error, error.localizedDescription);
			owner._internal_events.notify({
				eventName: 'error',
				err,
			});
			owner._emitEvent('error', [err, null]);
		}
	}
	onEthPersonalSignWithIdDataRaw(id: number, data: NSData, raw: string[] | NSArray<string>): void {
		const owner = this._owner.get?.();
		if (owner) {
			const payload = {
				id,
				method: 'personal_sign',
				params: Array.isArray(raw) ? raw : Utils.ios.collections.nsArrayToJSArray(raw as any),
			};

			owner._internal_events.notify({
				eventName: 'call_request',
				payload,
			});
			owner._emitEvent('call_request', [null, payload]);
		}
	}
	onEthSendTransactionWithIdTransaction(id: number, transaction: NSCWCEthereumTransaction): void {
		const owner = this._owner.get?.();
		if (owner) {
			const tx = new EthereumTransaction(transaction);
			const payload = {
				id,
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
	}
	onEthSignTransactionWithIdTransaction(id: number, transaction: NSCWCEthereumTransaction): void {
		const owner = this._owner.get?.();
		if (owner) {
			const tx = new EthereumTransaction(transaction);
			const payload = {
				id,
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
	}
	onEthSignTypeDataWithIdDataRaw(id: number, data: NSData, raw: string[] | NSArray<string>): void {
		const owner = this._owner.get?.();
		if (owner) {
			const payload = {
				id,
				method: 'eth_signTypedData',
				params: Array.isArray(raw) ? raw : Utils.ios.collections.nsArrayToJSArray(raw as any),
			};

			owner._internal_events.notify({
				eventName: 'call_request',
				payload,
			});
			owner._emitEvent('call_request', [null, payload]);
		}
	}
	onEthSignWithIdDataRaw(id: number, data: NSData, raw: string[] | NSArray<string>): void {
		const owner = this._owner.get?.();
		if (owner) {
			const payload = {
				id,
				method: 'eth_sign',
				params: Array.isArray(raw) ? raw : Utils.ios.collections.nsArrayToJSArray(raw as any),
			};

			owner._internal_events.notify({
				eventName: 'call_request',
				payload,
			});
			owner._emitEvent('call_request', [null, payload]);
		}
	}
	onOktSendTransactionWithIdTransaction(id: number, transaction: NSCWCOKExChainTransaction): void {}
	onOktSignTransactionWithIdTransaction(id: number, transaction: NSCWCOKExChainTransaction): void {}
	onSessionRequestWithIdPeerParam(id: number, peerParam: NSCWCSessionRequestParam): void {
		const owner = this._owner.get?.();
		if (owner) {
			const peerId = peerParam.peerId;
			const payload = {
				id,
				method: 'session_request',
				params: [peerId, ClientMeta.fromNative(peerParam.peerMeta)],
			};
			owner._internal_events.notify({
				eventName: 'session_request',
				payload,
			});
			owner._emitEvent('session_request', [null, payload]);
		}
	}
	_owner: WeakRef<WalletConnect>;
	static initWithOwner(owner: WeakRef<WalletConnect>): NSCWalletConnectDelegateImpl {
		const delegate = NSCWalletConnectDelegateImpl.new() as NSCWalletConnectDelegateImpl;
		delegate._owner = owner;
		return delegate;
	}
}

export class WalletConnect implements IWalletConnect {
	_internal_events = fromObject({});
	_events = {
		connected: [],
		disconnected: [],
		closed: [],
		error: [],
		update: [],
		call_request: [],
		session_request: [],
	};
	_config: NSCWalletConnectConfig;
	_client: NSCWallectConnect;
	_delegate: NSCWalletConnectDelegate;

	constructor(configuration: WalletConnectConfig) {
		const config = NSCWalletConnectConfig.new();
		config.bridge = configuration?.bridge || null;
		config.uri = configuration?.uri || null;
		config.key = configuration?.key || null;
		if (configuration?.clientMeta) {
			config.clientMeta = NSCWalletConnectClientMetaConfig.new();
			config.clientMeta.desc = configuration.clientMeta.description || null;
			if (configuration.clientMeta.icons) {
				config.clientMeta.icons = configuration.clientMeta.icons as any;
			}
			config.clientMeta.name = configuration.clientMeta.name || null;
			config.clientMeta.url = configuration.clientMeta.url || null;
		}

		this._config = config;

		this._client = NSCWallectConnect.alloc().initWithConfiguration(config);

		this._delegate = NSCWalletConnectDelegateImpl.initWithOwner(new WeakRef(this));

		this._client.delegate = this._delegate;
	}

	get accounts(): string[] {
		const ret = [];
		const accounts = this._client.accounts;
		if (accounts) {
			const size = accounts.count;
			for (let i = 0; i < size; i++) {
				ret.push(accounts.objectAtIndex(i));
			}
		}
		return ret;
	}

	get uri() {
		const uri = this._client?.uri;
		if (uri) {
			return decodeURIComponent(uri);
		}
		return '';
	}

	get bridge() {
		return this._client.bridge;
	}

	get clientId() {
		return '';
	}

	get handshakeId(): number {
		return 0; //this._client.handshakeId;
	}

	get handshakeTopic() {
		return this._client.handshakeTopic;
	}

	get connected() {
		return this._client.connected;
	}

	get chainId(): number {
		return this._client.chainId ?? 0;
	}

	get key(): string {
		return this._client.key ?? '';
	}

	get clientMeta(): IClientMeta {
		return ClientMeta.fromNative(this._client.clientMeta);
	}

	get peerId(): string {
		return '';
	}

	get peerMeta(): IClientMeta {
		return ClientMeta.fromNative(this._client.clientMeta);
	}

	get session(): IWalletConnectSession {
		return {
			connected: this.connected,
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
				this._events.update.forEach((cb) => {
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
				this._emitEvent('connect', [
					null,
					{
						accounts: this.accounts,
						chainId: this.chainId,
					},
				]);
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

			this._client.connect((error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
					this._internal_events.off('connected', on_connect);
					this._internal_events.off('error', on_error);
				}
			});
		});
	}

	approveSession(sessionStatus: { chainId: number; accounts: string[] }) {
		return new Promise<void>((resolve, reject) => {
			this._client.approveSessionWithChainIdAccounts(sessionStatus.chainId, sessionStatus.accounts, (error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					this._internal_events.notify({
						eventName: 'connected',
					});
					resolve();
				}
			});
		});
	}

	rejectSession() {
		return new Promise<void>((resolve, reject) => {
			this._client.rejectSession((error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	killSession(sessionError?: { message: string }): Promise<void> {
		return new Promise((resolve, reject) => {
			this._internal_events.once('closed', (args) => {
				resolve();
			});
			this._client.killSession((error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	approveRequest(response: { id: number; result: any }) {
		return new Promise<void>((resolve, reject) => {
			this._client.approveRequestWithIdResult(response.id, response.result, (error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	rejectRequest(response: {
		id: number;
		error?: {
			code?: number;
			message?: string;
		};
	}) {
		return new Promise<void>((resolve, reject) => {
			if (response?.error?.code && response?.error?.message) {
				this._client.rejectRequestWithIdErrorCodeErrorMessageCallback(response.id, response.error?.code, response.error?.message, (error) => {
					if (error) {
						reject(WalletConnectError.fromNative(error));
					} else {
						resolve();
					}
				});
			} else {
				this._client.rejectRequestWithIdCallback(response.id, (error) => {
					if (error) {
						reject(WalletConnectError.fromNative(error));
					} else {
						resolve();
					}
				});
			}
		});
	}

	updateSession(sessionStatus: { chainId: number; accounts: string[] }) {
		return new Promise<void>((resolve, reject) => {
			this._client.approveSessionWithChainIdAccounts(sessionStatus.chainId, sessionStatus.accounts, (error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
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
					const has = this._events.update.find(callback);
					if (has) {
						return;
					}
					this._events.update.push(callback);
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
			case 'call_request':
				{
					const has = this._events.call_request.find(callback);
					if (has) {
						return;
					}
					this._events.call_request.push(callback);
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
					const index = this._events.update.indexOf(callback);
					if (index > -1) {
						this._events.update.splice(index, 1);
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
			case 'call_request':
				{
					const index = this._events.call_request.indexOf(callback);
					if (index > -1) {
						this._events.call_request.splice(index, 1);
					}
				}
				break;
		}
	}
}
