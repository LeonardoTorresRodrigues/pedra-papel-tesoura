let jogadorEscolha = 0;
let computadorEscolha = 0;

function jogar(escolha) {
    jogadorEscolha = escolha;

    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    console.log(computadorEscolha)
}