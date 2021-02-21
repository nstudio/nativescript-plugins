import { Video as VideoBase, VideoFill, videoSourceProperty, subtitleSourceProperty } from './common';
import { Application, Utils } from '@nativescript/core';

export * from './common';

declare const com: any;

// States from Exo Player
const STATE_IDLE: number = 1;
const STATE_BUFFERING: number = 2;
const STATE_READY: number = 3;
const STATE_ENDED: number = 4;

const SURFACE_WAITING: number = 0;
const SURFACE_READY: number = 1;

export class Video extends VideoBase {
	private _textureView: any; /// android.widget.VideoView
	private _subtitlesView: any; /// com.google.android.exoplayer2.ui.SubtitleView
	private videoWidth: number;
	private videoHeight: number;
	private _src: any;
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
	private enableSubtitles: boolean = false;

	public TYPE = { DETECT: 0, SS: 1, DASH: 2, HLS: 3, OTHER: 4 };
	public nativeView: any;
	public player: any;

	constructor() {
		super();
		this._boundStart = this.resumeEvent.bind(this);
		this._boundStop = this.suspendEvent.bind(this);
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
		var nativeView = new com.google.android.exoplayer2.ui.PlayerView(this._context);
		if (this.enableSubtitles) {
		}
		return nativeView;
	}
	initNativeView() {
		super.initNativeView();
		var that = new WeakRef(this);
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
		var that = new WeakRef(this);
		var vidListener = new com.google.android.exoplayer2.video.VideoListener({
			get owner() {
				return that.get();
			},
			onRenderedFirstFrame: function () {
				if (this.owner && !this.owner.eventPlaybackReady) {
					this.owner.eventPlaybackReady = true;
					this.owner._emit(Video.playbackReadyEvent);
				}
			},
			onSurfaceSizeChanged: function (width, height) {},
			onVideoSizeChanged: function (width, height, unappliedRotationDegrees, pixelWidthHeightRatio) {
				if (this.owner) {
					this.owner.videoWidth = width;
					this.owner.videoHeight = height;
					if (this.owner.fill !== VideoFill.aspectFill) {
						this.owner._setupAspectRatio();
					}
				}
			},
		});
		var evtListener = new com.google.android.exoplayer2.Player.EventListener({
			get owner() {
				return that.get();
			},
			onIsPlayingChanged: function (changed) {},
			onLoadingChanged: function () {},
			onPlayerError: function (error) {
				console.error('PlayerError', error);
			},
			onPlayerStateChanged: function (playWhenReady, playbackState) {
				if (!this.owner) {
					return;
				}
				if (!this.owner.textureSurfaceSet) {
					this.owner._setupTextureSurface();
				}
				if (playbackState === STATE_READY) {
					if (!this.owner.textureSurfaceSet && !this.owner.eventPlaybackReady) {
						this.owner.eventPlaybackReady = true;
						this.owner._emit(Video.playbackReadyEvent);
					}
					if (this.owner._onReadyEmitEvent.length) {
						do {
							this.owner._emit(this.owner._onReadyEmitEvent.shift());
						} while (this.owner._onReadyEmitEvent.length);
					}
					if (playWhenReady && !this.owner.eventPlaybackStart) {
						this.owner.eventPlaybackStart = true;
					}
				} else if (playbackState === STATE_ENDED) {
					if (!this.owner.loop) {
						this.owner.eventPlaybackStart = false;
						this.owner.stopCurrentTimer();
					}
					this.owner._emit(Video.finishedEvent);
					if (this.owner.loop) {
						this.owner.play();
					}
				}
			},
			onPositionDiscontinuity: function () {},
			onSeekProcessed: function () {},
			onTimelineChanged: function () {},
			onTracksChanged: function () {},
		});
		// this.mediaPlayer.addVideoListener(vidListener);
		//  this.mediaPlayer.addListener(evtListener);
		const playerListener = new com.google.android.exoplayer2.Player.EventListener({
			get owner() {
				return that.get();
			},
			onIsPlayingChanged: function (isPlaying) {},
			onLoadingChanged: function (isLoading) {},
			onPlaybackParametersChanged: function (playbackParameters) {},
			onPlaybackSuppressionReasonChanged: function (playbackSuppressionReason) {},
			onPlayerError: function (error) {
				console.error('PlayerError', error);
			},
			onPlayerStateChanged: function (playWhenReady, playbackState) {
				if (!this.owner) {
					return;
				}
				if (playbackState === STATE_READY) {
					if (!this.owner.eventPlaybackReady) {
						this.owner.eventPlaybackReady = true;
						this.owner._emit(Video.playbackReadyEvent);
					}
					if (this.owner._onReadyEmitEvent.length) {
						do {
							this.owner._emit(this.owner._onReadyEmitEvent.shift());
						} while (this.owner._onReadyEmitEvent.length);
					}
					if (playWhenReady && !this.owner.eventPlaybackStart) {
						this.owner.eventPlaybackStart = true;
					}
				} else if (playbackState === STATE_ENDED) {
					if (!this.owner.loop) {
						this.owner.eventPlaybackStart = false;
						this.owner.stopCurrentTimer();
					}
					this.owner._emit(Video.finishedEvent);
					if (this.owner.loop) {
						this.owner.play();
					}
				}
			},
			onPositionDiscontinuity: function (reason) {},
			onRepeatModeChanged: function (repeatMode) {},
			onSeekProcessed: function () {},
			onShuffleModeEnabledChanged: function (shuffleModeEnabled) {},
			onTimelineChanged: function (timeline, manifest, reason) {},
			onTracksChanged: function (trackGroups, trackSelections) {},
		});
		if (this.player) {
			this.player.addListener(playerListener);
		}
	};
	_setupMediaController() {
		this.nativeView.setUseController(!!this.controls);
	}
	_detectTypeFromSrc(uri) {
		var type = com.google.android.exoplayer2.util.Util.inferContentType(uri);
		if (typeof uri === 'string' && uri.indexOf('.m3u8') > -1) {
			return this.TYPE.HLS;
		} else if (typeof uri === 'string' && uri.indexOf('.mp4') > -1) {
			return this.TYPE.OTHER;
		}
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
			let am = Utils.android.getApplicationContext().getSystemService(android.content.Context.AUDIO_SERVICE);
			am.requestAudioFocus(null, android.media.AudioManager.STREAM_MUSIC, android.media.AudioManager.AUDIOFOCUS_GAIN);
		}
		try {
			var bm = new com.google.android.exoplayer2.upstream.DefaultBandwidthMeter();
			var trackSelection = new com.google.android.exoplayer2.trackselection.AdaptiveTrackSelection.Factory(bm);
			var trackSelector = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector(trackSelection);
			var loadControl = new com.google.android.exoplayer2.DefaultLoadControl();
			var builder = new com.google.android.exoplayer2.SimpleExoPlayer.Builder(this._context);
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
			var dsf = new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(this._context, com.google.android.exoplayer2.util.Util.getUserAgent(this._context, Utils.ad.getApplicationContext().getPackageName()), bm);
			var ef = new com.google.android.exoplayer2.extractor.DefaultExtractorsFactory();
			var vs = void 0,
				uri = void 0;
			if (this._src instanceof String || typeof this._src === 'string') {
				uri = android.net.Uri.parse(<any>this._src);
				var type = this._detectTypeFromSrc(uri);
				switch (type) {
					case this.TYPE.SS:
						vs = new com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory(dsf).createMediaSource(uri);
						break;
					case this.TYPE.DASH:
						vs = new com.google.android.exoplayer2.source.dash.DashMediaSource.Factory(dsf).createMediaSource(uri);
						break;
					case this.TYPE.HLS:
						vs = new com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory(dsf)
							// .setAllowChunklessPreparation(true)
							.createMediaSource(uri);
						break;
					default:
						vs = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(dsf).createMediaSource(uri);
				}
			} else if (typeof this._src.typeSource === 'number') {
				uri = android.net.Uri.parse(this._src.url);
				switch (this._src.typeSource) {
					case this.TYPE.SS:
						vs = new com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource.Factory(dsf).createMediaSource(uri);
						break;
					case this.TYPE.DASH:
						vs = new com.google.android.exoplayer2.source.dash.DashMediaSource.Factory(dsf).createMediaSource(uri);
						break;
					case this.TYPE.HLS:
						vs = new com.google.android.exoplayer2.source.hls.HlsMediaSource.Factory(dsf).setAllowChunklessPreparation(true).createMediaSource(uri);
						break;
					default:
						vs = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(dsf).createMediaSource(uri);
				}
			} else {
				vs = this._src;
			}
			try {
				if (this._subtitlesSrc != null && this._subtitlesSrc.trim() != '') {
					var subtitleUri = android.net.Uri.parse(this._subtitlesSrc.trim());
					var textFormat = com.google.android.exoplayer2.Format.createTextSampleFormat(null, com.google.android.exoplayer2.util.MimeTypes.APPLICATION_SUBRIP, null, com.google.android.exoplayer2.Format.NO_VALUE, com.google.android.exoplayer2.Format.NO_VALUE, 'en', null);
					var subtitlesSrc = new com.google.android.exoplayer2.source.SingleSampleMediaSource(subtitleUri, dsf, textFormat, com.google.android.exoplayer2.C.TIME_UNSET);
					var mergedArray = Array.create(com.google.android.exoplayer2.source.MediaSource, 2);
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
			this.player.prepare(vs);
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
	setNativeSource(nativePlayerSrc) {
		this._src = nativePlayerSrc;
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
		if (this._onReadyEmitEvent.indexOf(value)) {
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
		var duration = this.player.getDuration();
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
	setVolume(volume) {}
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
			var am = Utils.android.getApplicationContext().getSystemService(android.content.Context.AUDIO_SERVICE);
			am.abandonAudioFocus(null);
		}
	}
	suspendEvent() {
		this._suspendLocation = this.getCurrentTime();
		if (this.nativeView) {
			this.nativeView.onPause();
		}
		// this.release();
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
	}
	startCurrentTimer() {
		var _this = this;
		if (this.interval) {
			return;
		}
		this.lastTimerUpdate = -1;
		this.interval = <any>setInterval(function () {
			_this.fireCurrentTimeEvent();
		}, 200);
	}
	fireCurrentTimeEvent() {
		if (!this.nativeView || !this.nativeView.getPlayer()) {
			return;
		}
		var curTimer = this.nativeView.getPlayer().getCurrentPosition();
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
