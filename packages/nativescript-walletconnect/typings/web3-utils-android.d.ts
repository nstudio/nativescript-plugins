declare module org {
	export module web3j {
		export module commons {
			export class ChainId {
				public static class: java.lang.Class<org.web3j.commons.ChainId>;
				public static MAIN_NET: org.web3j.commons.ChainId;
				public static values(): androidNative.Array<org.web3j.commons.ChainId>;
				public static valueOf(param0: string): org.web3j.commons.ChainId;
				public getId(): number;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module commons {
			export class JavaVersion {
				public static class: java.lang.Class<org.web3j.commons.JavaVersion>;
				public static getJavaVersionAsDouble(): number;
				public static getJavaVersion(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class Hash {
				public static class: java.lang.Class<org.web3j.crypto.Hash>;
				public static hash(param0: androidNative.Array<number>, param1: string): androidNative.Array<number>;
				public static sha3(param0: androidNative.Array<number>): androidNative.Array<number>;
				public static blake2b256(param0: androidNative.Array<number>): androidNative.Array<number>;
				public static sha3String(param0: string): string;
				public static sha3(param0: string): string;
				public static sha256(param0: androidNative.Array<number>): androidNative.Array<number>;
				public static sha256hash160(param0: androidNative.Array<number>): androidNative.Array<number>;
				public static sha3(param0: androidNative.Array<number>, param1: number, param2: number): androidNative.Array<number>;
				public static hmacSha512(param0: androidNative.Array<number>, param1: androidNative.Array<number>): androidNative.Array<number>;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module crypto {
			export class Pair {
				public static class: java.lang.Class<org.web3j.crypto.Pair>;
				public constructor(param0: any, param1: any);
				public getFirst(): any;
				public getSecond(): any;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module exceptions {
			export class MessageDecodingException {
				public static class: java.lang.Class<org.web3j.exceptions.MessageDecodingException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module web3j {
		export module exceptions {
			export class MessageEncodingException {
				public static class: java.lang.Class<org.web3j.exceptions.MessageEncodingException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module web3j {
		export module utils {
			export class Assertions {
				public static class: java.lang.Class<org.web3j.utils.Assertions>;
				public static verifyPrecondition(param0: boolean, param1: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module web3j {
		export module utils {
			export class Bytes {
				public static class: java.lang.Class<org.web3j.utils.Bytes>;
				public static trimLeadingZeroes(param0: androidNative.Array<number>): androidNative.Array<number>;
				public static trimLeadingBytes(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module utils {
			export class Convert {
				public static class: java.lang.Class<org.web3j.utils.Convert>;
				public static fromWei(param0: string, param1: org.web3j.utils.Convert.Unit): java.math.BigDecimal;
				public static toWei(param0: string, param1: org.web3j.utils.Convert.Unit): java.math.BigDecimal;
				public static toWei(param0: java.math.BigDecimal, param1: org.web3j.utils.Convert.Unit): java.math.BigDecimal;
				public static fromWei(param0: java.math.BigDecimal, param1: org.web3j.utils.Convert.Unit): java.math.BigDecimal;
			}
			export module Convert {
				export class Unit {
					public static class: java.lang.Class<org.web3j.utils.Convert.Unit>;
					public static WEI: org.web3j.utils.Convert.Unit;
					public static KWEI: org.web3j.utils.Convert.Unit;
					public static MWEI: org.web3j.utils.Convert.Unit;
					public static GWEI: org.web3j.utils.Convert.Unit;
					public static SZABO: org.web3j.utils.Convert.Unit;
					public static FINNEY: org.web3j.utils.Convert.Unit;
					public static ETHER: org.web3j.utils.Convert.Unit;
					public static KETHER: org.web3j.utils.Convert.Unit;
					public static METHER: org.web3j.utils.Convert.Unit;
					public static GETHER: org.web3j.utils.Convert.Unit;
					public toString(): string;
					public static valueOf(param0: string): org.web3j.utils.Convert.Unit;
					public getWeiFactor(): java.math.BigDecimal;
					public static fromString(param0: string): org.web3j.utils.Convert.Unit;
					public static values(): androidNative.Array<org.web3j.utils.Convert.Unit>;
				}
			}
		}
	}
}

declare module org {
	export module web3j {
		export module utils {
			export class Numeric {
				public static class: java.lang.Class<org.web3j.utils.Numeric>;
				public static toBigInt(param0: string): java.math.BigInteger;
				public static prependHexPrefix(param0: string): string;
				public static toHexStringWithPrefixZeroPadded(param0: java.math.BigInteger, param1: number): string;
				public static toHexStringWithPrefix(param0: java.math.BigInteger): string;
				public static decodeQuantity(param0: string): java.math.BigInteger;
				public static removeDoubleQuotes(param0: string): string;
				/** @deprecated */
				public static toHexStringWithPrefixSafe(param0: java.math.BigInteger): string;
				public static toBytesPadded(param0: java.math.BigInteger, param1: number): androidNative.Array<number>;
				public static toHexString(param0: androidNative.Array<number>, param1: number, param2: number, param3: boolean): string;
				public static toHexStringNoPrefix(param0: java.math.BigInteger): string;
				public static toBigIntNoPrefix(param0: string): java.math.BigInteger;
				public static cleanHexPrefix(param0: string): string;
				public static isIntegerValue(param0: java.math.BigDecimal): boolean;
				public static hexStringToByteArray(param0: string): androidNative.Array<number>;
				public static asByte(param0: number, param1: number): number;
				public static encodeQuantity(param0: java.math.BigInteger): string;
				public static toBigInt(param0: androidNative.Array<number>): java.math.BigInteger;
				public static containsHexPrefix(param0: string): boolean;
				public static toBigInt(param0: androidNative.Array<number>, param1: number, param2: number): java.math.BigInteger;
				public static toHexStringNoPrefixZeroPadded(param0: java.math.BigInteger, param1: number): string;
				public static toHexString(param0: androidNative.Array<number>): string;
				public static toHexStringNoPrefix(param0: androidNative.Array<number>): string;
			}
		}
	}
}

declare module org {
	export module web3j {
		export module utils {
			export class Strings {
				public static class: java.lang.Class<org.web3j.utils.Strings>;
				public static toCsv(param0: java.util.List<string>): string;
				public static zeros(param0: number): string;
				public static isBlank(param0: string): boolean;
				public static capitaliseFirstLetter(param0: string): string;
				public static repeat(param0: string, param1: number): string;
				public static lowercaseFirstLetter(param0: string): string;
				public static isEmpty(param0: string): boolean;
				public static join(param0: java.util.List<string>, param1: string): string;
			}
		}
	}
}

//Generics information:

