// Crie uma IIFE que recebe por parâmetro um nome, e devolve para a variável o nome em maiúsculas.

let n = (function (nome) {
   return nome.toUpperCase();
    
    
})("pedro");

console.log(n)