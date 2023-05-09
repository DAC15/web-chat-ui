import { Chat, Group, MoreVert, Sync } from "@mui/icons-material";

export function ChatHeader() {
  return (
    <div className="flex justify-between items-center w-full h-[72px] p-4">
      <img
        className="rounded-full w-10 h-10 object-cover"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
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
