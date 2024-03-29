// JS part of Rock Paper Scissors

const opcoesParaJogar = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    // buscar como usar uma selecao aleatoria (tipo random)
    //retornar 'Rock', 'Paper', 'Scissors';
    let indiceAleatorio = Math.floor(Math.random() * opcoesParaJogar.length);
    return opcoesParaJogar[indiceAleatorio];
}

function playSingleRound(playerSelection, computerSelection) {
    console.log(`A opcao do usuario jogador foi: ${playerSelection}`);
    console.log(`A opcao do computador foi: ${computerSelection}`);
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
	return "You lose! Scissors beats Paper"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
	return "You lose! Rock beats Scissors"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
	return "You Win! Scissors beats Paper"; 
    } else {
	return "testando";
    }    
}

console.log(`Resultado da rodada: ${playSingleRound(process.argv[2], getComputerChoice())}`);
