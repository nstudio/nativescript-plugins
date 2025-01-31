import { booleanConverter, Property, View } from '@nativescript/core';

export const srcProperty = new Property<View, string>({
	name: 'src',
});

export const autoPlayProperty = new Property<View, boolean>({
	name: 'autoPlay',
	valueConverter: booleanConverter,
});

export enum VLCPlayerEvents {
	loadStarted = 'loadStarted',
	loadFinished = 'loadFinished',
	buffering = 'buffering',
	opening = 'opening',
	playing = 'playing',
	paused = 'paused',
	ended = 'ended',
	stopped = 'stopped',
	error = 'error',
}

export class VLCPlayerCommon extends View {
	src: string;
	autoPlay: boolean;
	play() {}
	pause() {}
}
