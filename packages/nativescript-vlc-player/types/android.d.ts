declare module org {
	export module videolan {
		export class BuildConfig {
			public static class: java.lang.Class<org.videolan.BuildConfig>;
			public static DEBUG: boolean = 0;
			public static LIBRARY_PACKAGE_NAME: string = 'org.videolan';
			public static BUILD_TYPE: string = 'release';
			public constructor();
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class AWindow extends org.videolan.libvlc.interfaces.IVLCVout {
				public static class: java.lang.Class<org.videolan.libvlc.AWindow>;
				public attachViews(): void;
				public setSubtitlesSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
				public setVideoView(videoSurfaceView: globalAndroid.view.SurfaceView): void;
				public constructor(surfaceCallback: org.videolan.libvlc.AWindow.SurfaceCallback);
				public setSubtitlesSurface(subtitlesSurface: globalAndroid.view.Surface, surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				public attachViews(id: org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener): void;
				public setSubtitlesSurface(param0: globalAndroid.view.Surface, param1: globalAndroid.view.SurfaceHolder): void;
				public addCallback(param0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
				public attachViews(param0: org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener): void;
				public sendMouseEvent(param0: number, param1: number, param2: number, param3: number): void;
				public setVideoSurface(videoSurface: globalAndroid.view.Surface, surfaceHolder: globalAndroid.view.SurfaceHolder): void;
				public setVideoView(param0: globalAndroid.view.SurfaceView): void;
				public setVideoSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
				public setWindowSize(param0: number, param1: number): void;
				public setVideoSurface(param0: globalAndroid.view.Surface, param1: globalAndroid.view.SurfaceHolder): void;
				public areViewsAttached(): boolean;
				public addCallback(callback: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
				public removeCallback(callback: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
				public sendMouseEvent(action: number, button: number, x: number, y: number): void;
				public setSubtitlesView(param0: globalAndroid.view.SurfaceView): void;
				public setVideoView(videoTextureView: globalAndroid.view.TextureView): void;
				public setSubtitlesSurface(subtitlesSurfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				public detachViews(): void;
				public setSubtitlesView(param0: globalAndroid.view.TextureView): void;
				public removeCallback(param0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
				public setWindowSize(width: number, height: number): void;
				public setSubtitlesView(subtitlesTextureView: globalAndroid.view.TextureView): void;
				public setVideoSurface(videoSurfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				public setSubtitlesView(subtitlesSurfaceView: globalAndroid.view.SurfaceView): void;
				public setVideoView(param0: globalAndroid.view.TextureView): void;
			}
			export module AWindow {
				export class NativeLock {
					public static class: java.lang.Class<org.videolan.libvlc.AWindow.NativeLock>;
				}
				export class SurfaceCallback {
					public static class: java.lang.Class<org.videolan.libvlc.AWindow.SurfaceCallback>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.AWindow$SurfaceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onSurfacesCreated(param0: org.videolan.libvlc.AWindow): void; onSurfacesDestroyed(param0: org.videolan.libvlc.AWindow): void });
					public constructor();
					public onSurfacesDestroyed(param0: org.videolan.libvlc.AWindow): void;
					public onSurfacesCreated(param0: org.videolan.libvlc.AWindow): void;
				}
				export class SurfaceHelper {
					public static class: java.lang.Class<org.videolan.libvlc.AWindow.SurfaceHelper>;
					public isReady(): boolean;
					public attach(): void;
					public release(): void;
					public getSurface(): globalAndroid.view.Surface;
				}
				export class SurfaceTextureThread {
					public static class: java.lang.Class<org.videolan.libvlc.AWindow.SurfaceTextureThread>;
					public run(): void;
					public onFrameAvailable(surfaceTexture: globalAndroid.graphics.SurfaceTexture): void;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export abstract class Dialog {
				public static class: java.lang.Class<org.videolan.libvlc.Dialog>;
				public static TYPE_ERROR: number = 0;
				public static TYPE_LOGIN: number = 1;
				public static TYPE_QUESTION: number = 2;
				public static TYPE_PROGRESS: number = 3;
				public mType: number;
				public mText: string;
				public constructor(type: number, title: string, text: string);
				public getType(): number;
				public setContext(context: any): void;
				public static setCallbacks(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, callbacks: org.videolan.libvlc.Dialog.Callbacks): void;
				public dismiss(): void;
				public getTitle(): string;
				public getContext(): any;
				public getText(): string;
			}
			export module Dialog {
				export class Callbacks {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.Callbacks>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.Dialog$Callbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onDisplay(param0: org.videolan.libvlc.Dialog.ErrorMessage): void; onDisplay(param0: org.videolan.libvlc.Dialog.LoginDialog): void; onDisplay(param0: org.videolan.libvlc.Dialog.QuestionDialog): void; onDisplay(param0: org.videolan.libvlc.Dialog.ProgressDialog): void; onCanceled(param0: org.videolan.libvlc.Dialog): void; onProgressUpdate(param0: org.videolan.libvlc.Dialog.ProgressDialog): void });
					public constructor();
					public onDisplay(param0: org.videolan.libvlc.Dialog.QuestionDialog): void;
					public onDisplay(param0: org.videolan.libvlc.Dialog.ErrorMessage): void;
					public onProgressUpdate(param0: org.videolan.libvlc.Dialog.ProgressDialog): void;
					public onDisplay(param0: org.videolan.libvlc.Dialog.LoginDialog): void;
					public onDisplay(param0: org.videolan.libvlc.Dialog.ProgressDialog): void;
					public onCanceled(param0: org.videolan.libvlc.Dialog): void;
				}
				export class ErrorMessage extends org.videolan.libvlc.Dialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.ErrorMessage>;
				}
				export abstract class IdDialog extends org.videolan.libvlc.Dialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.IdDialog>;
					public mId: number;
					public constructor(id: number, type: number, title: string, text: string);
					public dismiss(): void;
					public constructor(type: number, title: string, text: string);
				}
				export class LoginDialog extends org.videolan.libvlc.Dialog.IdDialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.LoginDialog>;
					public getDefaultUsername(): string;
					public asksStore(): boolean;
					public postLogin(username: string, password: string, store: boolean): void;
				}
				export class ProgressDialog extends org.videolan.libvlc.Dialog.IdDialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.ProgressDialog>;
					public getCancelText(): string;
					public isIndeterminate(): boolean;
					public isCancelable(): boolean;
					public getPosition(): number;
				}
				export class QuestionDialog extends org.videolan.libvlc.Dialog.IdDialog {
					public static class: java.lang.Class<org.videolan.libvlc.Dialog.QuestionDialog>;
					public static TYPE_NORMAL: number = 0;
					public static TYPE_WARNING: number = 1;
					public static TYPE_ERROR: number = 2;
					public getQuestionType(): number;
					public getAction1Text(): string;
					public getCancelText(): string;
					public postAction(action: number): void;
					public getAction2Text(): string;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class FactoryManager {
				public static class: java.lang.Class<org.videolan.libvlc.FactoryManager>;
				public static registerFactory(factoryId: string, factory: org.videolan.libvlc.interfaces.IComponentFactory): void;
				public static getFactory(factoryId: string): org.videolan.libvlc.interfaces.IComponentFactory;
				public constructor();
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class LibVLC extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.interfaces.ILibVLC.Event> implements org.videolan.libvlc.interfaces.ILibVLC {
				public static class: java.lang.Class<org.videolan.libvlc.LibVLC>;
				public release(): void;
				public static loadLibraries(): void;
				public constructor(context: globalAndroid.content.Context);
				public static version(): string;
				public getAppContext(): globalAndroid.content.Context;
				public static compiler(): string;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public isReleased(): boolean;
				public constructor();
				public static majorVersion(): number;
				public onReleaseNative(): void;
				public static changeset(): string;
				public retain(): boolean;
				public setUserAgent(name: string, http: string): void;
				public onEventNative(param0: number, param1: number, param2: number, param3: number, param4: string): any;
				public constructor(context: globalAndroid.content.Context, options: java.util.List<string>);
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
				public onEventNative(eventType: number, arg1: number, arg2: number, argf1: number, args1: string): org.videolan.libvlc.interfaces.ILibVLC.Event;
			}
			export module LibVLC {
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.LibVLC.Event>;
					public constructor(type: number, argf: number);
					public constructor(type: number);
					public constructor(type: number, arg1: number);
					public constructor(type: number, arg1: number, args1: string);
					public constructor(type: number, arg1: number, arg2: number);
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class LibVLCFactory extends org.videolan.libvlc.interfaces.ILibVLCFactory {
				public static class: java.lang.Class<org.videolan.libvlc.LibVLCFactory>;
				public getFromOptions(context: globalAndroid.content.Context, options: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
				public getFromOptions(param0: globalAndroid.content.Context, param1: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
				public getFromContext(context: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
				public getFromContext(param0: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
				public constructor();
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class Media extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.interfaces.IMedia.Event> implements org.videolan.libvlc.interfaces.IMedia {
				public static class: java.lang.Class<org.videolan.libvlc.Media>;
				public getType(): number;
				public addOption(option: string): void;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public onEventNative(this_: number, eventType: number, arg1: number, arg2: number, argf1: string): org.videolan.libvlc.interfaces.IMedia.Event;
				public constructor();
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, path: string);
				public getUri(): globalAndroid.net.Uri;
				public onEventNative(param0: number, param1: number, param2: number, param3: number, param4: string): any;
				public parse(): boolean;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
				public addOption(param0: string): void;
				public getSlaves(): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Slave>;
				public clearSlaves(): void;
				public getMeta(param0: number, param1: boolean): string;
				public isParsed(): boolean;
				public parseAsync(): boolean;
				public constructor(ml: org.videolan.libvlc.interfaces.IMediaList, index: number);
				public setHWDecoderEnabled(param0: boolean, param1: boolean): void;
				public parse(flags: number): boolean;
				public getMeta(id: number, force: boolean): string;
				public setDefaultMediaPlayerOptions(): void;
				public getMeta(id: number): string;
				public getDuration(): number;
				public getTracks(type: number): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
				public onReleaseNative(): void;
				public setHWDecoderEnabled(enabled: boolean, force: boolean): void;
				public parseAsync(flags: number): boolean;
				public addSlave(slave: org.videolan.libvlc.interfaces.IMedia.Slave): void;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, uri: globalAndroid.net.Uri);
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, afd: globalAndroid.content.res.AssetFileDescriptor);
				public setEventListener(listener: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
				public subItems(): org.videolan.libvlc.interfaces.IMediaList;
				public parse(param0: number): boolean;
				public setEventListener(param0: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
				public release(): void;
				public getTracks(): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
				public getTracks(param0: number): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
				public parseAsync(param0: number, param1: number): boolean;
				public parseAsync(param0: number): boolean;
				public isReleased(): boolean;
				public getStats(): org.videolan.libvlc.interfaces.IMedia.Stats;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, fd: java.io.FileDescriptor);
				public getMeta(param0: number): string;
				public retain(): boolean;
				public parseAsync(flags: number, timeout: number): boolean;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public addSlave(param0: org.videolan.libvlc.interfaces.IMedia.Slave): void;
				public subItems(): org.videolan.libvlc.MediaList;
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class MediaDiscoverer extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.MediaDiscoverer.Event> {
				public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer>;
				public onEventNative(eventType: number, arg1: number, arg2: number, argf1: number, args1: string): org.videolan.libvlc.MediaDiscoverer.Event;
				public release(): void;
				public static list(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, category: number): androidNative.Array<org.videolan.libvlc.MediaDiscoverer.Description>;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, name: string);
				public isReleased(): boolean;
				public getMediaList(): org.videolan.libvlc.MediaList;
				public constructor();
				public onReleaseNative(): void;
				public stop(): void;
				public setEventListener(listener: org.videolan.libvlc.MediaDiscoverer.EventListener): void;
				public retain(): boolean;
				public start(): boolean;
				public onEventNative(param0: number, param1: number, param2: number, param3: number, param4: string): any;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
			}
			export module MediaDiscoverer {
				export class Description {
					public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer.Description>;
					public name: string;
					public longName: string;
					public category: number;
				}
				export module Description {
					export class Category {
						public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer.Description.Category>;
						public static Devices: number = 0;
						public static Lan: number = 1;
						public static Podcasts: number = 2;
						public static LocalDirs: number = 3;
						public constructor();
					}
				}
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer.Event>;
					public static Started: number = 1280;
					public static Ended: number = 1281;
					public constructor(type: number, argf: number);
					public constructor(type: number);
					public constructor(type: number, arg1: number);
					public constructor(type: number, arg1: number, args1: string);
					public constructor(type: number, arg1: number, arg2: number);
				}
				export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.MediaDiscoverer.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.MediaDiscoverer.EventListener>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.MediaDiscoverer$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onEvent(param0: any): void });
					public constructor();
					public onEvent(param0: any): void;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class MediaFactory extends org.videolan.libvlc.interfaces.IMediaFactory {
				public static class: java.lang.Class<org.videolan.libvlc.MediaFactory>;
				public getFromFileDescriptor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, fd: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
				public getFromLocalPath(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: string): org.videolan.libvlc.interfaces.IMedia;
				public getFromUri(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, uri: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
				public getFromUri(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
				public getFromAssetFileDescriptor(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
				public constructor();
				public getFromLocalPath(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, path: string): org.videolan.libvlc.interfaces.IMedia;
				public getFromAssetFileDescriptor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, assetFileDescriptor: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
				public getFromFileDescriptor(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class MediaList extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.interfaces.IMediaList.Event> implements org.videolan.libvlc.interfaces.IMediaList {
				public static class: java.lang.Class<org.videolan.libvlc.MediaList>;
				public release(): void;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public setEventListener(listener: org.videolan.libvlc.interfaces.IMediaList.EventListener, handler: globalAndroid.os.Handler): void;
				public getCount(): number;
				public isReleased(): boolean;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC);
				public getMediaAt(param0: number): org.videolan.libvlc.interfaces.IMedia;
				public constructor();
				public onReleaseNative(): void;
				public constructor(m: org.videolan.libvlc.interfaces.IMedia);
				public retain(): boolean;
				public onEventNative(param0: number, param1: number, param2: number, param3: number, param4: string): any;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public onEventNative(index: number, media: number, index: number, this_: number, eventType: string): org.videolan.libvlc.interfaces.IMediaList.Event;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
				public constructor(md: org.videolan.libvlc.MediaDiscoverer);
				public isLocked(): boolean;
				public setEventListener(param0: org.videolan.libvlc.interfaces.IMediaList.EventListener, param1: globalAndroid.os.Handler): void;
				public getMediaAt(index: number): org.videolan.libvlc.interfaces.IMedia;
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class MediaPlayer extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.MediaPlayer.Event> {
				public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer>;
				public static SURFACE_SCALES_COUNT: number;
				public getAspectRatio(): string;
				public hasMedia(): boolean;
				public record(directory: string): boolean;
				public getChapter(): number;
				public setAudioOutput(aout: string): boolean;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public getTrackFromID(id: string): org.videolan.libvlc.interfaces.IMedia.Track;
				public setAspectRatio(aspect: string): void;
				public getSelectedTracks(type: number): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
				public setVideoTrackEnabled(this_: boolean): void;
				public getRate(): number;
				public constructor();
				public setMedia(media: org.videolan.libvlc.interfaces.IMedia): void;
				public getSpuDelay(): number;
				public setEventListener(listener: org.videolan.libvlc.MediaPlayer.EventListener): void;
				public play(afd: globalAndroid.content.res.AssetFileDescriptor): void;
				public navigate(param0: number): void;
				public setNativeScale(scale: number): void;
				public setTitle(param0: number): void;
				public onEventNative(param0: number, param1: number, param2: number, param3: number, param4: string): any;
				public setAudioDelay(delay: number): boolean;
				public getTeletextTransparency(): boolean;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
				public selectTracks(type: number, ids: string): void;
				public setChapter(param0: number): void;
				public setVideoScale(type: org.videolan.libvlc.MediaPlayer.ScaleType): void;
				public detachViews(): void;
				public setTeletext(page: number): void;
				public setPosition(pos: number, fast: boolean): void;
				public playAsset(context: globalAndroid.content.Context, assetFilename: string): void;
				public setAudioDigitalOutputEnabled(enabled: boolean): boolean;
				public getVolume(): number;
				public constructor(media: org.videolan.libvlc.interfaces.IMedia);
				public setScale(scale: number): void;
				public updateViewpoint(yaw: number, pitch: number, roll: number, fov: number, absolute: boolean): boolean;
				public setEqualizer(equalizer: org.videolan.libvlc.MediaPlayer.Equalizer): boolean;
				public isSeekable(): boolean;
				public nativeSetTime(param0: number, param1: boolean): number;
				public setRenderer(item: org.videolan.libvlc.RendererItem): number;
				public setVideoTitleDisplay(position: number, timeout: number): void;
				public useOrientationFromBounds(): java.lang.Boolean;
				public getPlayerState(): number;
				public setPosition(pos: number): void;
				public onEventNative(eventType: number, arg1: number, arg2: number, argf1: number, args1: string): org.videolan.libvlc.MediaPlayer.Event;
				public getTitle(): number;
				public getMedia(): org.videolan.libvlc.interfaces.IMedia;
				public setTime(time: number, fast: boolean): number;
				public setTime(time: number): number;
				public getScale(): number;
				public getChapters(title: number): androidNative.Array<org.videolan.libvlc.MediaPlayer.Chapter>;
				public getTracks(type: number): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
				public getPosition(): number;
				public setRate(param0: number): void;
				public setTeletextTransparency(transparent: boolean): void;
				public play(uri: globalAndroid.net.Uri): void;
				public onReleaseNative(): void;
				public unselectTrackType(type: number): void;
				public getVideoScale(): org.videolan.libvlc.MediaPlayer.ScaleType;
				public play(path: string): void;
				public setUseOrientationFromBounds(mUseOrientationFromBounds: java.lang.Boolean): void;
				public getSelectedTrack(type: number): org.videolan.libvlc.interfaces.IMedia.Track;
				public getAudioDelay(): number;
				public addSlave(type: number, path: string, select: boolean): boolean;
				public getTitles(): androidNative.Array<org.videolan.libvlc.MediaPlayer.Title>;
				public setSpuDelay(delay: number): boolean;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public addSlave(type: number, uri: globalAndroid.net.Uri, select: boolean): boolean;
				public getVLCVout(): org.videolan.libvlc.interfaces.IVLCVout;
				public release(): void;
				public play(): void;
				public isPlaying(): boolean;
				public pause(): void;
				public forceAudioDigitalEncodings(this_: androidNative.Array<number>): boolean;
				public nextChapter(): number;
				public nativeSetPosition(param0: number, param1: boolean): void;
				public isReleased(): boolean;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC);
				public attachViews(surfaceFrame: org.videolan.libvlc.util.VLCVideoLayout, dm: org.videolan.libvlc.util.DisplayManager, subtitles: boolean, textureView: boolean): void;
				public getTime(): number;
				public getLength(): number;
				public play(media: org.videolan.libvlc.interfaces.IMedia): void;
				public previousChapter(): number;
				public stop(): void;
				public selectTrack(id: string): boolean;
				public retain(): boolean;
				public getTeletext(): number;
				public setVolume(param0: number): number;
				public canDoPassthrough(): boolean;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public updateVideoSurfaces(): void;
				public setAudioOutputDevice(id: string): boolean;
			}
			export module MediaPlayer {
				export class Chapter {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Chapter>;
					public timeOffset: number;
					public duration: number;
					public name: string;
				}
				export class Equalizer {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Equalizer>;
					public setAmp(index: number, amp: number): boolean;
					public static getPresetName(index: number): string;
					public static getBandFrequency(index: number): number;
					public finalize(): void;
					public static create(): org.videolan.libvlc.MediaPlayer.Equalizer;
					public static getPresetCount(): number;
					public setPreAmp(preamp: number): boolean;
					public static createFromPreset(index: number): org.videolan.libvlc.MediaPlayer.Equalizer;
					public static getBandCount(): number;
					public getPreAmp(): number;
					public getAmp(index: number): number;
				}
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Event>;
					public static MediaChanged: number = 256;
					public static Opening: number = 258;
					public static Buffering: number = 259;
					public static Playing: number = 260;
					public static Paused: number = 261;
					public static Stopped: number = 262;
					public static EndReached: number = 265;
					public static EncounteredError: number = 266;
					public static TimeChanged: number = 267;
					public static PositionChanged: number = 268;
					public static SeekableChanged: number = 269;
					public static PausableChanged: number = 270;
					public static LengthChanged: number = 273;
					public static Vout: number = 274;
					public static ESAdded: number = 276;
					public static ESDeleted: number = 277;
					public static ESSelected: number = 278;
					public static RecordChanged: number = 286;
					public getBuffering(): number;
					public getEsChangedID(): number;
					public getRecordPath(): string;
					public getPausable(): boolean;
					public constructor(type: number, arg1: number, args1: string);
					public getRecording(): boolean;
					public constructor(type: number, arg1: number, arg2: number);
					public constructor(type: number, argf: number);
					public constructor(type: number);
					public getPositionChanged(): number;
					public getEsChangedType(): number;
					public constructor(type: number, arg1: number);
					public getTimeChanged(): number;
					public getSeekable(): boolean;
					public getLengthChanged(): number;
					public getVoutCount(): number;
				}
				export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.MediaPlayer.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.EventListener>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.MediaPlayer$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onEvent(param0: any): void });
					public constructor();
					public onEvent(param0: any): void;
				}
				export class Navigate {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Navigate>;
					public static Activate: number = 0;
					public static Up: number = 1;
					public static Down: number = 2;
					public static Left: number = 3;
					public static Right: number = 4;
					public constructor();
				}
				export class Position {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Position>;
					public static Disable: number = -1;
					public static Center: number = 0;
					public static Left: number = 1;
					public static Right: number = 2;
					public static Top: number = 3;
					public static TopLeft: number = 4;
					public static TopRight: number = 5;
					public static Bottom: number = 6;
					public static BottomLeft: number = 7;
					public static BottomRight: number = 8;
					public constructor();
				}
				export class ScaleType {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.ScaleType>;
					public static SURFACE_BEST_FIT: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_FIT_SCREEN: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_FILL: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_16_9: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_4_3: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_16_10: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_221_1: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_235_1: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_239_1: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_5_4: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static SURFACE_ORIGINAL: org.videolan.libvlc.MediaPlayer.ScaleType;
					public static values(): androidNative.Array<org.videolan.libvlc.MediaPlayer.ScaleType>;
					public static valueOf(name: string): org.videolan.libvlc.MediaPlayer.ScaleType;
					public getRatio(): java.lang.Float;
					public static getMainScaleTypes(): androidNative.Array<org.videolan.libvlc.MediaPlayer.ScaleType>;
				}
				export class Title {
					public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Title>;
					public duration: number;
					public name: string;
					public isInteractive(): boolean;
					public constructor(duration: number, name: string, flags: number);
					public isMenu(): boolean;
				}
				export module Title {
					export class Flags {
						public static class: java.lang.Class<org.videolan.libvlc.MediaPlayer.Title.Flags>;
						public static MENU: number = 1;
						public static INTERACTIVE: number = 2;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class RendererDiscoverer extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.RendererDiscoverer.Event> {
				public static class: java.lang.Class<org.videolan.libvlc.RendererDiscoverer>;
				public release(): void;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, name: string);
				public isReleased(): boolean;
				public static list(ILibVlc: org.videolan.libvlc.interfaces.ILibVLC): androidNative.Array<org.videolan.libvlc.RendererDiscoverer.Description>;
				public constructor();
				public setEventListener(listener: org.videolan.libvlc.RendererDiscoverer.EventListener): void;
				public onReleaseNative(): void;
				public stop(): void;
				public retain(): boolean;
				public start(): boolean;
				public onEventNative(eventType: number, arg1: number, arg2: number, argf1: number, args1: string): org.videolan.libvlc.RendererDiscoverer.Event;
				public onEventNative(param0: number, param1: number, param2: number, param3: number, param4: string): any;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
			}
			export module RendererDiscoverer {
				export class Description {
					public static class: java.lang.Class<org.videolan.libvlc.RendererDiscoverer.Description>;
					public name: string;
				}
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.RendererDiscoverer.Event>;
					public static ItemAdded: number = 1282;
					public static ItemDeleted: number = 1283;
					public constructor(type: number, argf: number);
					public constructor(type: number);
					public constructor(type: number, arg1: number);
					public constructor(type: number, arg1: number, args1: string);
					public constructor(type: number, nativeHolder: number, item: org.videolan.libvlc.RendererItem);
					public getItem(): org.videolan.libvlc.RendererItem;
					public release(): void;
					public constructor(type: number, arg1: number, arg2: number);
				}
				export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.RendererDiscoverer.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.RendererDiscoverer.EventListener>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.RendererDiscoverer$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onEvent(param0: any): void });
					public constructor();
					public onEvent(param0: any): void;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class RendererItem extends org.videolan.libvlc.VLCObject<org.videolan.libvlc.RendererItem.Event> {
				public static class: java.lang.Class<org.videolan.libvlc.RendererItem>;
				public static LIBVLC_RENDERER_CAN_AUDIO: number = 1;
				public static LIBVLC_RENDERER_CAN_VIDEO: number = 2;
				public name: string;
				public displayName: string;
				public type: string;
				public onReleaseNative(): void;
				public onEventNative(eventType: number, arg1: number, arg2: number, argf1: number, args1: string): org.videolan.libvlc.RendererItem.Event;
				public equals(obj: any): boolean;
				public retain(): boolean;
				public release(): void;
				public onEventNative(param0: number, param1: number, param2: number, param3: number, param4: string): any;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public isReleased(): boolean;
			}
			export module RendererItem {
				export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.RendererItem.Event>;
					public constructor(type: number, argf: number);
					public constructor(type: number);
					public constructor(type: number, arg1: number);
					public constructor(type: number, arg1: number, args1: string);
					public constructor(type: number, arg1: number, arg2: number);
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export abstract class VLCObject<T> extends org.videolan.libvlc.interfaces.IVLCObject<any> {
				public static class: java.lang.Class<org.videolan.libvlc.VLCObject<any>>;
				public release(): void;
				public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
				public finalize(): void;
				public isReleased(): boolean;
				public getInstance(): number;
				public constructor();
				public onReleaseNative(): void;
				public retain(): boolean;
				public onEventNative(param0: number, param1: number, param2: number, param3: number, param4: string): any;
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>): void;
				public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC);
				public setEventListener(listener: org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>, handler: globalAndroid.os.Handler): void;
				public constructor(parent: org.videolan.libvlc.interfaces.IVLCObject<any>);
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export class VideoHelper extends org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener {
				public static class: java.lang.Class<org.videolan.libvlc.VideoHelper>;
				public onNewVideoLayout(param0: org.videolan.libvlc.interfaces.IVLCVout, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public onNewVideoLayout(vlcVout: org.videolan.libvlc.interfaces.IVLCVout, width: number, height: number, visibleWidth: number, visibleHeight: number, sarNum: number, sarDen: number): void;
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export abstract class AbstractVLCEvent {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.AbstractVLCEvent>;
					public type: number;
					public arg1: number;
					public arg2: number;
					public argf1: number;
					public args1: string;
					public constructor(type: number, argf: number);
					public constructor(type: number);
					public constructor(type: number, arg1: number);
					public constructor(type: number, arg1: number, args1: string);
					public release(): void;
					public constructor(type: number, arg1: number, arg2: number);
				}
				export module AbstractVLCEvent {
					export class Listener<T> extends java.lang.Object {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<any>>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.AbstractVLCEvent$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onEvent(param0: T): void });
						public constructor();
						public onEvent(param0: T): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IComponentFactory {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IComponentFactory>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IComponentFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class ILibVLC extends org.videolan.libvlc.interfaces.IVLCObject<org.videolan.libvlc.interfaces.ILibVLC.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.ILibVLC>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.ILibVLC interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getAppContext(): globalAndroid.content.Context; retain(): boolean; release(): void; isReleased(): boolean; getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC });
					public constructor();
					public getAppContext(): globalAndroid.content.Context;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
				export module ILibVLC {
					export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.ILibVLC.Event>;
						public constructor(type: number, arg1: number, arg2: number);
						public constructor(type: number, arg1: number, args1: string);
						public constructor(type: number, arg1: number);
						public constructor(type: number);
						public constructor(type: number, argf: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class ILibVLCFactory extends org.videolan.libvlc.interfaces.IComponentFactory {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.ILibVLCFactory>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.ILibVLCFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getFromOptions(param0: globalAndroid.content.Context, param1: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC; getFromContext(param0: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC; '<clinit>'(): void });
					public constructor();
					public static factoryId: string;
					public getFromOptions(param0: globalAndroid.content.Context, param1: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
					public getFromContext(param0: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IMedia extends org.videolan.libvlc.interfaces.IVLCObject<org.videolan.libvlc.interfaces.IMedia.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMedia interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDuration(): number;
						subItems(): org.videolan.libvlc.interfaces.IMediaList;
						parse(param0: number): boolean;
						parse(): boolean;
						parseAsync(param0: number, param1: number): boolean;
						parseAsync(param0: number): boolean;
						parseAsync(): boolean;
						getType(): number;
						getTracks(param0: number): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
						getTracks(): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
						getMeta(param0: number): string;
						getMeta(param0: number, param1: boolean): string;
						setHWDecoderEnabled(param0: boolean, param1: boolean): void;
						setEventListener(param0: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
						addOption(param0: string): void;
						addSlave(param0: org.videolan.libvlc.interfaces.IMedia.Slave): void;
						clearSlaves(): void;
						getSlaves(): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Slave>;
						getUri(): globalAndroid.net.Uri;
						isParsed(): boolean;
						getStats(): org.videolan.libvlc.interfaces.IMedia.Stats;
						setDefaultMediaPlayerOptions(): void;
						retain(): boolean;
						release(): void;
						isReleased(): boolean;
						getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					});
					public constructor();
					public getType(): number;
					public getTracks(): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
					public parseAsync(param0: number, param1: number): boolean;
					public parse(): boolean;
					public getTracks(param0: number): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
					public getDuration(): number;
					public getMeta(param0: number, param1: boolean): string;
					public getStats(): org.videolan.libvlc.interfaces.IMedia.Stats;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public getMeta(param0: number): string;
					public retain(): boolean;
					public parseAsync(param0: number): boolean;
					public addSlave(param0: org.videolan.libvlc.interfaces.IMedia.Slave): void;
					public parseAsync(): boolean;
					public release(): void;
					public setHWDecoderEnabled(param0: boolean, param1: boolean): void;
					public isParsed(): boolean;
					public subItems(): org.videolan.libvlc.interfaces.IMediaList;
					public getUri(): globalAndroid.net.Uri;
					public setEventListener(param0: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
					public addOption(param0: string): void;
					public clearSlaves(): void;
					public getSlaves(): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Slave>;
					public setDefaultMediaPlayerOptions(): void;
					public parse(param0: number): boolean;
					public isReleased(): boolean;
				}
				export module IMedia {
					export class AudioTrack extends org.videolan.libvlc.interfaces.IMedia.Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.AudioTrack>;
						public channels: number;
						public rate: number;
						public constructor(type: number, id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string);
						public constructor(id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string, channels: number, rate: number);
					}
					export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Event>;
						public static MetaChanged: number = 0;
						public static SubItemAdded: number = 1;
						public static DurationChanged: number = 2;
						public static ParsedChanged: number = 3;
						public static SubItemTreeAdded: number = 6;
						public constructor(type: number, arg1: number, arg2: number);
						public constructor(type: number, arg1: number, args1: string);
						public constructor(type: number, arg1: number);
						public constructor(type: number);
						public getMetaId(): number;
						public getParsedStatus(): number;
						public constructor(type: number, argf: number);
					}
					export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.interfaces.IMedia.Event> {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.EventListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMedia$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onEvent(param0: any): void });
						public constructor();
						public onEvent(param0: any): void;
					}
					export class Meta {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Meta>;
						public static Title: number = 0;
						public static Artist: number = 1;
						public static Genre: number = 2;
						public static Copyright: number = 3;
						public static Album: number = 4;
						public static TrackNumber: number = 5;
						public static Description: number = 6;
						public static Rating: number = 7;
						public static Date: number = 8;
						public static Setting: number = 9;
						public static URL: number = 10;
						public static Language: number = 11;
						public static NowPlaying: number = 12;
						public static Publisher: number = 13;
						public static EncodedBy: number = 14;
						public static ArtworkURL: number = 15;
						public static TrackID: number = 16;
						public static TrackTotal: number = 17;
						public static Director: number = 18;
						public static Season: number = 19;
						public static Episode: number = 20;
						public static ShowName: number = 21;
						public static Actors: number = 22;
						public static AlbumArtist: number = 23;
						public static DiscNumber: number = 24;
						public static MAX: number = 25;
						public constructor();
					}
					export class Parse {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Parse>;
						public static ParseLocal: number = 1;
						public static ParseNetwork: number = 2;
						public static FetchLocal: number = 4;
						public static FetchNetwork: number = 8;
						public static DoInteract: number = 16;
						public constructor();
					}
					export class ParsedStatus {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.ParsedStatus>;
						public static Skipped: number = 1;
						public static Failed: number = 2;
						public static Timeout: number = 3;
						public static Done: number = 4;
						public constructor();
					}
					export class Slave {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Slave>;
						public type: number;
						public priority: number;
						public uri: string;
						public constructor(type: number, priority: number, uri: string);
					}
					export module Slave {
						export class Type {
							public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Slave.Type>;
							public static Subtitle: number = 0;
							public static Audio: number = 1;
							public constructor();
						}
					}
					export class State {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.State>;
						public static NothingSpecial: number = 0;
						public static Opening: number = 1;
						public static Playing: number = 3;
						public static Paused: number = 4;
						public static Stopped: number = 5;
						public static Ended: number = 6;
						public static Error: number = 7;
						public static MAX: number = 8;
						public constructor();
					}
					export class Stats {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Stats>;
						public readBytes: number;
						public inputBitrate: number;
						public demuxReadBytes: number;
						public demuxBitrate: number;
						public demuxCorrupted: number;
						public demuxDiscontinuity: number;
						public decodedVideo: number;
						public decodedAudio: number;
						public displayedPictures: number;
						public lostPictures: number;
						public playedAbuffers: number;
						public lostAbuffers: number;
						public sentPackets: number;
						public sentBytes: number;
						public sendBitrate: number;
						public constructor(readBytes: number, inputBitrate: number, demuxReadBytes: number, demuxBitrate: number, demuxCorrupted: number, demuxDiscontinuity: number, decodedVideo: number, decodedAudio: number, displayedPictures: number, lostPictures: number, playedAbuffers: number, lostAbuffers: number, sentPackets: number, sentBytes: number, sendBitrate: number);
					}
					export class SubtitleTrack extends org.videolan.libvlc.interfaces.IMedia.Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.SubtitleTrack>;
						public encoding: string;
						public constructor(id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string, encoding: string);
						public constructor(type: number, id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string);
					}
					export abstract class Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Track>;
						public type: number;
						public id: string;
						public name: string;
						public selected: boolean;
						public codec: string;
						public originalCodec: string;
						public fourcc: number;
						public profile: number;
						public level: number;
						public bitrate: number;
						public language: string;
						public description: string;
						public constructor(type: number, id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string);
					}
					export module Track {
						export class Type {
							public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Track.Type>;
							public static Unknown: number = -1;
							public static Audio: number = 0;
							public static Video: number = 1;
							public static Text: number = 2;
							public constructor();
						}
					}
					export class Type {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.Type>;
						public static Unknown: number = 0;
						public static File: number = 1;
						public static Directory: number = 2;
						public static Disc: number = 3;
						public static Stream: number = 4;
						public static Playlist: number = 5;
						public constructor();
					}
					export class UnknownTrack extends org.videolan.libvlc.interfaces.IMedia.Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.UnknownTrack>;
						public constructor(type: number, id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string);
						public constructor(id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string);
					}
					export class VideoTrack extends org.videolan.libvlc.interfaces.IMedia.Track {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.VideoTrack>;
						public height: number;
						public width: number;
						public sarNum: number;
						public sarDen: number;
						public frameRateNum: number;
						public frameRateDen: number;
						public orientation: number;
						public projection: number;
						public constructor(type: number, id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string);
						public constructor(id: string, name: string, selected: boolean, codec: string, originalCodec: string, fourcc: number, profile: number, level: number, bitrate: number, language: string, description: string, height: number, width: number, sarNum: number, sarDen: number, frameRateNum: number, frameRateDen: number, orientation: number, projection: number);
					}
					export module VideoTrack {
						export class Orientation {
							public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.VideoTrack.Orientation>;
							public static TopLeft: number = 0;
							public static TopRight: number = 1;
							public static BottomLeft: number = 2;
							public static BottomRight: number = 3;
							public static LeftTop: number = 4;
							public static LeftBottom: number = 5;
							public static RightTop: number = 6;
							public static RightBottom: number = 7;
							public constructor();
						}
						export class Projection {
							public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMedia.VideoTrack.Projection>;
							public static Rectangular: number = 0;
							public static EquiRectangular: number = 1;
							public static CubemapLayoutStandard: number = 256;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IMediaFactory extends org.videolan.libvlc.interfaces.IComponentFactory {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMediaFactory>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMediaFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFromLocalPath(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: string): org.videolan.libvlc.interfaces.IMedia;
						getFromUri(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
						getFromFileDescriptor(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
						getFromAssetFileDescriptor(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
						'<clinit>'(): void;
					});
					public constructor();
					public static factoryId: string;
					public getFromLocalPath(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: string): org.videolan.libvlc.interfaces.IMedia;
					public getFromAssetFileDescriptor(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					public getFromFileDescriptor(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					public getFromUri(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IMediaList extends org.videolan.libvlc.interfaces.IVLCObject<org.videolan.libvlc.interfaces.IMediaList.Event> {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMediaList>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMediaList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { setEventListener(param0: org.videolan.libvlc.interfaces.IMediaList.EventListener, param1: globalAndroid.os.Handler): void; getCount(): number; getMediaAt(param0: number): org.videolan.libvlc.interfaces.IMedia; isLocked(): boolean; retain(): boolean; release(): void; isReleased(): boolean; getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC });
					public constructor();
					public getMediaAt(param0: number): org.videolan.libvlc.interfaces.IMedia;
					public isLocked(): boolean;
					public getCount(): number;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public setEventListener(param0: org.videolan.libvlc.interfaces.IMediaList.EventListener, param1: globalAndroid.os.Handler): void;
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
				export module IMediaList {
					export class Event extends org.videolan.libvlc.interfaces.AbstractVLCEvent {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMediaList.Event>;
						public static ItemAdded: number = 512;
						public static ItemDeleted: number = 514;
						public static EndReached: number = 516;
						public media: org.videolan.libvlc.interfaces.IMedia;
						public index: number;
						public constructor(type: number, arg1: number, arg2: number);
						public constructor(type: number, arg1: number, args1: string);
						public release(): void;
						public constructor(type: number);
						public constructor(type: number, arg1: number);
						public constructor(type: number, argf: number);
						public constructor(type: number, media: org.videolan.libvlc.interfaces.IMedia, retain: boolean, index: number);
					}
					export class EventListener extends org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener<org.videolan.libvlc.interfaces.IMediaList.Event> {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IMediaList.EventListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.IMediaList$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onEvent(param0: any): void });
						public constructor();
						public onEvent(param0: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IVLCObject<T> extends java.lang.Object {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IVLCObject<any>>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IVLCObject<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { retain(): boolean; release(): void; isReleased(): boolean; getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC });
					public constructor();
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module interfaces {
				export class IVLCVout {
					public static class: java.lang.Class<org.videolan.libvlc.interfaces.IVLCVout>;
					/**
					 * Constructs a new instance of the org.videolan.libvlc.interfaces.IVLCVout interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setVideoView(param0: globalAndroid.view.SurfaceView): void;
						setVideoView(param0: globalAndroid.view.TextureView): void;
						setVideoSurface(param0: globalAndroid.view.Surface, param1: globalAndroid.view.SurfaceHolder): void;
						setVideoSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
						setSubtitlesView(param0: globalAndroid.view.SurfaceView): void;
						setSubtitlesView(param0: globalAndroid.view.TextureView): void;
						setSubtitlesSurface(param0: globalAndroid.view.Surface, param1: globalAndroid.view.SurfaceHolder): void;
						setSubtitlesSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
						attachViews(param0: org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener): void;
						attachViews(): void;
						detachViews(): void;
						areViewsAttached(): boolean;
						addCallback(param0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
						removeCallback(param0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
						sendMouseEvent(param0: number, param1: number, param2: number, param3: number): void;
						setWindowSize(param0: number, param1: number): void;
					});
					public constructor();
					public attachViews(param0: org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener): void;
					public setWindowSize(param0: number, param1: number): void;
					public areViewsAttached(): boolean;
					public setSubtitlesView(param0: globalAndroid.view.SurfaceView): void;
					public setVideoView(param0: globalAndroid.view.TextureView): void;
					public setSubtitlesSurface(param0: globalAndroid.view.Surface, param1: globalAndroid.view.SurfaceHolder): void;
					public setSubtitlesView(param0: globalAndroid.view.TextureView): void;
					public addCallback(param0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
					public sendMouseEvent(param0: number, param1: number, param2: number, param3: number): void;
					public removeCallback(param0: org.videolan.libvlc.interfaces.IVLCVout.Callback): void;
					public setVideoSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setVideoSurface(param0: globalAndroid.view.Surface, param1: globalAndroid.view.SurfaceHolder): void;
					public attachViews(): void;
					public detachViews(): void;
					public setSubtitlesSurface(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setVideoView(param0: globalAndroid.view.SurfaceView): void;
				}
				export module IVLCVout {
					export class Callback {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IVLCVout.Callback>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.IVLCVout$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSurfacesCreated(param0: org.videolan.libvlc.interfaces.IVLCVout): void; onSurfacesDestroyed(param0: org.videolan.libvlc.interfaces.IVLCVout): void });
						public constructor();
						public onSurfacesCreated(param0: org.videolan.libvlc.interfaces.IVLCVout): void;
						public onSurfacesDestroyed(param0: org.videolan.libvlc.interfaces.IVLCVout): void;
					}
					export class OnNewVideoLayoutListener {
						public static class: java.lang.Class<org.videolan.libvlc.interfaces.IVLCVout.OnNewVideoLayoutListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.interfaces.IVLCVout$OnNewVideoLayoutListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onNewVideoLayout(param0: org.videolan.libvlc.interfaces.IVLCVout, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void });
						public constructor();
						public onNewVideoLayout(param0: org.videolan.libvlc.interfaces.IVLCVout, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module media {
				export class MediaPlayer {
					public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer>;
					public static MEDIA_ERROR_UNKNOWN: number = 1;
					public static MEDIA_ERROR_SERVER_DIED: number = 100;
					public static MEDIA_ERROR_NOT_VALID_FOR_PROGRESSIVE_PLAYBACK: number = 200;
					public static MEDIA_ERROR_IO: number = -1004;
					public static MEDIA_ERROR_MALFORMED: number = -1007;
					public static MEDIA_ERROR_UNSUPPORTED: number = -1010;
					public static MEDIA_ERROR_TIMED_OUT: number = -110;
					public static MEDIA_INFO_UNKNOWN: number = 1;
					public static MEDIA_INFO_STARTED_AS_NEXT: number = 2;
					public static MEDIA_INFO_VIDEO_RENDERING_START: number = 3;
					public static MEDIA_INFO_VIDEO_TRACK_LAGGING: number = 700;
					public static MEDIA_INFO_BUFFERING_START: number = 701;
					public static MEDIA_INFO_BUFFERING_END: number = 702;
					public static MEDIA_INFO_BAD_INTERLEAVING: number = 800;
					public static MEDIA_INFO_NOT_SEEKABLE: number = 801;
					public static MEDIA_INFO_METADATA_UPDATE: number = 802;
					public static MEDIA_INFO_EXTERNAL_METADATA_UPDATE: number = 803;
					public static MEDIA_INFO_TIMED_TEXT_ERROR: number = 900;
					public static MEDIA_INFO_UNSUPPORTED_SUBTITLE: number = 901;
					public static MEDIA_INFO_SUBTITLE_TIMED_OUT: number = 902;
					public static VIDEO_SCALING_MODE_SCALE_TO_FIT: number = 1;
					public static VIDEO_SCALING_MODE_SCALE_TO_FIT_WITH_CROPPING: number = 2;
					public static MEDIA_MIMETYPE_TEXT_SUBRIP: string = 'application/x-subrip';
					public setDataSource(path: string): void;
					public finalize(): void;
					public getVideoWidth(): number;
					public setAudioStreamType(streamtype: number): void;
					public setVolume(leftVolume: number, rightVolume: number): void;
					public static create(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, holder: globalAndroid.view.SurfaceHolder, audioAttributes: any, audioSessionId: number): org.videolan.libvlc.media.MediaPlayer;
					public constructor();
					public pause(): void;
					public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): void;
					public addTimedTextSource(fd: java.io.FileDescriptor, offset: number, length: number, mime: string): void;
					public selectTrack(index: number): void;
					public setAudioAttributes(attributes: any): void;
					public setWakeMode(context: globalAndroid.content.Context, mode: number): void;
					public prepare(): void;
					public setScreenOnWhilePlaying(screenOn: boolean): void;
					public getTrackInfo(): androidNative.Array<org.videolan.libvlc.media.MediaPlayer.TrackInfo>;
					public getAudioSessionId(): number;
					public setOnBufferingUpdateListener(listener: org.videolan.libvlc.media.MediaPlayer.OnBufferingUpdateListener): void;
					public setDataSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, headers: java.util.Map<string, string>): void;
					public setNextMediaPlayer(next: org.videolan.libvlc.media.MediaPlayer): void;
					public setLooping(looping: boolean): void;
					public release(): void;
					public addTimedTextSource(path: string, mimeType: string): void;
					public setOnTimedTextListener(listener: org.videolan.libvlc.media.MediaPlayer.OnTimedTextListener): void;
					public setDisplay(sh: globalAndroid.view.SurfaceHolder): void;
					public getSelectedTrack(trackType: number): number;
					public setVideoScalingMode(mode: number): void;
					public stop(): void;
					public static create(context: globalAndroid.content.Context, resid: number): org.videolan.libvlc.media.MediaPlayer;
					public prepareAsync(): void;
					public setSurface(surface: globalAndroid.view.Surface): void;
					public setOnSeekCompleteListener(listener: org.videolan.libvlc.media.MediaPlayer.OnSeekCompleteListener): void;
					public setOnInfoListener(listener: org.videolan.libvlc.media.MediaPlayer.OnInfoListener): void;
					public static create(context: globalAndroid.content.Context, resid: number, audioAttributes: any, audioSessionId: number): org.videolan.libvlc.media.MediaPlayer;
					public setOnCompletionListener(listener: org.videolan.libvlc.media.MediaPlayer.OnCompletionListener): void;
					public start(): void;
					public seekTo(msec: number): void;
					public deselectTrack(index: number): void;
					public getDuration(): number;
					public isPlaying(): boolean;
					public addTimedTextSource(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, mimeType: string): void;
					public getCurrentPosition(): number;
					public isLooping(): boolean;
					public setDataSource(fd: java.io.FileDescriptor): void;
					public getVideoHeight(): number;
					public setOnErrorListener(listener: org.videolan.libvlc.media.MediaPlayer.OnErrorListener): void;
					public reset(): void;
					public static create(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri): org.videolan.libvlc.media.MediaPlayer;
					public setOnVideoSizeChangedListener(listener: org.videolan.libvlc.media.MediaPlayer.OnVideoSizeChangedListener): void;
					public setDataSource(fd: java.io.FileDescriptor, offset: number, length: number): void;
					public attachAuxEffect(effectId: number): void;
					public setAudioSessionId(sessionId: number): void;
					public setAuxEffectSendLevel(level: number): void;
					public static create(context: globalAndroid.content.Context, uri: globalAndroid.net.Uri, holder: globalAndroid.view.SurfaceHolder): org.videolan.libvlc.media.MediaPlayer;
					public addTimedTextSource(fd: java.io.FileDescriptor, mimeType: string): void;
					public setOnPreparedListener(listener: org.videolan.libvlc.media.MediaPlayer.OnPreparedListener): void;
				}
				export module MediaPlayer {
					export class OnBufferingUpdateListener {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnBufferingUpdateListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer$OnBufferingUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onBufferingUpdate(param0: org.videolan.libvlc.media.MediaPlayer, param1: number): void });
						public constructor();
						public onBufferingUpdate(param0: org.videolan.libvlc.media.MediaPlayer, param1: number): void;
					}
					export class OnCompletionListener {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnCompletionListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer$OnCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCompletion(param0: org.videolan.libvlc.media.MediaPlayer): void });
						public constructor();
						public onCompletion(param0: org.videolan.libvlc.media.MediaPlayer): void;
					}
					export class OnErrorListener {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnErrorListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onError(param0: org.videolan.libvlc.media.MediaPlayer, param1: number, param2: number): boolean });
						public constructor();
						public onError(param0: org.videolan.libvlc.media.MediaPlayer, param1: number, param2: number): boolean;
					}
					export class OnInfoListener {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnInfoListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer$OnInfoListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onInfo(param0: org.videolan.libvlc.media.MediaPlayer, param1: number, param2: number): boolean });
						public constructor();
						public onInfo(param0: org.videolan.libvlc.media.MediaPlayer, param1: number, param2: number): boolean;
					}
					export class OnPreparedListener {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnPreparedListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer$OnPreparedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPrepared(param0: org.videolan.libvlc.media.MediaPlayer): void });
						public constructor();
						public onPrepared(param0: org.videolan.libvlc.media.MediaPlayer): void;
					}
					export class OnSeekCompleteListener {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnSeekCompleteListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer$OnSeekCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSeekComplete(param0: org.videolan.libvlc.media.MediaPlayer): void });
						public constructor();
						public onSeekComplete(param0: org.videolan.libvlc.media.MediaPlayer): void;
					}
					export class OnTimedTextListener {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnTimedTextListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer$OnTimedTextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onTimedText(param0: org.videolan.libvlc.media.MediaPlayer, param1: globalAndroid.media.TimedText): void });
						public constructor();
						public onTimedText(param0: org.videolan.libvlc.media.MediaPlayer, param1: globalAndroid.media.TimedText): void;
					}
					export class OnVideoSizeChangedListener {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.OnVideoSizeChangedListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.media.MediaPlayer$OnVideoSizeChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onVideoSizeChanged(param0: org.videolan.libvlc.media.MediaPlayer, param1: number, param2: number): void });
						public constructor();
						public onVideoSizeChanged(param0: org.videolan.libvlc.media.MediaPlayer, param1: number, param2: number): void;
					}
					export class TrackInfo {
						public static class: java.lang.Class<org.videolan.libvlc.media.MediaPlayer.TrackInfo>;
						public static MEDIA_TRACK_TYPE_UNKNOWN: number = 0;
						public static MEDIA_TRACK_TYPE_VIDEO: number = 1;
						public static MEDIA_TRACK_TYPE_AUDIO: number = 2;
						public static MEDIA_TRACK_TYPE_TIMEDTEXT: number = 3;
						public static MEDIA_TRACK_TYPE_SUBTITLE: number = 4;
						public describeContents(): number;
						public getLanguage(): string;
						public getFormat(): globalAndroid.media.MediaFormat;
						public getTrackType(): number;
						public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module media {
				export class VideoView {
					public static class: java.lang.Class<org.videolan.libvlc.media.VideoView>;
					public onInitializeAccessibilityNodeInfo(info: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public onKeyDown(keyCode: number, event: globalAndroid.view.KeyEvent): boolean;
					public setVideoPath(path: string): void;
					public addSubtitleSource(is: java.io.InputStream, format: globalAndroid.media.MediaFormat): void;
					public canPause(): boolean;
					public setVideoURI(uri: globalAndroid.net.Uri, headers: java.util.Map<string, string>): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public stopPlayback(): void;
					public draw(canvas: globalAndroid.graphics.Canvas): void;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public start(): void;
					public onAttachedToWindow(): void;
					public setOnErrorListener(l: globalAndroid.media.MediaPlayer.OnErrorListener): void;
					public seekTo(msec: number): void;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public canSeekBackward(): boolean;
					public getDuration(): number;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public pause(): void;
					public isPlaying(): boolean;
					public onTrackballEvent(ev: globalAndroid.view.MotionEvent): boolean;
					public getCurrentPosition(): number;
					public setOnCompletionListener(l: globalAndroid.media.MediaPlayer.OnCompletionListener): void;
					public suspend(): void;
					public onInitializeAccessibilityEvent(event: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public setVideoURI(uri: globalAndroid.net.Uri): void;
					public getBufferPercentage(): number;
					public onDetachedFromWindow(): void;
					public resolveAdjustedSize(desiredSize: number, measureSpec: number): number;
					public setOnPreparedListener(l: globalAndroid.media.MediaPlayer.OnPreparedListener): void;
					public canSeekForward(): boolean;
					public getAudioSessionId(): number;
					public setOnInfoListener(l: globalAndroid.media.MediaPlayer.OnInfoListener): void;
					public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
					public resume(): void;
					public constructor(context: globalAndroid.content.Context);
					public setMediaController(controller: globalAndroid.widget.MediaController): void;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubLibVLC extends org.videolan.libvlc.stubs.StubVLCObject<org.videolan.libvlc.interfaces.ILibVLC.Event> implements org.videolan.libvlc.interfaces.ILibVLC {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubLibVLC>;
					public constructor();
					public constructor(context: globalAndroid.content.Context, options: java.util.List<string>);
					public getAppContext(): globalAndroid.content.Context;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public constructor(context: globalAndroid.content.Context);
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubLibVLCFactory extends org.videolan.libvlc.interfaces.ILibVLCFactory {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubLibVLCFactory>;
					public getFromContext(context: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
					public getFromOptions(context: globalAndroid.content.Context, options: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
					public constructor();
					public getFromOptions(param0: globalAndroid.content.Context, param1: java.util.List<string>): org.videolan.libvlc.interfaces.ILibVLC;
					public getFromContext(param0: globalAndroid.content.Context): org.videolan.libvlc.interfaces.ILibVLC;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubMedia extends org.videolan.libvlc.stubs.StubVLCObject<org.videolan.libvlc.interfaces.IMedia.Event> implements org.videolan.libvlc.interfaces.IMedia {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubMedia>;
					public getType(): number;
					public setType(type: number): void;
					public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, uri: globalAndroid.net.Uri);
					public getTracks(): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
					public setHWDecoderEnabled(enabled: boolean, force: boolean): void;
					public parseAsync(param0: number, param1: number): boolean;
					public setEventListener(listener: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
					public parse(): boolean;
					public getTracks(type: number): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
					public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, fd: java.io.FileDescriptor);
					public getTracks(param0: number): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Track>;
					public getDuration(): number;
					public addSlave(slave: org.videolan.libvlc.interfaces.IMedia.Slave): void;
					public getMeta(param0: number, param1: boolean): string;
					public getStats(): org.videolan.libvlc.interfaces.IMedia.Stats;
					public constructor();
					public parseAsync(flags: number): boolean;
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public getMeta(param0: number): string;
					public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, path: string);
					public parseAsync(param0: number): boolean;
					public addSlave(param0: org.videolan.libvlc.interfaces.IMedia.Slave): void;
					public parse(flags: number): boolean;
					public parseAsync(): boolean;
					public parseAsync(flags: number, timeout: number): boolean;
					public release(): void;
					public setHWDecoderEnabled(param0: boolean, param1: boolean): void;
					public isParsed(): boolean;
					public getMeta(id: number): string;
					public subItems(): org.videolan.libvlc.interfaces.IMediaList;
					public getUri(): globalAndroid.net.Uri;
					public constructor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, assetFileDescriptor: globalAndroid.content.res.AssetFileDescriptor);
					public setEventListener(param0: org.videolan.libvlc.interfaces.IMedia.EventListener): void;
					public clearSlaves(): void;
					public getSlaves(): androidNative.Array<org.videolan.libvlc.interfaces.IMedia.Slave>;
					public addOption(param0: string): void;
					public getMeta(id: number, force: boolean): string;
					public addOption(option: string): void;
					public setDefaultMediaPlayerOptions(): void;
					public isReleased(): boolean;
					public parse(param0: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubMediaFactory extends org.videolan.libvlc.interfaces.IMediaFactory {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubMediaFactory>;
					public getFromFileDescriptor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, fd: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					public getFromLocalPath(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, path: string): org.videolan.libvlc.interfaces.IMedia;
					public getFromUri(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, uri: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
					public constructor();
					public getFromLocalPath(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: string): org.videolan.libvlc.interfaces.IMedia;
					public getFromAssetFileDescriptor(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					public getFromFileDescriptor(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: java.io.FileDescriptor): org.videolan.libvlc.interfaces.IMedia;
					public getFromUri(param0: org.videolan.libvlc.interfaces.ILibVLC, param1: globalAndroid.net.Uri): org.videolan.libvlc.interfaces.IMedia;
					public getFromAssetFileDescriptor(ILibVLC: org.videolan.libvlc.interfaces.ILibVLC, assetFileDescriptor: globalAndroid.content.res.AssetFileDescriptor): org.videolan.libvlc.interfaces.IMedia;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubMediaList extends org.videolan.libvlc.stubs.StubVLCObject<org.videolan.libvlc.interfaces.IMediaList.Event> implements org.videolan.libvlc.interfaces.IMediaList {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubMediaList>;
					public isLocked(): boolean;
					public getMediaAt(param0: number): org.videolan.libvlc.interfaces.IMedia;
					public getCount(): number;
					public getMediaAt(index: number): org.videolan.libvlc.interfaces.IMedia;
					public constructor();
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public setEventListener(param0: org.videolan.libvlc.interfaces.IMediaList.EventListener, param1: globalAndroid.os.Handler): void;
					public retain(): boolean;
					public release(): void;
					public setEventListener(listener: org.videolan.libvlc.interfaces.IMediaList.EventListener, handler: globalAndroid.os.Handler): void;
					public isReleased(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module stubs {
				export class StubVLCObject<T> extends org.videolan.libvlc.interfaces.IVLCObject<any> {
					public static class: java.lang.Class<org.videolan.libvlc.stubs.StubVLCObject<any>>;
					public constructor();
					public getLibVLC(): org.videolan.libvlc.interfaces.ILibVLC;
					public retain(): boolean;
					public release(): void;
					public isReleased(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class AndroidUtil {
					public static class: java.lang.Class<org.videolan.libvlc.util.AndroidUtil>;
					public static isROrLater: boolean;
					public static isPOrLater: boolean;
					public static isOOrLater: boolean;
					public static isNougatMR1OrLater: boolean;
					public static isNougatOrLater: boolean;
					public static isMarshMallowOrLater: boolean;
					public constructor();
					public static PathToUri(path: string): globalAndroid.net.Uri;
					public static UriToFile(uri: globalAndroid.net.Uri): java.io.File;
					public static FileToUri(file: java.io.File): globalAndroid.net.Uri;
					public static LocationToUri(location: string): globalAndroid.net.Uri;
					public static resolveActivity(context: globalAndroid.content.Context): globalAndroid.app.Activity;
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class DisplayManager {
					public static class: java.lang.Class<org.videolan.libvlc.util.DisplayManager>;
					public isSecondary(): boolean;
					public getPresentation(): org.videolan.libvlc.util.DisplayManager.SecondaryDisplay;
					public isOnRenderer(): boolean;
					public getDisplayType(): org.videolan.libvlc.util.DisplayManager.DisplayType;
					public release(): void;
					public setMediaRouterCallback(): boolean;
					public removeMediaRouterCallback(): void;
					public constructor(activity: globalAndroid.app.Activity, selectedRender: androidx.lifecycle.LiveData<org.videolan.libvlc.RendererItem>, textureView: boolean, cloneMode: boolean, benchmark: boolean);
					public isPrimary(): boolean;
				}
				export module DisplayManager {
					export class DisplayType {
						public static class: java.lang.Class<org.videolan.libvlc.util.DisplayManager.DisplayType>;
						public static PRIMARY: org.videolan.libvlc.util.DisplayManager.DisplayType;
						public static PRESENTATION: org.videolan.libvlc.util.DisplayManager.DisplayType;
						public static RENDERER: org.videolan.libvlc.util.DisplayManager.DisplayType;
						public static values(): androidNative.Array<org.videolan.libvlc.util.DisplayManager.DisplayType>;
						public static valueOf(name: string): org.videolan.libvlc.util.DisplayManager.DisplayType;
					}
					export class SecondaryDisplay {
						public static class: java.lang.Class<org.videolan.libvlc.util.DisplayManager.SecondaryDisplay>;
						public static TAG: string = 'VLC/SecondaryDisplay';
						public constructor(this$0: org.videolan.libvlc.util.DisplayManager, outerContext: globalAndroid.content.Context, display: globalAndroid.view.Display);
						public getSurfaceFrame(): globalAndroid.widget.FrameLayout;
						public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
						public constructor(this$0: org.videolan.libvlc.util.DisplayManager, outerContext: globalAndroid.content.Context, display: globalAndroid.view.Display, theme: number);
						public getSurfaceView(): globalAndroid.view.SurfaceView;
						public getSubtitlesSurfaceView(): globalAndroid.view.SurfaceView;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class Dumper {
					public static class: java.lang.Class<org.videolan.libvlc.util.Dumper>;
					public constructor(uri: globalAndroid.net.Uri, filepath: string, listener: org.videolan.libvlc.util.Dumper.Listener);
					public cancel(): void;
					public start(): void;
				}
				export module Dumper {
					export class Listener {
						public static class: java.lang.Class<org.videolan.libvlc.util.Dumper.Listener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.util.Dumper$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onFinish(param0: boolean): void; onProgress(param0: number): void });
						public constructor();
						public onProgress(param0: number): void;
						public onFinish(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class Extensions {
					public static class: java.lang.Class<org.videolan.libvlc.util.Extensions>;
					public static VIDEO: java.util.HashSet<string>;
					public static AUDIO: java.util.HashSet<string>;
					public static SUBTITLES: java.util.HashSet<string>;
					public static PLAYLIST: java.util.HashSet<string>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class MediaBrowser {
					public static class: java.lang.Class<org.videolan.libvlc.util.MediaBrowser>;
					public discoverNetworkShares(): void;
					public browse(path: string, flags: number): void;
					public getMediaAt(index: number): org.videolan.libvlc.interfaces.IMedia;
					public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC, listener: org.videolan.libvlc.util.MediaBrowser.EventListener, handler: globalAndroid.os.Handler);
					public getMediaCount(): number;
					public constructor(libvlc: org.videolan.libvlc.interfaces.ILibVLC, listener: org.videolan.libvlc.util.MediaBrowser.EventListener);
					public changeEventListener(eventListener: org.videolan.libvlc.util.MediaBrowser.EventListener): void;
					public release(): void;
					public browse(uri: globalAndroid.net.Uri, flags: number): void;
					public browse(media: org.videolan.libvlc.interfaces.IMedia, flags: number): void;
					public discoverNetworkShares(serviceName: string): void;
					public setIgnoreFileTypes(list: string): void;
				}
				export module MediaBrowser {
					export class EventListener {
						public static class: java.lang.Class<org.videolan.libvlc.util.MediaBrowser.EventListener>;
						/**
						 * Constructs a new instance of the org.videolan.libvlc.util.MediaBrowser$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMediaAdded(param0: number, param1: org.videolan.libvlc.interfaces.IMedia): void; onMediaRemoved(param0: number, param1: org.videolan.libvlc.interfaces.IMedia): void; onBrowseEnd(): void });
						public constructor();
						public onBrowseEnd(): void;
						public onMediaAdded(param0: number, param1: org.videolan.libvlc.interfaces.IMedia): void;
						public onMediaRemoved(param0: number, param1: org.videolan.libvlc.interfaces.IMedia): void;
					}
					export class Flag {
						public static class: java.lang.Class<org.videolan.libvlc.util.MediaBrowser.Flag>;
						public static Interact: number = 1;
						public static NoSlavesAutodetect: number = 2;
						public static ShowHiddenFiles: number = 4;
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class VLCUtil {
					public static class: java.lang.Class<org.videolan.libvlc.util.VLCUtil>;
					public static TAG: string = 'VLC/LibVLC/Util';
					public static getErrorMsg(): string;
					public static encodeVLCUri(uri: globalAndroid.net.Uri): string;
					public static encodeVLCString(c: string): string;
					public constructor();
					public static UriFromMrl(hex: string): globalAndroid.net.Uri;
					public static getABIList21(): androidNative.Array<string>;
					public static getABIList(): androidNative.Array<string>;
					public static getMachineSpecs(): org.videolan.libvlc.util.VLCUtil.MachineSpecs;
					public static hasCompatibleCPU(abi: globalAndroid.content.Context): boolean;
				}
				export module VLCUtil {
					export class ElfData {
						public static class: java.lang.Class<org.videolan.libvlc.util.VLCUtil.ElfData>;
					}
					export class MachineSpecs {
						public static class: java.lang.Class<org.videolan.libvlc.util.VLCUtil.MachineSpecs>;
						public hasNeon: boolean;
						public hasFpu: boolean;
						public hasArmV6: boolean;
						public hasArmV7: boolean;
						public hasMips: boolean;
						public hasX86: boolean;
						public is64bits: boolean;
						public bogoMIPS: number;
						public processors: number;
						public frequency: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module org {
	export module videolan {
		export module libvlc {
			export module util {
				export class VLCVideoLayout {
					public static class: java.lang.Class<org.videolan.libvlc.util.VLCVideoLayout>;
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
					public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
					public constructor(context: globalAndroid.content.Context);
					public onAttachedToWindow(): void;
				}
			}
		}
	}
}

//Generics information:
//org.videolan.libvlc.VLCObject:1
//org.videolan.libvlc.interfaces.AbstractVLCEvent.Listener:1
//org.videolan.libvlc.interfaces.IVLCObject:1
//org.videolan.libvlc.stubs.StubVLCObject:1
