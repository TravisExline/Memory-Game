const playingCards = document.querySelectorAll('.playing-card')

let hasFlipped = false
let cardOne, cardTwo

function flipCard() {
    this.classList.add('flip');

    if(!hasFlipped) {
        hasFlipped = true;
        cardOne = this
        // must return to allow second card to be flipped
        return
    }

    isMatch()
}

function isMatch() {
    debugger
    if(cardOne.id === cardTwo.id) {
        correctCards()
    }
}

playingCards.forEach(card => card.addEventListener('click', flipCard))
