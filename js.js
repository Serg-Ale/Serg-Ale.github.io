// Exibe as dicas ao carregar a página
exibirDicas();

//////////////////////////////////////////////////////////////////////
// Evento de envio do formulário
document
  .getElementById("dicaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores do formulário
    var material = document.getElementById("materialInput").value;
    var dica = document.getElementById("dicaInput").value;

    if (material == "") {
      alert("Você precisa selecionar um material!");
    } else {
      // Cria um objeto para a nova dica
      var novaDica = {
        material: material,
        dica: dica,
      };

      // Obtém as dicas existentes do localStorage ou cria um array vazio
      var dicas = JSON.parse(localStorage.getItem("dicas")) || [];

      // Adiciona a nova dica ao array
      dicas.push(novaDica);

      // Armazena o array atualizado no localStorage
      localStorage.setItem("dicas", JSON.stringify(dicas));

      // Limpa os campos do formulário
      document.getElementById("materialInput").value = "";
      document.getElementById("dicaInput").value = "";

      // Atualiza a lista de dicas exibida
      exibirDicas();
    }
  });

// Evento de digitação no campo de pesquisa
document.getElementById("searchInput").addEventListener("input", function () {
  exibirDicas();
});
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Função para exibir as dicas na lista
function exibirDicas() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var dicas = JSON.parse(localStorage.getItem("dicas")) || [];
  var dicasList = document.getElementById("dicasList");
  dicasList.innerHTML = "";

  // Filtra as dicas com base na pesquisa
  var dicasFiltradas = dicas.filter(function (dica) {
    return dica.material.toLowerCase().indexOf(searchInput) !== -1;
  });
  //filtrarDicas();

  // Cria os elementos da lista para cada dica
  dicasFiltradas.forEach(function (dica) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<b>" + dica.material + ":</b> " + dica.dica;
    dicasList.appendChild(listItem);

    switch (dica.material.toLowerCase()) {
      case "papel":
        listItem.style.backgroundColor = "blue";
        break;
      case "plastico":
        listItem.style.backgroundColor = "red";
        break;
      case "vidro":
        listItem.style.backgroundColor = "green";
        break;
      case "metal":
        listItem.style.backgroundColor = "yellow";
        break;
      case "organico":
        listItem.style.backgroundColor = "brown";
        break;
    }

    // Cria o botão de exclusão
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.addEventListener("click", function () {
      excluirDica(dica);
    });
    listItem.appendChild(deleteButton);
  });
}
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
function excluirDica(dica) {
  var dicas = JSON.parse(localStorage.getItem("dicas")) || [];

  // Encontra o índice da dica a ser excluída
  var index = dicas.findIndex(function (item) {
    return item.material === dica.material && item.dica === dica.dica;
  });

  // Remove a dica do array
  if (index !== -1) {
    dicas.splice(index, 1);

    // Atualiza o localStorage com o array atualizado
    localStorage.setItem("dicas", JSON.stringify(dicas));

    // Reexibe as dicas na lista
    exibirDicas();
  }
}
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Funções para mostrar conteúdo
function mostrarTabela() {
  const divForm = document.getElementById("divForm");

  const divList = document.getElementById("divList");
  const divTab = document.getElementById("divTab");

  divForm.style.display = "none";
  divList.style.display = "none";
  divTab.style.display = "block";
}

function mostrarPrincipal() {
  const divForm = document.getElementById("divForm");
  const divList = document.getElementById("divList");
  const divTab = document.getElementById("divTab");

  divForm.style.display = "block";
  divList.style.display = "block";
  divTab.style.display = "none";
}
//////////////////////////////////////////////////////////////////////
