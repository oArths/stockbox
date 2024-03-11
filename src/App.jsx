import { GlobalStyle } from "./Global";

// 2 - reproveitamento de estrutura
// ja que os caminhos vão ser todos renderizados apartir de outelet
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="Global">
      <GlobalStyle/>
      <Outlet />
    </div>
  );
}

export default App;


