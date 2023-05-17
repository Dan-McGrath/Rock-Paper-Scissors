const computerScore = document.getElementById('computer-score');
const playerScore = document.getElementById('player-score');

const playerRock = document.getElementById("player-rock"); 
const playerPaper = document.getElementById("player-paper");
const playerSciccors = document.getElementById("player-scissors");

const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerSciccors = document.getElementById("computer-scissors");

const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');

const startGame = document.getElementById("start-game");
const resetGame = document.getElementById("reset-game");
const nextRound = document.getElementById("next-round");

const computerWins = document.getElementById('computer');
const playerWins = document.getElementById('player');
const draw = document.getElementById('draw');

const playerSelection = document.querySelector('.selection')


//Functions

const choiceArray = ['rock', 'paper', 'scissors'];
const getRandomChoice = (arr) => {
    let randIdx = Math.floor(Math.random()* arr.length);
    computerChoice.dataset.choice = arr[randIdx];

}

const getScore = () => {
    let playerInt = parseInt(playerScore.dataset.score)
    let computerInt = parseInt(computerScore.dataset.score)
    if (roundWinner() === 'draw') {
        return;
    } else if (roundWinner() === 'player') {
        
        playerInt += 1;
        playerScore.dataset.score = playerInt;
        playerScore.innerHTML = playerInt;
    } else {
        computerInt += 1;
        computerScore.dataset.score = computerInt;
        computerScore.innerHTML = computerInt;
    }
}

const roundWinner = () => {
    if (playerChoice.dataset.choice === computerChoice.dataset.choice) {
        draw.dataset.active = 'true';
        playerWins.dataset.active = 'false';
        computerWins.dataset.active = 'false';
        return 'draw';
    } else if (playerChoice.dataset.choice == 'rock' && computerChoice.dataset.choice == 'scissors') {
        draw.dataset.active = 'false';
        playerWins.dataset.active = 'true';
        computerWins.dataset.active = 'false';
        return 'player';
    } else if (playerChoice.dataset.choice == 'paper' && computerChoice.dataset.choice == 'rock') {
        draw.dataset.active = 'false';
        playerWins.dataset.active = 'true';
        computerWins.dataset.active = 'false';
        return 'player';
        
    } else if (playerChoice.dataset.choice == 'scissors' && computerChoice.dataset.choice == 'paper') {
        draw.dataset.active = 'false';
        playerWins.dataset.active = 'true';
        computerWins.dataset.active = 'false';
        return 'player';
    } else {
        draw.dataset.active = 'false';
        playerWins.dataset.active = 'false';
        computerWins.dataset.active = 'true';
        return 'computer';
    }
}

const playerSelect = (e) => {
    playerChoice.dataset.choice = e.target.dataset.value;


    getRandomChoice(choiceArray);
    roundWinner();
    getScore();

}



playerRock.addEventListener('click', playerSelect);
playerPaper.addEventListener('click', playerSelect);
playerSciccors.addEventListener('click', playerSelect);




