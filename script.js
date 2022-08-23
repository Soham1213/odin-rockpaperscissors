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
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors): ");
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

function game() {
    let roundWon = 0;
    let roundLost = 0;
    let roundDrew =0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        let str = result.slice(4,5);
        console.log(str);
        if (str == "d") {
            roundDrew+= 1; 
        } else if (str == "w") {
            roundWon+= 1;
        } else {
            roundLost+= 1;
        }
        console.log(result);
    }
    console.log("You won " + roundWon + " times. You lost " + roundLost + " times. You drew " + roundDrew + " times.");
    console.log("Your record (in W-L-D format): " + roundWon + "-" + roundLost + "-" + roundDrew);
}

game();