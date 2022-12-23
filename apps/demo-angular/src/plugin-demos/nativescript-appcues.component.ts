import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAppcues } from '@demo/shared';
import { } from '@nstudio/nativescript-appcues';

@Component({
	selector: 'demo-nativescript-appcues',
	templateUrl: 'nativescript-appcues.component.html',
})
export class NativescriptAppcuesComponent {
  
  demoShared: DemoSharedNativescriptAppcues;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAppcues();
  }

}