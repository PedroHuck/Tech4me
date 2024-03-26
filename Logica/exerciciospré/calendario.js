const prompt = require("prompt-sync")();

console.log("Calendário");

const calendario = [];

calendario[0] = "Zero";

calendario.push("Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo")
calendario.push("Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo")
calendario.push("Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo")
calendario.push("Segunda", "Terça", "Quarta")

const texto = prompt("Qual o dia você quer saber? ")

const dia = parseInt(texto);

const semana = calendario[dia];

console.log("O dia", dia, "cairá numa", semana);

