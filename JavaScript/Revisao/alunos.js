let lista = document.getElementById("lista");

let contador = 1;

function cadastrar() {

    const input = document.getElementById("texto");
    const nome = input.value.trim();

    if (nome !== "") {
        let novoAluno = nome.toUpperCase()
        let id = contador++

        adicionarNaLista(novoAluno, id);

        input.value = "";

    } else {
        alert("Por favor inclua o nome do aluno.")
    };
};

function adicionarNaLista(aluno, id) {
    let item = document.createElement("li");
    item.textContent = `${id}. ${aluno}`
    lista.appendChild(item)
};




