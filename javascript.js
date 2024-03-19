// 03/18 tried to make the game play until computer or player achieves 5 points

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

let computerPoints = 0;
let playerPoints = 0;

function playGame() {
    function playRound(playerSelection, computerSelection) {
        switch(true) {
            case playerSelection.toLowerCase() === computerSelection:
                return "Draw! Both players chose " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + "!";
            case playerSelection.toLowerCase() === 'rock' && computerSelection == "paper":
                computerPoints += 1
                return "You Lose! Paper beats Rock!";
            case playerSelection.toLowerCase() === 'rock' && computerSelection == "scissors":
                playerPoints +=1
                return "You Win! Rock beats Scissors!";
            case playerSelection.toLowerCase() === 'paper' && computerSelection == "rock":
                playerPoints +=1
                return "You Win! Paper beats Rock!";
            case playerSelection.toLowerCase() === 'paper' && computerSelection == "scissors":
                computerPoints += 1
                return "You Lose! Scissors beats Paper!";
            case playerSelection.toLowerCase() === 'scissors' && computerSelection == "paper":
                playerPoints +=1
                return "You Win! Scissors beats Paper!";
            case playerSelection.toLowerCase() === 'scissors' && computerSelection == "rock":
                computerPoints += 1
                return "You Lose! Rock beats Scissors!";
            default:
                null;
        }
    }
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("What's your play?");
    console.log(playRound(playerSelection, computerSelection));
    console.log("Computer has " + computerPoints + " points!");
    console.log("Player has " + playerPoints + " points!");
}

while (computerPoints != 5 || playerPoints != 5) {
    playGame();
}
