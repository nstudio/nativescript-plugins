declare module io {
	export module alterac {
		export module blurkit {
			export class BlurKit {
				public static class: java.lang.Class<io.alterac.blurkit.BlurKit>;
				public blur(param0: globalAndroid.view.View, param1: number): globalAndroid.graphics.Bitmap;
				public fastBlur(param0: globalAndroid.view.View, param1: number, param2: number): globalAndroid.graphics.Bitmap;
				public static getInstance(): io.alterac.blurkit.BlurKit;
				public blur(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
				public constructor();
				public static init(param0: globalAndroid.content.Context): void;
			}
		}
	}
}

declare module io {
	export module alterac {
		export module blurkit {
			export class BlurKitException {
				public static class: java.lang.Class<io.alterac.blurkit.BlurKitException>;
				public constructor(param0: string);
			}
		}
	}
}

declare module io {
	export module alterac {
		export module blurkit {
			export class BlurLayout {
				public static class: java.lang.Class<io.alterac.blurkit.BlurLayout>;
				public static DEFAULT_DOWNSCALE_FACTOR: number;
				public static DEFAULT_BLUR_RADIUS: number;
				public static DEFAULT_FPS: number;
				public static DEFAULT_CORNER_RADIUS: number;
				public static DEFAULT_ALPHA: number;
				public getPositionLocked(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public startBlur(): void;
				public setBlurRadius(param0: number): void;
				public unlockPosition(): void;
				public pauseBlur(): void;
				public getFPS(): number;
				public getDownscaleFactor(): number;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setDownscaleFactor(param0: number): void;
				public lockPosition(): void;
				public lockView(): void;
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public getCornerRadius(): number;
				public constructor(param0: globalAndroid.content.Context);
				public getViewLocked(): boolean;
				public invalidate(): void;
				public onDetachedFromWindow(): void;
				public unlockView(): void;
				public setCornerRadius(param0: number): void;
				public getBlurRadius(): number;
				public onAttachedToWindow(): void;
				public setFPS(param0: number): void;
			}
		}
	}
}

declare module io {
	export module alterac {
		export module blurkit {
			export class BuildConfig {
				public static class: java.lang.Class<io.alterac.blurkit.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module alterac {
		export module blurkit {
			export class RoundedImageView {
				public static class: java.lang.Class<io.alterac.blurkit.RoundedImageView>;
				public static DEFAULT_COLOR: number;
				public static DEFAULT_RGB: number;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getCornerRadius(): number;
				public constructor(param0: globalAndroid.content.Context);
				public setCornerRadius(param0: number): void;
			}
		}
	}
}

//Generics information:

