const semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Domingo", ];

const palavra = "Domingo";

const achei = semana.indexOf(palavra)

semana.push("Sabado")

const resultado = [];

console.log("Econtrado na posição", achei);
//1. Varrer a lista
for (var i = 0; i < semana.length; i++){
//2. extrair cada item a ser analisado
    const item = semana[i];
//3.Estabelecer a condição de pesquisa

    if (item.substring(0, 1).toLocaleLowerCase() == "s") {
        //4.Usar o resultado
        resultado.push(item);
    }
}
//Depois de varrer
for (var i = 0; i < resultado.length; i++)
console.log(resultado[i]);