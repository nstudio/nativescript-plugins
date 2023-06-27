import { Utils, fromObject } from '@nativescript/core';
import { IClientMeta, IWalletConnect, IWalletConnectSession, WalletConnectConfig, WalletEvent } from '.';

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

function getClientMeta(meta) {
	const ret = {
		description: null,
		url: null,
		icons: null,
		name: null,
	};
	const peer = meta.getPeer();
	if (peer) {
		ret.description = peer.getDescription();
		ret.url = peer.getUrl();
		const nativeIcons = peer.getIcons() as java.util.List<string>;
		const size = nativeIcons.size();
		const icons = [];
		for (let i = 0; i < size; i++) {
			icons.push(nativeIcons.get(i));
		}
		ret.icons = icons.length ? icons : null;
		ret.name = peer.getName();
	}

	return ret;
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
	_native: io.nstudio.plugins.walletconnect_legacy.WalletConnect;
	constructor(config: WalletConnectConfig) {
		let icons: java.util.List<any> = null;

		if (Array.isArray(config.clientMeta.icons)) {
			icons = new java.util.ArrayList();
			config.clientMeta.icons.forEach((item) => {
				icons.add(item);
			});
		}

		const meta = new io.nstudio.plugins.walletconnect_legacy.WalletConnect.Meta(config.clientMeta.url ?? null, config.clientMeta.name ?? null, config.clientMeta.description ?? null, icons);

		if (config.uri) {
			this._native = new io.nstudio.plugins.walletconnect_legacy.WalletConnect(Utils.android.getApplicationContext(), meta, config.uri);
		} else {
			this._native = new io.nstudio.plugins.walletconnect_legacy.WalletConnect(Utils.android.getApplicationContext(), meta, null, config.bridge ?? null, config.key ?? null, null, 1);
		}

		const ref = new WeakRef(this);
		this.native.setListener(
			new io.nstudio.plugins.walletconnect_legacy.WalletConnect.Callback({
				onMethod(event, json) {
					const data = JSON.parse(json);
					const owner = ref.get();
					if (owner) {
						switch (event) {
							case 'session_request':
								const id = data.id;
								const peerId = data.peer.id;
								const payload = {
									id,
									method: 'session_request',
									params: [peerId, data.peer],
								};
								owner._internal_events.notify({
									eventName: 'session_request',
									payload,
								});
								owner._emitEvent('session_request', [null, payload]);
								break;
							case 'session_update':
								break;
							case 'send_transaction':
								break;
							case 'sign_message':
								{
									const payload = {
										id: data.id,
										method: 'eth_sign',
										params: [data.address, data.message],
									};
									owner._internal_events.notify({
										eventName: 'call_request',
										payload,
									});
								}
								break;
							case 'custom':
								break;
							case 'response':
								break;
						}
					}
				},
				onStatus(event, data) {
					console.log('onStatus', event, data);
					const owner = ref.get();
					if (owner) {
						switch (event) {
							case 'approve':
								break;
							case 'connect':
								break;
							case 'close':
								break;
							case 'disconnect':
								owner._emitEvent('disconnect', [null, null]);
								break;
							case 'error':
								const err = WalletConnectError.fromNative(data, data.getMessage?.());
								owner._internal_events.notify({
									eventName: 'error',
									err,
								});
								owner._emitEvent('error', [err, null]);
								break;
						}
					}
				},
			})
		);
	}

	get native() {
		return this._native;
	}

	accounts: string[];

	get connected(): boolean {
		return this.native.getConnected();
	}

	get uri(): string {
		return this.native.getUri();
	}

	get bridge(): string {
		return this.native.getBridge();
	}

	get clientId(): string {
		return this.native.getClientId();
	}

	get handshakeId(): number {
		return this.native.getHandshakeId();
	}

	get handshakeTopic(): string {
		return this.native.getHandshakeTopic();
	}

	get chainId(): number {
		return this.native.getChainId();
	}

	get key(): string {
		return this.native.getKey();
	}

	clientMeta: IClientMeta;

	peerId: string;

	peerMeta: IClientMeta;

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
			this.native.offer();
		});
	}
	approveSession(sessionStatus: { chainId: number; accounts: string[] }) {
		this.native.approve(java.util.Arrays.asList(sessionStatus.accounts), sessionStatus.chainId);
	}
	rejectSession(sessionError?: { message: string }) {
		this.native.reject();
	}
	updateSession(sessionStatus: { chainId: number; accounts: string[] }) {
		this.native.updateSession(java.util.Arrays.asList(sessionStatus.accounts), sessionStatus.chainId);
	}
	killSession(sessionError?: { message: string }): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.kill();
		});
	}
	approveRequest(response: { id: number; result?: any }) {
		this.native.approveRequest(response.id, Utils.dataSerialize(response.result));
	}
	rejectRequest(response: { id: number; error?: { code?: number; message?: string } }) {
		this.native.rejectRequest(response.id, response.error?.code, response.error?.message);
	}
	disconnect() {
		this.native.kill();
	}

	on(event: WalletEvent, callback: (error: Error, payload: any) => void) {
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
