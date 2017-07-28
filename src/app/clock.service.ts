import { Injectable } from '@angular/core';

@Injectable()
export class ClockService {

  constructor() { }

  getTimeNow = () => {
    return new Date;
  }

}
