import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// componetes que seram renderizados
import App from "./App.jsx";
import Login from "./pages/Login/login.jsx";
import Forgot from "./pages/Login/forgot.jsx";
import Register from "./pages/Login/register.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import Solicitacoes from "./pages/Solicitacoes/solicitacoes.jsx";
import Controle from "./pages/Controle/controle.jsx";
import Relatorios from "./pages/Relatorios/relatorios.jsx";
import Catalogacao from "./pages/Catalogacao/catalogacao.jsx";
import Reset from "./pages/Login/reset.jsx"
import Pedidos from "./pages/Solicitacoes/pedidos.jsx"
import Entrada from "./pages/Movimentacao/entrada.jsx"; 
import Saida from "./pages/Movimentacao/saida.jsx"; 
import Solicitante from "./pages/Solicitante/Solicitante.jsx";
import NovoPedido from "./pages/Solicitante/novoPedido.jsx";
import Pedido from "./pages/Solicitante/pedido.jsx";
import MoviPedido from "./pages/Controle/movpedidos.jsx";

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
        element: <Forgot/>,
      },
      {
        path: "/reset/:token",
        element: <Reset/>,
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
        element: <Solicitacoes />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
      {
        path: "/controle",
        element: <Controle />,
      },
      {
        path: "/entrada",
        element: <Entrada />,
      },
      {
        path: "/saida",
        element: <Saida />,
      },
      {
        path: "/relatorios",
        element: <Relatorios />,
      },
      {
        path: "/catalogacao",
        element: <Catalogacao />,
      },
      {
        path: "/solicitante",
        element: <Solicitante />,
      },
      {
        path: "/novopedido",
        element: <NovoPedido />,
      },
      {
        path: "/movipedido",
        element: <MoviPedido />,
      },
      {
        path: "/pedido",
        element: <Pedido />,
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
