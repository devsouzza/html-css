// Código JavaScript para interações na página

// Função para exibir um alerta quando o usuário clicar no botão
function showAlert() {
    alert('Ação realizada!');
}

// Adicionando evento de clique no botão
document.querySelector('#cta button').addEventListener('click', showAlert);

// Função para animação do botão quando o mouse passa por cima
function animateButton() {
    const button = document.querySelector('#cta button');
    button.classList.add('animate');
}

// Adicionando evento de passagem do mouse no botão
document.querySelector('#cta button').addEventListener('mouseover', animateButton);

// Função para remover animação do botão quando o mouse sai
function removeAnimation() {
    const button = document.querySelector('#cta button');
    button.classList.remove('animate');
}

// Adicionando evento de saída do mouse no botão
document.querySelector('#cta button').addEventListener('mouseout', removeAnimation);