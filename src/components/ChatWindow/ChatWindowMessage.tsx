import { ChatMessage } from "../../models";

interface ChatWindowMessageProps {
  message: ChatMessage;
  isSender: boolean;
}

export function ChatWindowMessage(props: ChatWindowMessageProps) {
  const background = props.isSender ? "#D9FDD3" : "white";
  const alignment = props.isSender ? "justify-end" : "justify-start";

  return (
    <div className={`flex ${alignment}`}>
      <div
        style={{ background }}
        className="max-w-[500px] px-3 py-1 flex items-center text-slate-900 rounded"
      >
        {props.message.message}
      </div>
    </div>
  );
}
