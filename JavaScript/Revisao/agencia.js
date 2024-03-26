const listaCarros = [
    porshe = {
        marca: "911",
        valor: 1000, 
        cor: "verde",
        ano: 2020
    },
];

const lucro = valor => valor * 0.03;

porshe.lucro = lucro(1000);

const calcularIPVA = valor => valor * 0.04;

porshe.ipva = calcularIPVA(1000);

const licenciamento = valor =>  valor + 160;

porshe.licenciatura = licenciamento(0)





console.log(porshe)
