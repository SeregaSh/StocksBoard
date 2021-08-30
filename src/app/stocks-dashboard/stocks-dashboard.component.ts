import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { Stock } from '../shared/stock.model';
import { StocksService } from '../shared/stocks.service';

@Component({
  selector: 'app-stocks-dashboard',
  templateUrl: './stocks-dashboard.component.html',
  styleUrls: ['./stocks-dashboard.component.css']
})
export class StocksDashboardComponent implements OnInit {
  stocks: MatTableDataSource<Stock>;
  searchText: string = '';
  nextPageUrl: string = '';
  displayedColumns: string[] = ['stocks-ticker', 'stocks-name', 'stocks-market', 'stocks-currency', 'stocks-status'];

  constructor(
    private stockService: StocksService
  ) { }

  ngOnInit(): void {

    this.stockService.getStocks().subscribe((data) => {
      this.nextPageUrl = data.next_url;
      this.stocks = new MatTableDataSource(data.results);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.stocks.filter = filterValue.trim().toLowerCase();
  }

  goToNextPage() {
    this.stockService.getStocks().subscribe((data) => {
      this.nextPageUrl = data.next_url;
      this.stocks = new MatTableDataSource(data.results);
    });
  }
}
