import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatTooltipModule} from '@angular/material/tooltip';

import { StockDetailsRoutingModule } from './stock-details-routing.module';
import { StockDetailsComponent } from './stock-details.component';
import { StockChartComponent } from './stock-chart/stock-chart.component';


@NgModule({
  declarations: [StockDetailsComponent, StockChartComponent],
  imports: [
    CommonModule,
    StockDetailsRoutingModule,
    NgxChartsModule,
    MatTooltipModule
  ]
})
export class StockDetailsModule { }
