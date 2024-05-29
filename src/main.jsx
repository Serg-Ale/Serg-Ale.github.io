import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import Home from "./routes/Home.jsx";

import Variaveis from "./routes/fundamentos-algoritmos/Variaveis.jsx";
import Expressoes from "./routes/fundamentos-algoritmos/Expressoes.jsx";
import EntradaSaida from "./routes/fundamentos-algoritmos/EntradaSaida.jsx";
import ConceitosBasicos from "./routes/fundamentos-algoritmos/ConceitosBasicos.jsx";

import DecisaoIfElse from "./routes/estruturas-decisao/DecidaoIfElse.jsx";
import DecisaoEncadeada from "./routes/estruturas-decisao/DecisaoEncadeada.jsx";
import DecisaoFinal from "./routes/estruturas-decisao/DecisaoFinal.jsx";

import LacoWhile from "./routes/estruturas-repeticao/LacoWhile.jsx";
import LacoDoWhile from "./routes/estruturas-repeticao/LacoDoWhile.jsx";
import LacoFor from "./routes/estruturas-repeticao/LacoFor.jsx";

import FuncoesProcedimentos from "./routes/tecnicas-modularizacao/FuncoesProcedimentos.jsx";
import Recursividade from "./routes/tecnicas-modularizacao/Recursividade.jsx";

import IntroVetores from "./routes/var-comp-homogeneas/IntroVetores.jsx";
import IntroMatrizes from "./routes/var-comp-homogeneas/IntroMatrizes.jsx";
import ManipulacaoMatrizes from "./routes/var-comp-homogeneas/ManipulacaoMatrizes.jsx";
import ManipulacaoVetores from "./routes/var-comp-homogeneas/ManipulacaoVetores.jsx";

import IntroStructs from "./routes/var-comp-heterogeneas/IntroStructs.jsx";
import ArraysStructs from "./routes/var-comp-heterogeneas/ArraysStructs.jsx";
import ParamFuncoes from "./routes/var-comp-heterogeneas/ParamFuncoes.jsx";
import StructsExercicios from "./routes/var-comp-heterogeneas/StructsExercicios.jsx";

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
        path: "estruturas-decisao",
        children: [
          {
            path: "decisao-if-else",
            element: <DecisaoIfElse />,
          },
          {
            path: "decisao-encadeada",
            element: <DecisaoEncadeada />,
          },
          {
            path: "decisao-final",
            element: <DecisaoFinal />,
          },
        ],
      },
      {
        path: "estruturas-repeticao",
        children: [
          {
            path: "laco-while",
            element: <LacoWhile />,
          },
          {
            path: "laco-do-while",
            element: <LacoDoWhile />,
          },
          {
            path: "laco-for",
            element: <LacoFor />,
          },
        ],
      },
      {
        path: "tecnicas-modularizacao",
        children: [
          {
            path: "funcoes-procedimentos",
            element: <FuncoesProcedimentos />,
          },
          {
            path: "recursividade",
            element: <Recursividade />,
          },
        ]
      },
      {
        path: "var-comp-homogeneas",
        children: [
          {
            path: "introducao-vetores",
            element: <IntroVetores />,
          },
          {
            path: "manipulacao-vetores",
            element: <ManipulacaoVetores />,
          },
          {
            path: "introducao-matrizes",
            element: <IntroMatrizes />,
          },
          {
            path: "manipulacao-matrizes",
            element: <ManipulacaoMatrizes />,
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
