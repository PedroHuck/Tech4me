const lista = ["Acordar", "Jogar", "Comer", "Fuder"];





const elTarefas = document.getElementById("lista");
const elTotal = document.getElementById("total");






function carregar() {

    for(const texto of lista) {   
        const item = document.createElement("li");
        item.textContent = texto;
        elTarefas.appendChild(item)
    }
    
    elTotal.innerText = `Total = ${lista.length}`;
}