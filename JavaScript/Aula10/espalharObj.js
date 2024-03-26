const carro = {
    montadora: "VW",
    modelo:"Nivus",
    cor: "Nardo-Gray"
}

let nivus = {combustivel:"flex", ...carro, portas: 5, cor: "vermelho"};

nivus.ano = 2024;

console.log(nivus)
console.log(carro)

const fusca = { 
    montadora: "VW",
    modelo:"Fusca",
    cor: "Nardo-Gray",
    ano: 1969
}

let novo = {...fusca, ano: 1970};
console.log(novo);
