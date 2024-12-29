import { Component } from '@angular/core';
import { ContactResponse } from '../../core/interfaces/contact';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  contactsList: ContactResponse[] = [
    {
      id: 1,
      name: 'John Doe',
      profileUrl: 'profile.jpg',
      lastMessage: {
        message: 'Hello, how are you?',
        sent_at: '13:34'
      }
    },
    {
      id: 2,
      name: 'Teste 2',
      profileUrl: 'profile.jpg',
      lastMessage: {
        message: 'Foto',
        sent_at: '16:34'
      }
    },
    {
      id: 3,
      name: 'Nome 4',
      profileUrl: 'profile.jpg',
      lastMessage: {
        message: 'Oieee',
        sent_at: '12:34'
      }
    },
  ]
}
