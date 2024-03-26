const prompt = require("prompt-sync")();

var UF = prompt("digite a sigla do seu estado: ");

switch (UF) {
    case "rj":
    case "RJ":
        console.log("O nome completo do seu estado é: Rio de Janeiro");
        break;
    case "es":
    case "ES":
        console.log("O nome completo do seu estado é: Espírito Santo ");
        break;
    case "mg" :
    case "MG" :
        console.log("O nome completo do seu estado é: Minas Gerais");
        break;
    case "sp":
    case "SP":
        console.log("O nome completo do seu estado é: São Paulo ");
        break;
}
