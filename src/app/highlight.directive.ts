<<<<<<< HEAD
import { Directive,ElementRef } from '@angular/core';
=======
import { Directive,ElementRef, HostListener } from '@angular/core';
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

<<<<<<< HEAD
  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.boxShadow='0 0 5px rgba(81, 203, 238, 1)';
    this.elem.nativeElement.style.background='rgba(81, 203, 238, 0.13)';
    this.elem.nativeElement.style.padding='5px';
=======
  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks( ){
    this.textDeco("Red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None");
  }

  private textDeco(color:string){
    this.elem.nativeElement.style.backgroundColor='color';

>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
   }

}
