import { DemoSharedBase } from '../utils';
import { CardView } from '@nstudio/nativescript-cardview';
import { EventData, Frame, isAndroid, isIOS } from '@nativescript/core';

export class DemoSharedNativescriptCardview extends DemoSharedBase {

  public goAway(args) {
    const page = Frame.topmost().currentPage;
    const card = page.getViewById('batCard') as CardView;
    card
      .animate({
        scale: { x: 0, y: 0 },
        opacity: 0,
        duration: 1000
      })
      .then(() => {
        card.visibility = 'collapse';
      });
  }

  public goAwayJoker(args) {
    const page = Frame.topmost().currentPage;
    const card = page.getViewById('jokerCard') as CardView;
    card
      .animate({
        scale: { x: 0, y: 0 },
        opacity: 0,
        duration: 1000
      })
      .then(() => {
        card.visibility = 'collapse';
      });
  }

  public cardLoaded(args: EventData) {
    const card = args.object as CardView;
    console.log('card = ' + card);
    if (isAndroid) {
      console.log('card native android = ' + card.android);
    } else if (isIOS) {
      console.log('card native ios = ' + card.ios);
    }
  }
}