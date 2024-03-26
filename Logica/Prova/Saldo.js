const prompt = require("prompt-sync")();

console.log("== AGENCIA BANCÁRIA ==")


var clientes = ["Pedro", "Arthur", "Davi"];
var saldos = [0.0, 350.20, 380.25];

var nome = prompt("Nome do cliente:");

for (var i = 0; i < clientes.length; i++) {
  if (nome.toLowerCase() === clientes[i].toLowerCase()) {
    console.log("Saldo de " + clientes[i] + ": R$ " + saldos[i]);
    break;
  }
};

