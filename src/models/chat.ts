import { User } from "./user";

export interface Chat {
  sender?: User;
  receiver?: User;
  messages: ChatMessage[];
}

export interface ChatMessage {
  author: User;
  message: string;
}
