import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstDirective } from "./directives/first.directive";
import { SecondDirective } from "./directives/second.directive";
import { ThreeDirective } from "./directives/three.directive";
import { HomeComponent } from "./components/home/home.component";
import { TrackDirective } from "./directives/track.directive";
import { TrackingService } from "./services/tracking.service";
import { OnlineDirective } from "./directives/online.directive";
import { OnlineService } from "./services/online.service";
import { BasicComponent } from "./components/basic/basic.component";
import { AnotherTemplateCompComponent } from "./components/another-template-comp/another-template-comp.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstDirective,
    SecondDirective,
    ThreeDirective,
    TrackDirective,
    OnlineDirective,
    BasicComponent,
    AnotherTemplateCompComponent
  ],
  imports: [BrowserModule],
  providers: [TrackingService, OnlineService],
  bootstrap: [AppComponent]
})
export class AppModule {}
