const carros = document.getElementsByClassName("carro");

console.log(carros.length);

const lista = document.getElementById("carro");

function addCarro() {
    const li = document.createElement("li");
    li.className = "carros"
    lista.appendChild(li);
    li.innerText = "Chevrolet"
 
}

const url = "http://localhost:8080/carros/";
function obterCarros() {
    
    fetch(url).then(resposta).then(processar);

        function resposta(response) {
        return response.json();
    }
        function processar(dados) {
            for (let i = 0; i < dados.length; i++) {
                const li = document.createElement("li");
                lista.appendChild(li);
        
                const carro = dados[i];

                li.innerText = "Dono = " + carro.aluno + " | Modelo = " + carro.modelo;
                
            }
        }
}

 function novoCarro() {
     const config = {
         method: "POST", 
       Headers: {
         "Content-Type": "application/json"
      }
     }

     fetch(url, config)
     }
