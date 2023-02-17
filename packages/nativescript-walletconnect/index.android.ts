//declare const com, okhttp3, io, kotlin;
import { fromObject, Observable, Utils } from '@nativescript/core';

export function init() {
	io.nstudio.plugins.walletconnect.NSCWalletConnectV2.setupBouncyCastle();
}

export class AppMeta {
	static fromNativeProposal(native: com.walletconnect.sign.client.Sign.Model.SessionProposal) {
		// wasteful ??

		const nativeIcons = native.getIcons();
		const icons = [];
		const size = nativeIcons.size();

		for (let i = 0; i < size; i++) {
			const icon = nativeIcons.get(i) as java.net.URI;
			icons.push(icon.toString());
		}

		const data = new com.walletconnect.android.Core.Model.AppMetaData(native.getName(), native.getDescription(), native.getUrl(), java.util.Arrays.asList(icons), '');
		return AppMeta.fromNative(data);
	}
	private _meta: com.walletconnect.android.Core.Model.AppMetaData;

	static fromNative(meta: com.walletconnect.android.Core.Model.AppMetaData) {
		if (meta instanceof com.walletconnect.android.Core.Model.AppMetaData) {
			const ret = new AppMeta();
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

	get redirect(): string {
		return this.native?.getRedirect?.();
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

	static fromNative(native: java.lang.Throwable, message?: string) {
		const error = new WalletConnectError(message || native?.getMessage?.());
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}

	intoNative() {
		if (!this._native) {
			return new java.lang.Throwable(this.message);
		}
		return this._native;
	}
}

export class Client {
	static initialize(
		projectId: string,
		relayUrl: string,
		meta: {
			description: string;
			url: string;
			icons: string[];
			name: string;
			redirect?: string;
		},
		connectionType: 'auto' | 'manual' = 'auto'
	) {
		io.nstudio.plugins.walletconnect.NSCWalletConnectV2.initialize(
			projectId,
			relayUrl ?? 'relay.walletconnect.com',
			new com.walletconnect.android.Core.Model.AppMetaData(meta.name, meta.description, meta.url, java.util.Arrays.asList(meta.icons), meta.redirect ?? null),
			connectionType === 'manual' ? com.walletconnect.android.relay.ConnectionType.MANUAL : com.walletconnect.android.relay.ConnectionType.AUTOMATIC,
			Utils.android.getApplicationContext(),
			new kotlin.jvm.functions.Function1({
				invoke(param0) {},
			})
		);
	}

	static get instance() {
		return client;
	}

	get pair() {
		return pair;
	}

	get sign() {
		return sign;
	}

	get auth() {
		return auth;
	}

	get wallet() {
		return _wallet;
	}
}
// todo fix the sign methods

export function eth_personalSign(privateKey: PrivateKey, message: any) {
	const toSign = message[0];
	return privateKey.sign(toSign);
}

export function eth_sign(privateKey: PrivateKey, message: any) {
	const toSign = message[1];
	return privateKey.sign(toSign);
}

export function eth_signTransaction(privateKey: PrivateKey, message: any) {
	/*

		readonly from: string;
	readonly to: string;
	readonly nonce: string;
	readonly gasPrice: string;
	readonly gas: string;
	readonly value: string;
	readonly data: string;

	*/
	return {}; //deserialize(NSCWalletConnectV2ETHSigner.signTransaction(privateKey.native, toCodable(serialize(message))));
}

export function eth_sendTransaction(privateKey: PrivateKey, message: any) {
	return {}; //deserialize(NSCWalletConnectV2ETHSigner.sendTransaction(privateKey.native, toCodable(serialize(message))));
}

export function eth_signTypedData(privateKey: PrivateKey, message: any) {
	return privateKey.signTypedData(message[1]);
}

export class Address {
	_native: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Address;
	static fromNative(address: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Address) {
		if (address instanceof io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Address) {
			const ret = new Address();
			ret._native = address;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	hex(eip55: boolean = false): string {
		return this.native.hex(eip55);
	}
}

export class PrivateKey {
	_native: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PrivateKey;

	constructor(hexString?: string | Uint8Array | Uint8ClampedArray | ArrayBuffer) {
		if (!hexString) {
			this._native = new io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PrivateKey();
		}
		switch (typeof hexString) {
			case 'string':
				this._native = new io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PrivateKey(hexString);
				break;
			case 'object':
				if (hexString instanceof ArrayBuffer || hexString instanceof Uint8Array || hexString instanceof Uint8ClampedArray) {
					this._native = new io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PrivateKey(io.nstudio.plugins.walletconnect.NSCWalletConnectV2.bufferToBytes(hexString as any));
				}
				break;
			default:
				// todo throw ?
				return null;
		}
	}

	get native() {
		return this._native;
	}

	get address() {
		return Address.fromNative(this.native.getAddress());
	}

	get hex() {
		return this.native.getHex();
	}

	sign(message: string) {
		let needsToHash = false;
		if (message.startsWith('0x')) {
			needsToHash = true;
		}

		let ret;

		try {
			ret = this.native.sign(message, this.native, needsToHash);
		} catch (error) {}

		return ret;
	}

	_sign(message: any, needsToHash: boolean) {
		let ret;

		try {
			ret = this.native.sign(message, this.native, needsToHash);
		} catch (error) {}

		return ret;
	}

	signTypedData(data: any) {
		let ret;
		try {
			ret = this.native.signTypedData(data, this.native, true);
		} catch (error) {}

		return ret;
	}
}

export class WalletConnectURI {
	_pairing: com.walletconnect.android.Core.Model.Pairing;
	_uri: com.walletconnect.android.internal.common.model.WalletConnectUri;

	private _isPairing: boolean = false;
	static fromNative(uri) {
		if (uri instanceof com.walletconnect.android.internal.common.model.WalletConnectUri) {
			const ret = new WalletConnectURI();
			ret._uri = uri;
			return ret;
		}

		if (uri instanceof com.walletconnect.android.Core.Model.Pairing) {
			const ret = new WalletConnectURI();
			ret._pairing = uri;
			ret._isPairing = true;
			return ret;
		}
		return null;
	}

	get native() {
		return this._uri ?? this._pairing;
	}

	get relay() {
		if (this._isPairing) {
			return {
				protocol: this._pairing.getRelayProtocol(),
				data: this._pairing.getRelayData(),
			};
		}
		const relay = this._uri.getRelay();
		return {
			protocol: relay.getProtocol(),
			data: relay.getData(),
		};
	}

	get symKey(): string {
		if (this._isPairing) {
			return undefined;
		}
		return this._uri.symKey;
	}

	get topic(): string {
		if (this._isPairing) {
			return this._pairing.getTopic();
		}
		return this._uri.getTopic?.()?.value;
	}

	get version(): string {
		if (this._isPairing) {
			return undefined;
		}
		return this._uri.getVersion();
	}

	toJSON() {
		return {
			relay: this.relay,
			symKey: this.symKey,
			topic: this.topic,
			version: this.version,
		};
	}
}

export class ProposalNamespaceExtension {
	private _native: com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension;

	static fromNative(extension: com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension) {
		if (extension instanceof com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension) {
			const ret = new ProposalNamespaceExtension();
			ret._native = extension;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get chains(): string[] {
		return deserializeData(this.native.getChains());
	}

	get methods(): string[] {
		return deserializeData(this.native.getMethods());
	}

	get events(): string[] {
		return deserializeData(this.native.getEvents());
	}

	toJSON() {
		return {
			chains: this.chains,
			methods: this.methods,
			events: this.events,
		};
	}
}

export class ProposalNamespace {
	private _native: com.walletconnect.sign.client.Sign.Model.Namespace.Proposal;

	static fromNative(ns: com.walletconnect.sign.client.Sign.Model.Namespace.Proposal) {
		if (ns instanceof com.walletconnect.sign.client.Sign.Model.Namespace.Proposal) {
			const ret = new ProposalNamespace();
			ret._native = ns;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get chains(): string[] {
		return deserializeData(this.native.getChains());
	}

	get methods(): string[] {
		return deserializeData(this.native.getMethods());
	}

	get events(): string[] {
		return deserializeData(this.native.getEvents());
	}

	get extensions() {
		const items = this.native.getExtensions();
		if (!items) {
			return undefined;
		}
		const ret = [];
		const count = items.size();
		for (let i = 0; i < count; i++) {
			ret.push(ProposalNamespaceExtension.fromNative(items.get(i)));
		}
		return ret;
	}

	toJSON() {
		return {
			chains: this.chains,
			methods: this.methods,
			events: this.events,
			extensions: this.extensions,
		};
	}
}

export class ProposalEvent {
	private _native: com.walletconnect.sign.client.Sign.Model.SessionProposal;

	static fromNative(event) {
		if (event instanceof com.walletconnect.sign.client.Sign.Model.SessionProposal) {
			const ret = new ProposalEvent();
			ret._native = event;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get id() {
		return this.native.getProposerPublicKey();
	}

	get proposer() {
		return AppMeta.fromNativeProposal(this.native);
	}

	get requiredNamespaces() {
		const items = {};
		const requiredNamespaces = this.native.getRequiredNamespaces() as java.util.Map<any, any>;
		const keys = requiredNamespaces.keySet().toArray();
		const count = keys.length;
		for (let i = 0; i < count; i++) {
			const key = keys[i];
			const value = requiredNamespaces.get(key);
			items[key] = ProposalNamespace.fromNative(value);
		}

		return items;
	}

	toJSON() {
		return {
			id: this.id,
			proposer: this.proposer,
			requiredNamespaces: this.requiredNamespaces,
		};
	}
}

export class SessionNamespaceExtension {
	private _native: com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension;

	static fromNative(extension: com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension) {
		if (extension instanceof com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension) {
			const ret = new SessionNamespaceExtension();
			ret._native = extension;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get accounts(): string[] {
		return deserializeData(this.native.getAccounts());
	}

	get methods(): string[] {
		return deserializeData(this.native.getMethods().toArray());
	}

	get events(): string[] {
		return deserializeData(this.native.getEvents().toArray());
	}

	toJSON() {
		return {
			accounts: this.accounts,
			methods: this.methods,
			events: this.events,
		};
	}
}

export class SessionNamespace {
	private _native: com.walletconnect.sign.client.Sign.Model.Namespace.Session;

	static fromNative(ns: com.walletconnect.sign.client.Sign.Model.Namespace.Session) {
		if (ns instanceof com.walletconnect.sign.client.Sign.Model.Namespace.Session) {
			const ret = new SessionNamespace();
			ret._native = ns;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get accounts(): string[] {
		return deserializeData(this.native.getAccounts());
	}

	get methods(): string[] {
		return deserializeData(this.native.getAccounts());
	}

	get events(): string[] {
		return deserializeData(this.native.getAccounts());
	}

	get extensions() {
		const items = this.native.getExtensions();
		if (!items) {
			return undefined;
		}
		const ret = [];
		const count = items.size();
		for (let i = 0; i < count; i++) {
			ret.push(SessionNamespaceExtension.fromNative(items.get(i)));
		}
		return ret;
	}

	toJSON() {
		return {
			accounts: this.accounts,
			methods: this.methods,
			events: this.events,
			extensions: this.extensions,
		};
	}
}

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function deserializeData(data: any): any {
	if (data === null || typeof data !== 'object') {
		return data;
	}
	let store;

	switch (data.getClass().getName()) {
		case 'java.lang.String': {
			return String(data);
		}

		case 'java.lang.Boolean': {
			return String(data) === 'true';
		}

		case 'java.lang.Float':
		case 'java.lang.Integer':
		case 'java.lang.Long':
		case 'java.lang.Double':
		case 'java.lang.Short': {
			return Number(data);
		}

		case 'org.json.JSONArray': {
			store = [];
			for (let j = 0; j < data.length(); j++) {
				store[j] = deserializeData(data.get(j));
			}
			break;
		}
		case 'org.json.JSONObject': {
			store = {};
			let i = data.keys();
			while (i.hasNext()) {
				let key = i.next();
				store[key] = deserializeData(data.get(key));
			}
			break;
		}

		case 'androidx.collection.SimpleArrayMap': {
			const count = data.size();
			for (let l = 0; l < count; l++) {
				const key = data.keyAt(l);
				store[key] = deserializeData(data.get(key));
			}
			break;
		}

		case 'androidx.collection.ArrayMap':
		case 'android.os.Bundle':
		case 'java.util.HashMap':
		case 'java.util.Map': {
			store = {};
			const keys = data.keySet().toArray();
			for (let k = 0; k < keys.length; k++) {
				const key = keys[k];
				store[key] = deserializeData(data.get(key));
			}
			break;
		}
		default:
			if (data instanceof java.util.List) {
				const array = [];
				const size = data.size();
				for (let i = 0, n = size; i < n; i++) {
					array[i] = deserializeData(data.get(i));
				}
				store = array;
			} else {
				store = null;
			}
			break;
	}
	return store;
}

export class SessionEvent {
	private _native: com.walletconnect.sign.client.Sign.Model.SessionEvent;
	private _topic: string;
	private _chainId: string;

	static fromNative(event: com.walletconnect.sign.client.Sign.Model.SessionEvent) {
		if (event instanceof com.walletconnect.sign.client.Sign.Model.SessionEvent) {
			const ret = new SessionEvent();
			ret._native = event;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	id: number;

	get topic(): string {
		return this._topic;
	}

	private _params: {
		event: { name: string; data: any };
		chainId: string;
	};

	get params() {
		if (!this._params) {
			let data = null;
			try {
				data = JSON.parse(this.native.getData());
			} catch (error) {}
			this._params = {
				event: { name: this.native.getName(), data },
				chainId: this._chainId,
			};
		}

		return this._params;
	}

	toJSON() {
		return {
			id: this.id,
			topic: this.topic,
			params: this.params,
		};
	}
}

interface BaseNamespace {
	accounts: string[];
	methods: string[];
	events: string[];
	chains: string[];
}

interface Namespace extends BaseNamespace {
	extension?: Omit<BaseNamespace, 'chains'>[];
}

interface ProposalNamespacesNamespace extends BaseNamespace {
	extension?: Omit<BaseNamespace, 'accounts'>[];
}

type Namespaces = Record<string, Namespace>;

type ProposalNamespaces = Record<string, ProposalNamespacesNamespace>;

export class RequestParams {
	private _native: com.walletconnect.sign.client.Sign.Model.SessionRequest;

	static fromNative(request: com.walletconnect.sign.client.Sign.Model.SessionRequest) {
		if (request instanceof com.walletconnect.sign.client.Sign.Model.SessionRequest) {
			const ret = new RequestParams();
			ret._native = request;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get topic() {
		return this.native.getTopic();
	}

	get chainId() {
		return this.native.getChainId();
	}

	private _request: {
		id: RPCID;
		method: string;
		params: any;
	};

	get request() {
		if (!this._request) {
			const request = this.native.getRequest();
			let params = null;
			try {
				params = JSON.parse(request.getParams());
			} catch (error) {}
			this._request = {
				id: RPCID.fromNative(request.getId()),
				method: request.getMethod(),
				params: params,
			};
		}
		return this._request;
	}

	toJSON() {
		return {
			topic: this.topic,
			chainId: this.chainId,
			request: this.request,
		};
	}
}

export class RPCID {
	private _native;

	static fromNative(id: any) {
		if (id) {
			const ret = new RPCID();
			ret._native = id;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get [Symbol.toStringTag]() {
		return 'RPCID';
	}
}

export class CacaoSignature {
	private _native: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;

	static fromNative(signature: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature) {
		if (signature instanceof com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature) {
			const ret = new CacaoSignature();
			ret._native = signature;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}
}

export class AuthPayload {
	private _native: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

	static fromNative(payload: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams) {
		if (payload instanceof com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams) {
			const ret = new AuthPayload();
			ret._native = payload;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get domain() {
		return this.native.domain;
	}

	get aud() {
		return this.native.aud;
	}

	get exp() {
		return this.native.exp;
	}

	get nbf() {
		return this.native.nbf;
	}

	get type() {
		return this.native.type;
	}

	get chainId() {
		return this.native.chainId;
	}

	get iat() {
		return this.native.iat;
	}

	get nonce() {
		return this.native.nonce;
	}

	get requestId() {
		return this.native.requestId;
	}

	get resources() {
		const resources = this.native.resources;
		if (!resources) {
			return null;
		}
		return deserializeData(resources);
	}

	get version() {
		return this.native.version;
	}

	get statement() {
		return this.native.statement;
	}

	toJSON() {
		return {
			aud: this.aud,
			exp: this.exp,

			nbf: this.nbf,

			type: this.type,

			chainId: this.chainId,

			iat: this.iat,

			nonce: this.nonce,

			requestId: this.requestId,

			resources: this.resources,

			version: this.version,

			statement: this.statement,
		};
	}
}

export class Session {
	_native: com.walletconnect.sign.client.Sign.Model.Session;

	static fromNative(session: com.walletconnect.sign.client.Sign.Model.Session) {
		if (session instanceof com.walletconnect.sign.client.Sign.Model.Session) {
			const ret = new Session();
			ret._native = session;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get expiryDate(): Date {
		return new Date(this.native.getExpiry());
	}

	get namespaces() {
		// todo
		const namespaces: Record<string, SessionNamespace> = {};
		const nativeNamespaces = this.native.getNamespaces();
		const keys = nativeNamespaces.keySet().toArray();
		const count = keys.length;
		for (let i = 0; i < count; i++) {
			const key = keys[i];
			const value = nativeNamespaces.get(key);
			namespaces[key] = SessionNamespace.fromNative(value);
		}

		return namespaces;
	}

	get peer(): AppMeta {
		return AppMeta.fromNative(this.native.getMetaData());
	}

	get topic(): string {
		return this.native.getTopic();
	}

	toJSON() {
		return {
			expiryDate: this.expiryDate,
			namespaces: this.namespaces,
			peer: this.peer,
			topic: this.topic,
		};
	}
}

export class Sign extends Observable {
	constructor() {
		super();
	}

	getSessions(): Session[] {
		const sessions = [];
		const nativeSessions = com.walletconnect.sign.client.SignClient.INSTANCE.getListOfActiveSessions();
		const count = nativeSessions.size();
		for (let i = 0; i < count; i++) {
			sessions.push(Session.fromNative(nativeSessions.get(i)));
		}
		return sessions;
	}

	approve(params: { id: string; namespaces: Namespaces }) {
		return new Promise<void>((resolve, reject) => {
			const map = new java.util.HashMap<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>();

			Object.keys(params.namespaces).forEach((key) => {
				const value = params.namespaces[key];

				let extensions: java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension> = null;

				if (Array.isArray(value.extension)) {
					extensions = new java.util.ArrayList();
					value.extension.forEach((ext) => {
						extensions.add(new com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension(java.util.Arrays.asList(ext.accounts), java.util.Arrays.asList(ext.methods), java.util.Arrays.asList(ext.events)));
					});
				}

				const session = new com.walletconnect.sign.client.Sign.Model.Namespace.Session(java.util.Arrays.asList(value.accounts), java.util.Arrays.asList(value.methods), java.util.Arrays.asList(value.events), extensions);

				map.put(key, session);
			});

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.signApproveSession(
				params.id,
				map,
				new kotlin.jvm.functions.Function1({
					invoke(param0) {
						if (param0) {
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	reject(params: { id: string; reason: 'rejected' | 'rejectedChains' | 'rejectedMethods' | 'rejectedEvents' }) {
		return new Promise<void>((resolve, reject) => {
			let reason;
			switch (params.reason) {
				case 'rejected':
					reason = io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason.userRejected;
					break;
				case 'rejectedChains':
					reason = io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason.userRejectedChains;
					break;
				case 'rejectedEvents':
					reason = io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason.userRejectedEvents;
					break;
				case 'rejectedMethods':
					reason = io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason.userRejectedMethods;
					break;
				default:
					reason = io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason.userRejected;
					break;
			}

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.signRejectSession(
				params.id,
				reason,
				new kotlin.jvm.functions.Function1({
					invoke(param0) {
						if (param0) {
							reject(WalletConnectError.fromNative(param0));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	connect(params: { topic: string; namespaces: ProposalNamespaces }) {
		return new Promise<void>((resolve, reject) => {
			const map = new java.util.HashMap<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>();
			Object.keys(params.namespaces).forEach((key) => {
				const value = params.namespaces[key];

				const extensions: java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension> = new java.util.ArrayList();

				if (Array.isArray(value.extension)) {
					value.extension.forEach((ext) => {
						extensions.add(new com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension(java.util.Arrays.asList(ext.chains), java.util.Arrays.asList(ext.methods), java.util.Arrays.asList(ext.events)));
					});
				}

				const session = new com.walletconnect.sign.client.Sign.Model.Namespace.Proposal(java.util.Arrays.asList(value.chains), java.util.Arrays.asList(value.methods), java.util.Arrays.asList(value.events), extensions);

				map.put(key, session);
			});

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.signConnect(
				map,
				new com.walletconnect.android.Core.Model.Pairing(params.topic, long(0), null, '', null, '', false, ''),
				new kotlin.jvm.functions.Function1({
					invoke(param0) {
						if (param0) {
							reject(WalletConnectError.fromNative(param0));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	request(params: { topic: string; chainId: string; request: { method: string; params: any } }) {
		return new Promise<void>((resolve, reject) => {
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.signSendRequest(
				params.topic,
				params.request.method,
				JSON.stringify(params.request.params),
				params.chainId,
				new kotlin.jvm.functions.Function1({
					invoke(param0) {
						if (param0) {
							reject(WalletConnectError.fromNative(param0));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	respond(params: { topic: string; id: RPCID; response: any }) {
		return new Promise<void>((resolve, reject) => {
			const response = params.response;
			let result;

			if (response && typeof response === 'object' && typeof response.code === 'number' && typeof response.message === 'string') {
				result = new com.walletconnect.sign.client.Sign.Model.JsonRpcResponse.JsonRpcError(params.id.native, response.code, response.message);
			} else {
				result = result = new com.walletconnect.sign.client.Sign.Model.JsonRpcResponse.JsonRpcResult(params.id.native, JSON.stringify(params.response));
			}

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.signRespond(
				params.topic,
				result,
				new kotlin.jvm.functions.Function1({
					invoke(param0) {
						if (param0) {
							reject(WalletConnectError.fromNative(param0));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	_sessionProposalPublisher: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionProposal>;
	_sessionEventPublisher: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionEvent>;
	_sessionRequestPublisher: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionRequest>;
	_pingResponsePublisher;
	_sessionDeletePublisher: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.DeletedSession>;
	_sessionUpdatePublisher: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.UpdatedSession>;
	_sessionUpdatePublisherWallet: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse>;
	_sessionSettlePublisher: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SettledSessionResponse>;

	on(eventNames: string, callback: (data: any) => void, thisArg?: any) {
		super.on(eventNames, callback, thisArg);

		const ref = new WeakRef(this);

		if (!this._sessionSettlePublisher && eventNames === 'session_settle') {
			this._sessionSettlePublisher = new kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SettledSessionResponse>({
				invoke(param0) {
					if (param0 instanceof com.walletconnect.sign.client.Sign.Model.SettledSessionResponse.Result) {
						const owner = ref.get();
						owner?.notify?.({
							eventName: 'session_settle',
							event: Session.fromNative(param0.getSession()),
						});
					}
				},
			});
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.sessionSettlePublisher(this._sessionSettlePublisher);
		}

		if (!this._sessionProposalPublisher && eventNames === 'session_proposal') {
			this._sessionProposalPublisher = new kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionProposal>({
				invoke(param0) {
					const owner = ref.get();
					owner?.notify?.({
						eventName: 'session_proposal',
						event: ProposalEvent.fromNative(param0),
					});
				},
			});

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.sessionProposalPublisher(this._sessionProposalPublisher);
		}

		if (!this._sessionEventPublisher && eventNames === 'session_event') {
			this._sessionUpdatePublisherWallet = new kotlin.jvm.functions.Function1({
				invoke(param0) {
					if (param0 instanceof com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse.Result) {
						const items = {};
						const namespaces = param0.getNamespaces();
						const keys = namespaces.keySet().toArray();
						const count = keys.length;
						for (let i = 0; i < count; i++) {
							const key = keys[i];
							const value = namespaces.get(key);
							items[key] = SessionNamespace.fromNative(value);
						}

						const owner = ref.get();
						owner?.notify?.({
							eventName: 'session_event',
							event: {
								topic: param0.getTopic(),
								namespaces: items,
							},
						});
					}
				},
			});
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.sessionUpdateWallet(this._sessionUpdatePublisherWallet);

			/* emits name and data .... no really usefull
			this._sessionEventPublisher = new kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionEvent>({
				invoke(param0) {
					const owner = ref.get();
						owner?.notify?.({
						eventName: 'session_event',
						event: SessionEvent.fromNative(param0),
					});
				},
			});

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.sessionEventPublisher(this._sessionEventPublisher); 
			*/
		}

		if (!this._sessionRequestPublisher && eventNames === 'session_request') {
			this._sessionRequestPublisher = new kotlin.jvm.functions.Function1({
				invoke(param0) {
					const owner = ref.get();
					owner?.notify?.({
						eventName: 'session_request',
						event: RequestParams.fromNative(param0),
					});
				},
			});

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.sessionRequestPublisher(this._sessionRequestPublisher);
		}

		/*
		if (!this._pingResponsePublisher && eventNames === 'session_ping') {
			//noop
		}
		*/

		if (!this._sessionDeletePublisher && eventNames === 'session_delete') {
			this._sessionDeletePublisher = new kotlin.jvm.functions.Function1({
				invoke(param0) {
					if (param0 instanceof com.walletconnect.sign.client.Sign.Model.DeletedSession.Success) {
						const reason = param0.getReason();
						const owner = ref.get();
						owner?.notify?.({
							eventName: 'session_delete',
							event: {
								topic: param0.getTopic(),
								reason: {
									message: reason,
								},
							},
						});
					}
				},
			});
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.sessionDeletePublisher(this._sessionDeletePublisher);
		}

		if (!this._sessionUpdatePublisher && eventNames === 'session_update') {
			this._sessionUpdatePublisher = new kotlin.jvm.functions.Function1({
				invoke(param0) {
					const items = {};
					const namespaces = param0.getNamespaces();
					const keys = namespaces.keySet().toArray();
					const count = keys.length;
					for (let i = 0; i < count; i++) {
						const key = keys[i];
						const value = namespaces.get(key);
						items[key] = SessionNamespace.fromNative(value);
					}

					const owner = ref.get();
					owner?.notify?.({
						eventName: 'session_update',
						event: {
							topic: param0.getTopic(),
							namespaces: items,
						},
					});
				},
			});

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.sessionUpdateDapp(this._sessionUpdatePublisher);
		}
	}

	off(eventNames: string, callback?: any, thisArg?: any) {
		super.off(eventNames, callback, thisArg);

		if (eventNames === 'session_settle' && !this.hasListeners('session_settle')) {
			this._sessionSettlePublisher = null;
		}

		if (eventNames === 'session_proposal' && !this.hasListeners('session_proposal')) {
			this._sessionProposalPublisher = null;
		}

		if (eventNames === 'session_event' && !this.hasListeners('session_event')) {
			this._sessionEventPublisher = null;
		}

		if (eventNames === 'session_request' && !this.hasListeners('session_request')) {
			this._sessionRequestPublisher = null;
		}

		if (eventNames === 'session_ping' && !this.hasListeners('session_ping')) {
			this._pingResponsePublisher = null;
		}

		if (eventNames === 'session_delete' && !this.hasListeners('session_delete')) {
			this._sessionDeletePublisher = null;
		}

		if (eventNames === 'session_update' && !this.hasListeners('session_update')) {
			this._sessionUpdatePublisher = null;
		}
	}
}

export class Auth extends Observable {
	_authRequestPublisher: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.AuthRequest>;
	_authResponsePublisher: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.AuthResponse>;

	constructor() {
		super();
	}

	getPendingRequests(params: { account: string }) {
		let ret = [];

		try {
			const requests = com.walletconnect.auth.client.AuthClient.INSTANCE.getPendingRequest();
			const count = requests.size();
			for (let i = 0; i < count; i++) {
				const request: com.walletconnect.auth.client.Auth.Model.PendingRequest = requests.get(i);
				ret.push({
					id: RPCID.fromNative(request.getId()),
					payload: AuthPayload.fromNative(request.getPayloadParams()),
				});
			}
		} catch (e) {}

		return ret;
	}

	formatMessage(params: { payload: AuthPayload; address: string }) {
		try {
			com.walletconnect.auth.client.AuthClient.INSTANCE.formatMessage(new com.walletconnect.auth.client.Auth.Params.FormatMessage.FormatMessage(params.payload.native, params.address));
		} catch (e) {
			return null;
		}
	}

	reject(params: { id: RPCID }) {
		return new Promise<void>((resolve, reject) => {
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.authReject(
				params.id.native,
				new kotlin.jvm.functions.Function1({
					invoke(param0) {
						if (param0) {
							reject(WalletConnectError.fromNative(param0));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	request(params: {
		topic: string;
		params: {
			domain: string;
			chainId: string;
			nonce: string;
			aud: string;
			nbf?: string;
			exp?: string;
			statement?: string;
			requestId?: string;
			resources?: string[];
		};
	}) {
		return new Promise<void>((resolve, reject) => {
			const request = new com.walletconnect.auth.client.Auth.Params.Request(params.topic, params.params.chainId, params.params.domain, params.params.nonce, params.params.aud, params.params['type'] ?? null, params.params.nbf ?? null, params.params.exp ?? null, params.params.statement ?? null, params.params.requestId ?? null, params.params.resources ? java.util.Arrays.asList(params.params.resources) : null);

			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.authRequest(
				request,
				new kotlin.jvm.functions.Function1({
					invoke(param0) {
						if (param0) {
							reject(WalletConnectError.fromNative(param0));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	respond(params: { id: RPCID; signature: CacaoSignature; account: string }) {
		return new Promise<void>((resolve, reject) => {
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.authRespond(
				params.id.native,
				params.signature.native,
				params.account,
				new kotlin.jvm.functions.Function1({
					invoke(param0) {
						if (param0) {
							reject(WalletConnectError.fromNative(param0));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	on(eventNames: string, callback: (data: any) => void, thisArg?: any) {
		super.on(eventNames, callback, thisArg);

		const ref = new WeakRef(this);

		if (!this._authRequestPublisher && eventNames === 'auth_request') {
			this._authRequestPublisher = new kotlin.jvm.functions.Function1({
				invoke(param0) {
					const owner = ref.get();
					owner?.notify?.({
						eventName: 'auth_request',
						event: {
							id: RPCID.fromNative(param0.getId()),
							payload: AuthPayload.fromNative(param0.getPayloadParams()),
						},
					});
				},
			});
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.authRequestPublisher(this._authRequestPublisher);
		}

		if (!this._authResponsePublisher && eventNames === 'auth_response') {
			this._authResponsePublisher = new kotlin.jvm.functions.Function1({
				invoke(param0) {
					const response = param0.getResponse();
					const event: {
						id: RPCID;
						result?: {
							header: { t: string };
							payload: {
								iss: string;
								domain: string;
								aud: string;
								version: string;
								nonce: string;
								iat: string;
								nbf?: string;
								exp?: string;
								statement?: string;
								requestId?: string;
								resources?: string[];
							};
							signature: { t: string; s: string; m?: string };
						};
						error?: { message: string; code: number };
					} = { id: RPCID.fromNative(response.getId()) };
					if (response instanceof com.walletconnect.auth.client.Auth.Model.Response.Error) {
						event.error = {
							message: response.getMessage(),
							code: response.getCode(),
						};
					}

					if (response instanceof com.walletconnect.auth.client.Auth.Model.Response.Result) {
						const cacao = response.getCacao();
						const signature = cacao.getSignature();
						const payload = cacao.getPayload();
						event.result = {
							header: { t: cacao.getHeader().getT() },
							signature: {
								t: signature.getT(),
								s: signature.getS(),
								m: signature.getM(),
							},
							payload: {
								iss: payload.getIss(),
								domain: payload.getDomain(),
								aud: payload.getAud(),
								version: payload.getVersion(),
								nonce: payload.getNonce(),
								iat: payload.getIat(),
								nbf: payload.getNbf?.() ?? undefined,
								exp: payload.getExp?.() ?? undefined,
								statement: payload.getStatement?.() ?? undefined,
								requestId: payload.getRequestId?.() ?? undefined,
								resources: deserializeData(payload?.getResources?.()) ?? undefined,
							},
						};
					}

					const owner = ref.get();
					owner?.notify?.({
						eventName: 'auth_response',
						event,
					});
				},
			});
		}
	}

	off(eventNames: string, callback?: any, thisArg?: any) {
		super.off(eventNames, callback, thisArg);
		if (eventNames === 'auth_request' && !this.hasListeners('auth_request')) {
			this._authRequestPublisher = null;
		}

		if (eventNames === 'auth_response' && !this.hasListeners('auth_response')) {
			this._authResponsePublisher = null;
		}
	}
}

export class Pairing {
	private _native: com.walletconnect.android.Core.Model.Pairing;

	static fromNative(pairing: com.walletconnect.android.Core.Model.Pairing) {
		if (pairing instanceof com.walletconnect.android.Core.Model.Pairing) {
			const ret = new Pairing();
			ret._native = pairing;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get expiryDate(): Date {
		return new Date(this.native.getExpiry());
	}

	get peer(): AppMeta {
		return AppMeta.fromNative(this.native.getPeerAppMetaData());
	}

	get topic(): string {
		return this.native.getTopic();
	}
}

export class Pair {
	create() {
		return new Promise((resolve, reject) => {
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.pairCreate(
				new kotlin.jvm.functions.Function2<com.walletconnect.android.Core.Model.Pairing, java.lang.Throwable>({
					invoke(uri, error) {
						if (error) {
							reject(WalletConnectError.fromNative(error));
						} else {
							resolve(WalletConnectURI.fromNative(uri));
						}
					},
				})
			);
		});
	}

	pair(params: { uri: string }) {
		return new Promise<void>((resolve, reject) => {
			io.nstudio.plugins.walletconnect.NSCWalletConnectV2.pairPair(
				params.uri,
				new kotlin.jvm.functions.Function1<java.lang.Throwable>({
					invoke(error) {
						if (error) {
							reject(WalletConnectError.fromNative(error));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	disconnect(params: { topic: string }) {
		return new Promise<void>((resolve, reject) => {
			return new Promise<void>((resolve, reject) => {
				io.nstudio.plugins.walletconnect.NSCWalletConnectV2.pairDisconnect(
					params.topic,
					new kotlin.jvm.functions.Function1<java.lang.Throwable>({
						invoke(error) {
							if (error) {
								reject(WalletConnectError.fromNative(error));
							} else {
								resolve();
							}
						},
					})
				);
			});
		});
	}

	getPairings() {
		const pairings = [];
		const items = io.nstudio.plugins.walletconnect.NSCWalletConnectV2.pairGetPairings();
		const size = items.size();
		for (let i = 0; i < size; i++) {
			pairings.push(Pairing.fromNative(items.get(i)));
		}
		return pairings;
	}
}

type CacaoSignatureType = 'eip191' | 'eip1271';

export class Wallet {
	signMessage(params: { payload: AuthPayload; address: string; privateKey: string; type: CacaoSignatureType }) {
		let nativeType = null;
		switch (params.type) {
			case 'eip191':
				nativeType = com.walletconnect.web3.wallet.utils.SignatureType.EIP191;
				break;
			case 'eip1271':
				nativeType = com.walletconnect.web3.wallet.utils.SignatureType.EIP191;
				break;
		}
		try {
			return com.walletconnect.auth.signature.cacao.CacaoSigner.INSTANCE.sign(JSON.stringify(params.payload.toJSON()), new (java as any).lang.String(params.address).hexToBytes(), nativeType);
		} catch (e) {
			return null;
		}
	}
}

const client = new Client();
const pair = new Pair();
const auth = new Auth();
const sign = new Sign();
const _wallet = new Wallet();
