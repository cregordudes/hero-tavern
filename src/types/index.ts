export type ProtectedRouteProps = {
   isAuthenticated: boolean;
   children: JSX.Element;
};

export type GameCardProps = {
   id: number;
   title: string;
   online: string;
   image: string;
   link: string;
   tags: string[];
};
