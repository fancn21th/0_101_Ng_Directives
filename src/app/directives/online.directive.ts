import { Directive, HostBinding } from "@angular/core";
import { OnlineService } from "../services/online.service";

@Directive({
  selector: "[online]"
})
export class OnlineDirective {
  @HostBinding("disabled") get disabled() {
    return this.online.online;
  }

  constructor(private online: OnlineService) {}
}
