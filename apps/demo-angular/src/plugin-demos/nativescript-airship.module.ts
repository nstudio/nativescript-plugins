import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAirshipComponent } from './nativescript-airship.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAirshipComponent }])],
  declarations: [NativescriptAirshipComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptAirshipModule {}
