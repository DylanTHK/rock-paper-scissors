let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;
let roundsToWin = 1; // set first to _ wins the game!

// function to determine the computer's choice - computerPlay, return computerSelection
function computerPlay() {
    const options = ["Rock", "Paper", "Scissors"];
    let computer = Math.floor(Math.random() * 3);
    return options[computer];
}

// function to determine the outcome of a single round
function playRound(player) {
    // new computer input each round
    const computer = computerPlay(); 
    showSelection(player, computer);
    // condition for tie
    if (player === computer) {
        updateScore();
    }
    // condition for player win
    else if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) {
        console.log(`${player} beats ${computer}, You WIN!`);
        updateScore("player");
    }
    // condition for computer win
    else {
        console.log(`${computer} beats ${player}, You LOSE!`);
        updateScore("computer");
    }
}

// function to update scores and keep round rounter
function updateScore(outcome) {
    const roundsDisplay = document.getElementById("roundDisplay");
    roundCounter++;
    roundsDisplay.textContent = `Round ${roundCounter}`;

    if (outcome === "player") {
        playerScore++;
        const playerDisplay = document.getElementById("playerScore");
        playerDisplay.textContent = playerScore;

    } else if (outcome === "computer") {
        computerScore++;
        const computerDisplay = document.getElementById("computerScore");
        computerDisplay.textContent = computerScore;
    }
    
    if ((playerScore === roundsToWin) || (computerScore === roundsToWin)) {
        finishGame();
    }
}

// function to update displays for R P S
function showSelection(player, computer) {
    const $playerSelection = document.getElementById("playerSelection");
    const $computerSelection = document.getElementById("computerSelection");
    $playerSelection.className = ""; // reset to avoid assigning all 3 class names to element
    $computerSelection.className = ""; 
    $playerSelection.classList.add(player);
    $computerSelection.classList.add(computer);
}

// function to bring to new screen with option to restart game
function finishGame () {
    const container = document.querySelector("#container");
    const $resultsPage = document.querySelector("#resultsPage");
    const results = document.querySelector("#results");
    const $finalScore = document.querySelector("#finalScore");
    const resetButton = document.querySelector("#reset"); //

    if (playerScore > computerScore) {
        results.textContent = `YOU WIN THE GAME!`;//* add option to reset game
    } else {
        results.textContent = `COMPUTER WINS THE GAME!`;
    }

    $finalScore.textContent = `Player: ${playerScore}` + '\xa0\xa0\xa0\xa0\xa0' + `Computer: ${computerScore}`;
    container.className = "hidden"; 
    $resultsPage.classList.remove("hidden");

    resetButton.addEventListener("click", () => restartGame());
}


// function to reset scores and text for next round
function restartGame() { 
    // reset playerScore, computerScore, roundCounter
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    const container = document.querySelector("#container");
    const resultsPage = document.querySelector("#resultsPage");
    const roundDisplay = document.querySelector("#roundDisplay");
    const $playerScore = document.querySelector("#playerScore");
    const $computerScore = document.querySelector("#computerScore");
    const $playerSelection = document.querySelector("#playerSelection");
    const $computerSelection = document.querySelector("#computerSelection");

    // reset #roundDisplay text, scores, #playerSelection & computerSelection class to ""
    roundDisplay.textContent = "Select one to start";
    $playerScore.textContent = 0;
    $computerScore.textContent = 0;
    $playerSelection.className = "";
    $computerSelection.className = "";
    // hide resultsPage
    resultsPage.className = "hidden";
    // unhide container
    container.classList.remove("hidden");

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
