import { Directive, Input, HostListener } from "@angular/core";
import { TrackingService } from "../services/tracking-service.service";

@Directive({
  selector: "[track]"
})
export class TrackDirective {
  @Input() track;
  @HostListener("click") onClick() {
    this.trackingService.log(this.track);
    console.log(this.track);
  }

  constructor(private trackingService: TrackingService) {}
}
