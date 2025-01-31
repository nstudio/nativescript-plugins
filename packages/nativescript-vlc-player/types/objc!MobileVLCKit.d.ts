declare class VLCAdjustFilter extends NSObject implements VLCFilter {
	static alloc(): VLCAdjustFilter; // inherited from NSObject

	static createWithVLCMediaPlayer(mediaPlayer: VLCMediaPlayer): VLCAdjustFilter;

	static new(): VLCAdjustFilter; // inherited from NSObject

	readonly brightness: VLCFilterParameter;

	readonly contrast: VLCFilterParameter;

	readonly gamma: VLCFilterParameter;

	readonly hue: VLCFilterParameter;

	readonly saturation: VLCFilterParameter;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	enabled: boolean; // inherited from VLCFilter

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly mediaPlayer: VLCMediaPlayer; // inherited from VLCFilter

	readonly parameters: NSDictionary<string, VLCFilterParameter>; // inherited from VLCFilter

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { VLCMediaPlayer: VLCMediaPlayer });

	applyParametersFrom(otherFilter: VLCFilter): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithVLCMediaPlayer(mediaPlayer: VLCMediaPlayer): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetParametersIfNeeded(): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class VLCAudio extends NSObject {
	static alloc(): VLCAudio; // inherited from NSObject

	static new(): VLCAudio; // inherited from NSObject

	muted: boolean;

	passthrough: boolean;

	volume: number;

	setMute(value: boolean): void;

	volumeDown(): void;

	volumeUp(): void;
}

declare var VLCChapterDescriptionDuration: string;

declare var VLCChapterDescriptionName: string;

declare var VLCChapterDescriptionTimeOffset: string;

declare class VLCConsoleLogger extends NSObject implements VLCFormattedMessageLogging {
	static alloc(): VLCConsoleLogger; // inherited from NSObject

	static new(): VLCConsoleLogger; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	formatter: VLCLogMessageFormatting; // inherited from VLCFormattedMessageLogging

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	level: VLCLogLevel; // inherited from VLCLogging

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	handleMessageLogLevelContext(message: string, level: VLCLogLevel, context: VLCLogContext): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface VLCCustomDialogRendererProtocol extends NSObjectProtocol {
	cancelDialogWithReference(reference: NSValue): void;

	showErrorWithTitleMessage(error: string, message: string): void;

	showLoginWithTitleMessageDefaultUsernameAskingForStorageWithReference(title: string, message: string, username: string, askingForStorage: boolean, reference: NSValue): void;

	showProgressWithTitleMessageIsIndeterminatePositionCancelStringWithReference(title: string, message: string, isIndeterminate: boolean, position: number, cancelString: string, reference: NSValue): void;

	showQuestionWithTitleMessageTypeCancelStringAction1StringAction2StringWithReference(title: string, message: string, questionType: VLCDialogQuestionType, cancelString: string, action1String: string, action2String: string, reference: NSValue): void;

	updateProgressWithReferenceMessagePosition(reference: NSValue, message: string, position: number): void;
}
declare var VLCCustomDialogRendererProtocol: {
	prototype: VLCCustomDialogRendererProtocol;
};

declare const enum VLCDeinterlace {
	Auto = -1,

	On = 1,

	Off = 0,
}

declare class VLCDialogProvider extends NSObject {
	static alloc(): VLCDialogProvider; // inherited from NSObject

	static new(): VLCDialogProvider; // inherited from NSObject

	customRenderer: VLCCustomDialogRendererProtocol;

	constructor(o: { library: VLCLibrary; customUI: boolean });

	dismissDialogWithReference(dialogReference: NSValue): void;

	initWithLibraryCustomUI(library: VLCLibrary, customUI: boolean): this;

	postActionForDialogReference(buttonNumber: number, dialogReference: NSValue): void;

	postUsernameAndPasswordForDialogReferenceStore(username: string, password: string, dialogReference: NSValue, store: boolean): void;
}

declare const enum VLCDialogQuestionType {
	Normal = 0,

	Warning = 1,

	Critical = 2,
}

declare class VLCFileLogger extends NSObject implements VLCFormattedMessageLogging {
	static alloc(): VLCFileLogger; // inherited from NSObject

	static createWithFileHandle(fileHandle: NSFileHandle): VLCFileLogger;

	static new(): VLCFileLogger; // inherited from NSObject

	readonly fileHandle: NSFileHandle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	formatter: VLCLogMessageFormatting; // inherited from VLCFormattedMessageLogging

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	level: VLCLogLevel; // inherited from VLCLogging

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { fileHandle: NSFileHandle });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	handleMessageLogLevelContext(message: string, level: VLCLogLevel, context: VLCLogContext): void;

	initWithFileHandle(fileHandle: NSFileHandle): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface VLCFilter extends NSObjectProtocol {
	enabled: boolean;

	mediaPlayer: VLCMediaPlayer;

	parameters: NSDictionary<string, VLCFilterParameter>;

	applyParametersFrom(otherFilter: VLCFilter): void;

	resetParametersIfNeeded(): boolean;
}
declare var VLCFilter: {
	prototype: VLCFilter;
};

interface VLCFilterParameter extends NSObjectProtocol {
	defaultValue: any;

	maxValue: any;

	minValue: any;

	value: any;

	isValueSetToDefault(): boolean;
}
declare var VLCFilterParameter: {
	prototype: VLCFilterParameter;
};

interface VLCFormattedMessageLogging extends VLCLogging {
	formatter: VLCLogMessageFormatting;
}
declare var VLCFormattedMessageLogging: {
	prototype: VLCFormattedMessageLogging;
};

declare class VLCLibrary extends NSObject {
	static alloc(): VLCLibrary; // inherited from NSObject

	static new(): VLCLibrary; // inherited from NSObject

	static sharedLibrary(): VLCLibrary;

	readonly changeset: string;

	readonly compiler: string;

	debugLogging: boolean;

	debugLoggingLevel: number;

	debugLoggingTarget: VLCLibraryLogReceiverProtocol;

	instance: interop.Pointer | interop.Reference<any>;

	loggers: NSArray<VLCLogging>;

	readonly version: string;

	constructor(o: { options: NSArray<any> | any[] });

	initWithOptions(options: NSArray<any> | any[]): this;

	setApplicationIdentifierWithVersionAndApplicationIconName(identifier: string, version: string, icon: string): void;

	setDebugLoggingToFile(filePath: string): boolean;

	setHumanReadableNameWithHTTPUserAgent(readableName: string, userAgent: string): void;
}

interface VLCLibraryLogReceiverProtocol extends NSObjectProtocol {
	handleMessageDebugLevel?(message: string, level: number): void;
}
declare var VLCLibraryLogReceiverProtocol: {
	prototype: VLCLibraryLogReceiverProtocol;
};

declare class VLCLogContext extends NSObject {
	static alloc(): VLCLogContext; // inherited from NSObject

	static new(): VLCLogContext; // inherited from NSObject

	readonly file: string;

	readonly function: string;

	readonly header: string;

	readonly line: number;

	readonly module: string;

	readonly objectId: number;

	readonly objectType: string;

	readonly threadId: number;
}

declare const enum VLCLogContextFlag {
	kVLCLogLevelContextNone = 0,

	kVLCLogLevelContextModule = 1,

	kVLCLogLevelContextFileLocation = 2,

	kVLCLogLevelContextCallingFunction = 4,

	kVLCLogLevelContextCustom = 8,

	kVLCLogLevelContextAll = 15,
}

declare const enum VLCLogLevel {
	kVLCLogLevelError = 0,

	kVLCLogLevelWarning = 1,

	kVLCLogLevelInfo = 2,

	kVLCLogLevelDebug = 3,
}

declare class VLCLogMessageFormatter extends NSObject implements VLCLogMessageFormatting {
	static alloc(): VLCLogMessageFormatter; // inherited from NSObject

	static new(): VLCLogMessageFormatter; // inherited from NSObject

	contextFlags: VLCLogContextFlag; // inherited from VLCLogMessageFormatting

	customContext: any; // inherited from VLCLogMessageFormatting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	formatWithMessageLogLevelContext(message: string, level: VLCLogLevel, context: VLCLogContext): string;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface VLCLogMessageFormatting extends NSObjectProtocol {
	contextFlags: VLCLogContextFlag;

	customContext: any;

	formatWithMessageLogLevelContext(message: string, level: VLCLogLevel, context: VLCLogContext): string;
}
declare var VLCLogMessageFormatting: {
	prototype: VLCLogMessageFormatting;
};

interface VLCLogging extends NSObjectProtocol {
	level: VLCLogLevel;

	handleMessageLogLevelContext(message: string, level: VLCLogLevel, context: VLCLogContext): void;
}
declare var VLCLogging: {
	prototype: VLCLogging;
};

declare class VLCMedia extends NSObject {
	static alloc(): VLCMedia; // inherited from NSObject

	static codecNameForFourCCTrackType(fourcc: number, trackType: string): string;

	static mediaAsNodeWithName(aName: string): VLCMedia;

	static mediaWithPath(aPath: string): VLCMedia;

	static mediaWithURL(anURL: NSURL): VLCMedia;

	static new(): VLCMedia; // inherited from NSObject

	delegate: VLCMediaDelegate;

	readonly demuxBitrate: number;

	readonly inputBitrate: number;

	readonly isParsed: boolean;

	length: VLCTime;

	readonly mediaSizeSuitableForDevice: boolean;

	readonly mediaType: VLCMediaType;

	readonly metaData: VLCMediaMetaData;

	readonly metaDictionary: NSDictionary<any, any>;

	readonly numberOfCorruptedDataPackets: number;

	readonly numberOfDecodedAudioBlocks: number;

	readonly numberOfDecodedVideoBlocks: number;

	readonly numberOfDiscontinuties: number;

	readonly numberOfDisplayedPictures: number;

	readonly numberOfLostAudioBuffers: number;

	readonly numberOfLostPictures: number;

	readonly numberOfPlayedAudioBuffers: number;

	readonly numberOfReadBytesOnDemux: number;

	readonly numberOfReadBytesOnInput: number;

	readonly numberOfSentBytes: number;

	readonly numberOfSentPackets: number;

	readonly parsedStatus: VLCMediaParsedStatus;

	readonly saveMetadata: boolean;

	readonly state: VLCMediaState;

	readonly stats: NSDictionary<any, any>;

	readonly streamOutputBitrate: number;

	readonly subitems: VLCMediaList;

	readonly tracksInformation: NSArray<any>;

	readonly url: NSURL;

	userData: any;

	constructor(o: { asNodeWithName: string });

	constructor(o: { path: string });

	constructor(o: { stream: NSInputStream });

	constructor(o: { URL: NSURL });

	addOption(option: string): void;

	addOptions(options: NSDictionary<any, any>): void;

	clearStoredCookies(): void;

	compare(media: VLCMedia): NSComparisonResult;

	initAsNodeWithName(aName: string): this;

	initWithPath(aPath: string): this;

	initWithStream(stream: NSInputStream): this;

	initWithURL(anURL: NSURL): this;

	lengthWaitUntilDate(aDate: Date): VLCTime;

	metadataForKey(key: string): string;

	parse(): void;

	parseStop(): void;

	parseWithOptions(options: VLCMediaParsingOptions): number;

	parseWithOptionsTimeout(options: VLCMediaParsingOptions, timeoutValue: number): number;

	setMetadataForKey(data: string, key: string): void;

	storeCookieForHostPath(cookie: string, host: string, path: string): number;

	synchronousParse(): void;
}

interface VLCMediaDelegate extends NSObjectProtocol {
	mediaDidFinishParsing?(aMedia: VLCMedia): void;

	mediaMetaDataDidChange?(aMedia: VLCMedia): void;
}
declare var VLCMediaDelegate: {
	prototype: VLCMediaDelegate;
};

declare class VLCMediaDiscoverer extends NSObject {
	static alloc(): VLCMediaDiscoverer; // inherited from NSObject

	static availableMediaDiscoverer(): NSArray<any>;

	static availableMediaDiscovererForCategoryType(categoryType: VLCMediaDiscovererCategoryType): NSArray<any>;

	static new(): VLCMediaDiscoverer; // inherited from NSObject

	readonly discoveredMedia: VLCMediaList;

	readonly isRunning: boolean;

	readonly libraryInstance: VLCLibrary;

	readonly localizedName: string;

	constructor(o: { name: string });

	constructor(o: { name: string; libraryInstance: VLCLibrary });

	initWithName(aServiceName: string): this;

	initWithNameLibraryInstance(aServiceName: string, libraryInstance: VLCLibrary): this;

	startDiscoverer(): number;

	stopDiscoverer(): void;
}

declare var VLCMediaDiscovererCategory: string;

declare const enum VLCMediaDiscovererCategoryType {
	Devices = 0,

	LAN = 1,

	Podcasts = 2,

	LocalDirectories = 3,
}

declare var VLCMediaDiscovererLongName: string;

declare var VLCMediaDiscovererName: string;

declare class VLCMediaList extends NSObject {
	static alloc(): VLCMediaList; // inherited from NSObject

	static new(): VLCMediaList; // inherited from NSObject

	readonly count: number;

	delegate: VLCMediaListDelegate;

	readonly isReadOnly: boolean;

	constructor(o: { array: NSArray<VLCMedia> | VLCMedia[] });

	addMedia(media: VLCMedia): number;

	indexOfMedia(media: VLCMedia): number;

	initWithArray(array: NSArray<VLCMedia> | VLCMedia[]): this;

	insertMediaAtIndex(media: VLCMedia, index: number): void;

	lock(): void;

	mediaAtIndex(index: number): VLCMedia;

	removeMediaAtIndex(index: number): boolean;

	unlock(): void;
}

interface VLCMediaListDelegate extends NSObjectProtocol {
	mediaListMediaAddedAtIndex?(aMediaList: VLCMediaList, media: VLCMedia, index: number): void;

	mediaListMediaRemovedAtIndex?(aMediaList: VLCMediaList, index: number): void;
}
declare var VLCMediaListDelegate: {
	prototype: VLCMediaListDelegate;
};

declare var VLCMediaListItemAdded: string;

declare var VLCMediaListItemDeleted: string;

declare class VLCMediaListPlayer extends NSObject {
	static alloc(): VLCMediaListPlayer; // inherited from NSObject

	static new(): VLCMediaListPlayer; // inherited from NSObject

	delegate: VLCMediaListPlayerDelegate;

	mediaList: VLCMediaList;

	readonly mediaPlayer: VLCMediaPlayer;

	readonly next: boolean;

	readonly previous: boolean;

	repeatMode: VLCRepeatMode;

	rootMedia: VLCMedia;

	constructor(o: { drawable: any });

	constructor(o: { options: NSArray<any> | any[] });

	constructor(o: { options: NSArray<any> | any[]; andDrawable: any });

	initWithDrawable(drawable: any): this;

	initWithOptions(options: NSArray<any> | any[]): this;

	initWithOptionsAndDrawable(options: NSArray<any> | any[], drawable: any): this;

	pause(): void;

	play(): void;

	playItemAtIndex(index: number): boolean;

	playItemAtNumber(index: number): void;

	playMedia(media: VLCMedia): void;

	stop(): void;
}

interface VLCMediaListPlayerDelegate extends NSObjectProtocol {
	mediaListPlayerFinishedPlayback?(player: VLCMediaListPlayer): void;

	mediaListPlayerNextMedia?(player: VLCMediaListPlayer, media: VLCMedia): void;

	mediaListPlayerStopped?(player: VLCMediaListPlayer): void;
}
declare var VLCMediaListPlayerDelegate: {
	prototype: VLCMediaListPlayerDelegate;
};

declare class VLCMediaLoudness extends NSObject {
	static alloc(): VLCMediaLoudness; // inherited from NSObject

	static new(): VLCMediaLoudness; // inherited from NSObject

	readonly date: number;

	readonly loudnessValue: number;
}

declare var VLCMediaMetaChanged: string;

declare class VLCMediaMetaData extends NSObject {
	static alloc(): VLCMediaMetaData; // inherited from NSObject

	static new(): VLCMediaMetaData; // inherited from NSObject

	actors: string;

	album: string;

	albumArtist: string;

	artist: string;

	readonly artwork: UIImage;

	artworkURL: NSURL;

	copyright: string;

	date: string;

	director: string;

	discNumber: number;

	discTotal: number;

	encodedBy: string;

	episode: number;

	genre: string;

	language: string;

	metaDescription: string;

	nowPlaying: string;

	publisher: string;

	rating: string;

	season: number;

	setting: string;

	showName: string;

	title: string;

	trackID: number;

	trackNumber: number;

	trackTotal: number;

	url: NSURL;

	clearCache(): void;

	prefetch(): void;

	save(): boolean;
}

declare const enum VLCMediaOrientation {
	TopLeft = 0,

	TopRight = 1,

	BottomLeft = 2,

	BottomRight = 3,

	LeftTop = 4,

	LeftBottom = 5,

	RightTop = 6,

	RightBottom = 7,
}

declare const enum VLCMediaParsedStatus {
	Init = 0,

	Skipped = 1,

	Failed = 2,

	Timeout = 3,

	Done = 4,
}

declare const enum VLCMediaParsingOptions {
	ParseLocal = 0,

	ParseNetwork = 1,

	FetchLocal = 2,

	FetchNetwork = 4,

	DoInteract = 8,
}

declare const enum VLCMediaPlaybackNavigationAction {
	Activate = 0,

	Up = 1,

	Down = 2,

	Left = 3,

	Right = 4,
}

declare const enum VLCMediaPlaybackSlaveType {
	Subtitle = 0,

	Audio = 1,
}

declare class VLCMediaPlayer extends NSObject {
	static alloc(): VLCMediaPlayer; // inherited from NSObject

	static new(): VLCMediaPlayer; // inherited from NSObject

	readonly adjustFilter: VLCAdjustFilter;

	adjustFilterEnabled: boolean;

	readonly audio: VLCAudio;

	audioChannel: number;

	readonly audioTrackIndexes: NSArray<any>;

	readonly audioTrackNames: NSArray<any>;

	brightness: number;

	readonly canPause: boolean;

	contrast: number;

	readonly countOfTitles: number;

	currentAudioPlaybackDelay: number;

	currentAudioTrackIndex: number;

	currentChapterIndex: number;

	currentTitleIndex: number;

	currentVideoSubTitleDelay: number;

	currentVideoSubTitleIndex: number;

	currentVideoTrackIndex: number;

	delegate: VLCMediaPlayerDelegate;

	drawable: any;

	equalizerEnabled: boolean;

	readonly equalizerProfiles: NSArray<any>;

	fov: number;

	readonly framesPerSecond: number;

	gamma: number;

	readonly hasVideoOut: boolean;

	hue: number;

	readonly indexOfLongestTitle: number;

	readonly lastSnapshot: UIImage;

	readonly libraryInstance: VLCLibrary;

	media: VLCMedia;

	readonly momentaryLoudness: VLCMediaLoudness;

	readonly numberOfAudioTracks: number;

	readonly numberOfBands: number;

	readonly numberOfSubtitlesTracks: number;

	readonly numberOfTitles: number;

	readonly numberOfVideoTracks: number;

	pitch: number;

	readonly playing: boolean;

	position: number;

	preAmplification: number;

	rate: number;

	readonly remainingTime: VLCTime;

	roll: number;

	saturation: number;

	scaleFactor: number;

	readonly seekable: boolean;

	readonly snapshots: NSArray<any>;

	readonly state: VLCMediaPlayerState;

	time: VLCTime;

	readonly titleDescriptions: NSArray<any>;

	readonly titles: NSArray<any>;

	videoAspectRatio: interop.Pointer | interop.Reference<any>;

	videoCropGeometry: interop.Pointer | interop.Reference<any>;

	readonly videoSize: CGSize;

	readonly videoSubTitlesIndexes: NSArray<any>;

	readonly videoSubTitlesNames: NSArray<any>;

	readonly videoTrackIndexes: NSArray<any>;

	readonly videoTrackNames: NSArray<any>;

	readonly willPlay: boolean;

	yaw: number;

	constructor(o: { libVLCInstance: interop.Pointer | interop.Reference<any>; andLibrary: VLCLibrary });

	constructor(o: { library: VLCLibrary });

	constructor(o: { options: NSArray<any> | any[] });

	addPlaybackSlaveTypeEnforce(slaveURL: NSURL, slaveType: VLCMediaPlaybackSlaveType, enforceSelection: boolean): number;

	amplificationOfBand(index: number): number;

	chapterDescriptionsOfTitle(titleIndex: number): NSArray<any>;

	chaptersForTitleIndex(titleIndex: number): NSArray<any>;

	extraShortJumpBackward(): void;

	extraShortJumpForward(): void;

	fastForward(): void;

	fastForwardAtRate(rate: number): void;

	frequencyOfBandAtIndex(index: number): number;

	gotoNextFrame(): void;

	initWithLibVLCInstanceAndLibrary(playerInstance: interop.Pointer | interop.Reference<any>, library: VLCLibrary): this;

	initWithLibrary(library: VLCLibrary): this;

	initWithOptions(options: NSArray<any> | any[]): this;

	jumpBackward(interval: number): void;

	jumpForward(interval: number): void;

	longJumpBackward(): void;

	longJumpForward(): void;

	mediumJumpBackward(): void;

	mediumJumpForward(): void;

	nextChapter(): void;

	numberOfChaptersForTitle(titleIndex: number): number;

	openVideoSubTitlesFromFile(path: string): boolean;

	pause(): void;

	performNavigationAction(action: VLCMediaPlaybackNavigationAction): void;

	play(): void;

	previousChapter(): void;

	resetEqualizerFromProfile(profile: number): void;

	rewind(): void;

	rewindAtRate(rate: number): void;

	saveVideoSnapshotAtWithWidthAndHeight(path: string, width: number, height: number): void;

	setAmplificationForBand(amplification: number, index: number): void;

	setDeinterlaceFilter(name: string): void;

	setDeinterlaceWithFilter(deinterlace: VLCDeinterlace, name: string): void;

	setRendererItem(item: VLCRendererItem): boolean;

	shortJumpBackward(): void;

	shortJumpForward(): void;

	startRecordingAtPath(path: string): boolean;

	stop(): void;

	stopRecording(): boolean;

	updateViewpointPitchRollFovAbsolute(yaw: number, pitch: number, roll: number, fov: number, absolute: boolean): boolean;
}

declare var VLCMediaPlayerChapterChanged: string;

interface VLCMediaPlayerDelegate extends NSObjectProtocol {
	mediaPlayerChapterChanged?(aNotification: NSNotification): void;

	mediaPlayerLoudnessChanged?(aNotification: NSNotification): void;

	mediaPlayerRecordingStoppedAtPath?(player: VLCMediaPlayer, path: string): void;

	mediaPlayerSnapshot?(aNotification: NSNotification): void;

	mediaPlayerStartedRecording?(player: VLCMediaPlayer): void;

	mediaPlayerStateChanged?(aNotification: NSNotification): void;

	mediaPlayerTimeChanged?(aNotification: NSNotification): void;

	mediaPlayerTitleChanged?(aNotification: NSNotification): void;
}
declare var VLCMediaPlayerDelegate: {
	prototype: VLCMediaPlayerDelegate;
};

declare var VLCMediaPlayerLoudnessChanged: string;

declare const enum VLCMediaPlayerState {
	Stopped = 0,

	Opening = 1,

	Buffering = 2,

	Ended = 3,

	Error = 4,

	Playing = 5,

	Paused = 6,

	ESAdded = 7,
}

declare var VLCMediaPlayerStateChanged: string;

declare function VLCMediaPlayerStateToString(state: VLCMediaPlayerState): string;

declare var VLCMediaPlayerTimeChanged: string;

declare var VLCMediaPlayerTitleChanged: string;

declare var VLCMediaPlayerVolumeChanged: string;

declare const enum VLCMediaProjection {
	Rectangular = 0,

	EquiRectangular = 1,

	CubemapLayoutStandard = 256,
}

declare const enum VLCMediaState {
	NothingSpecial = 0,

	Buffering = 1,

	Playing = 2,

	Error = 3,
}

declare class VLCMediaThumbnailer extends NSObject {
	static alloc(): VLCMediaThumbnailer; // inherited from NSObject

	static new(): VLCMediaThumbnailer; // inherited from NSObject

	static thumbnailerWithMediaAndDelegate(media: VLCMedia, delegate: VLCMediaThumbnailerDelegate): VLCMediaThumbnailer;

	static thumbnailerWithMediaDelegateAndVLCLibrary(media: VLCMedia, delegate: VLCMediaThumbnailerDelegate, library: VLCLibrary): VLCMediaThumbnailer;

	delegate: VLCMediaThumbnailerDelegate;

	libVLCinstance: interop.Pointer | interop.Reference<any>;

	media: VLCMedia;

	snapshotPosition: number;

	thumbnail: any;

	thumbnailHeight: number;

	thumbnailWidth: number;

	fetchThumbnail(): void;
}

interface VLCMediaThumbnailerDelegate {
	mediaThumbnailerDidFinishThumbnail(mediaThumbnailer: VLCMediaThumbnailer, thumbnail: any): void;

	mediaThumbnailerDidTimeOut(mediaThumbnailer: VLCMediaThumbnailer): void;
}
declare var VLCMediaThumbnailerDelegate: {
	prototype: VLCMediaThumbnailerDelegate;
};

declare var VLCMediaTracksInformationAudioChannelsNumber: string;

declare var VLCMediaTracksInformationAudioRate: string;

declare var VLCMediaTracksInformationBitrate: string;

declare var VLCMediaTracksInformationCodec: string;

declare var VLCMediaTracksInformationCodecLevel: string;

declare var VLCMediaTracksInformationCodecProfile: string;

declare var VLCMediaTracksInformationDescription: string;

declare var VLCMediaTracksInformationFrameRate: string;

declare var VLCMediaTracksInformationFrameRateDenominator: string;

declare var VLCMediaTracksInformationId: string;

declare var VLCMediaTracksInformationLanguage: string;

declare var VLCMediaTracksInformationSourceAspectRatio: string;

declare var VLCMediaTracksInformationSourceAspectRatioDenominator: string;

declare var VLCMediaTracksInformationTextEncoding: string;

declare var VLCMediaTracksInformationType: string;

declare var VLCMediaTracksInformationTypeAudio: string;

declare var VLCMediaTracksInformationTypeText: string;

declare var VLCMediaTracksInformationTypeUnknown: string;

declare var VLCMediaTracksInformationTypeVideo: string;

declare var VLCMediaTracksInformationVideoHeight: string;

declare var VLCMediaTracksInformationVideoOrientation: string;

declare var VLCMediaTracksInformationVideoProjection: string;

declare var VLCMediaTracksInformationVideoWidth: string;

declare const enum VLCMediaType {
	Unknown = 0,

	File = 1,

	Directory = 2,

	Disc = 3,

	Stream = 4,

	Playlist = 5,
}

declare var VLCMetaInformationActors: string;

declare var VLCMetaInformationAlbum: string;

declare var VLCMetaInformationAlbumArtist: string;

declare var VLCMetaInformationArtist: string;

declare var VLCMetaInformationArtwork: string;

declare var VLCMetaInformationArtworkURL: string;

declare var VLCMetaInformationCopyright: string;

declare var VLCMetaInformationDate: string;

declare var VLCMetaInformationDescription: string;

declare var VLCMetaInformationDirector: string;

declare var VLCMetaInformationDiscNumber: string;

declare var VLCMetaInformationEncodedBy: string;

declare var VLCMetaInformationEpisode: string;

declare var VLCMetaInformationGenre: string;

declare var VLCMetaInformationLanguage: string;

declare var VLCMetaInformationNowPlaying: string;

declare var VLCMetaInformationPublisher: string;

declare var VLCMetaInformationRating: string;

declare var VLCMetaInformationSeason: string;

declare var VLCMetaInformationSetting: string;

declare var VLCMetaInformationShowName: string;

declare var VLCMetaInformationTitle: string;

declare var VLCMetaInformationTrackID: string;

declare var VLCMetaInformationTrackNumber: string;

declare var VLCMetaInformationTrackTotal: string;

declare var VLCMetaInformationURL: string;

declare class VLCRendererDiscoverer extends NSObject {
	static alloc(): VLCRendererDiscoverer; // inherited from NSObject

	static list(): NSArray<VLCRendererDiscovererDescription>;

	static new(): VLCRendererDiscoverer; // inherited from NSObject

	delegate: VLCRendererDiscovererDelegate;

	readonly name: string;

	readonly renderers: NSArray<VLCRendererItem>;

	constructor(o: { name: string });

	initWithName(name: string): this;

	start(): boolean;

	stop(): void;
}

interface VLCRendererDiscovererDelegate extends NSObjectProtocol {
	rendererDiscovererItemAddedItem(rendererDiscoverer: VLCRendererDiscoverer, item: VLCRendererItem): void;

	rendererDiscovererItemDeletedItem(rendererDiscoverer: VLCRendererDiscoverer, item: VLCRendererItem): void;
}
declare var VLCRendererDiscovererDelegate: {
	prototype: VLCRendererDiscovererDelegate;
};

declare class VLCRendererDiscovererDescription extends NSObject {
	static alloc(): VLCRendererDiscovererDescription; // inherited from NSObject

	static new(): VLCRendererDiscovererDescription; // inherited from NSObject

	readonly longName: string;

	readonly name: string;

	constructor(o: { name: string; longName: string });

	initWithNameLongName(name: string, longName: string): this;
}

declare class VLCRendererItem extends NSObject {
	static alloc(): VLCRendererItem; // inherited from NSObject

	static new(): VLCRendererItem; // inherited from NSObject

	readonly flags: number;

	readonly iconURI: string;

	readonly name: string;

	readonly type: string;
}

declare const enum VLCRendererPlay {
	sAudio = 1,

	sVideo = 2,
}

declare const enum VLCRepeatMode {
	DoNotRepeat = 0,

	RepeatCurrentItem = 1,

	RepeatAllItems = 2,
}

declare class VLCTime extends NSObject {
	static alloc(): VLCTime; // inherited from NSObject

	static new(): VLCTime; // inherited from NSObject

	static nullTime(): VLCTime;

	static timeWithInt(aInt: number): VLCTime;

	static timeWithNumber(aNumber: number): VLCTime;

	readonly intValue: number;

	readonly minuteStringValue: string;

	readonly numberValue: number;

	readonly stringValue: string;

	readonly value: number;

	readonly verboseStringValue: string;

	constructor(o: { int: number });

	constructor(o: { number: number });

	compare(aTime: VLCTime): NSComparisonResult;

	hash(): number;

	initWithInt(aInt: number): this;

	initWithNumber(aNumber: number): this;
}

declare var VLCTitleDescriptionDuration: string;

declare var VLCTitleDescriptionIsMenu: string;

declare var VLCTitleDescriptionName: string;

declare class VLCTranscoder extends NSObject {
	static alloc(): VLCTranscoder; // inherited from NSObject

	static new(): VLCTranscoder; // inherited from NSObject

	delegate: VLCTranscoderDelegate;

	reencodeAndMuxSRTFileToMP4FileOutputPath(srtPath: string, mp4Path: string, outPath: string): boolean;
}

interface VLCTranscoderDelegate extends NSObjectProtocol {
	transcodeFinishedSucessfully?(transcoder: VLCTranscoder, success: boolean): void;
}
declare var VLCTranscoderDelegate: {
	prototype: VLCTranscoderDelegate;
};

declare var kVLCAdjustFilterBrightnessParameterKey: string;

declare var kVLCAdjustFilterContrastParameterKey: string;

declare var kVLCAdjustFilterGammaParameterKey: string;

declare var kVLCAdjustFilterHueParameterKey: string;

declare var kVLCAdjustFilterSaturationParameterKey: string;
