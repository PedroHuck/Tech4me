class Titulo {
    constructor(nome, duracao, anoLancamento, genero, diretor) {
        this.nome = nome;
        this.duracao = duracao;
        this.anoLancamento = anoLancamento;
        this.genero = genero;
        this.diretor = diretor;
    }
    descreveFilme() {
        return `Filme: ${this.nome}, lançado em: ${this.anoLancamento}`
    }

}

let filmes = [];






function buscarDados() {
    let titulo = document.getElementById("titulo").value;

    const url = ` https://www.omdbapi.com/?t=${titulo}&apikey=7b65406e`;

    fetch(url).then(response => {
        return response.json()
    }).then(filme => {
        atribuirDados(filme)
    })
    
}
function atribuirDados(dados) {
    let filme = new Titulo(dados.Title, dados.Runtime, dados.Year, dados.Genre, dados.Director)
    for (const filme of filmes) {
        alert(filme.descreveFilme())
    }
    
   let result = document.getElementById("resultado")
   result.innerHTML = filme.descreveFilme()

}

class Produto {
    constructor(id, restaurante, imagem, produto, descricao) {
        this.id = id;
        this.restaurante = restaurante;
        this.imagem = imagem;
        this.produto = produto;
        this.descricao = descricao;
    }
    
    DescreverProduto() {
        return `${this.produto}`
    }
};

function buscarDados() {
    alert("cu")
    const url = "https://restaurante-oriental.fly.dev/produtos"
    
    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        atribuirDados(data)
        alert(data.produto);
    })
}

let produtos = [];

function atribuirDados(dados) {
    let produto = new Produto(dados.id, dados.restaurante, dados.imagem, dados.produto, dados.descricao, )
    alert(data.produto);
    for (const produto of produtos) {
        alert(produto.DescreverProduto())
    }
    
   let sushi = document.getElementById("produto")
   sushi.innerHTML = produto.DescreverProduto()
}