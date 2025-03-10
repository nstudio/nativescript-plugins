declare module org {
	export module web3j {
		export module crypto {
			export class Bip32ECKeyPair extends org.web3j.crypto.ECKeyPair {
				public static class: java.lang.Class<org.web3j.crypto.Bip32ECKeyPair>;
				public static HARDENED_BIT: number;
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: number, param3: androidNative.Array<number>, param4: org.web3j.crypto.Bip32ECKeyPair);
				public static create(param0: java.math.BigInteger): org.web3j.crypto.ECKeyPair;
				public static create(param0: java.math.BigInteger, param1: androidNative.Array<number>): org.web3j.crypto.Bip32ECKeyPair;
				public getPrivateKeyBytes33(): androidNative.Array<number>;
				public static create(param0: androidNative.Array<number>): org.web3j.crypto.ECKeyPair;
				public static create(param0: java.security.KeyPair): org.web3j.crypto.ECKeyPair;
				public static generateKeyPair(param0: androidNative.Array<number>): org.web3j.crypto.Bip32ECKeyPair;
				public static deriveKeyPair(param0: org.web3j.crypto.Bip32ECKeyPair, param1: androidNative.Array<number>): org.web3j.crypto.Bip32ECKeyPair;
				public getChildNumber(): number;
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger);
				public getParentFingerprint(): number;
				public getPublicKeyPoint(): org.bouncycastle.math.ec.ECPoint;
				public static create(param0: androidNative.Array<number>, param1: androidNative.Array<number>): org.web3j.crypto.Bip32ECKeyPair;
				public getDepth(): number;
				public getChainCode(): androidNative.Array<number>;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class Bip39Wallet {
				public static class: java.lang.Class<org.web3j.crypto.Bip39Wallet>;
				public getMnemonic(): string;
				public getFilename(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class CipherException {
				public static class: java.lang.Class<org.web3j.crypto.CipherException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class ContractUtils {
				public static class: java.lang.Class<org.web3j.crypto.ContractUtils>;
				public static SALT_SIZE: number;
				public static ADDRESS_BYTE_SIZE: number;
				public static generateContractAddress(param0: string, param1: java.math.BigInteger): string;
				public static generateCreate2ContractAddress(param0: string, param1: androidNative.Array<number>, param2: androidNative.Array<number>): string;
				public static generateContractAddress(param0: androidNative.Array<number>, param1: java.math.BigInteger): androidNative.Array<number>;
				public static generateCreate2ContractAddress(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>): androidNative.Array<number>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class Credentials {
				public static class: java.lang.Class<org.web3j.crypto.Credentials>;
				public getEcKeyPair(): org.web3j.crypto.ECKeyPair;
				public hashCode(): number;
				public static create(param0: string, param1: string): org.web3j.crypto.Credentials;
				public equals(param0: any): boolean;
				public getAddress(): string;
				public static create(param0: org.web3j.crypto.ECKeyPair): org.web3j.crypto.Credentials;
				public static create(param0: string): org.web3j.crypto.Credentials;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class CryptoUtils {
				public static class: java.lang.Class<org.web3j.crypto.CryptoUtils>;
				public static toDerFormat(param0: org.web3j.crypto.ECDSASignature): androidNative.Array<number>;
				public constructor();
				public static fromDerFormat(param0: androidNative.Array<number>): org.web3j.crypto.ECDSASignature;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class ECDSASignature {
				public static class: java.lang.Class<org.web3j.crypto.ECDSASignature>;
				public r: java.math.BigInteger;
				public s: java.math.BigInteger;
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger);
				public isCanonical(): boolean;
				public toCanonicalised(): org.web3j.crypto.ECDSASignature;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class ECKeyPair {
				public static class: java.lang.Class<org.web3j.crypto.ECKeyPair>;
				public static create(param0: java.math.BigInteger): org.web3j.crypto.ECKeyPair;
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger);
				public getPublicKey(): java.math.BigInteger;
				public hashCode(): number;
				public sign(param0: androidNative.Array<number>): org.web3j.crypto.ECDSASignature;
				public equals(param0: any): boolean;
				public getPrivateKey(): java.math.BigInteger;
				public static create(param0: androidNative.Array<number>): org.web3j.crypto.ECKeyPair;
				public static create(param0: java.security.KeyPair): org.web3j.crypto.ECKeyPair;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class HSMHTTPPass extends org.web3j.crypto.HSMPass {
				public static class: java.lang.Class<org.web3j.crypto.HSMHTTPPass>;
				public constructor(param0: string, param1: java.math.BigInteger);
				public getUrl(): string;
				public constructor(param0: string, param1: java.math.BigInteger, param2: string);
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class HSMPass {
				public static class: java.lang.Class<org.web3j.crypto.HSMPass>;
				public getPublicKey(): java.math.BigInteger;
				public constructor(param0: string, param1: java.math.BigInteger);
				public getAddress(): string;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class Keys {
				public static class: java.lang.Class<org.web3j.crypto.Keys>;
				public static ADDRESS_SIZE: number;
				public static ADDRESS_LENGTH_IN_HEX: number;
				public static PRIVATE_KEY_LENGTH_IN_HEX: number;
				public static getAddress(param0: java.math.BigInteger): string;
				public static deserialize(param0: androidNative.Array<number>): org.web3j.crypto.ECKeyPair;
				public static getAddress(param0: string): string;
				public static createEcKeyPair(): org.web3j.crypto.ECKeyPair;
				public static getAddress(param0: androidNative.Array<number>): androidNative.Array<number>;
				public static toChecksumAddress(param0: string): string;
				public static createEcKeyPair(param0: java.security.SecureRandom): org.web3j.crypto.ECKeyPair;
				public static getAddress(param0: org.web3j.crypto.ECKeyPair): string;
				public static serialize(param0: org.web3j.crypto.ECKeyPair): androidNative.Array<number>;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class LinuxSecureRandom {
				public static class: java.lang.Class<org.web3j.crypto.LinuxSecureRandom>;
				public engineSetSeed(param0: androidNative.Array<number>): void;
				public engineNextBytes(param0: androidNative.Array<number>): void;
				public engineGenerateSeed(param0: number): androidNative.Array<number>;
				public constructor();
			}
			export module LinuxSecureRandom {
				export class LinuxSecureRandomProvider {
					public static class: java.lang.Class<org.web3j.crypto.LinuxSecureRandom.LinuxSecureRandomProvider>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class MnemonicUtils {
				public static class: java.lang.Class<org.web3j.crypto.MnemonicUtils>;
				public static generateMnemonic(param0: androidNative.Array<number>): string;
				public static validateMnemonic(param0: string): boolean;
				public static generateEntropy(param0: string): androidNative.Array<number>;
				public static generateSeed(param0: string, param1: string): androidNative.Array<number>;
				public static getWords(): java.util.List<string>;
				public static calculateChecksum(param0: androidNative.Array<number>): number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class RawTransaction {
				public static class: java.lang.Class<org.web3j.crypto.RawTransaction>;
				public getGasLimit(): java.math.BigInteger;
				public static createEtherTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger): org.web3j.crypto.RawTransaction;
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string);
				public static createTransaction(param0: number, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string, param6: java.math.BigInteger, param7: java.math.BigInteger): org.web3j.crypto.RawTransaction;
				public getNonce(): java.math.BigInteger;
				public getTo(): string;
				public getValue(): java.math.BigInteger;
				public static createEtherTransaction(param0: number, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: java.math.BigInteger, param6: java.math.BigInteger): org.web3j.crypto.RawTransaction;
				public constructor(param0: org.web3j.crypto.transaction.type.ITransaction);
				public static createContractTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: java.math.BigInteger, param4: string): org.web3j.crypto.RawTransaction;
				public getData(): string;
				public getTransaction(): org.web3j.crypto.transaction.type.ITransaction;
				public getGasPrice(): java.math.BigInteger;
				public getType(): org.web3j.crypto.transaction.type.TransactionType;
				public static createTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string): org.web3j.crypto.RawTransaction;
				public static createTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: string): org.web3j.crypto.RawTransaction;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class SecureRandomUtils {
				public static class: java.lang.Class<org.web3j.crypto.SecureRandomUtils>;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class Sign {
				public static class: java.lang.Class<org.web3j.crypto.Sign>;
				public static CURVE_PARAMS: org.bouncycastle.asn1.x9.X9ECParameters;
				public static CHAIN_ID_INC: number;
				public static LOWER_REAL_V: number;
				public static REPLAY_PROTECTED_V_MIN: number;
				public static signMessage(param0: androidNative.Array<number>, param1: org.web3j.crypto.ECKeyPair, param2: boolean): org.web3j.crypto.Sign.SignatureData;
				public static signedPrefixedMessageToKey(param0: androidNative.Array<number>, param1: org.web3j.crypto.Sign.SignatureData): java.math.BigInteger;
				public static getRecId(param0: org.web3j.crypto.Sign.SignatureData, param1: number): number;
				public static signMessage(param0: androidNative.Array<number>, param1: org.web3j.crypto.ECKeyPair): org.web3j.crypto.Sign.SignatureData;
				public static getVFromRecId(param0: number): androidNative.Array<number>;
				public static signPrefixedMessage(param0: androidNative.Array<number>, param1: org.web3j.crypto.ECKeyPair): org.web3j.crypto.Sign.SignatureData;
				public static publicKeyFromPrivate(param0: java.math.BigInteger): java.math.BigInteger;
				public constructor();
				public static signedMessageToKey(param0: androidNative.Array<number>, param1: org.web3j.crypto.Sign.SignatureData): java.math.BigInteger;
				public static getEthereumMessageHash(param0: androidNative.Array<number>): androidNative.Array<number>;
				public static publicPointFromPrivate(param0: java.math.BigInteger): org.bouncycastle.math.ec.ECPoint;
				public static publicFromPoint(param0: androidNative.Array<number>): java.math.BigInteger;
				public static createSignatureData(param0: org.web3j.crypto.ECDSASignature, param1: java.math.BigInteger, param2: androidNative.Array<number>): org.web3j.crypto.Sign.SignatureData;
				public static signedMessageHashToKey(param0: androidNative.Array<number>, param1: org.web3j.crypto.Sign.SignatureData): java.math.BigInteger;
				public static recoverFromSignature(param0: number, param1: org.web3j.crypto.ECDSASignature, param2: androidNative.Array<number>): java.math.BigInteger;
			}
			export module Sign {
				export class SignatureData {
					public static class: java.lang.Class<org.web3j.crypto.Sign.SignatureData>;
					public equals(param0: any): boolean;
					public constructor(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>);
					public getV(): androidNative.Array<number>;
					public getR(): androidNative.Array<number>;
					public constructor(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>);
					public hashCode(): number;
					public getS(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class SignatureDataOperations {
				public static class: java.lang.Class<org.web3j.crypto.SignatureDataOperations>;
				/**
				 * Constructs a new instance of the org.web3j.crypto.SignatureDataOperations interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSignatureData(): org.web3j.crypto.Sign.SignatureData;
					getEncodedTransaction(param0: java.lang.Long): androidNative.Array<number>;
					getFrom(): string;
					verify(param0: string): void;
					getRealV(param0: java.math.BigInteger): number;
					getChainId(): java.lang.Long;
				});
				public constructor();
				public getSignatureData(): org.web3j.crypto.Sign.SignatureData;
				public getChainId(): java.lang.Long;
				public getRealV(param0: java.math.BigInteger): number;
				public verify(param0: string): void;
				public getEncodedTransaction(param0: java.lang.Long): androidNative.Array<number>;
				public getFrom(): string;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class SignedRawTransaction extends org.web3j.crypto.RawTransaction implements org.web3j.crypto.SignatureDataOperations {
				public static class: java.lang.Class<org.web3j.crypto.SignedRawTransaction>;
				public getSignatureData(): org.web3j.crypto.Sign.SignatureData;
				public getChainId(): java.lang.Long;
				public constructor(param0: org.web3j.crypto.transaction.type.ITransaction, param1: org.web3j.crypto.Sign.SignatureData);
				public getRealV(param0: java.math.BigInteger): number;
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string);
				public verify(param0: string): void;
				public constructor(param0: org.web3j.crypto.transaction.type.ITransaction);
				public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string, param6: org.web3j.crypto.Sign.SignatureData);
				public getEncodedTransaction(param0: java.lang.Long): androidNative.Array<number>;
				public getFrom(): string;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class StructuredData {
				public static class: java.lang.Class<org.web3j.crypto.StructuredData>;
				public constructor();
			}
			export module StructuredData {
				export class EIP712Domain {
					public static class: java.lang.Class<org.web3j.crypto.StructuredData.EIP712Domain>;
					public getChainId(): org.web3j.abi.datatypes.generated.Uint256;
					public getSalt(): string;
					public getVersion(): string;
					public getName(): string;
					public constructor(param0: string, param1: string, param2: string, param3: org.web3j.abi.datatypes.Address, param4: string);
					public getVerifyingContract(): org.web3j.abi.datatypes.Address;
				}
				export class EIP712Message {
					public static class: java.lang.Class<org.web3j.crypto.StructuredData.EIP712Message>;
					public getPrimaryType(): string;
					public getTypes(): java.util.HashMap<string,java.util.List<org.web3j.crypto.StructuredData.Entry>>;
					public toString(): string;
					public constructor(param0: java.util.HashMap<string,java.util.List<org.web3j.crypto.StructuredData.Entry>>, param1: string, param2: any, param3: org.web3j.crypto.StructuredData.EIP712Domain);
					public getDomain(): org.web3j.crypto.StructuredData.EIP712Domain;
					public getMessage(): any;
				}
				export class Entry {
					public static class: java.lang.Class<org.web3j.crypto.StructuredData.Entry>;
					public constructor(param0: string, param1: string);
					public getName(): string;
					public getType(): string;
				}
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class StructuredDataEncoder {
				public static class: java.lang.Class<org.web3j.crypto.StructuredDataEncoder>;
				public jsonMessageObject: org.web3j.crypto.StructuredData.EIP712Message;
				public flattenMultidimensionalArray(param0: any): java.util.List<any>;
				public hashMessage(param0: string, param1: java.util.HashMap<string,any>): androidNative.Array<number>;
				public validateStructuredData(param0: org.web3j.crypto.StructuredData.EIP712Message): void;
				public getStructuredData(): androidNative.Array<number>;
				public hashStructuredData(): androidNative.Array<number>;
				public getArrayDimensionsFromDeclaration(param0: string): java.util.List<java.lang.Integer>;
				public constructor(param0: string);
				public hashDomain(): androidNative.Array<number>;
				public getDependencies(param0: string): java.util.Set<string>;
				public encodeType(param0: string): string;
				public encodeStruct(param0: string): string;
				public parseJSONMessage(param0: string): org.web3j.crypto.StructuredData.EIP712Message;
				public encodeData(param0: string, param1: java.util.HashMap<string,any>): androidNative.Array<number>;
				public getDepthsAndDimensions(param0: any, param1: number): java.util.List<org.web3j.crypto.Pair>;
				public typeHash(param0: string): androidNative.Array<number>;
				public getArrayDimensionsFromData(param0: any): java.util.List<java.lang.Integer>;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class TransactionDecoder {
				public static class: java.lang.Class<org.web3j.crypto.TransactionDecoder>;
				public static decode(param0: string): org.web3j.crypto.RawTransaction;
				public constructor();
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class TransactionEncoder {
				public static class: java.lang.Class<org.web3j.crypto.TransactionEncoder>;
				public static signMessage(param0: org.web3j.crypto.RawTransaction, param1: number, param2: org.web3j.crypto.Credentials): androidNative.Array<number>;
				public static asRlpValues(param0: org.web3j.crypto.RawTransaction, param1: org.web3j.crypto.Sign.SignatureData): java.util.List<org.web3j.rlp.RlpType>;
				public static signMessage(param0: org.web3j.crypto.RawTransaction, param1: org.web3j.crypto.Credentials): androidNative.Array<number>;
				/** @deprecated */
				public static signMessage(param0: org.web3j.crypto.RawTransaction, param1: number, param2: org.web3j.crypto.Credentials): androidNative.Array<number>;
				/** @deprecated */
				public static encode(param0: org.web3j.crypto.RawTransaction, param1: number): androidNative.Array<number>;
				public static encode(param0: org.web3j.crypto.RawTransaction, param1: org.web3j.crypto.Sign.SignatureData): androidNative.Array<number>;
				public static createEip155SignatureData(param0: org.web3j.crypto.Sign.SignatureData, param1: number): org.web3j.crypto.Sign.SignatureData;
				public static encode(param0: org.web3j.crypto.RawTransaction, param1: number): androidNative.Array<number>;
				public constructor();
				/** @deprecated */
				public static createEip155SignatureData(param0: org.web3j.crypto.Sign.SignatureData, param1: number): org.web3j.crypto.Sign.SignatureData;
				public static encode(param0: org.web3j.crypto.RawTransaction): androidNative.Array<number>;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class TransactionUtils {
				public static class: java.lang.Class<org.web3j.crypto.TransactionUtils>;
				public static generateTransactionHashHexEncoded(param0: org.web3j.crypto.RawTransaction, param1: org.web3j.crypto.Credentials): string;
				public static generateTransactionHash(param0: org.web3j.crypto.RawTransaction, param1: number, param2: org.web3j.crypto.Credentials): androidNative.Array<number>;
				public static deriveChainId(param0: number): number;
				public static generateTransactionHash(param0: org.web3j.crypto.RawTransaction, param1: org.web3j.crypto.Credentials): androidNative.Array<number>;
				public static generateTransactionHashHexEncoded(param0: org.web3j.crypto.RawTransaction, param1: number, param2: org.web3j.crypto.Credentials): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export module exception {
				export class CryptoWeb3jException {
					public static class: java.lang.Class<org.web3j.crypto.exception.CryptoWeb3jException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export module transaction {
				export module type {
					export class ITransaction {
						public static class: java.lang.Class<org.web3j.crypto.transaction.type.ITransaction>;
						/**
						 * Constructs a new instance of the org.web3j.crypto.transaction.type.ITransaction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							asRlpValues(param0: org.web3j.crypto.Sign.SignatureData): java.util.List<org.web3j.rlp.RlpType>;
							getNonce(): java.math.BigInteger;
							getGasPrice(): java.math.BigInteger;
							getGasLimit(): java.math.BigInteger;
							getTo(): string;
							getValue(): java.math.BigInteger;
							getData(): string;
							getType(): org.web3j.crypto.transaction.type.TransactionType;
						});
						public constructor();
						public asRlpValues(param0: org.web3j.crypto.Sign.SignatureData): java.util.List<org.web3j.rlp.RlpType>;
						public getValue(): java.math.BigInteger;
						public getGasPrice(): java.math.BigInteger;
						public getType(): org.web3j.crypto.transaction.type.TransactionType;
						public getNonce(): java.math.BigInteger;
						public getData(): string;
						public getGasLimit(): java.math.BigInteger;
						public getTo(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export module transaction {
				export module type {
					export class LegacyTransaction extends org.web3j.crypto.transaction.type.ITransaction {
						public static class: java.lang.Class<org.web3j.crypto.transaction.type.LegacyTransaction>;
						public static createTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string): org.web3j.crypto.transaction.type.LegacyTransaction;
						/** @deprecated */
						public constructor(param0: org.web3j.crypto.transaction.type.TransactionType, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: java.math.BigInteger, param4: string, param5: java.math.BigInteger, param6: string);
						public asRlpValues(param0: org.web3j.crypto.Sign.SignatureData): java.util.List<org.web3j.rlp.RlpType>;
						public static createEtherTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger): org.web3j.crypto.transaction.type.LegacyTransaction;
						public getGasPrice(): java.math.BigInteger;
						public getType(): org.web3j.crypto.transaction.type.TransactionType;
						public getNonce(): java.math.BigInteger;
						public getData(): string;
						public getGasLimit(): java.math.BigInteger;
						public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string);
						public getValue(): java.math.BigInteger;
						public static createContractTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: java.math.BigInteger, param4: string): org.web3j.crypto.transaction.type.LegacyTransaction;
						public static createTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: string): org.web3j.crypto.transaction.type.LegacyTransaction;
						public getTo(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export module transaction {
				export module type {
					export class Transaction1559 extends org.web3j.crypto.transaction.type.LegacyTransaction implements org.web3j.crypto.transaction.type.ITransaction {
						public static class: java.lang.Class<org.web3j.crypto.transaction.type.Transaction1559>;
						public static createTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string): org.web3j.crypto.transaction.type.LegacyTransaction;
						/** @deprecated */
						public constructor(param0: org.web3j.crypto.transaction.type.TransactionType, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: java.math.BigInteger, param4: string, param5: java.math.BigInteger, param6: string);
						public asRlpValues(param0: org.web3j.crypto.Sign.SignatureData): java.util.List<org.web3j.rlp.RlpType>;
						public static createEtherTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger): org.web3j.crypto.transaction.type.LegacyTransaction;
						public getGasPrice(): java.math.BigInteger;
						public getType(): org.web3j.crypto.transaction.type.TransactionType;
						public getNonce(): java.math.BigInteger;
						public getData(): string;
						public getGasLimit(): java.math.BigInteger;
						public static createEtherTransaction(param0: number, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: java.math.BigInteger, param6: java.math.BigInteger): org.web3j.crypto.transaction.type.Transaction1559;
						public constructor(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string);
						public constructor(param0: number, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string, param6: java.math.BigInteger, param7: java.math.BigInteger);
						public getMaxFeePerGas(): java.math.BigInteger;
						public getValue(): java.math.BigInteger;
						public getMaxPriorityFeePerGas(): java.math.BigInteger;
						public static createTransaction(param0: number, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: java.math.BigInteger, param5: string, param6: java.math.BigInteger, param7: java.math.BigInteger): org.web3j.crypto.transaction.type.Transaction1559;
						public getChainId(): number;
						public static createTransaction(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: string, param4: string): org.web3j.crypto.transaction.type.LegacyTransaction;
						public getTo(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export module transaction {
				export module type {
					export class TransactionType {
						public static class: java.lang.Class<org.web3j.crypto.transaction.type.TransactionType>;
						public static LEGACY: org.web3j.crypto.transaction.type.TransactionType;
						public static EIP1559: org.web3j.crypto.transaction.type.TransactionType;
						public isEip1559(): boolean;
						public getRlpType(): java.lang.Byte;
						public static valueOf(param0: string): org.web3j.crypto.transaction.type.TransactionType;
						public isLegacy(): boolean;
						public static values(): androidNative.Array<org.web3j.crypto.transaction.type.TransactionType>;
					}
				}
			}
		}
	}
}

//Generics information:

