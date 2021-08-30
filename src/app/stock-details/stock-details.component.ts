import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

import { StocksService } from '../shared/stocks.service';
import { Stock } from '../shared/stock.model';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  id: string;
  stock: Stock = {
    ticker: '',
    name: '',
    active: false,
    market: '',
    currency_name: ''
  };
  chartData: any;

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);

  constructor(
    private activeRoute: ActivatedRoute,
    private stockService: StocksService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      map(params => params['id']),
      switchMap(id => {
        this.id = id;
        const detailsRequest = this.stockService.getStockDetail(id);
        const chartRequest = this.stockService.getStockDaily(id, this.dateService.getStartEndDatePeriods());
        return forkJoin([detailsRequest, chartRequest]);
      })
    )
    .subscribe(([details, chartData]) => {
      this.stock = details.results;
      this.chartData = chartData && chartData.results ? this.transformChartData(this.stock.ticker, chartData.results) : [];
    });
  }

  private transformChartData(ticker, serverData) {
    
    return [{
      "name": ticker,
      "series": serverData.map(({ h, t }) => {
        return { 
          name: this.dateService.getFormattedDateFromTimestamp(t), 
          value: h } ;
      })
    }]
  }
}
