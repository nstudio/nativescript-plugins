declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class BitmapUtils {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.BitmapUtils>;
					public static INSTANCE: io.github.triniwiz.fancycamera.BitmapUtils;
					public getBitmap(nv21Buffer: androidx.camera.core.ImageProxy): globalAndroid.graphics.Bitmap;
					public getBitmap(stream: java.nio.ByteBuffer, bmp: io.github.triniwiz.fancycamera.FrameMetadata): globalAndroid.graphics.Bitmap;
					public getBitmap(stream: androidNative.Array<number>, bmp: io.github.triniwiz.fancycamera.FrameMetadata): globalAndroid.graphics.Bitmap;
					public getBitmapFromContentUri(orientation: globalAndroid.content.ContentResolver, rotationDegrees: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class BuildConfig {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME = "io.github.triniwiz.fancycamera";
					public static BUILD_TYPE = "release";
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class Camera extends io.github.triniwiz.fancycamera.CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera>;
					public getDisplayRatio(): string;
					public cameraRecording(): boolean;
					public getRetrieveLatestImage(): boolean;
					public setZoomRatio(value: number): void;
					public getAllowExifRotation(): boolean;
					public setPictureSize(this_: string): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public isStarted(): boolean;
					public startPreview(): void;
					public getMaxAudioBitRate(): number;
					public setMaxAudioBitRate(value: number): void;
					public setAutoSquareCrop(value: boolean): void;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
					public isForceStopping(): boolean;
					public setRotation(value: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getAutoSquareCrop(): boolean;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public isRecording(): boolean;
					public startRecording(): void;
					public getNumberOfCameras(): number;
					public getSupportedRatios(): androidNative.Array<string>;
					public release(): void;
					public getLock(): any;
					public setMaxVideoBitrate(value: number): void;
					public setZoom(value: number): void;
					public orientationUpdated(): void;
					public setLock(value: any): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public setForceStopping(value: boolean): void;
					public setQuality(value: io.github.triniwiz.fancycamera.Quality): void;
					public setDisableHEVC(value: boolean): void;
					public setWhiteBalance(value: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public stop(): void;
					public isAudioLevelsEnabled(): boolean;
					public constructor(context: globalAndroid.content.Context);
					public setImageProcessors(value: androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
					public setRetrieveLatestImage(value: boolean): void;
					public setDisplayRatio(value: string): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public getAvailablePictureSizes(thisCollection$iv: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setDefaultLens(value: io.github.triniwiz.fancycamera.CameraLens): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public setEnableTapToFocus(value: boolean): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public setCamera(value: globalAndroid.hardware.Camera): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public setEnablePinchZoom(value: boolean): void;
					public setMaxVideoFrameRate(value: number): void;
					public getMaxVideoBitrate(): number;
					public getCamera(): globalAndroid.hardware.Camera;
					public takePhoto(): void;
					public getMaxVideoFrameRate(): number;
					public getPreviewSurface(): any;
					public setAllowExifRotation(value: boolean): void;
					public getAmplitude(): number;
					public getZoom(): number;
					public setRecording(value: boolean): void;
					public getEnableTapToFocus(): boolean;
					public constructor(callback: globalAndroid.content.Context, $this$imageProcessors_u24lambda_u244: globalAndroid.util.AttributeSet, this_: number);
					public setPause(value: boolean): void;
					public getEnablePinchZoom(): boolean;
					public setSaveToGallery(value: boolean): void;
					public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
					public setPosition(value: io.github.triniwiz.fancycamera.CameraPosition): void;
					public toggleCamera(): void;
					public setStarted(value: boolean): void;
					public stopRecording(): void;
					public getPause(): boolean;
					public hasFlash(): boolean;
					public setAudioLevelsEnabled(value: boolean): void;
					public setAutoFocus(value: boolean): void;
					public getDb(): number;
					public setFlashMode(this_: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getZoomRatio(): number;
				}
				export namespace Camera {
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera.WhenMappings>;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class Camera2 extends io.github.triniwiz.fancycamera.CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2>;
					public setEnablePinchZoom(value: boolean): void;
					public constructor(callback: globalAndroid.content.Context, $this$imageProcessors_u24lambda_u240: globalAndroid.util.AttributeSet, $i$f$afterMeasured: number);
					public getDisplayRatio(): string;
					public cameraRecording(): boolean;
					public getMinZoomRatio(): number;
					public getRetrieveLatestImage(): boolean;
					public getAllowExifRotation(): boolean;
					public setPictureSize(this_: string): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public getMaxAudioBitRate(): number;
					public setMaxAudioBitRate(value: number): void;
					public startPreview(): void;
					public setFlashMode(test: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public setAutoSquareCrop(value: boolean): void;
					public setStoredZoom(value: number): void;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
					public setAmplitudeEMA(value: number): void;
					public setRotation(value: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getAutoSquareCrop(): boolean;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public setPosition(value: io.github.triniwiz.fancycamera.CameraPosition): void;
					public startRecording(): void;
					public setQuality(wasBound: io.github.triniwiz.fancycamera.Quality): void;
					public getNumberOfCameras(): number;
					public getSupportedRatios(): androidNative.Array<string>;
					public release(): void;
					public setMaxVideoBitrate(value: number): void;
					public setZoom(value: number): void;
					public orientationUpdated(): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public setDisableHEVC(value: boolean): void;
					public setWhiteBalance(value: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public constructor(context: globalAndroid.content.Context);
					public setImageProcessors(value: androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
					public setZoomRatio(value: number): void;
					public setRetrieveLatestImage(value: boolean): void;
					public setDisplayRatio(value: string): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public getAvailablePictureSizes(thisCollection$iv: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setDb(value: number): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public setEnableTapToFocus(value: boolean): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public getMaxZoomRatio(): number;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public setMaxVideoFrameRate(value: number): void;
					public getMaxVideoBitrate(): number;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public getPreviewSurface(): any;
					public setAllowExifRotation(value: boolean): void;
					public getAmplitude(): number;
					public getZoom(): number;
					public getEnableTapToFocus(): boolean;
					public getStoredZoom(): number;
					public getEnablePinchZoom(): boolean;
					public setPause(value: boolean): void;
					public setSaveToGallery(value: boolean): void;
					public setAmplitude(value: number): void;
					public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
					public toggleCamera(): void;
					public stopRecording(): void;
					public getPause(): boolean;
					public hasFlash(): boolean;
					public setAutoFocus(value: boolean): void;
					public setDefaultLens(value: io.github.triniwiz.fancycamera.CameraLens): void;
					public getStoredZoomRatio(): number;
					public setStoredZoomRatio(value: number): void;
					public getDb(): number;
					public setAudioLevelsEnabled(value: boolean): void;
					public getZoomRatio(): number;
				}
				export namespace Camera2 {
					export class CameraInfo {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.CameraInfo>;
						public constructor(id: string, characteristics: androidx.camera.camera2.interop.Camera2CameraInfo);
						public getMaxZoom(): number;
						public getActiveSize(): globalAndroid.graphics.Rect;
						public getLensFacing(): number;
						public getZoomRange(): globalAndroid.util.Range<java.lang.Float>;
						public getMinZoom(): number;
						public getId(): string;
						public getMaxDigitalZoom(): java.lang.Float;
						public toString(): string;
						public getHardwareLevel(): number;
					}
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.WhenMappings>;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export abstract class CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase>;
					public setOnImageLabelingListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setPause(param0: boolean): void;
					public getAllowExifRotation(): boolean;
					public setLatestImage$fancycamera_release(value: globalAndroid.graphics.Bitmap): void;
					public finalize(): void;
					public setMaxVideoFrameRate(param0: number): void;
					public getAutoFocus(): boolean;
					public setOnImageLabelingListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setEnableAudio(value: boolean): void;
					public setAllowExifRotation(param0: boolean): void;
					public startPreview(): void;
					public getDATETIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public setAutoSquareCrop(param0: boolean): void;
					public setOnSelfieSegmentationListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getCamcorderProfile$fancycamera_release(profile: io.github.triniwiz.fancycamera.Quality): globalAndroid.media.CamcorderProfile;
					public setOnFacesDetectedListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getOnPoseDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getSaveToGallery(): boolean;
					public setOnObjectDetectedListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public setListener$fancycamera_release(value: io.github.triniwiz.fancycamera.CameraEventListener): void;
					public getSupportedRatios(): androidNative.Array<string>;
					public hasCameraPermission(): boolean;
					public setOnBarcodeScanningListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public setOnPoseDetectedListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setOnBarcodeScanningListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setMTimerTask$fancycamera_release(value: java.util.TimerTask): void;
					public orientationUpdated(): void;
					public convertFromExifDateTime$fancycamera_release(dateTime: string): java.util.Date;
					public getOnSelfieSegmentationListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getDATE_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public setCurrentOrientation(value: number): void;
					public constructor(context: globalAndroid.content.Context);
					public getCurrentFrame$fancycamera_release(): number;
					public setRecorder$fancycamera_release(value: globalAndroid.media.MediaRecorder): void;
					public getOnSurfaceUpdateListener$fancycamera_release(): io.github.triniwiz.fancycamera.SurfaceUpdateListener;
					public getMDuration$fancycamera_release(): number;
					public setRetrieveLatestImage(param0: boolean): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public resetCurrentFrame$fancycamera_release(): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public getProcessEveryNthFrame(): number;
					public getMainHandler$fancycamera_release(): globalAndroid.os.Handler;
					public startDurationTimer$fancycamera_release(): void;
					public stopDurationTimer$fancycamera_release(): void;
					public getDuration(): number;
					public requestAudioPermission(): void;
					public hasAudioPermission(): boolean;
					public getOnBarcodeScanningListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public getMaxVideoBitrate(): number;
					public initListener$fancycamera_release(instance: globalAndroid.media.MediaRecorder): void;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getMTimerTask$fancycamera_release(): java.util.TimerTask;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public setOnTextRecognitionListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public getRecorder$fancycamera_release(): globalAndroid.media.MediaRecorder;
					public setAutoFocus(param0: boolean): void;
					public getEnableTapToFocus(): boolean;
					public getEnablePinchZoom(): boolean;
					public setonSurfaceUpdateListener(callback: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public getVIDEO_RECORDER_PERMISSIONS_REQUEST$fancycamera_release(): number;
					public stopRecording(): void;
					public hasFlash(): boolean;
					public getEnableAudio(): boolean;
					public setMaxAudioBitRate(param0: number): void;
					public getDb(): number;
					public convertToExifDateTime$fancycamera_release(timestamp: number): string;
					public stringSizeToSize$fancycamera_release(width: string): io.github.triniwiz.fancycamera.Size;
					public cameraRecording(): boolean;
					public getDisplayRatio(): string;
					public getRetrieveLatestImage(): boolean;
					public deInitListener$fancycamera_release(): void;
					public setEnablePinchZoom(param0: boolean): void;
					public toggleFlash(): void;
					public getDisableHEVC(): boolean;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public requestCameraPermission(): void;
					public getMaxAudioBitRate(): number;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
					public getTIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public hasStoragePermission(): boolean;
					public getListener$fancycamera_release(): io.github.triniwiz.fancycamera.CameraEventListener;
					public isProcessingEveryNthFrame$fancycamera_release(): boolean;
					public getAutoSquareCrop(): boolean;
					public getLatestImage$fancycamera_release(): globalAndroid.graphics.Bitmap;
					public getOverridePhotoWidth(): number;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public incrementCurrentFrame$fancycamera_release(): void;
					public setCurrentFrame$fancycamera_release(value: number): void;
					public getNumberOfCameras(): number;
					public setZoom(param0: number): void;
					public requestPermission(): void;
					public release(): void;
					public getOnTextRecognitionListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public setOnSelfieSegmentationListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setGettingAudioLevels$fancycamera_release(value: boolean): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public isGettingAudioLevels$fancycamera_release(): boolean;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public getOnFacesDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public isAudioLevelsEnabled(): boolean;
					public setOverridePhotoHeight(value: number): void;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public getOnImageLabelingListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public setMTimer$fancycamera_release(value: java.util.Timer): void;
					public getMTimer$fancycamera_release(): java.util.Timer;
					public getOnObjectDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getOverridePhotoHeight(): number;
					public setPictureSize(param0: string): void;
					public setProcessEveryNthFrame(value: number): void;
					public setOnFacesDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setDefaultLens(param0: io.github.triniwiz.fancycamera.CameraLens): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public setZoomRatio(param0: number): void;
					public hasPermission(): boolean;
					public setOnObjectDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setOnSurfaceUpdateListener$fancycamera_release(value: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public getPreviewSurface(): any;
					public getAmplitude(): number;
					public getZoom(): number;
					public getVIDEO_RECORDER_PERMISSIONS$fancycamera_release(): androidNative.Array<string>;
					public setDisplayRatio(param0: string): void;
					public requestStoragePermission(): void;
					public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
					public toggleCamera(): void;
					public setEnableTapToFocus(param0: boolean): void;
					public getPause(): boolean;
					public setOnTextRecognitionListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setMDuration$fancycamera_release(value: number): void;
					public setOverridePhotoWidth(value: number): void;
					public getCurrentOrientation(): number;
					public setOnPoseDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getZoomRatio(): number;
				}
				export namespace CameraBase {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase.Companion>;
						public getEMA_FILTER$fancycamera_release(): number;
					}
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase.WhenMappings>;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class CameraEventListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListener>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.CameraEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReady(): void;
						onCameraOpen(): void;
						onCameraClose(): void;
						onCameraPhoto(param0: java.io.File): void;
						onCameraVideo(param0: java.io.File): void;
						onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
						onCameraError(param0: string, param1: java.lang.Exception): void;
						onCameraVideoStart(): void;
					});
					public constructor();
					public onCameraOpen(): void;
					public onCameraClose(): void;
					public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onCameraVideo(param0: java.io.File): void;
					public onCameraVideoStart(): void;
					public onReady(): void;
					public onCameraError(param0: string, param1: java.lang.Exception): void;
					public onCameraPhoto(param0: java.io.File): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export abstract class CameraEventListenerUI extends io.github.triniwiz.fancycamera.CameraEventListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI>;
					public onCameraOpenUI(): void;
					public onCameraPhoto(bundle: java.io.File): void;
					public onCameraClose(): void;
					public onCameraVideoUI(param0: java.io.File): void;
					public onCameraAnalysis(bundle: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onCameraError(param0: string, param1: java.lang.Exception): void;
					public onCameraAnalysisUI(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onCameraErrorUI(param0: string, param1: java.lang.Exception): void;
					public onCameraPhoto(param0: java.io.File): void;
					public onCameraVideoStartUI(): void;
					public onReadyUI(): void;
					public onCameraOpen(): void;
					public onCameraError(bundle: string, this_: java.lang.Exception): void;
					public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onCameraVideo(param0: java.io.File): void;
					public constructor();
					public onCameraVideo(bundle: java.io.File): void;
					public onCameraVideoStart(): void;
					public onCameraCloseUI(): void;
					public onReady(): void;
					public onCameraPhotoUI(param0: java.io.File): void;
				}
				export namespace CameraEventListenerUI {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI.Companion>;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class CameraFlashMode {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode>;
					public static OFF: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static ON: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static AUTO: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static RED_EYE: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static TORCH: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraFlashMode>;
					public getValue(): number;
					public static valueOf(value: string): io.github.triniwiz.fancycamera.CameraFlashMode;
				}
				export namespace CameraFlashMode {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode.Companion>;
						public from(it: number): io.github.triniwiz.fancycamera.CameraFlashMode;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class CameraLens {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraLens>;
					public static auto: io.github.triniwiz.fancycamera.CameraLens;
					public static telephoto: io.github.triniwiz.fancycamera.CameraLens;
					public static wide: io.github.triniwiz.fancycamera.CameraLens;
					public static ultrawide: io.github.triniwiz.fancycamera.CameraLens;
					public static valueOf(value: string): io.github.triniwiz.fancycamera.CameraLens;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraLens>;
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class CameraOrientation {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation>;
					public static UNKNOWN: io.github.triniwiz.fancycamera.CameraOrientation;
					public static PORTRAIT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static PORTRAIT_UPSIDE_DOWN: io.github.triniwiz.fancycamera.CameraOrientation;
					public static LANDSCAPE_LEFT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static LANDSCAPE_RIGHT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraOrientation>;
					public static valueOf(value: string): io.github.triniwiz.fancycamera.CameraOrientation;
					public getValue(): number;
				}
				export namespace CameraOrientation {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation.Companion>;
						public from(it: number): io.github.triniwiz.fancycamera.CameraOrientation;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class CameraPosition {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition>;
					public static BACK: io.github.triniwiz.fancycamera.CameraPosition;
					public static FRONT: io.github.triniwiz.fancycamera.CameraPosition;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraPosition>;
					public getValue(): number;
					public static valueOf(value: string): io.github.triniwiz.fancycamera.CameraPosition;
					public getLenFacing(): number;
				}
				export namespace CameraPosition {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition.Companion>;
						public from(it: number): io.github.triniwiz.fancycamera.CameraPosition;
					}
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition.WhenMappings>;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class DetectorType {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.DetectorType>;
					public static Barcode: io.github.triniwiz.fancycamera.DetectorType;
					public static DigitalInk: io.github.triniwiz.fancycamera.DetectorType;
					public static Face: io.github.triniwiz.fancycamera.DetectorType;
					public static Image: io.github.triniwiz.fancycamera.DetectorType;
					public static Object: io.github.triniwiz.fancycamera.DetectorType;
					public static Pose: io.github.triniwiz.fancycamera.DetectorType;
					public static Text: io.github.triniwiz.fancycamera.DetectorType;
					public static All: io.github.triniwiz.fancycamera.DetectorType;
					public static Selfie: io.github.triniwiz.fancycamera.DetectorType;
					public static None: io.github.triniwiz.fancycamera.DetectorType;
					public toString(): string;
					public static fromInt(value: number): io.github.triniwiz.fancycamera.DetectorType;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.DetectorType>;
					public static valueOf(value: string): io.github.triniwiz.fancycamera.DetectorType;
					public static fromName(value: string): io.github.triniwiz.fancycamera.DetectorType;
				}
				export namespace DetectorType {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.DetectorType.Companion>;
						public fromInt(value: number): io.github.triniwiz.fancycamera.DetectorType;
						public fromName(value: string): io.github.triniwiz.fancycamera.DetectorType;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class Event {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Event>;
					public getMessage(): string;
					public getFile(): java.io.File;
					public getType(): io.github.triniwiz.fancycamera.EventType;
					public constructor(type: io.github.triniwiz.fancycamera.EventType, file: java.io.File, message: string);
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class EventType {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.EventType>;
					public static Photo: io.github.triniwiz.fancycamera.EventType;
					public static Video: io.github.triniwiz.fancycamera.EventType;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.EventType>;
					public static valueOf(value: string): io.github.triniwiz.fancycamera.EventType;
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class FancyCamera {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera>;
					public getAllowExifRotation(): boolean;
					public getAutoFocus(): boolean;
					public setOnImageLabelingListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setEnableTapToFocus(value: boolean): void;
					public startPreview(): void;
					public setOnSelfieSegmentationListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setAutoFocus(value: boolean): void;
					public getSaveToGallery(): boolean;
					public setOverridePhotoHeight(value: number): void;
					public removeImageProcessors(processors: androidNative.Array<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
					public getLatestImage(): globalAndroid.graphics.Bitmap;
					public addImageProcessor(processor: io.github.triniwiz.fancycamera.ImageProcessor<any>): void;
					public setFlashMode(value: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public hasCameraPermission(): boolean;
					public setOnBarcodeScanningListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setZoom(value: number): void;
					public setWhiteBalance(value: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public constructor(context: globalAndroid.content.Context);
					public getRatio(): string;
					public setRetrieveLatestImage(value: boolean): void;
					public removeImageProcessor(processor: io.github.triniwiz.fancycamera.ImageProcessor<any>): void;
					public setCameraOrientation(orientation: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public getProcessEveryNthFrame(): number;
					public setEnablePinchZoom(value: boolean): void;
					public getDuration(): number;
					public requestAudioPermission(): void;
					public hasAudioPermission(): boolean;
					public onPermissionHandler(requestCode: number, permissions: androidNative.Array<string>, grantResults: androidNative.Array<number>): void;
					public getMaxVideoBitrate(): number;
					public setSaveToGallery(value: boolean): void;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public setOnTextRecognitionListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setRatio(value: string): void;
					public getEnableTapToFocus(): boolean;
					public getEnablePinchZoom(): boolean;
					public setPause(value: boolean): void;
					public setPosition(value: io.github.triniwiz.fancycamera.CameraPosition): void;
					public setonSurfaceUpdateListener(callback: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public stopRecording(): void;
					public getEnableAudio(): boolean;
					public static setForceV1(value: boolean): void;
					public setDefaultLens(value: io.github.triniwiz.fancycamera.CameraLens): void;
					public getHasFlash(): boolean;
					public getDb(): number;
					public getRetrieveLatestImage(): boolean;
					public getCameraOrientation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public toggleFlash(): void;
					public setEnableAudio(value: boolean): void;
					public getDisableHEVC(): boolean;
					public setAllowExifRotation(value: boolean): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public requestCameraPermission(): void;
					public getMaxAudioBitRate(): number;
					public setMaxAudioBitRate(value: number): void;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public setAutoSquareCrop(value: boolean): void;
					public hasStoragePermission(): boolean;
					public getAutoSquareCrop(): boolean;
					public getOverridePhotoWidth(): number;
					public removeImageProcessor(iterator: number): void;
					public getPictureSize(): string;
					public startRecording(): void;
					public getNumberOfCameras(): number;
					public static getForceV1(): boolean;
					public requestPermission(): void;
					public release(): void;
					public setMaxVideoBitrate(value: number): void;
					public clearImageProcessor(): void;
					public setDisableHEVC(value: boolean): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public stopPreview(): void;
					public getOverridePhotoHeight(): number;
					public setOnFacesDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public setMaxVideoFrameRate(value: number): void;
					public hasPermission(): boolean;
					public getGetSupportedRatios(): androidNative.Array<string>;
					public addImageProcessors(processors: androidNative.Array<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
					public setOnObjectDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getZoom(): number;
					public requestStoragePermission(): void;
					public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
					public setQuality(value: io.github.triniwiz.fancycamera.Quality): void;
					public toggleCamera(): void;
					public getPause(): boolean;
					public getAvailablePictureSizes(ratio: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setProcessEveryNthFrame(value: number): void;
					public setOverridePhotoWidth(value: number): void;
					public setListener(listener: io.github.triniwiz.fancycamera.CameraEventListener): void;
					public getPreviewView(): any;
					public setEnableAudioLevels(enableAudioLevels: boolean): void;
					public setAudioLevelsEnabled(value: boolean): void;
					public setPictureSize(value: string): void;
					public setOnPoseDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getImageProcessors(): java.util.List<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
				}
				export namespace FancyCamera {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera.Companion>;
						public setForceV1(value: boolean): void;
						public getForceV1(): boolean;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class FancyCameraFileProvider {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCameraFileProvider>;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class FrameMetadata {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.FrameMetadata>;
					public getRotation(): number;
					public getHeight(): number;
					public getWidth(): number;
				}
				export namespace FrameMetadata {
					export class Builder {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.FrameMetadata.Builder>;
						public constructor();
						public setWidth(width: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
						public setRotation(rotation: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
						public setHeight(height: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
						public build(): io.github.triniwiz.fancycamera.FrameMetadata;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class ImageAnalysis {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysis>;
					public constructor();
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class ImageAnalysisCallback {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysisCallback>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.ImageAnalysisCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: any): void;
						onError(param0: string, param1: java.lang.Exception): void;
					});
					public constructor();
					public onSuccess(param0: any): void;
					public onError(param0: string, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class ImageProcessor<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.ImageProcessor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getType(): number;
						process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<T>;
						process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<T>;
						process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<T>;
						process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<T>;
					});
					public constructor();
					public getType(): number;
					public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<T>;
					public process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<T>;
					public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<T>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<T>;
				}
				export namespace ImageProcessor {
					export class DefaultImpls {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageProcessor.DefaultImpls>;
						public static process(input: io.github.triniwiz.fancycamera.ImageProcessor<any>, $this: androidNative.Array<number>, bytes: number, width: number, height: number, rotation: number): java.util.concurrent.FutureTask<any>;
						public static process($this: io.github.triniwiz.fancycamera.ImageProcessor<any>, image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<any>;
						public static process(input: io.github.triniwiz.fancycamera.ImageProcessor<any>, $this: globalAndroid.graphics.Bitmap, bitmap: number): java.util.concurrent.FutureTask<any>;
						public static getType($this: io.github.triniwiz.fancycamera.ImageProcessor<any>): number;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class ML {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ML>;
					public static processImage(image: globalAndroid.graphics.Bitmap, rotation: number, imageProcessors: java.util.List<any>, callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public constructor();
					public static process(byteArray: androidNative.Array<number>, width: number, height: number, rotation: number, format: number, imageProcessors: java.util.List<any>, callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
				}
				export namespace ML {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.ML.Companion>;
						public process(this_: androidNative.Array<number>, byteArray: number, width: number, height: number, rotation: number, format: java.util.List<any>, imageProcessors: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
						public processImage(this_: globalAndroid.graphics.Bitmap, image: number, rotation: java.util.List<any>, imageProcessors: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class Quality {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality>;
					public static MAX_480P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_720P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_1080P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_2160P: io.github.triniwiz.fancycamera.Quality;
					public static HIGHEST: io.github.triniwiz.fancycamera.Quality;
					public static LOWEST: io.github.triniwiz.fancycamera.Quality;
					public static QVGA: io.github.triniwiz.fancycamera.Quality;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.Quality>;
					public getValue(): number;
					public static valueOf(value: string): io.github.triniwiz.fancycamera.Quality;
				}
				export namespace Quality {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality.Companion>;
						public from(it: number): io.github.triniwiz.fancycamera.Quality;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class Size {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Size>;
					public toString(): string;
					public getHeight(): number;
					public getWidth(): number;
					public constructor(width: number, height: number);
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class SurfaceUpdateListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.SurfaceUpdateListener>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.SurfaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUpdate(): void;
					});
					public constructor();
					public onUpdate(): void;
				}
			}
		}
	}
}

declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class WhiteBalance {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.WhiteBalance>;
					public static Auto: io.github.triniwiz.fancycamera.WhiteBalance;
					public static Sunny: io.github.triniwiz.fancycamera.WhiteBalance;
					public static Cloudy: io.github.triniwiz.fancycamera.WhiteBalance;
					public static Shadow: io.github.triniwiz.fancycamera.WhiteBalance;
					public static Twilight: io.github.triniwiz.fancycamera.WhiteBalance;
					public static Fluorescent: io.github.triniwiz.fancycamera.WhiteBalance;
					public static Incandescent: io.github.triniwiz.fancycamera.WhiteBalance;
					public static WarmFluorescent: io.github.triniwiz.fancycamera.WhiteBalance;
					public getValue$fancycamera_release(): string;
					public static valueOf(value: string): io.github.triniwiz.fancycamera.WhiteBalance;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.WhiteBalance>;
				}
			}
		}
	}
}

//Generics information:
//io.github.triniwiz.fancycamera.ImageProcessor:1

