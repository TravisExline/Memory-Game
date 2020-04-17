const playingCards = document.querySelectorAll('.playing-card')

let hasFlipped = false
let cardOne, cardTwo

var moves = 0

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


function isMatch() {
    // debugger
    if(cardOne.id === cardTwo.id) {
        correctMatch()
        return
    }

    // stopFlip(event)
    incorrectMatch()
}

function correctMatch() {
    setTimeout(() => {
        alert("Correct Match!")
    }, 500)
    moveCounter()
}

// function stopFlip(event) {
    // document.getElementById("card-front-image").addEventListener('click', function(e){
    //     e.preventDefault()
    // })
// }

function incorrectMatch() {
    setTimeout(() => {
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip')
    }, 1500)
    moveCounter()
}

function moveCounter() {
    moves += 1
    document.getElementById('move-counter').innerHTML = `Total Moves: ${moves}`
}

playingCards.forEach(card => card.addEventListener('click', flipCard))
