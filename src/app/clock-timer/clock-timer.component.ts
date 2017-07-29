import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-timer',
  templateUrl: './clock-timer.component.html',
  styleUrls: ['./clock-timer.component.scss', '../clock-watch/clock-watch.component.scss']
})
export class ClockTimerComponent implements OnInit {

  timerMin: number = 0;
  timerMax: number = 120;
  public active = false;
  public time = 0;
  public timeLeft = 0;
  private interval: any;
  constructor() { }
  private secondsLeft = 0;
  private minutesLeft = 0;
  private hoursLeft = 0;


  ngOnInit() {
  }

  start() {
    if (this.timeLeft > 0) {
      this.active = true;
      this.interval = setInterval(() => {
        this.timeLeft = this.timeLeft - 1000;
        this.secondsLeft = (this.timeLeft / 1000) % 60;
        this.minutesLeft = Math.floor((this.timeLeft / 1000 / 60) % 60);
        this.hoursLeft = Math.floor((this.timeLeft / 1000 / 60/ 60) % 60);
        if (this.timeLeft <= 0) {
          this.pause();
          // Some beautiful notification )))
          alert('ALARM! xD');
          this.reset();
        }
      }, 1000);
    }
  }

  pause() {
    this.active = false;
    clearInterval(this.interval);
  }

  setTimer() {
    this.pause();
    this.timeLeft = this.time * 60000;
    this.secondsLeft = (this.time * 60) % 60;
    this.minutesLeft = this.time % 60;
    this.hoursLeft = Math.floor((this.time / 60) % 60);
  }

  reset() {
    this.pause();
    this.timeLeft = 0;
    this.time = 0;
    this.secondsLeft = 0;
    this.minutesLeft = 0;
    this.hoursLeft = 0;
  }

}
