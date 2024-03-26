const prompt = require("prompt-sync")();

var alunos = []

for (var i = 0; i < 10; i++) {
    alunos[i] = prompt("Nome do aluno");
  }
  
  console.log(alunos[1])