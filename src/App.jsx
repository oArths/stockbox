import {GlobalStyle} from "./Global.jsx";

// 2 - reproveitamento de estrutura
// ja que os caminhos vão ser todos renderizados apartir de outelet
import { Outlet} from "react-router-dom";

function App() {
  return (
    <div>
    <GlobalStyle/>
      <Outlet />
    </div>
  );
}

export default App;
