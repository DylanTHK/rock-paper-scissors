let playerScore = 0;
let computerScore = 0;
const gameRounds = 5; // determines number of rounds to play

// function to determine the computer's choice - computerPlay, return computerSelection
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let computer = Math.floor(Math.random() * 3);
    return options[computer];
}

// function to determine the outcome of a single round
function playRound(player) {
    // condition for tie
    const computer = computerPlay(); // new computer input each round
    if (player === computer) {
        return "Draw"
    }
    // condition for player win
    else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
        console.log(`${player} beats ${computer}, You WIN!`);
        playerScore++;
        return "player";
    }

    // condition for computer win
    else {
        console.log(`${computer} beats ${player}, You LOSE!`);
        computerScore++;
        return "computer";
    }
}

// function to manage state of game - game()
function game(player) {
    // condition to determine winner
    if (playerScore > computerScore) {
        console.log("Player WINS THE GAME!");  //* add option to reset game
    } else {
        console.log("Computer WINS the GAME!");
    }
}

// take player's input for R P S
function initialise() {
    const playerOption = document.querySelectorAll(".buttonClass"); // returns a nodelist of 3 input nodes
    // forEach allows for calling of each node in nodelist, playerOption
    // each nodeElement passed to addEventListener when clicked, passes playRound function
    // input for selected from nodeElement.target.id (Rock / Paper / Scissors)
    playerOption.forEach(nodeElement => nodeElement.addEventListener("click", 
    playerSelection => playRound(playerSelection.target.id)));
}

// start of game
initialise();
