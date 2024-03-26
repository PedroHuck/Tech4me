const presentes = ["nome1", "nome2", "nome3", "nome4", "nome5"];

var texto = "";

for (var i = 0; i < presentes.lenght; i++) {
    const item = presentes[i];
    texto += item + ", "
}
console.log(texto);

texto = presentes.join(",");
console.log(texto);

texto = "a, e, i, o, u";

const vogais = texto.split(",");
console.log(vogais.length, vogais);