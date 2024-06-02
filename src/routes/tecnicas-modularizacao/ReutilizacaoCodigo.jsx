const ReutilizacaoCodigo = () => {
    return (
      <div>
        <h2>
          <strong>Aula 3: Reutilização de Código e Boas Práticas de Programação</strong>
        </h2>
        <h3>Por: Giovana Hoffmann</h3>
  
        <h2>Objetivos</h2>
        <ul>
          <li>Discutir a importância da reutilização de código para economia de tempo e esforço.</li>
          <li>Apresentar técnicas para escrever código claro e reutilizável.</li>
          <li>Exemplificar como dividir um problema em partes menores e reutilizáveis.</li>
        </ul>
  
        <h2>Parte 1: Importância da Reutilização de Código</h2>
  
        <h3>1.1 Economia de Tempo e Esforço</h3>
        <ul>
          <li>Reutilizar código já escrito e testado ajuda a desenvolver programas mais rapidamente e com menos erros.</li>
          <li>Permite que você foque em novos desafios em vez de repetir tarefas que já foram resolvidas.</li>
        </ul>
  
        <h3>1.2 Melhoria da Manutenibilidade</h3>
        <ul>
          <li>Código reutilizável é mais organizado e fácil de entender, facilitando futuras modificações e correções.</li>
          <li>Facilita a detecção e correção de bugs, pois o mesmo código é usado em vários lugares.</li>
        </ul>
  
        <h2>Parte 2: Técnicas para Escrever um Código Claro e Reutilizável</h2>
  
        <h3>2.1 Funções Simples e Claras</h3>
        <ul>
          <li>Divida seu código em funções pequenas e bem definidas.</li>
          <li>Cada função deve realizar uma única tarefa específica.</li>
        </ul>
  
        <h3>2.2 Comentários e Nomes Significativos</h3>
        <ul>
          <li>Use comentários para explicar o que cada parte do código faz.</li>
          <li>Escolha nomes claros e significativos para variáveis e funções.</li>
        </ul>
  
        <h2>Parte 3: Dividindo Problemas em Partes Menores e Reutilizáveis</h2>
  
        <h3>3.1 Exemplo 1: Função para Calcular a Médias</h3>
        <pre>
          <code>
            {`
            #include <stdio.h>

            // Função que calcula a média de três números
            float calcularMedia(float a, float b, float c) {
                return (a + b + c) / 3;
            }
  
            int main() {
                // Usando a função para calcular a média de notas
                float nota1 = 7.5, nota2 = 8.0, nota3 = 6.5;
                float mediaNotas = calcularMedia(nota1, nota2, nota3);
                printf("A média das notas é: %.2f\n", mediaNotas);
  
                // Usando a mesma função para calcular a média de temperaturas
                float temp1 = 30.5, temp2 = 25.0, temp3 = 28.3;
                float mediaTemperaturas = calcularMedia(temp1, temp2, temp3);
                printf("A média das temperaturas é: %.2f\n", mediaTemperaturas);
  
                return 0;
            }
            `}
          </code>
        </pre>
  
        <h3>3.2 Exemplo 2: Função para Verificar Número Par ou Ímpar</h3>
        <pre>
          <code>
            {`
            #include <stdio.h>

            // Função que verifica se um número é par
            int ehPar(int num) {
                return num % 2 == 0;
            }
  
            int main() {
                // Usando a função para verificar números dados pelo usuário
                int numero1 = 4, numero2 = 7;
                if (ehPar(numero1)) {
                    printf("%d é par\n", numero1);
                } else {
                    printf("%d é ímpar\n", numero1);
                }
  
                if (ehPar(numero2)) {
                    printf("%d é par\n", numero2);
                } else {
                    printf("%d é ímpar\n", numero2);
                }
  
                // Usando a mesma função para verificar números de um array
                int numeros[] = {10, 23, 34, 45, 56};
                for (int i = 0; i < 5; i++) {
                    if (ehPar(numeros[i])) {
                        printf("%d é par\n", numeros[i]);
                    } else {
                        printf("%d é ímpar\n", numeros[i]);
                    }
                }
  
                return 0;
            }
            `}
          </code>
        </pre>
  
        <h3>3.3 Exemplo 3: Função para Calcular o Fatorial</h3>
        <pre>
          <code>
            {`
            #include <stdio.h>

            // Função que calcula o fatorial de um número
            int fatorial(int num) {
                if (num == 0) {
                    return 1;
                }
                int resultado = 1;
                for (int i = 1; i <= num; i++) {
                    resultado *= i;
                }
                return resultado;
            }
  
            int main() {
                // Usando a função para calcular o fatorial de um número fixo
                int numero1 = 5;
                int resultado1 = fatorial(numero1);
                printf("O fatorial de %d é %d\n", numero1, resultado1);
  
                // Usando a mesma função para calcular o fatorial de outro número
                int numero2 = 7;
                int resultado2 = fatorial(numero2);
                printf("O fatorial de %d é %d\n", numero2, resultado2);
  
                return 0;
            }
            `}
          </code>
        </pre>
        <p>Com esses exemplos, podemos observar como o uso de funções e procedimentos auxiliam na reutilização de códigos, poupando tempo e esforço já que escrita de um código claro e reutilizável facilita o entendimento e a manutenção do programa. Por isso, lembre-se de sempre tentar dividir problemas complexos em partes menores e reutilizáveis, melhorando assim a qualidade do seu código.</p>
      </div>
    );
  };
  
  export default ReutilizacaoCodigo;