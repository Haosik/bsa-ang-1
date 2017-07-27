import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockControlComponent } from './clock-control/clock-control.component';
import { ClockWatchComponent } from './clock-watch/clock-watch.component';
import { ClockService } from './clock.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockControlComponent,
    ClockWatchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
