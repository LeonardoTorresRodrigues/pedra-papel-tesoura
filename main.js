let jogadorEscolha = 0;
let computadorEscolha = 0;

function jogar(escolha) {
    jogadorEscolha = escolha;

    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    console.log(computadorEscolha);

    if(jogadorEscolha == computadorEscolha) {
        alert("Empate! Jogue novamente.");
    }   else if(jogadorEscolha == 1 && computadorEscolha == 2) {
            alert("Você perdeu! Computador escolheu Papel.");
    }       else if(jogadorEscolha == 1 && computadorEscolha == 3) {
                alert("Você ganhou! Computador escolheu Tesoura");
    }           else if(jogadorEscolha == 2 && computadorEscolha == 1) {
                    alert("Você ganhou! Computador escolheu Pedra");
    }               else if(jogadorEscolha == 2 && computadorEscolha == 3) {
                        alert("Você perdeu! Computador escolheu Tesoura.");
    }                   else if(jogadorEscolha == 3 && computadorEscolha == 1) {
                            alert("Você perdeu! Computador escolheu Pedra");
    }                       else if(jogadorEscolha == 3 && computadorEscolha == 2) {
                                alert("Você ganhou! Computador escolheu papel");
    }
}

