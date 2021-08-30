import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/stocks-dashboard', pathMatch: 'full' },
  { path: 'stocks-dashboard', 
    loadChildren: () => import('./stocks-dashboard/stocks-dashboard.module')
    .then((m) => {
      return m.StocksDashboardModule;
  }) },
  {
    path: 'stock-details',
    loadChildren: () => import('./stock-details/stock-details.module')
    .then((m) => {
      return m.StockDetailsModule
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
