const prompt = require("prompt-sync")();

console.log("CÚ");

var chances = 2;
var pergunta = "";
var continuar = true;

while (continuar) {
    pergunta = prompt("Não diga alo, diga tech: ")

    if(pergunta != "tech") {
        chances--;
        console.log(chances)
    } else if (chances == 0) {
        continuar = false
    }
} 

// pergunta != "tech" || chances == 0