const prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Digite um número: "));
var n2 = parseInt(prompt("Digite outro número: "));

if (n1 > n2) {
    console.log("O primeiro número é o maior")
} else if (n2 > n1) {
    console.log("O segundo número é o maior")
} else if(n1 = n2) {
    console.log("Os dois valores são iguais")
};