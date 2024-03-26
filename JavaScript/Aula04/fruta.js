
class Fruta {
    constructor (nome) {
        this._nome = nome;
        this.cor = "";
        this.sabor = "";
    }

    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
}

const banana = new Fruta("Banana");
banana.cor = "amarela";
banana.sabor = "doce";
console.log(banana);

const laranja = new Fruta("Laranja");
laranja.cor = "Laranja";
laranja.sabor = "cítrico";
console.log(laranja);