const quadrado = document.getElementById('quadrado');
const boxes = document.querySelectorAll('.container');

quadrado.addEventListener('dragstart', (e) => {
    e.target.style.opacity = '0.5';
});

quadrado.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';
    boxes.forEach(box => box.style.background = "transparent");
});

boxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        box.style.background = "#f0f0f0";
    });

    box.addEventListener('dragleave', () => {
        box.style.background = "transparent";
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        box.appendChild(quadrado);
    });
});