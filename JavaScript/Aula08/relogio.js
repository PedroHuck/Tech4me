const relogio = document.getElementById("relogio");
let tempo = 0;
let id = 0;

const btnIniciar = document.getElementById("iniciar")
const btnparar = document.getElementById("btnparar")


function iniciar() {
    id = setInterval(incremento, 1000);
    btnIniciar.disabled = true;
    btnparar.disabled = false;
}

function incremento() {
    tempo++

    let min = Math.trunc(tempo / 60);
    let seg = tempo % 60;
    let zero = seg < 9 ? "" : "0";

    relogio.innerText = `${min}:${zero}${seg}`;
};


function parar() {
    btnIniciar.disabled = false;
    clearInterval(id)
};

function reiniciar() {
    tempo = -1;
    incremento()
}


