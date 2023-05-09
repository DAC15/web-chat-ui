import { ChatWindow, WelcomeSection } from "../../components";
import { Chat } from "../../models/chat";

interface RightSideProps {
  chat?: Chat;
  senderId: string;
  onSubmit: (message: string) => void;
}

export function RightSide(props: RightSideProps) {
  if (props.chat) {
    return (
      <ChatWindow
        senderId={props.senderId}
        chat={props.chat}
        onSubmit={props.onSubmit}
      />
    );
  }
  return <WelcomeSection />;
}
