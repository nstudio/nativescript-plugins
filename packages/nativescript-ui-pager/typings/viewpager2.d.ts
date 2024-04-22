declare namespace androidx {
    export namespace viewpager2 {
        export namespace adapter {
            export abstract class FragmentStateAdapter extends recyclerview.widget.RecyclerView.Adapter<FragmentViewHolder> implements StatefulAdapter {
                public static class: java.lang.Class<FragmentStateAdapter>;

                public saveState(): globalAndroid.os.Parcelable;

                public onViewRecycled(param0: FragmentViewHolder): void;

                public setHasStableIds(param0: boolean): void;

                public onDetachedFromRecyclerView(param0: recyclerview.widget.RecyclerView): void;

                public constructor(param0: fragment.app.Fragment);

                public createFragment(param0: number): fragment.app.Fragment;

                public onViewAttachedToWindow(param0: FragmentViewHolder): void;

                public containsItem(param0: number): boolean;

                public onFailedToRecycleView(param0: FragmentViewHolder): boolean;

                public restoreState(param0: globalAndroid.os.Parcelable): void;

                public constructor(param0: fragment.app.FragmentManager, param1: lifecycle.Lifecycle);

                public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): FragmentViewHolder;

                public constructor(param0: fragment.app.FragmentActivity);

                public onBindViewHolder(param0: FragmentViewHolder, param1: number): void;

                public getItemId(param0: number): number;

                public onAttachedToRecyclerView(param0: recyclerview.widget.RecyclerView): void;
            }

            export namespace FragmentStateAdapter {
                export abstract class DataSetChangeObserver {
                    public static class: java.lang.Class<DataSetChangeObserver>;

                    public onChanged(): void;

                    public onItemRangeMoved(param0: number, param1: number, param2: number): void;

                    public onItemRangeChanged(param0: number, param1: number, param2: any): void;
                    public onItemRangeChanged(param0: number, param1: number): void;

                    public onItemRangeRemoved(param0: number, param1: number): void;

                    public onItemRangeInserted(param0: number, param1: number): void;
                }

                export class FragmentMaxLifecycleEnforcer {
                    public static class: java.lang.Class<FragmentMaxLifecycleEnforcer>;
                }
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace adapter {
            export class FragmentViewHolder {
                public static class: java.lang.Class<FragmentViewHolder>;
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace adapter {
            export class StatefulAdapter {
                public static class: java.lang.Class<StatefulAdapter>;

                /**
                 * Constructs a new instance of the androidx.viewpager2.adapter.StatefulAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    saveState(): globalAndroid.os.Parcelable;
                    restoreState(param0: globalAndroid.os.Parcelable): void;
                });
                public constructor();

                public saveState(): globalAndroid.os.Parcelable;

                public restoreState(param0: globalAndroid.os.Parcelable): void;
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace widget {
            export class AnimateLayoutChangeDetector {
                public static class: java.lang.Class<AnimateLayoutChangeDetector>;
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace widget {
            export class CompositeOnPageChangeCallback extends ViewPager2.OnPageChangeCallback {
                public static class: java.lang.Class<CompositeOnPageChangeCallback>;

                public onPageSelected(param0: number): void;

                public onPageScrolled(param0: number, param1: number, param2: number): void;

                public onPageScrollStateChanged(param0: number): void;
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace widget {
            export class CompositePageTransformer extends ViewPager2.PageTransformer {
                public static class: java.lang.Class<CompositePageTransformer>;

                public transformPage(param0: globalAndroid.view.View, param1: number): void;

                public removeTransformer(param0: ViewPager2.PageTransformer): void;

                public addTransformer(param0: ViewPager2.PageTransformer): void;

                public constructor();
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace widget {
            export class FakeDrag {
                public static class: java.lang.Class<FakeDrag>;
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace widget {
            export class MarginPageTransformer extends ViewPager2.PageTransformer {
                public static class: java.lang.Class<MarginPageTransformer>;

                public transformPage(param0: globalAndroid.view.View, param1: number): void;

                public constructor(param0: number);
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace widget {
            export class PageTransformerAdapter extends ViewPager2.OnPageChangeCallback {
                public static class: java.lang.Class<PageTransformerAdapter>;

                public onPageSelected(param0: number): void;

                public onPageScrolled(param0: number, param1: number, param2: number): void;

                public onPageScrollStateChanged(param0: number): void;
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace widget {
            export class ScrollEventAdapter {
                public static class: java.lang.Class<ScrollEventAdapter>;

                public onScrollStateChanged(param0: recyclerview.widget.RecyclerView, param1: number): void;

                public onScrolled(param0: recyclerview.widget.RecyclerView, param1: number, param2: number): void;
            }

            export namespace ScrollEventAdapter {
                export class ScrollEventValues {
                    public static class: java.lang.Class<ScrollEventValues>;
                }
            }
        }
    }
}

declare namespace androidx {
    export namespace viewpager2 {
        export namespace widget {
            export class ViewPager2 extends android.view.ViewGroup {
                public static class: java.lang.Class<ViewPager2>;
                public static ORIENTATION_HORIZONTAL: number;
                public static ORIENTATION_VERTICAL: number;
                public static SCROLL_STATE_IDLE: number;
                public static SCROLL_STATE_DRAGGING: number;
                public static SCROLL_STATE_SETTLING: number;
                public static OFFSCREEN_PAGE_LIMIT_DEFAULT: number;

                public setUserInputEnabled(param0: boolean): void;

                public canScrollHorizontally(param0: number): boolean;

                public fakeDragBy(param0: number): boolean;

                public isFakeDragging(): boolean;

                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);

                public getOrientation(): number;

                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);

                public setAdapter(param0: recyclerview.widget.RecyclerView.Adapter<any>): void;

                public beginFakeDrag(): boolean;

                public isUserInputEnabled(): boolean;

                public requestTransform(): void;

                public constructor(param0: globalAndroid.content.Context);

                public setOffscreenPageLimit(param0: number): void;

                public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;

                public unregisterOnPageChangeCallback(param0: ViewPager2.OnPageChangeCallback): void;

                public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;

                public getAccessibilityClassName(): string;

                public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;

                public performAccessibilityAction(param0: number, param1: globalAndroid.os.Bundle): boolean;

                public getScrollState(): number;

                public canScrollVertically(param0: number): boolean;

                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);

                public onSaveInstanceState(): globalAndroid.os.Parcelable;

                public setOrientation(param0: number): void;

                public setCurrentItem(param0: number, param1: boolean): void;

                public getAdapter(): recyclerview.widget.RecyclerView.Adapter<any>;

                public removeItemDecoration(param0: recyclerview.widget.RecyclerView.ItemDecoration): void;

                public addItemDecoration(param0: recyclerview.widget.RecyclerView.ItemDecoration, param1: number): void;

                public endFakeDrag(): boolean;

                public getItemDecorationCount(): number;

                public invalidateItemDecorations(): void;

                public setCurrentItem(param0: number): void;

                public setLayoutDirection(param0: number): void;

                public onViewAdded(param0: globalAndroid.view.View): void;

                public registerOnPageChangeCallback(param0: ViewPager2.OnPageChangeCallback): void;

                public getItemDecorationAt(param0: number): recyclerview.widget.RecyclerView.ItemDecoration;

                public setPageTransformer(param0: ViewPager2.PageTransformer): void;

                public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;

                public addItemDecoration(param0: recyclerview.widget.RecyclerView.ItemDecoration): void;

                public onMeasure(param0: number, param1: number): void;

                public getCurrentItem(): number;

                public getOffscreenPageLimit(): number;

                public removeItemDecorationAt(param0: number): void;
            }

            export namespace ViewPager2 {
                export abstract class AccessibilityProvider {
                    public static class: java.lang.Class<AccessibilityProvider>;
                }

                export class BasicAccessibilityProvider extends AccessibilityProvider {
                    public static class: java.lang.Class<BasicAccessibilityProvider>;

                    public onLmInitializeAccessibilityNodeInfo(param0: core.view.accessibility.AccessibilityNodeInfoCompat): void;

                    public onRvGetAccessibilityClassName(): string;

                    public handlesRvGetAccessibilityClassName(): boolean;

                    public onLmPerformAccessibilityAction(param0: number): boolean;

                    public handlesLmPerformAccessibilityAction(param0: number): boolean;
                }

                export abstract class DataSetChangeObserver {
                    public static class: java.lang.Class<DataSetChangeObserver>;

                    public onChanged(): void;

                    public onItemRangeMoved(param0: number, param1: number, param2: number): void;

                    public onItemRangeChanged(param0: number, param1: number, param2: any): void;
                    public onItemRangeChanged(param0: number, param1: number): void;

                    public onItemRangeRemoved(param0: number, param1: number): void;

                    public onItemRangeInserted(param0: number, param1: number): void;
                }

                export class LinearLayoutManagerImpl {
                    public static class: java.lang.Class<LinearLayoutManagerImpl>;

                    public calculateExtraLayoutSpace(param0: recyclerview.widget.RecyclerView.State, param1: native.Array<number>): void;

                    public requestChildRectangleOnScreen(param0: recyclerview.widget.RecyclerView, param1: globalAndroid.view.View, param2: globalAndroid.graphics.Rect, param3: boolean, param4: boolean): boolean;

                    public onInitializeAccessibilityNodeInfo(param0: recyclerview.widget.RecyclerView.Recycler, param1: recyclerview.widget.RecyclerView.State, param2: core.view.accessibility.AccessibilityNodeInfoCompat): void;

                    public performAccessibilityAction(param0: recyclerview.widget.RecyclerView.Recycler, param1: recyclerview.widget.RecyclerView.State, param2: number, param3: globalAndroid.os.Bundle): boolean;
                }

                export class OffscreenPageLimit {
                    public static class: java.lang.Class<OffscreenPageLimit>;

                    /**
                     * Constructs a new instance of the androidx.viewpager2.widget.ViewPager2$OffscreenPageLimit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                }

                export abstract class OnPageChangeCallback {
                    public static class: java.lang.Class<OnPageChangeCallback>;

                    public onPageSelected(param0: number): void;

                    public onPageScrolled(param0: number, param1: number, param2: number): void;

                    public constructor();

                    public onPageScrollStateChanged(param0: number): void;
                }

                export class Orientation {
                    public static class: java.lang.Class<Orientation>;

                    /**
                     * Constructs a new instance of the androidx.viewpager2.widget.ViewPager2$Orientation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                }

                export class PageAwareAccessibilityProvider extends AccessibilityProvider {
                    public static class: java.lang.Class<PageAwareAccessibilityProvider>;

                    public handlesPerformAccessibilityAction(param0: number, param1: globalAndroid.os.Bundle): boolean;

                    public onPerformAccessibilityAction(param0: number, param1: globalAndroid.os.Bundle): boolean;

                    public onAttachAdapter(param0: recyclerview.widget.RecyclerView.Adapter<any>): void;

                    public onSetLayoutDirection(): void;

                    public onRestorePendingState(): void;

                    public onGetAccessibilityClassName(): string;

                    public onDetachAdapter(param0: recyclerview.widget.RecyclerView.Adapter<any>): void;

                    public onRvInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;

                    public onSetUserInputEnabled(): void;

                    public onSetNewCurrentItem(): void;

                    public onSetOrientation(): void;

                    public onInitialize(param0: CompositeOnPageChangeCallback, param1: recyclerview.widget.RecyclerView): void;

                    public handlesGetAccessibilityClassName(): boolean;

                    public onInitializeAccessibilityNodeInfo(param0: globalAndroid.view.accessibility.AccessibilityNodeInfo): void;
                }

                export class PageTransformer {
                    public static class: java.lang.Class<PageTransformer>;

                    /**
                     * Constructs a new instance of the androidx.viewpager2.widget.ViewPager2$PageTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        transformPage(param0: globalAndroid.view.View, param1: number): void;
                    });
                    public constructor();

                    public transformPage(param0: globalAndroid.view.View, param1: number): void;
                }

                export class PagerSnapHelperImpl {
                    public static class: java.lang.Class<PagerSnapHelperImpl>;

                    public findSnapView(param0: recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
                }

                export class RecyclerViewImpl {
                    public static class: java.lang.Class<RecyclerViewImpl>;

                    public getAccessibilityClassName(): string;

                    public onInitializeAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;

                    public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;

                    public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                }

                export class SavedState {
                    public static class: java.lang.Class<SavedState>;
                    public static CREATOR: globalAndroid.os.Parcelable.Creator<SavedState>;

                    public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                }

                export class ScrollState {
                    public static class: java.lang.Class<ScrollState>;

                    /**
                     * Constructs a new instance of the androidx.viewpager2.widget.ViewPager2$ScrollState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {});
                    public constructor();
                }

                export class SmoothScrollToPosition {
                    public static class: java.lang.Class<SmoothScrollToPosition>;

                    public run(): void;
                }
            }
        }
    }
}

// Generics information:

