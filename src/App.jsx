import { GlobalStyle } from "./Global";

import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";

// 2 - reproveitamento de estrutura
// ja que os caminhos vão ser todos renderizados apartir de outelet
import { Outlet } from "react-router-dom";

function App() {
  return (
    // <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
    // </div>
  );
}

export default App;
