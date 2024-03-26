const carro = {
    montadora: "VW",
    modelo:"Nivus",
    cor: "Nardo-Gray"
}

let novo = {combustivel:"flex", ...carro, portas: 5, cor: "vermelho", modelo: "Carrera", montadora: "Porshe"};