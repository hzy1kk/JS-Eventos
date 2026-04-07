const quadrado = document.getElementById('quadrado');
const boxes = document.querySelectorAll('.container');

quadrado.addEventListener('dragstart', (e) => {
    e.target.style.opacity = '0.5';
});

quadrado.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';
});

boxes.forEach(box => {
    // ESSA LINHA É O SEGREDO: Sem o preventDefault, o drop não funciona
    box.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        box.appendChild(quadrado);
    });
});