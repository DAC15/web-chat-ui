import { Chat } from "./chat";

export interface User {
  imageSrc: string;
  fullName: string;
  chat?: Chat;
}
