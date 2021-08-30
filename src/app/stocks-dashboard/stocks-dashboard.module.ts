import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';

import { StocksDashboardRoutingModule } from './stocks-dashboard-routing.module';
import { StocksDashboardComponent } from './stocks-dashboard.component';

@NgModule({
  declarations: [
    StocksDashboardComponent
  ],
  imports: [
    CommonModule,
    StocksDashboardRoutingModule,
    MatTableModule,
    MatInputModule,
    FormsModule
  ]
})
export class StocksDashboardModule { }
