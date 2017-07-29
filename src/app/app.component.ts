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
  };
}
