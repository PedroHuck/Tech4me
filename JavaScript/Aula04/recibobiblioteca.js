const aluno = "Kevin Durant";
const qntd = 5;
var recibo = `
Recibo: 
Data/Hora: ${new Date().toLocaleString()}
Aluno: ${aluno}
Qntd de livros emprestados ${qntd}

-------------------
`;

console.log(recibo);