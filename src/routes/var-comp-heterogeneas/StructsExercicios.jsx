const StructsExercicios = () => {
    return (
      <div>
      <h2>Exercícios com suas Respectivas Soluções</h2>
      <p>Estes exercícios fornecem prática na criação, manipulação e utilização de structs em programas em linguagem C. As soluções fornecidas são apenas uma das muitas maneiras de resolver os problemas propostos.</p>

      <h3>Aula 1: Introdução às Structs</h3>
      <p><strong>Exercício:</strong> Crie uma struct chamada <code>Ponto</code> para representar um ponto no plano cartesiano, com membros <code>x</code> e <code>y</code>. Escreva um programa que declare uma variável do tipo <code>Ponto</code>, leia os valores <code>x</code> e <code>y</code> do usuário e imprima na tela.</p>
      <pre>
        <code>
{`#include <stdio.h>

struct Ponto {
    float x;
    float y;
};

int main() {
    struct Ponto p;

    printf("Digite as coordenadas do ponto (x y): ");
    scanf("%f %f", &p.x, &p.y);

    printf("Coordenadas do ponto: (%.2f, %.2f)\\n", p.x, p.y);

    return 0;
}`}
        </code>
      </pre>

      <h3>Aula 2: Arrays de Structs</h3>
      <p><strong>Exercício:</strong> Crie uma struct chamada <code>Aluno</code> com os membros <code>nome</code> (string) e <code>idade</code> (int). Em seguida, declare um array de 3 <code>Aluno</code>s e preencha-o com dados lidos do usuário. Por fim, imprima na tela os dados dos alunos.</p>
      <pre>
        <code>
{`#include <stdio.h>

struct Aluno {
    char nome[50];
    int idade;
};

int main() {
    struct Aluno alunos[3];

    for (int i = 0; i < 3; i++) {
        printf("Digite o nome do aluno %d: ", i+1);
        scanf("%s", alunos[i].nome);

        printf("Digite a idade do aluno %d: ", i+1);
        scanf("%d", &alunos[i].idade);
    }

    printf("\\nDados dos alunos:\\n");
    for (int i = 0; i < 3; i++) {
        printf("Aluno %d: Nome - %s, Idade - %d\\n", i+1, alunos[i].nome, alunos[i].idade);
    }

    return 0;
}`}
        </code>
      </pre>

      <h3>Aula 3: Structs como Parâmetros de Funções</h3>
      <p><strong>Exercício:</strong> Escreva uma função chamada <code>trocaPonto</code> que receba como parâmetros duas structs do tipo <code>Ponto</code> e troque suas coordenadas <code>x</code> e <code>y</code>. Teste essa função no programa principal.</p>
      <pre>
        <code>
{`#include <stdio.h>

struct Ponto {
    float x;
    float y;
};

void trocaPonto(struct Ponto *p1, struct Ponto *p2) {
    float tempX = p1->x;
    float tempY = p1->y;

    p1->x = p2->x;
    p1->y = p2->y;

    p2->x = tempX;
    p2->y = tempY;
}

int main() {
    struct Ponto ponto1 = {1.0, 2.0};
    struct Ponto ponto2 = {3.0, 4.0};

    printf("Antes da troca:\\n");
    printf("Ponto 1: (%.2f, %.2f)\\n", ponto1.x, ponto1.y);
    printf("Ponto 2: (%.2f, %.2f)\\n", ponto2.x, ponto2.y);

    trocaPonto(&ponto1, &ponto2);

    printf("\\nDepois da troca:\\n");
    printf("Ponto 1: (%.2f, %.2f)\\n", ponto1.x, ponto1.y);
    printf("Ponto 2: (%.2f, %.2f)\\n", ponto2.x, ponto2.y);

    return 0;
}`}
        </code>
      </pre>

      <h3>Aula 4: Revisão e Desafios</h3>
      <p><strong>Desafio:</strong> Implemente uma agenda telefônica em C utilizando structs. Cada contato deve ter nome e número de telefone. Permita ao usuário adicionar novos contatos, buscar contatos pelo nome e imprimir a lista de contatos.</p>
      <pre>
        <code>
{`#include <stdio.h>

#define MAX_CONTATOS 100

struct Contato {
    char nome[50];
    char telefone[15];
};

struct Agenda {
    struct Contato contatos[MAX_CONTATOS];
    int numContatos;
};

void adicionarContato(struct Agenda *agenda, char *nome, char *telefone) {
    if (agenda->numContatos < MAX_CONTATOS) {
        struct Contato novoContato;
        strcpy(novoContato.nome, nome);
        strcpy(novoContato.telefone, telefone);
        agenda->contatos[agenda->numContatos] = novoContato;
        agenda->numContatos++;
        printf("Contato adicionado com sucesso!\\n");
    } else {
        printf("A agenda está cheia. Não é possível adicionar mais contatos.\\n");
    }
}

void buscarContato(struct Agenda *agenda, char *nome) {
    for (int i = 0; i < agenda->numContatos; i++) {
        if (strcmp(agenda->contatos[i].nome, nome) == 0) {
            printf("Contato encontrado:\\n");
            printf("Nome: %s\\n", agenda->contatos[i].nome);
            printf("Telefone: %s\\n", agenda->contatos[i].telefone);
            return;
        }
    }
    printf("Contato não encontrado.\\n");
}

void imprimirAgenda(struct Agenda *agenda) {
    printf("Lista de Contatos:\\n");
    for (int i = 0; i < agenda->numContatos; i++) {
        printf("%d. Nome: %s, Telefone: %s\\n", i+1, agenda->contatos[i].nome, agenda->contatos[i].telefone);
    }
}

int main() {
    struct Agenda agenda;
    agenda.numContatos = 0;

    adicionarContato(&agenda, "Joao", "123456789");
    adicionarContato(&agenda, "Maria", "987654321");

    imprimirAgenda(&agenda);

    buscarContato(&agenda, "Maria");

    return 0;
}`}
        </code>
      </pre>

    </div>
    );
  };
  
  export default StructsExercicios;
  