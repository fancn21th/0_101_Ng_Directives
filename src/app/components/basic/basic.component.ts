import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.css"]
})
export class BasicComponent implements OnInit {
  @ViewChild("template", { static: false }) template;

  constructor(private view: ViewContainerRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.view.createEmbeddedView(this.template);
  }
}
