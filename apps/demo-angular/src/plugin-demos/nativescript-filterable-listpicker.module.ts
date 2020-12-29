import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FilterableListpickerComponent } from './nativescript-filterable-listpicker.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FilterableListpickerComponent }])],
	declarations: [FilterableListpickerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFilterableListpickerModule {}
