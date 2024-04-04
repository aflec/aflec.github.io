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
	return "You Lose! Scissors beats Paper"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
	return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
	return "You Win! Scissors beats Paper"; 
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
	return "Tie";
    } else {
	return "Valor inválido! Digite sua opcão novamente"
    }
}
//console.log(`Resultado da rodada: ${playRound(process.argv[2], getComputerChoice())}`);
//console.log("aqui é o final da funcao playRound");

function playGame(numeroDeVezesAJogar) {
    let rodada = 0;
    let contagemDoUsuario = 0;
    let contagemDoComputador = 0;
    let contagemDeEmpate = 0;
    //OBS: essas variaveis de contagem tem que ficar de fora do FOR pq senao tada vez que
    //voltar o loop elas vao receber o valor 0 novamente.
    let resultadosFinais = {scoreUsuario: 0,
			    scoreComputador: 0,
			    scoreEmpate: 0
			   };
    //resultadoFinais tem que ficar de fora do FOR pra nao zerar os valores e
    //para ficar no escopo certo para eu usar o "return resultadosFinais" fora do for
    
    for(i = 1; i <= numeroDeVezesAJogar; i++) {
//	let resultadosFinais = {scoreUsuario: 0,
//				scoreComputador: 0,
//				scoreEmpate: 0
//			       };
	let result = playRound(process.argv[2], getComputerChoice());
//	console.log("este é o log do result: " + result);
//	let resultadoComecaComYouWin = result.startsWith("You Win");
//	console.log("este é o log do resultadoComecaComYouWin: " + resultadoComecaComYouWin);
//	let resultadoComecaComYouLose = result.startsWith("You Lose");
//	console.log("este é o log do resultadoComecaComYouLose: " + resultadoComecaComYouLose);
//	let resultadoIgualTie = result.startsWith("Tie");
//	console.log("este é o log do resultadoIgualTie: " + resultadoIgualTie);

	if (result.startsWith("You Win")) { //a funcao starts.With ja retorna um valor booleano
	    resultadosFinais.scoreUsuario++;
	} else if (result.startsWith("You Lose")) {
	    resultadosFinais.scoreComputador++;
	} else {
	    resultadosFinais.scoreEmpate++;
	}
//	console.log(resultadosFinais);
	rodada = rodada + 1;
    }
    return resultadosFinais;

    if (resultadosFinais.scoreUsuario > resultadosFinais.scoreComputador) {
	console.log("O USUARIO venceu!");
    } else if (resultadosFinais.scoreUsuario < resultadosFinais.scoreComputador) {
	console.log("O COMPUTADOR venceu!");
    } else {
	console.log("EMPATE");
    }
}

console.log(playGame(3));


