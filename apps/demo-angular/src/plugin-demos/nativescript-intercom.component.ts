import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptIntercom } from '@demo/shared';
import { } from '@nstudio/nativescript-intercom';

@Component({
	selector: 'demo-nativescript-intercom',
	templateUrl: 'nativescript-intercom.component.html',
})
export class NativescriptIntercomComponent {
  
  demoShared: DemoSharedNativescriptIntercom;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptIntercom();
  }

}