import { quantasVogais, zerosEsquerda } from "./funcostexto.js";


const btnVogais = document.getElementById("vogais");
btnVogais.onclick = vogais();




function vogais(){
    const nome = document.getElementById("nome").value;
    const respostaVogais = document.getElementById("respostaVogais");
    respostaVogais.innerHTML = quantasVogais("nome")
    
}



const btnZeros = document.getElementById("zeros");
btnZeros.onclick = zeros();



function zeros(){
    const numero = document.getElementById("numero").value;
    const respostaZero = document.getElementById("respostaZero");
    respostaZero.innerHTML = zerosEsquerda
    
}




