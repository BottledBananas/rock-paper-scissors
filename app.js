const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paperbtn");
const scissorsButton = document.querySelector("#scissorsbtn");
const results = document.querySelector("#res");
let playerPoints = 0;
let computerPoints = 0;
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resetButton = document.querySelector("#resetbtn");
results.innerText = "Let the game begin!";
playerScore.innerText = `${playerPoints}`;
computerScore.innerText = `${computerPoints}`;

function getComputerChoice() {
  let num = Math.floor(Math.random() * (4 - 1) + 1);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else if (num === 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    results.innerText = "It's a tie!";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    results.innerText = "You lose!";
    computerScore.textContent = ++computerPoints;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    results.innerText = "You lose!";
    computerScore.textContent = ++computerPoints;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    results.innerText = "You lose!";
    computerScore.textContent = ++computerPoints;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    results.innerText = "You win!";
    playerScore.textContent = ++playerPoints;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    results.innerText = "You win!";
    playerScore.textContent = ++playerPoints;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    results.innerText = "You win!";
    playerScore.textContent = ++playerPoints;
  }
  if (playerPoints >= 5) {
    results.innerText = "You win the game!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.disabled = false;
  }
  if (computerPoints >= 5) {
    results.innerText = "The computer wins the game!";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    resetButton.disabled = false;
  }
}

function reset() {
  playerPoints = 0;
  computerPoints = 0;
  results.innerText = "Let the game begin!";
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

resetButton.addEventListener("click", () => {
  reset();
});
