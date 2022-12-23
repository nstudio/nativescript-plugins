import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFullstory } from '@demo/shared';
import { } from '@nstudio/nativescript-fullstory';

@Component({
	selector: 'demo-nativescript-fullstory',
	templateUrl: 'nativescript-fullstory.component.html',
})
export class NativescriptFullstoryComponent {
  
  demoShared: DemoSharedNativescriptFullstory;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptFullstory();
  }

}