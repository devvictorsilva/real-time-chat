import { Component, Input } from '@angular/core';
import { ContactResponse } from '../../../core/interfaces/contact';

@Component({
  selector: 'chat-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() contact!: ContactResponse
}
