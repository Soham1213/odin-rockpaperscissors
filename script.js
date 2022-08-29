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
        getScore("You drew! You both selected rock!");
    } else if (player == "rock" && computer == "paper") {
        getScore("You lost! Paper beats rock!");
    } else if (player == "rock" && computer == "scissors") {
        getScore("You won! Rock beats scissors!");
    } else if (player == "paper" && computer == "rock") {
        getScore("You won! Paper beats rock!");
    } else if (player == "paper" && computer == "paper") {
        getScore("You drew! You both selected paper!");
    } else if (player == "paper" && computer == "scissors") {
        getScore("You lost! Paper beats scissors!");
    } else if (player == "scissors" && computer && "rock") {
        getScore("You lost! Rock beats paper!");
    } else if (player == "scissors" && computer && "paper") {
        getScore("You won! Scissors beats paper!");
    } else {
        getScore("You drew! You both choose scissors!");
    }
}

const container = document.querySelector('#text-container');

const result = document.createElement('div');
result.classList.add('result');
// result.textContent = 'This is the glorious text-content!';

const score = document.createElement('div');
score.classList.add('score');

let roundWon = 0;
let roundLost = 0;
let roundDrew =0;
function getScore(result) {
    let str = result.slice(4,5);
        console.log(str);
        if (str == "d") {
            roundDrew+= 1; 
        } else if (str == "w") {
            roundWon+= 1;
        } else {
            roundLost+= 1;
        }
    score.textContent = 'Rounds won: &{roundWon} | Rounds Lost: &{roundLost} | Rounds Drew: &{roundDrew}' 
    determineWinner();
}

container.appendChild(result);
container.appendChild(score);

let choices = document.querySelectorAll('button');
choices.forEach((btn) => {
    btn.addEventListener('click', playRound);
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