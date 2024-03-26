/*Eliminatórias da Copa
Em novembro de 2023 aconteceram várias partidas de futebol na América Latina para definir a classificação dos times para o próximo mundial. Crie um programa que irá exibir para o torcedor o resultado do último jogo de futebol do time que ele quiser consultar.
O usuário irá digitar uma sigla de três letras maiúsculas indicando qual a seleção de interesse, e o sistema imprime a informação sobre a partida.
Ex.
Digite a sigla do time: ARG
Resultado da última partida de Argentina:
Data do jogo: 21/11/2023
Placar: ARG 1 x 0 BRA

*/

const prompt = require("prompt-sync")();

//Entradas
var jogo = prompt("Qual seleção você deseja saber as informações do ultimo jogo?")

//Processamentos
switch (jogo) {
    case "ARG":
    case "BRA":
        console.log("Resultado da ultima partida: ");
        console.log("Data do jogo: 21/10/2023")
        console.log("Placar: ARG 0 x 1 BRA")
        break;

    case "URU":
    case "BOL":
        console.log("Resultado da ultima partida: ");
        console.log("Data do jogo: 21/11/2023");
        console.log("Placar: BOL 0 x 3 URU");
        break;
}

//Saídas