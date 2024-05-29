const ArraysStructs = () => {
    return (
      <div>
      <h2>Aula 2: Arrays de Structs</h2>

      <h3>Por: Mariana de Oliveira</h3>

      <h2>Slides utilizados</h2>
      <embed
        src="/public/structs/ArraysStructs.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <h3>1. Declaração de Arrays de Structs</h3>
      <h4>1.1 Sintaxe e exemplos</h4>
      <p>A sintaxe para declarar um array de structs em C é a seguinte:</p>
      <pre>
        <code>
{`tipo_da_struct nome_do_array[tamanho];`}
        </code>
      </pre>
      <p><strong>Exemplo:</strong></p>
      <pre>
        <code>
{`struct Aluno {
  char nome[50];
  int matricula;
};

struct Aluno alunos[10]; // Array de 10 structs Aluno`}
        </code>
      </pre>
      <p>Nesse exemplo, a struct <code>Aluno</code> é declarada e um array chamado <code>alunos</code> é criado com capacidade para armazenar 10 structs do tipo <code>Aluno</code>.</p>

      <h4>1.2 Inicialização de arrays de structs</h4>
      <p>Os elementos de um array de structs podem ser inicializados da mesma forma que variáveis normais:</p>
      <pre>
        <code>
{`struct Aluno aluno1 = {"Ana Silva", 12345};
struct Aluno aluno2 = {"João Santos", 54321};

struct Aluno alunos[2] = {aluno1, aluno2}; // Inicialização com elementos pré-definidos`}
        </code>
      </pre>
      <p>Nesse exemplo, as structs <code>aluno1</code> e <code>aluno2</code> são inicializadas e utilizadas para inicializar os dois primeiros elementos do array <code>alunos</code>.</p>

      <h3>2. Acessando Elementos de Arrays de Structs</h3>
      <h4>2.1 Usando índices e ponteiros</h4>
      <p>Os elementos de um array de structs podem ser acessados usando o operador <code>[]</code>:</p>
      <pre>
        <code>
{`struct Aluno aluno = alunos[0]; // Acessa o primeiro elemento do array

// Acessando membros de um elemento específico
printf("Nome: %s\\n", alunos[1].nome);`}
        </code>
      </pre>
      <p>Nesse exemplo, o primeiro elemento do array <code>alunos</code> é acessado e armazenado na variável <code>aluno</code>. O membro <code>nome</code> do segundo elemento do array é acessado e impresso.</p>
      <p>Ponteiros também podem ser usados para acessar elementos de arrays de structs:</p>
      <pre>
        <code>
{`struct Aluno *ptr_aluno = &alunos[0]; // Ponteiro para o primeiro elemento

// Acessando membros através do ponteiro
printf("Matricula: %d\\n", ptr_aluno->matricula);`}
        </code>
      </pre>
      <p>Nesse exemplo, um ponteiro <code>ptr_aluno</code> é criado e apontado para o primeiro elemento do array <code>alunos</code>. O membro <code>matricula</code> do elemento acessado pelo ponteiro é impresso.</p>

      <h4>2.2 Exemplos práticos</h4>
      <pre>
        <code>
{`#include <stdio.h>
#include <string.h>

struct Pessoa {
  char nome[50];
  int idade;
};

int main() {
  struct Pessoa pessoas[3];

  // Inicializando elementos do array
  strcpy(pessoas[0].nome, "Joana");
  pessoas[0].idade = 25;

  strcpy(pessoas[1].nome, "Pedro");
  pessoas[1].idade = 30;

  strcpy(pessoas[2].nome, "Maria");
  pessoas[2].idade = 35;

  // Imprimindo informações de cada pessoa
  for (int i = 0; i < 3; i++) {
    printf("Nome: %s\\n", pessoas[i].nome);
    printf("Idade: %d\\n\\n", pessoas[i].idade);
  }

  return 0;
}`}
        </code>
      </pre>
      <p>Este exemplo cria um array <code>pessoas</code> de 3 structs <code>Pessoa</code>. As structs são inicializadas com dados específicos e um loop é utilizado para imprimir o nome e a idade de cada pessoa.</p>

      <h3>3. Funções com Arrays de Structs</h3>
      <h4>3.1 Passando arrays de structs como parâmetros</h4>
      <p>Arrays de structs podem ser passados como parâmetros para funções:</p>
      <pre>
        <code>
{`void imprimirAlunos(struct Aluno alunos[], int tamanho) {
  // Imprime os dados de cada aluno do array
  for (int i = 0; i < tamanho; i++) {
    printf("Nome: %s\\n", alunos[i].nome);
    printf("Matricula: %d\\n\\n", alunos[i].matricula);
  }
}

int main() {
  struct Aluno alunos[2];

  // ...

  imprimirAlunos(alunos, 2); // Passando o array e seu tamanho como parâmetros

  return 0;
}`}
        </code>
      </pre>
      <p>Nesse exemplo, a função <code>imprimirAlunos</code> recebe um array de structs <code>Aluno</code> como parâmetro e imprime os dados de cada aluno.</p>

      <h4>3.2 Retornando arrays de structs como resultado</h4>
      <p><strong>Observação:</strong> Em C, não é possível retornar diretamente um array de structs como resultado de uma função. Isso porque o tamanho do array alocado na função chamadora pode ser diferente do tamanho esperado pela função que retorna o array.</p>
      <p>Para contornar essa limitação, existem duas abordagens comuns:</p>
      <ul>
        <li><strong>Passar o array como parâmetro e modificá-lo dentro da função:</strong> A função recebe o array como parâmetro e modifica seus elementos diretamente.</li>
        <li><strong>Retornar um ponteiro para o array alocado dentro da função:</strong> A função aloca memória para o array e retorna um ponteiro para o primeiro elemento. A responsabilidade de liberar a memória alocada é da função chamadora.</li>
      </ul>
      <p><strong>Exemplo (modificando o array dentro da função):</strong></p>
      <pre>
        <code>
{`void ordenarAlunosPorNome(struct Aluno alunos[], int tamanho) {
  // Ordenação por bolha (exemplo simples)
  for (int i = 0; i < tamanho - 1; i++) {
    for (int j = 0; j < tamanho - i - 1; j++) {
      if (strcmp(alunos[j].nome, alunos[j + 1].nome) > 0) {
        struct Aluno temp = alunos[j];
        alunos[j] = alunos[j + 1];
        alunos[j + 1] = temp;
      }
    }
  }
}

int main() {
  struct Aluno alunos[2];

  // ...

  ordenarAlunosPorNome(alunos, 2); // Passa o array para ordenação

  // ... (utilizar o array ordenado)

  return 0;
}`}
        </code>
      </pre>
      <p>Neste exemplo, a função <code>ordenarAlunosPorNome</code> recebe um array de structs <code>Aluno</code> e ordena seus elementos por nome (usando o algoritmo de bolha como exemplo). A função modifica o próprio array passado como parâmetro.</p>

      <h3>4. Exemplos Práticos</h3>
      <h4>4.1 Criando um array de structs para armazenar alunos</h4>
      <p><strong>Exemplo utilizando a abordagem vista anteriormente:</strong></p>
      <pre>
        <code>
{`#include <stdio.h>
#include <string.h>

struct Aluno {
  char nome[50];
  int matricula;
};

void imprimirAlunos(struct Aluno alunos[], int tamanho) {
  for (int i = 0; i < tamanho; i++) {
    printf("Nome: %s\\n", alunos[i].nome);
    printf("Matricula: %d\\n\\n", alunos[i].matricula);
  }
}

int main() {
  struct Aluno alunos[3];

  // Inicializando elementos do array
  strcpy(alunos[0].nome, "Carlos");
  alunos[0].matricula = 98765;

  strcpy(alunos[1].nome, "Beatriz");
  alunos[1].matricula = 12345;

  strcpy(alunos[2].nome, "Daniel");
  alunos[2].matricula = 54321;

  imprimirAlunos(alunos, 3);

  return 0;
}`}
        </code>
      </pre>
      <p>Este exemplo demonstra a criação e utilização de um array de structs <code>Aluno</code> para armazenar dados de alunos. A função <code>imprimirAlunos</code> é utilizada para exibir as informações de cada aluno.</p>

      <h4>4.2 Ordenando um array de structs por nome</h4>
      <p><strong>Exemplo utilizando a abordagem de modificar o array dentro da função:</strong></p>
      <pre>
        <code>
{`#include <stdio.h>
#include <string.h>

struct Aluno {
  char nome[50];
  int matricula;
};

void ordenarAlunosPorNome(struct Aluno alunos[], int tamanho) {
  // ... (implementação da ordenação por bolha, como visto anteriormente)
}

int main() {
  struct Aluno alunos[2];

  // ... (inicializar o array de alunos)

  ordenarAlunosPorNome(alunos, 2);  // Ordena o array por nome

  // ... (utilizar o array ordenado)

  return 0;
}`}
        </code>
      </pre>
      <p>Este exemplo demonstra a ordenação de um array de structs <code>Aluno</code> por nome utilizando a função <code>ordenarAlunosPorNome</code>. A função modifica diretamente o array recebido como parâmetro.</p>

      <h4>4.3 Buscando um elemento em um array de structs</h4>
      <p>Aqui, podemos implementar a busca por um elemento no array de structs utilizando duas abordagens:</p>
      <ol>
        <li><strong>Busca sequencial:</strong> Percorre o array elemento por elemento comparando um valor específico com o membro desejado (por exemplo, a matrícula) até encontrar uma correspondência.</li>
        <li><strong>Busca binária (para arrays ordenados):</strong> Se o array de structs já estiver ordenado por um determinado critério (como nome ou matrícula), podemos empregar a busca binária para localizar um elemento de forma mais eficiente.</li>
      </ol>
      <p><strong>Exemplo (busca sequencial por matrícula):</strong></p>
      <pre>
        <code>
{`#include <stdio.h>

struct Aluno {
  char nome[50];
  int matricula;
};

int buscarAlunoPorMatricula(struct Aluno alunos[], int tamanho, int matriculaBusca) {
  for (int i = 0; i < tamanho; i++) {
    if (alunos[i].matricula == matriculaBusca) {
      return i; // Retorna o índice do elemento encontrado
    }
  }
  return -1; // Elemento não encontrado
}

int main() {
  struct Aluno alunos[3];

  // ... (inicializar o array de alunos)

  int matricula = 12345; // Matrícula a ser buscada
  int indice = buscarAlunoPorMatricula(alunos, 3, matricula);

  if (indice != -1) {
    printf("Aluno encontrado no índice %d\\n", indice);
  } else {
    printf("Aluno não encontrado\\n");
  }

  return 0;
}`}
        </code>
      </pre>
      <p>Este exemplo demonstra a busca sequencial por um aluno no array de structs <code>alunos</code> utilizando a matrícula como critério. A função <code>buscarAlunoPorMatricula</code> percorre o array e retorna o índice do elemento encontrado ou -1 caso não encontre.</p>
      <p><strong>Observação sobre a busca binária:</strong></p>
      <p>A busca binária requer que o array de structs esteja previamente ordenado por um determinado critério. Implementar a busca binária envolve conceitos adicionais de ordenação e pesquisa binária que podem ser abordados em aulas posteriores.</p>
      <p>Lembre-se que essas são apenas algumas aplicações básicas de arrays de structs em C. Existem muitas outras possibilidades de manipulação e organização de dados complexos utilizando esse recurso.</p>
    </div>
    );
  };
  
  export default ArraysStructs;
  