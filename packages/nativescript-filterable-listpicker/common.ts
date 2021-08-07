import { booleanConverter, Builder, CoreTypes, Enums, GridLayout, isIOS, Observable, ObservableArray, Property, PropertyChangeData, TextField } from '@nativescript/core';
import { AnimationCurve } from '@nativescript/core/ui/enums';

let unfilteredSource: Array<any> = [];
let filtering: boolean = false;
export const listWidthProperty = new Property<FilterableListpickerCommon, string>({
  name: "listWidth",
  defaultValue: "300"
});
export const listHeightProperty = new Property<FilterableListpickerCommon, string>({
  name: "listHeight",
  defaultValue: "300"
});
export const headingTitleProperty = new Property<FilterableListpickerCommon, string>({
  name: "headingTitle",
  defaultValue: undefined
});
export const enableSearchProperty = new Property<FilterableListpickerCommon, boolean>(
  {
    name: "enableSearch",
    defaultValue: true,
    valueConverter: booleanConverter
  }
);
export const showCancelProperty = new Property<FilterableListpickerCommon, boolean>({
  name: "showCancel",
  defaultValue: true,
  valueConverter: booleanConverter
});
export const dimmerColorProperty = new Property<FilterableListpickerCommon, string>({
  name: "dimmerColor",
  defaultValue: "rgba(0,0,0,0.8)"
});
export const blurProperty = new Property<FilterableListpickerCommon, string>({
  name: "blur",
  defaultValue: "none"
});
export const focusOnShowProperty = new Property<FilterableListpickerCommon, boolean>({
  name: "focusOnShow",
  defaultValue: false
});
export const hideFilterProperty = new Property<FilterableListpickerCommon, boolean>({
  name: "hideFilter",
  defaultValue: false
});
export const hintTextProperty = new Property<FilterableListpickerCommon, string>({
  name: "hintText",
  defaultValue: "Enter text to filter..."
});
export const sourceProperty = new Property<
  FilterableListpickerCommon,
  ObservableArray<any>
>({
  name: "source",
  defaultValue: undefined,
  affectsLayout: true,
  valueChanged: (target, oldValue, newValue) => {
    if (!filtering) {
      while (unfilteredSource.length) unfilteredSource.pop();
      newValue.forEach(element => {
        unfilteredSource.push(element);
      });
    }
  }
});

export class FilterableListpickerCommon extends GridLayout {


  constructor() {
    super();
    this._searchFilter = this._searchFilterFn.bind(this);
  }

  onLoaded() {
    super.onLoaded();
    //let innerComponent = builder.load(__dirname + '/filterable-listpicker.xml') as View;
    let innerComponent = Builder.parse(`
          <GridLayout id="dc_flp_container" class="flp-container" visibility="collapsed" loaded="{{loadedContainer}}">
              <StackLayout tap="{{cancel}}" width="100%" height="100%"></StackLayout>
              <GridLayout width="{{listWidth}}" verticalAlignment="middle" rows="auto, auto, auto, auto" id="dc_flp" class="flp-list-container" loaded="{{loadedInnerContainer}}">

                  <Label row="0" text="{{headingTitle ? headingTitle : ''}}" class="flp-heading-title" visibility="{{headingTitle ? 'visible' : 'collapsed'}}"></Label>
                  <TextField hint="{{hintText}}" row="1" text="{{filterText}}" id="filterTextField" class="flp-hint-field" visibility="{{enableSearch ? 'visible' : 'collapsed'}}" loaded="{{loadedTextField}}"></TextField>
                  <ListView items="{{ source }}" row="2" height="{{listHeight}}" itemTap="{{choose}}" class="flp-listview">
                      <ListView.itemTemplate>
                          <StackLayout class="flp-row">
                              <GridLayout columns="auto, *, auto" visibility="{{title ? 'visible' : 'collapsed'}}" class="flp-row-container">
                                  <Image src="{{image ? image : null}}" width="30" visibility="{{image ? 'visible' : 'collapsed'}}" stretch="aspectFit" rowSpan="2" class="flp-image"></Image>
                                  <StackLayout class="flp-title-container" col="1" verticalAlignment="middle">
                                      <Label text="{{title ? title : ''}}" textWrap="true" class="flp-title"></Label>
                                      <Label text="{{description ? description : ''}}" textWrap="true" visibility="{{description ? 'visible' : 'collapsed'}}" class="flp-description"></Label>
                                  </StackLayout>
                                  <Label col="2" text="{{selected ? selected : ''}}" class="flp-item-selected" visibility="{{selected ? 'visible' : 'collapsed'}}"></Label>
                              </GridLayout>
                              <Label text="{{$value}}" textWrap="true" class="flp-no-title" visibility="{{title ? 'collapsed' : 'visible'}}"></Label>
                          </StackLayout>
                      </ListView.itemTemplate>
                  </ListView>
                  <StackLayout row="3" class="flp-cancel-container" visibility="{{showCancel ? 'visible' : 'collapsed'}}">
                      <Button text="Cancel" tap="{{cancel}}" verticalAlignment="middle" class="flp-btn-cancel"></Button>
                  </StackLayout>
              </GridLayout>
          </GridLayout>`);
    innerComponent.bindingContext = this;
    this.addChild(innerComponent);
  }

  public static canceledEvent = "canceled";
  public static itemTappedEvent = "itemTapped";
  public source: any;
  public dimmerColor: any;
  public hintText: any;
  public hideFilter: any;
  public enableSearch: boolean;
  public blur: any;
  private blurView: any = false;
  public focusOnShow: any;
  private _container: GridLayout;
  private _picker: GridLayout;
  private _textField: TextField;
  private _searchFilter: (data: any) => void;
  private _isAutocomplete: boolean = false;
  private _suggestions: any;
  visibility: any = CoreTypes.Visibility.collapse;

  loadedContainer(args) {
    this._container = <GridLayout>args.object;
  }

  loadedInnerContainer(args) {
    this._picker = <GridLayout>args.object;
  }

  autocomplete(fn: Function) {
    if(!this.isAutocomplete)
        return;
    if(typeof fn !== "function") 
        throw("[FilterableListpicker]: autotcomplete params must be a Function type !");

    /**
     * Populate sources with suggestions if is defined is usefull if we have a most use list
     * for the moment user can't search into suggestion .. writing into Textfield will active autocomplete
     * */ 
    if(!this.source)
        this.source = [];
    
    // Copy suggestion list to bind it when Textfield is empty
    this._suggestions =  this.source;
  
    // bind custome autocomplete function
    this._textField.on("textChange", (data: PropertyChangeData) => {
        if(!data.value && this._suggestions.length > 0) {
            this.set("source", this._suggestions)
            this.notifyPropertyChange("source", this._suggestions);
            return;
        }
        fn(data);
    })
  }

  loadedTextField(args) {
    this._textField = <TextField>args.object;
  }

  public choose(args) {
    let item = this.source[args.index];
    this.hide();
    this.notify({
      eventName: "itemTapped",
      object: this,
      selectedItem: item
    });
  }

  public cancel() {
    this.notify({
      eventName: "canceled",
      object: this
    });
    this.hide();
  }

  public hide() {
    if (this.enableSearch) {
      if (this._textField.dismissSoftInput) this._textField.dismissSoftInput();
      this._textField.text = "";
    }
    if (this.blurView) {
      UIView.animateWithDurationAnimationsCompletion(
        0.3,
        () => {
          this.blurView.effect = null;
        },
        () => {
          this.blurView.removeFromSuperview();
        }
      );
    } else {
      this._container
        .animate({
          opacity: 0,
          duration: 200
        })
        .then(_ => {}, err => {});
    }

    if (this.enableSearch) {
      // cleanup event when closing
      this._textField.off("textChange", this._searchFilter);
    }

    return this._picker
      .animate({
        scale: { x: 0.7, y: 0.7 },
        opacity: 0,
        duration: 400,
        curve: CoreTypes.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
      })
      .then(
        () => {
          this.visibility = CoreTypes.Visibility.collapse;
          this._container.visibility = "collapse";
        },
        err => {}
      );
  }

  public show() {
    this.visibility = CoreTypes.Visibility.visible;
    this._container.visibility = "visible";

    this.source = unfilteredSource.filter(i => true);
    if (isIOS && this.blur && this.blur != "none") {
      let iosView: UIView = this._container.ios;
      let effectView = UIVisualEffectView.alloc().init();
      effectView.frame = CGRectMake(
        0,
        0,
        iosView.bounds.size.width,
        iosView.bounds.size.height
      );
      effectView.autoresizingMask =
        UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
      this.blurView = effectView;
      iosView.addSubview(effectView);
      iosView.sendSubviewToBack(effectView);
      UIView.animateWithDurationAnimationsCompletion(
        0.3,
        () => {
          let theme = UIBlurEffectStyle.Dark;
          if (this.blur == "light") theme = UIBlurEffectStyle.Light;
          effectView.effect = UIBlurEffect.effectWithStyle(theme);
        },
        () => {
          // the animation is complete.
        }
      );
    } else {
      this._container.opacity = 0;
      this._container.backgroundColor = this.dimmerColor;
      this._container
        .animate({
          opacity: 1,
          duration: 200
        })
        .then(_ => {}, err => {});
    }

    this._picker.scaleX = 0.7;
    this._picker.scaleY = 0.7;
    this._picker.opacity = 0;
    this._picker
      .animate({
        scale: { x: 1, y: 1 },
        opacity: 1,
        duration: 400,
        curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
      })
      .then(_ => {}, err => {});

    if (this.enableSearch) {
      if (JSON.parse(this.focusOnShow)) this._textField.focus();
      this._textField.on("textChange", this._searchFilter);
    }
  }

  get isAutocomplete(): boolean {
      return this._isAutocomplete;
  }

  set isAutocomplete(val: boolean) {
      if(val === false) {
        // remve listener for TextField
        this._textField.off("textChange");
      }
      this._isAutocomplete = val;
  }

  private _searchFilterFn(data: any) {
    filtering = true;
    this.source = unfilteredSource.filter(item => {
      if (item.title) {
        return (
          item.title.toLowerCase().indexOf(data.value.toLowerCase()) !== -1
        );
      } else {
        return item.toLowerCase().indexOf(data.value.toLowerCase()) !== -1;
      }
    });
    filtering = false;
  }

}


listWidthProperty.register(FilterableListpickerCommon);
listHeightProperty.register(FilterableListpickerCommon);
headingTitleProperty.register(FilterableListpickerCommon);
enableSearchProperty.register(FilterableListpickerCommon);
showCancelProperty.register(FilterableListpickerCommon);
dimmerColorProperty.register(FilterableListpickerCommon);
focusOnShowProperty.register(FilterableListpickerCommon);
hideFilterProperty.register(FilterableListpickerCommon);
blurProperty.register(FilterableListpickerCommon);
hintTextProperty.register(FilterableListpickerCommon);
sourceProperty.register(FilterableListpickerCommon);

export interface SourcesInterface {
  title: string;
  image?: any;
  description?: string;
}

export class SourcesDataItem implements SourcesInterface {
  title: string;
  image?: any;
  description?: string;

  constructor(title: string, image?: any, description?: string)
  {
      this.title = title;
      this.image = image;
      this.description = description;
  }
}