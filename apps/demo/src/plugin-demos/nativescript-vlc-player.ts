import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptVlcPlayer } from '@demo/shared';
import { VLCPlayer } from '@nstudio/nativescript-vlc-player';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptVlcPlayer {
	video: VLCPlayer;
	loaded(args) {
		this.video = args.object;
	}
	play() {
		this.video.play();
	}

	pause() {
		this.video.pause();
	}
}
