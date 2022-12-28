#import <UIKit/UIKit.h>
#import <FullStory/FS.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIView (FSAttributes)
- (void)fsSetTagName:(NSString *)name;
- (void)fsSetAttributeValue:(NSString *)value forAttribute:(NSString *)name;
- (void)fsRemoveAttribute:(NSString *)name;
- (void)fsAddClass:(FSViewClass)className;
- (void)fsRemoveClass:(FSViewClass)className;
- (void)fsAddClasses:(NSArray<FSViewClass> *)classNames;
- (void)fsRemoveClasses:(NSArray<FSViewClass> *)classNames;
- (void)fsRemoveAllClasses;

- (void)fsMask;
- (void)fsMaskWithoutConsent;
- (void)fsUnmask;
- (void)fsUnmaskWithConsent;
- (void)fsExclude;
- (void)fsExcludeWithoutConsent;
@end

NS_ASSUME_NONNULL_END
