const playingCard = document.querySelector(".playing-card")
const cardFront = document.querySelector(".card-front")
const cardBack = document.querySelector(".card-back")

function hideBacks() {
  cardBack.style.display = "none"
}

function showBacks() {
    cardBack.style.display = ""
}

function hideFronts() {
    cardFront.style.display = "none"
}

function showFronts() {
    cardFront.style.display = ""
}

playingCard.addEventListener('click', function(e) {
    e.preventDefault()
    hideBacks()
    showFronts()
})
