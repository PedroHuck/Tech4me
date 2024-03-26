class Carro {

//Bloco de Classe

//Constructor


    constructor(montadora) {
        this.montadora = montadora;
        this.combustivel = "";
        this.ano = 2024;
        this.portas = 5

    }
    
    get modelo() {
        return this._modelo = "carro zro"
    }
    set modelo(valor) {
        this._modelo = "interno" + valor;
    }
    //Metodo, função dentro do objeto 
    nomeCompleto() {
        //Propriedade
    this.montadora = "BYD";

    if(this.montadora == "BYD") return "Elétrico"
    }
}

const bmw = new Carro("BMW");
const volvo = new Carro("Volvo");

bmw.nomeCompleto()

console.log(bmw.modelo);
volvo.ano = 2017;

bmw.modelo = "X6"
console.log(bmw.modelo);