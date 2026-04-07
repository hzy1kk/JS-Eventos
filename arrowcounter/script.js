const result = document.getElementById('result');
let count = 0;

window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        count++;
        result.innerText = count;
    } else if (event.key === "ArrowDown") {
        count--;
        result.innerText = count;
    }
});