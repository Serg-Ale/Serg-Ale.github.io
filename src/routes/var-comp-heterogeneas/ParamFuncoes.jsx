const ParamFuncoes = () => {
    return (
      <div>
      <h2>Aula 3: Structs como Parâmetros de Funções</h2>

      <h3>1. Passagem de Structs por Valor</h3>
      <h4>1.1 Cópia de valores e modificações</h4>
      <p>Ao passar uma struct como parâmetro por valor para uma função, uma <strong>cópia</strong> dos valores da struct é criada na memória da função. Modificações feitas na struct dentro da função <strong>não afetam</strong> a struct original na memória da função chamadora.</p>
      <p><strong>Exemplo:</strong></p>
      <pre>
        <code>
{`#include <stdio.h>

struct Ponto {
  int x;
  int y;
};

void modificarPonto(struct Ponto p) {
  p.x = 10; // Modifica a cópia da struct
}

int main() {
  struct Ponto p1 = {5, 3};

  modificarPonto(p1); // Passa a struct por valor

  // A struct original não é modificada
  printf("Coordenadas do ponto: (%d, %d)\\n", p1.x, p1.y);

  return 0;
}`}
        </code>
      </pre>
      <p>Neste exemplo, a função <code>modificarPonto</code> recebe uma struct <code>Ponto</code> por valor. A função modifica a cópia da struct, mas a struct original na função <code>main</code> permanece inalterada.</p>

      <h3>2. Passagem de Structs por Referência</h3>
      <h4>2.1 Modificando a struct original</h4>
      <p>Ao passar uma struct como parâmetro por referência para uma função, o <strong>endereço de memória</strong> da struct original é passado para a função. Modificações feitas na struct dentro da função <strong>afetam</strong> a struct original na memória da função chamadora.</p>
      <p><strong>Exemplo:</strong></p>
      <pre>
        <code>
{`#include <stdio.h>

struct Ponto {
  int x;
  int y;
};

void modificarPonto(struct Ponto *p) {
  p->x = 10; // Modifica a struct original através do ponteiro
}

int main() {
  struct Ponto p1 = {5, 3};

  modificarPonto(&p1); // Passa a struct por referência (endereço)

  // A struct original é modificada
  printf("Coordenadas do ponto: (%d, %d)\\n", p1.x, p1.y);

  return 0;
}`}
        </code>
      </pre>
      <p>Neste exemplo, a função <code>modificarPonto</code> recebe um ponteiro para uma struct <code>Ponto</code> como parâmetro. A função modifica a struct original através do ponteiro, alterando os valores da struct na memória da função <code>main</code>.</p>

      <h4>2.2 Ponteiros para structs</h4>
      <p>Para passar uma struct por referência, é necessário utilizar um ponteiro para a struct. O operador <code>&</code> é utilizado para obter o endereço de memória de uma variável.</p>
      <p><strong>Exemplo:</strong></p>
      <pre>
        <code>
{`struct Ponto {
  int x;
  int y;
};

void modificarPonto(struct Ponto *p) {
  // ...
}

int main() {
  struct Ponto p1;

  // Obtém o endereço de memória da struct
  struct Ponto *ptr_ponto = &p1;

  modificarPonto(ptr_ponto); // Passa o ponteiro para a struct

  // ...
}`}
        </code>
      </pre>
      <p>Neste exemplo, o ponteiro <code>ptr_ponto</code> é criado para armazenar o endereço de memória da struct <code>p1</code>. O ponteiro é então passado para a função <code>modificarPonto</code> como parâmetro.</p>

      <h3>3. Exemplos Práticos</h3>
      <h4>3.1 Função para calcular a área de um retângulo</h4>
      <pre>
        <code>
{`#include <stdio.h>

struct Retangulo {
  int base;
  int altura;
};

int calcularAreaRetangulo(struct Retangulo r) {
  return r.base * r.altura;
}

int main() {
  struct Retangulo ret = {5, 10};

  int area = calcularAreaRetangulo(ret);

  printf("Área do retângulo: %d\\n", area);

  return 0;
}`}
        </code>
      </pre>
      <p>Neste exemplo, a função <code>calcularAreaRetangulo</code> recebe uma struct <code>Retangulo</code> por valor e calcula sua área. A struct é copiada para a memória da função, mas a struct original na função <code>main</code> não é modificada.</p>

      <h4>3.2 Função para trocar os valores de duas structs</h4>
      <pre>
        <code>
{`#include <stdio.h>

struct Ponto {
  int x;
  int y;
};

void trocarValores(struct Ponto *p1, struct Ponto *p2) {
  struct Ponto temp = *p1; // Armazena temporariamente o valor de p1
  *p1 = *p2; // Copia o valor de p2 para p1
  *p2 = temp; // Copia o valor original de p1 para p2
}

int main() {
  struct Ponto ponto1 = {5, 3};
  struct Ponto ponto2 = {10, 2};

  printf("Valores iniciais:\\n");
  printf("Ponto 1: (%d, %d)\\n", ponto1.x, ponto1.y);
  printf("Ponto 2: (%d, %d)\\n", ponto2.x, ponto2.y);

  trocarValores(&ponto1, &ponto2); // Passa os endereços das structs

  printf("Valores trocados:\\n");
  printf("Ponto 1: (%d, %d)\\n", ponto1.x, ponto1.y);
  printf("Ponto 2: (%d, %d)\\n", ponto2.x, ponto2.y);

  return 0;
}`}
        </code>
      </pre>
      <p>Neste exemplo, a função <code>trocarValores</code> recebe dois ponteiros para structs <code>Ponto</code> como parâmetros. A função utiliza uma variável temporária <code>temp</code> do tipo <code>Ponto</code> para armazenar o valor de <code>p1</code> temporariamente. Em seguida, o valor de <code>p2</code> é copiado para <code>p1</code> e, por fim, o valor original de <code>p1</code> (armazenado em <code>temp</code>) é copiado para <code>p2</code>. Dessa forma, os valores das structs originais na função <code>main</code> são trocados.</p>

      <p>Esses exemplos demonstram a diferença entre passar structs por valor e por referência como parâmetros para funções em C. A escolha do método apropriado depende da necessidade de modificar a struct original dentro da função.</p>
    </div>
    );
  };
  
  export default ParamFuncoes;
  