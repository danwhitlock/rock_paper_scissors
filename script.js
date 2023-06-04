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

/* Function to play one round */

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        console.log ("It's a draw")
        
    } else if  (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log('Player wins the round!');
            playerScore++
        } else if (computerSelection === 'paper') {
            console.log('The computer wins the round!');
            computerScore++
        }

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('Player wins the round!');
            playerScore++
        } else if (computerSelection === 'scissors') {
            console.log('The computer wins the round!');
            computerScore++
        } 

    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log('Player wins the round!');
            playerScore++
        } else if (computerSelection === 'rock') {
            console.log('The computer wins the round!');
            computerScore++
        } 
    }
}

/* create variables to keep score */

let playerScore = 0;
let computerScore = 0;

/* Function to play a five-round game and log the results */

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

/* Play a game */

game ();
