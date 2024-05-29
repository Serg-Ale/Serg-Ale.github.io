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
    </asside>
  );
};

export default Nav;
