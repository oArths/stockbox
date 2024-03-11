import './App.css'
import '@radix-ui/themes/styles.css';

// 2 - reproveitamento de estrutura 
// ja que os caminhos vão ser todos renderizados apartir de outelet
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className='App'>
      
      <Outlet/>
    </div>
  )
}

export default App
