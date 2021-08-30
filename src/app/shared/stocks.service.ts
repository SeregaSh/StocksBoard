import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

import { DateService } from '../shared/date.service';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(
    private http: HttpClient
  ) {}

  getStocks(url = 'https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=120') {
    return this.http.get<any>(url);
  }

  getStockDetail(ticker) {
    return this.http.get<any>(`https://api.polygon.io/vX/reference/tickers/${ticker}`);
  }

  getStockDaily(ticker, timePeriod) {
    return this.http.get<any>(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${timePeriod.start}/${timePeriod.end}?adjusted=true&sort=asc&limit=120`);
  }
}