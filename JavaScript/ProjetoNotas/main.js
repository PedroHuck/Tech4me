function calcularNota() {
    let linguagens = document.getElementById("linguagens").value;

    let matematica = document.getElementById("matematica").value;

    let humanas = document.getElementById("humanas").value;

    let natureza = document.getElementById("natureza").value;

    let redacao = document.getElementById("redacao").value;

    let pesoLinguagens = 1;
    let pesoMatematica = 1;
    let pesoHumanas = 1.5;
    let pesoNatureza = 1.5;
    let pesoRedacao = 3;

    let pesoTotal = pesoLinguagens + pesoMatematica + pesoHumanas + pesoNatureza + pesoRedacao;

    let totalNotas = (linguagens * pesoLinguagens) + (matematica * pesoMatematica) + (humanas * pesoHumanas) + (natureza * pesoNatureza) + (redacao * pesoRedacao);

    let resultado = totalNotas / pesoTotal

    let elementoResultado = document.getElementById("resultado_nota");
    elementoResultado.innerHTML = resultado;
};
