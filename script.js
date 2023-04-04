
// Returns random number between 0 to num
function random(number) {
    return Math.floor(Math.random()*number);
}

const roshambo = ['rock', 'paper', 'scissors']
let PlayerChoice;
let ComputerChoice;

// Plays a round of rock-paper-scissor to computer using .random()
function playRound(getPlayerChoice, getComputerChoice){
    getPlayerChoice = prompt('Choose rock, paper, or scissors: ')
    getComputerChoice = roshambo[random(roshambo.length)].toLowerCase()
    console.log(`Computer: ${getComputerChoice}`)
    getPlayerChoice = getPlayerChoice.toLowerCase()

    if(getPlayerChoice == getComputerChoice){
        return `It's a tie, no one won.`
    } else if ((getPlayerChoice == 'rock')){
        if(getComputerChoice == 'paper'){
            return `You lose, Computer won.`
        } else if (getComputerChoice == 'scissors'){
            return `You won, Computer lose.`
        } else {
            return
        }
    } else if ((getPlayerChoice == 'paper')){
        if(getComputerChoice == 'scissor'){
            return `You lose, Computer won.`
        } else if (getComputerChoice == 'rock'){
            return `You won, Computer lose.`
        } else {
            return
        }
    } else if ((getPlayerChoice == 'scissors')){
        if(getComputerChoice == 'rock'){
            return `You lose, Computer won.`
        } else if (getComputerChoice == 'paper'){
            return `You won, Computer lose.`
        } else {
            return
        }
    } else {
        return `Invalid input! Please try again.`
    }
}

function game(){
    const rounds = 5;
    let i = 1;

    while(i <= rounds){
        console.log(playRound(PlayerChoice,ComputerChoice))
        i++
    }
}


const rockButton = document.querySelector(".rock-button")
const paperButton = document.querySelector(".paper-button")
const scissorsButton = document.querySelector(".scissors-button")
const playerChoiced = document.querySelector(".player .selected")

rockButton.addEventListener('click', () => {
    playerChoiced.classList.remove('rock-background', 'paper-background', 'scissors-background')
    playerChoiced.classList.add('rock-background')
    PlayerChoice = 'rock'
})

paperButton.addEventListener('click', () => {
    playerChoiced.classList.remove('rock-background', 'paper-background', 'scissors-background')
    playerChoiced.classList.add('paper-background')
    PlayerChoice = 'paper'
})

scissorsButton.addEventListener('click', () => {
    playerChoiced.classList.remove('rock-background', 'paper-background', 'scissors-background')
    playerChoiced.classList.add('scissors-background')
    PlayerChoice = 'scissors'
})