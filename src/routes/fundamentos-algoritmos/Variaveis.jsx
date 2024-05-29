const variaveis = () => {
  return (
    <div>
      <div>
        <h2 id="aula-2-constantes-variaveis-e-tipos-de-dados">
          <strong>Aula 2: Constantes, Variáveis e Tipos de Dados</strong>
        </h2>
        <h3>Por: Sérgio Alexandre</h3>
        <embed
          src="/public/fundamentos/variaveis.pdf"
          width="1200"
          height="700"
          type="application/pdf"
        />

        <h2 id="objetivos">
          <strong>Objetivos:</strong>
        </h2>
        <ul>
          <li>Definir o que são constantes e variáveis em C.</li>
          <li>Apresentar os tipos de constantes e variáveis em C.</li>
          <li>Demonstrar como declarar e usar constantes e variáveis em C.</li>
          <li>Explicar o conceito de escopo de variáveis.</li>
          <li>Descrever os tipos básicos de dados em C.</li>
          <li>Apresentar os qualificadores de tipos de dados.</li>
          <li>Demonstrar os operadores de conversão de tipos de dados.</li>
          <li>
            Praticar a utilização de constantes, variáveis e tipos de dados em
            um exemplo prático.
          </li>
        </ul>

        <h2 id="parte-1-constantes">
          <strong>Parte 1: Constantes</strong>
        </h2>
        <h3 id="definicao-e-tipos-de-constantes-em-c">
          <strong>1.1 Definição e Tipos de Constantes em C:</strong>
        </h3>
        <ul>
          <li>
            Uma constante é um valor fixo que não pode ser alterado durante a
            execução do programa.
          </li>
          <li>
            Existem dois tipos principais de constantes:
            <ul>
              <li>
                <strong>Constante numérica:</strong> armazena valores numéricos,
                como inteiros (1, 2, 3) ou reais (3.14, 2.718).
              </li>
              <li>
                <strong>Constante de caractere:</strong> armazena um único
                caractere, como `a`, `B`, `1`.
              </li>
            </ul>
          </li>
        </ul>

        <h3 id="declaracao-e-uso-de-constantes-em-c">
          <strong>1.2 Declaração e Uso de Constantes em C:</strong>
        </h3>
        <ul>
          <li>
            Constantes são declaradas com a palavra-chave <code>const</code>.
          </li>
          <li>
            É recomendável usar nomes em letras maiúsculas para constantes.
          </li>
        </ul>

        <h3 id="exemplos-de-constantes-em-c">
          <strong>1.3 Exemplos de Constantes em C:</strong>
        </h3>
        <ul>
          <li>
            Constante para o valor de PI:{" "}
            <code>const float PI = 3.1415926535;</code>
          </li>
          <li>
            Constante para o tamanho máximo de uma string:{" "}
            <code>const int MAX_STRING_SIZE = 100;</code>
          </li>
        </ul>

        <h2 id="parte-2-variaveis">
          <strong>Parte 2: Variáveis</strong>
        </h2>
        <h3 id="definicao-e-tipos-de-variaveis-em-c">
          <strong>2.1 Definição e Tipos de Variáveis em C:</strong>
        </h3>
        <ul>
          <li>
            Uma variável é um local na memória que armazena um valor que pode
            ser modificado durante a execução do programa.
          </li>
          <li>
            Existem diversos tipos de variáveis, como:
            <ul>
              <li>
                <strong>Inteiro:</strong> armazena números inteiros (sem casas
                decimais).
              </li>
              <li>
                <strong>Real:</strong> armazena números reais (com casas
                decimais).
              </li>
              <li>
                <strong>Caractere:</strong> armazena um único caractere.
              </li>
              <li>
                <strong>Ponteiro:</strong> armazena o endereço de outro local na
                memória.
              </li>
            </ul>
          </li>
        </ul>

        <h3 id="declaracao-e-inicializacao-de-variaveis-em-c">
          <strong>2.2 Declaração e Inicialização de Variáveis em C:</strong>
        </h3>
        <ul>
          <li>
            As variáveis são declaradas com o tipo de dado seguido do nome da
            variável.
          </li>
          <li>
            A variável pode ser inicializada com um valor no momento da
            declaração.
          </li>
        </ul>

        <h3 id="escopo-de-variaveis-em-c">
          <strong>2.3 Escopo de Variáveis em C:</strong>
        </h3>
        <ul>
          <li>
            O escopo de uma variável define a região do programa onde ela é
            visível e acessível.
          </li>
          <li>
            Existem dois tipos de escopo:
            <ul>
              <li>
                <strong>Local:</strong> a variável só é acessível dentro do
                bloco onde foi declarada.
              </li>
              <li>
                <strong>Global:</strong> a variável é acessível em todo o
                programa.
              </li>
            </ul>
          </li>
        </ul>

        <h3 id="exemplos-de-variaveis-em-c">
          <strong>2.4 Exemplos de Variáveis em C:</strong>
        </h3>
        <ul>
          <li>
            Variável para armazenar a idade do usuário: <code>int idade;</code>
          </li>
          <li>
            Variável para armazenar o nome do usuário:{" "}
            <code>char nome[50];</code>
          </li>
          <li>
            Variável para armazenar a soma de dois números:{" "}
            <code>int soma;</code>
          </li>
        </ul>

        <h2 id="parte-3-tipos-de-dados">
          <strong>Parte 3: Tipos de Dados</strong>
        </h2>
        <h3 id="tipos-basicos-de-dados-em-c">
          <strong>3.1 Tipos Básicos de Dados em C:</strong>
        </h3>
        <ul>
          <li>
            Os tipos básicos de dados em C são:
            <ul>
              <li>
                <code>int</code>: inteiro (1, 2, 3)
              </li>
              <li>
                <code>float</code>: real (3.14, 2.718)
              </li>
              <li>
                <code>char</code>: caractere (`a`, `B`, `1`)
              </li>
              <li>
                <code>void</code>: indica a ausência de valor
              </li>
            </ul>
          </li>
          <li>
            Cada tipo de dado possui um tamanho e um intervalo de valores
            válidos específicos.
          </li>
        </ul>

        <h3 id="qualificadores-de-tipos-de-dados">
          <strong>3.2 Qualificadores de Tipos de Dados:</strong>
        </h3>
        <ul>
          <li>
            Os qualificadores de tipos de dados modificam o comportamento das
            variáveis:
            <ul>
              <li>
                <code>const</code>: indica que a variável não pode ser alterada.
              </li>
              <li>
                <code>volatile</code>: indica que o valor da variável pode ser
                modificado por fatores externos ao programa, como interrupções
                de hardware.
              </li>
            </ul>
          </li>
        </ul>

        <h3 id="operadores-de-conversao-de-tipos-de-dados">
          <strong>3.3 Operadores de Conversão de Tipos de Dados:</strong>
        </h3>
        <ul>
          <li>
            Os operadores de conversão de tipos de dados permitem converter um
            valor de um tipo para outro.
          </li>
          <li>
            Exemplos:
            <ul>
              <li>
                <code>(int)x</code>: converte o valor de <code>x</code> para
                inteiro.
              </li>
              <li>
                <code>(float)y</code>: converte o valor de <code>y</code> para
                real.
              </li>
              <li>
                <code>(char)z</code>: converte o valor de <code>z</code> para
                caractere.
              </li>
            </ul>
          </li>
        </ul>

        <h2 id="conclusao">
          <strong>Conclusão:</strong>
        </h2>
        <p>
          Nesta aula, você aprendeu a diferenciar constantes e variáveis, como
          declará-las e inicializá-las com diferentes tipos de dados. Você
          também conheceu os qualificadores de tipos de dados e os operadores de
          conversão. O exemplo prático e as atividades propostas permitiram que
          você colocasse esses conceitos em prática para realizar cálculos
          simples e manipular dados do usuário.
        </p>
        <p>
          <strong>Lembre-se:</strong> É importante escolher o tipo de dado
          adequado para cada variável, considerando o tipo de informação que ela
          irá armazenar. A prática contínua é fundamental para consolidar o seu
          aprendizado de C.
        </p>
      </div>
    </div>
  );
};

export default variaveis;
