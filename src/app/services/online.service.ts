import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OnlineService {
  online: boolean = false;
  constructor() {
    setInterval(() => (this.online = Math.random() > 0.5), 1000);
  }
}
