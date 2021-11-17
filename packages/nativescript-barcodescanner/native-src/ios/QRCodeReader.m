#import "QRCodeReader.h"

@interface QRCodeReader () <AVCaptureMetadataOutputObjectsDelegate>
@property (strong, nonatomic) AVCaptureDevice            *defaultDevice;
@property (strong, nonatomic) AVCaptureDeviceInput       *defaultDeviceInput;
@property (strong, nonatomic) AVCaptureDevice            *frontDevice;
@property (strong, nonatomic) AVCaptureDeviceInput       *frontDeviceInput;
@property (strong, nonatomic) AVCaptureMetadataOutput    *metadataOutput;
@property (strong, nonatomic) AVCaptureSession           *session;
@property (strong, nonatomic) AVCaptureVideoPreviewLayer *previewLayer;

@property (copy, nonatomic) void (^completionBlock) (NSString *, NSString *);

@end

@implementation QRCodeReader

- (id)init
{
  if ((self = [super init])) {
    _metadataObjectTypes = @[AVMetadataObjectTypeQRCode];

    [self setupAVComponents];
    [self configureDefaultComponents];
  }
  return self;
}

- (id)initWithMetadataObjectTypes:(NSArray *)metadataObjectTypes
{
  if ((self = [super init])) {
    _metadataObjectTypes = metadataObjectTypes;

    [self setupAVComponents];
    [self configureDefaultComponents];
  }
  return self;
}

+ (instancetype)readerWithMetadataObjectTypes:(NSArray *)metadataObjectTypes
{
  return [[self alloc] initWithMetadataObjectTypes:metadataObjectTypes];
}

#pragma mark - Initializing the AV Components

- (void)setupAVComponents
{
  self.defaultDevice = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];

  if (_defaultDevice) {
    self.defaultDeviceInput = [AVCaptureDeviceInput deviceInputWithDevice:_defaultDevice error:nil];
    self.metadataOutput     = [[AVCaptureMetadataOutput alloc] init];
    self.session            = [[AVCaptureSession alloc] init];
    self.previewLayer       = [AVCaptureVideoPreviewLayer layerWithSession:self.session];

    for (AVCaptureDevice *device in [AVCaptureDevice devicesWithMediaType:AVMediaTypeVideo]) {
      if (device.position == AVCaptureDevicePositionFront) {
        self.frontDevice = device;
      }
    }

    if (_frontDevice) {
      self.frontDeviceInput = [AVCaptureDeviceInput deviceInputWithDevice:_frontDevice error:nil];
    }
  }
}

- (void)configureDefaultComponents
{
  [_session addOutput:_metadataOutput];

  if (_defaultDeviceInput) {
    [_session addInput:_defaultDeviceInput];
  }

  [_metadataOutput setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];
  NSMutableSet *available = [NSMutableSet setWithArray:[_metadataOutput availableMetadataObjectTypes]];
  NSSet *desired = [NSSet setWithArray:_metadataObjectTypes];
  [available intersectSet:desired];
  [_metadataOutput setMetadataObjectTypes:available.allObjects];
  [_previewLayer setVideoGravity:AVLayerVideoGravityResizeAspectFill];
}

- (void)switchDeviceInput
{
  if (_frontDeviceInput) {
    [_session beginConfiguration];

    AVCaptureDeviceInput *currentInput = [_session.inputs firstObject];
    [_session removeInput:currentInput];

    AVCaptureDeviceInput *newDeviceInput = (currentInput.device.position == AVCaptureDevicePositionFront) ? _defaultDeviceInput : _frontDeviceInput;
    [_session addInput:newDeviceInput];

    [_session commitConfiguration];
  }
}

- (BOOL)hasFrontDevice
{
  return _frontDevice != nil;
}

- (BOOL)isTorchAvailable
{
  return _defaultDevice.hasTorch;
}

- (void)toggleTorch
{
  NSError *error = nil;

  [_defaultDevice lockForConfiguration:&error];

  if (error == nil) {
    AVCaptureTorchMode mode = _defaultDevice.torchMode;

    _defaultDevice.torchMode = mode == AVCaptureTorchModeOn ? AVCaptureTorchModeOff : AVCaptureTorchModeOn;
  }
  
  [_defaultDevice unlockForConfiguration];
}

#pragma mark - Controlling Reader

- (void)startScanning
{
  if (![self.session isRunning]) {
    [self.session startRunning];
  }
}

- (void)stopScanning
{
  if ([self.session isRunning]) {
    [self.session stopRunning];
  }
}

- (BOOL)running {
  return self.session.running;
}

#pragma mark - Managing the Orientation

+ (AVCaptureVideoOrientation)videoOrientationFromInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
  switch (interfaceOrientation) {
    case UIInterfaceOrientationLandscapeLeft:
      return AVCaptureVideoOrientationLandscapeLeft;
    case UIInterfaceOrientationLandscapeRight:
      return AVCaptureVideoOrientationLandscapeRight;
    case UIInterfaceOrientationPortrait:
      return AVCaptureVideoOrientationPortrait;
    default:
      return AVCaptureVideoOrientationPortraitUpsideDown;
  }
}

#pragma mark - Checking the Reader Availabilities

+ (BOOL)isAvailable
{
  @autoreleasepool {
    AVCaptureDevice *captureDevice = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];

    if (!captureDevice) {
      return NO;
    }

    NSError *error;
    AVCaptureDeviceInput *deviceInput = [AVCaptureDeviceInput deviceInputWithDevice:captureDevice error:&error];

    if (!deviceInput || error) {
      return NO;
    }

    return YES;
  }
}

+ (BOOL)supportsMetadataObjectTypes:(NSArray *)metadataObjectTypes
{
  if (![self isAvailable]) {
    return NO;
  }

  @autoreleasepool {
    // Setup components
    AVCaptureDevice *captureDevice    = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    AVCaptureDeviceInput *deviceInput = [AVCaptureDeviceInput deviceInputWithDevice:captureDevice error:nil];
    AVCaptureMetadataOutput *output   = [[AVCaptureMetadataOutput alloc] init];
    AVCaptureSession *session         = [[AVCaptureSession alloc] init];

    [session addInput:deviceInput];
    [session addOutput:output];

    if (metadataObjectTypes == nil || metadataObjectTypes.count == 0) {
      // Check the QRCode metadata object type by default
      metadataObjectTypes = @[AVMetadataObjectTypeQRCode];
    }

    for (NSString *metadataObjectType in metadataObjectTypes) {
      if (![output.availableMetadataObjectTypes containsObject:metadataObjectType]) {
        return NO;
      }
    }

    return YES;
  }
}

#pragma mark - Managing the Block

- (void)setCompletionWithBlock:(void (^) (NSString *resultAsString, NSString *typeAsString))completionBlock
{
  self.completionBlock = completionBlock;
}

#pragma mark - AVCaptureMetadataOutputObjects Delegate Methods

- (void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects fromConnection:(AVCaptureConnection *)connection
{
  for (AVMetadataObject *current in metadataObjects) {
    if ([current isKindOfClass:[AVMetadataMachineReadableCodeObject class]]
        && [_metadataObjectTypes containsObject:current.type]) {
      NSString *scannedResult = [(AVMetadataMachineReadableCodeObject *) current stringValue];
      NSString *type = [(AVMetadataMachineReadableCodeObject *) current type];

      if (_completionBlock) {
        _completionBlock(scannedResult, type);
      }

      break;
    }
  }
}

@end
