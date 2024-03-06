let listaDeNumerosSorteados = [];
let limite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let qntd = listaDeNumerosSorteados.length;
        qntd == limite ? listaDeNumerosSorteados = [] : null;
        let textAcerto = `Você acertou o número secreto com ${tentativas} ${palavratentativa}!`;
        exibirTextNaTela('h1', 'Acertou!');
        exibirTextNaTela('p', textAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        chute > numeroSecreto ? exibirTextNaTela('h1', 'O número secreto é menor!') :
            exibirTextNaTela('h1', 'O número secreto é maior!');
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * limite + 1);
    if (listaDeNumerosSorteados.includes(numEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        console.log(listaDeNumerosSorteados);
        listaDeNumerosSorteados.push(numEscolhido);
        return numEscolhido;
    }
}

function limparCampo() {
    return document.querySelector('input').value = '';
}

function exibirMensagemInicial() {
    exibirTextNaTela('h1', 'Jogo do Número Secreto');
    let text = `Escolha um número entre 1 e ${limite}`
    exibirTextNaTela('p', text);

    responsiveVoice.speak(text, 'Brazilian Portuguese Female', { rate: 1.2 })
}

function restartGame() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
