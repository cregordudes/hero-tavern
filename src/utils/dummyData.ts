import bannerBg from "../assets/bannerBg.jpg";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.jpg";
import game3 from "../assets/game3.jpg";
import game4 from "../assets/game4.jpg";
import game5 from "../assets/game5.jpg";
import game6 from "../assets/game6.jpg";
import game7 from "../assets/game7.jpg";
//import game8 from "../assets/game8.jpg";

import { BannerProps, GameCardProps } from "../types";

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
