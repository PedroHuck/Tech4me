const numero = 12.589;

var resposta = 0;

resposta = Math.round(numero);
resposta = Math.trunc(numero);
resposta = Math.random();
console.log(resposta);

const a = 15;
const b = 8;

var condicao = b > a;
var resposta = 0;

if (condicao) resposta = b;
else resposta = a;

console.log("O maior entre", a, "e", b, "é", resposta);

//outro programa minima
const a = 15;
const b = 8;
var resposta = Math.min(a, b);

console.log("O menor entre", a, "e", b, "é", resposta);
