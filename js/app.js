/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startBtn = document.getElementById('btn__reset');

// Start game
startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// listen for keyboard click event
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', () => {
    game.handleInteraction(key);
}));