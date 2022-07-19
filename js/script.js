console.log("Hello World!");

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    // Generate a random number between 1 and 2
    let generatedNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if (generatedNumber === 0) {
        computerChoice = "rock";
    }
    else if (generatedNumber === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}


function getPlayerChoice() {
    let choice = prompt("Please choose between Rock, Paper or Scissors").toLowerCase();
    let playerSelection;

    if (choice === 'rock') {
        playerSelection = 'rock';
    }
    else if (choice === 'paper') {
        playerSelection = 'paper';
    }
    else if(choice === 'scissors') {
        playerSelection = 'scissors';
    }
    else {
        alert("Incorrect input, expecting 'Rock', 'Paper' or 'Scissors'");
    }

    return playerSelection;
}


function singleRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `It's a draw!`;
    }

   else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    
    }
    else {
        return 'Something went wrong';
    }
}

function checkWin(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `Congratulations! You won the game!`;
    }
    else if (computerScore > playerScore) {
        return `Unlucky! You lost to the computer`;
    }
    else {
        return `You tied with the Computer!`;
    }
}


function resetScores() {
    computerScore = 0;
    playerScore = 0;
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(singleRound(getPlayerChoice(), getComputerChoice()));
        console.log(`Player Score : ${playerScore} - Computer Score : ${computerScore}`);
    }

   
    console.log(checkWin(playerScore, computerScore));
    resetScores();
    
}