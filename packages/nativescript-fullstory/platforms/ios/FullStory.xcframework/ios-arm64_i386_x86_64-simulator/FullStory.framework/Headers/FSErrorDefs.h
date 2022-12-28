/**
 Error domains and codes specific to FullStory.
 */

#import <Foundation/Foundation.h>

FOUNDATION_EXTERN NSString * _Nonnull const FSErrorDomain;

typedef NS_ENUM(NSInteger, FSErrorCode) {

    FSErrorCodeInconsistency = 1,
    FSErrorCodeUnderlying,
    FSErrorCodeInsufficientResources
};
