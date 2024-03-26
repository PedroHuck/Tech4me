const prompt = require("prompt-sync")();

//Entradas

const amigo1 = prompt("Amigo 1, cara ou coroa?");
var amigo2 = "";

//Processamento

if(amigo1 == "cara") {
    amigo2 = "coroa";
} else {
    amigo2 = "cara"
};

console.log("Amigo 2: ", amigo2)

const nAleatorio = Math.random();
console.log(nAleatorio);
const redondo = Math.round(nAleatorio * 10) / 10;
console.log(redondo);

//const resultado = redondo % 2 === 0 ;

if(redondo % 2 ===0) {
    console.log("O resultado da moeda é CARA ")
} else {
    console.log("O resultado da moeda foi COROA")
}

