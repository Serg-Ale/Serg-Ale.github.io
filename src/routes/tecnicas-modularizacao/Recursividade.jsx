const Recursividade = () => {
  return (
    <div>
      <h2 id="recursividade">
        <strong>Aula 2: Introdução a Recursividade</strong>
      </h2>
      <h3>Por: Giovana Hoffmann</h3>
      <iframe width="1200" height="700" src="https://www.youtube.com/embed/8FeuNLzMrrk?si=VzAkPKgT7gK4IH10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <embed
        src="/public/modularizacao/recursividade.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <h2 id="objetivos">
        <strong>Objetivos:</strong>
      </h2>
      <ul>
        <li>Introduzir o conceito de recursão em C.</li>
        <li>Explicar casos base e casos recursivos.</li>
        <li>Demonstrar exemplos práticos de funções recursivas.</li>
      </ul>

      <h2>Entendendo a Recursividade em C</h2>

      <h3>O que é Recursividade?</h3>
      <ul>
        <li><strong>Definição:</strong> Recursividade é uma técnica de programação onde uma função chama a si mesma diretamente ou indiretamente.</li>
        <li><strong>Importância:</strong> Simplifica a resolução de problemas complexos, dividindo-os em subproblemas menores e mais manejáveis.</li>
      </ul>

      <h3>Aplicações da Recursividade</h3>
      <ul>
        <li><strong>Divisão e Conquista:</strong> Algoritmos como Quick Sort e Merge Sort.</li>
        <li><strong>Problemas Combinatórios:</strong> Permutações, combinações, torres de Hanói.</li>
        <li><strong>Árvores e Grafos:</strong> Percursos em árvores (preorder, inorder, postorder) e busca em grafos (DFS).</li>
      </ul>

      <h3>Casos Base e Casos Recursivos</h3>
      <ul>
        <li><strong>Caso Base:</strong> Condição que termina a recursão.</li>
        <li><strong>Caso Recursivo:</strong> Parte da função que chama a si mesma com um argumento modificado.</li>
      </ul>

      <h4>Exemplo 1: Transformando um laço `while` em recursividade</h4>

      <h5><strong>Com Laço `while`</strong></h5>
      <pre>
        <code>{`
#include <stdio.h>

int main() {
    int i = 1;  // Inicializa o índice em 1
    while (i <= 5) {  // Laço while que executa enquanto i for menor ou igual a 5
        printf("%d - oi\\n", i);  // Imprime o índice e a mensagem "oi"
        i++;  // Incrementa o índice
    }
    return 0;
}
        `}</code>
      </pre>

      <h5><strong>Com Recursividade</strong></h5>
      <pre>
        <code>{`
#include <stdio.h>

// Declaração da função recursiva
void imprimirOi(int n) {
    if (n == 0) {
        return;  // Caso base: se limite for igual a 0, termina a recursão
    } else {
        imprimirOi(n - 1); // Chama a função recursiva com limite decrementado
        printf("%d - oi\\n", n);  // Imprime o índice e a mensagem "oi"
    }
}

int main() {
    int n = 5;
    imprimirOi(n);  // Chama a função recursiva começando de limite até 1
    return 0;
}
        `}</code>
      </pre>
      <h5><strong>Explicação</strong></h5>
      <p>
        A função <code>imprimirOi(n)</code> realiza chamadas recursivas
        decrementando <code>n</code> até que <code>n</code> seja igual a 0. Em
        cada chamada, se <code>n</code> não for 0, a função chama
        <code>imprimirOi</code> com <code>n-1</code> e, após retornar, imprime
        "`n - oi`". Quando <code>n</code> chega a 0, a recursão termina.
      </p>

      <p>Sequência das chamadas e execução:</p>
      <ol>
        <li><code>imprimirOi(5)</code> chama <code>imprimirOi(4)</code>.</li>
        <li><code>imprimirOi(4)</code> chama <code>imprimirOi(3)</code>.</li>
        <li><code>imprimirOi(3)</code> chama <code>imprimirOi(2).</code></li>
        <li><code>imprimirOi(2)</code> chama <code>imprimirOi(1)</code>.</li>
        <li><code>imprimirOi(1)</code> chama <code>imprimirOi(0)</code>.</li>
        <li>
          <code>imprimirOi(0)</code> atinge o caso base (<code>n == 0</code>) e
          encerra a recursão.
        </li>
        <li>
          Execução volta para <code>imprimirOi(1)</code> e imprime "1 - oi" e
          encerra esta chamada.
        </li>
        <li>
          Execução volta para <code>imprimirOi(2)</code> e imprime "2 - oi" e
          encerra esta chamada.
        </li>
        <li>
          Execução volta para <code>imprimirOi(3)</code> e imprime "3 - oi" e
          encerra esta chamada.
        </li>
        <li>
          Execução volta para <code>imprimirOi(4)</code> e imprime "4 - oi" e
          encerra esta chamada.
        </li>
        <li>
          Execução volta para <code>imprimirOi(5)</code> e imprime "5 - oi" e
          encerra a chamada da função.
        </li>
      </ol>

      <h5><strong>Saída do código</strong></h5>
      <pre>
        <code>{`
1 - oi
2 - oi
3 - oi
4 - oi
5 - oi
        `}</code>
      </pre>

      <h3>Vantagens e Desvantagens da Recursividade</h3>
      <ul>
        <li>Vantagens:</li>
        <ul>
          <li><strong>Simplicidade:</strong> Código mais limpo e fácil de entender para problemas que se dividem naturalmente.</li>
          <li><strong>Natural para Estruturas Recursivas:</strong> Árvores e grafos.</li>
        </ul>
        <li>Desvantagens:</li>
        <ul>
          <li><strong>Consumo de Memória:</strong> Cada chamada recursiva consome memória da pilha.</li>
          <li><strong>Desempenho:</strong> Pode ser menos eficiente em alguns casos devido ao overhead das chamadas de função.</li>
        </ul>
      </ul>

      <h3>Sugestão de exercício:</h3>
      <p><strong>Cálculo do Fatorial de um número usando Recursividade</strong></p>
      <p>Objetivo: Implementar uma função recursiva para calcular o fatorial de um número.</p>
      <p>Descrição: O fatorial de um número inteiro positivo n representado como n! é o produto de todos os números inteiros positivos de 1 até n. Por definição, o fatorial de 0 é 1 (0! = 1). O fatorial de n pode ser definido recursivamente como:</p>
      <ul>
        <li> n! = n . (n - 1)! para ( n {'>'} 0 )</li>
        <li> 0! = 1 </li>
      </ul>
      <p>Sua tarefa é escrever uma função recursiva que receba um número inteiro n e retorne o fatorial desse número.</p>
    </div>
  );
};

export default Recursividade;
