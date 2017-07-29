import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-watch',
  templateUrl: './clock-watch.component.html',
  styleUrls: ['./clock-watch.component.scss']
})
export class ClockWatchComponent implements OnInit {
  dateNow: Date;
  hoursNow: number;
  minutesNow: number;
  secondsNow: number;

  constructor() {
    this.initCurrentWatch();
  }

   ngOnInit() {
    this.watchInterval = setInterval(() => {
      this.initCurrentWatch() 
    }, 1000);
  }

  watchInterval;

  initCurrentWatch() {
    this.dateNow = new Date;
    this.hoursNow = this.dateNow.getHours();
    this.minutesNow = this.dateNow.getMinutes();
    this.secondsNow = this.dateNow.getSeconds();
  };

}
