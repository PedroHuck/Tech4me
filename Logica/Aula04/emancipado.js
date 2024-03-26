//identificação das entradas 
var idade = 20;
var sexo = "feminino" 

//Processamento 
var emancipado = idade >= 21 || (sexo == "masculino" && idade >= 18 ) ;
//Saídas 
console.log("Cidadão emancipado", emancipado);