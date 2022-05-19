
// function to obtain user's input - playerSelection
function playerSelection() {
    let player = prompt("Please choose Rock, Paper or Scissors").toLowerCase();
    // make input case insensitive
    let firstLetter = player[0];
    let capLetter = firstLetter.toUpperCase();
    let restOfWord = player.slice(1);
    let chosenOption = capLetter.concat(restOfWord);
    return chosenOption;
}

// function to determine the computer's choice - computerPlay, return computerSelection
function computerSelection() {
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
        return `${player} beats ${computer}, Player wins this round!`;
    }

    // condition for lose
    else {
        return `${computer} beats ${player}, Computer wins this round!`;
    }
}

// function to manage state of game - game()
//play 5 rounds, keep score, report a winner

let computer = computerSelection();
let player = playerSelection();
let outcome = playRound(player, computer);