export interface ContactResponse {
  id: number;
  profileUrl: string;
  name: string;
  lastMessage: ContactLastMessage;
}

interface ContactLastMessage {
  message: string;
  sent_at: string;
}
