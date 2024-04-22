import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptUiPager } from '@demo/shared';
import { } from '@nstudio/nativescript-ui-pager';

@Component({
	selector: 'demo-nativescript-ui-pager',
	templateUrl: 'nativescript-ui-pager.component.html',
})
export class NativescriptUiPagerComponent {
  
  demoShared: DemoSharedNativescriptUiPager;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptUiPager();
  }

}