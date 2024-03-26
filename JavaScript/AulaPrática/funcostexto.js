function quantasVogais(nome) {
    let total = 0;
    const vogais = "aeiou";

    for(const letra of nome) {
        if(vogais.includes(letra))
        total++;
    }
    return total;
}

function zerosEsquerda(numero){
 let nro = "0000" + numero;
 return nro.substring(nro.length - 5);
}

export {quantasVogais, zerosEsquerda};