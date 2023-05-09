import { Chat } from "../models/chat";

export class ChatsDataService {
  public static getAllChats(): Chat[] {
    return JSON.parse(localStorage.getItem("chats") || "[]");
  }

  public static getChatsBySenderId(senderId: string): Chat[] {
    return this.getAllChats().filter((chat) => chat.senderId === senderId);
  }
}
