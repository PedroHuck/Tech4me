const prompt = require("prompt-sync")();

console.log("== RH da empresa ==")
var nomeEntrevistado = prompt("Digite o nome do candidato: ");

var primeiraLetra = nomeEntrevistado.charAt(0);

if (['a', 'e', 'i', 'o', 'u'].indexOf(primeiraLetra) !== -1) {
    console.log("Entrevista na segunda-feira");
} else {
    console.log("Entrevista na terça-feira");
};

