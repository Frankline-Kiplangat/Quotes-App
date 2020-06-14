import { StrikethroughDirective } from './strikethrough.directive';
import { Quote } from '@angular/compiler';

describe('QuoteDirective', () => {
  it('should create an instance', () => {
    const directive = new StrikethroughDirective();
    expect(directive).toBeTruthy();
  });
});