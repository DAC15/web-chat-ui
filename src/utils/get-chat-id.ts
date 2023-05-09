import { Chat } from "../models";

export function getChatId(chat: Chat): string {
  return JSON.stringify(chat);
}
