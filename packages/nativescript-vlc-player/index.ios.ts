import { View } from '@nativescript/core';
import { srcProperty } from './common';

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
			// switch (owner.player.state) {
			//     case  VLCMediaPlayerState.Buffering:

			//     break;
			// }
		}
	}
}
export class VLCPlayer extends View {
	player: VLCMediaPlayer; //RCTVLCPlayer;
	delegate: VLCMediaPlayerDelegateImpl;
	createNativeView() {
		const options = NSArray.arrayWithArray(['--network-caching=50', '--rtsp-tcp'] as any);
		console.log(options.objectAtIndex(0));
		this.player = VLCMediaPlayer.alloc().initWithOptions(options);
		const view = UIView.alloc().init();
		view.backgroundColor = UIColor.redColor;
		this.player.drawable = view;
		// RCTVLCPlayer.alloc().init();
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
		// [bavv edit end]

		this.player.media = VLCMedia.mediaWithURL(uri);

		AVAudioSession.sharedInstance().setActiveWithOptionsError(false, AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation);

		this.player.play();

		// self.onVideoLoadStart(@{
		//                        @"target": self.reactTag
		//                        });
	}
}

srcProperty.register(VLCPlayer);
