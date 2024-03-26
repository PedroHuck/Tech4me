const aluno = {nome: "Gil", nota: 7.8};

let texto = JSON.stringify(aluno)



texto = '{"montadora": "Vw", "ano":1960}'

console.log(texto)

let carro = JSON.parse(texto)

console.log(carro)