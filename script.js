// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Obtém referências aos elementos
    const botao = document.getElementById('mensagemBtn');
    const divMensagem = document.getElementById('mensagem');
    
    // Variável para controlar se a mensagem está visível
    let mensagemVisivel = false;
    
    // Adiciona o evento de clique ao botão
    botao.addEventListener('click', function() {
        if (!mensagemVisivel) {
            // Mostra a mensagem
            divMensagem.textContent = 'Boas-vindas!';
            divMensagem.className = 'mensagem-visivel';
            botao.textContent = 'Ocultar mensagem';
            mensagemVisivel = true;
        } else {
            // Oculta a mensagem
            divMensagem.className = 'mensagem-oculta';
            botao.textContent = 'Clique para ver uma mensagem!';
            mensagemVisivel = false;
        }
    });
    
    // Adiciona um efeito de hover adicional ao botão
    botao.addEventListener('mouseenter', function() {
        if (!mensagemVisivel) {
            botao.style.transform = 'scale(1.05)';
        }
    });
    
    botao.addEventListener('mouseleave', function() {
        if (!mensagemVisivel) {
            botao.style.transform = 'scale(1)';
        }
    });
});

