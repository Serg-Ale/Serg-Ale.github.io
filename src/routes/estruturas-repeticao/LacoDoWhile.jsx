const LacoDoWhile = () => {
  return (
    <div>
      <h2 id="aula-3-expressoes-aritmeticas-relacionais-e-logicas">
        <strong>Aula 3: Estruturas de Repetição com laço Do-While</strong>
      </h2>
      <h3>Por: Pedro Machado</h3>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/oDeqQ_X3ykQ?si=P3U1_OJVCiM2qs5o"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <embed
        src="/public/repeticao/LacoDoWhile.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <h2>Objetivos</h2>
      <ul>
        <li>Introduzir o conceito de estrutura de repetição com o laço <code>do-while</code>.</li>
        <li>Explorar a sintaxe e o funcionamento do laço <code>do-while</code> em C.</li>
        <li>Praticar a utilização do laço <code>do-while</code> em situações diversas.</li>
      </ul>

      <h2>Parte 1: Introdução ao Laço Do-While</h2>

      <h3>1.1 O que é o Laço Do-While?</h3>
      <ul>
        <li>O laço <code>do-while</code> é uma estrutura de controle de repetição semelhante ao <code>while</code>, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.</li>
      </ul>

      <h3>1.2 Sintaxe do Laço Do-While</h3>
      <ul>
        <li>A sintaxe básica do laço <code>do-while</code> em C é a seguinte:</li>
      </ul>
      <pre>
        <code>{`do {
        // código a ser repetido
    } while (condição);`}</code>
      </pre>

      <h2>Parte 2: Exemplos de Utilização</h2>

      <h3>2.1 Exemplo 1: Contagem Progressiva</h3>
      <p>Escreva um programa em C que realize uma contagem progressiva de 1 até 10 usando o laço <code>do-while</code>.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int contador = 1;

        do {
            printf("%d\\n", contador);
            contador++;
        } while (contador <= 10);

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> Este exemplo demonstra como usar o laço <code>do-while</code> para realizar uma contagem progressiva de 1 até 10.</li>
        <li><strong>Prático:</strong> O programa inicia um contador em 1 e incrementa seu valor a cada iteração, imprimindo o valor atual do contador até que o valor chegue a 10.</li>
      </ul>

      <h3>2.2 Exemplo 2: Leitura de Valores</h3>
      <p>Escreva um programa em C que solicite ao usuário que insira números inteiros positivos, e continue solicitando até que um valor negativo seja inserido.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int numero;

        do {
            printf("Digite um número positivo (ou um negativo para sair): ");
            scanf("%d", &numero);

            if (numero >= 0) {
                printf("Número inserido: %d\\n", numero);
            }
        } while (numero >= 0);

        printf("Programa encerrado.\\n");

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> Neste exemplo, utilizamos o laço <code>do-while</code> para solicitar ao usuário a inserção de números inteiros positivos até que um número negativo seja inserido.</li>
        <li><strong>Prático:</strong> O programa solicita repetidamente ao usuário que insira um número. Se o número inserido for positivo, ele é exibido na tela. O laço continua até que um número negativo seja inserido, momento em que o programa é encerrado.</li>
      </ul>

      <h3>2.3 Exemplo 3: Cálculo de Média</h3>
      <p>Escreva um programa em C que calcule a média de uma série de notas fornecidas pelo usuário. O programa deve continuar solicitando notas até que um valor negativo seja inserido para indicar o fim da entrada de dados.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int nota;
        int totalNotas = 0;
        int contador = 0;
        float media;

        do {
            printf("Digite a nota (ou um valor negativo para encerrar): ");
            scanf("%d", &nota);

            if (nota >= 0) {
                totalNotas += nota;
                contador++;
            }
        } while (nota >= 0);

        if (contador > 0) {
            media = (float)totalNotas / contador;
            printf("Média das notas: %.2f\\n", media);
        } else {
            printf("Nenhuma nota inserida.\\n");
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> Neste exemplo, usamos o laço <code>do-while</code> para calcular a média de uma série de notas fornecidas pelo usuário.</li>
        <li><strong>Prático:</strong> O programa solicita repetidamente ao usuário que insira uma nota. As notas são somadas e o número total de notas é contado. Quando um valor negativo é inserido, o programa calcula a média das notas inseridas e exibe o resultado.</li>
      </ul>

      <h2>Parte 3: Conclusão</h2>

      <ul>
        <li>O laço <code>do-while</code> é uma variação do laço <code>while</code> que garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.</li>
        <li>Ele é útil em situações onde é necessário executar um bloco de código antes de verificar a condição de repetição.</li>
        <li>Com o entendimento do laço <code>do-while</code>, os programadores têm mais uma ferramenta para criar programas robustos e flexíveis em C.</li>
      </ul>
    </div>
  );
};

export default LacoDoWhile;
