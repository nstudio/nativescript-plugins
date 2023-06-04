import {
    backgroundColorProperty,
    backgroundInternalProperty,
    Color,
    Screen
  } from '@nativescript/core';
  import {
    CardViewCommon,
    radiusProperty,
    shadowColorProperty,
    shadowOffsetHeightProperty,
    shadowOffsetWidthProperty,
    shadowOpacityProperty,
    shadowRadiusProperty
  } from './common';
  
  export class CardView extends CardViewCommon {
  
    createNativeView() {
      const width = Screen.mainScreen.widthDIPs - 20;
      const view = UIView.alloc().initWithFrame(CGRectMake(10, 30, width, 0));
      view.layer.masksToBounds = false;
      this.shadowColor = 'black';
      this.radius = 1;
      this.shadowRadius = 1;
      this.shadowOpacity = 0.4;
      this.shadowOffsetHeight = 2;
      this.shadowOffsetWidth = 0;
      return view;
    }
  
    // @ts-ignore
    get ios(): UIView {
      return this.nativeView;
    }
  
    [radiusProperty.setNative](value: number) {
      this.ios.layer.cornerRadius = value;
    }
  
    [radiusProperty.getDefault](): number {
      return this.ios.layer.cornerRadius;
    }
  
    [backgroundColorProperty.setNative](value: Color) {
      this.ios.backgroundColor =
        value !== undefined ? value.ios : new Color('#FFFFFF').ios;
    }
  
    [backgroundInternalProperty.setNative](value) {
      this.ios.backgroundColor = new Color(
        value.color !== undefined ? value.color + '' : '#FFFFFF'
      ).ios;
    }
  
    [shadowRadiusProperty.setNative](value: number) {
      this.ios.layer.shadowRadius = value;
    }
  
    [shadowOffsetWidthProperty.setNative](value: number) {
      this.ios.layer.shadowOffset = CGSizeMake(
        value,
        this.ios.layer.shadowOffset.height
      );
    }
  
    [shadowOffsetHeightProperty.setNative](value: number) {
      this.ios.layer.shadowOffset = CGSizeMake(
        this.ios.layer.shadowOffset.width,
        value
      );
    }
  
    [shadowColorProperty.setNative](value: Color) {
      this.ios.layer.shadowColor = value.ios.CGColor;
    }
  
    [shadowOpacityProperty.setNative](value: number) {
      this.ios.layer.shadowOpacity = value;
    }
  }