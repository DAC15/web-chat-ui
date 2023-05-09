export interface Chat {
  senderId: string;
  receiverId: string;
  messages: ChatMessage[];
}

export interface ChatMessage {
  authorId: string;
  message: string;
}
