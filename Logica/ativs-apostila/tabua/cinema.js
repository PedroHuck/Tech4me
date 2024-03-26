const prompt = require("prompt-sync")();

console.log("== CINEMA ==");
console.log("Gêneros:");
console.log("Drama, Romance E Terror");



var resposta = prompt("Qual gênero de filme você mais gosta? ");


var g1 = "Drama" ;
var g2 = "Romance" ;
var g3 = "Terror" ;

if (resposta == g1) {
    console.log("Que legal, temos o filme Invictus em cartaz! ");
    console.log("SINOPSE: Recentemente eleito presidente, Nelson Mandela (Morgan Freeman) tinha consciência que a África do Sul continuava sendo um país racista e economicamente dividido, em decorrência do apartheid. A proximidade da Copa do Mundo de Rúgbi, pela primeira vez realizada no país, fez com que Mandela resolvesse usar o esporte para unir a população. Para tanto chama para uma reunião Francois Pienaar (Matt Damon), capitão da equipe sul-africana, e o incentiva para que a selação nacional seja campeã.");
};

if (resposta == g2) {
    console.log("Romantico, temos o filme Encontro Marcado em cartaz!");
    console.log("SINOPSE: Em Nova York, uma médica residente (Claire Forlani) conhece por acaso um recém-chegado na cidade (Brad Pitt). Eles se sentem atraídos, mas logo após se despedirem ele morre em um acidente. Em seguida, a própria Morte decide por utilizar o corpo desta vítima e vai falar com um magnata da mídia (Anthony Hopkins), dizendo que está ali para levá-lo mas, como pretende conhecer os hábitos dos humanos, propõe retardar esta partida se o milionário tornar esta 'férias' interessantes e instrutivas. Ironicamente, a filha do magnata a jovem médica que tinha se sentido atraída por um desconhecido no início da história. ");
};

if (resposta == g3) { 
console.log("Assustador! Temos o filme A morte do demônio: a ascensão ");
console.log("SINOPSE: A Morte do Demônio: A Ascensão é um filme de terror slasher que faz parte da clássica franquia A Morte do Demônio, que teve o primeiro título lançado em 1981. No filme, Beth (Lily Sullivan) vai até Los Angeles para visitar sua irmã mais velha, Ellie (Alyssa Sutherland), que mora com os três filhos em um pequeno apartamento. Com uma relação distante, essa seria a oportunidade para uma reaproximação entre as irmãs. Porém, o reencontro toma um rumo macabro quando elas encontram um livro antigo que dá vida a demônios possuidores de carne. Agora, para sobreviverem, serão forçadas a enfrentar uma versão aterrorizante da família. ");
};



