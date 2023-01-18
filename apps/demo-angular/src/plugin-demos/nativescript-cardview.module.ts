import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCardviewComponent } from './nativescript-cardview.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCardviewComponent }])],
  declarations: [NativescriptCardviewComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptCardviewModule {}
