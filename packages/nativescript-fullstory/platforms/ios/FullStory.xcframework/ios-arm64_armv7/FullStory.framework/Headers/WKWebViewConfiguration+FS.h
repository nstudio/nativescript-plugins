#import <WebKit/WebKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface WKWebViewConfiguration (FS)

/*!
 Disables WebView recording for any \c WKWebView instantiated with this \c
 WKWebViewConfiguration.

 The default value is \c NO .

 @discussion Some pages, including Apple Pay-containing pages, refuse to run
 in WKWebViews that have external JavaScript injected.  In order for
 FullStory to accurately represent web content, it otherwise would inject a
 small JavaScript snippet into each page loaded in a WKWebView.  For pages
 that are incompatible with this approach, initialize their WKWebViews with a
 configuration with \c fullstoryInjectionDisabled set.

 @warning This function affects one specific \c WKWebViewConfiguration
 instance at a time, but copies of that instance made by \c NSCopying will not
 retain changes to this property.
 */
@property(getter = isFullStoryInjectionDisabled, setter = setFullStoryInjectionDisabled:) BOOL fullstoryInjectionDisabled;

@end

NS_ASSUME_NONNULL_END
