const DecisaoFinal = () => {
  return (
    <div>
      <h2 id="aula-3-expressoes-aritmeticas-relacionais-e-logicas">
        <strong>Aula 3: Estruturas de Decisão resumo e conclusão</strong>
      </h2>
      <h3>Por: Pedro Machado</h3>

      <h2>Slides utilizados</h2>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/nS1zA4JCNnk?si=3ErvIh73796kRgju"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <embed
        src="/public/decisao/DecisaoFinal.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <h2 id="objetivos">
        <strong>Objetivos:</strong>
      </h2>
      <ul>
        <li>Apresentar os operadores aritméticos em C.</li>
        <li>Demonstrar a precedência dos operadores aritméticos.</li>
        <li>
          Construir expressões aritméticas complexas com múltiplos operadores e
          parênteses.
        </li>
        <li>Explicar os operadores relacionais em C.</li>
        <li>Compor expressões relacionais para comparar valores.</li>
        <li>Descrever os operadores lógicos em C.</li>
        <li>
          Combinar expressões lógicas com operadores lógicos para criar
          condições complexas.
        </li>
        <li>
          Utilizar tabelas-verdade para analisar o comportamento dos operadores
          lógicos.
        </li>
        <li>
          Praticar a utilização de expressões aritméticas, relacionais e lógicas
          em um exemplo prático.
        </li>
      </ul>

      <h2 id="parte-1-expressoes-aritmeticas">
        <strong>Parte 1: Expressões Aritméticas</strong>
      </h2>
      <h3 id="operadores-aritmeticos-em-c">
        <strong>1.1 Operadores Aritméticos em C:</strong>
      </h3>
      <ul>
        <li>
          Os operadores aritméticos em C são:
          <ul>
            <li>
              Adição (<code>+</code>)
            </li>
            <li>
              Subtração (<code>-</code>)
            </li>
            <li>
              Multiplicação (<code>*</code>)
            </li>
            <li>
              Divisão (<code>/</code>)
            </li>
            <li>
              Módulo (<code>%</code>)
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="precedencia-de-operadores-aritmeticos">
        <strong>1.2 Precedência de Operadores Aritméticos:</strong>
      </h3>
      <ul>
        <li>
          A ordem de avaliação das expressões aritméticas segue a precedência
          dos operadores:
          <ul>
            <li>
              <strong>1. Multiplicação e Divisão</strong>
            </li>
            <li>
              <strong>2. Adição e Subtração</strong>
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="expressoes-aritmeticas-complexas">
        <strong>1.3 Expressões Aritméticas Complexas:</strong>
      </h3>
      <ul>
        <li>
          O uso de parênteses permite alterar a ordem de avaliação das
          expressões:
          <pre>
            <code>(2 + 3) * 4 // Resultado: 20</code>
          </pre>
          <pre>
            <code> 2 + 3 * 4 // Resultado: 14</code>
          </pre>
        </li>
      </ul>

      <h2 id="parte-2-expressoes-relacionais">
        <strong>Parte 2: Expressões Relacionais</strong>
      </h2>
      <h3 id="operadores-relacionais-em-c">
        <strong>2.1 Operadores Relacionais em C:</strong>
      </h3>
      <ul>
        <li>
          Os operadores relacionais em C são:
          <ul>
            <li>
              Menor que (<code>&lt;</code>)
            </li>
            <li>
              Maior que (<code>&gt;</code>)
            </li>
            <li>
              Menor ou igual que (<code>&lt;=</code>)
            </li>
            <li>
              Maior ou igual que (<code>&gt;=</code>)
            </li>
            <li>
              Igual a (<code>==</code>)
            </li>
            <li>
              Diferente de (<code>!=</code>)
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="expressoes-relacionais-complexas">
        <strong>2.2 Expressões Relacionais Complexas:</strong>
      </h3>
      <ul>
        <li>
          É possível combinar operadores relacionais em uma única expressão:
          <pre>
            <code>
              x &lt; y &amp;&amp; z &gt; 10 // Verdadeiro se x for menor que y e
              z for maior que 10
            </code>
          </pre>
        </li>
      </ul>

      <h2 id="parte-3-expressoes-logicas">
        <strong>Parte 3: Expressões Lógicas</strong>
      </h2>
      <h3 id="operadores-logicos-em-c">
        <strong>3.1 Operadores Lógicos em C:</strong>
      </h3>
      <ul>
        <li>
          Os operadores lógicos em C são:
          <ul>
            <li>
              E (<code>&amp;&amp;</code>)
            </li>
            <li>
              Ou (<code>||</code>)
            </li>
            <li>
              Não (<code>!</code>)
            </li>
          </ul>
        </li>
      </ul>

      <h2 id="conclusao">
        <strong>Conclusão:</strong>
      </h2>
      <p>
        Nesta aula, você aprendeu sobre operadores aritméticos, relacionais e
        lógicos em C. Você viu como utilizar a precedência dos operadores para
        criar expressões aritméticas complexas e como combinar operadores
        relacionais e lógicos para compor expressões complexas. O exemplo
        prático e as atividades propostas permitiram que você colocasse esses
        conceitos em prática.
      </p>
      <p>
        <strong>Lembre-se:</strong> A prática contínua é fundamental para
        consolidar o seu aprendizado de C.
      </p>
    </div>
  );
};

export default DecisaoFinal;
