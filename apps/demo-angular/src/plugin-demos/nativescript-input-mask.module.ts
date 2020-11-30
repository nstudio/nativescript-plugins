import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, registerElement } from '@nativescript/angular';
import { NativescriptInputMaskComponent } from './nativescript-input-mask.component';

registerElement('InputMask', () => require('@nstudio/nativescript-input-mask').InputMask);

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptInputMaskComponent }])],
	declarations: [NativescriptInputMaskComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptInputMaskModule {}
