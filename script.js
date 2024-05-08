// function somar(num1,num2){
//     return num1 + num2
// }

// function exibirNaTela(){
//     var resultado = somar()
//     console.log(resultado)
// }

// const pessoas = ["Caio", "Fulano", "Ciclano", 15, true]
// console.log(pessoas[2])

function escolhaComp(){
    const jokenpo = ["Pedra", "Papel", "Tesoura"];
    var numeroAleatorio = Math.floor(Math.random() * 3);
    return jokenpo[numeroAleatorio];
}

function escolhaJogador(botaoEscolhido){

    var resultado
    var pcchoice = escolhaComp() 
    console.log(pcchoice)
    
    if(pcchoice === botaoEscolhido){
        resultado = "Empate !"
    }
    else if(pcchoice === 'Pedra' && botaoEscolhido === 'Tesoura'){
        resultado = "Você perdeu!"
    }
    else if(pcchoice === 'Tesoura' && botaoEscolhido === 'Papel'){
        resultado = "Você perdeu!"
    }
    else if(pcchoice === 'Papel' && botaoEscolhido === 'Pedra'){
        resultado = "Você perdeu!"
    }
    else{
        resultado = "Você ganhou!"
    }
    document.getElementById('resultado').innerText = resultado
}

console.log(escolhaComp())