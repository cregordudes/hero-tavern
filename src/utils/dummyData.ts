import bannerBg from "../assets/bannerBg.jpg";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.jpg";
import game3 from "../assets/game8.jpg";
import game4 from "../assets/game4.jpg";
import game5 from "../assets/game5.jpg";
import game6 from "../assets/game6.jpg";
import game7 from "../assets/game7.jpg";
import DefaultUser from "../assets/defaultUser.svg";

import {
   BannerProps,
   GameCardProps,
   GameMasterType,
   RoomType,
   UserType,
} from "../types";

export const gameList: GameCardProps[] = [
   {
      id: 1,
      title: "League of legends",
      online: "4.4k",
      image: game1,
      link: "/game/1",
      tags: ["MOBA"],
   },
   {
      id: 2,
      title: "PathFinder",
      online: "1.2k",
      image: game2,
      link: "/game/2",
      tags: ["Role Play", "Tactics"],
   },
   {
      id: 3,
      title: "Doka 2",
      online: "5.7k",
      image: game3,
      link: "/game/3",
      tags: ["MOBA"],
   },
   {
      id: 4,
      title: "Majong",
      online: "125",
      image: game4,
      link: "/game/4",
      tags: ["Chess", "Tactics"],
   },
];

export const bannerList: BannerProps[] = [
   {
      id: 1,
      title: "League of legends",
      users: "4.4k",
      image: bannerBg,
      links: ["/game/1", "/game/1/about"],
   },
   {
      id: 2,
      title: "Majong",
      users: "3.5k",
      image: game5,
      links: ["/game/2", "/game/2/about"],
   },
   {
      id: 3,
      title: "Doka 2",
      users: "28.4k",
      image: game6,
      links: ["/game/3", "/game/3/about"],
   },
   {
      id: 4,
      title: "Another game",
      users: "14.4k",
      image: game7,
      links: ["/game/4", "/game/4/about"],
   },
];

export const user1: UserType = {
   id: "1",
   username: "Admin",
   email: "admin@tavern",
   role: "Admin",
   token: "token",
   avatar: "",
};

export const user2: UserType = {
   id: "2",
   username: "Egor",
   email: "Egor@tavern",
   role: "user",
   token: "token",
   avatar: "",
};

export const roomList: RoomType[] = [
   {
      id: "1",
      name: "Path to glory",
      image: bannerBg,
      link: "/room/1",
      creator: user1,
      users: [user1, user2, user2, user2, user2, user2],
      createdAt: "22/10/2024",
      status: "Active",
      tags: ["DND", "Tactics"],
   },
   {
      id: "2",
      name: "Some Other Game",
      image: game7,
      link: "/room/2",
      creator: user1,
      users: [user1, user2],
      createdAt: "22/10/2024",
      status: "Finished",
      tags: ["Tag"],
   },
   {
      id: "3",
      name: "Game 3",
      image: game1,
      link: "/room/3",
      creator: user1,
      users: [user1, user2],
      createdAt: "22/10/2024",
      status: "Inactive",
      tags: ["Tag"],
   },
   {
      id: "4",
      name: "Long Name Lorem Ipsium Test",
      image: game5,
      link: "/room/4",
      creator: user1,
      users: [user1, user2, user1, user2, user1, user2, user1, user2],
      createdAt: "22/10/2024",
      status: "Active",
      tags: ["LOREMIPSiumDior", "Tactics", "Chanel Tag long"],
   },
];

export const DMList: GameMasterType[] = [
   {
      id: "1",
      username: "Egor",
      image: DefaultUser,
      price: 10,
      rating: 5,
      link: "/dm/1",
      experience: 100,
      description: "Some description",
      gamesPlayed: 10,
   },
   {
      id: "2",
      username: "Admin",
      image: DefaultUser,
      price: 10,
      rating: 5,
      link: "/dm/2",
      experience: 100,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      gamesPlayed: 10,
   },
   {
      id: "3",
      username: "Egor",
      image: DefaultUser,
      price: 10,
      rating: 5,
      link: "/dm/3",
      experience: 100,
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      gamesPlayed: 10,
   },
   {
      id: "4",
      username: "Admin",
      image: DefaultUser,
      price: 10,
      rating: 5,
      link: "/dm/4",
      experience: 100,
      description: "Some description",
      gamesPlayed: 10,
   },
];
