import { useState } from "react";
import { UsersDataService } from "./data-services";
import { ChatsDataService } from "./data-services/chats.data-service";
import { LeftSide, RightSide } from "./features";
import { User } from "./models";
import { Chat } from "./models/chat";

function App() {
  const [currentUser, ...users] = UsersDataService.getUsers();
  const chats = ChatsDataService.getChatsBySenderId(currentUser.id);

  const [chat, setChat] = useState<Chat | undefined>(undefined);

  function handleUserClick(user: User): void {
    const clickedChat = chats.find((el) => el.receiverId === user.id);
    const newChat: Chat = {
      senderId: currentUser.id,
      receiverId: user.id,
      messages: [],
    };
    setChat(clickedChat || newChat);
  }

  function sendMessageInChat(message: string): void {
    if (chat) {
      setChat({
        ...chat,
        messages: [
          ...chat?.messages,
          { message, authorId: currentUser.id },
          { authorId: chat.receiverId, message: `${message} ❤️` },
        ],
      });
    }
  }

  return (
    <div className="w-screen h-screen relative">
      <div className="bg-[#00A884] h-[127px] w-full"></div>
      <div className="bg-[#E2E1DE] h-[calc(100vh-127px)]"></div>
      <div className="absolute top-4 bottom-4 left-1/2 transform -translate-x-1/2 max-w-[1500px] w-full grid grid-cols-12 overflow-hidden">
        <div className="col-span-4 border-r border-solid border-slate-100 overflow-hidden">
          <LeftSide chats={chats} users={users} userClick={handleUserClick} />
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
