// JS part of Rock Paper Scissors
//https://chat.openai.com/share/9e1ea0c9-729f-4539-adf5-59c9c09c395f -> esse é um link com uma forma de fazer um input por parte do usuário

const opcoesParaJogar = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let indiceAleatorio = Math.floor(Math.random() * opcoesParaJogar.length);
    return opcoesParaJogar[indiceAleatorio];
}

function playRound(playerSelection, computerSelection) {
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
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
	return "Tie";
    }    
}

console.log(`Resultado da rodada: ${playRound(process.argv[2], getComputerChoice())}`);

function playGame(numeroDeVezesAJogar) {
    let scoreUsuario = 0;
    let socreComputador = 0;
    //    for(i = 1; i <= numeroDeVezesAJogar; i++) {
//	if (result === "You Win! Rock beats Scissors") {
	scoreUsuario = scoreUsuario + 1;
//	}
//    }
    return scoreUsuario;
}

console.log(playGame(5));
/*
function playGame(numeroDeVezesAJogar) {
    for(i = 1; i <= numeroDeVezesAJogar; i++) { 
	let scoreUsuario = 0;
	let scoreComputador = 0;
	if (playRound === 'kjdhkjdhs') {
	    
        }
   }
}

playGame(5);
*/
