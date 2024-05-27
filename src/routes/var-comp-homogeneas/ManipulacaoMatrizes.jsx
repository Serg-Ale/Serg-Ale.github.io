const ManipulacaoMatrizes = () => {
  return (
    <div>
      <h1>Aula 4: Domine as Matrizes em C</h1>
      <h3>Por: Sérgio Alexandre</h3>

      <h2>Objetivo:</h2>
      <ul>
        <li>
          <strong>Tornar-se um mestre da transposição:</strong> Aprenda a trocar
          linhas por colunas e vice-versa em uma matriz.
        </li>
        <li>
          <strong>Desvendar a multiplicação de matrizes:</strong> Descubra como
          combinar duas matrizes para gerar uma nova matriz.
        </li>
        <li>
          <strong>Realizar operações matemáticas:</strong> Some, subtraia e
          multiplique matrizes com maestria.
        </li>
      </ul>

      <h2>1. A Transposição Mágica:</h2>
      <p>
        Imagine um pergaminho mágico com linhas e colunas. A transposição é como
        trocar as linhas por colunas e vice-versa, como um feitiço que
        reorganiza os dados.
      </p>

      <h3>Algoritmo de Transposição:</h3>
      <pre>
        <code>
          {`void transpoeMatriz(int matriz_original[][numero_de_colunas], int matriz_transposta[][numero_de_linhas], int numero_de_linhas, int numero_de_colunas) {
  int i, j;
  for (i = 0; i < numero_de_linhas; i++) {
    for (j = 0; j < numero_de_colunas; j++) {
      matriz_transposta[j][i] = matriz_original[i][j];
    }
  }
}`}
        </code>
      </pre>

      <h2>2. A Multiplicação Mágica de Matrizes:</h2>
      <p>
        Imagine combinar duas matrizes como se fossem poções mágicas. A
        multiplicação de matrizes é como misturar essas poções para criar uma
        nova com propriedades únicas.
      </p>

      <h3>Algoritmo de Multiplicação de Matrizes:</h3>
      <pre>
        <code>
          {`void multiplicaMatrizes(int matriz_a[][numero_de_colunas_a], int matriz_b[][numero_de_colunas_b], int matriz_resultado[][numero_de_colunas_b], int numero_de_linhas_a, int numero_de_colunas_a, int numero_de_linhas_b) {
  int i, j, k;
  for (i = 0; i < numero_de_linhas_a; i++) {
    for (j = 0; j < numero_de_colunas_b; j++) {
      matriz_resultado[i][j] = 0;
      for (k = 0; k < numero_de_colunas_a; k++) {
        matriz_resultado[i][j] += matriz_a[i][k] * matriz_b[k][j];
      }
    }
  }
}`}
        </code>
      </pre>

      <h2>3. Operações Básicas com Matrizes:</h2>
      <p>Realize cálculos poderosos com suas matrizes como um alquimista:</p>

      <h3>1. Soma e Subtração:</h3>
      <pre>
        <code>
          {`void somaMatrizes(int matriz_a[][numero_de_colunas], int matriz_b[][numero_de_colunas], int matriz_resultado[][numero_de_colunas], int numero_de_linhas, int numero_de_colunas) {
  int i, j;
  for (i = 0; i < numero_de_linhas; i++) {
    for (j = 0; j < numero_de_colunas; j++) {
      matriz_resultado[i][j] = matriz_a[i][j] + matriz_b[i][j];
    }
  }
}

void subtraiMatrizes(int matriz_a[][numero_de_colunas], int matriz_b[][numero_de_colunas], int matriz_resultado[][numero_de_colunas], int numero_de_linhas, int numero_de_colunas) {
  int i, j;
  for (i = 0; i < numero_de_linhas; i++) {
    for (j = 0; j < numero_de_colunas; j++) {
      matriz_resultado[i][j] = matriz_a[i][j] - matriz_b[i][j];
    }
  }
}`}
        </code>
      </pre>

      <p>
        <strong>Observação:</strong> Soma e subtração só são possíveis entre
        matrizes com dimensões iguais.
      </p>

      <h3>2. Multiplicação por Escalar:</h3>
      <pre>
        <code>
          {`void multiplicaEscalar(int matriz[][numero_de_colunas], int escalar, int matriz_resultado[][numero_de_colunas], int numero_de_linhas, int numero_de_colunas) {
  int i, j;
  for (i = 0; i < numero_de_linhas; i++) {
    for (j = 0; j < numero_de_colunas; j++) {
      matriz_resultado[i][j] = matriz[i][j] * escalar;
    }
  }
}`}
        </code>
      </pre>

      <h3>3. Soma de todos os Elementos (Traço):</h3>
      <pre>
        <code>
          {`int calculaTraco(int matriz[][numero_de_colunas], int tamanho) {
  int soma = 0;
  int i;
  for (i = 0; i < tamanho; i++) {
    soma += matriz[i][i];
  }
  return soma;
}`}
        </code>
      </pre>

      <p>
        <strong>Observação:</strong> O traço só pode ser calculado em matrizes
        quadradas (mesmo número de linhas e colunas).
      </p>

      <h2>Atividade Prática:</h2>
      <p>Desenvolva um programa que:</p>
      <ul>
        <li>
          <strong>Lê duas matrizes quadradas de inteiros do usuário.</strong>
        </li>
        <li>
          <strong>Verifica se as matrizes possuem dimensões iguais.</strong>
        </li>
        <li>
          <strong>
            Implementa funções para realizar a transposição, soma, subtração e
            cálculo do traço de cada matriz.
          </strong>
        </li>
        <li>
          <strong>
            Permite ao usuário escolher qual operação deseja realizar entre as
            matrizes (transposição, soma, subtração ou traço).
          </strong>
        </li>
        <li>
          <strong>Exibe o resultado da operação escolhida pelo usuário.</strong>
        </li>
      </ul>
    </div>
  );
};

export default ManipulacaoMatrizes;
