import { SwitchAccessShortcut } from "@mui/icons-material";
import { User } from "../../models";

interface ChatListItemProps {
  user: User;
  latestMessage: string;
  onClick: () => void;
  onTakeIdentity: () => void;
}

export function ChatListItem(props: ChatListItemProps) {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="shrink-0 flex items-center gap-3 px-4 h-[72px] bg-white hover:bg-slate-50 focus:bg-slate-50 focus:outline-none text-left"
    >
      <img
        className="shrink-0 w-12 h-12 rounded-full object-cover"
        src={props.user.imageSrc}
      />
      <div className="flex flex-col border-b border-solid border-slate-200 w-full pb-2">
        <h4 className="text-lg text-slate-900">{props.user.fullName}</h4>
        <span className="text-sm text-slate-500 truncate">
          {props.latestMessage}
        </span>
      </div>
      <SwitchAccessShortcut
        className="text-slate-500"
        onClick={(event) => {
          event.stopPropagation();
          props.onTakeIdentity();
        }}
      />
    </button>
  );
}
