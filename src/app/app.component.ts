import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  messages = {
    one: "one",
    two: "two",
    three: "three"
  };
  constructor() {
    setInterval(() => {
      this.messages =
        Math.random() > 0.5
          ? {
              ...this.messages,
              one: "one",
              two: "two",
              three: "three"
            }
          : {
              ...this.messages,
              one: "1",
              two: "2",
              three: "3"
            };
    }, 1000);
  }
}
