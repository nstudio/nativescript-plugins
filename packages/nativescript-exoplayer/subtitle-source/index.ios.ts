import type { SubtitleSource as ISubtitleSource } from '.';
import { Application, Utils, path, knownFolders } from '@nativescript/core';

// global.moduleMerge(common, exports);
export * from './common';

export class SubtitleSource implements ISubtitleSource {
    public android: any; /// String - url or resource
    public ios: any; /// NSString

    public loadFromResource(name: string): boolean {
        let subtitleUrl = NSBundle.mainBundle.URLForResourceWithExtension(name, null);
        let subtitles = NSString.stringWithContentsOfURLEncodingError(subtitleUrl, NSUTF8StringEncoding);
        this.ios = subtitles;
        return this.ios != null;
    }

    public loadFromFile(filePath: string): boolean {
        var fileName = Utils.isString(filePath) ? filePath.trim() : "";

        if (fileName.indexOf("~/") === 0) {
            fileName = path.join(knownFolders.currentApp().path, fileName.replace("~/", ""));
        }

        let subtitleUrl = NSURL.fileURLWithPath(fileName);
        let subtitles = NSString.stringWithContentsOfURLEncodingError(subtitleUrl, NSUTF8StringEncoding);
        this.ios = subtitles;
        return this.ios != null;
    }

    public loadFromUrl(url: string): boolean {
        let subtitleUrl = NSURL.URLWithString(url);
        let subtitles = NSString.stringWithContentsOfURLEncodingError(subtitleUrl, NSUTF8StringEncoding);
        this.ios = subtitles;
        return this.ios != null;
    }
}

