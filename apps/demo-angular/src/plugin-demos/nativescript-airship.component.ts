import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAirship } from '@demo/shared';
import { } from '@nstudio/nativescript-airship';

@Component({
	selector: 'demo-nativescript-airship',
	templateUrl: 'nativescript-airship.component.html',
})
export class NativescriptAirshipComponent {
  
  demoShared: DemoSharedNativescriptAirship;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAirship();
  }

}