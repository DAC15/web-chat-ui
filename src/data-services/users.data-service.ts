import { User } from "../models";

export class UsersDataService {
  public static getUsers(): User[] {
    return [
      {
        id: "dacian-rusu",
        fullName: "Dacian Rusu",
        imageSrc:
          "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg",
      },
      {
        id: "leonardo-dicaprio",
        fullName: "Leonardo Dicaprio",
        imageSrc:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1197345888.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
      },
      {
        id: "john-travolta",
        fullName: "John Travolta",
        imageSrc:
          "https://media.allure.com/photos/5df93f4012b68a0008506f36/16:9/w_2560%2Cc_limit/john-travolta-lede.jpg",
      },
      {
        id: "arnold-schvarzeneger",
        fullName: "Arnold Schvarzeneger",
        imageSrc:
          "https://cdn.britannica.com/11/222411-050-D3D66895/American-politician-actor-athlete-Arnold-Schwarzenegger-2016.jpg",
      },
    ];
  }
}
