import type { VideoSource as IVideoSource } from '.';
import { Application, Utils, path, knownFolders } from '@nativescript/core';

export * from './common';

export class VideoSource implements IVideoSource {
    public android: any; /// android.widget.VideoView
    public ios: any; /// AVPlayer

    public loadFromResource(name: string): boolean {
        this.android = null;

        const res = Utils.android.getApplicationContext().getResources();
        if (res) {
                const packageName = Application.android.context.getPackageName();
                this.android = `android.resource://${packageName}/R.raw.${name}`;
        }

        return this.android != null;
    }

    public loadFromUrl(url: string): boolean {
        this.android = null;
        this.android = url;
        return this.android != null;
    }

    public loadFromFile(filePath: string): boolean {

        let fileName = Utils.isString(filePath) ? filePath.trim() : "";
        if (fileName.indexOf("~/") === 0) {
            fileName = path.join(knownFolders.currentApp().path, fileName.replace("~/", ""));
        }

        this.android = fileName;
        return this.android != null;
    }

    public setNativeSource(source: any): boolean {
        this.android = source;
        return source != null;
    }


    get height(): number {
        if (this.android && typeof this.android.getHeight === 'function') {
            return this.android.getHeight();
        }

        return NaN;
    }

    get width(): number {
        if (this.android && typeof this.android.getWidth === 'function') {
            return this.android.getWidth();
        }

        return NaN;
    }

}