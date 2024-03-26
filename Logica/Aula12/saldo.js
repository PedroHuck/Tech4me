const prompt = require("prompt-sync")();

// Arrays para armazenar clientes e saldos
var clientes = ["Cliente1", "Cliente2", "Cliente3"];

var saldos = [1000, 2000, 3000];



var nomeCliente = prompt("Digite o nome do cliente:");
nomeCliente = nomeCliente.toLowerCase();

var index = -1;

// Iterar sobre os clientes para encontrar o índice
for (var i = 0; i < clientes.length; i++) {
  if (clientes[i].toLowerCase() === nomeCliente) {
    index = i;
    break; // Interromper o loop assim que encontrar o cliente
  }
}



console.log(index);


if (index !== -1) {
    console.log("Saldo de " + clientes[index], ": R$", saldos[index]);
} else {
    console.log("Cliente não encontrado.");
}



