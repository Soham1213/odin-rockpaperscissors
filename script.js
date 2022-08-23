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


