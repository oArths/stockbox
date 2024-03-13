import "./Global.jsx";
import "./App.css";
import { Theme } from "@radix-ui/themes";

// 2 - reproveitamento de estrutura
// ja que os caminhos vão ser todos renderizados apartir de outelet
import { Outlet, Router } from "react-router-dom";

function App() {
  return (
    <Theme>
      <Outlet />
    </Theme>
  );
}

export default App;
