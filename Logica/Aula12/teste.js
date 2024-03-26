const prompt = require("prompt-sync")();

// Arrays para armazenar clientes e saldos
var clientes = ["Cliente1", "Cliente2", "Cliente3"];
var saldos = [1000, 2000, 3000];

var nomeCliente = prompt("Digite o nome do cliente:");
nomeCliente = nomeCliente.toLowerCase();

// Converta todos os nomes dos clientes para minúsculas
var clientesLowerCase = clientes.map(function(cliente) {
  return cliente.toLowerCase();
});

var index = clientesLowerCase.indexOf(nomeCliente);

console.log(index);

if (index !== -1) {
    console.log("Saldo de " + clientes[index] + ": R$", saldos[index]);
} else {
    console.log("Cliente não encontrado.");
}

