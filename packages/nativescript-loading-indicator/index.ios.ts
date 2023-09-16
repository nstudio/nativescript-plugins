import { Color, Utils } from '@nativescript/core';
import { Mode, OptionsCommon } from './common';

export * from './common';

export class LoadingIndicator {
	private _hud: MBProgressHUD;
	// iOS allows indicator to be shown on specific views if desired
	// fallback to entire window
	private _targetView: any; // UIView

	show(options?: OptionsCommon) {
		if (typeof options === 'undefined') options = {};

		if (typeof this._hud === 'undefined') {
			// use specific target, fallback to entire window
			this._targetView = options.ios && options.ios.view ? options.ios.view : this._getRootWindow();
			if (this._targetView) {
				this._hud = MBProgressHUD.showHUDAddedToAnimated(this._targetView, true);
			}
		}
		// ios specific
		if (options.ios && options.ios.square) this._hud.square = true;

		// options
		if (options.message) {
			this._hud.label.text = options.message;
			// allow line breaking
			this._hud.label.numberOfLines = 0;
		}

		if (options.progress) {
			this._hud.progress = options.progress;
		}

		if (options.mode) {
			(this._hud as any).mode = options.mode; // casting bc we use a custom enum and not MBProgessHUD enum for mode
		} else {
			(this._hud as any).mode = Mode.Indeterminate;
		}

		if (options.dimBackground) {
			this._hud.backgroundView.style = MBProgressHUDBackgroundStyle.SolidColor;
			this._hud.backgroundView.color = new Color('#000').ios;
			this._hud.backgroundView.alpha = 0.3;
		}

		if (options.margin) this._hud.margin = options.margin;

		if (options.userInteractionEnabled) this._hud.userInteractionEnabled = options.userInteractionEnabled;

		if (options.backgroundColor) {
			this._hud.bezelView.blurEffectStyle = UIBlurEffectStyle.Regular;
			this._hud.bezelView.backgroundColor = new Color(options.backgroundColor).ios;
		}

		if (options.color) {
			// make activity and main label same color
			this._hud.contentColor = new Color(options.color).ios; // setting this seems to enforce coloring the activity indicator correctly
			this._hud.label.textColor = new Color(options.color).ios;
		}

		if (options.details) {
			this._hud.detailsLabel.text = options.details;
			// detail label same color with 80% opacity of that color
			// TODO: allow specific control
			this._hud.detailsLabel.textColor = options && options.color ? new Color(options.color).ios : new Color('#333').ios;
			this._hud.detailsLabel.alpha = 0.8;
		}

		if (options.hideBezel) {
			this._hud.backgroundColor = UIColor.clearColor;
			this._hud.bezelView.style = MBProgressHUDBackgroundStyle.SolidColor;
			this._hud.bezelView.backgroundColor = UIColor.clearColor;
		}

		// handle mode setting for custom view Mode
		if (
			this._hud.mode &&
			(this._hud as any).mode === Mode.CustomView && // casting to any for custom enum we map to
			options.customView
		) {
			if (options.customView instanceof UIImage) {
				this._hud.customView = UIImageView.alloc().initWithImage(options.customView);
			} else if (options.customView instanceof UIView) {
				this._hud.customView = options.customView;
			} else if (typeof options.customView === 'string') {
				this._hud.customView = UIImageView.alloc().initWithImage(UIImage.imageNamed(options.customView));
			}
		}

		return this._hud;
	}

	hide(targetView?: any) {
		targetView = targetView || this._targetView || this._getRootWindow();
    if (targetView) {
      MBProgressHUD.hideHUDForViewAnimated(targetView, true);
    }
		this._hud = undefined;
	}

	private _getRootWindow() {
        const rootVc = this._rootViewController || Utils.ios.getRootViewController() || this.findTopViewController(Frame.topmost().currentPage.ios);
        if (rootVc?.view) {
            return rootVc.view;
        }
        else if(rootVc && !rootVc?.view) {
            return rootVc;
        }
        else {
            return null;
        }
    }
    get _rootViewController() {
        const keyWindow = UIApplication.sharedApplication.keyWindow;
        return keyWindow != null ? keyWindow.rootViewController : undefined;
    }
    private findTopViewController(root) {
        const presented = root.presentedViewController;
        if (presented !== null) {
            return this.findTopViewController(presented);
        }
        if (root instanceof UISplitViewController) {
            const last = root.viewControllers.lastObject;
            if (last == null) {
                return root;
            }
            return this.findTopViewController(last);
        }
        else if (root instanceof UINavigationController) {
            const top = root.topViewController;
            if (top == null) {
                return root;
            }
            return this.findTopViewController(top);
        }
        else if (root instanceof UITabBarController) {
            const selected = root.selectedViewController;
            if (selected == null) {
                return root;
            }
            return this.findTopViewController(selected);
        }
        else {
            if (presented === root.presentedViewController) {
                return presented;
            }
            else {
                return root;
            }
        }
    }
}
