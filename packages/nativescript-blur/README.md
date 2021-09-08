# @nstudio/nativescript-blur

```javascript
ns plugin add @nstudio/nativescript-blur
```

## iOS
<img src="https://github.com/davecoffin/nativescript-blur/blob/master/blur.gif?raw=true" height="320" > 

On iOS, you can blur pretty much anything, but the coolest thing to do is blur a transparent view covering what you want blurred. This way everything behind that view gets blurred. 

## Android

<img src="https://github.com/davecoffin/nativescript-blur/blob/master/blurandroid.gif?raw=true" height="320" > 
If you pass `true` to the constructor (`let blur = new Blur(true)`), nothing will be different on iOS, but on Android the backgroundColor of the NativeScript view you pass to either light semi transparent or dark semi transparent. So, if you are using this for a "dimmer" effect for modals and stuff, Android will work that way for now.

## Usage

```js

import { Blur } from '@nstudio/nativescript-blur';
let blur = new Blur(true); // pass true to enable limited usage on android (for now);

// Pick Date
makeKittyBlurry() {
    let kittyView = page.getViewById('kitty');
    blur.on(kittyView, 'kitty', 'light').then(() => {
        console.log('Kitty has become blurry.');
    }).catch(e => {
        console.dir(e);
    });
}

clearUpKitty() {
    blur.off('kitty').then(() => {
        console.log('Kitty has cleared up.')
    });
}

```

## API

`on(view, keyTitle, theme?, duration?): Promise;`

To turn it on, you must pass a view and a key name. The key name can be anything, you use it to turn it off. This way you can blur different things at different times. The theme is either `light` or `dark`, and you can pass a custom duration. The duration is in seconds, for example if you pass `.2` the animation will last .2 seconds. 
The view needs to be a nativescript view that has an `ios` property, and that property must support `addSubview`. Here are some examples of NativeScript UI elements you can pass:
```js
StackLayout
GridLayout
AbsoluteLayout
DockLayout
ScrollView
Image
Label
```
If there is no `ios` property on the element you pass or `addSubview` doesn't exist on the ios property, it will return an error.

`off(keyTitle, duration?): Promise;`

Off animates the blur off. Pass it the key you used to create it. If the key doesnt exist (the view is not blurry) it will return an error.

## License

Apache License Version 2.0
