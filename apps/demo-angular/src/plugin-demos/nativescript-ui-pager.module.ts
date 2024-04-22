import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptUiPagerComponent } from './nativescript-ui-pager.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptUiPagerComponent }])],
  declarations: [NativescriptUiPagerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptUiPagerModule {}
