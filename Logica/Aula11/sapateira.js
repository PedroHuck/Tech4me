const prompt = require("prompt-sync")();

var sapato1 = "Mocassim";
var sapato2 = "De pano preto";
var sapato3 = "all star";
var sapato4 = "nike vermelho";
var sapato5 = "Plataforma";

var espaco = prompt("Digite o espaço: ");
var resposta = "x"

if(espaco == "1") resposta = sapato1;
if(espaco == "2") resposta = sapato2;
if(espaco == "3") resposta = sapato3;
if(espaco == "4") resposta = sapato4;
if(espaco == "5") resposta = sapato5;


console.log("No espaço", espaco, "está guardado o", resposta)