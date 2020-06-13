import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appQuotes]'
})
export class QuotesDirective {
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="blue"
   }
}
