import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAirshipHmsComponent } from './nativescript-airship-hms.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAirshipHmsComponent }])],
  declarations: [NativescriptAirshipHmsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptAirshipHmsModule {}
