import { Injectable } from '@angular/core';

const FOURTEEN_DAYS = 12096e5;
const months: string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getStartEndDatePeriods() {
    const todayDay = new Date();
    const twoWeeksBeforeDay = new Date(new Date().getTime() - FOURTEEN_DAYS);

    const startDate = `${twoWeeksBeforeDay.getFullYear()}-${this.getCorrectedMonth(twoWeeksBeforeDay)}-${twoWeeksBeforeDay.getDate()}`;

    const endtDate = `${todayDay.getFullYear()}-${this.getCorrectedMonth(todayDay)}-${todayDay.getDate()}`;

    return { start: startDate, end: endtDate };
  }

  getFormattedDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);

    const formattedTime = `${date.getDate()} ${months[date.getMonth()]}`;
    
    return formattedTime;
  }

  getCorrectedMonth(date) {
    const month = date.getMonth() + 1;
    return month < 10 ? '0' + month : month;
  }
}
