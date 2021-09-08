import { DemoSharedBase } from '../utils';
import { Blur } from '@nstudio/nativescript-blur';
import { ImageSource, isAndroid, Page } from '@nativescript/core';

export class DemoSharedNativescriptBlur extends DemoSharedBase {
	private blur: Blur;

	constructor(private page: Page) {
		super();
		this.blur = new Blur();
	}

	blurCat() {
		let view: any = this.page.getViewById('cat');
		this.blur
			.on(view, 'kitty', 10) // 25 max
			.then((imageSource?: any) => {
				if (isAndroid) {
					let image: any = this.page.getViewById('cat');
					image.imageSource = imageSource;
				}
				console.log('The kitty is now mayor or Blurtown.');
			})
			.catch(this.handleError);
	}

	blurCatLight() {
		let view = this.page.getViewById('cat');
		this.blur.on(view, 'kitty', 10, 'light', 1).catch(this.handleError);
	}

	unBlurCat() {
		this.blur
			.off('kitty')
			.then((src: any) => {
				if (isAndroid) {
					let image: any = this.page.getViewById('cat');

					// Here we're loading from URL, because we're
					// assigning URL in XML, if you have assigned
					// app resource in XML, you would want to
					// .fromResource() here. for more info
					// https://docs.nativescript.org/cookbook/image-source
					ImageSource.fromUrl(src).then((imageSource) => {
						image.imageSource = imageSource;
					});
				}
				console.log('The kitty is now BlurFree!');
			})
			.catch(this.handleError);
	}

	blurBg(args) {
		let view = this.page.getViewById('dimmer');
		this.blur.on(view, 'dimmer', 10, args.object.id).catch(this.handleError);
	}

	blurBgLight() {
		let view = this.page.getViewById('dimmer');
		this.blur.on(view, 'dimmer', 10, 'light', 2).catch(this.handleError);
	}

	unBlurBg() {
		this.blur.off('dimmer').catch(this.handleError);
	}

	private handleError(error) {
		console.log('There was an error');
		console.dir(error);
	}
}
