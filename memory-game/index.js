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

    cardTwo = this

    isMatch()
}

function isMatch() {
    // debugger
    if(cardOne.id === cardTwo.id) {
        correctMatch()
        return
    }

    incorrectMatch()
}

function correctMatch() {
    alert("Correct Match!") 
}

function incorrectMatch() {
    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip')
    }, 2000)
}

playingCards.forEach(card => card.addEventListener('click', flipCard))
