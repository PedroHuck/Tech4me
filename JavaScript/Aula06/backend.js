const musica = document.getElementById('musica');

function obterMusica() {
    musica.innerText = "Consultando servidor, aguarde...";
    setTimeout(servidor, 5 * 1000)
}

function servidor() {
musica.innerText = 'O nome da musica é... Carinhoso';
}