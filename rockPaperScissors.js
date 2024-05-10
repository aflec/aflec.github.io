// JS do Rock Paper Scissors usado no HTML 

/*

// Selecionando o elemento HTML pelo ID
var container = document.getElementById('container');

// Atualizando o conteúdo do elemento HTML
container.innerHTML = "<p>O texto capturado é: " + entrada + "</p>";
*/


// implementar o resultado final. Quando o usuario escolher o numero de rodadas eu quero que apareca uma div com o resultado final (melhor de X) apos a ultima jogada
// implementar as fichas para melhorar a visualizacao do usuario sobre o numero de rodadas restantes


let quantidadeDeFichas;

function habilitarBotoes() {
    const select = document.querySelector("#escolha");
    const opcaoSelecionada = select.options[select.selectedIndex].value;
    quantidadeDeFichas = Number(opcaoSelecionada);
    contadorDeFichas();
    if (opcaoSelecionada === "0") { // Quando o valor selecionado for "0" ou "-"
        document.querySelector("#btnRock").disabled = true;
        document.getElementById("btnPaper").disabled = true;
        document.getElementById("btnScissors").disabled = true;
	document.querySelector("#btnPlayGame").disabled = true;
    } else {
        document.querySelector("#btnRock").disabled = false;
        document.getElementById("btnPaper").disabled = false;
        document.getElementById("btnScissors").disabled = false;
    }
}

habilitarBotoes();


function getComputerChoice() {
    const opcoesParaJogar = ['rock', 'paper', 'scissors'];
    let indiceAleatorio = Math.floor(Math.random() * opcoesParaJogar.length);
    return opcoesParaJogar[indiceAleatorio];
}

let userChoice;

function pickUserChoice(escolhaUsuario) {
    const target = document.querySelector("#target");
    target.textContent = escolhaUsuario;
    userChoice = escolhaUsuario;
    document.querySelector("#btnPlayGame").disabled = false;

    const computador = document.querySelector("#computador");
    computador.textContent = "?????";
    
}

let scoreUsuario = 0;
let scoreComputador = 0;

function playGame() {
   
    const computerChoice = getComputerChoice();
    const resultado = playRound(userChoice, computerChoice);

    const target = document.querySelector("#target");
    target.textContent = userChoice;
    const computador = document.querySelector("#computador");
    computador.textContent = computerChoice;
    const resultJogada = document.querySelector("#container");

    resultJogada.textContent = resultado;

    scoreUsuario += resultado.startsWith("You Win") ? 1 : 0;
    scoreComputador += resultado.startsWith("You Lose") ? 1 : 0;

    quantidadeDeFichas--;
    
    contadorDeFichas();

    if(quantidadeDeFichas === 0) {
	document.querySelector("#btnRock").disabled = true;
        document.getElementById("btnPaper").disabled = true;
        document.getElementById("btnScissors").disabled = true;
	document.querySelector("#btnPlayGame").disabled = true;
	
	const informar = document.querySelector("#moedas");
	informar.textContent = "Você esgotou suas fichas!";
	informar.style.color = "red";
	informar.style.fontSize = "20px";
	informar.style.fontWeight = "bold";


	const mostrarScore = document.querySelector("#scoreFinal");
	const rod = document.querySelector("#escolha");
	const opcaoSelecionada = rod.options[rod.selectedIndex].value;
	
	if (scoreUsuario > scoreComputador) {
	    mostrarScore.innerHTML = "Usuário: " + scoreUsuario + "<br>Computador: " + scoreComputador
		+ `<br><br>O <u>usuário</u> venceu a melhor de ${opcaoSelecionada} rodada(s)`;
	}
	else if (scoreUsuario < scoreComputador) {
	    mostrarScore.innerHTML = "Usuário: " + scoreUsuario + "<br>Computador: " + scoreComputador
		+ `<br><br>O <u>computador</u> venceu a melhor de ${opcaoSelecionada} rodada(s)`;
	} else {
	    mostrarScore.innerHTML =  mostrarScore.innerHTML = "Usuário: " + scoreUsuario + "<br>Computador: " + scoreComputador + "<br><br>EMPATE";
	}
	    
	const select = document.querySelector("#escolha");

	select.value = "0";

	scoreUsuario = 0;
	scoreComputador = 0;
	console.log({scoreUsuario, scoreComputador});
//	mostrarScore.innerHTML = "";	
	
	return;
    }
    
}

function limparScoreFinal() {
    const mostrarScore = document.querySelector("#scoreFinal");
    mostrarScore.textContent = "";
    const alterarTextoResultadoParcial = document.querySelector("#container");
    alterarTextoResultadoParcial.textContent = "Resultado da Jogada";    
}

/*
  deixei essa funçao aqui apenas caso precise pra algo que nao estou vendo no momento. Inclusive a div "fichas"foi comentada no html pra nao mais ser usada.
  function limparDiv() {
  const informarFichas = document.querySelector("#fichas");
  informarFichas.textContent = "";
  }
  
*/

 
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


function contadorDeFichas () {
    const numeroDeFichas = document.querySelector("#moedas");
    numeroDeFichas.textContent = "";
    for (let i = quantidadeDeFichas; i >0; i--) {

	const img = document.createElement("img");
	img.src = "https://cdn2.iconfinder.com/data/icons/flat-icons-19/128/Coin.png";
	img.style.width = "45px";
	img.style.height = "45px";
	img.style.paddingRight = "8px";
	numeroDeFichas.appendChild(img);
    }
}


