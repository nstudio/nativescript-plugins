import {fromObject, Utils} from '@nativescript/core';
//import {IClientMeta, IWalletConnect, IWalletConnectSession, WalletConnectConfig, WalletEvent} from '.';

// export function toHex(value: string): string {
// 	return NSCWallectConnect.toHex(value);
// }


export class ClientMeta {
  private _meta: NSCWalletConnectV2AppMetadata;

  static fromNative(meta: NSCWalletConnectV2AppMetadata) {
    if (meta instanceof NSCWalletConnectV2AppMetadata) {
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
}

let pair = new Pair();
