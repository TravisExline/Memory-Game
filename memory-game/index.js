const playingCards = document.querySelectorAll('.playing-card')
const correctMatchText = document.getElementById('correct-answer')

let hasFlipped = false
let cardOne, cardTwo
let totalCorrect = 0

var moves = 0

document.addEventListener("load", shuffleCards())

function shuffleCards() {
    playingCards.forEach(card => {
        let cardPosition = Math.floor(Math.random() * 12)
        card.style.order = cardPosition
    })
}

function flipCard() {
    this.classList.add('flip');

    if(!hasFlipped) {
        hasFlipped = true;
        cardOne = this
        // must return to allow second card to be flipped
        return
    }

    // eliminates ability to select the same card twice
    if(this != cardOne) {
        cardTwo = this
    } else {
        return
    }

    // must reset the flipped card; or else matches all cards with cardOne
    hasFlipped = false

    isMatch()
}

// where do we put this to make it work????
// stopFlip()

function isMatch() {
    // debugger
    if(cardOne.id === cardTwo.id) {
        correctMatch()
        return
    }
    incorrectMatch()
}

function correctMatch() {
    setTimeout(() => {
        correctMatchText.innerHTML = "Correct Match!"
    }, 500)
    setTimeout(() => {
        correctMatchText.innerHTML = " "
    }, 1500)
    totalCorrect += 1
    if(totalCorrect === 6) {
        setTimeout(() => {
            youWin()
        }, 1000)
    }
    moveCounter()
}

function stopFlip() {
    // debugger
    playingCards.forEach(card => card.classList.remove('flip'))
}

function incorrectMatch() {
    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip')
    }, 1500)
    moveCounter()
}

function youWin() {
    alert('You Win! Yay!')
}

function moveCounter() {
    moves += 1
    document.getElementById('move-counter').innerHTML = `Total Moves: ${moves}`
}

playingCards.forEach(card => card.addEventListener('click', flipCard))
