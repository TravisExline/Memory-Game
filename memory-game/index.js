const playingCards = document.querySelectorAll('.playing-card')

let hasFlipped = false
let cardOne, cardTwo

function flipCard() {
    this.classList.toggle('flip');

    if(!hasFlipped) {
        hasFlipped = true;
        cardOne = this
    }

    isMatch()
}

function isMatch() {
    if(cardOne.id === cardTwo.id) {
        correctCards()
    }
}

playingCards.forEach(card => card.addEventListener('click', flipCard))
