const prompt = require("prompt-sync")();

const numeroSorteado = Math.floor(Math.random() * 9) + 1;
var nro = 0;
var x = 0;

//var tentativas = 0;

while (nro != numeroSorteado) {
    nro = parseInt(prompt("Digite seu palpite: "));
    x++
};

console.log("Você acertou depois de ", x, "tentativas");