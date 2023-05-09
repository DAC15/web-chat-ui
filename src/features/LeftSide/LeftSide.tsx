import { ChatHeader, ChatListItem, ChatSearch } from "../../components";

const chats = [1, 2, , 3];
export function LeftSide() {
  return (
    <div className="w-full h-full bg-[#F0F2F5]">
      <ChatHeader />
      <ChatSearch />
      <div className="flex flex-col">
        {chats.map((el, idx) => (
          <ChatListItem key={idx} />
        ))}
      </div>
    </div>
  );
}
