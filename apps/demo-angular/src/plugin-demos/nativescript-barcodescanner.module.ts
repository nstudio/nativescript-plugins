import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptBarcodescannerComponent } from './nativescript-barcodescanner.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptBarcodescannerComponent }])],
  declarations: [NativescriptBarcodescannerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptBarcodescannerModule {}
