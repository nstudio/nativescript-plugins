/// <reference path="android-declarations.d.ts"/>

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class BuildConfig {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Camera extends io.github.triniwiz.fancycamera.CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera>;
					public getDisplayRatio(): string;
					public cameraRecording(): boolean;
					public setMaxVideoFrameRate(param0: number): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public isStarted(): boolean;
					public startPreview(): void;
					public getMaxAudioBitRate(): number;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setAutoSquareCrop(param0: boolean): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public setForceStopping(param0: boolean): void;
					public getSupportedRatios(): native.Array<string>;
					public isForceStopping(): boolean;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getAutoSquareCrop(): boolean;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public isRecording(): boolean;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
					public setCamera(param0: globalAndroid.hardware.Camera): void;
					public getNumberOfCameras(): number;
					public setZoom(param0: number): void;
					public release(): void;
					public getLock(): any;
					public setLock(param0: any): void;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public stop(): void;
					public isAudioLevelsEnabled(): boolean;
					public setMaxVideoBitrate(param0: number): void;
					public setRecording(param0: boolean): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public setStarted(param0: boolean): void;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public setPictureSize(param0: string): void;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getMaxVideoBitrate(): number;
					public getAvailablePictureSizes(param0: string): native.Array<io.github.triniwiz.fancycamera.Size>;
					public getCamera(): globalAndroid.hardware.Camera;
					public takePhoto(): void;
					public getMaxVideoFrameRate(): number;
					public getAmplitude(): number;
					public getZoom(): number;
					public setAutoFocus(param0: boolean): void;
					public setDisplayRatio(param0: string): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public toggleCamera(): void;
					public stopRecording(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setMaxAudioBitRate(param0: number): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public getDb(): number;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
				}
				export module Camera {
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Camera2 extends io.github.triniwiz.fancycamera.CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2>;
					public getDisplayRatio(): string;
					public cameraRecording(): boolean;
					public onSurfaceRequested(param0: androidx.camera.core.SurfaceRequest): void;
					public setMaxVideoFrameRate(param0: number): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public getMaxAudioBitRate(): number;
					public startPreview(): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setAutoSquareCrop(param0: boolean): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public getSupportedRatios(): native.Array<string>;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getAutoSquareCrop(): boolean;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
					public getNumberOfCameras(): number;
					public setZoom(param0: number): void;
					public release(): void;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public setAmplitude(param0: number): void;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public setAmplitudeEMA(param0: number): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public setPictureSize(param0: string): void;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public setDb(param0: number): void;
					public getMaxVideoBitrate(): number;
					public getAvailablePictureSizes(param0: string): native.Array<io.github.triniwiz.fancycamera.Size>;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public getAmplitude(): number;
					public getZoom(): number;
					public setAutoFocus(param0: boolean): void;
					public setDisplayRatio(param0: string): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public toggleCamera(): void;
					public stopRecording(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setMaxAudioBitRate(param0: number): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public getDb(): number;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
				}
				export module Camera2 {
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export abstract class CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase>;
					public static Companion: io.github.triniwiz.fancycamera.CameraBase.Companion;
					public setFaceDetectionOptions(param0: any): void;
					public setMTimerTask$fancycamera_release(param0: java.util.TimerTask): void;
					public getListener$fancycamera_release(): io.github.triniwiz.fancycamera.CameraEventListener;
					public getCurrentOrientation$fancycamera_release(): number;
					public setMaxVideoFrameRate(param0: number): void;
					public isObjectDetectionSupported$fancycamera_release(): boolean;
					public getAutoFocus(): boolean;
					public setOnTextRecognitionListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public startPreview(): void;
					public isMLSupported$fancycamera_release(): boolean;
					public getDATETIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public isFaceDetectionSupported$fancycamera_release(): boolean;
					public setAutoSquareCrop(param0: boolean): void;
					public getSupportedRatios(): native.Array<string>;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getSaveToGallery(): boolean;
					public setGettingAudioLevels$fancycamera_release(param0: boolean): void;
					public stringSizeToSize$fancycamera_release(param0: string): io.github.triniwiz.fancycamera.Size;
					public getImageLabelingOptions$fancycamera_release(): any;
					public setOnObjectDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setOnFacesDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public hasCameraPermission(): boolean;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public getDATE_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public getAnalysisExecutor$fancycamera_release(): java.util.concurrent.ExecutorService;
					public getObjectDetectionOptions$fancycamera_release(): any;
					public setImageLabelingSupported$fancycamera_release(param0: boolean): void;
					public getOnTextRecognitionListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getMDuration$fancycamera_release(): number;
					public setOnTextRecognitionListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setFaceDetectionSupported$fancycamera_release(param0: boolean): void;
					public setBarcodeScannerOptions$fancycamera_release(param0: any): void;
					public getMainHandler$fancycamera_release(): globalAndroid.os.Handler;
					public getOnBarcodeScanningListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public setAnalysisExecutor$fancycamera_release(param0: java.util.concurrent.ExecutorService): void;
					public startDurationTimer$fancycamera_release(): void;
					public stopDurationTimer$fancycamera_release(): void;
					public getDuration(): number;
					public requestAudioPermission(): void;
					public hasAudioPermission(): boolean;
					public getMaxVideoBitrate(): number;
					public isBarcodeScanningSupported$fancycamera_release(): boolean;
					public getOnPoseDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getFaceDetectionOptions$fancycamera_release(): any;
					public getAvailablePictureSizes(param0: string): native.Array<io.github.triniwiz.fancycamera.Size>;
					public getMTimerTask$fancycamera_release(): java.util.TimerTask;
					public setRecorder$fancycamera_release(param0: globalAndroid.media.MediaRecorder): void;
					public setTextRecognitionSupported$fancycamera_release(param0: boolean): void;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public getRecorder$fancycamera_release(): globalAndroid.media.MediaRecorder;
					public setAutoFocus(param0: boolean): void;
					public convertToExifDateTime$fancycamera_release(param0: number): string;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public setImageLabelingOptions(param0: any): void;
					public initListener$fancycamera_release(param0: globalAndroid.media.MediaRecorder): void;
					public getVIDEO_RECORDER_PERMISSIONS_REQUEST$fancycamera_release(): number;
					public stopRecording(): void;
					public getOnFacesDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getVIDEO_RECORDER_PERMISSIONS$fancycamera_release(): native.Array<string>;
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setonSurfaceUpdateListener(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public setMaxAudioBitRate(param0: number): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public getDb(): number;
					public setBarcodeScannerOptions(param0: any): void;
					public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
					public setOnSurfaceUpdateListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public getBarcodeScannerOptions$fancycamera_release(): any;
					public cameraRecording(): boolean;
					public getDisplayRatio(): string;
					public isImageLabelingSupported$fancycamera_release(): boolean;
					public deInitListener$fancycamera_release(): void;
					public getDisableHEVC(): boolean;
					public requestCameraPermission(): void;
					public getMaxAudioBitRate(): number;
					public setObjectDetectionOptions$fancycamera_release(param0: any): void;
					public getTIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public hasStoragePermission(): boolean;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public setOnFacesDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setMTimer$fancycamera_release(param0: java.util.Timer): void;
					public getAutoSquareCrop(): boolean;
					public getPictureSize(): string;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public detectSupport$fancycamera_release(): void;
					public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
					public setObjectDetectionSupported$fancycamera_release(param0: boolean): void;
					public getNumberOfCameras(): number;
					public setOnImageLabelingListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setZoom(param0: number): void;
					public requestPermission(): void;
					public release(): void;
					public isGettingAudioLevels$fancycamera_release(): boolean;
					public setCurrentOrientation$fancycamera_release(param0: number): void;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setPoseDetectionSupported$fancycamera_release(param0: boolean): void;
					public setMaxVideoBitrate(param0: number): void;
					public setListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.CameraEventListener): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public getOnObjectDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public getMTimer$fancycamera_release(): java.util.Timer;
					public setObjectDetectionOptions(param0: any): void;
					public setPictureSize(param0: string): void;
					public setOnPoseDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getOnImageLabelingListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public setOnObjectDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setImageLabelingOptions$fancycamera_release(param0: any): void;
					public getOnSurfaceUpdateListener$fancycamera_release(): io.github.triniwiz.fancycamera.SurfaceUpdateListener;
					public convertFromExifDateTime$fancycamera_release(param0: string): java.util.Date;
					public hasPermission(): boolean;
					public isPoseDetectionSupported$fancycamera_release(): boolean;
					public getCamcorderProfile$fancycamera_release(param0: io.github.triniwiz.fancycamera.Quality): globalAndroid.media.CamcorderProfile;
					public getAmplitude(): number;
					public getZoom(): number;
					public setDisplayRatio(param0: string): void;
					public requestStoragePermission(): void;
					public toggleCamera(): void;
					public setOnBarcodeScanningListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setOnPoseDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setMDuration$fancycamera_release(param0: number): void;
					public setOnBarcodeScanningListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setBarcodeScanningSupported$fancycamera_release(param0: boolean): void;
					public setOnImageLabelingListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setFaceDetectionOptions$fancycamera_release(param0: any): void;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public isTextRecognitionSupported$fancycamera_release(): boolean;
				}
				export module CameraBase {
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

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class CameraEventListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListener>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.CameraEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onReady(): void; onCameraOpen(): void; onCameraClose(): void; onCameraPhoto(param0: java.io.File): void; onCameraVideo(param0: java.io.File): void; onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void; onCameraError(param0: string, param1: java.lang.Exception): void; onCameraVideoStart(): void });
					public constructor();
					public onCameraOpen(): void;
					public onCameraClose(): void;
					public onCameraVideo(param0: java.io.File): void;
					public onCameraVideoStart(): void;
					public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onReady(): void;
					public onCameraError(param0: string, param1: java.lang.Exception): void;
					public onCameraPhoto(param0: java.io.File): void;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export abstract class CameraEventListenerUI extends io.github.triniwiz.fancycamera.CameraEventListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI>;
					public static Companion: io.github.triniwiz.fancycamera.CameraEventListenerUI.Companion;
					public onCameraOpenUI(): void;
					public onCameraClose(): void;
					public onCameraVideoUI(param0: java.io.File): void;
					public onCameraError(param0: string, param1: java.lang.Exception): void;
					public onCameraErrorUI(param0: string, param1: java.lang.Exception): void;
					public onCameraPhoto(param0: java.io.File): void;
					public onCameraVideoStartUI(): void;
					public onReadyUI(): void;
					public onCameraOpen(): void;
					public onCameraVideo(param0: java.io.File): void;
					public onCameraVideoStart(): void;
					public onCameraCloseUI(): void;
					public constructor();
					public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onReady(): void;
					public onCameraPhotoUI(param0: java.io.File): void;
					public onCameraAnalysisUI(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
				}
				export module CameraEventListenerUI {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI.Companion>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class CameraFlashMode {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode>;
					public static OFF: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static ON: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static AUTO: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static RED_EYE: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static TORCH: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static Companion: io.github.triniwiz.fancycamera.CameraFlashMode.Companion;
					public static values(): native.Array<io.github.triniwiz.fancycamera.CameraFlashMode>;
					public getValue(): number;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraFlashMode;
				}
				export module CameraFlashMode {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraFlashMode;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class CameraOrientation {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation>;
					public static UNKNOWN: io.github.triniwiz.fancycamera.CameraOrientation;
					public static PORTRAIT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static PORTRAIT_UPSIDE_DOWN: io.github.triniwiz.fancycamera.CameraOrientation;
					public static LANDSCAPE_LEFT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static LANDSCAPE_RIGHT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static Companion: io.github.triniwiz.fancycamera.CameraOrientation.Companion;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraOrientation;
					public static values(): native.Array<io.github.triniwiz.fancycamera.CameraOrientation>;
					public getValue(): number;
				}
				export module CameraOrientation {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraOrientation;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class CameraPosition {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition>;
					public static BACK: io.github.triniwiz.fancycamera.CameraPosition;
					public static FRONT: io.github.triniwiz.fancycamera.CameraPosition;
					public static Companion: io.github.triniwiz.fancycamera.CameraPosition.Companion;
					public getValue(): number;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraPosition;
					public static values(): native.Array<io.github.triniwiz.fancycamera.CameraPosition>;
				}
				export module CameraPosition {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraPosition;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
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
					public static None: io.github.triniwiz.fancycamera.DetectorType;
					public toString(): string;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.DetectorType;
					public static values(): native.Array<io.github.triniwiz.fancycamera.DetectorType>;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Event {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Event>;
					public getType(): io.github.triniwiz.fancycamera.EventType;
					public getMessage(): string;
					public getFile(): java.io.File;
					public constructor(param0: io.github.triniwiz.fancycamera.EventType, param1: java.io.File, param2: string);
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class EventType {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.EventType>;
					public static Photo: io.github.triniwiz.fancycamera.EventType;
					public static Video: io.github.triniwiz.fancycamera.EventType;
					public static values(): native.Array<io.github.triniwiz.fancycamera.EventType>;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.EventType;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class FancyCamera extends globalAndroid.view.View {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera>;
					public static Companion: io.github.triniwiz.fancycamera.FancyCamera.Companion;
					public getGetSupportedRatios(): native.Array<string>;
					public setMaxVideoFrameRate(param0: number): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public setCameraOrientation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public setOnTextRecognitionListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public requestCameraPermission(): void;
					public getMaxAudioBitRate(): number;
					public startPreview(): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public setListener(param0: io.github.triniwiz.fancycamera.CameraEventListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public hasStoragePermission(): boolean;
					public setAutoSquareCrop(param0: boolean): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public getAutoSquareCrop(): boolean;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
					public getNumberOfCameras(): number;
					public setOnObjectDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public static getForceV1(): boolean;
					public setZoom(param0: number): void;
					public setOnFacesDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public requestPermission(): void;
					public release(): void;
					public hasCameraPermission(): boolean;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public getRatio(): string;
					public stopPreview(): void;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public setPictureSize(param0: string): void;
					public hasPermission(): boolean;
					public getDuration(): number;
					public requestAudioPermission(): void;
					public hasAudioPermission(): boolean;
					public getMaxVideoBitrate(): number;
					public getAvailablePictureSizes(param0: string): native.Array<io.github.triniwiz.fancycamera.Size>;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public getZoom(): number;
					public setAutoFocus(param0: boolean): void;
					public requestStoragePermission(): void;
					public getCameraOrientation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public setRatio(param0: string): void;
					public setOnBarcodeScanningListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public toggleCamera(): void;
					public stopRecording(): void;
					public setOnPoseDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public constructor(param0: globalAndroid.content.Context);
					public setonSurfaceUpdateListener(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public onPermissionHandler(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public setMaxAudioBitRate(param0: number): void;
					public getHasFlash(): boolean;
					public getDb(): number;
					public setEnableAudioLevels(param0: boolean): void;
					public setOnImageLabelingListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public static setForceV1(param0: boolean): void;
					public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
				}
				export module FancyCamera {
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

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class ImageAnalysis {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysis>;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class ImageAnalysisCallback {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysisCallback>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.ImageAnalysisCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onSuccess(param0: string): void; onError(param0: string, param1: java.lang.Exception): void });
					public constructor();
					public onSuccess(param0: string): void;
					public onError(param0: string, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Quality {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality>;
					public static MAX_480P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_720P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_1080P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_2160P: io.github.triniwiz.fancycamera.Quality;
					public static HIGHEST: io.github.triniwiz.fancycamera.Quality;
					public static LOWEST: io.github.triniwiz.fancycamera.Quality;
					public static QVGA: io.github.triniwiz.fancycamera.Quality;
					public static Companion: io.github.triniwiz.fancycamera.Quality.Companion;
					public getValue(): number;
					public static values(): native.Array<io.github.triniwiz.fancycamera.Quality>;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.Quality;
				}
				export module Quality {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.Quality;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
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

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class SurfaceUpdateListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.SurfaceUpdateListener>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.SurfaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onUpdate(): void });
					public constructor();
					public onUpdate(): void;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
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
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.WhiteBalance;
					public static values(): native.Array<io.github.triniwiz.fancycamera.WhiteBalance>;
				}
			}
		}
	}
}