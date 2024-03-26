
console.log("== Notas Escolares em Lista ==")

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

var maiorNota = 0;
var abaixo = 0;
var aprovacao = "";


for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];

    const mediaAluno = calcularNota(aluno);

    if (mediaAluno >= 6) {
        aprovacao = "Aprovado"
    } else {
        aprovacao = "Reprovado"
    }

    console.log(aluno.nome, "- Módulo ", aluno.modulo, ":", aprovacao);

    if (!maiorNota || mediaAluno > calcularNota(maiorNota)) {
        maiorNota = aluno;
    }

    if (mediaAluno < 6) {
        abaixo++;
    }
}


//saida

console.log("Relatório de Notas:");    
console.log("Nota de:", aluno1.nome, ":", calcularNota(aluno1));
console.log("Nota de:", aluno2.nome, ":", calcularNota(aluno2));
console.log("Nota de:", aluno3.nome, ":", calcularNota(aluno3));
console.log("Nota de:", ":", aluno4.nome, ":", calcularNota(aluno4));
console.log("Nota de:", aluno5.nome, ":",calcularNota(aluno5));

console.log("Aluno com a maior nota: ", maiorNota.nome);
console.log("Alunos abaixo da média: ", abaixo);
