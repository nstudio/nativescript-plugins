import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptTrackingTransparencyComponent } from './nativescript-tracking-transparency.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptTrackingTransparencyComponent }])],
	declarations: [NativescriptTrackingTransparencyComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptTrackingTransparencyModule {}
