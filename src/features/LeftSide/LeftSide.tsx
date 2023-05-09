import { ChatHeader, ChatListItem, ChatSearch } from "../../components";

const chats = [1, 2, 3];

export function LeftSide() {
  function handleChatListItemClick(chat: number) {
    console.log("chat clicked", chat);
  }

  function handleSearch(term: string) {
    console.log("search here with", term);
  }

  return (
    <div className="flex flex-col w-full h-full bg-[#F0F2F5]">
      <div className="shrink-0 border-b border-solid border-slate-100">
        <ChatHeader />
        <ChatSearch onSearch={handleSearch} />
      </div>
      <div className="h-full overflow-auto flex flex-col bg-white">
        {chats.map((el, idx) => (
          <ChatListItem onClick={() => handleChatListItemClick(el)} key={idx} />
        ))}
      </div>
    </div>
  );
}
