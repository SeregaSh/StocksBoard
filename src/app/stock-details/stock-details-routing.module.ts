import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockDetailsComponent } from './stock-details.component';

const routes: Routes = [
  { path: '', 
    children: [
      { 
        path: ':id', 
        component: StockDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockDetailsRoutingModule { }
