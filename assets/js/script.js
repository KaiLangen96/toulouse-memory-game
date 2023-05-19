//for memory game:
const cards = document.querySelectorAll('.card');
let hasFlipped = false;
let noFlip = true;
let firstCard, secondCard;

//start the game:
function startGame() {
    cards.forEach(card => card.addEventListener('click', flipCard));
    noFlip = false;
    startCountdown();
    seconds = 60;
    points = 0;
    counterPoints.textContent = points;
    moves = 0;
    counterMoves.textContent = moves;
    console.log('Game has started');
    console.log('Score', points);
    console.log('Moves', moves);
}

//flip cards:
function flipCard() {
    if (noFlip) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    console.log('Two card has been flipped');
    checkMatch();
}