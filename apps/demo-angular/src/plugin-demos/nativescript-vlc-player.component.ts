import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptVlcPlayer } from '@demo/shared';
import {} from '@nstudio/nativescript-vlc-player';

@Component({
	selector: 'demo-nativescript-vlc-player',
	templateUrl: 'nativescript-vlc-player.component.html',
})
export class NativescriptVlcPlayerComponent {
	demoShared: DemoSharedNativescriptVlcPlayer;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptVlcPlayer();
	}
}
