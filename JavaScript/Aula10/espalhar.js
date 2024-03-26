// Extrair os 3 primeiros elementos de um array

const amarelas = ["🍑", "🍍", "🍋", "🍌"];

// let primeiro = amarelas[0]; 
// let segundo = amarelas[1];
// let terceiro = amarelas[1];

let novo = [amarelas[0], amarelas[1], amarelas[2] ] 

let frutas = ["🌮","🥪",...amarelas, "conde"];

const vermelhas = ["cuzin;"]

frutas.push(...vermelhas)

console.log(frutas);
console.log(frutas.length);
