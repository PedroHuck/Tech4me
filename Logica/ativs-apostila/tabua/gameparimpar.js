const prompt = require("prompt-sync")();

console.log("Jogo do Par ou Ímpar");

var p1 = prompt("Par ou Ímpar? ");
var p2; 

if(p1 == "par") {
    p2 = "impar"
} else {
    p2 = "par"
};


var numero1 =  parseInt(prompt("Amigo 1, digite aqui seu número: "));
var numero2 =  parseInt(prompt("Amigo 2, digite aqui seu número: "));

var soma = numero1 + numero2;
var soma = soma % 2;

if (soma == 0 && p1 == "par" ){
    console.log("Jogador 1 venceu no par ou ímpar!")
} else if (soma != 0 && p1 != "par") {
    console.log("Jogador 1 venceu no par ou ímpar!")
};

if (soma == 0 && p2 == "par" ){
    console.log("Jogador 2 venceu no par ou ímpar!")
} else if (soma != 0 && p2 != "par") {
    console.log("Jogador 2 venceu no par ou ímpar!")
};

