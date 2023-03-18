
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

// function game() {

//     if (guesses <= maxGuesses) {
//         let winner = playRound(playerChoice.value.toLowerCase(), getComputerChoice());
//         if (winner.startsWith("computer".toLowerCase())) {
//             computerScore++;
//             computer.textContent = `Computer score = ${computerScore}`
//             console.log(`computer won: ${computerScore}`)
//         } else {
//             playerScore++;
//             player.textContent = `player score = ${playerScore}`
//             console.log(`player won: ${playerScore}`)
//         }
//     } else {
//         if (playerScore > computerScore) {
//             winner.textContent = "PLAYER WINS!"
//             GameOver()
//             return console.log("Player wins")
//         } else if (playerScore < computerScore) {
//             winner.textContent = "COMPUTER WINS!"
//             GameOver()
//             return console.log("Computer wins")
//         } else {
//             winner.textContent = "NO ONE WINS!"
//             GameOver()
//             return console.log("it is a tie")
//         }
//     }
//     guesses++;
// }

function GameOver() {
    // playerChoice.disabled = true
    // button.disabled = true
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true

    resetButton = document.createElement('button');
    resetButton.classList.add("resetButton");
    // resetButton.styles.margin = "auto";
    resetButton.textContent = "Start new game";
    document.getElementById("reset").appendChild(resetButton)
    // document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame () {
    resetButton.parentNode.removeChild(resetButton)
    // playerChoice.disabled = false
    // button.disabled = false
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
    // playerChoice.value = "rock"
    // playerChoice.focus()
    resetButton.classList.remove("resetButton");
    player.textContent = "player score = 0";
    computer.textContent = "computer score = 0";
    computerScore = 0;
    playerScore = 0;
}

let player = document.querySelector(".person-score")
let computer = document.querySelector(".computer-score")

player.textContent = "player score = 0";
computer.textContent = "computer score = 0";

let computerScore = 0;
let playerScore = 0;

let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")

let options = [rock, paper, scissors]

options.forEach(option => {

    option.addEventListener("click", function(){

        let playerSelection = option.value;
        let computerSelection = getComputerChoice()

        console.log(`player selected: ${playerSelection}`);
        console.log(`computer selected: ${computerSelection}`);

        if (playerSelection == computerSelection) {
            console.log(`It is a tie, both selected ${playerSelection}`)
        }
    
        if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("player wins, rock beat scissors")
            playerScore++;
            player.textContent = `player score = ${playerScore}`;
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("computer wins, paper beats rock")
            computerScore++;
            computer.textContent = `computer score = ${computerScore}`;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("player wins, scissors beat paper")
            playerScore++;
            player.textContent = `player score = ${playerScore}`;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("computer wins, rock beat scissors")
            computerScore++;
            computer.textContent = `computer score = ${computerScore}`;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("player wins, paper beat scissors")
            playerScore++;
            player.textContent = `player score = ${playerScore}`;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log("computer wins, scissors beat paper")
            computerScore++;
            computer.textContent = `computer score = ${computerScore}`;
        }

        if(computerScore >= 5 || playerScore >= 5) {
            GameOver()
        }

    });
})
