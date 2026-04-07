const box = document.getElementById('quadrado');

// 1. Mouse sobre (País e Cor)
box.addEventListener('mouseenter', () => {
    box.innerText = "Brasil";
    box.style.backgroundColor = "#009739";
});

// 2. Mouse fora (Outra Cor e País)
box.addEventListener('mouseleave', () => {
    box.innerText = "Canadá";
    box.style.backgroundColor = "#FF0000";
});

// 3. Clique único (Terceira mudança)
box.addEventListener('mouseup', () => {
    box.innerText = "Itália";
    box.style.backgroundColor = "#008C45";
});

// 4. Clique duplo (Quarta mudança)
box.addEventListener('mousedown', () => {
    box.innerText = "Alemanha";
    box.style.backgroundColor = "#FFCE00";
    box.style.color = "black";
});