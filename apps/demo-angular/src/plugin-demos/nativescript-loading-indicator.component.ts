import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptLoadingIndicator } from '@demo/shared';
import { } from '@nstudio/nativescript-loading-indicator';

@Component({
	selector: 'demo-nativescript-loading-indicator',
	templateUrl: 'nativescript-loading-indicator.component.html',
})
export class NativescriptLoadingIndicatorComponent {
  
  demoShared: DemoSharedNativescriptLoadingIndicator;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptLoadingIndicator();
  }

}