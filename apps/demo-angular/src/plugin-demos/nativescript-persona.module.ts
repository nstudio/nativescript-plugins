import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPersonaComponent } from './nativescript-persona.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPersonaComponent }])],
  declarations: [NativescriptPersonaComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptPersonaModule {}
