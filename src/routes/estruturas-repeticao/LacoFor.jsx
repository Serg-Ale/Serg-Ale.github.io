const LacoFor = () => {
  return (
    <div>
      <h2 id="aula-4-comandos-de-entrada-e-saida">
        <strong>Aula 2: Estruturas de Repetição com laço For</strong>
      </h2>
      <h3>Por: Pedro Machado</h3>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/DQyYwTsgWTU?si=FW-sxWOqLiSRrMxB"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    

      <h2>Objetivos</h2>
      <ul>
        <li>Apresentar o conceito de estrutura de repetição com o laço <code>for</code>.</li>
        <li>Explorar a sintaxe e o funcionamento do laço <code>for</code> em C.</li>
        <li>Praticar a utilização do laço <code>for</code> em situações diversas.</li>
      </ul>

      <h2>Parte 1: Introdução ao Laço For</h2>

      <h3>1.1 O que é o Laço For?</h3>
      <ul>
        <li>O laço <code>for</code> é uma estrutura de controle de repetição que permite executar um bloco de código um número específico de vezes.</li>
      </ul>

      <h3>1.2 Sintaxe do Laço For</h3>
      <ul>
        <li>A sintaxe básica do laço <code>for</code> em C é a seguinte:</li>
      </ul>
      <pre>
        <code>{`for (inicialização; condição; incremento/decremento) {
        // código a ser repetido
    }`}</code>
      </pre>

      <h2>Parte 2: Exemplos de Utilização</h2>

      <h3>2.1 Exemplo 1: Contagem Progressiva</h3>
      <p>Escreva um programa em C que realize uma contagem progressiva de 1 até 10 usando o laço <code>for</code>.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        for (int i = 1; i <= 10; i++) {
            printf("%d\\n", i);
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> Este exemplo demonstra como usar o laço <code>for</code> para realizar uma contagem progressiva de 1 até 10.</li>
        <li><strong>Prático:</strong> O programa utiliza uma variável de controle <code>i</code> para iterar de 1 até 10, imprimindo o valor atual de <code>i</code> em cada iteração.</li>
      </ul>

      <h3>2.2 Exemplo 2: Tabuada</h3>
      <p>Escreva um programa em C que exiba a tabuada de multiplicação de um número fornecido pelo usuário.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int numero;

        printf("Digite um número para ver sua tabuada: ");
        scanf("%d", &numero);

        for (int i = 1; i <= 10; i++) {
            printf("%d x %d = %d\\n", numero, i, numero * i);
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> Neste exemplo, utilizamos o laço <code>for</code> para exibir a tabuada de multiplicação de um número.</li>
        <li><strong>Prático:</strong> O programa solicita ao usuário um número e, em seguida, utiliza um laço <code>for</code> para iterar de 1 a 10 e exibir a multiplicação do número fornecido pelo usuário pelo valor de <code>i</code>.</li>
      </ul>

      <h3>2.3 Exemplo 3: Soma dos Números</h3>
      <p>Escreva um programa em C que calcule a soma dos números de 1 a 100.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int soma = 0;

        for (int i = 1; i <= 100; i++) {
            soma += i;
        }

        printf("A soma dos números de 1 a 100 é: %d\\n", soma);

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> Este exemplo demonstra como usar o laço <code>for</code> para calcular a soma dos números de 1 a 100.</li>
        <li><strong>Prático:</strong> O programa utiliza um laço <code>for</code> para iterar de 1 a 100 e acumular a soma dos números em uma variável <code>soma</code>, que é então impressa no final.</li>
      </ul>

      <h2>Parte 3: Conclusão</h2>

      <ul>
        <li>O laço <code>for</code> é uma estrutura de repetição versátil que permite executar um bloco de código um número específico de vezes.</li>
        <li>Ele é frequentemente utilizado em situações onde é necessário iterar sobre uma sequência de valores conhecida.</li>
        <li>Com o entendimento do laço <code>for</code>, os programadores têm mais uma ferramenta para criar programas eficientes e precisos em C.</li>
      </ul>
    </div>
  );
};

export default LacoFor;
