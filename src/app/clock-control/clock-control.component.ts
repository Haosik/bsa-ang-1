import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
// import { NgModel, FormsModule } from '@angular/forms';

@Component({
	selector: 'app-clock-control',
	templateUrl: './clock-control.component.html',
	styleUrls: ['./clock-control.component.scss']
})
export class ClockControlComponent implements OnInit {

	constructor() { }

	@Output() changedType = new EventEmitter();
	watchType = 'watch';

	ngOnInit() {
		this.changedType.emit(this.watchType);
	}

	changeType(event) {
		this.watchType = event.target.value;
		this.changedType.emit(event.target.value);
	}

}
