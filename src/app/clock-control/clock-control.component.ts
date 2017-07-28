import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ClockService } from '../clock.service';
// import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clock-control',
  templateUrl: './clock-control.component.html',
  styleUrls: ['./clock-control.component.scss']
})
export class ClockControlComponent implements OnInit {

  constructor() { }

  @Output() onChangedType = new EventEmitter<string>();
  watchType = 'watch';

  ngOnInit() {
  }

}
