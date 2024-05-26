import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./routes/Home.jsx";
import Variaveis from "./routes/Variaveis.jsx";
import Expressoes from "./routes/Expressoes.jsx";
import EntradaSaida from "./routes/EntradaSaida.jsx";
import ConceitosBasicos from "./routes/ConceitosBasicos.jsx";
import Sequencial from "./routes/Sequencial.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fundamentos/conceitos-basicos",
        element: <ConceitosBasicos />,
      },
      {
        path: "/fundamentos/variaveis",
        element: <Variaveis />,
      },
      {
        path: "/fundamentos/expressoes",
        element: <Expressoes />,
      },
      {
        path: "/fundamentos/entrada-saida",
        element: <EntradaSaida />,
      },
      {
        path: "/fundamentos/sequencial",
        element: <Sequencial />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
