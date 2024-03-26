/* Amigo mais forte
Em um parque de diversões existe um jogo onde os colegas pegam uma marreta de borracha e acertam com força em uma alavanca, fazendo um pino se mover em uma régua com valores numéricos. O amigo que alcançar a maior altura é o vencedor.
Escreva um programa que irá receber o nome e a altura alcançada por 3 amigos. O sistema irá exibir a resposta o nome do amigo que arremessou mais alto.
*/

const prompt = require("prompt-sync")();

//Entrada

const amigo1 = prompt("Nome do amigo 1:");
const alturaAmg1 = parseInt(prompt("A altura do que o amigo 1 alcançou foi de:"));

const amigo2 = prompt("Nome do amigo 2:");
const alturaAmg2 = parseInt(prompt("A altura do que o amigo 2 alcançou foi de:"));

const amigo3 = prompt("Nome do amigo 3:");
const alturaAmg3 = parseInt(prompt("A altura do que o amigo 3 alcançou foi de:"));


//Processamento


if (alturaAmg1 > alturaAmg2 && alturaAmg1 > alturaAmg3) {
    console.log("Parabéns", amigo1, "Ganhou!");
} else if (alturaAmg2 > alturaAmg1 && alturaAmg2 > alturaAmg3) {
    console.log("Parabéns", amigo2, "Ganhou!");
} else {
    console.log("Parabéns", amigo3, "Ganhou!");
};



