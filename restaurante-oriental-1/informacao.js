function buscarDados(id, produto, imagem, descricao) {
    const url = `https://restaurante-oriental.fly.dev/produtos/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            produto.innerHTML = data.produto;
            descricao.innerHTML = data.descricao;
            imagem.src = data.imagem;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    buscarDados(
        '65e92286f271523e111ec36e',
        document.getElementById('produto1'),
        document.getElementById('img1'),
        document.getElementById('descricao1')
    );
    buscarDados(
        '65e922c3dad0a85f4e12c805',
        document.getElementById('produto2'),
        document.getElementById('img2'),
        document.getElementById('descricao2')
    );
    buscarDados(
        '65e92924c12c5619c161fd3d',
        document.getElementById('produto3'),
        document.getElementById('img3'),
        document.getElementById('descricao3')
    );
    buscarDados(
        '65e922edf271523e111ec36f',
        document.getElementById('produto4'),
        document.getElementById('img4'),
        document.getElementById('descricao4')
    );
    buscarDados(
        '65e922fcf271523e111ec370',
        document.getElementById('produto5'),
        document.getElementById('img5'),
        document.getElementById('descricao5')
    );
    buscarDados(
        '65e92307f271523e111ec371',
        document.getElementById('produto6'),
        document.getElementById('img6'),
        document.getElementById('descricao6')
    );
});
