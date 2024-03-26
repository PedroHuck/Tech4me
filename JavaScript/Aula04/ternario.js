const hora = 16;

var agencia_aberta = "";

if (hora < 16) agencia_aberta = "Aberta"; else agencia_aberta = "Fechada";

agencia_aberta = hora < 16 ? "Aberta" : "Fechado p pobre";

console.log("A agencia está", agencia_aberta);
