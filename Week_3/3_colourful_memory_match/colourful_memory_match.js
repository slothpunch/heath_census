// Initialise arrays and variables
const colours = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colours.concat(colours));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// Select DOM elements
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Create the generateCards() function to create the card elements dynamically
function generateCards() {
    for (const colour of cards){
        const card = document.createElement('div');
        card.classList.add('card'); // Add a class 'card' to the div 'card'
        card.dataset.color = colour; // It sets the 'dataset.color' attribute of the card element to the current color value from the 'cards' array. This icon represents the card's hidden color until the player clicks it.
        card.textContent = '?'; // Set a question mark for the initial content of a card
        gameContainer.appendChild(card); 
    }
}

// Create the shuffle function to shuffle the cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create the handleCardClick() function to check if a user-selected card is correct
function handleCardClick(event) {
    const card = event.target; // retrieves the element that triggered the event (a clicked card) and assigns it to the 'card' variable
    
    // Check if the clicked card is a card or has already matched.  
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return; // If the element is not a card or has already matched, the function returns early, ignoring any further actions for this particular click.
    } 

    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    
    // If two cards have been selected, delay the execution of the checkMatch function by 500 milliseconds to allow the player to see both selected cards before their comparison. 
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }

}

// Create the checkMatch function() to evaluate the two selected card match eatch other. 
function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // If wrong, reset the text content to ? and the background colour to #ddd 
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }

    selectedCards = [];
}

// Create the startGame() function to start the game
function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    // Reset 
    cards = shuffle(colours.concat(colours)); // Shuffle again
    selectedCards = []; 
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

// Create the startGameTimer function to manage, update and handle the game and timer.
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    // Initialise an interval that triggers every second to update the timer. 
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            // This line is redundant as it re-declares 'timeLeft' within the scope of this block, resetting it to 30, but it does not affect the 'timeLeft' used in the interval.
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);

}

startbtn.addEventListener('click', startGame);
