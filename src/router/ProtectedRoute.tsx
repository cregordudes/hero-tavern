import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../types";

export const ProtectedRoute = ({
   isAuthenticated,
   children,
}: ProtectedRouteProps) => {
   if (!isAuthenticated) {
      return <Navigate to={"/"} replace />;
   }
   return children;
};
