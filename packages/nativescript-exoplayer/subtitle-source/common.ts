import { Utils } from '@nativescript/core';
// This is used for definition purposes only, it does not generate JavaScript for it.

import { SubtitleSource } from '.';

export function fromResource(name: string): SubtitleSource {
    const video = new SubtitleSource();
    return video.loadFromResource(name) ? video : null;
}

export function fromFile(path: string): SubtitleSource { 
    const video = new SubtitleSource();
    return video.loadFromFile(path) ? video : null;
}

export function fromUrl(url: string): SubtitleSource {
    const video = new SubtitleSource();
    return video.loadFromUrl(url) ? video : null;
}

export function fromFileOrResource(path: string): SubtitleSource {
    if (!isFileOrResourcePath(path)) {
        throw new Error("Path \"" + "\" is not a valid file or resource.");
    }

    if (path.indexOf(Utils.RESOURCE_PREFIX) === 0) {
        return fromResource(path.substr(Utils.RESOURCE_PREFIX.length));
    }
    return fromFile(path);
}

export function isFileOrResourcePath(path: string): boolean {
    return Utils.isFileOrResourcePath(path);
}