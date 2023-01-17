import {fromObject, Observable, Utils} from '@nativescript/core';

export class AppMeta {
  private _meta: NSCWalletConnectV2AppMetadata;

  static fromNative(meta: NSCWalletConnectV2AppMetadata) {
    if (meta instanceof NSCWalletConnectV2AppMetadata) {
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

  get redirect(): string {
    return this.native.redirectNativeLink
  }

  get redirectUniversal(): string {
    return this.native.redirectUniversalLink;
  }

  toJSON() {
    return {
      description: this.description,
      url: this.url,
      icons: this.icons,
      name: this.name,
      redirect: this.redirect,
      redirectUniversal: this.redirectUniversal
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

export class Client {

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
    return wallet;
  }

  static initialize(projectId: string,
                    relayUrl: string,
                    meta: {
                      description: string;
                      url: string;
                      icons: string[];
                      name: string;
                      redirect?: string;
                      redirectUniversal?: string;
                    },
                    connectionType: 'auto' | 'manual' = 'auto') {
    NSCWalletConnectV2.initializeWithProjectIdRelayUrlMetaSocketConnectionType(
      projectId,
      relayUrl ?? 'relay.walletconnect.com',
      NSCWalletConnectV2AppMetadata.alloc()
        .initWithDescriptionUrlIconsNameRedirectRedirectUniversal(
          meta.description, meta.url, meta.icons, meta.name, meta.redirect ?? null, meta.redirectUniversal ?? null
        ),
      connectionType === 'manual' ? NSCWalletConnectV2ConnectionType.Manual : NSCWalletConnectV2ConnectionType.Auto
    )
  }
}

export class WalletConnectURI {

  private _native: NSCWalletConnectV2WalletConnectURI;

  static fromNative(uri: NSCWalletConnectV2WalletConnectURI) {
    if (uri instanceof NSCWalletConnectV2WalletConnectURI) {
      const ret = new WalletConnectURI();
      ret._native = uri;
      return ret;
    }
    return null;
  }

  get native() {
    return this._native;
  }

  get relay() {
    const relay = this.native.relay;
    return {
      protocol: relay.protocol,
      data: relay.data
    }
  }

  get symKey(): string {
    return this.native.symKey;
  }

  get topic(): string {
    return this.native.topic;
  }

  get version(): string {
    return this.native.version;
  }
}

export class ProposalNamespaceExtension {
  private _native: NSCWalletConnectV2ProposalNamespaceExtension;

  static fromNative(extension: NSCWalletConnectV2ProposalNamespaceExtension) {
    if (extension instanceof NSCWalletConnectV2ProposalNamespaceExtension) {
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
    return Utils.ios.collections.nsArrayToJSArray(this.native.chains)
  }

  get methods(): string[] {
    return Utils.ios.collections.nsArrayToJSArray(this.native.methods)
  }

  get events(): string[] {
    return Utils.ios.collections.nsArrayToJSArray(this.native.events)
  }

  toJSON() {
    return {
      chains: this.chains,
      methods: this.methods,
      events: this.events
    }
  }
}

export class ProposalNamespace {
  private _native: NSCWalletConnectV2ProposalNamespace;

  static fromNative(ns: NSCWalletConnectV2ProposalNamespace) {
    if (ns instanceof NSCWalletConnectV2ProposalNamespace) {
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
    return Utils.ios.collections.nsArrayToJSArray(this.native.chains)
  }

  get methods(): string[] {
    return Utils.ios.collections.nsArrayToJSArray(this.native.methods)
  }

  get events(): string[] {
    return Utils.ios.collections.nsArrayToJSArray(this.native.events)
  }

  get extensions() {
    const ret = [];
    const items = this.native.extensions;
    if (!items) {
      return ret;
    }
    const count = items.count;
    for (let i = 0; i < count; i++) {
      ret.push(
        ProposalNamespaceExtension.fromNative(
          items.objectAtIndex(i)
        )
      );
    }
    return ret;
  }

  toJSON() {
    return {
      chains: this.chains,
      methods: this.methods,
      events: this.events,
      extensions: this.extensions
    }
  }
}

export class ProposalEvent {
  private _native: NSCWalletConnectV2SessionProposal;

  static fromNative(event: NSCWalletConnectV2SessionProposal) {
    if (event instanceof NSCWalletConnectV2SessionProposal) {
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
    return this.native.id;
  }

  get expiry() {
    return 0;
  }

  get proposer() {
    return AppMeta.fromNative(this.native.proposer)
  }

  get requiredNamespaces() {
    const items = {};
    const requiredNamespaces = this.native.requiredNamespaces;
    const keys = requiredNamespaces.allKeys;
    const count = keys.count;
    for (let i = 0; i < count; i++) {
      const key = keys.objectAtIndex(i);
      const value = requiredNamespaces.objectForKey(key);
      items[key] = ProposalNamespace.fromNative(value);
    }

    return items;
  }

  toJSON() {
    return {
      id: this.id,
      expiry: this.expiry,
      proposer: this.proposer,
      requiredNamespaces: this.requiredNamespaces
    }
  }

}

export class SessionNamespaceExtension {
  private _native: NSCWalletConnectV2SessionNamespaceExtension;

  static fromNative(extension: NSCWalletConnectV2SessionNamespaceExtension) {
    if (extension instanceof NSCWalletConnectV2SessionNamespaceExtension) {
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
    return Utils.ios.collections.nsArrayToJSArray(this.native.accounts.allObjects)
  }

  get methods(): string[] {
    return Utils.ios.collections.nsArrayToJSArray(this.native.methods.allObjects)
  }

  get events(): string[] {
    return Utils.ios.collections.nsArrayToJSArray(this.native.events.allObjects)
  }

  toJSON() {
    return {
      methods: this.methods,
      events: this.events
    }
  }
}

export class SessionNamespace {
  private _native: NSCWalletConnectV2SessionNamespace;

  static fromNative(ns: NSCWalletConnectV2SessionNamespace) {
    if (ns instanceof NSCWalletConnectV2SessionNamespace) {
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
    return Utils.ios.collections.nsArrayToJSArray(this.native.accounts.allObjects)
  }

  get methods(): string[] {
    return Utils.ios.collections.nsArrayToJSArray(this.native.methods.allObjects)
  }

  get events(): string[] {
    return Utils.ios.collections.nsArrayToJSArray(this.native.events.allObjects)
  }

  get extensions() {
    const ret = [];
    const items = this.native.extensions;
    if (!items) {
      return ret;
    }
    const count = items.count;
    for (let i = 0; i < count; i++) {
      ret.push(
        SessionNamespaceExtension.fromNative(
          items.objectAtIndex(i)
        )
      );
    }
    return ret;
  }

  toJSON() {
    return {
      accounts: this.accounts,
      methods: this.methods,
      events: this.events,
      extensions: this.extensions
    }
  }
}

function numberHasDecimals(item: number) {
  return !(item % 1 === 0);
}

function deserialize(data: NSCWalletConnectV2Codable): any {
  const type = data.type;
  switch (type) {
    case NSCWalletConnectV2CodableValueType.Array: {
      const array = data.arrayValue;
      const items = [];
      const count = array.count;
      for (let i = 0; i < count; i++) {
        items.push(deserialize(array.objectAtIndex(i)));
      }
      return items;
    }
    case NSCWalletConnectV2CodableValueType.Int:
      return data.intValue;
    case NSCWalletConnectV2CodableValueType.Bool:
      return data.boolValue;
    case NSCWalletConnectV2CodableValueType.Null:
      return null;
    case NSCWalletConnectV2CodableValueType.Object: {
      const objects = data.objectValue;
      const keys = objects.allKeys;
      const count = keys.count;
      const items = {};
      for (let i = 0; i < count; i++) {
        const key = keys.objectAtIndex(i);
        const value = objects.objectForKey(key);
        items[deserialize(key)] = deserialize(value);
      }
      return items;
    }
    case NSCWalletConnectV2CodableValueType.String:
      return data.stringValue;
    case NSCWalletConnectV2CodableValueType.Float:
      return data.floatValue;
  }
}

function serialize(data: any): NSCWalletConnectV2Codable {
  switch (typeof data) {
    case "number":
      if (numberHasDecimals(data)) {
        return NSCWalletConnectV2Codable.alloc().initWithFloat(data);
      }
      return NSCWalletConnectV2Codable.alloc().initWithInt(data);
    case "boolean":
      return NSCWalletConnectV2Codable.alloc().initWithBool(data);
    case "string":
      return NSCWalletConnectV2Codable.alloc().initWithString(data);
    case "object": {

      if (data === null) {
        return NSCWalletConnectV2Codable.Null;
      }

      if (Array.isArray(data)) {
        const array = NSMutableArray.new<NSCWalletConnectV2Codable>();
        data.forEach(item => {
          array.addObject(
            serialize(item)
          )
        });
        return NSCWalletConnectV2Codable.alloc().initWithArray(array);
      }

      const dictionary = NSMutableDictionary.new<NSCWalletConnectV2Codable, NSCWalletConnectV2Codable>()
      Object.keys(data).forEach(key => {
        const value = data[key];
        dictionary.setObjectForKey(serialize(value), serialize(key));
      });

      return NSCWalletConnectV2Codable.alloc().initWithObject(dictionary);
    }
    default:
      return NSCWalletConnectV2Codable.Null;
  }
}

export class SessionEvent {
  private _native: NSCWalletConnectV2SessionEvent;
  private _topic: string;
  private _chainId: string;

  static fromNative(topic: string, chainId: string, event: NSCWalletConnectV2SessionEvent) {
    if (event instanceof NSCWalletConnectV2SessionEvent) {
      const ret = new SessionEvent();
      ret._native = event;
      ret._topic = topic;
      ret._chainId = chainId;
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
      this._params = {
        event: {name: this.native.name, data: deserialize(this.native.data)},
        chainId: this._chainId
      };
    }

    return this._params;
  }

  toJSON() {
    return {
      id: this.id,
      topic: this.topic,
      params: this.params
    }
  }
}

interface BaseNamespace {
  accounts: string[];
  methods: string[];
  events: string[];
  chains: string[];
}

interface Namespace extends BaseNamespace {
  extension?: Omit<BaseNamespace, "chains">[];
}

interface ProposalNamespacesNamespace extends BaseNamespace {
  extension?: Omit<BaseNamespace, "accounts">[];
}

type Namespaces = Record<string, Namespace>;

type ProposalNamespaces = Record<string, ProposalNamespacesNamespace>;

export class RequestParams {
  private _native: NSCWalletConnectV2Request

  static fromNative(request: NSCWalletConnectV2Request) {
    if (request instanceof NSCWalletConnectV2Request) {
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
    return this.native.topic;
  }

  get chainId() {
    return this.native.chainId;
  }

  private _request: {
    method: string;
    params: any;
  };

  get request() {
    if (!this._request) {
      this._request = {
        method: this.native.method,
        params: deserialize(this.native.params)
      }
    }
    return this._request;
  }

}

export class RPCID {
  private _native: NSCWalletConnectV2RPCID

  static fromNative(id: NSCWalletConnectV2RPCID) {
    if (id instanceof NSCWalletConnectV2RPCID) {
      const ret = new RPCID();
      ret._native = id;
      return ret;
    }
    return null;
  }

  get native() {
    return this._native;
  }
}

export class CacaoSignature {
  private _native: NSCWalletConnectV2CacaoSignature

  static fromNative(signature: NSCWalletConnectV2CacaoSignature) {
    if (signature instanceof NSCWalletConnectV2CacaoSignature) {
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
  private _native: NSCWalletConnectV2AuthPayload

  static fromNative(payload: NSCWalletConnectV2AuthPayload) {
    if (payload instanceof NSCWalletConnectV2AuthPayload) {
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
      return null
    }
    return Utils.ios.collections.nsArrayToJSArray(resources);
  }

  get version() {
    return this.native.version;
  }

  get statement() {
    return this.native.statement;
  }

}

export class Sign extends Observable {
  _sessionProposalPublisher: NSCWalletConnectV2AnyCancellable;
  _sessionEventPublisher: NSCWalletConnectV2AnyCancellable;
  _sessionRequestPublisher: NSCWalletConnectV2AnyCancellable;
  _pingResponsePublisher: NSCWalletConnectV2AnyCancellable;
  _sessionDeletePublisher: NSCWalletConnectV2AnyCancellable;
  _sessionUpdatePublisher: NSCWalletConnectV2AnyCancellable;

  constructor() {
    super();
  }

  approve(params: { id: string, namespaces: Namespaces }) {
    return new Promise<void>((resolve, reject) => {
      const dictionary = NSMutableDictionary.new<string, NSCWalletConnectV2SessionNamespace>();
      Object.keys(params.namespaces)
        .forEach(key => {
          const value = params.namespaces[key];
          const accounts = NSMutableSet.setWithArray(value.accounts);
          const events = NSMutableSet.setWithArray(value.events);
          const methods = NSMutableSet.setWithArray(value.methods);
          let extensions: NSMutableArray<NSCWalletConnectV2SessionNamespaceExtension> = null;

          if (Array.isArray(value.extension)) {
            extensions = NSMutableArray.new<NSCWalletConnectV2SessionNamespaceExtension>();
            value.extension.forEach(ext => {
              const accounts = NSMutableSet.setWithArray(ext.accounts);
              const events = NSMutableSet.setWithArray(ext.events);
              const methods = NSMutableSet.setWithArray(ext.methods);
              const extension = NSCWalletConnectV2SessionNamespaceExtension.alloc().initWithAccountsEventsMethods(
                accounts, events, methods
              );
              extensions.addObject(extension);
            })
          }

          const sn = NSCWalletConnectV2SessionNamespace
            .alloc()
            .initWithAccountsEventsMethodsExtensions(accounts, events, methods, extensions);

          dictionary.setObjectForKey(sn, key)

        });

      NSCWalletConnectV2.signApproveSession(params.id, dictionary, (error) => {
        reject(WalletConnectError.fromNative(error))
      });
      resolve();
    })
  }

  reject(params: { id: string, reason: 'rejected' | 'rejectedChains' | 'rejectedMethods' | 'rejectedEvents' }) {
    return new Promise<void>((resolve, reject) => {
      let reason;
      switch (params.reason) {
        case "rejected":
          reason = NSCWalletConnectV2RejectionReason.UserRejected;
          break;
        case "rejectedChains":
          reason = NSCWalletConnectV2RejectionReason.UserRejectedChains;
          break;
        case "rejectedEvents":
          reason = NSCWalletConnectV2RejectionReason.UserRejectedEvents;
          break;
        case "rejectedMethods":
          reason = NSCWalletConnectV2RejectionReason.UserRejectedMethods;
          break;
        default:
          reason = NSCWalletConnectV2RejectionReason.UserRejected;
          break;
      }
      NSCWalletConnectV2.signRejectSession(params.id, reason, (error) => {
        reject(WalletConnectError.fromNative(error));
      });
      resolve();
    })
  }

  connect(params: { topic: string, namespaces: ProposalNamespaces }) {
    return new Promise<void>((resolve, reject) => {
      const namespaces = NSMutableDictionary.new<string, NSCWalletConnectV2ProposalNamespace>()
      Object.keys(params.namespaces)
        .forEach(key => {
          const value = params.namespaces[key];
          let extension: NSMutableArray<NSCWalletConnectV2ProposalNamespaceExtension> = null;

          if (Array.isArray(value.extension)) {
            extension = NSMutableArray.new<NSCWalletConnectV2ProposalNamespaceExtension>();
            value.extension.forEach(item => {
              const methods = NSMutableSet.setWithArray(item.methods);
              const events = NSMutableSet.setWithArray(item.events);
              const chains = NSMutableSet.setWithArray(item.chains);
              extension.addObject(
                NSCWalletConnectV2ProposalNamespaceExtension
                  .alloc()
                  .initWithEventsMethodsChains(events, methods, chains)
              );
            })
          }


          const methods = NSMutableSet.setWithArray(value.methods);
          const events = NSMutableSet.setWithArray(value.events);
          const chains = NSMutableSet.setWithArray(value.chains);


          namespaces.setObjectForKey(
            NSCWalletConnectV2ProposalNamespace
              .alloc()
              .initWithEventsMethodsChainsExtensions(events, methods, chains, extension),
            key
          )

        })

      NSCWalletConnectV2.signConnect(namespaces, params.topic, (error) => {
        reject(WalletConnectError.fromNative(error))
      })
      resolve()
    })
  }

  request(params: { topic: string, chainId: string, request: { method: string, params: any } }) {
    return new Promise<void>((resolve, reject) => {
      NSCWalletConnectV2.signRequestParamsChainId(params.topic, params.request.method, serialize(params.request.params), params.chainId, (error) => {
        reject(WalletConnectError.fromNative(error))
      })
      resolve()
    })
  }

  on(eventNames: string, callback: (data: any) => void, thisArg?: any) {
    super.on(eventNames, callback, thisArg);
    if (!this._sessionProposalPublisher && eventNames === 'session_proposal') {
      this._sessionProposalPublisher = NSCWalletConnectV2.sessionProposalPublisher((arg) => {
        this.notify({
          eventName: 'session_proposal',
          event: ProposalEvent.fromNative(arg)
        });
      });
    }

    if (!this._sessionEventPublisher && eventNames === 'session_event') {
      this._sessionEventPublisher = NSCWalletConnectV2.sessionEventPublisher((event, topic, chainId) => {
        this.notify({
          eventName: 'session_event',
          event: SessionEvent.fromNative(topic, chainId, event)
        });
      });
    }

    if (!this._sessionRequestPublisher && eventNames === 'session_request') {
      this._sessionRequestPublisher = NSCWalletConnectV2.sessionRequestPublisher((request) => {
        this.notify({
          eventName: 'session_request',
          event: RequestParams.fromNative(request)
        });
      });
    }

    if (!this._pingResponsePublisher && eventNames === 'session_ping') {
      this._pingResponsePublisher = NSCWalletConnectV2.pingResponsePublisher((topic) => {
        this.notify({
          eventName: 'session_ping',
          event: {topic}
        });
      });
    }

    if (!this._sessionDeletePublisher && eventNames === 'session_delete') {
      this._sessionDeletePublisher = NSCWalletConnectV2.sessionDeletePublisher((topic, reason) => {
        this.notify({
          eventName: 'session_delete',
          event: {topic, reason: {code: reason.code, message: reason.message}}
        });
      });
    }

    if (!this._sessionUpdatePublisher && eventNames === 'session_update') {
      this._sessionUpdatePublisher = NSCWalletConnectV2.sessionUpdatePublisher((topic, namespaces) => {

        const items = {};
        const keys = namespaces.allKeys;
        const count = keys.count;
        for (let i = 0; i < count; i++) {
          const key = keys.objectAtIndex(i);
          const value = namespaces.objectForKey(key);
          items[key] = SessionNamespace.fromNative(value);
        }

        this.notify({
          eventName: 'session_update',
          event: {
            topic: topic,
            namespaces: items
          }
        });
      });
    }

  }

  off(eventNames: string, callback?: any, thisArg?: any) {
    super.off(eventNames, callback, thisArg);
    if (eventNames === 'session_proposal' && !this.hasListeners('session_proposal')) {
      this._sessionProposalPublisher.cancel();
      this._sessionProposalPublisher = null;
    }

    if (eventNames === 'session_event' && !this.hasListeners('session_event')) {
      this._sessionEventPublisher.cancel();
      this._sessionEventPublisher = null;
    }

    if (eventNames === 'session_request' && !this.hasListeners('session_request')) {
      this._sessionRequestPublisher.cancel();
      this._sessionRequestPublisher = null;
    }

    if (eventNames === 'session_ping' && !this.hasListeners('session_ping')) {
      this._pingResponsePublisher.cancel();
      this._pingResponsePublisher = null;
    }

    if (eventNames === 'session_delete' && !this.hasListeners('session_delete')) {
      this._sessionDeletePublisher.cancel();
      this._sessionDeletePublisher = null;
    }

    if (eventNames === 'session_update' && !this.hasListeners('session_update')) {
      this._sessionUpdatePublisher.cancel();
      this._sessionUpdatePublisher = null;
    }
  }
}

export class Auth extends Observable {
  _authRequestPublisher: NSCWalletConnectV2AnyCancellable;
  _authResponsePublisher: NSCWalletConnectV2AnyCancellable;

  constructor() {
    super();
  }


  getPendingRequests(params: { account: string }) {
    let ret = [];

    try {
      const requests = NSCWalletConnectV2.getPendingRequestsError(params.account);
      const count = requests.count;
      for (let i = 0; i < count; i++) {
        const request = requests.objectAtIndex(i);
        ret.push({
          id: RPCID.fromNative(request.id),
          payload: AuthPayload.fromNative(request.payload)
        })
      }
    } catch (e) {
    }

    return ret;
  }

  formatMessage(params: { payload: AuthPayload, address: string }) {
    try {
      return NSCWalletConnectV2.authFormatMessageError(
        params.payload.native, params.address
      )
    } catch (e) {
      return null
    }
  }

  reject(params: { id: RPCID }) {
    return new Promise<void>((resolve, reject) => {
      NSCWalletConnectV2.authReject(params.id.native, (error) => {
        reject(WalletConnectError.fromNative(error));
      });
      resolve();
    })
  }

  request(params: {
    topic: string, params: {
      domain: string;
      chainId: string;
      nonce: string;
      aud: string;
      nbf?: string;
      exp?: string;
      statement?: string;
      requestId?: string;
      resources?: string[]
    }
  }) {
    return new Promise<void>((resolve, reject) => {
      const request = NSCWalletConnectV2RequestParams
        .alloc()
        .init(
          params.params.domain,
          params.params.chainId,
          params.params.nonce,
          params.params.aud,
          params.params.nbf || null,
          params.params.exp || null,
          params.params.statement || null,
          params.params.requestId || null,
          params.params.resources || null,
        );
      NSCWalletConnectV2.authRequestParams(params.topic, request, (error) => {
        reject(WalletConnectError.fromNative(error))
      });
      resolve()
    })
  }

  respond(params: {
    id: RPCID,
    signature: CacaoSignature,
    account: string
  }) {
    return new Promise<void>((resolve, reject) => {
      NSCWalletConnectV2.authRespondSignature(params.id.native, params.signature.native, params.account, (error) => {
        reject(WalletConnectError.fromNative(error))
      });
      resolve()
    })
  }


  on(eventNames: string, callback: (data: any) => void, thisArg?: any) {
    super.on(eventNames, callback, thisArg);

    if (!this._authRequestPublisher && eventNames === 'auth_request') {
      this._authRequestPublisher = NSCWalletConnectV2.authRequestPublisher((request) => {
        this.notify({
          eventName: 'auth_request',
          event: {
            id: RPCID.fromNative(request.id),
            payload: AuthPayload.fromNative(request.payload)
          }
        });
      });
    }


    if (!this._authResponsePublisher && eventNames === 'auth_response') {
      this._authResponsePublisher = NSCWalletConnectV2.authResponsePublisher((id, cacao, error) => {

        const event = {id: RPCID.fromNative(id)}

        if (error) {
          event['error'] = {
            message: error.message,
            code: error.code
          }
        }

        if (cacao) {
          event['result'] = JSON.parse(cacao.jsonAndReturnError())
        }

        this.notify({
          eventName: 'auth_response',
          event
        });
      });
    }

  }

  off(eventNames: string, callback?: any, thisArg?: any) {
    super.off(eventNames, callback, thisArg);
    if (eventNames === 'auth_request' && !this.hasListeners('auth_request')) {
      this._authRequestPublisher.cancel();
      this._authRequestPublisher = null;
    }

    if (eventNames === 'auth_response' && !this.hasListeners('auth_response')) {
      this._authResponsePublisher.cancel();
      this._authResponsePublisher = null;
    }
  }

}

export class Pairing {
  private _native: NSCWalletConnectV2Pairing;

  static fromNative(pairing: NSCWalletConnectV2Pairing) {
    if (pairing instanceof NSCWalletConnectV2Pairing) {
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
    return this.native.expiryDate;
  }

  get peer(): AppMeta {
    return AppMeta.fromNative(this.native.peer);
  }

  get topic(): string {
    return this.native.topic;
  }
}

export class Pair {

  create() {
    return new Promise((resolve, reject) => {
      NSCWalletConnectV2.pairCreate((uri, error) => {
        if (error) {
          reject(WalletConnectError.fromNative(error))
        } else {
          resolve(WalletConnectURI.fromNative(uri))
        }
      })
    });
  }

  pair(params: { uri: string }) {
    return new Promise<void>((resolve, reject) => {
      NSCWalletConnectV2.pairPairWithUri(params.uri, (error) => {
        reject(WalletConnectError.fromNative(error))
      });
      resolve()
    });
  }

  disconnect(params: { topic: string }) {
    return new Promise<void>((resolve, reject) => {
      NSCWalletConnectV2.pairDisconnect(params.topic, (error) => {
        reject(WalletConnectError.fromNative(error))
      });
      resolve()
    });
  }

  getPairings() {
    const pairings = [];
    const items = NSCWalletConnectV2.pairGetPairings();
    const size = items.count;
    for (let i = 0; i < size; i++) {
      pairings.push(Pairing.fromNative(items.objectAtIndex(i)));
    }
    return pairings;
  }
}

type CacaoSignatureType = 'eip191' | 'eip1271';

export class Wallet {
  signMessage(params: { payload: AuthPayload, address: string, privateKey: string, type: CacaoSignatureType }) {
    let nativeType = -1;
    switch (params.type) {
      case "eip191":
        nativeType = 0;
        break;
      case "eip1271":
        nativeType = 1;
        break;
    }
    try {
      return CacaoSignature.fromNative(NSCWalletConnectV2.signerSignError(params.payload.native, params.address, params.privateKey, nativeType))
    } catch (e) {
      return null;
    }
  }
}

const client = new Client();
const pair = new Pair();
const auth = new Auth();
const sign = new Sign();
const wallet = new Wallet();
