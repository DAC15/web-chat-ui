import { useState } from "react";

interface ChatWindowInputProps {
  onSubmit: (message: string) => void;
}

export function ChatWindowInput(props: ChatWindowInputProps) {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full h-full bg-[#F0F2F5] px-12 py-3">
      <input
        className="w-full h-[42px] rounded px-3 bg-white focus:outline-none"
        type="text"
        placeholder="Send your message here..."
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            props.onSubmit(message);
          }
        }}
      />
    </div>
  );
}
