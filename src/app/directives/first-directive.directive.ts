import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[first]"
})
export class FirstDirectiveDirective {
  @HostBinding() innerText = "this is a directive";

  constructor() {}
}
