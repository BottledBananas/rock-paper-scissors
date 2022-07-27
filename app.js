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
    return "It's a tie!";
  }
  if (playerSelection != computerSelection) {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
      } else return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
      } else return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
      } else return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper or scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (playerSelection != computerSelection) {
      if (playerSelection === "rock") {
        if (computerSelection === "paper") {
          computerScore++;
        } else playerScore++;
      } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
          computerScore++;
        } else playerScore++;
      } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          computerScore++;
        } else playerScore++;
      }
    }
  }
  return `Player scored ${playerScore} points, Computer scored ${computerScore} points!`;
}
