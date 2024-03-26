function promoPar() {
    console.log("Você ganhou 4% da promo par");
}

function promoImpar() {
    console.log("VOCÊ GANHOU 3% DA PROMO IMPAR");
}

var minuto = new Date().getSeconds();
console.log(minuto)
var promocao;

if (minuto % 2 == 0) {
    promocao = promoPar;
} else promocao = promoImpar;

//chamada
promocao();