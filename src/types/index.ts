export type ProtectedRouteProps = {
   isAuthenticated: boolean;
   children: JSX.Element;
};

export type BannerProps = {
   id: number;
   title: string;
   users: string;
   image: string;
   links: string[];
};

export type GameCardProps = {
   id: number;
   title: string;
   online: string;
   image: string;
   link: string;
   tags: string[];
};

export type HotTitleProps = {
   link: string;
   title: string;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   icon?: any;
};

export type UserType = {
   id: string;
   username: string;
   email: string;
   role: string;
   token: string;
   avatar: string;
};

export type RoomType = {
   id: string;
   name: string;
   image: string;
   creator: UserType;
   users: UserType[];
   createdAt: string;
   status: string;
   tags: string[];
   link: string;
};

export type GameMasterType = {
   id: string;
   username: string;
   image: string;
   price: number;
   rating: number;
   link: string;
   experience: number;
   description: string;
   gamesPlayed: number;
};
