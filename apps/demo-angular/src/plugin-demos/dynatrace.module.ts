import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { DynatraceComponent } from './dynatrace.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: DynatraceComponent }])],
	declarations: [DynatraceComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class DynatraceModule {}
