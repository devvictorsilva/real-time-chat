import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [DashboardComponent, ChatComponent, ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent]
})
export class SharedModule { }
