declare namespace io {
	export namespace github {
		export namespace triniwiz {
			export namespace fancycamera {
				export class BitmapUtils {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.BitmapUtils>;
					public static INSTANCE: io.github.triniwiz.fancycamera.BitmapUtils;
					public getBitmap(param0: java.nio.ByteBuffer, param1: io.github.triniwiz.fancycamera.FrameMetadata): globalAndroid.graphics.Bitmap;
					public getBitmapFromContentUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
					public getBitmap(param0: androidNative.Array<number>, param1: io.github.triniwiz.fancycamera.FrameMetadata): globalAndroid.graphics.Bitmap;
					public getBitmap(param0: androidx.camera.core.ImageProxy): globalAndroid.graphics.Bitmap;
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
					public setPause(param0: boolean): void;
					public getRetrieveLatestImage(): boolean;
					public getAllowExifRotation(): boolean;
					public setEnablePinchZoom(param0: boolean): void;
					public setMaxVideoFrameRate(param0: number): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public setAllowExifRotation(param0: boolean): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public isStarted(): boolean;
					public startPreview(): void;
					public getMaxAudioBitRate(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
					public setAutoSquareCrop(param0: boolean): void;
					public setForceStopping(param0: boolean): void;
					public isWideAngleSupported(): boolean;
					public isForceStopping(): boolean;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getAutoSquareCrop(): boolean;
					public setImageProcessors(param0: androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public isRecording(): boolean;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public setCamera(param0: globalAndroid.hardware.Camera): void;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public getNumberOfCameras(): number;
					public getSupportedRatios(): androidNative.Array<string>;
					public setZoom(param0: number): void;
					public release(): void;
					public getLock(): any;
					public setLock(param0: any): void;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public orientationUpdated(): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public stop(): void;
					public isAudioLevelsEnabled(): boolean;
					public setMaxVideoBitrate(param0: number): void;
					public setRecording(param0: boolean): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public setStarted(param0: boolean): void;
					public setRetrieveLatestImage(param0: boolean): void;
					public setPictureSize(param0: string): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public setDefaultLens(param0: io.github.triniwiz.fancycamera.CameraLens): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public setZoomRatio(param0: number): void;
					public getMaxVideoBitrate(): number;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getCamera(): globalAndroid.hardware.Camera;
					public takePhoto(): void;
					public getMaxVideoFrameRate(): number;
					public getPreviewSurface(): any;
					public getAmplitude(): number;
					public getZoom(): number;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setAutoFocus(param0: boolean): void;
					public setDisplayRatio(param0: string): void;
					public getEnableTapToFocus(): boolean;
					public getEnablePinchZoom(): boolean;
					public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
					public toggleCamera(): void;
					public setEnableTapToFocus(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public stopRecording(): void;
					public getPause(): boolean;
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setMaxAudioBitRate(param0: number): void;
					public getDb(): number;
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
					public getDisplayRatio(): string;
					public cameraRecording(): boolean;
					public setPause(param0: boolean): void;
					public getMinZoomRatio(): number;
					public getRetrieveLatestImage(): boolean;
					public getAllowExifRotation(): boolean;
					public setFrontCameraId(param0: string): void;
					public setEnablePinchZoom(param0: boolean): void;
					public setMaxVideoFrameRate(param0: number): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public setAllowExifRotation(param0: boolean): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public getMaxAudioBitRate(): number;
					public startPreview(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
					public setAutoSquareCrop(param0: boolean): void;
					public isWideAngleSupported(): boolean;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getAutoSquareCrop(): boolean;
					public getDeviceCameraInfo(): java.util.List<io.github.triniwiz.fancycamera.Camera2.CameraInfo>;
					public setImageProcessors(param0: androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public getNumberOfCameras(): number;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public getBackCameraId(): string;
					public setExternalCameraId(param0: string): void;
					public getSupportedRatios(): androidNative.Array<string>;
					public setZoom(param0: number): void;
					public release(): void;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public orientationUpdated(): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public setAmplitude(param0: number): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public setAmplitudeEMA(param0: number): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public setCameraWithId(param0: string): void;
					public setRetrieveLatestImage(param0: boolean): void;
					public setPictureSize(param0: string): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public getMaxZoomRatio(): number;
					public setDefaultLens(param0: io.github.triniwiz.fancycamera.CameraLens): void;
					public setDb(param0: number): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public setZoomRatio(param0: number): void;
					public getMaxVideoBitrate(): number;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getCurrentCameraInfo(): io.github.triniwiz.fancycamera.Camera2.CameraInfo;
					public setBackCameraId(param0: string): void;
					public setStoredZoomRatio(param0: number): void;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public getPreviewSurface(): any;
					public getAmplitude(): number;
					public getZoom(): number;
					public getExternalCameraId(): string;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setAutoFocus(param0: boolean): void;
					public getEnableTapToFocus(): boolean;
					public getStoredZoom(): number;
					public setDisplayRatio(param0: string): void;
					public getEnablePinchZoom(): boolean;
					public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
					public setStoredZoom(param0: number): void;
					public toggleCamera(): void;
					public setEnableTapToFocus(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public stopRecording(): void;
					public getPause(): boolean;
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setMaxAudioBitRate(param0: number): void;
					public getStoredZoomRatio(): number;
					public getDb(): number;
					public getFrontCameraId(): string;
					public getZoomRatio(): number;
				}
				export namespace Camera2 {
					export class Camera2CameraCharacteristicsImpl extends io.github.triniwiz.fancycamera.Camera2.CameraCharacteristicsImpl {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.Camera2CameraCharacteristicsImpl>;
						public getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
						public constructor(param0: globalAndroid.hardware.camera2.CameraCharacteristics);
					}
					export class CameraCharacteristicsImpl {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.CameraCharacteristicsImpl>;
						/**
						 * Constructs a new instance of the io.github.triniwiz.fancycamera.Camera2$CameraCharacteristicsImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
						});
						public constructor();
						public getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
					}
					export class CameraInfo {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.CameraInfo>;
						public getMaxZoom(): number;
						public constructor(param0: string, param1: string, param2: io.github.triniwiz.fancycamera.Camera2.CameraCharacteristicsImpl);
						public getMinZoom(): number;
						public getFocalLengths(): androidNative.Array<number>;
						public toString(): string;
						public getActiveSize(): globalAndroid.graphics.Rect;
						public getLensFacing(): number;
						public getZoomRange(): globalAndroid.util.Range<java.lang.Float>;
						public getId(): string;
						public getMaxDigitalZoom(): number;
						public getImplementationType(): string;
						public getCapabilities(): androidNative.Array<number>;
						public getHardwareLevel(): number;
					}
					export class CameraxCameraCharacteristicsImpl extends io.github.triniwiz.fancycamera.Camera2.CameraCharacteristicsImpl {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.CameraxCameraCharacteristicsImpl>;
						public constructor(param0: androidx.camera.camera2.interop.Camera2CameraInfo);
						public getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
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
					public setMTimerTask$fancycamera_release(param0: java.util.TimerTask): void;
					public setPause(param0: boolean): void;
					public getAllowExifRotation(): boolean;
					public setOnBarcodeScanningListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setCurrentOrientation(param0: number): void;
					public finalize(): void;
					public setMaxVideoFrameRate(param0: number): void;
					public getAutoFocus(): boolean;
					public setAllowExifRotation(param0: boolean): void;
					public startPreview(): void;
					public getDATETIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public setOverridePhotoWidth(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setAutoSquareCrop(param0: boolean): void;
					public isWideAngleSupported(): boolean;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public setOverridePhotoHeight(param0: number): void;
					public setOnTextRecognitionListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getOnPoseDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getSaveToGallery(): boolean;
					public setGettingAudioLevels$fancycamera_release(param0: boolean): void;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public setListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.CameraEventListener): void;
					public getSupportedRatios(): androidNative.Array<string>;
					public hasCameraPermission(): boolean;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public orientationUpdated(): void;
					public getOnSelfieSegmentationListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public setOnTextRecognitionListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getDATE_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public setLatestImage$fancycamera_release(param0: globalAndroid.graphics.Bitmap): void;
					public setOnImageLabelingListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getCurrentFrame$fancycamera_release(): number;
					public getOnSurfaceUpdateListener$fancycamera_release(): io.github.triniwiz.fancycamera.SurfaceUpdateListener;
					public getMDuration$fancycamera_release(): number;
					public setRetrieveLatestImage(param0: boolean): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public resetCurrentFrame$fancycamera_release(): void;
					public getProcessEveryNthFrame(): number;
					public getMainHandler$fancycamera_release(): globalAndroid.os.Handler;
					public startDurationTimer$fancycamera_release(): void;
					public stopDurationTimer$fancycamera_release(): void;
					public getDuration(): number;
					public requestAudioPermission(): void;
					public hasAudioPermission(): boolean;
					public getOnBarcodeScanningListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getMaxVideoBitrate(): number;
					public setonSurfaceUpdateListener(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getMTimerTask$fancycamera_release(): java.util.TimerTask;
					public setRecorder$fancycamera_release(param0: globalAndroid.media.MediaRecorder): void;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public stringSizeToSize$fancycamera_release(param0: string): io.github.triniwiz.fancycamera.Size;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public getRecorder$fancycamera_release(): globalAndroid.media.MediaRecorder;
					public setAutoFocus(param0: boolean): void;
					public convertToExifDateTime$fancycamera_release(param0: number): string;
					public setOnFacesDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getEnableTapToFocus(): boolean;
					public setProcessEveryNthFrame(param0: number): void;
					public getEnablePinchZoom(): boolean;
					public setOnPoseDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public initListener$fancycamera_release(param0: globalAndroid.media.MediaRecorder): void;
					public getVIDEO_RECORDER_PERMISSIONS_REQUEST$fancycamera_release(): number;
					public stopRecording(): void;
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public getEnableAudio(): boolean;
					public setMaxAudioBitRate(param0: number): void;
					public getDb(): number;
					public cameraRecording(): boolean;
					public getDisplayRatio(): string;
					public getRetrieveLatestImage(): boolean;
					public deInitListener$fancycamera_release(): void;
					public setEnablePinchZoom(param0: boolean): void;
					public toggleFlash(): void;
					public getDisableHEVC(): boolean;
					public setOnSelfieSegmentationListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public requestCameraPermission(): void;
					public getMaxAudioBitRate(): number;
					public setOnObjectDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setCurrentFrame$fancycamera_release(param0: number): void;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
					public getTIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public hasStoragePermission(): boolean;
					public setMTimer$fancycamera_release(param0: java.util.Timer): void;
					public getListener$fancycamera_release(): io.github.triniwiz.fancycamera.CameraEventListener;
					public isProcessingEveryNthFrame$fancycamera_release(): boolean;
					public getAutoSquareCrop(): boolean;
					public getLatestImage$fancycamera_release(): globalAndroid.graphics.Bitmap;
					public getOverridePhotoWidth(): number;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public setOnSurfaceUpdateListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public incrementCurrentFrame$fancycamera_release(): void;
					public getNumberOfCameras(): number;
					public setZoom(param0: number): void;
					public requestPermission(): void;
					public release(): void;
					public getOnTextRecognitionListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public isGettingAudioLevels$fancycamera_release(): boolean;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public getOnFacesDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getCamcorderProfile$fancycamera_release(param0: io.github.triniwiz.fancycamera.Quality): globalAndroid.media.CamcorderProfile;
					public setOnObjectDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public getOnImageLabelingListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getAmplitudeEMA(): number;
					public setOnBarcodeScanningListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public stopPreview(): void;
					public getMTimer$fancycamera_release(): java.util.Timer;
					public getOnObjectDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getOverridePhotoHeight(): number;
					public setPictureSize(param0: string): void;
					public setEnableAudio(param0: boolean): void;
					public setDefaultLens(param0: io.github.triniwiz.fancycamera.CameraLens): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public setZoomRatio(param0: number): void;
					public convertFromExifDateTime$fancycamera_release(param0: string): java.util.Date;
					public hasPermission(): boolean;
					public setOnSelfieSegmentationListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getPreviewSurface(): any;
					public getAmplitude(): number;
					public getZoom(): number;
					public getVIDEO_RECORDER_PERMISSIONS$fancycamera_release(): androidNative.Array<string>;
					public setDisplayRatio(param0: string): void;
					public requestStoragePermission(): void;
					public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
					public toggleCamera(): void;
					public setEnableTapToFocus(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getPause(): boolean;
					public setOnPoseDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setMDuration$fancycamera_release(param0: number): void;
					public setOnImageLabelingListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getCurrentOrientation(): number;
					public setOnFacesDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
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
					public onCameraClose(): void;
					public onCameraVideoUI(param0: java.io.File): void;
					public onCameraError(param0: string, param1: java.lang.Exception): void;
					public onCameraAnalysisUI(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onCameraErrorUI(param0: string, param1: java.lang.Exception): void;
					public onCameraPhoto(param0: java.io.File): void;
					public onCameraVideoStartUI(): void;
					public onReadyUI(): void;
					public onCameraOpen(): void;
					public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onCameraVideo(param0: java.io.File): void;
					public constructor();
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
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraFlashMode;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraFlashMode>;
					public getValue(): number;
				}
				export namespace CameraFlashMode {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraFlashMode;
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
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraLens>;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraLens;
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
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraOrientation;
					public getValue(): number;
				}
				export namespace CameraOrientation {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraOrientation;
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
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraPosition;
					public getLenFacing(): number;
				}
				export namespace CameraPosition {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraPosition;
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
					public static fromName(param0: string): io.github.triniwiz.fancycamera.DetectorType;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.DetectorType;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.DetectorType>;
					public static fromInt(param0: number): io.github.triniwiz.fancycamera.DetectorType;
				}
				export namespace DetectorType {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.DetectorType.Companion>;
						public fromInt(param0: number): io.github.triniwiz.fancycamera.DetectorType;
						public fromName(param0: string): io.github.triniwiz.fancycamera.DetectorType;
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
					public constructor(param0: io.github.triniwiz.fancycamera.EventType, param1: java.io.File, param2: string);
					public getMessage(): string;
					public getFile(): java.io.File;
					public getType(): io.github.triniwiz.fancycamera.EventType;
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
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.EventType;
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
					public setPause(param0: boolean): void;
					public getAllowExifRotation(): boolean;
					public setMaxVideoFrameRate(param0: number): void;
					public getAutoFocus(): boolean;
					public setAllowExifRotation(param0: boolean): void;
					public startPreview(): void;
					public onPermissionHandler(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOverridePhotoWidth(param0: number): void;
					public setAutoSquareCrop(param0: boolean): void;
					public isWideAngleSupported(): boolean;
					public setOverridePhotoHeight(param0: number): void;
					public setOnTextRecognitionListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getSaveToGallery(): boolean;
					public getLatestImage(): globalAndroid.graphics.Bitmap;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public hasCameraPermission(): boolean;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public setOnImageLabelingListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getRatio(): string;
					public setRetrieveLatestImage(param0: boolean): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public getProcessEveryNthFrame(): number;
					public addImageProcessor(param0: io.github.triniwiz.fancycamera.ImageProcessor<any>): void;
					public getDuration(): number;
					public requestAudioPermission(): void;
					public hasAudioPermission(): boolean;
					public getMaxVideoBitrate(): number;
					public setonSurfaceUpdateListener(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setAutoFocus(param0: boolean): void;
					public getEnableTapToFocus(): boolean;
					public setProcessEveryNthFrame(param0: number): void;
					public getEnablePinchZoom(): boolean;
					public stopRecording(): void;
					public setCameraOrientation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public constructor(param0: globalAndroid.content.Context);
					public getEnableAudio(): boolean;
					public setMaxAudioBitRate(param0: number): void;
					public getHasFlash(): boolean;
					public getDb(): number;
					public setEnableAudioLevels(param0: boolean): void;
					public removeImageProcessor(param0: number): void;
					public static setForceV1(param0: boolean): void;
					public getRetrieveLatestImage(): boolean;
					public getCameraOrientation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public setEnablePinchZoom(param0: boolean): void;
					public toggleFlash(): void;
					public getDisableHEVC(): boolean;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public requestCameraPermission(): void;
					public getMaxAudioBitRate(): number;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public hasStoragePermission(): boolean;
					public getAutoSquareCrop(): boolean;
					public removeImageProcessor(param0: io.github.triniwiz.fancycamera.ImageProcessor<any>): void;
					public getOverridePhotoWidth(): number;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public startRecording(): void;
					public addImageProcessors(param0: androidNative.Array<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
					public setDisableHEVC(param0: boolean): void;
					public getNumberOfCameras(): number;
					public static getForceV1(): boolean;
					public setZoom(param0: number): void;
					public requestPermission(): void;
					public release(): void;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public clearImageProcessor(): void;
					public setOnObjectDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public setOnBarcodeScanningListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public stopPreview(): void;
					public getOverridePhotoHeight(): number;
					public setPictureSize(param0: string): void;
					public setEnableAudio(param0: boolean): void;
					public setDefaultLens(param0: io.github.triniwiz.fancycamera.CameraLens): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public hasPermission(): boolean;
					public getGetSupportedRatios(): androidNative.Array<string>;
					public removeImageProcessors(param0: androidNative.Array<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
					public setOnSelfieSegmentationListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getZoom(): number;
					public requestStoragePermission(): void;
					public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
					public setRatio(param0: string): void;
					public toggleCamera(): void;
					public setEnableTapToFocus(param0: boolean): void;
					public getPause(): boolean;
					public setOnPoseDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getPreviewView(): any;
					public setListener(param0: io.github.triniwiz.fancycamera.CameraEventListener): void;
					public setOnFacesDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getImageProcessors(): java.util.List<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
				}
				export namespace FancyCamera {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera.Companion>;
						public setForceV1(param0: boolean): void;
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
						public setRotation(param0: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
						public setWidth(param0: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
						public setHeight(param0: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
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
						public static getType(param0: io.github.triniwiz.fancycamera.ImageProcessor<any>): number;
						public static process(param0: io.github.triniwiz.fancycamera.ImageProcessor<any>, param1: globalAndroid.graphics.Bitmap, param2: number): java.util.concurrent.FutureTask<any>;
						public static process(param0: io.github.triniwiz.fancycamera.ImageProcessor<any>, param1: androidNative.Array<number>, param2: number, param3: number, param4: number, param5: number): java.util.concurrent.FutureTask<any>;
						public static process(param0: io.github.triniwiz.fancycamera.ImageProcessor<any>, param1: globalAndroid.media.Image, param2: number): java.util.concurrent.FutureTask<any>;
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
					public static process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: java.util.List<any>, param6: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public constructor();
					public static processImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: java.util.List<any>, param3: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
				}
				export namespace ML {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.ML.Companion>;
						public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: java.util.List<any>, param6: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
						public processImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: java.util.List<any>, param3: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
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
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.Quality;
				}
				export namespace Quality {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.Quality;
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
					public constructor(param0: number, param1: number);
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
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.WhiteBalance>;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.WhiteBalance;
				}
			}
		}
	}
}

//Generics information:
//io.github.triniwiz.fancycamera.ImageProcessor:1

