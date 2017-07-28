import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
