alert('Boas vindas ao jogo do número secreto');
let intervalo = 100
let numeroSecreto = parseInt(Math.random() * intervalo + 1);
let chute;
let tentativas = 1;

console.log(numeroSecreto)

while(chute != numeroSecreto){

    chute = prompt('Escolha um número entre 1 e '+ intervalo);

    if (chute == numeroSecreto) {
        break
    } else {
        
        if(numeroSecreto > chute){
            alert('O número secreto é maior que ' + chute);
        }else{
            alert('O número secreto é menor que ' + chute);
        }
        tentativas++;
    }
    
}
let palavrasTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'


alert(`Você descobriu o número secreto!! Número ${numeroSecreto}, com ${tentativas} ${palavrasTentativa}!`);

