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

let playerPoints = 0;
let computerPoints = 0;

const results = document.querySelector("#res");

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
}

const playerScore = document.querySelector("#playerScore");
playerScore.innerText = `${playerPoints}`;

const computerScore = document.querySelector("#computerScore");
computerScore.innerText = `${computerPoints}`;

const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paperbtn");
const scissorsButton = document.querySelector("#scissorsbtn");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
