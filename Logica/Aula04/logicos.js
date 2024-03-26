var toma_cafe = true;
var programa_madrugada = false;

const programador = toma_cafe && programa_madrugada;

console.log("pessoa programadora?", programador);

var sabado =false;
var domingo = true;

var findSemana = sabado || domingo;
console.log("Hoje é find?", findSemana);

const dia_util = !findSemana;
console.log("É dia util?", dia_util);