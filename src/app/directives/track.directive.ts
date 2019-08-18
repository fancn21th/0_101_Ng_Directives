import { Directive, Input, HostListener } from "@angular/core";
import { TrackingService } from "../services/tracking.service";

@Directive({
  selector: "[track]"
})
export class TrackDirective {
  @Input() track;
  @HostListener("click") onClick() {
    this.tracking.log(this.track);
    console.log(this.track);
  }

  constructor(private tracking: TrackingService) {}
}
