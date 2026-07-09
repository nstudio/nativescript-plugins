import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptContentfulComponent } from './nativescript-contentful.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptContentfulComponent }])],
	declarations: [NativescriptContentfulComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptContentfulModule {}
