const prompt = require("prompt-sync")();

// var tarefa1 = "COMER";
// var tarefa2 = "TIRAR LIXO";
// var tarefa3 = "LAVAR LOUÇA";

const tarefa1 = prompt("Qual a tarefa da manhã?");
const tarefa2 = prompt("Qual a tarefa da tarde?");
const tarefa3 = prompt("Qual a tarefa da noite?");

const periodo = prompt("qual o periodo do dia?");

if (periodo == "manha") {
    console.log(tarefa1);
} else if (periodo == "tarde") {
    console.log(tarefa2);
} else if (periodo == "noite") {
    console.log(tarefa3);
};
