
class Endereco {
    constructor(cep, rua, cidade, uf, bairro) {
        this.cep = cep;
        this.rua = rua;
        this.cidade = cidade;
        this.estado = uf;
        this.bairro = bairro;
    }

    descrever() {
        return `Rua: ${this.rua} - bairro: ${this.bairro}, cidade: ${this.cidade} - estado: ${this.estado}, cep: ${this.cep}`
    }


}


let dadosEndereco = [];


function buscarDados() {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(
        response => {
            return response.json()
        }).then(dados => {
            AtribuirDados(dados);
            //atribuir dados aos campos
        });
}


function AtribuirDados(dados) {
    const rua = document.getElementById("rua");
    const complemento = document.getElementById("complemento");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

    rua.value = dados.logradouro;
    complemento.value = dados.complemento;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;

    let end = new Endereco(dados.cep, rua.value, cidade.value, estado.value, bairro.value,)
    dadosEndereco.push(end)
    
}

function limparDados() {
    const rua = document.getElementById("rua");
    const complemento = document.getElementById("complemento");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");
    
    rua.value = "";
    complemento.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
    
    for (const end of dadosEndereco) {
        alert(end.descrever())
    }
    
}

