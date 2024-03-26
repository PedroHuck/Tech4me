const prompt = require("prompt-sync")();

console.log("--Entrevistas do RH--");

const nome = prompt("Candidato, digite seu nome: ");

const letra = nome.substring(0, 1).toLocaleLowerCase();
const vogal = letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u";

var dia = "";

if (vogal) dia = "segunda";
else dia = "terça";

//Saída
console.log("A sua entrevista será no dia: ")
console.log(dia);