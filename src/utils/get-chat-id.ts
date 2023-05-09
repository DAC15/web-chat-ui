import { Chat } from "../models";

export function getChatId(chat: Chat): string {
  return chat.authors.join(",");
}
