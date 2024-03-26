const prompt = require("prompt-sync")();

var diatrab = prompt("Que dia da semana é hoje? ") //"segunda" || "terça" || "quarta" || "quinta" || "sexta";
//"sabado" || "domingo";

switch (diatrab) {
    case "segunda":
    case "terca":
    case "quarta":
    case "quinta":
    case "sexta":
        console.log("Hoje é dia de trabalho!");
        break;
    case "sábado":
    case "domingo":
        console.log("Chegou o dia da Folga!");
        break;
}
