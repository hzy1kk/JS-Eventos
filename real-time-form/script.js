const input = document.getElementById('campo-texto');
const result = document.getElementById('result');

input.addEventListener('input', () => {
    const valor = input.value;
    result.innerText = valor;

    if (valor.length > 10) {
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
});