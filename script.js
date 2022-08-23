function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    if (x == 0) {
        return "rock";
    } else if (x==1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = window.prompt("Enter your choice (rock, paper, or scissors): ");
    return playerChoice.toLowerCase();
}


const playerSelection = getPlayerChoice();
console.log(playerSelection);
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    if (player == "rock" && computer == "rock") {
        return "You drew! You both selected rock!";
    } else if (player == "rock" && computer == "paper") {
        return "You lost! Paper beats rock!";
    } else if (player == "rock" && computer == "scissors") {
        return "You won! Rock beats scissors!";
    } else if (player == "paper" && computer == "rock") {
        return "You won! Paper beats rock!";
    } else if (player == "paper" && computer == "paper") {
        return "You drew! You both selected paper!";
    } else if (player == "paper" && computer == "scissors") {
        return "You lost! Paper beats scissors!";
    } else if (player == "scissors" && computer && "rock") {
        return "You lost! Rock beats paper!";
    } else if (player == "scissors" && computer && "paper") {
        return "You won! Scissors beats paper!";
    } else {
        return "You drew! You both choose scissors!";
    }
}
 
console.log(playRound(playerSelection, computerSelection));

