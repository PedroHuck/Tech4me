const prompt = require("prompt-sync")();

var numero1 = parseInt(prompt("Digite um número: "));
var numero2 = parseInt(prompt("Digite outro número: "));

var soma = numero1 + numero2;

console.log("A soma dos valores é: ", soma);