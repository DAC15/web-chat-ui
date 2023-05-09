export interface Chat {
  authors: string[];
  messages: ChatMessage[];
}

export interface ChatMessage {
  authorId: string;
  message: string;
}
