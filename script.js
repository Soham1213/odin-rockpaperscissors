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
    let result;
    if (player == "rock" && computer == "rock") {
        reportResult("You drew! You both selected rock!");
        updateScore("You drew! You both selected rock!");
    } else if (player == "rock" && computer == "paper") {
        reportResult("You lost! Paper beats rock!");
        updateScore("You lost! Paper beats rock!");
    } else if (player == "rock" && computer == "scissors") {
        reportResult("You won! Rock beats scissors!");
        updateScore("You won! Rock beats scissors!");
    } else if (player == "paper" && computer == "rock") {
        reportResult("You won! Paper beats rock!");
        updateScore("You won! Paper beats rock!");
    } else if (player == "paper" && computer == "paper") {
        reportResult("You drew! You both selected paper!");
        updateScore("You drew! You both selected paper!");
    } else if (player == "paper" && computer == "scissors") {
        reportResult("You lost! Paper beats scissors!");
        updateScore("You lost! Paper beats scissors!");
    } else if (player == "scissors" && computer && "rock") {
        reportResult("You lost! Rock beats paper!");
        updateScore("You lost! Rock beats paper!");
    } else if (player == "scissors" && computer && "paper") {
        reportResult("You won! Scissors beats paper!");
        updateScore("You won! Scissors beats paper!");
    } else {
        reportResult("You drew! You both choose scissors!");
        updateScore("You drew! You both choose scissors!");
    }
}

function reportResult(response) {
    document.getElementById("results").innerHTML = response;
}


let roundWon = 0;
let roundLost = 0;
let roundDrew = 0;
function updateScore(result) {
    let str = result.slice(4,5);
        console.log(str);
        if (str == "d") {
            roundDrew+= 1; 
        } else if (str == "w") {
            roundWon+= 1;
        } else {
            roundLost+= 1;
        }
    document.getElementById("scoreboard").innerHTML = 'Rounds won: &{roundWon} | Rounds Lost: &{roundLost} | Rounds Drew: &{roundDrew}';
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

let buttons = document.querySelectorAll('.choices');
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