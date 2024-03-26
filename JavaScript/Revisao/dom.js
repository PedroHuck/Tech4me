// let lista = document.getElementById("lista")
// let item = document.createElement("li");
// item.textContent = "1";
// lista.appendChild(item);

let novosItens = ["1", "2", "3", "4"];
let  cores = ["red", "green", "blue", "orange"];

novosItens.forEach(function(novoItem, index) {
    let item = document.createElement("li");
    item.textContent = novoItem;
    item.style.color = cores[index]
    lista.appendChild(item);
});
    



