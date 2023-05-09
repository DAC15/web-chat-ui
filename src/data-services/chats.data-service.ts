import { Chat } from "../models";

export class ChatsDataService {
  private static storageChatsId = "web-chats";

  public static saveChats(chats: Chat[]): void {
    localStorage.setItem(this.storageChatsId, JSON.stringify(chats));
  }

  public static getAllChats(): Chat[] {
    return JSON.parse(localStorage.getItem(this.storageChatsId) || "[]");
  }

  public static getChatsBySenderId(senderId: string): Chat[] {
    return this.getAllChats().filter((chat) => chat.senderId === senderId);
  }
}
