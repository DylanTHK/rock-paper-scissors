
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

// function to determine the outcome of the play - playRound
function playRound(player, computer) {
    // condition for tie
    if (player === computer) {
        return 
    }
    // condition for win
    if (player === "Rock" && computer ==="Scissors") {
        
    }

    // condition for lose
}

// function to manage state of game - game()
//play 5 rounds, keep score, report a winner

let computer = computerSelection();
let player = playerSelection();