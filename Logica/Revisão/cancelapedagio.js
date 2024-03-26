const prompt = require("prompt-sync")();

var quinto = "";

function extrairPlaca(numero) {
    quinto = numero.substring(4,5);
    if (quinto > "0" && quinto <= "9") {
        return "placa antiga";
        
    } else { 
        console.log("mercosul");
    };
};

const placa = prompt("Qual o número da placa?")


const extrair = extrairPlaca(placa);
console.log(extrair);
