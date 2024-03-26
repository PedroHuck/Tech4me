const prompt = require("prompt-sync")();


//Entrada

function extrairTipoPlaca(numero) {
    const quinto = numero.substring(4, 5);
    
    if(quinto > "0" && quinto <= "9") return "antiga";
    
    return "mercosul";
    
}

//Processamento
const placa = prompt("Digite a placa: ");

const tipo = extrairTipoPlaca(placa);

//Saída
console.log("O carro na cancela tem placa: ", tipo)