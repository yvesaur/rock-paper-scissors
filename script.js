
// Returns random number between 0 to num
function random(number) {
    return Math.floor(Math.random()*number);
}

const roshambo = ['rock', 'paper', 'scissors']
let playerChoice;
let computerChoice;
let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector(".rock-button")
const paperButton = document.querySelector(".paper-button")
const scissorsButton = document.querySelector(".scissors-button")
const playerChoiced = document.querySelector(".player .selected")
const computerChoiced = document.querySelector(".computer .selected")
const startButton = document.querySelector(".start-button")
const resultModal = document.querySelector(".modal-container")
const resultModalContent = document.querySelector(".modal-content")
const modalButton = document.querySelector(".modal-button")

const pWins = document.querySelector(".player h1")
const cWins = document.querySelector(".computer h1")


// Choose the choice of player base by selected button and reflect it in UI using classlist
function handleChoicePlayer(choice) {
  playerChoiced.classList.remove(...roshambo.map(c => `${c}-background`));
  playerChoiced.classList.add(`${choice}-background`);
  playerChoice = choice;
}

function handleChoiceComputer(choice) {
  computerChoiced.classList.remove(...roshambo.map(c => `${c}-background`));
  computerChoiced.classList.add(`${choice}-background`);
}

function gameResult() {
  if(playerWins == 5){
    resultModal.style.display = 'flex';
    resultModalContent.textContent = 'You win!'
  } else if (computerWins == 5) {
    resultModal.style.display = 'flex';
    resultModalContent.textContent = 'Computer won!'
  }
}



// Plays a round of rock-paper-scissor to computer using .random()
function playRound() {
  
    console.log(`Start button clicked`)
    computerChoice = roshambo[Math.floor(Math.random() * roshambo.length)];
    handleChoiceComputer(computerChoice) // Display the computer choice on the page
  
    console.log(`Computer: ${computerChoice}`);
  
    if (!roshambo.includes(playerChoice)) {
      console.log("Invalid Input")
      return 'Invalid input! Please try again.';
    }
  
    if (playerChoice === computerChoice) {
      console.log("Tie")
      return `It's a tie, no one won.`;
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log("Player Won")
      playerWins = playerWins + 1
      pWins.textContent = `Player: ${playerWins}`     
    } else {
      console.log("Computer Won")
      computerWins = computerWins + 1
      cWins.textContent = `Computer: ${computerWins}` 
    }

    gameResult()
}

rockButton.addEventListener('click', () => handleChoicePlayer('rock'));
paperButton.addEventListener('click', () => handleChoicePlayer('paper'));
scissorsButton.addEventListener('click', () => handleChoicePlayer('scissors'));
startButton.addEventListener('click', () => playRound());

modalButton.addEventListener('click', ()=> {
  resultModal.style.display = 'none';
  pWins.textContent = `Player: ${0}`
  cWins.textContent = `Computer: ${0}`
  playerWins = 0
  computerWins = 0
})