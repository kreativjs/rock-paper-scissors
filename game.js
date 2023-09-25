function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerSelection() {
    switch (getRandomInt()) {
        case 0: return 0 // ROCK
        case 1: return 1 // PAPER
        case 2: return 2 // SCISSORS
    }
}

function userSelection() {
    let input = prompt('Type in rock, paper or scissors')
    if (input == null || input == '' || input == false || !input) {
        alert('Nope! Now you play!')
    }
    else {
        let inputUpper = input.toUpperCase()
        return inputUpper;
    }
}

function confirmInput() {
    switch (userSelection()) {
        case 'ROCK': return 0
        case 'PAPER': return 1
        case 'SCISSORS': return 2
        default: return 'WRONG INPUT'
    }
}

let player = 0;
let computer = 0;
let match = 0;

function playRound() {
    let confirmedInput = confirmInput();
    let computerChoice = computerSelection();
    console.count('Round: ')
    if (confirmedInput === 0 && computerChoice === 2) {
        player += 1;
        computer += 0;
        console.log("Player's score: " + player)
        console.log("Computer's score: " + computer)
        console.log('The Player won this round!')
        return match += 1;
    }
    if (confirmedInput === 0 && computerChoice === 1) {
        player += 0;
        computer += 1;
        console.log("Player's score: " + player)
        console.log("Computer's score: " + computer)
        console.log('The AI won this round!')
        return match += 1;
    }
    if (confirmedInput === 1 && computerChoice === 0) {
        player += 1;
        computer += 0;
        console.log("Player's score: " + player)
        console.log("Computer's score: " + computer)
        console.log('The Player won this round!')
        return match += 1;
    }
    if (confirmedInput === 1 && computerChoice === 2) {
        player += 0;
        computer += 1;
        console.log("Player's score: " + player)
        console.log("Computer's score: " + computer)
        console.log('The AI won this round!')
        return match += 1;
    }
    if (confirmedInput === 2 && computerChoice === 1) {
        player += 1;
        computer += 0;
        console.log("Player's score: " + player)
        console.log("Computer's score: " + computer)
        console.log('The Player won this round!')
        return match += 1;
    }
    if (confirmedInput === 2 && computerChoice === 0) {
        player += 0;
        computer += 1;
        console.log("Player's score: " + player)
        console.log("Computer's score: " + computer)
        console.log('The AI won this round!')
        return match += 1;
    }
    if (confirmedInput === computerChoice) {
        player += 0;
        computer += 0;
        console.log("Player's score: " + player)
        console.log("Computer's score: " + computer)
        console.log('DRAW')
        return match += 0;
    }
    if (confirmedInput != 'ROCK' || 'PAPER' || 'SCISSORS') {
        alert('Please, input ONLY one of the following options: rock, paper or scissors!')
        console.log("Player's score: " + player)
        console.log("Computer's score: " + computer)
    }
}

function game() {
    game: while (player + computer < 5) {
        let score = playRound();
        console.log('TOTAL POINTS (not draw): ' + score)
        if (player === 3 || computer === 3) {
            if (player > computer) {
                console.log("You have WON by reaching 3/5 points!")
                break game;
            }
            if (player < computer) {
                console.log("The AI has WON by reaching 3/5 points!")
                break game;
            }
        }
        else continue;
    }
}

game();