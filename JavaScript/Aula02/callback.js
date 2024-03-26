
function nome(valor) {
    return valor + "!"
}

var resultado = nome("Pedro");
console.log(resultado);


//Callback
function teste(callback) {
   callback();

}

teste(function (){
    console.log("funcao cb foi chamada")
});

var parametro = function () {
    console.log("Esta na variavel parametro");
};

teste(parametro);
