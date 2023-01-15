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

let client = new Client();

export class WalletConnectURI extends NSObject {

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
    return Utils.ios.collections.nsArrayToJSArray(this.native.methods)
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
    return Utils.ios.collections.nsArrayToJSArray(this.native.methods)
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

export class Sign extends Observable {
  _sessionProposalPublisher: NSCWalletConnectV2AnyCancellable;


  constructor() {
    super();
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
  }

  off(eventNames: string, callback?: any, thisArg?: any) {
    super.off(eventNames, callback, thisArg);
    if (eventNames === 'session_proposal' && !this.hasListeners('session_proposal')) {
      this._sessionProposalPublisher.cancel();
      this._sessionProposalPublisher = null;
    }
  }
}

export class Auth extends Observable {
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

const pair = new Pair();
const auth = new Auth();
const sign = new Sign();
