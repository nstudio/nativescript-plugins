import { ChangeDetectionStrategy, Component, ElementRef, IterableDiffers, forwardRef } from '@angular/core';

import { Pager } from '@nstudio/nativescript-ui-pager';
import { TEMPLATED_ITEMS_COMPONENT, TemplatedItemsComponent } from './pager-items-comp';

@Component({
    selector: 'Pager',
    template: ` <DetachedContainer>
        <Placeholder #loader></Placeholder>
    </DetachedContainer>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TEMPLATED_ITEMS_COMPONENT,
            useExisting: forwardRef(() => PagerComponent)
        }
    ]
})
export class PagerComponent extends TemplatedItemsComponent {
    public get nativeElement(): Pager {
        return this.templatedItemsView;
    }
    //@ts-ignore
    protected templatedItemsView: Pager;

    constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers) {
        super(_elementRef, _iterableDiffers);
    }
}