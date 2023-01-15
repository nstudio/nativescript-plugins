//declare const com, okhttp3, io, kotlin;
import {fromObject, Utils} from '@nativescript/core';
// import {IWalletConnect, IWalletConnectSession, WalletConnectConfig, WalletEvent} from '.';

// export function toHex(value: string): string {
//   return `0x${io.nstudio.plugins.walletconnect.Utils.toHex(value)}`;
// }
//

export class AppMeta {
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
  static initialize(projectId: string,
                    relayUrl: string,
                    meta: {
                      description: string;
                      url: string;
                      icons: string[];
                      name: string;
                      redirect?: string;
                    },
                    connectionType: 'auto' | 'manual' = 'auto') {
    io.nstudio.plugins.walletconnect.NSCWalletConnectV2.initialize(
      projectId, relayUrl ?? 'relay.walletconnect.com',
      new com.walletconnect.android.Core.Model.AppMetaData(meta.name, meta.description, meta.url, java.util.Arrays.asList(meta.icons), meta.redirect ?? null),
      connectionType === 'manual' ? com.walletconnect.android.relay.ConnectionType.MANUAL : com.walletconnect.android.relay.ConnectionType.AUTOMATIC,
      Utils.android.getApplicationContext()
    )
  }
}

