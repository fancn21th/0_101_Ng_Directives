import { Directive, HostBinding, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[second]"
})
export class SecondDirectiveDirective {
  @Input() second;
  @HostBinding() get innerText() {
    return `from directive ${this.second}`;
  }
  @HostListener("click", ["$event"]) onclick($event) {
    this.second = "the element is clicked via directive";
    console.log(this.second);
  }
  constructor() {}
}
