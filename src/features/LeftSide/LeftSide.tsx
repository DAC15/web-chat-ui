import { useState } from "react";
import { ChatHeader, ChatListItem, ChatSearch } from "../../components";
import { Chat, User } from "../../models";

interface LeftSideProps {
  userClick: (user: User) => void;
  currentUser: User;
  users: User[];
  chats: Chat[];
}

export function LeftSide(props: LeftSideProps) {
  const [users, setUsers] = useState<User[]>(props.users);

  function handleSearch(term: string) {
    setUsers(
      props.users.filter((user) =>
        user.fullName.toLowerCase().includes(term.toLowerCase())
      )
    );
  }

  return (
    <div className="flex flex-col w-full h-full bg-[#F0F2F5]">
      <div className="shrink-0 border-b border-solid border-slate-100">
        <ChatHeader currentUser={props.currentUser} />
        <ChatSearch onSearch={handleSearch} />
      </div>
      <div className="h-full overflow-auto flex flex-col bg-white">
        {users.map((user, idx) => {
          const chat = props.chats.find((chat) =>
            chat.authors.includes(user.id)
          );
          const lastMessage =
            chat?.messages[chat?.messages.length - 1]?.message;
          return (
            <ChatListItem
              user={user}
              latestMessage={lastMessage || '"Say hi to your contact"'}
              onClick={() => props.userClick(user)}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
