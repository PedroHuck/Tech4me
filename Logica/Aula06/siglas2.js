const prompt = require("prompt-sync")();

//Entradas

var uf = "ES"; //prompt("Digite a sigla de onde você mora:");

//Processamento

var nome = "";

if (uf == "ES") {
nome = "Espírito Santo";
} else if (uf == "mg") {
    nome = "Minas Gerais";
}

//Saídas
console.log("O nome completo do seu estado é: ");
console.log(nome);
