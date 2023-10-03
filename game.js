const choices = ['rock', 'paper', 'scissors'];
let player = 0;
let computer = 0;
let round = 0;

function computerSelection() {
    return choices[Math.floor(Math.random() * 3)];
}

function userSelection() {
    let input = prompt('Type in "rock", "paper" or "scissors":');
    if (input == null || input == '' || input == false || input == undefined || !input) {
        alert('Nope! Now you play!');
        return userSelection(); 
    }
    const confirmedInput = input.toLowerCase();
    if (!choices.includes(confirmedInput)) {
        alert('Please, input ONLY one of the following options: "rock", "paper" or "scissors"!');
        return userSelection();
    }
    return confirmedInput;
}

function playRound() {
    const confirmedInput = userSelection();
    const computerChoice = computerSelection();
    console.log(`You choosed: ${confirmedInput}`);
    console.log(`The computer has chosen: ${computerChoice}`);    
    round += 1;
    if (confirmedInput === computerChoice) {
        round -= 1;
        console.log('Draw! The round is not counted. Repeat the round.');        
        alert('Draw! The round is not counted. Repeat the round.')
    } else if (
        (confirmedInput === 'rock' && computerChoice === 'scissors') ||
        (confirmedInput === 'paper' && computerChoice === 'rock') ||
        (confirmedInput === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You have won the round!');
        player += 1;
    } else {
        console.log('You lost the round.');
        computer += 1;
    }
}

function game() {
    while (player < 3 && computer < 3) {
        playRound();
        console.log(`Account: Player ${player} : ${computer} Computer \nRound: ${round}`);
        alert(`Account: Player ${player} : ${computer} Computer \nRound: ${round}`);        
    }
    if (player > computer) {
        console.log('You won!');
        alert('You won!');
    } else {
        console.log('The computer won!');
        alert('The computer won!');
    }
}
game();