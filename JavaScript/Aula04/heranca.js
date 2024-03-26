class Pessoa {
    constructor() {
        this.nome = "";
        this.sobrenome = "";

    }
}

const zepa = new Pessoa()
zepa.carteira_trabalho = '101506/410516'


class Funcionario extends Pessoa {
    constructor () {
        super();
        this.matricula = "";
        this.horario = "";
        this.profissao = "açougueiro";
    }

    obterProfissao(){
        return this.profissao
    }
    
}
    

const gil = new Funcionario();

console.log(gil.obterProfissao())