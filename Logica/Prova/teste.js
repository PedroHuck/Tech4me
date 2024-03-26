// Notas escolares em lista
// A escola de programação aumentou a correção de avaliações, permitindo lançar todas as notas da turma no sistema. O sistema deverá exibir: a) um relatório de notas; b) O aluno com a maior nota; c) A quantidade de alunos abaixo da média 7.0.

function calcularNota(aluno) {
    return (aluno.nota_4 + aluno.nota_6) / 2;
};

var aluno1 = {
    nome: "Pedro",
    modulo: "html",
    nota_4: 8,
    nota_6: 8
};

var aluno2 = {
    nome: "Arthur",
    modulo: "lógica",
    nota_4: 6,
    nota_6: 6
};

var aluno3 = {
    nome: "Davi",
    modulo: "css",
    nota_4: 7,
    nota_6: 7
};

var aluno4 = {
    nome: "Thales",
    modulo: "javascript",
    nota_4: 3,
    nota_6: 7
};

var aluno5 = {
    nome: "Rikson",
    modulo: "react",
    nota_4: 5,
    nota_6: 7
};

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];

    const mediaAluno = calcularNota(aluno);

    
    console.log(aluno.nome + " - Módulo " + aluno.modulo + ": ");

    console.log("Relatório de Notas:");
    
    console.log(calcularNota(aluno));

    if (mediaAluno >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

var total = 0;
var alunoMaiorNota;
var DaMedia = 0;

for (var i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    const media = calcularNota(aluno);
    total += media;

    if (!MaiorNota || media > calcularNota(MaiorNota)) {
        MaiorNota = aluno;
    }

    if (media < 6) {
        abaixoDaMedia++;
    }
}

const mediaDaTurma = total / alunos.length;


console.log("Média da turma: ", mediaDaTurma);
console.log("Aluno com a maior nota: ", MaiorNota.nome);
console.log("Alunos abaixo da média: ", abaixoDaMedia);