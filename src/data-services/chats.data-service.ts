import { Chat } from "../models/chat";

export class ChatsDataService {
  public static getAllChats(): Chat[] {
    return [
      {
        senderId: "dacian-rusu",
        receiverId: "leonardo-dicaprio",
        messages: [
          { authorId: "leonardo-dicaprio", message: "Hi Dacian, how are you?" },
          {
            authorId: "dacian-rusu",
            message: "Hi Leo, i cant talk right now, coding...",
          },
        ],
      },
    ];
  }

  public static getChatsBySenderId(senderId: string): Chat[] {
    return this.getAllChats().filter((chat) => chat.senderId === senderId);
  }
}
