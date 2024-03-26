/* Celsius para Fahrenheit
Crie um programa JavaScript que irá solicitar que o usuário digite uma temperatura em graus Celsius. O sistema fará a conversão para graus Fahrenheit e o valor será impresso na tela. Pesquise na internet a fórmula de conversão entre essas unidades de medida.
 */
const prompt = require("prompt-sync")();

const valorcelsius = prompt("Digite uma temperatura em graus Celsius: ");

var fahrenheit = valorcelsius * 1.8 + 32; 

if(valorcelsius) {
    console.log("O valor convertido para Fahrenheit é: ", fahrenheit)
};