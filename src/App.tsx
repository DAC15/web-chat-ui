import { UsersDataService } from "./data-services";
import { LeftSide, RightSide } from "./features";
import { User } from "./models";

function App() {
  const users = UsersDataService.getUsers();

  function handleUserClick(user: User): void {
    console.log("user was clicked", user);
  }

  return (
    <div className="w-screen h-screen relative">
      <div className="bg-[#00A884] h-[127px] w-full"></div>
      <div className="bg-[#E2E1DE] h-[calc(100vh-127px)]"></div>
      <div className="absolute top-4 bottom-4 left-1/2 transform -translate-x-1/2 max-w-[1500px] w-full grid grid-cols-12">
        <div className="col-span-4 border-r border-solid border-slate-100">
          <LeftSide users={users} userClick={handleUserClick} />
        </div>
        <div className="col-span-8">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
