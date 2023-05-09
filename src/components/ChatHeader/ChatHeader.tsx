import { Chat, Group, MoreVert, Sync } from "@mui/icons-material";
import { User } from "../../models";

interface ChatHeaderProps {
  currentUser: User;
}

export function ChatHeader(props: ChatHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full h-[58px] px-4">
      <img
        className="rounded-full w-10 h-10 object-cover"
        src={props.currentUser.imageSrc}
      />
      <div className="flex items-center gap-3 text-slate-600">
        <Group />
        <Sync />
        <Chat />
        <MoreVert />
      </div>
    </div>
  );
}
