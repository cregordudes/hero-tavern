import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import tavernTheme from "./theme/theme";

function App() {
   return (
      <ThemeProvider theme={tavernTheme}>
         <AppRouter />
      </ThemeProvider>
   );
}

export default App;
