
const ManipulacaoVetores = () => {
  return (
    <div>
      <h2 data-heading="**Aula 2: Domine os Vetores em C**">
        <strong>Aula 2: Domine os Vetores em C</strong>
      </h2>
      <h3>Por: Sérgio Alexandre</h3>

      <p>
        <strong>Objetivo:</strong> Nesta aula, você irá:
      </p>
      <ul>
        <li>
          <strong>Tornar-se um mestre da ordenação:</strong> Aprenda a organizar
          seus dados em ordem crescente ou decrescente usando dois algoritmos
          poderosos: Bubble Sort e Selection Sort.
        </li>
        <li>
          <strong>Encontrar o que procura:</strong> Domine a arte da busca
          linear e binária para encontrar qualquer valor em seu vetor com
          rapidez e precisão.
        </li>
        <li>
          <strong>Realizar operações matemáticas:</strong> Some, multiplique e
          calcule estatísticas de seus vetores com maestria.
        </li>
      </ul>
      <p>
        <strong>1. A Magia da Ordenação:</strong>
      </p>
      <p>
        Imagine um baú mágico com itens bagunçados. A ordenação é como organizar
        os itens em ordem, seja para facilitar a busca ou para realizar
        cálculos.
      </p>
      <p>
        <strong>Algoritmos de Ordenação:</strong>
      </p>
      <p>
        <strong>1. Bubble Sort:</strong>
      </p>
      <pre className="language-c" tabIndex="0">
        <code className="language-c is-loaded">
          {`void bubbleSort(int vetor[], int tamanho) {
  int i, j;
  for (i = 0; i < tamanho - 1; i++) {
    for (j = 0; j < tamanho - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        int temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
    }
  }
}`}
        </code>
      </pre>
      <ul>
        <li>
          <strong>Explicação:</strong> O Bubble Sort funciona como bolhas
          subindo em um líquido. Compara elementos adjacentes e troca os que
          estão em ordem inversa. É um algoritmo simples, mas pode ser lento
          para grandes conjuntos de dados.
        </li>
      </ul>
      <p>
        <strong>2. Selection Sort:</strong>
      </p>
      <pre className="language-c" tabIndex="0">
        <code className="language-c is-loaded">
          {`void selectionSort(int vetor[], int tamanho) {
  int i, j, min_idx;
  for (i = 0; i < tamanho - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < tamanho; j++) {
      if (vetor[j] < vetor[min_idx]) {
        min_idx = j;
      }
    }
    int temp = vetor[min_idx];
    vetor[min_idx] = vetor[i];
    vetor[i] = temp;
  }
}`}
        </code>
      </pre>
      <ul>
        <li>
          <strong>Explicação:</strong> O Selection Sort funciona como um mago
          escolhendo o melhor candidato para uma tarefa. Encontra o menor
          elemento do vetor e o coloca no início, a cada iteração. É um pouco
          mais eficiente que o Bubble Sort, mas ainda pode ser lento para
          grandes conjuntos de dados.
        </li>
      </ul>
      <p>
        <strong>2. A Busca Implacável:</strong>
      </p>
      <p>Encontre qualquer item em seu vetor como um verdadeiro detetive!</p>
      <p>
        <strong>Métodos de Busca:</strong>
      </p>
      <p>
        <strong>1. Busca Linear:</strong>
      </p>
      <pre className="language-c" tabIndex="0">
        <code className="language-c is-loaded">
          {`int buscaLinear(int vetor[], int tamanho, int valor) {
  int i;
  for (i = 0; i < tamanho; i++) {
    if (vetor[i] == valor) {
      return i;
    }
  }
  return -1;
}`}
        </code>
      </pre>
      <ul>
        <li>
          <strong>Explicação:</strong> A busca linear é como procurar um livro
          em uma estante. Compara o valor buscado com cada elemento do vetor, um
          por um. É um algoritmo simples, mas pode ser lento para grandes
          conjuntos de dados.
        </li>
      </ul>
      <p>
        <strong>2. Busca Binária:</strong>
      </p>
      <pre className="language-c" tabIndex="0">
        <code className="language-c is-loaded">
          {`int buscaBinaria(int vetor[], int tamanho, int valor) {
  int inicio = 0;
  int fim = tamanho - 1;
  int meio;
  while (inicio <= fim) {
    meio = (inicio + fim) / 2;
    if (vetor[meio] == valor) {
      return meio;
    } else if (valor < vetor[meio]) {
      fim = meio - 1;
    } else {
      inicio = meio + 1;
    }
  }
  return -1;
}`}
        </code>
      </pre>
      <ul>
        <li>
          <strong>Explicação:</strong> A busca binária é como procurar um item
          em um dicionário. Divide o vetor em partes menores e busca o item de
          forma mais eficiente, como um mago usando um portal mágico. É um
          algoritmo mais complexo, mas muito mais rápido que a busca linear para
          grandes conjuntos de dados.
        </li>
      </ul>
      <p>
        <strong>3. Operações Matemáticas com Vetores:</strong>
      </p>
      <p>Realize cálculos poderosos com seus dados como um alquimista:</p>
      <p>
        <strong>1. Soma de Vetores:</strong>
      </p>
      <pre className="language-c" tabIndex="0">
        <code className="language-c is-loaded">
          {`void somaVetores(int vetor1[], int vetor2[], int result[], int tamanho) {
  int i;
  for (i = 0; i < tamanho; i++) {
    result[i] = vetor1[i] + vetor2[i];
  }
}`}
        </code>
      </pre>
      <ul>
        <li>
          <strong>Explicação:</strong> A soma de vetores soma os elementos
          correspondentes de dois vetores do mesmo tamanho e armazena o
          resultado em um terceiro vetor. Certifique-se de que os vetores tenham
          o mesmo tamanho para realizar a soma.
        </li>
      </ul>
      <p>
        <strong>2. Multiplicação por Escalar:</strong>
      </p>
      <pre className="language-c" tabIndex="0">
        <code className="language-c is-loaded">
          {`void multiplicaEscalar(int vetor[], int tamanho, int escalar) {
  int i;
  for (i = 0; i < tamanho; i++) {
    vetor[i] = vetor[i] * escalar;
  }
}`}
        </code>
      </pre>
      <ul>
        <li>
          <strong>Explicação:</strong> A multiplicação por escalar multiplica
          cada elemento do vetor por um valor constante (escalar). É como
          aumentar ou diminuir o volume de uma poção mágica.
        </li>
      </ul>
      <p>
        <strong>3. Estatísticas:</strong>
      </p>
      <ul>
        <li>
          <strong>Média:</strong> Some todos os elementos do vetor e divida pelo
          número de elementos.
        </li>
      </ul>
      <pre className="language-c" tabIndex="0">
        <code className="language-c is-loaded">
          {`float calculaMedia(int vetor[], int tamanho) {
  int soma = 0;
  int i;
  for (i = 0; i < tamanho; i++) {
    soma += vetor[i];
  }
  return (float)soma / tamanho;
}`}
        </code>
      </pre>
      <ul>
        <li>
          <strong>Soma:</strong> Some todos os elementos do vetor.
        </li>
      </ul>
      <pre className="language-c" tabIndex="0">
        <code className="language-c is-loaded">
          {`int calculaSoma(int vetor[], int tamanho) {
  int soma = 0;
  int i;
  for (i = 0; i < tamanho; i++) {
    soma += vetor[i];
  }
  return soma;
}`}
        </code>
      </pre>
    </div>
  );
};

export default ManipulacaoVetores;
