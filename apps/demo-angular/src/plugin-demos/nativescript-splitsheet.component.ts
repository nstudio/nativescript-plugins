import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSplitsheet } from '@demo/shared';
import { } from '@nstudio/nativescript-splitsheet';

@Component({
	selector: 'demo-nativescript-splitsheet',
	templateUrl: 'nativescript-splitsheet.component.html',
})
export class NativescriptSplitsheetComponent {
  
  demoShared: DemoSharedNativescriptSplitsheet;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptSplitsheet();
  }

}