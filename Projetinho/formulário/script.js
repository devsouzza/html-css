// Código JavaScript para interações na página

let contador = 0;

const botao = document.getElementById('botao');
const contadorElemento = document.getElementById('contador');

botao.addEventListener('click', function() {
    contador++;
    contadorElemento.textContent = contador + (contador === 1 ? ' clique' : ' cliques');
});

