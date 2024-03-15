import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// componetes que seram renderizados
import App from "./App.jsx";
import Login from "./pages/Login/login.jsx";
import Forgot from "./pages/Login/forgot.jsx";
import Register from "./pages/Login/register.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";

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
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
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
