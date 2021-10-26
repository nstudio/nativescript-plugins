import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptEmbraceComponent } from './nativescript-embrace.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptEmbraceComponent }])],
  declarations: [NativescriptEmbraceComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptEmbraceModule {}
