import { Application, Color, Frame, ImageSource, Screen, Utils } from '@nativescript/core';
import { Mode, OptionsCommon } from './common';

export * from './common';

declare let com: any, global: any;

const R_ATTR_PROGRESS_BAR_STYLE_HORIZONTAL = 0x01010078;
const PACKAGE = 'com.github.triniwiz.ns.loading.indicator';

const ViewCompatNamespace = useAndroidX() ? androidx.core.view : (android.support.v4 as any).view;

function useAndroidX() {
	return global.androidx && global.androidx.core.view;
}

const HIDE_RETRY_MS = 100;

export class LoadingIndicator {
	private _popOver: android.widget.PopupWindow;
	private _currentProgressColor: Color;
	private _defaultProgressColor: Color;
	private _progressId: number;
	private _messageId: number;
	private _detailsId: number;
	private _customViewId: number;
	private _loadersInstances: android.widget.PopupWindow[];
	private _isCreatingPopOver: boolean;
	private _progressDrawable: android.graphics.drawable.Drawable;
	private _backgroundDrawable: android.graphics.drawable.Drawable;
	private _progressDrawableThick: android.graphics.drawable.Drawable;
	private _popupTimeout;

	constructor() {
		this._defaultProgressColor = new Color('#007DD6');
		this._progressId = android.view.View.generateViewId();
		this._messageId = android.view.View.generateViewId();
		this._detailsId = android.view.View.generateViewId();
		this._customViewId = android.view.View.generateViewId();
		this._loadersInstances = [];
		this._isCreatingPopOver = false;
	}

	show(options?: OptionsCommon) {
		const context = this._getCurrentActivity();
		if (context) {
			options = options || {};
			options.android = options.android || {};
			options.userInteractionEnabled = options.userInteractionEnabled !== undefined;

			if (!this._popOver) {
				this._isCreatingPopOver = true;
				new Promise<void>((resolve) => {
					this._createPopOver(context, options);
					this._loadersInstances.push(this._popOver);
					resolve();
				})
					.then(() => {
						this._isCreatingPopOver = false;
					})
					.catch((error) => {
						// Ensure this is left in a clean state.
						this._isCreatingPopOver = false;
						const message = error && error.message ? `: ${error.message}` : '';
						console.error(`Error creating Loading Indicator Pop Over${message}`);
					});
				return;
			}
			this._updatePopOver(context, options);
		}
	}

	hide(targetView?: any, attemptTimeout: number = 1000): void {
		if (this._isCreatingPopOver) {
			this._waitForCreatePopOver(attemptTimeout);
			return;
		}
		this._tryHide();
	}

	private _tryHide(): void {
		try {
			for (let i = 0; i < this._loadersInstances.length; i++) {
				const loader = this._loadersInstances[i];
				if (loader) {
					if (this._isShowing(loader)) {
						loader.dismiss();
						this._loadersInstances.splice(i, 1);
					}
				}
			}

			this._popOver = null;
			this._currentProgressColor = null;
		} catch (e) {
			console.log(e);
		}
	}

	private _waitForCreatePopOver(attemptTimeout: number) {
		const startTime = Date.now();

		const awaitCreation = async () => {
			if (!this._isCreatingPopOver) {
				return this._tryHide();
			}
			if (Date.now() > startTime + attemptTimeout) {
				console.warn('Hide attempt timeout exceeded');
				return;
			}
			await new Promise((resolve) => setTimeout(resolve, HIDE_RETRY_MS));
			return awaitCreation();
		};
		return awaitCreation();
	}

	private _isShowing(loader: android.widget.PopupWindow) {
		return loader.isShowing();
	}

	private _createPopOver(context, options?: OptionsCommon) {
		this._popOver = new android.widget.PopupWindow();
		const ref = new WeakRef(this);
		this._popOver.setTouchable(options.userInteractionEnabled);
		const contentView = new android.widget.LinearLayout(context);
		const defaultTextColor = new Color(options.color || '#000');
		const defaultTextNativeColor = defaultTextColor.android ? defaultTextColor.android : android.graphics.Color.BLACK;
		const defaultDetailsNativeColor = new Color(255 * 0.8, defaultTextColor.r, defaultTextColor.g, defaultTextColor.b).android;

		contentView.setOnTouchListener(
			new android.view.View.OnTouchListener({
				onTouch(view: android.view.View, event: android.view.MotionEvent): boolean {
					const cancelListener = options.android.cancelListener;
					const cancelable = options.android.cancelable;
					const owner = ref.get();
					if (cancelListener && typeof cancelListener === 'function') {
						if (owner && cancelable) {
							owner._popOver.dismiss();
							cancelListener(owner._popOver);
							owner._popOver = null;
						}
					}
					return true;
				},
			})
		);
		const defaultBackgroundColor = android.graphics.Color.WHITE;

		// handle dimming background option
		contentView.setBackgroundColor(options.dimBackground ? new Color(255 * 0.6, 0, 0, 0).android : android.graphics.Color.TRANSPARENT);

    if(options.dimBackground) {
      this._popOver.setClippingEnabled(false);
    }

		contentView.setGravity(android.view.Gravity.CENTER);
		contentView.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.FILL_PARENT, android.view.ViewGroup.LayoutParams.FILL_PARENT));
		const parentView = new android.widget.LinearLayout(context);
		parentView.setOnTouchListener(
			new android.view.View.OnTouchListener({
				onTouch(view: android.view.View, event: android.view.MotionEvent): boolean {
					return true;
				},
			})
		);

		// Use the ViewCompatNamespace to properly map to `ViewCompat` for AndroidX and support lib versions to avoid breaking change
		ViewCompatNamespace.ViewCompat.setElevation(parentView, 9.0);
		const params = parentView.getLayoutParams() as android.widget.LinearLayout.LayoutParams;
		const parentViewParams = params ? params : new android.widget.LinearLayout.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT);

		const defaultPadding = 10 * Screen.mainScreen.scale;
		parentView.setPadding(defaultPadding, defaultPadding, defaultPadding, defaultPadding);

		// handle margin option
		if (options.margin !== undefined) {
			const margin = options.margin * Screen.mainScreen.scale;
			parentViewParams.setMargins(margin, margin, margin, margin);
		}

		parentView.setLayoutParams(parentViewParams);
		const backgroundColor = options.backgroundColor ? new Color(options.backgroundColor).android : defaultBackgroundColor;

		// handle hideBezel option
		if (options.hideBezel) {
			parentView.setBackgroundColor(android.graphics.Color.TRANSPARENT);
		} else {
			const border = new android.graphics.drawable.ShapeDrawable();
			border.getPaint().setColor(backgroundColor);
			const cornerRadiusValue = 8;
			const cornerRadius = Array.create('float', 8);
			cornerRadius[0] = cornerRadiusValue;
			cornerRadius[1] = cornerRadiusValue;
			cornerRadius[2] = cornerRadiusValue;
			cornerRadius[3] = cornerRadiusValue;
			cornerRadius[4] = cornerRadiusValue;
			cornerRadius[5] = cornerRadiusValue;
			cornerRadius[6] = cornerRadiusValue;
			cornerRadius[7] = cornerRadiusValue;
			const shape = new android.graphics.drawable.shapes.RoundRectShape(cornerRadius, null, null);
			border.setShape(shape);
			parentView.setBackgroundDrawable(border);
		}

		parentView.setGravity(android.view.Gravity.CENTER);
		parentView.setOrientation(android.widget.LinearLayout.VERTICAL);

		let progressView: android.widget.ProgressBar;
		const customOrText = options.mode === Mode.CustomView || options.mode === Mode.Text;
		if (!customOrText) {
			const determinate = options.progress !== undefined || options.mode === Mode.Determinate || options.mode === Mode.DeterminateHorizontalBar || options.mode === Mode.AnnularDeterminate;

			if (determinate) {
				progressView = new android.widget.ProgressBar(context, null, R_ATTR_PROGRESS_BAR_STYLE_HORIZONTAL);
			} else {
				progressView = new android.widget.ProgressBar(context);
			}

			progressView.setId(this._progressId);

			parentView.addView(progressView);
		}

		// handle customView option
		if (options.mode === Mode.CustomView) {
			if (options.customView) {
				const customView = this._createCustomView(context, options);
				if (customView) {
					parentView.addView(customView);
				}
			}
		}

		if (options.message) {
			const messageView = new android.widget.TextView(context);
			messageView.setText(options.message);
			messageView.setId(this._messageId);
			if (options.color) {
				messageView.setTextColor(defaultTextNativeColor);
			}
			messageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
			parentView.addView(messageView);
		}

		// handle details message text
		if (options.details) {
			const detailsView = new android.widget.TextView(context);
			detailsView.setText(options.details);
			detailsView.setId(this._detailsId);
			detailsView.setTextColor(defaultDetailsNativeColor);
			detailsView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
			parentView.addView(detailsView);
		}

		switch (options.mode) {
			case Mode.CustomView:
				break;
			case Mode.AnnularDeterminate:
				if (!this._progressDrawable) {
					this._progressDrawable = this._getProgressDrawable();
				}
				if (!this._backgroundDrawable) {
					this._backgroundDrawable = this._getBackgroundDrawable();
				}
				progressView.setIndeterminate(false);
				progressView.setMax(100);
				progressView.setProgress(0);
				if (this._progressDrawable) {
					progressView.setProgressDrawable(this._progressDrawable);
				}
				if (this._backgroundDrawable) {
					progressView.setBackgroundDrawable(this._backgroundDrawable);
				}
				progressView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(60 * Screen.mainScreen.scale, 60 * Screen.mainScreen.scale));
				break;
			case Mode.Determinate:
				if (!this._backgroundDrawable) {
					this._backgroundDrawable = this._getBackgroundDrawable();
				}
				if (!this._progressDrawableThick) {
					this._progressDrawableThick = this._getProgressDrawableThick();
				}

				progressView.setIndeterminate(false);
				progressView.setMax(100);
				progressView.setProgress(0);
				if (this._progressDrawableThick) {
					progressView.setProgressDrawable(this._progressDrawableThick);
				}
				if (this._backgroundDrawable) {
					progressView.setBackgroundDrawable(this._backgroundDrawable);
				}
				progressView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(60 * Screen.mainScreen.scale, 60 * Screen.mainScreen.scale));
				break;
			case Mode.DeterminateHorizontalBar:
				progressView.setIndeterminate(false);
				progressView.setMax(100);
				progressView.setProgress(0);
				break;
			case Mode.Text:
				break;
			case Mode.Indeterminate:
				progressView.setIndeterminate(true);
				break;
			default:
				progressView.setIndeterminate(options.progress !== undefined ? false : true);
				break;
		}

		if (options.progress !== undefined || options.mode === Mode.Determinate || options.mode === Mode.AnnularDeterminate || options.mode === Mode.DeterminateHorizontalBar || options.mode === Mode.Indeterminate || !options.mode) {
			if (options.color) {
				this._setColor(options.color, progressView);
				this._currentProgressColor = new Color(options.color);
			}
			// handle background color
			if (options.backgroundColor) {
				this._setBackgroundColor(options.backgroundColor, progressView);
			}
		}

		contentView.addView(parentView);
		this._popOver.setContentView(contentView);

		// handle anchoring target view
		if (options.android && options.android.view) {
			const nativeView = options.android.view as android.view.View;
			this._popOver.setWidth(nativeView.getWidth());
			this._popOver.setHeight(nativeView.getHeight());
			try {
				let point = Array.create('int', 2);
				nativeView.getLocationInWindow(point);
				let x = point[0] || 0;
				let y = point[1] || 0;
				this._popOver.showAtLocation(nativeView, android.view.Gravity.NO_GRAVITY, x, y);
			} catch (e) {
				console.error('Loading Indicator Error:', e);
			}
		} else if (Frame.topmost() && (Frame.topmost().android || (Frame.topmost().currentPage && Frame.topmost().currentPage.android))) {
			const view = Frame.topmost().android?.rootViewGroup || Frame.topmost().currentPage?.android;
			if (view) {
				const hasFocus = view.hasWindowFocus();
				if (!hasFocus) {
					/* Gets the currently opened dialog fragment or top fragment */
					const activity = this._getCurrentActivity();
					const fragments = activity instanceof androidx.fragment.app.FragmentActivity ? activity?.getSupportFragmentManager()?.getFragments() : activity?.getFragmentManager()?.getFragments();
					const count = fragments?.size();
					const last = count - 1;
					if (last !== -1) {
						const dialog = fragments.get(last);
						const view = dialog?.getView?.() || Frame.topmost().android?.rootViewGroup || Frame.topmost().currentPage?.android;
						if (view) {
							this._resetTimeout();
							this._popupTimeout = setTimeout(() => {
								if (this._popOver) {
									this._popOver.setWidth(Screen.mainScreen.widthPixels);
									this._popOver.setHeight(Screen.mainScreen.heightPixels);
									this._popOver.showAtLocation(view, android.view.Gravity.CENTER, 0, 0);
								}
							});
						}
					}
				} else if (this._popOver) {
					this._popOver.setWidth(Screen.mainScreen.widthPixels);
					this._popOver.setHeight(Screen.mainScreen.heightPixels);
					this._popOver.showAtLocation(view, android.view.Gravity.CENTER, 0, 0);
				}
			}
		}
	}

	private _resetTimeout() {
		if (typeof this._popupTimeout === 'number') {
			clearTimeout(this._popupTimeout);
			this._popupTimeout = null;
		}
	}

	private _updatePopOver(context: android.app.Activity, options?: OptionsCommon) {
		const contentView = this._popOver.getContentView() as android.widget.LinearLayout;
		const parentView = contentView.getChildAt(0) as android.widget.LinearLayout;
		let count = parentView.getChildCount();
		const defaultTextColor = new Color(options.color || 'black');
		const defaultTextNativeColor = defaultTextColor.android ? defaultTextColor.android : android.graphics.Color.BLACK;

		const defaultDetailsNativeColor = new Color(255 * 0.8, defaultTextColor.r, defaultTextColor.g, defaultTextColor.b).android;

		if (options.mode === Mode.Text) {
			const progressView = parentView.getChildAt(0) as any;
			if (progressView) {
				const progressViewId = progressView.getId();
				if (progressViewId === this._progressId) {
					parentView.removeView(progressView);
					count = parentView.getChildCount();
				}
			}
		}

		if (options.mode === Mode.CustomView) {
			for (let i = 0; i < count; i++) {
				const view = parentView.getChildAt(i);
				parentView.removeView(view);
			}
			const customView = this._createCustomView(context, options);

			if (customView) {
				parentView.addView(customView);
			}
			count = parentView.getChildCount();
		}

		if (options.progress && options.mode !== Mode.Text && options.mode !== Mode.CustomView) {
			let progressView = parentView.getChildAt(0) as any;
			if (progressView) {
				const progressViewId = progressView.getId();

				if (progressView instanceof android.widget.ProgressBar && progressViewId === this._progressId && progressView.isIndeterminate()) {
					parentView.removeView(progressView);
					progressView = this._createDeterminateProgressView(context);
					parentView.addView(progressView, 0);
				}

				if (!(progressView instanceof android.widget.ProgressBar)) {
					progressView = this._createDeterminateProgressView(context);
					parentView.addView(progressView, 0);
				}
				count = parentView.getChildCount();

				if (options.color) {
					this._setColor(options.color, progressView);
					this._currentProgressColor = new Color(options.color);
				}

				// handle background color
				if (options.backgroundColor) {
					this._setBackgroundColor(options.backgroundColor, progressView);
				}

				progressView.setProgress(options.progress * 100);
			}
		}

		if (!options.progress && options.mode !== Mode.Text && options.mode !== Mode.CustomView && options.mode === Mode.Indeterminate) {
			/**
			 * Get the existing indicator if it exists, assess whether or not the
			 * acquired child is the correct class.
			 */
			let progressView = parentView.getChildAt(0);
			if (progressView instanceof android.widget.ProgressBar === false || progressView === undefined) {
				progressView = new android.widget.ProgressBar(context);
			}

			if (options.color) {
				this._setColor(options.color, progressView);
				this._currentProgressColor = new Color(options.color);
			}
			// handle background color
			if (options.backgroundColor) {
				this._setBackgroundColor(options.backgroundColor, progressView);
			}
			count = parentView.getChildCount();
		}

		if (options.message) {
			let messageView;
			let view;
			const firstView = parentView.getChildAt(0) as any;
			switch (count) {
				case 1:
					if (firstView) {
						if (firstView.getId() === this._messageId) {
							firstView.setTextColor(defaultTextNativeColor);
							firstView.setText(options.message);
						} else {
							messageView = new android.widget.TextView(context);
							messageView.setId(this._messageId);
							messageView.setText(options.message);
							messageView.setTextColor(defaultTextNativeColor);
							messageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
							parentView.addView(messageView);
						}
					}

					break;
				case 2:
					view = parentView.getChildAt(1) as any;
					const viewId = view.getId();
					if (viewId === this._messageId) {
						if (view) {
							view.setText(options.message);
							view.setTextColor(defaultTextNativeColor);
						}
					} else if (viewId === this._detailsId) {
						messageView = new android.widget.TextView(context);
						messageView.setId(this._messageId);
						messageView.setText(options.message);
						messageView.setTextColor(defaultTextNativeColor);
						messageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
						parentView.addView(messageView, 1);
					}
					break;
				case 3:
					view = parentView.getChildAt(2) as any;
					if (view) {
						view.setTextColor(defaultTextNativeColor);
						view.setText(options.message);
					}
					break;
				default:
					break;
			}
			count = parentView.getChildCount();
		}

		// handle details message text
		if (options.details) {
			let detailsView;
			switch (count) {
				case 1:
					const firstView = parentView.getChildAt(0) as any;
					if (firstView === this._detailsId) {
						if (firstView) {
							firstView.setTextColor(defaultDetailsNativeColor);
							firstView.setText(options.details);
						}
					} else {
						detailsView = new android.widget.TextView(context);
						detailsView.setId(this._detailsId);
						detailsView.setTextColor(defaultDetailsNativeColor);
						detailsView.setText(options.details);
						detailsView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
						parentView.addView(detailsView);
					}

					break;
				case 2:
					detailsView = parentView.getChildAt(1) as android.widget.TextView;
					if (detailsView) {
						const detailsViewId = detailsView.getId();
						if (detailsViewId === this._detailsId) {
							detailsView.setTextColor(defaultDetailsNativeColor);
							detailsView.setText(options.details);
						} else if (detailsViewId === this._messageId) {
							detailsView = new android.widget.TextView(context);
							detailsView.setId(this._detailsId);
							detailsView.setTextColor(defaultDetailsNativeColor);
							detailsView.setText(options.details);
							detailsView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
							parentView.addView(detailsView, 2);
						}
					}
					break;
				case 3:
					detailsView = parentView.getChildAt(2) as android.widget.TextView;
					if (detailsView) {
						detailsView.setTextColor(defaultDetailsNativeColor);
						detailsView.setText(options.details);
					}
					break;
				default:
					break;
			}
		}
		this._popOver.update();
	}

	private _createCustomView(context, options) {
		let customView;
		if (options.customView instanceof android.graphics.Bitmap) {
			customView = new android.widget.ImageView(context);
			customView.setImageBitmap(options.customView);
		} else if (options.customView instanceof android.view.View) {
			customView = options.customView;
		} else if (typeof options.customView === 'string') {
			customView = new android.widget.ImageView(context);
			const fileName = options.customView.replace('.jpg', '').replace('.png', '').replace('.jpeg', '');
			const image = ImageSource.fromFileOrResourceSync('res://' + fileName);
			if (image && image.android) {
				customView.setImageBitmap(image.android);
			}
		}
		if (customView) {
			customView.setId(this._customViewId);
		}
		return customView;
	}

	private _createDeterminateProgressView(context) {
		const progressView = new android.widget.ProgressBar(context, null, R_ATTR_PROGRESS_BAR_STYLE_HORIZONTAL);
		progressView.setId(this._progressId);
		progressView.setMax(100);
		progressView.setProgress(0);
		if (!this._progressDrawable) {
			this._progressDrawable = this._getProgressDrawable();
		}
		if (this._progressDrawable) {
			progressView.setProgressDrawable(this._progressDrawable);
		}
		if (!this._backgroundDrawable) {
			this._backgroundDrawable = this._getBackgroundDrawable();
		}
		if (this._backgroundDrawable) {
			progressView.setBackgroundDrawable(this._backgroundDrawable);
		}
		progressView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(60 * Screen.mainScreen.scale, 60 * Screen.mainScreen.scale));
		return progressView;
	}

	private _setBackgroundColor(color: string, view: any) {
		const progressDrawable = view.getProgressDrawable() as any;
		const indeterminateDrawable = view.getIndeterminateDrawable() as any;
		if (progressDrawable instanceof android.graphics.drawable.LayerDrawable && progressDrawable.getNumberOfLayers() > 0) {
			const backgroundDrawable = progressDrawable.getDrawable(0);
			if (backgroundDrawable) {
				backgroundDrawable.setColorFilter(new Color(color).android, android.graphics.PorterDuff.Mode.SRC_IN);
			}
		}

		if (indeterminateDrawable instanceof android.graphics.drawable.LayerDrawable && indeterminateDrawable.getNumberOfLayers() > 0) {
			const backgroundDrawable = indeterminateDrawable.getDrawable(0);
			if (backgroundDrawable) {
				backgroundDrawable.setColorFilter(new Color(color).android, android.graphics.PorterDuff.Mode.SRC_IN);
			}
		}
	}

	private _setColor(color: string, view: any) {
		const progressDrawable = view.getProgressDrawable();
		const indeterminateDrawable = view.getIndeterminateDrawable();
		if (progressDrawable) {
			progressDrawable.setColorFilter(new Color(color).android, android.graphics.PorterDuff.Mode.SRC_IN);
		}
		if (indeterminateDrawable) {
			indeterminateDrawable.setColorFilter(new Color(color).android, android.graphics.PorterDuff.Mode.SRC_IN);
		}
	}

	private _getResources() {
		const ctx = Utils.android.getCurrentActivity() as android.app.Activity;
		return ctx.getResources();
	}

	private _getBackgroundDrawable() {
		if (com.github.triniwiz.ns.loading.indicator.R) {
			return this._getResources().getDrawable(com.github.triniwiz.ns.loading.indicator.R.drawable.circle_shape);
		}
		return null;
	}

	private _getProgressDrawable() {
		if (com.github.triniwiz.ns.loading.indicator.R) {
			return this._getResources().getDrawable(com.github.triniwiz.ns.loading.indicator.R.drawable.circular_progress_bar);
		}
		return null;
	}

	private _getProgressDrawableThick() {
		if (com.github.triniwiz.ns.loading.indicator.R) {
			return this._getResources().getDrawable(com.github.triniwiz.ns.loading.indicator.R.drawable.circular_progress_bar_thick);
		}
		return null;
	}
    private _getCurrentActivity(): android.app.Activity|null {
        if (!Application) {
            return null;
        }
        return Application.android.startActivity || Application.android.foregroundActivity;
    }
}
