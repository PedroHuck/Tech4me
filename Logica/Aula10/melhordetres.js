
/* Melhor de três

O locutor da rádio Tech4FM irá fazer uma pergunta ao vivo. Três ouvintes terão a chance de ganhar uma caneca personalizada ao acertar a resposta. Cada ouvinte terá duas chances de responder.
*/
const prompt = require("prompt-sync")();

console.log("Qual nome da radio que te dá uma caneca?")

//Externa

for (var i = 0; i < 3; i++) {

var resposta = "";
var chances = 2;

    do {

        resposta = prompt("Ouvinte "+ i + 1 + "sua resposta? ");
        if (resposta == "tech4fm") console.log("ganhou a caneca")
        else chances--;
    } while (resposta != "tech4me" && chances > 0)
}

console.log("Parabéns aos ganhadores")