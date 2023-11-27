import { View } from '@nativescript/core';
export declare enum VideoFill {
	default = 'default',
	aspect = 'aspect',
	aspectFill = 'aspectFill',
	fill = 'fill',
}
export declare class Video extends View {
	static finishedEvent: string;
	static playbackReadyEvent: string;
	static playbackStartEvent: string;
	static seekToTimeCompleteEvent: string;
	static currentTimeUpdatedEvent: string;
	/**
	 * ignore modifying iOS AVAudioSession category change on initialization
	 * by default, auto changes to: AVAudioSessionCategoryPlayAndRecord
	 */
	static iosIgnoreAudioSessionChange: boolean;
	_emit: any;

	/**
	 * video source file
	 */
	src: string;
	srcType: number;
	imgSrc: string;
	imgType: number;
	subtitles: string;
	subtitleSource: string;
	observeCurrentTime: boolean;

	/**
	 * set true for the video to start playing when ready
	 */
	autoplay: boolean;

	/**
	 * set true to enable the media player's playback controls
	 */
	controls: boolean;

	/**
	 * whether the video loops the playback after extends
	 */
	loop: boolean;
	muted: boolean;

	/**
	 * aspect/fill settings
	 * Android:
	 * When set to VideoFill.aspectFill, the aspect ratio of the video will not be honored and it will fill the entire space available.

	* iOS:
	* VideoFill.default = AVLayerVideoGravityResize
	* VideoFill.aspect = AVLayerVideoGravityResizeAspect
	* VideoFill.aspectFill = AVLayerVideoGravityResizeAspectFill
	*/
	fill: VideoFill;
	static IMAGETYPEMONO: number;
	static IMAGETYPESTEREOTOPBOTTOM: number;
	static IMAGETYPESTEREOLEFTRIGHT: number;

	/**
	 * encryption parameters
	 */
	public encryptionKey: string = null;
	public encryptionIV: string = null;
	public encryption: string = '';

	/**
	 * (ios) Set the audio session playback category.
	 * backgroundAudio must evaluate to false for this to work.
	 * Available categories:
	 * - AVAudioSessionCategoryAmbient
	 * - AVAudioSessionCategoryAudioProcessing
	 * - AVAudioSessionCategoryMultiRoute
	 * - AVAudioSessionCategoryPlayAndRecord
	 * - AVAudioSessionCategoryPlayback
	 * - AVAudioSessionCategoryRecord
	 * - AVAudioSessionCategorySoloAmbient
	 * - AVAudioSessionCategoryAudioProcessing (Deprecated in iOS 10)
	 */
	static iosAudioSessionCategory: string;

	/**
	 * Start playing the video.
	 */
	play(): void;

	/**
	 * Pause the currently playing video.
	 */
	pause(): void;

	/**
	 * Seek the video to a time.
	 * @param {number} time - Time of the video to seek to in milliseconds.
	 */
	seekToTime(time: number): void;

	/**
	 * Returns the current time of the video duration in milliseconds.
	 * @returns {number} Current time of the video duration.
	 */
	getCurrentTime(): number;

	/**
	 * Observable for current time of the video duration in milliseconds.
	 * @returns {number} Current time of the video duration.
	 */
	currentTime(): number;

	/**
	 * Set the volume of the video
	 * @param {number} volume - Volume to set the video between 0 and 1
	 */
	setVolume(volume: number): void;

	/**
	 * Set the playback speed of the video
	 * @param {number} speed - Set the playback speed in float value
	 */
	setPlaybackSpeed(speed: number): void;

	/**
	 * Destroy the video player and free up resources.
	 */
	destroy(): void;

	/**
	 * Mute and unmute the video.
	 * @param {boolean} mute - true to mute the video, false to unmute.
	 */
	mute(mute: boolean): void;

	/**
	 * Returns the duration of the video in milliseconds.
	 * @returns {number} Video duration in milliseconds.
	 */
	getDuration(): number;

	/**
	 * *** ANDROID ONLY ***
	 * Stop playback of the video. This resets the player and video src.
	 */
	stop(): void;

	/**
	 * Get the video size
	 * @returns {object<width: number, height: number>}
	 */
	getVideoSize(): { width: number; height: number };

	/**
	 * Get the native player instance.
	 */
	getPlayer(): AVPlayer | com.google.android.exoplayer2.ExoPlayer;

	/**
	 * *** IOS ONLY ***
	 * Update the video player with an AVAsset file.
	 */
	updateAsset(asset): void;

	/**
	 * Callback to execute when the video is ready to play
	 * @param {function} callback - The callback function to execute.
	 */
	playbackReady(callback: Function): void;

	/**
	 * *** IOS ONLY ***
	 * Callback to execute when the video is playing.
	 * @param {function} callback - The callback function to execute.
	 */
	playbackStart(callback: Function): void;

	/**
	 * Callback to execute when the video has finished seekToTime.
	 * @param {function} callback - The callback function to execute.
	 */
	seekToTimeComplete(callback: Function): void;

	/**
	 * Callback to execute when the time is updated.
	 * @param {function} callback - The callback function to execute.
	 */
	currentTimeUpdated(callback: Function): void;
}
