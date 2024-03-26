const relogio = document.getElementById("relogio");

function atualizarTime() {
    relogio.textContent = new Date().toLocaleTimeString();
}

setInterval(atualizarTime, 1000);
