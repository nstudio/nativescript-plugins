import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCameraPlusComponent } from './nativescript-camera-plus.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCameraPlusComponent }])],
	declarations: [NativescriptCameraPlusComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptCameraPlusModule {}
