import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptBlur } from '@demo/shared';
import { Page } from '@nativescript/core';
import { } from '@nstudio/nativescript-blur';

@Component({
	selector: 'demo-nativescript-blur',
	templateUrl: 'nativescript-blur.component.html',
})
export class NativescriptBlurComponent {
  
  demoShared: DemoSharedNativescriptBlur;
  
	constructor(private _ngZone: NgZone, private page: Page) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptBlur(this.page);
  }

}