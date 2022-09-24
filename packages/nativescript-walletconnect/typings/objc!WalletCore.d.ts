
interface TWAES {
	unused: number;
}
declare var TWAES: interop.StructType<TWAES>;

declare function TWAESDecryptCBC(key: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, iv: interop.Pointer | interop.Reference<any>, mode: TWAESPaddingMode): interop.Pointer | interop.Reference<any>;

declare function TWAESDecryptCTR(key: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, iv: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWAESEncryptCBC(key: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, iv: interop.Pointer | interop.Reference<any>, mode: TWAESPaddingMode): interop.Pointer | interop.Reference<any>;

declare function TWAESEncryptCTR(key: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, iv: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare const enum TWAESPaddingMode {

	Zero = 0,

	PKCS7 = 1
}

declare function TWAccountAddress(account: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWAccountCoin(account: interop.Pointer | interop.Reference<any>): TWCoinType;

declare function TWAccountCreate(address: interop.Pointer | interop.Reference<any>, coin: TWCoinType, derivation: TWDerivation, derivationPath: interop.Pointer | interop.Reference<any>, publicKey: interop.Pointer | interop.Reference<any>, extendedPublicKey: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWAccountDelete(account: interop.Pointer | interop.Reference<any>): void;

declare function TWAccountDerivation(account: interop.Pointer | interop.Reference<any>): TWDerivation;

declare function TWAccountDerivationPath(account: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWAccountExtendedPublicKey(account: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWAccountPublicKey(account: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWAnyAddressCoin(address: interop.Pointer | interop.Reference<any>): TWCoinType;

declare function TWAnyAddressCreateWithPublicKey(publicKey: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWAnyAddressCreateWithString(string: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWAnyAddressData(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWAnyAddressDelete(address: interop.Pointer | interop.Reference<any>): void;

declare function TWAnyAddressDescription(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWAnyAddressEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWAnyAddressIsValid(string: interop.Pointer | interop.Reference<any>, coin: TWCoinType): boolean;

declare function TWAnySignerPlan(input: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWAnySignerSign(input: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWAnySignerSignJSON(json: interop.Pointer | interop.Reference<any>, key: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWAnySignerSupportsJSON(coin: TWCoinType): boolean;

declare function TWBase32Decode(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase32DecodeWithAlphabet(string: interop.Pointer | interop.Reference<any>, alphabet: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase32Encode(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase32EncodeWithAlphabet(data: interop.Pointer | interop.Reference<any>, alphabet: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase58Decode(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase58DecodeNoCheck(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase58Encode(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase58EncodeNoCheck(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase64Decode(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase64DecodeUrl(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase64Encode(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBase64EncodeUrl(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinAddressCreateWithData(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinAddressCreateWithPublicKey(publicKey: interop.Pointer | interop.Reference<any>, prefix: number): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinAddressCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinAddressDelete(address: interop.Pointer | interop.Reference<any>): void;

declare function TWBitcoinAddressDescription(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinAddressEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWBitcoinAddressIsValid(data: interop.Pointer | interop.Reference<any>): boolean;

declare function TWBitcoinAddressIsValidString(string: interop.Pointer | interop.Reference<any>): boolean;

declare function TWBitcoinAddressKeyhash(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinAddressPrefix(address: interop.Pointer | interop.Reference<any>): number;

declare function TWBitcoinScriptBuildPayToPublicKey(pubkey: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptBuildPayToPublicKeyHash(hash: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptBuildPayToScriptHash(scriptHash: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptBuildPayToWitnessPubkeyHash(hash: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptBuildPayToWitnessScriptHash(scriptHash: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptCreate(): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptCreateCopy(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptCreateWithBytes(bytes: string | interop.Pointer | interop.Reference<any>, size: number): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptCreateWithData(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptData(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptDelete(script: interop.Pointer | interop.Reference<any>): void;

declare function TWBitcoinScriptEncode(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWBitcoinScriptHashTypeForCoin(coinType: TWCoinType): number;

declare function TWBitcoinScriptIsPayToScriptHash(script: interop.Pointer | interop.Reference<any>): boolean;

declare function TWBitcoinScriptIsPayToWitnessPublicKeyHash(script: interop.Pointer | interop.Reference<any>): boolean;

declare function TWBitcoinScriptIsPayToWitnessScriptHash(script: interop.Pointer | interop.Reference<any>): boolean;

declare function TWBitcoinScriptIsWitnessProgram(script: interop.Pointer | interop.Reference<any>): boolean;

declare function TWBitcoinScriptLockScriptForAddress(address: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptMatchPayToPubkey(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptMatchPayToPubkeyHash(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptMatchPayToScriptHash(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptMatchPayToWitnessPublicKeyHash(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptMatchPayToWitnessScriptHash(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptScriptHash(script: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWBitcoinScriptSize(script: interop.Pointer | interop.Reference<any>): number;

declare const enum TWBitcoinSigHashType {

	All = 1,

	None = 2,

	Single = 3,

	Fork = 64,

	ForkBTG = 20288,

	AnyoneCanPay = 128
}

declare function TWBitcoinSigHashTypeIsNone(type: TWBitcoinSigHashType): boolean;

declare function TWBitcoinSigHashTypeIsSingle(type: TWBitcoinSigHashType): boolean;

declare const enum TWBlockchain {

	Bitcoin = 0,

	Ethereum = 1,

	Vechain = 3,

	Tron = 4,

	Icon = 5,

	Binance = 6,

	Ripple = 7,

	Tezos = 8,

	Nimiq = 9,

	Stellar = 10,

	Aion = 11,

	Cosmos = 12,

	Theta = 13,

	Ontology = 14,

	Zilliqa = 15,

	IoTeX = 16,

	EOS = 17,

	Nano = 18,

	NULS = 19,

	Waves = 20,

	Aeternity = 21,

	Nebulas = 22,

	FIO = 23,

	Solana = 24,

	Harmony = 25,

	NEAR = 26,

	Algorand = 27,

	Polkadot = 29,

	Cardano = 30,

	NEO = 31,

	Filecoin = 32,

	ElrondNetwork = 33,

	OasisNetwork = 34,

	Decred = 35,

	Zcash = 36,

	Groestlcoin = 37,

	Thorchain = 38,

	Ronin = 39,

	Kusama = 40,

	Nervos = 41,

	Everscale = 42
}

declare function TWCardanoMinAdaAmount(tokenBundle: interop.Pointer | interop.Reference<any>): number;

declare const enum TWCoinType {

	Aeternity = 457,

	Aion = 425,

	Binance = 714,

	Bitcoin = 0,

	BitcoinCash = 145,

	BitcoinGold = 156,

	Callisto = 820,

	Cardano = 1815,

	Cosmos = 118,

	Dash = 5,

	Decred = 42,

	DigiByte = 20,

	Dogecoin = 3,

	EOS = 194,

	Ethereum = 60,

	EthereumClassic = 61,

	FIO = 235,

	GoChain = 6060,

	Groestlcoin = 17,

	ICON = 74,

	IoTeX = 304,

	Kava = 459,

	Kin = 2017,

	Litecoin = 2,

	Monacoin = 22,

	Nebulas = 2718,

	NULS = 8964,

	Nano = 165,

	NEAR = 397,

	Nimiq = 242,

	Ontology = 1024,

	POANetwork = 178,

	Qtum = 2301,

	XRP = 144,

	Solana = 501,

	Stellar = 148,

	Tezos = 1729,

	Theta = 500,

	ThunderToken = 1001,

	NEO = 888,

	TomoChain = 889,

	Tron = 195,

	VeChain = 818,

	Viacoin = 14,

	Wanchain = 5718350,

	Zcash = 133,

	Firo = 136,

	Zilliqa = 313,

	Zelcash = 19167,

	Ravencoin = 175,

	Waves = 5741564,

	Terra = 330,

	TerraV2 = 10000330,

	Harmony = 1023,

	Algorand = 283,

	Kusama = 434,

	Polkadot = 354,

	Filecoin = 461,

	Elrond = 508,

	BandChain = 494,

	SmartChainLegacy = 10000714,

	SmartChain = 20000714,

	Oasis = 474,

	Polygon = 966,

	THORChain = 931,

	Bluzelle = 483,

	Optimism = 10000070,

	Arbitrum = 10042221,

	ECOChain = 10000553,

	AvalancheCChain = 10009000,

	XDai = 10000100,

	Fantom = 10000250,

	CryptoOrg = 394,

	Celo = 52752,

	Ronin = 10002020,

	Osmosis = 10000118,

	ECash = 899,

	CronosChain = 10000025,

	SmartBitcoinCash = 10000145,

	KuCoinCommunityChain = 10000321,

	Boba = 10000288,

	Metis = 1001088,

	Aurora = 1323161554,

	Evmos = 10009001,

	NativeEvmos = 20009001,

	Moonriver = 10001285,

	Moonbeam = 10001284,

	KavaEvm = 10002222,

	Klaytn = 10008217,

	Meter = 18000,

	OKXChain = 996,

	Nervos = 309,

	Everscale = 396
}

declare function TWCoinTypeBlockchain(coin: TWCoinType): TWBlockchain;

declare function TWCoinTypeChainId(coin: TWCoinType): interop.Pointer | interop.Reference<any>;

interface TWCoinTypeConfiguration {
	unused: number;
}
declare var TWCoinTypeConfiguration: interop.StructType<TWCoinTypeConfiguration>;

declare function TWCoinTypeConfigurationGetAccountURL(type: TWCoinType, accountID: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeConfigurationGetDecimals(type: TWCoinType): number;

declare function TWCoinTypeConfigurationGetID(type: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeConfigurationGetName(type: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeConfigurationGetSymbol(type: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeConfigurationGetTransactionURL(type: TWCoinType, transactionID: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeCurve(coin: TWCoinType): TWCurve;

declare function TWCoinTypeDerivationPath(coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeDerivationPathWithDerivation(coin: TWCoinType, derivation: TWDerivation): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeDeriveAddress(coin: TWCoinType, privateKey: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeDeriveAddressFromPublicKey(coin: TWCoinType, publicKey: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWCoinTypeHRP(coin: TWCoinType): TWHRP;

declare function TWCoinTypeP2pkhPrefix(coin: TWCoinType): number;

declare function TWCoinTypeP2shPrefix(coin: TWCoinType): number;

declare function TWCoinTypePublicKeyType(coin: TWCoinType): TWPublicKeyType;

declare function TWCoinTypePurpose(coin: TWCoinType): TWPurpose;

declare function TWCoinTypeSlip44Id(coin: TWCoinType): number;

declare function TWCoinTypeStaticPrefix(coin: TWCoinType): number;

declare function TWCoinTypeValidate(coin: TWCoinType, address: interop.Pointer | interop.Reference<any>): boolean;

declare function TWCoinTypeXprvVersion(coin: TWCoinType): TWHDVersion;

declare function TWCoinTypeXpubVersion(coin: TWCoinType): TWHDVersion;

declare const enum TWCurve {

	SECP256k1 = 0,

	ED25519 = 1,

	ED25519Blake2bNano = 2,

	Curve25519 = 3,

	NIST256p1 = 4,

	ED25519ExtendedCardano = 5,

	None = 6
}

declare function TWDataAppendByte(data: interop.Pointer | interop.Reference<any>, byte: number): void;

declare function TWDataAppendBytes(data: interop.Pointer | interop.Reference<any>, bytes: string | interop.Pointer | interop.Reference<any>, size: number): void;

declare function TWDataAppendData(data: interop.Pointer | interop.Reference<any>, append: interop.Pointer | interop.Reference<any>): void;

declare function TWDataBytes(data: interop.Pointer | interop.Reference<any>): string;

declare function TWDataCopyBytes(data: interop.Pointer | interop.Reference<any>, start: number, size: number, output: string | interop.Pointer | interop.Reference<any>): void;

declare function TWDataCreateWithBytes(bytes: string | interop.Pointer | interop.Reference<any>, size: number): interop.Pointer | interop.Reference<any>;

declare function TWDataCreateWithData(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWDataCreateWithHexString(hex: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWDataCreateWithSize(size: number): interop.Pointer | interop.Reference<any>;

declare function TWDataDelete(data: interop.Pointer | interop.Reference<any>): void;

declare function TWDataEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWDataGet(data: interop.Pointer | interop.Reference<any>, index: number): number;

declare function TWDataReplaceBytes(data: interop.Pointer | interop.Reference<any>, start: number, size: number, bytes: string | interop.Pointer | interop.Reference<any>): void;

declare function TWDataReset(data: interop.Pointer | interop.Reference<any>): void;

declare function TWDataReverse(data: interop.Pointer | interop.Reference<any>): void;

declare function TWDataSet(data: interop.Pointer | interop.Reference<any>, index: number, byte: number): void;

declare function TWDataSize(data: interop.Pointer | interop.Reference<any>): number;

declare function TWDataVectorAdd(dataVector: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>): void;

declare function TWDataVectorCreate(): interop.Pointer | interop.Reference<any>;

declare function TWDataVectorCreateWithData(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWDataVectorDelete(dataVector: interop.Pointer | interop.Reference<any>): void;

declare function TWDataVectorGet(dataVector: interop.Pointer | interop.Reference<any>, index: number): interop.Pointer | interop.Reference<any>;

declare function TWDataVectorSize(dataVector: interop.Pointer | interop.Reference<any>): number;

declare const enum TWDerivation {

	Default = 0,

	Custom = 1,

	BitcoinSegwit = 2,

	BitcoinLegacy = 3,

	LitecoinLegacy = 4,

	SolanaSolana = 5
}

declare function TWDerivationPathAccount(path: interop.Pointer | interop.Reference<any>): number;

declare function TWDerivationPathAddress(path: interop.Pointer | interop.Reference<any>): number;

declare function TWDerivationPathChange(path: interop.Pointer | interop.Reference<any>): number;

declare function TWDerivationPathCoin(path: interop.Pointer | interop.Reference<any>): number;

declare function TWDerivationPathCreate(purpose: TWPurpose, coin: number, account: number, change: number, address: number): interop.Pointer | interop.Reference<any>;

declare function TWDerivationPathCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWDerivationPathDelete(path: interop.Pointer | interop.Reference<any>): void;

declare function TWDerivationPathDescription(path: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWDerivationPathIndexAt(path: interop.Pointer | interop.Reference<any>, index: number): interop.Pointer | interop.Reference<any>;

declare function TWDerivationPathIndexCreate(value: number, hardened: boolean): interop.Pointer | interop.Reference<any>;

declare function TWDerivationPathIndexDelete(index: interop.Pointer | interop.Reference<any>): void;

declare function TWDerivationPathIndexDescription(index: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWDerivationPathIndexHardened(index: interop.Pointer | interop.Reference<any>): boolean;

declare function TWDerivationPathIndexValue(index: interop.Pointer | interop.Reference<any>): number;

declare function TWDerivationPathIndicesCount(path: interop.Pointer | interop.Reference<any>): number;

declare function TWDerivationPathPurpose(path: interop.Pointer | interop.Reference<any>): TWPurpose;

declare function TWEthereumAbiDecodeCall(data: interop.Pointer | interop.Reference<any>, abi: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiDecodeOutput(fn: interop.Pointer | interop.Reference<any>, encoded: interop.Pointer | interop.Reference<any>): boolean;

declare function TWEthereumAbiEncode(fn: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiEncodeTyped(messageJson: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiFunctionAddInArrayParamAddress(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: interop.Pointer | interop.Reference<any>): number;

declare function TWEthereumAbiFunctionAddInArrayParamBool(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: boolean): number;

declare function TWEthereumAbiFunctionAddInArrayParamBytes(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: interop.Pointer | interop.Reference<any>): number;

declare function TWEthereumAbiFunctionAddInArrayParamBytesFix(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, size: number, val: interop.Pointer | interop.Reference<any>): number;

declare function TWEthereumAbiFunctionAddInArrayParamInt16(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: number): number;

declare function TWEthereumAbiFunctionAddInArrayParamInt256(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: interop.Pointer | interop.Reference<any>): number;

declare function TWEthereumAbiFunctionAddInArrayParamInt32(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: number): number;

declare function TWEthereumAbiFunctionAddInArrayParamInt64(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: number): number;

declare function TWEthereumAbiFunctionAddInArrayParamInt8(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: number): number;

declare function TWEthereumAbiFunctionAddInArrayParamIntN(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, bits: number, val: interop.Pointer | interop.Reference<any>): number;

declare function TWEthereumAbiFunctionAddInArrayParamString(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: interop.Pointer | interop.Reference<any>): number;

declare function TWEthereumAbiFunctionAddInArrayParamUInt16(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: number): number;

declare function TWEthereumAbiFunctionAddInArrayParamUInt256(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: interop.Pointer | interop.Reference<any>): number;

declare function TWEthereumAbiFunctionAddInArrayParamUInt32(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: number): number;

declare function TWEthereumAbiFunctionAddInArrayParamUInt64(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: number): number;

declare function TWEthereumAbiFunctionAddInArrayParamUInt8(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, val: number): number;

declare function TWEthereumAbiFunctionAddInArrayParamUIntN(fn: interop.Pointer | interop.Reference<any>, arrayIdx: number, bits: number, val: interop.Pointer | interop.Reference<any>): number;

declare function TWEthereumAbiFunctionAddParamAddress(fn: interop.Pointer | interop.Reference<any>, val: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamArray(fn: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamBool(fn: interop.Pointer | interop.Reference<any>, val: boolean, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamBytes(fn: interop.Pointer | interop.Reference<any>, val: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamBytesFix(fn: interop.Pointer | interop.Reference<any>, size: number, val: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamInt16(fn: interop.Pointer | interop.Reference<any>, val: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamInt256(fn: interop.Pointer | interop.Reference<any>, val: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamInt32(fn: interop.Pointer | interop.Reference<any>, val: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamInt64(fn: interop.Pointer | interop.Reference<any>, val: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamInt8(fn: interop.Pointer | interop.Reference<any>, val: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamIntN(fn: interop.Pointer | interop.Reference<any>, bits: number, val: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamString(fn: interop.Pointer | interop.Reference<any>, val: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamUInt16(fn: interop.Pointer | interop.Reference<any>, val: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamUInt256(fn: interop.Pointer | interop.Reference<any>, val: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamUInt32(fn: interop.Pointer | interop.Reference<any>, val: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamUInt64(fn: interop.Pointer | interop.Reference<any>, val: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamUInt8(fn: interop.Pointer | interop.Reference<any>, val: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionAddParamUIntN(fn: interop.Pointer | interop.Reference<any>, bits: number, val: interop.Pointer | interop.Reference<any>, isOutput: boolean): number;

declare function TWEthereumAbiFunctionCreateWithString(name: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiFunctionDelete(fn: interop.Pointer | interop.Reference<any>): void;

declare function TWEthereumAbiFunctionGetParamAddress(fn: interop.Pointer | interop.Reference<any>, idx: number, isOutput: boolean): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiFunctionGetParamBool(fn: interop.Pointer | interop.Reference<any>, idx: number, isOutput: boolean): boolean;

declare function TWEthereumAbiFunctionGetParamString(fn: interop.Pointer | interop.Reference<any>, idx: number, isOutput: boolean): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiFunctionGetParamUInt256(fn: interop.Pointer | interop.Reference<any>, idx: number, isOutput: boolean): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiFunctionGetParamUInt64(fn: interop.Pointer | interop.Reference<any>, idx: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionGetParamUInt8(fn: interop.Pointer | interop.Reference<any>, idx: number, isOutput: boolean): number;

declare function TWEthereumAbiFunctionGetType(fn: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueDecodeArray(input: interop.Pointer | interop.Reference<any>, type: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueDecodeUInt256(input: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueDecodeValue(input: interop.Pointer | interop.Reference<any>, type: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeAddress(value: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeBool(value: boolean): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeBytes(value: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeBytesDyn(value: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeInt256(value: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeInt32(value: number): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeString(value: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeUInt256(value: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWEthereumAbiValueEncodeUInt32(value: number): interop.Pointer | interop.Reference<any>;

declare const enum TWEthereumChainID {

	Ethereum = 1,

	Classic = 61,

	Poa = 99,

	Vechain = 74,

	Callisto = 820,

	Tomochain = 88,

	Polygon = 137,

	Okc = 66,

	Thundertoken = 108,

	Gochain = 60,

	Meter = 82,

	Celo = 42220,

	Wanchain = 888,

	Cronos = 25,

	Optimism = 10,

	Xdai = 100,

	Smartbch = 10000,

	Fantom = 250,

	Boba = 288,

	Kcc = 321,

	Heco = 128,

	Metis = 1088,

	Moonbeam = 1284,

	Moonriver = 1285,

	Ronin = 2020,

	Kavaevm = 2222,

	Klaytn = 8217,

	Avalanchec = 43114,

	Evmos = 9001,

	Arbitrum = 42161,

	Smartchain = 56,

	Aurora = 1313161554
}

declare function TWFIOAccountCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWFIOAccountDelete(account: interop.Pointer | interop.Reference<any>): void;

declare function TWFIOAccountDescription(account: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWGroestlcoinAddressCreateWithPublicKey(publicKey: interop.Pointer | interop.Reference<any>, prefix: number): interop.Pointer | interop.Reference<any>;

declare function TWGroestlcoinAddressCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWGroestlcoinAddressDelete(address: interop.Pointer | interop.Reference<any>): void;

declare function TWGroestlcoinAddressDescription(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWGroestlcoinAddressEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWGroestlcoinAddressIsValidString(string: interop.Pointer | interop.Reference<any>): boolean;

declare const enum TWHDVersion {

	None = 0,

	XPUB = 76067358,

	XPRV = 76066276,

	YPUB = 77429938,

	YPRV = 77428856,

	ZPUB = 78792518,

	ZPRV = 78791436,

	LTUB = 27108450,

	LTPV = 27106558,

	MTUB = 28471030,

	MTPV = 28469138,

	DPUB = 50178342,

	DPRV = 50177256,

	DGUB = 49990397,

	DGPV = 49988504
}

declare function TWHDVersionIsPrivate(version: TWHDVersion): boolean;

declare function TWHDVersionIsPublic(version: TWHDVersion): boolean;

declare function TWHDWalletCreate(strength: number, passphrase: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletCreateWithEntropy(entropy: interop.Pointer | interop.Reference<any>, passphrase: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletCreateWithMnemonic(mnemonic: interop.Pointer | interop.Reference<any>, passphrase: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletCreateWithMnemonicCheck(mnemonic: interop.Pointer | interop.Reference<any>, passphrase: interop.Pointer | interop.Reference<any>, check: boolean): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletDelete(wallet: interop.Pointer | interop.Reference<any>): void;

declare function TWHDWalletEntropy(wallet: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetAddressForCoin(wallet: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetDerivedKey(wallet: interop.Pointer | interop.Reference<any>, coin: TWCoinType, account: number, change: number, address: number): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetExtendedPrivateKey(wallet: interop.Pointer | interop.Reference<any>, purpose: TWPurpose, coin: TWCoinType, version: TWHDVersion): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetExtendedPrivateKeyAccount(wallet: interop.Pointer | interop.Reference<any>, purpose: TWPurpose, coin: TWCoinType, derivation: TWDerivation, version: TWHDVersion, account: number): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetExtendedPrivateKeyDerivation(wallet: interop.Pointer | interop.Reference<any>, purpose: TWPurpose, coin: TWCoinType, derivation: TWDerivation, version: TWHDVersion): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetExtendedPublicKey(wallet: interop.Pointer | interop.Reference<any>, purpose: TWPurpose, coin: TWCoinType, version: TWHDVersion): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetExtendedPublicKeyAccount(wallet: interop.Pointer | interop.Reference<any>, purpose: TWPurpose, coin: TWCoinType, derivation: TWDerivation, version: TWHDVersion, account: number): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetExtendedPublicKeyDerivation(wallet: interop.Pointer | interop.Reference<any>, purpose: TWPurpose, coin: TWCoinType, derivation: TWDerivation, version: TWHDVersion): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetKey(wallet: interop.Pointer | interop.Reference<any>, coin: TWCoinType, derivationPath: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetKeyByCurve(wallet: interop.Pointer | interop.Reference<any>, curve: TWCurve, derivationPath: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetKeyForCoin(wallet: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetMasterKey(wallet: interop.Pointer | interop.Reference<any>, curve: TWCurve): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletGetPublicKeyFromExtended(extended: interop.Pointer | interop.Reference<any>, coin: TWCoinType, derivationPath: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletMnemonic(wallet: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHDWalletSeed(wallet: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare const enum TWHRP {

	Unknown = 0,

	Bitcoin = 1,

	Litecoin = 2,

	Viacoin = 3,

	Groestlcoin = 4,

	DigiByte = 5,

	Monacoin = 6,

	Cosmos = 7,

	BitcoinCash = 8,

	BitcoinGold = 9,

	IoTeX = 10,

	Nervos = 11,

	Zilliqa = 12,

	Terra = 13,

	CryptoOrg = 14,

	Kava = 15,

	Oasis = 16,

	Bluzelle = 17,

	BandChain = 18,

	Elrond = 19,

	Binance = 20,

	ECash = 21,

	THORChain = 22,

	Harmony = 23,

	Cardano = 24,

	Qtum = 25,

	Osmosis = 26,

	TerraV2 = 27,

	NativeEvmos = 28
}

interface TWHash {
	unused: number;
}
declare var TWHash: interop.StructType<TWHash>;

declare function TWHashBlake256(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashBlake256Blake256(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashBlake256RIPEMD(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashBlake2b(data: interop.Pointer | interop.Reference<any>, size: number): interop.Pointer | interop.Reference<any>;

declare function TWHashGroestl512(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashGroestl512Groestl512(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashKeccak256(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashKeccak512(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashRIPEMD(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare var TWHashRipemdLength: number;

declare function TWHashSHA1(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare var TWHashSHA1Length: number;

declare function TWHashSHA256(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare var TWHashSHA256Length: number;

declare function TWHashSHA256RIPEMD(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashSHA256SHA256(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashSHA3_256(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashSHA3_256RIPEMD(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashSHA3_512(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWHashSHA512(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare var TWHashSHA512Length: number;

declare function TWHashSHA512_256(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWMnemonicIsValid(mnemonic: interop.Pointer | interop.Reference<any>): boolean;

declare function TWMnemonicIsValidWord(word: interop.Pointer | interop.Reference<any>): boolean;

declare function TWMnemonicSuggest(prefix: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWNEARAccountCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWNEARAccountDelete(account: interop.Pointer | interop.Reference<any>): void;

declare function TWNEARAccountDescription(account: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWNervosAddressArgs(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWNervosAddressCodeHash(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWNervosAddressCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWNervosAddressDelete(address: interop.Pointer | interop.Reference<any>): void;

declare function TWNervosAddressDescription(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWNervosAddressEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWNervosAddressHashType(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWNervosAddressIsValidString(string: interop.Pointer | interop.Reference<any>): boolean;

declare function TWPBKDF2HmacSha256(password: interop.Pointer | interop.Reference<any>, salt: interop.Pointer | interop.Reference<any>, iterations: number, dkLen: number): interop.Pointer | interop.Reference<any>;

declare function TWPBKDF2HmacSha512(password: interop.Pointer | interop.Reference<any>, salt: interop.Pointer | interop.Reference<any>, iterations: number, dkLen: number): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyCreate(): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyCreateCopy(key: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyCreateWithData(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyData(pk: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyDelete(pk: interop.Pointer | interop.Reference<any>): void;

declare function TWPrivateKeyGetPublicKeyCurve25519(pk: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyGetPublicKeyEd25519(pk: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyGetPublicKeyEd25519Blake2b(pk: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyGetPublicKeyEd25519Cardano(pk: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyGetPublicKeyNist256p1(pk: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyGetPublicKeySecp256k1(pk: interop.Pointer | interop.Reference<any>, compressed: boolean): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyGetSharedKey(pk: interop.Pointer | interop.Reference<any>, publicKey: interop.Pointer | interop.Reference<any>, curve: TWCurve): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeyIsValid(data: interop.Pointer | interop.Reference<any>, curve: TWCurve): boolean;

declare function TWPrivateKeySign(pk: interop.Pointer | interop.Reference<any>, digest: interop.Pointer | interop.Reference<any>, curve: TWCurve): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeySignAsDER(pk: interop.Pointer | interop.Reference<any>, digest: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPrivateKeySignZilliqaSchnorr(pk: interop.Pointer | interop.Reference<any>, message: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare var TWPrivateKeySize: number;

declare const enum TWPrivateKeyType {

	Default = 0,

	Cardano = 1
}

declare function TWPublicKeyCompressed(from: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare var TWPublicKeyCompressedSize: number;

declare function TWPublicKeyCreateWithData(data: interop.Pointer | interop.Reference<any>, type: TWPublicKeyType): interop.Pointer | interop.Reference<any>;

declare function TWPublicKeyData(pk: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPublicKeyDelete(pk: interop.Pointer | interop.Reference<any>): void;

declare function TWPublicKeyDescription(publicKey: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWPublicKeyIsCompressed(pk: interop.Pointer | interop.Reference<any>): boolean;

declare function TWPublicKeyIsValid(data: interop.Pointer | interop.Reference<any>, type: TWPublicKeyType): boolean;

declare function TWPublicKeyKeyType(publicKey: interop.Pointer | interop.Reference<any>): TWPublicKeyType;

declare function TWPublicKeyRecover(signature: interop.Pointer | interop.Reference<any>, message: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare const enum TWPublicKeyType {

	SECP256k1 = 0,

	SECP256k1Extended = 1,

	NIST256p1 = 2,

	NIST256p1Extended = 3,

	ED25519 = 4,

	ED25519Blake2b = 5,

	CURVE25519 = 6,

	ED25519Cardano = 7
}

declare function TWPublicKeyUncompressed(from: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare var TWPublicKeyUncompressedSize: number;

declare function TWPublicKeyVerify(pk: interop.Pointer | interop.Reference<any>, signature: interop.Pointer | interop.Reference<any>, message: interop.Pointer | interop.Reference<any>): boolean;

declare function TWPublicKeyVerifyAsDER(pk: interop.Pointer | interop.Reference<any>, signature: interop.Pointer | interop.Reference<any>, message: interop.Pointer | interop.Reference<any>): boolean;

declare function TWPublicKeyVerifyZilliqaSchnorr(pk: interop.Pointer | interop.Reference<any>, signature: interop.Pointer | interop.Reference<any>, message: interop.Pointer | interop.Reference<any>): boolean;

declare const enum TWPurpose {

	BIP44 = 44,

	BIP49 = 49,

	BIP84 = 84,

	BIP1852 = 1852
}

declare function TWRippleXAddressCreateWithPublicKey(publicKey: interop.Pointer | interop.Reference<any>, tag: number): interop.Pointer | interop.Reference<any>;

declare function TWRippleXAddressCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWRippleXAddressDelete(address: interop.Pointer | interop.Reference<any>): void;

declare function TWRippleXAddressDescription(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWRippleXAddressEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWRippleXAddressIsValidString(string: interop.Pointer | interop.Reference<any>): boolean;

declare function TWRippleXAddressTag(address: interop.Pointer | interop.Reference<any>): number;

declare const enum TWSS58AddressType {

	Polkadot = 0,

	Kusama = 2
}

declare function TWSegwitAddressCreateWithPublicKey(hrp: TWHRP, publicKey: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWSegwitAddressCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWSegwitAddressDelete(address: interop.Pointer | interop.Reference<any>): void;

declare function TWSegwitAddressDescription(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWSegwitAddressEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWSegwitAddressHRP(address: interop.Pointer | interop.Reference<any>): TWHRP;

declare function TWSegwitAddressIsValidString(string: interop.Pointer | interop.Reference<any>): boolean;

declare function TWSegwitAddressWitnessProgram(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWSegwitAddressWitnessVersion(address: interop.Pointer | interop.Reference<any>): number;

declare function TWSolanaAddressCreateWithString(string: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWSolanaAddressDefaultTokenAddress(address: interop.Pointer | interop.Reference<any>, tokenMintAddress: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWSolanaAddressDelete(address: interop.Pointer | interop.Reference<any>): void;

declare function TWSolanaAddressDescription(address: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare const enum TWStellarMemoType {

	None = 0,

	Text = 1,

	Id = 2,

	Hash = 3,

	Return = 4
}

declare const enum TWStellarPassphrase {

	Stellar = 0,

	Kin = 1
}

declare const enum TWStellarVersionByte {

	AccountID = 48,

	Seed = 192,

	PreAuthTX = 200,

	SHA256Hash = 280
}

declare function TWStoredKeyAccount(key: interop.Pointer | interop.Reference<any>, index: number): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyAccountCount(key: interop.Pointer | interop.Reference<any>): number;

declare function TWStoredKeyAccountForCoin(key: interop.Pointer | interop.Reference<any>, coin: TWCoinType, wallet: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyAccountForCoinDerivation(key: interop.Pointer | interop.Reference<any>, coin: TWCoinType, derivation: TWDerivation, wallet: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyAddAccount(key: interop.Pointer | interop.Reference<any>, address: interop.Pointer | interop.Reference<any>, coin: TWCoinType, derivationPath: interop.Pointer | interop.Reference<any>, publicKey: interop.Pointer | interop.Reference<any>, extendedPublicKey: interop.Pointer | interop.Reference<any>): void;

declare function TWStoredKeyAddAccountDerivation(key: interop.Pointer | interop.Reference<any>, address: interop.Pointer | interop.Reference<any>, coin: TWCoinType, derivation: TWDerivation, derivationPath: interop.Pointer | interop.Reference<any>, publicKey: interop.Pointer | interop.Reference<any>, extendedPublicKey: interop.Pointer | interop.Reference<any>): void;

declare function TWStoredKeyCreate(name: interop.Pointer | interop.Reference<any>, password: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyCreateLevel(name: interop.Pointer | interop.Reference<any>, password: interop.Pointer | interop.Reference<any>, encryptionLevel: TWStoredKeyEncryptionLevel): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyDecryptMnemonic(key: interop.Pointer | interop.Reference<any>, password: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyDecryptPrivateKey(key: interop.Pointer | interop.Reference<any>, password: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyDelete(key: interop.Pointer | interop.Reference<any>): void;

declare const enum TWStoredKeyEncryptionLevel {

	Default = 0,

	Minimal = 1,

	Weak = 2,

	Standard = 3
}

declare function TWStoredKeyEncryptionParameters(key: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyExportJSON(key: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyFixAddresses(key: interop.Pointer | interop.Reference<any>, password: interop.Pointer | interop.Reference<any>): boolean;

declare function TWStoredKeyIdentifier(key: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyImportHDWallet(mnemonic: interop.Pointer | interop.Reference<any>, name: interop.Pointer | interop.Reference<any>, password: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyImportJSON(json: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyImportPrivateKey(privateKey: interop.Pointer | interop.Reference<any>, name: interop.Pointer | interop.Reference<any>, password: interop.Pointer | interop.Reference<any>, coin: TWCoinType): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyIsMnemonic(key: interop.Pointer | interop.Reference<any>): boolean;

declare function TWStoredKeyLoad(path: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyName(key: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyPrivateKey(key: interop.Pointer | interop.Reference<any>, coin: TWCoinType, password: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStoredKeyRemoveAccountForCoin(key: interop.Pointer | interop.Reference<any>, coin: TWCoinType): void;

declare function TWStoredKeyRemoveAccountForCoinDerivation(key: interop.Pointer | interop.Reference<any>, coin: TWCoinType, derivation: TWDerivation): void;

declare function TWStoredKeyRemoveAccountForCoinDerivationPath(key: interop.Pointer | interop.Reference<any>, coin: TWCoinType, derivationPath: interop.Pointer | interop.Reference<any>): void;

declare function TWStoredKeyStore(key: interop.Pointer | interop.Reference<any>, path: interop.Pointer | interop.Reference<any>): boolean;

declare function TWStoredKeyWallet(key: interop.Pointer | interop.Reference<any>, password: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStringCreateWithHexData(data: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStringCreateWithRawBytes(bytes: string | interop.Pointer | interop.Reference<any>, size: number): interop.Pointer | interop.Reference<any>;

declare function TWStringCreateWithUTF8Bytes(bytes: string | interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWStringDelete(string: interop.Pointer | interop.Reference<any>): void;

declare function TWStringEqual(lhs: interop.Pointer | interop.Reference<any>, rhs: interop.Pointer | interop.Reference<any>): boolean;

declare function TWStringGet(string: interop.Pointer | interop.Reference<any>, index: number): number;

declare function TWStringSize(string: interop.Pointer | interop.Reference<any>): number;

declare function TWStringUTF8Bytes(string: interop.Pointer | interop.Reference<any>): string;

declare function TWTHORChainSwapBuildSwap(input: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWTransactionCompilerBuildInput(coinType: TWCoinType, from: interop.Pointer | interop.Reference<any>, to: interop.Pointer | interop.Reference<any>, amount: interop.Pointer | interop.Reference<any>, asset: interop.Pointer | interop.Reference<any>, memo: interop.Pointer | interop.Reference<any>, chainId: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWTransactionCompilerCompileWithSignatures(coinType: TWCoinType, txInputData: interop.Pointer | interop.Reference<any>, signatures: interop.Pointer | interop.Reference<any>, publicKeys: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function TWTransactionCompilerPreImageHashes(coinType: TWCoinType, txInputData: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare var WalletCoreVersionNumber: number;

declare var WalletCoreVersionString: interop.Reference<number>;

declare function hrpForString(string: string | interop.Pointer | interop.Reference<any>): TWHRP;

declare function stringForHRP(hrp: TWHRP): string;
