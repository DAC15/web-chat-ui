import { Chat } from "../../models/chat";
import { ChatWindowInput } from "./ChatWindowInput";
import { ChatWindowMessage } from "./ChatWindowMessage";

interface ChatWindowProps {
  chat: Chat;
  senderId: string;
  onSubmit: (message: string) => void;
}

export function ChatWindow(props: ChatWindowProps) {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover bg-center flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(https://support.delta.chat/uploads/default/768ded5ffbef90faa338761be1c5633d91cc35e3)`,
      }}
    >
      <div className="px-12 py-4 h-full overflow-auto pb-20 flex flex-col gap-2 justify-end">
        {props.chat.messages.map((message) => {
          const isSender = message.authorId === props.senderId;
          return <ChatWindowMessage message={message} isSender={isSender} />;
        })}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <ChatWindowInput onSubmit={props.onSubmit} />
      </div>
    </div>
  );
}
