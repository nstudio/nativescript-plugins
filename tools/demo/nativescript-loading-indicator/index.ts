import { LoadingIndicator, Mode } from '@nstudio/nativescript-loading-indicator';
import { DemoSharedBase } from '../utils';

export class DemoSharedNativescriptLoadingIndicator extends DemoSharedBase {
	private indicator: LoadingIndicator;

	constructor() {
		super();
		this.indicator = new LoadingIndicator();
	}

	testIt() {
		console.log('test nativescript-loading-indicator!');
	}

	showLoader() {
		this.indicator.show({
			dimBackground: true,
			message: 'Loading test...',
		});

		setTimeout(() => {
			this.indicator.show({
				message: 'TextMode',
				mode: Mode.Text,
			});
		}, 2000);

		setTimeout(() => {
			this.indicator.show({
				message: 'Updating',
				mode: Mode.Indeterminate,
			});
			this.demoProgress('red');
		}, 3000);

		// to test target view
		// uncomment - then can toggle this method to show/hide in target
		// if (!this._testTarget) {
		//   this._testTarget = true;
		//   this.indicator.show({
		//     message: 'Loading test...',
		//     ios: {
		//       view: this.stackView.ios
		//     }
		//   });
		// } else {
		//   this._testTarget = false;
		//   this.indicator.hide();
		// }
	}

	showLoaderNoBezel() {
		this.indicator.show({
			message: 'Loading, no bezel!',
			color: '#38ef7d',
			hideBezel: true,
		});
		this.demoLoader();
	}

	showLoaderMsgAndDetails() {
		this.indicator.show({
			message: 'One moment',
			details: 'Updating data...',
		});
		setTimeout(() => {
			this.indicator.show({
				details: 'Transferring secret codes...',
			});
			this.demoLoader();
		}, 1000);
	}

	showLoaderSquare() {
		this.indicator.show({ ios: { square: true } });
		this.demoLoader();
	}

	showLoaderMargin() {
		this.indicator.show({
			message: 'Message offset margin...',
			margin: 30,
		});
		this.demoLoader();
	}

	showLoaderDimBg() {
		this.indicator.show({
			dimBackground: true,
			message: 'Dimmed the background.',
			color: '#3F5EFB',
		});
		this.demoLoader();
	}

	showLoaderColor() {
		this.indicator.show({
			color: '#8A2BE2',
			backgroundColor: '#4B9ED6',
		});
		this.demoLoader();
	}

	showLoaderIndeterminate() {
		this.indicator.show({
			message: 'Indeterminate Mode',
			backgroundColor: '#3F5EFB',
			color: '#fff000',
			mode: Mode.Indeterminate,
		});

		setTimeout(() => {
			this.indicator.hide();
		}, 3500);
	}

	showLoaderDeterminate() {
		this.indicator.show({
			message: 'Determinate Mode',
			backgroundColor: '#3F5EFB',
			color: '#fff000',
			mode: Mode.Determinate,
		});

		setTimeout(() => {
			this.indicator.hide();
		}, 3500);
	}

	showLoaderAnnularDeterminate() {
		this.indicator.show({
			message: 'Annular Determinate Mode',
			color: '#38ef7d',
			backgroundColor: '#000',
			mode: Mode.AnnularDeterminate,
		});

		setTimeout(() => {
			this.indicator.hide();
		}, 3500);
	}

	showLoaderDeterminateHorizontalBar() {
		const mode = Mode.DeterminateHorizontalBar;
		const color = '#FF0099';

		this.indicator.show({
			message: 'Determinate Horizontal Bar Mode',
			color,
			backgroundColor: '#240b36',
			mode,
		});

		setTimeout(() => {
			this.indicator.show({ progress: 0.15, color, mode });
		}, 500);
		setTimeout(() => {
			this.indicator.show({ progress: 0.35, color, mode });
		}, 1500);
		setTimeout(() => {
			this.indicator.show({ progress: 0.65, color, mode });
		}, 2500);
		setTimeout(() => {
			this.indicator.show({ progress: 0.85, color, mode });
		}, 3000);
		setTimeout(() => {
			this.indicator.show({ progress: 0.99, color, mode });
		}, 3750);
		setTimeout(() => {
			this.indicator.show({ progress: 1, color, mode });
			this.indicator.hide();
		}, 4500);
	}

	showLoaderModeText() {
		this.indicator.show({
			message: 'Text only',
			mode: Mode.Text,
		});
		this.demoLoader();
	}

	showLoaderModeCustom() {
		this.indicator.show({
			message: 'Completed',
			details: 'Go wild!',
			customView: 'checkmark.png',
			mode: Mode.CustomView,
		});
		this.demoLoader();
	}

	showLoaderCancel() {
		let interval;
		this.indicator.show({
			mode: Mode.Determinate,
			android: {
				cancelable: true,
				cancelListener: (dialog) => {
					console.log('cancelled');
					clearInterval(interval);
				},
			},
		});

		let count = 0;

		interval = setInterval(() => {
			count += 1;
			this.indicator.show({ progress: count / 100 });
			if (count === 100) {
				clearInterval(interval);
				this.indicator.hide();
			}
		}, 500);
	}

	private demoLoader() {
		setTimeout(() => {
			this.indicator.hide();
		}, 3000);
	}

	private demoProgress(color = '#333') {
		setTimeout(() => {
			this.indicator.show({ progress: 0.15, color });
		}, 500);
		setTimeout(() => {
			this.indicator.show({ progress: 0.35, color });
		}, 1500);
		setTimeout(() => {
			this.indicator.show({ progress: 0.65, color });
		}, 2500);
		setTimeout(() => {
			this.indicator.show({ progress: 0.85, color });
		}, 4000);
		setTimeout(() => {
			this.indicator.show({ progress: 0.99, color });
		}, 4500);
		setTimeout(() => {
			this.indicator.show({ progress: 1, color });
			this.indicator.hide();
		}, 5000);
	}
}
