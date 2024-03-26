const aluno = {};

aluno.sobrenome = "Zando";
aluno.nome = "Zepa";

// function mostrar() {
//     var resultado = aluno.nome + "" + aluno.sobrenome;
//     console.log(resultado);
// };

const informaçao = {
    mostrar() {
        return aluno.nome + " " + aluno.sobrenome;
    },
};
var completo = informaçao.mostrar();
console.log(completo);