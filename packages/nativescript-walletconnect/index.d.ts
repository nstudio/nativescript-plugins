import {Pairing, WalletConnectError} from "./index.ios";
import {Observable} from "@nativescript/core";

export declare class Client {
  static readonly instance: Client

  readonly pair: Pair;

  readonly sign: Sign;

  readonly auth: Auth;

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
                    connectionType: 'auto' | 'manual' = 'auto');
}


export declare class Pair {
  create(): Promise<any>;

  pair(params: { uri: string }): Promise<any>;

  disconnect(params: { topic: string }): Promise<void>;

  getPairings(): any[];
}

export declare class Sign extends Observable {
}

export declare class Auth extends Observable {
}





