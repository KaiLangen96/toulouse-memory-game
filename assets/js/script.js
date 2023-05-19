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

//check if cards match:
function checkMatch() {
    console.log('A check has been performed');
    let match = firstCard.dataset.card === secondCard.dataset.card;
    match ? matchedCards() : resetCards();
}

//if matched:
function matchedCards() {
    console.log('It is a match');
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    continuePlaying();
    //add one to moves:
    moves++;
    counterMoves.textContent = moves;
    //add one to score:
    points++;
    counterPoints.textContent = points;
    endGame();
}

//if not a match:
function resetCards() {
    console.log('It is not a match');
    noFlip = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        continuePlaying();
    }, 700);
    moves++;
    counterMoves.textContent = moves;
}

//contine the game:
function continuePlaying() {
    console.log('The game continues');
    hasFlipped = false;
    noFlip = false;
    firstCard = null;
    secondCard = null;
}