const prompt = require("prompt-sync")();

//Entradas

var sabores = "Sabores: ";
var preço = 5.90;
var adicional = 2;
var preco2 = preço + adicional;
var preco3 = preço + adicional * 2;



var adicional1 = "paçoca"; 
var adicional2 = "farofa doce";  
var adicional3 = "calda de caramelo";  
var adicional4 = "bolacha de chocolate";  

var opcao1 = "morango";
var opcao2 = "banana";
var opcao3 = "ovomaltine";
var opcao4 = "baunilha";

//Processamento

console.log("== Quiosque ==");
console.log(sabores);
console.log(opcao1);
console.log(opcao2);
console.log(opcao3);
console.log(opcao4);


const escolha = prompt("Qual opção de sorvete você irá querer? ")

const amais = prompt("Irá querer adicionais? ");

if(amais == "sim" ) {
    var quantos = prompt("1 ou 2 ?");
}

if(quantos == 1) {
 console.log("O preço do seu sorvete foi de:", preco2)
} else if(quantos == 2) {
    console.log("O preço do seu sorvete foi de:", preco3)
   } else {
    console.log("O preço do seu sorvete foi de: ", preço)
   }
