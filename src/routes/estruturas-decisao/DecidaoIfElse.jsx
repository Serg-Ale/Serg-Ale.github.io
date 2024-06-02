const DecisaoIfElse = () => {
  return (
    <div>
      <h2>
        <strong>
          Aula 1: Estruturas de Decisão com estruturas simples e compostas
        </strong>
      </h2>
      <h3>Por: Pedro Machado</h3>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/rORSrYwPTOw?si=lda1z-c-YTVp4y7N"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <embed
        src="/public/decisao/DecisaoIfElse.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />
      
      <h2>Objetivos</h2>
      <ul>
        <li>Apresentar as estruturas de decisão simples e composta na linguagem C.</li>
        <li>Demonstrar como utilizar a estrutura <code>if</code> para decisões simples.</li>
        <li>Ensinar a usar a estrutura <code>if-else</code> para decisões compostas.</li>
        <li>Praticar a escrita de código C utilizando estruturas de decisão.</li>
      </ul>

      <h2>Parte 1: Estruturas de Decisão Simples e Compostas</h2>

      <h3>1.1 Estruturas de Decisão</h3>
      <ul>
        <li>As estruturas de decisão permitem que um programa tome diferentes caminhos de execução com base em condições específicas.</li>
        <li>Elas tornam o código mais flexível e dinâmico, permitindo a implementação de lógica condicional.</li>
        <li>Sem estruturas de decisão, os programas seriam lineares e incapazes de reagir a diferentes entradas ou situações.</li>
        <li>As estruturas de decisão simples são implementadas com a instrução <code>if</code>, enquanto as decisões compostas utilizam <code>if-else</code>.</li>
      </ul>

      <h3>1.2 Estruturas de Decisão Simples (if)</h3>
      <ul>
        <li>A estrutura de decisão simples utiliza a instrução <code>if</code> para executar um bloco de código se uma condição for verdadeira.</li>
      </ul>

      <h4>Exemplo 1:</h4>
      <pre>
        <code>
          {`#include <stdio.h>

    int main() {
        int idade = 20;

        if (idade >= 18) {
            printf("Você é maior de idade.\\n");
        }

        return 0;
    }`}
        </code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A estrutura <code>if</code> avalia uma condição. Se for verdadeira, o bloco de código associado será executado.</li>
        <li><strong>Prático:</strong> No exemplo acima, a mensagem Você é maior de idade. será impressa se a variável <code>idade</code> for maior ou igual a 18.</li>
      </ul>

      <h4>Exemplo 2:</h4>
      <pre>
        <code>
          {`#include <stdio.h>

    int main() {
        int temperatura = 30;

        if (temperatura > 25) {
            printf("Está calor.\\n");
        }

        return 0;
    }`}
        </code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> O <code>if</code> verifica se a condição (temperatura maior que 25) é verdadeira.</li>
        <li><strong>Prático:</strong> Se a variável <code>temperatura</code> for maior que 25, a mensagem Está calor. será impressa.</li>
      </ul>

      <h4>Exemplo 3:</h4>
      <pre>
        <code>
          {`#include <stdio.h>

    int main() {
        int numero = -5;

        if (numero < 0) {
            printf("O número é negativo.\\n");
        }

        return 0;
    }`}
        </code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A instrução <code>if</code> permite verificar condições específicas, como se um número é negativo.</li>
        <li><strong>Prático:</strong> Neste exemplo, a mensagem O número é negativo. será exibida se a variável <code>numero</code> for menor que 0.</li>
      </ul>

      <h3>1.3 Estruturas de Decisão Compostas (if-else)</h3>
      <ul>
        <li>A estrutura de decisão composta utiliza a instrução <code>if-else</code> para executar um bloco de código se a condição for verdadeira e outro bloco se a condição for falsa.</li>
      </ul>

      <h4>Exemplo 1:</h4>
      <pre>
        <code>
          {`#include <stdio.h>

    int main() {
        int idade = 16;

        if (idade >= 18) {
            printf("Você é maior de idade.\\n");
        } else {
            printf("Você é menor de idade.\\n");
        }

        return 0;
    }`}
        </code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A estrutura <code>if-else</code> permite executar um bloco de código se a condição for verdadeira e outro bloco se a condição for falsa.</li>
        <li><strong>Prático:</strong> No exemplo acima, a mensagem Você é maior de idade. será impressa se a variável <code>idade</code> for maior ou igual a 18. Caso contrário, a mensagem Você é menor de idade. será impressa.</li>
      </ul>

      <h4>Exemplo 2:</h4>
      <pre>
        <code>
          {`#include <stdio.h>

    int main() {
        int temperatura = 20;

        if (temperatura > 25) {
            printf("Está calor.\\n");
        } else {
            printf("Está frio.\\n");
        }

        return 0;
    }`}
        </code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A estrutura <code>if-else</code> permite a execução de um bloco de código se a condição for verdadeira, e outro bloco se for falsa.</li>
        <li><strong>Prático:</strong> Se a variável <code>temperatura</code> for maior que 25, a mensagem Está calor. será impressa. Caso contrário, a mensagem Está frio. será impressa.</li>
      </ul>

      <h4>Exemplo 3:</h4>
      <pre>
        <code>
          {`#include <stdio.h>

    int main() {
        int numero = 0;

        if (numero > 0) {
            printf("O número é positivo.\\n");
        } else {
            printf("O número não é positivo.\\n");
        }

        return 0;
    }`}
        </code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> O <code>if-else</code> avalia uma condição e executa diferentes blocos de código dependendo se a condição é verdadeira ou falsa.</li>
        <li><strong>Prático:</strong> No exemplo acima, se a variável <code>numero</code> for maior que 0, a mensagem O número é positivo. será impressa. Caso contrário, a mensagem O número não é positivo. será impressa.</li>
      </ul>
    </div>
  );
};

export default DecisaoIfElse;
