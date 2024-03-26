const prompt = require("prompt-sync")();

const sapateira = ["Chinelo", "Tamanco", "Papete", "Tenis nike", "Mocassin", "airmax", "rasteirinha"]

sapateira.push("Crocs", "Salto Alto", "rider", "Havaianas", "Ferracini" )

const nome = prompt("Nome do sapato que vc quer?")

console.log(sapateira[nome]);

const inteiros = [1, 2, 3, 4, 5];
inteiros[3] = 2 * 4;