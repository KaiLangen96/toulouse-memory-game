//for memory game:
const cards = document.querySelectorAll('.card');
let hasFlipped = false;
let noFlip = true;
let firstCard, secondCard;
//for timer:
let seconds, countdown, isRunning = false;
//for score and moves:
const counterPoints = document.getElementById("points");
const counterMoves = document.getElementById("moves");
let points, moves;
//for io-button:
let currentFunction = startGame;
document.getElementById("iobutton").addEventListener('click', toggleStartReset);

//start the game:
function startGame() {
    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));
    noFlip = false;
    seconds = 60;
    startCountdown();
    points = 0;
    counterPoints.textContent = points;
    moves = 0;
    counterMoves.textContent = moves;
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
    checkMatch();
}

//check if cards match:
function checkMatch() {
    let match = firstCard.dataset.card === secondCard.dataset.card;
    match ? matchedCards() : resetCards();
}

//if matched:
function matchedCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    continuePlaying();
    moves++;
    counterMoves.textContent = moves;
    points++;
    counterPoints.textContent = points;
    endGame();
}

//if not a match:
function resetCards() {
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
    hasFlipped = false;
    noFlip = false;
    firstCard = null;
    secondCard = null;
}

//reset the board:
function resetBoard() {
    cards.forEach(card => {
        card.classList.remove('flip');
    });
}

//shuffle the board:
function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
}

//end the game after all pairs are found:
function endGame() {
    if (points === 10) {
        stopCountdown();
        currentFunction = resetGame;
        updateActionButtonText("Reset");
        setTimeout(function () {
            alert('Congratulations! You scored: ' + points + ' points with ' + moves + ' moves in ' + (60 - seconds) + ' seconds!');
        }, 500);
    }
}

//reset the game:
function resetGame() {
    stopCountdown();
    resetBoard();
    seconds = 60;
    updateTimer();
    noFlip = true;
    points = 0;
    counterPoints.textContent = points;
    moves = 0;
    counterMoves.textContent = moves;
}

//timer initialization:
function startCountdown() {
    countdown = setInterval(function () {
        seconds--;
        updateTimer();
        if (seconds === 0) {
            stopCountdown();
            setTimeout(function () {
                alert("Time's up! You scored: " + points + ' points with ' + moves + ' moves in ' + (60 - seconds) + ' seconds!');
            }, 500);
        }
    }, 1000);
    isRunning = true;
    updateActionButtonText("RESET");
}

//stop the timer:
function stopCountdown() {
    clearInterval(countdown);
    isRunning = false;
    updateActionButtonText("START");
}

//update the timer:
function updateTimer() {
    let timerElement = document.getElementById("timer");
    timerElement.innerText = seconds + ' s';
}

//toggle start/reset:
function toggleStartReset() {
    //switch to reset
    if (currentFunction === startGame) {
        startGame();
        currentFunction = resetGame;
        //switch to start
    } else {
        const reset = confirm('Are you sure you want to reset the game?');
        if (reset === true) {
            resetGame();
            currentFunction = startGame;
        }
    }
}

//update the io button text:
function updateActionButtonText(text) {
    let iobutton = document.getElementById("iobutton");
    iobutton.innerText = text;
}