import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { PagerComponent } from "./pager-comp";
import { PagerItemDirective, TemplateKeyDirective } from "./pager-items-comp";

export { PagerComponent } from './pager-comp';
export { PagerItemDirective, TemplatedItemsComponent, TemplateKeyDirective } from './pager-items-comp';

@NgModule({
    declarations: [PagerComponent, TemplateKeyDirective, PagerItemDirective],
    exports: [PagerComponent, TemplateKeyDirective, PagerItemDirective],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PagerModule {}
