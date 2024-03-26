console.log("== CHAMADA DO PROFESSOR COM ARRAYS ==")

const prompt = require("prompt-sync")();

var alunos = [];
var aluno = prompt("Digite o nome do aluno ( vazio para encerrar):");

while (aluno !== "") {
  alunos.push(aluno);
  aluno = prompt("Digite o nome do aluno ( vazio para encerrar):");
}

console.log("Alunos: ", alunos.join(", "));
