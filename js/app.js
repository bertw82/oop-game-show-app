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

// listen for keydown event
document.addEventListener('keydown', (e) => {
    const keyPressed = e.key;
    if (game.activePhrase.checkLetter(keyPressed)) {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].textContent === keyPressed) {
                keys[i].classList.add('chosen', 'animate__animated', 'animate__pulse');
                keys[i].disabled = true;
                game.activePhrase.showMatchedLetter(keyPressed);
                game.gameOver(game.checkForWin());
            }
        }
    } else {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].textContent === keyPressed && keys[i].disabled === false) {
                keys[i].disabled = true;
                keys[i].classList.add('wrong', 'animate__animated', 'animate__headShake');
                game.removeLife();
            }
        }
    }
});