import { useState } from "react";
import { ChatsDataService, UsersDataService } from "./data-services";
import { LeftSide, RightSide } from "./features";
import { Chat, User } from "./models";
import { getChatId } from "./utils";

function App() {
  const [[currentUser, ...users], setUsers] = useState<User[]>(
    UsersDataService.getUsers()
  );
  const [chats, setChats] = useState<Chat[]>(
    ChatsDataService.getChatsBySenderId(currentUser.id)
  );
  const [chat, setChat] = useState<Chat | undefined>(undefined);

  function handleUserClick(user: User): void {
    const clickedChat = chats.find((el) => el.authors.includes(user.id));
    const newChat: Chat = {
      authors: [currentUser.id, user.id],
      messages: [],
    };
    setChat(clickedChat || newChat);
  }

  function handleUserTakeIdentityClick(user: User): void {
    const newUsers = [currentUser, ...users].filter((el) => el.id !== user.id);
    setUsers([user, ...newUsers]);
    setChats(ChatsDataService.getChatsBySenderId(user.id));
  }

  function handleCreateUserClick(): void {
    setUsers([currentUser, ...users, UsersDataService.getRandomUser()]);
  }

  function sendMessageInChat(message: string): void {
    if (chat) {
      const newChat = {
        ...chat,
        messages: [
          ...chat.messages,
          { message, authorId: currentUser.id },
          {
            authorId: chat.authors.find((el) => el !== currentUser.id)!,
            message: `${message} ❤️`,
          },
        ],
      };
      const newChats = [
        ...chats.filter((el) => getChatId(el) !== getChatId(newChat)),
        newChat,
      ];

      setChat(newChat);
      setChats(newChats);
      ChatsDataService.saveChats(newChats);
    }
  }

  console.log("render with users", users);

  return (
    <div className="w-screen h-screen relative">
      <div className="bg-[#00A884] h-[127px] w-full"></div>
      <div className="bg-[#E2E1DE] h-[calc(100vh-127px)]"></div>
      <div className="absolute top-4 bottom-4 left-1/2 transform -translate-x-1/2 max-w-[1500px] w-full grid grid-cols-12 overflow-hidden">
        <div className="col-span-4 border-r border-solid border-slate-100 overflow-hidden">
          <LeftSide
            currentUser={currentUser}
            chats={chats}
            createUserClick={handleCreateUserClick}
            users={users}
            userClick={handleUserClick}
            userTakeIdentityClick={handleUserTakeIdentityClick}
          />
        </div>
        <div className="col-span-8 overflow-hidden">
          <RightSide
            senderId={currentUser.id}
            chat={chat}
            onSubmit={sendMessageInChat}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
