# @nstudio/nativescript-qr

```javascript
npm install @nstudio/nativescript-qr
```

## Usage

### Angular

Component / Module:
```typescript
import { Image } from "@nativescript/core";
import { Qr } from "@nstudio/nativescript-qr";
export class YourComponent{
...
  onImageLoaded(args) {
    const image = args.object as Image;
    const result = Qr.generate('Hello World');
    image.imageSource = result;
  }
...
}
```

View:

```html
  <Image src="" (loaded)="onImageLoaded($event)"></Image>
```

## License

Apache License Version 2.0
