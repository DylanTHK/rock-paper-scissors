// obtain user input
function playerPlay(e) {
    // let player = ;
    return chosenOption;
}
// function to determine the computer's choice - computerPlay, return computerSelection
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let computer = Math.floor(Math.random() * 3);
    return options[computer];
}

// function to determine the outcome of a single round
function playRound(player, computer) {
    // condition for tie
    if (player === computer) {
        return "Draw"
    }
    // condition for win
    else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
        console.log(`${player} beats ${computer}, You WIN!`);
        return "player";
    }

    // condition for lose
    else {
        console.log(`${computer} beats ${player}, You LOSE!`);
        return "computer";
    }
}

// function to manage state of game - game()
function game() {
    //play 5 rounds, keep score, report a winner
    let playerScore = 0;
    let computerScore = 0;
    let gameRounds = 5; // determines number of rounds to play

    // loop to keep track of 5 rounds
    for (let i = 0; i < gameRounds; i++) {
        const computerSelection = computerPlay(); // new computer input each round
        const playerSelection = playerPlay(); // new player input each round
        let outCome = playRound(playerSelection, computerSelection); // to output the verdict of each round
        if (outCome === "player") {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
    }

    //condition to determine winner
    if (playerScore > computerScore) {
        console.log("Player WINS THE GAME!");  //* add option to reset game
    } else {
        console.log("Computer WINS the GAME!");
    }
}

// Take player's input for R P S

window.addEventListener("click", function(e) {
    console.log(e);
});

// insert player's choice into playRound(player, computer)

