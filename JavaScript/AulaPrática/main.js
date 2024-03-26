function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const alt = document.getElementById('altura').value;
    

    const result = document.getElementById('imc').value;
    const valor = peso / (alt * alt).toFixed(2);
    result.innerText = `Seu IMC é: ${valor}`;
}