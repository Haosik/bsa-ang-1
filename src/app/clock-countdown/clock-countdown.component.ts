import { Component, OnInit } from '@angular/core';
import { WatchService } from '../watch.service';

@Component({
	selector: 'app-clock-countdown',
	templateUrl: './clock-countdown.component.html',
	styleUrls: ['./clock-countdown.component.scss', '../clock-watch/clock-watch.component.scss']
})
export class ClockCountdownComponent implements OnInit {

	constructor(private watchService: WatchService) { }

	ngOnInit() { }

	public lapTime = 0;
	public timer = 0;

	public hoursSpent = 0;
	public minutesSpent = 0;
	public secondsSpent = 0;
	public milisecondsSpent = 0;
	public currLaphours = 0;
	public currLapMinutes = 0;
	public currLapSec = 0;
	public currLapMilisec = 0;
	private active = false;
	private interval: any;
	public laps: any[] = [];

	setSpentTime() {
		this.hoursSpent = this.watchService.pretty('hours', this.timer);
		this.minutesSpent = this.watchService.pretty('minutes', this.timer);
		this.secondsSpent = this.watchService.pretty('seconds', this.timer);
		this.milisecondsSpent = this.watchService.pretty('miliseconds', this.timer);
	}
	setCurrLapTime() {
		this.currLaphours = this.watchService.pretty('hours', this.lapTime);
		this.currLapMinutes = this.watchService.pretty('minutes', this.lapTime);
		this.currLapSec = this.watchService.pretty('seconds', this.lapTime);
		this.currLapMilisec = this.watchService.pretty('miliseconds', this.lapTime);
	}
	start() {
		this.active = true;
		this.interval = setInterval(() => {
			this.timer += 100;
			this.lapTime += 100;
			this.setSpentTime();
			this.setCurrLapTime();
		}, 100);
	}

	pause() {
		this.active = false;
		clearInterval(this.interval);
	}

	reset() {
		this.pause();
		this.timer = 0;
		this.lapTime = 0;
		clearInterval(this.interval);
		this.setSpentTime();
		this.setCurrLapTime();
		this.laps = [];
	}

	prevLapTime: number = 0;
	prevLapHours: number = 0;
	prevLapMinutes: number = 0;
	prevLapSeconds: number = 0;
	prevLapMiliseconds: number = 0;
	avgLapTime: number = 0;
	avgLapHours: number = 0;
	avgLapMinutes: number = 0;
	avgLapSeconds: number = 0;
	avgLapMiliseconds: number = 0;
	slowerLap: boolean = false;

	setAvgLapTime() {
		let laps = this.laps;
		let totalTime = 0;
		laps.forEach((el, ind) => {
			totalTime += el.lapObj.time;
		});
		this.avgLapTime = Math.round(totalTime / laps.length);
		this.avgLapHours = this.watchService.pretty('hours', this.avgLapTime);
		this.avgLapMinutes = this.watchService.pretty('minutes', this.avgLapTime);
		this.avgLapSeconds = this.watchService.pretty('seconds', this.avgLapTime);
		this.avgLapMiliseconds = this.watchService.pretty('miliseconds', this.avgLapTime);
	}

	lap() {
		if (this.prevLapTime > this.lapTime || this.laps.length < 1) {
			this.slowerLap = false;
		} else {
			this.slowerLap = true;
		};
		const lapObj = {
			time: this.lapTime,
			hours: this.currLaphours,
			minutes: this.currLapMinutes,
			seconds: this.currLapSec,
			miliseconds: this.currLapMilisec,
			prevLapTime: this.prevLapTime,
			prevLapHours: this.prevLapHours,
			prevLapMinutes: this.prevLapMinutes,
			prevLapSeconds: this.prevLapSeconds,
			prevLapMiliseconds: this.prevLapMiliseconds,
			slowerLap: this.slowerLap
		}
		this.laps.push({ lapObj });
		this.setAvgLapTime();

		this.prevLapTime = this.lapTime;
		this.prevLapHours = this.currLaphours;
		this.prevLapMinutes = this.currLapMinutes;
		this.prevLapSeconds = this.currLapSec;
		this.prevLapMiliseconds = this.currLapMilisec;

		this.lapTime = 0;
	}

}
