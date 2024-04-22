import { ChangeType, EventData, KeyedTemplate, Observable, Property, ProxyViewContainer, StackLayout, Utils, View, ViewBase, profile } from '@nativescript/core';
import {
    ItemEventData,
    Orientation,
    PagerBase,
    autoPlayProperty,
    autoplayDelayProperty,
    disableSwipeProperty,
    itemTemplatesProperty,
    itemsProperty,
    orientationProperty,
    selectedIndexProperty
} from './common';

export * from './common';
export { ItemsSource, Transformer } from './common';

const main_queue = dispatch_get_current_queue();

export enum ContentInsetAdjustmentBehavior {
    Always = UIScrollViewContentInsetAdjustmentBehavior.Always,
    Automatic = UIScrollViewContentInsetAdjustmentBehavior.Automatic,
    Never = UIScrollViewContentInsetAdjustmentBehavior.Never,
    ScrollableAxes = UIScrollViewContentInsetAdjustmentBehavior.ScrollableAxes
}

function parseContentInsetAdjustmentBehavior(value: string | number) {
    if (typeof value === 'string') {
        switch (value) {
            case 'always':
                return ContentInsetAdjustmentBehavior.Always;
            case 'never':
                return ContentInsetAdjustmentBehavior.Never;
            case 'scrollableAxes':
                return ContentInsetAdjustmentBehavior.ScrollableAxes;
            default:
            case 'automatic':
                return ContentInsetAdjustmentBehavior.Automatic;
        }
    } else {
        return value;
    }
}
export const contentInsetAdjustmentBehaviorProperty = new Property<Pager, ContentInsetAdjustmentBehavior>({
    name: 'contentInsetAdjustmentBehavior',
    valueConverter: parseContentInsetAdjustmentBehavior,
    defaultValue: ContentInsetAdjustmentBehavior.Automatic
});

@NativeClass
class UICellView extends UIView {
    view: WeakRef<View>;
    layoutSubviews() {
        const view = this.view && this.view.get();
        if (!view) {
            return;
        }
        this.frame = this.superview.bounds;
        const size = this.bounds.size;
        View.layoutChild(null, view, 0, 0, Utils.layout.toDevicePixels(size.width), Utils.layout.toDevicePixels(size.height));
    }
}

const PFLAG_FORCE_LAYOUT = 1;
export class Pager extends PagerBase {
    lastEvent: number = 0;
    private mDisableSwipe: boolean = false;
    private mDisableAnimation: boolean = false;
    mLayout: UICollectionViewFlowLinearLayoutImpl;
    mPreparingCell: boolean = false;
    mDelegate: UICollectionDelegateImpl;
    nativeViewProtected: UICollectionView;
    private mDataSource: UICollectionViewDataSourceImpl;
    mMap: Map<PagerCell, View>;
    borderRadius: number;
    borderWidth: number;
    borderColor: string;
    backgroundColor: any;
    mIsRefreshing: boolean = false;
    mIsInit: boolean = false;

    // public mInnerWidth: number = 0;
    // public mInnerHeight: number = 0;
    mLastLayoutKey: string;

    constructor() {
        super();
        this.mMap = new Map<PagerCell, View>();
    }

    createNativeView() {
        this.mLayout = UICollectionViewFlowLinearLayoutImpl.initWithOwner(new WeakRef(this));
        this.mLayout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
        this.mLayout.minimumInteritemSpacing = 0;
        const nativeView = UICollectionView.alloc().initWithFrameCollectionViewLayout(CGRectZero, this.mLayout);
        nativeView.backgroundColor = UIColor.clearColor;
        nativeView.autoresizesSubviews = false;
        nativeView.autoresizingMask = UIViewAutoresizing.None;
        nativeView.showsHorizontalScrollIndicator = false;
        nativeView.showsVerticalScrollIndicator = false;
        nativeView.decelerationRate = UIScrollViewDecelerationRateFast;
        this._itemTemplatesInternal.forEach((t) => {
            nativeView.registerClassForCellWithReuseIdentifier(PagerCell.class(), t.key);
        });
        return nativeView;
    }

    initNativeView() {
        super.initNativeView();
        const nativeView = this.nativeViewProtected;
        nativeView.registerClassForCellWithReuseIdentifier(PagerCell.class(), this._defaultTemplate.key);
        nativeView.backgroundColor = UIColor.clearColor;
        nativeView.autoresizesSubviews = false;
        nativeView.autoresizingMask = 0;
        nativeView.dataSource = this.mDataSource = UICollectionViewDataSourceImpl.initWithOwner(new WeakRef(this));
        nativeView.scrollEnabled = !this.disableSwipe;
        if (this.orientation === 'vertical') {
            this.mLayout.scrollDirection = UICollectionViewScrollDirection.Vertical;
            nativeView.alwaysBounceVertical = true;
            nativeView.alwaysBounceHorizontal = false;
        } else {
            this.mLayout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
            nativeView.alwaysBounceHorizontal = true;
            nativeView.alwaysBounceVertical = false;
        }
        this.mDelegate = UICollectionDelegateImpl.initWithOwner(new WeakRef(this));
        this._setNativeClipToBounds();
        this._initAutoPlay(this.autoPlay);
    }

    getChildView(index: number): View {
        if (this._childrenViews) {
            return this._childrenViews[index].view;
        }
        let result: View;
        if (this.nativeViewProtected) {
            const cell = this.nativeViewProtected.cellForItemAtIndexPath(NSIndexPath.indexPathForRowInSection(index, 0)) as PagerCell;
            return cell?.view;
        }

        return result;
    }
    getViewForItemAtIndex(index: number) {
        return this.getChildView(index);
    }

    _getRealWidthHeight(): { width: number; height: number } {
        let height = 0;
        let width = 0;
        width = (Utils.layout.toDeviceIndependentPixels(this._effectiveItemWidth) - (this.perPage * 2 * this._getSpacing() + this._getPeaking() * 2)) / this.perPage;
        height = (Utils.layout.toDeviceIndependentPixels(this._effectiveItemHeight) - (this.perPage * 2 * this._getSpacing() + this._getPeaking() * 2)) / this.perPage;
        return { height, width };
    }

    _nextIndex(): number {
        if (this.circularMode) {
            // TODO
            return 0;
        } else {
            const next = this.selectedIndex + 1;
            if (next > this.lastIndex) {
                return 0;
            }
            return next;
        }
    }

    _initAutoPlay(value: boolean) {
        if (!this.items || this.items.length === 0) {
            return;
        }
        if (!value) {
            if (this._autoPlayInterval) {
                clearInterval(this._autoPlayInterval);
                this._autoPlayInterval = undefined;
            }
        } else {
            if (this.isLayoutValid && !this._autoPlayInterval) {
                this._autoPlayInterval = setInterval(() => {
                    this.selectedIndex = this._nextIndex();
                }, this.autoPlayDelay);
            }
        }
    }

    /**
     *
     * Get the selected index from the position in the CollectionView
     *
     * @param index The position in the collectionView
     * @returns The selected Index ( i.e. the number in the slides as the user would view it).
     */
    getPosition(index: number): number {
        let position = index;
        if (this.circularMode) {
            if (position === 0) {
                position = this.lastDummy;
            } else if (position === this.firstDummy) {
                position = 0;
            } else {
                position = position - 1;
            }
        }
        return position;
    }

    /**
     *
     * Get  the position in the CollectionView from the selected index
     *
     * @param index The position in the collectionView
     * @returns The selected Index ( i.e. the number in the slides as the user would view it).
     */
    getIndex(index: number): number {
        let position = index;
        if (this.circularMode) {
            if (position === 0) {
                position = 1;
            } else if (position === this.firstDummy) {
                position = 0;
            } else {
                position = position + 1;
            }
        }
        return position;
    }

    animateForFlip(index: number): boolean {
        if (!this.circularMode) {
            return true;
        }

        if (index !== this.firstDummy && index !== 0) {
            return true;
        }
        return false;
    }

    get itemCount(): number {
        return this._childrenCount ? this._childrenCount + (this.circularMode ? 2 : 0) : 0;
    }

    get lastIndex(): number {
        if (this.items && this.items.length === 0) {
            return 0;
        }
        return this.circularMode ? this.itemCount - 3 : this.itemCount - 1;
    }

    get firstDummy(): number {
        const count = this.itemCount;
        if (count === 0) {
            return 0;
        }
        return this.itemCount - 1;
    }

    get lastDummy(): number {
        return this.lastIndex;
    }

    public get _childrenCount() {
        return this.items?.length || this._childrenViews?.length || 0;
    }

    public itemTemplateUpdated(oldData: any, newData: any): void {}

    public _setNativeClipToBounds(): void {
        this.nativeViewProtected.clipsToBounds = true;
    }

    public [orientationProperty.setNative](value: Orientation) {
        if (value === 'horizontal') {
            this.mLayout.scrollDirection = UICollectionViewScrollDirection.Horizontal;
        } else {
            this.mLayout.scrollDirection = UICollectionViewScrollDirection.Vertical;
        }
    }

    public eachChildView(callback: (child: View) => boolean): void {
        this.mMap.forEach((view, key) => callback(view));
    }
    public eachChild(callback: (child: ViewBase) => boolean) {
        this.mMap.forEach((view, key) => callback(view));
    }

    _updateScrollPosition() {
        const view = this.nativeViewProtected;
        const size = this.orientation === 'vertical' ? view.contentSize.height : view.contentSize.width;
        if (!view || size === 0) {
            return;
        }
        this.scrollToIndexAnimated(this.selectedIndex, false);
    }

    [selectedIndexProperty.setNative](value: number, animated = true) {
        if (this.isLoaded) {
            this.scrollToIndexAnimated(value, animated && !this.disableAnimation);
        }
    }

    [itemTemplatesProperty.getDefault](): KeyedTemplate[] {
        return null;
    }

    [itemTemplatesProperty.setNative](value: KeyedTemplate[]) {
        this._itemTemplatesInternal = new Array<KeyedTemplate>(this._defaultTemplate);
        if (value) {
            for (let i = 0, length = value.length; i < length; i++) {
                this.nativeViewProtected.registerClassForCellWithReuseIdentifier(PagerCell.class(), value[i].key);
            }
            this._itemTemplatesInternal = this._itemTemplatesInternal.concat(value);
        }
    }

    [itemsProperty.setNative](value: any) {
        if (this.indicator && value && value.length) {
            this.indicator.setCount(value.length);
        }
        this.setObservableArrayInstance(value);

        if (!value) {
            this.mIsInit = false;
        }
    }

    [autoPlayProperty.setNative](value: boolean) {
        this._initAutoPlay(value);
    }

    private _autoPlayInterval: any;

    [autoplayDelayProperty.setNative](value: number) {
        if (this._autoPlayInterval) {
            clearInterval(this._autoPlayInterval);
            this._autoPlayInterval = undefined;
            this._initAutoPlay(this.autoPlay);
        }
    }

    protected _observableArrayHandler = (args) => {
        if (!this.nativeViewProtected) {
            return;
        }
        if (this.indicator && this.mObservableArrayInstance && this.mObservableArrayInstance.length) {
            this.indicator.setCount(this.mObservableArrayInstance.length);
        }

        const collectionView = this.nativeViewProtected;
        if (collectionView) {
            try {
                let offset = 0;
                collectionView.performBatchUpdatesCompletion(
                    () => {
                        this.mIsRefreshing = true;
                        const array = [];
                        switch (args.action) {
                            case ChangeType.Add:
                                for (let i = 0; i < args.addedCount; i++) {
                                    array.push(NSIndexPath.indexPathForRowInSection(args.index + i, 0));
                                }
                                offset = collectionView.contentSize.width - collectionView.contentOffset.x;
                                collectionView.insertItemsAtIndexPaths(array);
                                break;
                            case ChangeType.Delete:
                                for (let i = 0; i < args.removed.length; i++) {
                                    array.push(NSIndexPath.indexPathForItemInSection(args.index + i, 0));
                                }
                                collectionView.deleteItemsAtIndexPaths(array);
                                break;
                            case ChangeType.Splice:
                                if (args.removed && args.removed.length > 0) {
                                    for (let i = 0; i < args.removed.length; i++) {
                                        array.push(NSIndexPath.indexPathForRowInSection(args.index + i, 0));
                                    }
                                    collectionView.deleteItemsAtIndexPaths(array);
                                }

                                if (args.addedCount > 0) {
                                    const addedArray = [];
                                    for (let i = 0; i < args.addedCount; i++) {
                                        addedArray.push(NSIndexPath.indexPathForRowInSection(args.index + i, 0));
                                    }
                                    collectionView.insertItemsAtIndexPaths(addedArray);
                                }
                                break;
                            case ChangeType.Update:
                                collectionView.reloadItemsAtIndexPaths([NSIndexPath.indexPathForRowInSection(args.index, 0)]);
                                break;
                            default:
                                break;
                        }
                        this._initAutoPlay(this.autoPlay);
                        if (this.itemCount === 0) {
                            this.mIsInit = false;
                            selectedIndexProperty.nativeValueChange(this, -1);
                        }
                    },
                    () => {
                        if (collectionView.indexPathsForVisibleItems.count > 0) {
                            const currentIndex = collectionView.indexPathsForVisibleItems.objectAtIndex(0).item;
                            selectedIndexProperty.nativeValueChange(this, this.getPosition(currentIndex));
                        }
                    }
                );
            } catch (err) {}
        }
    };

    _onItemsChanged(oldValue: any, newValue: any): void {}

    scrollToIndexAnimated(index: number, animate: boolean) {
        if (!this.nativeViewProtected) return;

        const contentSize = this.nativeViewProtected.contentSize;
        const size = this.orientation === 'vertical' ? contentSize.height : contentSize.width;
        if (size === 0) {
            return;
        }
        if (this._childrenCount === 0) {
            return;
        }
        const maxMinIndex = Math.min(Math.max(0, index), this._childrenCount - 1);
        if (!this.isLoaded) {
            return selectedIndexProperty.nativeValueChange(this, maxMinIndex);
        }
        const frame = this.page && this.page.frame;
        if (this.page && frame) {
            if (frame._executingContext) {
                if (frame._executingContext.entry.resolvedPage !== this.page) {
                    return selectedIndexProperty.nativeValueChange(this, maxMinIndex);
                }
            } else if (frame.currentPage !== this.page) {
                return selectedIndexProperty.nativeValueChange(this, maxMinIndex);
            }
        }
        // dispatch_async(main_queue, () => {
        if (this.mDataSource.collectionViewNumberOfItemsInSection(this.nativeViewProtected, 0) > maxMinIndex) {
            // when we have custom layouts (they don't occupy 100% of the parent) and we use custom transformers we need to call setContentOffsetAnimated to take size into account.
            // Reference: https://stackoverflow.com/a/53798708/6015400
            this.nativeViewProtected.setContentOffsetAnimated(CGPointMake(1, 0), !!animate);
            this.nativeViewProtected.scrollToItemAtIndexPathAtScrollPositionAnimated(
                NSIndexPath.indexPathForItemInSection(this.getIndex(maxMinIndex), 0),
                this.orientation === 'vertical' ? UICollectionViewScrollPosition.CenteredVertically : UICollectionViewScrollPosition.CenteredHorizontally,
                !!animate
            );
        }

        selectedIndexProperty.nativeValueChange(this, maxMinIndex);
        // });
    }

    @profile
    public refresh() {
        if (!this.isLoaded || !this.nativeView) {
            this._isDataDirty = true;
            return;
        }
        this._isDataDirty = false;
        this.mLastLayoutKey = this._effectiveItemWidth + '_' + this._effectiveItemHeight;

        // clear bindingContext when it is not observable because otherwise bindings to items won't reevaluate
        this.mMap.forEach((view, nativeView, map) => {
            if (!(view.bindingContext instanceof Observable)) {
                view.bindingContext = null;
            }
        });

        // TODO: this is ugly look here: https://github.com/nativescript-vue/nativescript-vue/issues/525
        // this.clearRealizedCells();
        // dispatch_async(main_queue, () => {
        this.nativeViewProtected.reloadData();
        this.nativeViewProtected.collectionViewLayout.invalidateLayout();
        this._updateScrollPosition();
        this._initAutoPlay(this.autoPlay);
        // });

        if (this.indicator) {
            this.indicator.setCount(this._childrenCount);
        }
    }
    refreshVisibleItems() {
        const view = this.nativeViewProtected;
        if (!view) {
            return;
        }

        const visibles = view.indexPathsForVisibleItems;
        UIView.performWithoutAnimation(() => {
            view.performBatchUpdatesCompletion(() => {
                view.reloadItemsAtIndexPaths(visibles);
            }, null);
        });
    }

    _isDataDirty = false;
    public onLoaded() {
        super.onLoaded();
        if (this._isDataDirty && this._effectiveItemWidth !== undefined && this._effectiveItemHeight !== undefined) {
            this.refresh();
        }

        this.nativeViewProtected.delegate = this.mDelegate;
        if (!this.items && this._childrenCount > 0) {
            selectedIndexProperty.coerce(this);
            this._updateScrollPosition();
        }
    }

    public onUnloaded() {
        if (this.nativeViewProtected) {
            this.nativeViewProtected.delegate = null;
        }
        super.onUnloaded();
    }

    public disposeNativeView() {
        this.mDelegate = null;
        this.mDataSource = null;
        this.nativeViewProtected.delegate = null;
        this.mLayout = null;
        this.clearRealizedCells();
        super.disposeNativeView();
    }

    private clearRealizedCells() {
        this.mMap.forEach((value, key: PagerCell) => {
            this._removeContainer(key);
            this._clearCellViews(key);
        });
        this.mMap.clear();
    }
    private _clearCellViews(cell: PagerCell) {
        // if (cell && cell.view) {
        //     if (cell.view.nativeViewProtected) {
        //         cell.view.nativeViewProtected.removeFromSuperview();
        //     }

        //     cell.owner = undefined;
        // }
        const view = cell.view;
        if (!view) {
            return;
        }
        // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
        if (view.parent && !(view.parent instanceof Pager)) {
            this._removeView(view.parent);
        }
        // No need to request layout when we are removing cells.
        cell.owner = undefined;
        const preparing = this.mPreparingCell;
        this.mPreparingCell = true;
        if (view.parent && !(view.parent instanceof Pager)) {
            if (!(view.parent instanceof Pager)) {
                this._removeView(view.parent);
            } else {
                view.parent._removeView(view);
            }
        }
        this.mPreparingCell = preparing;
        this.mMap.delete(cell);
    }

    [disableSwipeProperty.setNative](value: boolean) {
        this.nativeViewProtected.scrollEnabled = !value;
        this.mDisableSwipe = value;
    }

    [contentInsetAdjustmentBehaviorProperty.setNative](value: ContentInsetAdjustmentBehavior) {
        this.nativeViewProtected.contentInsetAdjustmentBehavior = value as any;
    }
    get disableAnimation(): boolean {
        return this.mDisableAnimation;
    }

    set disableAnimation(value: boolean) {
        this.mDisableAnimation = value;
    }

    public _removeContainer(cell: PagerCell, index?: number): void {
        const view = cell.view;

        this.notify({
            eventName: Pager.itemDisposingEvent,
            index,
            ios: cell,
            view
        } as ItemEventData);
        if (view && view.parent) {
            // This is to clear the StackLayout that is used to wrap ProxyViewContainer instances.
            if (!(view.parent instanceof Pager)) {
                this._removeView(view.parent);
            }

            view.parent._removeView(view);
        }
        this.mMap.delete(cell);
    }

    // called by N when the size actually changed
    // _onSizeChanged() {
    //     dispatch_async(main_queue, () => {
    //         if (!this.pager) {
    //             return;
    //         }
    //         this.pager.reloadData();
    //         // if (changed) {
    //         this._updateScrollPosition();
    //         // }
    //         this._initAutoPlay(this.autoPlay);
    //     });
    // }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        this.mMap.forEach((childView: any, pagerCell) => {
            View.measureChild(this, childView, childView._currentWidthMeasureSpec, childView._currentHeightMeasureSpec);
        });
    }

    public onLayout(left: number, top: number, right: number, bottom: number) {
        super.onLayout(left, top, right, bottom);
        if (this.iosOverflowSafeAreaEnabled) {
            const safeArea = this.getSafeAreaInsets();
            this._effectiveItemHeight += safeArea.top + safeArea.bottom;
        }
        if (!this.nativeView) {
            return;
        }
        // this.nativeViewProtected.frame = this.nativeView.bounds;
        const layoutView = this.nativeViewProtected.collectionViewLayout;
        if (!layoutView) {
            return;
        }

        layoutView.invalidateLayout();

        const size = this._getSize();
        const width = Utils.layout.toDevicePixels(size.width);
        const height = Utils.layout.toDevicePixels(size.height);
        this.mMap.forEach((childView, pagerCell) => {
            View.layoutChild(this, childView, 0, 0, width, height);
        });

        // there is no need to call refresh if it was triggered before with same size.
        // this refresh is just to handle size change
        const layoutKey = this._effectiveItemWidth + '_' + this._effectiveItemHeight;
        if (this.mLastLayoutKey !== layoutKey) {
            this.refresh();
        }
    }

    public requestLayout(): void {
        // When preparing cell don't call super - no need to invalidate our measure when cell desiredSize is changed.
        if (!this.mPreparingCell) {
            super.requestLayout();
        }
    }

    public _prepareCell(cell: PagerCell, indexPath: NSIndexPath) {
        try {
            this.mPreparingCell = true;
            const index = indexPath.row;

            let view = cell.view;
            const template = this._getItemTemplate(indexPath.row);

            if (!view) {
                view = template.createView();
                if (!view && this._itemViewLoader !== undefined) {
                    view = this._itemViewLoader(this._getItemTemplateKey(indexPath.row));
                }
            }
            const bindingContext = this._getDataItem(indexPath.row);
            const args = {
                eventName: Pager.itemLoadingEvent,
                object: this,
                index,
                android: undefined,
                ios: cell,
                view,
                bindingContext
            } as ItemEventData;

            this.notify(args);

            view = args.view || this._getDefaultItemContent(indexPath.row);

            // Proxy containers should not get treated as layouts.
            // Wrap them in a real layout as well.
            if (view instanceof ProxyViewContainer) {
                const sp = new StackLayout();
                sp.addChild(view);
                view = sp;
            }

            // If cell is reused it have old content - remove it first.
            if (!cell.view) {
                cell.owner = new WeakRef(view);
            } else if (cell.view !== view) {
                this.mMap.delete(cell);
                this._removeContainer(cell, index);
                (cell.view.nativeViewProtected as UIView).removeFromSuperview();
                cell.owner = new WeakRef(view);
            }
            if (view) {
                view.bindingContext = bindingContext;
            }
            this.mMap.set(cell, view);

            if (view && !view.parent) {
                this._addView(view);
                // prevent infinit request layout
                // view['performLayout'] = () => {
                //     this._layoutCell(view, indexPath);
                //     const size = this._getSize();
                //     const width = layout.toDevicePixels(size.width);
                //     const height = layout.toDevicePixels(size.height);
                //     if (view && view.isLayoutRequired) {
                //         View.layoutChild(this, view, 0, 0, width, height);
                //     }
                // };
                if (this.iosOverflowSafeArea) {
                    const innerView = UICellView.new() as UICellView;
                    innerView.view = new WeakRef(view);
                    innerView.addSubview(view.nativeViewProtected);
                    cell.contentView.addSubview(innerView);
                } else {
                    cell.contentView.addSubview(view.nativeViewProtected);
                }
            }

            this._layoutCell(view, indexPath);
        } finally {
            this.mPreparingCell = false;
        }
    }

    _layoutCell(cellView: View, index: NSIndexPath) {
        if (cellView) {
            const size = this._getSize();
            const width = Utils.layout.toDevicePixels(size.width);
            const height = Utils.layout.toDevicePixels(size.height);
            const widthMeasureSpec = Utils.layout.makeMeasureSpec(width, Utils.layout.EXACTLY);

            const heightMeasureSpec = Utils.layout.makeMeasureSpec(height, Utils.layout.EXACTLY);

            const measured = View.measureChild(this, cellView, widthMeasureSpec, heightMeasureSpec);
        }
    }

    get horizontalOffset(): number {
        return this.nativeViewProtected ? this.nativeViewProtected.contentOffset.x : 0;
    }

    get verticalOffset(): number {
        return this.nativeViewProtected ? this.nativeViewProtected.contentOffset.y : 0;
    }

    _getSpacing(): number {
        return Utils.layout.toDeviceIndependentPixels(this.convertToSize(this.spacing));
    }

    _getPeaking(): number {
        return Utils.layout.toDeviceIndependentPixels(this.convertToSize(this.peaking));
    }

    _getSize(): { width: number; height: number } {
        let width = Utils.layout.toDeviceIndependentPixels(this._effectiveItemWidth);
        let height = Utils.layout.toDeviceIndependentPixels(this._effectiveItemHeight);
        if (this.orientation === 'vertical') {
            height = (height - (this._getSpacing() * 2 + this._getPeaking() * 2)) / this.perPage;
        } else {
            width = (width - (this._getSpacing() * 2 + this._getPeaking() * 2)) / this.perPage;
        }
        if (Number.isNaN(width)) {
            width = 0;
        }

        if (Number.isNaN(height)) {
            height = 0;
        }
        return { width, height };
    }
}

@NativeClass
class PagerCell extends UICollectionViewCell {
    public owner: WeakRef<View>;
    public index: number;

    public get view(): View {
        return this.owner ? this.owner.get() : null;
    }

    public static initWithEmptyBackground(): PagerCell {
        const cell = PagerCell.new() as PagerCell;
        // Clear background by default - this will make cells transparent
        cell.backgroundColor = null;
        return cell;
    }

    public willMoveToSuperview(newSuperview: UIView): void {
        const parent = (this.view ? this.view.parent : null) as Pager;

        // When inside Pager and there is no newSuperview this cell is
        // removed from native visual tree so we remove it from our tree too.
        if (parent && !newSuperview) {
            parent._removeContainer(this, this.index);
        }
    }
}

@NativeClass
@ObjCClass(UICollectionViewDelegate, UICollectionViewDelegateFlowLayout)
class UICollectionDelegateImpl extends NSObject implements UICollectionViewDelegate, UICollectionViewDelegateFlowLayout {
    private _owner: WeakRef<Pager>;
    isScrolling = false;

    public static initWithOwner(owner: WeakRef<Pager>): UICollectionDelegateImpl {
        const delegate = UICollectionDelegateImpl.alloc().init() as UICollectionDelegateImpl;
        delegate._owner = owner;
        return delegate;
    }

    public collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            const inset = owner._getSpacing() + owner._getPeaking();
            if (owner.orientation === 'vertical') {
                return new UIEdgeInsets({
                    bottom: inset,
                    left: 0,
                    right: 0,
                    top: inset
                });
            }

            return new UIEdgeInsets({
                bottom: 0,
                left: inset,
                right: inset,
                top: 0
            });
        }
        return new UIEdgeInsets({ bottom: 0, left: 0, right: 0, top: 0 });
    }

    public collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize {
        const owner = this._owner && this._owner.get();
        if (!owner) return CGSizeZero;
        const size = owner._getSize();
        return CGSizeMake(size.width, size.height);
    }

    public collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) {
        const owner = this._owner && this._owner.get();
        if (owner) {
            if (!owner.mIsInit) {
                owner._updateScrollPosition();
                collectionView.collectionViewLayout.invalidateLayout();
                owner.mIsInit = true;
            }
            if (owner.items && indexPath.row === owner.lastIndex - owner.loadMoreCount) {
                owner.notify<EventData>({
                    eventName: Pager.loadMoreItemsEvent,
                    object: owner
                });
            }
        }

        if (cell.preservesSuperviewLayoutMargins) {
            cell.preservesSuperviewLayoutMargins = false;
        }

        if (cell.layoutMargins) {
            cell.layoutMargins = UIEdgeInsetsZero;
        }
    }

    public collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number {
        const owner = this._owner ? this._owner.get() : null;
        if (!owner) return 0;
        const result = owner._getSpacing();
        return result;
    }

    public scrollViewWillBeginDragging(scrollView: UIScrollView): void {
        const owner = this._owner && this._owner.get();
        if (owner) {
            if (owner.lastEvent === 0) {
                owner.notify({
                    eventName: Pager.swipeStartEvent,
                    object: owner
                });
                owner.lastEvent = 1;
            }
        }
    }

    public scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void {
        const owner = this._owner ? this._owner.get() : null;
        if (owner) {
            owner.notify({
                eventName: Pager.swipeEvent,
                object: owner
            });
        }
    }

    public scrollViewDidScroll(scrollView: UIScrollView): void {
        const owner = this._owner.get();
        if (owner) {
            let width: number;
            let offset: number;
            const size = owner._getRealWidthHeight();
            let total: number;
            if (owner.orientation === 'vertical') {
                width = size.height;
                offset = scrollView.contentOffset.y;
                total = scrollView.contentSize.height - scrollView.bounds.size.height;
            } else {
                width = size.width;
                offset = scrollView.contentOffset.x;
                total = scrollView.contentSize.width - scrollView.bounds.size.width;
            }
            const percent = offset / total;
            const progress = percent * (owner.itemCount - 1);
            // if (owner.indicatorView && owner.indicatorView.setWithProgressAnimated && !Number.isNaN(progress)) {
            //     owner.indicatorView.progress = progress;
            // }
            const index = parseInt(progress.toFixed(0), 10);

            if (owner.indicator && !Number.isNaN(index)) {
                if (!(owner.circularMode && (index === 0 || index === owner.firstDummy))) {
                    owner.indicator.setSelection(owner.getPosition(index));
                }
            }
            owner.notify({
                object: owner,
                eventName: Pager.scrollEvent,
                selectedIndex: Math.floor(progress),
                currentPosition: progress,
                scrollX: owner.horizontalOffset,
                scrollY: owner.verticalOffset
            });

            if (owner.lastEvent === 1) {
                owner.notify({
                    eventName: Pager.swipeOverEvent,
                    object: owner
                });
                owner.lastEvent = 1;
            }

            // (scrollView as any).scrollToItemAtIndexPathAtScrollPositionAnimated(
            //     NSIndexPath.indexPathForRowInSection(Math.round(width),0), UICollectionViewScrollPosition.CenteredHorizontally, true
            // );

            if (owner.circularMode) {
                if (!this.isScrolling) {
                    this.isScrolling = true;
                    const contentOffset = scrollView.contentOffset;
                    const contentSize = scrollView.contentSize;
                    const frameSize = scrollView.frame.size;
                    if (contentOffset.x <= 0) {
                        scrollView.contentOffset = CGPointMake(contentSize.width - frameSize.width * 2, 0);
                        if (owner.indicator) {
                            owner.indicator.setSelection(owner.lastIndex, false);
                        }
                    } else if (contentOffset.x + frameSize.width >= contentSize.width) {
                        scrollView.contentOffset = CGPointMake(frameSize.width, 0);
                        if (owner.indicator) {
                            owner.indicator.setSelection(0, false);
                        }
                    }

                    this.isScrolling = false;
                }
            }
            /* if (!Number.isNaN(width)) {
                 let page = Math.ceil(width);
                 const doScroll = () => {
                     if (!Number.isNaN(width)) {
                         // scrollView.setContentOffsetAnimated(point, false);
                         scrollView.contentOffset = CGPointMake(Math.ceil(w) * page, scrollView.contentOffset.y);
                     }
                 };
                 if (page === 0) {
                     page = owner.itemCount - 2;
                     doScroll();
                     // selectedIndexProperty.nativeValueChange(owner, owner.itemCount - 3);
                 } else if (page === owner.itemCount) {
                     page = 1;
                     doScroll();
                     //  selectedIndexProperty.nativeValueChange(owner, 0);
                 } else {
                     if (page === owner._childrenCount + 1) {
                         //    selectedIndexProperty.nativeValueChange(owner, 0);
                     } else {
                         //   selectedIndexProperty.nativeValueChange(owner, page - 1);
                     }

                 }
             } */

            /* if(owner){
                 let width = 0;
                 let w = (layout.toDeviceIndependentPixels(owner._effectiveItemWidth) - (((owner.perPage * 2) * owner._getSpacing()) + (owner._getPeaking() * 2))) / owner.perPage;
                 let h = (layout.toDeviceIndependentPixels(owner._effectiveItemHeight) - (((owner.perPage * 2) * owner._getSpacing()) + (owner._getPeaking() * 2))) / owner.perPage;
                 width = scrollView.contentOffset.x / w;
                 if (!Number.isNaN(width)) {
                     let page = Math.ceil(width);
                     const doScroll = () => {
                         if (!Number.isNaN(width)) {
                             const point = CGPointMake(Math.ceil(w) * page, scrollView.contentOffset.y);
                             scrollView.setContentOffsetAnimated(point, false);
                         }
                     };
                     if (page === 0) {
                         page = owner.itemCount - 2;
                         doScroll();
                         selectedIndexProperty.nativeValueChange(owner, owner.itemCount - 3);
                     } else if (page === owner.itemCount -1) {
                         page = 1;
                         doScroll();
                         selectedIndexProperty.nativeValueChange(owner, 0);
                     } else {
                         if(page === owner.itemCount + 1){
                             selectedIndexProperty.nativeValueChange(owner, 0);
                         }else {
                             selectedIndexProperty.nativeValueChange(owner, page - 1);
                         }
                     }
                 }
             } */

            // scrollView.setContentOffsetAnimated(CGPointMake((w * width) + 1, 0),false);
            // (owner.nativeView as UICollectionView).setContentOffsetAnimated(CGPointMake((w * width) + 1, 0),false);
        }
    }

    scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void {}

    public scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>) {
        const owner = this._owner ? this._owner.get() : null;

        if (!owner) return;

        if (owner.lastEvent === 1) {
            owner.notify({
                eventName: Pager.swipeEndEvent,
                object: owner
            });
            owner.lastEvent = 0;
        }
    }
}

@NativeClass
@ObjCClass(UICollectionViewDataSource)
class UICollectionViewDataSourceImpl extends NSObject implements UICollectionViewDataSource {
    _owner: WeakRef<Pager>;

    public static initWithOwner(owner: WeakRef<Pager>): UICollectionViewDataSourceImpl {
        const delegate = UICollectionViewDataSourceImpl.alloc().init() as UICollectionViewDataSourceImpl;
        delegate._owner = owner;
        return delegate;
    }

    public collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell {
        const owner = this._owner ? this._owner.get() : null;
        let cell;
        let count = 0;
        if (owner) {
            count = owner._childrenCount;
            if (owner.circularMode) {
                count = owner.itemCount;
                switch (indexPath.row) {
                    case 0:
                        indexPath = NSIndexPath.indexPathForRowInSection(owner.lastDummy, 0);
                        break;
                    case owner.firstDummy:
                        indexPath = NSIndexPath.indexPathForRowInSection(0, 0);
                        break;
                    default:
                        indexPath = NSIndexPath.indexPathForRowInSection(indexPath.row - 1, 0);
                        break;
                }
            }
        }
        if (owner && !owner.items && count > 0) {
            const index = indexPath.row;
            const data = owner._childrenViews[index];
            const viewType = data.type;
            owner.mPreparingCell = true;
            collectionView.registerClassForCellWithReuseIdentifier(PagerCell.class(), `static-${viewType}`);
            cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath(`static-${viewType}`, indexPath) || PagerCell.initWithEmptyBackground();
            cell.index = index;
            const view = data.view;

            // if (view instanceof ProxyViewContainer) {
            //     let sp = new StackLayout();
            //     sp.addChild(view);
            //     view = sp;
            // }

            // If cell is reused it has old content - remove it first.
            if (!cell.view) {
                cell.owner = new WeakRef(view);
            } else if (cell.view !== view) {
                owner._removeView(view);
                // (cell.view.nativeViewProtected as UIView).removeFromSuperview();
                cell.owner = new WeakRef(view);
            }

            if (view && !view.parent) {
                // view['performLayout'] = () => {
                //     View.measureChild(
                //         owner,
                //         view,
                //         view._currentWidthMeasureSpec,
                //         view._currentHeightMeasureSpec
                //     );
                //     if (view && view.isLayoutRequired) {
                //         View.layoutChild(owner, view, 0, 0, view.getMeasuredWidth(), view.getMeasuredHeight());
                //     }
                // };
                owner._addView(view);
                // if (owner.iosOverflowSafeArea) {
                const innerView = UICellView.new() as UICellView;
                innerView.view = new WeakRef(view);
                innerView.addSubview(view.nativeViewProtected);
                cell.contentView.addSubview(innerView);
                owner.mMap.set(cell, view);
                // } else {
                //     cell.contentView.addSubview(view.nativeViewProtected);
                // }
            }

            view.iosOverflowSafeArea = owner.iosOverflowSafeArea;
            view['iosIgnoreSafeArea'] = owner['iosIgnoreSafeArea'];
            owner._layoutCell(view, indexPath);
            const size = owner._getSize();
            const width = Utils.layout.toDevicePixels(size.width);
            const height = Utils.layout.toDevicePixels(size.height);
            if (view && (view as any).isLayoutRequired) {
                View.layoutChild(owner, view, 0, 0, width, height);
            }
            owner.mPreparingCell = false;
            return cell;
        }

        const template = owner && owner._getItemTemplate(indexPath.row);
        cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath(template.key, indexPath) || PagerCell.initWithEmptyBackground();
        cell.index = indexPath;
        if (owner) {
            const size = owner._getSize();
            owner._prepareCell(cell, indexPath);
            const cellView: any = (cell as PagerCell).view;
            cellView.iosOverflowSafeArea = owner.iosOverflowSafeArea;
            cellView['iosIgnoreSafeArea'] = owner['iosIgnoreSafeArea'];
            if (cellView && cellView.isLayoutRequired) {
                View.layoutChild(owner, cellView, 0, 0, Utils.layout.toDevicePixels(size.width), Utils.layout.toDevicePixels(size.height));
            }
        }

        return cell;
    }

    public collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number {
        const owner = this._owner ? this._owner.get() : null;
        // make sure we dont start to load static view if the pager is not loaded.
        // otherwise static items wont "load"
        if (!owner || !owner.isLoaded) return 0;
        return owner.circularMode ? owner.itemCount : owner._childrenCount;
    }

    public numberOfSectionsInCollectionView(collectionView: UICollectionView): number {
        return 1;
    }
}

@NativeClass
class UICollectionViewFlowLinearLayoutImpl extends UICollectionViewFlowLayout {
    _owner: WeakRef<Pager>;
    _curl: CATransition;

    public static initWithOwner(owner: WeakRef<Pager>): UICollectionViewFlowLinearLayoutImpl {
        const layout = UICollectionViewFlowLinearLayoutImpl.new() as UICollectionViewFlowLinearLayoutImpl;
        layout._owner = owner;
        layout._curl = CATransition.animation();
        return layout;
    }

    public layoutAttributesForElementsInRect(rect: CGRect) {
        const owner = this._owner ? this._owner.get() : null;
        const originalLayoutAttribute = super.layoutAttributesForElementsInRect(rect);
        const visibleLayoutAttributes = NSMutableArray.alloc().init();
        if (owner && owner.transformers) {
            const transformsArray = owner.transformers
                .split(' ')
                .map((s) => Pager.mRegisteredTransformers[s])
                .filter((s) => !!s);
            if (transformsArray.length) {
                const collectionView = this.collectionView;
                const count = originalLayoutAttribute.count;
                for (let i = 0; i < count; i++) {
                    const attributes = originalLayoutAttribute.objectAtIndex(i);
                    visibleLayoutAttributes.addObject(attributes);
                    for (const transformer of transformsArray) {
                        transformer(i, attributes, owner, collectionView);
                    }
                }
            }
        } else {
            return originalLayoutAttribute;
        }

        return visibleLayoutAttributes as any;
    }

    public shouldInvalidateLayoutForBoundsChange(newBounds: CGRect): boolean {
        return true;
    }

    public initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath: NSIndexPath): UICollectionViewLayoutAttributes {
        const attrs = super.initialLayoutAttributesForAppearingItemAtIndexPath(itemIndexPath);
        attrs.alpha = 1;
        return attrs;
    }

    public finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath: NSIndexPath): UICollectionViewLayoutAttributes {
        const attrs = super.finalLayoutAttributesForDisappearingItemAtIndexPath(itemIndexPath);
        attrs.alpha = 1;
        return attrs;
    }

    targetContentOffsetForProposedContentOffsetWithScrollingVelocity(proposedContentOffset: CGPoint, velocity: CGPoint) {
        const owner = this._owner ? this._owner.get() : null;
        if (!this.collectionView || !owner) {
            return super.targetContentOffsetForProposedContentOffsetWithScrollingVelocity(proposedContentOffset, velocity);
        }
        const size = owner._getRealWidthHeight();
        if (this.scrollDirection === UICollectionViewScrollDirection.Horizontal) {
            // Page width used for estimating and calculating paging.
            const pageWidth = size.width + this.minimumInteritemSpacing;

            // Make an estimation of the current page position.
            const approximatePage = this.collectionView.contentOffset.x / pageWidth;
            // Determine the current page based on velocity.
            const currentPage = velocity.x === 0 ? Math.round(approximatePage) : velocity.x < 0.0 ? Math.floor(approximatePage) : Math.ceil(approximatePage);

            // Create custom flickVelocity.
            const flickVelocity = velocity.x * 0.3;

            // Check how many pages the user flicked, if <= 1 then flickedPages should return 0.
            const flickedPages = Math.abs(Math.round(flickVelocity)) <= 1 ? 0 : Math.round(flickVelocity);

            const newPageIndex = currentPage + flickedPages;
            const actualIndex = Math.min(Math.max(owner.getPosition(newPageIndex), 0), owner._childrenCount - 1);
            selectedIndexProperty.nativeValueChange(owner, actualIndex);

            // Calculate newHorizontalOffset.
            const newHorizontalOffset = newPageIndex * pageWidth - this.collectionView.contentInset.left;

            return CGPointMake(newHorizontalOffset, proposedContentOffset.y);
        } else {
            // Page height used for estimating and calculating paging.
            // let pageHeight = size.height + this.minimumLineSpacing;
            const pageHeight = size.height;

            // Make an estimation of the current page position.
            const approximatePage = Math.max(0, this.collectionView.contentOffset.y / pageHeight);

            // Determine the current page based on velocity.
            const currentPage = velocity.y === 0 ? Math.round(approximatePage) : velocity.y < 0.0 ? Math.floor(approximatePage) : Math.ceil(approximatePage);

            // Create custom flickVelocity.
            const flickVelocity = velocity.y * 0.3;

            // Check how many pages the user flicked, if <= 1 then flickedPages should return 0.
            const flickedPages = Math.abs(Math.round(flickVelocity)) <= 1 ? 0 : Math.round(flickVelocity);

            const newPageIndex = currentPage + flickedPages;
            selectedIndexProperty.nativeValueChange(owner, Math.min(Math.max(owner.getPosition(newPageIndex), 0), owner._childrenCount - 1));
            const newVerticalOffset = newPageIndex * pageHeight - this.collectionView.contentInset.top;

            return CGPointMake(proposedContentOffset.x, newVerticalOffset);
        }
    }
}
