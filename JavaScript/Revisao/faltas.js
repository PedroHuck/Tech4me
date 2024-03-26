const alunos = [
    {
        nome: "Pedro",
        falta:true
    },
    {
        nome: "Davi",
        falta: false
    }
];

function contarFaltas(listaDeAlunos) {
    let totalFaltas = 0;
    for (let aluno of listaDeAlunos) {
      if (aluno.falta == true) {
        totalFaltas++;
      }
    }
    return totalFaltas;
  }
  
  // Chame a função contarFaltas passando a lista de alunos
  const faltasNaAulaDeHoje = contarFaltas(alunos);
  
  console.log(`O total de faltas na aula de hoje foi: ${faltasNaAulaDeHoje}`);