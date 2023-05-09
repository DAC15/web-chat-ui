import { ChatWindow, WelcomeSection } from "../../components";
import { Chat } from "../../models/chat";

interface RightSideProps {
  chat?: Chat;
  senderId?: string;
}

export function RightSide(props: RightSideProps) {
  if (props.chat && props.senderId) {
    return <ChatWindow senderId={props.senderId} chat={props.chat} />;
  }
  return <WelcomeSection />;
}
