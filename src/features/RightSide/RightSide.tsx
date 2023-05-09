import { ChatWindow, WelcomeSection } from "../../components";
import { Chat } from "../../models/chat";

interface RightSideProps {
  chat?: Chat;
}

export function RightSide(props: RightSideProps) {
  if (props.chat) {
    return <ChatWindow />;
  }
  return <WelcomeSection />;
}
