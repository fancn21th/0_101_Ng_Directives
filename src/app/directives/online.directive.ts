import { Directive, HostBinding } from "@angular/core";
import { OnlineService } from "../services/online.service";

@Directive({
  selector: "[online]"
})
export class OnlineDirective {
  @HostBinding("disabled") get disabled2() {
    return this.online.online;
  }

  @HostBinding("class.offline") get offline2() {
    return this.online.online;
  }

  constructor(private online: OnlineService) {}
}
