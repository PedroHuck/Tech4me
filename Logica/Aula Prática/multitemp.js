/* Multi temperaturas
O programa “Celsius para Fahrenheit” será adaptado para que, além de informar a temperatura, o usuário também irá digitar se a medida é F ou C. O sistema fará então a conversão apropriada: Celsius para Fahrenheit ou Fahrenheit para Celsius.
*/

const prompt = require("prompt-sync")();

const pergunta = prompt("a medida será em F ou C ?: ");
const valor = parseInt(prompt("Qual será o valor?"));

var fahrenheit = (valor * 1.8) + 32; 
var celsius = (valor - 32) * 5/9 ;


if(pergunta == "C") {
    console.log("O valor convertido para Fahrenheit é: ", fahrenheit)
} else {
    console.log("O valor convertido em Celsius é: ", celsius)
};