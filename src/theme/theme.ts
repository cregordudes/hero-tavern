import { createTheme } from "@mui/material/styles";

const tavernTheme = createTheme({
   palette: {
      primary: {
         main: "#1F4287",
         light: "#587ABD",
         dark: "#071E3D",
         contrastText: "#FBFBFB",
      },
      secondary: {
         main: "#202020",
         light: "#27304B",
         dark: "#768192",
      },
      error: {
         main: "#FB773C",
      },
      warning: {
         main: "#9388FF",
      },
      info: {
         main: "#2F80ED",
      },
      success: {
         main: "#A8F63C",
      },
   },
   typography: {
      fontFamily:
         "'Roboto', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'",
      h1: {
         fontSize: "3rem",
         fontWeight: 700,
         lineHeight: "116.7%",
         letterSpacing: "-1.5px",
      },
      h2: {
         fontSize: "2.5rem",
         fontWeight: 700,
         lineHeight: "120%",
         letterSpacing: "-0.5px",
      },
      h3: {
         fontSize: "2.25rem",
         fontWeight: 700,
         lineHeight: "116.7%",
      },
      h4: {
         fontSize: "2rem",
         fontWeight: 700,
         lineHeight: "123.5%",
         letterSpacing: "0.25px",
      },
      h5: {
         fontSize: "1.5rem",
         fontWeight: 700,
         lineHeight: "133.4%",
      },
      h6: {
         fontSize: "1.25rem",
         fontWeight: 700,
         lineHeight: "160%",
         letterSpacing: "0.15px",
      },
      body1: {
         fontSize: "1rem",
         fontWeight: 400,
         lineHeight: "22.4px",
         letterSpacing: "0.15px",
      },
      body2: {
         fontSize: "0.875rem",
         fontWeight: 400,
         lineHeight: "143%",
         letterSpacing: "0.17px",
      },
      overline: {
         fontSize: "0.75rem",
         fontWeight: 400,
         lineHeight: "266%",
         letterSpacing: "1px",
         textTransform: "uppercase",
      },
      button: {
         lineHeight: 1.8,
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 900,
         lg: 1200,
         xl: 1440,
      },
   },
});

export default tavernTheme;
