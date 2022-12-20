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

/* function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors): ");
    return playerChoice.toLowerCase();
} */ 


/* const playerSelection = getPlayerChoice();
console.log(playerSelection);
const computerSelection = getComputerChoice(); */ 

function playRound(e) {
    let player = e.srcElement.id;
    let computer = getComputerChoice();
    if (player == "rock img" && computer == "rock") {
        roundDrew++;
        reportResult("You drew! You both selected rock!");
    } else if (player == "rock img" && computer == "paper") {
        roundLost++;
        reportResult("You lost! Paper beats rock!");
    } else if (player == "rock img" && computer == "scissors") {
        roundWon++;
        reportResult("You won! Rock beats scissors!");
    } else if (player == "paper img" && computer == "rock") {
        roundWon++;
        reportResult("You won! Paper beats rock!");
    } else if (player == "paper img" && computer == "paper") {
        roundDrew++;
        reportResult("You drew! You both selected paper!");
    } else if (player == "paper img" && computer == "scissors") {
        roundLost++;
        reportResult("You lost! Paper beats scissors!");
    } else if (player == "scissors img" && computer && "rock") {
        roundLost++;
        reportResult("You lost! Rock beats paper!");
    } else if (player == "scissors img" && computer && "paper") {
        roundWon++;
        reportResult("You won! Scissors beats paper!");
    } else {
        roundDrew++;
        reportResult("You drew! You both choose scissors!");
    }
}

function reportResult(response) {
    const resultsContainer = document.querySelector('#results');
    resultsContainer.textContent = response;
    const scoreContainer = document.querySelector('#scoresboard');
    document.getElementById("scoreboard").textContent = 'Rounds won: ' + roundWon + ' | Rounds Lost: ' + roundLost + ' | Rounds Drew: ' + roundDrew;
    determineWinner();
}

function determineWinner(){
    if (roundWon == 5) {
        alert("You won!");
        roundWon = 0;
        roundLost = 0;
        roundDrew = 0;
    }
    if (roundLost == 5) {
        alert("Computer won!");
        roundWon = 0;
        roundLost = 0;
        roundDrew = 0;
    }
}

let roundWon = 0;
let roundLost = 0;
let roundDrew = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener("click", playRound);
});

/* console.log(playRound(playerSelection, computerSelection));

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

game(); */