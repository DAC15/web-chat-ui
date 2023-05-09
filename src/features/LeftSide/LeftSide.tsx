import { ChatHeader, ChatListItem, ChatSearch } from "../../components";

const chats = [1, 2, 3];

export function LeftSide() {
  function handleSearch(term: string) {
    console.log("search here with", term);
  }

  return (
    <div className="w-full h-full bg-[#F0F2F5]">
      <ChatHeader />
      <ChatSearch onSearch={handleSearch} />
      <div className="flex flex-col mt-10">
        {chats.map((el, idx) => (
          <ChatListItem key={idx} />
        ))}
      </div>
    </div>
  );
}
