import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockControlComponent } from './clock-control/clock-control.component';
import { ClockWatchComponent } from './clock-watch/clock-watch.component';
import { ClockTimerComponent } from './clock-timer/clock-timer.component';
import { ClockCountdownComponent } from './clock-countdown/clock-countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockControlComponent,
    ClockWatchComponent,
    ClockTimerComponent,
    ClockCountdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
