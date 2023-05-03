/* eslint-disable @typescript-eslint/no-inferrable-types */

import { Video as VideoBase, VideoFill, videoSourceProperty, subtitleSourceProperty } from './common';
import { Application, File, Utils } from '@nativescript/core';

export * from './common';

// States from Exo Player
const SURFACE_WAITING: number = 0;
const SURFACE_READY: number = 1;
// const STATE_IDLE = 1;
// const STATE_BUFFERING = 2;
// const STATE_READY = 3;
// const STATE_ENDED = 4;
// const UA = "Dalvik/2.1.0 (Linux; U; Android 6.0.1; MIBOX3 Build/MHC19J)";

export class Video extends VideoBase {
	private _textureView: android.widget.VideoView;
	private _subtitlesView: com.google.android.exoplayer2.ui.SubtitleView;
	private videoWidth: number;
	private videoHeight: number;
	private _src: string | com.google.android.exoplayer2.source.MediaSource | any;
	private _subtitlesSrc: any;
	private mediaState: number;
	private textureSurface: any;
	private textureSurfaceSet: boolean;
	private mediaPlayer: any;
	private mediaController: any;
	private preSeekTime: number;
	private _onReadyEmitEvent: Array<any>;
	private videoOpened: boolean;
	private eventPlaybackReady: boolean;
	private eventPlaybackStart: boolean;
	private lastTimerUpdate: number;
	private interval: number;
	private _suspendLocation: number;
	private _boundStart = this.resumeEvent.bind(this);
	private _boundStop = this.suspendEvent.bind(this);
	private _resumeOnFocusGain = false;
	private enableSubtitles: boolean = false;

	public TYPE = { DETECT: 0, SS: 1, DASH: 2, HLS: 3, OTHER: 4 };
	public player: com.google.android.exoplayer2.ExoPlayer;
	private _mInfo;
	private _gaudioProcessor;

	constructor() {
		super();
		this._boundStart = this.resumeEvent.bind(this);
		this._boundStop = this.suspendEvent.bind(this);
		this._resumeOnFocusGain = false;
		this.enableSubtitles = false;
		this.TYPE = { DETECT: 0, SS: 1, DASH: 2, HLS: 3, OTHER: 4 };
		this._textureView = null;
		this.nativeView = null;
		this.videoWidth = 0;
		this.videoHeight = 0;
		this._onReadyEmitEvent = [];
		this._suspendLocation = null;
		this._src = null;
		this.mediaState = SURFACE_WAITING;
		this.textureSurface = null;
		this.textureSurfaceSet = false;
		this.mediaPlayer = null;
		this.mediaController = null;
		this.preSeekTime = -1;
		this.videoOpened = false;
		this.eventPlaybackReady = false;
		this.eventPlaybackStart = false;
		this.lastTimerUpdate = -1;
		this.interval = null;
		this.player = null;
	}

	get playState(): number {
		if (!this.nativeView || !this.nativeView.getPlayer()) {
			return com.google.android.exoplayer2.Player.STATE_IDLE;
		}
		return this.nativeView.getPlayer().getPlaybackState();
	}

	[videoSourceProperty.setNative](value) {
		this._setNativeVideo(value ? value.android : null);
	}

	[subtitleSourceProperty.setNative](value) {
		this._updateSubtitles(value ? value.android : null);
	}

	createNativeView() {
		const nativeView = new com.google.android.exoplayer2.ui.PlayerView(this._context);
		if (this.enableSubtitles) {
		}
		return nativeView;

		// if (this.surface) {
		// 	var nativeView = new android.widget.RelativeLayout(this._context);
		// 	this._textureView = new android.view.TextureView(this._context);
		// 	nativeView.addView(this._textureView);
		// 	return nativeView;
		// }
		// else {
		// 	this._textureView = new android.view.SurfaceView(this._context);
		// 	return this._textureView;
		// }
	}

	initNativeView() {
		super.initNativeView();
		this._setupMediaController();
		Application.on(Application.suspendEvent, this._boundStop);
		Application.on(Application.resumeEvent, this._boundStart);
	}

	disposeNativeView() {
		this.disableEventTracking();
	}

	disableEventTracking() {
		Application.off(Application.suspendEvent, this._boundStop);
		Application.off(Application.resumeEvent, this._boundStart);
	}

	// private _setupTextureSurface() {
    //     if (!this.textureSurface) {
    //         if (!this._textureView.isAvailable()) {
    //             return;
    //         }
    //         this.textureSurface = new android.view.Surface(this._textureView.getSurfaceTexture());
    //     }
    //     if (this.textureSurface) {
    //         if (!this.mediaPlayer) {
    //             return;
    //         }
    //         if (!this.textureSurfaceSet) {
    //             this.mediaPlayer.setVideoSurface(this.textureSurface);
    //             this.mediaState = SURFACE_READY;
    //         }
    //         else {
    //             this.mediaState = SURFACE_WAITING;
    //         }
    //         if (!this.videoOpened) {
    //             this._openVideo();
    //         }
    //     }
    // }

	_setupMediaPlayerListeners = function () {
		const that = new WeakRef(this);
		const playerListener = new com.google.android.exoplayer2.Player.Listener({
			onEvents: function (_player: com.google.android.exoplayer2.Player, _events: com.google.android.exoplayer2.Player.Events): void {
				/* required in listener implementation */
			},
			onTimelineChanged: function (_timeline: com.google.android.exoplayer2.Timeline, _manifest: number): void {
				/* required in listener implementation */
			},
			onMediaItemTransition: function (_mediaItem: com.google.android.exoplayer2.MediaItem, _reason: number): void {
				/* required in listener implementation */
			},
			onTracksChanged: function (_trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, _trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void {
				/* required in listener implementation */
			},
			onTracksInfoChanged: function (_tracksInfo: com.google.android.exoplayer2.TracksInfo): void {
				/* required in listener implementation */
			},
			onMediaMetadataChanged: function (_mediaMetadata: com.google.android.exoplayer2.MediaMetadata): void {
				/* required in listener implementation */
			},
			onPlaylistMetadataChanged: function (_mediaMetadata: com.google.android.exoplayer2.MediaMetadata): void {
				/* required in listener implementation */
			},
			onIsLoadingChanged: function (_isLoading: boolean): void {
				/* required in listener implementation */
			},
			onLoadingChanged: function (_isLoading: boolean): void {
				/* required in listener implementation */
			},
			onAvailableCommandsChanged: function (_availableCommands: com.google.android.exoplayer2.Player.Commands): void {
				/* required in listener implementation */
			},
			onTrackSelectionParametersChanged: function (_parameters: com.google.android.exoplayer2.trackselection.TrackSelectionParameters): void {
				/* required in listener implementation */
			},
			onPlayerStateChanged: function (playWhenReady: boolean, playbackState: number): void {
				/* required in listener implementation */
			},
			onPlaybackStateChanged: function (playbackState: number): void {
				const owner = that.get();
				if (!owner) {
					return;
				}
				if (playbackState === com.google.android.exoplayer2.Player.STATE_READY) {
					if (owner.eventPlaybackReady) {
						owner._emit(Video.seekToTimeCompleteEvent);
					}
					if (!owner.eventPlaybackReady) {
						owner.eventPlaybackReady = true;
						owner._emit(Video.playbackReadyEvent);
					}
					if (owner._onReadyEmitEvent.length) {
						do {
							owner._emit(owner._onReadyEmitEvent.shift());
						} while (owner._onReadyEmitEvent.length);
					}
				} else if (playbackState === com.google.android.exoplayer2.Player.STATE_ENDED) {
					if (!owner.loop) {
						owner.eventPlaybackStart = false;
						owner.stopCurrentTimer();
					}
					owner._emit(Video.finishedEvent);
					if (owner.loop) {
						owner.play();
					}
				}
			},
			onPlayWhenReadyChanged: function (playWhenReady: boolean, _reason: number): void {
				const owner = that.get();
				if (!owner) {
					return;
				}
				if (playWhenReady && !owner.eventPlaybackStart) {
					owner.eventPlaybackStart = true;
				}
			},
			onPlaybackSuppressionReasonChanged: function (_playbackSuppressionReason: number): void {
				/* required in listener implementation */
			},
			onIsPlayingChanged: function (_isPlaying: boolean): void {
				/* required in listener implementation */
			},
			onRepeatModeChanged: function (_repeatMode: number): void {
				/* required in listener implementation */
			},
			onShuffleModeEnabledChanged: function (_shuffleModeEnabled: boolean): void {
				/* required in listener implementation */
			},
			onPlayerError: function (error: com.google.android.exoplayer2.PlaybackException): void {
				console.error('PlayerError', error);
			},
			onPlayerErrorChanged: function (_error: com.google.android.exoplayer2.PlaybackException): void {
				/* required in listener implementation */
			},
			onPositionDiscontinuity: function (_reasonOrOldPosition: number | com.google.android.exoplayer2.Player.PositionInfo, _newPosition?: com.google.android.exoplayer2.Player.PositionInfo, _reason?: number): void {
				/* required in listener implementation */
			},
			onPlaybackParametersChanged: function (_playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void {
				/* required in listener implementation */
			},
			onSeekBackIncrementChanged: function (_param0: number): void {
				/* required in listener implementation */
			},
			onSeekForwardIncrementChanged: function (_seekBackIncrementMs: number): void {
				/* required in listener implementation */
			},
			onMaxSeekToPreviousPositionChanged: function (_maxSeekToPreviousPositionMs: number): void {
				/* required in listener implementation */
			},
			onSeekProcessed: function (): void {
				/* required in listener implementation */
			},
			onAudioSessionIdChanged: function (_audioSessionId: number): void {
				/* required in listener implementation */
			},
			onAudioAttributesChanged: function (_audioAttributes: com.google.android.exoplayer2.audio.AudioAttributes): void {
				/* required in listener implementation */
			},
			onVolumeChanged: function (_volume: number): void {
				/* required in listener implementation */
			},
			onSkipSilenceEnabledChanged: function (_skipSilenceEnabled: boolean): void {
				/* required in listener implementation */
			},
			onDeviceInfoChanged: function (_deviceInfo: com.google.android.exoplayer2.DeviceInfo): void {
				/* required in listener implementation */
			},
			onDeviceVolumeChanged: function (_volume: number, _muted: boolean): void {
				/* required in listener implementation */
			},
			onVideoSizeChanged: function (_videoSize: com.google.android.exoplayer2.video.VideoSize): void {
				/* required in listener implementation */
			},
			onSurfaceSizeChanged: function (_width: number, _height: number): void {
				/* required in listener implementation */
			},
			onRenderedFirstFrame: function (): void {
				/* required in listener implementation */
			},
			onCues: function (_cues: java.util.List<com.google.android.exoplayer2.text.Cue>): void {
				/* required in listener implementation */
			},
			onMetadata: function (_metadata: com.google.android.exoplayer2.metadata.Metadata): void {
				/* required in listener implementation */
			},
		});
		if (that.get().player) {
			that.get().player.addListener(playerListener);
		}

		// CUSTOM:

		// var vidListener = new com.google.android.exoplayer2.video.VideoListener({
		// 	get owner() {
		// 		return that.get();
		// 	},
		// 	onRenderedFirstFrame: function () {
		// 		console.log("onRenderedFirstFrame " + this.owner._src);
		// 		if (this.owner && !this.owner.eventPlaybackReady) {
		// 			this.owner.eventPlaybackReady = true;
		// 			this.owner._emit(videoplayer_common_1.Video.playbackReadyEvent);
		// 		}
		// 		if (this.owner) {
		// 			this.owner._emit(videoplayer_common_1.Video.renderedFirstFrameEvent);
		// 		}
		// 	},
		// 	onSurfaceSizeChanged: function (width, height) {

		// 	},
		// 	onVideoSizeChanged: function (width, height) {
		// 		if (this.owner) {
		// 			this.owner.videoWidth = width;
		// 			this.owner.videoHeight = height;
		// 			if (this.owner.fill !== videoplayer_common_1.VideoFill.aspectFill) {
		// 				//this.owner._setupAspectRatio();
		// 			}
		// 		}
		// 	}
		// });

		// var evtListener = new com.google.android.exoplayer2.Player.EventListener({
		// 	get owner() {
		// 		return that.get();
		// 	},
		// 	onLoadingChanged: function () { },
		// 	onPlaybackParametersChanged: function () { },
		// 	onPlayerError: function (error) {
		// 		if (!this.owner) {
		// 			return;
		// 		}
		// 		console.error("PlayerError", error);
		// 		var exception = null;
		// 		switch (error.type) {
		// 			case com.google.android.exoplayer2.ExoPlaybackException.TYPE_RENDERER:
		// 				console.log("PlayerError TYPE_RENDERER");
		// 				exception = error.getRendererException();
		// 			break;
		// 			case com.google.android.exoplayer2.ExoPlaybackException.TYPE_SOURCE:
		// 				console.log("PlayerError TYPE_SOURCE");
		// 				exception = error.getSourceException();
		// 			break;
		// 			case com.google.android.exoplayer2.ExoPlaybackException.TYPE_UNEXPECTED:
		// 				console.log("PlayerError TYPE_UNEXPECTED");
		// 				exception = error.getUnexpectedException();
		// 			break;
		// 		}
		// 		if (exception) {
		// 			console.error("PlayerError", exception.getMessage());
		// 			console.log(this.owner._src);
		// 		}
		// 		this.owner._emit(videoplayer_common_1.Video.playbackErrorEvent);
		// 	},
		// 	onPlayerStateChanged: function (playWhenReady, playbackState) {
		// 		if (!this.owner) {
		// 			return;
		// 		}
		// 		//console.log("playbackState: " + playbackState);
		// 		if (playbackState === STATE_READY) {
		// 			if (!this.owner.textureSurfaceSet && !this.owner.eventPlaybackReady) {
		// 				this.owner.eventPlaybackReady = true;
		// 				this.owner._emit(videoplayer_common_1.Video.playbackReadyEvent);
		// 			}
		// 			if (this.owner._onReadyEmitEvent.length) {
		// 				do {
		// 					this.owner._emit(this.owner._onReadyEmitEvent.shift());
		// 				} while (this.owner._onReadyEmitEvent.length);
		// 			}
		// 			if (playWhenReady && !this.owner.eventPlaybackStart) {
		// 				this.owner.eventPlaybackStart = true;
		// 			}
		// 			var duration = this.owner.getDuration();
		// 			if (isNaN(duration)) {
		// 				//console.log("playbackState duration isNaN");
		// 			}
		// 			else {
		// 				//console.log("playbackState duration " + duration);
		// 			}
		// 		} else if (playbackState === STATE_ENDED) {
		// 			if (!this.owner.loop) {
		// 				this.owner.eventPlaybackStart = false;
		// 				this.owner.stopCurrentTimer();
		// 			}
		// 			this.owner._emit(videoplayer_common_1.Video.finishedEvent);
		// 			if (this.owner.loop) {
		// 				this.owner.play();
		// 			}
		// 		} else if (playbackState === STATE_BUFFERING) {
		// 			this.owner._emit(videoplayer_common_1.Video.bufferingEvent);
		// 		}
		// 	},
		// 	onPositionDiscontinuity: function () {
				
		// 		////console.log("onPositionDiscontinuity");

		// 	},
		// 	onRepeatModeChanged: function () { },
		// 	onSeekProcessed: function () { },
		// 	onShuffleModeEnabledChanged: function () { },
		// 	onTimelineChanged: function (timeline, reason) {
		// 		if (!this.owner) {
		// 			return;
		// 		}
		// 		this.owner.timeline = timeline;
		// 		this.owner._emit(videoplayer_common_1.Video.playbackTimelineChangedEvent);
		// 		//console.log("onTimelineChanged");
		// 		var duration = this.owner.getDuration();
		// 		if (isNaN(duration)) {
		// 			//console.log("onTimelineChanged duration isNaN");
		// 		}
		// 		else {
		// 			//console.log("onTimelineChanged duration " + duration);
		// 			try {
		// 				if (duration && duration > (60000 * 16)) { // 15 mins
		// 					//console.log("Video too long");
		// 					this.owner._emit(videoplayer_common_1.Video.killVideoEvent);
		// 				}
		// 				else if (duration && duration > 0 && this.owner._src.indexOf("http") !== 0) {

		// 					var metaRetriever = new android.media.MediaMetadataRetriever();
		// 					metaRetriever.setDataSource(this.owner._src);
						   
		// 					var metaDuration = metaRetriever.extractMetadata(android.media.MediaMetadataRetriever.METADATA_KEY_DURATION);

		// 					if (Math.abs(metaDuration - duration) > 1000) {

		// 						console.log("killVideoEvent metaDuration: " + metaDuration + " duration: " + duration + " this.owner._src: " + this.owner._src);
		// 						this.owner._emit(videoplayer_common_1.Video.killVideoEvent);

		// 					}

		// 				}
		// 			}
		// 			catch (error) {
		// 				console.log("onTimelineChanged error " + error);
		// 			}
		// 		}
		// 	},
		// 	onTracksChanged: function () { }
		// });

		// //this.mediaPlayer.setVideoListener(vidListener);
		// this.mediaPlayer.addVideoListener(vidListener);
		// this.mediaPlayer.addListener(evtListener);
		 
		// var analyticsListener = new com.google.android.exoplayer2.analytics.AnalyticsListener({
		// 	get owner() {
		// 		return that.get();
		// 	},
		// 	onPlayerStateChanged: function (eventTime, playWhenReady, playbackState) {
		// 		//console.log("onPlayerStateChanged playbackState: " + playbackState);
		// 	},
		// 	onPlaybackStateChanged: function (eventTime, state) {
				
		// 	},
		// 	onPlayWhenReadyChanged: function (eventTime, playWhenReady, reason) {
				
		// 	},
		// 	onPlaybackSuppressionReasonChanged: function (eventTime, playbackSuppressionReason) {
				
		// 	},
		// 	onIsPlayingChanged: function (eventTime, isPlaying) {
				
		// 	},
		// 	onTimelineChanged: function (eventTime, reason) {
		// 		//console.log("onTimelineChanged eventTime: " + eventTime);
		// 	},
		// 	onMediaItemTransition: function (eventTime, mediaItem, reason) {
				
		// 	},
		// 	onPositionDiscontinuity: function (eventTime, reason) {
				
		// 	},
		// 	onSeekStarted: function (eventTime) {
				
		// 	},
		// 	onPlaybackParametersChanged: function (eventTime, playbackParameters) {
				
		// 	},
		// 	onRepeatModeChanged: function (eventTime, repeatMode) {
				
		// 	},
		// 	onShuffleModeChanged: function (eventTime, shuffleModeEnabled) {
				
		// 	},
		// 	onIsLoadingChanged: function (eventTime, isLoading) {
				
		// 	},
		// 	onPlayerError: function (eventTime, error) {
				
		// 	},
		// 	onTracksChanged: function (eventTime, trackGroups, trackSelections) {
				
		// 	},
		// 	onStaticMetadataChanged: function (eventTime, metadataList) {
		// 		////console.log("onStaticMetadataChanged");
		// 	},
		// 	onLoadStarted: function (eventTime, loadEventInfo, mediaLoadData) {
		// 		////console.log("onLoadStarted");
		// 	},
		// 	onLoadCompleted: function (eventTime, loadEventInfo, mediaLoadData) {
				
		// 	},
		// 	onLoadCanceled: function (eventTime, loadEventInfo, mediaLoadData) {
				
		// 	},
		// 	onLoadError: function (eventTime, loadEventInfo, mediaLoadData, error, wasCanceled) {
		// 		////console.log("onLoadError");
		// 	},
		// 	onDownstreamFormatChanged: function (eventTime, mediaLoadData) {
				
		// 	},
		// 	onUpstreamDiscarded: function (eventTime, mediaLoadData) {
				
		// 	},
		// 	onBandwidthEstimate: function (eventTime, totalLoadTimeMs, totalBytesLoaded, bitrateEstimate) {
				
		// 	},
		// 	onMetadata: function (eventTime, metadata) {
		// 		//console.log("onMetadata");
		// 		//console.dir(metadata);
		// 	},
		// 	onAudioEnabled: function (eventTime, counters) {
				
		// 	},
		// 	onAudioDecoderInitialized: function (eventTime, decoderName, initializationDurationMs) {
				
		// 	},
		// 	onAudioInputFormatChanged: function (eventTime, format, decoderReuseEvaluation) {
				
		// 	},
		// 	onAudioPositionAdvancing: function (eventTime, playoutStartSystemTimeMs) {
				
		// 	},
		// 	onAudioUnderrun: function (eventTime, bufferSize, bufferSizeMs, elapsedSinceLastFeedMs) {
				
		// 	},
		// 	onAudioDecoderReleased: function (eventTime, decoderName) {
				
		// 	},
		// 	onAudioDisabled: function (eventTime, counters) {
		// 		//console.log("onAudioDisabled");
		// 	},
		// 	onAudioSessionIdChanged: function (eventTime, audioSessionId) {
				
		// 	},
		// 	onAudioAttributesChanged: function (eventTime, audioAttributes) {
				
		// 	},
		// 	onSkipSilenceEnabledChanged: function (eventTime, skipSilenceEnabled) {
				
		// 	},
		// 	onAudioSinkError: function (eventTime, audioSinkError) {
				
		// 	},
		// 	onVolumeChanged: function (eventTime, volume) {
				
		// 	},
		// 	onVideoEnabled: function (eventTime, counters) {
		// 	   // console.log("onVideoEnabled");
		// 	},
		// 	onVideoDecoderInitialized: function (eventTime, decoderName, initializationDurationMs) {
		// 		//console.log("onVideoDecoderInitialized: " + decoderName);
		// 	},
		// 	onVideoInputFormatChanged: function (eventTime, format) {
		// 		//console.log("Native onVideoInputFormatChanged format: " + format);
		// 		//format.rotationDegrees = 90;
		// 		//console.log("format.rotationDegrees: " + format.rotationDegrees);
		// 		if (format && typeof format.height !== "undefined") {
		// 			//console.log("onVideoInputFormatChanged A format.height: " + format.height);
		// 			var width = parseInt(format.width, 10);
		// 			var height = parseInt(format.height, 10);
		// 			this.owner.videoWidth = width;
		// 			this.owner.videoHeight = height;
		// 			//console.log("onVideoInputFormatChanged B width: " + width + " height: " + height);
		// 			if (!isNaN(height) && height > 1080) {
		// 				console.log("TOOOOOOOOO HIGH FOR DECODER B width: " + width + " height: " + height);
		// 				this.owner._emit(videoplayer_common_1.Video.killVideoEvent);
		// 			}
		// 			else {
		// 				//this.owner._emit(videoplayer_common_1.Video.videoSizeChangedEvent);
		// 			}
		// 			/*
		// 			if (this.owner && typeof this.owner.width !== "undefined") {
		// 				var wsRatio = 16 / 9;
		// 				var oldRatio = this.owner.width / this.owner.height;
		// 				var newRatio = width / height;
		// 				//console.log("oldRatio: " + oldRatio + " newRatio: " + newRatio + " surfaceView: " + this.owner.surfaceView);
		// 				var txform = new android.graphics.Matrix();
		// 				this.owner.surfaceView.getTransform(txform);
		// 				if (newRatio > wsRatio) { // Widescreen

		// 					txform.setScale(wsRatio - newRatio, 1);

		// 				}
		// 				else { // SD 4:3

		// 					txform.setScale(1, newRatio - wsRatio);

		// 				}
		// 				this.owner.surfaceView.setTransform(txform);
		// 			}
		// 			*/
		// 		}
		// 	},
		// 	onDroppedVideoFrames: function (eventTime, droppedFrames, elapsedMs) {
		// 		//console.log("onDroppedVideoFrames");
		// 	},
		// 	onVideoDecoderReleased: function (eventTime, decoderName) {
				
		// 	},
		// 	onVideoDisabled: function (eventTime, counters) {
		// 		//console.log("onVideoDisabled");
		// 	},
		// 	onVideoFrameProcessingOffset: function (eventTime, totalProcessingOffsetUs, frameCount) {
				
		// 	},
		// 	onRenderedFirstFrame: function (eventTime, surface) {
		// 		//console.log("onRenderedFirstFrame A surface: " + surface + " this.owner.width: " + this.owner.width + " this.owner.height: " + this.owner.height);
		// 		//this.owner.surfaceView = surface;
		// 		/*
		// 		var aspectRatio = width / height;
		// 		if (aspectRatio > (16 / 9)) { // Widescreen


		// 		}
		// 		else { // SD 4:3


		// 		}
		// 		*/
		// 	},
		// 	onVideoSizeChanged: function (eventTime, width, height, unappliedRotationDegrees, pixelWidthHeightRatio) {
		// 		this.owner.mediaPlayer.setVideoScalingMode(com.google.android.exoplayer2.C.VIDEO_SCALING_MODE_SCALE_TO_FIT);
		// 		var width = parseInt(width, 10);
		// 		var height = parseInt(height, 10);
		// 		//console.log("onVideoSizeChanged A width: " + width + " height: " + height + " pixelWidthHeightRatio: " + pixelWidthHeightRatio);
		// 		if (!isNaN(height) && height > 1080) {
		// 			console.log("TOOOOOOOOO HIGH FOR DECODER A");
		// 			this.owner._emit(videoplayer_common_1.Video.killVideoEvent);
		// 		}
		// 		this.owner.width = width;
		// 		this.owner.height = height;
		// 		this.owner._emit(videoplayer_common_1.Video.videoSizeChangedEvent);
		// 	},
		// 	onSurfaceSizeChanged: function (eventTime, width, height) {
				
		// 	},
		// 	onPlayerReleased: function (eventTime) {
				
		// 	},
		// 	onEvents: function (player, events) {
		// 		//console.log("onEvents");
		// 	},
		// 	onDecoderEnabled: function (eventTime, trackType, decoderCounters) {
		// 		//console.log("onDecoderEnabled: " + decoderCounters);
		// 	},
		// 	onDecoderInitialized: function (eventTime, trackType, decoderName, initializationDurationMs) {
		// 		if (trackType === 2) {
		// 			console.log("onDecoderInitialized: " + decoderName);
		// 		}
		// 	},
		// 	onDecoderInputFormatChanged: function (eventTime, trackType, format) {
				
		// 	},
		// 	onDecoderDisabled: function (eventTime, trackType, decoderCounters) {
		// 		//console.log("onDecoderDisabled: " + decoderCounters);
		// 	}
		// });

		// this.mediaPlayer.addAnalyticsListener(analyticsListener);
	   
		// var audioRendererEventListener = new com.google.android.exoplayer2.audio.AudioRendererEventListener({
		// 	get owner() {
		// 		return that.get();
		// 	},
		// 	onAudioDecoderInitialized: function (decoderName, initializedTimestampMs, initializationDurationMs) {
		// 		//console.log("onAudioDecoderInitialized decoderName: " + decoderName);
		// 	},
		// 	onAudioDisabled: function (counters) {
		// 		//console.log("onAudioDisabled");
		// 	},
		// 	onAudioEnabled: function (counters) {
		// 		//console.log("onAudioEnabled");
		// 	},
		// 	onAudioInputFormatChanged: function (format) {
		// 		//console.log("onAudioInputFormatChanged format: " + format);
		// 	},
		// 	onAudioSessionId: function (audioSessionId) {

		// 		this.owner.audioSessionId = audioSessionId;

		// 		//console.log("onAudioSessionId audioSessionId: " + this.owner.audioSessionId);

		// 		/*
		// 		try {

		// 			var loudnessEnhancer = new android.media.audiofx.LoudnessEnhancer(this.audioSessionId);
		// 			//console.log("loudnessEnhancer: " + loudnessEnhancer);

		// 			loudnessEnhancer.setTargetGain(-100000);
		// 			loudnessEnhancer.setEnabled(true);

		// 			//console.log("loudnessEnhancer.getTargetGain: " + loudnessEnhancer.getTargetGain());

		// 		}
		// 		catch (error) {

		// 			//console.log("loudnessEnhancer error: " + error);

		// 		}
		// 		*/

		// 	},
		// 	onAudioSinkUnderrun: function (bufferSize, bufferSizeMs, elapsedSinceLastFeedMs) {
		// 		//console.log("onAudioSinkUnderrun");
		// 	}
		// });

		//this.mediaPlayer.setAudioDebugListener(audioRendererEventListener);
	};

	_setupMediaController() {
		this.nativeView.setUseController(!!this.controls);

		// CUSTOM:
        // var that = new WeakRef(this);
		// if (this.surface) {
		// 	this._textureView.setSurfaceTextureListener(new android.view.TextureView.SurfaceTextureListener({
		// 		get owner() {
		// 			return that.get();
		// 		},
		// 		onSurfaceTextureSizeChanged: function (surface, width, height) {
		// 			//console.log("SurfaceTexutureSizeChange", width, height);
		// 			//this.owner._setupAspectRatio();
		// 		},
		// 		onSurfaceTextureAvailable: function () {
		// 			if (this.owner) {
		// 				this.owner._setupTextureSurface();
		// 			}
		// 		},
		// 		onSurfaceTextureDestroyed: function () {
		// 			if (!this.owner) {
		// 				return true;
		// 			}
		// 			if (this.owner.textureSurface !== null) {
		// 				this.owner.textureSurfaceSet = false;
		// 				this.owner.textureSurface.release();
		// 				this.owner.textureSurface = null;
		// 			}
		// 			this.owner.release();
		// 			return true;
		// 		},
		// 		onSurfaceTextureUpdated: function () {
		// 		}
		// 	}));
		// }
	}

	_detectTypeFromSrc(uri: android.net.Uri | string) {
		if (typeof uri === 'string') {
			if (uri.indexOf('.m3u8') > -1) {
				return this.TYPE.HLS;
			} else if (uri.indexOf('.mp4') > -1) {
				return this.TYPE.OTHER;
			}

			if (uri.toString().indexOf("mode=hls") !== -1 || uri.toString().indexOf("m3u8") !== -1) {
                return this.TYPE.HLS;
            }
		}
		const type = com.google.android.exoplayer2.util.Util.inferContentType(uri as android.net.Uri);
		switch (type) {
			case 0:
				return this.TYPE.DASH;
			case 1:
				return this.TYPE.SS;
			case 2:
				return this.TYPE.HLS;
			default:
				return this.TYPE.OTHER;
		}
	}

	cacheWriteDataSink(secretKey, cacheSink, scratch) {
		return new com.google.android.exoplayer2.upstream.DataSink.Factory({
			createDataSink: function () {
				return new com.google.android.exoplayer2.upstream.crypto.AesCipherDataSink(secretKey, cacheSink, scratch);
			}
		})
	}
	cacheReadDataSource(secretKey, file) {
		return new com.google.android.exoplayer2.upstream.DataSource.Factory({
			createDataSource: function () {
				return new com.google.android.exoplayer2.upstream.crypto.AesCipherDataSource(secretKey, file);
			}
		})
	}
	private _hex2bytes(hexString: string) {
		if (hexString == null || hexString.length === 0) {
			return null;
		}
		var kl = hexString.length;
		var key = Array.create("byte", kl / 2);
		for (var i = 0, j = 0; i < kl; i += 2, j++) {
			key[j] = parseInt(hexString.substring(i, 2), 16);
		}
		return key;
	}
	private _setupEncryptedDataSource(url, encryption, bm) {
		if (encryption.toUpperCase() !== "CTR") {
			// TODO: AES/CBC and AES/CFB also support parallelizable decryption which means random seek ability
			// TODO: see https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation
			throw new Error("Unknown Decryption type, CTR is current only supported");
		}

		const key = this._hex2bytes(this.encryptionKey);
		const iv = this._hex2bytes(this.encryptionIV);

		const keySpec = new javax.crypto.spec.SecretKeySpec(key, "AES");
		const ivSpec = new javax.crypto.spec.IvParameterSpec(iv);

		let cipher;
		switch (encryption.toUpperCase()) {
			case 'CFB':
				cipher = javax.crypto.Cipher.getInstance("AES/CFB/NoPadding");
				break;

			case 'CBC':
				cipher = javax.crypto.Cipher.getInstance("AES/CBC/NoPadding");
				break;

			case 'CTR':
			default:
			cipher = javax.crypto.Cipher.getInstance("AES/CTR/NoPadding");
		}
		cipher.init(javax.crypto.Cipher.DECRYPT_MODE,keySpec, ivSpec);

		return new (<any>global).io.nstudio.plugins.exoplayer.EncryptedFileDataSourceFactory(cipher, keySpec, ivSpec, bm);

        // console.log("_setupEncryptedDataSource: " + this.encryptionKey);
		// var key = this._hex2bytes(this.encryptionKey);
		// var iv = this._hex2bytes(this.encryptionIV);
		// var keySpec = new javax.crypto.spec.SecretKeySpec(key, "AES");
		// var ivSpec = new javax.crypto.spec.IvParameterSpec(iv);
		// var cipher = javax.crypto.Cipher.getInstance("AES/CTR/NoPadding");
		// cipher.init(javax.crypto.Cipher.DECRYPT_MODE, keySpec, ivSpec);
		// return new global.io.nstudio.plugins.exoplayer.EncryptedFileDataSourceFactory(cipher, keySpec, ivSpec, bm);
	};

	_openVideo() {
		if (this._src === null) {
			return;
		}
		this.release();
		if (!this.interval && this.observeCurrentTime) {
			this.startCurrentTimer();
		}
		this.videoOpened = true;

		if (!this.backgroundAudio) {
			const am: android.media.AudioManager = this._context.getSystemService(android.content.Context.AUDIO_SERVICE);
			if (com.google.android.exoplayer2.util.Util.SDK_INT >= 26) {
				const afr = new android.media.AudioFocusRequest.Builder(android.media.AudioManager.AUDIOFOCUS_GAIN).build();
				am.requestAudioFocus(afr);
			} else {
				am.requestAudioFocus(null, android.media.AudioManager.STREAM_MUSIC, android.media.AudioManager.AUDIOFOCUS_GAIN);
			}
		}
		try {
			const bm = new com.google.android.exoplayer2.upstream.DefaultBandwidthMeter.Builder(this._context).build();
			const trackSelection = new com.google.android.exoplayer2.trackselection.AdaptiveTrackSelection.Factory();
			const trackSelector = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector(this._context, trackSelection);
			const loadControl = new com.google.android.exoplayer2.DefaultLoadControl();
			const builder = new com.google.android.exoplayer2.ExoPlayer.Builder(this._context);
			builder.setTrackSelector(trackSelector);
			builder.setLoadControl(loadControl);
			this.player = builder.build();

			if (this.fill === VideoFill.aspectFill) {
				this.nativeView.setResizeMode(com.google.android.exoplayer2.ui.AspectRatioFrameLayout.RESIZE_MODE_ZOOM);
			} else if (this.fill === VideoFill.aspect) {
				this.nativeView.setResizeMode(com.google.android.exoplayer2.ui.AspectRatioFrameLayout.RESIZE_MODE_FIT);
			} else if (this.fill === VideoFill.fill) {
				this.nativeView.setResizeMode(com.google.android.exoplayer2.ui.AspectRatioFrameLayout.RESIZE_MODE_FILL);
			}
			const userAgent = com.google.android.exoplayer2.util.Util.getUserAgent(this._context, Utils.ad.getApplicationContext().getPackageName());
			const dsf = new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(this._context, userAgent, bm);
			let vs: com.google.android.exoplayer2.source.MediaSource;
			if (this._src instanceof String || typeof this._src === 'string') {
				const uri = android.net.Uri.parse(<string>this._src);
				const mediaItem = com.google.android.exoplayer2.MediaItem.fromUri(uri);
				const type = this._detectTypeFromSrc(uri);
				switch (type) {
					case this.TYPE.SS:
						vs = new com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory(dsf).createMediaSource(mediaItem);
						break;
					case this.TYPE.DASH:
						vs = new com.google.android.exoplayer2.source.dash.DashMediaSource.Factory(dsf).createMediaSource(mediaItem);
						break;
					case this.TYPE.HLS:
						vs = new com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory(dsf)
							// .setAllowChunklessPreparation(true)
							.createMediaSource(mediaItem);
						break;
					default:
						vs = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(dsf).createMediaSource(mediaItem);
				}
			} else if (typeof this._src.typeSource === 'number') {
				const mediaItem = com.google.android.exoplayer2.MediaItem.fromUri(android.net.Uri.parse(this._src.url));
				switch (this._src.typeSource) {
					case this.TYPE.SS:
						vs = new com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory(dsf).createMediaSource(mediaItem);
						break;
					case this.TYPE.DASH:
						vs = new com.google.android.exoplayer2.source.dash.DashMediaSource.Factory(dsf).createMediaSource(mediaItem);
						break;
					case this.TYPE.HLS:
						vs = new com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory(dsf).setAllowChunklessPreparation(true).createMediaSource(mediaItem);
						break;
					default:
						vs = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(dsf).createMediaSource(mediaItem);
				}
			} else {
				vs = this._src as com.google.android.exoplayer2.source.MediaSource;
			}
			try {
				if (this._subtitlesSrc != null && this._subtitlesSrc.trim() != '') {
					const subtitleUri = android.net.Uri.parse(this._subtitlesSrc.trim());
					const subtitleConfig = new com.google.android.exoplayer2.MediaItem.SubtitleConfiguration.Builder(subtitleUri).setMimeType(com.google.android.exoplayer2.util.MimeTypes.APPLICATION_SUBRIP).setLanguage('en').build();
					const subtitlesSrc = new com.google.android.exoplayer2.source.SingleSampleMediaSource.Factory(dsf).createMediaSource(subtitleConfig, com.google.android.exoplayer2.C.TIME_UNSET);
					const mergedArray = Array.create(com.google.android.exoplayer2.source.MediaSource, 2);
					mergedArray[0] = vs;
					mergedArray[1] = subtitlesSrc;
					vs = new com.google.android.exoplayer2.source.MergingMediaSource(mergedArray);
				}
			} catch (ex) {
				console.log('Error loading subtitles:', ex, ex.stack);
			}
			if (this.nativeView) {
				this.nativeView.setPlayer(this.player);
			}
			this._setupMediaPlayerListeners();
			this.player.setMediaSource(vs);
			if (this.autoplay === true) {
				this.player.prepare();
				this.player.setPlayWhenReady(true);
			}
			if (this.preSeekTime > 0) {
				this.player.seekTo(this.preSeekTime);
				this.preSeekTime = -1;
			}
		} catch (ex) {
			console.log('Error:', ex, ex.stack);
		}

		// var am = nsUtils.ad.getApplicationContext().getSystemService(android.content.Context.AUDIO_SERVICE);
        // am.requestAudioFocus(null, android.media.AudioManager.STREAM_MUSIC, android.media.AudioManager.AUDIOFOCUS_GAIN);
        
        // try {
		//     const bm = new com.google.android.exoplayer2.upstream.DefaultBandwidthMeter.Builder(this._context).build();
            
        //     if (typeof nsApp.defaultBandwidthMeter === "undefined") {
		// 		nsApp.defaultBandwidthMeter = new com.google.android.exoplayer2.upstream.DefaultBandwidthMeter();
		// 	}

		// 	var trackSelection = new com.google.android.exoplayer2.trackselection.AdaptiveTrackSelection.Factory(nsApp.defaultBandwidthMeter); 
		// 	var trackSelector = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector(trackSelection);

        //     if (this.silent) {
            
        //         trackSelector.setParameters(trackSelector
        //             .buildUponParameters()
        //             .setMaxVideoSize(1920, 1080)
        //             .setRendererDisabled(1, true)
        //         );

        //     }
        //     else if (this.minStream) {

        //         var maxWidth = 320;
        //         var maxHeight = 180;

        //         trackSelector.setParameters(trackSelector
        //                     .buildUponParameters()
        //                     .setMaxVideoSizeSd()
        //                     .setMaxVideoBitrate(200000)
        //                     .setMaxVideoSize(maxWidth, maxHeight)
        //                     .setRendererDisabled(1, true)
        //         );

        //     }
        //     else {

        //         trackSelector.setParameters(trackSelector
        //             .buildUponParameters()
        //             .setMaxVideoSize(1920, 1080)
        //         );

        //     }

        //     let uri = android.net.Uri.parse(this._src);

        //     console.log("this.encrypted: " + this.encrypted);

		//     let dsf;
        //     if (this.encrypted) {
		// 		   dsf = this._setupEncryptedDataSource(this._src, this.encryption, bm);

        //     }
        //     else {
		//         dsf = new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(this._context, "NativeScript", bm);

        //     }

        //     if (this.live || this.partialBuffer || this.isTablet) {

        //         var minBufferMs = 6000;
		// 		var maxBufferMs = 20000;
		// 		var bufferForPlaybackMs = 1200;
		// 		var bufferForPlaybackAfterRebufferMs = 6000;

		// 		var loadControl = new com.google.android.exoplayer2.DefaultLoadControl.Builder().setBufferDurationsMs(minBufferMs, maxBufferMs, bufferForPlaybackMs, bufferForPlaybackAfterRebufferMs).createDefaultLoadControl();
                
		// 	}
		// 	else {

		// 		var minBufferMs = 60000 * 3; // 3 Minutes
		// 		var maxBufferMs = 60000 * 3; // 3 Minutes
		// 		var bufferForPlaybackMs = 1200;
		// 		var bufferForPlaybackAfterRebufferMs = 6000;

        //         var loadControl = new com.google.android.exoplayer2.DefaultLoadControl.Builder().setBufferDurationsMs(minBufferMs, maxBufferMs, bufferForPlaybackMs, bufferForPlaybackAfterRebufferMs).createDefaultLoadControl();

        //     }

        //     var renderersFactory = new com.google.android.exoplayer2.DefaultRenderersFactory(this._context);
            
        //     if (this.encrypted) {

        //         let ef = new com.google.android.exoplayer2.extractor.DefaultExtractorsFactory();
        //         var mediaSource = new com.google.android.exoplayer2.source.ExtractorMediaSource(uri, dataSourceFactory, ef, null, null, null);
            
        //     }
        //     else if (this._src instanceof String || typeof this._src === "string") {

		// 		var mediaType = this.type && this.type === "hls" ? this.TYPE.HLS : this._detectTypeFromSrc(uri);

        //         switch (mediaType) {

        //             case this.TYPE.HLS:

        //                 var mediaSource = new com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory(dataSourceFactory).createMediaSource(android.net.Uri.parse(this._src));

        //             break;

        //             default:

        //                 var mediaSource = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(dataSourceFactory).createMediaSource(android.net.Uri.parse(this._src));

        //             break;

        //         }

        //     }

        //     if (this.silent || (typeof this._src === "string" && this._src.indexOf("http") !== 0)) {

        //         this._gaudioProcessor = this.createGaudioProcessor(this._src);
        //         this.mediaPlayer = com.google.android.exoplayer2.ExoPlayerFactory.newSimpleInstance(this._context, new com.loop.gaudio.ProcessorFactory(this._context, this._gaudioProcessor), trackSelector, loadControl);

        //     }
        //     else {

        //         var renderersFactory = new com.google.android.exoplayer2.DefaultRenderersFactory(this._context);
        //         this.mediaPlayer = com.google.android.exoplayer2.ExoPlayerFactory.newSimpleInstance(this._context, renderersFactory, trackSelector, loadControl);

        //     }
            
        //     this.mediaPlayer.prepare(mediaSource, true, true);

        //     this._setupMediaPlayerListeners();

        //     if (this.surface) {

		// 		if (this.textureSurface && !this.textureSurfaceSet) {
		// 			this.textureSurfaceSet = true;
		// 			this.mediaPlayer.setVideoSurface(this.textureSurface);
		// 		}
		// 		else {
		// 			this._setupTextureSurface();
		// 		}

		// 	}
            
        //     if (this.autoplay === true) {

		// 		this.mediaPlayer.setPlayWhenReady(true);

		// 	}

        //     if (this.speed) {

        //         var playbackParameters = new com.google.android.exoplayer2.PlaybackParameters(this.speed);
        //         this.mediaPlayer.setPlaybackParameters(playbackParameters);

        //     }

		// 	if (this.preSeekTime > 0) {

		// 		this.mediaPlayer.seekTo(this.preSeekTime);
		// 		this.preSeekTime = -1;

		// 	}

        //     this.mediaState = SURFACE_READY;
        // }
        // catch (ex) {
        //     console.log("Error:", ex, ex.stack);
        // }
	}

	_setNativeVideo(nativeVideo) {
		this._src = nativeVideo;
		this._suspendLocation = 0;
		this._openVideo();
	}

	_updateSubtitles(subtitlesSrc) {
		if (this.enableSubtitles) {
			this._subtitlesSrc = subtitlesSrc;
			if (this.player != null) {
				this.preSeekTime = this.player.getCurrentPosition();
			}
			this._openVideo();
		}
	}

	play() {
		if (!this.player) {
			this._openVideo();
		} else if (this.playState === com.google.android.exoplayer2.Player.STATE_ENDED) {
			this.eventPlaybackStart = false;
			if (this.player) {
				this.player.seekToDefaultPosition();
			}
		}
		if (this.player) {
			this.player.prepare();
			this.player.setPlayWhenReady(true);
			this.startCurrentTimer();
		}

		// if (!this.mediaPlayer || this.mediaState === SURFACE_WAITING) {
        //     this._openVideo();
        // }
        // else if (this.playState === STATE_ENDED) {
        //     this.eventPlaybackStart = false;
        //     this.mediaPlayer.seekToDefaultPosition();
        //     this.startCurrentTimer();
        // }
        // else {
        //     this.mediaPlayer.setPlayWhenReady(true);
        //     this.startCurrentTimer();
        // }
	}

	pause() {
		if (this.player) {
			this.player.setPlayWhenReady(false);
		}
	}

	mute(mute) {
		if (this.player) {
			this.player.setVolume(mute ? 0 : 1);
		}
	}

	stop() {
		if (this.player) {
			this.stopCurrentTimer();
			this.player.stop();
			this.player.seekToDefaultPosition();
			// don't release the player, because this prevents the player internal action buttons
			this.release();
		}
	}

	_addReadyEvent(value) {
		if (this._onReadyEmitEvent.indexOf(value) > -1) {
			return;
		}
		this._onReadyEmitEvent.push(value);
	}

	seekToTime(ms) {
		this._addReadyEvent(Video.seekToTimeCompleteEvent);
		if (!this.player) {
			this.preSeekTime = ms;
			return;
		} else {
			this.preSeekTime = -1;
		}
		if (this.player) {
			this.player.seekTo(ms);
		}
	}

	isPlaying() {
		if (!this.player) {
			return false;
		}
		if (this.playState === com.google.android.exoplayer2.Player.STATE_READY) {
			return this.player.getPlayWhenReady();
		}
		return false;
	}

	getDuration() {
		if (!this.player) {// || this.mediaState === SURFACE_WAITING || this.playState === STATE_IDLE) {
			return 0;
		}
		const duration = this.player.getDuration();
		if (isNaN(duration)) {
			return 0;
		} else {
			return duration;
		}
	}

	getCurrentTime() {
		if (!this.player) {
			return 0;
		}
		return this.player.getCurrentPosition();
	}

	setVolume(volume: number) {
		if (this.player) {
			this.player.setVolume(volume);
		}
	}

	destroy() {
		this.release();
		this.src = null;
        // this._textureView = null;
        // this.player = null;
        // this.mediaController = null;
        if (this._gaudioProcessor) {
            this._gaudioProcessor.destroyCore();
        }
	}

	release() {
		this.stopCurrentTimer();
		this.videoOpened = false;
		this.eventPlaybackReady = false;
		this.eventPlaybackStart = false;
		this.textureSurfaceSet = false;
		if (this.player) {
			this.player.stop();
		}
		if (this.player !== null) {
			this.player.release();
			this.player = null;
			const am: android.media.AudioManager = this._context.getSystemService(android.content.Context.AUDIO_SERVICE);
			if (com.google.android.exoplayer2.util.Util.SDK_INT >= 26) {
				const afr = new android.media.AudioFocusRequest.Builder(android.media.AudioManager.AUDIOFOCUS_GAIN).build();
				am.abandonAudioFocusRequest(afr);
			} else {
				am.abandonAudioFocus(null);
			}
		}

		// CUSTOM:
		// if (this.mediaPlayer !== null) {
        //     this.mediaState = SURFACE_WAITING;
        //     this.mediaPlayer.release();
        //     this.mediaPlayer = null;
        //     if (this.mediaController && this.mediaController.isVisible()) {
        //         this.mediaController.hide();
        //     }
        //     var am = nsUtils.ad.getApplicationContext().getSystemService(android.content.Context.AUDIO_SERVICE);
        //     am.abandonAudioFocus(null);
        // }
	}

	suspendEvent() {
		this._suspendLocation = this.getCurrentTime();
		if (this.nativeView) {
			this.nativeView.onPause();
		}
		// this.release();
		this._resumeOnFocusGain = this.player.isPlaying();
		this.player.setPlayWhenReady(false);
	}

	resumeEvent() {
		if (this._suspendLocation) {
			this.seekToTime(this._suspendLocation);
			this._suspendLocation = 0;
		}
		if (this.nativeView) {
			this.nativeView.onResume();
		}
		//this._openVideo();
		if (this._resumeOnFocusGain) {
			this._resumeOnFocusGain = false;
			this.player.setPlayWhenReady(true);
		}
	}

	startCurrentTimer() {
		// console.log('[EXOPLAYER] startCurrentTimer');
		if (this.interval) {
			return;
		}
		this.lastTimerUpdate = -1;
		const that = new WeakRef(this);
		this.interval = <any>setInterval(function () {
			if (that?.get()) {
				that.get().fireCurrentTimeEvent();
			}
		}, 200);
	}

	fireCurrentTimeEvent() {
		if (!this.nativeView || !this.nativeView.getPlayer()) {
			return;
		}
		const curTimer = this.nativeView.getPlayer().getCurrentPosition();
		if (curTimer !== this.lastTimerUpdate) {
			this.notify({
				eventName: Video.currentTimeUpdatedEvent,
				object: this,
				position: curTimer,
			});
			this.lastTimerUpdate = curTimer;
		}
	}

	stopCurrentTimer() {
		if (typeof this.interval === 'number') {
			clearInterval(this.interval);
			this.interval = null;
		}
		this.fireCurrentTimeEvent();
	}

	createGaudioProcessor(src) {
        const uri = this.getUri(src);
        const filePath = uri.getPath();
        const solPath = filePath.replace(/\.[^/.]+$/, '.sol');

        console.log("createGaudioProcessor");
        console.log("filePath: " + filePath + " exists: " + File.exists(filePath));
        console.log("solPath: " + solPath + " exists: " + File.exists(solPath));

        const videoFilePath = new java.util.ArrayList();
        videoFilePath.add(filePath);
        const solFilePath = new java.util.ArrayList();
        solFilePath.add(solPath);
        this._mInfo = new (<any>global).com.loop.gaudio.PlaybackInformation(videoFilePath, solFilePath);
        return new (<any>global).com.loop.gaudio.GaudioProcessor(this._mInfo);
    }

	getUri(src) {
        if (src instanceof String || typeof src === "string") {
            return android.net.Uri.parse(<string>src);
        }
        if (typeof this._src.typeSource === "number") {
            return android.net.Uri.parse(src.url);
        }
        return src;
    };
}
