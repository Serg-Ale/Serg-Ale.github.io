const IntroMatrizes = () => {
  return (
    <div>
      <h2>Aula 3: Desvendando as Matrizes em C</h2>
      <h3>Por: Sérgio Alexandre</h3>

      <embed
        src="/public/homogeneas/intro-mat.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />


      <h3>Objetivo:</h3>
      <ul>
        <li>
          <strong>Mergulhar no mundo das matrizes:</strong> Descubra o que são
          matrizes e por que usá-las.
        </li>
        <li>
          <strong>Dominar a arte da criação:</strong> Aprenda a declarar
          matrizes de diferentes tipos e tamanhos.
        </li>
        <li>
          <strong>Dar vida às suas matrizes:</strong> Explore diversas formas de
          inicializá-las.
        </li>
        <li>
          <strong>Conquistar os elementos:</strong> Acesse e manipule os dados
          da matriz com maestria.
        </li>
      </ul>

      <h3>1. O que são Matrizes?</h3>
      <p>
        Imagine um pergaminho mágico com uma tabela gravada, onde cada célula
        guarda um segredo. Em C, uma matriz é como este pergaminho, mas em vez
        de segredos, ela armazena dados do mesmo tipo, organizados em linhas e
        colunas.
      </p>

      <h3>Vantagens das Matrizes:</h3>
      <ul>
        <li>
          <strong>Organização:</strong> Mantenha seus dados organizados e de
          fácil acesso.
        </li>
        <li>
          <strong>Eficiência:</strong> Economize tempo e espaço na memória ao
          armazenar grandes conjuntos de dados.
        </li>
        <li>
          <strong>Versatilidade:</strong> Represente diversos tipos de dados
          estruturados, como tabuleiros de jogos, imagens e até mesmo sistemas
          de equações lineares.
        </li>
      </ul>

      <h3>2. Declaração de Matrizes:</h3>
      <p>Para criar uma matriz em C, você precisa seguir uma fórmula mágica:</p>
      <pre>
        <code>
          tipo_de_dado nome_da_matriz[numero_de_linhas][numero_de_colunas];
        </code>
      </pre>

      <h4>Exemplo:</h4>
      <ul>
        <li>
          Um pergaminho com 3 linhas e 4 colunas para registrar os resultados de
          poções mágicas: <code>int resultados_pocoes[3][4]</code>.
        </li>
        <li>
          Uma tabela com 5 nomes de alunos e 3 notas para cada aluno:{" "}
          <code>char nomes_alunos[5][30]</code>.
        </li>
      </ul>

      <h3>4. Acesso aos Elementos da Matriz:</h3>
      <p>
        Cada célula do pergaminho possui um número único, chamado de índice.
        Para acessar um item específico, basta usar os índices como chaves para
        abrir o baú:
      </p>
      <pre>
        <code>
          int resultado_especifico = resultados_pocoes[1][2]; // Pega o
          resultado da 2ª linha e 3ª coluna.
        </code>
      </pre>
      <pre>
        <code>
          char nome_primeiro_aluno = nomes_alunos[0][0]; // Descobre o nome do
          primeiro aluno.
        </code>
      </pre>

      <h3>Atividade Prática:</h3>
      <p>Crie um programa que:</p>
      <ul>
        <li>
          <strong>
            Cria um pergaminho mágico para armazenar 5 feitiços (strings).
          </strong>
        </li>
        <li>
          <strong>
            Preenche o pergaminho com 5 feitiços diferentes (``Fogo``, ``Cura``,
            ``Invisibilidade``, ``Teletransporte`` e ``Visão Noturna``).
          </strong>
        </li>
        <li>
          <strong>Mostra o nome de cada feitiço no pergaminho.</strong>
        </li>
        <li>
          <strong>
            Pergunte ao usuário qual feitiço ele deseja aprender e mostre seus
            poderes.
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default IntroMatrizes;
