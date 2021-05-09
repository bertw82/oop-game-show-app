/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startBtn = document.getElementById('btn__reset');

// Start game
startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    document.getElementById('game-over-message').classList.remove('animate__animated', 'animate__lightSpeedInRight', 'animate__lightSpeedInLeft');
});

// listen for webpage keyboard click event and keyboard keydown event
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('click', () => {
    game.handleInteraction(key.textContent);
}));

document.addEventListener('keydown', (e) => {
    game.handleInteraction(e.key);
});