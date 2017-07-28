import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-countdown',
  templateUrl: './clock-countdown.component.html',
  styleUrls: ['./clock-countdown.component.scss']
})
export class ClockCountdownComponent implements OnInit {

  public lapTime = 0;
  public timer = 0;
  private active = false;
  private interval: any;
  public laps: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  start(){
    this.active = true;
    this.interval = setInterval(() => {
      this.timer += 100;
      this.lapTime += 100;
    }, 100);
  }

  pause(){
    this.active = false;
    clearInterval(this.interval);
  }

  reset(){
    this.pause();
    this.timer = 0;
  }

  lap(){
    this.laps.push({
      time: this.lapTime
    });

    this.lapTime = 0;
  }

}
