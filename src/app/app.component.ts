import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   watchType: string = 'countdown';

  changeType(typeRadio) {
    this.watchType = typeRadio.value;
    // if (this.watchType == 'timer') {
    //   // this.initTimer();
    // } else if (this.watchType == 'countdown') {
    //   // this.initCountdown();
    // } else {
    //   this.watchInterval = setInterval(() => {
    //     this.initCurrentWatch();
    //   }, 1000)
    // }
  };
}
