import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[five]"
})
export class FiveDirective {
  @Input() set five(value) {
    this.view.createEmbeddedView(this.template, {
      $implicit: "Awesome"
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: "Amazing"
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: "Bravo"
    });
  }
  constructor(
    private el: ElementRef,
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    console.log("five:", el.nativeElement);
  }
}
