
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3) + 1

    if (result === 1) {
        return "rock";
    } else if (result === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It is a tie, both selected ${playerSelection}`
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "player wins, rock beat scissors"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "computer wins, paper beats rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "player wins, scissors beat paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "computer wins, rock beat scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "player wins, paper beat scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "computer wins, scissors beat paper"
    }
}

function game() {

    if (guesses <= maxGuesses) {
        let winner = playRound(playerChoice.value.toLowerCase(), getComputerChoice());
        if (winner.startsWith("computer".toLowerCase())) {
            computerScore++;
            computer.textContent = `Computer score = ${computerScore}`
            console.log(`computer won: ${computerScore}`)
        } else {
            playerScore++;
            player.textContent = `player score = ${playerScore}`
            console.log(`player won: ${playerScore}`)
        }
    } else {
        if (playerScore > computerScore) {
            winner.textContent = "PLAYER WINS!"
            GameOver()
            return console.log("Player wins")
        } else if (playerScore < computerScore) {
            winner.textContent = "COMPUTER WINS!"
            GameOver()
            return console.log("Computer wins")
        } else {
            winner.textContent = "NO ONE WINS!"
            GameOver()
            return console.log("it is a tie")
        }
    }
    guesses++;
}

function GameOver() {
    playerChoice.disabled = true
    button.disabled = true
    resetButton = document.createElement('button');
    resetButton.textContent = "Start new game"
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame () {
    guesses = 1

    resetButton.parentNode.removeChild(resetButton)

    playerChoice.disabled = false
    button.disabled = false
    playerChoice.value = "rock"
    playerChoice.focus()
    player.textContent = "player score = 0";
    computer.textContent = "computer score = 0";
    computerScore = 0;
    playerScore = 0;
}

let computerScore = 0;
let playerScore = 0;
let guesses = 1
let maxGuesses = 5
let resetButton

let button = document.querySelector(".btn")
let player = document.querySelector(".player")
let computer = document.querySelector(".computer")
let winner = document.querySelector(".winner")
let playerChoice = document.querySelector(".textfield")

button.addEventListener("click", game)