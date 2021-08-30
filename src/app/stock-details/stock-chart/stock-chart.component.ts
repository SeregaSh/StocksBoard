import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const stockChartOptions = {
  legend: false,
  showLabels: true,
  animations: true,
  xAxis: true,
  yAxis: true,
  showYAxisLabel: false,
  showXAxisLabel: false,
  timeline: false,
  view: [700, 300]
};

@Component({
  selector: 'app-stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {

  @Input() data: any;

  chartOptions = stockChartOptions;

  constructor() {}

  ngOnInit(): void {}

}
