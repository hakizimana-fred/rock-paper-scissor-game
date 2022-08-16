const playerButtons = document.querySelectorAll('.player-btn')
const scissor = document.querySelector('#scissor')

let randomChoice
let humanChoice
const choicesArr = ['rock', 'paper', 'scissors'] 

// Generate guesses on random
function randomGuesses() {
   let computerChoice =  choicesArr[Math.floor(Math.random() * choicesArr.length)] 
   randomChoice = computerChoice
   return randomChoice
}
// Loop through player choices then call Play function
for (let playerBtn of playerButtons) {
    playerBtn.addEventListener('click', play)
}
// Play function initialized
function play() {
    humanChoice = this.id
    randomChoice = randomGuesses()  
    determineWinner(humanChoice, randomChoice)
}

// Determine who won
function determineWinner(human, computer) {
    if (human === computer) {
        renderResult(human, computer, 'Draw')
    }else if (human === 'rock') {
        if (computer === 'paper') {
            renderResult(human, computer, 'lose')
        }else{
            renderResult(human, computer, 'win')
        }
    }else if (human === "scissors") {
        if (computer === "rock") {
            renderResult(human, computer, 'lose')
        }else {
            renderResult(human, computer, 'win')
        }
    }else if (human === "paper") {
            if (computer === "scissors") {
                renderResult(human, computer, 'lose')
            }else{
                console.log('player won')
                renderResult(human, computer, 'win')
            }
    }
}

// Rendering result in the DOM
function renderResult(playerChoice, computerChoise, mesasge) {
    document.querySelector('.choice__wrapper').classList.add('show')
    document.querySelector('.selections').classList.remove('show')
    document.querySelector('.player__choice').src = `images/icon-${playerChoice}.svg`
    document.querySelector('.computer__choice').src = `images/icon-${computerChoise}.svg`
    document.querySelector('.player__message').textContent = mesasge

}

function playAgain(){
    document.querySelector('.btn-win').onclick = function(){    
        document.querySelector('.selections').classList.add('show')
        document.querySelector('.choice__wrapper').classList.remove('show')
    }
}

playAgain()


