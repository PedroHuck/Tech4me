const prompt = require("prompt-sync")();



const aleatorio = Math.trunc(Math.random() *9 + 1);
var x = 0;
var nro = 0;

while (nro != aleatorio) {
    const texto = prompt("digite seu numero: ");
    nro = parseInt(texto);
    x++;
}

console.log("Você acertou após", x, "tentativas");