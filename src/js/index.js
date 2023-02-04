var convidados = JSON.parse(localStorage.getItem("convidados")) || [];

var elLista = document.getElementById("lista");
var elPessoa = document.getElementById("Pessoa");
var elclicar = document.getElementById("clicar");
var elCampo = document.getElementById("campo");
var elBotao = document.getElementById("botao");

elclicar.onclick = function() {
  var nome = elPessoa.value;
  convidados.push({ nome: nome });
  elPessoa.value = "";
  
  elBotao.onclick = function() {
 var nome = elCampo.value;
 convidados.push({ nome: nome });
 elCampo.value = "";

  listarConvidados();
};

function salvarConvidados() {
  localStorage.setItem("convidados", JSON.stringify(convidados));
}

function listarConvidados() {
  elLista.innerHTML = "";

  for (const convidado of convidados) {
    var elConvidado = document.createElement("li");
    var elNome = document.createTextNode(convidado.nome);

    var elExcluir = document.createElement("a");
    elExcluir.setAttribute("href", "#");
    elExcluir.onclick = function() {
      convidados = convidados.filter(function(item) {
        return item.nome !== convidado.nome;
      });

      salvarConvidados();
      listarConvidados();
    };

    var elExcluirTexto = document.createTextNode("Excluir");

    elExcluir.appendChild(elExcluirTexto);
    elConvidado.appendChild(elNome);
    elConvidado.appendChild(elExcluir);
    elLista.appendChild(elConvidado);
  }
}

listarConvidados();


salvarConvidados();
listarConvidados();
};