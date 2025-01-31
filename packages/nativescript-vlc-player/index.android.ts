import { Utils } from '@nativescript/core';
import { srcProperty, autoPlayProperty, VLCPlayerCommon, VLCPlayerEvents } from './common';

export class VLCPlayer extends VLCPlayerCommon {
	player: org.videolan.libvlc.MediaPlayer;
	private static libVLC_: org.videolan.libvlc.LibVLC;
	static {
		const list = new java.util.ArrayList();
		list.add('--network-caching=50');
		list.add('--rtsp-tcp');

		this.libVLC_ = new org.videolan.libvlc.LibVLC(Utils.ad.getApplicationContext(), list);
	}
	createNativeView(): Object {
		this.player = new org.videolan.libvlc.MediaPlayer(VLCPlayer.libVLC_);
		this.player.setEventListener(
			new org.videolan.libvlc.MediaPlayer.EventListener({
				onEvent(param0: org.videolan.libvlc.MediaPlayer.Event) {
					switch (param0.type) {
					}
				},
			})
		);

		return new android.view.TextureView(this._context);
	}

	[srcProperty.setNative](value: string) {
		try {
			const media = new org.videolan.libvlc.Media(VLCPlayer.libVLC_, android.net.Uri.parse(value));

			const out = this.player.getVLCVout();

			out.setVideoView(this.nativeView as any);

			out.attachViews();

			this.player.setMedia(media);

			if (this.autoPlay) {
				this.player.play();
			}

			this.notify({
				eventName: VLCPlayerEvents.loadStarted,
				object: this,
			});
		} catch (error) {}
	}

	[autoPlayProperty.setNative](value: boolean) {
		this.autoPlay = value;
	}

	play() {
		if (this.player) {
			this.player.play();
		}
	}

	pause() {
		if (this.player) {
			this.player.pause();
		}
	}
}

srcProperty.register(VLCPlayer);
