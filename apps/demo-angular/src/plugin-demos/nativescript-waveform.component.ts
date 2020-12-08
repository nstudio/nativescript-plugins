import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptWaveform } from '@demo/shared';
import {} from '@nstudio/nativescript-waveform';

@Component({
	selector: 'demo-nativescript-waveform',
	templateUrl: 'nativescript-waveform.component.html',
})
export class NativescriptWaveformComponent {
	demoShared: DemoSharedNativescriptWaveform;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptWaveform();
	}
}
