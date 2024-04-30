// JS do Rock Paper Scissors usado no HTML 

/*
// Selecionando o elemento HTML pelo ID
var container = document.getElementById('container');

// Atualizando o conteúdo do elemento HTML
container.innerHTML = "<p>O texto capturado é: " + entrada + "</p>";
*/

function getComputerChoice() {
    const opcoesParaJogar = ['rock', 'paper', 'scissors'];
    let indiceAleatorio = Math.floor(Math.random() * opcoesParaJogar.length);
    return opcoesParaJogar[indiceAleatorio];
}

function pickUserChoice(userChoice) {

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
