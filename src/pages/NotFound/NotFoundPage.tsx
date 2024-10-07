import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();

   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "80vh",
            width: "100vw",
         }}
      >
         <Typography variant="h1" sx={{ color: "black" }}>
            404
         </Typography>
         <Typography variant="h4" sx={{ color: "black", marginTop: "10px" }}>
            Page not found
         </Typography>
         <Button
            variant="contained"
            sx={{ marginTop: "30px" }}
            onClick={() => navigate("/")}
         >
            Back Home
         </Button>
      </Box>
   );
};

export default NotFound;
