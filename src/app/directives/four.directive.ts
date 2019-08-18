import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[four]"
})
export class FourDirective {
  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
  }
}
