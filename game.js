const choices = ['rock', 'paper', 'scissors'];
let player = 0;
let computer = 0;
let round = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function userPlay() {
    let input = prompt('Type in "rock", "paper" or "scissors":' );
    if (input == null || input == '' || input == false || input == undefined || !input) {
        if (confirm("Don't be afraid, we don't play for money, you just need to write 'rock', 'paper' or 'scissors'!!! Just click 'OK' :)")) {
            return userPlay();
        } else {
        alert("A coward doesn't play rock, paper, scissors!!!");
        }        
    } 

    const playerSelection = input.toLowerCase();
    if (!choices.includes(playerSelection)) {
        alert('Please, input ONLY one of the following options: "rock", "paper" or "scissors"!');
        return userPlay();
    }
    return playerSelection;
}

function playRound() {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    console.log(`You choosed: ${playerSelection}`);
    console.log(`The computer has chosen: ${computerSelection}`);    
    round += 1;
    if (playerSelection === computerSelection) {
        round -= 1;
        console.log('Draw! The round is not counted. Repeat the round.');        
        alert('Draw! The round is not counted. Repeat the round.')
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
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
