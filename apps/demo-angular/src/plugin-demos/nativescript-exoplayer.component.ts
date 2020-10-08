import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptExoplayer } from '@demo/shared';
import { Page } from '@nativescript/core';
import {} from '@nstudio/nativescript-exoplayer';

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
