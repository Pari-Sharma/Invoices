import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceDashboardComponent } from './invoice-dashboard/invoice-dashboard.component';
import { ItemDashboardComponent } from './item-dashboard/item-dashboard.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  { path: 'invoices', component: InvoicesComponent},
  {path: 'invoices-dashboard', component: InvoiceDashboardComponent},
  {path: 'item-dashboard', component: ItemDashboardComponent},
  {path: 'Dashboard', component: DashComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
