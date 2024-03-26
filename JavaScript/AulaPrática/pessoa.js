const url = "https://randomuser.me/api/";

function revelar() {
    fetch(url).then(cb1).then(resposta);
}

function resposta(dados) {

    const funcionario = dados.results[0];

    const nomeCompleto = funcionario.name.first + " " + funcionario.name.last;

    const imagem = funcionario.picture.large;

    document.getElementById("nome").innerText = nomeCompleto;
    document.getElementById("foto").src = imagem;
}


function cb1(res) {
    return res.json();
}
