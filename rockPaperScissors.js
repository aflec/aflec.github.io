// JS do Rock Paper Scissors usado no HTML 

/*
// Selecionando o elemento HTML pelo ID
var container = document.getElementById('container');

// Atualizando o conteúdo do elemento HTML
container.innerHTML = "<p>O texto capturado é: " + entrada + "</p>";
*/

//desabilitar o botao jogar depois que os botoes de escolha forem habilitados e habilitar quando uma opcao do usuario for escolhida
//limpar a opcao do computador quando o usuario escolher outra opcao
//colocar as moedinhas como vidas para as rodadas do usuario

function habilitarBotoes() {
    const select = document.querySelector("#escolha");
    const opcaoSelecionada = select.options[select.selectedIndex].value;
    if (opcaoSelecionada === "0") { // Quando o valor selecionado for "0" ou "-"
        document.querySelector("#btnRock").disabled = true;
        document.getElementById("btnPaper").disabled = true;
        document.getElementById("btnScissors").disabled = true;
	document.querySelector("#btnPlayGame").disabled = true;
    } else {
        document.querySelector("#btnRock").disabled = false;
        document.getElementById("btnPaper").disabled = false;
        document.getElementById("btnScissors").disabled = false;
//	document.querySelector("#btnPlayGame").disabled = false;
    }
}

habilitarBotoes();

function getComputerChoice() {
    const opcoesParaJogar = ['rock', 'paper', 'scissors'];
    let indiceAleatorio = Math.floor(Math.random() * opcoesParaJogar.length);
    return opcoesParaJogar[indiceAleatorio];
}

let fichas = 0;

function mostrarOpcaoSelecionada() {

    const select = document.querySelector("#escolha");
    const opcaoSelecionada = select.options[select.selectedIndex].value;
    if(opcaoSelecionada === "-") {
	document.querySelector("#btnRock").disabled = true;
	document.getElementById("btnPaper").disabled = true;
	document.getElementById("btnScissors").disabled = true;
    }
    console.log(opcaoSelecionada);
    fichas = opcaoSelecionada;
}
mostrarOpcaoSelecionada();

let userChoice;

function pickUserChoice(escolhaUsuario) {
    const target = document.querySelector("#target");
    target.textContent = escolhaUsuario;
    userChoice = escolhaUsuario;
    document.querySelector("#btnPlayGame").disabled = false;

    const computador = document.querySelector("#computador");
    computador.textContent = "?????";
}


function playGame() {
    const computerChoice = getComputerChoice();
    const resultado = playRound(userChoice, computerChoice);

    const target = document.querySelector("#target");
    target.textContent = userChoice;
    const computador = document.querySelector("#computador");
    computador.textContent = computerChoice;
    const resultJogada = document.querySelector("#container");
    resultJogada.textContent = resultado;
}
 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
	return "Tie";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
	return "You Lose! Paper beats Rock";
    }  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
	return "You Win! Rock beats Scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
	return "You Win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
	return "Tie"; 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
	return "You Lose! Scissors beats Paper"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
	return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
	return "You Win! Scissors beats Paper"; 
    } else {
	return "Tie";
    }
}

  
