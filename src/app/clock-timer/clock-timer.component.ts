import { Component, OnInit } from '@angular/core';
import { WatchService } from '../watch.service';

@Component({
	selector: 'app-clock-timer',
	templateUrl: './clock-timer.component.html',
	styleUrls: ['./clock-timer.component.scss', '../clock-watch/clock-watch.component.scss']
})
export class ClockTimerComponent implements OnInit {

	constructor(private watchService: WatchService) { }

	timerMin = 0;
	timerMax = 120;
	public active = false;
	public time = 0;
	public timeLeft = 0;
	private interval: any;

	public secondsLeft = 0;
	public minutesLeft = 0;
	public hoursLeft = 0;

	ngOnInit() { }

	start() {
		if (this.timeLeft > 0) {
			this.active = true;
			this.interval = setInterval(() => {
				this.timeLeft = this.timeLeft - 1000;
				this.secondsLeft = this.watchService.pretty('seconds', this.timeLeft);
				this.minutesLeft = this.watchService.pretty('minutes', this.timeLeft);
				this.hoursLeft = this.watchService.pretty('hours', this.timeLeft);

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
		this.secondsLeft = Math.floor((this.time * 60) % 60);
		this.minutesLeft = Math.floor(this.time % 60);
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
