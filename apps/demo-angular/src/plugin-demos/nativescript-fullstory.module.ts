import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFullstoryComponent } from './nativescript-fullstory.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFullstoryComponent }])],
  declarations: [NativescriptFullstoryComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptFullstoryModule {}
