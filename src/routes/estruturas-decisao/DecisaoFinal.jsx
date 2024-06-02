const DecisaoFinal = () => {
  return (
    <div>
      <h2 id="aula-3-expressoes-aritmeticas-relacionais-e-logicas">
        <strong>Aula 3: Estruturas de Decisão resumo e conclusão</strong>
      </h2>
      <h3>Por: Pedro Machado</h3>
      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/nS1zA4JCNnk?si=3ErvIh73796kRgju"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
   

      <h2>Objetivos</h2>
      <ul>
        <li>Reforçar os conceitos de estruturas de decisão em C.</li>
        <li>Praticar a resolução de exercícios envolvendo <code>if-else</code>, <code>if-else-if</code> e <code>switch</code>.</li>
        <li>Concluir o tópico de estruturas de decisão, destacando sua importância e aplicabilidade.</li>
      </ul>

      <h2>Parte 1: Exercícios Práticos</h2>

      <h3>1.1 Exercício 1</h3>
      <p>Escreva um programa em C que determine se um número é positivo, negativo ou zero.</p>
      <p>Dica: Use a estrutura <code>if-else</code>.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int numero;

        printf("Digite um número: ");
        scanf("%d", &numero);

        if (numero > 0) {
            printf("O número é positivo.\\n");
        } else if (numero < 0) {
            printf("O número é negativo.\\n");
        } else {
            printf("O número é zero.\\n");
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> O código utiliza a estrutura <code>if-else</code> para verificar se o número digitado é positivo, negativo ou zero.</li>
        <li><strong>Prático:</strong> Se o número for maior que zero, ele é positivo. Se for menor que zero, é negativo. Caso contrário, é zero.</li>
      </ul>

      <h3>1.2 Exercício 2</h3>
      <p>Escreva um programa em C que determine o maior de três números.</p>
      <p>Dica: Utilize a estrutura <code>if-else-if</code>.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        int num1, num2, num3;

        printf("Digite três números: ");
        scanf("%d %d %d", &num1, &num2, &num3);

        if (num1 >= num2 && num1 >= num3) {
            printf("O maior número é: %d\\n", num1);
        } else if (num2 >= num1 && num2 >= num3) {
            printf("O maior número é: %d\\n", num2);
        } else {
            printf("O maior número é: %d\\n", num3);
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> O programa compara os três números para determinar qual é o maior, utilizando a estrutura <code>if-else-if</code>.</li>
        <li><strong>Prático:</strong> O programa verifica se o primeiro número é maior que os outros dois. Se sim, ele é o maior. Caso contrário, compara o segundo e o terceiro número para determinar o maior.</li>
      </ul>

      <h3>1.3 Exercício 3</h3>
      <p>Escreva um programa em C que determine se um caractere é uma vogal ou uma consoante.</p>
      <p>Dica: Utilize a estrutura <code>switch</code>.</p>
      <pre>
        <code>{`#include <stdio.h>

    int main() {
        char caractere;

        printf("Digite um caractere: ");
        scanf(" %c", &caractere);

        switch (caractere) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                printf("O caractere %c é uma vogal.\\n", caractere);
                break;
            default:
                printf("O caractere %c é uma consoante.\\n", caractere);
        }

        return 0;
    }`}</code>
      </pre>
      <ul>
        <li><strong>Teórico:</strong> O programa usa a estrutura <code>switch</code> para determinar se um caractere é uma vogal ou uma consoante.</li>
        <li><strong>Prático:</strong> O programa verifica se o caractere fornecido está entre as vogais (a, e, i, o, u ou suas versões maiúsculas). Se sim, é uma vogal. Caso contrário, é uma consoante.</li>
      </ul>

      <h2>Parte 2: Conclusão</h2>

      <p>As estruturas de decisão são fundamentais na programação, pois permitem que os programas tomem decisões com base em condições específicas. Através do uso de <code>if-else</code>, <code>if-else-if</code> e <code>switch</code>, os programadores podem criar lógicas complexas para lidar com uma variedade de situações.</p>

      <p>É importante entender quando usar cada uma dessas estruturas e como combiná-las para obter o comportamento desejado do programa. Com prática e experiência, os programadores podem desenvolver habilidades sólidas em tomada de decisão, melhorando a eficiência e a robustez de seus códigos.</p>

      <p>Com isso, concluímos o tópico de estruturas de decisão em C. Continue praticando e explorando novos conceitos para aprimorar suas habilidades de programação!</p>
    </div>
  );
};

export default DecisaoFinal;
