let jogadorEscolha = 0;
let pontosjogador = 0;
let computadorEscolha = 0;
let pontosComputador = 0;
let vencedor = -1;

function pontuacao() {
    if(vencedor == 0) {
        document.getElementById('mensagens').innerHTML = 'Empate!';
    }
    else if(vencedor == 1) {
        document.getElementById('mensagens').innerHTML = 'Perdeu!';
        pontosComputador++;
    }
    else if(vencedor == 2) {
        document.getElementById('mensagens').innerHTML = 'Ganhou!';
        pontosjogador++;
    }

    document.getElementById('jogador-pontos').innerHTML = pontosjogador;
    document.getElementById('computador-pontos').innerHTML = pontosComputador;

    if(pontosjogador == 10) {
        document.getElementById('mensagens').innerHTML = 'Parabéns! Você é o grande vencedor.';
        pontosComputador = 0;
        pontosjogador = 0;
    }
    else if(pontosComputador == 10) {
        document.getElementById('mensagens').innerHTML = 'Ih! O computador foi melhor que você.';
        pontosComputador = 0;
        pontosjogador = 0;
    }
}

function selecaoDeJogadas() {
    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');
    document.getElementById("jogador-escolha-3").classList.remove('selecionado');
    document.getElementById("computador-escolha-1").classList.remove('selecionado');
    document.getElementById("computador-escolha-2").classList.remove('selecionado');
    document.getElementById("computador-escolha-3").classList.remove('selecionado');

    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');
}

function jogar(escolha) {
    jogadorEscolha = escolha;

    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    console.log(computadorEscolha);

    if(jogadorEscolha == computadorEscolha) {
        vencedor = 0;
    }   
    else if(jogadorEscolha == 1 && computadorEscolha == 2) {
        vencedor = 1;
    }       
    else if(jogadorEscolha == 1 && computadorEscolha == 3) {
        vencedor = 2;
    }           
    else if(jogadorEscolha == 2 && computadorEscolha == 1) {
        vencedor = 2;
    }               
    else if(jogadorEscolha == 2 && computadorEscolha == 3) {
        vencedor = 1;
    }                   
    else if(jogadorEscolha == 3 && computadorEscolha == 1) {
        vencedor = 1;
    }                       
    else if(jogadorEscolha == 3 && computadorEscolha == 2) {
        vencedor = 2;
    }
    
    selecaoDeJogadas();
    pontuacao();
}

