# @nstudio/nativescript-vlc-player

```javascript
npm install @nstudio/nativescript-vlc-player
```

## Usage

Register `VLCPlayer` element using any flavor for usage.

```html
<VLCPlayer autoPlay="true" src="rtsp://your-stream" loaded="loaded"></VLCPlayer>
```

### API

- `play`: Start playback
- `pause`: Pause playback

### Example

```html
<VLCPlayer autoPlay="true" src="rtsp://your-stream" loaded="loaded"></VLCPlayer>
```

```ts
import { EventData } from '@nativescript/core';
import { VLCPlayer } from '@nstudio/nativescript-vlc-player';

let player: VLCPlayer;
function loaded(args: EventData) {
    player = args.object as VLCPlayer;
}

function play() {
    player.play();
}

function pause() {
    player.pause();
}
```

## License

Apache License Version 2.0
