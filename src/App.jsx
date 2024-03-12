import "./Global.jsx"
import { Theme } from '@radix-ui/themes';


// 2 - reproveitamento de estrutura
// ja que os caminhos vão ser todos renderizados apartir de outelet
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Theme>
      <Outlet />
      </Theme>
     </div>
  );
}

export default App;
