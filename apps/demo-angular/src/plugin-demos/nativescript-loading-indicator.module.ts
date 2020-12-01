import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptLoadingIndicatorComponent } from './nativescript-loading-indicator.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptLoadingIndicatorComponent }])],
	declarations: [NativescriptLoadingIndicatorComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptLoadingIndicatorModule {}
