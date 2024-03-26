import {alunos, servidor} from "./constantes.js"

const h2 = document.createElement("h2");
h2.innerText = servidor;
document.body.appendChild(h2)

const sabado = false;
const domingo = true;


const findSmn = "sabado" || "domingo";
console.log(findSmn)