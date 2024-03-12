import React from 'react'
import ReactDOM from 'react-dom/client'


// 1 - configurando o router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// componetes que seram renderizados 
import App from './App.jsx'
import Login from "./pages/Login/login.jsx"
import Forgot from './pages/Login/forgot.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/forgot",
        element: <Forgot/>,
      },

    ]
  }
]);


// responsavel pela renderização, então passo a const acima para ele renderizar os caminhos
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
);
