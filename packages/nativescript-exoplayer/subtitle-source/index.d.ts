export declare class SubtitleSource {
  android: any; /// String - url or resource
  ios: any; /// NSString
  loadFromResource(name: string): boolean;
  loadFromFile(path: string): boolean;
  loadFromUrl(url: string): boolean;
}

export declare function fromResource(name: string): SubtitleSource;
export declare function fromFile(path: string): SubtitleSource;
export declare function fromUrl(url: string): SubtitleSource;
export declare function fromFileOrResource(path: string): SubtitleSource;
export declare function isFileOrResourcePath(path: string): boolean;
