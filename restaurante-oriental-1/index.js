function ObterMeiaNoite() {
    const horaAtual = new Date()
    const meiaNoite = new Date(horaAtual);
    meiaNoite.setDate(meiaNoite.getDate() + 1);
    meiaNoite.setHours(0, 0, 0, 0)
    return meiaNoite
}

function Calculo() {
    const horaAtual = new Date();
    const meiaNoite = ObterMeiaNoite();
    const cronometro = meiaNoite - horaAtual;

    const tempo = Math.floor(cronometro / 1000);
    const hr = Math.floor(tempo / 3600);
    const min = Math.floor((tempo % 3600) / 60);
    const seg = tempo % 60;

    return {
        hr, min, seg
    }
    
}

const relogio = document.getElementById("relogio");
const textoRelogio = document.getElementById("texto");

function ObterHora() {
    const tempos = Calculo();
    relogio.textContent = `${tempos.hr}h : ${tempos.min}m : ${tempos.seg}s`
    
}

        relogio.style.fontSize = "22px";
        relogio.style.color = "red";
        relogio.style.border = "2px solid red";
        relogio.style.padding = "20px";
        relogio.style.borderRadius = "10px";

        textoRelogio.style.fontSize = "30px";
        textoRelogio.style.color = "blue";
        textoRelogio.style.fontWeight = "bold";
        textoRelogio.style.marginTop = "20px";

setInterval(ObterHora, 1000);

ObterHora();