const prompt = require("prompt-sync")();

const graus = prompt("Quantos graus faz hoje? ");
const chuva = prompt("Está chuvendo hoje? ");

var temp_ideal = graus >= 32 && chuva == "N";

if (temp_ideal) {
    var ideal = "Vá fazer sua atividade"
    console.log(ideal);

} else {
    var nao = "Fique em casa";
    console.log(nao);
}
