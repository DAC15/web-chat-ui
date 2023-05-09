import { Chat } from "../../models/chat";
import { ChatWindowMessage } from "./ChatWindowMessage";

interface ChatWindowProps {
  chat: Chat;
  senderId: string;
}

export function ChatWindow(props: ChatWindowProps) {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover bg-center px-12 py-4"
      style={{
        backgroundImage: `url(https://support.delta.chat/uploads/default/768ded5ffbef90faa338761be1c5633d91cc35e3)`,
      }}
    >
      <div className="flex flex-col gap-2">
        {props.chat.messages.map((message) => {
          const isSender = message.authorId === props.senderId;
          return <ChatWindowMessage message={message} isSender={isSender} />;
        })}
      </div>
    </div>
  );
}
