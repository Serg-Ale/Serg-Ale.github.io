const LacoWhile = () => {
  return (
    <div>
      <h2>
        <strong>Aula 1: Estruturas de Repetição com laço While</strong>
      </h2>
      <h3>Por: Pedro Machado</h3>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/zzo6a25lfZg?si=a9vcAFpp-cpfguzy"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h2>Objetivos</h2>
      <ul>
        <li>
          Apresentar o conceito de estrutura de repetição com o laço{" "}
          <code>while</code>.
        </li>
        <li>
          Explorar a sintaxe e o funcionamento do laço <code>while</code> em C.
        </li>
        <li>
          Praticar a utilização do laço <code>while</code> em situações
          diversas.
        </li>
      </ul>

      <h2>Parte 1: Introdução ao Laço While</h2>

      <h3>1.1 O que é o Laço While?</h3>
      <ul>
        <li>
          O laço <code>while</code> é uma estrutura de controle de repetição que
          executa um bloco de código enquanto uma condição específica for
          verdadeira.
        </li>
      </ul>

      <h3>1.2 Sintaxe do Laço While</h3>
      <ul>
        <li>
          A sintaxe básica do laço <code>while</code> em C é a seguinte:
        </li>
      </ul>
      <pre>
        <code>{`while (condição) {
        // código a ser repetido enquanto a condição for verdadeira
    }`}</code>
      </pre>

      <h2>Parte 2: Exemplos de Utilização</h2>

      <h3>2.1 Exemplo 1: Contagem Regressiva</h3>
      <p>
        Escreva um programa em C que realize uma contagem regressiva de 10 até 1
        usando o laço <code>while</code>.
      </p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int contador = 10;

        while (contador >= 1) {
            printf("%d\\n", contador);
            contador--;
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li>
          <strong>Teórico:</strong> Este exemplo demonstra como usar o laço{" "}
          <code>while</code> para realizar uma contagem regressiva de 10 até 1.
        </li>
        <li>
          <strong>Prático:</strong> O programa inicia um contador em 10 e
          decrementa seu valor a cada iteração, imprimindo o valor atual do
          contador até que o valor chegue a 1.
        </li>
      </ul>

      <h3>2.2 Exemplo 2: Soma dos Números Pares</h3>
      <p>
        Escreva um programa em C que calcule a soma dos números pares de 1 a 100
        usando o laço <code>while</code>.
      </p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int numero = 1;
        int soma = 0;

        while (numero <= 100) {
            if (numero % 2 == 0) {
                soma += numero;
            }
            numero++;
        }

        printf("A soma dos números pares de 1 a 100 é: %d\\n", soma);

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li>
          <strong>Teórico:</strong> Neste exemplo, utilizamos o laço{" "}
          <code>while</code> para calcular a soma dos números pares de 1 a 100.
        </li>
        <li>
          <strong>Prático:</strong> O programa itera sobre todos os números de 1
          a 100 e, para cada número par encontrado, adiciona-o à variável de
          soma. O resultado final é então impresso.
        </li>
      </ul>

      <h3>2.3 Exemplo 3: Validação de Entrada</h3>
      <p>
        Escreva um programa em C que solicite ao usuário que insira um número
        entre 1 e 10, e repita a solicitação até que um número válido seja
        fornecido.
      </p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int numero;

        printf("Digite um número entre 1 e 10: ");
        scanf("%d", &numero);

        while (numero < 1 || numero > 10) {
            printf("Número inválido! Digite novamente: ");
            scanf("%d", &numero);
        }

        printf("Número válido inserido: %d\\n", numero);

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li>
          <strong>Teórico:</strong> Este exemplo ilustra como usar o laço{" "}
          <code>while</code> para validar a entrada do usuário.
        </li>
        <li>
          <strong>Prático:</strong> O programa solicita repetidamente ao usuário
          que insira um número. Enquanto o número inserido não estiver dentro do
          intervalo desejado (1 a 10), uma mensagem de erro é exibida e o
          usuário é solicitado novamente a inserir um número válido.
        </li>
      </ul>

      <h2>Parte 3: Conclusão</h2>

      <ul>
        <li>
          O laço <code>while</code> é uma ferramenta poderosa para executar
          repetições em um programa C.
        </li>
        <li>
          Ele permite que um bloco de código seja executado repetidamente
          enquanto uma condição especificada for verdadeira.
        </li>
        <li>
          Com isso, os programadores podem criar programas mais dinâmicos e
          eficientes, lidando com situações onde é necessário repetir uma ação
          múltiplas vezes.
        </li>
      </ul>
    </div>
  );
};

export default LacoWhile;
