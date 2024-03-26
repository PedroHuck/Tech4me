const prompt = require("prompt-sync")();

var questao = " Para os Impérios Coloniais, o problema das doenças que atingiam os escravos era algo com que deparavam os senhores. Em vista disso, uma série de obras dedicadas à administração de escravos foi publicada com vista a implementar uma moderna gestão da mão de obra escravista em convergência com o iluminismo. Nesse contexto, o saber médico adquiria um papel extremamente relevante. Este era encarado com um instrumento fundamental ao desenvolvimento colonial, dada a percepção do impacto que as doenças tropicais causavam na população branca e nos povos escravizados.";
var pergunta = "De acordo com o texto, a importância da medicina se justifica no âmbito dos objetivos:"
console.log(questao);
console.log(pergunta);

console.log("Alternativa A: econômicos das elites.")
console.log("Alternativa B: naturalistas dos viajantes.")
console.log("Alternativa C: abolicionistas dos letrados.")
console.log("Alternativa D: tradicionalistas dos nativos.")
console.log("Alternativa E: emancipadores das metrópoles.")

var requerimento = prompt("Qual alternativa você vai escolher?");

switch (requerimento) {
    case "A":;
    console.log("Parabéns, você acertou!");
    break;
    case "B":;
    console.log("Parabéns, você acertou!");
    break;
    case "C .":;
    console.log("Você errou, as alternativas corretas são A ou B");
    break;
    case "D":;
    console.log("Você errou, as alternativas corretas são A ou B");
    break;
    case "E":;
    console.log("Você errou, as alternativas corretas são A ou B");
    break;

}