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
