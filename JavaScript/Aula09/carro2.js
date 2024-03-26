const carro = {
    montadora: "Porshe",
    modelo: "Carrera",
    ano:2020,
    anoModelo: 2014
}
// let ano;
// if (carro.anoModelo > 0) ano = carro.anoModelo;
// else ano = carro.ano;

ano = carro.anoModelo || carro.ano;


console.log(ano);