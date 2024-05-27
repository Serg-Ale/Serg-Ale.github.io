import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./routes/Home.jsx";
import Variaveis from "./routes/fundamentos-algoritmos/Variaveis.jsx";
import Expressoes from "./routes/fundamentos-algoritmos/Expressoes.jsx";
import EntradaSaida from "./routes/fundamentos-algoritmos/EntradaSaida.jsx";
import ConceitosBasicos from "./routes/fundamentos-algoritmos/ConceitosBasicos.jsx";
import IntroStructs from "./routes/var-comp-heterogeneas/IntroStructs.jsx";
import ArraysStructs from "./routes/var-comp-heterogeneas/ArraysStructs.jsx";
import ParamFuncoes from "./routes/var-comp-heterogeneas/ParamFuncoes.jsx";
import StructsExercicios from "./routes/var-comp-heterogeneas/StructsExercicios.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "fundamentos",
        children: [
          {
            path: "conceitos-basicos",
            element: <ConceitosBasicos />,
          },
          {
            path: "variaveis",
            element: <Variaveis />,
          },
          {
            path: "expressoes",
            element: <Expressoes />,
          },
          {
            path: "entrada-saida",
            element: <EntradaSaida />,
          },
        ],
      },
      {
        path: "var-comp-heterogeneas",
        children: [
          {
            path: "introducao-structs",
            element: <IntroStructs />,
          },
          {
            path: "arrays-structs",
            element: <ArraysStructs />,
          },
          {
            path: "structs-param-funcoes",
            element: <ParamFuncoes />,
          },
          {
            path: "structs-exercicios",
            element: <StructsExercicios />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
