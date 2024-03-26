const prompt = require("prompt-sync")();

//Entradas

var uf = prompt("Digite a sigla de onde você mora:");

//Processamento

var nome = "";

switch(uf) {
    case "ES": {
        nome="Espírito Santo";

        if (descricao =="");



    }
        break;
        case "MG":
        case "mg":
        case "Mg":
            nome = "Minas Gerais";
        break;
        case "RJ":;
        nome = "Rio de Janeiro";
        break;
        case "SP":;
        nome = "São Paulo";
        break;
        

}
//Saídas
console.log("O nome completo do seu estado é: ");
console.log(nome);

