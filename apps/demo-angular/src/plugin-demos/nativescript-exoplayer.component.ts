import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptExoplayer } from '@demo/shared';
import { registerElement } from '@nativescript/angular';
import { Page } from '@nativescript/core';
import { Video } from '@nstudio/nativescript-exoplayer';
registerElement('ExoPlayer', () => Video);

@Component({
	selector: 'demo-nativescript-exoplayer',
	templateUrl: 'nativescript-exoplayer.component.html',
})
export class NativescriptExoplayerComponent {
	demoShared: DemoSharedNativescriptExoplayer;

	constructor(private _ngZone: NgZone, private _page: Page) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptExoplayer(this._page);
	}
}
