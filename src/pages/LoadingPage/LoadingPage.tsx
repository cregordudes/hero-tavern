import { Box, Typography } from "@mui/material";

const LoadingPage = () => {
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
            Loading...
         </Typography>
      </Box>
   );
};

export default LoadingPage;
