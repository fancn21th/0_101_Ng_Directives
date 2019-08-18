import {
  Directive,
  ElementRef,
  ViewContainerRef,
  TemplateRef
} from "@angular/core";

@Directive({
  selector: "[three]"
})
export class ThreeDirective {
  constructor(
    private el: ElementRef,
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    console.log("three:", el.nativeElement);
  }

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
  }
}
