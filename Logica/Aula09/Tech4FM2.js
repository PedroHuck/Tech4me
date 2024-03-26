const prompt = require("prompt-sync")();

console.log("Tech4FM")

var continuar = false;

do {

    console.log("Não diga alô, diga 'Tech4FM show'");

    const resposta = prompt("Telefone toca: ");

    if (resposta == 'tech4fm') {
        console.log("Parabéns, ganhou a camiseta!");
        continuar = false;
    }
} while (continuar)
console.log("Obrigado pela participação");