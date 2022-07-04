import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { InvoiceDashboardComponent } from './invoice-dashboard/invoice-dashboard.component';
import { ItemDashboardComponent } from './item-dashboard/item-dashboard.component';
import { DashComponent } from './dash/dash.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    InvoiceDashboardComponent,
    ItemDashboardComponent,
    DashComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
