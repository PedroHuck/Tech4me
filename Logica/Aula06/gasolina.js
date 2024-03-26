const prompt = require("prompt-sync")();

//Retorno do prompt sempre será string

const preco = prompt("Frentista, digite o preço com zero no final:");

const valor = parseFloat(preco);

console.log("Valor digitado:", preco);
console.log("Valor a pagar:", valor);