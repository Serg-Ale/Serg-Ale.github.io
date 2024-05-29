const EntradaSaida = () => {
  return (
    <div>
      <h2 id="aula-4-comandos-de-entrada-e-saida">
        <strong>Aula 4: Comandos de Entrada e Saída</strong>
      </h2>
      <h3>Por: Sérgio Alexandre</h3>

      <embed
        src="/public/fundamentos/entrada-saida.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <h2 id="objetivos">
        <strong>Objetivos:</strong>
      </h2>
      <ul>
        <li>
          Apresentar a função <code>scanf()</code> para leitura de dados em C.
        </li>
        <li>
          Demonstrar a formatação de entrada de dados com <code>scanf()</code>.
        </li>
        <li>
          Construir exemplos de leitura de diferentes tipos de dados com{" "}
          <code>scanf()</code>.
        </li>
        <li>
          Explicar a função <code>printf()</code> para impressão de dados em C.
        </li>
        <li>
          Demonstrar a formatação de saída de dados com <code>printf()</code>.
        </li>
        <li>
          Criar exemplos de impressão de diferentes tipos de dados com{" "}
          <code>printf()</code>.
        </li>
        <li>
          Praticar a utilização das funções <code>scanf()</code> e{" "}
          <code>printf()</code> em um exemplo prático.
        </li>
      </ul>
      <h2 id="parte-1-entrada-de-dados">
        <strong>Parte 1: Entrada de Dados</strong>
      </h2>
      <h3 id="funcao-scanf-para-leitura-de-dados">
        <strong>
          1.1 Função <code>scanf()</code> para Leitura de Dados:
        </strong>
      </h3>
      <ul>
        <li>
          A função <code>scanf()</code> é uma função de biblioteca padrão em C
          que permite ler dados da entrada padrão (geralmente o teclado).
        </li>
        <li>
          A função retorna o número de itens de dados que foram lidos com
          sucesso.
        </li>
      </ul>
      <h3 id="formatacao-de-entrada-de-dados-com-scanf">
        <strong>
          1.2 Formatação de Entrada de Dados com <code>scanf()</code>:
        </strong>
      </h3>
      <ul>
        <li>
          A sintaxe da função <code>scanf()</code> inclui especificadores de
          formato que indicam o tipo de dado a ser lido:
          <ul>
            <li>
              <code>%d</code>: inteiro
            </li>
            <li>
              <code>%f</code>: flutuante
            </li>
            <li>
              <code>%c</code>: caractere
            </li>
            <li>
              <code>%s</code>: string
            </li>
          </ul>
        </li>
      </ul>
      <h2 id="parte-2-saida-de-dados">
        <strong>Parte 2: Saída de Dados</strong>
      </h2>
      <h3 id="funcao-printf-para-impressao-de-dados">
        <strong>
          2.1 Função <code>printf()</code> para Impressão de Dados:
        </strong>
      </h3>
      <ul>
        <li>
          A função <code>printf()</code> é uma função de biblioteca padrão em C
          que permite imprimir dados na saída padrão (geralmente o console).
        </li>
        <li>A função retorna o número de caracteres que foram impressos.</li>
      </ul>
      <h3 id="formatacao-de-saida-de-dados-com-printf">
        <strong>
          2.2 Formatação de Saída de Dados com <code>printf()</code>:
        </strong>
      </h3>
      <ul>
        <li>
          A sintaxe da função <code>printf()</code> inclui especificadores de
          formato que indicam o tipo de dado a ser impresso:
          <ul>
            <li>
              <code>%d</code>: inteiro
            </li>
            <li>
              <code>%f</code>: flutuante
            </li>
            <li>
              <code>%c</code>: caractere
            </li>
            <li>
              <code>%s</code>: string
            </li>
          </ul>
        </li>
      </ul>
      <h2 id="exemplo-pratico">
        <strong>Exemplo Prático:</strong>
      </h2>
      <p>
        <strong>Objetivo:</strong> Ler o nome e a idade do usuário e imprimi-los
        na tela formatados.
      </p>
      <h2 id="atividade-proposta">
        <strong>Atividade Proposta:</strong>
      </h2>
      <ol>
        <li>
          Modifique o programa para imprimir a idade formatada como ``Você tem X
          anos``.
        </li>
        <li>
          Escreva um programa que leia dois números e imprima a soma, a
          diferença, o produto e o quociente desses números.
        </li>
        <li>
          Escreva um programa que leia a temperatura em Celsius e converta para
          Fahrenheit (F = (C * 9/5) + 32).
        </li>
      </ol>
      <h2 id="conclusao">
        <strong>Conclusão:</strong>
      </h2>
      <p>
        Nesta aula, você aprendeu como realizar a entrada e saída de dados em
        programas em C utilizando as funções <code>scanf()</code> e{" "}
        <code>printf()</code>. O exemplo prático demonstrou como utilizar essas
        funções para interagir com o usuário e exibir informações formatadas na
        tela.
      </p>
      <p>
        <strong>Lembre-se:</strong> A formatação de dados é importante para
        deixar a saída do programa mais organizada e legível. É importante
        escolher os especificadores de formato adequados para cada tipo de dado.
      </p>
    </div>
  );
};

export default EntradaSaida;
