/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Get phrases for use in game 
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {  
        const phraseArray = [
            "A dime a dozen",
            "My cup of tea",
            "Close but no cigar",
            "On cloud nine",
            "Happy as a clam"
        ];  
        return phraseArray.map(phrase => new Phrase(phrase));
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction() {

    }
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won 
    */
    checkForWin() {
        let result = 0;
        const phraseLi = document.querySelectorAll('#phrase ul li');
        for (let i = 0; i < phraseLi.length; i++) {
            if (phraseLi[i].classList.contains('hide')) {
                result += 1;
            } 
        }
        if (result > 0) {
            return false;
        } else if (result === 0) {
            return true;
        }
    }
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const heartImg = document.querySelectorAll('.tries img');
        heartImg[this.missed].src = 'images/lostHeart.png'
        this.missed += 1;
        if (this.missed === 5) {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'flex';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            document.getElementById('game-over-message').innerHTML = 'Sorry, better luck next time!';
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if (gameWon && this.missed < 5) {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'flex';
            overlay.classList.remove('start');
            overlay.classList.add('win');
            document.getElementById('game-over-message').innerHTML = 'Congrats, you won!';
        }
    };
}