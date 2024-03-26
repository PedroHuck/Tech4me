/* O totem da lanchonete irá solicitar o nome do sanduíche. Depois disso, o cliente pode digitar até cinco acompanhamentos por R$ 2,00 cada. Ao final será exibido o pedido completo e o valor a pagar.

✅ Ao digitar “concluir”, o programa não pede mais acompanhamentos.
 */

const prompt = require("prompt-sync")();

console.log("Lanchonete");

const sanduba = prompt("Qual o seu sanduiche?");
var acomp = 0;
var lista = "";

for (var i = 0; i < 5; i++) {
const texto = prompt("Acompanhamento? (concluir para sair)");

if (texto == "concluir") break;

lista += texto + ", ";
acomp++;

}

console.log("Seu sanduiche é:", sanduba);
console.log("Acompanhamentos", lista)