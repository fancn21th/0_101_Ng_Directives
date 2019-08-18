import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[first]"
})
export class FirstDirective {
  @HostBinding() innerText = "this is a directive";

  @HostListener("click", ["$event"]) onclick($event) {
    console.log($event);
  }

  constructor() {}
}
