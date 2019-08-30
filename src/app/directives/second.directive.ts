import { Directive, HostBinding, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[second]"
})
export class SecondDirective {
  @Input() second; // 1st take input from host
  @HostBinding() get innerText() {
    // 2nd update host based on input
    return `from directive ${this.second}`;
  }
  @HostListener("click", ["$event"]) onclick($event) {
    this.second = "the element is clicked via directive";
    console.log(this.second);
  }
  constructor() {}
}
