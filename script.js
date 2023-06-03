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

function playGame (playerChoice, computerChoice) {
    
    if (playerChoice === computerChoice) {
        return "It's a draw"

    } else if  (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'You win!'
        } else if (computerChoice === 'paper') {
            return 'The computer wins!'
        }

    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win!'
        } else if (computerChoice === 'scissors') {
            return 'The computer wins!'
        } 

    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You win!'
        } else if (computerChoice === 'rock') {
            return 'The computer wins!'
        } 
    }
}


/* checks */
playerChoice = 'rock';
computerChoice = getComputerChoice();
console.log(`Player chose ${playerChoice}.`);
console.log(`Computer chose ${computerChoice}.`);

