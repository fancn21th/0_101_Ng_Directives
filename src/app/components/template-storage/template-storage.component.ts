import { Component, OnInit, ViewChild } from "@angular/core";
import { TemplateService } from "src/app/services/template.service";

@Component({
  selector: "app-template-storage",
  templateUrl: "./template-storage.component.html",
  styleUrls: ["./template-storage.component.css"]
})
export class TemplateStorageComponent implements OnInit {
  @ViewChild("header", { static: false }) headerTemplate;
  @ViewChild("footer", { static: false }) footerTemplate;

  constructor(private service: TemplateService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.service.templates.set("header", this.headerTemplate);
    this.service.templates.set("footer", this.footerTemplate);
  }
}
