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

const computerWinsRound = document.getElementById('computer');
const playerWinsRound = document.getElementById('player');
const draw = document.getElementById('draw');

const playerSelection = document.querySelector('.selection');

const computerWin = document.getElementById('computer-win');
const playerWin = document.getElementById('player-win');


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

    if (computerScore.dataset.score >= 3) {
        nextRound.dataset.active = 'false';
        draw.dataset.active = 'false';
        playerWinsRound.dataset.active = 'false';
        computerWinsRound.dataset.active = 'false';
        computerWin.dataset.active = 'true';
    } else if (playerScore.dataset.score >=3) {
        nextRound.dataset.active = 'false';
        draw.dataset.active = 'false';
        playerWinsRound.dataset.active = 'false';
        computerWinsRound.dataset.active = 'false';
        playerWin.dataset.active = 'true';
    }

}

const roundWinner = () => {
    if (playerChoice.dataset.choice === computerChoice.dataset.choice) {
        draw.dataset.active = 'true';
        playerWinsRound.dataset.active = 'false';
        computerWinsRound.dataset.active = 'false';
        return 'draw';
    } else if (playerChoice.dataset.choice == 'rock' && computerChoice.dataset.choice == 'scissors') {
        draw.dataset.active = 'false';
        playerWinsRound.dataset.active = 'true';
        computerWinsRound.dataset.active = 'false';
        return 'player';
    } else if (playerChoice.dataset.choice == 'paper' && computerChoice.dataset.choice == 'rock') {
        draw.dataset.active = 'false';
        playerWinsRound.dataset.active = 'true';
        computerWinsRound.dataset.active = 'false';
        return 'player';
        
    } else if (playerChoice.dataset.choice == 'scissors' && computerChoice.dataset.choice == 'paper') {
        draw.dataset.active = 'false';
        playerWinsRound.dataset.active = 'true';
        computerWinsRound.dataset.active = 'false';
        return 'player';
    } else {
        draw.dataset.active = 'false';
        playerWinsRound.dataset.active = 'false';
        computerWinsRound.dataset.active = 'true';
        return 'computer';
    }
}

const playerSelect = (e) => {
    playerValue = e.target.dataset.value
    playerChoice.dataset.choice = playerValue;
    playerRock.removeEventListener('click', playerSelect);
    playerPaper.removeEventListener('click', playerSelect);
    playerSciccors.removeEventListener('click', playerSelect);


    getRandomChoice(choiceArray);
    roundWinner();
    getScore();
    getChoices();
 
}



const game = () => {
    startGame.dataset.active = 'false';
    resetGame.dataset.active = 'true';
    nextRound.dataset.active = 'true';
    playerRock.addEventListener('click', playerSelect);
    playerPaper.addEventListener('click', playerSelect);
    playerSciccors.addEventListener('click', playerSelect);
    resetGame.addEventListener('click', reset);
    nextRound.addEventListener('click', round);
    computerScore.innerHTML = 0;
    playerScore.innerHTML = 0;
    computerScore.dataset.score = '0';
    playerScore.dataset.score = '0';


}

const reset = () => {
    resetGame.dataset.active = 'false';
    computerScore.innerHTML = 0;
    playerScore.innerHTML = 0;
    computerScore.dataset.score = '0';
    playerScore.dataset.score = '0';
    computerWinsRound.dataset.active ='false';
    playerWinsRound.dataset.active = 'false';
    draw.dataset.active = 'false';
    startGame.dataset.active = 'true';
    nextRound.dataset.active = 'false';
    playerRock.removeEventListener('click', playerSelect);
    playerPaper.removeEventListener('click', playerSelect);
    playerSciccors.removeEventListener('click', playerSelect);
    playerWin.dataset.active = 'false';
    computerWin.dataset.active = 'false';
    computerRock.dataset.active = 'false';
    computerPaper.dataset.active ='false';
    computerSciccors.dataset.active = 'false';
    playerRock.dataset.active = 'false';
    playerPaper.dataset.active ='false';
    playerSciccors.dataset.active = 'false';
}

const round = () => {
    if (nextRound.dataset.active === 'true') {
        playerRock.addEventListener('click', playerSelect);
        playerPaper.addEventListener('click', playerSelect);
        playerSciccors.addEventListener('click', playerSelect);
        computerWinsRound.dataset.active ='false';
        playerWinsRound.dataset.active = 'false';
        draw.dataset.active = 'false';
        computerRock.dataset.active = 'false';
        computerPaper.dataset.active ='false';
        computerSciccors.dataset.active = 'false';
        playerRock.dataset.active = 'false';
        playerPaper.dataset.active ='false';
        playerSciccors.dataset.active = 'false';
    }
}

const getChoices = () => {
    if (computerChoice.dataset.choice === 'rock') {
        computerRock.dataset.active = 'true';
    } else if (computerChoice.dataset.choice === 'paper') {
        computerPaper.dataset.active ='true';
    } else if (computerChoice.dataset.choice === 'scissors') {
        computerSciccors.dataset.active = 'true';
    } 

    if (playerChoice.dataset.choice === 'rock') {
        playerRock.dataset.active = 'true';
    } else if (playerChoice.dataset.choice === 'paper') {
        playerPaper.dataset.active ='true';
    } else if (playerChoice.dataset.choice === 'scissors') {
        playerSciccors.dataset.active = 'true';
    }
}

startGame.addEventListener('click', game);


