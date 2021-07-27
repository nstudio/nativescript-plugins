import { DemoSharedBase } from '../utils';
import { VideoFill } from '@nstudio/nativescript-exoplayer';
import { CoreTypes, Page, Utils } from '@nativescript/core';

export class DemoSharedNativescriptExoplayer extends DemoSharedBase {
	public videoSrc: string;
	public subtitlesSrc: string;
	public currentTime: any;
	public videoDuration: any;
	public videoFill: VideoFill = VideoFill.default;
	private _videoPlayer: any;
	private completed: boolean;

	constructor(mainpage: Page) {
		super();

		this.completed = false;
		this._videoPlayer = <any>mainpage.getViewById('nativeVideoPlayer');
		this.currentTime = '';
		this.videoDuration = '';
		this.videoSrc = '~/assets/videos/big_buck_bunny.mp4';
		this.subtitlesSrc = '~/assets/videos/sample.srt';
		this.trackVideoCurrentPosition();
	}

	public setEnglishSubtitles() {
		this._videoPlayer.subtitles = '~/assets/videos/sample.srt';
	}

	public setRussianSubtitles() {
		this._videoPlayer.subtitles = '~/assets/videos/sample-ru.srt';
	}

	public disableSubtitles() {
		this._videoPlayer.subtitles = '';
	}

	/**
	 * Video Finished callback
	 */
	public videoFinished(args) {
		this.completed = true;
	}

	public playbackStart(args) {
		this.completed = false;
	}

	/**
	 * Pause the video
	 */
	public pauseVideo() {
		this._videoPlayer.pause();
	}

	/**
	 * Play the video
	 */
	public playVideo() {
		this._videoPlayer.play();
		this.completed = false;
	}

	/**
	 * Stop the video player
	 */
	public stopVideo() {
		if (global.isAndroid) {
			this._videoPlayer.stop();
		}
	}

	/**
	 * Get the video duration
	 */
	public getVideoDuration() {
		let videoDuration = this._videoPlayer.getDuration();
		console.log('Video Duration: ' + videoDuration);
		this.set('videoDuration', videoDuration);
	}

	/**
	 * Go to 30 seconds
	 */
	public goToTime() {
		try {
			this._videoPlayer.seekToTime(30);
		} catch (err) {
			console.log(err);
		}
	}

	public animate() {
		console.log('Animation');

		this._videoPlayer
			.animate({
				rotate: 360,
				duration: 3000,
				curve: CoreTypes.AnimationCurve.spring,
			})
			.then(() => {
				return this._videoPlayer.animate({
					rotate: 0,
					duration: 3000,
					curve: CoreTypes.AnimationCurve.spring,
				});
			})
			.then(() => {
				return this._videoPlayer.animate({
					scale: { x: 0.5, y: 0.5 },
					duration: 1000,
					curve: CoreTypes.AnimationCurve.spring,
				});
			})
			.then(() => {
				return this._videoPlayer.animate({
					scale: { x: 1.5, y: 1.5 },
					duration: 3000,
					curve: CoreTypes.AnimationCurve.spring,
				});
			})
			.then(() => {
				return this._videoPlayer.animate({
					scale: { x: 1.0, y: 1.0 },
					duration: 3000,
					curve: CoreTypes.AnimationCurve.spring,
				});
			});
	}

	public muteVideo() {
		this._videoPlayer.mute(true);
	}

	public unmuteVideo() {
		this._videoPlayer.mute(false);
	}

	/**
	 * Get the video current time
	 */
	public getVideoCurrentTime() {
		try {
			let currentTime = this._videoPlayer.getCurrentTime();
			console.log('Current Time: ' + currentTime);
		} catch (err) {
			console.log(err);
		}
	}

	public encVideoSource() {
		this._videoPlayer.encryption = 'CTR';
		this._videoPlayer.encryptionKey = '2BB80D537B1DA3E38BD30361AA855686BDE0EACD7162FEF6A25FE97BF527A25B';
		this._videoPlayer.encryptionIV = '015E42FF678B2B90B743111A396EF850';
		this._videoPlayer.src = '~/assets/videos/video-ctr.enc';
	}

	/**
	 * Change the video src property
	 */
	public changeVideoSource() {
		// Disable encryption if it is on...
		this._videoPlayer.encryption = '';

		if (this.videoSrc === '~/assets/videos/small.mp4' || this.videoSrc === '~/assets/videos/video-ctr.enc') {
			this._videoPlayer.src = 'https://dash.akamaized.net/dash264/TestCases/1a/netflix/exMPD_BIP_TC1.mpd';
		} else {
			this._videoPlayer.src = '~/assets/videos/small.mp4';
		}
	}

	private trackVideoCurrentPosition(): number {
		let trackInterval = <any>Utils.setInterval(() => {
			let x, y;
			if (this._videoPlayer) {
				if (this.completed) {
					x = '';
					y = '';
				} else {
					x = this._videoPlayer.getCurrentTime();
					y = this._videoPlayer.getDuration();
				}
				this.set('currentTime', x);
				this.set('videoDuration', y);
			}
		}, 200);
		return trackInterval;
	}
}
