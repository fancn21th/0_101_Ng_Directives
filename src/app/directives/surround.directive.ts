import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";
import { TemplateService } from "../services/template.service";

@Directive({
  selector: "[surround]"
})
export class SurroundDirective {
  constructor(
    private service: TemplateService,
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.service.templates.get("header"));
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.service.templates.get("footer"));
  }
}
