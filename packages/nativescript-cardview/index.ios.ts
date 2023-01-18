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
    nativeView: UIView;
  
    constructor() {
      super();
      const width = Screen.mainScreen.widthDIPs - 20;
      this.nativeView = new UIView({ frame: CGRectMake(10, 30, width, 0) });
      this.nativeView.layer.masksToBounds = false;
      this.shadowColor = 'black';
      this.radius = 1;
      this.shadowRadius = 1;
      this.shadowOpacity = 0.4;
      this.shadowOffsetHeight = 2;
      this.shadowOffsetWidth = 0;
    }
  
    // @ts-ignore
    get ios(): any {
      return this.nativeView;
    }
  
    [radiusProperty.setNative](value: number) {
      this.nativeView.layer.cornerRadius = value;
    }
  
    [radiusProperty.getDefault](): number {
      return this.nativeView.layer.cornerRadius;
    }
  
    [backgroundColorProperty.setNative](value: Color) {
      this.nativeView.backgroundColor =
        value !== undefined ? value.ios : new Color('#FFFFFF').ios;
    }
  
    [backgroundInternalProperty.setNative](value) {
      this.nativeView.backgroundColor = new Color(
        value.color !== undefined ? value.color + '' : '#FFFFFF'
      ).ios;
    }
  
    [shadowRadiusProperty.setNative](value: number) {
      this.nativeView.layer.shadowRadius = value;
    }
  
    [shadowOffsetWidthProperty.setNative](value: number) {
      this.nativeView.layer.shadowOffset = CGSizeMake(
        value,
        this.nativeView.layer.shadowOffset.height
      );
    }
  
    [shadowOffsetHeightProperty.setNative](value: number) {
      this.nativeView.layer.shadowOffset = CGSizeMake(
        this.nativeView.layer.shadowOffset.width,
        value
      );
    }
  
    [shadowColorProperty.setNative](value: Color) {
      this.nativeView.layer.shadowColor = value.ios.CGColor;
    }
  
    [shadowOpacityProperty.setNative](value: number) {
      this.nativeView.layer.shadowOpacity = value;
    }
  }