function verAno(item) {
    return item.ano < 2021 ? "usado": "seminovo";
}

const carros = lista.map(verAno);

for (var i = 0; index < lista.length; i++) {
    const carro = lista[i];
    const estado = carros[i];
    console.log(`
    Modelo: ${carro.modelo}
    Ano: ${carro.ano}
    Estado ${estado}
    `)
    
}
