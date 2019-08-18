import {
  Directive,
  Input,
  ElementRef,
  ViewContainerRef,
  TemplateRef
} from "@angular/core";

@Directive({
  selector: "[six]"
})
export class SixDirective {
  @Input() set sixFrom({ one, two, three }) {
    this.view.clear();
    this.view.createEmbeddedView(this.template, {
      $implicit: one
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: two
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: three
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
