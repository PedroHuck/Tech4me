function calcularGasolina() {
    let distancia = document.getElementById("distancia").value;
    let consumo = document.getElementById("consumo").value; 
    let preco = document.getElementById("preco").value;

    let QntdGasolina = distancia/consumo; 
    let custoViagem = QntdGasolina * preco;

    let QntdLitros = document.getElementById("resultado_gasolina_litros");
    QntdLitros.innerHTML = QntdGasolina;

    let resultadoCusto = document.getElementById("resultado_custo");
    resultadoCusto.innerHTML = `R$ + ${custoViagem.toFixed(2)}`;
};


