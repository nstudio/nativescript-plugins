import { File, Frame, GridLayout, knownFolders, path, Image, Label, View, ImageSource, fromObject, ItemSpec, GridUnitType, Button, Utils } from '@nativescript/core';
import { isNumber } from '@nativescript/core/utils/types';
import { Qr } from '@nstudio/nativescript-qr';
import { IClientMeta, IWalletConnect, IWalletConnectSession, TransactionConfig, WalletConnectConfig, WalletEvent } from '.';
import { ERROR_QRCODE_MODAL_USER_CLOSED, generateId } from './common';

export function toHex(value: string): string {
	return NSCWallectConnect.toHex(value);
}

const isHexStrict = (hex: string) => {
	return (typeof hex === 'string' || isNumber(hex)) && /^(-)?0x[0-9a-f]*$/i.test(hex);
};

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function serialize(data) {
	switch (typeof data) {
		case 'string':
		case 'boolean': {
			return data;
		}
		case 'number': {
			const hasDecimals = numberHasDecimals(data);
			if (hasDecimals) {
				return NSNumber.alloc().initWithDouble(data);
			} else {
				return NSNumber.alloc().initWithLongLong(data);
			}
		}

		case 'object': {
			if (data instanceof Date) {
				return NSDate.dateWithTimeIntervalSince1970(data.getTime() / 1000);
			}

			if (!data) {
				return NSNull.new();
			}

			if (Array.isArray(data)) {
				return NSArray.arrayWithArray((<any>data).map(serialize));
			}

			let node = {} as any;
			Object.keys(data).forEach(function (key) {
				let value = data[key];
				node[key] = serialize(value);
			});
			return NSDictionary.dictionaryWithDictionary(node);
		}

		default:
			return NSNull.new();
	}
}

class ClientMeta {
	#meta: NSCClientMeta;
	static fromNative(meta: NSCClientMeta) {
		if (meta instanceof NSCClientMeta) {
			const ret = new ClientMeta();
			ret.#meta = meta;
			return ret;
		}
		return null;
	}

	get native() {
		return this.#meta;
	}

	get description(): string {
		return this.native?.desc;
	}

	get url(): string {
		return this.native?.url?.absoluteString;
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
	#native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new WalletConnectError(message || native?.localizedDescription);
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}

	intoNative() {
		if (!this.#native) {
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
		return this.#native;
	}
}

@NativeClass
@ObjCClass(NSCWalletConnectDelegate)
class NSCWalletConnectDelegateImpl extends NSObject implements NSCWalletConnectDelegate {
	_owner: WeakRef<WalletConnect>;
	static initWithOwner(owner: WeakRef<WalletConnect>): NSCWalletConnectDelegateImpl {
		const delegate = NSCWalletConnectDelegateImpl.new() as NSCWalletConnectDelegateImpl;
		delegate._owner = owner;
		return delegate;
	}

	didConnectWithUrl(url: string): void {
		const owner = this._owner.get?.();
		if (owner) {
		}
	}

	didConnectWithSession(session: NSCWallectSession): void {
		const owner = this._owner.get?.();
		if (owner) {
			owner._internal_events.notify({
				eventName: 'connected',
				session,
			});
		}
	}

	didFailToConnectWithUrl(url: string): void {}

	didDisconnectWithSession(session: NSCWallectSession): void {
		const owner = this._owner.get?.();
		if (owner) {
			owner._session = undefined;
			owner._emitEvent('disconnect', [null, null]);
		}
	}

	didUpdateWithSession(session: NSCWallectSession): void {
		const owner = this._owner.get?.();
		if (owner) {
			owner._emitEvent('session_update', [null, owner.session]);
		}
	}
}

export class WalletConnect implements IWalletConnect {
	#internal_events = fromObject({});
	_approve_call_pending: {
		completion: (p1: string) => void;
		session: NSCWallectSession;
	};
	#events = {
		connected: [],
		disconnected: [],
		closed: [],
		error: [],
		update: [],
		call_request: [],
	};
	#config: NSCWalletConnectConfig;
	#client: NSCWallectConnect;
	#delegate: NSCWalletConnectDelegate;
	_session: NSCWallectSession;

	constructor(configuration: WalletConnectConfig) {
		const config = NSCWalletConnectConfig.alloc().init();
		config.bridge = configuration?.bridge || null;
		config.uri = configuration?.uri || null;
		config.key = configuration?.key || null;
		config.clientMeta = NSCWalletConnectClientMetaConfig.alloc().init();
		if (configuration?.clientMeta) {
			config.clientMeta.desc = configuration?.clientMeta?.description || null;
			if (configuration.clientMeta.icons) {
				config.clientMeta.icons = configuration.clientMeta.icons as any;
			}
			config.clientMeta.name = configuration?.clientMeta?.name || null;
			config.clientMeta.url = configuration?.clientMeta?.url || null;
		}

		this.#config = config;

		this.#client = NSCWallectConnect.alloc().initWithConfiguration(config);

		this.#delegate = NSCWalletConnectDelegateImpl.initWithOwner(new WeakRef(this));

		this.#client.delegate = this.#delegate;
	}

	get _internal_events() {
		return this.#internal_events;
	}

	get accounts(): string[] {
		const ret = [];
		const accounts = this.#client.accounts;
		if (accounts) {
			const size = accounts.count;
			for (let i = 0; i < size; i++) {
				ret.push(accounts.objectAtIndex(i));
			}
		}
		return ret;
	}

	get uri() {
		const uri = this.#client?.uri;
		if (uri) {
			return decodeURIComponent(uri);
		}
		return '';
	}

	get bridge() {
		return this.#client.bridge;
	}

	get clientId() {
		return this.#client.clientId;
	}

	get handshakeId(): number {
		return 0; //this.#client.handshakeId;
	}

	get handshakeTopic() {
		return this.#client.handshakeTopic;
	}

	get connected() {
		return this.#client.connected;
	}

	get chainId(): number {
		return this.#client.chainId ?? 0;
	}

	get key(): string {
		return this.#client.key ?? '';
	}

	get clientMeta(): IClientMeta {
		return ClientMeta.fromNative(this.#client.clientMeta);
	}

	get peerId(): string {
		return this.#client.peerId;
	}

	get peerMeta(): IClientMeta {
		return ClientMeta.fromNative(this.#client.peerMeta);
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
		if (event === 'connect') {
			this.#events.connected.forEach((cb) => {
				cb(...data);
			});
		} else if (event === 'disconnect') {
			this.#events.disconnected.forEach((cb) => {
				cb(...data);
			});
		} else if (event === 'error') {
			this.#events.error.forEach((cb) => {
				cb(...data);
			});
		} else if (event === 'session_update') {
			this.#events.update.forEach((cb) => {
				cb(...data);
			});
		} else if (event === 'call_request') {
			this.#events.call_request.forEach((cb) => {
				cb(...data);
			});
		}
	}

	#qrView: View;

	connect(modal: 'default' | 'custom' = 'default', renderModal?: (qrCode: ImageSource) => View): Promise<{ chainId: number; accounts: string[] }> {
		return new Promise((resolve, reject) => {
			let on_connect_func = (args) => {
				const session = args.session as NSCWallectSession;

				this.#internal_events.once('modal_close', modal_close);
				resolve({
					accounts: this.accounts,
					chainId: session.chainId,
				});
				this._emitEvent('connect', [null, null]);
				this.#hideQr();
			};

			let on_connect = on_connect_func.bind(this);

			let modal_close_func = (args) => {
				this.#internal_events.off('connected', on_connect);
				reject(new Error(ERROR_QRCODE_MODAL_USER_CLOSED));
			};

			let modal_close = modal_close_func.bind(this);
			this.#internal_events.once('modal_close', modal_close);
			this.#internal_events.once('connected', on_connect);
			this.#client.connect((error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				}
			});
			if (modal === 'custom') {
				this.#showQr(null, renderModal(Qr.generate(this.uri)));
			} else {
				this.#showQr();
			}
		});
	}

	createSession(): Promise<{ chainId: number; accounts: string[] }> {
		return new Promise((resolve, reject) => {
			let on_connect_func = (args) => {
				resolve({
					accounts: this.accounts,
					chainId: this.chainId,
				});
			};
			let on_connect = on_connect_func.bind(this);

			this.#internal_events.once('connected', on_connect);

			let on_error_func = (args) => {
				reject(args.error);
			};
			let on_error = on_error_func.bind(this);
			this.#internal_events.once('error', on_error);

			this.#client.createSession((error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
					this.#internal_events.off('connected', on_connect);
					this.#internal_events.off('error', on_error);
				}
			});
		});
	}

	#showQr(title: string = 'Scan QR code with compatible wallet', view?: View) {
		let cv = view;
		if (!cv) {
			const grid = new GridLayout();
			grid.backgroundColor = 'white';
			const titleView = new Label();
			titleView.text = title;
			titleView.textAlignment = 'center';
			titleView.verticalAlignment = 'bottom';
			const imageView = new Image();
			imageView.imageSource = Qr.generate(this.uri);

			const titleRow = new ItemSpec(1, GridUnitType.STAR);
			grid.addRow(titleRow);
			titleView.row = 0;

			const qrRow = new ItemSpec(1, GridUnitType.STAR);
			grid.addRow(qrRow);

			const row = new ItemSpec(1, GridUnitType.STAR);
			grid.addRow(row);

			imageView.verticalAlignment = 'middle';
			imageView.row = 1;

			const copyBtn = new Button();
			copyBtn.text = 'Copy to clipboard';
			copyBtn.row = 2;
			copyBtn.on('tap', (args) => {
				if (global.isIOS) {
					const pasteBoard = UIPasteboard.generalPasteboard;
					pasteBoard.URL = NSURL.URLWithString(this.uri);
				} else {
					const clipboardManager = Utils.android.getApplicationContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE) as android.content.ClipboardManager;
					clipboardManager.setPrimaryClip(android.content.ClipData.newRawUri('uri', android.net.Uri.parse(this.uri)));
				}
			});

			grid.addChild(titleView);
			grid.addChild(imageView);
			grid.addChild(copyBtn);
			cv = grid;
		}
		this.#qrView = Frame.topmost().showModal(cv, {
			context: {},
			closeCallback: (success) => {
				console.log('closeCallback', success);
				if (!success) {
					this.#internal_events.notify({
						eventName: 'modal_close',
					});
				}
			},
		});
	}

	#hideQr() {
		if (this.#qrView) {
			this.#qrView.closeModal(true);
			this.#qrView = null;
		}
	}

	signTransaction(tx: TransactionConfig) {
		return new Promise((resolve, reject) => {
			const value = NSCTransactionConfig.alloc().init(generateId(), tx.from, tx.value, tx.data);
			if (tx.to) {
				value.to = tx.to;
			}
			if (tx.nonce) {
				value.nonce = tx.nonce;
			}

			if (tx.gas) {
				value.gas = tx.gas;
			}

			if (tx.gasPrice) {
				value.gasPrice = tx.gasPrice;
			}

			this.#client.signTransaction(value, (response, error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve(JSON.parse(response));
				}
			});
		});
	}

	sendTransaction(tx: TransactionConfig) {
		return new Promise((resolve, reject) => {
			const value = NSCTransactionConfig.alloc().init(generateId(), tx.from, tx.value, tx.data);
			if (tx.to) {
				value.to = tx.to;
			}
			if (tx.nonce) {
				value.nonce = tx.nonce;
			}

			if (tx.gas) {
				value.gas = tx.gas;
			}

			if (tx.gasPrice) {
				value.gasPrice = tx.gasPrice;
			}

			this.#client.sendTransaction(value, (response, error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve(JSON.parse(response));
				}
			});
		});
	}

	signMessage(params: any[]) {
		return new Promise((resolve, reject) => {
			this.#client.signMessage(params[0], params[1], (response, error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve(JSON.parse(response));
				}
			});
		});
	}

	signPersonalMessage(params: any[]) {
		return new Promise((resolve, reject) => {
			this.#client.signPersonalMessage(params[1], params[0], (response, error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve(response);
				}
			});
		});
	}

	signTypedData(params: any[]) {
		return new Promise((resolve, reject) => {
			this.#client.signTypedData(params[0], params[1], (response, error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve(JSON.parse(response));
				}
			});
		});
	}

	sendCustomRequest(request: { id: number; method: string; params: any[] }) {
		return new Promise((resolve, reject) => {
			this.#client.sendCustomRequest(request.method, request.id, JSON.stringify(request.params), (response, error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve(JSON.parse(response));
				}
			});
		});
	}

	sendRawTransaction(data: string) {
		return new Promise((resolve, reject) => {
			this.#client.sendRawTransaction(data, (response, error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve(JSON.parse(response));
				}
			});
		});
	}

	approveSession(sessionStatus: { chainId: number; accounts: string[] }) {
		return new Promise<void>((resolve, reject) => {
			this.#client.approveSessionWithChainIdAccounts(sessionStatus.chainId, sessionStatus.accounts, (error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	rejectSession() {
		return new Promise<void>((resolve, reject) => {
			this.#client.rejectSession((error) => {
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
			this.#internal_events.once('closed', (args) => {
				resolve();
			});
			this.#client.killSession((error) => {
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
			this.#client.approveRequestWithIdResult(response.id, response.result, (error) => {
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
				this.#client.rejectRequestWithIdErrorCodeErrorMessageCallback(response.id, response.error?.code, response.error?.message, (error) => {
					if (error) {
						reject(WalletConnectError.fromNative(error));
					} else {
						resolve();
					}
				});
			} else {
				this.#client.rejectRequestWithIdCallback(response.id, (error) => {
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
			this.#client.updateSessionWithChainIdAccounts(sessionStatus.chainId, sessionStatus.accounts, (error) => {
				if (error) {
					reject(WalletConnectError.fromNative(error));
				} else {
					resolve();
				}
			});
		});
	}

	on(event: WalletEvent, callback) {
		if (typeof callback !== 'function') {
			return;
		}
		switch (event) {
			case 'disconnect':
				{
					const has = this.#events.disconnected.find(callback);
					if (has) {
						return;
					}
					this.#events.disconnected.push(callback);
				}
				break;
			case 'connect':
				{
					const has = this.#events.connected.find(callback);
					if (has) {
						return;
					}
					this.#events.connected.push(callback);
				}
				break;
			case 'error':
				{
					const has = this.#events.error.find(callback);
					if (has) {
						return;
					}
					this.#events.error.push(callback);
				}
				break;
			case 'session_update':
				{
					const has = this.#events.update.find(callback);
					if (has) {
						return;
					}
					this.#events.update.push(callback);
				}
				break;
			case 'call_request':
				{
					const has = this.#events.call_request.find(callback);
					if (has) {
						return;
					}
					this.#events.call_request.push(callback);
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
					const index = this.#events.disconnected.indexOf(callback);
					if (index > -1) {
						this.#events.disconnected.splice(index, 1);
					}
				}
				break;
			case 'connect':
				{
					const index = this.#events.connected.indexOf(callback);
					if (index > -1) {
						this.#events.connected.splice(index, 1);
					}
				}
				break;
			case 'error':
				{
					const index = this.#events.error.indexOf(callback);
					if (index > -1) {
						this.#events.error.splice(index, 1);
					}
				}
				break;
			case 'session_update':
				{
					const index = this.#events.update.indexOf(callback);
					if (index > -1) {
						this.#events.update.splice(index, 1);
					}
				}
				break;
			case 'call_request':
				{
					const index = this.#events.call_request.indexOf(callback);
					if (index > -1) {
						this.#events.call_request.splice(index, 1);
					}
				}
				break;
		}
	}
}
