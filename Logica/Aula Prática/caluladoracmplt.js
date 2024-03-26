/* Calculadora completa
Vamos criar uma calculadora onde o usuário digita dois valores e todas as operações aritméticas são impressas na tela: Soma, subtração, multiplicação, divisão inteira e divisão real.
 */

const prompt = require("prompt-sync")();

console.log("== Calculadora Completa ==");

//Entrada
const valor1 = parseInt(prompt("Digite o primeiro valor:"));
const valor2 = parseInt(prompt("Digite o segundo valor:"));

//Processamento

const soma = valor1 + valor2;
const sub = valor1 - valor2;
const multi = valor1 * valor2;
const divInteira = Math.trunc(valor1 / valor2);
const divReal = valor1 / valor2;

//Saída

console.log("Resultado das Operações");
console.log("soma:", soma);
console.log("Subtração", sub);
console.log("Multiplicação", multi);
console.log("Div Inteira:", divInteira);
console.log("Div Real", divReal);
