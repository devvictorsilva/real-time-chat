import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent, ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent]
})
export class SharedModule { }
