import { Link } from "react-router-dom";
import "./styles/Nav.css";

const Nav = () => {
  return (
    <asside>
      <nav>
        <h3>Fundamentos de Algoritmos</h3>
        <ul>
          <li>
            <Link to="/fundamentos/conceitos-basicos">
              Aula 1: Introdução à Linguagem C e Conceitos Básicos de Algoritmos
            </Link>
          </li>
          <li>
            <Link to="/fundamentos/variaveis">
              Aula 2 - Constantes, Variáveis e Tipos de Dados
            </Link>
          </li>
          <li>
            <Link to="/fundamentos/expressoes">
              Aula 3 - Expressões Aritméticas, Relacionais e Lógicas
            </Link>
          </li>
          <li>
            <Link to="/fundamentos/entrada-saida">
              Aula 4 - Comandos de Entrada e Saída
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Estruturas de Decisão</h3>
        <ul>
          <li>
            <Link>Place-Holder</Link>
          </li>

          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Estruturas de Repetição</h3>
        <ul>
          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
          <li>
            <Link>Place-Holder</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Tecnicas de modularização</h3>
        <ul>
          <li>
            <Link to="/tecnicas-modularizacao/funcoes-procedimentos">
              Aula 1 - Introdução a Procedimentos e Funções em C
            </Link>
          </li>
          <li>
            <Link to="tecnicas-modularizacao/recursividade">
              Aula 2 - Modularização Avançada e Reutilização de Código
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Variáveis compostas Homogeneas</h3>
        <ul>
          <li>
            <Link to="/var-comp-homogeneas/introducao-vetores">
              Aula 1 - Introdução a Vetores em C
            </Link>
          </li>

          <li>
            <Link to="/var-comp-homogeneas/manipulacao-vetores">
              Aula 2 - Manipulação de Vetores em C
            </Link>
          </li>

          <li>
            <Link to="/var-comp-homogeneas/introducao-matrizes">
              Aula 3 - Introdução a Matrizes em C
            </Link>
          </li>

          <li>
            <Link to="/var-comp-homogeneas/manipulacao-matrizes">
              Aula 4 - Manipulação de Matrizes em C
            </Link>
          </li>
        </ul>
      </nav>

      <nav>
        <h3>Variáveis compostas Heterogêneas</h3>
        <ul>
          <li>
            <Link to="var-comp-heterogeneas/introducao-structs">
              Aula 1 - Introdução às Structs
            </Link>
          </li>

          <li>
            <Link to="var-comp-heterogeneas/arrays-structs">
              Aula 2 - Arrays de Structs
            </Link>
          </li>

          <li>
            <Link to="var-comp-heterogeneas/structs-param-funcoes">
              Aula 3 - Structs como Parâmetros de Funções
            </Link>
          </li>

          <li>
            <Link to="var-comp-heterogeneas/structs-exercicios">
              Exercícios - Structs
            </Link>
          </li>
        </ul>
      </nav>
    </asside>
  );
};

export default Nav;
