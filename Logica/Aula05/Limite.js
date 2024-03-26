//Declarar o prompt
const prompt = require("prompt-sync")();

console.log("== Tech4Meet ==");

console.log("Você clicou em entrar!");


//Entradas 
const limite = "10";
const participantes = prompt("Digite os participantes da chamada:");



//Processamento


const atingido = participantes >= limite;


//Saída
if (atingido){
 console.log("Você não pode entrar pois o limite foi atingido");
 console.log("Volte mais tarde");
} else {
    console.log("você entrou na reunião");
    console.log("Boa reunião")
}