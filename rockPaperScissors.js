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

function playGame() {
   
    const computerChoice = getComputerChoice();
    const resultado = playRound(userChoice, computerChoice);

    const target = document.querySelector("#target");
    target.textContent = userChoice;
    const computador = document.querySelector("#computador");
    computador.textContent = computerChoice;
    const resultJogada = document.querySelector("#container");

    resultJogada.textContent = resultado;

    quantidadeDeFichas--;
    contadorDeFichas();

    if(quantidadeDeFichas === 0) {
	document.querySelector("#btnRock").disabled = true;
        document.getElementById("btnPaper").disabled = true;
        document.getElementById("btnScissors").disabled = true;
	document.querySelector("#btnPlayGame").disabled = true;
	const informar = document.querySelector("#fichas");
	informar.textContent = "Você esgotou suas fichas!";

	const select = document.querySelector("#escolha");
	//select.options[select.selectedIndex].value;
	select.value = "0";
	
	return;
    }
}

function limparDiv() {
    const informarFichas = document.querySelector("#fichas");
    informarFichas.textContent = "";
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

function contadorDeFichas () {
    const numeroDeFichas = document.querySelector("#moedas");
    numeroDeFichas.textContent = "";
    for (let i = quantidadeDeFichas; i >0; i--) {

	const img = document.createElement("img");
	img.src = "https://cdn2.iconfinder.com/data/icons/flat-icons-19/128/Coin.png";
	numeroDeFichas.appendChild(img);
    }
}

