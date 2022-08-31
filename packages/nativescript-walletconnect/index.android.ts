declare const com, okhttp3, io, kotlin;
import { File, Frame, GridLayout, knownFolders, path, Image, Label, View, ItemSpec, GridUnitType, ImageSource, Observable, fromObject } from '@nativescript/core';
import { isNumber } from '@nativescript/core/utils/types';
import { Qr } from '@nstudio/nativescript-qr';
import { IWalletConnect, IWalletConnectSession, TransactionConfig, WalletConnectConfig, WalletEvent } from '.';
import { ERROR_QRCODE_MODAL_USER_CLOSED, generateId } from './common';

function toArrayList(items?: any[]) {
	if (Array.isArray(items)) {
		const list = new java.util.ArrayList();
		items.forEach((item) => {
			list.add(item);
		});
		return list;
	}
	return null;
}

export function toHex(value: string): string {
	return `0x${io.nstudio.plugins.walletconnect.Utils.toHex(value)}`;
}

const isHexStrict = (hex: string) => {
	return (typeof hex === 'string' || isNumber(hex)) && /^(-)?0x[0-9a-f]*$/i.test(hex);
};

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function serialize(data) {
	let store;
	switch (typeof data) {
		case 'string':
		case 'boolean': {
			if (typeof data === 'string') {
				return new java.lang.String(data);
			}
			return new java.lang.Boolean(data);
		}
		case 'number': {
			const hasDecimals = numberHasDecimals(data);
			if (hasDecimals) {
				return java.lang.Double.valueOf(data);
			} else {
				return java.lang.Long.valueOf(data);
			}
		}

		case 'object': {
			if (!data) {
				return null;
			}

			if (data instanceof Date) {
				return new java.util.Date(data.getTime());
			}

			if (Array.isArray(data)) {
				store = new java.util.ArrayList();
				data.forEach((item) => store.add(serialize(item)));
				return store;
			}

			if (data.native) {
				return data.native;
			}

			store = new java.util.HashMap();
			Object.keys(data).forEach((key) => store.put(key, serialize(data[key])));
			return store;
		}

		default:
			return null;
	}
}

class ClientMeta {
	#meta: org.walletconnect.Session.PeerMeta;
	static fromNative(meta: org.walletconnect.Session.PeerMeta) {
		if (meta instanceof org.walletconnect.Session.PeerMeta) {
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
	#native: java.lang.Exception;
	static fromNative(native: java.lang.Exception, message?: string) {
		const error = new WalletConnectError(message || native?.getMessage?.());
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}

	intoNative() {
		if (!this.#native) {
			return new java.lang.Exception(this.message);
		}
		return this.#native;
	}
}

export class WalletConnect implements IWalletConnect {
	#internal_events = fromObject({});
	#events = {
		connected: [],
		disconnected: [],
		closed: [],
		error: [],
		update: [],
		call_request: [],
	};
	#config: org.walletconnect.Session.Config;
	#session: org.walletconnect.impls.WCSession;
	#moshi;
	#client;
	#store: org.walletconnect.impls.FileWCSessionStore;
	#connected: boolean = false;
	#clientId: string = '';
	constructor(configuration: WalletConnectConfig) {
		if (configuration.uri) {
			this.#config = io.nstudio.plugins.walletconnect.Utils.createConfigFromWCUri(configuration.uri);
		} else {
			const uuid = java.util.UUID.randomUUID().toString();
			this.#config = new org.walletconnect.Session.Config(uuid, configuration.bridge, configuration?.key ?? io.nstudio.plugins.walletconnect.Utils.createRandomKey(32), 'wc', 1);
		}

		this.#moshi = io.nstudio.plugins.walletconnect.Utils.createMoshiInstance();

		this.#client = new okhttp3.OkHttpClient.Builder().build();

		const file = File.fromPath(path.join(knownFolders.temp().path, 'session_store.json'));

		this.#store = new org.walletconnect.impls.FileWCSessionStore(new java.io.File(file.path), this.#moshi);

		const meta = new org.walletconnect.Session.PeerMeta(configuration?.clientMeta?.url ?? null, configuration?.clientMeta?.name ?? null, configuration?.clientMeta?.description ?? null, toArrayList(configuration?.clientMeta?.icons));

		const adapter = new org.walletconnect.impls.MoshiPayloadAdapter(this.#moshi);

		this.#clientId = java.util.UUID.randomUUID().toString();

		this.#session = io.nstudio.plugins.walletconnect.Utils.createWCSession(this.#config.toFullyQualifiedConfig(), adapter, this.#store, new org.walletconnect.impls.OkHttpTransport.Builder(this.#client, this.#moshi), meta, this.clientId);

		const ref = new WeakRef(this);

		this.#session.addCallback(
			new org.walletconnect.Session.Callback({
				onStatus(status: org.walletconnect.Session.Status) {
					console.log('onStatus', status);
					const owner = ref.get?.();
					if (owner) {
						if (status instanceof org.walletconnect.Session.Status.Disconnected) {
							owner._emitEvent('disconnect', [null, null]);
						} else if (status instanceof org.walletconnect.Session.Status.Approved) {
							owner.#internal_events.notify({
								eventName: 'connected',
							});
							owner._emitEvent('connect', [null, null]);
						} else if (status instanceof org.walletconnect.Session.Status.Closed) {
							owner.#internal_events.notify({
								eventName: 'closed',
							});
						} else if (status instanceof org.walletconnect.Session.Status.Error) {
							const error = WalletConnectError.fromNative(status.getThrowable(), status.toString());
							owner.#internal_events.notify({
								eventName: 'error',
								error,
							});
							owner._emitEvent('error', [error, null]);
						}
					}
				},
				onMethodCall(call: org.walletconnect.Session.MethodCall) {
					if (call instanceof org.walletconnect.Session.MethodCall.SessionUpdate) {
						const owner = ref.get?.();
						const params = call.getParams();

						const ret = [];
						const accounts = params?.getAccounts?.();
						if (accounts) {
							const size = accounts.size();
							for (let i = 0; i < size; i++) {
								ret.push(accounts.get(i));
							}
						}

						owner._emitEvent('session_update', [
							null,
							{
								chainId: params.getChainId().longValue?.() || 0,
								accounts: ret,
							},
						]);
					} else if (call instanceof org.walletconnect.Session.MethodCall.SessionRequest) {
						const owner = ref.get?.();
						owner._emitEvent('call_request', [
							null,
							{
								id: call.getId(),
								topic: call.getPeer?.()?.getId?.(),
							},
						]);
					}
				},
			})
		);
	}

	get accounts(): string[] {
		const ret = [];
		const accounts = this.#session?.approvedAccounts?.();
		if (accounts) {
			const size = accounts.size();
			for (let i = 0; i < size; i++) {
				ret.push(accounts.get(i));
			}
		}
		return ret;
	}

	get uri() {
		return this.#config?.toWCUri?.();
	}

	get bridge() {
		return this.#config.getBridge?.();
	}

	get clientId() {
		return this.#clientId;
	}

	get handshakeId(): number {
		return this.#currentSession.getHandshakeId?.().longValue?.() ?? 0;
	}

	get handshakeTopic() {
		return this.#config.getHandshakeTopic?.() ?? '';
	}

	get connected() {
		return this.#connected;
	}

	get #currentSession() {
		try {
			const items = this.#store.list();
			let item: org.walletconnect.impls.WCSessionStore.State = null;
			let size = items.size();
			for (let i = 0; i < size; i++) {
				const value = items.get(i) as org.walletconnect.impls.WCSessionStore.State;
				if (value.getConfig().getKey() === this.#config.getKey()) {
					item = value;
					break;
				}
			}

			return item;
		} catch (error) {
			return null;
		}
	}

	get chainId(): number {
		try {
			const item = this.#currentSession;
			return item?.getChainId?.().longValue?.();
		} catch (error) {
			return 0;
		}
	}

	get key() {
		return this.#config.getKey?.();
	}

	get clientMeta() {
		try {
			const item = this.#currentSession;
			const meta = item?.getClientData?.().getMeta?.();
			return ClientMeta.fromNative(meta);
		} catch (error) {
			return null;
		}
	}

	get peerId() {
		try {
			const item = this.#currentSession;
			const peerData = item?.getPeerData?.();
			return peerData?.getId?.();
		} catch (error) {
			return '';
		}
	}

	get peerMeta() {
		try {
			const item = this.#currentSession;
			const meta = item?.getPeerData?.().getMeta?.();
			return ClientMeta.fromNative(meta);
			return {};
		} catch (error) {
			return null;
		}
	}

	get session(): IWalletConnectSession {
		return {
			connected: this.#connected,
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
				this.#internal_events.once('modal_close', modal_close);
				const item = this.#currentSession;
				this.#connected = true;
				resolve({
					accounts: this.accounts,
					chainId: item.getChainId().longValue(),
				});
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

			this.#session.offer();
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
				this.#connected = true;
				const item = this.#currentSession;
				resolve({
					accounts: this.accounts,
					chainId: item.getChainId().longValue(),
				});
			};
			let on_connect = on_connect_func.bind(this);

			this.#internal_events.once('connected', on_connect);

			let on_error_func = (args) => {
				reject(args.error);
			};
			let on_error = on_error_func.bind(this);
			this.#internal_events.once('error', on_error);

			this.#session.offer();
		});
	}

	#showQr(title: string = 'Scan QR code with compatible wallet', view?: View) {
		let cv = view;
		if (!cv) {
			const grid = new GridLayout();
			grid.paddingTop = 5;
			grid.backgroundColor = 'white';
			const titleView = new Label();
			titleView.text = title;
			titleView.textAlignment = 'center';
			const imageView = new Image();
			imageView.imageSource = Qr.generate(this.uri);

			const titleRow = new ItemSpec(1, GridUnitType.AUTO);
			grid.addRow(titleRow);
			titleView.row = 0;

			const qrRow = new ItemSpec(1, GridUnitType.STAR);
			grid.addRow(qrRow);

			imageView.row = 1;

			grid.addChild(titleView);
			grid.addChild(imageView);
			cv = grid;
		}
		this.#qrView = Frame.topmost().showModal(cv, {
			context: {},
			closeCallback: (success) => {
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
			const map = new java.util.HashMap();
			map.put('from', tx.from);
			if (tx.to) {
				map.put('to', tx.to);
			}
			if (tx.nonce) {
				map.put('nonce', tx.nonce);
			}
			if (tx.gasPrice) {
				map.put('gasPrice', tx.gasPrice);
			}
			if (tx.to) {
				map.put('gas', tx.gas);
			}

			map.put('value', tx.value);
			map.put('data', tx.data);

			const params = io.nstudio.plugins.walletconnect.Utils.mapToList(map);
			const value = new org.walletconnect.Session.MethodCall.Custom(generateId(), 'eth_sendTransaction', params);
			this.#session.performMethodCall(
				value,
				new kotlin.jvm.functions.Function1({
					invoke(resp) {
						const error = resp.getError();
						if (error) {
							reject(WalletConnectError.fromNative(error, error.getMessage()));
						} else {
							resolve(resp.toString());
						}
					},
				})
			);
		});
	}

	sendTransaction(tx: TransactionConfig) {
		return new Promise((resolve, reject) => {
			const value = new org.walletconnect.Session.MethodCall.SendTransaction(generateId(), tx.from, tx.to ?? '', tx.nonce ?? '', tx.gasPrice ?? '', tx.gas ?? '', tx.value, tx.data);
			this.#session.performMethodCall(
				value,
				new kotlin.jvm.functions.Function1({
					invoke(resp) {
						const error = resp.getError();
						if (error) {
							reject(WalletConnectError.fromNative(error, error.getMessage()));
						} else {
							resolve(resp.toString());
						}
					},
				})
			);
		});
	}

	signMessage(params: any[]) {
		return new Promise((resolve, reject) => {
			const sign = new org.walletconnect.Session.MethodCall.SignMessage(generateId(), params[0], params[1]);
			this.#session.performMethodCall(
				sign,
				new kotlin.jvm.functions.Function1({
					invoke(resp) {
						const error = resp.getError();
						if (error) {
							reject(WalletConnectError.fromNative(error, error.getMessage()));
						} else {
							resolve(resp.toString());
						}
					},
				})
			);
		});
	}

	signPersonalMessage(params: any[]) {
		return new Promise((resolve, reject) => {
			const list = serialize(params);
			const sign = new org.walletconnect.Session.MethodCall.Custom(generateId(), 'personal_sign', list);
			this.#session.performMethodCall(
				sign,
				new kotlin.jvm.functions.Function1({
					invoke(resp) {
						const error = resp.getError();
						if (error) {
							reject(WalletConnectError.fromNative(error, error.getMessage()));
						} else {
							resolve(resp.toString());
						}
					},
				})
			);
		});
	}

	signTypedData(params: any[]) {
		return new Promise((resolve, reject) => {
			const list = serialize(params);
			const sign = new org.walletconnect.Session.MethodCall.Custom(generateId(), 'eth_signTypedData', list);
			this.#session.performMethodCall(
				sign,
				new kotlin.jvm.functions.Function1({
					invoke(resp) {
						const error = resp.getError();
						if (error) {
							reject(WalletConnectError.fromNative(error, error.getMessage()));
						} else {
							resolve(resp.toString());
						}
					},
				})
			);
		});
	}

	sendCustomRequest(request: { id: number; method: string; params: any[] }) {
		return new Promise((resolve, reject) => {
			const list = serialize(request.params);
			const sign = new org.walletconnect.Session.MethodCall.Custom(generateId(), request.method, list);
			this.#session.performMethodCall(
				sign,
				new kotlin.jvm.functions.Function1({
					invoke(resp) {
						const error = resp.getError();
						if (error) {
							reject(WalletConnectError.fromNative(error, error.getMessage()));
						} else {
							resolve(resp.toString());
						}
					},
				})
			);
		});
	}

	sendRawTransaction(data: string) {
		return new Promise((resolve, reject) => {
			const params = java.util.Arrays.asList([data]);
			const sign = new org.walletconnect.Session.MethodCall.Custom(generateId(), 'eth_sendRawTransaction', params);
			this.#session.performMethodCall(
				sign,
				new kotlin.jvm.functions.Function1({
					invoke(resp) {
						const error = resp.getError();
						if (error) {
							reject(WalletConnectError.fromNative(error, error.getMessage()));
						} else {
							resolve(resp.toString());
						}
					},
				})
			);
		});
	}

	approveSession(sessionStatus: { chainId: number; accounts: string[] }) {
		const list = serialize(sessionStatus.accounts);
		this.#session.approve(list, sessionStatus.chainId);
	}

	rejectSession(sessionError?: { message: string }) {
		this.#session.reject();
	}

	killSession(sessionError?: { message: string }): Promise<void> {
		return new Promise((resolve, reject) => {
			this.#internal_events.once('closed', (args) => {
				resolve();
			});
			this.#session.kill();
		});
	}

	updateSession(sessionStatus: { chainId: number; accounts: string[] }) {
		return new Promise((resolve, reject) => {
			const list = serialize(sessionStatus.accounts);
			this.#session.update(list, sessionStatus.chainId);
		});
	}

	approveRequest(response: { id: number; result: any }) {
		this.#session.approveRequest(response.id, response.result);
	}

	rejectRequest(response: {
		id: number;
		error?: {
			code?: number;
			message?: string;
		};
	}) {
		this.#session.rejectRequest(response.id, response?.error?.code || null, response?.error?.message || null);
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
					const has = this.#events.update.find(callback);
					if (has) {
						return;
					}
					this.#events.update.push(callback);
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
					const index = this.#events.update.indexOf(callback);
					if (index > -1) {
						this.#events.update.splice(index, 1);
					}
				}
				break;
		}
	}
}
