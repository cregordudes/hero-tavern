import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Box } from "@mui/material";
//import Background from "../../assets/Background.png";

const Layout = () => {
   return (
      <Box
         sx={{
            width: "100%",
            height: "100%",
            minHeight: "100vh",
            display: "flex",
            background:
               "linear-gradient(228deg, rgba(7,30,61,1) 0%, rgba(12,46,92,1) 100%);",
            //backgroundImage: `url(${Background})`,
            //backgroundSize: " 100% 100%",
            backgroundSize: "cover",
            //backgroundRepeat: "no-repeat",
         }}
      >
         <Sidebar />
         <Outlet />
      </Box>
   );
};

export default Layout;
