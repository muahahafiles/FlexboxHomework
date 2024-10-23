// Initial flashcard examples
const flashcards = [
    { term: "Orion", definition: "The Hunter" },
    { term: "Cassiopeia", definition: "The Queen" },
    { term: "Ursa Major", definition: "The Great Bear" }
];

let currentIndex = 0;
let showingTerm = true;

// Displays the current card's term or definition
function displayCard() {
    let ptag = document.getElementById('card-content');

    if (showingTerm) {
        ptag.innerText = flashcards[currentIndex].term;
    } else {
    
        ptag.innerText = `"${flashcards[currentIndex].definition}"`;
    }
}

// Flips the card 
function flipCard() {
    showingTerm = !showingTerm; // Switch between showing term and definition
    displayCard();  // Re-display the card based on the updated showingTerm state
}

// Moves to the next card
function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length; // Loops around
    showingTerm = true; // Resets to show the term first when moving to the next card
    displayCard();
}

// Moves to the previous card
function previousCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length; 
    showingTerm = true;
    displayCard();
}

// Function to add a new flashcard
function addCard() {
    let termInput = document.getElementById('term-input').value;
    let definitionInput = document.getElementById('definition-input').value;

    if (termInput && definitionInput) {
        // Add new flashcard to the array
        flashcards.push({ term: termInput, definition: definitionInput });
        document.getElementById('term-input').value = ''; // Clear input fields
        document.getElementById('definition-input').value = '';
        alert('New constellation added!');
    } else {
        alert('Please fill in both fields.');
    }
}

// Event listeners for buttons
document.getElementById('next').addEventListener('click', nextCard);
document.getElementById('previous').addEventListener('click', previousCard);
document.getElementById('flashcard').addEventListener('click', flipCard); 
document.getElementById('add-card-button').addEventListener('click', addCard);

// Loads the first card when the page is loaded
window.onload = displayCard;


