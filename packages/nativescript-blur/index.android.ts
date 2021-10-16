import { Application, View, Image, ImageSource, Utils } from "@nativescript/core";

export class Blur {
    effectViewMap: any = {};

    constructor() {
        // Initialize blurkit
        io.alterac.blurkit.BlurKit.init(Utils.android.getApplicationContext());
    }

    on(nsView: View | Image, viewName: string, radius: number, theme?: string, duration?: number) {
        return new Promise((resolve, reject) => {
            if (radius < 1 || radius > 25) {
                reject("Radius should be between 1 - 25 (inclusive)");
            } else {
                if (!this.effectViewMap[viewName] && nsView instanceof Image) {
                    this.effectViewMap[viewName] = nsView.src;
                    // console.log(this.nsViewMap[viewName]);
                    resolve(
                        new ImageSource(
                            io.alterac.blurkit.BlurKit
                                .getInstance()
                                .blur(nsView.android, radius)
                        )
                    );
                } else {
                    reject("This view is already blurred");
                }
            }
        });
    }

    off(viewName: string, duration?: number) {
        return new Promise((resolve, reject) => {
            if (this.effectViewMap[viewName]) {
                // console.log(this.nsViewMap[viewName]);
                resolve(this.effectViewMap[viewName]);
                delete this.effectViewMap[viewName];
            } else {
                reject("View not found");
            }
        });
    }
}
