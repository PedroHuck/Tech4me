
console.log("== SISTEMA DE NOTAS ESCOLARES ==")

function calcularNota(aluno) {
    return (aluno.nota_4 + aluno.nota_6) / 2;
};

var aluno1 = {
    nome: "Pedro",
    modulo: "html",
    nota_4: 7,
    nota_6: 8
};

var aluno2 = {
    nome: "Arthur",
    modulo: "lógica",
    nota_4: 5,
    nota_6: 6
};

var aluno3 = {
    nome: "Davi",
    modulo: "css",
    nota_4: 6,
    nota_6: 7
};

var aluno4 = {
    nome: "Thales",
    modulo: "javascript",
    nota_4: 4,
    nota_6: 7
};

var aluno5 = {
    nome: "Rikson",
    modulo: "react",
    nota_4: 6,
    nota_6: 7
};

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];

    const mediaAluno = calcularNota(aluno);

    console.log(aluno.nome + " - Módulo " + aluno.modulo + ": ");

    if (mediaAluno >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}
