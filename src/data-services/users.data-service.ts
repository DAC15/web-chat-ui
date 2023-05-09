import { User } from "../models";

export class UsersDataService {
  public static getUsers(): User[] {
    const user: User = {
      fullName: "Indiana Jones",
      imageSrc:
        "https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Portrait-Photographers-Yousuf-Karsh-King.jpg",
    };

    return [
      {
        fullName: "Dacian Rusu",
        imageSrc:
          "https://mymodernmet.com/wp/wp-content/uploads/2018/10/Mou-Aysha-portrait-photography-3.jpg",
        chat: {
          messages: [{ author: user, message: "Hi, how you doing" }],
        },
      },
      {
        fullName: "John Travolta",
        imageSrc:
          "https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Portrait-Photographers-Yousuf-Karsh-King.jpg",
        chat: {
          messages: [{ author: user, message: "Let's go out " }],
        },
      },
      {
        fullName: "Mia Iovason",
        imageSrc:
          "https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Portrait-Photographers-Yousuf-Karsh-King.jpg",
      },
    ];
  }
}
