import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAppcuesComponent } from './nativescript-appcues.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAppcuesComponent }])],
  declarations: [NativescriptAppcuesComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptAppcuesModule {}
