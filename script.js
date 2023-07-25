let cards = document.getElementsByClassName("card");

function mudarCard() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = "orange";
    cards[i].style.color = "white";
    cards[i].style.border = "1px solid black";
};
  
  let titulos = document.getElementsByClassName("titulo-card");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.fontWeight = "bold";
        titulos[i].style.fontSize = "20px";
        titulos[i].style.color = "#2b385b";
        titulos[i].style.margin = "6%";
        titulos[i].innerHTML = "<h2>Meu card</h2>";  
    };
  
  let descricoes = document.getElementsByClassName("descricao-card");
    for (let i = 0; i < descricoes.length; i++) {
        descricoes[i].style.fontSize = "13px";
        descricoes[i].style.margin = "18%";  
        descricoes[i].innerHTML = "Descrição modificada pelo JavaScript";  
    };
  
  let edicao = document.getElementsByClassName("botao-editar");
    for (let i = 0; i < edicao.length; i++) {
        edicao[i].style.backgroundColor = "#008000";
        edicao[i].style.color = "white";
        edicao[i].style.padding = "6%";
        edicao[i].style.border = "1px solid #008000";
        edicao[i].style.borderRadius = "13px";
    }; 
  
  let apagar = document.getElementsByClassName("botao-apagar");
    for (let i = 0; i < apagar.length; i++) {
        apagar[i].style.backgroundColor = "#FF0000";
        apagar[i].style.color = "white";
        apagar[i].style.padding = "6%";
        apagar[i].style.border = "1px solid #FF0000";
        apagar[i].style.borderRadius = "13px";
    }; 
};
  mudarCard();

let botoesEditar = document.getElementsByClassName("botão-editar");
for (let i = 0; i < botoesEditar.length; i++) {
  botoesEditar[i].setAttribute("onclick", "editarCard()");
};
function editarCard() {
  alert("Clicou em Editar!");
};

let botoesApagar = document.getElementsByClassName("botão-apagar");
for (let i = 0; i < botoesApagar.length; i++) {
  botoesApagar[i].setAttribute("onclick", "apagarCard()");
};
function apagarCard() {
  let confirmacao = confirm("Tem certeza que deseja excluir o card?");

if (confirmacao) {
    alert("Confirmado!");
  } else {
    alert("Cancelou!");
  };
};
