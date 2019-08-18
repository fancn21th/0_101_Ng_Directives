import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstDirectiveDirective } from './directives/first-directive.directive';
import { SecondDirectiveDirective } from './directives/second-directive.directive';
import { HomeComponent } from './componnets/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstDirectiveDirective,
    SecondDirectiveDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
