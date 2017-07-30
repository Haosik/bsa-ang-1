import { Injectable } from '@angular/core';
import { ClockTimerComponent } from './clock-timer/clock-timer.component';
import { ClockCountdownComponent } from './clock-countdown/clock-countdown.component';

@Injectable()
export class WatchService {

	constructor() { }

	pretty(format: 'hours' | 'minutes' | 'seconds' | 'miliseconds', timer: number) {
		switch (format) {
			case 'hours': return Math.floor((timer / 1000 / 60 / 60) % 60);
			case 'minutes': return Math.floor((timer / 1000 / 60) % 60);
			case 'seconds': return Math.floor(timer / 1000) % 60;
			case 'miliseconds': return Math.floor(timer % 1000);
			default: break
		}
	}
}
