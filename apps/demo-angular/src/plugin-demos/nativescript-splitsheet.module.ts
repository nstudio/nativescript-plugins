import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSplitsheetComponent } from './nativescript-splitsheet.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSplitsheetComponent }])],
  declarations: [NativescriptSplitsheetComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptSplitsheetModule {}
