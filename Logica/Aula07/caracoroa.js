function obterPar() {

const aleatorio = Math.random();
const decimal = aleatorio * 10;
const numero = Math.trunc(decimal);
const par = numero % 2 == 0;


if (par) return "cara";

    return "coroa"


}



//Saída 
const resposta = obterPar();
console.log("A moeda deu: ", resposta)