/* eslint-disable @typescript-eslint/no-inferrable-types */

import { Video as VideoBase, VideoFill, videoSourceProperty, subtitleSourceProperty  } from './common';
import { Application, Utils } from '@nativescript/core';
import ep2 = com.google.android.exoplayer2;

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
	private _subtitlesView: ep2.ui.SubtitleView
	private videoWidth: number;
	private videoHeight: number;
	private _src: string | ep2.source.MediaSource | any;
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
	public nativeView: ep2.ui.PlayerView;
	public player: ep2.ExoPlayer;

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
		const nativeView = new ep2.ui.PlayerView(this._context);
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
		const playerListener = new ep2.Player.Listener({
			onEvents: function (_player: ep2.Player, _events: ep2.Player.Events): void { /* required in listener implementation */ },
			onTimelineChanged: function (_timeline: ep2.Timeline, _manifest: number): void { /* required in listener implementation */ },
			onMediaItemTransition: function (_mediaItem: ep2.MediaItem, _reason: number): void { /* required in listener implementation */ },
			onTracksChanged: function (_trackGroups: ep2.source.TrackGroupArray, _trackSelections: ep2.trackselection.TrackSelectionArray): void { /* required in listener implementation */ },
			onTracksInfoChanged: function (_tracksInfo: ep2.TracksInfo): void { /* required in listener implementation */ },
			onMediaMetadataChanged: function (_mediaMetadata: ep2.MediaMetadata): void { /* required in listener implementation */ },
			onPlaylistMetadataChanged: function (_mediaMetadata: ep2.MediaMetadata): void { /* required in listener implementation */ },
			onIsLoadingChanged: function (_isLoading: boolean): void { /* required in listener implementation */ },
			onLoadingChanged: function (_isLoading: boolean): void { /* required in listener implementation */ },
			onAvailableCommandsChanged: function (_availableCommands: ep2.Player.Commands): void { /* required in listener implementation */ },
			onTrackSelectionParametersChanged: function (_parameters: ep2.trackselection.TrackSelectionParameters): void { /* required in listener implementation */ },
			onPlayerStateChanged: function (playWhenReady: boolean, playbackState: number): void { /* required in listener implementation */ },
			onPlaybackStateChanged: function (playbackState: number): void {
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
			onPlayWhenReadyChanged: function (playWhenReady: boolean, _reason: number): void {
				const owner = that.get();
				if (!owner) {
					return;
				}
				if (playWhenReady && !owner.eventPlaybackStart) {
					owner.eventPlaybackStart = true;
				}
			},
			onPlaybackSuppressionReasonChanged: function (_playbackSuppressionReason: number): void { /* required in listener implementation */ },
			onIsPlayingChanged: function (_isPlaying: boolean): void { /* required in listener implementation */ },
			onRepeatModeChanged: function (_repeatMode: number): void { /* required in listener implementation */ },
			onShuffleModeEnabledChanged: function (_shuffleModeEnabled: boolean): void { /* required in listener implementation */ },
			onPlayerError: function (error: ep2.PlaybackException): void {
				console.error('PlayerError', error);
			},
			onPlayerErrorChanged: function (_error: ep2.PlaybackException): void { /* required in listener implementation */ },
			onPositionDiscontinuity: function (_reasonOrOldPosition: number | ep2.Player.PositionInfo, _newPosition?: ep2.Player.PositionInfo, _reason?: number): void { /* required in listener implementation */ },
			onPlaybackParametersChanged: function (_playbackParameters: ep2.PlaybackParameters): void { /* required in listener implementation */ },
			onSeekBackIncrementChanged: function (_param0: number): void { /* required in listener implementation */ },
			onSeekForwardIncrementChanged: function (_seekBackIncrementMs: number): void { /* required in listener implementation */ },
			onMaxSeekToPreviousPositionChanged: function (_maxSeekToPreviousPositionMs: number): void { /* required in listener implementation */ },
			onSeekProcessed: function (): void { /* required in listener implementation */ },
			onAudioSessionIdChanged: function (_audioSessionId: number): void { /* required in listener implementation */ },
			onAudioAttributesChanged: function (_audioAttributes: ep2.audio.AudioAttributes): void { /* required in listener implementation */ },
			onVolumeChanged: function (_volume: number): void { /* required in listener implementation */ },
			onSkipSilenceEnabledChanged: function (_skipSilenceEnabled: boolean): void { /* required in listener implementation */ },
			onDeviceInfoChanged: function (_deviceInfo: ep2.DeviceInfo): void { /* required in listener implementation */ },
			onDeviceVolumeChanged: function (_volume: number, _muted: boolean): void { /* required in listener implementation */ },
			onVideoSizeChanged: function (_videoSize: ep2.video.VideoSize): void { /* required in listener implementation */ },
			onSurfaceSizeChanged: function (_width: number, _height: number): void { /* required in listener implementation */ },
			onRenderedFirstFrame: function (): void { /* required in listener implementation */ },
			onCues: function (_cues: java.util.List<ep2.text.Cue>): void { /* required in listener implementation */ },
			onMetadata: function (_metadata: ep2.metadata.Metadata): void { /* required in listener implementation */ },
		});
		if (that.get().player) {
			that.get().player.addListener(playerListener);
		}
	}

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
		const type = ep2.util.Util.inferContentType(uri as android.net.Uri);
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
			const am: android.media.AudioManager = this._context.getSystemService(android.content.Context.AUDIO_SERVICE);
			const afr = new android.media.AudioFocusRequest.Builder(android.media.AudioManager.AUDIOFOCUS_GAIN).build();
			am.requestAudioFocus(afr);
		}
		try {
			const bm = new ep2.upstream.DefaultBandwidthMeter.Builder(this._context).build();
			const trackSelection = new ep2.trackselection.AdaptiveTrackSelection.Factory();
			const trackSelector = new ep2.trackselection.DefaultTrackSelector(this._context, trackSelection);
			const loadControl = new ep2.DefaultLoadControl();
			const builder = new ep2.ExoPlayer.Builder(this._context);
			builder.setTrackSelector(trackSelector);
			builder.setLoadControl(loadControl);
			this.player = builder.build();

			if (this.fill === VideoFill.aspectFill) {
				this.nativeView.setResizeMode(ep2.ui.AspectRatioFrameLayout.RESIZE_MODE_ZOOM);
			} else if (this.fill === VideoFill.aspect) {
				this.nativeView.setResizeMode(ep2.ui.AspectRatioFrameLayout.RESIZE_MODE_FIT);
			} else if (this.fill === VideoFill.fill) {
				this.nativeView.setResizeMode(ep2.ui.AspectRatioFrameLayout.RESIZE_MODE_FILL);
			}
			const userAgent = ep2.util.Util.getUserAgent(this._context, Utils.ad.getApplicationContext().getPackageName());
			const dsf = new ep2.upstream.DefaultDataSourceFactory(this._context, userAgent, bm);
			let vs: ep2.source.MediaSource;
			if (this._src instanceof String || typeof this._src === 'string') {
				const uri = android.net.Uri.parse(<string>this._src);
				const mediaItem = ep2.MediaItem.fromUri(uri);
				const type = this._detectTypeFromSrc(uri);
				switch (type) {
					case this.TYPE.SS:
						vs = new ep2.source.smoothstreaming.SsMediaSource.Factory(dsf).createMediaSource(mediaItem);
						break;
					case this.TYPE.DASH:
						vs = new ep2.source.dash.DashMediaSource.Factory(dsf).createMediaSource(mediaItem);
						break;
					case this.TYPE.HLS:
						vs = new ep2.source.hls.HlsMediaSource.Factory(dsf)
							// .setAllowChunklessPreparation(true)
							.createMediaSource(mediaItem);
						break;
					default:
						vs = new ep2.source.ProgressiveMediaSource.Factory(dsf).createMediaSource(mediaItem);
				}
			} else if (typeof this._src.typeSource === 'number') {
				const mediaItem = ep2.MediaItem.fromUri(android.net.Uri.parse(this._src.url))
				switch (this._src.typeSource) {
					case this.TYPE.SS:
						vs = new ep2.source.smoothstreaming.SsMediaSource.Factory(dsf).createMediaSource(mediaItem);
						break;
					case this.TYPE.DASH:
						vs = new ep2.source.dash.DashMediaSource.Factory(dsf).createMediaSource(mediaItem);
						break;
					case this.TYPE.HLS:
						vs = new ep2.source.hls.HlsMediaSource.Factory(dsf).setAllowChunklessPreparation(true).createMediaSource(mediaItem);
						break;
					default:
						vs = new ep2.source.ProgressiveMediaSource.Factory(dsf).createMediaSource(mediaItem);
				}
			} else {
				vs = this._src as ep2.source.MediaSource;
			}
			try {
				if (this._subtitlesSrc != null && this._subtitlesSrc.trim() != '') {
					const subtitleUri = android.net.Uri.parse(this._subtitlesSrc.trim());
					const subtitleConfig = new ep2.MediaItem.SubtitleConfiguration.Builder(subtitleUri)
						.setMimeType(ep2.util.MimeTypes.APPLICATION_SUBRIP)
						.setLanguage('en')
						.build();
					const subtitlesSrc = new ep2.source.SingleSampleMediaSource.Factory(dsf)
						.createMediaSource(subtitleConfig, ep2.C.TIME_UNSET);
					const mergedArray = Array.create(ep2.source.MediaSource, 2);
					mergedArray[0] = vs;
					mergedArray[1] = subtitlesSrc;
					vs = new ep2.source.MergingMediaSource(mergedArray);
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

	setVolume(volume: number) {
		if (this.player) {
			this.player.setVolume(volume);
		}
	}

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
			const am: android.media.AudioManager = this._context.getSystemService(android.content.Context.AUDIO_SERVICE);
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
