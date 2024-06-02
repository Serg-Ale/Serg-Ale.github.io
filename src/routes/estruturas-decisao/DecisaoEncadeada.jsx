const DecisaoEncadeada = () => {
  return (
    <div>
      <h2 id="aula-4-comandos-de-entrada-e-saida">
        <strong>Aula 2: Estruturas de Decisão Encadeadas</strong>
      </h2>
      <h3>Por: Pedro Machado</h3>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/jXwXIBr43ro?si=mW5WIG0i6fY3TGSp"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
     
      
      <h2>Objetivos</h2>
      <ul>
        <li>Apresentar as estruturas de decisão aninhadas na linguagem C.</li>
        <li>Demonstrar como utilizar a estrutura <code>if-else-if</code> para decisões múltiplas.</li>
        <li>Ensinar a usar a estrutura <code>switch</code> para simplificar decisões com múltiplos casos.</li>
        <li>Praticar a escrita de código C utilizando estruturas de decisão aninhadas.</li>
      </ul>

      <h2>Parte 1: Estruturas de Decisão Aninhadas</h2>

      <h3>1.1 Estruturas de Decisão Aninhadas</h3>
      <ul>
        <li>As estruturas de decisão aninhadas permitem que um programa tome diferentes caminhos de execução com base em múltiplas condições específicas.</li>
        <li>Elas são úteis quando há várias condições a serem verificadas em sequência.</li>
        <li>Utilizar decisões aninhadas torna o código mais claro e organizado, facilitando a leitura e a manutenção.</li>
      </ul>

      <h3>1.2 Estruturas de Decisão Múltiplas (if-else-if)</h3>
      <ul>
        <li>A estrutura de decisão múltipla utiliza a instrução <code>if-else-if</code> para verificar várias condições em sequência.</li>
      </ul>

      <h4>Exemplo 1:</h4>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int nota = 85;

        if (nota >= 90) {
            printf("A\\n");
        } else if (nota >= 80) {
            printf("B\\n");
        } else if (nota >= 70) {
            printf("C\\n");
        } else if (nota >= 60) {
            printf("D\\n");
        } else {
            printf("F\\n");
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A estrutura <code>if-else-if</code> permite verificar várias condições em sequência e executar blocos de código diferentes com base na condição que for verdadeira primeiro.</li>
        <li><strong>Prático:</strong> No exemplo acima, a variável <code>nota</code> é comparada com diferentes valores para determinar a letra correspondente à nota. Dependendo do valor de <code>nota</code>, a mensagem apropriada (A, B, C, D ou F) será impressa.</li>
      </ul>

      <h4>Exemplo 2:</h4>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int idade = 25;

        if (idade < 13) {
            printf("Criança\\n");
        } else if (idade < 18) {
            printf("Adolescente\\n");
        } else if (idade < 60) {
            printf("Adulto\\n");
        } else {
            printf("Idoso\\n");
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A estrutura <code>if-else-if</code> avalia múltiplas condições de forma sequencial até encontrar uma verdadeira.</li>
        <li><strong>Prático:</strong> No exemplo acima, a variável <code>idade</code> é usada para determinar a faixa etária. Dependendo do valor de <code>idade</code>, a mensagem correspondente (Criança, Adolescente, Adulto ou Idoso) será impressa.</li>
      </ul>

      <h4>Exemplo 3:</h4>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int temperatura = 15;

        if (temperatura < 0) {
            printf("Muito frio\\n");
        } else if (temperatura < 10) {
            printf("Frio\\n");
        } else if (temperatura < 20) {
            printf("Agradável\\n");
        } else if (temperatura < 30) {
            printf("Quente\\n");
        } else {
            printf("Muito quente\\n");
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> O <code>if-else-if</code> permite definir várias condições que são avaliadas de forma sequencial.</li>
        <li><strong>Prático:</strong> No exemplo acima, a variável <code>temperatura</code> é usada para determinar a sensação térmica. Dependendo do valor de <code>temperatura</code>, a mensagem correspondente (Muito frio, Frio, Agradável, Quente ou Muito quente) será impressa.</li>
      </ul>

      <h3>1.3 Estrutura de Decisão Switch</h3>
      <ul>
        <li>A estrutura <code>switch</code> simplifica a verificação de múltiplas condições com base no valor de uma única variável.</li>
        <li>O <code>switch</code> é especialmente útil quando há muitos casos possíveis para uma variável.</li>
      </ul>

      <h4>Exemplo 1:</h4>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int dia = 3;

        switch (dia) {
            case 1:
                printf("Domingo\\n");
                break;
            case 2:
                printf("Segunda\\n");
                break;
            case 3:
                printf("Terça\\n");
                break;
            case 4:
                printf("Quarta\\n");
                break;
            case 5:
                printf("Quinta\\n");
                break;
            case 6:
                printf("Sexta\\n");
                break;
            case 7:
                printf("Sábado\\n");
                break;
            default:
                printf("Dia inválido\\n");
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A estrutura <code>switch</code> avalia o valor de uma variável e executa o bloco de código correspondente ao caso que corresponde ao valor.</li>
        <li><strong>Prático:</strong> No exemplo acima, a variável <code>dia</code> determina qual dia da semana será impresso. Dependendo do valor de <code>dia</code>, a mensagem apropriada será impressa.</li>
      </ul>

      <h4>Exemplo 2:</h4>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int opcao = 2;

        switch (opcao) {
            case 1:
                printf("Opção 1 selecionada\\n");
                break;
            case 2:
                printf("Opção 2 selecionada\\n");
                break;
            case 3:
                printf("Opção 3 selecionada\\n");
                break;
            default:
                printf("Opção inválida\\n");
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A estrutura <code>switch</code> é útil para lidar com múltiplos valores de uma variável de forma clara e organizada.</li>
        <li><strong>Prático:</strong> No exemplo acima, a variável <code>opcao</code> determina a mensagem a ser impressa. Dependendo do valor de <code>opcao</code>, a mensagem correspondente será impressa.</li>
      </ul>

      <h4>Exemplo 3:</h4>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int hora = 15;

        if (hora >= 0 && hora < 12) {
            printf("Bom dia!\\n");
        } else if (hora >= 12 && hora < 18) {
            printf("Boa tarde!\\n");
        } else if (hora >= 18 && hora < 24) {
            printf("Boa noite!\\n");
        } else {
            printf("Hora inválida!\\n");
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> A estrutura <code>if-else-if</code> pode ser utilizada para tomar decisões com base em múltiplas condições.</li>
        <li><strong>Prático:</strong> No exemplo acima, a variável <code>hora</code> é utilizada para determinar a saudação apropriada. Dependendo do valor de <code>hora</code>, será exibida uma mensagem de bom dia, boa tarde ou boa noite.</li>
      </ul>

    </div>
  );
};

export default DecisaoEncadeada;
