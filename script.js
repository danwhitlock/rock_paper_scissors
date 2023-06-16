/* Generate Computer Choice - Randomly return Rock, Paper or Scissors */

function getComputerChoice () {
 let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else if (randomNumber == 2) {
        return "scissors";
    };
} 

/* Get player selection from buttons */

const rockButton = document.getElementById('rock_btn');
const paperButton = document.getElementById('paper_btn');
const scissorsButton = document.getElementById('scissors_btn');
const resetButton = document.getElementById('reset_btn');

let playerSelection;

rockButton.addEventListener('click', function() {
    playerSelection = 'rock';
    playRound();
});

paperButton.addEventListener('click', function() {
    playerSelection = 'paper';
    playRound();
});

scissorsButton.addEventListener('click', function() {
    playerSelection = 'scissors';
    playRound();
});

/* create variables to keep score */

let playerScore = 0;
let computerScore = 0;

/* Function to play the game */

    const playerChoseDiv = document.querySelector('.player_chose');
    const computerChoseDiv = document.querySelector('.computer_chose');
    const outcomeDiv = document.querySelector('.outcome');
    const playerScoreDiv = document.querySelector('.player_score')
    const computerScoreDiv = document.querySelector('.computer_score');
    const ultimateWinnerDiv = document.querySelector('.ultimate_winner');
    

function playRound () {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        playerChoseDiv.textContent = `You chose ${playerSelection}`;
        computerChoseDiv.textContent = `The computer chose ${computerSelection}`;
        outcomeDiv.textContent = "You both picked the same option.  Nobody scored a point :(";
                
    } else if  (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerChoseDiv.textContent = `You chose ${playerSelection}`;
            computerChoseDiv.textContent = `The computer chose ${computerSelection}`;
            outcomeDiv.textContent = 'You score a point!';
            playerScore++
            playerScoreDiv.textContent = `Player score is ${playerScore}`;
        } else if (computerSelection === 'paper') {
            playerChoseDiv.textContent = `You chose ${playerSelection}`;
            computerChoseDiv.textContent = `The computer chose ${computerSelection}`;
            outcomeDiv.textContent = 'The computer scores a point!';
            computerScore++
            computerScoreDiv.textContent = `Computer score is ${computerScore}`;
        }

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerChoseDiv.textContent = `You chose ${playerSelection}`;
            computerChoseDiv.textContent = `The computer chose ${computerSelection}`;
            outcomeDiv.textContent = 'You score a point!';
            playerScore++
            playerScoreDiv.textContent = `Player score is ${playerScore}`;
        } else if (computerSelection === 'scissors') {
            playerChoseDiv.textContent = `You chose ${playerSelection}`;
            computerChoseDiv.textContent = `The computer chose ${computerSelection}`;
            outcomeDiv.textContent = 'The computer scores a point!';
            computerScore++
            computerScoreDiv.textContent = `Computer score is ${computerScore}`;
        } 

    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerChoseDiv.textContent = `You chose ${playerSelection}`;
            computerChoseDiv.textContent = `The computer chose ${computerSelection}`;
            outcomeDiv.textContent = 'You score a point!';
            playerScore++
            playerScoreDiv.textContent = `Player score is ${playerScore}`;
        } else if (computerSelection === 'rock') {
            playerChoseDiv.textContent = `You chose ${playerSelection}`;
            computerChoseDiv.textContent = `The computer chose ${computerSelection}`;
            outcomeDiv.textContent = 'The computer scores a point!';
            computerScore++
            computerScoreDiv.textContent = `Computer score is ${computerScore}`;
        } 
    }

        if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
                ultimateWinnerDiv.textContent = 'Player scored five first and wins the game!';
                gameFinished();
            } else {
                ultimateWinnerDiv.textContent = 'The computer scored five first and wins the game!';
                gameFinished();

            }
        }
}

/* disable the buttons once the game is over */

function gameFinished() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    showResetButton();
}

function showResetButton() {
    resetButton.style.display = 'block'
};

/* Reset the game */

resetButton.addEventListener('click', resetGame);

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    playerChoseDiv.textContent = "";
    computerChoseDiv.textContent = "";
    outcomeDiv.textContent = "";
    playerScoreDiv.textContent = "";
    computerScoreDiv.textContent = "";
    ultimateWinnerDiv.textContent = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    resetButton.style.display = 'none';    
}




/* Function to play a five-round game and log the results 

function game () {
    playerSelection = prompt("Round 1: Please choose rock, paper or scissors");
    playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(`Round 1: Player chose ${playerSelection}, The Computer chose ${computerSelection}.`);
    playRound (playerSelection, computerSelection);
    
    playerSelection = prompt("Round 2: Please choose rock, paper or scissors");
    playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(`Round 2:  Player chose ${playerSelection}, The Computer chose ${computerSelection}.`);
    playRound (playerSelection, computerSelection);
    
    playerSelection = prompt("Round 3: Please choose rock, paper or scissors");
    playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(`Round 3:  Player chose ${playerSelection}, The Computer chose ${computerSelection}.`);
    playRound (playerSelection, computerSelection);
    
    playerSelection = prompt("Round 4: Please choose rock, paper or scissors");
    playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(`Round 4:  Player chose ${playerSelection}, The Computer chose ${computerSelection}.`);
    playRound (playerSelection, computerSelection);
    
    playerSelection = prompt("Final Round: Please choose rock, paper or scissors");
    playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(`Final Round:  Player chose ${playerSelection}, The Computer chose ${computerSelection}.`);
    playRound (playerSelection, computerSelection);

    console.log(`Player scored ${playerScore}, The Computer scored ${computerScore}`)
    if (computerScore > playerScore) {
        console.log('The Computer Wins the game!');
    } else if (computerScore < playerScore) {
        console.log('Player wins the game!');
    } else {
        console.log('The game was a draw!');
    }
}


 Play a game

game ();

*/
