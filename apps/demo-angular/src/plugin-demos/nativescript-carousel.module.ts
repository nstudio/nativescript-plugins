import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCarouselComponent } from './nativescript-carousel.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCarouselComponent }])],
  declarations: [NativescriptCarouselComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptCarouselModule {}
