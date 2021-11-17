#import "QRCodeReaderView.h"

@interface QRCodeReaderView ()
@property (nonatomic, strong) CAShapeLayer *overlay;

@end

@implementation QRCodeReaderView

- (id)initWithFrame:(CGRect)frame
{
  if ((self = [super initWithFrame:frame])) {
    [self addOverlay];
  }

  return self;
}

- (void)drawRect:(CGRect)rect
{
  CGRect innerRect = CGRectInset(rect, 50, 50);

  CGFloat minSize = MIN(innerRect.size.width, innerRect.size.height);
  if (innerRect.size.width != minSize) {
    innerRect.origin.x   += (innerRect.size.width - minSize) / 2;
    innerRect.size.width = minSize;
  }
  else if (innerRect.size.height != minSize) {
    innerRect.origin.y    += (innerRect.size.height - minSize) / 2;
    innerRect.size.height = minSize;
  }

  CGRect offsetRect = CGRectOffset(innerRect, 0, 15);


  _overlay.path = [UIBezierPath bezierPathWithRoundedRect:offsetRect cornerRadius:5].CGPath;
}

#pragma mark - Private Methods

- (void)addOverlay
{
  _overlay = [[CAShapeLayer alloc] init];
  _overlay.backgroundColor = [UIColor clearColor].CGColor;
  _overlay.fillColor       = [UIColor clearColor].CGColor;
  _overlay.strokeColor     = [UIColor whiteColor].CGColor;
  _overlay.lineWidth       = 3;
  _overlay.lineDashPattern = @[@7.0, @7.0];
  _overlay.lineDashPhase   = 0;

  [self.layer addSublayer:_overlay];
}

@end
