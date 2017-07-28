import { Component, OnInit } from '@angular/core';
import { ClockService } from '../clock.service';

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

  constructor(private clockService: ClockService) {
    this.dateNow = this.clockService.getTimeNow();
    this.hoursNow = this.dateNow.getHours();
    this.minutesNow = this.dateNow.getMinutes();
    this.secondsNow = this.dateNow.getSeconds();
  }

  ngOnInit() {
    setInterval(() => {
      this.dateNow = this.clockService.getTimeNow();
      this.hoursNow = this.dateNow.getHours();
      this.minutesNow = this.dateNow.getMinutes();
      this.secondsNow = this.dateNow.getSeconds();
    }, 1000)
  }

  timerMin: number = 0;
  timerMax: number = 60;

  watchType: string = 'watch';
  onChangedType(newWatchType: string) {
    this.watchType = newWatchType;
  }
  changeType(typeRadio) {
    this.watchType = typeRadio.value;
  }
}
