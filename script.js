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

/* Capture the user's choice 

function playerChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Invalid Choice");
    }
}

*/

/* Run the game */

function playGame (playerSelection, computerChoice) {
    
    if (playerSelection === computerSelection) {
        return "It's a draw"

    } else if  (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You win!'
        } else if (computerSelection === 'paper') {
            return 'The computer wins!'
        }

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You win!'
        } else if (computerSelection === 'scissors') {
            return 'The computer wins!'
        } 

    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win!'
        } else if (computerSelection === 'rock') {
            return 'The computer wins!'
        } 
    }
}


/* checks */
playerSelection = 'rock';
computerSelection = getComputerChoice();
console.log(`Player chose ${playerSelection}.`);
console.log(`Computer chose ${computerSelection}.`);

