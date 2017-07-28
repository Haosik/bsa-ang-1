import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-timer',
  templateUrl: './clock-timer.component.html',
  styleUrls: ['./clock-timer.component.scss']
})
export class ClockTimerComponent implements OnInit {

  timerMin: number = 0;
  timerMax: number = 60;
  public active = false;
  public time = 0;
  public timeLeft = 0;
  private interval: any;
  constructor() { }

  ngOnInit() {
  }
  
  start(){
    this.active = true;
    this.interval = setInterval(() => {
      this.timeLeft = this.timeLeft - 1000;
    }, 1000);
  }

  pause(){
    this.active = false;
    clearInterval(this.interval);
  }

  setTimer(){
    this.timeLeft = this.time * 1000;
  }

  reset(){
    this.pause();
    this.timeLeft = 0;
    this.time = 0;
  }

}
