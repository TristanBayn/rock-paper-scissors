game();


function computerChoice() {
    let number = Math.floor(Math.random() * 100);

    if (number <= 33) {
        return "Scissors";
    }
    else if (number <= 66) {
        return "Paper";
    }
    else {
        return "Rock";
    }
}


function playerChoice() {
    // Ask user for selection
    let selection = prompt("Please choose between Scissors/Paper/Rock");
    
    // Make the selection lowercase
    let lower = selection.toLowerCase();
    

    // Return the lowercase selection value with the first letter capitalised
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    
}



function playRound(playerSelection, computerSelection) {

    let playerWin = `You Win! You chose ${playerSelection} while the computer chose ${computerSelection}`;
    let computerWin = `You LOSE! You chose ${playerSelection} while the computer chose ${computerSelection}`;
    let tie = `It's a Tie! You both chose ${playerSelection}`


    if (playerSelection === computerSelection) {
        return tie;
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return playerWin;
        }
        else {
            return computerWin;
        }
    }
    
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return playerWin;
        }
        else {
            return computerWin;
        }

    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return playerWin;
        }
        else {
            return computerWin;
        }
    }
    else {
        return `Something went wrong :(`;
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


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = playerChoice();
        let computerSelection = computerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result.substring(0,5) === "You W") {
            playerScore++;
            console.log(result + " The total score is: Playerscore - " + playerScore + " Computer Score: " + computerScore);
        }
       else if (result.substring(0, 5) === "You L") {
        computerScore++;
        console.log(result + " The total score is: Playerscore - " + playerScore + " Computer Score: " + computerScore);
       }
       else {
        console.log(result + " The total score is: Playerscore - " + playerScore + " Computer Score: " + computerScore);
       }
        
    }


    console.log(checkWin(playerScore, computerScore));

    
    

 
}

