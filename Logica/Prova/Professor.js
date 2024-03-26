
const prompt = require("prompt-sync")();

console.log("== CHAMADA DO PROFESSOR ==");

var aluno = prompt("Escreva o nome do aluno (ou vazio para encerrar):");
var presentes = "";

while (aluno != "") {
  if (presentes != "") {
    presentes += ", ";
  }
  presentes += aluno;
  aluno = prompt("Escreve o nome do aluno (ou vazio para encerrar):");
}

console.log("Alunos presentes: " + presentes);


console.log("Programa com do..while: ")

var presentes = "";
var aluno = "";

do {
  aluno = prompt("Digite o nome do aluno (ou vazio para encerrar):");

  if (aluno != "") {
    if (presentes != "") {
      presentes += ", ";
    }
    presentes += aluno;
  }
} while (aluno != "");

console.log("Alunos presentes: " + presentes);
