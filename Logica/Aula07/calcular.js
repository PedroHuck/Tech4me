const prompt = require("prompt-sync")();



// Exemplo de uso
// const codigoAcaoExemplo = prompt("Qual o nome do código da ação? ");
// const valorAcaoExemplo = prompt("Qual o valor da ação?");
// const quantidadeExemplo = prompt("Qual a quantidade da ação?");


function calcularValorCompra(codigoAcao, valorAcao, quantidade) {

    // Realiza o cálculo do valor da compra
    const valorTotal = valorAcao * quantidade;

    return valorTotal;
}
const resultado = calcularValorCompra("AAPL", 10, 10);
console.log(resultado);