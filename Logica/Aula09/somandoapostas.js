const prompt = require("prompt-sync")();

const amigos = 4;
var i = 0;
var total = 0;

while (i < amigos) {
    //
    const resposta = prompt(i + ". Valor da sua resposta: ");
    const valor = parseFloat(resposta);

    //Acumuladora
    total += valor;
    i++;

}

console.log("O total da aposta é: ", total);
