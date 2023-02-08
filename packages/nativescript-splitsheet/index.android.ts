import { GridLayout, ViewBase } from '@nativescript/core';
import { scrollEnabledProperty, SplitSheetBase } from './common';

declare const io;

export class SplitSheet extends SplitSheetBase {
	private initCtrl = false;

	private views: {
		top?: android.view.View;
		bottom?: android.view.View;
	};

	_listener;

	createNativeView() {
		const nativeView = new io.github.triniwiz.splitsheet.SplitSheet(this._context);
		nativeView.setDisplaceContent(true);
		nativeView.setShowHandle(false);
		nativeView.setMinimumSheetHeight(400);
		nativeView.setSnappingDistance(200);
		nativeView.setAnimationDuration(0.2);
		nativeView.setSwipeUpToShowAllowed(true);
		nativeView.setMainViewBackgroundColor(java.lang.Integer.valueOf(android.graphics.Color.TRANSPARENT));
		nativeView.setMainViewElevation(false);
		const ref = new WeakRef(this);

		this._listener = new io.github.triniwiz.splitsheet.SplitSheet.Events({
			event(name, value) {
				const owner = global.isIOS ? ref.deref?.() : ref.get?.();
				owner?.notify?.({
					eventName: name,
					data: value ?? undefined,
				});
			},
		});

		return nativeView;
	}

	initNativeView(): void {
		super.initNativeView();
		this.nativeView.setEventListener(this._listener);
	}

	disposeNativeView(): void {
		this.nativeView.setEventListener(null);
		super.disposeNativeView();
	}

	[scrollEnabledProperty.setNative](value: boolean) {
		if (this.nativeView) {
			this.nativeView.setScrollEnabled(value);
		}
	}

	openSheet(duration?: number) {
		if (this.nativeView) {
			if (duration) {
				const originalDuration = this.nativeView.getAnimationDuration();
				this.nativeView.setAnimationDuration(duration);

				setTimeout(() => {
					this.nativeView.setAnimationDuration(originalDuration);
				}, duration * 1000);
			}

			this.nativeView.show(true);
		}
	}

	closeSheet() {
		this.nativeView?.show?.(false);
	}

	minimumHeight(value: number) {
		if (this.nativeView) {
			this.nativeView.setMinimumSheetHeight(value);
		}
	}

	snappingDistance(value: number) {
		if (this.nativeView) {
			this.nativeView.setSnappingDistance(value);
		}
	}

	_addViewToNativeVisualTree(view: ViewBase, atIndex?: number): boolean {
		// super._addViewToNativeVisualTree(view, atIndex);
		// console.log('(view as any).position:', (view as any).position);

		if (!this.views) {
			this.views = {};
		}
		if (!this.views.top || !this.views.bottom) {
			if ((view as any).position === 'top') {
				this.views.top = view.nativeView;
			} else if ((view as any).position === 'bottom') {
				this.views.bottom = view.nativeView;
			}
		}
		if (!this.initCtrl && this.views.top && this.views.bottom) {
			this.initCtrl = true;
			this.nativeView.setup(this.views.top, this.views.bottom);
		}

		return true;
	}
}

export class AutoLayout extends GridLayout {}
