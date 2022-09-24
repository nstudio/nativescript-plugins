declare const io;
let didLoad = false;

function loadJniLib() {
	if (didLoad) {
		return;
	}
	if (global.isAndroid) {
		try {
			java.lang.System.loadLibrary('TrustWalletCore');
			didLoad = true;
		} catch (error) {}
	} else {
		didLoad = true;
	}
}

export class PrivateKey {
	private _native;
	static {
		loadJniLib();
	}
	constructor(key?: string) {
		if (global.isAndroid) {
			if (typeof key === 'string') {
				this._native = new wallet.core.jni.PrivateKey(new (java as any).lang.String(key).decodeHex());
			} else {
				this._native = new wallet.core.jni.PrivateKey();
			}
		} else {
			if (typeof key === 'string') {
				this._native = NSCWallectConnect.createPrivateKeyWithString(key);
			} else {
				this._native = TWPrivateKeyCreate();
			}
		}
	}

	get native() {
		return this._native;
	}

	sign(hex, curve: Curve) {
		if (global.isAndroid) {
			if (typeof hex === 'string') {
				return this.native.sign(new (java as any).lang.String(hex).decodeHex(), curve.native);
			}

			return this.native.sign(hex, curve.native);
		} else {
			if (typeof hex === 'string') {
				return NSCWallectConnect.privateKeySignToHexWithKeyStringCurve(this.native, hex, curve.native);
			}

			return NSCWallectConnect.privateKeySignToHexWithKeyDataCurve(this.native, hex, curve.native);
		}
	}

	// signEthTransaction(tx: TransactionConfig) {
	// 	if (global.isAndroid) {
	// 		// wallet.core.jni.proto.Ethereum.SigningInput.newBuilder().setChainId(1).setGasLimit(tx.gas).setGasPrice(tx.gasPrice).setNonce(tx.nonce).setToAddress(tx.to);
	// 		// return (this.native as wallet.core.jni.PrivateKey).sign(new (java as any).lang.String(hex).decodeHex(), curve.native);
	// 	} else {
	// 		// todo
	// 		//TWPrivateKeySign(this.native,)
	// 		return null;
	// 	}
	// }
}

export enum CoinTypeInstance {
	Binance = 'binance',
	Bitcoin = 'bitcoin',
	Ethereum = 'ethereum',
}

function intoCoinType(instance: CoinTypeInstance): any {
	if (global.isAndroid) {
		switch (instance) {
			case CoinTypeInstance.Binance:
				return wallet.core.jni.CoinType.BINANCE;
			case CoinTypeInstance.Bitcoin:
				return wallet.core.jni.CoinType.BITCOIN;
			case CoinTypeInstance.Ethereum:
				return wallet.core.jni.CoinType.ETHEREUM;
		}
	}

	if (global.isIOS) {
		switch (instance) {
			case CoinTypeInstance.Binance:
				return TWCoinType.Binance;
			case CoinTypeInstance.Bitcoin:
				return TWCoinType.Bitcoin;
			case CoinTypeInstance.Ethereum:
				return TWCoinType.Ethereum;
		}
	}
}

export class Curve {
	private _native;
	constructor(instance) {
		if (global.isAndroid) {
			if (instance instanceof wallet.core.jni.Curve) {
				this._native = instance;
			}
		} else {
			if (instance) {
				this._native = instance;
			}
		}
		if (!this._native) {
			return null;
		}
	}

	get native() {
		return this._native;
	}
}

export class CoinType {
	private _native;
	static {
		loadJniLib();
	}
	constructor(instance) {
		if (global.isAndroid) {
			if (instance instanceof wallet.core.jni.CoinType) {
				this._native = instance;
			}
		} else {
			const values = Object.values(CoinTypeInstance);

			if (values.includes(instance as unknown as CoinTypeInstance)) {
				this._native = instance;
			}
		}

		if (!this._native) {
			return null;
		}
	}

	static getInstance(type: CoinTypeInstance): CoinType {
		return new CoinType(intoCoinType(type));
	}

	deriveAddress(key: PrivateKey): string {
		if (global.isAndroid) {
			return this._native.deriveAddress(key.native);
		} else {
			return NSCWallectConnect.deriveEthAddress(key.native);
		}
	}

	curve() {
		if (global.isAndroid) {
			return new Curve(this._native.curve());
		} else {
			return new Curve(TWCoinTypeCurve(intoCoinType(this._native)));
		}
	}
}

export class Utils {
	static createPrivateKey(hex?: string) {
		return new PrivateKey(hex);
	}
	static bufferToString(buffer): string {
		if (global.isAndroid) {
			return io.nstudio.plugins.walletconnect.Utils.toHexString(buffer);
		} else {
			return (NSCWallectConnect as any).toHexString(buffer);
		}
	}

	static createEthSignKeccak256(data) {
		if (global.isAndroid) {
			return wallet.core.jni.Hash.keccak256(io.nstudio.plugins.walletconnect.Utils.createEthSigningSignature(data));
		} else {
			if (typeof data === 'string') {
				return NSCWallectConnect.keccak256(NSCWallectConnect.createEthSigningSignature(data));
			}
			return NSCWallectConnect.keccak256(NSCWallectConnect.createEthSigningSignatureWithData(data));
		}
	}

	static keccak256(data) {
		if (global.isAndroid) {
			return wallet.core.jni.Hash.keccak256(data);
		} else {
			return NSCWallectConnect.keccak256(data);
		}
	}

	static createEthSignSha256(data) {
		if (global.isAndroid) {
			return wallet.core.jni.Hash.sha256(io.nstudio.plugins.walletconnect.Utils.createEthSigningSignature(data));
		} else {
			if (typeof data === 'string') {
				return NSCWallectConnect.sha256(NSCWallectConnect.createEthSigningSignature(data));
			}
			return NSCWallectConnect.sha256(NSCWallectConnect.createEthSigningSignatureWithData(data));
		}
	}

	static sha256(data) {
		if (global.isAndroid) {
			return wallet.core.jni.Hash.sha256(data);
		} else {
			return NSCWallectConnect.sha256(data);
		}
	}
}
