import { Component, Input } from '@angular/core';
import { ContactResponse } from '../../core/interfaces/contact';

@Component({
  selector: 'chat-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @Input() contacts: ContactResponse[] = [];
}
