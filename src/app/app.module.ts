import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstDirectiveDirective } from "./directives/first-directive.directive";
import { SecondDirectiveDirective } from "./directives/second-directive.directive";
import { HomeComponent } from "./components/home/home.component";
import { TrackDirective } from "./directives/track.directive";
import { TrackingService } from "./services/tracking-service.service";

@NgModule({
  declarations: [
    AppComponent,
    FirstDirectiveDirective,
    SecondDirectiveDirective,
    TrackDirective,
    HomeComponent
  ],
  imports: [BrowserModule],
  providers: [TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
