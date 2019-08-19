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
import { FourDirective } from "./directives/four.directive";
import { FiveDirective } from "./directives/five.directive";
import { SixDirective } from "./directives/six.directive";
import { TemplateService } from "./services/template.service";
import { TemplateStorageComponent } from './components/template-storage/template-storage.component';
import { SurroundDirective } from './directives/surround.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstDirective,
    SecondDirective,
    ThreeDirective,
    FourDirective,
    FiveDirective,
    SixDirective,
    TrackDirective,
    OnlineDirective,
    BasicComponent,
    AnotherTemplateCompComponent,
    TemplateStorageComponent,
    SurroundDirective
  ],
  imports: [BrowserModule],
  providers: [TrackingService, OnlineService, TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
