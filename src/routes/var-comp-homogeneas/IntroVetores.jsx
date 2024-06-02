const IntroVetores = () => {
  return (
    <div>
      <h1>Aula 1: Desvendando os Vetores em C</h1>
      <h3>Por: Sérgio Alexandre</h3>

      <iframe
        width="1200"
        height="700"
        src="https://www.youtube.com/embed/mif0GLVTjD8?si=eWhAuk112q08eSFF"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <embed
        src="/public/homogeneas/intro-vet.pdf"
        width="1200"
        height="700"
        type="application/pdf"
      />

      <p>
        <strong>Objetivo:</strong> Mergulhe no mundo dos vetores em C e aprenda
        a dominá-los!
      </p>
      <p>Nesta aula, você irá:</p>
      <ul>
        <li>
          <strong>Desvendar o mistério:</strong> O que são vetores e por que
          usá-los?
        </li>
        <li>
          <strong>Domine a arte da criação:</strong> Aprenda a declarar vetores
          de diferentes tipos.
        </li>
        <li>
          <strong>Dê vida aos seus vetores:</strong> Explore diversas formas de
          inicializá-los.
        </li>
        <li>
          <strong>Conquiste os elementos:</strong> Acesse e manipule os dados do
          vetor com maestria.
        </li>
      </ul>

      <h2>1. O que são Vetores?</h2>
      <p>
        Imagine um baú mágico que guarda uma coleção de itens do mesmo tipo,
        como moedas de ouro, pergaminhos antigos ou poções mágicas. Em C, um
        vetor é como este baú, mas em vez de itens mágicos, ele armazena dados
        do mesmo tipo, como números, letras ou até mesmo frases.
      </p>

      <h3>Vantagens dos Vetores:</h3>
      <ul>
        <li>
          <strong>Eficiência:</strong> Economize tempo e espaço na memória ao
          armazenar vários dados em um único lugar.
        </li>
        <li>
          <strong>Organização:</strong> Mantenha seus dados organizados e de
          fácil acesso.
        </li>
        <li>
          <strong>Agilidade:</strong> Acesse qualquer dado do vetor com rapidez
          e precisão.
        </li>
      </ul>

      <h2>2. Declarando Vetores:</h2>
      <p>Para criar um vetor em C, você precisa seguir uma fórmula mágica:</p>
      <pre>
        <code>tipo_de_dado nome_do_vetor[tamanho];</code>
      </pre>
      <p>
        <strong>Exemplo:</strong>
      </p>
      <ul>
        <li>
          Um baú para guardar 10 moedas de ouro:{" "}
          <code>int moedas_ouro[10];</code>
        </li>
        <li>
          Um pergaminho para registrar 50 feitiços:{" "}
          <code>char feiticos[50];</code>
        </li>
      </ul>

      <h2>3. Inicializando Vetores:</h2>
      <p>
        Após criar o baú, você precisa preenchê-lo com seus itens mágicos.
        Existem três formas de fazer isso:
      </p>

      <h3>1. Individualmente:</h3>
      <pre>
        <code>
          moedas_ouro[0] = 1; moedas_ouro[1] = 2; ... moedas_ouro[9] = 10;
        </code>
      </pre>

      <h3>2. Em bloco:</h3>
      <pre>
        <code>int moedas_ouro[10] = {(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)};</code>
      </pre>

      <h3>3. Com um valor único:</h3>
      <pre>
        <code>
          char feiticos[50] = {"F"}; // Todos os feitiços são ``Fogo`` no
          início.
        </code>
      </pre>

      <h2>4. Acessando os Elementos do Vetor:</h2>
      <p>
        Cada item do vetor possui um número único, chamado de índice. Para
        acessar um item específico, basta usar o índice como chave para abrir o
        baú:
      </p>
      <pre>
        <code>
          int moeda_escolhida = moedas_ouro[3]; // Pega a 4ª moeda (índice 3).
          char primeiro_feitico = feiticos[0]; // Descobre o primeiro feitiço.
        </code>
      </pre>

      <h2>Atividade Prática:</h2>
      <p>Crie um programa que:</p>
      <ul>
        <li>
          <strong>
            Cria um baú mágico para armazenar 5 poções mágicas (strings).
          </strong>
        </li>
        <li>
          <strong>
            Preencha o baú com 5 poções diferentes (``Cura``, ``Força``,
            ``Invisibilidade``, ``Teletransporte`` e ``Visão Noturna``).
          </strong>
        </li>
        <li>
          <strong>Mostre o nome de cada poção no baú.</strong>
        </li>
        <li>
          <strong>
            Pergunte ao usuário qual poção ele deseja usar e mostre seus
            poderes.
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default IntroVetores;
