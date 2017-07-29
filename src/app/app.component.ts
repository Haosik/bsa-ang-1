import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   watchType: string = 'watch';

  changeType(typeRadio) {
    this.watchType = typeRadio.value;
  };
}
