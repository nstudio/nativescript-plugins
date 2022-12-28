#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol FSDelegate <NSObject>
@optional

/** This message is sent if FullStory has an internal consistency error.  When this event occurs, no further recording will occur until the application completely exits (i.e., the process is killed, not just that the app is sent to the background) and restarts.

 This message is guaranteed to be sent from the main thread.
 */
- (void)fullstoryDidTerminateWithError:(NSError *)error;

/** This message is sent when FullStory successfully connects to the session server, and begins a session.  Recording is now running, and it is safe to use all FullStory functionality, including +[FS identify], +[FS event], ...

 This message is guaranteed to be sent from the main thread.

 @param sessionUrl A URL that can be used to view the captured session on FullStory..

 */
- (void)fullstoryDidStartSession:(NSString *)sessionUrl;

/** This message is sent after FullStory has terminated recording for any reason other than an internal consistency error.  (FullStory terminates recording, among other reasons, when the application is sent to the background, and also upon iOS modal dialogs being presented.)  [FS ...] API calls between the time the previous frame was scanned and this message being sent are not guaranteed to be sent to any session in particular.

 This message is guaranteed to be sent from the main thread.
 */
- (void)fullstoryDidStopSession;
@end

NS_ASSUME_NONNULL_END
