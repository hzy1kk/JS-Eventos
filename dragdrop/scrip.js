const quadrado = document.getElementById('quadrado');
const containers = document.querySelectorAll('.container');

// Quando o arrasto começa
quadrado.addEventListener('dragstart', () => {
    quadrado.classList.add('dragging');
});

// Quando o arrasto termina
quadrado.addEventListener('dragend', () => {
    quadrado.classList.remove('dragging');
});

containers.forEach(container => {
    // ESSENCIAL: O navegador bloqueia o drop por padrão. 
    // O preventDefault() libera o drop.
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    container.addEventListener('drop', () => {
        // Move o quadrado para dentro do container onde foi solto
        container.appendChild(quadrado);
    });
});