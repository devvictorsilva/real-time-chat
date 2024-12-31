import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { InputComponent } from './chat/input/input.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [DashboardComponent, ChatComponent, ContactComponent, InputComponent],
  imports: [
    CommonModule,
],
  exports: [DashboardComponent, ChatComponent]
})
export class SharedModule { }
