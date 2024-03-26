const carro = {
    montadora: "Porshe",
    anoFab: 2023,
    mesFab: 8
}

carro.anoModelo = (function (anoFab, mesFab) {
    if (mesFab <= 7) {
        return console.log(`Seu carro tem o ano de Fabricação igual ao Ano de modelo, ${anoFab} `)
    } else {
        carro.anoModelo = anoFab + 1;
        return console.log(`Seu carro tem ano de Fabricação de ${carro.anoFab} e ano modelo de ${carro.anoModelo}`)
    }
})(carro.anoFab, carro.mesFab);

