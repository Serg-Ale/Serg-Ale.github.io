const IntroStructs = () => {
  return (
    <div>
      <h2>Aula 1: Introdução às Structs</h2>

      <h3>Por: Mariana de Oliveira</h3>

      <h2>Slides utilizados</h2>
      <embed
        src="/public/structs/IntroStructs.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <h3>1. Introdução</h3>
      <h4>1.1 O que são structs e suas vantagens?</h4>
      <p>
        Uma struct, ou estrutura em português, é um tipo de dado composto em C que permite agrupar diferentes tipos de dados em uma única variável. Isso facilita a organização e o gerenciamento de dados relacionados, especialmente quando esses dados possuem diferentes tipos.
      </p>
      <p><strong>Vantagens de usar structs:</strong></p>
      <ul>
        <li><strong>Organização:</strong> Permitem agrupar dados relacionados de forma lógica, tornando o código mais organizado e legível.</li>
        <li><strong>Reutilização:</strong> Permitem criar tipos de dados personalizados que podem ser reutilizados em diferentes partes do código.</li>
        <li><strong>Eficiência:</strong> Permitem otimizar o uso da memória, pois agrupam dados em um único bloco.</li>
      </ul>

      <h4>1.2 Diferença entre structs e unions</h4>
      <p>Structs e unions são tipos de dados compostos em C, mas possuem diferenças importantes:</p>
      <ul>
        <li><strong>Structs:</strong> Permitem agrupar dados de diferentes tipos em uma única variável, cada um com seu próprio nome e tipo de dado.</li>
        <li><strong>Unions:</strong> Permitem armazenar diferentes tipos de dados em um único espaço de memória, mas apenas um dos tipos de dados pode ser acessado por vez.</li>
      </ul>
      <p><strong>Em resumo:</strong></p>
      <ul>
        <li>Structs: foco em <strong>agrupar dados</strong>.</li>
        <li>Unions: foco em <strong>compartilhar um espaço de memória</strong>.</li>
      </ul>

      <h4>1.3 Declaração e estrutura de uma struct</h4>
      <p>A sintaxe para declarar uma struct em C é a seguinte:</p>
      <pre>
        <code>
          {`struct nome_da_struct {
  tipo_de_dado1 membro1;
  tipo_de_dado2 membro2;
...
};`}
        </code>
      </pre>
      <p><strong>Exemplo:</strong></p>
      <pre>
        <code>
          {`struct Ponto {
  int x;
  int y;
};`}
        </code>
      </pre>
      <p>Essa struct define um tipo de dado chamado <code>Ponto</code> com dois membros: <code>x</code> e <code>y</code>, ambos do tipo <code>int</code>.</p>

      <h3>2. Membros de Structs</h3>
      <h4>2.1 Tipos de dados e modificadores de acesso</h4>
      <p>
        Os membros de uma struct podem ser de qualquer tipo de dado em C, incluindo tipos básicos (int, float, char) e outros tipos compostos (structs, unions).
      </p>
      <p>Modificadores de acesso podem ser usados para controlar o acesso aos membros de uma struct:</p>
      <ul>
        <li><code>public</code>: acesso livre de qualquer lugar do código.</li>
        <li><code>private</code>: acesso restrito à struct em que são declarados.</li>
      </ul>
      <p><strong>Exemplo:</strong></p>
      <pre>
        <code>
          {`struct Pessoa {
public:
  char nome[50];
  int idade;
private:
  char cpf[11];
};`}
        </code>
      </pre>
      <p>
        Nessa struct, os membros <code>nome</code> e <code>idade</code> são públicos e podem ser acessados de qualquer lugar do código, enquanto o membro <code>cpf</code> é privado e só pode ser acessado dentro da struct <code>Pessoa</code>.
      </p>

      <h4>2.2 Declaração e inicialização de membros</h4>
      <p>Os membros de uma struct podem ser declarados e inicializados da mesma forma que variáveis normais:</p>
      <pre>
        <code>
          {`struct Ponto p1 = {10, 20};`}
        </code>
      </pre>
      <p>Essa declaração cria uma variável <code>p1</code> do tipo <code>Ponto</code> e inicializa seus membros <code>x</code> e <code>y</code> com os valores 10 e 20, respectivamente.</p>

      <h4>2.3 Acessando membros de structs</h4>
      <p>Os membros de uma struct podem ser acessados usando o operador <code>.</code>:</p>
      <pre>
        <code>
          {`int x = p1.x; // Atribui o valor de p1.x à variável x`}
        </code>
      </pre>
      <p>Nesse exemplo, o valor do membro <code>x</code> da struct <code>p1</code> é atribuído à variável <code>x</code>.</p>

      <h3>3. Operadores com Structs</h3>
      <h4>3.1 Atribuição</h4>
      <p>Structs podem ser atribuídas umas às outras, copiando os valores de todos os seus membros:</p>
      <pre>
        <code>
          {`struct Ponto p2 = p1;`}
        </code>
      </pre>
      <p>Nesse exemplo, a struct <code>p2</code> é inicializada com os mesmos valores da struct <code>p1</code>.</p>

      <h4>3.2 Comparação</h4>
      <p>Structs podem ser comparadas usando os operadores relacionais (<code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>). A comparação é feita membro a membro:</p>
      <pre>
        <code>
          {`if (p1 == p2) {
// ...
}`}
        </code>
      </pre>
      <p>Nesse exemplo, as structs <code>p1</code> e <code>p2</code> são comparadas. Se todos os seus membros forem iguais, o bloco <code>if</code> será executado.</p>

      <h4>3.3 Cópia</h4>
      <p>Structs podem ser copiadas usando a função <code>memcpy()</code>:</p>
      <p><strong>Observação sobre a cópia de structs:</strong></p>
      <p>A função <code>memcpy()</code> copia o conteúdo bruto da memória, sem levar em conta os tipos de dados dos membros. É importante usá-la com cautela e apenas quando se sabe exatamente o tamanho e a disposição dos membros na memória.</p>
      <p>Para cópias seguras e que respeitem os tipos de dados, é recomendável criar uma função específica para cada struct que realize a cópia membro a membro.</p>

      <h3>4. Exemplos Práticos</h3>
      <h4>4.1 Criando uma struct para representar um ponto no plano</h4>
      <pre>
        <code>
          {`#include <stdio.h>

struct Ponto {
  int x;
  int y;
};

int main() {
  struct Ponto p1; // Declara uma variável do tipo Ponto

  // Acessando e modificando membros
  p1.x = 5;
  p1.y = 3;

  printf("Coordenadas do ponto: (%d, %d)\\n", p1.x, p1.y);

  return 0;
}`}
        </code>
      </pre>
      <p>Este exemplo define uma struct <code>Ponto</code> com dois membros, <code>x</code> e <code>y</code>, ambos do tipo <code>int</code>. A função <code>main</code> declara uma variável <code>p1</code> do tipo <code>Ponto</code>, modifica seus membros e imprime as coordenadas do ponto no plano.</p>

      <h4>4.2 Criando uma struct para representar uma data</h4>
      <pre>
        <code>
          {`#include <stdio.h>

struct Data {
  int dia;
  int mes;
  int ano;
};

int main() {
  struct Data hoje;

  // Inicializando membros
  hoje.dia = 26;
  hoje.mes = 3;
  hoje.ano = 2024;

  printf("Data: %d/%d/%d\\n", hoje.dia, hoje.mes, hoje.ano);

  return 0;
}`}
        </code>
      </pre>
      <p>Este exemplo define uma struct <code>Data</code> com três membros: <code>dia</code>, <code>mes</code> e <code>ano</code>, todos do tipo <code>int</code>. A função <code>main</code> declara uma variável <code>hoje</code> do tipo <code>Data</code>, inicializa seus membros e imprime a data formatada.</p>

      <h4>4.3 Manipulando structs e seus membros</h4>
      <pre>
        <code>
          {`#include <stdio.h>

struct Retangulo {
  int base;
  int altura;
};

int calcularArea(struct Retangulo ret) {
  return ret.base * ret.altura;
}

int main() {
  struct Retangulo ret1;

  ret1.base = 10;
  ret1.altura = 5;

  int area = calcularArea(ret1);

  printf("A area do retangulo e: %d\\n", area);

  return 0;
}`}
        </code>
      </pre>
      <p>Este exemplo define uma struct <code>Retangulo</code> com dois membros: <code>base</code> e <code>altura</code>, ambos do tipo <code>int</code>. A função <code>calcularArea</code> recebe um argumento do tipo <code>Retangulo</code> e calcula sua área. A função <code>main</code> declara uma variável <code>ret1</code> do tipo <code>Retangulo</code>, modifica seus membros, chama a função <code>calcularArea</code> e imprime o resultado.</p>

      <p>Esses são apenas alguns exemplos para demonstrar o uso básico de structs em C. Existem muitas outras aplicações possíveis, e a criação de structs personalizadas é uma ferramenta valiosa para organizar e manipular dados complexos.</p>
    </div>
  );
};

export default IntroStructs;
