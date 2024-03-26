const prompt = require("prompt-sync")();

var add = "";
const adicional = 2.0;
var total = 0;
var valor = 0;

console.log("Quer adicionar complementos? (Fim para sair)");
do {
    add = prompt("Adicional: ");
    
    if (add != "fim") {
        total++
        valor = total * adicional;
    }
}    while (add != "fim");

console.log(total);
console.log(valor);



