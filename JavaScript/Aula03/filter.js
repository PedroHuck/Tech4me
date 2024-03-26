const frutas = ["🍌", "🍓", "🍍", "🍌", "🍉", "🍇"];
const fn = (item) => item === "🍌";
const bananas = frutas.filter(fn)

const numeros = [140, 104, 14, 41, 10];
numeros.sort((a, b) => console.log(a - b));
