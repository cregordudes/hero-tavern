import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "../pages/NotFound/NotFoundPage";
//import LoadingPage from "../pages/LoadingPage/LoadingPage";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";

const AppRouter = () => {
   const isAuthenticated = true;
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route
               index
               element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                     <Home />
                  </ProtectedRoute>
               }
            />
            <Route
               path="profile"
               element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                     <Home />
                  </ProtectedRoute>
               }
            />
            <Route
               path="lobbies"
               element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                     <Home />
                  </ProtectedRoute>
               }
            />
            <Route
               path="create-room"
               element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                     <Home />
                  </ProtectedRoute>
               }
            />
            <Route
               path="/games"
               element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                     <Home />
                  </ProtectedRoute>
               }
            />
            /
            <Route
               path="/game/:id"
               element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                     <Home />
                  </ProtectedRoute>
               }
            />
            /
            <Route
               path="/game/:id/about"
               element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                     <Home />
                  </ProtectedRoute>
               }
            />
            <Route path="*" element={<NotFound />} />;
         </Route>
      </Routes>
   );
};

export default AppRouter;
