function mudarCorDeFundo() {
    const cores = ['#111', '#222', '#333', '#444', '#555'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

function mostrarMensagemAlbum(album) {
    alert(`Você clicou no álbum: ${album}`);
}

document.addEventListener('DOMContentLoaded', function() {
    const botaoMudarCor = document.createElement('button');
    botaoMudarCor.textContent = 'Mudar Cor de Fundo';
    botaoMudarCor.style.margin = '20px';
    document.body.appendChild(botaoMudarCor);

    botaoMudarCor.addEventListener('click', mudarCorDeFundo);

    const albuns = document.querySelectorAll('#albuns ul li');
    albuns.forEach(function(album) {
        album.addEventListener('click', function() {
            mostrarMensagemAlbum(album.textContent);
        });
    });
});