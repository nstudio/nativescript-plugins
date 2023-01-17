import {fromObject, ItemEventData, Observable, Utils} from '@nativescript/core';

export class AppMeta {
  readonly native;

  readonly description: string;

  readonly url: string;

  readonly icons: string[];

  readonly name: string;

  readonly redirect: string;

  readonly redirectUniversal: string;
}

export class WalletConnectError extends Error {
  readonly native;
}


export class Client {

  static readonly instance: Client

  readonly pair: Pair

  readonly sign: Sign;

  readonly auth: Auth

  readonly wallet: Wallet

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
                    connectionType?: 'auto' | 'manual');
}

export class WalletConnectURI {
  readonly native;

  readonly relay: { protocol: string, data: any };

  readonly symKey: string;

  readonly topic: string;

  readonly version: string;
}

export class ProposalNamespaceExtension {

  readonly native;

  readonly chains: string[];

  readonly methods: string[];

  readonly events: string[];
}

export class ProposalNamespace {
  readonly native: any;

  readonly chains: string[];

  readonly methods: string[];

  readonly events: string[];

  readonly extensions?: ProposalNamespaceExtension[]
}

export class ProposalEvent {
  readonly native;
  readonly id;
  readonly proposer: AppMeta
  readonly requiredNamespaces: Record<stirng, ProposalNamespace>

}

export class SessionNamespaceExtension {


  readonly native;

  readonly accounts: string[];

  readonly methods: string[];

  readonly events: string[];
}


export class SessionNamespace {
  readonly native;

  readonly accounts: string[];

  readonly methods: string[];

  readonly events: string[];

  readonly extensions?: SessionNamespaceExtension[]
}


export class SessionEvent {

  readonly native;

  readonly topic: string;

  readonly params: { name: string, data: any }

}

export interface BaseNamespace {
  accounts: string[];
  methods: string[];
  events: string[];
  chains: string[];
}

export interface Namespace extends BaseNamespace {
  extension?: Omit<BaseNamespace, "chains">[];
}

export interface ProposalNamespacesNamespace extends BaseNamespace {
  extension?: Omit<BaseNamespace, "accounts">[];
}

export type Namespaces = Record<string, Namespace>;

export type ProposalNamespaces = Record<string, ProposalNamespacesNamespace>;

export class RequestParams {
  readonly native;

  readonly topic: string;

  readonly chainId: string;

  readonly request: {
    method: string;
    params: any;
  }

}

export class RPCID {
  readonly native;
}

export class CacaoSignature {
  readonly native;

}

export class AuthPayload {

  readonly native;

  readonly domain: string;

  readonly aud: string;

  readonly exp: string;

  readonly nbf: string;

  readonly type: string;

  readonly chainId: string;

  readonly iat: string;

  readonly nonce: string;

  readonly requestId: string;

  readonly resources?: string[]

  readonly version: string;

  readonly statement: string;

}

export class Sign extends Observable {

  approve(params: { id: string, namespaces: Namespaces }): Promise<void>;

  reject(params: { id: string, reason: 'rejected' | 'rejectedChains' | 'rejectedMethods' | 'rejectedEvents' }): Promise<void>;

  connect(params: { topic: string, namespaces: ProposalNamespaces }): Promise<void>

  request(params: { topic: string, chainId: string, request: { method: string, params: any } }): Promise<void>;

  on(eventNames: 'session_proposal', callback: (data: ItemEventData & {event: ProposalEvent}) => void, thisArg?: any)

  on(eventNames: 'session_event', callback: (data: any) => void, thisArg?: any)

  on(eventNames: 'session_request', callback: (data: any) => void, thisArg?: any)

  on(eventNames: 'session_ping', callback: (data: any) => void, thisArg?: any)

  on(eventNames: 'session_delete', callback: (data: any) => void, thisArg?: any)

  on(eventNames: 'session_update', callback: (data: any) => void, thisArg?: any)


  off(eventNames: 'session_proposal', callback?: any, thisArg?: any);

  off(eventNames: 'session_event', callback?: any, thisArg?: any);

  off(eventNames: 'session_request', callback?: any, thisArg?: any);

  off(eventNames: 'session_ping', callback?: any, thisArg?: any);

  off(eventNames: 'session_delete', callback?: any, thisArg?: any);

  off(eventNames: 'session_proposal', callback?: any, thisArg?: any);


}


export class Auth extends Observable {


  getPendingRequests(params: { account: string }): { id: RPCID, payload: AuthPayload }[]

  formatMessage(params: { payload: AuthPayload, address: string }): string;

  reject(params: { id: RPCID }): Promise<void>;

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
  }): Promise<void>

  respond(params: {
    id: RPCID,
    signature: CacaoSignature,
    account: string
  }): Promise<void>


  on(eventNames: 'auth_request', callback: (data: any) => void, thisArg?: any)

  on(eventNames: 'auth_response', callback: (data: any) => void, thisArg?: any)

  off(eventNames: 'auth_request', callback?: any, thisArg?: any)

  off(eventNames: 'auth_response', callback?: any, thisArg?: any)

}

export class Pairing {
  readonly native;

  readonly expiryDate: Date;

  readonly peer: AppMeta;

  readonly topic: string
}

export class Pair {

  create(): Promise<WalletConnectURI>

  pair(params: { uri: string }): Promise<void>

  disconnect(params: { topic: string }): Promise<void>;

  getPairings(): Pairing[]
}

export type CacaoSignatureType = 'eip191' | 'eip1271';

export class Wallet {
  signMessage(params: { payload: AuthPayload, address: string, privateKey: string, type: CacaoSignatureType }): CacaoSignature
}
