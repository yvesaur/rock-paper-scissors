// returns random number from 0 to num
function random(num) {
    return Math.floor(Math.random() * num)
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