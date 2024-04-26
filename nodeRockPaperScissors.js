// JS part of Rock Paper Scissors
//https://chat.openai.com/share/9e1ea0c9-729f-4539-adf5-59c9c09c395f -> esse é um link com uma forma de fazer um input por parte do usuário

/*
  let entrada = prompt('este eh um teste para o html');
//console.log(entrada);

// Capturando o texto usando prompt
//var texto = prompt("Digite algo:");

// Selecionando o elemento HTML pelo ID
var container = document.getElementById('container');

// Atualizando o conteúdo do elemento HTML
container.innerHTML = "<p>O texto capturado é: " + entrada + "</p>";
*/

const readline = require('readline');
const opcoesParaJogar = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let indiceAleatorio = Math.floor(Math.random() * opcoesParaJogar.length);
    return opcoesParaJogar[indiceAleatorio];
}

function playRound(playerSelection, computerSelection) {
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
	//	throw new Error("Valor inválido! Digite sua opcão novamente");
	console.error("Valor inválido! Digite sua opcão novamente");
	return;
    }
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
	return "You Lose! Scissors beats Paper"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
	return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
	return "You Win! Scissors beats Paper"; 
    } else {
	return "Tie";
    }
}
//console.log(`Resultado da rodada: ${playRound(process.argv[2], getComputerChoice())}`);
//console.log("aqui é o final da funcao playRound");

function withUserChoice(rl, banana) {
    rl.question('Digite algo: ', banana);
}

function evaluateRound(userChoice, resultadosFinais) {
    let result = playRound(userChoice, getComputerChoice());
    if (result.startsWith("You Win")) { //a funcao starts.With ja retorna um valor booleano
	resultadosFinais.scoreUsuario++;
    } else if (result.startsWith("You Lose")) {
	resultadosFinais.scoreComputador++;
    }
}

function playGame(numeroDeVezesAJogar, rl, resultadosFinais, rodada = 0) {
  
    
    withUserChoice(rl, userChoice => {
	evaluateRound(userChoice, resultadosFinais);
	if (rodada <= numeroDeVezesAJogar) {
	    rodada++;
	    playGame(numeroDeVezesAJogar, rl, resultadosFinais, rodada);
	}
    }
		  );
    if (rodada == numeroDeVezesAJogar) {
	rl.close();
	if (resultadosFinais.scoreUsuario > resultadosFinais.scoreComputador) {
	    console.log("O USUARIO venceu!");
	} else if (resultadosFinais.scoreUsuario < resultadosFinais.scoreComputador) {
	    console.log("O COMPUTADOR venceu!");
	} else {
	    console.log("EMPATE");
	}
	const scoreEmpate = numeroDeVezesAJogar - resultadosFinais.scoreUsuario - resultadosFinais.scoreComputador;
	console.log({...resultadosFinais, scoreEmpate});
    }
}


	//só quer executar a linha de baixo se resultadosFinais NAO tiver preenchido
const resultadosFinais = {scoreUsuario: 0,
			    scoreComputador: 0,
		       };
  
  const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
    });

playGame(1, rl, resultadosFinais);
