import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';



@NgModule({
  declarations: [
    DashboardMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
