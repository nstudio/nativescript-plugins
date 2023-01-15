export declare class Client {
  static readonly instance: Client

  readonly pair: Pair;

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
}





