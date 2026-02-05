import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAuth0Component } from './nativescript-auth0.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAuth0Component }])],
	declarations: [NativescriptAuth0Component],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptAuth0Module {}
