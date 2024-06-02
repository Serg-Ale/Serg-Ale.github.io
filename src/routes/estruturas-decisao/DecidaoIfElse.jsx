const DecisaoIfElse = () => {
  return (
    <div>
      <h2>
        <strong>
          Aula 1: Estruturas de Decisão com estruturas simples e compostas
        </strong>
      </h2>
      <h3>Por: Pedro Machado</h3>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/rORSrYwPTOw?si=lda1z-c-YTVp4y7N"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <embed
        src="/public/decisao/DecisaoIfElse.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <h2>Objetivos</h2>
      <ul>
        <li>Introduzir os alunos à linguagem de programação C.</li>
        <li>Apresentar os conceitos básicos de algoritmos.</li>
        <li>Demonstrar a estrutura básica de um programa em C.</li>
        <li>Ensinar como compilar e executar um programa em C.</li>
        <li>Apresentar os principais tipos de dados em algoritmos.</li>
        <li>Explicar os operadores aritméticos, relacionais e lógicos.</li>
        <li>
          Demonstrar como construir expressões aritméticas, relacionais e
          lógicas.
        </li>
        <li>
          Apresentar as estruturas de controle sequencial, condicional e
          repetitiva.
        </li>
        <li>Exemplificar a aplicação de cada estrutura de controle.</li>
        <li>Praticar a escrita de código C com um exemplo prático.</li>
      </ul>

      <h2>Parte 1: Introdução à Linguagem C</h2>

      <h3>1.1 História da Linguagem C e Suas Características</h3>
      <ul>
        <li>A linguagem C foi desenvolvida por Dennis Ritchie nos anos 70.</li>
        <li>
          É uma linguagem de alto nível, procedural, estruturada e compilada.
        </li>
        <li>É conhecida por sua simplicidade, eficiência e portabilidade.</li>
        <li>
          É utilizada em diversas áreas, como sistemas operacionais,
          desenvolvimento de drivers, software embarcado, jogos, entre outros.
        </li>
      </ul>

      <h3>1.2 Áreas de Aplicação da Linguagem C</h3>
      <ul>
        <li>
          <strong>Sistemas Operacionais:</strong> Windows, Linux, macOS,
          Android, iOS, etc.
        </li>
        <li>
          <strong>Desenvolvimento de Drivers:</strong> Drivers de dispositivos
          de hardware.
        </li>
        <li>
          <strong>Software Embarcado:</strong> Firmware de microcontroladores e
          microprocessadores.
        </li>
        <li>
          <strong>Jogos:</strong> Motores de jogos, ferramentas de
          desenvolvimento de jogos.
        </li>
        <li>
          <strong>Aplicações de Rede:</strong> Servidores web, roteadores,
          firewalls.
        </li>
        <li>
          <strong>Aplicações Científicas e de Engenharia:</strong> Simulações,
          cálculos complexos.
        </li>
        <li>
          <strong>Aplicações de Escritório:</strong> Editores de texto,
          planilhas, apresentações.
        </li>
      </ul>

      <h3>1.3 Estrutura Básica de um Programa em C</h3>
      <ul>
        <li>Um programa em C é composto por blocos de código.</li>
        <li>
          O bloco principal é a função <code>main()</code>.
        </li>
        <li>
          As instruções dentro da função <code>main()</code> são executadas
          sequencialmente.
        </li>
        <li>
          O programa pode incluir bibliotecas para funcionalidades adicionais.
        </li>
      </ul>

      <h3>1.4 Compilação e Execução de um Programa em C</h3>
      <ul>
        <li>
          Para executar um programa em C, é necessário compilá-lo primeiro.
        </li>
        <li>O compilador traduz o código C para linguagem de máquina.</li>
        <li>
          O código compilado pode ser executado diretamente no sistema
          operacional.
        </li>
      </ul>

      <h4>Etapas para compilar e executar um programa em C</h4>
      <ol>
        <li>
          Escrever o código C em um arquivo com extensão <code>.c</code>.
        </li>
        <li>
          Compilar o código com um comando como{" "}
          <code>gcc -o nome_do_programa nome_do_arquivo.c</code>.
        </li>
        <li>
          Executar o programa com o comando <code>./nome_do_programa</code>.
        </li>
      </ol>

      <h2>Parte 2: Conceitos Básicos de Algoritmos</h2>

      <h3>2.1 O que é um Algoritmo e Suas Propriedades</h3>
      <ul>
        <li>
          Um algoritmo é um conjunto de instruções para resolver um problema.
        </li>
        <li>As instruções são precisas e não ambíguas.</li>
        <li>Um algoritmo deve ter um ponto de início e um ponto de término.</li>
        <li>
          Um algoritmo deve ser eficiente e usar recursos de forma adequada.
        </li>
      </ul>

      <h3>2.2 Tipos de Dados em Algoritmos</h3>
      <ul>
        <li>
          <strong>Inteiros:</strong> Números sem casas decimais, como 1, 2, 3.
        </li>
        <li>
          <strong>Reais:</strong> Números com casas decimais, como 3.14, 2.718.
        </li>
        <li>
          <strong>Caracteres:</strong> Letras, números e símbolos, como `a`,
          `B`, `1`.
        </li>
        <li>
          <strong>Booleanos:</strong> Valores Verdadeiro ou Falso.
        </li>
      </ul>

      <h3>2.3 Operadores Aritméticos, Relacionais e Lógicos</h3>

      <h4>Operadores Aritméticos</h4>
      <ul>
        <li>+ (adição)</li>
        <li>- (subtração)</li>
        <li>* (multiplicação)</li>
        <li>/ (divisão)</li>
        <li>% (módulo)</li>
      </ul>

      <h4>Operadores Relacionais</h4>
      <ul>
        <li>== (igualdade)</li>
        <li>!= (diferença)</li>
        <li>&gt; (maior que)</li>
        <li>&lt; (menor que)</li>
        <li>&gt;= (maior ou igual que)</li>
        <li>&lt;= (menor ou igual que)</li>
      </ul>

      <h4>Operadores Lógicos</h4>
      <ul>
        <li>&amp;&amp; (e)</li>
        <li>|| (ou)</li>
        <li>! (não)</li>
      </ul>

      <h3>2.4 Expressões Aritméticas, Relacionais e Lógicas (continuação)</h3>
      <ul>
        <li>
          <strong>Expressões Aritméticas:</strong> Combinações de números,
          variáveis e operadores aritméticos para realizar cálculos. Exemplos:{" "}
          <code>a + b</code>, <code>x * 2</code>, <code>(a - b) / 2</code>.
        </li>
        <li>
          <strong>Expressões Relacionais:</strong> Combinações de valores e
          operadores relacionais para avaliar uma condição. Exemplos:{" "}
          <code>a == b</code>, <code>x &gt; 10</code>, <code>y &lt;= 0</code>. O
          resultado de uma expressão relacional é sempre Verdadeiro ou Falso.
        </li>
        <li>
          <strong>Expressões Lógicas:</strong> Combinações de expressões
          relacionais e/ou valores booleanos com operadores lógicos para
          construir condições complexas. Exemplos:{" "}
          <code>(a &gt; b) &amp;&amp; (x &lt;= 10)</code>,{" "}
          <code>! (y == 0)</code>. O resultado de uma expressão lógica também é
          sempre Verdadeiro ou Falso.
        </li>
      </ul>
    </div>
  );
};

export default DecisaoIfElse;
