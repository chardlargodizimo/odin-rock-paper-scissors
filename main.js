let humanScore = 0;
let computerScore = 0;
let rounds = 5;

function getHumanChoice() {
    let option = prompt('Please pick your weapon (Rock, Paper or Scissors):').toLowerCase();
    if (option === 'rock' || option === 'paper' || option === 'scissors') {
        return option;
    } else {
        alert("Please choose a right option");
        getHumanChoice();
    }
    
}

function getComputerChoice() {
    let option = Math.floor(Math.random() * 3);
    switch (option) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2: 
            return 'scissors';
            break;
        default:
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`You choose ${humanChoice}. Computer chooses ${computerChoice}. The result is DRAW.`);
    } else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            alert(`You choose ${humanChoice}. Computer chooses ${computerChoice}. ${humanChoice} loses to ${computerChoice}. YOU LOSE!`);
            return computerScore++;
        } else {
            alert(`You choose ${humanChoice}. Computer chooses ${computerChoice}. ${humanChoice} beats ${computerChoice}. YOU WIN!`);
            return humanScore++;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            alert(`You choose ${humanChoice}. Computer chooses ${computerChoice}. ${humanChoice} loses to ${computerChoice}. YOU LOSE!`);
            return computerScore++;
        } else {
            alert(`You choose ${humanChoice}. Computer chooses ${computerChoice}. ${humanChoice} beats ${computerChoice}. YOU WIN!`);
            return humanScore++;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            alert(`You choose ${humanChoice}. Computer chooses ${computerChoice}. ${humanChoice} loses to ${computerChoice}. YOU LOSE!`);
            return computerScore++;
        } else {
            alert(`You choose ${humanChoice}. Computer chooses ${computerChoice}. ${humanChoice} beats ${computerChoice}. YOU WIN!`);
            return humanScore++;
        }
    }
}

function playGame() {
    for (i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        alert(`PLAYER score: ${humanScore}, CPU score: ${computerScore}. PLAYER WINS!`);
    } else if (humanScore < computerScore) {
        alert(`PLAYER score: ${humanScore}, CPU score: ${computerScore}. CPU WINS!`);
    } else {
        alert(`PLAYER score: ${humanScore}, CPU score: ${computerScore}. It's a DRAW!`);
    }

    let playAgain = confirm('Do you want to play another game?');
    
    if (playAgain) {
        humanScore = 0;
        computerScore = 0;
        playGame();
    } else {
        alert('Exiting the game.');
    }
}

playGame();










