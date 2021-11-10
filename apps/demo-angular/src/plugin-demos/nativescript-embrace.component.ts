import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptEmbrace } from '@demo/shared';
import { } from '@nstudio/nativescript-embrace';

@Component({
	selector: 'demo-nativescript-embrace',
	templateUrl: 'nativescript-embrace.component.html',
})
export class NativescriptEmbraceComponent {
  
  demoShared: DemoSharedNativescriptEmbrace;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptEmbrace();
  }

}