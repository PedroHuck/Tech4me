const prompt = require("prompt-sync")();

console.log("== Investidor ==");

var codigo = prompt("Digite o código da ação: ");

console.log("O código da ação é: ", codigo);


console.log("O valor da ação é de 10.5");


var qntd = parseInt(prompt("Quantas ações deseja comprar?",));

var resultado = qntd * 10.5;

if (qntd = 0) {
    console.log("Ok, obrigado")
};

if (resultado) {
    console.log("O valor total das suas ações em carteira é: ", resultado);
};

