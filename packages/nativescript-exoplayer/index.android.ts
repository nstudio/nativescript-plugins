/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Video as VideoBase, VideoFill, videoSourceProperty, subtitleSourceProperty  } from './common';
import { Application, Utils } from '@nativescript/core';

export * from './common';

// States from Exo Player
const STATE_IDLE: number = 1;
const STATE_BUFFERING: number = 2;
const STATE_READY: number = 3;
const STATE_ENDED: number = 4;

const SURFACE_WAITING: number = 0;
const SURFACE_READY: number = 1;

export class Video extends VideoBase {
	private _textureView: android.widget.VideoView
	private _subtitlesView: com.google.android.exoplayer2.ui.SubtitleView
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

	public TYPE = {DETECT: 0, SS: 1, DASH: 2, HLS: 3, OTHER: 4};
	public nativeView: com.google.android.exoplayer2.ui.PlayerView;
	public player: com.google.android.exoplayer2.ExoPlayer;

	constructor() {
		super();
		this._boundStart = this.resumeEvent.bind(this);
		this._boundStop = this.suspendEvent.bind(this);
		this._resumeOnFocusGain = false;
		this.enableSubtitles = false;
		this.TYPE = {DETECT: 0, SS: 1, DASH: 2, HLS: 3, OTHER: 4};
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

	get playState(): any {
		if (!this.nativeView || !this.nativeView.getPlayer()) {
			return STATE_IDLE;
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

	_setupMediaPlayerListeners = function () {
		const that = new WeakRef(this);
		const playerListener = new com.google.android.exoplayer2.Player.Listener({
			onIsPlayingChanged: function (isPlaying: boolean): void {},
			onLoadingChanged: function (isLoading: boolean): void {},
			onPlaybackParametersChanged: function (playbackParameters: com.google.android.exoplayer2.PlaybackParameters): void {},
			onPlaybackSuppressionReasonChanged: function (playbackSuppressionReason: number): void {},
			onPlayerError: function (error: com.google.android.exoplayer2.PlaybackException): void {
				console.error('PlayerError', error);
			},
			onPlayerStateChanged: function (playWhenReady: boolean, playbackState: number): void {
				const owner = that.get();
				if (!owner) {
					return;
				}
				if (playbackState === STATE_READY) {
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
					if (playWhenReady && !owner.eventPlaybackStart) {
						owner.eventPlaybackStart = true;
					}
				} else if (playbackState === STATE_ENDED) {
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
			onPositionDiscontinuity: function (reasonOrOldPositrion: number | com.google.android.exoplayer2.Player.PositionInfo, newPosition?: com.google.android.exoplayer2.Player.PositionInfo, reason?: number): void {},
			onRepeatModeChanged: function (repeatMode: number): void {},
			onSeekProcessed: function (): void {},
			onShuffleModeEnabledChanged: function (shuffleModeEnabled: boolean): void {},
			onTimelineChanged: function (timeline: com.google.android.exoplayer2.Timeline, manifest: number): void {},
			onTracksChanged: function (trackGroups: com.google.android.exoplayer2.source.TrackGroupArray, trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray): void {},
			onMediaItemTransition: function (param0: com.google.android.exoplayer2.MediaItem, _param1: number): void {},
			onMediaMetadataChanged: function (param0: com.google.android.exoplayer2.MediaMetadata): void {},
			onPlaylistMetadataChanged: function (param0: com.google.android.exoplayer2.MediaMetadata): void {},
			onIsLoadingChanged: function (param0: boolean): void {},
			onAvailableCommandsChanged: function (_param0: com.google.android.exoplayer2.Player.Commands): void {},
			onPlaybackStateChanged: function (param0: number): void {},
			onPlayWhenReadyChanged: function (param0: boolean, param1: number): void {},
			onPlayerErrorChanged: function (param0: com.google.android.exoplayer2.PlaybackException): void {},
			onSeekBackIncrementChanged: function (_param0: number): void {},
			onSeekForwardIncrementChanged: function (_param0: number): void {},
			onMaxSeekToPreviousPositionChanged: function (_param0: number): void {},
			onEvents: function (_param0: com.google.android.exoplayer2.Player, _param1: com.google.android.exoplayer2.Player.Events): void {},
			onTracksInfoChanged: function (_param0: com.google.android.exoplayer2.TracksInfo): void {},
			onTrackSelectionParametersChanged: function (_param0: com.google.android.exoplayer2.trackselection.TrackSelectionParameters): void {},
			onAudioSessionIdChanged: function (_param0: number): void {},
			onAudioAttributesChanged: function (_param0: com.google.android.exoplayer2.audio.AudioAttributes): void {},
			onVolumeChanged: function (_param0: number): void {},
			onSkipSilenceEnabledChanged: function (_param0: boolean): void {},
			onDeviceInfoChanged: function (_param0: com.google.android.exoplayer2.DeviceInfo): void {},
			onDeviceVolumeChanged: function (_param0: number, _param1: boolean): void {},
			onVideoSizeChanged: function (_param0: com.google.android.exoplayer2.video.VideoSize): void {},
			onSurfaceSizeChanged: function (_param0: number, _param1: number): void {},
			onRenderedFirstFrame: function (): void {},
			onCues: function (_param0: java.util.List<com.google.android.exoplayer2.text.Cue>): void {},
			onMetadata: function (_param0: com.google.android.exoplayer2.metadata.Metadata): void {},
		});
		if (this.player) {
			this.player.addListener(playerListener);
		}
	};

	_setupMediaController() {
		this.nativeView.setUseController(!!this.controls);
	}

	_detectTypeFromSrc(uri: android.net.Uri | string) {
		if (typeof uri === 'string') {
			if (uri.indexOf('.m3u8') > -1) {
				return this.TYPE.HLS;
			} else if (uri.indexOf('.mp4') > -1) {
				return this.TYPE.OTHER;
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
			const ctx: android.content.Context = Utils.android.getApplicationContext()
			const am: android.media.AudioManager = ctx.getSystemService(android.content.Context.AUDIO_SERVICE);
			const afr = new android.media.AudioFocusRequest.Builder(android.media.AudioManager.AUDIOFOCUS_GAIN).build();
			am.requestAudioFocus(afr);
		}
		try {
			const bm = new com.google.android.exoplayer2.upstream.DefaultBandwidthMeter();
			const trackSelection = new com.google.android.exoplayer2.trackselection.AdaptiveTrackSelection.Factory();
			const trackSelector = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector(trackSelection);
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
			const dsf = new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(this._context, com.google.android.exoplayer2.util.Util.getUserAgent(this._context, Utils.ad.getApplicationContext().getPackageName()), bm);
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
				const mediaItem = com.google.android.exoplayer2.MediaItem.fromUri(android.net.Uri.parse(this._src.url))
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
					const subtitle = new com.google.android.exoplayer2.MediaItem.Subtitle(subtitleUri, com.google.android.exoplayer2.util.MimeTypes.APPLICATION_SUBRIP, 'en');
					const subtitlesSrc = new com.google.android.exoplayer2.source.SingleSampleMediaSource.Factory(dsf).createMediaSource(subtitle, com.google.android.exoplayer2.C.TIME_UNSET);
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
				this.player.setPlayWhenReady(true);
			}
			if (this.preSeekTime > 0) {
				this.player.seekTo(this.preSeekTime);
				this.preSeekTime = -1;
			}
		} catch (ex) {
			console.log('Error:', ex, ex.stack);
		}
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
		} else if (this.playState === STATE_ENDED) {
			this.eventPlaybackStart = false;
			this.player.seekToDefaultPosition();
			this.startCurrentTimer();
		} else {
			this.player.setPlayWhenReady(true);
			this.startCurrentTimer();
		}
	}

	pause() {
		if (this.player) {
			this.player.setPlayWhenReady(false);
			// this.player.stop();
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
		if (this.playState === STATE_READY) {
			return this.player.getPlayWhenReady();
		}
		return false;
	}

	getDuration() {
		if (!this.player) {
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

	setVolume(_volume) {}

	destroy() {
		this.release();
		this.src = null;
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
			const ctx: android.content.Context = Utils.android.getApplicationContext()
			const am: android.media.AudioManager = ctx.getSystemService(android.content.Context.AUDIO_SERVICE);
			const afr = new android.media.AudioFocusRequest.Builder(android.media.AudioManager.AUDIOFOCUS_GAIN).build();
			am.abandonAudioFocusRequest(afr);
		}
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
		if(this._resumeOnFocusGain) {
			this._resumeOnFocusGain = false;
			this.player.setPlayWhenReady(true);
		}
	}

	startCurrentTimer() {
		console.log("[EXOPLAYER] startCurrentTimer");
		if (this.interval) {
			return;
		}
		this.lastTimerUpdate = -1;
		const that = new WeakRef(this);
		this.interval = <any>setInterval(function () {
			that.get().fireCurrentTimeEvent();
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
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		}
		this.fireCurrentTimeEvent();
	}
}
