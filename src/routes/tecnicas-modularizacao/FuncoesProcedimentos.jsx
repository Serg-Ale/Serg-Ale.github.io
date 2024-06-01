const FuncoesProcedimentos = () => {
  return (
    <div>
      <h2 id="aula-1-introducao-a-procedimentos-e-funcoes">
        <strong>Aula 1: Introdução a Procedimentos e Funções</strong>
      </h2>
      <h3>Por: Giovana Hoffmann</h3>
      <iframe width="1200" height="700" src="https://www.youtube.com/embed/odoDclPaL1Y?si=2kKgCUFjCgDb_64y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <embed
        src="/public/modularizacao/funcoes_procedimentos.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <h2>Objetivos</h2>
      <ul>
        <li>Definir procedimentos e funções em C.</li>
        <li>Explicar a importância da modularização no código.</li>
        <li>Mostrar a declaração e a chamada de procedimentos e funções.</li>
        <li>Demonstrar a passagem de parâmetros e o retorno de valores.</li>
      </ul>

      <h2>Parte 1: Introdução às Técnicas de Modularização</h2>

      <h3>1.1 Conceito de Procedimentos e Funções</h3>
      <ul>
        <li>
          Procedimentos são blocos de código que executam uma série de instruções para realizar uma tarefa específica.
        </li>
        <li>
          Funções são similares aos procedimentos, mas retornam um valor após a execução.
        </li>
      </ul>

      <h3>1.2 Benefícios da Modularização</h3>
      <ul>
        <li>
          Facilita o entendimento e manutenção do código, dividindo-o em partes menores e mais compreensíveis.
        </li>
        <li>
          Promove a reutilização de código, evitando repetição e tornando o desenvolvimento mais eficiente e organizado.
        </li>
      </ul>

      <h2>Parte 2: Parâmetros</h2>

      <h3>2.1 Conceito de Parâmetros</h3>
      <ul>
        <li>
          Parâmetros são utilizados para passar informações para procedimentos e funções.
        </li>
        <li>
          Permitem que dados sejam recebidos e utilizados dentro do bloco de código.
        </li>
      </ul>

      <h3>2.2 Passagem de Parâmetros</h3>
      <ul>
        <li>
          <strong>Passagem por Valor:</strong> Uma cópia do valor do parâmetro é passada para o procedimento ou função. Alterações no parâmetro dentro do bloco de código não afetam o valor original fora dele.
        </li>
        <li>
          <strong>Passagem por Referência:</strong> O endereço de memória do parâmetro é passado para o procedimento ou função. Isso permite que o procedimento ou função acesse e modifique diretamente o valor original do parâmetro. Qualquer alteração feita no parâmetro dentro do bloco de código afetará o valor original fora do procedimento ou função.
        </li>
      </ul>

      <h2>Parte 3: Utilização de Valores de Retorno em Funções</h2>

      <ul>
        <li>
          Funções podem retornar valores após a execução, permitindo que resultados sejam usados onde a função foi chamada.
        </li>
        <li>
          O valor de retorno pode ser de qualquer tipo de dado necessário.
        </li>
      </ul>

      <h2>Parte 5: Declaração e Chamada de Procedimentos e Funções</h2>

      <h3>5.1 Declaração de Procedimentos</h3>
      <pre>
        <code>
          {`
          // Procedimento
          void cumprimentar() {
              printf("Olá! Bem-vindo ao meu programa!");
          }
        `}
        </code>
      </pre>

      <h3>5.2 Declaração de Funções</h3>
      <pre>
        <code>
          {`
          // Função
          int somar(int a, int b) {
              int resultado = a + b;
              return resultado;
          }
          `}
        </code>
      </pre>

      <h3>5.3 Chamada de Procedimentos e Funções</h3>
      <pre>
        <code>
          {`
          int main() {
          // Chamada do procedimento
          cumprimentar();

          // Chamada da função e exibição do resultado
          int resultado = somar(5, 3);
          printf("O resultado da soma é: %d", resultado);
          return 0;
         }
`}
        </code>
      </pre>

      <h3>5.4 Código Completo</h3>
      <pre>
        <code>
          {`
          #include <stdio.h>
          // Procedimento
          void cumprimentar() {
              printf("Olá! Bem-vindo ao meu programa!");
          }

          // Função
          int somar(int a, int b) {
              int resultado = a + b;
              return resultado;
          } 

          int main() {
              // Chamada do procedimento
              cumprimentar();

              // Chamada da função e exibição do resultado
              int resultado = somar(5, 3);
              printf("O resultado da soma é: %d", resultado);
              return 0;
          }
      `}
        </code>
      </pre>



      <h3>5.4 Outro Exemplo</h3>
      <p>Neste exemplo, temos uma função que calcula o quadrado de um número fornecido pelo usuário.</p>
      <pre>
        <code>
          {`
          #include <stdio.h>

          // Função que calcula o quadrado de um número
          int quadrado(int num) {
              return num * num;
          }

          int main() {
              int numero;
              printf("Digite um número: ");
              scanf("%d", &numero);
              int resultado = quadrado(numero);
              printf("%d ao quadrado é %d\n", numero, resultado);
              return 0;
          }
          `}
        </code>
      </pre>
    </div>
  );
};

export default FuncoesProcedimentos;
