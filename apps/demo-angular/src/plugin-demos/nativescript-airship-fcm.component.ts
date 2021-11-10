import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAirshipFcm } from '@demo/shared';
import { } from '@nstudio/nativescript-airship-fcm';

@Component({
	selector: 'demo-nativescript-airship-fcm',
	templateUrl: 'nativescript-airship-fcm.component.html',
})
export class NativescriptAirshipFcmComponent {
  
  demoShared: DemoSharedNativescriptAirshipFcm;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAirshipFcm();
  }

}