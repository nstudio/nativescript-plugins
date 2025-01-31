import { srcProperty, autoPlayProperty, VLCPlayerCommon, VLCPlayerEvents } from './common';

@NativeClass()
class VLCMediaPlayerDelegateImpl extends NSObject implements VLCMediaPlayerDelegate {
	static ObjCProtocols = [VLCMediaPlayerDelegate];
	owner: WeakRef<VLCPlayer>;

	static initWithOwner(owner: WeakRef<VLCPlayer>) {
		const delegate = <VLCMediaPlayerDelegateImpl>VLCMediaPlayerDelegateImpl.new();
		delegate.owner = owner;
		return delegate;
	}
	mediaPlayerStateChanged(aNotification: NSNotification): void {
		console.log('mediaPlayerStateChanged');
		const owner = this.owner.deref();
		if (owner) {
			console.log('state:', owner.player.state);
			switch (owner.player.state) {
				case VLCMediaPlayerState.Buffering:
					owner.notify({
						eventName: VLCPlayerEvents.buffering,
						object: owner,
					});
					break;
				case VLCMediaPlayerState.Opening:
					owner.notify({
						eventName: VLCPlayerEvents.opening,
						object: owner,
					});
					break;
				case VLCMediaPlayerState.Playing:
					owner.notify({
						eventName: VLCPlayerEvents.playing,
						object: owner,
					});
					break;
				case VLCMediaPlayerState.Paused:
					owner.notify({
						eventName: VLCPlayerEvents.paused,
						object: owner,
					});
					break;
				case VLCMediaPlayerState.Ended:
					owner.notify({
						eventName: VLCPlayerEvents.ended,
						object: owner,
					});
					break;
				case VLCMediaPlayerState.Error:
					owner.notify({
						eventName: VLCPlayerEvents.error,
						object: owner,
					});
					break;
				case VLCMediaPlayerState.Stopped:
					owner.notify({
						eventName: VLCPlayerEvents.stopped,
						object: owner,
					});
					break;
			}
		}
	}
}
export class VLCPlayer extends VLCPlayerCommon {
	player: VLCMediaPlayer;
	delegate: VLCMediaPlayerDelegateImpl;
	createNativeView() {
		const options = NSArray.arrayWithArray(['--network-caching=50', '--rtsp-tcp'] as any);
		console.log(options.objectAtIndex(0));
		this.player = VLCMediaPlayer.alloc().initWithOptions(options);
		const view = UIView.alloc().init();
		view.backgroundColor = UIColor.redColor;
		this.player.drawable = view;
		return view;
	}

	initNativeView(): void {
		this.delegate = VLCMediaPlayerDelegateImpl.initWithOwner(new WeakRef(this));
		this.player.delegate = this.delegate;
	}

	[srcProperty.setNative](value: string) {
		const uri = NSURL.URLWithString(value);
		console.log('uri:', uri);
		// int initType = [_source objectForKey:@"initType"];
		// NSDictionary* initOptions = [_source objectForKey:@"initOptions"];

		// if (initType == 1) {
		//     _player = [[VLCMediaPlayer alloc] init];
		// } else {
		//     _player = [[VLCMediaPlayer alloc] initWithOptions:initOptions];
		// }
		// this.player.delegate = self;
		// this.player.drawable = self;

		this.player.media = VLCMedia.mediaWithURL(uri);

		AVAudioSession.sharedInstance().setActiveWithOptionsError(false, AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation);

		if (this.autoPlay) {
			this.player.play();
		}

		this.notify({
			eventName: VLCPlayerEvents.loadStarted,
			object: this,
		});
	}

	[autoPlayProperty.setNative](value: boolean) {
		this.autoPlay = value;
	}

	play() {
		if (this.player) {
			this.player.play();
		}
	}

	pause() {
		if (this.player) {
			this.player.pause();
		}
	}
}

srcProperty.register(VLCPlayer);
