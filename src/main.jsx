import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// componetes que seram renderizados
import App from "./App.jsx";
import Login from "./pages/Login/login.jsx";
import Forgot from "./pages/Login/forgot.jsx";
import Register from "./pages/Login/register.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import Solicitacoes from "./pages/Solicitacoes/solicitacoes.jsx"
import Controle from "./pages/Controle/controle.jsx"
import Relatorios from "./pages/Relatorios/relatorios.jsx";
import Catalogacao from "./pages/Catalogacao/catalogacao.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/solicitacoes",
        element: <Solicitacoes/>,
      },
      {
        path: "/controle",
        element: <Controle />,
      },
      {
        path: "/relatorios",
        element: <Relatorios />,
      },
      {
        path: "/catalogacao",
        element: <Catalogacao />,
      },
    ],
  },
]);

// responsavel pela renderização, então passo a const acima para ele renderizar os caminhos
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
