#import "QRToggleTorchButton.h"

@implementation QRToggleTorchButton

- (id)initWithFrame:(CGRect)frame
{
  if ((self = [super initWithFrame:frame])) {
    _edgeColor            = [UIColor whiteColor];
    _fillColor            = [UIColor darkGrayColor];
    _edgeHighlightedColor = [UIColor whiteColor];
    _fillHighlightedColor = [UIColor blackColor];
  }
  return self;
}

- (void)drawRect:(CGRect)rect
{
  // Colors

  UIColor *paintColor  = (self.state != UIControlStateHighlighted) ? _fillColor : _fillHighlightedColor;
  UIColor *strokeColor = (self.state != UIControlStateHighlighted) ? _edgeColor : _edgeHighlightedColor;

  // Torch box

  CGFloat width   = rect.size.width;
  CGFloat height  = rect.size.height;
  CGFloat centerX = width / 2;
  CGFloat centerY = height / 2;

  CGFloat strokeLineWidth      = 2;
  CGFloat circleRadius         = width / 10;
  CGFloat lineLength           = width / 10;
  CGFloat lineOffset           = width / 10;
  CGFloat lineOriginFromCenter = circleRadius + lineOffset;

  //Circle
  UIBezierPath *circlePath = [UIBezierPath bezierPath];
  [circlePath addArcWithCenter:CGPointMake(centerX, centerY) radius:circleRadius startAngle:0.0 endAngle:M_PI clockwise:YES];
  [circlePath addArcWithCenter:CGPointMake(centerX, centerY) radius:circleRadius startAngle:M_PI endAngle:M_PI * 2 clockwise:YES];

  // Draw beams
  [paintColor setFill];
  
  for (int i = 0; i < 8; i++) {
    CGFloat angle = ((2 * M_PI) / 8) * i;

    CGPoint startPoint = CGPointMake(centerX + cos(angle) * lineOriginFromCenter, centerY + sin(angle) * lineOriginFromCenter);
    CGPoint endPoint   = CGPointMake(centerX + cos(angle) * (lineOriginFromCenter + lineLength), centerY + sin(angle) * (lineOriginFromCenter + lineLength));

    UIBezierPath *beamPath = [self linePathWithStartPoint:startPoint endPoint:endPoint thickness:strokeLineWidth];
    [beamPath stroke];
  }

  // Draw circle
  [strokeColor setFill];

  circlePath.lineWidth = strokeLineWidth;
  [circlePath fill];
  [circlePath stroke];
}

- (UIBezierPath *)linePathWithStartPoint:(CGPoint)startPoint endPoint:(CGPoint)endPoint thickness:(CGFloat)thickness {
  UIBezierPath *linePath = [UIBezierPath bezierPath];

  [linePath moveToPoint:startPoint];
  [linePath addLineToPoint:endPoint];

  linePath.lineCapStyle = kCGLineCapRound;
  linePath.lineWidth    = thickness;

  return linePath;
}

// MARK: - UIResponder Methods

- (void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event
{
  [super touchesBegan:touches withEvent:event];

  [self setNeedsDisplay];
}

- (void)touchesMoved:(NSSet *)touches withEvent:(UIEvent *)event
{
  [super touchesMoved:touches withEvent:event];

  [self setNeedsDisplay];
}

- (void)touchesEnded:(NSSet *)touches withEvent:(UIEvent *)event
{
  [super touchesEnded:touches withEvent:event];

  [self setNeedsDisplay];
}

- (void)touchesCancelled:(NSSet *)touches withEvent:(UIEvent *)event
{
  [super touchesCancelled:touches withEvent:event];
  
  [self setNeedsDisplay];
}

@end
