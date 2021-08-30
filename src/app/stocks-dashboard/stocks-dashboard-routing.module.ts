import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocksDashboardComponent } from './stocks-dashboard.component';

const routes: Routes = [
  { path: '', component: StocksDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksDashboardRoutingModule { }
