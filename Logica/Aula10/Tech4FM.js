const prompt = require("prompt-sync")();

for (var ouvinte = 0 ; ouvinte < 5 ; ouvinte++ ) {
    const nome = prompt("Seu nome: ");
    console.log(nome, "ganhou ingressos para o cinema")
}

console.log("Fim da promoção, parabéns aos 5 ");