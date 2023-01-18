import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptCardview } from '@demo/shared';
import { } from '@nstudio/nativescript-cardview';

@Component({
	selector: 'demo-nativescript-cardview',
	templateUrl: 'nativescript-cardview.component.html',
})
export class NativescriptCardviewComponent {
  
  demoShared: DemoSharedNativescriptCardview;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptCardview();
  }

}