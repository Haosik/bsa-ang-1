import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-countdown',
  templateUrl: './clock-countdown.component.html',
  styleUrls: ['./clock-countdown.component.scss', '../clock-watch/clock-watch.component.scss']
})
export class ClockCountdownComponent implements OnInit {

  public lapTime = 0;
  public timer = 0;


  public hoursSpent = 0;
  public minutesSpent = 0;
  public secondsSpent = 0;
  public milisecondsSpent = 0;
  public currLaphours = 0;
  public currLapMinutes = 0;
  public currLapSec = 0;
  public currLapMilisec = 0;
  private active = false;
  private interval: any;
  public laps: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.active = true;
    this.interval = setInterval(() => {
      this.timer += 100;
      this.lapTime += 100;
      this.hoursSpent = Math.floor((this.timer / 1000 / 60 / 60) % 60);
      this.minutesSpent = Math.floor((this.timer / 1000 / 60) % 60);
      this.secondsSpent = Math.floor(this.timer / 1000) % 60;
      this.milisecondsSpent = Math.floor(this.timer % 1000);

      this.currLaphours = Math.floor((this.lapTime / 1000 / 60 / 60) % 60);
      this.currLapMinutes = Math.floor((this.lapTime / 1000 / 60) % 60);
      this.currLapSec = Math.floor(this.lapTime / 1000) % 60;
      this.currLapMilisec = Math.floor(this.lapTime % 1000);
    }, 100);
  }

  pause() {
    this.active = false;
    clearInterval(this.interval);
  }

  reset() {
    this.pause();
    this.timer = 0;
  }

  lap() {
    this.laps.push({
      time: this.lapTime,
      hours: this.currLaphours,
      minutes: this.currLapMinutes,
      seconds: this.currLapSec,
      miliseconds: this.currLapMilisec,
    });

    this.lapTime = 0;
  }

}
