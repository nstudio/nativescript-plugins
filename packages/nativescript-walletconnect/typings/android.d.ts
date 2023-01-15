declare module com {
  export module walletconnect {
    export module android {
      export class BuildConfig {
        public static class: java.lang.Class<com.walletconnect.android.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public static SDK_VERSION: string;

        public constructor();
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export class Core {
        public static class: java.lang.Class<com.walletconnect.android.Core>;
        public static INSTANCE: com.walletconnect.android.Core;

        public static<clinit>(): void;

        public constructor();
      }

      export module Core {
        export class Listeners {
          public static class: java.lang.Class<com.walletconnect.android.Core.Listeners>;

          /**
           * Constructs a new instance of the com.walletconnect.android.Core$Listeners interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {});
          public constructor();
        }

        export module Listeners {
          export class PairingPing extends com.walletconnect.android.Core.Listeners {
            public static class: java.lang.Class<com.walletconnect.android.Core.Listeners.PairingPing>;

            /**
             * Constructs a new instance of the com.walletconnect.android.Core$Listeners$PairingPing interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSuccess(param0: com.walletconnect.android.Core.Model.Ping.Success): void;
              onError(param0: com.walletconnect.android.Core.Model.Ping.Error): void;
            });
            public constructor();

            public onSuccess(param0: com.walletconnect.android.Core.Model.Ping.Success): void;

            public onError(param0: com.walletconnect.android.Core.Model.Ping.Error): void;
          }
        }

        export abstract class Model {
          public static class: java.lang.Class<com.walletconnect.android.Core.Model>;

          public constructor();
        }

        export module Model {
          export class AppMetaData extends com.walletconnect.android.Core.Model {
            public static class: java.lang.Class<com.walletconnect.android.Core.Model.AppMetaData>;
            public name: string;
            public description: string;
            public url: string;
            public icons: java.util.List<string>;
            public redirect: string;

            public constructor();

            public component3(): string;

            public component5(): string;

            public copy(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: string): com.walletconnect.android.Core.Model.AppMetaData;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public getUrl(): string;

            public getName(): string;

            public toString(): string;

            public getIcons(): java.util.List<string>;

            public component2(): string;

            public constructor(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: string);

            public getRedirect(): string;

            public component4(): java.util.List<string>;

            public getDescription(): string;
          }

          export class DeletedPairing extends com.walletconnect.android.Core.Model {
            public static class: java.lang.Class<com.walletconnect.android.Core.Model.DeletedPairing>;
            public topic: string;
            public reason: string;

            public constructor();

            public getTopic(): string;

            public component2(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public copy(param0: string, param1: string): com.walletconnect.android.Core.Model.DeletedPairing;

            public constructor(param0: string, param1: string);

            public getReason(): string;

            public toString(): string;
          }

          export class Error extends com.walletconnect.android.Core.Model {
            public static class: java.lang.Class<com.walletconnect.android.Core.Model.Error>;
            public throwable: java.lang.Throwable;

            public constructor();

            public copy(param0: java.lang.Throwable): com.walletconnect.android.Core.Model.Error;

            public constructor(param0: java.lang.Throwable);

            public component1(): java.lang.Throwable;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public getThrowable(): java.lang.Throwable;

            public toString(): string;
          }

          export class Pairing extends com.walletconnect.android.Core.Model {
            public static class: java.lang.Class<com.walletconnect.android.Core.Model.Pairing>;
            public topic: string;
            public expiry: number;
            public peerAppMetaData: com.walletconnect.android.Core.Model.AppMetaData;
            public relayProtocol: string;
            public relayData: string;
            public uri: string;
            public registeredMethods: string;

            public constructor();

            public component5(): string;

            public copy(param0: string, param1: number, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: string, param4: string, param5: string, param6: boolean, param7: string): com.walletconnect.android.Core.Model.Pairing;

            public getRelayData(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public toString(): string;

            public getExpiry(): number;

            public getRelayProtocol(): string;

            public component4(): string;

            public component2(): number;

            public getUri(): string;

            public getRegisteredMethods(): string;

            public getTopic(): string;

            public component3(): com.walletconnect.android.Core.Model.AppMetaData;

            public component6(): string;

            public component7(): boolean;

            public getPeerAppMetaData(): com.walletconnect.android.Core.Model.AppMetaData;

            public component8(): string;

            public constructor(param0: string, param1: number, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: string, param4: string, param5: string, param6: boolean, param7: string);

            public isActive(): boolean;
          }

          export abstract class Ping extends com.walletconnect.android.Core.Model {
            public static class: java.lang.Class<com.walletconnect.android.Core.Model.Ping>;

            public constructor();
          }

          export module Ping {
            export class Error extends com.walletconnect.android.Core.Model.Ping {
              public static class: java.lang.Class<com.walletconnect.android.Core.Model.Ping.Error>;
              public error: java.lang.Throwable;

              public constructor();

              public getError(): java.lang.Throwable;

              public copy(param0: java.lang.Throwable): com.walletconnect.android.Core.Model.Ping.Error;

              public hashCode(): number;

              public constructor(param0: java.lang.Throwable);

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): java.lang.Throwable;
            }

            export class Success extends com.walletconnect.android.Core.Model.Ping {
              public static class: java.lang.Class<com.walletconnect.android.Core.Model.Ping.Success>;
              public topic: string;

              public constructor();

              public getTopic(): string;

              public hashCode(): number;

              public constructor(param0: string);

              public toString(): string;

              public copy(param0: string): com.walletconnect.android.Core.Model.Ping.Success;

              public equals(param0: any): boolean;

              public component1(): string;
            }
          }
        }

        export abstract class Params {
          public static class: java.lang.Class<com.walletconnect.android.Core.Params>;

          public constructor();
        }

        export module Params {
          export class Activate extends com.walletconnect.android.Core.Params {
            public static class: java.lang.Class<com.walletconnect.android.Core.Params.Activate>;
            public topic: string;

            public constructor();

            public copy(param0: string): com.walletconnect.android.Core.Params.Activate;

            public getTopic(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public toString(): string;

            public constructor(param0: string);
          }

          export class Disconnect extends com.walletconnect.android.Core.Params {
            public static class: java.lang.Class<com.walletconnect.android.Core.Params.Disconnect>;
            public topic: string;

            public constructor();

            public getTopic(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public copy(param0: string): com.walletconnect.android.Core.Params.Disconnect;

            public toString(): string;

            public constructor(param0: string);
          }

          export class Pair extends com.walletconnect.android.Core.Params {
            public static class: java.lang.Class<com.walletconnect.android.Core.Params.Pair>;
            public uri: string;

            public constructor();

            public getUri(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public copy(param0: string): com.walletconnect.android.Core.Params.Pair;

            public toString(): string;

            public constructor(param0: string);
          }

          export class Ping extends com.walletconnect.android.Core.Params {
            public static class: java.lang.Class<com.walletconnect.android.Core.Params.Ping>;
            public topic: string;

            public constructor();

            public getTopic(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public copy(param0: string): com.walletconnect.android.Core.Params.Ping;

            public toString(): string;

            public constructor(param0: string);
          }

          export class UpdateExpiry extends com.walletconnect.android.Core.Params {
            public static class: java.lang.Class<com.walletconnect.android.Core.Params.UpdateExpiry>;
            public topic: string;
            public expiry: com.walletconnect.android.internal.common.model.Expiry;

            public getExpiry(): com.walletconnect.android.internal.common.model.Expiry;

            public constructor(param0: string, param1: com.walletconnect.android.internal.common.model.Expiry);
            public constructor();

            public getTopic(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public component2(): com.walletconnect.android.internal.common.model.Expiry;

            public copy(param0: string, param1: com.walletconnect.android.internal.common.model.Expiry): com.walletconnect.android.Core.Params.UpdateExpiry;

            public toString(): string;
          }

          export class UpdateMetadata extends com.walletconnect.android.Core.Params {
            public static class: java.lang.Class<com.walletconnect.android.Core.Params.UpdateMetadata>;
            public topic: string;
            public metadata: com.walletconnect.android.Core.Model.AppMetaData;
            public metaDataType: com.walletconnect.android.internal.common.model.AppMetaDataType;

            public constructor();

            public getMetaDataType(): com.walletconnect.android.internal.common.model.AppMetaDataType;

            public constructor(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType);

            public getTopic(): string;

            public component3(): com.walletconnect.android.internal.common.model.AppMetaDataType;

            public copy(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): com.walletconnect.android.Core.Params.UpdateMetadata;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public component2(): com.walletconnect.android.Core.Model.AppMetaData;

            public getMetadata(): com.walletconnect.android.Core.Model.AppMetaData;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export class CoreClient {
        public static class: java.lang.Class<com.walletconnect.android.CoreClient>;
        public static INSTANCE: com.walletconnect.android.CoreClient;
        public static Pairing: com.walletconnect.android.pairing.client.PairingInterface;
        public static Relay: com.walletconnect.android.relay.RelayConnectionInterface;

        public getRelay(): com.walletconnect.android.relay.RelayConnectionInterface;

        public initialize(param0: com.walletconnect.android.Core.Model.AppMetaData, param1: string, param2: com.walletconnect.android.relay.ConnectionType, param3: globalAndroid.app.Application, param4: com.walletconnect.android.relay.RelayConnectionInterface, param5: kotlin.jvm.functions.Function1<any>): void;

        public setDelegate(param0: com.walletconnect.android.CoreClient.CoreDelegate): void;

        public setRelay(param0: com.walletconnect.android.relay.RelayConnectionInterface): void;

        public static<clinit>(): void;

        public constructor();

        public getPairing(): com.walletconnect.android.pairing.client.PairingInterface;
      }

      export module CoreClient {
        export class CoreDelegate extends com.walletconnect.android.pairing.client.PairingInterface.Delegate {
          public static class: java.lang.Class<com.walletconnect.android.CoreClient.CoreDelegate>;

          /**
           * Constructs a new instance of the com.walletconnect.android.CoreClient$CoreDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onPairingDelete(param0: com.walletconnect.android.Core.Model.DeletedPairing): void;
          });
          public constructor();

          public onPairingDelete(param0: com.walletconnect.android.Core.Model.DeletedPairing): void;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module di {
        export class AndroidCoreDITags {
          public static class: java.lang.Class<com.walletconnect.android.di.AndroidCoreDITags>;
          public static DB_PASSPHRASE: com.walletconnect.android.di.AndroidCoreDITags;
          public static ANDROID_CORE_DATABASE: com.walletconnect.android.di.AndroidCoreDITags;
          public static ANDROID_CORE_DATABASE_DRIVER: com.walletconnect.android.di.AndroidCoreDITags;
          public static COLUMN_ADAPTER_LIST: com.walletconnect.android.di.AndroidCoreDITags;
          public static COLUMN_ADAPTER_APPMETADATATYPE: com.walletconnect.android.di.AndroidCoreDITags;

          public static valueOf(param0: string): com.walletconnect.android.di.AndroidCoreDITags;

          public static values(): androidNative.Array<com.walletconnect.android.di.AndroidCoreDITags>;

          public constructor(param0: string, param1: number);

          public static<clinit>(): void;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export class Proposal {
          public static class: java.lang.Class<com.walletconnect.android.internal.Proposal>;
          public chains: java.util.List<string>;
          public methods: java.util.List<string>;
          public events: java.util.List<string>;
          public extensions: java.util.List<com.walletconnect.android.internal.Proposal.Extension>;

          public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.android.internal.Proposal.Extension>);

          public component2(): java.util.List<string>;

          public getMethods(): java.util.List<string>;

          public getEvents(): java.util.List<string>;

          public equals(param0: any): boolean;

          public getChains(): java.util.List<string>;

          public toString(): string;

          public component1(): java.util.List<string>;

          public getExtensions(): java.util.List<com.walletconnect.android.internal.Proposal.Extension>;

          public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.android.internal.Proposal.Extension>): com.walletconnect.android.internal.Proposal;

          public component3(): java.util.List<string>;

          public component4(): java.util.List<com.walletconnect.android.internal.Proposal.Extension>;

          public hashCode(): number;
        }

        export module Proposal {
          export class Extension {
            public static class: java.lang.Class<com.walletconnect.android.internal.Proposal.Extension>;
            public chains: java.util.List<string>;
            public methods: java.util.List<string>;
            public events: java.util.List<string>;

            public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

            public component1(): java.util.List<string>;

            public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.android.internal.Proposal.Extension;

            public component2(): java.util.List<string>;

            public component3(): java.util.List<string>;

            public getMethods(): java.util.List<string>;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public getEvents(): java.util.List<string>;

            public getChains(): java.util.List<string>;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export class ProposalJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.Proposal> {
          public static class: java.lang.Class<com.walletconnect.android.internal.ProposalJsonAdapter>;
          public options: com.squareup.moshi.JsonReader.Options;
          public listOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;
          public nullableListOfExtensionAdapter: com.squareup.moshi.JsonAdapter<java.util.List<com.walletconnect.android.internal.Proposal.Extension>>;

          public toString(): string;

          public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.Proposal;

          public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.Proposal): void;

          public constructor(param0: com.squareup.moshi.Moshi);
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export class Proposal_ExtensionJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.Proposal.Extension> {
          public static class: java.lang.Class<com.walletconnect.android.internal.Proposal_ExtensionJsonAdapter>;
          public options: com.squareup.moshi.JsonReader.Options;
          public listOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;

          public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.Proposal.Extension;

          public toString(): string;

          public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.Proposal.Extension): void;

          public constructor(param0: com.squareup.moshi.Moshi);
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export class Validator {
          public static class: java.lang.Class<com.walletconnect.android.internal.Validator>;
          public static INSTANCE: com.walletconnect.android.internal.Validator;

          public constructor();

          public static<clinit>(): void;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export abstract class JsonRpcResponse extends com.walletconnect.android.internal.common.model.type.SerializableJsonRpc {
            public static class: java.lang.Class<com.walletconnect.android.internal.common.JsonRpcResponse>;

            public getId(): number;
          }

          export module JsonRpcResponse {
            export class Error {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.JsonRpcResponse.Error>;
              public code: number;
              public message: string;

              public component2(): string;

              public component1(): number;

              public hashCode(): number;

              public copy(param0: number, param1: string): com.walletconnect.android.internal.common.JsonRpcResponse.Error;

              public toString(): string;

              public getCode(): number;

              public equals(param0: any): boolean;

              public getMessage(): string;

              public constructor(param0: number, param1: string);
            }

            export class JsonRpcError extends com.walletconnect.android.internal.common.JsonRpcResponse {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcError>;
              public id: number;
              public jsonrpc: string;
              public error: com.walletconnect.android.internal.common.JsonRpcResponse.Error;
              public errorMessage: string;

              public getJsonrpc(): string;

              public component2(): string;

              public component3(): com.walletconnect.android.internal.common.JsonRpcResponse.Error;

              public component1(): number;

              public hashCode(): number;

              public getError(): com.walletconnect.android.internal.common.JsonRpcResponse.Error;

              public getId(): number;

              public copy(param0: number, param1: string, param2: com.walletconnect.android.internal.common.JsonRpcResponse.Error): com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcError;

              public toString(): string;

              public constructor(param0: number, param1: string, param2: com.walletconnect.android.internal.common.JsonRpcResponse.Error);

              public equals(param0: any): boolean;

              public getErrorMessage(): string;
            }

            export class JsonRpcResult extends com.walletconnect.android.internal.common.JsonRpcResponse {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcResult>;
              public id: number;
              public jsonrpc: string;
              public result: any;

              public getJsonrpc(): string;

              public component2(): string;

              public constructor(param0: number, param1: string, param2: any);

              public component1(): number;

              public copy(param0: number, param1: string, param2: any): com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcResult;

              public hashCode(): number;

              public getId(): number;

              public getResult(): any;

              public toString(): string;

              public component3(): any;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export class JsonRpcResponse_JsonRpcErrorJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcError> {
            public static class: java.lang.Class<com.walletconnect.android.internal.common.JsonRpcResponse_JsonRpcErrorJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public errorAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.JsonRpcResponse.Error>;
            public constructorRef: java.lang.reflect.Constructor<com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcError>;

            public constructor(param0: com.squareup.moshi.Moshi);

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcError): void;

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcError;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export class JwtRepositoryAndroid {
            public static class: java.lang.Class<com.walletconnect.android.internal.common.JwtRepositoryAndroid>;
            public keyChain: com.walletconnect.android.internal.common.storage.KeyStore;

            //public setKeyPair-YZ3PVDQ(param0: string, param1: string, param2: string): void;
            public getKeyPair(): java.util.Pair<string, string>;

            public encodeByteArray(param0: androidNative.Array<number>): string;

            public doesKeyPairExist(): boolean;

            public constructor(param0: com.walletconnect.android.internal.common.storage.KeyStore);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module adapter {
            export class ExpiryAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.Expiry> {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.adapter.ExpiryAdapter>;
              public static INSTANCE: com.walletconnect.android.internal.common.adapter.ExpiryAdapter;

              public constructor();

              public static<clinit>(): void;
            }

            export module ExpiryAdapter {
              export class Qualifier {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.adapter.ExpiryAdapter.Qualifier>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.adapter.ExpiryAdapter$Qualifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module adapter {
            export class JsonRpcResultAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcResult> {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.adapter.JsonRpcResultAdapter>;
              public moshi: com.squareup.moshi.Moshi;
              public options: com.squareup.moshi.JsonReader.Options;
              public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
              public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
              public anyAdapter: com.squareup.moshi.JsonAdapter<any>;
              public approvalParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.CoreSignParams.ApprovalParams>;
              public cacaoAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.CoreAuthParams.ResponseParams>;
              public acceptanceParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.CoreChatParams.AcceptanceParams>;
              public constructorRef: java.lang.reflect.Constructor<com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcResult>;

              public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcResult): void;

              public getMoshi(): com.squareup.moshi.Moshi;

              public constructor(param0: com.squareup.moshi.Moshi);

              public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcResult;

              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module adapter {
            export class TagsAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.Tags> {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.adapter.TagsAdapter>;
              public static INSTANCE: com.walletconnect.android.internal.common.adapter.TagsAdapter;

              public constructor();

              public static<clinit>(): void;
            }

            export module TagsAdapter {
              export class Qualifier {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.adapter.TagsAdapter.Qualifier>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.adapter.TagsAdapter$Qualifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module connection {
            export class ConnectivityState {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.connection.ConnectivityState>;
              public connectivityManager: globalAndroid.net.ConnectivityManager;
              public _isAvailable: kotlinx.coroutines.flow.MutableStateFlow<java.lang.Boolean>;

              //	public callback: com.walletconnect.android.internal.common.connection.ConnectivityState.callback.1;
              public isAvailable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;

              public isConnected(): boolean;

              public updateIfStateChanged(): void;

              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module connection {
            export class ManualConnectionLifecycle {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.connection.ManualConnectionLifecycle>;
              public lifecycleRegistry: com.tinder.scarlet.lifecycle.LifecycleRegistry;

              public combineWith(param0: androidNative.Array<com.tinder.scarlet.Lifecycle>): com.tinder.scarlet.Lifecycle;

              public subscribe(param0: org.reactivestreams.Subscriber<any>): void;

              public constructor(param0: com.walletconnect.foundation.network.data.ConnectionController, param1: com.tinder.scarlet.lifecycle.LifecycleRegistry);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module crypto {
            export module codec {
              export class ChaChaPolyCodec extends com.walletconnect.android.internal.common.crypto.codec.Codec {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.crypto.codec.ChaChaPolyCodec>;
                public static NONCE_SIZE: number;
                public static KEY_SIZE: number;
                public static ENVELOPE_TYPE_SIZE: number;
                public keyManagementRepository: com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository;
                public cha20Poly1305: org.bouncycastle.crypto.modes.ChaCha20Poly1305;

                public encrypt(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: com.walletconnect.android.internal.common.model.EnvelopeType, param3: com.walletconnect.android.internal.common.model.Participants): string;

                public encryptEnvelopeType0(param0: com.walletconnect.foundation.common.model.Topic, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: com.walletconnect.android.internal.common.model.EnvelopeType): string;

                //public decryptType1-2dz71Ow(param0: androidNative.Array<number>, param1: string): string;
                public constructor(param0: com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository);

                //public encryptPayload-THFQ7Pg(param0: string, param1: androidNative.Array<number>, param2: androidNative.Array<number>): androidNative.Array<number>;
                public decrypt(param0: com.walletconnect.foundation.common.model.Topic, param1: string): string;

                public decryptType0(param0: com.walletconnect.foundation.common.model.Topic, param1: androidNative.Array<number>): string;

                public static<clinit>(): void;

                public encryptEnvelopeType1(param0: com.walletconnect.android.internal.common.model.Participants, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: com.walletconnect.android.internal.common.model.EnvelopeType): string;

                //public decryptPayload-THFQ7Pg(param0: string, param1: androidNative.Array<number>, param2: androidNative.Array<number>): androidNative.Array<number>;
              }

              export module ChaChaPolyCodec {
                export class Companion {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.crypto.codec.ChaChaPolyCodec.Companion>;

                  public constructor();

                  public getEnvelopeType(param0: androidNative.Array<number>): number;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module crypto {
            export module codec {
              export class Codec {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.crypto.codec.Codec>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.crypto.codec.Codec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  encrypt(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: com.walletconnect.android.internal.common.model.EnvelopeType, param3: com.walletconnect.android.internal.common.model.Participants): string;
                  decrypt(param0: com.walletconnect.foundation.common.model.Topic, param1: string): string;
                });
                public constructor();

                public encrypt(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: com.walletconnect.android.internal.common.model.EnvelopeType, param3: com.walletconnect.android.internal.common.model.Participants): string;

                public decrypt(param0: com.walletconnect.foundation.common.model.Topic, param1: string): string;
              }

              export module Codec {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.crypto.codec.Codec.DefaultImpls>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module crypto {
            export module kmr {
              export class BouncyCastleKeyManagementRepository extends com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.crypto.kmr.BouncyCastleKeyManagementRepository>;
                public static KEY_SIZE: number;
                public static SYM_KEY_SIZE: number;
                public static SHA_256: string;
                public static AES: string;
                public static KEY_AGREEMENT_CONTEXT: string;
                public keyChain: com.walletconnect.android.internal.common.storage.KeyStore;

                //public generateAndStoreSymmetricKey-jGwfRa8(param0: com.walletconnect.foundation.common.model.Topic): string;
                public getTopicFromKey(param0: com.walletconnect.foundation.common.model.Key): com.walletconnect.foundation.common.model.Topic;

                //public setKeyAgreement-wEoTTHo(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: string): void;
                public createSymmetricKey(): androidNative.Array<number>;

                //public getPublicKey-eGnR7W8(param0: string): string;
                public deriveHKDFKey(param0: string): androidNative.Array<number>;

                public constructor(param0: com.walletconnect.android.internal.common.storage.KeyStore);

                //	public getSelfPublicFromKeyAgreement-eGnR7W8(param0: com.walletconnect.foundation.common.model.Topic): string;
                //		public getKeyPair$sdk_release(param0: com.walletconnect.foundation.common.model.Key): any<com.walletconnect.foundation.common.model.PublicKey,com.walletconnect.foundation.common.model.PrivateKey>;
                //public generateSymmetricKeyFromKeyAgreement-yrOu9c8(param0: string, param1: string): string;
                public setKey(param0: com.walletconnect.foundation.common.model.Key, param1: string): void;

                public removeKeys(param0: string): void;

                //	public setKeyPair-bUTFCIo$sdk_release(param0: string, param1: string): void;
                //	public getSymmetricKey-jGwfRa8(param0: string): string;
                //	public generateTopicFromKeyAgreement-X_eavGs(param0: string, param1: string): com.walletconnect.foundation.common.model.Topic;
                public static<clinit>(): void;

                //	public generateKeyPair-XmMAeWk(): string;
                public sha256(param0: string): string;
              }

              export module BouncyCastleKeyManagementRepository {
                export class Companion {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.crypto.kmr.BouncyCastleKeyManagementRepository.Companion>;

                  public constructor();
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module crypto {
            export module kmr {
              export class KeyManagementRepository {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  setKey(param0: com.walletconnect.foundation.common.model.Key, param1: string): void;
                  removeKeys(param0: string): void;
                  //	getPublicKey-eGnR7W8(param0: string): string;
                  //	getSymmetricKey-jGwfRa8(param0: string): string;
                  //	generateKeyPair-XmMAeWk(): string;
                  //	setKeyAgreement-wEoTTHo(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: string): void;
                  //	getSelfPublicFromKeyAgreement-eGnR7W8(param0: com.walletconnect.foundation.common.model.Topic): string;
                  //	generateAndStoreSymmetricKey-jGwfRa8(param0: com.walletconnect.foundation.common.model.Topic): string;
                  //	generateSymmetricKeyFromKeyAgreement-yrOu9c8(param0: string, param1: string): string;
                  getTopicFromKey(param0: com.walletconnect.foundation.common.model.Key): com.walletconnect.foundation.common.model.Topic;
                  //generateTopicFromKeyAgreement-X_eavGs(param0: string, param1: string): com.walletconnect.foundation.common.model.Topic;
                });
                public constructor();

                //public generateAndStoreSymmetricKey-jGwfRa8(param0: com.walletconnect.foundation.common.model.Topic): string;
                public getTopicFromKey(param0: com.walletconnect.foundation.common.model.Key): com.walletconnect.foundation.common.model.Topic;

                public removeKeys(param0: string): void;

                //public setKeyAgreement-wEoTTHo(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: string): void;
                //	public getPublicKey-eGnR7W8(param0: string): string;
                //public getSelfPublicFromKeyAgreement-eGnR7W8(param0: com.walletconnect.foundation.common.model.Topic): string;
                //public getSymmetricKey-jGwfRa8(param0: string): string;
                //public generateSymmetricKeyFromKeyAgreement-yrOu9c8(param0: string, param1: string): string;
                //public generateTopicFromKeyAgreement-X_eavGs(param0: string, param1: string): com.walletconnect.foundation.common.model.Topic;
                public setKey(param0: com.walletconnect.foundation.common.model.Key, param1: string): void;

                //public generateKeyPair-XmMAeWk(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module di {
            export class AndroidCommonDITags {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.di.AndroidCommonDITags>;
              public static MOSHI: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static INTERCEPTOR: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static OK_HTTP: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static RELAY_SERVICE: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static SCARLET: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static MSG_ADAPTER: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static CONNECTION_CONTROLLER: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static LIFECYCLE: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static LOGGER: com.walletconnect.android.internal.common.di.AndroidCommonDITags;
              public static CONNECTIVITY_STATE: com.walletconnect.android.internal.common.di.AndroidCommonDITags;

              public static valueOf(param0: string): com.walletconnect.android.internal.common.di.AndroidCommonDITags;

              public constructor(param0: string, param1: number);

              public static values(): androidNative.Array<com.walletconnect.android.internal.common.di.AndroidCommonDITags>;

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module di {
            export class DBNames {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.di.DBNames>;
              public static INSTANCE: com.walletconnect.android.internal.common.di.DBNames;
              public static ANDROID_CORE_DB_NAME: string;

              public constructor();

              public getSdkDBName(param0: string): string;

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export class CannotFindKeyPairException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.CannotFindKeyPairException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export class CannotFindSequenceForTopic extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.CannotFindSequenceForTopic>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export class GenericException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.GenericException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export abstract class Invalid extends com.walletconnect.android.internal.common.model.type.Error {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.Invalid>;

              public constructor();

              public getCode(): number;

              public getMessage(): string;
            }

            export module Invalid {
              export class MethodUnsupported extends com.walletconnect.android.internal.common.exception.Invalid {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.Invalid.MethodUnsupported>;
                public method: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public getMethod(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();

                public copy(param0: string): com.walletconnect.android.internal.common.exception.Invalid.MethodUnsupported;

                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export class InvalidProjectIdException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.InvalidProjectIdException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export class MalformedWalletConnectUri extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.MalformedWalletConnectUri>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export class NoRelayConnectionException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.NoRelayConnectionException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export class PairWithExistingPairingIsNotAllowed extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.PairWithExistingPairingIsNotAllowed>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export class ProjectIdDoesNotExistException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.ProjectIdDoesNotExistException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export abstract class Reason extends com.walletconnect.android.internal.common.model.type.Error {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.Reason>;

              public constructor();

              public getCode(): number;

              public getMessage(): string;
            }

            export module Reason {
              export class UserDisconnected extends com.walletconnect.android.internal.common.exception.Reason {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.Reason.UserDisconnected>;
                public static INSTANCE: com.walletconnect.android.internal.common.exception.Reason.UserDisconnected;
                public static message: string;
                public static code: number;

                public getMessage(): string;

                public constructor();

                public static<clinit>(): void;

                public getCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export abstract class Uncategorized extends com.walletconnect.android.internal.common.model.type.Error {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.Uncategorized>;

              public constructor();

              public getCode(): number;

              public getMessage(): string;
            }

            export module Uncategorized {
              export class GenericError extends com.walletconnect.android.internal.common.exception.Uncategorized {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.Uncategorized.GenericError>;
                public error: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.android.internal.common.exception.Uncategorized.GenericError;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public getError(): string;

                public hashCode(): number;

                public getCode(): number;
              }

              export class NoMatchingTopic extends com.walletconnect.android.internal.common.exception.Uncategorized {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.Uncategorized.NoMatchingTopic>;
                public sequence: string;
                public topic: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public constructor(param0: string, param1: string);

                public equals(param0: any): boolean;

                public getTopic(): string;

                public getMessage(): string;

                public constructor();

                public getSequence(): string;

                public component2(): string;

                public hashCode(): number;

                public getCode(): number;

                public copy(param0: string, param1: string): com.walletconnect.android.internal.common.exception.Uncategorized.NoMatchingTopic;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module exception {
            export abstract class WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.exception.WalletConnectException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module json_rpc {
            export module data {
              export class JsonRpcSerializer {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer>;
                public serializerEntries: java.util.Set<any>;
                public deserializerEntries: java.util.Map<string, any>;

                public deserialize(param0: string, param1: string): com.walletconnect.android.internal.common.model.type.ClientParams;

                public constructor(param0: java.util.Set<any>, param1: java.util.Map<string, any>);

                public getDeserializerEntries(): java.util.Map<string, any>;

                public tryDeserialize(param0: string, param1: any): any;

                public trySerialize(param0: any, param1: any): string;

                public getMoshi(): com.squareup.moshi.Moshi;

                public getSerializerEntries(): java.util.Set<any>;

                public serialize(param0: com.walletconnect.android.internal.common.model.type.SerializableJsonRpc): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module json_rpc {
            export module domain {
              export class JsonRpcInteractor extends com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.json_rpc.domain.JsonRpcInteractor>;
                public relay: com.walletconnect.android.relay.RelayConnectionInterface;
                public chaChaPolyCodec: com.walletconnect.android.internal.common.crypto.codec.Codec;
                public jsonRpcHistory: com.walletconnect.android.internal.common.storage.JsonRpcHistory;
                public logger: com.walletconnect.foundation.util.Logger;
                public _clientSyncJsonRpc: kotlinx.coroutines.flow.MutableSharedFlow<com.walletconnect.android.internal.common.model.WCRequest>;
                public clientSyncJsonRpc: kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.WCRequest>;
                public _peerResponse: kotlinx.coroutines.flow.MutableSharedFlow<com.walletconnect.android.internal.common.model.WCResponse>;
                public peerResponse: kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.WCResponse>;
                public _internalErrors: kotlinx.coroutines.flow.MutableSharedFlow<java.lang.InternalError>;
                public internalErrors: kotlinx.coroutines.flow.SharedFlow<java.lang.InternalError>;
                public subscriptions: java.util.Map<string, string>;

                public subscribe(param0: com.walletconnect.foundation.common.model.Topic, param1: kotlin.jvm.functions.Function1<any>): void;

                public publishJsonRpcRequest(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.model.type.JsonRpcClientSync<any>, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: any, param6: kotlin.jvm.functions.Function1<any>): void;

                public getClientSyncJsonRpc(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.WCRequest>;

                public getPeerResponse(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.WCResponse>;

                public handleError(param0: string): void;

                public respondWithParams(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.type.ClientParams, param2: com.walletconnect.android.internal.common.model.IrnParams, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: kotlin.jvm.functions.Function1<any>): void;

                public respondWithError(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.type.Error, param2: com.walletconnect.android.internal.common.model.IrnParams, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: kotlin.jvm.functions.Function1<any>): void;

                public checkConnectionWorking(): void;

                public publishJsonRpcResponse(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.JsonRpcResponse, param3: any, param4: kotlin.jvm.functions.Function1<any>, param5: com.walletconnect.android.internal.common.model.Participants, param6: com.walletconnect.android.internal.common.model.EnvelopeType): void;

                public getInternalErrors(): kotlinx.coroutines.flow.SharedFlow<java.lang.InternalError>;

                public handleRequest(param0: com.walletconnect.android.internal.common.model.sync.ClientJsonRpc, param1: com.walletconnect.foundation.common.model.Topic, param2: string, param3: any): any;

                public handleJsonRpcError(param0: com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcError, param1: any): any;

                public isConnectionAvailable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;

                public manageSubscriptions(param0: string, param1: com.walletconnect.foundation.common.model.Topic, param2: any): any;

                public handleJsonRpcResult(param0: com.walletconnect.android.internal.common.JsonRpcResponse.JsonRpcResult, param1: any): any;

                public constructor(param0: com.walletconnect.android.relay.RelayConnectionInterface, param1: com.walletconnect.android.internal.common.crypto.codec.Codec, param2: com.walletconnect.android.internal.common.storage.JsonRpcHistory, param3: com.walletconnect.foundation.util.Logger);

                public manageSubscriptions(): void;

                public getSerializer(): com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer;

                public respondWithSuccess(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.model.EnvelopeType, param3: com.walletconnect.android.internal.common.model.Participants): void;

                public unsubscribe(param0: com.walletconnect.foundation.common.model.Topic, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module json_rpc {
            export module model {
              export class JsonRpcHistoryRecord {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord>;
                public id: number;
                public topic: string;
                public method: string;
                public body: string;
                public response: string;

                public toString(): string;

                public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public component2(): string;

                public copy(param0: number, param1: string, param2: string, param3: string, param4: string): com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord;

                public getId(): number;

                public getResponse(): string;

                public getMethod(): string;

                public component1(): number;

                public getBody(): string;

                public component5(): string;

                public component3(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class AppMetaData {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.AppMetaData>;
              public name: string;
              public description: string;
              public url: string;
              public icons: java.util.List<string>;
              public redirect: com.walletconnect.android.internal.common.model.Redirect;

              public component2(): string;

              public component4(): java.util.List<string>;

              public hashCode(): number;

              public constructor(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: com.walletconnect.android.internal.common.model.Redirect);

              public getIcons(): java.util.List<string>;

              public toString(): string;

              public getDescription(): string;

              public component3(): string;

              public component1(): string;

              public component5(): com.walletconnect.android.internal.common.model.Redirect;

              public getUrl(): string;

              public getName(): string;

              public copy(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: com.walletconnect.android.internal.common.model.Redirect): com.walletconnect.android.internal.common.model.AppMetaData;

              public getRedirect(): com.walletconnect.android.internal.common.model.Redirect;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class AppMetaDataJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.AppMetaData> {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.AppMetaDataJsonAdapter>;
              public options: com.squareup.moshi.JsonReader.Options;
              public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
              public listOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;
              public nullableRedirectAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.Redirect>;
              public constructorRef: java.lang.reflect.Constructor<com.walletconnect.android.internal.common.model.AppMetaData>;

              public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.AppMetaData;

              public constructor(param0: com.squareup.moshi.Moshi);

              public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.AppMetaData): void;

              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class AppMetaDataType {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.AppMetaDataType>;
              public static SELF: com.walletconnect.android.internal.common.model.AppMetaDataType;
              public static PEER: com.walletconnect.android.internal.common.model.AppMetaDataType;

              public static values(): androidNative.Array<com.walletconnect.android.internal.common.model.AppMetaDataType>;

              public static valueOf(param0: string): com.walletconnect.android.internal.common.model.AppMetaDataType;

              public constructor(param0: string, param1: number);

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class ConnectionState extends com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.ConnectionState>;
              public throwable: java.lang.Throwable;

              public constructor(param0: boolean, param1: java.lang.Throwable);

              public component1(): boolean;

              public hashCode(): number;

              public toString(): string;

              public isAvailable(): boolean;

              public getThrowable(): java.lang.Throwable;

              public equals(param0: any): boolean;

              public component2(): java.lang.Throwable;

              public copy(param0: boolean, param1: java.lang.Throwable): com.walletconnect.android.internal.common.model.ConnectionState;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class EnvelopeType {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.EnvelopeType>;
              public static ZERO: com.walletconnect.android.internal.common.model.EnvelopeType;
              public static ONE: com.walletconnect.android.internal.common.model.EnvelopeType;
              public id: number;

              public static valueOf(param0: string): com.walletconnect.android.internal.common.model.EnvelopeType;

              public static values(): androidNative.Array<com.walletconnect.android.internal.common.model.EnvelopeType>;

              public getId(): number;

              public constructor(param0: number);

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class Expiry {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.Expiry>;
              public seconds: number;

              public copy(param0: number): com.walletconnect.android.internal.common.model.Expiry;

              public getSeconds(): number;

              public component1(): number;

              public hashCode(): number;

              public toString(): string;

              public equals(param0: any): boolean;

              public constructor(param0: number);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class IrnParams {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.IrnParams>;
              public tag: com.walletconnect.android.internal.common.model.Tags;
              public ttl: com.walletconnect.foundation.common.model.Ttl;
              public prompt: boolean;

              public constructor(param0: com.walletconnect.android.internal.common.model.Tags, param1: com.walletconnect.foundation.common.model.Ttl, param2: boolean);

              public component3(): boolean;

              public copy(param0: com.walletconnect.android.internal.common.model.Tags, param1: com.walletconnect.foundation.common.model.Ttl, param2: boolean): com.walletconnect.android.internal.common.model.IrnParams;

              public getTtl(): com.walletconnect.foundation.common.model.Ttl;

              public hashCode(): number;

              public getPrompt(): boolean;

              public toString(): string;

              public getTag(): com.walletconnect.android.internal.common.model.Tags;

              public equals(param0: any): boolean;

              public component1(): com.walletconnect.android.internal.common.model.Tags;

              public component2(): com.walletconnect.foundation.common.model.Ttl;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class MissingKeyException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.MissingKeyException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class MissingParticipantsException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.MissingParticipantsException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class Pairing extends com.walletconnect.android.internal.common.model.type.Sequence {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.Pairing>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public expiry: com.walletconnect.android.internal.common.model.Expiry;
              public peerAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;
              public relayProtocol: string;
              public relayData: string;
              public uri: string;
              public registeredMethods: string;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              public component3(): com.walletconnect.android.internal.common.model.AppMetaData;

              public isActive(): boolean;

              public hashCode(): number;

              public component1(): com.walletconnect.foundation.common.model.Topic;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.RelayProtocolOptions, param2: string, param3: string);

              public getRelayProtocol(): string;

              public component7(): boolean;

              public toString(): string;

              public getUri(): string;

              public component5(): string;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry, param2: com.walletconnect.android.internal.common.model.AppMetaData, param3: string, param4: string, param5: string, param6: boolean, param7: string);

              public component8(): string;

              public getPeerAppMetaData(): com.walletconnect.android.internal.common.model.AppMetaData;

              public constructor(param0: com.walletconnect.android.internal.common.model.WalletConnectUri, param1: string);

              public getRelayData(): string;

              public component2(): com.walletconnect.android.internal.common.model.Expiry;

              public getExpiry(): com.walletconnect.android.internal.common.model.Expiry;

              public component4(): string;

              public copy(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry, param2: com.walletconnect.android.internal.common.model.AppMetaData, param3: string, param4: string, param5: string, param6: boolean, param7: string): com.walletconnect.android.internal.common.model.Pairing;

              public component6(): string;

              public getRegisteredMethods(): string;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class Participants {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.Participants>;
              public senderPublicKey: string;
              public receiverPublicKey: string;

              //public component1-XmMAeWk(): string;
              public hashCode(): number;

              public constructor(param0: string, param1: string);

              //	public getReceiverPublicKey-XmMAeWk(): string;
              //	public copy-X_eavGs(param0: string, param1: string): com.walletconnect.android.internal.common.model.Participants;
              public toString(): string;

              //public getSenderPublicKey-XmMAeWk(): string;
              //	public component2-XmMAeWk(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class ProjectId {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.ProjectId>;
              public value: string;

              public hashCode(): number;

              //	public static toString-impl(param0: string): string;
              //	public static constructor-impl(param0: string): string;
              //	public static equals-impl(param0: string, param1: any): boolean;
              //			public static equals-impl0(param0: string, param1: string): boolean;
              public getValue(): string;

              public toString(): string;

              public equals(param0: any): boolean;

              //		public static hashCode-impl(param0: string): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class Redirect {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.Redirect>;
              public native: string;
              public universal: string;

              public constructor();

              public component2(): string;

              public hashCode(): number;

              public constructor(param0: string, param1: string);

              public copy(param0: string, param1: string): com.walletconnect.android.internal.common.model.Redirect;

              public toString(): string;

              public getNative(): string;

              public equals(param0: any): boolean;

              public getUniversal(): string;

              public component1(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class RelayProtocolOptions {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.RelayProtocolOptions>;
              public protocol: string;
              public data: string;

              public constructor();

              public component2(): string;

              public getData(): string;

              public hashCode(): number;

              public getProtocol(): string;

              public constructor(param0: string, param1: string);

              public toString(): string;

              public copy(param0: string, param1: string): com.walletconnect.android.internal.common.model.RelayProtocolOptions;

              public equals(param0: any): boolean;

              public component1(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class RelayProtocolOptionsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.RelayProtocolOptions> {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.RelayProtocolOptionsJsonAdapter>;
              public options: com.squareup.moshi.JsonReader.Options;
              public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
              public nullableStringAdapter: com.squareup.moshi.JsonAdapter<string>;
              public constructorRef: java.lang.reflect.Constructor<com.walletconnect.android.internal.common.model.RelayProtocolOptions>;

              public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.RelayProtocolOptions;

              public constructor(param0: com.squareup.moshi.Moshi);

              public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.RelayProtocolOptions): void;

              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class SDKError extends com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.SDKError>;
              public exception: java.lang.InternalError;

              public constructor(param0: java.lang.InternalError);

              public getException(): java.lang.InternalError;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class SessionProposer {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.SessionProposer>;
              public publicKey: string;
              public metadata: com.walletconnect.android.internal.common.model.AppMetaData;

              public hashCode(): number;

              public getPublicKey(): string;

              public toString(): string;

              public getMetadata(): com.walletconnect.android.internal.common.model.AppMetaData;

              public constructor(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData);

              public copy(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData): com.walletconnect.android.internal.common.model.SessionProposer;

              public equals(param0: any): boolean;

              public component2(): com.walletconnect.android.internal.common.model.AppMetaData;

              public component1(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class SessionProposerJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.SessionProposer> {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.SessionProposerJsonAdapter>;
              public options: com.squareup.moshi.JsonReader.Options;
              public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
              public appMetaDataAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.AppMetaData>;

              public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.SessionProposer): void;

              public constructor(param0: com.squareup.moshi.Moshi);

              public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.SessionProposer;

              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class SymmetricKey {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.SymmetricKey>;
              public keyAsHex: string;

              public hashCode(): number;

              //	public static toString-impl(param0: string): string;
              //	public static constructor-impl(param0: string): string;
              //	public static equals-impl(param0: string, param1: any): boolean;
              //	public static equals-impl0(param0: string, param1: string): boolean;
              public toString(): string;

              public equals(param0: any): boolean;

              //		public static hashCode-impl(param0: string): number;
              public getKeyAsHex(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class Tags {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.Tags>;
              public static UNSUPPORTED_METHOD: com.walletconnect.android.internal.common.model.Tags;
              public static PAIRING_DELETE: com.walletconnect.android.internal.common.model.Tags;
              public static PAIRING_DELETE_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static PAIRING_PING: com.walletconnect.android.internal.common.model.Tags;
              public static PAIRING_PING_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_PROPOSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_PROPOSE_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_SETTLE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_SETTLE_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_UPDATE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_UPDATE_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_EXTEND: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_EXTEND_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_REQUEST: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_REQUEST_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_EVENT: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_EVENT_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_DELETE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_DELETE_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_PING: com.walletconnect.android.internal.common.model.Tags;
              public static SESSION_PING_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static CHAT_INVITE: com.walletconnect.android.internal.common.model.Tags;
              public static CHAT_INVITE_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static CHAT_MESSAGE: com.walletconnect.android.internal.common.model.Tags;
              public static CHAT_MESSAGE_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static CHAT_LEAVE: com.walletconnect.android.internal.common.model.Tags;
              public static CHAT_LEAVE_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static CHAT_PING: com.walletconnect.android.internal.common.model.Tags;
              public static CHAT_PING_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public static AUTH_REQUEST: com.walletconnect.android.internal.common.model.Tags;
              public static AUTH_REQUEST_RESPONSE: com.walletconnect.android.internal.common.model.Tags;
              public id: number;

              public static valueOf(param0: string): com.walletconnect.android.internal.common.model.Tags;

              public static values(): androidNative.Array<com.walletconnect.android.internal.common.model.Tags>;

              public getId(): number;

              public constructor(param0: number);

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class UnknownEnvelopeTypeException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.UnknownEnvelopeTypeException>;
              public message: string;

              public constructor(param0: string);

              public getMessage(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class WCRequest {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.WCRequest>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public id: number;
              public method: string;
              public params: com.walletconnect.android.internal.common.model.type.ClientParams;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              public component4(): com.walletconnect.android.internal.common.model.type.ClientParams;

              public getMethod(): string;

              public hashCode(): number;

              public component1(): com.walletconnect.foundation.common.model.Topic;

              public component2(): number;

              public toString(): string;

              public component3(): string;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: number, param2: string, param3: com.walletconnect.android.internal.common.model.type.ClientParams);

              public getParams(): com.walletconnect.android.internal.common.model.type.ClientParams;

              public getId(): number;

              public copy(param0: com.walletconnect.foundation.common.model.Topic, param1: number, param2: string, param3: com.walletconnect.android.internal.common.model.type.ClientParams): com.walletconnect.android.internal.common.model.WCRequest;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class WCResponse {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.WCResponse>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public method: string;
              public response: com.walletconnect.android.internal.common.JsonRpcResponse;
              public params: com.walletconnect.android.internal.common.model.type.ClientParams;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              public component4(): com.walletconnect.android.internal.common.model.type.ClientParams;

              public component2(): string;

              public getMethod(): string;

              public component3(): com.walletconnect.android.internal.common.JsonRpcResponse;

              public hashCode(): number;

              public component1(): com.walletconnect.foundation.common.model.Topic;

              public toString(): string;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: com.walletconnect.android.internal.common.JsonRpcResponse, param3: com.walletconnect.android.internal.common.model.type.ClientParams);

              public getParams(): com.walletconnect.android.internal.common.model.type.ClientParams;

              public getResponse(): com.walletconnect.android.internal.common.JsonRpcResponse;

              public equals(param0: any): boolean;

              public copy(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: com.walletconnect.android.internal.common.JsonRpcResponse, param3: com.walletconnect.android.internal.common.model.type.ClientParams): com.walletconnect.android.internal.common.model.WCResponse;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export class WalletConnectUri {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.model.WalletConnectUri>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public symKey: string;
              public relay: com.walletconnect.android.internal.common.model.RelayProtocolOptions;
              public version: string;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              public getQuery(): string;

              //public getSymKey-zn44X4c(): string;
              public hashCode(): number;

              public component1(): com.walletconnect.foundation.common.model.Topic;

              public toAbsoluteString(): string;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: com.walletconnect.android.internal.common.model.RelayProtocolOptions, param3: string);

              public toString(): string;

              //	public component2-zn44X4c(): string;
              public component3(): com.walletconnect.android.internal.common.model.RelayProtocolOptions;

              public component4(): string;

              public equals(param0: any): boolean;

              public getRelay(): com.walletconnect.android.internal.common.model.RelayProtocolOptions;

              public getVersion(): string;

              //	public copy-9M3SoTY(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: com.walletconnect.android.internal.common.model.RelayProtocolOptions, param3: string): com.walletconnect.android.internal.common.model.WalletConnectUri;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class Cacao {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.Cacao>;
                public header: com.walletconnect.android.internal.common.model.params.Cacao.Header;
                public payload: com.walletconnect.android.internal.common.model.params.Cacao.Payload;
                public signature: com.walletconnect.android.internal.common.model.params.Cacao.Signature;

                public component1(): com.walletconnect.android.internal.common.model.params.Cacao.Header;

                public getHeader(): com.walletconnect.android.internal.common.model.params.Cacao.Header;

                public toString(): string;

                public component2(): com.walletconnect.android.internal.common.model.params.Cacao.Payload;

                public constructor(param0: com.walletconnect.android.internal.common.model.params.Cacao.Header, param1: com.walletconnect.android.internal.common.model.params.Cacao.Payload, param2: com.walletconnect.android.internal.common.model.params.Cacao.Signature);

                public equals(param0: any): boolean;

                public getSignature(): com.walletconnect.android.internal.common.model.params.Cacao.Signature;

                public copy(param0: com.walletconnect.android.internal.common.model.params.Cacao.Header, param1: com.walletconnect.android.internal.common.model.params.Cacao.Payload, param2: com.walletconnect.android.internal.common.model.params.Cacao.Signature): com.walletconnect.android.internal.common.model.params.Cacao;

                public getPayload(): com.walletconnect.android.internal.common.model.params.Cacao.Payload;

                public component3(): com.walletconnect.android.internal.common.model.params.Cacao.Signature;

                public hashCode(): number;
              }

              export module Cacao {
                export class Header {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.Cacao.Header>;
                  public t: string;

                  public constructor(param0: string);

                  public hashCode(): number;

                  public getT(): string;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public component1(): string;

                  public copy(param0: string): com.walletconnect.android.internal.common.model.params.Cacao.Header;
                }

                export class Payload {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.Cacao.Payload>;
                  public iss: string;
                  public domain: string;
                  public aud: string;
                  public version: string;
                  public nonce: string;
                  public iat: string;
                  public nbf: string;
                  public exp: string;
                  public statement: string;
                  public requestId: string;
                  public resources: java.util.List<string>;

                  public getAud(): string;

                  public getRequestId(): string;

                  public component7(): string;

                  public getIss(): string;

                  public getIat(): string;

                  public component3(): string;

                  public component1(): string;

                  public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.util.List<string>);

                  public component6(): string;

                  public component10(): string;

                  public getNonce(): string;

                  public getNbf(): string;

                  public getDomain(): string;

                  public component2(): string;

                  public component11(): java.util.List<string>;

                  public hashCode(): number;

                  public getExp(): string;

                  public component9(): string;

                  public equals(param0: any): boolean;

                  public component5(): string;

                  public toString(): string;

                  public getResources(): java.util.List<string>;

                  public component8(): string;

                  public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.util.List<string>): com.walletconnect.android.internal.common.model.params.Cacao.Payload;

                  public getStatement(): string;

                  public component4(): string;

                  public getVersion(): string;
                }

                export class Signature {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.Cacao.Signature>;
                  public t: string;
                  public s: string;
                  public m: string;

                  public component2(): string;

                  public copy(param0: string, param1: string, param2: string): com.walletconnect.android.internal.common.model.params.Cacao.Signature;

                  public hashCode(): number;

                  public getT(): string;

                  public getM(): string;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public constructor(param0: string, param1: string, param2: string);

                  public getS(): string;

                  public component3(): string;

                  public component1(): string;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class CacaoJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao> {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CacaoJsonAdapter>;
                public options: com.squareup.moshi.JsonReader.Options;
                public headerAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Header>;
                public payloadAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Payload>;
                public signatureAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Signature>;

                public toString(): string;

                public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.params.Cacao): void;

                public constructor(param0: com.squareup.moshi.Moshi);

                public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.params.Cacao;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class Cacao_HeaderJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Header> {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.Cacao_HeaderJsonAdapter>;
                public options: com.squareup.moshi.JsonReader.Options;
                public stringAdapter: com.squareup.moshi.JsonAdapter<string>;

                public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.params.Cacao.Header;

                public toString(): string;

                public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.params.Cacao.Header): void;

                public constructor(param0: com.squareup.moshi.Moshi);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class Cacao_PayloadJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Payload> {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.Cacao_PayloadJsonAdapter>;
                public options: com.squareup.moshi.JsonReader.Options;
                public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                public nullableStringAdapter: com.squareup.moshi.JsonAdapter<string>;
                public nullableListOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;

                public toString(): string;

                public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.params.Cacao.Payload): void;

                public constructor(param0: com.squareup.moshi.Moshi);

                public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.params.Cacao.Payload;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class Cacao_SignatureJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Signature> {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.Cacao_SignatureJsonAdapter>;
                public options: com.squareup.moshi.JsonReader.Options;
                public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                public nullableStringAdapter: com.squareup.moshi.JsonAdapter<string>;
                public constructorRef: java.lang.reflect.Constructor<com.walletconnect.android.internal.common.model.params.Cacao.Signature>;

                public toString(): string;

                public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.params.Cacao.Signature;

                public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.params.Cacao.Signature): void;

                public constructor(param0: com.squareup.moshi.Moshi);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class CoreAuthParams extends com.walletconnect.android.internal.common.model.type.ClientParams {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreAuthParams>;

                public constructor();
              }

              export module CoreAuthParams {
                export class ResponseParams extends com.walletconnect.android.internal.common.model.params.CoreAuthParams {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreAuthParams.ResponseParams>;
                  public header: com.walletconnect.android.internal.common.model.params.Cacao.Header;
                  public payload: com.walletconnect.android.internal.common.model.params.Cacao.Payload;
                  public signature: com.walletconnect.android.internal.common.model.params.Cacao.Signature;

                  public getPayload(): com.walletconnect.android.internal.common.model.params.Cacao.Payload;

                  public constructor();

                  public hashCode(): number;

                  public component1(): com.walletconnect.android.internal.common.model.params.Cacao.Header;

                  public getSignature(): com.walletconnect.android.internal.common.model.params.Cacao.Signature;

                  public getHeader(): com.walletconnect.android.internal.common.model.params.Cacao.Header;

                  public equals(param0: any): boolean;

                  public constructor(param0: com.walletconnect.android.internal.common.model.params.Cacao.Header, param1: com.walletconnect.android.internal.common.model.params.Cacao.Payload, param2: com.walletconnect.android.internal.common.model.params.Cacao.Signature);

                  public toString(): string;

                  public copy(param0: com.walletconnect.android.internal.common.model.params.Cacao.Header, param1: com.walletconnect.android.internal.common.model.params.Cacao.Payload, param2: com.walletconnect.android.internal.common.model.params.Cacao.Signature): com.walletconnect.android.internal.common.model.params.CoreAuthParams.ResponseParams;

                  public component2(): com.walletconnect.android.internal.common.model.params.Cacao.Payload;

                  public component3(): com.walletconnect.android.internal.common.model.params.Cacao.Signature;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class CoreAuthParams_ResponseParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.CoreAuthParams.ResponseParams> {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreAuthParams_ResponseParamsJsonAdapter>;
                public options: com.squareup.moshi.JsonReader.Options;
                public headerAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Header>;
                public payloadAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Payload>;
                public signatureAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.Cacao.Signature>;

                public toString(): string;

                public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.params.CoreAuthParams.ResponseParams): void;

                public constructor(param0: com.squareup.moshi.Moshi);

                public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.params.CoreAuthParams.ResponseParams;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class CoreChatParams extends com.walletconnect.android.internal.common.model.type.ClientParams {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreChatParams>;

                public constructor();
              }

              export module CoreChatParams {
                export class AcceptanceParams extends com.walletconnect.android.internal.common.model.params.CoreChatParams {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreChatParams.AcceptanceParams>;
                  public publicKey: string;

                  public constructor();
                  public constructor(param0: string);

                  public getPublicKey(): string;

                  public hashCode(): number;

                  public equals(param0: any): boolean;

                  public copy(param0: string): com.walletconnect.android.internal.common.model.params.CoreChatParams.AcceptanceParams;

                  public toString(): string;

                  public component1(): string;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class CoreChatParams_AcceptanceParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.CoreChatParams.AcceptanceParams> {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreChatParams_AcceptanceParamsJsonAdapter>;
                public options: com.squareup.moshi.JsonReader.Options;
                public stringAdapter: com.squareup.moshi.JsonAdapter<string>;

                public toString(): string;

                public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.params.CoreChatParams.AcceptanceParams): void;

                public constructor(param0: com.squareup.moshi.Moshi);

                public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.params.CoreChatParams.AcceptanceParams;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class CoreSignParams extends com.walletconnect.android.internal.common.model.type.ClientParams {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreSignParams>;

                public constructor();
              }

              export module CoreSignParams {
                export class ApprovalParams extends com.walletconnect.android.internal.common.model.params.CoreSignParams {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreSignParams.ApprovalParams>;
                  public relay: com.walletconnect.android.internal.common.model.RelayProtocolOptions;
                  public responderPublicKey: string;

                  public constructor(param0: com.walletconnect.android.internal.common.model.RelayProtocolOptions, param1: string);

                  public component2(): string;

                  public constructor();

                  public hashCode(): number;

                  public copy(param0: com.walletconnect.android.internal.common.model.RelayProtocolOptions, param1: string): com.walletconnect.android.internal.common.model.params.CoreSignParams.ApprovalParams;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public component1(): com.walletconnect.android.internal.common.model.RelayProtocolOptions;

                  public getResponderPublicKey(): string;

                  public getRelay(): com.walletconnect.android.internal.common.model.RelayProtocolOptions;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module params {
              export class CoreSignParams_ApprovalParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.params.CoreSignParams.ApprovalParams> {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.params.CoreSignParams_ApprovalParamsJsonAdapter>;
                public options: com.squareup.moshi.JsonReader.Options;
                public relayProtocolOptionsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.RelayProtocolOptions>;
                public stringAdapter: com.squareup.moshi.JsonAdapter<string>;

                public toString(): string;

                public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.params.CoreSignParams.ApprovalParams): void;

                public constructor(param0: com.squareup.moshi.Moshi);

                public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.params.CoreSignParams.ApprovalParams;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module sync {
              export class ClientJsonRpc {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.sync.ClientJsonRpc>;
                public id: number;
                public jsonrpc: string;
                public method: string;

                public getId(): number;

                public toString(): string;

                public constructor(param0: number, param1: string, param2: string);

                public getMethod(): string;

                public component1(): number;

                public copy(param0: number, param1: string, param2: string): com.walletconnect.android.internal.common.model.sync.ClientJsonRpc;

                public equals(param0: any): boolean;

                public getJsonrpc(): string;

                public component2(): string;

                public component3(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module sync {
              export class ClientJsonRpcJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.sync.ClientJsonRpc> {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.sync.ClientJsonRpcJsonAdapter>;
                public options: com.squareup.moshi.JsonReader.Options;
                public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                public stringAdapter: com.squareup.moshi.JsonAdapter<string>;

                public toString(): string;

                public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.internal.common.model.sync.ClientJsonRpc;

                public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.internal.common.model.sync.ClientJsonRpc): void;

                public constructor(param0: com.squareup.moshi.Moshi);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module type {
              export class ClientParams extends com.walletconnect.android.internal.common.model.type.SerializableJsonRpc {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.type.ClientParams>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.model.type.ClientParams interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module type {
              export class EngineEvent {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.type.EngineEvent>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.model.type.EngineEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module type {
              export class Error {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.type.Error>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.model.type.Error interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getMessage(): string;
                  getCode(): number;
                });
                public constructor();

                public getMessage(): string;

                public getCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module type {
              export class JsonRpcClientSync<T> extends com.walletconnect.android.internal.common.model.type.SerializableJsonRpc {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.type.JsonRpcClientSync<any>>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.model.type.JsonRpcClientSync<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getId(): number;
                  getMethod(): string;
                  getJsonrpc(): string;
                  getParams(): any;
                });
                public constructor();

                public getId(): number;

                public getMethod(): string;

                public getParams(): any;

                public getJsonrpc(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module type {
              export class JsonRpcInteractorInterface {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getClientSyncJsonRpc(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.WCRequest>;
                  getPeerResponse(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.WCResponse>;
                  isConnectionAvailable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
                  getInternalErrors(): kotlinx.coroutines.flow.SharedFlow<java.lang.InternalError>;
                  checkConnectionWorking(): void;
                  subscribe(param0: com.walletconnect.foundation.common.model.Topic, param1: kotlin.jvm.functions.Function1<any>): void;
                  unsubscribe(param0: com.walletconnect.foundation.common.model.Topic, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;
                  publishJsonRpcRequest(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.model.type.JsonRpcClientSync<any>, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: any, param6: kotlin.jvm.functions.Function1<any>): void;
                  publishJsonRpcResponse(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.JsonRpcResponse, param3: any, param4: kotlin.jvm.functions.Function1<any>, param5: com.walletconnect.android.internal.common.model.Participants, param6: com.walletconnect.android.internal.common.model.EnvelopeType): void;
                  respondWithParams(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.type.ClientParams, param2: com.walletconnect.android.internal.common.model.IrnParams, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: kotlin.jvm.functions.Function1<any>): void;
                  respondWithSuccess(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.model.EnvelopeType, param3: com.walletconnect.android.internal.common.model.Participants): void;
                  respondWithError(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.type.Error, param2: com.walletconnect.android.internal.common.model.IrnParams, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: kotlin.jvm.functions.Function1<any>): void;
                });
                public constructor();

                public getInternalErrors(): kotlinx.coroutines.flow.SharedFlow<java.lang.InternalError>;

                public isConnectionAvailable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;

                public subscribe(param0: com.walletconnect.foundation.common.model.Topic, param1: kotlin.jvm.functions.Function1<any>): void;

                public publishJsonRpcRequest(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.model.type.JsonRpcClientSync<any>, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: any, param6: kotlin.jvm.functions.Function1<any>): void;

                public getClientSyncJsonRpc(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.WCRequest>;

                public getPeerResponse(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.WCResponse>;

                public respondWithParams(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.type.ClientParams, param2: com.walletconnect.android.internal.common.model.IrnParams, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: kotlin.jvm.functions.Function1<any>): void;

                public respondWithError(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.type.Error, param2: com.walletconnect.android.internal.common.model.IrnParams, param3: com.walletconnect.android.internal.common.model.EnvelopeType, param4: com.walletconnect.android.internal.common.model.Participants, param5: kotlin.jvm.functions.Function1<any>): void;

                public checkConnectionWorking(): void;

                public publishJsonRpcResponse(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.JsonRpcResponse, param3: any, param4: kotlin.jvm.functions.Function1<any>, param5: com.walletconnect.android.internal.common.model.Participants, param6: com.walletconnect.android.internal.common.model.EnvelopeType): void;

                public respondWithSuccess(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.internal.common.model.IrnParams, param2: com.walletconnect.android.internal.common.model.EnvelopeType, param3: com.walletconnect.android.internal.common.model.Participants): void;

                public unsubscribe(param0: com.walletconnect.foundation.common.model.Topic, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;
              }

              export module JsonRpcInteractorInterface {
                export class DefaultImpls {
                  public static class: java.lang.Class<com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface.DefaultImpls>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module type {
              export class Sequence {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.type.Sequence>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.model.type.Sequence interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getTopic(): com.walletconnect.foundation.common.model.Topic;
                  getExpiry(): com.walletconnect.android.internal.common.model.Expiry;
                });
                public constructor();

                public getExpiry(): com.walletconnect.android.internal.common.model.Expiry;

                public getTopic(): com.walletconnect.foundation.common.model.Topic;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module model {
            export module type {
              export class SerializableJsonRpc {
                public static class: java.lang.Class<com.walletconnect.android.internal.common.model.type.SerializableJsonRpc>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.internal.common.model.type.SerializableJsonRpc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module storage {
            export class JsonRpcHistory {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.storage.JsonRpcHistory>;
              public jsonRpcHistoryQueries: com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryQueries;
              public logger: com.walletconnect.foundation.util.Logger;

              public setRequest(param0: number, param1: com.walletconnect.foundation.common.model.Topic, param2: string, param3: string): boolean;

              public getListOfPendingRecords(): java.util.List<com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord>;

              public constructor(param0: com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryQueries, param1: com.walletconnect.foundation.util.Logger);

              public updateRequestWithResponse(param0: number, param1: string): com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord;

              public getPendingRecordById(param0: number): com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord;

              public deleteRecordsByTopic(param0: com.walletconnect.foundation.common.model.Topic): void;

              public getListOfPendingRecordsByTopic(param0: com.walletconnect.foundation.common.model.Topic): java.util.List<com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord>;

              public getRecordById(param0: number): com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord;

              public updateRecord(param0: com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord, param1: number, param2: string): com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord;

              public toRecord(param0: number, param1: string, param2: string, param3: string, param4: string): com.walletconnect.android.internal.common.json_rpc.model.JsonRpcHistoryRecord;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module storage {
            export class KeyChain extends com.walletconnect.android.internal.common.storage.KeyStore {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.storage.KeyChain>;
              public sharedPreferences: globalAndroid.content.SharedPreferences;

              public setKey(param0: string, param1: com.walletconnect.foundation.common.model.Key): void;

              public setKeys(param0: string, param1: com.walletconnect.foundation.common.model.Key, param2: com.walletconnect.foundation.common.model.Key): void;

              public checkKeys(param0: string): boolean;

              public concatKeys(param0: com.walletconnect.foundation.common.model.Key, param1: com.walletconnect.foundation.common.model.Key): string;

              public getKeys(param0: string): java.util.Pair<string, string>;

              public deleteKeys(param0: string): void;

              public splitKeys(param0: string): java.util.Pair<string, string>;

              public constructor(param0: globalAndroid.content.SharedPreferences);

              public getKey(param0: string): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module storage {
            export class KeyStore {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.storage.KeyStore>;

              /**
               * Constructs a new instance of the com.walletconnect.android.internal.common.storage.KeyStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getKey(param0: string): string;
                setKey(param0: string, param1: com.walletconnect.foundation.common.model.Key): void;
                getKeys(param0: string): java.util.Pair<string, string>;
                setKeys(param0: string, param1: com.walletconnect.foundation.common.model.Key, param2: com.walletconnect.foundation.common.model.Key): void;
                deleteKeys(param0: string): void;
                checkKeys(param0: string): boolean;
              });
              public constructor();

              public setKey(param0: string, param1: com.walletconnect.foundation.common.model.Key): void;

              public setKeys(param0: string, param1: com.walletconnect.foundation.common.model.Key, param2: com.walletconnect.foundation.common.model.Key): void;

              public checkKeys(param0: string): boolean;

              public getKeys(param0: string): java.util.Pair<string, string>;

              public deleteKeys(param0: string): void;

              public getKey(param0: string): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module storage {
            export class MetadataStorageRepository extends com.walletconnect.android.internal.common.storage.MetadataStorageRepositoryInterface {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.storage.MetadataStorageRepository>;
              public metaDataQueries: com.walletconnect.android.sdk.storage.data.dao.MetaDataQueries;

              public updateMetaData(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;

              public getByTopicAndType(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.walletconnect.android.internal.common.model.AppMetaData;

              public toMetadata(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: string): com.walletconnect.android.internal.common.model.AppMetaData;

              public constructor(param0: com.walletconnect.android.sdk.storage.data.dao.MetaDataQueries);

              public insertOrAbortMetadata(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;

              public deleteMetaData(param0: com.walletconnect.foundation.common.model.Topic): void;

              public existsByTopicAndType(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): boolean;

              public upsertPairingPeerMetadata(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module storage {
            export class MetadataStorageRepositoryInterface {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.storage.MetadataStorageRepositoryInterface>;

              /**
               * Constructs a new instance of the com.walletconnect.android.internal.common.storage.MetadataStorageRepositoryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                insertOrAbortMetadata(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;
                updateMetaData(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;
                deleteMetaData(param0: com.walletconnect.foundation.common.model.Topic): void;
                existsByTopicAndType(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): boolean;
                getByTopicAndType(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.walletconnect.android.internal.common.model.AppMetaData;
                upsertPairingPeerMetadata(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;
              });
              public constructor();

              public updateMetaData(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;

              public getByTopicAndType(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.walletconnect.android.internal.common.model.AppMetaData;

              public insertOrAbortMetadata(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;

              public deleteMetaData(param0: com.walletconnect.foundation.common.model.Topic): void;

              public existsByTopicAndType(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): boolean;

              public upsertPairingPeerMetadata(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module storage {
            export class PairingStorageRepository extends com.walletconnect.android.internal.common.storage.PairingStorageRepositoryInterface {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.storage.PairingStorageRepository>;
              public pairingQueries: com.walletconnect.android.sdk.storage.data.dao.PairingQueries;

              public hasTopic(param0: com.walletconnect.foundation.common.model.Topic): boolean;

              public updateExpiry(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry): void;

              public toPairing(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean, param7: string, param8: string, param9: string, param10: java.util.List<string>, param11: string): com.walletconnect.android.internal.common.model.Pairing;

              public insertPairing(param0: com.walletconnect.android.internal.common.model.Pairing): void;

              public deletePairing(param0: com.walletconnect.foundation.common.model.Topic): void;

              public getListOfPairings(): java.util.List<com.walletconnect.android.internal.common.model.Pairing>;

              public activatePairing(param0: com.walletconnect.foundation.common.model.Topic): void;

              public constructor(param0: com.walletconnect.android.sdk.storage.data.dao.PairingQueries);

              public getPairingOrNullByTopic(param0: com.walletconnect.foundation.common.model.Topic): com.walletconnect.android.internal.common.model.Pairing;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module common {
          export module storage {
            export class PairingStorageRepositoryInterface {
              public static class: java.lang.Class<com.walletconnect.android.internal.common.storage.PairingStorageRepositoryInterface>;

              /**
               * Constructs a new instance of the com.walletconnect.android.internal.common.storage.PairingStorageRepositoryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                insertPairing(param0: com.walletconnect.android.internal.common.model.Pairing): void;
                deletePairing(param0: com.walletconnect.foundation.common.model.Topic): void;
                hasTopic(param0: com.walletconnect.foundation.common.model.Topic): boolean;
                getListOfPairings(): java.util.List<com.walletconnect.android.internal.common.model.Pairing>;
                activatePairing(param0: com.walletconnect.foundation.common.model.Topic): void;
                updateExpiry(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry): void;
                getPairingOrNullByTopic(param0: com.walletconnect.foundation.common.model.Topic): com.walletconnect.android.internal.common.model.Pairing;
              });
              public constructor();

              public hasTopic(param0: com.walletconnect.foundation.common.model.Topic): boolean;

              public updateExpiry(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry): void;

              public insertPairing(param0: com.walletconnect.android.internal.common.model.Pairing): void;

              public deletePairing(param0: com.walletconnect.foundation.common.model.Topic): void;

              public getListOfPairings(): java.util.List<com.walletconnect.android.internal.common.model.Pairing>;

              public activatePairing(param0: com.walletconnect.foundation.common.model.Topic): void;

              public getPairingOrNullByTopic(param0: com.walletconnect.foundation.common.model.Topic): com.walletconnect.android.internal.common.model.Pairing;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module utils {
          export class CoreValidator {
            public static class: java.lang.Class<com.walletconnect.android.internal.utils.CoreValidator>;
            public static INSTANCE: com.walletconnect.android.internal.utils.CoreValidator;
            public static NAMESPACE_REGEX: string;
            public static REFERENCE_REGEX: string;
            public static ACCOUNT_ADDRESS_REGEX: string;

            public constructor();

            public static<clinit>(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module utils {
          export class Expiration {
            public static class: java.lang.Class<com.walletconnect.android.internal.utils.Expiration>;
            public static INACTIVE_PAIRING: number;
            public static ACTIVE_PAIRING: number;
            public static ACTIVE_SESSION: number;

            public static getACTIVE_SESSION(): number;

            public static getINACTIVE_PAIRING(): number;

            public static getACTIVE_PAIRING(): number;

            public static<clinit>(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module internal {
        export module utils {
          export class Time {
            public static class: java.lang.Class<com.walletconnect.android.internal.utils.Time>;
            public static CURRENT_TIME_IN_SECONDS: number;
            public static THIRTY_SECONDS: number;
            public static FIVE_MINUTES_IN_SECONDS: number;
            public static DAY_IN_SECONDS: number;
            public static WEEK_IN_SECONDS: number;
            public static MONTH_IN_SECONDS: number;

            public static getCURRENT_TIME_IN_SECONDS(): number;

            public static getMONTH_IN_SECONDS(): number;

            public static getDAY_IN_SECONDS(): number;

            public static getWEEK_IN_SECONDS(): number;

            public static<clinit>(): void;

            public static getTHIRTY_SECONDS(): number;

            public static getFIVE_MINUTES_IN_SECONDS(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module client {
          export class PairingInterface {
            public static class: java.lang.Class<com.walletconnect.android.pairing.client.PairingInterface>;

            /**
             * Constructs a new instance of the com.walletconnect.android.pairing.client.PairingInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              create(param0: kotlin.jvm.functions.Function1<any>): com.walletconnect.android.Core.Model.Pairing;
              pair(param0: com.walletconnect.android.Core.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;
              disconnect(param0: string, param1: kotlin.jvm.functions.Function1<any>): void;
              disconnect(param0: com.walletconnect.android.Core.Params.Disconnect, param1: kotlin.jvm.functions.Function1<any>): void;
              ping(param0: com.walletconnect.android.Core.Params.Ping, param1: com.walletconnect.android.Core.Listeners.PairingPing): void;
              getPairings(): java.util.List<com.walletconnect.android.Core.Model.Pairing>;
            });
            public constructor();

            public pair(param0: com.walletconnect.android.Core.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;

            public create(param0: kotlin.jvm.functions.Function1<any>): com.walletconnect.android.Core.Model.Pairing;

            /** @deprecated */
            public disconnect(param0: string, param1: kotlin.jvm.functions.Function1<any>): void;

            public ping(param0: com.walletconnect.android.Core.Params.Ping, param1: com.walletconnect.android.Core.Listeners.PairingPing): void;

            public disconnect(param0: com.walletconnect.android.Core.Params.Disconnect, param1: kotlin.jvm.functions.Function1<any>): void;

            public getPairings(): java.util.List<com.walletconnect.android.Core.Model.Pairing>;
          }

          export module PairingInterface {
            export class DefaultImpls {
              public static class: java.lang.Class<com.walletconnect.android.pairing.client.PairingInterface.DefaultImpls>;
            }

            export class Delegate {
              public static class: java.lang.Class<com.walletconnect.android.pairing.client.PairingInterface.Delegate>;

              /**
               * Constructs a new instance of the com.walletconnect.android.pairing.client.PairingInterface$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onPairingDelete(param0: com.walletconnect.android.Core.Model.DeletedPairing): void;
              });
              public constructor();

              public onPairingDelete(param0: com.walletconnect.android.Core.Model.DeletedPairing): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module client {
          export class PairingProtocol extends com.walletconnect.android.pairing.client.PairingInterface {
            public static class: java.lang.Class<com.walletconnect.android.pairing.client.PairingProtocol>;
            public static INSTANCE: com.walletconnect.android.pairing.client.PairingProtocol;
            public static pairingEngine: com.walletconnect.android.pairing.engine.domain.PairingEngine;
            public static logger$delegate: any;

            public pair(param0: com.walletconnect.android.Core.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;

            public constructor();

            public disconnect(param0: string, param1: kotlin.jvm.functions.Function1<any>): void;

            public create(param0: kotlin.jvm.functions.Function1<any>): com.walletconnect.android.Core.Model.Pairing;

            public setDelegate(param0: com.walletconnect.android.pairing.client.PairingInterface.Delegate): void;

            public static<clinit>(): void;

            public checkEngineInitialization(): void;

            public disconnect(param0: com.walletconnect.android.Core.Params.Disconnect, param1: kotlin.jvm.functions.Function1<any>): void;

            public getPairings(): java.util.List<com.walletconnect.android.Core.Model.Pairing>;

            public awaitConnection(param0: any, param1: kotlin.jvm.functions.Function1<any>, param2: any): any;

            public initialize$sdk_release(): void;

            public getLogger(): com.walletconnect.foundation.util.Logger;

            /** @deprecated */
            public disconnect(param0: string, param1: kotlin.jvm.functions.Function1<any>): void;

            public ping(param0: com.walletconnect.android.Core.Params.Ping, param1: com.walletconnect.android.Core.Listeners.PairingPing): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module engine {
          export module domain {
            export class PairingEngine {
              public static class: java.lang.Class<com.walletconnect.android.pairing.engine.domain.PairingEngine>;
              public logger: com.walletconnect.foundation.util.Logger;
              public selfMetaData: com.walletconnect.android.internal.common.model.AppMetaData;
              public metadataRepository: com.walletconnect.android.internal.common.storage.MetadataStorageRepositoryInterface;
              public crypto: com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository;
              public jsonRpcInteractor: com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface;
              public pairingRepository: com.walletconnect.android.internal.common.storage.PairingStorageRepositoryInterface;
              public jsonRpcRequestsJob: kotlinx.coroutines.Job;
              public setOfRegisteredMethods: java.util.Set<string>;
              public _topicExpiredFlow: kotlinx.coroutines.flow.MutableSharedFlow<com.walletconnect.foundation.common.model.Topic>;
              public topicExpiredFlow: kotlinx.coroutines.flow.SharedFlow<com.walletconnect.foundation.common.model.Topic>;
              public _engineEvent: kotlinx.coroutines.flow.MutableSharedFlow<com.walletconnect.android.pairing.engine.model.EngineDO>;
              public engineEvent: kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.pairing.engine.model.EngineDO>;
              public internalErrorFlow: kotlinx.coroutines.flow.MutableSharedFlow<java.lang.InternalError>;
              public jsonRpcErrorFlow$delegate: any;

              public getJsonRpcErrorFlow(): kotlinx.coroutines.flow.Flow<java.lang.InternalError>;

              public updateMetadata(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.model.AppMetaDataType): void;

              public isValid(param0: com.walletconnect.android.internal.common.model.Pairing): boolean;

              public constructor(param0: com.walletconnect.foundation.util.Logger, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: com.walletconnect.android.internal.common.storage.MetadataStorageRepositoryInterface, param3: com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository, param4: com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface, param5: com.walletconnect.android.internal.common.storage.PairingStorageRepositoryInterface);

              public getEngineEvent(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.pairing.engine.model.EngineDO>;

              public activate(param0: string, param1: kotlin.jvm.functions.Function1<any>): void;

              public updateExpiry(param0: string, param1: com.walletconnect.android.internal.common.model.Expiry, param2: kotlin.jvm.functions.Function1<any>): void;

              public create(param0: kotlin.jvm.functions.Function1<any>): com.walletconnect.android.Core.Model.Pairing;

              public resubscribeToPairingFlow(): void;

              public onPairingDelete(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.android.pairing.model.PairingParams.DeleteParams, param2: any): any;

              public isPairingValid(param0: string): boolean;

              public generateTopic(): com.walletconnect.foundation.common.model.Topic;

              public disconnect(param0: string, param1: kotlin.jvm.functions.Function1<any>): void;

              public ping(param0: string, param1: kotlin.jvm.functions.Function1<any>, param2: kotlin.jvm.functions.Function1<any>): void;

              public register(param0: androidNative.Array<string>): void;

              public getPairings(): java.util.List<com.walletconnect.android.internal.common.model.Pairing>;

              public collectJsonRpcRequestsFlow(): kotlinx.coroutines.Job;

              public onPing(param0: com.walletconnect.android.internal.common.model.WCRequest): void;

              public getInternalErrorFlow(): kotlinx.coroutines.flow.MutableSharedFlow<java.lang.InternalError>;

              public getRegisteredMethods(): string;

              public onPingSuccess(param0: com.walletconnect.android.pairing.model.PairingRpc.PairingPing, param1: kotlin.jvm.functions.Function1<any>, param2: string, param3: kotlin.jvm.functions.Function1<any>): void;

              public getTopicExpiredFlow(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.foundation.common.model.Topic>;

              public pair(param0: string, param1: kotlin.jvm.functions.Function1<any>): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module engine {
          export module model {
            export abstract class EngineDO {
              public static class: java.lang.Class<com.walletconnect.android.pairing.engine.model.EngineDO>;

              public constructor();
            }

            export module EngineDO {
              export class PairingDelete extends com.walletconnect.android.pairing.engine.model.EngineDO {
                public static class: java.lang.Class<com.walletconnect.android.pairing.engine.model.EngineDO.PairingDelete>;
                public topic: string;
                public reason: string;

                public component1(): string;

                public toString(): string;

                public constructor(param0: string, param1: string);

                public getReason(): string;

                public equals(param0: any): boolean;

                public getTopic(): string;

                public constructor();

                public copy(param0: string, param1: string): com.walletconnect.android.pairing.engine.model.EngineDO.PairingDelete;

                public component2(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module handler {
          export class PairingController extends com.walletconnect.android.pairing.handler.PairingControllerInterface {
            public static class: java.lang.Class<com.walletconnect.android.pairing.handler.PairingController>;
            public static INSTANCE: com.walletconnect.android.pairing.handler.PairingController;
            public static pairingEngine: com.walletconnect.android.pairing.engine.domain.PairingEngine;
            public static topicExpiredFlow$delegate: any;
            public static findWrongMethodsFlow$delegate: any;

            public constructor();

            public getFindWrongMethodsFlow(): kotlinx.coroutines.flow.Flow<java.lang.InternalError>;

            public activate(param0: com.walletconnect.android.Core.Params.Activate, param1: kotlin.jvm.functions.Function1<any>): void;

            public register(param0: androidNative.Array<string>): void;

            public updateMetadata(param0: com.walletconnect.android.Core.Params.UpdateMetadata, param1: kotlin.jvm.functions.Function1<any>): void;

            public updateExpiry(param0: com.walletconnect.android.Core.Params.UpdateExpiry, param1: kotlin.jvm.functions.Function1<any>): void;

            public static<clinit>(): void;

            public checkEngineInitialization(): void;

            public getTopicExpiredFlow(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.foundation.common.model.Topic>;

            public initialize$sdk_release(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module handler {
          export class PairingControllerInterface {
            public static class: java.lang.Class<com.walletconnect.android.pairing.handler.PairingControllerInterface>;

            /**
             * Constructs a new instance of the com.walletconnect.android.pairing.handler.PairingControllerInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              getTopicExpiredFlow(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.foundation.common.model.Topic>;
              getFindWrongMethodsFlow(): kotlinx.coroutines.flow.Flow<java.lang.InternalError>;
              activate(param0: com.walletconnect.android.Core.Params.Activate, param1: kotlin.jvm.functions.Function1<any>): void;
              updateExpiry(param0: com.walletconnect.android.Core.Params.UpdateExpiry, param1: kotlin.jvm.functions.Function1<any>): void;
              updateMetadata(param0: com.walletconnect.android.Core.Params.UpdateMetadata, param1: kotlin.jvm.functions.Function1<any>): void;
              register(param0: androidNative.Array<string>): void;
            });
            public constructor();

            public getFindWrongMethodsFlow(): kotlinx.coroutines.flow.Flow<java.lang.InternalError>;

            public activate(param0: com.walletconnect.android.Core.Params.Activate, param1: kotlin.jvm.functions.Function1<any>): void;

            public register(param0: androidNative.Array<string>): void;

            public updateMetadata(param0: com.walletconnect.android.Core.Params.UpdateMetadata, param1: kotlin.jvm.functions.Function1<any>): void;

            public updateExpiry(param0: com.walletconnect.android.Core.Params.UpdateExpiry, param1: kotlin.jvm.functions.Function1<any>): void;

            public getTopicExpiredFlow(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.foundation.common.model.Topic>;
          }

          export module PairingControllerInterface {
            export class DefaultImpls {
              public static class: java.lang.Class<com.walletconnect.android.pairing.handler.PairingControllerInterface.DefaultImpls>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module model {
          export class Expiration {
            public static class: java.lang.Class<com.walletconnect.android.pairing.model.Expiration>;
            public static INACTIVE_PAIRING: number;
            public static ACTIVE_PAIRING: number;

            public static getINACTIVE_PAIRING(): number;

            public static getACTIVE_PAIRING(): number;

            public static<clinit>(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module model {
          export class PairingJsonRpcMethod {
            public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingJsonRpcMethod>;
            public static INSTANCE: com.walletconnect.android.pairing.model.PairingJsonRpcMethod;

            public constructor();

            public static<clinit>(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module model {
          export abstract class PairingParams extends com.walletconnect.android.internal.common.model.type.ClientParams {
            public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingParams>;
          }

          export module PairingParams {
            export class DeleteParams extends com.walletconnect.android.pairing.model.PairingParams {
              public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingParams.DeleteParams>;
              public code: number;
              public message: string;

              public getCode(): number;

              public getMessage(): string;

              public constructor(param0: number, param1: string);
            }

            export class PingParams extends com.walletconnect.android.pairing.model.PairingParams {
              public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingParams.PingParams>;

              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module model {
          export class PairingParams_DeleteParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.pairing.model.PairingParams.DeleteParams> {
            public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingParams_DeleteParamsJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public intAdapter: com.squareup.moshi.JsonAdapter<java.lang.Integer>;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public constructorRef: java.lang.reflect.Constructor<com.walletconnect.android.pairing.model.PairingParams.DeleteParams>;

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.pairing.model.PairingParams.DeleteParams): void;

            public constructor(param0: com.squareup.moshi.Moshi);

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.pairing.model.PairingParams.DeleteParams;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module model {
          export abstract class PairingRpc extends com.walletconnect.android.internal.common.model.type.JsonRpcClientSync<com.walletconnect.android.pairing.model.PairingParams> {
            public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingRpc>;

            public getJsonrpc(): string;

            public getParams(): com.walletconnect.android.pairing.model.PairingParams;

            public getMethod(): string;

            public getParams(): any;

            public getId(): number;
          }

          export module PairingRpc {
            export class PairingDelete extends com.walletconnect.android.pairing.model.PairingRpc {
              public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingRpc.PairingDelete>;
              public id: number;
              public jsonrpc: string;
              public method: string;
              public params: com.walletconnect.android.pairing.model.PairingParams.DeleteParams;

              public getJsonrpc(): string;

              public component2(): string;

              public getMethod(): string;

              public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.android.pairing.model.PairingParams.DeleteParams): com.walletconnect.android.pairing.model.PairingRpc.PairingDelete;

              public getParams(): com.walletconnect.android.pairing.model.PairingParams.DeleteParams;

              public hashCode(): number;

              public toString(): string;

              public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.android.pairing.model.PairingParams.DeleteParams);

              public component3(): string;

              public component4(): com.walletconnect.android.pairing.model.PairingParams.DeleteParams;

              public component1(): number;

              public getParams(): any;

              public getId(): number;

              public equals(param0: any): boolean;

              public getParams(): com.walletconnect.android.pairing.model.PairingParams;
            }

            export class PairingPing extends com.walletconnect.android.pairing.model.PairingRpc {
              public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingRpc.PairingPing>;
              public id: number;
              public jsonrpc: string;
              public method: string;
              public params: com.walletconnect.android.pairing.model.PairingParams.PingParams;

              public getJsonrpc(): string;

              public component2(): string;

              public getMethod(): string;

              public hashCode(): number;

              public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.android.pairing.model.PairingParams.PingParams);

              public toString(): string;

              public component3(): string;

              public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.android.pairing.model.PairingParams.PingParams): com.walletconnect.android.pairing.model.PairingRpc.PairingPing;

              public component1(): number;

              public getParams(): any;

              public getId(): number;

              public getParams(): com.walletconnect.android.pairing.model.PairingParams.PingParams;

              public equals(param0: any): boolean;

              public component4(): com.walletconnect.android.pairing.model.PairingParams.PingParams;

              public getParams(): com.walletconnect.android.pairing.model.PairingParams;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module model {
          export class PairingRpc_PairingDeleteJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.pairing.model.PairingRpc.PairingDelete> {
            public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingRpc_PairingDeleteJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public deleteParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.pairing.model.PairingParams.DeleteParams>;
            public constructorRef: java.lang.reflect.Constructor<com.walletconnect.android.pairing.model.PairingRpc.PairingDelete>;

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.pairing.model.PairingRpc.PairingDelete;

            public constructor(param0: com.squareup.moshi.Moshi);

            public toString(): string;

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.pairing.model.PairingRpc.PairingDelete): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module pairing {
        export module model {
          export class PairingRpc_PairingPingJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.android.pairing.model.PairingRpc.PairingPing> {
            public static class: java.lang.Class<com.walletconnect.android.pairing.model.PairingRpc_PairingPingJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public pingParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.pairing.model.PairingParams.PingParams>;
            public constructorRef: java.lang.reflect.Constructor<com.walletconnect.android.pairing.model.PairingRpc.PairingPing>;

            public constructor(param0: com.squareup.moshi.Moshi);

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.android.pairing.model.PairingRpc.PairingPing): void;

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.android.pairing.model.PairingRpc.PairingPing;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module relay {
        export class ConnectionType {
          public static class: java.lang.Class<com.walletconnect.android.relay.ConnectionType>;
          public static AUTOMATIC: com.walletconnect.android.relay.ConnectionType;
          public static MANUAL: com.walletconnect.android.relay.ConnectionType;

          public static valueOf(param0: string): com.walletconnect.android.relay.ConnectionType;

          public constructor(param0: string, param1: number);

          public static<clinit>(): void;

          public static values(): androidNative.Array<com.walletconnect.android.relay.ConnectionType>;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module relay {
        export class RelayClient implements com.walletconnect.android.relay.RelayConnectionInterface {
          public static class: java.lang.Class<com.walletconnect.android.relay.RelayClient>;
          public static INSTANCE: com.walletconnect.android.relay.RelayClient;
          public static connectionController$delegate: any;
          public static networkState$delegate: any;
          public static isNetworkAvailable$delegate: any;
          public static isWSSConnectionOpened: kotlinx.coroutines.flow.MutableStateFlow<java.lang.Boolean>;
          public static isConnectionAvailable$delegate: any;

          public getNetworkState(): com.walletconnect.android.internal.common.connection.ConnectivityState;

          public collectConnectionErrors(param0: kotlin.jvm.functions.Function1<any>): void;

          public connect(param0: kotlin.jvm.functions.Function1<any>): void;

          public setIsWSSConnectionOpened(param0: com.walletconnect.foundation.network.model.Relay.Model.Event): void;

          public disconnect(param0: kotlin.jvm.functions.Function1<any>): void;

          public constructor();

          public isConnectionAvailable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;

          public isNetworkAvailable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;

          public static<clinit>(): void;

          public getConnectionController(): com.walletconnect.foundation.network.data.ConnectionController;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module relay {
        export class RelayConnectionInterface {
          public static class: java.lang.Class<com.walletconnect.android.relay.RelayConnectionInterface>;

          /**
           * Constructs a new instance of the com.walletconnect.android.relay.RelayConnectionInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            isConnectionAvailable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
            connect(param0: kotlin.jvm.functions.Function1<any>): void;
            disconnect(param0: kotlin.jvm.functions.Function1<any>): void;
          });
          public constructor();

          public connect(param0: kotlin.jvm.functions.Function1<any>): void;

          public disconnect(param0: kotlin.jvm.functions.Function1<any>): void;

          public isConnectionAvailable(): kotlinx.coroutines.flow.StateFlow<java.lang.Boolean>;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module core {
          export class AndroidCoreDatabase {
            public static class: java.lang.Class<com.walletconnect.android.sdk.core.AndroidCoreDatabase>;

            /**
             * Constructs a new instance of the com.walletconnect.android.sdk.core.AndroidCoreDatabase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              <clinit>(): void;
              getJsonRpcHistoryQueries(): com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryQueries;
              getMetaDataQueries(): com.walletconnect.android.sdk.storage.data.dao.MetaDataQueries;
              getPairingQueries(): com.walletconnect.android.sdk.storage.data.dao.PairingQueries;
            });
            public constructor();

            public getJsonRpcHistoryQueries(): com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryQueries;

            public getMetaDataQueries(): com.walletconnect.android.sdk.storage.data.dao.MetaDataQueries;

            public getPairingQueries(): com.walletconnect.android.sdk.storage.data.dao.PairingQueries;
          }

          export module AndroidCoreDatabase {
            export class Companion {
              public static class: java.lang.Class<com.walletconnect.android.sdk.core.AndroidCoreDatabase.Companion>;

              public constructor();

              public getSchema(): com.squareup.sqldelight.db.SqlDriver.Schema;

              public invoke(param0: com.squareup.sqldelight.db.SqlDriver, param1: com.walletconnect.android.sdk.storage.data.dao.MetaData.Adapter): com.walletconnect.android.sdk.core.AndroidCoreDatabase;

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module core {
          export module sdk {
            export class AndroidCoreDatabaseImpl implements com.walletconnect.android.sdk.core.AndroidCoreDatabase {
              public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl>;
              public MetaDataAdapter: com.walletconnect.android.sdk.storage.data.dao.MetaData.Adapter;
              public jsonRpcHistoryQueries: com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl;
              public metaDataQueries: com.walletconnect.android.sdk.core.sdk.MetaDataQueriesImpl;
              public pairingQueries: com.walletconnect.android.sdk.core.sdk.PairingQueriesImpl;

              public getMetaDataAdapter$sdk_release(): com.walletconnect.android.sdk.storage.data.dao.MetaData.Adapter;

              public getJsonRpcHistoryQueries(): com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl;

              public getPairingQueries(): com.walletconnect.android.sdk.storage.data.dao.PairingQueries;

              public getJsonRpcHistoryQueries(): com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryQueries;

              public getPairingQueries(): com.walletconnect.android.sdk.core.sdk.PairingQueriesImpl;

              public getMetaDataQueries(): com.walletconnect.android.sdk.core.sdk.MetaDataQueriesImpl;

              public constructor(param0: com.squareup.sqldelight.db.SqlDriver, param1: com.walletconnect.android.sdk.storage.data.dao.MetaData.Adapter);

              public getMetaDataQueries(): com.walletconnect.android.sdk.storage.data.dao.MetaDataQueries;

              public static<clinit>(): void;
            }

            export module AndroidCoreDatabaseImpl {
              export class Schema {
                public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl.Schema>;
                public static INSTANCE: com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl.Schema;

                public getVersion(): number;

                public create(param0: com.squareup.sqldelight.db.SqlDriver): void;

                public constructor();

                public static<clinit>(): void;

                public migrate(param0: com.squareup.sqldelight.db.SqlDriver, param1: number, param2: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module core {
          export module sdk {
            export class JsonRpcHistoryQueriesImpl implements com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryQueries {
              public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl>;
              public database: com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl;
              public driver: com.squareup.sqldelight.db.SqlDriver;

              public doesJsonRpcNotExist(param0: number): com.squareup.sqldelight.Query<java.lang.Boolean>;

              public getJsonRpcRecords(): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecords>;

              public constructor(param0: com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

              public getGetJsonRpcHistoryRecord$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public selectLastInsertedRowId(): com.squareup.sqldelight.Query<java.lang.Long>;

              public deleteJsonRpcHistory(param0: string): void;

              public getGetJsonRpcRecordsByTopic$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public getDoesJsonRpcNotExist$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public getJsonRpcHistoryRecord(param0: number): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcHistoryRecord>;

              public getGetJsonRpcRecords$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public getJsonRpcRecords(param0: any): com.squareup.sqldelight.Query;

              public insertOrAbortJsonRpcHistory(param0: number, param1: string, param2: string, param3: string): void;

              public getSelectLastInsertedRowId$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public getJsonRpcRecordsByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecordsByTopic>;

              public getJsonRpcHistoryRecord(param0: number, param1: any): com.squareup.sqldelight.Query;

              public updateJsonRpcHistory(param0: string, param1: number): void;

              public getJsonRpcRecordsByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;
            }

            export module JsonRpcHistoryQueriesImpl {
              export class DoesJsonRpcNotExistQuery<T> extends com.squareup.sqldelight.Query<any> {
                public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl.DoesJsonRpcNotExistQuery<any>>;
                public request_id: number;

                public constructor(param0: number, param1: kotlin.jvm.functions.Function1<any>);

                public toString(): string;

                public getRequest_id(): number;

                public execute(): com.squareup.sqldelight.db.SqlCursor;
              }

              export class GetJsonRpcHistoryRecordQuery<T> extends com.squareup.sqldelight.Query<any> {
                public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl.GetJsonRpcHistoryRecordQuery<any>>;
                public request_id: number;

                public constructor(param0: number, param1: kotlin.jvm.functions.Function1<any>);

                public toString(): string;

                public getRequest_id(): number;

                public execute(): com.squareup.sqldelight.db.SqlCursor;
              }

              export class GetJsonRpcRecordsByTopicQuery<T> extends com.squareup.sqldelight.Query<any> {
                public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl.GetJsonRpcRecordsByTopicQuery<any>>;
                public topic: string;

                public toString(): string;

                public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any>);

                public execute(): com.squareup.sqldelight.db.SqlCursor;

                public getTopic(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module core {
          export module sdk {
            export class MetaDataQueriesImpl implements com.walletconnect.android.sdk.storage.data.dao.MetaDataQueries {
              public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.MetaDataQueriesImpl>;
              public database: com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl;
              public driver: com.squareup.sqldelight.db.SqlDriver;

              public updateMetaData(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: com.walletconnect.android.internal.common.model.AppMetaDataType, param6: string): void;

              public getMetadataByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType, param2: any): com.squareup.sqldelight.Query;

              public getGetMetadataByTopicAndType$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public constructor(param0: com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

              public getGetIdByTopicAndType$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public getMetadataByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetMetadataByTopicAndType>;

              public insertOrAbortMetaData(param0: string, param1: string, param2: string, param3: string, param4: java.util.List<string>, param5: string, param6: com.walletconnect.android.internal.common.model.AppMetaDataType): void;

              public getIdByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.squareup.sqldelight.Query<java.lang.Long>;

              public deleteMetaDataFromTopic(param0: string): void;
            }

            export module MetaDataQueriesImpl {
              export class GetIdByTopicAndTypeQuery<T> extends com.squareup.sqldelight.Query<any> {
                public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.MetaDataQueriesImpl.GetIdByTopicAndTypeQuery<any>>;
                public sequence_topic: string;
                public type: com.walletconnect.android.internal.common.model.AppMetaDataType;

                public toString(): string;

                public getType(): com.walletconnect.android.internal.common.model.AppMetaDataType;

                public execute(): com.squareup.sqldelight.db.SqlCursor;

                public getSequence_topic(): string;

                public constructor(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType, param2: kotlin.jvm.functions.Function1<any>);
              }

              export class GetMetadataByTopicAndTypeQuery<T> extends com.squareup.sqldelight.Query<any> {
                public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.MetaDataQueriesImpl.GetMetadataByTopicAndTypeQuery<any>>;
                public sequence_topic: string;
                public type: com.walletconnect.android.internal.common.model.AppMetaDataType;

                public toString(): string;

                public getType(): com.walletconnect.android.internal.common.model.AppMetaDataType;

                public execute(): com.squareup.sqldelight.db.SqlCursor;

                public getSequence_topic(): string;

                public constructor(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType, param2: kotlin.jvm.functions.Function1<any>);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module core {
          export module sdk {
            export class PairingQueriesImpl implements com.walletconnect.android.sdk.storage.data.dao.PairingQueries {
              public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.PairingQueriesImpl>;
              public database: com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl;
              public driver: com.squareup.sqldelight.db.SqlDriver;

              public getListOfPairing(param0: any): com.squareup.sqldelight.Query;

              public getGetListOfPairing$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public constructor(param0: com.walletconnect.android.sdk.core.sdk.AndroidCoreDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

              public getHasTopic$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public updateOrAbortExpiry(param0: number, param1: string): void;

              public getPairingByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;
              public getPairingByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetPairingByTopic>;

              public insertOrAbortPairing(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean): void;

              public deletePairing(param0: string): void;

              public getGetPairingByTopic$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

              public getListOfPairing(): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetListOfPairing>;

              public activatePairing(param0: number, param1: boolean, param2: string): void;

              public hasTopic(param0: string): com.squareup.sqldelight.Query<string>;
            }

            export module PairingQueriesImpl {
              export class GetPairingByTopicQuery<T> extends com.squareup.sqldelight.Query<any> {
                public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.PairingQueriesImpl.GetPairingByTopicQuery<any>>;
                public topic: string;

                public toString(): string;

                public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any>);

                public execute(): com.squareup.sqldelight.db.SqlCursor;

                public getTopic(): string;
              }

              export class HasTopicQuery<T> extends com.squareup.sqldelight.Query<any> {
                public static class: java.lang.Class<com.walletconnect.android.sdk.core.sdk.PairingQueriesImpl.HasTopicQuery<any>>;
                public topic: string;

                public toString(): string;

                public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any>);

                public execute(): com.squareup.sqldelight.db.SqlCursor;

                public getTopic(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class GetJsonRpcHistoryRecord {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcHistoryRecord>;
                public request_id: number;
                public topic: string;
                public method: string;
                public body: string;
                public response: string;

                public toString(): string;

                public getRequest_id(): number;

                public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public component2(): string;

                public getResponse(): string;

                public getMethod(): string;

                public component1(): number;

                public getBody(): string;

                public component5(): string;

                public copy(param0: number, param1: string, param2: string, param3: string, param4: string): com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcHistoryRecord;

                public component3(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class GetJsonRpcRecords {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecords>;
                public request_id: number;
                public topic: string;
                public method: string;
                public body: string;
                public response: string;

                public toString(): string;

                public getRequest_id(): number;

                public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public component2(): string;

                public getResponse(): string;

                public getMethod(): string;

                public component1(): number;

                public getBody(): string;

                public component5(): string;

                public copy(param0: number, param1: string, param2: string, param3: string, param4: string): com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecords;

                public component3(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class GetJsonRpcRecordsByTopic {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecordsByTopic>;
                public request_id: number;
                public topic: string;
                public method: string;
                public body: string;
                public response: string;

                public toString(): string;

                public getRequest_id(): number;

                public copy(param0: number, param1: string, param2: string, param3: string, param4: string): com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecordsByTopic;

                public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public component2(): string;

                public getResponse(): string;

                public getMethod(): string;

                public component1(): number;

                public getBody(): string;

                public component5(): string;

                public component3(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class GetListOfPairing {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.GetListOfPairing>;
                public topic: string;
                public expiry: number;
                public relay_protocol: string;
                public relay_data: string;
                public uri: string;
                public methods: string;
                public name: string;
                public description: string;
                public url: string;
                public icons: java.util.List<string>;
                public native: string;

                public toString(): string;

                public getRelay_data(): string;

                public component9(): string;

                public getIcons(): java.util.List<string>;

                public equals(param0: any): boolean;

                public getExpiry(): number;

                public is_active(): boolean;

                public getUri(): string;

                public component1(): string;

                public getMethods(): string;

                public component8(): string;

                public component2(): number;

                public component10(): string;

                public component5(): string;

                public constructor(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean, param7: string, param8: string, param9: string, param10: java.util.List<string>, param11: string);

                public getName(): string;

                public getUrl(): string;

                public component4(): string;

                public getTopic(): string;

                public copy(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean, param7: string, param8: string, param9: string, param10: java.util.List<string>, param11: string): com.walletconnect.android.sdk.storage.data.dao.GetListOfPairing;

                public getNative(): string;

                public component6(): string;

                public getDescription(): string;

                public component7(): boolean;

                public component12(): string;

                public component3(): string;

                public hashCode(): number;

                public getRelay_protocol(): string;

                public component11(): java.util.List<string>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class GetMetadataByTopicAndType {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.GetMetadataByTopicAndType>;
                public name: string;
                public description: string;
                public url: string;
                public icons: java.util.List<string>;
                public native: string;

                public toString(): string;

                public copy(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: string): com.walletconnect.android.sdk.storage.data.dao.GetMetadataByTopicAndType;

                public getName(): string;

                public getIcons(): java.util.List<string>;

                public equals(param0: any): boolean;

                public constructor(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: string);

                public getUrl(): string;

                public component2(): string;

                public component1(): string;

                public getNative(): string;

                public component4(): java.util.List<string>;

                public getDescription(): string;

                public component5(): string;

                public component3(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class GetPairingByTopic {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.GetPairingByTopic>;
                public topic: string;
                public expiry: number;
                public relay_protocol: string;
                public relay_data: string;
                public uri: string;
                public methods: string;
                public name: string;
                public description: string;
                public url: string;
                public icons: java.util.List<string>;
                public native: string;

                public toString(): string;

                public getRelay_data(): string;

                public component9(): string;

                public getIcons(): java.util.List<string>;

                public equals(param0: any): boolean;

                public getExpiry(): number;

                public is_active(): boolean;

                public getUri(): string;

                public component1(): string;

                public getMethods(): string;

                public component8(): string;

                public component2(): number;

                public component10(): string;

                public copy(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean, param7: string, param8: string, param9: string, param10: java.util.List<string>, param11: string): com.walletconnect.android.sdk.storage.data.dao.GetPairingByTopic;

                public component5(): string;

                public constructor(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean, param7: string, param8: string, param9: string, param10: java.util.List<string>, param11: string);

                public getName(): string;

                public getUrl(): string;

                public component4(): string;

                public getTopic(): string;

                public getNative(): string;

                public component6(): string;

                public getDescription(): string;

                public component7(): boolean;

                public component12(): string;

                public component3(): string;

                public hashCode(): number;

                public getRelay_protocol(): string;

                public component11(): java.util.List<string>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class JsonRpcHistoryDao {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryDao>;
                public id: number;
                public request_id: number;
                public topic: string;
                public method: string;
                public body: string;
                public response: string;

                public copy(param0: number, param1: number, param2: string, param3: string, param4: string, param5: string): com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryDao;

                public toString(): string;

                public getRequest_id(): number;

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public getId(): number;

                public constructor(param0: number, param1: number, param2: string, param3: string, param4: string, param5: string);

                public getResponse(): string;

                public component6(): string;

                public getMethod(): string;

                public component1(): number;

                public component2(): number;

                public getBody(): string;

                public component5(): string;

                public component3(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class JsonRpcHistoryQueries {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.sdk.storage.data.dao.JsonRpcHistoryQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getJsonRpcHistoryRecord(param0: number, param1: any): com.squareup.sqldelight.Query;
                  getJsonRpcHistoryRecord(param0: number): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcHistoryRecord>;
                  getJsonRpcRecordsByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;
                  getJsonRpcRecordsByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecordsByTopic>;
                  getJsonRpcRecords(param0: any): com.squareup.sqldelight.Query;
                  getJsonRpcRecords(): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecords>;
                  doesJsonRpcNotExist(param0: number): com.squareup.sqldelight.Query<java.lang.Boolean>;
                  selectLastInsertedRowId(): com.squareup.sqldelight.Query<java.lang.Long>;
                  insertOrAbortJsonRpcHistory(param0: number, param1: string, param2: string, param3: string): void;
                  updateJsonRpcHistory(param0: string, param1: number): void;
                  deleteJsonRpcHistory(param0: string): void;
                });
                public constructor();

                public getJsonRpcRecordsByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecordsByTopic>;

                public getJsonRpcRecords(param0: any): com.squareup.sqldelight.Query;

                public doesJsonRpcNotExist(param0: number): com.squareup.sqldelight.Query<java.lang.Boolean>;

                public selectLastInsertedRowId(): com.squareup.sqldelight.Query<java.lang.Long>;

                public insertOrAbortJsonRpcHistory(param0: number, param1: string, param2: string, param3: string): void;

                public getJsonRpcHistoryRecord(param0: number): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcHistoryRecord>;

                public getJsonRpcRecordsByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;

                public updateJsonRpcHistory(param0: string, param1: number): void;

                public deleteJsonRpcHistory(param0: string): void;

                public getJsonRpcRecords(): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetJsonRpcRecords>;

                public getJsonRpcHistoryRecord(param0: number, param1: any): com.squareup.sqldelight.Query;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class MetaData {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.MetaData>;
                public id: number;
                public sequence_topic: string;
                public name: string;
                public description: string;
                public url: string;
                public icons: java.util.List<string>;
                public native: string;
                public type: com.walletconnect.android.internal.common.model.AppMetaDataType;

                public component7(): string;

                public toString(): string;

                public getType(): com.walletconnect.android.internal.common.model.AppMetaDataType;

                public getName(): string;

                public getIcons(): java.util.List<string>;

                public equals(param0: any): boolean;

                public getUrl(): string;

                public component4(): string;

                public component2(): string;

                public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.util.List<string>, param6: string, param7: com.walletconnect.android.internal.common.model.AppMetaDataType);

                public getId(): number;

                public getNative(): string;

                public component8(): com.walletconnect.android.internal.common.model.AppMetaDataType;

                public component1(): number;

                public component6(): java.util.List<string>;

                public getDescription(): string;

                public getSequence_topic(): string;

                public component5(): string;

                public copy(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.util.List<string>, param6: string, param7: com.walletconnect.android.internal.common.model.AppMetaDataType): com.walletconnect.android.sdk.storage.data.dao.MetaData;

                public component3(): string;

                public hashCode(): number;
              }

              export module MetaData {
                export class Adapter {
                  public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.MetaData.Adapter>;
                  public iconsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public typeAdapter: com.squareup.sqldelight.ColumnAdapter<com.walletconnect.android.internal.common.model.AppMetaDataType, string>;

                  public constructor(param0: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param1: com.squareup.sqldelight.ColumnAdapter<com.walletconnect.android.internal.common.model.AppMetaDataType, string>);

                  public getTypeAdapter(): com.squareup.sqldelight.ColumnAdapter<com.walletconnect.android.internal.common.model.AppMetaDataType, string>;

                  public getIconsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class MetaDataQueries {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.MetaDataQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.sdk.storage.data.dao.MetaDataQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getMetadataByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType, param2: any): com.squareup.sqldelight.Query;
                  getMetadataByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetMetadataByTopicAndType>;
                  getIdByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.squareup.sqldelight.Query<java.lang.Long>;
                  insertOrAbortMetaData(param0: string, param1: string, param2: string, param3: string, param4: java.util.List<string>, param5: string, param6: com.walletconnect.android.internal.common.model.AppMetaDataType): void;
                  updateMetaData(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: com.walletconnect.android.internal.common.model.AppMetaDataType, param6: string): void;
                  deleteMetaDataFromTopic(param0: string): void;
                });
                public constructor();

                public deleteMetaDataFromTopic(param0: string): void;

                public getMetadataByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType, param2: any): com.squareup.sqldelight.Query;

                public getIdByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.squareup.sqldelight.Query<java.lang.Long>;

                public insertOrAbortMetaData(param0: string, param1: string, param2: string, param3: string, param4: java.util.List<string>, param5: string, param6: com.walletconnect.android.internal.common.model.AppMetaDataType): void;

                public getMetadataByTopicAndType(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaDataType): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetMetadataByTopicAndType>;

                public updateMetaData(param0: string, param1: string, param2: string, param3: java.util.List<string>, param4: string, param5: com.walletconnect.android.internal.common.model.AppMetaDataType, param6: string): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class Pairing {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.Pairing>;
                public id: number;
                public topic: string;
                public expiry: number;
                public relay_protocol: string;
                public relay_data: string;
                public uri: string;
                public methods: string;

                public component7(): string;

                public toString(): string;

                public getRelay_data(): string;

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public component3(): number;

                public copy(param0: number, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: boolean): com.walletconnect.android.sdk.storage.data.dao.Pairing;

                public getExpiry(): number;

                public is_active(): boolean;

                public component2(): string;

                public getUri(): string;

                public getId(): number;

                public component6(): string;

                public component1(): number;

                public getMethods(): string;

                public constructor(param0: number, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: boolean);

                public component5(): string;

                public hashCode(): number;

                public getRelay_protocol(): string;

                public component8(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module sdk {
        export module storage {
          export module data {
            export module dao {
              export class PairingQueries {
                public static class: java.lang.Class<com.walletconnect.android.sdk.storage.data.dao.PairingQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.android.sdk.storage.data.dao.PairingQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getListOfPairing(param0: any): com.squareup.sqldelight.Query;
                  getListOfPairing(): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetListOfPairing>;
                  getPairingByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;
                  getPairingByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetPairingByTopic>;
                  hasTopic(param0: string): com.squareup.sqldelight.Query<string>;
                  insertOrAbortPairing(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean): void;
                  deletePairing(param0: string): void;
                  activatePairing(param0: number, param1: boolean, param2: string): void;
                  updateOrAbortExpiry(param0: number, param1: string): void;
                });
                public constructor();

                public updateOrAbortExpiry(param0: number, param1: string): void;

                public getListOfPairing(param0: any): com.squareup.sqldelight.Query;

                public hasTopic(param0: string): com.squareup.sqldelight.Query<string>;

                public activatePairing(param0: number, param1: boolean, param2: string): void;

                public getListOfPairing(): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetListOfPairing>;

                public deletePairing(param0: string): void;

                public getPairingByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;
                public getPairingByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.android.sdk.storage.data.dao.GetPairingByTopic>;

                public insertOrAbortPairing(param0: string, param1: number, param2: string, param3: string, param4: string, param5: string, param6: boolean): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module android {
      export module utils {
        export module ExtensionsKt {
          export class WhenMappings {
            public static class: java.lang.Class<com.walletconnect.android.utils.ExtensionsKt.WhenMappings>;

            public static<clinit>(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export class BuildConfig {
        public static class: java.lang.Class<com.walletconnect.auth.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public static PROJECT_ID: string;
        public static SDK_VERSION: string;

        public constructor();
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module client {
        export class Auth {
          public static class: java.lang.Class<com.walletconnect.auth.client.Auth>;
          public static INSTANCE: com.walletconnect.auth.client.Auth;

          public constructor();

          public static<clinit>(): void;
        }

        export module Auth {
          export abstract class Event {
            public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Event>;

            public constructor();
          }

          export module Event {
            export class AuthRequest extends com.walletconnect.auth.client.Auth.Event {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Event.AuthRequest>;
              public id: number;
              public payloadParams: com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public constructor();
              public constructor(param0: number, param1: com.walletconnect.auth.client.Auth.Model.PayloadParams);

              public getPayloadParams(): com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public component1(): number;

              public component2(): com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public hashCode(): number;

              public getId(): number;

              public toString(): string;

              public copy(param0: number, param1: com.walletconnect.auth.client.Auth.Model.PayloadParams): com.walletconnect.auth.client.Auth.Event.AuthRequest;

              public equals(param0: any): boolean;
            }

            export class AuthResponse extends com.walletconnect.auth.client.Auth.Event {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Event.AuthResponse>;
              public response: com.walletconnect.auth.client.Auth.Model.Response;

              public constructor();
              public constructor(param0: com.walletconnect.auth.client.Auth.Model.Response);

              public copy(param0: com.walletconnect.auth.client.Auth.Model.Response): com.walletconnect.auth.client.Auth.Event.AuthResponse;

              public component1(): com.walletconnect.auth.client.Auth.Model.Response;

              public hashCode(): number;

              public toString(): string;

              public equals(param0: any): boolean;

              public getResponse(): com.walletconnect.auth.client.Auth.Model.Response;
            }

            export class ConnectionStateChange extends com.walletconnect.auth.client.Auth.Event {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Event.ConnectionStateChange>;
              public state: com.walletconnect.auth.client.Auth.Model.ConnectionState;

              public constructor();
              public constructor(param0: com.walletconnect.auth.client.Auth.Model.ConnectionState);

              public getState(): com.walletconnect.auth.client.Auth.Model.ConnectionState;

              public hashCode(): number;

              public component1(): com.walletconnect.auth.client.Auth.Model.ConnectionState;

              public copy(param0: com.walletconnect.auth.client.Auth.Model.ConnectionState): com.walletconnect.auth.client.Auth.Event.ConnectionStateChange;

              public toString(): string;

              public equals(param0: any): boolean;
            }

            export class Error extends com.walletconnect.auth.client.Auth.Event {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Event.Error>;
              public error: com.walletconnect.auth.client.Auth.Model.Error;

              public constructor();

              public copy(param0: com.walletconnect.auth.client.Auth.Model.Error): com.walletconnect.auth.client.Auth.Event.Error;

              public hashCode(): number;

              public component1(): com.walletconnect.auth.client.Auth.Model.Error;

              public toString(): string;

              public getError(): com.walletconnect.auth.client.Auth.Model.Error;

              public constructor(param0: com.walletconnect.auth.client.Auth.Model.Error);

              public equals(param0: any): boolean;
            }
          }

          export abstract class Model {
            public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model>;

            public constructor();
          }

          export module Model {
            export class Cacao extends com.walletconnect.auth.client.Auth.Model {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.Cacao>;
              public header: com.walletconnect.auth.client.Auth.Model.Cacao.Header;
              public payload: com.walletconnect.auth.client.Auth.Model.Cacao.Payload;
              public signature: com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

              public constructor();

              public getSignature(): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

              public component2(): com.walletconnect.auth.client.Auth.Model.Cacao.Payload;

              public component1(): com.walletconnect.auth.client.Auth.Model.Cacao.Header;

              public hashCode(): number;

              public copy(param0: com.walletconnect.auth.client.Auth.Model.Cacao.Header, param1: com.walletconnect.auth.client.Auth.Model.Cacao.Payload, param2: com.walletconnect.auth.client.Auth.Model.Cacao.Signature): com.walletconnect.auth.client.Auth.Model.Cacao;

              public getHeader(): com.walletconnect.auth.client.Auth.Model.Cacao.Header;

              public toString(): string;

              public getPayload(): com.walletconnect.auth.client.Auth.Model.Cacao.Payload;

              public component3(): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

              public equals(param0: any): boolean;

              public constructor(param0: com.walletconnect.auth.client.Auth.Model.Cacao.Header, param1: com.walletconnect.auth.client.Auth.Model.Cacao.Payload, param2: com.walletconnect.auth.client.Auth.Model.Cacao.Signature);
            }

            export module Cacao {
              export class Header extends com.walletconnect.auth.client.Auth.Model {
                public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.Cacao.Header>;
                public t: string;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getT(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public copy(param0: string): com.walletconnect.auth.client.Auth.Model.Cacao.Header;
              }

              export class Payload extends com.walletconnect.auth.client.Auth.Model {
                public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.Cacao.Payload>;
                public iss: string;
                public domain: string;
                public aud: string;
                public version: string;
                public nonce: string;
                public iat: string;
                public nbf: string;
                public exp: string;
                public statement: string;
                public requestId: string;
                public resources: java.util.List<string>;

                public toString(): string;

                public getRequestId(): string;

                public getStatement(): string;

                public component9(): string;

                public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.util.List<string>);

                public equals(param0: any): boolean;

                public getVersion(): string;

                public getIss(): string;

                public component2(): string;

                public component1(): string;

                public getAud(): string;

                public getExp(): string;

                public getResources(): java.util.List<string>;

                public component8(): string;

                public component10(): string;

                public component5(): string;

                public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.util.List<string>): com.walletconnect.auth.client.Auth.Model.Cacao.Payload;

                public getNbf(): string;

                public component7(): string;

                public component4(): string;

                public getIat(): string;

                public constructor();

                public getAddress(): string;

                public component6(): string;

                public getNonce(): string;

                public component3(): string;

                public hashCode(): number;

                public getDomain(): string;

                public component11(): java.util.List<string>;
              }

              export class Signature extends com.walletconnect.auth.client.Auth.Model {
                public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.Cacao.Signature>;
                public t: string;
                public s: string;
                public m: string;

                public component1(): string;

                public copy(param0: string, param1: string, param2: string): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

                public toString(): string;

                public equals(param0: any): boolean;

                public getT(): string;

                public constructor();

                public getS(): string;

                public constructor(param0: string, param1: string, param2: string);

                public component2(): string;

                public component3(): string;

                public hashCode(): number;

                public getM(): string;
              }
            }

            export class ConnectionState extends com.walletconnect.auth.client.Auth.Model {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.ConnectionState>;

              public constructor();

              public component1(): boolean;

              public hashCode(): number;

              public constructor(param0: boolean);

              public copy(param0: boolean): com.walletconnect.auth.client.Auth.Model.ConnectionState;

              public toString(): string;

              public isAvailable(): boolean;

              public equals(param0: any): boolean;
            }

            export class Error extends com.walletconnect.auth.client.Auth.Model {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.Error>;
              public throwable: java.lang.Throwable;

              public constructor();

              public hashCode(): number;

              public constructor(param0: java.lang.Throwable);

              public toString(): string;

              public getThrowable(): java.lang.Throwable;

              public copy(param0: java.lang.Throwable): com.walletconnect.auth.client.Auth.Model.Error;

              public equals(param0: any): boolean;

              public component1(): java.lang.Throwable;
            }

            export class PayloadParams extends com.walletconnect.auth.client.Auth.Model {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.PayloadParams>;
              public type: string;
              public chainId: string;
              public domain: string;
              public aud: string;
              public version: string;
              public nonce: string;
              public iat: string;
              public nbf: string;
              public exp: string;
              public statement: string;
              public requestId: string;
              public resources: java.util.List<string>;

              public component7(): string;

              public hashCode(): number;

              public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: java.util.List<string>);

              public getNbf(): string;

              public component10(): string;

              public toString(): string;

              public getExp(): string;

              public getStatement(): string;

              public component3(): string;

              public component1(): string;

              public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: java.util.List<string>): com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public getIat(): string;

              public component12(): java.util.List<string>;

              public getDomain(): string;

              public component6(): string;

              public getResources(): java.util.List<string>;

              public getType(): string;

              public constructor();

              public component2(): string;

              public component9(): string;

              public getChainId(): string;

              public getAud(): string;

              public component5(): string;

              public component8(): string;

              public getRequestId(): string;

              public getNonce(): string;

              public component4(): string;

              public component11(): string;

              public equals(param0: any): boolean;

              public getVersion(): string;
            }

            export class PendingRequest extends com.walletconnect.auth.client.Auth.Model {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.PendingRequest>;
              public id: number;
              public payloadParams: com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public constructor();
              public constructor(param0: number, param1: com.walletconnect.auth.client.Auth.Model.PayloadParams);

              public getPayloadParams(): com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public component1(): number;

              public component2(): com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public hashCode(): number;

              public getId(): number;

              public toString(): string;

              public equals(param0: any): boolean;

              public copy(param0: number, param1: com.walletconnect.auth.client.Auth.Model.PayloadParams): com.walletconnect.auth.client.Auth.Model.PendingRequest;
            }

            export abstract class Response extends com.walletconnect.auth.client.Auth.Model {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.Response>;

              public constructor();

              public getId(): number;
            }

            export module Response {
              export class Error extends com.walletconnect.auth.client.Auth.Model.Response {
                public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.Response.Error>;
                public id: number;
                public code: number;
                public message: string;

                public getId(): number;

                public toString(): string;

                public component1(): number;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public component2(): number;

                public copy(param0: number, param1: number, param2: string): com.walletconnect.auth.client.Auth.Model.Response.Error;

                public constructor();
                public constructor(param0: number, param1: number, param2: string);

                public component3(): string;

                public hashCode(): number;

                public getCode(): number;
              }

              export class Result extends com.walletconnect.auth.client.Auth.Model.Response {
                public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Model.Response.Result>;
                public id: number;
                public cacao: com.walletconnect.auth.client.Auth.Model.Cacao;

                public getCacao(): com.walletconnect.auth.client.Auth.Model.Cacao;

                public constructor(param0: number, param1: com.walletconnect.auth.client.Auth.Model.Cacao);

                public getId(): number;

                public toString(): string;

                public component1(): number;

                public equals(param0: any): boolean;

                public constructor();

                public component2(): com.walletconnect.auth.client.Auth.Model.Cacao;

                public copy(param0: number, param1: com.walletconnect.auth.client.Auth.Model.Cacao): com.walletconnect.auth.client.Auth.Model.Response.Result;

                public hashCode(): number;
              }
            }
          }

          export abstract class Params {
            public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Params>;

            public constructor();
          }

          export module Params {
            export class FormatMessage extends com.walletconnect.auth.client.Auth.Params {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Params.FormatMessage>;
              public payloadParams: com.walletconnect.auth.client.Auth.Model.PayloadParams;
              public issuer: string;

              public constructor();
              public constructor(param0: com.walletconnect.auth.client.Auth.Model.PayloadParams, param1: string);

              public getPayloadParams(): com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public component2(): string;

              public component1(): com.walletconnect.auth.client.Auth.Model.PayloadParams;

              public hashCode(): number;

              public copy(param0: com.walletconnect.auth.client.Auth.Model.PayloadParams, param1: string): com.walletconnect.auth.client.Auth.Params.FormatMessage;

              public getIssuer(): string;

              public toString(): string;

              public equals(param0: any): boolean;
            }

            export class Init extends com.walletconnect.auth.client.Auth.Params {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Params.Init>;
              public core: com.walletconnect.android.CoreClient;

              public constructor();

              public component1(): com.walletconnect.android.CoreClient;

              public hashCode(): number;

              public getCore(): com.walletconnect.android.CoreClient;

              public copy(param0: com.walletconnect.android.CoreClient): com.walletconnect.auth.client.Auth.Params.Init;

              public toString(): string;

              public equals(param0: any): boolean;

              public constructor(param0: com.walletconnect.android.CoreClient);
            }

            export class Request extends com.walletconnect.auth.client.Auth.Params {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Params.Request>;
              public topic: string;
              public chainId: string;
              public domain: string;
              public nonce: string;
              public aud: string;
              public type: string;
              public nbf: string;
              public exp: string;
              public statement: string;
              public requestId: string;
              public resources: java.util.List<string>;

              public component7(): string;

              public hashCode(): number;

              public getNbf(): string;

              public component10(): string;

              public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.util.List<string>);

              public toString(): string;

              public getExp(): string;

              public getStatement(): string;

              public component3(): string;

              public component1(): string;

              public getDomain(): string;

              public component11(): java.util.List<string>;

              public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.util.List<string>): com.walletconnect.auth.client.Auth.Params.Request;

              public component6(): string;

              public getResources(): java.util.List<string>;

              public getType(): string;

              public constructor();

              public getTopic(): string;

              public component2(): string;

              public component9(): string;

              public getChainId(): string;

              public getAud(): string;

              public component5(): string;

              public component8(): string;

              public getRequestId(): string;

              public getNonce(): string;

              public component4(): string;

              public equals(param0: any): boolean;
            }

            export abstract class Respond extends com.walletconnect.auth.client.Auth.Params {
              public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Params.Respond>;

              public constructor();

              public getId(): number;
            }

            export module Respond {
              export class Error extends com.walletconnect.auth.client.Auth.Params.Respond {
                public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Params.Respond.Error>;
                public id: number;
                public code: number;
                public message: string;

                public getId(): number;

                public toString(): string;

                public component1(): number;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public component2(): number;

                public copy(param0: number, param1: number, param2: string): com.walletconnect.auth.client.Auth.Params.Respond.Error;

                public constructor();
                public constructor(param0: number, param1: number, param2: string);

                public component3(): string;

                public hashCode(): number;

                public getCode(): number;
              }

              export class Result extends com.walletconnect.auth.client.Auth.Params.Respond {
                public static class: java.lang.Class<com.walletconnect.auth.client.Auth.Params.Respond.Result>;
                public id: number;
                public signature: com.walletconnect.auth.client.Auth.Model.Cacao.Signature;
                public issuer: string;

                public getId(): number;

                public getIssuer(): string;

                public toString(): string;

                public component1(): number;

                public component2(): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

                public equals(param0: any): boolean;

                public constructor();
                public constructor(param0: number, param1: com.walletconnect.auth.client.Auth.Model.Cacao.Signature, param2: string);

                public copy(param0: number, param1: com.walletconnect.auth.client.Auth.Model.Cacao.Signature, param2: string): com.walletconnect.auth.client.Auth.Params.Respond.Result;

                public getSignature(): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

                public component3(): string;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module client {
        export class AuthClient extends com.walletconnect.auth.client.AuthInterface {
          public static class: java.lang.Class<com.walletconnect.auth.client.AuthClient>;
          public static INSTANCE: com.walletconnect.auth.client.AuthClient;

          public respond(param0: com.walletconnect.auth.client.Auth.Params.Respond, param1: kotlin.jvm.functions.Function1<any>): void;

          public request(param0: com.walletconnect.auth.client.Auth.Params.Request, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;

          public getPendingRequest(): java.util.List<com.walletconnect.auth.client.Auth.Model.PendingRequest>;

          public setRequesterDelegate(param0: com.walletconnect.auth.client.AuthInterface.RequesterDelegate): void;

          public constructor();

          public setResponderDelegate(param0: com.walletconnect.auth.client.AuthInterface.ResponderDelegate): void;

          public static<clinit>(): void;

          public formatMessage(param0: com.walletconnect.auth.client.Auth.Params.FormatMessage): string;

          public initialize(param0: com.walletconnect.auth.client.Auth.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;
        }

        export module AuthClient {
          export class RequesterDelegate extends com.walletconnect.auth.client.AuthInterface.RequesterDelegate {
            public static class: java.lang.Class<com.walletconnect.auth.client.AuthClient.RequesterDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.auth.client.AuthClient$RequesterDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onAuthResponse(param0: com.walletconnect.auth.client.Auth.Event.AuthResponse): void;
              onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;
              onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;
            });
            public constructor();

            public onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;

            public onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;

            public onAuthResponse(param0: com.walletconnect.auth.client.Auth.Event.AuthResponse): void;
          }

          export class ResponderDelegate extends com.walletconnect.auth.client.AuthInterface.ResponderDelegate {
            public static class: java.lang.Class<com.walletconnect.auth.client.AuthClient.ResponderDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.auth.client.AuthClient$ResponderDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onAuthRequest(param0: com.walletconnect.auth.client.Auth.Event.AuthRequest): void;
              onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;
              onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;
            });
            public constructor();

            public onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;

            public onAuthRequest(param0: com.walletconnect.auth.client.Auth.Event.AuthRequest): void;

            public onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module client {
        export class AuthInterface {
          public static class: java.lang.Class<com.walletconnect.auth.client.AuthInterface>;

          /**
           * Constructs a new instance of the com.walletconnect.auth.client.AuthInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            setRequesterDelegate(param0: com.walletconnect.auth.client.AuthInterface.RequesterDelegate): void;
            setResponderDelegate(param0: com.walletconnect.auth.client.AuthInterface.ResponderDelegate): void;
            initialize(param0: com.walletconnect.auth.client.Auth.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;
            request(param0: com.walletconnect.auth.client.Auth.Params.Request, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;
            respond(param0: com.walletconnect.auth.client.Auth.Params.Respond, param1: kotlin.jvm.functions.Function1<any>): void;
            formatMessage(param0: com.walletconnect.auth.client.Auth.Params.FormatMessage): string;
            getPendingRequest(): java.util.List<com.walletconnect.auth.client.Auth.Model.PendingRequest>;
          });
          public constructor();

          public respond(param0: com.walletconnect.auth.client.Auth.Params.Respond, param1: kotlin.jvm.functions.Function1<any>): void;

          public request(param0: com.walletconnect.auth.client.Auth.Params.Request, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;

          public setRequesterDelegate(param0: com.walletconnect.auth.client.AuthInterface.RequesterDelegate): void;

          public getPendingRequest(): java.util.List<com.walletconnect.auth.client.Auth.Model.PendingRequest>;

          public setResponderDelegate(param0: com.walletconnect.auth.client.AuthInterface.ResponderDelegate): void;

          public initialize(param0: com.walletconnect.auth.client.Auth.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;

          public formatMessage(param0: com.walletconnect.auth.client.Auth.Params.FormatMessage): string;
        }

        export module AuthInterface {
          export class AuthDelegate {
            public static class: java.lang.Class<com.walletconnect.auth.client.AuthInterface.AuthDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.auth.client.AuthInterface$AuthDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;
              onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;
            });
            public constructor();

            public onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;

            public onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;
          }

          export class RequesterDelegate extends com.walletconnect.auth.client.AuthInterface.AuthDelegate {
            public static class: java.lang.Class<com.walletconnect.auth.client.AuthInterface.RequesterDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.auth.client.AuthInterface$RequesterDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onAuthResponse(param0: com.walletconnect.auth.client.Auth.Event.AuthResponse): void;
              onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;
              onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;
            });
            public constructor();

            public onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;

            public onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;

            public onAuthResponse(param0: com.walletconnect.auth.client.Auth.Event.AuthResponse): void;
          }

          export class ResponderDelegate extends com.walletconnect.auth.client.AuthInterface.AuthDelegate {
            public static class: java.lang.Class<com.walletconnect.auth.client.AuthInterface.ResponderDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.auth.client.AuthInterface$ResponderDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onAuthRequest(param0: com.walletconnect.auth.client.Auth.Event.AuthRequest): void;
              onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;
              onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;
            });
            public constructor();

            public onConnectionStateChange(param0: com.walletconnect.auth.client.Auth.Event.ConnectionStateChange): void;

            public onAuthRequest(param0: com.walletconnect.auth.client.Auth.Event.AuthRequest): void;

            public onError(param0: com.walletconnect.auth.client.Auth.Event.Error): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module client {
        export class AuthProtocol extends com.walletconnect.auth.client.AuthInterface {
          public static class: java.lang.Class<com.walletconnect.auth.client.AuthProtocol>;
          public static instance: com.walletconnect.auth.client.AuthProtocol;
          public authEngine: com.walletconnect.auth.engine.domain.AuthEngine;

          public respond(param0: com.walletconnect.auth.client.Auth.Params.Respond, param1: kotlin.jvm.functions.Function1<any>): void;

          public request(param0: com.walletconnect.auth.client.Auth.Params.Request, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;

          public setRequesterDelegate(param0: com.walletconnect.auth.client.AuthInterface.RequesterDelegate): void;

          public getPendingRequest(): java.util.List<com.walletconnect.auth.client.Auth.Model.PendingRequest>;

          public constructor();

          public setResponderDelegate(param0: com.walletconnect.auth.client.AuthInterface.ResponderDelegate): void;

          public checkEngineInitialization(): void;

          public static<clinit>(): void;

          public initialize(param0: com.walletconnect.auth.client.Auth.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;

          public formatMessage(param0: com.walletconnect.auth.client.Auth.Params.FormatMessage): string;
        }

        export module AuthProtocol {
          export class Companion {
            public static class: java.lang.Class<com.walletconnect.auth.client.AuthProtocol.Companion>;

            public getInstance(): com.walletconnect.auth.client.AuthProtocol;

            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module exceptions {
          export class InvalidCacaoException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.auth.common.exceptions.InvalidCacaoException>;
            public static INSTANCE: com.walletconnect.auth.common.exceptions.InvalidCacaoException;

            public constructor();

            public static<clinit>(): void;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module exceptions {
          export class InvalidParamsException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.auth.common.exceptions.InvalidParamsException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module exceptions {
          export class MissingAuthRequestException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.auth.common.exceptions.MissingAuthRequestException>;
            public static INSTANCE: com.walletconnect.auth.common.exceptions.MissingAuthRequestException;

            public constructor();

            public static<clinit>(): void;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module exceptions {
          export abstract class PeerError extends com.walletconnect.android.internal.common.model.type.Error {
            public static class: java.lang.Class<com.walletconnect.auth.common.exceptions.PeerError>;

            public getMessage(): string;

            public constructor();

            public getCode(): number;
          }

          export module PeerError {
            export class SignatureVerificationFailed extends com.walletconnect.auth.common.exceptions.PeerError {
              public static class: java.lang.Class<com.walletconnect.auth.common.exceptions.PeerError.SignatureVerificationFailed>;
              public static INSTANCE: com.walletconnect.auth.common.exceptions.PeerError.SignatureVerificationFailed;
              public static message: string;
              public static code: number;

              public constructor();

              public getCode(): number;

              public getMessage(): string;

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module json_rpc {
          export abstract class AuthParams extends com.walletconnect.android.internal.common.model.type.ClientParams {
            public static class: java.lang.Class<com.walletconnect.auth.common.json_rpc.AuthParams>;
          }

          export module AuthParams {
            export class RequestParams extends com.walletconnect.auth.common.json_rpc.AuthParams {
              public static class: java.lang.Class<com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams>;
              public requester: com.walletconnect.auth.common.model.Requester;
              public payloadParams: com.walletconnect.auth.common.model.PayloadParams;

              public hashCode(): number;

              public copy(param0: com.walletconnect.auth.common.model.Requester, param1: com.walletconnect.auth.common.model.PayloadParams): com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams;

              public component2(): com.walletconnect.auth.common.model.PayloadParams;

              public toString(): string;

              public getPayloadParams(): com.walletconnect.auth.common.model.PayloadParams;

              public constructor(param0: com.walletconnect.auth.common.model.Requester, param1: com.walletconnect.auth.common.model.PayloadParams);

              public equals(param0: any): boolean;

              public getRequester(): com.walletconnect.auth.common.model.Requester;

              public component1(): com.walletconnect.auth.common.model.Requester;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module json_rpc {
          export class AuthParams_RequestParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams> {
            public static class: java.lang.Class<com.walletconnect.auth.common.json_rpc.AuthParams_RequestParamsJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public requesterAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.auth.common.model.Requester>;
            public payloadParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.auth.common.model.PayloadParams>;

            public constructor(param0: com.squareup.moshi.Moshi);

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams): void;

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module json_rpc {
          export abstract class AuthRpc extends com.walletconnect.android.internal.common.model.type.JsonRpcClientSync<com.walletconnect.auth.common.json_rpc.AuthParams> {
            public static class: java.lang.Class<com.walletconnect.auth.common.json_rpc.AuthRpc>;

            public getParams(): com.walletconnect.auth.common.json_rpc.AuthParams;

            public getJsonrpc(): string;

            public getMethod(): string;

            public getParams(): any;

            public getId(): number;
          }

          export module AuthRpc {
            export class AuthRequest extends com.walletconnect.auth.common.json_rpc.AuthRpc {
              public static class: java.lang.Class<com.walletconnect.auth.common.json_rpc.AuthRpc.AuthRequest>;
              public id: number;
              public jsonrpc: string;
              public method: string;
              public params: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams;

              public getJsonrpc(): string;

              public component2(): string;

              public getMethod(): string;

              public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams): com.walletconnect.auth.common.json_rpc.AuthRpc.AuthRequest;

              public hashCode(): number;

              public toString(): string;

              public getParams(): com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams;

              public component3(): string;

              public getParams(): com.walletconnect.auth.common.json_rpc.AuthParams;

              public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams);

              public component1(): number;

              public getParams(): any;

              public getId(): number;

              public component4(): com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module json_rpc {
          export class AuthRpc_AuthRequestJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.auth.common.json_rpc.AuthRpc.AuthRequest> {
            public static class: java.lang.Class<com.walletconnect.auth.common.json_rpc.AuthRpc_AuthRequestJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public requestParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams>;
            public constructorRef: java.lang.reflect.Constructor<com.walletconnect.auth.common.json_rpc.AuthRpc.AuthRequest>;

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.auth.common.json_rpc.AuthRpc.AuthRequest): void;

            public constructor(param0: com.squareup.moshi.Moshi);

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.auth.common.json_rpc.AuthRpc.AuthRequest;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export abstract class AuthResponse {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.AuthResponse>;

            public constructor();
          }

          export module AuthResponse {
            export class Error extends com.walletconnect.auth.common.model.AuthResponse {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.AuthResponse.Error>;
              public code: number;
              public message: string;

              public constructor();

              public component2(): string;

              public component1(): number;

              public hashCode(): number;

              public copy(param0: number, param1: string): com.walletconnect.auth.common.model.AuthResponse.Error;

              public toString(): string;

              public getCode(): number;

              public equals(param0: any): boolean;

              public getMessage(): string;

              public constructor(param0: number, param1: string);
            }

            export class Result extends com.walletconnect.auth.common.model.AuthResponse {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.AuthResponse.Result>;
              public cacao: com.walletconnect.android.internal.common.model.params.Cacao;

              public constructor();
              public constructor(param0: com.walletconnect.android.internal.common.model.params.Cacao);

              public hashCode(): number;

              public component1(): com.walletconnect.android.internal.common.model.params.Cacao;

              public copy(param0: com.walletconnect.android.internal.common.model.params.Cacao): com.walletconnect.auth.common.model.AuthResponse.Result;

              public toString(): string;

              public equals(param0: any): boolean;

              public getCacao(): com.walletconnect.android.internal.common.model.params.Cacao;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export abstract class Events extends com.walletconnect.android.internal.common.model.type.EngineEvent {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.Events>;

            public constructor();
          }

          export module Events {
            export class OnAuthRequest extends com.walletconnect.auth.common.model.Events {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.Events.OnAuthRequest>;
              public id: number;
              public payloadParams: com.walletconnect.auth.common.model.PayloadParams;

              public constructor();

              public component1(): number;

              public hashCode(): number;

              public constructor(param0: number, param1: com.walletconnect.auth.common.model.PayloadParams);

              public getId(): number;

              public copy(param0: number, param1: com.walletconnect.auth.common.model.PayloadParams): com.walletconnect.auth.common.model.Events.OnAuthRequest;

              public component2(): com.walletconnect.auth.common.model.PayloadParams;

              public toString(): string;

              public getPayloadParams(): com.walletconnect.auth.common.model.PayloadParams;

              public equals(param0: any): boolean;
            }

            export class OnAuthResponse extends com.walletconnect.auth.common.model.Events {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.Events.OnAuthResponse>;
              public id: number;
              public response: com.walletconnect.auth.common.model.AuthResponse;

              public constructor();

              public component1(): number;

              public hashCode(): number;

              public component2(): com.walletconnect.auth.common.model.AuthResponse;

              public getId(): number;

              public constructor(param0: number, param1: com.walletconnect.auth.common.model.AuthResponse);

              public toString(): string;

              public copy(param0: number, param1: com.walletconnect.auth.common.model.AuthResponse): com.walletconnect.auth.common.model.Events.OnAuthResponse;

              public getResponse(): com.walletconnect.auth.common.model.AuthResponse;

              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export class Issuer {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.Issuer>;
            public static ISS_DELIMITER: string;
            public static ISS_POSITION_OF_NAMESPACE: number;
            public static ISS_POSITION_OF_REFERENCE: number;
            public static ISS_POSITION_OF_ADDRESS: number;
            public value: string;

            public getAccountId(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public static<clinit>(): void;

            public getValue(): string;

            public copy(param0: string): com.walletconnect.auth.common.model.Issuer;

            public getAddress(): string;

            public getChainIdReference(): string;

            public getChainId(): string;

            public toString(): string;

            public constructor(param0: string);
          }

          export module Issuer {
            export class Companion {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.Issuer.Companion>;

              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export class JsonRpcHistoryEntry {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.JsonRpcHistoryEntry>;
            public id: number;
            public topic: com.walletconnect.foundation.common.model.Topic;
            public method: string;
            public params: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams;
            public response: string;

            public component3(): string;

            public getTopic(): com.walletconnect.foundation.common.model.Topic;

            public component5(): string;

            public component2(): com.walletconnect.foundation.common.model.Topic;

            public component4(): com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams;

            public copy(param0: number, param1: com.walletconnect.foundation.common.model.Topic, param2: string, param3: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams, param4: string): com.walletconnect.auth.common.model.JsonRpcHistoryEntry;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public toString(): string;

            public getId(): number;

            public constructor(param0: number, param1: com.walletconnect.foundation.common.model.Topic, param2: string, param3: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams, param4: string);

            public getResponse(): string;

            public getParams(): com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams;

            public getMethod(): string;

            public component1(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export class PayloadParams {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.PayloadParams>;
            public type: string;
            public chainId: string;
            public domain: string;
            public aud: string;
            public version: string;
            public nonce: string;
            public iat: string;
            public nbf: string;
            public exp: string;
            public statement: string;
            public requestId: string;
            public resources: java.util.List<string>;

            public getNonce(): string;

            public component5(): string;

            public getVersion(): string;

            public getType(): string;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public component11(): string;

            public getChainId(): string;

            public component9(): string;

            public getAud(): string;

            public component4(): string;

            public getExp(): string;

            public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: java.util.List<string>);

            public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: java.util.List<string>): com.walletconnect.auth.common.model.PayloadParams;

            public component10(): string;

            public component8(): string;

            public component12(): java.util.List<string>;

            public getDomain(): string;

            public component3(): string;

            public getIat(): string;

            public component7(): string;

            public toString(): string;

            public getRequestId(): string;

            public component2(): string;

            public getStatement(): string;

            public component6(): string;

            public getResources(): java.util.List<string>;

            public getNbf(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export class PayloadParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.auth.common.model.PayloadParams> {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.PayloadParamsJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public nullableStringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public nullableListOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;

            public constructor(param0: com.squareup.moshi.Moshi);

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.auth.common.model.PayloadParams;

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.auth.common.model.PayloadParams): void;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export class PendingRequest {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.PendingRequest>;
            public id: number;
            public payloadParams: com.walletconnect.auth.common.model.PayloadParams;

            public constructor(param0: number, param1: com.walletconnect.auth.common.model.PayloadParams);

            public copy(param0: number, param1: com.walletconnect.auth.common.model.PayloadParams): com.walletconnect.auth.common.model.PendingRequest;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public getPayloadParams(): com.walletconnect.auth.common.model.PayloadParams;

            public component1(): number;

            public component2(): com.walletconnect.auth.common.model.PayloadParams;

            public toString(): string;

            public getId(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export class Requester {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.Requester>;
            public publicKey: string;
            public metadata: com.walletconnect.android.internal.common.model.AppMetaData;

            public getPublicKey(): string;

            public copy(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData): com.walletconnect.auth.common.model.Requester;

            public component1(): string;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public component2(): com.walletconnect.android.internal.common.model.AppMetaData;

            public constructor(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData);

            public getMetadata(): com.walletconnect.android.internal.common.model.AppMetaData;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export class RequesterJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.auth.common.model.Requester> {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.RequesterJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public appMetaDataAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.AppMetaData>;

            public constructor(param0: com.squareup.moshi.Moshi);

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.auth.common.model.Requester): void;

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.auth.common.model.Requester;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export abstract class Respond {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.Respond>;

            public constructor();

            public getId(): number;
          }

          export module Respond {
            export class Error extends com.walletconnect.auth.common.model.Respond {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.Respond.Error>;
              public id: number;
              public code: number;
              public message: string;

              public constructor();

              public component1(): number;

              public hashCode(): number;

              public component2(): number;

              public getId(): number;

              public copy(param0: number, param1: number, param2: string): com.walletconnect.auth.common.model.Respond.Error;

              public toString(): string;

              public constructor(param0: number, param1: number, param2: string);

              public getCode(): number;

              public equals(param0: any): boolean;

              public getMessage(): string;

              public component3(): string;
            }

            export class Result extends com.walletconnect.auth.common.model.Respond {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.Respond.Result>;
              public id: number;
              public signature: com.walletconnect.auth.client.Auth.Model.Cacao.Signature;
              public iss: string;

              public constructor();

              public getSignature(): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

              public getIss(): string;

              public component1(): number;

              public hashCode(): number;

              public component2(): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

              public constructor(param0: number, param1: com.walletconnect.auth.client.Auth.Model.Cacao.Signature, param2: string);

              public getId(): number;

              public toString(): string;

              public equals(param0: any): boolean;

              public component3(): string;

              public copy(param0: number, param1: com.walletconnect.auth.client.Auth.Model.Cacao.Signature, param2: string): com.walletconnect.auth.common.model.Respond.Result;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module common {
        export module model {
          export abstract class Response {
            public static class: java.lang.Class<com.walletconnect.auth.common.model.Response>;

            public constructor();

            public getId(): number;
          }

          export module Response {
            export class Error extends com.walletconnect.auth.common.model.Response {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.Response.Error>;
              public id: number;
              public code: number;
              public message: string;

              public constructor();

              public component1(): number;

              public copy(param0: number, param1: number, param2: string): com.walletconnect.auth.common.model.Response.Error;

              public hashCode(): number;

              public component2(): number;

              public getId(): number;

              public toString(): string;

              public constructor(param0: number, param1: number, param2: string);

              public getCode(): number;

              public equals(param0: any): boolean;

              public getMessage(): string;

              public component3(): string;
            }

            export class Result extends com.walletconnect.auth.common.model.Response {
              public static class: java.lang.Class<com.walletconnect.auth.common.model.Response.Result>;
              public id: number;
              public cacao: com.walletconnect.android.internal.common.model.params.Cacao;

              public constructor();

              public component1(): number;

              public hashCode(): number;

              public component2(): com.walletconnect.android.internal.common.model.params.Cacao;

              public getId(): number;

              public copy(param0: number, param1: com.walletconnect.android.internal.common.model.params.Cacao): com.walletconnect.auth.common.model.Response.Result;

              public toString(): string;

              public constructor(param0: number, param1: com.walletconnect.android.internal.common.model.params.Cacao);

              public equals(param0: any): boolean;

              public getCacao(): com.walletconnect.android.internal.common.model.params.Cacao;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module engine {
        export module domain {
          export class AuthEngine {
            public static class: java.lang.Class<com.walletconnect.auth.engine.domain.AuthEngine>;
            public jsonRpcInteractor: com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface;
            public getPendingJsonRpcHistoryEntriesUseCase: com.walletconnect.auth.json_rpc.domain.GetPendingJsonRpcHistoryEntriesUseCase;
            public getPendingJsonRpcHistoryEntryByIdUseCase: com.walletconnect.auth.json_rpc.domain.GetPendingJsonRpcHistoryEntryByIdUseCase;
            public crypto: com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository;
            public pairingHandler: com.walletconnect.android.pairing.handler.PairingControllerInterface;
            public pairingInterface: com.walletconnect.android.pairing.client.PairingInterface;
            public selfAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;
            public cacaoVerifier: com.walletconnect.auth.signature.cacao.CacaoVerifier;
            public logger: com.walletconnect.foundation.util.Logger;
            public jsonRpcRequestsJob: kotlinx.coroutines.Job;
            public jsonRpcResponsesJob: kotlinx.coroutines.Job;
            public internalErrorsJob: kotlinx.coroutines.Job;
            public _engineEvent: kotlinx.coroutines.flow.MutableSharedFlow<com.walletconnect.android.internal.common.model.type.EngineEvent>;
            public engineEvent: kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.type.EngineEvent>;
            public pairingTopicToResponseTopicMap: java.util.Map<com.walletconnect.foundation.common.model.Topic, com.walletconnect.foundation.common.model.Topic>;

            public request$sdk_release(param0: com.walletconnect.auth.common.model.PayloadParams, param1: string, param2: any, param3: kotlin.jvm.functions.Function1<any>): void;

            public collectJsonRpcRequests(): kotlinx.coroutines.Job;

            public onAuthRequestResponse(param0: com.walletconnect.android.internal.common.model.WCResponse, param1: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams): void;

            public constructor(param0: com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface, param1: com.walletconnect.auth.json_rpc.domain.GetPendingJsonRpcHistoryEntriesUseCase, param2: com.walletconnect.auth.json_rpc.domain.GetPendingJsonRpcHistoryEntryByIdUseCase, param3: com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository, param4: com.walletconnect.android.pairing.handler.PairingControllerInterface, param5: com.walletconnect.android.pairing.client.PairingInterface, param6: com.walletconnect.android.internal.common.model.AppMetaData, param7: com.walletconnect.auth.signature.cacao.CacaoVerifier, param8: com.walletconnect.foundation.util.Logger);

            public respond$sdk_release(param0: com.walletconnect.auth.common.model.Respond, param1: kotlin.jvm.functions.Function1<any>): void;

            public formatMessage$sdk_release(param0: com.walletconnect.auth.common.model.PayloadParams, param1: string): string;

            public collectJsonRpcResponses(): kotlinx.coroutines.Job;

            public getEngineEvent(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.type.EngineEvent>;

            public setup(): void;

            public updatePairing(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams): void;

            public resubscribeToPendingRequestsTopics(): void;

            public onAuthRequest(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.auth.common.json_rpc.AuthParams.RequestParams): void;

            public getPendingRequests$sdk_release(): java.util.List<com.walletconnect.auth.common.model.PendingRequest>;

            public collectInternalErrors(): kotlinx.coroutines.Job;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module json_rpc {
        export module domain {
          export class GetPendingJsonRpcHistoryEntriesUseCase {
            public static class: java.lang.Class<com.walletconnect.auth.json_rpc.domain.GetPendingJsonRpcHistoryEntriesUseCase>;
            public jsonRpcHistory: com.walletconnect.android.internal.common.storage.JsonRpcHistory;
            public serializer: com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer;

            public constructor(param0: com.walletconnect.android.internal.common.storage.JsonRpcHistory, param1: com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer);

            public invoke(): java.util.List<com.walletconnect.auth.common.model.JsonRpcHistoryEntry>;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module json_rpc {
        export module domain {
          export class GetPendingJsonRpcHistoryEntryByIdUseCase {
            public static class: java.lang.Class<com.walletconnect.auth.json_rpc.domain.GetPendingJsonRpcHistoryEntryByIdUseCase>;
            public jsonRpcHistory: com.walletconnect.android.internal.common.storage.JsonRpcHistory;
            public serializer: com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer;

            public constructor(param0: com.walletconnect.android.internal.common.storage.JsonRpcHistory, param1: com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer);

            public invoke(param0: number): com.walletconnect.auth.common.model.JsonRpcHistoryEntry;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module json_rpc {
        export module domain {
          export class GetResponseByIdUseCase {
            public static class: java.lang.Class<com.walletconnect.auth.json_rpc.domain.GetResponseByIdUseCase>;
            public jsonRpcHistory: com.walletconnect.android.internal.common.storage.JsonRpcHistory;
            public serializer: com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer;

            public invoke(param0: number): com.walletconnect.android.internal.common.JsonRpcResponse;

            public constructor(param0: com.walletconnect.android.internal.common.storage.JsonRpcHistory, param1: com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module json_rpc {
        export module model {
          export class JsonRpcMethod {
            public static class: java.lang.Class<com.walletconnect.auth.json_rpc.model.JsonRpcMethod>;
            public static INSTANCE: com.walletconnect.auth.json_rpc.model.JsonRpcMethod;
            public static WC_AUTH_REQUEST: string;

            public constructor();

            public static<clinit>(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module signature {
        export class CacaoType {
          public static class: java.lang.Class<com.walletconnect.auth.signature.CacaoType>;
          public static EIP4361: com.walletconnect.auth.signature.CacaoType;
          public header: string;

          public toHeader$sdk_release(): com.walletconnect.android.internal.common.model.params.Cacao.Header;

          public static values(): androidNative.Array<com.walletconnect.auth.signature.CacaoType>;

          public getHeader(): string;

          public constructor(param0: string);

          public static valueOf(param0: string): com.walletconnect.auth.signature.CacaoType;

          public static<clinit>(): void;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module signature {
        export class Signature {
          public static class: java.lang.Class<com.walletconnect.auth.signature.Signature>;
          public v: androidNative.Array<number>;
          public r: androidNative.Array<number>;
          public s: androidNative.Array<number>;

          public equals(param0: any): boolean;

          public component1(): androidNative.Array<number>;

          public toString(): string;

          public getV(): androidNative.Array<number>;

          public getR(): androidNative.Array<number>;

          public constructor(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>);

          public copy(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>): com.walletconnect.auth.signature.Signature;

          public component2(): androidNative.Array<number>;

          public component3(): androidNative.Array<number>;

          public static<clinit>(): void;

          public hashCode(): number;

          public getS(): androidNative.Array<number>;
        }

        export module Signature {
          export class Companion {
            public static class: java.lang.Class<com.walletconnect.auth.signature.Signature.Companion>;

            public fromString(param0: string): com.walletconnect.auth.signature.Signature;

            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module signature {
        export class SignatureType {
          public static class: java.lang.Class<com.walletconnect.auth.signature.SignatureType>;
          public static EIP191: com.walletconnect.auth.signature.SignatureType;
          public static EIP1271: com.walletconnect.auth.signature.SignatureType;
          public header: string;

          public getHeader(): string;

          public constructor(param0: string);

          public static valueOf(param0: string): com.walletconnect.auth.signature.SignatureType;

          public static values(): androidNative.Array<com.walletconnect.auth.signature.SignatureType>;

          public static<clinit>(): void;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module signature {
        export module cacao {
          export class CacaoSigner {
            public static class: java.lang.Class<com.walletconnect.auth.signature.cacao.CacaoSigner>;
            public static INSTANCE: com.walletconnect.auth.signature.cacao.CacaoSigner;

            public sign(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: com.walletconnect.auth.signature.SignatureType): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;
            public sign(param0: string, param1: androidNative.Array<number>, param2: com.walletconnect.auth.signature.SignatureType): com.walletconnect.auth.client.Auth.Model.Cacao.Signature;

            public constructor();

            public static<clinit>(): void;
          }

          export module CacaoSigner {
            export class WhenMappings {
              public static class: java.lang.Class<com.walletconnect.auth.signature.cacao.CacaoSigner.WhenMappings>;

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module signature {
        export module cacao {
          export class CacaoVerifier {
            public static class: java.lang.Class<com.walletconnect.auth.signature.cacao.CacaoVerifier>;
            public projectId: string;

            public verify(param0: com.walletconnect.android.internal.common.model.params.Cacao): boolean;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module signature {
        export module eip1271 {
          export class EIP1271Verifier {
            public static class: java.lang.Class<com.walletconnect.auth.signature.eip1271.EIP1271Verifier>;
            public static INSTANCE: com.walletconnect.auth.signature.eip1271.EIP1271Verifier;
            public static isValidSignatureHash: string;
            public static method: string;
            public static dynamicTypeOffset: string;
            public static dynamicTypeLength: string;
            public static mediaTypeString: string;
            public static rpcUrlPrefix: string;
            public static hexPrefix: string;

            public prefixWithRpcUrl(param0: string): string;

            public verify(param0: com.walletconnect.auth.signature.Signature, param1: string, param2: string, param3: string): boolean;

            public constructor();

            public static<clinit>(): void;

            public createBody(param0: string, param1: string, param2: number): okhttp3.RequestBody;

            public getValidResponse(param0: number): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module signature {
        export module eip191 {
          export class EIP191Signer {
            public static class: java.lang.Class<com.walletconnect.auth.signature.eip191.EIP191Signer>;
            public static INSTANCE: com.walletconnect.auth.signature.eip191.EIP191Signer;

            public constructor();

            public sign(param0: androidNative.Array<number>, param1: androidNative.Array<number>): com.walletconnect.auth.signature.Signature;

            public signNoPrefix(param0: androidNative.Array<number>, param1: androidNative.Array<number>): com.walletconnect.auth.signature.Signature;

            public static<clinit>(): void;

            public sign(param0: string, param1: androidNative.Array<number>): com.walletconnect.auth.signature.Signature;

            public signNoPrefix(param0: string, param1: androidNative.Array<number>): com.walletconnect.auth.signature.Signature;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module auth {
      export module signature {
        export module eip191 {
          export class EIP191Verifier {
            public static class: java.lang.Class<com.walletconnect.auth.signature.eip191.EIP191Verifier>;
            public static INSTANCE: com.walletconnect.auth.signature.eip191.EIP191Verifier;

            public getAddressUsedToSignMessage(param0: org.web3j.crypto.Sign.SignatureData, param1: androidNative.Array<number>): string;

            public constructor();

            public verify(param0: com.walletconnect.auth.signature.Signature, param1: string, param2: string): boolean;

            public getAddressUsedToSignPrefixedMessage(param0: org.web3j.crypto.Sign.SignatureData, param1: androidNative.Array<number>): string;

            public verify(param0: com.walletconnect.auth.signature.Signature, param1: androidNative.Array<number>, param2: string): boolean;

            public verifyNoPrefix(param0: com.walletconnect.auth.signature.Signature, param1: androidNative.Array<number>, param2: string): boolean;

            public static<clinit>(): void;

            public verifyNoPrefix(param0: com.walletconnect.auth.signature.Signature, param1: string, param2: string): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export class BuildConfig {
        public static class: java.lang.Class<com.walletconnect.sign.BuildConfig>;
        public static DEBUG: boolean;
        public static LIBRARY_PACKAGE_NAME: string;
        public static BUILD_TYPE: string;
        public static SDK_VERSION: string;

        public constructor();
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export class SignDatabase {
        public static class: java.lang.Class<com.walletconnect.sign.SignDatabase>;

        /**
         * Constructs a new instance of the com.walletconnect.sign.SignDatabase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          <clinit>(): void;
          getNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.namespace.NamespaceDaoQueries;
          getNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionDaoQueries;
          getProposalNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDaoQueries;
          getProposalNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionDaoQueries;
          getSessionDaoQueries(): com.walletconnect.sign.storage.data.dao.session.SessionDaoQueries;
          getTempNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDaoQueries;
          getTempNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionDaoQueries;
        });
        public constructor();

        public getProposalNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDaoQueries;

        public getNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionDaoQueries;

        public getSessionDaoQueries(): com.walletconnect.sign.storage.data.dao.session.SessionDaoQueries;

        public getTempNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDaoQueries;

        public getNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.namespace.NamespaceDaoQueries;

        public getProposalNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionDaoQueries;

        public getTempNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionDaoQueries;
      }

      export module SignDatabase {
        export class Companion {
          public static class: java.lang.Class<com.walletconnect.sign.SignDatabase.Companion>;

          public getSchema(): com.squareup.sqldelight.db.SqlDriver.Schema;

          public constructor();

          public static<clinit>(): void;

          public invoke(param0: com.squareup.sqldelight.db.SqlDriver, param1: com.walletconnect.sign.storage.data.dao.namespace.NamespaceDao.Adapter, param2: com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionsDao.Adapter, param3: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDao.Adapter, param4: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionsDao.Adapter, param5: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDao.Adapter, param6: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionsDao.Adapter): com.walletconnect.sign.SignDatabase;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module client {
        export class Sign {
          public static class: java.lang.Class<com.walletconnect.sign.client.Sign>;
          public static INSTANCE: com.walletconnect.sign.client.Sign;

          public constructor();

          public static<clinit>(): void;
        }

        export module Sign {
          export class ConnectionType {
            public static class: java.lang.Class<com.walletconnect.sign.client.Sign.ConnectionType>;
            public static AUTOMATIC: com.walletconnect.sign.client.Sign.ConnectionType;
            public static MANUAL: com.walletconnect.sign.client.Sign.ConnectionType;

            public constructor(param0: string, param1: number);

            public static<clinit>(): void;

            public static values(): androidNative.Array<com.walletconnect.sign.client.Sign.ConnectionType>;

            public static valueOf(param0: string): com.walletconnect.sign.client.Sign.ConnectionType;
          }

          export class Listeners {
            public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Listeners>;

            /**
             * Constructs a new instance of the com.walletconnect.sign.client.Sign$Listeners interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }

          export module Listeners {
            export class SessionPing extends com.walletconnect.sign.client.Sign.Listeners {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Listeners.SessionPing>;

              /**
               * Constructs a new instance of the com.walletconnect.sign.client.Sign$Listeners$SessionPing interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onSuccess(param0: com.walletconnect.sign.client.Sign.Model.Ping.Success): void;
                onError(param0: com.walletconnect.sign.client.Sign.Model.Ping.Error): void;
              });
              public constructor();

              public onSuccess(param0: com.walletconnect.sign.client.Sign.Model.Ping.Success): void;

              public onError(param0: com.walletconnect.sign.client.Sign.Model.Ping.Error): void;
            }
          }

          export abstract class Model {
            public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model>;

            public constructor();
          }

          export module Model {
            export class ApprovedSession extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.ApprovedSession>;
              public topic: string;
              public metaData: com.walletconnect.android.Core.Model.AppMetaData;
              public namespaces: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;
              public accounts: java.util.List<string>;

              public constructor();

              public getTopic(): string;

              public getMetaData(): com.walletconnect.android.Core.Model.AppMetaData;

              public component4(): java.util.List<string>;

              public hashCode(): number;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public component3(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public toString(): string;

              public getAccounts(): java.util.List<string>;

              public component1(): string;

              public component2(): com.walletconnect.android.Core.Model.AppMetaData;

              public copy(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData, param2: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param3: java.util.List<string>): com.walletconnect.sign.client.Sign.Model.ApprovedSession;

              public equals(param0: any): boolean;

              public constructor(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData, param2: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param3: java.util.List<string>);
            }

            export class ConnectionState extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.ConnectionState>;

              public constructor();

              public copy(param0: boolean): com.walletconnect.sign.client.Sign.Model.ConnectionState;

              public component1(): boolean;

              public hashCode(): number;

              public constructor(param0: boolean);

              public toString(): string;

              public isAvailable(): boolean;

              public equals(param0: any): boolean;
            }

            export abstract class DeletedSession extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.DeletedSession>;

              public constructor();
            }

            export module DeletedSession {
              export class Error extends com.walletconnect.sign.client.Sign.Model.DeletedSession {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.DeletedSession.Error>;
                public error: java.lang.Throwable;

                public getError(): java.lang.Throwable;

                public toString(): string;

                public constructor(param0: java.lang.Throwable);

                public copy(param0: java.lang.Throwable): com.walletconnect.sign.client.Sign.Model.DeletedSession.Error;

                public equals(param0: any): boolean;

                public constructor();

                public component1(): java.lang.Throwable;

                public hashCode(): number;
              }

              export class Success extends com.walletconnect.sign.client.Sign.Model.DeletedSession {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.DeletedSession.Success>;
                public topic: string;
                public reason: string;

                public component1(): string;

                public toString(): string;

                public copy(param0: string, param1: string): com.walletconnect.sign.client.Sign.Model.DeletedSession.Success;

                public constructor(param0: string, param1: string);

                public getReason(): string;

                public equals(param0: any): boolean;

                public getTopic(): string;

                public constructor();

                public component2(): string;

                public hashCode(): number;
              }
            }

            export class Error extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Error>;
              public throwable: java.lang.Throwable;

              public constructor();

              public hashCode(): number;

              public constructor(param0: java.lang.Throwable);

              public toString(): string;

              public getThrowable(): java.lang.Throwable;

              public copy(param0: java.lang.Throwable): com.walletconnect.sign.client.Sign.Model.Error;

              public equals(param0: any): boolean;

              public component1(): java.lang.Throwable;
            }

            export abstract class JsonRpcResponse extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.JsonRpcResponse>;
              public jsonrpc: string;

              public constructor();

              public getJsonrpc(): string;

              public getId(): number;
            }

            export module JsonRpcResponse {
              export class JsonRpcError extends com.walletconnect.sign.client.Sign.Model.JsonRpcResponse {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.JsonRpcResponse.JsonRpcError>;
                public id: number;
                public code: number;
                public message: string;

                public getId(): number;

                public toString(): string;

                public component1(): number;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public component2(): number;

                public constructor();
                public constructor(param0: number, param1: number, param2: string);

                public component3(): string;

                public hashCode(): number;

                public copy(param0: number, param1: number, param2: string): com.walletconnect.sign.client.Sign.Model.JsonRpcResponse.JsonRpcError;

                public getCode(): number;
              }

              export class JsonRpcResult extends com.walletconnect.sign.client.Sign.Model.JsonRpcResponse {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.JsonRpcResponse.JsonRpcResult>;
                public id: number;
                public result: string;

                public getId(): number;

                public toString(): string;

                public component1(): number;

                public getResult(): string;

                public copy(param0: number, param1: string): com.walletconnect.sign.client.Sign.Model.JsonRpcResponse.JsonRpcResult;

                public equals(param0: any): boolean;

                public constructor();
                public constructor(param0: number, param1: string);

                public component2(): string;

                public hashCode(): number;
              }
            }

            export abstract class Namespace extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Namespace>;

              public constructor();
            }

            export module Namespace {
              export class Proposal extends com.walletconnect.sign.client.Sign.Model.Namespace {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>;
                public chains: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;
                public extensions: java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension>;

                public toString(): string;

                public component2(): java.util.List<string>;

                public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension>);

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public constructor();

                public component4(): java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension>;

                public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension>): com.walletconnect.sign.client.Sign.Model.Namespace.Proposal;

                public getEvents(): java.util.List<string>;

                public component1(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public getExtensions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension>;

                public hashCode(): number;

                public getChains(): java.util.List<string>;
              }

              export module Proposal {
                export class Extension {
                  public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension>;
                  public chains: java.util.List<string>;
                  public methods: java.util.List<string>;
                  public events: java.util.List<string>;

                  public component3(): java.util.List<string>;

                  public hashCode(): number;

                  public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                  public getMethods(): java.util.List<string>;

                  public equals(param0: any): boolean;

                  public getEvents(): java.util.List<string>;

                  public toString(): string;

                  public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.client.Sign.Model.Namespace.Proposal.Extension;

                  public getChains(): java.util.List<string>;

                  public component1(): java.util.List<string>;

                  public component2(): java.util.List<string>;
                }
              }

              export class Session extends com.walletconnect.sign.client.Sign.Model.Namespace {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Namespace.Session>;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;
                public extensions: java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension>;

                public toString(): string;

                public component2(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension>): com.walletconnect.sign.client.Sign.Model.Namespace.Session;

                public getExtensions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension>;

                public constructor();

                public getAccounts(): java.util.List<string>;

                public component4(): java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension>;

                public getEvents(): java.util.List<string>;

                public component1(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension>);

                public hashCode(): number;
              }

              export module Session {
                export class Extension {
                  public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension>;
                  public accounts: java.util.List<string>;
                  public methods: java.util.List<string>;
                  public events: java.util.List<string>;

                  public component3(): java.util.List<string>;

                  public hashCode(): number;

                  public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                  public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.client.Sign.Model.Namespace.Session.Extension;

                  public getAccounts(): java.util.List<string>;

                  public getMethods(): java.util.List<string>;

                  public equals(param0: any): boolean;

                  public getEvents(): java.util.List<string>;

                  public toString(): string;

                  public component1(): java.util.List<string>;

                  public component2(): java.util.List<string>;
                }
              }
            }

            export class Pairing extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Pairing>;
              public topic: string;
              public metaData: com.walletconnect.android.Core.Model.AppMetaData;

              public constructor();

              public getTopic(): string;

              public getMetaData(): com.walletconnect.android.Core.Model.AppMetaData;

              public component2(): com.walletconnect.android.Core.Model.AppMetaData;

              public hashCode(): number;

              public constructor(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData);

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;

              public copy(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData): com.walletconnect.sign.client.Sign.Model.Pairing;
            }

            export class PendingRequest extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.PendingRequest>;
              public requestId: number;
              public topic: string;
              public method: string;
              public chainId: string;
              public params: string;

              public constructor();

              public getTopic(): string;

              public component2(): string;

              public getMethod(): string;

              public hashCode(): number;

              public getChainId(): string;

              public toString(): string;

              public component5(): string;

              public component3(): string;

              public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);

              public component1(): number;

              public getRequestId(): number;

              public component4(): string;

              public copy(param0: number, param1: string, param2: string, param3: string, param4: string): com.walletconnect.sign.client.Sign.Model.PendingRequest;

              public getParams(): string;

              public equals(param0: any): boolean;
            }

            export abstract class Ping extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Ping>;

              public constructor();
            }

            export module Ping {
              export class Error extends com.walletconnect.sign.client.Sign.Model.Ping {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Ping.Error>;
                public error: java.lang.Throwable;

                public getError(): java.lang.Throwable;

                public toString(): string;

                public constructor(param0: java.lang.Throwable);

                public equals(param0: any): boolean;

                public constructor();

                public copy(param0: java.lang.Throwable): com.walletconnect.sign.client.Sign.Model.Ping.Error;

                public component1(): java.lang.Throwable;

                public hashCode(): number;
              }

              export class Success extends com.walletconnect.sign.client.Sign.Model.Ping {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Ping.Success>;
                public topic: string;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getTopic(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public copy(param0: string): com.walletconnect.sign.client.Sign.Model.Ping.Success;
              }
            }

            export abstract class ProposedSequence extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.ProposedSequence>;

              public constructor();
            }

            export module ProposedSequence {
              export class Pairing extends com.walletconnect.sign.client.Sign.Model.ProposedSequence {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.ProposedSequence.Pairing>;
                public uri: string;

                public getUri(): string;

                public constructor();
                public constructor(param0: string);
              }

              export class Session extends com.walletconnect.sign.client.Sign.Model.ProposedSequence {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.ProposedSequence.Session>;
                public static INSTANCE: com.walletconnect.sign.client.Sign.Model.ProposedSequence.Session;

                public constructor();

                public static<clinit>(): void;
              }
            }

            export class RejectedSession extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.RejectedSession>;
              public topic: string;
              public reason: string;

              public constructor();

              public getTopic(): string;

              public component2(): string;

              public hashCode(): number;

              public constructor(param0: string, param1: string);

              public copy(param0: string, param1: string): com.walletconnect.sign.client.Sign.Model.RejectedSession;

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;

              public getReason(): string;
            }

            export class RelayProtocolOptions extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.RelayProtocolOptions>;
              public protocol: string;
              public data: string;

              public constructor();

              public component2(): string;

              public getData(): string;

              public hashCode(): number;

              public getProtocol(): string;

              public constructor(param0: string, param1: string);

              public toString(): string;

              public copy(param0: string, param1: string): com.walletconnect.sign.client.Sign.Model.RelayProtocolOptions;

              public equals(param0: any): boolean;

              public component1(): string;
            }

            export class Session extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.Session>;
              public topic: string;
              public expiry: number;
              public namespaces: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;
              public metaData: com.walletconnect.android.Core.Model.AppMetaData;
              public redirect: string;

              public constructor();

              public getTopic(): string;

              public getMetaData(): com.walletconnect.android.Core.Model.AppMetaData;

              public constructor(param0: string, param1: number, param2: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param3: com.walletconnect.android.Core.Model.AppMetaData);

              public getExpiry(): number;

              public hashCode(): number;

              public component2(): number;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public getRedirect(): string;

              public component3(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public toString(): string;

              public component1(): string;

              public copy(param0: string, param1: number, param2: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param3: com.walletconnect.android.Core.Model.AppMetaData): com.walletconnect.sign.client.Sign.Model.Session;

              public component4(): com.walletconnect.android.Core.Model.AppMetaData;

              public equals(param0: any): boolean;
            }

            export class SessionEvent extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SessionEvent>;
              public name: string;
              public data: string;

              public constructor();

              public component2(): string;

              public getData(): string;

              public copy(param0: string, param1: string): com.walletconnect.sign.client.Sign.Model.SessionEvent;

              public hashCode(): number;

              public constructor(param0: string, param1: string);

              public getName(): string;

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;
            }

            export class SessionProposal extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SessionProposal>;
              public name: string;
              public description: string;
              public url: string;
              public icons: java.util.List<java.net.URI>;
              public requiredNamespaces: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>;
              public proposerPublicKey: string;
              public relayProtocol: string;
              public relayData: string;

              public constructor();

              public getIcons(): java.util.List<java.net.URI>;

              public component2(): string;

              public component7(): string;

              public constructor(param0: string, param1: string, param2: string, param3: java.util.List<java.net.URI>, param4: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>, param5: string, param6: string, param7: string);

              public hashCode(): number;

              public getRelayProtocol(): string;

              public getRequiredNamespaces(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>;

              public toString(): string;

              public component4(): java.util.List<java.net.URI>;

              public getDescription(): string;

              public component3(): string;

              public component1(): string;

              public component8(): string;

              public getUrl(): string;

              public getName(): string;

              public getProposerPublicKey(): string;

              public getRelayData(): string;

              public component5(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>;

              public component6(): string;

              public equals(param0: any): boolean;

              public copy(param0: string, param1: string, param2: string, param3: java.util.List<java.net.URI>, param4: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>, param5: string, param6: string, param7: string): com.walletconnect.sign.client.Sign.Model.SessionProposal;
            }

            export class SessionRequest extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SessionRequest>;
              public topic: string;
              public chainId: string;
              public peerMetaData: com.walletconnect.android.Core.Model.AppMetaData;
              public request: com.walletconnect.sign.client.Sign.Model.SessionRequest.JSONRPCRequest;

              public constructor();

              public getTopic(): string;

              public component2(): string;

              public constructor(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.sign.client.Sign.Model.SessionRequest.JSONRPCRequest);

              public hashCode(): number;

              public getChainId(): string;

              public getPeerMetaData(): com.walletconnect.android.Core.Model.AppMetaData;

              public component4(): com.walletconnect.sign.client.Sign.Model.SessionRequest.JSONRPCRequest;

              public toString(): string;

              public copy(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.sign.client.Sign.Model.SessionRequest.JSONRPCRequest): com.walletconnect.sign.client.Sign.Model.SessionRequest;

              public component1(): string;

              public getRequest(): com.walletconnect.sign.client.Sign.Model.SessionRequest.JSONRPCRequest;

              public component3(): com.walletconnect.android.Core.Model.AppMetaData;

              public equals(param0: any): boolean;
            }

            export module SessionRequest {
              export class JSONRPCRequest extends com.walletconnect.sign.client.Sign.Model {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SessionRequest.JSONRPCRequest>;
                public id: number;
                public method: string;
                public params: string;

                public getId(): number;

                public toString(): string;

                public constructor(param0: number, param1: string, param2: string);

                public getMethod(): string;

                public component1(): number;

                public getParams(): string;

                public equals(param0: any): boolean;

                public constructor();

                public copy(param0: number, param1: string, param2: string): com.walletconnect.sign.client.Sign.Model.SessionRequest.JSONRPCRequest;

                public component2(): string;

                public component3(): string;

                public hashCode(): number;
              }
            }

            export class SessionRequestResponse extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SessionRequestResponse>;
              public topic: string;
              public chainId: string;
              public method: string;
              public result: com.walletconnect.sign.client.Sign.Model.JsonRpcResponse;

              public constructor();

              public getTopic(): string;

              public component2(): string;

              public getMethod(): string;

              public getResult(): com.walletconnect.sign.client.Sign.Model.JsonRpcResponse;

              public hashCode(): number;

              public getChainId(): string;

              public copy(param0: string, param1: string, param2: string, param3: com.walletconnect.sign.client.Sign.Model.JsonRpcResponse): com.walletconnect.sign.client.Sign.Model.SessionRequestResponse;

              public toString(): string;

              public component3(): string;

              public component1(): string;

              public constructor(param0: string, param1: string, param2: string, param3: com.walletconnect.sign.client.Sign.Model.JsonRpcResponse);

              public equals(param0: any): boolean;

              public component4(): com.walletconnect.sign.client.Sign.Model.JsonRpcResponse;
            }

            export abstract class SessionUpdateResponse extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse>;

              public constructor();
            }

            export module SessionUpdateResponse {
              export class Error extends com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse.Error>;
                public errorMessage: string;

                public component1(): string;

                public getErrorMessage(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor();

                public copy(param0: string): com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse.Error;

                public constructor(param0: string);

                public hashCode(): number;
              }

              export class Result extends com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse.Result>;
                public topic: string;
                public namespaces: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

                public component1(): string;

                public component2(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

                public toString(): string;

                public copy(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>): com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse.Result;

                public equals(param0: any): boolean;

                public getTopic(): string;

                public constructor();

                public getNamespaces(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

                public hashCode(): number;

                public constructor(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>);
              }
            }

            export abstract class SettledSessionResponse extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SettledSessionResponse>;

              public constructor();
            }

            export module SettledSessionResponse {
              export class Error extends com.walletconnect.sign.client.Sign.Model.SettledSessionResponse {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SettledSessionResponse.Error>;
                public errorMessage: string;

                public component1(): string;

                public getErrorMessage(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public copy(param0: string): com.walletconnect.sign.client.Sign.Model.SettledSessionResponse.Error;
              }

              export class Result extends com.walletconnect.sign.client.Sign.Model.SettledSessionResponse {
                public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.SettledSessionResponse.Result>;
                public session: com.walletconnect.sign.client.Sign.Model.Session;

                public constructor(param0: com.walletconnect.sign.client.Sign.Model.Session);

                public toString(): string;

                public copy(param0: com.walletconnect.sign.client.Sign.Model.Session): com.walletconnect.sign.client.Sign.Model.SettledSessionResponse.Result;

                public component1(): com.walletconnect.sign.client.Sign.Model.Session;

                public getSession(): com.walletconnect.sign.client.Sign.Model.Session;

                public equals(param0: any): boolean;

                public constructor();

                public hashCode(): number;
              }
            }

            export class UpdatedSession extends com.walletconnect.sign.client.Sign.Model {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Model.UpdatedSession>;
              public topic: string;
              public namespaces: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public constructor();

              public getTopic(): string;

              public copy(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>): com.walletconnect.sign.client.Sign.Model.UpdatedSession;

              public hashCode(): number;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public constructor(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>);

              public toString(): string;

              public component2(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public equals(param0: any): boolean;

              public component1(): string;
            }
          }

          export abstract class Params {
            public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params>;

            public constructor();
          }

          export module Params {
            export class Approve extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Approve>;
              public proposerPublicKey: string;
              public namespaces: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;
              public relayProtocol: string;

              public constructor();

              public hashCode(): number;

              public getProposerPublicKey(): string;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public copy(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param2: string): com.walletconnect.sign.client.Sign.Params.Approve;

              public getRelayProtocol(): string;

              public toString(): string;

              public component2(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public equals(param0: any): boolean;

              public component3(): string;

              public constructor(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param2: string);

              public component1(): string;
            }

            export class Connect extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Connect>;
              public namespaces: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>;
              public pairing: com.walletconnect.android.Core.Model.Pairing;

              public constructor();

              public component1(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>;

              public component2(): com.walletconnect.android.Core.Model.Pairing;

              public getPairing(): com.walletconnect.android.Core.Model.Pairing;

              public copy(param0: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>, param1: com.walletconnect.android.Core.Model.Pairing): com.walletconnect.sign.client.Sign.Params.Connect;

              public hashCode(): number;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>;

              public constructor(param0: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>, param1: com.walletconnect.android.Core.Model.Pairing);

              public toString(): string;

              public equals(param0: any): boolean;
            }

            export class Disconnect extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Disconnect>;
              public sessionTopic: string;

              public constructor();

              public hashCode(): number;

              public constructor(param0: string);

              public getSessionTopic(): string;

              public copy(param0: string): com.walletconnect.sign.client.Sign.Params.Disconnect;

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;
            }

            export class Emit extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Emit>;
              public topic: string;
              public event: com.walletconnect.sign.client.Sign.Model.SessionEvent;
              public chainId: string;

              public constructor();

              public getTopic(): string;

              public component2(): com.walletconnect.sign.client.Sign.Model.SessionEvent;

              public copy(param0: string, param1: com.walletconnect.sign.client.Sign.Model.SessionEvent, param2: string): com.walletconnect.sign.client.Sign.Params.Emit;

              public hashCode(): number;

              public constructor(param0: string, param1: com.walletconnect.sign.client.Sign.Model.SessionEvent, param2: string);

              public getChainId(): string;

              public getEvent(): com.walletconnect.sign.client.Sign.Model.SessionEvent;

              public toString(): string;

              public equals(param0: any): boolean;

              public component3(): string;

              public component1(): string;
            }

            export class Extend extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Extend>;
              public topic: string;

              public constructor();

              public getTopic(): string;

              public copy(param0: string): com.walletconnect.sign.client.Sign.Params.Extend;

              public hashCode(): number;

              public constructor(param0: string);

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;
            }

            export class Init extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Init>;
              public core: com.walletconnect.android.CoreClient;

              public constructor();

              public component1(): com.walletconnect.android.CoreClient;

              public hashCode(): number;

              public getCore(): com.walletconnect.android.CoreClient;

              public toString(): string;

              public equals(param0: any): boolean;

              public constructor(param0: com.walletconnect.android.CoreClient);

              public copy(param0: com.walletconnect.android.CoreClient): com.walletconnect.sign.client.Sign.Params.Init;
            }

            export class Pair extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Pair>;
              public uri: string;

              public constructor();

              public hashCode(): number;

              public constructor(param0: string);

              public toString(): string;

              public getUri(): string;

              public equals(param0: any): boolean;

              public copy(param0: string): com.walletconnect.sign.client.Sign.Params.Pair;

              public component1(): string;
            }

            export class Ping extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Ping>;
              public topic: string;

              public constructor();

              public getTopic(): string;

              public copy(param0: string): com.walletconnect.sign.client.Sign.Params.Ping;

              public hashCode(): number;

              public constructor(param0: string);

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;
            }

            export class Reject extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Reject>;
              public proposerPublicKey: string;
              public reason: string;

              public constructor();

              public component2(): string;

              public hashCode(): number;

              public constructor(param0: string, param1: string);

              public getProposerPublicKey(): string;

              public copy(param0: string, param1: string): com.walletconnect.sign.client.Sign.Params.Reject;

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;

              public getReason(): string;
            }

            export class Request extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Request>;
              public sessionTopic: string;
              public method: string;
              public params: string;
              public chainId: string;

              public constructor();

              public component2(): string;

              public getMethod(): string;

              public hashCode(): number;

              public getSessionTopic(): string;

              public getChainId(): string;

              public toString(): string;

              public component3(): string;

              public component1(): string;

              public constructor(param0: string, param1: string, param2: string, param3: string);

              public copy(param0: string, param1: string, param2: string, param3: string): com.walletconnect.sign.client.Sign.Params.Request;

              public component4(): string;

              public getParams(): string;

              public equals(param0: any): boolean;
            }

            export class Response extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Response>;
              public sessionTopic: string;
              public jsonRpcResponse: com.walletconnect.sign.client.Sign.Model.JsonRpcResponse;

              public constructor();
              public constructor(param0: string, param1: com.walletconnect.sign.client.Sign.Model.JsonRpcResponse);

              public hashCode(): number;

              public component2(): com.walletconnect.sign.client.Sign.Model.JsonRpcResponse;

              public getJsonRpcResponse(): com.walletconnect.sign.client.Sign.Model.JsonRpcResponse;

              public copy(param0: string, param1: com.walletconnect.sign.client.Sign.Model.JsonRpcResponse): com.walletconnect.sign.client.Sign.Params.Response;

              public getSessionTopic(): string;

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;
            }

            export class Update extends com.walletconnect.sign.client.Sign.Params {
              public static class: java.lang.Class<com.walletconnect.sign.client.Sign.Params.Update>;
              public sessionTopic: string;
              public namespaces: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public constructor();

              public copy(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>): com.walletconnect.sign.client.Sign.Params.Update;

              public hashCode(): number;

              public getSessionTopic(): string;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public constructor(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>);

              public toString(): string;

              public component2(): java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>;

              public equals(param0: any): boolean;

              public component1(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module client {
        export class SignClient extends com.walletconnect.sign.client.SignInterface {
          public static class: java.lang.Class<com.walletconnect.sign.client.SignClient>;
          public static INSTANCE: com.walletconnect.sign.client.SignClient;

          /** @deprecated */
          public getSettledSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;

          public initialize(param0: com.walletconnect.sign.client.Sign.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;

          public respond(param0: com.walletconnect.sign.client.Sign.Params.Response, param1: kotlin.jvm.functions.Function1<any>): void;

          public disconnect(param0: com.walletconnect.sign.client.Sign.Params.Disconnect, param1: kotlin.jvm.functions.Function1<any>): void;

          /** @deprecated */
          public getListOfSettledSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;

          public connect(param0: com.walletconnect.sign.client.Sign.Params.Connect, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;

          public setDappDelegate(param0: com.walletconnect.sign.client.SignInterface.DappDelegate): void;

          public extend(param0: com.walletconnect.sign.client.Sign.Params.Extend, param1: kotlin.jvm.functions.Function1<any>): void;

          /** @deprecated */
          public getListOfSettledPairings(): java.util.List<com.walletconnect.sign.client.Sign.Model.Pairing>;

          public setWalletDelegate(param0: com.walletconnect.sign.client.SignInterface.WalletDelegate): void;

          public update(param0: com.walletconnect.sign.client.Sign.Params.Update, param1: kotlin.jvm.functions.Function1<any>): void;

          public constructor();

          public getListOfActiveSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;

          public approveSession(param0: com.walletconnect.sign.client.Sign.Params.Approve, param1: kotlin.jvm.functions.Function1<any>): void;

          public rejectSession(param0: com.walletconnect.sign.client.Sign.Params.Reject, param1: kotlin.jvm.functions.Function1<any>): void;

          public static<clinit>(): void;

          public emit(param0: com.walletconnect.sign.client.Sign.Params.Emit, param1: kotlin.jvm.functions.Function1<any>): void;

          public getPendingRequests(param0: string): java.util.List<com.walletconnect.sign.client.Sign.Model.PendingRequest>;

          /** @deprecated */
          public pair(param0: com.walletconnect.sign.client.Sign.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;

          public request(param0: com.walletconnect.sign.client.Sign.Params.Request, param1: kotlin.jvm.functions.Function1<any>): void;

          public getActiveSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;

          public ping(param0: com.walletconnect.sign.client.Sign.Params.Ping, param1: com.walletconnect.sign.client.Sign.Listeners.SessionPing): void;
        }

        export module SignClient {
          export class DappDelegate extends com.walletconnect.sign.client.SignInterface.DappDelegate {
            public static class: java.lang.Class<com.walletconnect.sign.client.SignClient.DappDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.sign.client.SignClient$DappDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSessionApproved(param0: com.walletconnect.sign.client.Sign.Model.ApprovedSession): void;
              onSessionRejected(param0: com.walletconnect.sign.client.Sign.Model.RejectedSession): void;
              onSessionUpdate(param0: com.walletconnect.sign.client.Sign.Model.UpdatedSession): void;
              onSessionEvent(param0: com.walletconnect.sign.client.Sign.Model.SessionEvent): void;
              onSessionExtend(param0: com.walletconnect.sign.client.Sign.Model.Session): void;
              onSessionDelete(param0: com.walletconnect.sign.client.Sign.Model.DeletedSession): void;
              onSessionRequestResponse(param0: com.walletconnect.sign.client.Sign.Model.SessionRequestResponse): void;
              onConnectionStateChange(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): void;
              onError(param0: com.walletconnect.sign.client.Sign.Model.Error): void;
            });
            public constructor();

            public onError(param0: com.walletconnect.sign.client.Sign.Model.Error): void;

            public onSessionUpdate(param0: com.walletconnect.sign.client.Sign.Model.UpdatedSession): void;

            public onSessionExtend(param0: com.walletconnect.sign.client.Sign.Model.Session): void;

            public onSessionRequestResponse(param0: com.walletconnect.sign.client.Sign.Model.SessionRequestResponse): void;

            public onSessionApproved(param0: com.walletconnect.sign.client.Sign.Model.ApprovedSession): void;

            public onSessionEvent(param0: com.walletconnect.sign.client.Sign.Model.SessionEvent): void;

            public onSessionRejected(param0: com.walletconnect.sign.client.Sign.Model.RejectedSession): void;

            public onSessionDelete(param0: com.walletconnect.sign.client.Sign.Model.DeletedSession): void;

            public onConnectionStateChange(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): void;
          }

          export class WalletDelegate extends com.walletconnect.sign.client.SignInterface.WalletDelegate {
            public static class: java.lang.Class<com.walletconnect.sign.client.SignClient.WalletDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.sign.client.SignClient$WalletDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSessionProposal(param0: com.walletconnect.sign.client.Sign.Model.SessionProposal): void;
              onSessionRequest(param0: com.walletconnect.sign.client.Sign.Model.SessionRequest): void;
              onSessionDelete(param0: com.walletconnect.sign.client.Sign.Model.DeletedSession): void;
              onSessionSettleResponse(param0: com.walletconnect.sign.client.Sign.Model.SettledSessionResponse): void;
              onSessionUpdateResponse(param0: com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse): void;
              onConnectionStateChange(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): void;
              onError(param0: com.walletconnect.sign.client.Sign.Model.Error): void;
            });
            public constructor();

            public onError(param0: com.walletconnect.sign.client.Sign.Model.Error): void;

            public onSessionProposal(param0: com.walletconnect.sign.client.Sign.Model.SessionProposal): void;

            public onSessionSettleResponse(param0: com.walletconnect.sign.client.Sign.Model.SettledSessionResponse): void;

            public onSessionRequest(param0: com.walletconnect.sign.client.Sign.Model.SessionRequest): void;

            public onSessionUpdateResponse(param0: com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse): void;

            public onSessionDelete(param0: com.walletconnect.sign.client.Sign.Model.DeletedSession): void;

            public onConnectionStateChange(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module client {
        export class SignInterface {
          public static class: java.lang.Class<com.walletconnect.sign.client.SignInterface>;

          /**
           * Constructs a new instance of the com.walletconnect.sign.client.SignInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            initialize(param0: com.walletconnect.sign.client.Sign.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;
            setWalletDelegate(param0: com.walletconnect.sign.client.SignInterface.WalletDelegate): void;
            setDappDelegate(param0: com.walletconnect.sign.client.SignInterface.DappDelegate): void;
            connect(param0: com.walletconnect.sign.client.Sign.Params.Connect, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;
            pair(param0: com.walletconnect.sign.client.Sign.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;
            approveSession(param0: com.walletconnect.sign.client.Sign.Params.Approve, param1: kotlin.jvm.functions.Function1<any>): void;
            rejectSession(param0: com.walletconnect.sign.client.Sign.Params.Reject, param1: kotlin.jvm.functions.Function1<any>): void;
            request(param0: com.walletconnect.sign.client.Sign.Params.Request, param1: kotlin.jvm.functions.Function1<any>): void;
            respond(param0: com.walletconnect.sign.client.Sign.Params.Response, param1: kotlin.jvm.functions.Function1<any>): void;
            update(param0: com.walletconnect.sign.client.Sign.Params.Update, param1: kotlin.jvm.functions.Function1<any>): void;
            extend(param0: com.walletconnect.sign.client.Sign.Params.Extend, param1: kotlin.jvm.functions.Function1<any>): void;
            emit(param0: com.walletconnect.sign.client.Sign.Params.Emit, param1: kotlin.jvm.functions.Function1<any>): void;
            ping(param0: com.walletconnect.sign.client.Sign.Params.Ping, param1: com.walletconnect.sign.client.Sign.Listeners.SessionPing): void;
            disconnect(param0: com.walletconnect.sign.client.Sign.Params.Disconnect, param1: kotlin.jvm.functions.Function1<any>): void;
            getListOfActiveSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;
            getActiveSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;
            getListOfSettledSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;
            getSettledSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;
            getListOfSettledPairings(): java.util.List<com.walletconnect.sign.client.Sign.Model.Pairing>;
            getPendingRequests(param0: string): java.util.List<com.walletconnect.sign.client.Sign.Model.PendingRequest>;
          });
          public constructor();

          public initialize(param0: com.walletconnect.sign.client.Sign.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;

          /** @deprecated */
          public getSettledSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;

          public respond(param0: com.walletconnect.sign.client.Sign.Params.Response, param1: kotlin.jvm.functions.Function1<any>): void;

          public disconnect(param0: com.walletconnect.sign.client.Sign.Params.Disconnect, param1: kotlin.jvm.functions.Function1<any>): void;

          /** @deprecated */
          public getListOfSettledSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;

          public setDappDelegate(param0: com.walletconnect.sign.client.SignInterface.DappDelegate): void;

          public connect(param0: com.walletconnect.sign.client.Sign.Params.Connect, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;

          public extend(param0: com.walletconnect.sign.client.Sign.Params.Extend, param1: kotlin.jvm.functions.Function1<any>): void;

          public setWalletDelegate(param0: com.walletconnect.sign.client.SignInterface.WalletDelegate): void;

          public update(param0: com.walletconnect.sign.client.Sign.Params.Update, param1: kotlin.jvm.functions.Function1<any>): void;

          /** @deprecated */
          public getListOfSettledPairings(): java.util.List<com.walletconnect.sign.client.Sign.Model.Pairing>;

          public getListOfActiveSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;

          public approveSession(param0: com.walletconnect.sign.client.Sign.Params.Approve, param1: kotlin.jvm.functions.Function1<any>): void;

          public rejectSession(param0: com.walletconnect.sign.client.Sign.Params.Reject, param1: kotlin.jvm.functions.Function1<any>): void;

          /** @deprecated */
          public pair(param0: com.walletconnect.sign.client.Sign.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;

          public request(param0: com.walletconnect.sign.client.Sign.Params.Request, param1: kotlin.jvm.functions.Function1<any>): void;

          public emit(param0: com.walletconnect.sign.client.Sign.Params.Emit, param1: kotlin.jvm.functions.Function1<any>): void;

          public getPendingRequests(param0: string): java.util.List<com.walletconnect.sign.client.Sign.Model.PendingRequest>;

          public ping(param0: com.walletconnect.sign.client.Sign.Params.Ping, param1: com.walletconnect.sign.client.Sign.Listeners.SessionPing): void;

          public getActiveSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;
        }

        export module SignInterface {
          export class DappDelegate {
            public static class: java.lang.Class<com.walletconnect.sign.client.SignInterface.DappDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.sign.client.SignInterface$DappDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSessionApproved(param0: com.walletconnect.sign.client.Sign.Model.ApprovedSession): void;
              onSessionRejected(param0: com.walletconnect.sign.client.Sign.Model.RejectedSession): void;
              onSessionUpdate(param0: com.walletconnect.sign.client.Sign.Model.UpdatedSession): void;
              onSessionEvent(param0: com.walletconnect.sign.client.Sign.Model.SessionEvent): void;
              onSessionExtend(param0: com.walletconnect.sign.client.Sign.Model.Session): void;
              onSessionDelete(param0: com.walletconnect.sign.client.Sign.Model.DeletedSession): void;
              onSessionRequestResponse(param0: com.walletconnect.sign.client.Sign.Model.SessionRequestResponse): void;
              onConnectionStateChange(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): void;
              onError(param0: com.walletconnect.sign.client.Sign.Model.Error): void;
            });
            public constructor();

            public onError(param0: com.walletconnect.sign.client.Sign.Model.Error): void;

            public onSessionUpdate(param0: com.walletconnect.sign.client.Sign.Model.UpdatedSession): void;

            public onSessionExtend(param0: com.walletconnect.sign.client.Sign.Model.Session): void;

            public onSessionRequestResponse(param0: com.walletconnect.sign.client.Sign.Model.SessionRequestResponse): void;

            public onSessionApproved(param0: com.walletconnect.sign.client.Sign.Model.ApprovedSession): void;

            public onSessionEvent(param0: com.walletconnect.sign.client.Sign.Model.SessionEvent): void;

            public onSessionRejected(param0: com.walletconnect.sign.client.Sign.Model.RejectedSession): void;

            public onSessionDelete(param0: com.walletconnect.sign.client.Sign.Model.DeletedSession): void;

            public onConnectionStateChange(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): void;
          }

          export class DefaultImpls {
            public static class: java.lang.Class<com.walletconnect.sign.client.SignInterface.DefaultImpls>;
          }

          export class WalletDelegate {
            public static class: java.lang.Class<com.walletconnect.sign.client.SignInterface.WalletDelegate>;

            /**
             * Constructs a new instance of the com.walletconnect.sign.client.SignInterface$WalletDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSessionProposal(param0: com.walletconnect.sign.client.Sign.Model.SessionProposal): void;
              onSessionRequest(param0: com.walletconnect.sign.client.Sign.Model.SessionRequest): void;
              onSessionDelete(param0: com.walletconnect.sign.client.Sign.Model.DeletedSession): void;
              onSessionSettleResponse(param0: com.walletconnect.sign.client.Sign.Model.SettledSessionResponse): void;
              onSessionUpdateResponse(param0: com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse): void;
              onConnectionStateChange(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): void;
              onError(param0: com.walletconnect.sign.client.Sign.Model.Error): void;
            });
            public constructor();

            public onError(param0: com.walletconnect.sign.client.Sign.Model.Error): void;

            public onSessionProposal(param0: com.walletconnect.sign.client.Sign.Model.SessionProposal): void;

            public onSessionSettleResponse(param0: com.walletconnect.sign.client.Sign.Model.SettledSessionResponse): void;

            public onSessionRequest(param0: com.walletconnect.sign.client.Sign.Model.SessionRequest): void;

            public onSessionUpdateResponse(param0: com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse): void;

            public onSessionDelete(param0: com.walletconnect.sign.client.Sign.Model.DeletedSession): void;

            public onConnectionStateChange(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module client {
        export class SignProtocol extends com.walletconnect.sign.client.SignInterface {
          public static class: java.lang.Class<com.walletconnect.sign.client.SignProtocol>;
          public static instance: com.walletconnect.sign.client.SignProtocol;
          public static storageSuffix: string;
          public signEngine: com.walletconnect.sign.engine.domain.SignEngine;

          /** @deprecated */
          public getSettledSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;
          public getSettledSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;

          /** @deprecated */
          public getListOfSettledSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;

          public setDappDelegate(param0: com.walletconnect.sign.client.SignInterface.DappDelegate): void;

          public connect(param0: com.walletconnect.sign.client.Sign.Params.Connect, param1: any, param2: kotlin.jvm.functions.Function1<any>): void;

          public extend(param0: com.walletconnect.sign.client.Sign.Params.Extend, param1: kotlin.jvm.functions.Function1<any>): void;

          public constructor();

          public static<clinit>(): void;

          public request(param0: com.walletconnect.sign.client.Sign.Params.Request, param1: kotlin.jvm.functions.Function1<any>): void;

          /** @deprecated */
          public pair(param0: com.walletconnect.sign.client.Sign.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;

          public getActiveSessionByTopic(param0: string): com.walletconnect.sign.client.Sign.Model.Session;

          public initialize(param0: com.walletconnect.sign.client.Sign.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;

          public respond(param0: com.walletconnect.sign.client.Sign.Params.Response, param1: kotlin.jvm.functions.Function1<any>): void;

          public disconnect(param0: com.walletconnect.sign.client.Sign.Params.Disconnect, param1: kotlin.jvm.functions.Function1<any>): void;

          public getListOfSettledSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;

          public setWalletDelegate(param0: com.walletconnect.sign.client.SignInterface.WalletDelegate): void;

          public update(param0: com.walletconnect.sign.client.Sign.Params.Update, param1: kotlin.jvm.functions.Function1<any>): void;

          /** @deprecated */
          public getListOfSettledPairings(): java.util.List<com.walletconnect.sign.client.Sign.Model.Pairing>;

          public getListOfActiveSessions(): java.util.List<com.walletconnect.sign.client.Sign.Model.Session>;

          public checkEngineInitialization(): void;

          public approveSession(param0: com.walletconnect.sign.client.Sign.Params.Approve, param1: kotlin.jvm.functions.Function1<any>): void;

          public rejectSession(param0: com.walletconnect.sign.client.Sign.Params.Reject, param1: kotlin.jvm.functions.Function1<any>): void;

          public emit(param0: com.walletconnect.sign.client.Sign.Params.Emit, param1: kotlin.jvm.functions.Function1<any>): void;

          public getPendingRequests(param0: string): java.util.List<com.walletconnect.sign.client.Sign.Model.PendingRequest>;

          public pair(param0: com.walletconnect.sign.client.Sign.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;

          public ping(param0: com.walletconnect.sign.client.Sign.Params.Ping, param1: com.walletconnect.sign.client.Sign.Listeners.SessionPing): void;
        }

        export module SignProtocol {
          export class Companion {
            public static class: java.lang.Class<com.walletconnect.sign.client.SignProtocol.Companion>;

            public constructor();

            public getInstance(): com.walletconnect.sign.client.SignProtocol;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module adapters {
          export class SessionRequestVOJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO> {
            public static class: java.lang.Class<com.walletconnect.sign.common.adapters.SessionRequestVOJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public anyAdapter: com.squareup.moshi.JsonAdapter<any>;

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO): void;

            public constructor(param0: com.squareup.moshi.Moshi);

            public upsertObject(param0: org.json.JSONObject, param1: java.util.Map<any, any>): org.json.JSONObject;

            public upsertArray(param0: org.json.JSONArray, param1: java.util.List<any>): org.json.JSONArray;

            public toString(): string;

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class CannotFindSequenceForTopic extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.CannotFindSequenceForTopic>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class CannotFindSessionProposalException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.CannotFindSessionProposalException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class InvalidEventException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.InvalidEventException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class InvalidNamespaceException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.InvalidNamespaceException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class InvalidRequestException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.InvalidRequestException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class NotSettledSessionException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.NotSettledSessionException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export abstract class PeerError extends com.walletconnect.android.internal.common.model.type.Error {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError>;

            public getMessage(): string;

            public constructor();

            public getCode(): number;
          }

          export module PeerError {
            export abstract class CAIP25 extends com.walletconnect.sign.common.exceptions.PeerError {
              public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25>;

              public constructor();

              public getCode(): number;

              public getMessage(): string;
            }

            export module CAIP25 {
              export class UnsupportedAccounts extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedAccounts>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedAccounts;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class UnsupportedChains extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedChains>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedChains;

                public getCode(): number;
              }

              export class UnsupportedEvents extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedEvents>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedEvents;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class UnsupportedMethods extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedMethods>;
                public message: string;
                public code: number;

                public component1(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedMethods;

                public toString(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class UnsupportedNamespaceKey extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedNamespaceKey>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UnsupportedNamespaceKey;
              }

              export class UserRejected extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UserRejected>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UserRejected;

                public hashCode(): number;

                public getCode(): number;
              }

              export class UserRejectedChains extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UserRejectedChains>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UserRejectedChains;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class UserRejectedEvents extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UserRejectedEvents>;
                public message: string;
                public code: number;

                public component1(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UserRejectedEvents;

                public toString(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class UserRejectedMethods extends com.walletconnect.sign.common.exceptions.PeerError.CAIP25 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UserRejectedMethods>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.CAIP25.UserRejectedMethods;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }
            }

            export abstract class EIP1193 extends com.walletconnect.sign.common.exceptions.PeerError {
              public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.EIP1193>;

              public constructor();

              public getCode(): number;

              public getMessage(): string;
            }

            export module EIP1193 {
              export class UserRejectedRequest extends com.walletconnect.sign.common.exceptions.PeerError.EIP1193 {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.EIP1193.UserRejectedRequest>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.EIP1193.UserRejectedRequest;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }
            }

            export abstract class Failure extends com.walletconnect.sign.common.exceptions.PeerError {
              public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Failure>;

              public constructor();

              public getCode(): number;

              public getMessage(): string;
            }

            export module Failure {
              export class NoSessionForTopic extends com.walletconnect.sign.common.exceptions.PeerError.Failure {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Failure.NoSessionForTopic>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Failure.NoSessionForTopic;

                public hashCode(): number;

                public getCode(): number;
              }

              export class SessionSettlementFailed extends com.walletconnect.sign.common.exceptions.PeerError.Failure {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Failure.SessionSettlementFailed>;
                public reason: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Failure.SessionSettlementFailed;

                public getReason(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }
            }

            export abstract class Invalid extends com.walletconnect.sign.common.exceptions.PeerError {
              public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Invalid>;

              public constructor();

              public getCode(): number;

              public getMessage(): string;
            }

            export module Invalid {
              export class Event extends com.walletconnect.sign.common.exceptions.PeerError.Invalid {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Invalid.Event>;
                public reason: string;
                public message: string;
                public code: number;

                public component1(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Invalid.Event;

                public toString(): string;

                public getReason(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class ExtendRequest extends com.walletconnect.sign.common.exceptions.PeerError.Invalid {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Invalid.ExtendRequest>;
                public reason: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public getReason(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Invalid.ExtendRequest;

                public hashCode(): number;

                public getCode(): number;
              }

              export class Method extends com.walletconnect.sign.common.exceptions.PeerError.Invalid {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Invalid.Method>;
                public reason: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public getReason(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Invalid.Method;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class SessionSettleRequest extends com.walletconnect.sign.common.exceptions.PeerError.Invalid {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Invalid.SessionSettleRequest>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Invalid.SessionSettleRequest;
              }

              export class UpdateRequest extends com.walletconnect.sign.common.exceptions.PeerError.Invalid {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Invalid.UpdateRequest>;
                public reason: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Invalid.UpdateRequest;

                public getReason(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }
            }

            export abstract class Unauthorized extends com.walletconnect.sign.common.exceptions.PeerError {
              public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Unauthorized>;

              public constructor();

              public getCode(): number;

              public getMessage(): string;
            }

            export module Unauthorized {
              export class Chain extends com.walletconnect.sign.common.exceptions.PeerError.Unauthorized {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.Chain>;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.Chain;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class Event extends com.walletconnect.sign.common.exceptions.PeerError.Unauthorized {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.Event>;
                public reason: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public getReason(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.Event;

                public getCode(): number;
              }

              export class ExtendRequest extends com.walletconnect.sign.common.exceptions.PeerError.Unauthorized {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.ExtendRequest>;
                public sequence: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public getSequence(): string;

                public hashCode(): number;

                public getCode(): number;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.ExtendRequest;
              }

              export class Method extends com.walletconnect.sign.common.exceptions.PeerError.Unauthorized {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.Method>;
                public reason: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.Method;

                public getReason(): string;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public getCode(): number;
              }

              export class UpdateRequest extends com.walletconnect.sign.common.exceptions.PeerError.Unauthorized {
                public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.UpdateRequest>;
                public sequence: string;
                public message: string;
                public code: number;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.common.exceptions.PeerError.Unauthorized.UpdateRequest;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor();
                public constructor(param0: string);

                public getSequence(): string;

                public hashCode(): number;

                public getCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class UnauthorizedEventException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.UnauthorizedEventException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class UnauthorizedMethodException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.UnauthorizedMethodException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module exceptions {
          export class UnauthorizedPeerException extends com.walletconnect.android.internal.common.exception.WalletConnectException {
            public static class: java.lang.Class<com.walletconnect.sign.common.exceptions.UnauthorizedPeerException>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export class PendingRequest {
            public static class: java.lang.Class<com.walletconnect.sign.common.model.PendingRequest>;
            public id: number;
            public topic: com.walletconnect.foundation.common.model.Topic;
            public method: string;
            public chainId: string;
            public params: string;

            public component3(): string;

            public getTopic(): com.walletconnect.foundation.common.model.Topic;

            public component5(): string;

            public component2(): com.walletconnect.foundation.common.model.Topic;

            public hashCode(): number;

            public equals(param0: any): boolean;

            public getChainId(): string;

            public toString(): string;

            public getId(): number;

            public constructor(param0: number, param1: com.walletconnect.foundation.common.model.Topic, param2: string, param3: string, param4: string);

            public component4(): string;

            public copy(param0: number, param1: com.walletconnect.foundation.common.model.Topic, param2: string, param3: string, param4: string): com.walletconnect.sign.common.model.PendingRequest;

            public getParams(): string;

            public getMethod(): string;

            public component1(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module type {
            export class Sequences {
              public static class: java.lang.Class<com.walletconnect.sign.common.model.type.Sequences>;
              public static SESSION: com.walletconnect.sign.common.model.type.Sequences;
              public static PAIRING: com.walletconnect.sign.common.model.type.Sequences;

              public static valueOf(param0: string): com.walletconnect.sign.common.model.type.Sequences;

              public static values(): androidNative.Array<com.walletconnect.sign.common.model.type.Sequences>;

              public constructor(param0: string, param1: number);

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module common {
                export abstract class NamespaceVO {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO>;
                }

                export module NamespaceVO {
                  export class Proposal extends com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>;
                    public chains: java.util.List<string>;
                    public methods: java.util.List<string>;
                    public events: java.util.List<string>;
                    public extensions: java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension>;

                    public getEvents(): java.util.List<string>;

                    public component3(): java.util.List<string>;

                    public equals(param0: any): boolean;

                    public getMethods(): java.util.List<string>;

                    public component4(): java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension>;

                    public hashCode(): number;

                    public getChains(): java.util.List<string>;

                    public component1(): java.util.List<string>;

                    public getExtensions(): java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension>;

                    public toString(): string;

                    public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension>);

                    public component2(): java.util.List<string>;

                    public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension>): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal;
                  }

                  export module Proposal {
                    export class Extension {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension>;
                      public chains: java.util.List<string>;
                      public methods: java.util.List<string>;
                      public events: java.util.List<string>;

                      public getEvents(): java.util.List<string>;

                      public hashCode(): number;

                      public getMethods(): java.util.List<string>;

                      public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension;

                      public getChains(): java.util.List<string>;

                      public toString(): string;

                      public equals(param0: any): boolean;

                      public component2(): java.util.List<string>;

                      public component1(): java.util.List<string>;

                      public component3(): java.util.List<string>;

                      public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);
                    }
                  }

                  export class Session extends com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;
                    public accounts: java.util.List<string>;
                    public methods: java.util.List<string>;
                    public events: java.util.List<string>;
                    public extensions: java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension>;

                    public getEvents(): java.util.List<string>;

                    public component3(): java.util.List<string>;

                    public component4(): java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension>;

                    public equals(param0: any): boolean;

                    public getMethods(): java.util.List<string>;

                    public hashCode(): number;

                    public component1(): java.util.List<string>;

                    public getAccounts(): java.util.List<string>;

                    public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension>);

                    public toString(): string;

                    public getExtensions(): java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension>;

                    public component2(): java.util.List<string>;

                    public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension>): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session;
                  }

                  export module Session {
                    export class Extension {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension>;
                      public accounts: java.util.List<string>;
                      public methods: java.util.List<string>;
                      public events: java.util.List<string>;

                      public getEvents(): java.util.List<string>;

                      public hashCode(): number;

                      public getMethods(): java.util.List<string>;

                      public getAccounts(): java.util.List<string>;

                      public toString(): string;

                      public equals(param0: any): boolean;

                      public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension;

                      public component2(): java.util.List<string>;

                      public component1(): java.util.List<string>;

                      public component3(): java.util.List<string>;

                      public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module common {
                export class NamespaceVO_ProposalJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO_ProposalJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public listOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;
                  public nullableListOfExtensionAdapter: com.squareup.moshi.JsonAdapter<java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension>>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal): void;

                  public toString(): string;

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module common {
                export class NamespaceVO_Proposal_ExtensionJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO_Proposal_ExtensionJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public listOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension): void;

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal.Extension;

                  public toString(): string;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module common {
                export class NamespaceVO_SessionJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO_SessionJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public listOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;
                  public nullableListOfExtensionAdapter: com.squareup.moshi.JsonAdapter<java.util.List<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension>>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public toString(): string;

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session): void;

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module common {
                export class NamespaceVO_Session_ExtensionJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO_Session_ExtensionJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public listOfStringAdapter: com.squareup.moshi.JsonAdapter<java.util.List<string>>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension;

                  public toString(): string;

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module common {
                export class SessionParticipantVO {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO>;
                  public publicKey: string;
                  public metadata: com.walletconnect.android.internal.common.model.AppMetaData;

                  public component2(): com.walletconnect.android.internal.common.model.AppMetaData;

                  public getPublicKey(): string;

                  public getMetadata(): com.walletconnect.android.internal.common.model.AppMetaData;

                  public hashCode(): number;

                  public copy(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData): com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public component1(): string;

                  public constructor(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData);
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module common {
                export class SessionParticipantVOJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVOJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public appMetaDataAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.AppMetaData>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO): void;

                  public toString(): string;

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export abstract class SignRpc extends com.walletconnect.android.internal.common.model.type.JsonRpcClientSync<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc>;

                  public getJsonrpc(): string;

                  public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;

                  public getId(): number;

                  public getMethod(): string;

                  public getParams(): any;
                }

                export module SignRpc {
                  export class SessionDelete extends com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionDelete>;
                    public id: number;
                    public jsonrpc: string;
                    public method: string;
                    public params: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams;

                    public equals(param0: any): boolean;

                    public component1(): number;

                    public hashCode(): number;

                    public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionDelete;

                    public getParams(): any;

                    public component3(): string;

                    public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams);

                    public getJsonrpc(): string;

                    public getMethod(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams;

                    public getId(): number;

                    public component4(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams;

                    public toString(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;

                    public component2(): string;
                  }

                  export class SessionEvent extends com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionEvent>;
                    public id: number;
                    public jsonrpc: string;
                    public method: string;
                    public params: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams;

                    public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams);

                    public equals(param0: any): boolean;

                    public component1(): number;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams;

                    public hashCode(): number;

                    public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionEvent;

                    public getParams(): any;

                    public component3(): string;

                    public getJsonrpc(): string;

                    public getMethod(): string;

                    public getId(): number;

                    public toString(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;

                    public component2(): string;

                    public component4(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams;
                  }

                  export class SessionExtend extends com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionExtend>;
                    public id: number;
                    public jsonrpc: string;
                    public method: string;
                    public params: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams;

                    public equals(param0: any): boolean;

                    public component1(): number;

                    public hashCode(): number;

                    public getParams(): any;

                    public component4(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams;

                    public component3(): string;

                    public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionExtend;

                    public getJsonrpc(): string;

                    public getMethod(): string;

                    public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams);

                    public getId(): number;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams;

                    public toString(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;

                    public component2(): string;
                  }

                  export class SessionPing extends com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPing>;
                    public id: number;
                    public jsonrpc: string;
                    public method: string;
                    public params: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.PingParams;

                    public equals(param0: any): boolean;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.PingParams;

                    public component1(): number;

                    public component4(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.PingParams;

                    public hashCode(): number;

                    public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.PingParams);

                    public getParams(): any;

                    public component3(): string;

                    public getJsonrpc(): string;

                    public getMethod(): string;

                    public getId(): number;

                    public toString(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;

                    public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.PingParams): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPing;

                    public component2(): string;
                  }

                  export class SessionPropose extends com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPropose>;
                    public id: number;
                    public jsonrpc: string;
                    public method: string;
                    public params: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams;

                    public equals(param0: any): boolean;

                    public component1(): number;

                    public hashCode(): number;

                    public getParams(): any;

                    public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams);

                    public component3(): string;

                    public getJsonrpc(): string;

                    public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPropose;

                    public getMethod(): string;

                    public getId(): number;

                    public component4(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams;

                    public toString(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;
                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams;

                    public component2(): string;
                  }

                  export class SessionRequest extends com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionRequest>;
                    public id: number;
                    public jsonrpc: string;
                    public method: string;
                    public params: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams;

                    public equals(param0: any): boolean;

                    public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionRequest;

                    public component1(): number;

                    public hashCode(): number;

                    public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams);

                    public getParams(): any;
                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams;

                    public component3(): string;

                    public getJsonrpc(): string;

                    public getMethod(): string;

                    public getId(): number;

                    public component4(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams;

                    public toString(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;

                    public component2(): string;
                  }

                  export class SessionSettle extends com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionSettle>;
                    public id: number;
                    public jsonrpc: string;
                    public method: string;
                    public params: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams;

                    public equals(param0: any): boolean;

                    public component1(): number;

                    public hashCode(): number;

                    public getParams(): any;

                    public component3(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams;

                    public getJsonrpc(): string;

                    public getMethod(): string;

                    public getId(): number;

                    public toString(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;

                    public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionSettle;

                    public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams);

                    public component4(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams;

                    public component2(): string;
                  }

                  export class SessionUpdate extends com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionUpdate>;
                    public id: number;
                    public jsonrpc: string;
                    public method: string;
                    public params: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.UpdateNamespacesParams;

                    public equals(param0: any): boolean;

                    public component1(): number;

                    public hashCode(): number;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.UpdateNamespacesParams;

                    public component4(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.UpdateNamespacesParams;

                    public getParams(): any;

                    public component3(): string;

                    public getJsonrpc(): string;

                    public getMethod(): string;

                    public getId(): number;

                    public constructor(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.UpdateNamespacesParams);

                    public copy(param0: number, param1: string, param2: string, param3: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.UpdateNamespacesParams): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionUpdate;

                    public toString(): string;

                    public getParams(): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams;

                    public component2(): string;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export class SignRpc_SessionDeleteJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionDelete> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc_SessionDeleteJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public deleteParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams>;
                  public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionDelete>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionDelete): void;

                  public toString(): string;

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionDelete;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export class SignRpc_SessionEventJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionEvent> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc_SessionEventJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public eventParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams>;
                  public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionEvent>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionEvent;

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionEvent): void;

                  public toString(): string;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export class SignRpc_SessionExtendJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionExtend> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc_SessionExtendJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public extendParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams>;
                  public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionExtend>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionExtend;

                  public toString(): string;

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionExtend): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export class SignRpc_SessionPingJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPing> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc_SessionPingJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public pingParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.PingParams>;
                  public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPing>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPing): void;

                  public toString(): string;

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPing;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export class SignRpc_SessionProposeJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPropose> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc_SessionProposeJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public sessionProposeParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams>;
                  public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPropose>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPropose;

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionPropose): void;

                  public toString(): string;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export class SignRpc_SessionRequestJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionRequest> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc_SessionRequestJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public sessionRequestParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams>;
                  public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionRequest>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public toString(): string;

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionRequest): void;

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionRequest;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export class SignRpc_SessionSettleJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionSettle> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc_SessionSettleJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public sessionSettleParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams>;
                  public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionSettle>;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public toString(): string;

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionSettle;

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionSettle): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export class SignRpc_SessionUpdateJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionUpdate> {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc_SessionUpdateJsonAdapter>;
                  public options: com.squareup.moshi.JsonReader.Options;
                  public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
                  public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                  public updateNamespacesParamsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.UpdateNamespacesParams>;
                  public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionUpdate>;

                  public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionUpdate): void;

                  public constructor(param0: com.squareup.moshi.Moshi);

                  public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.SignRpc.SessionUpdate;

                  public toString(): string;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export module params {
                  export abstract class SignParams extends com.walletconnect.android.internal.common.model.params.CoreSignParams {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams>;
                  }

                  export module SignParams {
                    export class DeleteParams extends com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams>;
                      public code: number;
                      public message: string;

                      public getCode(): number;

                      public constructor(param0: number, param1: string);

                      public getMessage(): string;

                      public constructor();
                    }

                    export class EventParams extends com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams>;
                      public event: com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO;
                      public chainId: string;

                      public component2(): string;

                      public hashCode(): number;

                      public copy(param0: com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO, param1: string): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams;

                      public toString(): string;

                      public equals(param0: any): boolean;

                      public getChainId(): string;

                      public component1(): com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO;

                      public getEvent(): com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO;

                      public constructor(param0: com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO, param1: string);
                      public constructor();
                    }

                    export class ExtendParams extends com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams>;
                      public expiry: number;

                      public hashCode(): number;

                      public component1(): number;

                      public constructor(param0: number);

                      public toString(): string;

                      public equals(param0: any): boolean;

                      public getExpiry(): number;

                      public copy(param0: number): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams;

                      public constructor();
                    }

                    export class PingParams extends com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.PingParams>;

                      public constructor();
                    }

                    export class SessionProposeParams extends com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams>;
                      public relays: java.util.List<com.walletconnect.android.internal.common.model.RelayProtocolOptions>;
                      public proposer: com.walletconnect.android.internal.common.model.SessionProposer;
                      public namespaces: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>;

                      public hashCode(): number;

                      public copy(param0: java.util.List<com.walletconnect.android.internal.common.model.RelayProtocolOptions>, param1: com.walletconnect.android.internal.common.model.SessionProposer, param2: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams;

                      public component3(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>;

                      public toString(): string;

                      public equals(param0: any): boolean;

                      public constructor(param0: java.util.List<com.walletconnect.android.internal.common.model.RelayProtocolOptions>, param1: com.walletconnect.android.internal.common.model.SessionProposer, param2: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>);

                      public component1(): java.util.List<com.walletconnect.android.internal.common.model.RelayProtocolOptions>;

                      public getProposer(): com.walletconnect.android.internal.common.model.SessionProposer;

                      public getNamespaces(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>;

                      public component2(): com.walletconnect.android.internal.common.model.SessionProposer;

                      public getRelays(): java.util.List<com.walletconnect.android.internal.common.model.RelayProtocolOptions>;

                      public constructor();
                    }

                    export class SessionRequestParams extends com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams>;
                      public request: com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO;
                      public chainId: string;

                      public component2(): string;

                      public hashCode(): number;

                      public constructor(param0: com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO, param1: string);

                      public toString(): string;

                      public equals(param0: any): boolean;

                      public copy(param0: com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO, param1: string): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams;

                      public getChainId(): string;

                      public component1(): com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO;

                      public getRequest(): com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO;

                      public constructor();
                    }

                    export class SessionSettleParams extends com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams>;
                      public relay: com.walletconnect.android.internal.common.model.RelayProtocolOptions;
                      public controller: com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO;
                      public namespaces: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;
                      public expiry: number;

                      public hashCode(): number;

                      public copy(param0: com.walletconnect.android.internal.common.model.RelayProtocolOptions, param1: com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO, param2: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param3: number): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams;

                      public component4(): number;

                      public equals(param0: any): boolean;

                      public getRelay(): com.walletconnect.android.internal.common.model.RelayProtocolOptions;

                      public getExpiry(): number;

                      public component3(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;

                      public component1(): com.walletconnect.android.internal.common.model.RelayProtocolOptions;

                      public component2(): com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO;

                      public toString(): string;

                      public getNamespaces(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;

                      public constructor(param0: com.walletconnect.android.internal.common.model.RelayProtocolOptions, param1: com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO, param2: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param3: number);
                      public constructor();

                      public getController(): com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO;
                    }

                    export class UpdateNamespacesParams extends com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams {
                      public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.UpdateNamespacesParams>;
                      public namespaces: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;

                      public getNamespaces(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;

                      public constructor(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>);
                      public constructor();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export module params {
                  export class SignParams_DeleteParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams> {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams_DeleteParamsJsonAdapter>;
                    public options: com.squareup.moshi.JsonReader.Options;
                    public intAdapter: com.squareup.moshi.JsonAdapter<java.lang.Integer>;
                    public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                    public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams>;

                    public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams;

                    public toString(): string;

                    public constructor(param0: com.squareup.moshi.Moshi);

                    public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams): void;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export module params {
                  export class SignParams_SessionProposeParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams> {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams_SessionProposeParamsJsonAdapter>;
                    public options: com.squareup.moshi.JsonReader.Options;
                    public listOfRelayProtocolOptionsAdapter: com.squareup.moshi.JsonAdapter<java.util.List<com.walletconnect.android.internal.common.model.RelayProtocolOptions>>;
                    public sessionProposerAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.SessionProposer>;
                    public mapOfStringProposalAdapter: com.squareup.moshi.JsonAdapter<java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>>;

                    public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams;

                    public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams): void;

                    public toString(): string;

                    public constructor(param0: com.squareup.moshi.Moshi);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export module params {
                  export class SignParams_SessionRequestParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams> {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams_SessionRequestParamsJsonAdapter>;
                    public options: com.squareup.moshi.JsonReader.Options;
                    public sessionRequestVOAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO>;
                    public stringAdapter: com.squareup.moshi.JsonAdapter<string>;

                    public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams;

                    public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams): void;

                    public toString(): string;

                    public constructor(param0: com.squareup.moshi.Moshi);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export module params {
                  export class SignParams_SessionSettleParamsJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams> {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams_SessionSettleParamsJsonAdapter>;
                    public options: com.squareup.moshi.JsonReader.Options;
                    public relayProtocolOptionsAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.android.internal.common.model.RelayProtocolOptions>;
                    public sessionParticipantVOAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.common.SessionParticipantVO>;
                    public mapOfStringSessionAdapter: com.squareup.moshi.JsonAdapter<java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>>;
                    public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;

                    public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams): void;

                    public toString(): string;

                    public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams;

                    public constructor(param0: com.squareup.moshi.Moshi);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export module payload {
                  export class SessionEventVO {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO>;
                    public name: string;
                    public data: any;

                    public equals(param0: any): boolean;

                    public getName(): string;

                    public hashCode(): number;

                    public component2(): any;

                    public copy(param0: string, param1: any): com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO;

                    public getData(): any;

                    public toString(): string;

                    public constructor(param0: string, param1: any);

                    public component1(): string;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export module payload {
                  export class SessionEventVOJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO> {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVOJsonAdapter>;
                    public options: com.squareup.moshi.JsonReader.Options;
                    public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
                    public anyAdapter: com.squareup.moshi.JsonAdapter<any>;

                    public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO): void;

                    public toString(): string;

                    public constructor(param0: com.squareup.moshi.Moshi);

                    public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionEventVO;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module clientsync {
              export module session {
                export module payload {
                  export class SessionRequestVO {
                    public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO>;
                    public method: string;
                    public params: string;

                    public equals(param0: any): boolean;

                    public getMethod(): string;

                    public hashCode(): number;

                    public getParams(): string;

                    public toString(): string;

                    public constructor(param0: string, param1: string);

                    public copy(param0: string, param1: string): com.walletconnect.sign.common.model.vo.clientsync.session.payload.SessionRequestVO;

                    public component1(): string;

                    public component2(): string;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module common {
        export module model {
          export module vo {
            export module sequence {
              export class SessionVO extends com.walletconnect.android.internal.common.model.type.Sequence {
                public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.sequence.SessionVO>;
                public topic: com.walletconnect.foundation.common.model.Topic;
                public expiry: com.walletconnect.android.internal.common.model.Expiry;
                public relayProtocol: string;
                public relayData: string;
                public controllerKey: string;
                public selfPublicKey: string;
                public selfAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;
                public peerPublicKey: string;
                public peerAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;
                public namespaces: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;
                public proposalNamespaces: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>;

                //public getControllerKey-WBsfxVY(): string;
                public getNamespaces(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;

                public toString(): string;

                public isPeerController(): boolean;

                public component11(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>;

                public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry, param2: string, param3: string, param4: string, param5: string, param6: com.walletconnect.android.internal.common.model.AppMetaData, param7: string, param8: com.walletconnect.android.internal.common.model.AppMetaData, param9: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param10: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>, param11: boolean);

                //public copy-X2uPe7I(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry, param2: string, param3: string, param4: string, param5: string, param6: com.walletconnect.android.internal.common.model.AppMetaData, param7: string, param8: com.walletconnect.android.internal.common.model.AppMetaData, param9: java.util.Map<string,com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param10: java.util.Map<string,com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>, param11: boolean): com.walletconnect.sign.common.model.vo.sequence.SessionVO;
                public equals(param0: any): boolean;

                public isAcknowledged(): boolean;

                //	public component6-XmMAeWk(): string;
                public getSelfAppMetaData(): com.walletconnect.android.internal.common.model.AppMetaData;

                public component10(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;

                public getExpiry(): com.walletconnect.android.internal.common.model.Expiry;

                public component7(): com.walletconnect.android.internal.common.model.AppMetaData;

                public static<clinit>(): void;

                public component12(): boolean;

                public isSelfController(): boolean;

                public component1(): com.walletconnect.foundation.common.model.Topic;

                public component9(): com.walletconnect.android.internal.common.model.AppMetaData;

                public getRelayProtocol(): string;

                //public getPeerPublicKey-WBsfxVY(): string;
                public component4(): string;

                public getProposalNamespaces(): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>;

                //	public component5-WBsfxVY(): string;
                public getTopic(): com.walletconnect.foundation.common.model.Topic;

                public component2(): com.walletconnect.android.internal.common.model.Expiry;

                //	public component8-WBsfxVY(): string;
                public getRelayData(): string;

                //	public getSelfPublicKey-XmMAeWk(): string;
                public getPeerAppMetaData(): com.walletconnect.android.internal.common.model.AppMetaData;

                public component3(): string;

                public hashCode(): number;
              }

              export module SessionVO {
                export class Companion {
                  public static class: java.lang.Class<com.walletconnect.sign.common.model.vo.sequence.SessionVO.Companion>;

                  public constructor();
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module di {
        export class SignDITags {
          public static class: java.lang.Class<com.walletconnect.sign.di.SignDITags>;
          public static SERIALIZER_SET: com.walletconnect.sign.di.SignDITags;
          public static DESERIALIZER_MAP: com.walletconnect.sign.di.SignDITags;

          public static valueOf(param0: string): com.walletconnect.sign.di.SignDITags;

          public constructor(param0: string, param1: number);

          public static values(): androidNative.Array<com.walletconnect.sign.di.SignDITags>;

          public static<clinit>(): void;
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module engine {
        export module domain {
          export class SignEngine {
            public static class: java.lang.Class<com.walletconnect.sign.engine.domain.SignEngine>;
            public static THIRTY_SECONDS_TIMEOUT: number;
            public static FIVE_MINUTES_TIMEOUT: number;
            public jsonRpcInteractor: com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface;
            public getPendingRequestsUseCase: com.walletconnect.sign.json_rpc.domain.GetPendingRequestsUseCase;
            public crypto: com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository;
            public sessionStorageRepository: com.walletconnect.sign.storage.sequence.SessionStorageRepository;
            public metadataStorageRepository: com.walletconnect.android.internal.common.storage.MetadataStorageRepositoryInterface;
            public pairingInterface: com.walletconnect.android.pairing.client.PairingInterface;
            public pairingHandler: com.walletconnect.android.pairing.handler.PairingControllerInterface;
            public selfAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;
            public logger: com.walletconnect.foundation.util.Logger;
            public jsonRpcRequestsJob: kotlinx.coroutines.Job;
            public jsonRpcResponsesJob: kotlinx.coroutines.Job;
            public internalErrorsJob: kotlinx.coroutines.Job;
            public _engineEvent: kotlinx.coroutines.flow.MutableSharedFlow<com.walletconnect.android.internal.common.model.type.EngineEvent>;
            public engineEvent: kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.type.EngineEvent>;
            public sessionProposalRequest: java.util.Map<string, com.walletconnect.android.internal.common.model.WCRequest>;

            public getListOfSettledPairings$sdk_release(): java.util.List<com.walletconnect.sign.engine.model.EngineDO.PairingSettle>;

            public onSessionUpdateResponse(param0: com.walletconnect.android.internal.common.model.WCResponse): void;

            public onSessionUpdate(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.UpdateNamespacesParams): void;

            public static approve$sessionSettle(param0: com.walletconnect.sign.engine.domain.SignEngine, param1: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>, param2: kotlin.jvm.functions.Function1<any>, param3: number, param4: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams, param5: com.walletconnect.foundation.common.model.Topic, param6: com.walletconnect.foundation.common.model.Topic): void;

            public collectResponse(param0: number, param1: kotlin.jvm.functions.Function1<any>, param2: any): any;

            public collectJsonRpcRequests(): kotlinx.coroutines.Job;

            public respondSessionRequest$sdk_release(param0: string, param1: com.walletconnect.android.internal.common.JsonRpcResponse, param2: kotlin.jvm.functions.Function1<any>): void;

            public onSessionPropose(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams): void;

            public onSessionDelete(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.DeleteParams): void;

            public getPendingRequests$sdk_release(param0: com.walletconnect.foundation.common.model.Topic): java.util.List<com.walletconnect.sign.common.model.PendingRequest>;

            public emit$sdk_release(param0: string, param1: com.walletconnect.sign.engine.model.EngineDO.Event, param2: kotlin.jvm.functions.Function1<any>): void;

            public onSessionRequestResponse(param0: com.walletconnect.android.internal.common.model.WCResponse, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams): void;

            public resubscribeToSession(): void;

            public collectJsonRpcResponses(): kotlinx.coroutines.Job;

            public onSessionSettleResponse(param0: com.walletconnect.android.internal.common.model.WCResponse): void;

            public getEngineEvent(): kotlinx.coroutines.flow.SharedFlow<com.walletconnect.android.internal.common.model.type.EngineEvent>;

            public onSessionEvent(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.EventParams): void;

            public sessionUpdate$sdk_release(param0: string, param1: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>, param2: kotlin.jvm.functions.Function1<any>): void;

            public disconnect$sdk_release(param0: string): void;

            public onPing(param0: com.walletconnect.android.internal.common.model.WCRequest): void;

            public sessionRequest$sdk_release(param0: com.walletconnect.sign.engine.model.EngineDO.Request, param1: kotlin.jvm.functions.Function1<any>): void;

            public approve$sdk_release(param0: string, param1: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>, param2: kotlin.jvm.functions.Function1<any>): void;

            public extend$sdk_release(param0: string, param1: kotlin.jvm.functions.Function1<any>): void;

            public setupSequenceExpiration(): void;

            public pair$sdk_release(param0: string): void;

            public static<clinit>(): void;

            public proposeSession$sdk_release(param0: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal>, param1: com.walletconnect.android.internal.common.model.Pairing, param2: any, param3: kotlin.jvm.functions.Function1<any>): void;

            public setup(): void;

            public onSessionProposalResponse(param0: com.walletconnect.android.internal.common.model.WCResponse, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionProposeParams): void;

            public reject$sdk_release(param0: string, param1: string, param2: kotlin.jvm.functions.Function1<any>): void;

            public ping$sdk_release(param0: string, param1: kotlin.jvm.functions.Function1<any>, param2: kotlin.jvm.functions.Function1<any>): void;

            public getListOfSettledSessions$sdk_release(): java.util.List<com.walletconnect.sign.engine.model.EngineDO.Session>;

            public collectInternalErrors(): kotlinx.coroutines.Job;

            public onSessionRequest(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionRequestParams): void;

            public onSessionSettle(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.SessionSettleParams): void;

            public constructor(param0: com.walletconnect.android.internal.common.model.type.JsonRpcInteractorInterface, param1: com.walletconnect.sign.json_rpc.domain.GetPendingRequestsUseCase, param2: com.walletconnect.android.internal.common.crypto.kmr.KeyManagementRepository, param3: com.walletconnect.sign.storage.sequence.SessionStorageRepository, param4: com.walletconnect.android.internal.common.storage.MetadataStorageRepositoryInterface, param5: com.walletconnect.android.pairing.client.PairingInterface, param6: com.walletconnect.android.pairing.handler.PairingControllerInterface, param7: com.walletconnect.android.internal.common.model.AppMetaData, param8: com.walletconnect.foundation.util.Logger);

            public onSessionExtend(param0: com.walletconnect.android.internal.common.model.WCRequest, param1: com.walletconnect.sign.common.model.vo.clientsync.session.params.SignParams.ExtendParams): void;
          }

          export module SignEngine {
            export class Companion {
              public static class: java.lang.Class<com.walletconnect.sign.engine.domain.SignEngine.Companion>;

              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module engine {
        export module domain {
          export class SignValidator {
            public static class: java.lang.Class<com.walletconnect.sign.engine.domain.SignValidator>;
            public static INSTANCE: com.walletconnect.sign.engine.domain.SignValidator;

            public areAccountIdsValid(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>): boolean;

            public areAllEventsApproved(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param1: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public allRequiredMethodsWithChains(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): java.util.Map<string, java.util.List<string>>;

            public constructor();

            public areAllChainsApprovedWithAtLeastOneAccount(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param1: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public areAccountsNotEmpty(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>): boolean;

            public static<clinit>(): void;

            public areChainsNotEmpty(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public allApprovedMethodsWithChains(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>): java.util.Map<string, java.util.List<string>>;

            public areAllMethodsApproved(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param1: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public areSessionNamespacesKeysProperlyFormatted(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>): boolean;

            public allRequiredEventsWithChains(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): java.util.Map<string, java.util.List<string>>;

            public areAccountsInMatchingNamespace(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>): boolean;

            public areAllProposalNamespacesApproved(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param1: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public areProposalNamespacesKeysProperlyFormatted(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public allApprovedEventsWithChains(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>): java.util.Map<string, java.util.List<string>>;

            public areChainsInMatchingNamespace(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public areExtensionChainsNotEmpty(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public areChainIdsValid(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>): boolean;

            public areExtensionAccountsNotEmpty(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module engine {
        export module model {
          export abstract class EngineDO {
            public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO>;
          }

          export module EngineDO {
            export class Event extends com.walletconnect.sign.engine.model.EngineDO {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.Event>;
              public name: string;
              public data: string;
              public chainId: string;

              public component2(): string;

              public getData(): string;

              public copy(param0: string, param1: string, param2: string): com.walletconnect.sign.engine.model.EngineDO.Event;

              public hashCode(): number;

              public getName(): string;

              public getChainId(): string;

              public constructor(param0: string, param1: string, param2: string);

              public toString(): string;

              public equals(param0: any): boolean;

              public component3(): string;

              public component1(): string;
            }

            export abstract class JsonRpcResponse extends com.walletconnect.sign.engine.model.EngineDO {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse>;

              public getId(): number;
            }

            export module JsonRpcResponse {
              export class Error {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.Error>;
                public code: number;
                public message: string;

                public toString(): string;

                public copy(param0: number, param1: string): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.Error;

                public component1(): number;

                public equals(param0: any): boolean;

                public getMessage(): string;

                public constructor(param0: number, param1: string);

                public component2(): string;

                public hashCode(): number;

                public getCode(): number;
              }

              export class JsonRpcError extends com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcError>;
                public id: number;
                public jsonrpc: string;
                public error: com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.Error;

                public constructor(param0: number, param1: string, param2: com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.Error);

                public getId(): number;

                public getError(): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.Error;

                public toString(): string;

                public component1(): number;

                public equals(param0: any): boolean;

                public copy(param0: number, param1: string, param2: com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.Error): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcError;

                public getJsonrpc(): string;

                public component2(): string;

                public hashCode(): number;

                public component3(): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.Error;
              }

              export class JsonRpcResult extends com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcResult>;
                public id: number;
                public jsonrpc: string;
                public result: string;

                public getId(): number;

                public toString(): string;

                public constructor(param0: number, param1: string, param2: string);

                public component1(): number;

                public getResult(): string;

                public equals(param0: any): boolean;

                public copy(param0: number, param1: string, param2: string): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcResult;

                public getJsonrpc(): string;

                public component2(): string;

                public component3(): string;

                public hashCode(): number;
              }
            }

            export abstract class Namespace extends com.walletconnect.sign.engine.model.EngineDO {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.Namespace>;

              public constructor();
            }

            export module Namespace {
              export class Proposal extends com.walletconnect.sign.engine.model.EngineDO.Namespace {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal>;
                public chains: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;
                public extensions: java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal.Extension>;

                public component4(): java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal.Extension>;

                public toString(): string;

                public component2(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public constructor();

                public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal.Extension>): com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal;

                public getEvents(): java.util.List<string>;

                public getExtensions(): java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal.Extension>;

                public component1(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal.Extension>);

                public hashCode(): number;

                public getChains(): java.util.List<string>;
              }

              export module Proposal {
                export class Extension {
                  public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal.Extension>;
                  public chains: java.util.List<string>;
                  public methods: java.util.List<string>;
                  public events: java.util.List<string>;

                  public component3(): java.util.List<string>;

                  public hashCode(): number;

                  public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                  public getMethods(): java.util.List<string>;

                  public equals(param0: any): boolean;

                  public getEvents(): java.util.List<string>;

                  public toString(): string;

                  public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal.Extension;

                  public getChains(): java.util.List<string>;

                  public component1(): java.util.List<string>;

                  public component2(): java.util.List<string>;
                }
              }

              export class Session extends com.walletconnect.sign.engine.model.EngineDO.Namespace {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;
                public extensions: java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Session.Extension>;

                public toString(): string;

                public component2(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public constructor();

                public getAccounts(): java.util.List<string>;

                public getExtensions(): java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Session.Extension>;

                public getEvents(): java.util.List<string>;

                public component1(): java.util.List<string>;

                public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Session.Extension>): com.walletconnect.sign.engine.model.EngineDO.Namespace.Session;

                public getMethods(): java.util.List<string>;

                public component4(): java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Session.Extension>;

                public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.sign.engine.model.EngineDO.Namespace.Session.Extension>);

                public hashCode(): number;
              }

              export module Session {
                export class Extension {
                  public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.Namespace.Session.Extension>;
                  public accounts: java.util.List<string>;
                  public methods: java.util.List<string>;
                  public events: java.util.List<string>;

                  public component3(): java.util.List<string>;

                  public hashCode(): number;

                  public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                  public getAccounts(): java.util.List<string>;

                  public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.engine.model.EngineDO.Namespace.Session.Extension;

                  public getMethods(): java.util.List<string>;

                  public equals(param0: any): boolean;

                  public getEvents(): java.util.List<string>;

                  public toString(): string;

                  public component1(): java.util.List<string>;

                  public component2(): java.util.List<string>;
                }
              }
            }

            export class PairingSettle extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.PairingSettle>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public appMetaData: com.walletconnect.android.internal.common.model.AppMetaData;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              public hashCode(): number;

              public getAppMetaData(): com.walletconnect.android.internal.common.model.AppMetaData;

              public component1(): com.walletconnect.foundation.common.model.Topic;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData);

              public copy(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.AppMetaData): com.walletconnect.sign.engine.model.EngineDO.PairingSettle;

              public toString(): string;

              public equals(param0: any): boolean;

              public component2(): com.walletconnect.android.internal.common.model.AppMetaData;
            }

            export class Request extends com.walletconnect.sign.engine.model.EngineDO {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.Request>;
              public topic: string;
              public method: string;
              public params: string;
              public chainId: string;

              public getTopic(): string;

              public copy(param0: string, param1: string, param2: string, param3: string): com.walletconnect.sign.engine.model.EngineDO.Request;

              public component2(): string;

              public getMethod(): string;

              public hashCode(): number;

              public getChainId(): string;

              public toString(): string;

              public component3(): string;

              public component1(): string;

              public constructor(param0: string, param1: string, param2: string, param3: string);

              public component4(): string;

              public getParams(): string;

              public equals(param0: any): boolean;
            }

            export class Session extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.Sequence, com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.Session>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public expiry: com.walletconnect.android.internal.common.model.Expiry;
              public namespaces: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;
              public peerAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              public component4(): com.walletconnect.android.internal.common.model.AppMetaData;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry, param2: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>, param3: com.walletconnect.android.internal.common.model.AppMetaData);

              public hashCode(): number;

              public component1(): com.walletconnect.foundation.common.model.Topic;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public toString(): string;

              public component3(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public copy(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry, param2: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>, param3: com.walletconnect.android.internal.common.model.AppMetaData): com.walletconnect.sign.engine.model.EngineDO.Session;

              public getPeerAppMetaData(): com.walletconnect.android.internal.common.model.AppMetaData;

              public component2(): com.walletconnect.android.internal.common.model.Expiry;

              public getExpiry(): com.walletconnect.android.internal.common.model.Expiry;

              public equals(param0: any): boolean;
            }

            export class SessionApproved extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionApproved>;
              public topic: string;
              public peerAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;
              public accounts: java.util.List<string>;
              public namespaces: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public getTopic(): string;

              public hashCode(): number;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public copy(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: java.util.List<string>, param3: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>): com.walletconnect.sign.engine.model.EngineDO.SessionApproved;

              public toString(): string;

              public component2(): com.walletconnect.android.internal.common.model.AppMetaData;

              public getAccounts(): java.util.List<string>;

              public component1(): string;

              public component3(): java.util.List<string>;

              public getPeerAppMetaData(): com.walletconnect.android.internal.common.model.AppMetaData;

              public constructor(param0: string, param1: com.walletconnect.android.internal.common.model.AppMetaData, param2: java.util.List<string>, param3: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>);

              public component4(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public equals(param0: any): boolean;
            }

            export class SessionDelete extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionDelete>;
              public topic: string;
              public reason: string;

              public getTopic(): string;

              public copy(param0: string, param1: string): com.walletconnect.sign.engine.model.EngineDO.SessionDelete;

              public component2(): string;

              public hashCode(): number;

              public constructor(param0: string, param1: string);

              public toString(): string;

              public equals(param0: any): boolean;

              public component1(): string;

              public getReason(): string;
            }

            export class SessionEvent extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionEvent>;
              public topic: string;
              public name: string;
              public data: string;
              public chainId: string;

              public getTopic(): string;

              public component2(): string;

              public hashCode(): number;

              public getChainId(): string;

              public copy(param0: string, param1: string, param2: string, param3: string): com.walletconnect.sign.engine.model.EngineDO.SessionEvent;

              public toString(): string;

              public component3(): string;

              public component1(): string;

              public constructor(param0: string, param1: string, param2: string, param3: string);

              public getData(): string;

              public getName(): string;

              public component4(): string;

              public equals(param0: any): boolean;
            }

            export class SessionExtend extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.Sequence, com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionExtend>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public expiry: com.walletconnect.android.internal.common.model.Expiry;
              public namespaces: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;
              public peerAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              public component4(): com.walletconnect.android.internal.common.model.AppMetaData;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry, param2: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>, param3: com.walletconnect.android.internal.common.model.AppMetaData);

              public copy(param0: com.walletconnect.foundation.common.model.Topic, param1: com.walletconnect.android.internal.common.model.Expiry, param2: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>, param3: com.walletconnect.android.internal.common.model.AppMetaData): com.walletconnect.sign.engine.model.EngineDO.SessionExtend;

              public hashCode(): number;

              public component1(): com.walletconnect.foundation.common.model.Topic;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public toString(): string;

              public component3(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public getPeerAppMetaData(): com.walletconnect.android.internal.common.model.AppMetaData;

              public component2(): com.walletconnect.android.internal.common.model.Expiry;

              public getExpiry(): com.walletconnect.android.internal.common.model.Expiry;

              public equals(param0: any): boolean;
            }

            export class SessionPayloadResponse extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionPayloadResponse>;
              public topic: string;
              public chainId: string;
              public method: string;
              public result: com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse;

              public getTopic(): string;

              public component2(): string;

              public getMethod(): string;

              public hashCode(): number;

              public getChainId(): string;

              public toString(): string;

              public component3(): string;

              public copy(param0: string, param1: string, param2: string, param3: com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse): com.walletconnect.sign.engine.model.EngineDO.SessionPayloadResponse;

              public component1(): string;

              public constructor(param0: string, param1: string, param2: string, param3: com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse);

              public component4(): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse;

              public equals(param0: any): boolean;

              public getResult(): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse;
            }

            export class SessionProposal extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionProposal>;
              public name: string;
              public description: string;
              public url: string;
              public icons: java.util.List<java.net.URI>;
              public requiredNamespaces: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal>;
              public proposerPublicKey: string;
              public relayProtocol: string;
              public relayData: string;

              public getIcons(): java.util.List<java.net.URI>;

              public component2(): string;

              public component7(): string;

              public hashCode(): number;

              public getRelayProtocol(): string;

              public component5(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal>;

              public toString(): string;

              public component4(): java.util.List<java.net.URI>;

              public getDescription(): string;

              public constructor(param0: string, param1: string, param2: string, param3: java.util.List<java.net.URI>, param4: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal>, param5: string, param6: string, param7: string);

              public component3(): string;

              public component1(): string;

              public component8(): string;

              public getUrl(): string;

              public getName(): string;

              public getProposerPublicKey(): string;

              public getRelayData(): string;

              public getRequiredNamespaces(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal>;

              public component6(): string;

              public equals(param0: any): boolean;

              public copy(param0: string, param1: string, param2: string, param3: java.util.List<java.net.URI>, param4: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Proposal>, param5: string, param6: string, param7: string): com.walletconnect.sign.engine.model.EngineDO.SessionProposal;
            }

            export class SessionRejected extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionRejected>;
              public topic: string;
              public reason: string;

              public getTopic(): string;

              public component2(): string;

              public hashCode(): number;

              public constructor(param0: string, param1: string);

              public toString(): string;

              public copy(param0: string, param1: string): com.walletconnect.sign.engine.model.EngineDO.SessionRejected;

              public equals(param0: any): boolean;

              public component1(): string;

              public getReason(): string;
            }

            export class SessionRequest extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionRequest>;
              public topic: string;
              public chainId: string;
              public peerAppMetaData: com.walletconnect.android.internal.common.model.AppMetaData;
              public request: com.walletconnect.sign.engine.model.EngineDO.SessionRequest.JSONRPCRequest;

              public getTopic(): string;

              public component2(): string;

              public component3(): com.walletconnect.android.internal.common.model.AppMetaData;

              public hashCode(): number;

              public getChainId(): string;

              public toString(): string;

              public component1(): string;

              public constructor(param0: string, param1: string, param2: com.walletconnect.android.internal.common.model.AppMetaData, param3: com.walletconnect.sign.engine.model.EngineDO.SessionRequest.JSONRPCRequest);

              public getPeerAppMetaData(): com.walletconnect.android.internal.common.model.AppMetaData;

              public component4(): com.walletconnect.sign.engine.model.EngineDO.SessionRequest.JSONRPCRequest;

              public getRequest(): com.walletconnect.sign.engine.model.EngineDO.SessionRequest.JSONRPCRequest;

              public equals(param0: any): boolean;

              public copy(param0: string, param1: string, param2: com.walletconnect.android.internal.common.model.AppMetaData, param3: com.walletconnect.sign.engine.model.EngineDO.SessionRequest.JSONRPCRequest): com.walletconnect.sign.engine.model.EngineDO.SessionRequest;
            }

            export module SessionRequest {
              export class JSONRPCRequest extends com.walletconnect.sign.engine.model.EngineDO {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionRequest.JSONRPCRequest>;
                public id: number;
                public method: string;
                public params: string;

                public getId(): number;

                public toString(): string;

                public constructor(param0: number, param1: string, param2: string);

                public getMethod(): string;

                public component1(): number;

                public getParams(): string;

                public equals(param0: any): boolean;

                public component2(): string;

                public component3(): string;

                public hashCode(): number;

                public copy(param0: number, param1: string, param2: string): com.walletconnect.sign.engine.model.EngineDO.SessionRequest.JSONRPCRequest;
              }
            }

            export class SessionUpdateNamespaces extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespaces>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public namespaces: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              public hashCode(): number;

              public component1(): com.walletconnect.foundation.common.model.Topic;

              public getNamespaces(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public copy(param0: com.walletconnect.foundation.common.model.Topic, param1: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>): com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespaces;

              public toString(): string;

              public component2(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

              public equals(param0: any): boolean;

              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>);
            }

            export abstract class SessionUpdateNamespacesResponse extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespacesResponse>;

              public constructor();
            }

            export module SessionUpdateNamespacesResponse {
              export class Error extends com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespacesResponse {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespacesResponse.Error>;
                public errorMessage: string;

                public component1(): string;

                public getErrorMessage(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespacesResponse.Error;

                public equals(param0: any): boolean;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;
              }

              export class Result extends com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespacesResponse {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespacesResponse.Result>;
                public topic: com.walletconnect.foundation.common.model.Topic;
                public namespaces: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

                public toString(): string;

                public copy(param0: com.walletconnect.foundation.common.model.Topic, param1: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>): com.walletconnect.sign.engine.model.EngineDO.SessionUpdateNamespacesResponse.Result;

                public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>);

                public component2(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;

                public equals(param0: any): boolean;

                public constructor();

                public getTopic(): com.walletconnect.foundation.common.model.Topic;

                public hashCode(): number;

                public component1(): com.walletconnect.foundation.common.model.Topic;

                public getNamespaces(): java.util.Map<string, com.walletconnect.sign.engine.model.EngineDO.Namespace.Session>;
              }
            }

            export abstract class SettledSessionResponse extends com.walletconnect.sign.engine.model.EngineDO implements com.walletconnect.android.internal.common.model.type.EngineEvent {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SettledSessionResponse>;

              public constructor();
            }

            export module SettledSessionResponse {
              export class Error extends com.walletconnect.sign.engine.model.EngineDO.SettledSessionResponse {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SettledSessionResponse.Error>;
                public errorMessage: string;

                public component1(): string;

                public getErrorMessage(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.sign.engine.model.EngineDO.SettledSessionResponse.Error;

                public equals(param0: any): boolean;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;
              }

              export class Result extends com.walletconnect.sign.engine.model.EngineDO.SettledSessionResponse {
                public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.SettledSessionResponse.Result>;
                public settledSession: com.walletconnect.sign.engine.model.EngineDO.Session;

                public toString(): string;

                public getSettledSession(): com.walletconnect.sign.engine.model.EngineDO.Session;

                public copy(param0: com.walletconnect.sign.engine.model.EngineDO.Session): com.walletconnect.sign.engine.model.EngineDO.SettledSessionResponse.Result;

                public equals(param0: any): boolean;

                public constructor();

                public hashCode(): number;

                public component1(): com.walletconnect.sign.engine.model.EngineDO.Session;

                public constructor(param0: com.walletconnect.sign.engine.model.EngineDO.Session);
              }
            }

            export class WalletConnectUri extends com.walletconnect.sign.engine.model.EngineDO {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO.WalletConnectUri>;
              public topic: com.walletconnect.foundation.common.model.Topic;
              public symKey: string;
              public relay: com.walletconnect.android.internal.common.model.RelayProtocolOptions;
              public version: string;

              public getTopic(): com.walletconnect.foundation.common.model.Topic;

              //public getSymKey-zn44X4c(): string;
              public constructor(param0: com.walletconnect.foundation.common.model.Topic, param1: string, param2: com.walletconnect.android.internal.common.model.RelayProtocolOptions, param3: string);

              public getRelay(): com.walletconnect.android.internal.common.model.RelayProtocolOptions;

              public getVersion(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module engine {
        export module model {
          export class EngineDO_JsonRpcResponse_JsonRpcErrorJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcError> {
            public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO_JsonRpcResponse_JsonRpcErrorJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public errorAdapter: com.squareup.moshi.JsonAdapter<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.Error>;
            public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcError>;

            public constructor(param0: com.squareup.moshi.Moshi);

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcError;

            public toString(): string;

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcError): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module engine {
        export module model {
          export class EngineDO_JsonRpcResponse_JsonRpcResultJsonAdapter extends com.squareup.moshi.JsonAdapter<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcResult> {
            public static class: java.lang.Class<com.walletconnect.sign.engine.model.EngineDO_JsonRpcResponse_JsonRpcResultJsonAdapter>;
            public options: com.squareup.moshi.JsonReader.Options;
            public longAdapter: com.squareup.moshi.JsonAdapter<java.lang.Long>;
            public stringAdapter: com.squareup.moshi.JsonAdapter<string>;
            public constructorRef: java.lang.reflect.Constructor<com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcResult>;

            public constructor(param0: com.squareup.moshi.Moshi);

            public fromJson(param0: com.squareup.moshi.JsonReader): com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcResult;

            public toJson(param0: com.squareup.moshi.JsonWriter, param1: com.walletconnect.sign.engine.model.EngineDO.JsonRpcResponse.JsonRpcResult): void;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module engine {
        export module model {
          export abstract class ValidationError {
            public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError>;
            public message: string;

            public getMessage(): string;

            public constructor(param0: string);
          }

          export module ValidationError {
            export class InvalidEvent extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.InvalidEvent>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.InvalidEvent;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }

            export class InvalidExtendRequest extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.InvalidExtendRequest>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.InvalidExtendRequest;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }

            export class InvalidSessionRequest extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.InvalidSessionRequest>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.InvalidSessionRequest;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }

            export class UnauthorizedEvent extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.UnauthorizedEvent>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.UnauthorizedEvent;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }

            export class UnauthorizedMethod extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.UnauthorizedMethod>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.UnauthorizedMethod;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }

            export class UnsupportedChains extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.UnsupportedChains>;

              public constructor(param0: string);
            }

            export class UnsupportedNamespaceKey extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.UnsupportedNamespaceKey>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.UnsupportedNamespaceKey;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }

            export class UserRejected extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.UserRejected>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.UserRejected;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }

            export class UserRejectedChains extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.UserRejectedChains>;

              public constructor(param0: string);
            }

            export class UserRejectedEvents extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.UserRejectedEvents>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.UserRejectedEvents;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }

            export class UserRejectedMethods extends com.walletconnect.sign.engine.model.ValidationError {
              public static class: java.lang.Class<com.walletconnect.sign.engine.model.ValidationError.UserRejectedMethods>;
              public static INSTANCE: com.walletconnect.sign.engine.model.ValidationError.UserRejectedMethods;

              public constructor();
              public constructor(param0: string);

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module json_rpc {
        export module domain {
          export class GetPendingRequestsUseCase {
            public static class: java.lang.Class<com.walletconnect.sign.json_rpc.domain.GetPendingRequestsUseCase>;
            public jsonRpcHistory: com.walletconnect.android.internal.common.storage.JsonRpcHistory;
            public serializer: com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer;

            public constructor(param0: com.walletconnect.android.internal.common.storage.JsonRpcHistory, param1: com.walletconnect.android.internal.common.json_rpc.data.JsonRpcSerializer);

            public invoke(param0: com.walletconnect.foundation.common.model.Topic): java.util.List<com.walletconnect.sign.common.model.PendingRequest>;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module json_rpc {
        export module model {
          export class JsonRpcMethod {
            public static class: java.lang.Class<com.walletconnect.sign.json_rpc.model.JsonRpcMethod>;
            public static INSTANCE: com.walletconnect.sign.json_rpc.model.JsonRpcMethod;
            public static WC_SESSION_PROPOSE: string;
            public static WC_SESSION_SETTLE: string;
            public static WC_SESSION_REQUEST: string;
            public static WC_SESSION_DELETE: string;
            public static WC_SESSION_PING: string;
            public static WC_SESSION_EVENT: string;
            public static WC_SESSION_UPDATE: string;
            public static WC_SESSION_EXTEND: string;

            public constructor();

            public static<clinit>(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module sdk {
        export class NamespaceDaoQueriesImpl implements com.walletconnect.sign.storage.data.dao.namespace.NamespaceDaoQueries {
          public static class: java.lang.Class<com.walletconnect.sign.sdk.NamespaceDaoQueriesImpl>;
          public database: com.walletconnect.sign.sdk.SignDatabaseImpl;
          public driver: com.squareup.sqldelight.db.SqlDriver;

          public constructor(param0: com.walletconnect.sign.sdk.SignDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

          public isUpdateNamespaceRequestValid(param0: number, param1: string): com.squareup.sqldelight.Query<java.lang.Boolean>;

          public getNamespaces(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.namespace.GetNamespaces>;

          public getGetNamespaces$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public deleteNamespacesByTopic(param0: string): void;

          public getNamespaces(param0: number, param1: any): com.squareup.sqldelight.Query;

          public insertOrAbortNamespace(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>, param5: number): void;

          public isUpdateNamespaceRequestValid$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;
        }

        export module NamespaceDaoQueriesImpl {
          export class GetNamespacesQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.NamespaceDaoQueriesImpl.GetNamespacesQuery<any>>;
            public session_id: number;

            public getSession_id(): number;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public constructor(param0: number, param1: kotlin.jvm.functions.Function1<any>);

            public toString(): string;
          }

          export class IsUpdateNamespaceRequestValidQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.NamespaceDaoQueriesImpl.IsUpdateNamespaceRequestValidQuery<any>>;
            public value: number;
            public topic: string;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getTopic(): string;

            public constructor(param0: number, param1: string, param2: kotlin.jvm.functions.Function1<any>);

            public toString(): string;

            public getValue(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module sdk {
        export class NamespaceExtensionDaoQueriesImpl implements com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionDaoQueries {
          public static class: java.lang.Class<com.walletconnect.sign.sdk.NamespaceExtensionDaoQueriesImpl>;
          public database: com.walletconnect.sign.sdk.SignDatabaseImpl;
          public driver: com.squareup.sqldelight.db.SqlDriver;

          public constructor(param0: com.walletconnect.sign.sdk.SignDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

          public deleteNamespacesExtensionsByTopic(param0: string): void;

          public getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;

          public getGetNamespaceExtensionByNamespaceKeyAndSessionId$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public insertOrAbortNamespaceExtension(param0: string, param1: number, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;

          public getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.namespace.GetNamespaceExtensionByNamespaceKeyAndSessionId>;
        }

        export module NamespaceExtensionDaoQueriesImpl {
          export class GetNamespaceExtensionByNamespaceKeyAndSessionIdQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.NamespaceExtensionDaoQueriesImpl.GetNamespaceExtensionByNamespaceKeyAndSessionIdQuery<any>>;
            public namespace_key: string;
            public session_id: number;

            public getSession_id(): number;

            public constructor(param0: string, param1: number, param2: kotlin.jvm.functions.Function1<any>);

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getNamespace_key(): string;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module sdk {
        export class ProposalNamespaceDaoQueriesImpl implements com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDaoQueries {
          public static class: java.lang.Class<com.walletconnect.sign.sdk.ProposalNamespaceDaoQueriesImpl>;
          public database: com.walletconnect.sign.sdk.SignDatabaseImpl;
          public driver: com.squareup.sqldelight.db.SqlDriver;

          public constructor(param0: com.walletconnect.sign.sdk.SignDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

          public getGetProposalNamespaces$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public getProposalNamespaces(param0: number, param1: any): com.squareup.sqldelight.Query;

          public insertOrAbortProposalNamespace(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;

          public getProposalNamespaces(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaces>;

          public deleteProposalNamespacesByTopic(param0: string): void;
        }

        export module ProposalNamespaceDaoQueriesImpl {
          export class GetProposalNamespacesQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.ProposalNamespaceDaoQueriesImpl.GetProposalNamespacesQuery<any>>;
            public session_id: number;

            public getSession_id(): number;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public constructor(param0: number, param1: kotlin.jvm.functions.Function1<any>);

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module sdk {
        export class ProposalNamespaceExtensionDaoQueriesImpl implements com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionDaoQueries {
          public static class: java.lang.Class<com.walletconnect.sign.sdk.ProposalNamespaceExtensionDaoQueriesImpl>;
          public database: com.walletconnect.sign.sdk.SignDatabaseImpl;
          public driver: com.squareup.sqldelight.db.SqlDriver;

          public constructor(param0: com.walletconnect.sign.sdk.SignDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

          public getGetProposalNamespaceExtensionByKeyAndSessionId$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public insertOrAbortProposalNamespaceExtension(param0: string, param1: number, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;

          public getProposalNamespaceExtensionByKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;

          public deleteProposalNamespacesExtensionsByTopic(param0: string): void;

          public getProposalNamespaceExtensionByKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaceExtensionByKeyAndSessionId>;
        }

        export module ProposalNamespaceExtensionDaoQueriesImpl {
          export class GetProposalNamespaceExtensionByKeyAndSessionIdQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.ProposalNamespaceExtensionDaoQueriesImpl.GetProposalNamespaceExtensionByKeyAndSessionIdQuery<any>>;
            public namespace_key: string;
            public session_id: number;

            public getSession_id(): number;

            public constructor(param0: string, param1: number, param2: kotlin.jvm.functions.Function1<any>);

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getNamespace_key(): string;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module sdk {
        export class SessionDaoQueriesImpl implements com.walletconnect.sign.storage.data.dao.session.SessionDaoQueries {
          public static class: java.lang.Class<com.walletconnect.sign.sdk.SessionDaoQueriesImpl>;
          public database: com.walletconnect.sign.sdk.SignDatabaseImpl;
          public driver: com.squareup.sqldelight.db.SqlDriver;

          public constructor(param0: com.walletconnect.sign.sdk.SignDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

          public getGetSessionIdByTopic$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public getHasTopic$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public getGetAllSessionTopicsByPairingTopic$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public updateSessionExpiry(param0: number, param1: string): void;

          public getGetSessionByTopic$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public acknowledgeSession(param0: boolean, param1: string): void;

          public getLastInsertedRow$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public getListOfSessionDaos(): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.session.GetListOfSessionDaos>;

          public getSessionIdByTopic(param0: string): com.squareup.sqldelight.Query<java.lang.Long>;

          public getListOfSessionDaos(param0: any): com.squareup.sqldelight.Query;

          public getSessionByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.session.GetSessionByTopic>;

          public hasTopic(param0: string): com.squareup.sqldelight.Query<string>;

          public getAllSessionTopicsByPairingTopic(param0: string): com.squareup.sqldelight.Query<string>;

          public insertOrAbortSession(param0: string, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: boolean): void;

          public getSessionByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;

          public getGetExpiry$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public deleteSession(param0: string): void;

          public getExpiry(param0: string): com.squareup.sqldelight.Query<java.lang.Long>;

          public getGetListOfSessionDaos$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public lastInsertedRow(): com.squareup.sqldelight.Query<java.lang.Long>;
        }

        export module SessionDaoQueriesImpl {
          export class GetAllSessionTopicsByPairingTopicQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.SessionDaoQueriesImpl.GetAllSessionTopicsByPairingTopicQuery<any>>;
            public pairingTopic: string;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getPairingTopic(): string;

            public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any>);

            public toString(): string;
          }

          export class GetExpiryQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.SessionDaoQueriesImpl.GetExpiryQuery<any>>;
            public topic: string;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getTopic(): string;

            public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any>);

            public toString(): string;
          }

          export class GetSessionByTopicQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.SessionDaoQueriesImpl.GetSessionByTopicQuery<any>>;
            public topic: string;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getTopic(): string;

            public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any>);

            public toString(): string;
          }

          export class GetSessionIdByTopicQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.SessionDaoQueriesImpl.GetSessionIdByTopicQuery<any>>;
            public topic: string;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getTopic(): string;

            public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any>);

            public toString(): string;
          }

          export class HasTopicQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.SessionDaoQueriesImpl.HasTopicQuery<any>>;
            public topic: string;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getTopic(): string;

            public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any>);

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module sdk {
        export class SignDatabaseImpl implements com.walletconnect.sign.SignDatabase {
          public static class: java.lang.Class<com.walletconnect.sign.sdk.SignDatabaseImpl>;
          public NamespaceDaoAdapter: com.walletconnect.sign.storage.data.dao.namespace.NamespaceDao.Adapter;
          public NamespaceExtensionsDaoAdapter: com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionsDao.Adapter;
          public ProposalNamespaceDaoAdapter: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDao.Adapter;
          public ProposalNamespaceExtensionsDaoAdapter: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionsDao.Adapter;
          public TempNamespaceDaoAdapter: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDao.Adapter;
          public TempNamespaceExtensionsDaoAdapter: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionsDao.Adapter;
          public namespaceDaoQueries: com.walletconnect.sign.sdk.NamespaceDaoQueriesImpl;
          public namespaceExtensionDaoQueries: com.walletconnect.sign.sdk.NamespaceExtensionDaoQueriesImpl;
          public proposalNamespaceDaoQueries: com.walletconnect.sign.sdk.ProposalNamespaceDaoQueriesImpl;
          public proposalNamespaceExtensionDaoQueries: com.walletconnect.sign.sdk.ProposalNamespaceExtensionDaoQueriesImpl;
          public sessionDaoQueries: com.walletconnect.sign.sdk.SessionDaoQueriesImpl;
          public tempNamespaceDaoQueries: com.walletconnect.sign.sdk.TempNamespaceDaoQueriesImpl;
          public tempNamespaceExtensionDaoQueries: com.walletconnect.sign.sdk.TempNamespaceExtensionDaoQueriesImpl;

          public getNamespaceDaoAdapter$sdk_release(): com.walletconnect.sign.storage.data.dao.namespace.NamespaceDao.Adapter;

          public getSessionDaoQueries(): com.walletconnect.sign.sdk.SessionDaoQueriesImpl;

          public getProposalNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDaoQueries;

          public getTempNamespaceExtensionsDaoAdapter$sdk_release(): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionsDao.Adapter;

          public constructor(param0: com.squareup.sqldelight.db.SqlDriver, param1: com.walletconnect.sign.storage.data.dao.namespace.NamespaceDao.Adapter, param2: com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionsDao.Adapter, param3: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDao.Adapter, param4: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionsDao.Adapter, param5: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDao.Adapter, param6: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionsDao.Adapter);

          public getTempNamespaceDaoQueries(): com.walletconnect.sign.sdk.TempNamespaceDaoQueriesImpl;

          public getNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionDaoQueries;

          public getProposalNamespaceDaoQueries(): com.walletconnect.sign.sdk.ProposalNamespaceDaoQueriesImpl;

          public getNamespaceDaoQueries(): com.walletconnect.sign.sdk.NamespaceDaoQueriesImpl;

          public getProposalNamespaceDaoAdapter$sdk_release(): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDao.Adapter;

          public getTempNamespaceDaoAdapter$sdk_release(): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDao.Adapter;

          public getProposalNamespaceExtensionsDaoAdapter$sdk_release(): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionsDao.Adapter;

          public getTempNamespaceExtensionDaoQueries(): com.walletconnect.sign.sdk.TempNamespaceExtensionDaoQueriesImpl;

          public getNamespaceExtensionDaoQueries(): com.walletconnect.sign.sdk.NamespaceExtensionDaoQueriesImpl;

          public getNamespaceExtensionsDaoAdapter$sdk_release(): com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionsDao.Adapter;

          public getTempNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDaoQueries;

          public getNamespaceDaoQueries(): com.walletconnect.sign.storage.data.dao.namespace.NamespaceDaoQueries;

          public getTempNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionDaoQueries;

          public getProposalNamespaceExtensionDaoQueries(): com.walletconnect.sign.sdk.ProposalNamespaceExtensionDaoQueriesImpl;

          public static<clinit>(): void;

          public getSessionDaoQueries(): com.walletconnect.sign.storage.data.dao.session.SessionDaoQueries;

          public getProposalNamespaceExtensionDaoQueries(): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionDaoQueries;
        }

        export module SignDatabaseImpl {
          export class Schema {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.SignDatabaseImpl.Schema>;
            public static INSTANCE: com.walletconnect.sign.sdk.SignDatabaseImpl.Schema;

            public constructor();

            public migrate(param0: com.squareup.sqldelight.db.SqlDriver, param1: number, param2: number): void;

            public getVersion(): number;

            public static<clinit>(): void;

            public create(param0: com.squareup.sqldelight.db.SqlDriver): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module sdk {
        export class TempNamespaceDaoQueriesImpl implements com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDaoQueries {
          public static class: java.lang.Class<com.walletconnect.sign.sdk.TempNamespaceDaoQueriesImpl>;
          public database: com.walletconnect.sign.sdk.SignDatabaseImpl;
          public driver: com.squareup.sqldelight.db.SqlDriver;

          public constructor(param0: com.walletconnect.sign.sdk.SignDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

          public deleteTempNamespacesByTopic(param0: string): void;

          public getTempNamespacesByRequestId(param0: number, param1: any): com.squareup.sqldelight.Query;

          public isUpdateNamespaceRequestValid(param0: string, param1: number): com.squareup.sqldelight.Query<java.lang.Boolean>;

          public markNamespaceAcknowledged(param0: number): void;

          public getTempNamespacesByRequestId(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.temp.GetTempNamespacesByRequestId>;

          public insertOrAbortNamespace(param0: number, param1: string, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.lang.Long): void;

          public getGetTempNamespacesByRequestId$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public isUpdateNamespaceRequestValid$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public deleteTempNamespacesByRequestId(param0: number): void;
        }

        export module TempNamespaceDaoQueriesImpl {
          export class GetTempNamespacesByRequestIdQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.TempNamespaceDaoQueriesImpl.GetTempNamespacesByRequestIdQuery<any>>;
            public request_id: number;

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getRequest_id(): number;

            public constructor(param0: number, param1: kotlin.jvm.functions.Function1<any>);

            public toString(): string;
          }

          export class IsUpdateNamespaceRequestValidQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.TempNamespaceDaoQueriesImpl.IsUpdateNamespaceRequestValidQuery<any>>;
            public topic: string;
            public value: number;

            public constructor(param0: string, param1: number, param2: kotlin.jvm.functions.Function1<any>);

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getTopic(): string;

            public toString(): string;

            public getValue(): number;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module sdk {
        export class TempNamespaceExtensionDaoQueriesImpl implements com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionDaoQueries {
          public static class: java.lang.Class<com.walletconnect.sign.sdk.TempNamespaceExtensionDaoQueriesImpl>;
          public database: com.walletconnect.sign.sdk.SignDatabaseImpl;
          public driver: com.squareup.sqldelight.db.SqlDriver;

          public constructor(param0: com.walletconnect.sign.sdk.SignDatabaseImpl, param1: com.squareup.sqldelight.db.SqlDriver);

          public getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;

          public getGetNamespaceExtensionByNamespaceKeyAndSessionId$sdk_release(): java.util.List<com.squareup.sqldelight.Query<any>>;

          public getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.temp.GetNamespaceExtensionByNamespaceKeyAndSessionId>;

          public deleteTempNamespacesExtensionByTopic(param0: string): void;

          public insertOrAbortNamespaceExtension(param0: string, param1: number, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>, param6: number): void;
        }

        export module TempNamespaceExtensionDaoQueriesImpl {
          export class GetNamespaceExtensionByNamespaceKeyAndSessionIdQuery<T> extends com.squareup.sqldelight.Query<any> {
            public static class: java.lang.Class<com.walletconnect.sign.sdk.TempNamespaceExtensionDaoQueriesImpl.GetNamespaceExtensionByNamespaceKeyAndSessionIdQuery<any>>;
            public namespace_key: string;
            public session_id: number;

            public getSession_id(): number;

            public constructor(param0: string, param1: number, param2: kotlin.jvm.functions.Function1<any>);

            public execute(): com.squareup.sqldelight.db.SqlCursor;

            public getNamespace_key(): string;

            public toString(): string;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module namespace {
              export class GetNamespaceExtensionByNamespaceKeyAndSessionId {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.namespace.GetNamespaceExtensionByNamespaceKeyAndSessionId>;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public toString(): string;

                public getEvents(): java.util.List<string>;

                public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                public component1(): java.util.List<string>;

                public component2(): java.util.List<string>;

                public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.storage.data.dao.namespace.GetNamespaceExtensionByNamespaceKeyAndSessionId;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public getAccounts(): java.util.List<string>;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module namespace {
              export class GetNamespaces {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.namespace.GetNamespaces>;
                public key: string;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public constructor(param0: string, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<string>);

                public toString(): string;

                public copy(param0: string, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<string>): com.walletconnect.sign.storage.data.dao.namespace.GetNamespaces;

                public component2(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public getAccounts(): java.util.List<string>;

                public getKey(): string;

                public component1(): string;

                public getEvents(): java.util.List<string>;

                public component4(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module namespace {
              export class NamespaceDao {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.namespace.NamespaceDao>;
                public id: number;
                public session_id: number;
                public key: string;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;
                public request_id: number;

                public getSession_id(): number;

                public toString(): string;

                public getRequest_id(): number;

                public component5(): java.util.List<string>;

                public component7(): number;

                public equals(param0: any): boolean;

                public constructor(param0: number, param1: number, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>, param6: number);

                public getAccounts(): java.util.List<string>;

                public getKey(): string;

                public copy(param0: number, param1: number, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>, param6: number): com.walletconnect.sign.storage.data.dao.namespace.NamespaceDao;

                public getId(): number;

                public getEvents(): java.util.List<string>;

                public component1(): number;

                public component4(): java.util.List<string>;

                public component6(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public component2(): number;

                public component3(): string;

                public hashCode(): number;
              }

              export module NamespaceDao {
                export class Adapter {
                  public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.namespace.NamespaceDao.Adapter>;
                  public accountsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public methodsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public eventsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getAccountsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public constructor(param0: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param1: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param2: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>);

                  public getMethodsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getEventsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module namespace {
              export class NamespaceDaoQueries {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.namespace.NamespaceDaoQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.sign.storage.data.dao.namespace.NamespaceDaoQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getNamespaces(param0: number, param1: any): com.squareup.sqldelight.Query;
                  getNamespaces(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.namespace.GetNamespaces>;
                  isUpdateNamespaceRequestValid(param0: number, param1: string): com.squareup.sqldelight.Query<java.lang.Boolean>;
                  insertOrAbortNamespace(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>, param5: number): void;
                  deleteNamespacesByTopic(param0: string): void;
                });
                public constructor();

                public insertOrAbortNamespace(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>, param5: number): void;

                public isUpdateNamespaceRequestValid(param0: number, param1: string): com.squareup.sqldelight.Query<java.lang.Boolean>;

                public deleteNamespacesByTopic(param0: string): void;

                public getNamespaces(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.namespace.GetNamespaces>;
                public getNamespaces(param0: number, param1: any): com.squareup.sqldelight.Query;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module namespace {
              export class NamespaceExtensionDaoQueries {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionDaoQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionDaoQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;
                  getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.namespace.GetNamespaceExtensionByNamespaceKeyAndSessionId>;
                  insertOrAbortNamespaceExtension(param0: string, param1: number, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;
                  deleteNamespacesExtensionsByTopic(param0: string): void;
                });
                public constructor();

                public insertOrAbortNamespaceExtension(param0: string, param1: number, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;

                public deleteNamespacesExtensionsByTopic(param0: string): void;

                public getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;
                public getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.namespace.GetNamespaceExtensionByNamespaceKeyAndSessionId>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module namespace {
              export class NamespaceExtensionsDao {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionsDao>;
                public id: number;
                public namespace_key: string;
                public session_id: number;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public getSession_id(): number;

                public toString(): string;

                public getNamespace_key(): string;

                public component5(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): number;

                public getAccounts(): java.util.List<string>;

                public component2(): string;

                public getId(): number;

                public getEvents(): java.util.List<string>;

                public component1(): number;

                public constructor(param0: number, param1: string, param2: number, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>);

                public component4(): java.util.List<string>;

                public component6(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public copy(param0: number, param1: string, param2: number, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>): com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionsDao;

                public hashCode(): number;
              }

              export module NamespaceExtensionsDao {
                export class Adapter {
                  public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionsDao.Adapter>;
                  public accountsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public methodsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public eventsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getAccountsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public constructor(param0: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param1: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param2: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>);

                  public getMethodsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getEventsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module proposalnamespace {
              export class GetProposalNamespaceExtensionByKeyAndSessionId {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaceExtensionByKeyAndSessionId>;
                public chains: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public toString(): string;

                public getEvents(): java.util.List<string>;

                public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                public component1(): java.util.List<string>;

                public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaceExtensionByKeyAndSessionId;

                public component2(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public hashCode(): number;

                public getChains(): java.util.List<string>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module proposalnamespace {
              export class GetProposalNamespaces {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaces>;
                public key: string;
                public chains: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public constructor(param0: string, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<string>);

                public toString(): string;

                public component2(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public getKey(): string;

                public component1(): string;

                public copy(param0: string, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<string>): com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaces;

                public getEvents(): java.util.List<string>;

                public component4(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public hashCode(): number;

                public getChains(): java.util.List<string>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module proposalnamespace {
              export class ProposalNamespaceDao {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDao>;
                public id: number;
                public session_id: number;
                public key: string;
                public chains: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public getSession_id(): number;

                public copy(param0: number, param1: number, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDao;

                public toString(): string;

                public constructor(param0: number, param1: number, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>);

                public component5(): java.util.List<string>;

                public equals(param0: any): boolean;

                public getKey(): string;

                public getId(): number;

                public getEvents(): java.util.List<string>;

                public component1(): number;

                public component4(): java.util.List<string>;

                public component6(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public component2(): number;

                public component3(): string;

                public hashCode(): number;

                public getChains(): java.util.List<string>;
              }

              export module ProposalNamespaceDao {
                export class Adapter {
                  public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDao.Adapter>;
                  public chainsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public methodsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public eventsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public constructor(param0: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param1: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param2: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>);

                  public getMethodsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getChainsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getEventsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module proposalnamespace {
              export class ProposalNamespaceDaoQueries {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDaoQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDaoQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getProposalNamespaces(param0: number, param1: any): com.squareup.sqldelight.Query;
                  getProposalNamespaces(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaces>;
                  insertOrAbortProposalNamespace(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;
                  deleteProposalNamespacesByTopic(param0: string): void;
                });
                public constructor();

                public insertOrAbortProposalNamespace(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;

                public getProposalNamespaces(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaces>;
                public getProposalNamespaces(param0: number, param1: any): com.squareup.sqldelight.Query;

                public deleteProposalNamespacesByTopic(param0: string): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module proposalnamespace {
              export class ProposalNamespaceExtensionDaoQueries {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionDaoQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionDaoQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getProposalNamespaceExtensionByKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;
                  getProposalNamespaceExtensionByKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaceExtensionByKeyAndSessionId>;
                  insertOrAbortProposalNamespaceExtension(param0: string, param1: number, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;
                  deleteProposalNamespacesExtensionsByTopic(param0: string): void;
                });
                public constructor();

                public getProposalNamespaceExtensionByKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;
                public getProposalNamespaceExtensionByKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.proposalnamespace.GetProposalNamespaceExtensionByKeyAndSessionId>;

                public insertOrAbortProposalNamespaceExtension(param0: string, param1: number, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): void;

                public deleteProposalNamespacesExtensionsByTopic(param0: string): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module proposalnamespace {
              export class ProposalNamespaceExtensionsDao {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionsDao>;
                public id: number;
                public namespace_key: string;
                public session_id: number;
                public chains: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public getSession_id(): number;

                public copy(param0: number, param1: string, param2: number, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>): com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionsDao;

                public toString(): string;

                public getNamespace_key(): string;

                public component5(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): number;

                public component2(): string;

                public getId(): number;

                public getEvents(): java.util.List<string>;

                public component1(): number;

                public constructor(param0: number, param1: string, param2: number, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>);

                public component4(): java.util.List<string>;

                public component6(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public hashCode(): number;

                public getChains(): java.util.List<string>;
              }

              export module ProposalNamespaceExtensionsDao {
                export class Adapter {
                  public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionsDao.Adapter>;
                  public chainsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public methodsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public eventsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public constructor(param0: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param1: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param2: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>);

                  public getMethodsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getChainsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getEventsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module session {
              export class GetListOfSessionDaos {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.session.GetListOfSessionDaos>;
                public id: number;
                public topic: string;
                public expiry: number;
                public relay_protocol: string;
                public relay_data: string;
                public controller_key: string;
                public self_participant: string;
                public peer_participant: string;

                public component7(): string;

                public toString(): string;

                public getRelay_data(): string;

                public equals(param0: any): boolean;

                public is_acknowledged(): boolean;

                public component4(): string;

                public getTopic(): string;

                public component3(): number;

                public getExpiry(): number;

                public component2(): string;

                public getSelf_participant(): string;

                public getId(): number;

                public component6(): string;

                public component1(): number;

                public getController_key(): string;

                public component8(): string;

                public getPeer_participant(): string;

                public component5(): string;

                public component9(): boolean;

                public hashCode(): number;

                public getRelay_protocol(): string;

                public copy(param0: number, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: boolean): com.walletconnect.sign.storage.data.dao.session.GetListOfSessionDaos;

                public constructor(param0: number, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: boolean);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module session {
              export class GetSessionByTopic {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.session.GetSessionByTopic>;
                public id: number;
                public topic: string;
                public expiry: number;
                public relay_protocol: string;
                public relay_data: string;
                public controller_key: string;
                public self_participant: string;
                public peer_participant: string;

                public component7(): string;

                public toString(): string;

                public copy(param0: number, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: boolean): com.walletconnect.sign.storage.data.dao.session.GetSessionByTopic;

                public getRelay_data(): string;

                public equals(param0: any): boolean;

                public is_acknowledged(): boolean;

                public component4(): string;

                public getTopic(): string;

                public component3(): number;

                public getExpiry(): number;

                public component2(): string;

                public getSelf_participant(): string;

                public getId(): number;

                public component6(): string;

                public component1(): number;

                public getController_key(): string;

                public component8(): string;

                public getPeer_participant(): string;

                public component5(): string;

                public component9(): boolean;

                public hashCode(): number;

                public getRelay_protocol(): string;

                public constructor(param0: number, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: boolean);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module session {
              export class SessionDao {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.session.SessionDao>;
                public id: number;
                public topic: string;
                public pairingTopic: string;
                public expiry: number;
                public relay_protocol: string;
                public relay_data: string;
                public controller_key: string;
                public self_participant: string;
                public peer_participant: string;

                public toString(): string;

                public getRelay_data(): string;

                public component9(): string;

                public equals(param0: any): boolean;

                public getExpiry(): number;

                public constructor(param0: number, param1: string, param2: string, param3: number, param4: string, param5: string, param6: string, param7: string, param8: string, param9: boolean);

                public component2(): string;

                public getSelf_participant(): string;

                public component1(): number;

                public getPairingTopic(): string;

                public component8(): string;

                public component5(): string;

                public copy(param0: number, param1: string, param2: string, param3: number, param4: string, param5: string, param6: string, param7: string, param8: string, param9: boolean): com.walletconnect.sign.storage.data.dao.session.SessionDao;

                public component7(): string;

                public is_acknowledged(): boolean;

                public getTopic(): string;

                public component10(): boolean;

                public getId(): number;

                public component6(): string;

                public component4(): number;

                public getController_key(): string;

                public getPeer_participant(): string;

                public component3(): string;

                public hashCode(): number;

                public getRelay_protocol(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module session {
              export class SessionDaoQueries {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.session.SessionDaoQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.sign.storage.data.dao.session.SessionDaoQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  lastInsertedRow(): com.squareup.sqldelight.Query<java.lang.Long>;
                  getListOfSessionDaos(param0: any): com.squareup.sqldelight.Query;
                  getListOfSessionDaos(): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.session.GetListOfSessionDaos>;
                  getSessionByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;
                  getSessionByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.session.GetSessionByTopic>;
                  getSessionIdByTopic(param0: string): com.squareup.sqldelight.Query<java.lang.Long>;
                  getAllSessionTopicsByPairingTopic(param0: string): com.squareup.sqldelight.Query<string>;
                  hasTopic(param0: string): com.squareup.sqldelight.Query<string>;
                  getExpiry(param0: string): com.squareup.sqldelight.Query<java.lang.Long>;
                  insertOrAbortSession(param0: string, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: boolean): void;
                  acknowledgeSession(param0: boolean, param1: string): void;
                  updateSessionExpiry(param0: number, param1: string): void;
                  deleteSession(param0: string): void;
                });
                public constructor();

                public updateSessionExpiry(param0: number, param1: string): void;

                public getExpiry(param0: string): com.squareup.sqldelight.Query<java.lang.Long>;

                public hasTopic(param0: string): com.squareup.sqldelight.Query<string>;

                public getSessionByTopic(param0: string): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.session.GetSessionByTopic>;

                public getAllSessionTopicsByPairingTopic(param0: string): com.squareup.sqldelight.Query<string>;

                public getListOfSessionDaos(param0: any): com.squareup.sqldelight.Query;

                public getSessionIdByTopic(param0: string): com.squareup.sqldelight.Query<java.lang.Long>;

                public acknowledgeSession(param0: boolean, param1: string): void;

                public getListOfSessionDaos(): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.session.GetListOfSessionDaos>;

                public getSessionByTopic(param0: string, param1: any): com.squareup.sqldelight.Query;

                public deleteSession(param0: string): void;

                public insertOrAbortSession(param0: string, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: boolean): void;

                public lastInsertedRow(): com.squareup.sqldelight.Query<java.lang.Long>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module temp {
              export class GetNamespaceExtensionByNamespaceKeyAndSessionId {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.temp.GetNamespaceExtensionByNamespaceKeyAndSessionId>;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public toString(): string;

                public getEvents(): java.util.List<string>;

                public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                public component1(): java.util.List<string>;

                public component2(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.storage.data.dao.temp.GetNamespaceExtensionByNamespaceKeyAndSessionId;

                public getAccounts(): java.util.List<string>;

                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module temp {
              export class GetTempNamespacesByRequestId {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.temp.GetTempNamespacesByRequestId>;
                public session_id: number;
                public key: string;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public getSession_id(): number;

                public toString(): string;

                public component5(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component3(): java.util.List<string>;

                public getAccounts(): java.util.List<string>;

                public getKey(): string;

                public component2(): string;

                public getEvents(): java.util.List<string>;

                public component1(): number;

                public component4(): java.util.List<string>;

                public copy(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): com.walletconnect.sign.storage.data.dao.temp.GetTempNamespacesByRequestId;

                public getMethods(): java.util.List<string>;

                public hashCode(): number;

                public constructor(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module temp {
              export class TempNamespaceDao {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDao>;
                public request_id: number;
                public session_id: number;
                public topic: string;
                public key: string;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;

                public getSession_id(): number;

                public component7(): java.util.List<string>;

                public toString(): string;

                public getRequest_id(): number;

                public component5(): java.util.List<string>;

                public isAcknowledged(): java.lang.Long;

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public getAccounts(): java.util.List<string>;

                public getKey(): string;

                public constructor(param0: number, param1: number, param2: string, param3: string, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.util.List<string>, param7: java.lang.Long);

                public getEvents(): java.util.List<string>;

                public component1(): number;

                public copy(param0: number, param1: number, param2: string, param3: string, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.util.List<string>, param7: java.lang.Long): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDao;

                public component6(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public component2(): number;

                public component8(): java.lang.Long;

                public component3(): string;

                public hashCode(): number;
              }

              export module TempNamespaceDao {
                export class Adapter {
                  public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDao.Adapter>;
                  public accountsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public methodsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public eventsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getAccountsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public constructor(param0: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param1: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param2: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>);

                  public getMethodsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getEventsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module temp {
              export class TempNamespaceDaoQueries {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDaoQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDaoQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getTempNamespacesByRequestId(param0: number, param1: any): com.squareup.sqldelight.Query;
                  getTempNamespacesByRequestId(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.temp.GetTempNamespacesByRequestId>;
                  isUpdateNamespaceRequestValid(param0: string, param1: number): com.squareup.sqldelight.Query<java.lang.Boolean>;
                  insertOrAbortNamespace(param0: number, param1: string, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.lang.Long): void;
                  markNamespaceAcknowledged(param0: number): void;
                  deleteTempNamespacesByRequestId(param0: number): void;
                  deleteTempNamespacesByTopic(param0: string): void;
                });
                public constructor();

                public markNamespaceAcknowledged(param0: number): void;

                public isUpdateNamespaceRequestValid(param0: string, param1: number): com.squareup.sqldelight.Query<java.lang.Boolean>;

                public deleteTempNamespacesByTopic(param0: string): void;

                public getTempNamespacesByRequestId(param0: number, param1: any): com.squareup.sqldelight.Query;
                public getTempNamespacesByRequestId(param0: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.temp.GetTempNamespacesByRequestId>;

                public deleteTempNamespacesByRequestId(param0: number): void;

                public insertOrAbortNamespace(param0: number, param1: string, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.lang.Long): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module temp {
              export class TempNamespaceExtensionDaoQueries {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionDaoQueries>;

                /**
                 * Constructs a new instance of the com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionDaoQueries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;
                  getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.temp.GetNamespaceExtensionByNamespaceKeyAndSessionId>;
                  insertOrAbortNamespaceExtension(param0: string, param1: number, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>, param6: number): void;
                  deleteTempNamespacesExtensionByTopic(param0: string): void;
                });
                public constructor();

                public getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number, param2: any): com.squareup.sqldelight.Query;
                public getNamespaceExtensionByNamespaceKeyAndSessionId(param0: string, param1: number): com.squareup.sqldelight.Query<com.walletconnect.sign.storage.data.dao.temp.GetNamespaceExtensionByNamespaceKeyAndSessionId>;

                public insertOrAbortNamespaceExtension(param0: string, param1: number, param2: string, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<string>, param6: number): void;

                public deleteTempNamespacesExtensionByTopic(param0: string): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module data {
          export module dao {
            export module temp {
              export class TempNamespaceExtensionsDao {
                public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionsDao>;
                public id: number;
                public namespace_key: string;
                public session_id: number;
                public topic: string;
                public accounts: java.util.List<string>;
                public methods: java.util.List<string>;
                public events: java.util.List<string>;
                public request_id: number;

                public constructor(param0: number, param1: string, param2: number, param3: string, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.util.List<string>, param7: number);

                public getSession_id(): number;

                public component7(): java.util.List<string>;

                public toString(): string;

                public getRequest_id(): number;

                public getNamespace_key(): string;

                public component5(): java.util.List<string>;

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public component3(): number;

                public component8(): number;

                public getAccounts(): java.util.List<string>;

                public component2(): string;

                public getId(): number;

                public getEvents(): java.util.List<string>;

                public copy(param0: number, param1: string, param2: number, param3: string, param4: java.util.List<string>, param5: java.util.List<string>, param6: java.util.List<string>, param7: number): com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionsDao;

                public component1(): number;

                public component6(): java.util.List<string>;

                public getMethods(): java.util.List<string>;

                public hashCode(): number;
              }

              export module TempNamespaceExtensionsDao {
                export class Adapter {
                  public static class: java.lang.Class<com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionsDao.Adapter>;
                  public accountsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public methodsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                  public eventsAdapter: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getAccountsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public constructor(param0: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param1: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>, param2: com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>);

                  public getMethodsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;

                  public getEventsAdapter(): com.squareup.sqldelight.ColumnAdapter<java.util.List<string>, string>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module sign {
      export module storage {
        export module sequence {
          export class SessionStorageRepository {
            public static class: java.lang.Class<com.walletconnect.sign.storage.sequence.SessionStorageRepository>;
            public sessionDaoQueries: com.walletconnect.sign.storage.data.dao.session.SessionDaoQueries;
            public namespaceDaoQueries: com.walletconnect.sign.storage.data.dao.namespace.NamespaceDaoQueries;
            public extensionsDaoQueries: com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionDaoQueries;
            public proposalNamespaceDaoQueries: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDaoQueries;
            public proposalExtensionsDaoQueries: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionDaoQueries;
            public tempNamespaceDaoQueries: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDaoQueries;
            public tempExtensionsDaoQueries: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionDaoQueries;

            public mapTempNamespaceToNamespaceVO(param0: number, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: java.util.List<string>): java.util.Pair<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;

            public constructor(param0: com.walletconnect.sign.storage.data.dao.session.SessionDaoQueries, param1: com.walletconnect.sign.storage.data.dao.namespace.NamespaceDaoQueries, param2: com.walletconnect.sign.storage.data.dao.namespace.NamespaceExtensionDaoQueries, param3: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceDaoQueries, param4: com.walletconnect.sign.storage.data.dao.proposalnamespace.ProposalNamespaceExtensionDaoQueries, param5: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceDaoQueries, param6: com.walletconnect.sign.storage.data.dao.temp.TempNamespaceExtensionDaoQueries);

            public static insertNamespace$lambda$4(param0: any, param1: any, param2: any): void;

            public insertProposalNamespace(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>, param1: number): void;

            public getSessionNamespaces(param0: number): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>;

            public insertNamespace(param0: java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session>, param1: number, param2: number): void;

            public getOnSessionExpired(): kotlin.jvm.functions.Function1<com.walletconnect.foundation.common.model.Topic>;

            public mapTempNamespaceExtensionToNamespaceExtensionVO(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Session.Extension;

            public static insertProposalNamespace$lambda$5(param0: any, param1: any, param2: any): void;

            public getProposalNamespaces(param0: number): java.util.Map<string, com.walletconnect.sign.common.model.vo.clientsync.common.NamespaceVO.Proposal>;

            public mapSessionDaoToSessionVO(param0: number, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: boolean): com.walletconnect.sign.common.model.vo.sequence.SessionVO;

            public setOnSessionExpired(param0: kotlin.jvm.functions.Function1<any>): void;

            public verifyExpiry(param0: number, param1: com.walletconnect.foundation.common.model.Topic, param2: any): boolean;
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module web3 {
      export module wallet {
        export class BuildConfig {
          public static class: java.lang.Class<com.walletconnect.web3.wallet.BuildConfig>;
          public static DEBUG: boolean;
          public static LIBRARY_PACKAGE_NAME: string;
          public static BUILD_TYPE: string;
          public static SDK_VERSION: string;

          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module web3 {
      export module wallet {
        export module client {
          export class Wallet {
            public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet>;
            public static INSTANCE: com.walletconnect.web3.wallet.client.Wallet;

            public constructor();

            public static<clinit>(): void;
          }

          export module Wallet {
            export abstract class Model {
              public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model>;

              public constructor();
            }

            export module Model {
              export class AuthRequest extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.AuthRequest>;
                public id: number;
                public payloadParams: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public getId(): number;

                public toString(): string;

                public component1(): number;

                public constructor(param0: number, param1: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams);

                public copy(param0: number, param1: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams): com.walletconnect.web3.wallet.client.Wallet.Model.AuthRequest;

                public getPayloadParams(): com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public equals(param0: any): boolean;

                public component2(): com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public constructor();

                public hashCode(): number;
              }

              export class Cacao extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Cacao>;
                public header: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Header;
                public payload: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Payload;
                public signature: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;

                public getSignature(): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;

                public copy(param0: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Header, param1: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Payload, param2: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao;

                public toString(): string;

                public component2(): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Payload;

                public equals(param0: any): boolean;

                public component3(): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;

                public constructor();

                public getPayload(): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Payload;

                public hashCode(): number;

                public constructor(param0: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Header, param1: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Payload, param2: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature);

                public getHeader(): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Header;

                public component1(): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Header;
              }

              export module Cacao {
                export class Header extends com.walletconnect.web3.wallet.client.Wallet.Model {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Header>;
                  public t: string;

                  public constructor();
                  public constructor(param0: string);

                  public hashCode(): number;

                  public getT(): string;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public copy(param0: string): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Header;

                  public component1(): string;
                }

                export class Payload extends com.walletconnect.web3.wallet.client.Wallet.Model {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Payload>;
                  public static ISS_DELIMITER: string;
                  public static ISS_POSITION_OF_ADDRESS: number;
                  public iss: string;
                  public domain: string;
                  public aud: string;
                  public version: string;
                  public nonce: string;
                  public iat: string;
                  public nbf: string;
                  public exp: string;
                  public statement: string;
                  public requestId: string;
                  public resources: java.util.List<string>;

                  public getAud(): string;

                  public getRequestId(): string;

                  public component7(): string;

                  public getIss(): string;

                  public getIat(): string;

                  public component3(): string;

                  public component1(): string;

                  public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.util.List<string>);

                  public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: java.util.List<string>): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Payload;

                  public component6(): string;

                  public component10(): string;

                  public getNonce(): string;

                  public getNbf(): string;

                  public static<clinit>(): void;

                  public getDomain(): string;

                  public component2(): string;

                  public constructor();

                  public component11(): java.util.List<string>;

                  public hashCode(): number;

                  public getExp(): string;

                  public component9(): string;

                  public equals(param0: any): boolean;

                  public component5(): string;

                  public toString(): string;

                  public getResources(): java.util.List<string>;

                  public component8(): string;

                  public getAddress(): string;

                  public getStatement(): string;

                  public component4(): string;

                  public getVersion(): string;
                }

                export module Payload {
                  export class Companion {
                    public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Payload.Companion>;

                    public constructor();
                  }
                }

                export class Signature extends com.walletconnect.web3.wallet.client.Wallet.Model {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature>;
                  public t: string;
                  public s: string;
                  public m: string;

                  public component2(): string;

                  public constructor();

                  public hashCode(): number;

                  public getT(): string;

                  public getM(): string;

                  public equals(param0: any): boolean;

                  public copy(param0: string, param1: string, param2: string): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;

                  public toString(): string;

                  public constructor(param0: string, param1: string, param2: string);

                  public getS(): string;

                  public component3(): string;

                  public component1(): string;
                }
              }

              export class ConnectionState extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.ConnectionState>;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor();

                public isAvailable(): boolean;

                public copy(param0: boolean): com.walletconnect.web3.wallet.client.Wallet.Model.ConnectionState;

                public component1(): boolean;

                public hashCode(): number;

                public constructor(param0: boolean);
              }

              export class Error extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Error>;
                public throwable: java.lang.Throwable;

                public copy(param0: java.lang.Throwable): com.walletconnect.web3.wallet.client.Wallet.Model.Error;

                public toString(): string;

                public constructor(param0: java.lang.Throwable);

                public equals(param0: any): boolean;

                public constructor();

                public component1(): java.lang.Throwable;

                public hashCode(): number;

                public getThrowable(): java.lang.Throwable;
              }

              export abstract class JsonRpcResponse extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse>;
                public jsonrpc: string;

                public getId(): number;

                public constructor();

                public getJsonrpc(): string;
              }

              export module JsonRpcResponse {
                export class JsonRpcError extends com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse.JsonRpcError>;
                  public id: number;
                  public code: number;
                  public message: string;

                  public constructor();

                  public hashCode(): number;

                  public component1(): number;

                  public component2(): number;

                  public equals(param0: any): boolean;

                  public getCode(): number;

                  public toString(): string;

                  public getId(): number;

                  public constructor(param0: number, param1: number, param2: string);

                  public getMessage(): string;

                  public copy(param0: number, param1: number, param2: string): com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse.JsonRpcError;

                  public component3(): string;
                }

                export class JsonRpcResult extends com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse.JsonRpcResult>;
                  public id: number;
                  public result: string;

                  public component2(): string;

                  public constructor();

                  public hashCode(): number;

                  public component1(): number;

                  public getResult(): string;

                  public copy(param0: number, param1: string): com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse.JsonRpcResult;

                  public equals(param0: any): boolean;

                  public constructor(param0: number, param1: string);

                  public toString(): string;

                  public getId(): number;
                }
              }

              export abstract class Namespace extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace>;

                public constructor();
              }

              export module Namespace {
                export class Proposal extends com.walletconnect.web3.wallet.client.Wallet.Model.Namespace {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal>;
                  public chains: java.util.List<string>;
                  public methods: java.util.List<string>;
                  public events: java.util.List<string>;
                  public extensions: java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal.Extension>;

                  public constructor();

                  public component3(): java.util.List<string>;

                  public hashCode(): number;

                  public getMethods(): java.util.List<string>;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal.Extension>);

                  public getChains(): java.util.List<string>;

                  public component2(): java.util.List<string>;

                  public getEvents(): java.util.List<string>;

                  public getExtensions(): java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal.Extension>;

                  public component4(): java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal.Extension>;

                  public component1(): java.util.List<string>;

                  public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal.Extension>): com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal;
                }

                export module Proposal {
                  export class Extension {
                    public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal.Extension>;
                    public chains: java.util.List<string>;
                    public methods: java.util.List<string>;
                    public events: java.util.List<string>;

                    public getEvents(): java.util.List<string>;

                    public component3(): java.util.List<string>;

                    public equals(param0: any): boolean;

                    public getMethods(): java.util.List<string>;

                    public hashCode(): number;

                    public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                    public toString(): string;

                    public getChains(): java.util.List<string>;

                    public component1(): java.util.List<string>;

                    public component2(): java.util.List<string>;

                    public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal.Extension;
                  }
                }

                export class Session extends com.walletconnect.web3.wallet.client.Wallet.Model.Namespace {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;
                  public accounts: java.util.List<string>;
                  public methods: java.util.List<string>;
                  public events: java.util.List<string>;
                  public extensions: java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session.Extension>;

                  public constructor();

                  public component3(): java.util.List<string>;

                  public hashCode(): number;

                  public getMethods(): java.util.List<string>;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session.Extension>);

                  public getExtensions(): java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session.Extension>;

                  public component2(): java.util.List<string>;

                  public component4(): java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session.Extension>;

                  public getAccounts(): java.util.List<string>;

                  public getEvents(): java.util.List<string>;

                  public component1(): java.util.List<string>;

                  public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>, param3: java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session.Extension>): com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session;
                }

                export module Session {
                  export class Extension {
                    public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session.Extension>;
                    public accounts: java.util.List<string>;
                    public methods: java.util.List<string>;
                    public events: java.util.List<string>;

                    public getEvents(): java.util.List<string>;

                    public component3(): java.util.List<string>;

                    public equals(param0: any): boolean;

                    public getMethods(): java.util.List<string>;

                    public copy(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>): com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session.Extension;

                    public hashCode(): number;

                    public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.List<string>);

                    public getAccounts(): java.util.List<string>;

                    public toString(): string;

                    public component1(): java.util.List<string>;

                    public component2(): java.util.List<string>;
                  }
                }
              }

              export class PayloadParams extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams>;
                public type: string;
                public chainId: string;
                public domain: string;
                public aud: string;
                public version: string;
                public nonce: string;
                public iat: string;
                public nbf: string;
                public exp: string;
                public statement: string;
                public requestId: string;
                public resources: java.util.List<string>;

                public toString(): string;

                public getRequestId(): string;

                public getStatement(): string;

                public component9(): string;

                public getChainId(): string;

                public equals(param0: any): boolean;

                public component11(): string;

                public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: java.util.List<string>);

                public getVersion(): string;

                public component2(): string;

                public component12(): java.util.List<string>;

                public component1(): string;

                public getAud(): string;

                public getExp(): string;

                public getResources(): java.util.List<string>;

                public component8(): string;

                public component10(): string;

                public component5(): string;

                public getNbf(): string;

                public component7(): string;

                public component4(): string;

                public getIat(): string;

                public constructor();

                public component6(): string;

                public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: java.util.List<string>): com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public getNonce(): string;

                public component3(): string;

                public hashCode(): number;

                public getType(): string;

                public getDomain(): string;
              }

              export class PendingAuthRequest extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.PendingAuthRequest>;
                public id: number;
                public payloadParams: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public getId(): number;

                public toString(): string;

                public component1(): number;

                public constructor(param0: number, param1: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams);

                public getPayloadParams(): com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public equals(param0: any): boolean;

                public component2(): com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public constructor();

                public copy(param0: number, param1: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams): com.walletconnect.web3.wallet.client.Wallet.Model.PendingAuthRequest;

                public hashCode(): number;
              }

              export class PendingSessionRequest extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.PendingSessionRequest>;
                public requestId: number;
                public topic: string;
                public method: string;
                public chainId: string;
                public params: string;

                public toString(): string;

                public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);

                public getChainId(): string;

                public getRequestId(): number;

                public equals(param0: any): boolean;

                public component4(): string;

                public getTopic(): string;

                public copy(param0: number, param1: string, param2: string, param3: string, param4: string): com.walletconnect.web3.wallet.client.Wallet.Model.PendingSessionRequest;

                public constructor();

                public component2(): string;

                public getMethod(): string;

                public component1(): number;

                public getParams(): string;

                public component5(): string;

                public component3(): string;

                public hashCode(): number;
              }

              export class Session extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.Session>;
                public topic: string;
                public expiry: number;
                public namespaces: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;
                public metaData: com.walletconnect.android.Core.Model.AppMetaData;
                public redirect: string;

                public toString(): string;

                public equals(param0: any): boolean;

                public getTopic(): string;

                public getMetaData(): com.walletconnect.android.Core.Model.AppMetaData;

                public constructor();

                public getExpiry(): number;

                public component1(): string;

                public constructor(param0: string, param1: number, param2: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>, param3: com.walletconnect.android.Core.Model.AppMetaData);

                public getNamespaces(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                public component3(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                public getRedirect(): string;

                public copy(param0: string, param1: number, param2: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>, param3: com.walletconnect.android.Core.Model.AppMetaData): com.walletconnect.web3.wallet.client.Wallet.Model.Session;

                public component2(): number;

                public hashCode(): number;

                public component4(): com.walletconnect.android.Core.Model.AppMetaData;
              }

              export abstract class SessionDelete extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete>;

                public constructor();
              }

              export module SessionDelete {
                export class Error extends com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete.Error>;
                  public error: java.lang.Throwable;

                  public constructor(param0: java.lang.Throwable);
                  public constructor();

                  public hashCode(): number;

                  public copy(param0: java.lang.Throwable): com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete.Error;

                  public equals(param0: any): boolean;

                  public getError(): java.lang.Throwable;

                  public toString(): string;

                  public component1(): java.lang.Throwable;
                }

                export class Success extends com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete.Success>;
                  public topic: string;
                  public reason: string;

                  public constructor(param0: string, param1: string);

                  public component2(): string;

                  public copy(param0: string, param1: string): com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete.Success;

                  public constructor();

                  public hashCode(): number;

                  public getTopic(): string;

                  public getReason(): string;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public component1(): string;
                }
              }

              export class SessionEvent extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionEvent>;
                public name: string;
                public data: string;

                public component1(): string;

                public toString(): string;

                public getData(): string;

                public constructor(param0: string, param1: string);

                public getName(): string;

                public equals(param0: any): boolean;

                public constructor();

                public component2(): string;

                public hashCode(): number;

                public copy(param0: string, param1: string): com.walletconnect.web3.wallet.client.Wallet.Model.SessionEvent;
              }

              export class SessionProposal extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionProposal>;
                public name: string;
                public description: string;
                public url: string;
                public icons: java.util.List<java.net.URI>;
                public requiredNamespaces: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal>;
                public proposerPublicKey: string;
                public relayProtocol: string;
                public relayData: string;

                public getRelayProtocol(): string;

                public component7(): string;

                public toString(): string;

                public getName(): string;

                public equals(param0: any): boolean;

                public getUrl(): string;

                public getRequiredNamespaces(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal>;

                public constructor(param0: string, param1: string, param2: string, param3: java.util.List<java.net.URI>, param4: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal>, param5: string, param6: string, param7: string);
                public constructor();

                public copy(param0: string, param1: string, param2: string, param3: java.util.List<java.net.URI>, param4: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal>, param5: string, param6: string, param7: string): com.walletconnect.web3.wallet.client.Wallet.Model.SessionProposal;

                public component2(): string;

                public component5(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Proposal>;

                public component1(): string;

                public getIcons(): java.util.List<java.net.URI>;

                public getProposerPublicKey(): string;

                public component6(): string;

                public component8(): string;

                public getDescription(): string;

                public getRelayData(): string;

                public component3(): string;

                public hashCode(): number;

                public component4(): java.util.List<java.net.URI>;
              }

              export class SessionRequest extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest>;
                public topic: string;
                public chainId: string;
                public peerMetaData: com.walletconnect.android.Core.Model.AppMetaData;
                public request: com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest.JSONRPCRequest;

                public component3(): com.walletconnect.android.Core.Model.AppMetaData;

                public toString(): string;

                public getChainId(): string;

                public getPeerMetaData(): com.walletconnect.android.Core.Model.AppMetaData;

                public equals(param0: any): boolean;

                public copy(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest.JSONRPCRequest): com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest;

                public getTopic(): string;

                public getRequest(): com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest.JSONRPCRequest;

                public constructor();
                public constructor(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest.JSONRPCRequest);

                public component2(): string;

                public component4(): com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest.JSONRPCRequest;

                public component1(): string;

                public hashCode(): number;
              }

              export module SessionRequest {
                export class JSONRPCRequest extends com.walletconnect.web3.wallet.client.Wallet.Model {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest.JSONRPCRequest>;
                  public id: number;
                  public method: string;
                  public params: string;

                  public component2(): string;

                  public constructor();

                  public hashCode(): number;

                  public component1(): number;

                  public constructor(param0: number, param1: string, param2: string);

                  public getParams(): string;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public getId(): number;

                  public getMethod(): string;

                  public copy(param0: number, param1: string, param2: string): com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest.JSONRPCRequest;

                  public component3(): string;
                }
              }

              export abstract class SessionUpdateResponse extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse>;

                public constructor();
              }

              export module SessionUpdateResponse {
                export class Error extends com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse.Error>;
                  public errorMessage: string;

                  public constructor();
                  public constructor(param0: string);

                  public hashCode(): number;

                  public copy(param0: string): com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse.Error;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public component1(): string;

                  public getErrorMessage(): string;
                }

                export class Result extends com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse.Result>;
                  public topic: string;
                  public namespaces: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                  public constructor();

                  public hashCode(): number;

                  public getNamespaces(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                  public getTopic(): string;

                  public component2(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public copy(param0: string, param1: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>): com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse.Result;

                  public constructor(param0: string, param1: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>);

                  public component1(): string;
                }
              }

              export abstract class SettledSessionResponse extends com.walletconnect.web3.wallet.client.Wallet.Model {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse>;

                public constructor();
              }

              export module SettledSessionResponse {
                export class Error extends com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse.Error>;
                  public errorMessage: string;

                  public constructor();
                  public constructor(param0: string);

                  public hashCode(): number;

                  public copy(param0: string): com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse.Error;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public component1(): string;

                  public getErrorMessage(): string;
                }

                export class Result extends com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse.Result>;
                  public session: com.walletconnect.web3.wallet.client.Wallet.Model.Session;

                  public constructor();

                  public hashCode(): number;

                  public copy(param0: com.walletconnect.web3.wallet.client.Wallet.Model.Session): com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse.Result;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public getSession(): com.walletconnect.web3.wallet.client.Wallet.Model.Session;

                  public constructor(param0: com.walletconnect.web3.wallet.client.Wallet.Model.Session);

                  public component1(): com.walletconnect.web3.wallet.client.Wallet.Model.Session;
                }
              }
            }

            export abstract class Params {
              public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params>;

              public constructor();
            }

            export module Params {
              export abstract class AuthRequestResponse extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.AuthRequestResponse>;

                public getId(): number;

                public constructor();
              }

              export module AuthRequestResponse {
                export class Error extends com.walletconnect.web3.wallet.client.Wallet.Params.AuthRequestResponse {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.AuthRequestResponse.Error>;
                  public id: number;
                  public code: number;
                  public message: string;

                  public constructor();

                  public hashCode(): number;

                  public component1(): number;

                  public copy(param0: number, param1: number, param2: string): com.walletconnect.web3.wallet.client.Wallet.Params.AuthRequestResponse.Error;

                  public component2(): number;

                  public equals(param0: any): boolean;

                  public getCode(): number;

                  public toString(): string;

                  public getId(): number;

                  public constructor(param0: number, param1: number, param2: string);

                  public getMessage(): string;

                  public component3(): string;
                }

                export class Result extends com.walletconnect.web3.wallet.client.Wallet.Params.AuthRequestResponse {
                  public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.AuthRequestResponse.Result>;
                  public id: number;
                  public signature: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;
                  public issuer: string;

                  public constructor();

                  public getIssuer(): string;

                  public hashCode(): number;

                  public getSignature(): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;

                  public component1(): number;

                  public equals(param0: any): boolean;

                  public toString(): string;

                  public getId(): number;

                  public copy(param0: number, param1: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature, param2: string): com.walletconnect.web3.wallet.client.Wallet.Params.AuthRequestResponse.Result;

                  public constructor(param0: number, param1: com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature, param2: string);

                  public component2(): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;

                  public component3(): string;
                }
              }

              export class FormatMessage extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.FormatMessage>;
                public payloadParams: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;
                public issuer: string;

                public getIssuer(): string;

                public toString(): string;

                public copy(param0: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams, param1: string): com.walletconnect.web3.wallet.client.Wallet.Params.FormatMessage;

                public constructor(param0: com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams, param1: string);

                public getPayloadParams(): com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public equals(param0: any): boolean;

                public component1(): com.walletconnect.web3.wallet.client.Wallet.Model.PayloadParams;

                public constructor();

                public component2(): string;

                public hashCode(): number;
              }

              export class Init extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.Init>;
                public core: com.walletconnect.android.CoreClient;

                public constructor(param0: com.walletconnect.android.CoreClient);

                public toString(): string;

                public copy(param0: com.walletconnect.android.CoreClient): com.walletconnect.web3.wallet.client.Wallet.Params.Init;

                public equals(param0: any): boolean;

                public constructor();

                public getCore(): com.walletconnect.android.CoreClient;

                public hashCode(): number;

                public component1(): com.walletconnect.android.CoreClient;
              }

              export class Pair extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.Pair>;
                public uri: string;

                public getUri(): string;

                public component1(): string;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;

                public copy(param0: string): com.walletconnect.web3.wallet.client.Wallet.Params.Pair;
              }

              export class SessionApprove extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.SessionApprove>;
                public proposerPublicKey: string;
                public namespaces: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;
                public relayProtocol: string;

                public getRelayProtocol(): string;

                public component1(): string;

                public component2(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                public toString(): string;

                public getProposerPublicKey(): string;

                public getNamespaces(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                public copy(param0: string, param1: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>, param2: string): com.walletconnect.web3.wallet.client.Wallet.Params.SessionApprove;

                public constructor(param0: string, param1: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>, param2: string);

                public equals(param0: any): boolean;

                public constructor();

                public component3(): string;

                public hashCode(): number;
              }

              export class SessionDisconnect extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.SessionDisconnect>;
                public sessionTopic: string;

                public component1(): string;

                public copy(param0: string): com.walletconnect.web3.wallet.client.Wallet.Params.SessionDisconnect;

                public toString(): string;

                public equals(param0: any): boolean;

                public constructor();
                public constructor(param0: string);

                public getSessionTopic(): string;

                public hashCode(): number;
              }

              export class SessionEmit extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.SessionEmit>;
                public topic: string;
                public event: com.walletconnect.web3.wallet.client.Wallet.Model.SessionEvent;
                public chainId: string;

                public component1(): string;

                public copy(param0: string, param1: com.walletconnect.web3.wallet.client.Wallet.Model.SessionEvent, param2: string): com.walletconnect.web3.wallet.client.Wallet.Params.SessionEmit;

                public toString(): string;

                public getChainId(): string;

                public component2(): com.walletconnect.web3.wallet.client.Wallet.Model.SessionEvent;

                public constructor(param0: string, param1: com.walletconnect.web3.wallet.client.Wallet.Model.SessionEvent, param2: string);

                public equals(param0: any): boolean;

                public getEvent(): com.walletconnect.web3.wallet.client.Wallet.Model.SessionEvent;

                public getTopic(): string;

                public constructor();

                public component3(): string;

                public hashCode(): number;
              }

              export class SessionExtend extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.SessionExtend>;
                public topic: string;

                public component1(): string;

                public toString(): string;

                public copy(param0: string): com.walletconnect.web3.wallet.client.Wallet.Params.SessionExtend;

                public equals(param0: any): boolean;

                public getTopic(): string;

                public constructor();
                public constructor(param0: string);

                public hashCode(): number;
              }

              export class SessionReject extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.SessionReject>;
                public proposerPublicKey: string;
                public reason: string;

                public component1(): string;

                public toString(): string;

                public getProposerPublicKey(): string;

                public constructor(param0: string, param1: string);

                public getReason(): string;

                public equals(param0: any): boolean;

                public constructor();

                public component2(): string;

                public copy(param0: string, param1: string): com.walletconnect.web3.wallet.client.Wallet.Params.SessionReject;

                public hashCode(): number;
              }

              export class SessionRequestResponse extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.SessionRequestResponse>;
                public sessionTopic: string;
                public jsonRpcResponse: com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse;

                public component1(): string;

                public copy(param0: string, param1: com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse): com.walletconnect.web3.wallet.client.Wallet.Params.SessionRequestResponse;

                public toString(): string;

                public getJsonRpcResponse(): com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse;

                public constructor(param0: string, param1: com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse);

                public equals(param0: any): boolean;

                public component2(): com.walletconnect.web3.wallet.client.Wallet.Model.JsonRpcResponse;

                public constructor();

                public getSessionTopic(): string;

                public hashCode(): number;
              }

              export class SessionUpdate extends com.walletconnect.web3.wallet.client.Wallet.Params {
                public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Wallet.Params.SessionUpdate>;
                public sessionTopic: string;
                public namespaces: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                public component1(): string;

                public component2(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                public toString(): string;

                public getNamespaces(): java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>;

                public copy(param0: string, param1: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>): com.walletconnect.web3.wallet.client.Wallet.Params.SessionUpdate;

                public equals(param0: any): boolean;

                public constructor();

                public getSessionTopic(): string;

                public hashCode(): number;

                public constructor(param0: string, param1: java.util.Map<string, com.walletconnect.web3.wallet.client.Wallet.Model.Namespace.Session>);
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module web3 {
      export module wallet {
        export module client {
          export class Web3Wallet {
            public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Web3Wallet>;
            public static INSTANCE: com.walletconnect.web3.wallet.client.Web3Wallet;
            public static coreClient: com.walletconnect.android.CoreClient;

            public emitSessionEvent(param0: com.walletconnect.web3.wallet.client.Wallet.Params.SessionEmit, param1: kotlin.jvm.functions.Function1<any>): void;

            public constructor();

            public getActiveSessionByTopic(param0: string): com.walletconnect.web3.wallet.client.Wallet.Model.Session;

            public setWalletDelegate(param0: com.walletconnect.web3.wallet.client.Web3Wallet.WalletDelegate): void;

            public static<clinit>(): void;

            public getCoreClient(): com.walletconnect.android.CoreClient;

            public setCoreClient(param0: com.walletconnect.android.CoreClient): void;

            public extendSession(param0: com.walletconnect.web3.wallet.client.Wallet.Params.SessionExtend, param1: kotlin.jvm.functions.Function1<any>): void;

            public getPendingSessionRequests(param0: string): java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.PendingSessionRequest>;

            public pair(param0: com.walletconnect.web3.wallet.client.Wallet.Params.Pair, param1: kotlin.jvm.functions.Function1<any>): void;

            public initialize(param0: com.walletconnect.web3.wallet.client.Wallet.Params.Init, param1: kotlin.jvm.functions.Function1<any>): void;

            public formatMessage(param0: com.walletconnect.web3.wallet.client.Wallet.Params.FormatMessage): string;

            public rejectSession(param0: com.walletconnect.web3.wallet.client.Wallet.Params.SessionReject, param1: kotlin.jvm.functions.Function1<any>): void;

            public getListOfActiveSessions(): java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.Session>;

            public updateSession(param0: com.walletconnect.web3.wallet.client.Wallet.Params.SessionUpdate, param1: kotlin.jvm.functions.Function1<any>): void;

            public disconnectSession(param0: com.walletconnect.web3.wallet.client.Wallet.Params.SessionDisconnect, param1: kotlin.jvm.functions.Function1<any>): void;

            public approveSession(param0: com.walletconnect.web3.wallet.client.Wallet.Params.SessionApprove, param1: kotlin.jvm.functions.Function1<any>): void;

            public getPendingAuthRequests(): java.util.List<com.walletconnect.web3.wallet.client.Wallet.Model.PendingAuthRequest>;

            public respondSessionRequest(param0: com.walletconnect.web3.wallet.client.Wallet.Params.SessionRequestResponse, param1: kotlin.jvm.functions.Function1<any>): void;

            public respondAuthRequest(param0: com.walletconnect.web3.wallet.client.Wallet.Params.AuthRequestResponse, param1: kotlin.jvm.functions.Function1<any>): void;
          }

          export module Web3Wallet {
            export class WalletDelegate {
              public static class: java.lang.Class<com.walletconnect.web3.wallet.client.Web3Wallet.WalletDelegate>;

              /**
               * Constructs a new instance of the com.walletconnect.web3.wallet.client.Web3Wallet$WalletDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onSessionProposal(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SessionProposal): void;
                onSessionRequest(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest): void;
                onSessionDelete(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete): void;
                onAuthRequest(param0: com.walletconnect.web3.wallet.client.Wallet.Model.AuthRequest): void;
                onSessionSettleResponse(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse): void;
                onSessionUpdateResponse(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse): void;
                onConnectionStateChange(param0: com.walletconnect.web3.wallet.client.Wallet.Model.ConnectionState): void;
                onError(param0: com.walletconnect.web3.wallet.client.Wallet.Model.Error): void;
              });
              public constructor();

              public onSessionProposal(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SessionProposal): void;

              public onSessionDelete(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SessionDelete): void;

              public onSessionUpdateResponse(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SessionUpdateResponse): void;

              public onAuthRequest(param0: com.walletconnect.web3.wallet.client.Wallet.Model.AuthRequest): void;

              public onConnectionStateChange(param0: com.walletconnect.web3.wallet.client.Wallet.Model.ConnectionState): void;

              public onSessionRequest(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SessionRequest): void;

              public onSessionSettleResponse(param0: com.walletconnect.web3.wallet.client.Wallet.Model.SettledSessionResponse): void;

              public onError(param0: com.walletconnect.web3.wallet.client.Wallet.Model.Error): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module web3 {
      export module wallet {
        export module utils {
          export class CacaoSigner {
            public static class: java.lang.Class<com.walletconnect.web3.wallet.utils.CacaoSigner>;
            public static INSTANCE: com.walletconnect.web3.wallet.utils.CacaoSigner;

            public constructor();

            public sign(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: com.walletconnect.web3.wallet.utils.SignatureType): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;

            public static<clinit>(): void;

            public sign(param0: string, param1: androidNative.Array<number>, param2: com.walletconnect.web3.wallet.utils.SignatureType): com.walletconnect.web3.wallet.client.Wallet.Model.Cacao.Signature;
          }

          export module CacaoSigner {
            export class WhenMappings {
              public static class: java.lang.Class<com.walletconnect.web3.wallet.utils.CacaoSigner.WhenMappings>;

              public static<clinit>(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module walletconnect {
    export module web3 {
      export module wallet {
        export module utils {
          export class SignatureType {
            public static class: java.lang.Class<com.walletconnect.web3.wallet.utils.SignatureType>;
            public static EIP191: com.walletconnect.web3.wallet.utils.SignatureType;
            public static EIP1271: com.walletconnect.web3.wallet.utils.SignatureType;
            public header: string;

            public static values(): androidNative.Array<com.walletconnect.web3.wallet.utils.SignatureType>;

            public getHeader(): string;

            public static valueOf(param0: string): com.walletconnect.web3.wallet.utils.SignatureType;

            public static<clinit>(): void;

            public constructor(param0: string);
          }
        }
      }
    }
  }
}

//Generics information:
//com.walletconnect.android.internal.common.model.type.JsonRpcClientSync:1
//com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl.DoesJsonRpcNotExistQuery:1
//com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl.GetJsonRpcHistoryRecordQuery:1
//com.walletconnect.android.sdk.core.sdk.JsonRpcHistoryQueriesImpl.GetJsonRpcRecordsByTopicQuery:1
//com.walletconnect.android.sdk.core.sdk.MetaDataQueriesImpl.GetIdByTopicAndTypeQuery:1
//com.walletconnect.android.sdk.core.sdk.MetaDataQueriesImpl.GetMetadataByTopicAndTypeQuery:1
//com.walletconnect.android.sdk.core.sdk.PairingQueriesImpl.GetPairingByTopicQuery:1
//com.walletconnect.android.sdk.core.sdk.PairingQueriesImpl.HasTopicQuery:1
//com.walletconnect.sign.sdk.NamespaceDaoQueriesImpl.GetNamespacesQuery:1
//com.walletconnect.sign.sdk.NamespaceDaoQueriesImpl.IsUpdateNamespaceRequestValidQuery:1
//com.walletconnect.sign.sdk.NamespaceExtensionDaoQueriesImpl.GetNamespaceExtensionByNamespaceKeyAndSessionIdQuery:1
//com.walletconnect.sign.sdk.ProposalNamespaceDaoQueriesImpl.GetProposalNamespacesQuery:1
//com.walletconnect.sign.sdk.ProposalNamespaceExtensionDaoQueriesImpl.GetProposalNamespaceExtensionByKeyAndSessionIdQuery:1
//com.walletconnect.sign.sdk.SessionDaoQueriesImpl.GetAllSessionTopicsByPairingTopicQuery:1
//com.walletconnect.sign.sdk.SessionDaoQueriesImpl.GetExpiryQuery:1
//com.walletconnect.sign.sdk.SessionDaoQueriesImpl.GetSessionByTopicQuery:1
//com.walletconnect.sign.sdk.SessionDaoQueriesImpl.GetSessionIdByTopicQuery:1
//com.walletconnect.sign.sdk.SessionDaoQueriesImpl.HasTopicQuery:1
//com.walletconnect.sign.sdk.TempNamespaceDaoQueriesImpl.GetTempNamespacesByRequestIdQuery:1
//com.walletconnect.sign.sdk.TempNamespaceDaoQueriesImpl.IsUpdateNamespaceRequestValidQuery:1
//com.walletconnect.sign.sdk.TempNamespaceExtensionDaoQueriesImpl.GetNamespaceExtensionByNamespaceKeyAndSessionIdQuery:1

