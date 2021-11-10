import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAirshipHms } from '@demo/shared';
import { } from '@nstudio/nativescript-airship-hms';

@Component({
	selector: 'demo-nativescript-airship-hms',
	templateUrl: 'nativescript-airship-hms.component.html',
})
export class NativescriptAirshipHmsComponent {
  
  demoShared: DemoSharedNativescriptAirshipHms;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAirshipHms();
  }

}