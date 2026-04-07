const result = document.getElementById('result');
const btnSoma = document.getElementById('btn-soma');
const btnSubtracao = document.getElementById('btn-subtracao');

let count = 0;

btnSoma.addEventListener('click', () => {
    count++;
    result.innerText = count;
});

btnSubtracao.addEventListener('click', () => {
    count--;
    result.innerText = count;
});