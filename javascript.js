// NEED TO RESUME PROJECT FROM PART 6

function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3-1+1) + 1);
    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "nothing";
    }
}

function playRound(playerSelection, computerSelection) {
    switch(true) {
        case playerSelection.toLowerCase() === computerSelection:
            return "Draw! Both players chose " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + "!";
        case playerSelection.toLowerCase() === 'rock' && computerSelection == "paper":
            return "You Lose! Paper beats Rock!";
        case playerSelection.toLowerCase() === 'rock' && computerSelection == "scissors":
            return "You Win! Rock beats Scissors!";
        case playerSelection.toLowerCase() === 'paper' && computerSelection == "rock":
            return "You Win! Paper beats Rock!";
        case playerSelection.toLowerCase() === 'paper' && computerSelection == "scissors":
            return "You Lose! Scissors beats Paper!";
        case playerSelection.toLowerCase() === 'scissors' && computerSelection == "paper":
            return "You Win! Scissors beats Paper!";
        case playerSelection.toLowerCase() === 'scissors' && computerSelection == "rock":
            return "You Lose! Rock beats Scissors!";
        default:
            null;
    }
}

const computerSelection = getComputerChoice();
const playerSelection = "pApER";
console.log(playRound(playerSelection, computerSelection));