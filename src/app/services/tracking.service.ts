import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TrackingService {
  logs: string[] = [];
  constructor() {}

  log(trackingEvent) {
    this.logs.push(trackingEvent);
    console.log(this.logs);
  }
}
