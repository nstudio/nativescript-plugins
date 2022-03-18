import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptCarousel } from '@demo/shared';
import { } from '@nstudio/nativescript-carousel';

@Component({
	selector: 'demo-nativescript-carousel',
	templateUrl: 'nativescript-carousel.component.html',
})
export class NativescriptCarouselComponent {
  
  demoShared: DemoSharedNativescriptCarousel;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptCarousel();
  }

}