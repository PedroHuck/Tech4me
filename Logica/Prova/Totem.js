const prompt = require("prompt-sync")();

console.log("== TOTEM DE AUTOATENDIMENTO DA LANCHONETE ==")

console.log("Preço do sanduíche: R$ 5.0 ")
console.log("Preço do acompanhamento: R$ 2.0 (Direito a 5 acompanhamentos ) ")



var sanduiche = prompt("Qual sanduíche irá querer?: ");
var acomp = 0;
var preço = 5;
var valorAcomp = 2.0;
var listaAcomps = "";


while (acomp < 5) {
  var acomps = prompt("Escreva o nome do acompanhamento (ou 'concluir' para encerrar):");

  if (acomps.toLowerCase() === "concluir") {
    break;
  }
  if (listaAcomps != "") {
    listaAcomps += ", ";
  }
  listaAcomps += acomps

  acomp++;
  preço += valorAcomp;
}

console.log("Pedido: ", sanduiche);
console.log("acompanhamentos (", acomp ,"): ", listaAcomps);
console.log("Valor a pagar: R$", preço);
